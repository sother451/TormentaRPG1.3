"""
Converte a ficha do Roll20 (original/fichaTormenta.html + .css) para o Foundry:

  templates/actor/ficha-roll20.hbs   template Handlebars com a mesma estrutura e classes
  styles/ficha-roll20.css            CSS original, escopado para a ficha do Foundry
  module/roll20/campos.mjs           campos salvos, campos calculados, fórmulas e macros

Uso (na pasta foundry/sistema):  python ferramentas/roll20/converter.py

Regras da conversão (as mesmas do Roll20):
- Um campo com fórmula (value="(@{meio_nivel} + ...)") ou só de leitura é CALCULADO: não é salvo,
  o motor (module/roll20/motor.mjs) calcula. Os demais campos são SALVOS em system.<nome>.
- Nomes ficam em minúsculas e "-" vira "_" (no Roll20 os nomes não diferenciam maiúsculas).
- Seções repetíveis viram system.rep_<seção>.<id>.<campo>, com um bloco {{#each}}.
- Botões de rolagem guardam a macro original; a ficha a interpreta ao clicar.
Só usa a biblioteca padrão do Python.
"""
import html
import html.parser
import json
import pathlib
import re

AQUI = pathlib.Path(__file__).resolve().parent
SISTEMA = AQUI.parent.parent
ORIGINAL = AQUI / "original"

ABAS = ["personagem", "parametro", "ataque", "habilidade", "magia", "inventario", "nota", "configuracao"]
# Estados só de interface (no Roll20 eram atributos escondidos mudados por botões).
ESTADO_UI = {"sheettab": "aba", "tab_magias": "tab_magias", "tab_filtro": "tab_filtro", "filtro_cor": "filtro_cor"}

# Saídas dos scripts (sheet workers) do Roll20: sempre calculadas, mesmo quando o HTML as mostra editáveis.
SAIDAS_DE_SCRIPT = {
    "for", "des", "con", "int", "sab", "car",
    "for_mod", "des_mod", "con_mod", "int_mod", "sab_mod", "car_mod",
    "nivel", "bba", "pv_classes", "ca_des", "furtividade_tamanho", "peso_dinheiro", "peso_inventario",
}
# Alvos da lista de modificadores ("parametroLista" no script do Roll20): o script sobrescreve todos.
ALVOS_DE_MODIFICADOR = [
    "acrobacia_outros", "adestrar_animais_outros", "ataque_cac_outros", "ataque_dis_outros", "ataques_outros",
    "atletismo_outros", "atuacao_outros", "ca_outros", "car_outros", "cavalgar_outros", "con_outros",
    "conhecimento_outros", "curar_outros", "dano_cac_outros", "dano_dis_outros", "dano_magia_outros", "danos_outros",
    "des_outros", "diplomacia_outros", "enganacao_outros", "for_outros", "fortitude_outros", "furtividade_outros",
    "habilidades_outros", "identificar_magia_outros", "iniciativa_outros", "int_outros", "intimidacao_outros",
    "intuicao_outros", "jogatina_outros", "ladinagem_outros", "magia_cd_outros", "meditacao_outros", "nenhum_outros",
    "obter_informacao_outros", "oficio_outros", "percepcao_outros", "pericias_outros", "pm_outros", "pv_outros",
    "pvnivel_outros", "reflexo_outros", "resistencias_outros", "sab_outros", "sobrevivencia_outros", "testes_outros",
    "toque_cac_outros", "toque_dis_outros", "toques_outros", "usos_diarios_outros", "vontade_outros",
]
SAIDAS_DE_SCRIPT |= set(ALVOS_DE_MODIFICADOR)


class ContadorDeMacros:
    """Botões de rolagem com o mesmo nome (o original repete "roll_Melee-Attack-Roll") ganham sufixo."""
    def __init__(self):
        self.vistos = {}

    def chave(self, secao, nome):
        base = f"{secao or ''}:{norm(nome)}"
        n = self.vistos.get(base, 0)
        self.vistos[base] = n + 1
        return base if n == 0 else f"{base}_{n + 1}"
