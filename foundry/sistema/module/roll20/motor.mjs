/**
 * Motor da ficha do Roll20 dentro do Foundry, sem depender do Foundry (testável em Node).
 *
 * Funciona como o Roll20:
 * - cada campo tem um valor "bruto" (texto). @{nome} é trocado pelo valor bruto do campo,
 *   recursivamente; campos calculados guardam a fórmula original da ficha;
 * - os scripts da ficha (sheet workers) foram portados para JavaScript em `rodarScripts`;
 * - dentro de uma linha de seção repetível, @{campo} procura primeiro na própria linha.
 *
 * A tabela de campos (FICHA) é gerada pelo conversor a partir do HTML do Roll20.
 */
import { FICHA } from "./campos.mjs";

export const norm = (nome) => String(nome).toLowerCase().replace(/-/g, "_").replace(/\$/g, "s");
const ATRIBUTOS = ["for", "des", "con", "int", "sab", "car"];
const REF = /@\{([^}]+)\}/g;
const MAX_PROFUNDIDADE = 40;

/* ------------------------------------------------------------------------------------------ */
/*  Aritmética segura (sem eval): números, + - * / %, parênteses, floor ceil round abs min max */
/* ------------------------------------------------------------------------------------------ */

const FUNCOES = { floor: Math.floor, ceil: Math.ceil, round: Math.round, abs: Math.abs, min: Math.min, max: Math.max };

export function avaliarAritmetica(expr) {
  const s = String(expr);
  let i = 0;
  const espacos = () => { while (i < s.length && /\s/.test(s[i])) i++; };
  const erro = () => { throw new Error(`Expressão inválida: ${s}`); };

  function primario() {
    espacos();
    const c = s[i];
    if (c === "(") { i++; const v = soma(); espacos(); if (s[i] !== ")") erro(); i++; return v; }
    if (c === "-") { i++; return -primario(); }
    if (c === "+") { i++; return primario(); }
    const num = /^\d*\.?\d+(?:e[+-]?\d+)?/i.exec(s.slice(i));
    if (num) { i += num[0].length; return Number(num[0]); }
    const nome = /^[a-z]+/i.exec(s.slice(i));
    if (nome && FUNCOES[nome[0].toLowerCase()]) {
      i += nome[0].length; espacos();
      if (s[i] !== "(") erro();
      i++;
      const args = [soma()];
      espacos();
      while (s[i] === ",") { i++; args.push(soma()); espacos(); }
      if (s[i] !== ")") erro();
      i++;
      return FUNCOES[nome[0].toLowerCase()](...args);
    }
    erro();
  }
  function produto() {
    let v = primario();
    for (;;) {
      espacos();
      const c = s[i];
      if (c === "*") { i++; v *= primario(); } else if (c === "/") { i++; v /= primario(); }
      else if (c === "%") { i++; v %= primario(); } else return v;
    }
  }
  function soma() {
    let v = produto();
    for (;;) {
      espacos();
      const c = s[i];
      if (c === "+") { i++; v += produto(); } else if (c === "-") { i++; v -= produto(); } else return v;
    }
  }
  const v = soma();
  espacos();
  if (i < s.length) erro();
  return v;
}

/** Converte como o parseInt/parseFloat do Roll20 (texto vazio ou inválido = 0). */
export const inteiro = (v) => parseInt(v, 10) || 0;
export const decimal = (v) => parseFloat(v) || 0;

/* ------------------------------------------------------------------------------------------ */
/*  Contexto: valores de um personagem                                                          */
/* ------------------------------------------------------------------------------------------ */

export class FichaRoll20 {
  /**
   * @param {object} fonte   system do ator (campos salvos e rep_<seção>)
   * @param {object} [opcoes]
   * @param {string} [opcoes.nome]        nome do personagem (@{character_name})
   * @param {boolean} [opcoes.filtrando]  filtro de magias ligado
   */
  constructor(fonte = {}, { nome = "", filtrando = false } = {}) {
    this.nome = nome;
    this.filtrando = filtrando;
    this.salvos = {};
    this.script = {};
    for (const [k, def] of Object.entries(FICHA.salvos)) this.salvos[k] = paraBruto(fonte[k], def);
    this.reps = {};
    for (const [secao, defs] of Object.entries(FICHA.repetiveis)) {
      const linhas = Object.entries(fonte[`rep_${secao}`] ?? {})
        .map(([id, dados]) => ({ id, secao, ordem: Number(dados?.ordem) || 0, dados: dados ?? {} }))
        .sort((a, b) => a.ordem - b.ordem || a.id.localeCompare(b.id));
      for (const l of linhas) {
        l.salvos = {};
        l.script = {};
        for (const [k, def] of Object.entries(defs.salvos)) l.salvos[k] = paraBruto(l.dados[k], def);
      }
      this.reps[secao] = linhas;
    }
    this._cache = new Map();
    this.rodarScripts();
  }

