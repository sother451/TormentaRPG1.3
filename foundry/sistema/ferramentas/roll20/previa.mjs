/**
 * Prévia da ficha sem o Foundry: renderiza o template com um personagem de exemplo
 * e grava um HTML para abrir no navegador.
 *
 *   node ferramentas/roll20/previa.mjs <arquivo-de-saida.html> [aba]
 */
import fs from "node:fs";
import path from "node:path";
import Handlebars from "handlebars";
import { FichaRoll20 } from "../../module/roll20/motor.mjs";
import { linhaDeInventario } from "../../module/roll20/inventario.mjs";
import { sincronizacaoDeModificadores, bonusDeArma, resumoDeArma } from "../../module/roll20/bonus-talentos.mjs";
import { faixaDeCondicoes } from "../../module/roll20/condicoes.mjs";
import { montarCatalogo, montarProgressao, sincronizacaoDeHabilidades, gruposDeTalentos } from "../../module/roll20/progressao.mjs";

const RAIZ = path.resolve(import.meta.dirname, "..", "..");
const saida = process.argv[2] ?? path.join(RAIZ, "previa.html");
const aba = process.argv[3] ?? "personagem";

// Mesmo comportamento do helper "eq" do Foundry.
Handlebars.registerHelper("eq", (a, b) => a === b);
Handlebars.registerPartial("systems/tormenta13/templates/actor/progressao.hbs",
  fs.readFileSync(path.join(RAIZ, "templates/actor/progressao.hbs"), "utf8"));
const lerDados = (arquivo) => JSON.parse(fs.readFileSync(path.join(RAIZ, "data", `${arquivo}.json`), "utf8"));

/** Aplica um update "plano" do Foundry (chaves "system.a.b", "-=chave") num objeto, como o Foundry faria. */
function aplicar(alvo, update) {
  for (const [caminho, valor] of Object.entries(update)) {
    const partes = caminho.replace(/^system\./, "").split(".");
    let o = alvo;
    for (const p of partes.slice(0, -1)) o = o[p] ??= {};
    const ultima = partes.at(-1);
    if (ultima.startsWith("-=")) delete o[ultima.slice(2)];
    else o[ultima] = valor;
  }
}

const doCompendio = (arquivo, nome) => {
  const lista = JSON.parse(fs.readFileSync(path.join(RAIZ, "data", `${arquivo}.json`), "utf8"));
  return typeof nome === "number" ? lista[nome] : lista.find((i) => i.name === nome) ?? lista[0];
};

