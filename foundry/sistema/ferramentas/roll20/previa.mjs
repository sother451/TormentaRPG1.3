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

const RAIZ = path.resolve(import.meta.dirname, "..", "..");
const saida = process.argv[2] ?? path.join(RAIZ, "previa.html");
const aba = process.argv[3] ?? "personagem";

// Mesmo comportamento do helper "eq" do Foundry.
Handlebars.registerHelper("eq", (a, b) => a === b);

const fonte = {
  raca: "Humano", idade: 27, divindade: "Khalmyr", tamanho: "0",
  for_valor: 16, des_valor: 14, con_valor: 13, int_valor: 10, sab_valor: 12, car_valor: 8,
  pv: 30, ca_base: "floor(@{nivel}/2)", pv_formula_hab: "@{con_mod}", ataque_cac_mod: "@{for_mod}", ataque_dis_mod: "@{des_mod}",
  armadura_equipado: true, armadura: "Cota de Malha", armadura_ca: 4, armadura_max_des: 2, armadura_penalidade: -2,
  atletismo_treinada: true, percepcao_treinada: true, iniciativa_treinada: true,
  rep_class: { a: { ordem: 1, xclass_nome: "Guerreiro", xclasse_nivel: 3, xclasse_bba: "1", xclasse_pv: "5" } },
  rep_arma: {
    e: { ordem: 1, xarma_nome: "Espada Longa", xarma_tipo: "@{ataque_cac}", xarma_dano: "1d8", xarma_habilidade: "@{for_mod}", xarma_critico: 19, xarma_multiplicador: 2 },
    b: { ordem: 2, xarma_nome: "Arco Curto", xarma_tipo: "@{ataque_dis}", xarma_dano: "1d6", xarma_habilidade: "0", xarma_critico: 20, xarma_multiplicador: 3, xarma_municao: "20" }
  },
  rep_talento: { t: { ordem: 1, nome: "Ataque Poderoso", tipo: "Talento", descricao: "Troca ataque por dano." } },
  rep_mods: { m: { ordem: 1, xmod_equip: true, xmod_nome: "Anel de Proteção", xmod_tipo: "CA", xmod_habilidade: "0", xmod_extra: 1 } },
  rep_itens: { i: { ordem: 1, xitem_nome: "Poção de Cura", xitem_qtd: 2, xitem_peso: 0.5 } },
  ts: 120
};

const ficha = new FichaRoll20(fonte, { nome: "Valen" });
const { v, b, reps } = ficha.paraTemplate(fonte);
const template = Handlebars.compile(fs.readFileSync(path.join(RAIZ, "templates/actor/ficha-roll20.hbs"), "utf8"));
const corpo = template({ actor: { name: "Valen" }, v, b, reps, ui: { aba, tab_magias: 1, tab_filtro: 0, filtro_cor: 0 } });
const css = fs.readFileSync(path.join(RAIZ, "styles/ficha-roll20.css"), "utf8");

fs.writeFileSync(saida, `<!doctype html><meta charset="utf-8"><title>Prévia da ficha</title>
<style>body{margin:0;background:#333;font-family:Signika,Arial,sans-serif}
.application{width:900px;margin:20px auto;box-shadow:0 0 12px #000}
.window-header{background:#222;color:#eee;padding:6px 10px;font-size:14px}</style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"><style>${css}</style>
<div class="application tormenta13-r20"><header class="window-header">Valen</header>
<section class="window-content"><form>${corpo}</form></section></div>`);
console.log(`prévia gravada em ${saida}`);
