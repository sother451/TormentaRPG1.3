import assert from "node:assert/strict";
import * as R from "../module/rules.mjs";

// Tabela de habilidades
assert.equal(R.modHabilidade(10), 0); assert.equal(R.modHabilidade(11), 0);
assert.equal(R.modHabilidade(12), 1); assert.equal(R.modHabilidade(16), 3);
assert.equal(R.modHabilidade(8), -1); assert.equal(R.modHabilidade(1), -5);

// Exemplo do compendium: ladino 5º, For 12 (+1), Des 16 (+3) -> ataque +6 corpo, +8 distância
assert.equal(5 + R.modHabilidade(12), 6); assert.equal(5 + R.modHabilidade(16), 8);

// Exemplo: 5º nível, For 16, espada longa -> 1d8 + 2 (MdN) + 3 (For)
assert.equal(R.metadeNivel(5) + R.modHabilidade(16), 5);

// CA: 5º nível, Des 12 -> 13; com cota de malha (+5) e escudo pesado (+2) -> 20
assert.equal(R.calcularCA({ mdn: 2, des: 1 }), 13);
assert.equal(R.calcularCA({ mdn: 2, des: 1, armadura: 5, escudo: 2 }), 20);
assert.equal(R.desEfetiva(3, [2, 4]), 2); assert.equal(R.desEfetiva(3, []), 3);
assert.equal(R.desEfetiva(3, [null]), 3);

// BBA: bárbaro 1 (completo) + ladino 1 (intermediário) = +1
assert.equal(R.bbaClasse("completo", 1) + R.bbaClasse("intermediario", 1), 1);
assert.equal(R.bbaClasse("baixo", 9), 4);

// PV: bárbaro (24 / +6) com Con +2
const barbaro = { nivel: 1, pvInicial: 24, pvPorNivel: 6, inicial: true };
assert.equal(R.pvMaximo({ classes: [barbaro], con: 2 }), 26);
assert.equal(R.pvMaximo({ classes: [{ ...barbaro, nivel: 3 }], con: 2 }), 26 + 2 * 8);
// Multiclasse: bárbaro 1 + ladino 1 (3 PV/nível) -> segundo nível dá 3 + Con
const ladino = { nivel: 1, pvInicial: 12, pvPorNivel: 3, inicial: false };
assert.equal(R.pvMaximo({ classes: [barbaro, ladino], con: 2 }), 26 + 5);
// Mínimo de 1 PV por nível
assert.equal(R.pvMaximo({ classes: [{ nivel: 2, pvInicial: 8, pvPorNivel: 2, inicial: true }], con: -5 }), 8 - 5 + 1);
// Sem classes
assert.equal(R.pvMaximo({ classes: [], con: 2 }), 0);

// PM: ranger 1 + Sab, +2 por nível
assert.equal(R.pmMaximo({ base: 1, porNivel: 2, nivel: 1, mdc: 3 }), 4);
assert.equal(R.pmMaximo({ base: 1, porNivel: 2, nivel: 5, mdc: 3 }), 12);
assert.equal(R.pmMaximo({ base: null, porNivel: null, nivel: 5, mdc: 3 }), 0);

// Perícias: treinada = nível + 3; não treinada = metade do nível
assert.equal(R.bonusPericia({ nivel: 3, treinada: true, mod: 2 }), 8);
assert.equal(R.bonusPericia({ nivel: 3, treinada: false, mod: 2 }), 3);
assert.equal(R.bonusPericia({ nivel: 4, treinada: true, mod: 0, penalidadeArmadura: -5, tamanho: 4 }), 6);

// Crítico
assert.deepEqual(R.parseCritico("19-20"), { margem: 19, multiplicador: 2 });
assert.deepEqual(R.parseCritico("x3"), { margem: 20, multiplicador: 3 });
assert.deepEqual(R.parseCritico("18-20/x3"), { margem: 18, multiplicador: 3 });
assert.deepEqual(R.parseCritico(""), { margem: 20, multiplicador: 2 });
assert.equal(R.multiplicarDados("1d8", 2), "2d8");
assert.equal(R.multiplicarDados("2d6+1", 3), "6d6+1");
assert.equal(R.multiplicarDados("d4", 2), "2d4");

// Variáveis
assert.equal(R.slugVariavel("Fúria Ativa!"), "furia_ativa");
assert.equal(R.valorVariavel("2"), 2); assert.equal(R.valorVariavel("1d4"), "1d4");
assert.equal(R.pesoKg("1Kg (1,5 Kg)"), 1); assert.equal(R.pesoKg("0,5Kg"), 0.5);

// Pontos de Ação
assert.equal(R.tabelaPA(1).dado, "1d4"); assert.equal(R.tabelaPA(5).pv, "4d8 + 3");
assert.equal(R.tabelaPA(20).pm, "4d8 + 5"); assert.equal(R.tabelaPA(0).dado, "1d4");

console.log("rules.test.mjs: todos os testes passaram");