  /** Valor bruto (texto, como o Roll20 guarda) de um campo; undefined se não existe. */
  bruto(nome, linha = null) {
    const k = norm(nome);
    if (k === "character_name") return this.nome;
    if (linha) {
      if (k in linha.script) return linha.script[k];
      if (k in linha.salvos) return linha.salvos[k];
      const calc = FICHA.repetiveis[linha.secao]?.calculados;
      if (calc && k in calc) return calc[k];
    }
    if (k in this.script) return this.script[k];
    if (k in this.salvos) return this.salvos[k];
    if (k in FICHA.calculados) return FICHA.calculados[k];
    return undefined;
  }

  /**
   * Troca @{nome} pelo valor bruto, recursivamente (como o Roll20 faz ao rolar).
   * Dentro de rolagens [[ ]] (ou com `numerico`), campo vazio ou inexistente vira 0.
   */
  expandir(texto, linha = null, { numerico = false } = {}, profundidade = 0) {
    if (profundidade > MAX_PROFUNDIDADE) throw new Error("Referência circular entre campos da ficha");
    const s = String(texto ?? "");
    if (!s.includes("@{")) return s;
    let saida = "";
    let ultimo = 0;
    for (const m of s.matchAll(REF)) {
      const antes = s.slice(0, m.index);
      const dentroDeRolagem = numerico || contar(antes, "[[") > contar(antes, "]]");
      let v = this.bruto(m[1], linha);
      if (v === undefined || v === null || String(v).trim() === "") v = dentroDeRolagem ? "0" : "";
      v = this.expandir(String(v), linha, { numerico: dentroDeRolagem }, profundidade + 1);
      saida += s.slice(ultimo, m.index) + v;
      ultimo = m.index + m[0].length;
    }
    return saida + s.slice(ultimo);
  }

