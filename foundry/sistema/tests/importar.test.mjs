import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { importarDoRoll20 } from "../module/roll20/importar.mjs";
import { linhaDeItem } from "../module/roll20/do-item.mjs";
import { FichaRoll20 } from "../module/roll20/motor.mjs";

/* Exportação do Roll20 no formato do VTT Enhancement Suite (attribs: name/current/max) */
const idEspada = "-NabcDEFghiJKLmno123";
const idArco = "-NabcDEFghiJKLmno456";
const idClasse = "-Nxyz_0123456789ABCD";
const exportado = {
  name: "Valen", avatar: "https://exemplo/valen.png",
  attribs: [
    { name: "character_name", current: "Valen" },
    { name: "FOR_valor", current: "16" },
    { name: "DES_valor", current: "14" },
    { name: "FOR_mod", current: "3" },                      // calculado: ignorado sem aviso
    { name: "Acrobacia_treinada", current: "1" },
    { name: "Atletismo_treinada", current: "0" },
    { name: "tamanho", current: "0" },
    { name: "T$", current: "120" },
    { name: "CA_base", current: "floor(@{nivel}/2)" },
    { name: `repeating_class_${idClasse}_XCLASSE_NIVEL`, current: "3" },
    { name: `repeating_class_${idClasse}_xclass_nome`, current: "Guerreiro" },
    { name: `repeating_class_${idClasse}_XCLASSE_BBA`, current: "1" },
    { name: `repeating_class_${idClasse}_XCLASSE_PV`, current: "5" },
    { name: `repeating_arma_${idEspada}_xarma_nome`, current: "Espada Longa" },
    { name: `repeating_arma_${idEspada}_xarma_dano`, current: "1d8" },
    { name: `repeating_arma_${idArco}_xarma_nome`, current: "Arco Curto" },
    { name: "_reporder_repeating_arma", current: `${idArco.toLowerCase()},${idEspada.toLowerCase()}` },
    { name: "campo_que_nao_existe", current: "x" }
  ]
};
const r = importarDoRoll20(JSON.stringify(exportado));
assert.equal(r.name, "Valen");
assert.equal(r.img, "https://exemplo/valen.png");
assert.equal(r.system.for_valor, 16);
assert.equal(r.system.acrobacia_treinada, true);
assert.equal(r.system.atletismo_treinada, false);
assert.equal(r.system.ts, 120, "T$ vira ts");
assert.equal(r.system.for_mod, undefined, "campo calculado não é importado");
assert.deepEqual(r.ignorados, ["campo_que_nao_existe"]);
const armas = Object.values(r.system.rep_arma).sort((a, b) => a.ordem - b.ordem);
assert.deepEqual(armas.map((a) => a.xarma_nome), ["Arco Curto", "Espada Longa"], "ordem do _reporder");
const classe = Object.values(r.system.rep_class)[0];
assert.equal(classe.xclasse_nivel, 3);
assert.equal(classe.xclasse_bba, "1");

// O personagem importado calcula igual ao Roll20
const f = new FichaRoll20(r.system, { nome: r.name });
assert.equal(f.valor("nivel"), 3);
assert.equal(f.valor("for_mod"), 3);
assert.equal(f.valor("pv_classes"), 30);

assert.throws(() => importarDoRoll20("{}"), /attribs/);

/* Itens do compêndio → linhas da ficha */
const dados = (arquivo) => JSON.parse(readFileSync(new URL(`../data/${arquivo}.json`, import.meta.url), "utf8"));
const porNome = (arquivo, nome) => dados(arquivo).find((i) => i.name === nome);

const besta = linhaDeItem(porNome("armas", "Besta Leve"));
assert.equal(besta.secao, "arma");
assert.equal(besta.dados.xarma_tipo, "@{ataque_dis}");
assert.equal(besta.dados.xarma_critico, 19);
assert.equal(besta.dados.xarma_dano, "1d8");

const magia = linhaDeItem(porNome("magias", "Acalmar Emoções"));
assert.equal(magia.secao, "magias2");
assert.equal(magia.dados.xmagias_resistencia, "Vontade");
assert.equal(magia.dados.xmagias_tempo_execucao, "Padrão");

const druida = linhaDeItem(porNome("classes", "Druida"));
assert.equal(druida.secao, "class");
assert.equal(druida.dados.xclasse_bba, "1", "1.3: BBA = nível");

const armadura = linhaDeItem(dados("armaduras").find((a) => !a.system.escudo));
assert.ok(armadura.campos.armadura_ca > 0);
assert.equal(armadura.campos.armadura_equipado, true);

// Todo item dos compêndios tem lugar na ficha
for (const arquivo of ["racas", "classes", "talentos-de-classe", "talentos", "magias", "armas", "armaduras", "equipamentos", "itens-magicos"]) {
  for (const item of dados(arquivo)) assert.ok(linhaDeItem(item), `${arquivo}: ${item.name}`);
}

console.log("importar.test.mjs: todos os testes passaram");
