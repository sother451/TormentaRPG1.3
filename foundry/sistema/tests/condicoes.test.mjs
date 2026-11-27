import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { FichaRoll20 } from "../module/roll20/motor.mjs";
import { FICHA } from "../module/roll20/campos.mjs";
import { CONDICOES, condicoesEfetivas, faixaDeCondicoes } from "../module/roll20/condicoes.mjs";
import { sincronizacaoDeModificadores, marcarModificadoresIguais } from "../module/roll20/bonus-talentos.mjs";
import { descansoLongo, descansoRapido, multiplicadorDeDescanso } from "../module/roll20/descanso.mjs";

/* Toda condição do compêndio está na tabela, e todo parâmetro é uma opção de Modificadores */
const doCompendio = JSON.parse(readFileSync(new URL("../data/condicoes.json", import.meta.url), "utf8")).map((c) => c.id);
assert.deepEqual([...doCompendio].sort(), Object.keys(CONDICOES).sort());
const opcoes = new Set(FICHA.repetiveis.mods.salvos.xmod_tipo.opcoes);
for (const [id, c] of Object.entries(CONDICOES)) {
  for (const [tipo] of c.mods) assert.ok(opcoes.has(tipo), `${id}: ${tipo}`);
  for (const o of [...(c.implica ?? []), ...(c.substituidaPor ?? [])]) assert.ok(CONDICOES[o], `${id} → ${o}`);
}

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
const op = { novoId: () => `c${++n}`, apagar: (caminho, chave) => ({ [`${caminho}.-=${chave}`]: null }) };

/* Condições trazidas por outras e substituídas */
const ids = (lista) => condicoesEfetivas(lista).map((c) => `${c.id}${c.via ? `<${c.via}` : ""}${c.substituida ? "~" : ""}`);
assert.deepEqual(ids(["cego"]), ["cego", "desprevenido<Cego"]);
assert.deepEqual(ids(["cego", "desprevenido"]), ["cego", "desprevenido"], "desprevenido no token não conta duas vezes");
assert.deepEqual(ids(["abalado", "apavorado"]), ["abalado~", "apavorado"]);
assert.deepEqual(ids(["fatigado", "exausto"]), ["exausto", "fatigado~"]);
assert.deepEqual(ids(["inexistente"]), []);
assert.match(faixaDeCondicoes(["fatigado", "exausto"]).find((c) => c.id === "fatigado").texto, /substituída por Exausto/);

/* Sincronização com a tabela Modificadores */
const sys = {
  for_valor: 14, des_valor: 16, con_valor: 12,
  rep_class: { a: { ordem: 1, xclass_nome: "Guerreiro", xclasse_nivel: 4, xclasse_bba: "1", xclasse_pv: "5" } },
  rep_talento: { t1: { ordem: 1, nome: "Vitalidade" } },
  rep_mods: { manual: { ordem: 1, xmod_equip: true, xmod_tipo: "CA", xmod_habilidade: "0", xmod_extra: 1, xmod_nome: "Anel" } }
};
const antes = new FichaRoll20(structuredClone(aplicar(sys, sincronizacaoDeModificadores(sys, op, []))));
aplicar(sys, sincronizacaoDeModificadores(sys, op, ["cego", "abalado"]));
const depois = new FichaRoll20(structuredClone(sys));
assert.equal(depois.numero("ca") - antes.numero("ca"), -8, "Cego: −4 e desprevenido −4");
assert.equal(depois.numero("vontade") - antes.numero("vontade"), -2, "Abalado: −2 em resistências");
assert.equal(depois.numero("acrobacia") - antes.numero("acrobacia"), -6, "Cego −4 (perícia de Des) e Abalado −2");
assert.ok(Object.values(sys.rep_mods).some((m) => m.xmod_nome === "Condição: Desprevenido (por Cego)"));
assert.ok(Object.values(sys.rep_mods).some((m) => m.xmod_nome === "Vitalidade"), "talento continua");
assert.deepEqual(sincronizacaoDeModificadores(sys, op, ["cego", "abalado"]), {}, "idempotente");
assert.deepEqual(sincronizacaoDeModificadores(sys, op, null), {}, "sem a lista de condições, não mexe nelas");

