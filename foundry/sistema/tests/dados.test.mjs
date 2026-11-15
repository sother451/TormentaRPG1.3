// Confere se cada item dos compêndios (data/*.json) bate com o modelo de dados do sistema.
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";

const ESPERADO = {
  raca: { descricao: "string" },
  classe: { descricao: "string", nivel: "int", inicial: "boolean", bba: ["completo", "intermediario", "baixo"], pvInicial: "int", pvPorNivel: "int", pm: { base: "int?", porNivel: "int?", atual: "int" } },
  talento: { descricao: "string", grupo: "string", prerequisitos: "string", beneficio: "string", usos: { atual: "int", max: "int" } },
  magia: { descricao: "string", ciclo: "int", procedencia: "string", escola: "string", tempo: "string", alcance: "string", alvo: "string", duracao: "string", resistencia: "string", custoPM: "int", dano: "string", reserva: "string", preparada: "boolean" },
  arma: { descricao: "string", categoria: "string", propriedades: "string", tipoDano: "string", tipoAtaque: ["corpo", "distancia", "arremesso"], habilidadeAtaque: ["", "for", "des", "con", "int", "sab", "car"], dano: "string", critico: "string", bonusAtaque: "string", bonusDano: "string", municao: "int?", peso: "number", quantidade: "int", preco: "string", equipada: "boolean" },
  armadura: { descricao: "string", escudo: "boolean", categoria: "string", ca: "int", maxDex: "int?", penalidade: "int", peso: "number", quantidade: "int", preco: "string", equipada: "boolean" },
  equipamento: { descricao: "string", peso: "number", quantidade: "int", preco: "string" },
  itemMagico: { descricao: "string", peso: "number", quantidade: "int", preco: "string", equipado: "boolean" }
};

function confere(spec, valor, caminho) {
  if (Array.isArray(spec)) return assert.ok(spec.includes(valor), `${caminho}: "${valor}" fora de ${spec}`);
  if (typeof spec === "object") {
    assert.ok(valor && typeof valor === "object", `${caminho}: objeto esperado`);
    for (const k of Object.keys(spec)) confere(spec[k], valor[k], `${caminho}.${k}`);
    return;
  }
  const opcional = spec.endsWith("?"); const tipo = spec.replace("?", "");
  if (opcional && valor === null) return;
  if (tipo === "int") assert.ok(Number.isInteger(valor), `${caminho}: inteiro esperado, veio ${valor}`);
  else if (tipo === "number") assert.ok(typeof valor === "number" && valor >= 0, `${caminho}: número esperado, veio ${valor}`);
  else assert.equal(typeof valor, tipo, `${caminho}: ${tipo} esperado`);
}

let total = 0; const ids = new Set();
for (const arquivo of readdirSync("data").filter((a) => a.endsWith(".json") && a !== "condicoes.json")) {
  const itens = JSON.parse(readFileSync(`data/${arquivo}`, "utf8"));
  const locais = new Set();
  for (const it of itens) {
    const onde = `${arquivo}:${it.name}`;
    assert.ok(it.name && it.name.length < 120, `${onde}: nome inválido`);
    assert.ok(ESPERADO[it.type], `${onde}: tipo desconhecido ${it.type}`);
    confere(ESPERADO[it.type], it.system, onde);
    if (it.type === "magia") assert.ok(it.system.ciclo >= 0 && it.system.ciclo <= 9, `${onde}: ciclo`);
    const sid = it.flags.tormenta13.sourceId;
    assert.ok(sid, `${onde}: sem sourceId`); assert.ok(!locais.has(sid), `${onde}: sourceId duplicado ${sid}`);
    locais.add(sid); total++;
  }
}
console.log(`dados.test.mjs: ${total} itens válidos`);