SAIDAS_DE_SCRIPT_REP = {"class": {"xclasse_pvclasse"}, "mods": {"xmod_total"}}
for n in range(10):
    SAIDAS_DE_SCRIPT_REP[f"magias{n}"] = {"xmagias_show"}

ESCOLHIDA = {}
ICONES_DE_ACAO = {"abrir_filtro": "fa-filter", "abrir_grimorio": "fa-book"}

VAZIOS = {"input", "br", "hr", "img", "meta", "link", "col", "area", "base", "wbr", "source"}


def norm(nome: str) -> str:
    return nome.lower().replace("-", "_").replace("$", "s")


def esc_hbs(texto: str) -> str:
    """Chaves literais não podem ser lidas pelo Handlebars."""
    return texto.replace("{{", "\\{{")


def attr_html(nome, valor):
    if valor is None:
        return f" {nome}"
    return f' {nome}="{esc_hbs(html.escape(valor, quote=True))}"'


# --------------------------------------------------------------------------------------------
# 1ª passada: inventário de todos os campos, para decidir o que é salvo e o que é calculado.
# --------------------------------------------------------------------------------------------
class Inventario(html.parser.HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.secao = None
        self.campos = {}          # (secao, nome) -> info
        self.select = None
        self.textarea = None
        self.macros = {}          # "secao:roll" -> texto
        self.contador = ContadorDeMacros()

    def _campo(self, nome, tag, a):
        chave = (self.secao, norm(nome))
        info = self.campos.setdefault(chave, {"ocorrencias": [], "opcoes": [], "original": nome})
        info["ocorrencias"].append({"tag": tag, **a})
        return info

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "fieldset":
            self.secao = norm(a.get("class", "").replace("repeating_", "").split()[0])
        nome = a.get("name", "")
        if tag in ("input", "select", "textarea") and nome.startswith("attr_"):
            info = self._campo(nome[5:], tag, a)
            if tag == "select":
                self.select = info
            if tag == "textarea":
                self.textarea = (info, [])
        if tag == "option" and self.select is not None:
            self.select["opcoes"].append({"valor": a.get("value"), "selected": "selected" in a, "rotulo": ""})
        if tag == "button" and a.get("type") == "roll" and nome.startswith("roll_"):
            self.macros[self.contador.chave(self.secao, nome[5:])] = a.get("value", "")

    def handle_data(self, data):
        if self.select is not None and self.select["opcoes"]:
            op = self.select["opcoes"][-1]
            op["rotulo"] += data
        if self.textarea is not None:
            self.textarea[1].append(data)

    def handle_endtag(self, tag):
        if tag == "fieldset":
            self.secao = None
        if tag == "select":
            self.select = None
        if tag == "textarea" and self.textarea:
            info, partes = self.textarea
            info["texto"] = "".join(partes)
            self.textarea = None


def classificar(inv: Inventario):
    """Devolve (salvos, calculados) por seção: {secao: {nome: definição}}."""
    salvos, calculados = {}, {}
    for (secao, nome), info in inv.campos.items():
        occ = info["ocorrencias"]
        if secao is None and nome in ESTADO_UI or nome == "character_name":
            continue
        forcados = SAIDAS_DE_SCRIPT if secao is None else SAIDAS_DE_SCRIPT_REP.get(secao, set())
        valor = next((o.get("value") for o in occ if o.get("value") is not None), None)
        formula = any("@{" in (o.get("value") or "") for o in occ if o["tag"] == "input")
        editavel = [o for o in occ if not (o["tag"] == "input" and o.get("type") == "hidden")
                    and "readonly" not in o and "disabled" not in o]
        destino = salvos if (editavel and not formula and nome not in forcados) else calculados
        visiveis = [o for o in editavel if "display:none" not in (o.get("style") or "").replace(" ", "")]
        primeiro = (visiveis or editavel)[0] if (destino is salvos) else occ[0]
        tag, tipo = primeiro["tag"], primeiro.get("type", "text")
        d = {"original": info["original"]}
        if destino is salvos:
            # Qual ocorrência do campo envia o valor pelo formulário (a primeira visível);
            # as outras viram "espelhos" (data-campo) que a ficha salva por conta própria.
            ESCOLHIDA[(secao, nome)] = occ.index(primeiro)
        if destino is calculados:
            d["padrao"] = valor if valor is not None else ""
        elif tag == "select":
            ops = [(o["valor"] if o["valor"] is not None else o["rotulo"].strip()) for o in info["opcoes"]]
            escolhida = next((o for o in info["opcoes"] if o["selected"]), info["opcoes"][0] if info["opcoes"] else None)
            d.update(tipo="texto", inicial=(escolhida["valor"] if escolhida and escolhida["valor"] is not None
                                            else (escolhida["rotulo"].strip() if escolhida else "")), opcoes=ops)
        elif tag == "textarea":
            d.update(tipo="texto", inicial=info.get("texto", ""))
        elif tipo == "checkbox":
            d.update(tipo="marcado", inicial=any("checked" in o for o in occ),
                     valorMarcado=primeiro.get("value", "on"))
        elif tipo == "number":
            try:
                ini = float(valor) if valor not in (None, "") else 0
            except ValueError:
                ini = 0
            d.update(tipo="numero", inicial=int(ini) if float(ini).is_integer() else ini)
        else:
            d.update(tipo="texto", inicial=valor or "")
        destino.setdefault(secao or "", {})[nome] = d
    return salvos, calculados


# --------------------------------------------------------------------------------------------
# 2ª passada: reescreve o HTML como template Handlebars.
# --------------------------------------------------------------------------------------------
class Conversor(html.parser.HTMLParser):
    def __init__(self, salvos, calculados):
        super().__init__(convert_charrefs=False)
        self.salvos, self.calculados = salvos, calculados
        self.saida = []
        self.secao = None
        self.select = None          # (expressão do valor, salvo?)
        self.textarea = None
        self.ocorrencias = {}       # quantas vezes cada campo já apareceu
        self.contador = ContadorDeMacros()

    def ref(self, nome):
        return f"v.{nome}"

    def caminho(self, nome):
        return f"system.{nome}" if self.secao is None else f"system.rep_{self.secao}.{{{{id}}}}.{nome}"

    def eh_salvo(self, nome):
        return nome in self.salvos.get(self.secao or "", {})

    def emitir_tag(self, tag, attrs, extra="", fechar=False):
        partes = "".join(attr_html(k, v) for k, v in attrs)
        self.saida.append(f"<{tag}{partes}{extra}{' /' if fechar else ''}>")

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        nome_attr = a.get("name", "")
        resto = [(k, v) for k, v in attrs if k not in ("name", "value", "checked", "selected")]

        if tag == "fieldset":
            self.secao = norm(a.get("class", "").replace("repeating_", "").split()[0])
            self.saida.append(
                f'<div class="repcontainer" data-secao="{self.secao}">{{{{#each @root.reps.{self.secao}}}}}'
                f'<div class="repitem" data-linha="{{{{id}}}}"><div class="itemcontrol">'
                f'<button type="button" class="repcontrol_del" data-action="repApagar" title="Apagar">✕</button></div>')
            return

        if tag in ("input", "select", "textarea") and nome_attr.startswith("attr_"):
            nome = norm(nome_attr[5:])
            tipo = a.get("type", "text")
            if self.secao is None and nome in ESTADO_UI:
                self.emitir_tag(tag, resto, f' value="{{{{@root.ui.{ESTADO_UI[nome]}}}}}"')
                return
            if nome == "character_name":
                self.emitir_tag(tag, resto, ' name="name" value="{{@root.actor.name}}"')
                return
            chave = (self.secao, nome)
            n = self.ocorrencias.get(chave, 0)
            self.ocorrencias[chave] = n + 1
            salvo = self.eh_salvo(nome) and not (tag == "input" and tipo == "hidden")
            ligar = salvo and (n == ESCOLHIDA.get(chave) or tipo == "radio")
            if ligar:
                extra = f' name="{self.caminho(nome)}"'
            elif salvo:
                extra = f' data-campo="{self.caminho(nome)}"'
            else:
                extra = ""
            r = self.ref(nome)
            if tag == "input":
                if tipo == "checkbox":
                    extra += f" {{{{#if {r}}}}}checked{{{{/if}}}}"
                elif tipo == "radio":
                    extra += f' value="{html.escape(a.get("value", ""))}" {{{{#if (eq {r} "{a.get("value", "")}")}}}}checked{{{{/if}}}}'
                elif tipo == "hidden":
                    # Valor bruto, como o Roll20 guarda ("1"/"0", "@{ataque_dis}"): o CSS consulta esses campos.
                    extra += f' value="{{{{b.{nome}}}}}"'
                else:
                    extra += f' value="{{{{{r}}}}}"'
                    if tipo == "text":
                        resto = [(k, v) for k, v in resto if k != "title"]
                        extra += f' title="{{{{{r}}}}}"'
                self.emitir_tag(tag, resto, extra, fechar=True)
            elif tag == "select":
                self.select = r
                self.emitir_tag(tag, resto, extra)
            else:
                self.textarea = True
                self.emitir_tag(tag, resto, extra)
                self.saida.append(f"{{{{{r}}}}}")
            return

        if tag == "option" and self.select:
            valor = a.get("value")
            self.saida.append(("<option" + "".join(attr_html(k, v) for k, v in resto)) +
                              (attr_html("value", valor) if valor is not None else "") + "__SELECIONADA__>")
            self._opcao_pendente = (len(self.saida) - 1, valor)
            return

        if tag == "button" and a.get("type") == "roll" and nome_attr.startswith("roll_"):
            resto = [(k, v) for k, v in resto if k != "type"]
            chave = self.contador.chave(self.secao, nome_attr[5:])
            self.emitir_tag(tag, resto, f' type="button" data-action="rolar" data-macro="{chave}"')
            self.botao = len(self.saida)
            return
        if tag == "button" and a.get("type") == "action" and nome_attr.startswith("act_"):
            acao = nome_attr[4:]
            resto = [(k, v) for k, v in resto if k != "type"]
            if acao in ABAS:
                extra = f' type="button" data-action="aba" data-aba="{acao}" name="{nome_attr}"'
            elif self.secao:
                # Qualquer botão de ação dentro de uma seção dispara clicked:repeating_<seção>.
                extra = ' type="button" data-action="repRolar"'
            else:
                extra = f' type="button" data-action="{acao}"'
            self.emitir_tag(tag, resto, extra)
            self.botao = len(self.saida)
            self.icone = ICONES_DE_ACAO.get(acao)
            return

        self.emitir_tag(tag, attrs, fechar=False)

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag == "textarea":
            self.handle_endtag("textarea")

    def handle_data(self, data):
        if self.textarea:
            return
        if self.select and getattr(self, "_opcao_pendente", None):
            i, valor = self._opcao_pendente
            if valor is None:
                valor = html.unescape(data).strip()
            self.saida[i] = self.saida[i].replace(
                "__SELECIONADA__", f' {{{{#if (eq {self.select} "{html.escape(valor, quote=True)}")}}}}selected{{{{/if}}}}')
            self._opcao_pendente = None
        self.saida.append(esc_hbs(data))

    def handle_entityref(self, name):
        if not self.textarea:
            self.saida.append(f"&{name};")

    def handle_charref(self, name):
        if not self.textarea:
            self.saida.append(f"&#{name};")

    def handle_endtag(self, tag):
        if tag == "fieldset":
            s = self.secao
            self.saida.append(
                f'</div>{{{{/each}}}}</div><div class="repcontrol"><button type="button" class="repcontrol_add" '
                f'data-action="repAdicionar" data-secao="{s}">+ Adicionar</button></div>')
            self.secao = None
            return
        if tag == "option" and getattr(self, "_opcao_pendente", None):
            i, valor = self._opcao_pendente
            self.saida[i] = self.saida[i].replace(
                "__SELECIONADA__", f' {{{{#if (eq {self.select} "{html.escape(valor or "", quote=True)}")}}}}selected{{{{/if}}}}')
            self._opcao_pendente = None
        if tag == "select":
            self.select = None
        if tag == "textarea":
            if not self.textarea:
                return              # </textarea> solto: o textarea já foi fechado
            self.textarea = None
        if tag == "button" and getattr(self, "botao", None) is not None:
            texto = "".join(self.saida[self.botao:]).strip()
            icone = getattr(self, "icone", None)
            if icone:                    # letras das fontes de ícones do Roll20 (Pictos)
                self.saida[self.botao:] = [f'<i class="fa-solid {icone}"></i>']
            elif texto in ("", "t"):     # "t" na fonte dicefontd20 do Roll20 é o desenho do d20
                self.saida[self.botao:] = ['<i class="fa-solid fa-dice-d20"></i>']
            self.botao = None
            self.icone = None
        if tag in VAZIOS:
            return
        self.saida.append(f"</{tag}>")

    def handle_comment(self, data):
        pass


# --------------------------------------------------------------------------------------------
# CSS: escopo dentro da ficha do Foundry.
# --------------------------------------------------------------------------------------------
ESCOPO = ".tormenta13-r20 .charsheet"

# Seletores do CSS original que não entram (comparados sem espaços):
# - o botão de rolar perícia sumia quando a perícia não era treinada; no 1.3 pode rolar sem treino.
SELETORES_REMOVIDOS = {".check-pericia-treinada-show:not(:checked)~.button-pericia-treinada"}


def escopar_css(css: str) -> str:
    css = re.sub(r"/\*.*?\*/", "", css, flags=re.S)
    css = css.replace("; !important", " !important;")   # o original tem "!important" fora da declaração

    def seletor(s):
        s = s.strip()
        s = re.sub(r"^\.ui-dialog\s+", "", s)
        if s.startswith(".charsheet"):
            return ".tormenta13-r20 " + s
        return f"{ESCOPO} {s}"

    saida = []
    for sel, corpo in regras_css(css):
        partes = [s for s in dividir_fora_de_aspas(sel, ",")
                  if s.strip() and re.sub(r"\s+", "", s) not in SELETORES_REMOVIDOS]
        if not partes:
            continue
        sel = ",\n".join(seletor(s) for s in partes)
        saida.append(f"{sel} {{{corpo.rstrip()}\n}}")
    return "\n\n".join(saida)


def dividir_fora_de_aspas(texto, separador):
    partes, atual, aspas = [], "", None
    for c in texto:
        if aspas:
            aspas = None if c == aspas else aspas
        elif c in "\"'":
            aspas = c
        elif c == separador:
            partes.append(atual)
            atual = ""
            continue
        atual += c
    partes.append(atual)
    return partes


def regras_css(css):
    """(seletor, corpo) de cada regra; chaves dentro de aspas (ex.: [value="@{x}"]) não contam."""
    regras, atual, aspas, seletor = [], "", None, None
    for c in css:
        if aspas:
            aspas = None if c == aspas else aspas
        elif c in "\"'":
            aspas = c
        elif c == "{" and seletor is None:
            seletor, atual = atual.strip(), ""
            continue
        elif c == "}" and seletor is not None:
            regras.append((seletor, atual))
            seletor, atual = None, ""
            continue
        atual += c
    return regras


# CSS próprio do Foundry: antes do CSS original (base) e depois dele (ajustes, que ganham do original).
CABECALHO_CSS = "/* Gerado por ferramentas/roll20/converter.py a partir da ficha do Roll20. Não edite à mão. */\n"


# Tormenta 1.3 (compendium, Perícias): só podem ser usadas por quem é treinado.
SO_TREINADAS = ["adestrar_animais", "conhecimento", "identificar_magia", "ladinagem"]
# Perícias que se dividem em várias (uma linha por especialidade).
ESPECIALIZAVEIS = ["atuacao", "conhecimento", "oficio"]


def regras_de_treino(template):
    """- Perícias só treinadas: o botão de rolar só aparece com a perícia marcada como treinada.
    - Atuação/Conhecimento/Ofício: "+ Adicionar" especialidade só aparece com a perícia base treinada."""
    def rolagem(m):
        return f"{{{{#if v.{m.group(2)}_treinada}}}}{m.group(1)}{{{{/if}}}}"
    padrao = r'(<button[^>]*data-macro=":teste_(' + "|".join(SO_TREINADAS) + r')"[^>]*>.*?</button>)'
    template, n = re.subn(padrao, rolagem, template, flags=re.S)
    assert n == len(SO_TREINADAS), f"botões de perícia só treinada encontrados: {n}"

    def adicionar(m):
        return f"{{{{#if @root.v.{m.group(2)}_treinada}}}}{m.group(1)}{{{{/if}}}}"
    padrao = r'(<div class="repcontrol"><button[^>]*data-secao="(' + "|".join(ESPECIALIZAVEIS) + r')">.*?</button></div>)'
    template, n = re.subn(padrao, adicionar, template, flags=re.S)
    assert n == len(ESPECIALIZAVEIS), f"botões de adicionar especialidade encontrados: {n}"
    return template


# Campos que não existem na ficha do Roll20 (só do Foundry):
# - inventário: de que tipo é o item do compêndio, os dados para equipar e se está equipado;
# - armas: de qual linha do inventário a arma veio (para desequipar).
CAMPOS_EXTRAS = {
    "itens": {
        "xitem_tipo": {"original": "(foundry)", "tipo": "texto", "inicial": ""},
        "xitem_dados": {"original": "(foundry)", "tipo": "texto", "inicial": ""},
        "xitem_equipado": {"original": "(foundry)", "tipo": "marcado", "inicial": False, "valorMarcado": "1"},
    },
    "arma": {"xarma_origem": {"original": "(foundry)", "tipo": "texto", "inicial": ""}},
}


def coluna_equipar(template):
    """Inventário: coluna "Equipar" para itens do compêndio que se equipam (arma, armadura, escudo, item mágico)."""
    cabecalho = ('<span class="sheet-table-header" style="width:40%;">Descrição</span>')
    assert template.count(cabecalho) == 1, "cabeçalho do inventário não encontrado"
    template = template.replace(cabecalho, '<span class="sheet-table-header" style="width:32%;">Descrição</span>'
                                '<span class="sheet-table-header" style="width:8%;">Equipar</span>')
    i = template.index('<div class="repcontainer" data-secao="itens">')
    j = template.index("{{/each}}", i)
    trecho = template[i:j]
    descricao = 'style="width:40%;"><input'
    assert trecho.count(descricao) == 1, "campo de descrição do inventário não encontrado"
    trecho = trecho.replace(descricao, 'style="width:32%;"><input')
    # A célula entra logo depois da descrição, dentro da mesma linha da tabela.
    fim_linha = trecho.index("</span>", trecho.index('style="width:32%;"><input')) + len("</span>")
    celula = ('<span class="sheet-table-data-center t13-equipar" style="width:8%;">'
              '{{#if v.xitem_tipo}}{{#unless (eq v.xitem_tipo "equipamento")}}'
              '<input type="checkbox" data-action="equipar" title="Equipar" {{#if v.xitem_equipado}}checked{{/if}} />'
              '{{/unless}}{{/if}}</span>')
    trecho = trecho[:fim_linha] + celula + trecho[fim_linha:]
    return template[:i] + trecho + template[j:]


def separar_abas(template):
    """Tira o bloco <div class="tab_group">...</div> do corpo da ficha."""
    inicio = template.index('<div class="tab_group">')
    nivel, i = 0, inicio
    while True:
        abre = template.find("<div", i)
        fecha = template.find("</div>", i)
        if abre != -1 and abre < fecha:
            nivel, i = nivel + 1, abre + 4
        else:
            nivel, i = nivel - 1, fecha + 6
            if nivel == 0:
                break
    return template[inicio:i], template[:inicio] + template[i:]


def main():
    fonte = (ORIGINAL / "fichaTormenta.html").read_text(encoding="utf-8")
    corpo = fonte[: fonte.find('<script type="text/worker">')]

    inv = Inventario()
    inv.feed(corpo)
    salvos, calculados = classificar(inv)
    for secao, campos in CAMPOS_EXTRAS.items():
        salvos.setdefault(secao, {}).update(campos)

    conv = Conversor(salvos, calculados)
    conv.feed(corpo)
    # A seta "<--" antes do botão de rolar perícia (texto solto do original) sai: desalinha os botões.
    template = "".join(conv.saida).replace("<--<input", "<input")
    template = regras_de_treino(template)
    template = coluna_equipar(template)
    abas, template = separar_abas(template)
    aviso = "{{!-- Gerado por ferramentas/roll20/converter.py a partir da ficha do Roll20. Não edite à mão. --}}\n"
    (SISTEMA / "templates" / "actor" / "ficha-roll20.hbs").write_text(
        aviso + '<div class="charsheet">\n' + template.strip() + "\n</div>\n", encoding="utf-8")
    (SISTEMA / "templates" / "actor" / "ficha-roll20-abas.hbs").write_text(
        aviso + '<div class="charsheet charsheet-abas">\n' + abas.strip() + "\n</div>\n", encoding="utf-8")

    css = (CABECALHO_CSS + (AQUI / "estilo-base.css").read_text(encoding="utf-8") + "\n"
           + escopar_css((ORIGINAL / "fichaTormenta.css").read_text(encoding="utf-8")) + "\n\n"
           + (AQUI / "estilo-ajustes.css").read_text(encoding="utf-8"))
    (SISTEMA / "styles" / "ficha-roll20.css").write_text(css, encoding="utf-8")

    macros = inv.macros
    secoes = sorted({s for (s, _) in inv.campos if s})
    dados = {
        "salvos": salvos.get("", {}),
        "calculados": {k: v["padrao"] for k, v in calculados.get("", {}).items()},
        "repetiveis": {s: {"salvos": salvos.get(s, {}),
                           "calculados": {k: v["padrao"] for k, v in calculados.get(s, {}).items()}}
                       for s in secoes},
        "macros": macros,
        "abas": ABAS,
        "alvosDeModificador": ALVOS_DE_MODIFICADOR,
    }
    js = ("// Gerado por ferramentas/roll20/converter.py a partir da ficha do Roll20. Não edite à mão.\n"
          "export const FICHA = " + json.dumps(dados, ensure_ascii=False, indent=1) + ";\n")
    (SISTEMA / "module" / "roll20" / "campos.mjs").write_text(js, encoding="utf-8")

    # Conflitos de nome depois da normalização
    por_norm = {}
    for (s, n), info in inv.campos.items():
        por_norm.setdefault((s, n), set()).add(info["original"])
    conflitos = {k: v for k, v in por_norm.items() if len({x.lower() for x in v}) > 1}

    ns = len(salvos.get("", {}))
    nc = len(calculados.get("", {}))
    print(f"campos salvos: {ns} | calculados: {nc} | seções repetíveis: {len(secoes)} | macros: {len(macros)}")
    for s in secoes:
        print(f"  {s}: {len(salvos.get(s, {}))} salvos, {len(calculados.get(s, {}))} calculados")
    if conflitos:
        print("ATENÇÃO, nomes que colidem:", conflitos)


if __name__ == "__main__":
    main()