const fonte = {
  raca: "Humano", idade: 27, divindade: "Khalmyr", tamanho: "0",
  for_valor: 16, des_valor: 14, con_valor: 13, int_valor: 10, sab_valor: 12, car_valor: 8,
  pv: 30, ca_base: "floor(@{nivel}/2)", pv_formula_hab: "@{con_mod}", ataque_cac_mod: "@{for_mod}", ataque_dis_mod: "@{des_mod}",
  armadura_equipado: true, armadura: "Cota de Malha", armadura_ca: 4, armadura_max_des: 2, armadura_penalidade: -2,
  atletismo_treinada: true, percepcao_treinada: true, iniciativa_treinada: true, conhecimento_treinada: true,
  rep_class: { a: { ordem: 1, xclass_nome: "Guerreiro", xclasse_nivel: 8, xclasse_bba: "1", xclasse_pv: "5" } },
  rep_arma: {
    e: { ordem: 1, xarma_nome: "Espada Longa", xarma_tipo: "@{ataque_cac}", xarma_dano: "1d8", xarma_habilidade: "@{for_mod}", xarma_critico: 19, xarma_multiplicador: 2, xarma_especializada: true },
    b: { ordem: 2, xarma_nome: "Arco Curto", xarma_tipo: "@{ataque_dis}", xarma_dano: "1d6", xarma_habilidade: "0", xarma_critico: 20, xarma_multiplicador: 3, xarma_municao: "20" }
  },
  // Vagas já preenchidas na aba Progressão (1º nível e o de classe do 4º)
  rep_talento: {
    t: { ordem: 1, nome: "Ataque Poderoso", tipo: "Talento", descricao: "Troca ataque por dano.", xtal_vaga: "n1-geral" },
    v: { ordem: 2, nome: "Vanguarda", tipo: "Classe", descricao: "", xtal_vaga: "n4-classe" },
    // Talentos com bônus automáticos (tabela Modificadores e linha da arma)
    x: { ordem: 3, nome: "Vitalidade", tipo: "Talento", descricao: "", xtal_vaga: "n3-geral" },
    y: { ordem: 4, nome: "Resistência Aprimorada (Vontade)", tipo: "Talento", descricao: "", xtal_vaga: "n5-geral" },
    z: { ordem: 5, nome: "Torcida", tipo: "Talento", descricao: "", xtal_vaga: "n7-geral" },
    w: { ordem: 6, nome: "Especialização em Arma (Espada Longa, Arco Curto, Adaga)", tipo: "Talento", descricao: "", xtal_vaga: "n4-combate" },
    k: { ordem: 7, nome: "Acerto Crítico Aprimorado", tipo: "Talento", descricao: "", xtal_vaga: "n8-classe" }
  },
  xprog_atributos: JSON.stringify({ 2: "FOR", 4: "CON" }),
  rep_mods: { m: { ordem: 1, xmod_equip: true, xmod_nome: "Anel de Proteção", xmod_tipo: "CA", xmod_habilidade: "0", xmod_extra: 1 } },
  rep_itens: {
    i: { ordem: 1, xitem_nome: "Poção de Cura", xitem_qtd: 2, xitem_peso: 0.5 },
    // Itens vindos do compêndio (com a caixa Equipar); a Cota de Malha está equipada
    c: { ordem: 2, ...linhaDeInventario(doCompendio("armaduras", "Cota de Malha")), xitem_equipado: true },
    l: { ordem: 3, ...linhaDeInventario(doCompendio("armas", "Lança")) },
    m: { ordem: 4, ...linhaDeInventario(doCompendio("itens-magicos", 0)) },
    e: { ordem: 5, ...linhaDeInventario(doCompendio("equipamentos", 0)) }
  },
  ts: 120
};

// Habilidades de classe concedidas pelo nível (o que a ficha faz sozinha ao mudar o nível da classe)
const catalogo = montarCatalogo(lerDados("talentos"), lerDados("classes-progressao"));
let contadorIds = 0;
aplicar(fonte, sincronizacaoDeHabilidades(fonte, catalogo, {
  novoId: () => `h${++contadorIds}`, apagar: (caminho, chave) => ({ [`${caminho}.-=${chave}`]: null })
}));
// Condições no token da prévia: Abalado e Cego (que traz Desprevenido)
const condicoes = ["abalado", "cego"];
aplicar(fonte, sincronizacaoDeModificadores(fonte, {
  novoId: () => `b${++contadorIds}`, apagar: (caminho, chave) => ({ [`${caminho}.-=${chave}`]: null })
}, condicoes));
const prog = montarProgressao(fonte, catalogo);
// Igual a bonusDasArmas (module/sheets/ficha-roll20.mjs, que depende do Foundry)
const bonus_armas = Object.fromEntries(Object.entries(fonte.rep_arma).map(([id, arma]) => {
  const bonus = bonusDeArma(fonte, arma);
  return [id, { ...bonus.disponiveis, algum: Object.values(bonus.disponiveis).some(Boolean), resumo: resumoDeArma(bonus), fontes: bonus.fontes.join(", ") }];
}));

const ficha = new FichaRoll20(fonte, { nome: "Valen" });
const { v, b, reps } = ficha.paraTemplate(fonte);
for (const linha of reps.mods ?? []) linha.cond = String(linha.v?.xmod_origem ?? "").startsWith("cond:");
const compilar = (arquivo) => Handlebars.compile(fs.readFileSync(path.join(RAIZ, "templates/actor", arquivo), "utf8"));
// Na prévia, a primeira habilidade de classe aparece aberta (as outras recolhidas, como no padrão)
const abertos = { [gruposDeTalentos(reps.talento).habilidades[0]?.id]: true };
const contexto = { actor: { name: "Valen" }, v, b, reps, prog, grupos_talento: gruposDeTalentos(reps.talento), bonus_armas,
  condicoes: faixaDeCondicoes(condicoes), editavel: true,
  ui: { aba, tab_magias: 1, tab_filtro: 0, filtro_cor: 0, abertos } };
