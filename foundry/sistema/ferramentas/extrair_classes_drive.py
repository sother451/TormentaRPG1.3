"""
Lê as classes do compêndio original (Google Drive) e gera data/classes-progressao.json:
para cada classe, PV, perícias, tabela de progressão do 1º ao 20º nível (BBA e habilidades),
o texto de cada habilidade e os talentos de classe por faixa (4º, 8º, 12º, 16º, 20º).

Uso (na pasta foundry/sistema):
    python ferramentas/extrair_classes_drive.py            # baixa do Drive
    python ferramentas/extrair_classes_drive.py <pasta>    # usa .txt já baixados (nome: pasta--classe.txt)

Só usa a biblioteca padrão do Python. As pastas do Drive são públicas (links do índice do compêndio).
"""
import html
import json
import pathlib
import re
import sys
import unicodedata
import urllib.request

PASTA_BASICAS = "1us6bTkPn5hLQOe9oVTKNQn6cktYn6aZ_"
PASTA_PRESTIGIO = "1jUuCrEp_gyudSOaFqQkBMUc7B-Q_gBGf"
SAIDA = pathlib.Path(__file__).resolve().parent.parent / "data" / "classes-progressao.json"
IGNORAR = {"modelo", "companheiro-automato"}   # modelo vazio; o autômato é um companheiro, não uma classe
SEPARADOR = "________________"


def slug(t):
    t = unicodedata.normalize("NFD", t).encode("ascii", "ignore").decode().lower()
    return re.sub(r"[^a-z0-9]+", "-", t).strip("-")


def nome_base(t):
    """ "Fúria 2/dia", "Sentir Armadilhas +4", "Impor de Mãos 1d8+1" -> nome da habilidade."""
    t = re.sub(r"\(.*?\)", "", t).strip().rstrip(":").strip()
    return re.sub(r"\s*[+\-]?\d[\w/+\-]*$", "", t).strip()


def chave(t):
    """Nome comparável: sem acento, sem parênteses e números do fim, sem "de/do/da", sem plural."""
    palavras = [p.rstrip("s") for p in slug(nome_base(t)).split("-")
                if p not in ("de", "do", "da", "dos", "das", "e", "o", "a")]
    return "-".join(p for p in palavras if p)


def baixar(url):
    with urllib.request.urlopen(url, timeout=120) as r:
        return r.read().decode("utf-8-sig")


def listar_pasta(pasta):
    s = baixar(f"https://drive.google.com/embeddedfolderview?id={pasta}")
    return [(html.unescape(t), h) for h, t in
            re.findall(r'<a href="([^"]+)"[^>]*>.*?<div class="flip-entry-title">(.*?)</div>', s, re.S)]


def documentos():
    """(categoria, grupo, título, texto) de cada documento de classe."""
    for categoria, pasta in (("basica", PASTA_BASICAS), ("prestigio", PASTA_PRESTIGIO)):
        for titulo, link in listar_pasta(pasta):
            sub = re.search(r"folders/([^?/]+)", link)
            itens = listar_pasta(sub.group(1)) if sub else [(titulo, link)]
            for t, l in itens:
                doc = re.search(r"document/d/([^/]+)", l)
                if doc:
                    texto = baixar(f"https://docs.google.com/document/d/{doc.group(1)}/export?format=txt")
                    yield categoria, titulo, t, texto


def documentos_locais(pasta):
    for arq in sorted(pathlib.Path(pasta).glob("*.txt")):
        grupo, nome = arq.stem.split("--", 1)
        categoria = "prestigio" if grupo == "prestigio" else "basica"
        yield categoria, grupo, nome, arq.read_text(encoding="utf-8-sig")


def dividir_fora_de_parenteses(texto):
    partes, atual, nivel = [], "", 0
    for c in texto:
        nivel += c == "("
        nivel -= c == ")"
        if c == "," and nivel == 0:
            partes.append(atual)
            atual = ""
        else:
            atual += c
    partes.append(atual)
    return [p.strip() for p in partes if p.strip() and p.strip() not in ("-", "??")]


def ler_tabela(texto):
    """Tabela do topo: células são linhas que começam com tabulação (vazias = só a tabulação)."""
    topo = texto.split(SEPARADOR, 1)[0]
    celulas = [l[1:].strip() for l in topo.split("\n")[1:] if l.startswith("\t")]
    inicio = next(i for i, c in enumerate(celulas) if re.fullmatch(r"1[º°]", c))
    cabecalho = celulas[:inicio]               # "BBA", "" (habilidades), e às vezes "Magias"/"Truques"
    colunas = 1 + len(cabecalho)
    extra = cabecalho[2] if len(cabecalho) > 2 else None
    linhas = []
    resto = celulas[inicio:]
    for i in range(0, len(resto) - colunas + 1, colunas):
        bloco = resto[i:i + colunas]
        m = re.fullmatch(r"(\d+)[º°]", bloco[0])
        if not m:
            break
        # A coluna BBA dos documentos não é usada: no Tormenta 1.3 o BBA é igual ao nível em todas as classes.
        linha = {"nivel": int(m.group(1)),
                 "habilidades": dividir_fora_de_parenteses(bloco[2]) if len(bloco) > 2 else []}
        if extra:
            linha["extra"] = bloco[3]
        linhas.append(linha)
    return linhas, extra