  /** Valor final de um campo: número quando a fórmula é aritmética; senão o texto expandido. */
  valor(nome, linha = null) {
    const k = norm(nome);
    const chave = `${linha?.secao ?? ""}|${linha?.id ?? ""}|${k}`;
    if (this._cache.has(chave)) return this._cache.get(chave);
    const bruto = this.bruto(k, linha);
    let v;
    if (bruto === undefined) v = undefined;
    else {
      const texto = String(bruto);
      const ehFormula = texto.includes("@{") || /^[\s\d.+\-*/%()]*(?:(?:floor|ceil|round|abs|min|max)\(.*)?$/i.test(texto);
      if (ehFormula && texto.trim() !== "") {
        const expandido = this.expandir(texto, linha, { numerico: true });
        try { v = avaliarAritmetica(expandido); } catch { v = texto.includes("@{") ? this.expandir(texto, linha) : texto; }
      } else v = bruto;
    }
    this._cache.set(chave, v);
    return v;
  }

  /** Número de um campo (0 se não for numérico). */
  numero(nome, linha = null) {
    const v = this.valor(nome, linha);
    return typeof v === "number" && Number.isFinite(v) ? v : decimal(v);
  }

  /* ---------------------------------------------------------------------------------------- */
  /*  Scripts da ficha (sheet workers), na ordem em que dependem uns dos outros                 */
  /* ---------------------------------------------------------------------------------------- */

  rodarScripts() {
    this.scriptClasses();
    // Atributos e modificadores dependem um do outro ("Habilidades", "FOR"... somam em *_outros,
    // e um modificador pode usar o mod. de um atributo): repete até estabilizar.
    for (const alvo of FICHA.alvosDeModificador) this.script[alvo] = 0;
    for (let i = 0; i < 4; i++) {
      this.scriptAtributos();
      this.scriptModificadores();
    }
    this.scriptAtributos();
    this.scriptDesMaxima();
    this.scriptTamanho();
    this.scriptPeso();
    this.scriptFiltroDeMagias();
    this._cache.clear();
  }

  /** on("change:repeating_class"): nível, BBA e PV das classes. */
  scriptClasses() {
    let nivelTotal = 0, bbaTotal = 0, pvTotal = 0, multiclasse = 0;
    for (const l of this.reps.class ?? []) {
      multiclasse += 1;
      const nivel = inteiro(l.salvos.xclasse_nivel);
      const bba = decimal(l.salvos.xclasse_bba);
      const pv = inteiro(l.salvos.xclasse_pv);
      let pvClasse = 0;
      if (multiclasse === 1 && nivel !== 0) { pvTotal = pv * 3; pvClasse = pv * 3; }
      nivelTotal += nivel;
      bbaTotal += Math.floor(nivel * bba);
      pvTotal += nivel * pv;
      pvClasse += nivel * pv;
      l.script.xclasse_pvclasse = pvClasse;
    }
    Object.assign(this.script, { nivel: nivelTotal, bba: bbaTotal, pv_classes: pvTotal });
    this._cache.clear();
  }

  /** on("change:FOR_valor ..."): total e modificador = floor(total/2) - 5. */
  scriptAtributos() {
    for (const a of ATRIBUTOS) {
      const total = inteiro(this.salvos[`${a}_valor`]) + inteiro(this.script[`${a}_outros`]) + inteiro(this.salvos[`${a}_temp`]);
      this.script[a] = total;
      this.script[`${a}_mod`] = Math.floor(total / 2) - 5;
    }
    this._cache.clear();
  }

  /**
   * on("change:repeating_mods"): cada modificador equipado soma (mod. de atributo + extra) no alvo escolhido;
   * os alvos gerais ("Testes", "Habilidades", "Ataques", "Danos", "Resistências", "Perícias"...)
   * se espalham para os específicos.
   * Diferença do original: lá a soma podia concatenar texto ("0" + "2"); aqui é sempre numérica.
   */
  scriptModificadores() {
    const lista = Object.fromEntries(FICHA.alvosDeModificador.map((k) => [k, 0]));
    for (const l of this.reps.mods ?? []) {
      const hab = String(l.salvos.xmod_habilidade ?? "0").replace("@", "").replace("{", "").replace("}", "");
      const extra = inteiro(l.salvos.xmod_extra);
      const tipo = String(l.salvos.xmod_tipo ?? "").toLowerCase();
      const habMod = inteiro(this.bruto(hab) ?? 0);
      let total = habMod + extra;
      if (tipo === hab.replace("_mod", "")) total = 0;
      if (tipo === "habilidades" && hab.includes("_mod")) total = 0;
      l.script.xmod_total = total;
      if (String(l.salvos.xmod_equip) === "1") {
        const alvo = `${tipo.replace("ç", "c").replace(" ", "_").replace("/", "")}_outros`;
        lista[alvo] = (lista[alvo] ?? 0) + total;
      }
    }
    const { testes_outros: testes, habilidades_outros: habilidades, ataques_outros: ataques,
      toques_outros: toques, danos_outros: danos, resistencias_outros: resistencias, pericias_outros: pericias } = lista;
    const progressao = this.atributosDaProgressao();
    for (const a of ATRIBUTOS) lista[`${a}_outros`] += habilidades + (progressao[a] ?? 0);
    lista.ataque_cac_outros += ataques + testes;
    lista.ataque_dis_outros += ataques + testes;
    lista.toque_cac_outros += toques + testes;
    lista.toque_dis_outros += toques + testes;
    lista.dano_cac_outros += danos;
    lista.dano_dis_outros += danos;
    lista.dano_magia_outros += danos;
    for (const r of ["fortitude", "reflexo", "vontade"]) lista[`${r}_outros`] += resistencias + testes;
    for (const p of ["acrobacia", "adestrar_animais", "atletismo", "atuacao", "cavalgar", "conhecimento", "curar",
      "diplomacia", "enganacao", "furtividade", "identificar_magia", "iniciativa", "intimidacao", "intuicao",
      "ladinagem", "jogatina", "meditacao", "obter_informacao", "oficio", "percepcao", "sobrevivencia"]) {
      lista[`${p}_outros`] += pericias + testes;
    }
    Object.assign(this.script, lista);
    this._cache.clear();
  }

  /**
   * Foundry (aba Progressão): +1 no atributo escolhido em cada nível par já alcançado.
   * @returns {Record<string, number>} chave = atributo em minúsculas ("for")
   */
  atributosDaProgressao() {
    let escolhas = {};
    try { escolhas = JSON.parse(this.salvos.xprog_atributos || "{}") ?? {}; } catch { escolhas = {}; }
    const nivel = inteiro(this.script.nivel);
    const soma = {};
    for (const [n, atributo] of Object.entries(escolhas)) {
      const a = String(atributo ?? "").toLowerCase();
      if (ATRIBUTOS.includes(a) && Number(n) <= nivel) soma[a] = (soma[a] ?? 0) + 1;
    }
    return soma;
  }

  /** on("change:armadura_max_des ..."): Des na CA limitada pela armadura equipada. */
  scriptDesMaxima() {
    const armadura = inteiro(this.salvos.armadura_max_des);
    const des = inteiro(this.script.des_mod);
    const equip = inteiro(this.salvos.armadura_equipado);
    this.script.ca_des = des >= armadura && equip === 1 ? armadura : des;
  }

  /** on("change:tamanho"): modificador de tamanho em Furtividade. */
  scriptTamanho() {
    const t = inteiro(this.salvos.tamanho);
    const a = Math.abs(t);
    let furt = 0;
    if (a === 0) furt = t;
    if (a === 1 || a === 2) furt = t * 4;
    if (a === 4) furt = t * 3;
    if (a === 8) furt = t * 2;
    this.script.furtividade_tamanho = furt;
  }

  /** Peso do dinheiro (moedas × 0,01) e do inventário (quantidade × peso). */
  scriptPeso() {
    const moedas = ["ts", "tp", "to", "tl"].reduce((s, k) => s + inteiro(this.salvos[k]), 0);
    this.script.peso_dinheiro = Math.round(moedas * 0.01 * 100) / 100;
    this.script.peso_inventario = (this.reps.itens ?? [])
      .reduce((s, l) => s + inteiro(l.salvos.xitem_qtd) * decimal(l.salvos.xitem_peso), 0);
  }

  /** on("clicked:filtrar"): esconde as magias que não batem com o filtro. */
  scriptFiltroDeMagias() {
    const filtros = ["procedencia", "descritor", "tempo_execucao", "alcance", "efeito", "resistencia"];
    for (let n = 0; n <= 9; n++) {
      for (const l of this.reps[`magias${n}`] ?? []) {
        const passa = filtros.every((f) => {
          const filtro = this.salvos[`filtro_${f}`];
          return filtro === "Nenhum" || l.salvos[`xmagias_${f}`] === filtro;
        });
        l.script.xmagias_show = passa || !this.filtrando ? 1 : 0;
      }
    }
  }

  /* ---------------------------------------------------------------------------------------- */
  /*  Saída para a ficha e para as rolagens                                                     */
  /* ---------------------------------------------------------------------------------------- */

  /** Valores para o template: salvos como estão (marcados = true/false) e calculados avaliados. */
  paraTemplate(fonte = {}) {
    const v = {};
    // b: valor bruto, como o Roll20 guarda (usado nos campos escondidos que o CSS consulta).
    const b = { ...this.salvos, ...this.script };
    for (const [k, def] of Object.entries(FICHA.salvos)) v[k] = paraExibir(fonte[k], def);
    for (const k of Object.keys(FICHA.calculados)) v[k] = exibirNumero(this.valor(k));
    for (const k of Object.keys(FICHA.calculados)) if (!(k in b)) b[k] = String(this.bruto(k) ?? "");
    const reps = {};
    for (const [secao, linhas] of Object.entries(this.reps)) {
      const defs = FICHA.repetiveis[secao];
      reps[secao] = linhas.map((l) => {
        const lv = {};
        for (const [k, def] of Object.entries(defs.salvos)) lv[k] = paraExibir(l.dados[k], def);
        for (const k of Object.keys(defs.calculados)) lv[k] = exibirNumero(this.valor(k, l));
        const lb = { ...l.salvos, ...l.script };
        for (const k of Object.keys(defs.calculados)) if (!(k in lb)) lb[k] = String(this.bruto(k, l) ?? "");
        return { id: l.id, v: lv, b: lb };
      });
    }
    return { v, b, reps };
  }

  /** Dados de rolagem do Foundry (@nome): todos os campos com valor numérico. */
  dadosDeRolagem() {
    const d = {};
    for (const k of [...Object.keys(FICHA.salvos), ...Object.keys(FICHA.calculados)]) {
      const v = this.valor(k);
      const n = typeof v === "number" ? v : Number(v);
      if (Number.isFinite(n) && String(v).trim() !== "") d[k] = n;
    }
    return d;
  }

  linha(secao, id) {
    return (this.reps[secao] ?? []).find((l) => l.id === id) ?? null;
  }
}

/* ------------------------------------------------------------------------------------------ */

function contar(texto, trecho) {
  let n = 0;
  for (let i = texto.indexOf(trecho); i !== -1; i = texto.indexOf(trecho, i + trecho.length)) n++;
  return n;
}

/** Valor salvo → texto como o Roll20 guarda (caixa marcada = valor da caixa; desmarcada = "0"). */
function paraBruto(valor, def) {
  if (def.tipo === "marcado") {
    const marcado = valor === undefined ? def.inicial : Boolean(valor);
    return marcado ? String(def.valorMarcado ?? "1") : "0";
  }
  if (valor === undefined || valor === null) return String(def.inicial ?? "");
  return String(valor);
}

function paraExibir(valor, def) {
  if (def.tipo === "marcado") return valor === undefined ? Boolean(def.inicial) : Boolean(valor);
  return valor === undefined || valor === null ? def.inicial : valor;
}

function exibirNumero(v) {
  return typeof v === "number" && !Number.isInteger(v) ? Math.round(v * 100) / 100 : v;
}
