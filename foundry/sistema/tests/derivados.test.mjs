// Teste de fumaça dos cálculos do ator, com um "foundry" falso (só o necessário para importar).
import assert from "node:assert/strict";
class Campo { constructor(o = {}) { Object.assign(this, o); } }
globalThis.foundry = {
  abstract: { TypeDataModel: class {} },
  data: { fields: { SchemaField: Campo, NumberField: Campo, StringField: Campo, BooleanField: Campo, HTMLField: Campo, ObjectField: Campo } }
};
const { CharacterData } = await import("../module/data/character.mjs");

const item = (type, name, system) => ({ type, name, id: name, system });
const ladino = item("classe", "Ladino", { nivel: 5, inicial: true, bba: "intermediario", pvInicial: 12, pvPorNivel: 3, pm: { base: null, porNivel: null, atual: 0 } });
const ranger = item("classe", "Ranger", { nivel: 0, inicial: false, bba: "completo", pvInicial: 16, pvPorNivel: 4, pm: { base: 1, porNivel: 2, atual: 0 } });
const cota = item("armadura", "Cota de malha", { equipada: true, escudo: false, ca: 5, maxDex: 2, penalidade: -2, peso: 20, quantidade: 1 });
const escudo = item("armadura", "Escudo pesado", { equipada: true, escudo: true, ca: 2, maxDex: null, penalidade: -2, peso: 7, quantidade: 1 });
const espada = item("arma", "Espada longa", { tipoAtaque: "corpo", habilidadeAtaque: "", peso: 2, quantidade: 1, dano: "1d8", critico: "19-20" });

const d = new CharacterData();
d.parent = { items: [ladino, ranger, cota, escudo, espada] };
const hab = (valor) => ({ valor, outros: 0, temp: 0 });
d.habilidades = { for: hab(12), des: hab(16), con: hab(14), int: hab(10), sab: hab(10), car: hab(10) };
d.tamanho = "medio";
d.conjuracao = { habilidade: "int" };
d.bonus = Object.fromEntries(["ataqueCorpo","ataqueDistancia","ataqueToque","danoCorpo","danoDistancia","danoMagia","ca","resistencias","pericias","pv","pvNivel","pm","cd"].map(k => [k, 0]));
const pericia = (habilidade) => ({ treinada: false, habilidade, outros: 0 });
const { PERICIAS, RESISTENCIAS } = await import("../module/config.mjs");
d.pericias = Object.fromEntries(Object.entries(PERICIAS).map(([k, p]) => [k, pericia(p.hab)]));
d.pericias.acrobacia.treinada = true;
d.resistencias = Object.fromEntries(Object.entries(RESISTENCIAS).map(([k, r]) => [k, { habilidade: r.hab, outros: 0, temp: 0 }]));
d.especialidades = { a1: { nome: "Herbologia", base: "conhecimento", treinada: true, outros: 0, habilidade: "int" } };
d.pv = { value: 10, temporario: 0 };
d.variaveis = {};

d.prepareDerivedData();
assert.equal(d.nivel, 5); assert.equal(d.mdn, 2);
assert.equal(d.bba, 3);                                   // floor(5 * 0.75)
assert.equal(d.habilidades.des.mod, 3);
assert.equal(d.ca, 10 + 2 + 2 + 5 + 2);                   // Des limitada a +2 pela cota
assert.equal(d.pericias.acrobacia.total, 5 + 3 + 3 - 4);  // nível+3, Des +3, penalidade -4 (cota + escudo)
assert.equal(d.pericias.atletismo.total, 2 + 1 - 4);      // não treinada: metade do nível
assert.equal(d.pericias.atletismo.utilizavel, true);
assert.equal(d.pericias.ladinagem.utilizavel, false);
assert.equal(d.especialidades.a1.total, 5 + 3 + 0);
assert.equal(d.ataque.corpo, 5 + 1); assert.equal(d.ataque.distancia, 5 + 3);
assert.equal(d.pv.max, 12 + 2 + 4 * (3 + 2));             // inicial 12+Con(+2); 4 níveis de 3+2
assert.deepEqual(d.reservasPM, [{ id: "Ranger", nome: "Ranger", atual: 0, max: 0 }]);
assert.deepEqual(d.dadosArma(espada), { ataque: 6, dano: 2 + 1 });
assert.equal(d.carga.atual, 29); assert.equal(d.carga.limite, 36);
const rd = d.getRollData();
assert.equal(rd.for, 1); assert.equal(rd.nivel, 5); assert.equal(rd.fortitude, 2 + 2);

// Variáveis do jogador entram nas fórmulas sem sobrescrever as regras
d.variaveis = { furia: { nome: "Fúria", valor: "2" }, nivel: { nome: "x", valor: "99" } };
const rd2 = d.getRollData();
assert.equal(rd2.furia, 2); assert.equal(rd2.nivel, 5);
console.log("derivados.test.mjs: todos os testes passaram");