def campo(texto, rotulo):
    m = re.search(rf"^{rotulo}:\s*(.+)$", texto, re.M)
    return m.group(1).strip() if m else ""


def ler_talentos(texto, nome):
    """Talentos de classe: depois do título "Talentos de <classe>", blocos nome / pré-requisito / texto."""
    m = None
    for m in re.finditer(r"^Talentos d[eo] .+$", texto, re.M):
        pass
    if not m:
        return []
    trecho = texto[m.end():]
    talentos = []
    for bloco in trecho.split(SEPARADOR):
        linhas = [l.strip() for l in bloco.strip().split("\n") if l.strip()]
        i = next((k for k, l in enumerate(linhas) if re.match(r"Pr[ée]-?[Rr]equisitos?:", l)), None)
        if i is None or i == 0:
            continue
        nivel = re.search(r"(\d+)[º°]", linhas[i])
        talentos.append({
            "nome": linhas[i - 1],
            "nivel": int(nivel.group(1)) if nivel else 0,
            "prerequisito": re.sub(r"^Pr[ée]-?[Rr]equisitos?:\s*", "", linhas[i]),
            "descricao": "\n".join(linhas[i + 1:])
        })
    return talentos


def ler_habilidades(texto, nomes):
    """Texto de cada habilidade da tabela: o parágrafo depois da linha com o nome dela."""
    corpo = texto.split(SEPARADOR, 1)[1] if SEPARADOR in texto else texto
    linhas = corpo.split("\n")
    titulos = {i: chave(l) for i, l in enumerate(linhas) if l.strip() and len(l.strip()) < 60
               and not l.strip().endswith(".") and not l.startswith(("*", "\t"))}
    procurados = {chave(n) for n in nomes}
    achados = {}
    for i, k in titulos.items():
        if k in procurados and k not in achados:
            fim = next((j for j in range(i + 1, len(linhas))
                        if (j in titulos and titulos[j] in procurados) or linhas[j].startswith(SEPARADOR)
                        or re.match(r"^Talentos d[eo] ", linhas[j])), len(linhas))
            achados[k] = "\n".join(l.strip() for l in linhas[i + 1:fim] if l.strip())
    return achados


def classe(categoria, grupo, titulo, texto):
    tabela, extra = ler_tabela(texto)
    nomes = sorted({h for l in tabela for h in l["habilidades"] if chave(h)})
    textos = ler_habilidades(texto, nomes)
    habilidades = []
    for n in sorted({chave(h) for h in nomes}):
        original = next(h for h in nomes if chave(h) == n)
        descricao = textos.get(n, "")
        habilidades.append({
            "id": n, "nome": nome_base(original), "descricao": descricao,
            # "Você recebe um talento adicional ... talentos de classe do 20º Nível" (Senhor da Guerra etc.)
            "talentoDoVigesimo": bool(re.search(r"talentos de classe do 20", descricao, re.I))
        })
    pv = re.search(r"começa com (\d+) pontos de vida.*?ganha (\d+) PV", texto, re.S)
    pv_prestigio = re.search(r"ganha (\d+) PV", texto)
    return {
        "id": slug(titulo),
        "nome": titulo.split(" / ")[0].strip(),
        "grupo": grupo,
        "categoria": categoria,
        "pvInicial": int(pv.group(1)) if pv else 0,
        "pvPorNivel": int(pv.group(2)) if pv else (int(pv_prestigio.group(1)) if pv_prestigio else 0),
        "periciasTreinadas": campo(texto, "Perícias treinadas"),
        "periciasDeClasse": campo(texto, "Perícias de Classe"),
        "talentosAdicionais": campo(texto, "Talentos Adicionais"),
        "requisitos": re.sub(r"\s+", " ", (re.search(r"Requisitos\s*\n(.+?)" + SEPARADOR, texto, re.S) or [None, ""])[1]).strip()
        if categoria == "prestigio" else "",
        "colunaExtra": extra,
        "tabela": tabela,
        "habilidades": habilidades,
        "talentos": ler_talentos(texto, titulo),
    }


def main():
    fonte = documentos_locais(sys.argv[1]) if len(sys.argv) > 1 else documentos()
    classes = []
    for categoria, grupo, titulo, texto in fonte:
        if slug(titulo) in IGNORAR or "Nível" not in texto[:20]:
            continue
        c = classe(categoria, grupo, titulo, texto)
        semTexto = [h["nome"] for h in c["habilidades"] if not h["descricao"]]
        print(f"{c['nome']:<28} niveis {len(c['tabela']):>2} | habilidades {len(c['habilidades']):>2}"
              f" (sem texto: {len(semTexto)}) | talentos {len(c['talentos']):>2} | PV {c['pvInicial']}/{c['pvPorNivel']}"
              + (f" | sem texto: {', '.join(semTexto)}" if semTexto else ""))
        classes.append(c)
    SAIDA.write_text(json.dumps(classes, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"{len(classes)} classes -> {SAIDA}")


if __name__ == "__main__":
    main()