const abas = compilar("ficha-roll20-abas.hbs")(contexto);
const corpo = compilar("ficha-roll20.hbs")(contexto);
const css = fs.readFileSync(path.join(RAIZ, "styles/ficha-roll20.css"), "utf8");

// Imitação do tema escuro do Foundry v14 (em @layer, como o CSS do Foundry), para a prévia mostrar
// os mesmos conflitos que a janela real.
const temaFoundry = `@layer foundry {
  body { margin: 0; background: #1b1d24 url() ; font-family: Signika, Arial, sans-serif; }
  .theme-dark { color-scheme: dark; color: #e7d1b1; }
  .application { position: relative; width: 900px; height: 860px; margin: 16px auto; display: flex; flex-direction: column;
    background: #0b0a13; border-radius: 6px; box-shadow: 0 0 16px #000; overflow: hidden; }
  .window-header { flex: 0 0 auto; background: #18171f; color: #eee; padding: 8px 10px; font-size: 14px; }
  .window-content { flex: 1; padding: 1rem; overflow: hidden auto; }
  .application input, .application select, .application textarea { background: rgba(0,0,0,.35); color: #efe6d8;
    border: 1px solid #555; border-radius: 4px; height: 28px; font-size: 14px; font-family: Signika, sans-serif; }
  .application button { background: rgba(255,255,255,.08); color: #ddd; border: 1px solid #555; height: 28px; font-size: 14px; }
}`;

// Caixas de marcar do Foundry: desenhadas com ::before/::after sobre um input sem aparência nativa,
// fora de @layer e com seletor forte (pior caso), como aparecem na janela real.
const caixasFoundry = `.application.theme-dark input[type="checkbox"] { appearance: none; position: relative;
    width: 18px; height: 18px; margin: 0; }
  .application.theme-dark input[type="checkbox"]::before { content: ""; position: absolute; inset: 0;
    background: #2a2633; border: 1px solid #555; border-radius: 3px; }
  .application.theme-dark input[type="checkbox"]:checked::before { background: #ff9a2e; }
  .application.theme-dark input[type="checkbox"]::after { content: "✓"; position: absolute; left: 3px; top: -1px;
    color: #fff; font-size: 13px; opacity: 0; }
  .application.theme-dark input[type="checkbox"]:checked::after { opacity: 1; }`;

// Na prévia, as abas trocam por JavaScript (no Foundry quem faz isso é a ficha).
const script = `document.addEventListener("click", (e) => {
  const r = e.target.closest("[data-action=recolher]");
  if (r) { const l = r.closest(".repitem"); l.dataset.recolhido = l.dataset.recolhido === "sim" ? "nao" : "sim"; return; }
  const t = e.target.closest("[data-action=recolherTodos]");
  if (t) { document.querySelectorAll(".repitem[data-recolhido]").forEach((l) => l.dataset.recolhido = t.dataset.abrir === "1" ? "nao" : "sim"); return; }
  const b = e.target.closest("[data-aba]"); if (!b) return;
  document.querySelectorAll(".sheet-tabstoggle").forEach((i) => i.setAttribute("value", b.dataset.aba));
});`;

fs.writeFileSync(saida, `<!doctype html><meta charset="utf-8"><title>Prévia da ficha</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
<style>${temaFoundry}</style><style>${caixasFoundry}</style><style>${css}</style>
<form class="application sheet tormenta13-r20 theme-dark"><header class="window-header">Valen (prévia, sem Foundry)</header>
<section class="window-content"><div data-application-part="abas">${abas}</div><div data-application-part="ficha">${corpo}</div></section></form>
<script>${script}</script>`);
console.log(`prévia gravada em ${saida}`);
