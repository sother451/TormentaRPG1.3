import assert from "node:assert/strict";
import { FichaRoll20, avaliarAritmetica } from "../module/roll20/motor.mjs";
import { executarMacro, paraFoundry, macroDeArma, macroDeItem } from "../module/roll20/macro.mjs";
import { FICHA } from "../module/roll20/campos.mjs";

/* Aritmética */
assert.equal(avaliarAritmetica("10+(1+4*1+0+1+0+0+0)"), 16);
assert.equal(avaliarAritmetica("floor(7/2)"), 3);
assert.equal(avaliarAritmetica("(3 + ceil(5/2))"), 6);
assert.equal(avaliarAritmetica("-2 * -3"), 6);
assert.throws(() => avaliarAritmetica("1d20"));

/* Personagem de exemplo: guerreiro 3, For 16 (+2 de modificador), Des 14, Con 13 */
const fonte = {
  for_valor: 16, des_valor: 14, con_valor: 13, tamanho: "0",
  acrobacia_treinada: true, armadura_equipado: true, armadura_ca: 4, armadura_max_des: 1,
  ca_base: "floor(@{nivel}/2)", pv_formula_hab: "@{con_mod}", ataque_cac_mod: "@{for_mod}",
  rep_class: { a: { ordem: 1, xclasse_nivel: 3, xclasse_bba: "1", xclasse_pv: "5" } },
  rep_mods: {
    m: { ordem: 1, xmod_equip: true, xmod_tipo: "FOR", xmod_habilidade: "0", xmod_extra: 2 },
    n: { ordem: 2, xmod_equip: true, xmod_tipo: "Testes", xmod_habilidade: "0", xmod_extra: 1 },
    o: { ordem: 3, xmod_equip: false, xmod_tipo: "CA", xmod_habilidade: "0", xmod_extra: 5 }
  },
  rep_itens: { i: { xitem_qtd: 2, xitem_peso: 1.5 } },
  ts: 150
};
const f = new FichaRoll20(fonte, { nome: "Valen" });
const v = (k) => f.valor(k);

assert.equal(v("nivel"), 3);
assert.equal(v("bba"), 3);
assert.equal(v("meio_nivel"), 1);
assert.equal(v("for"), 18, "For 16 + modificador FOR +2");
assert.equal(v("for_mod"), 4);
assert.equal(v("pv_classes"), 30, "1ª classe: 5×3 + 3×5");
assert.equal(v("pv_max"), 33, "30 + 3 × Con(+1)");
assert.equal(v("ca_des"), 1, "Des limitada pela armadura");
assert.equal(v("ca"), 16, "10 + 1 (½ nível) + 4 + 1");
assert.equal(v("ca_outros"), 0, "modificador desequipado não conta");
assert.equal(v("pericia_treinada"), 5);
assert.equal(v("acrobacia"), 9, "1 + Des 2 + treinada 5 + Testes 1");
assert.equal(v("ataque_cac"), 8, "BBA 3 + For 4 + Testes 1");
assert.equal(v("fortitude"), 3, "½ nível 1 + Con 1 (padrão da ficha) + Testes 1");
assert.equal(v("carga"), 90);
assert.equal(v("peso_total"), 4.5, "1,5 do dinheiro + 2 × 1,5");

/* Tamanho em Furtividade (script on change:tamanho) */
assert.equal(new FichaRoll20({ tamanho: "-1" }).valor("furtividade_tamanho"), -4);
assert.equal(new FichaRoll20({ tamanho: "8" }).valor("furtividade_tamanho"), 16);

/* Valores para o template */
const t = f.paraTemplate(fonte);
assert.equal(t.v.acrobacia_treinada, true);
assert.equal(t.v.ca, 16);
assert.equal(t.reps.class[0].v.xclasse_pvclasse, 30);
assert.deepEqual(t.reps.mods.map((l) => l.v.xmod_total), [2, 1, 5]);
assert.equal(f.dadosDeRolagem().iniciativa, v("iniciativa"));

/* Conversão de sintaxe */
assert.deepEqual(paraFoundry("1d20cs>19 + 5"), { formula: "1d20 + 5", critico: 19 });
assert.equal(paraFoundry("{ 17, -9999}>21").formula, "{ 17, -9999}cs>=21");

/* Rolador falso: dados com resultados fixos, grupos e aritmética */
function roladorFixo(resultados) {
  const fila = [...resultados];
  return async (formula) => {
    const naturais = [];
    let f2 = formula.replace(/(\d*)d(\d+)/g, (_, n) => {
      let soma = 0;
      for (let i = 0; i < (Number(n) || 1); i++) { const d = fila.shift(); naturais.push(d); soma += d; }
      return String(soma);
    });
    f2 = f2.replace(/\{([^{}]*)\}cs>=(-?\d+)/g, (_, lista, alvo) =>
      String(lista.split(",").map(Number).filter((x) => x >= Number(alvo)).length));
    f2 = f2.replace(/\{([^{}]*)\}dl1/g, (_, lista) => {
      const xs = lista.split(",").map(Number);
      return String(xs.reduce((a, b) => a + b, 0) - Math.min(...xs));
    });
    return { total: avaliarAritmetica(f2), formula, naturais };
  };
}

/* Macro de arma padrão da ficha (com o ajuste do clique: + dano_cac_outros) */
const arma = {
  ordem: 1, xarma_nome: "Espada Longa", xarma_tipo: "@{ataque_cac}", xarma_ataque: 1, xarma_dano: "1d8",
  xarma_habilidade: "@{for_mod}", xarma_critico: 19, xarma_multiplicador: 2, xarma_extra: "0"
};
const fArma = new FichaRoll20({ ...fonte, rep_arma: { e: arma } });
const linha = fArma.linha("arma", "e");
const macro = macroDeArma(FICHA.repetiveis.arma.salvos.macro_texto.inicial, arma.xarma_tipo);

const critico = await executarMacro(macro, fArma, linha, roladorFixo([19, 5]));
assert.equal(critico.rolagens[0].total, 28, "ataque: 19 + 8 + 1");
assert.equal(critico.rolagens[5].total, 20, "crítico x2: 2 × (5 + ½ nível 1 + For 4)");
assert.match(critico.html, /Espada Longa/);
assert.match(critico.html, /class="t13-rolagem critico"[^>]*>28</);

const normal = await executarMacro(macro, fArma, linha, roladorFixo([10, 5]));
assert.equal(normal.rolagens[0].total, 19);
assert.equal(normal.rolagens[5].total, 10, "sem crítico: 5 + 1 + 4");

/* Botão simples com /em */
const teste = await executarMacro(FICHA.macros[":teste_acrobacia"], f, null, roladorFixo([12]));
assert.equal(teste.emote, true);
assert.equal(teste.rolagens[0].total, 21);

/* Item: texto no singular */
assert.match(macroDeItem(FICHA.calculados.xitem_macro_texto, 1), /1? ?uso restante/);

console.log("roll20.test.mjs: todos os testes passaram");