// Apavorado substitui Abalado; tirar as condições tira as linhas e devolve os valores
aplicar(sys, sincronizacaoDeModificadores(sys, op, ["cego", "abalado", "apavorado"]));
assert.equal(new FichaRoll20(structuredClone(sys)).numero("vontade") - antes.numero("vontade"), -4);
aplicar(sys, sincronizacaoDeModificadores(sys, op, []));
assert.ok(!Object.values(sys.rep_mods).some((m) => String(m.xmod_origem ?? "").startsWith("cond:")));
assert.equal(new FichaRoll20(structuredClone(sys)).numero("ca"), antes.numero("ca"));

// Fatigado: −2 For e Des (o modificador de Des cai 1)
aplicar(sys, sincronizacaoDeModificadores(sys, op, ["fatigado"]));
assert.equal(new FichaRoll20(structuredClone(sys)).numero("des_mod"), antes.numero("des_mod") - 1);
aplicar(sys, sincronizacaoDeModificadores(sys, op, []));

/* Descanso */
assert.deepEqual([1, 4, 5, 9, 10, 15, 20].map(multiplicadorDeDescanso), [1, 1, 2, 2, 3, 4, 4]);
const ficha = new FichaRoll20(structuredClone(sys));
const pvMax = ficha.numero("pv_max");
sys.pv = pvMax - 20;
let r = descansoRapido(sys, new FichaRoll20(structuredClone(sys)), 12);
assert.equal(r.cura, 12, "4º nível: recupera o resultado");
sys.rep_class.a.xclasse_nivel = 10;
const f10 = new FichaRoll20(structuredClone(sys));
sys.pv = f10.numero("pv_max") - 20;
r = descansoRapido(sys, f10, 12);
assert.deepEqual([r.cura, r.multiplicador], [20, 3], "10º nível: triplo, até o máximo");

sys.rep_pms = { p: { ordem: 1, xpm_nivel: 10, xpm_base: 4, xpm_habilidade: "0", xpm_pmnivel: 2, xpm_temp: 0, xpm_uso: true, xpm_atual: 3 } };
sys.rep_talento.t2 = { ordem: 2, nome: "Fúria", usos_nivel: 3, usos_habilidade: "0", usos_temp: 0, usos_atual: 0 };
sys.rep_talento.t3 = { ordem: 3, nome: "Sem usos", usos_atual: 0 };
sys.for_temp = -2;
sys.sab_temp = 2;
const fl = new FichaRoll20(structuredClone(sys));
const longo = descansoLongo(sys, fl);
assert.equal(longo.update["system.pv"], fl.numero("pv_max"));
assert.equal(longo.update["system.rep_pms.p.xpm_atual"], 4 + 9 * 2, "PM total da linha");
assert.equal(longo.update["system.rep_talento.t2.usos_atual"], 3);
assert.ok(!("system.rep_talento.t3.usos_atual" in longo.update), "talento sem usos não muda");
assert.equal(longo.update["system.for_temp"], -1, "dano de habilidade volta 1");
assert.ok(!("system.sab_temp" in longo.update), "bônus temporário não mexe");
aplicar(sys, longo.update);
assert.deepEqual(descansoLongo(sys, new FichaRoll20(structuredClone(sys))).update, { "system.for_temp": 0 });

/* Caixas de Modificadores com o mesmo nome ligam juntas */
const iguais = { rep_mods: { a: { xmod_nome: "Torcida (situacional)" }, b: { xmod_nome: "Torcida (situacional)" },
  c: { xmod_nome: "Anel" }, d: { xmod_nome: "" }, e: { xmod_nome: "" } } };
assert.deepEqual(marcarModificadoresIguais(iguais, "a", true),
  { "system.rep_mods.a.xmod_equip": true, "system.rep_mods.b.xmod_equip": true });
assert.deepEqual(marcarModificadoresIguais(iguais, "d", false), { "system.rep_mods.d.xmod_equip": false }, "sem nome: só a linha");

/* +1 de atributo da Progressão soma em Outros (só nos níveis já alcançados) */
const prog = { for_valor: 14, rep_class: { a: { ordem: 1, xclasse_nivel: 4, xclasse_bba: "1", xclasse_pv: "5" } },
  xprog_atributos: JSON.stringify({ 2: "FOR", 4: "CON", 6: "FOR" }) };
const fp = new FichaRoll20(structuredClone(prog));
assert.deepEqual([fp.numero("for_outros"), fp.numero("for"), fp.numero("con_outros")], [1, 15, 1], "nível 6 ainda não alcançado");

console.log("condicoes.test.mjs: todos os testes passaram");
