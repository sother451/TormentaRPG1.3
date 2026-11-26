import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { FichaRoll20 } from "../module/roll20/motor.mjs";
import { executarMacro, macroDeArma } from "../module/roll20/macro.mjs";
import { FICHA } from "../module/roll20/campos.mjs";
import { slug } from "../module/roll20/progressao.mjs";
import { BONUS_DE_TALENTOS, TALENTOS_DE_ARMA, identificarTalento, modificadoresDosTalentos, sincronizacaoDeModificadores, bonusDeArma, resumoDeArma }
  from "../module/roll20/bonus-talentos.mjs";

/* Toda chave da tabela é um talento do compêndio, e todo parâmetro é uma opção da tabela Modificadores */
const nomes = new Set(JSON.parse(readFileSync(new URL("../data/talentos.json", import.meta.url), "utf8")).map((t) => slug(t.name)));
for (const chave of [...Object.keys(BONUS_DE_TALENTOS), ...Object.keys(TALENTOS_DE_ARMA)]) assert.ok(nomes.has(chave), `talento ${chave}`);
const opcoes = new Set(FICHA.repetiveis.mods.salvos.xmod_tipo.opcoes);
for (const [chave, efeitos] of Object.entries(BONUS_DE_TALENTOS)) {
  for (const e of efeitos) assert.ok(e.alvo.startsWith("escolha:") || opcoes.has(e.alvo), `${chave}: parâmetro ${e.alvo}`);
}

assert.deepEqual(identificarTalento("Foco em Perícia (Percepção)"), { chave: "foco-em-pericia", escolhas: ["percepcao"] });
assert.deepEqual(identificarTalento("Fundamentalista (Força e Carisma)").escolhas, ["forca", "carisma"]);

/* Aplica um update do Foundry num objeto simples (para os testes) */
function aplicar(system, update) {
  for (const [chave, valor] of Object.entries(update)) {
    const partes = chave.replace(/^system\./, "").split(".");
    let alvo = system;
    for (const p of partes.slice(0, -1)) alvo = alvo[p] ??= {};
    const ultima = partes.at(-1);
    if (ultima.startsWith("-=")) delete alvo[ultima.slice(2)];
    else alvo[ultima] = valor;
  }
  return system;
}
let n = 0;
const op = { novoId: () => `m${++n}`, apagar: (caminho, chave) => ({ [`${caminho}.-=${chave}`]: null }) };

const sys = {
  con_valor: 14, int_valor: 12,
  rep_class: { a: { ordem: 1, xclass_nome: "Guerreiro", xclasse_nivel: 6, xclasse_bba: "1", xclasse_pv: "5" } },
  rep_talento: {
    t1: { ordem: 1, nome: "Vitalidade" },
    t2: { ordem: 2, nome: "Resistência Aprimorada (Vontade)" },
    t3: { ordem: 3, nome: "Resistência Aprimorada" },
    t4: { ordem: 4, nome: "Torcida" },
    t5: { ordem: 5, nome: "Poder Mágico" },
    t6: { ordem: 6, nome: "Ataque Poderoso" }
  },
  rep_mods: { manual: { ordem: 1, xmod_equip: true, xmod_tipo: "CA", xmod_habilidade: "0", xmod_extra: 1, xmod_nome: "Anel" } }
};
const antes = new FichaRoll20(structuredClone(sys));
aplicar(sys, sincronizacaoDeModificadores(sys, op));
const mods = Object.values(sys.rep_mods);
assert.equal(mods.length, 1 + 1 + 1 + 1 + 3 + 1, "Vitalidade, 2× Resistência, Torcida (3), Poder Mágico + a linha manual");
assert.ok(mods.find((m) => m.xmod_nome === "Anel"), "linha manual continua");
const auto = (nome) => mods.filter((m) => m.xmod_origem && m.xmod_nome.startsWith(nome));
assert.equal(auto("Resistência Aprimorada (Vontade)")[0].xmod_tipo, "Vontade", "escolha pelo nome do talento");
assert.equal(auto("Resistência Aprimorada (escolha")[0].xmod_tipo, "Nenhum", "sem escolha no nome: o jogador escolhe");
assert.ok(auto("Torcida").every((m) => m.xmod_equip === false), "situacional entra desligado");
assert.equal(auto("Poder Mágico")[0].xmod_extra, 6, "1 PM por nível");

const depois = new FichaRoll20(structuredClone(sys));
assert.equal(depois.numero("vontade") - antes.numero("vontade"), 2, "Vontade +2");
assert.equal(depois.numero("pv_max") - antes.numero("pv_max"), 12, "Vitalidade: 2 PV × 6 níveis");
assert.equal(depois.numero("ca"), antes.numero("ca"), "Torcida desligada não soma");

// já sincronizado: nada muda; a escolha do jogador e a caixa ficam
const escolhaLivre = Object.entries(sys.rep_mods).find(([, m]) => m.xmod_tipo === "Nenhum")[0];
sys.rep_mods[escolhaLivre].xmod_tipo = "Reflexo";
const torcida = Object.entries(sys.rep_mods).find(([, m]) => m.xmod_nome.startsWith("Torcida"))[0];
sys.rep_mods[torcida].xmod_equip = true;
assert.deepEqual(sincronizacaoDeModificadores(sys, op), {});

