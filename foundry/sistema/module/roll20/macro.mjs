/**
 * Interpretador das macros do Roll20 (as dos botões e as que o jogador escreve na ficha).
 *
 * Suporta o que a ficha usa:
 * - @{campo} (via FichaRoll20.expandir), @{character_name};
 * - rolagens em linha [[ ]], inclusive aninhadas; a numeração $[[n]] segue a ordem do Roll20
 *   (de dentro para fora, da esquerda para a direita);
 * - "cs>N" num dado (faixa de crítico: só muda o destaque), grupos {a, b}>N (conta sucessos) e {a, b}dl1;
 * - &{template:default} {{name=...}} {{rótulo=valor}} {{texto}};
 * - /em no começo (ação em terceira pessoa).
 *
 * Não depende do Foundry: quem rola os dados é a função `rolar` recebida.
 *   rolar(formulaFoundry) -> Promise<{ total, formula, naturais: number[], roll?: any }>
 */

const INTERNA = /\[\[((?:(?!\[\[|\]\]).)*)\]\]/s;
const MARCADOR = (n) => `\u0000${n}\u0000`;
const MARCADORES = /\u0000(\d+)\u0000/g;

/** Converte a sintaxe de uma rolagem do Roll20 para a do Foundry. */
export function paraFoundry(expr) {
  let critico = null;
  let f = String(expr)
    // Faixa de crítico/falha no dado: no Roll20 só destaca o resultado.
    .replace(/(\d*d\d+)((?:c[sf](?:[<>=]?)-?\d+)+)/gi, (_, dado, faixas) => {
      const cs = /cs([<>=]?)(-?\d+)/i.exec(faixas);
      if (cs) critico = cs[1] === "<" ? null : Number(cs[2]);
      return dado;
    })
    // Grupo com alvo: {a, b}>N conta quantos são >= N.
    .replace(/(\{[^{}]*\})\s*>\s*(-?\d+)/g, "$1cs>=$2")
    .replace(/(\{[^{}]*\})\s*<\s*(-?\d+)/g, "$1cs<=$2")
    .trim();
  if (f === "") f = "0";
  return { formula: f, critico };
}

const escapar = (t) => String(t ?? "")
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Markdown simples que as macros usam: [texto](link) vira texto; **negrito**; *itálico*. */
function formatar(texto) {
  return escapar(texto)
    .replace(/\[([^\]]*)\]\(#[^)]*\)/g, "$1")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\n/g, "<br>");
}

/**
 * Executa uma macro.
 * @param {string} texto           macro do Roll20
 * @param {import("./motor.mjs").FichaRoll20} ficha
 * @param {object|null} linha      linha da seção repetível (para @{campo} da própria linha)
 * @param {Function} rolar
 * @returns {Promise<{emote: boolean, html: string, rolagens: object[]}>}
 */
export async function executarMacro(texto, ficha, linha, rolar) {
  // $[[n]] (referência a uma rolagem anterior) não é uma rolagem nova.
  let s = ficha.expandir(texto, linha).replace(/\$\[\[(\d+)\]\]/g, "\u0001$1\u0001");
  const rolagens = [];
  const totalDe = (t) => t.replace(MARCADORES, (_, n) => String(rolagens[Number(n)].total));

  for (let m = INTERNA.exec(s); m; m = INTERNA.exec(s)) {
    const { formula, critico } = paraFoundry(totalDe(m[1]));
    const r = await rolar(formula);
    rolagens.push({ ...r, critico, original: m[1].trim() });
    s = s.slice(0, m.index) + MARCADOR(rolagens.length - 1) + s.slice(m.index + m[0].length);
  }

  const mostrar = (n) => {
    const r = rolagens[n];
    if (!r) return "";
    const nat = r.naturais ?? [];
    const classes = ["t13-rolagem"];
    if (r.critico !== null && nat.some((d) => d >= r.critico)) classes.push("critico");
    else if (nat.length && nat.every((d) => d === 1) && /d20/.test(r.formula)) classes.push("falha");
    return `<span class="${classes.join(" ")}" title="${escapar(r.formula)}">${escapar(r.total)}</span>`;
  };
  const comRolagens = (html) => html
    .replace(/\u0001(\d+)\u0001/g, (_, n) => MARCADOR(Number(n)))
    .replace(MARCADORES, (_, n) => mostrar(Number(n)));

  let emote = false;
  let corpo = s.trim();
  if (/^\/em(?:\s|$)/i.test(corpo)) { emote = true; corpo = corpo.replace(/^\/em\s*/i, ""); }

  const template = /&\{template:([^}]*)\}/i.exec(corpo);
  let html;
  if (template) {
    let titulo = "";
    const linhas = [];
    for (const b of corpo.matchAll(/\{\{((?:(?!\}\}).)*)\}\}/gs)) {
      const conteudo = b[1];
      const igual = conteudo.indexOf("=");
      const rotulo = igual >= 0 ? conteudo.slice(0, igual).trim() : null;
      const valor = igual >= 0 ? conteudo.slice(igual + 1).trim() : conteudo.trim();
      if (rotulo !== null && rotulo.toLowerCase() === "name") titulo = valor;
      else linhas.push({ rotulo, valor });
    }
    html = `<div class="t13-template">`
      + (titulo ? `<div class="t13-titulo">${comRolagens(formatar(titulo))}</div>` : "")
      + `<table>${linhas.map(({ rotulo, valor }) => (rotulo !== null && rotulo !== ""
        ? `<tr><th>${comRolagens(formatar(rotulo))}</th><td>${comRolagens(formatar(valor))}</td></tr>`
        : `<tr><td colspan="2">${comRolagens(formatar(valor))}</td></tr>`)).join("")}</table></div>`;
  } else {
    html = comRolagens(formatar(corpo));
  }
  return { emote, html, rolagens };
}

/**
 * clicked:repeating_arma: soma os "outros" de dano conforme o tipo de ataque.
 * Foundry: `ajuste` traz os talentos da arma (bonus-talentos.mjs → bonusDeArma): bônus de ataque e de dano
 * e a margem de ameaça (o crítico vira um número: crítico da arma − margem).
 */
export function macroDeArma(macro, tipo, ajuste = null) {
  const outros = tipo === "@{ataque_dis}" ? "@{dano_dis_outros}" : tipo === "@{ataque_cac}" ? "@{dano_cac_outros}" : "@{danos_outros}";
  let texto = macro.replace("@{xarma_dano}", `@{xarma_dano}+${outros}${ajuste?.dano ? `+${ajuste.dano}` : ""}`);
  if (ajuste?.ataque) texto = texto.replaceAll("@{xarma_ataque}", `(@{xarma_ataque}+${ajuste.ataque})`);
  if (ajuste?.margem) texto = texto.replaceAll("@{xarma_critico}", String(Math.max(2, ajuste.critico - ajuste.margem)));
  return texto;
}

/** clicked:repeating_itens: "1 usos restantes" vira "1 uso restante". */
export function macroDeItem(macro, quantidade) {
  return quantidade <= 1 ? macro.replace("usos", "uso").replace("restantes", "restante") : macro;
}
