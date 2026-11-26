import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { montarCatalogo, montarProgressao, sincronizacaoDeHabilidades, vagasDoNivel, classeDaLinha, linhaDeTalento }
  from "../module/roll20/progressao.mjs";

const ler = (arquivo) => JSON.parse(readFileSync(new URL(`../data/${arquivo}.json`, import.meta.url), "utf8"));
const classes = ler("classes-progressao");
const catalogo = montarCatalogo(ler("talentos"), classes);

/* Dados extraídos do compêndio original */
const guerreiro = classes.find((c) => c.id === "guerreiro");
assert.equal(guerreiro.tabela.length, 20);
assert.equal(guerreiro.pvInicial, 20);
assert.equal(guerreiro.pvPorNivel, 5);
assert.deepEqual(guerreiro.tabela[2].habilidades, ["Treinamento de Armaduras"]);
assert.equal(guerreiro.talentos.length, 15);
assert.deepEqual([...new Set(guerreiro.talentos.map((t) => t.nivel))], [4, 8, 12, 16, 20]);
for (const c of classes.filter((x) => x.categoria === "basica")) {
  assert.equal(c.habilidades.filter((h) => h.talentoDoVigesimo).length, 1, `${c.nome}: habilidade do 20º`);
}

/* Nome na ficha → classe do catálogo */
assert.equal(classeDaLinha(catalogo, "Cavaleiro")?.id, "cavaleiro-nobre-vassalo");
assert.equal(classeDaLinha(catalogo, "Geomante (Naturalista)")?.id, "geomante-naturalista");
assert.equal(classeDaLinha(catalogo, "Mestre das Bonecas")?.id, "mestre-das-bonecas-wip");
assert.equal(classeDaLinha(catalogo, ""), null);

/* Calendário de vagas (página Personagem) */
const tipos = (n) => vagasDoNivel(n).map((v) => v.tipo);
assert.deepEqual(tipos(1), ["geral", "geral"]);
assert.deepEqual(tipos(2), []);
assert.deepEqual(tipos(3), ["geral"]);
assert.deepEqual(tipos(4), ["combate", "classe"]);
assert.deepEqual(tipos(6), ["pericia"]);
assert.deepEqual(tipos(8), ["classe"]);
assert.deepEqual(tipos(12), ["combate", "classe"]);
assert.deepEqual(tipos(14), ["pericia"]);
assert.deepEqual(tipos(16), ["classe"]);
assert.deepEqual(tipos(20), []);

/* Guerreiro 8º: vagas, opções e pendências */
const sys = {
  rep_class: { a: { ordem: 1, xclass_nome: "Guerreiro", xclasse_nivel: 8 } },
  rep_talento: { t: { ordem: 1, nome: "Vanguarda", xtal_vaga: "n4-classe" } },
  xprog_atributos: JSON.stringify({ 2: "FOR" })
};
const prog = montarProgressao(sys, catalogo);
assert.equal(prog.nivel, 8);
const nivel = (n) => prog.niveis.find((x) => x.nivel === n);
assert.equal(nivel(4).vagas.find((v) => v.tipo === "classe").escolhido.nome, "Vanguarda");
const opcoes8 = nivel(8).vagas[0].grupos.flatMap((g) => g.opcoes.map((o) => o.nome));
assert.ok(opcoes8.includes("Guarda de Ferro"), "talento de guerreiro do 8º");
assert.ok(!opcoes8.includes("Revanche"), "talento do 12º ainda não");
assert.ok(!opcoes8.includes("Vanguarda"), "talento já escolhido some da lista");
assert.ok(nivel(8).vagas[0].grupos.some((g) => g.grupo === "Talentos de Destino"));
assert.equal(nivel(4).atributo.opcoes.find((o) => o.id === "FOR").bloqueado, true, "não repete o atributo do nível par anterior");
// 1º: 2 talentos; 3,5,7: 1; 4: combate; 6: perícia; 8: classe; pares: atributo (2 já escolhido) => 9
assert.equal(prog.pendentes, 2 + 3 + 1 + 1 + 1 + 3);

/* Vaga do 20º só com a classe no 20º */
const prog20 = montarProgressao({ rep_class: { a: { xclass_nome: "Guerreiro", xclasse_nivel: 20 } } }, catalogo);
const vaga20 = prog20.classes[0].vagas[0];
assert.match(vaga20.rotulo, /Senhor da Guerra/);
assert.deepEqual(vaga20.grupos[0].opcoes.map((o) => o.nome).sort(), ["Máquina de Guerra", "Render-se Jamais", "Sombra dos Colossos"]);

/* Habilidades de classe entram e saem com o nível */
let n = 0;
const op = { novoId: () => `h${++n}`, apagar: (caminho, chave) => ({ [`${caminho}.-=${chave}`]: null }) };
const up = sincronizacaoDeHabilidades({ rep_class: { a: { xclass_nome: "Guerreiro", xclasse_nivel: 5 } } }, catalogo, op);
const nomes = Object.values(up).map((l) => l.nome).sort();
assert.deepEqual(nomes, ["Conhecimento de Golpes", "Conhecimentos de Posturas", "Treinamento de Armaduras", "Treinamento de Armas"]);
assert.ok(Object.values(up).every((l) => l.tipo === "Classe" && l.xtal_concedido.startsWith("guerreiro:")));
// caindo para o 2º nível, Treinamento de Armaduras e de Armas saem
const comHab = { rep_class: { a: { xclass_nome: "Guerreiro", xclasse_nivel: 2 } }, rep_talento: {} };
for (const [k, v] of Object.entries(up)) comHab.rep_talento[k.split(".").at(-1)] = v;
const desce = sincronizacaoDeHabilidades(comHab, catalogo, op);
assert.equal(Object.keys(desce).filter((k) => k.includes("-=")).length, 2);
// nada muda quando já está sincronizado
const sincronizado = { ...comHab, rep_class: { a: { xclass_nome: "Guerreiro", xclasse_nivel: 5 } } };
assert.deepEqual(sincronizacaoDeHabilidades(sincronizado, catalogo, op), {});

/* Nome da tabela acompanha o nível: Bárbaro 3 tem "Fúria 2/dia" (ou equivalente) */
const barbaro = classes.find((c) => c.id === "barbaro");
const furia = Object.values(sincronizacaoDeHabilidades({ rep_class: { a: { xclass_nome: "Bárbaro", xclasse_nivel: 10 } } }, catalogo, op))
  .find((l) => l.nome.startsWith("Fúria") && !/Maior|Incans|Poderosa/.test(l.nome));
const esperado = barbaro.tabela.filter((l) => l.nivel <= 10).flatMap((l) => l.habilidades)
  .filter((h) => /^Fúria \d/.test(h)).at(-1);
assert.equal(furia.nome, esperado);

/* Talento escolhido vira linha de Talentos & Habilidades */
const linha = linhaDeTalento(catalogo.talentos.find((t) => t.nome === "Guarda de Ferro"), "n8-classe");
assert.equal(linha.tipo, "Classe");
assert.equal(linha.xtal_vaga, "n8-classe");
assert.match(linha.descricao, /Pré-requisito: 8º Nível de Guerreiro/);

console.log("progressao.test.mjs: todos os testes passaram");