// subir de nível acompanha; tirar o talento tira a linha
sys.rep_class.a.xclasse_nivel = 8;
delete sys.rep_talento.t1;
aplicar(sys, sincronizacaoDeModificadores(sys, op));
assert.equal(Object.values(sys.rep_mods).find((m) => m.xmod_nome === "Poder Mágico").xmod_extra, 8);
assert.ok(!Object.values(sys.rep_mods).some((m) => m.xmod_nome === "Vitalidade"));
assert.equal(sys.rep_mods[escolhaLivre].xmod_tipo, "Reflexo");

/* Escalas */
const ctx = (nivel, talentos) => modificadoresDosTalentos({
  rep_class: { a: { xclasse_nivel: nivel } },
  rep_talento: Object.fromEntries(talentos.map((t, i) => [`t${i}`, { ordem: i, nome: t }]))
});
const extras = (m) => [...m.values()].map((x) => `${x.tipo}:${x.extra}`);
assert.deepEqual(extras(ctx(12, ["Carapaça", "Visco Rubro", "Visão Ampla", "Sangue Ácido", "Deslocar"])).slice(0, 2), ["CA:3", "Ataque CaC:3"],
  "Carapaça: +1, +1 a cada dois outros talentos da Tormenta (4 outros)");
assert.deepEqual(extras(ctx(10, ["Ao Sabor do Destino (Diplomacia)"])),
  ["Ataques:2", "Dano CaC:2", "Dano Dis:2", "CA:1", "Resistencias:1", "Diplomacia:4", "null:2"]);
assert.deepEqual(extras(ctx(3, ["Mente Arcana"])), ["Conhecimento:2", "Identificar Magia:2", "Oficio:2"]);
assert.deepEqual(extras(ctx(12, ["Mente Arcana"])), ["Conhecimento:6", "Identificar Magia:6", "Oficio:6"]);

/* Talentos de arma */
const guerreiro = {
  for_valor: 16, ataque_cac_mod: "@{for_mod}",
  rep_class: { a: { ordem: 1, xclasse_nivel: 8, xclasse_bba: "1", xclasse_pv: "5" } },
  rep_talento: { e: { nome: "Especialização em Arma (Espada Longa, Arco Longo, Adaga)" }, c: { nome: "Acerto Crítico Aprimorado" } }
};
const espada = { ordem: 1, xarma_nome: "Espada Longa", xarma_tipo: "@{ataque_cac}", xarma_ataque: 0, xarma_dano: "1d8",
  xarma_habilidade: "@{for_mod}", xarma_critico: 19, xarma_multiplicador: 2, xarma_extra: "0", xarma_especializada: true };
const bonus = bonusDeArma(guerreiro, espada);
assert.deepEqual([bonus.ataque, bonus.dano, bonus.margem], [1, 2, 2]);
assert.equal(resumoDeArma(bonus), "+1 ataque, +2 dano, margem de ameaça +2");
assert.equal(bonusDeArma(guerreiro, { ...espada, xarma_especializada: false }).ataque, 0, "arma sem a caixa marcada");
assert.equal(bonusDeArma({ rep_talento: {} }, espada).ataque, 0, "sem o talento, a caixa não vale");
const aprimorada = { ...guerreiro, rep_talento: { ...guerreiro.rep_talento, a: { nome: "Especialização em Arma Aprimorada" }, m: { nome: "Mestre em Arma" } } };
const mestre = bonusDeArma(aprimorada, { ...espada, xarma_mestre: true });
assert.deepEqual([mestre.ataque, mestre.dano, mestre.margem], [3, 5, 3]);

// na rolagem: 17 natural já é crítico (19 − 2); ataque e dano somam
const f = new FichaRoll20({ ...guerreiro, rep_arma: { e: espada } });
const macro = macroDeArma(FICHA.repetiveis.arma.salvos.macro_texto.inicial, espada.xarma_tipo, { ...bonus, critico: 19 });
assert.ok(macro.includes("cs>17"), macro);
function rolador(resultados) {
  const fila = [...resultados];
  return async (formula) => {
    const naturais = [];
    let f2 = formula.replace(/(\d*)d(\d+)/g, (_, q) => {
      let soma = 0;
      for (let i = 0; i < (Number(q) || 1); i++) { const d = fila.shift(); naturais.push(d); soma += d; }
      return String(soma);
    });
    f2 = f2.replace(/\{([^{}]*)\}cs>=(-?\d+)/g, (_, lista, alvo) => String(lista.split(",").map(Number).filter((x) => x >= Number(alvo)).length));
    f2 = f2.replace(/\{([^{}]*)\}dl1/g, (_, lista) => { const xs = lista.split(",").map(Number); return String(xs.reduce((a, c) => a + c, 0) - Math.min(...xs)); });
    const { avaliarAritmetica } = await import("../module/roll20/motor.mjs");
    return { total: avaliarAritmetica(f2), formula, naturais };
  };
}
const r = await executarMacro(macro, f, f.linha("arma", "e"), rolador([17, 5]));
assert.equal(r.rolagens[0].total, 17 + 8 + 3 + 1, "ataque: 17 + BBA 8 + For 3 + Especialização 1");
assert.equal(r.rolagens[5].total, 2 * (5 + 4 + 3 + 2), "crítico com 17: 2 × (5 + ½ nível 4 + For 3 + 2)");

console.log("bonus.test.mjs: todos os testes passaram");
