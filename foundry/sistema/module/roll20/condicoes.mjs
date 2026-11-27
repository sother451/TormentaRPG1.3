/**
 * Condições (efeitos de status do token) aplicadas na ficha.
 *
 * - As penalidades numéricas viram linhas automáticas em "Modificadores" (xmod_origem = "cond:<id>#<n>"),
 *   do mesmo jeito que os bônus de talentos: entram ligadas e saem quando a condição sai do token.
 * - O resto (não pode agir, metade do deslocamento, 50% de falha...) aparece como lembrete na faixa de
 *   condições no topo da ficha.
 * - Condições que trazem outras: Agarrado, Atordoado, Cego e Surpreendido deixam Desprevenido;
 *   Inconsciente e Paralisado deixam Indefeso. A penalidade de uma condição não conta duas vezes.
 * - Apavorado substitui Abalado; Exausto substitui Fatigado.
 * Puro (testável em Node).
 */

const PERICIAS_FOR_DES = ["Acrobacia", "Atletismo", "Cavalgar", "Furtividade", "Iniciativa", "Ladinagem"];

/** id → { nome, mods: [[parâmetro, valor]], resumo, implica?, substituidaPor? } */
export const CONDICOES = {
  abalado: { nome: "Abalado", mods: [["Testes", -2]], resumo: "−2 em ataques, perícias e resistências (testes de atributo: −2 à parte)", substituidaPor: ["apavorado"] },
  agarrado: { nome: "Agarrado", mods: [["Ataques", -2]], resumo: "−2 nos ataques, só armas leves, não pode se mover", implica: ["desprevenido"] },
  apavorado: { nome: "Apavorado", mods: [["Testes", -4]], resumo: "foge da fonte do medo; se lutar, −4 em ataques, perícias e resistências" },
  atordoado: { nome: "Atordoado", mods: [], resumo: "não pode agir", implica: ["desprevenido"] },
  caido: { nome: "Caído", mods: [["Ataque CaC", -4]], resumo: "−4 nos ataques corpo a corpo, metade do deslocamento; inimigos: +4 corpo a corpo, −4 à distância contra você" },
  cego: { nome: "Cego", mods: [["CA", -4], ...PERICIAS_FOR_DES.map((p) => [p, -4])],
    resumo: "50% de chance de errar, −4 na CA, −4 em perícias de For/Des, metade do deslocamento", implica: ["desprevenido"] },
  confuso: { nome: "Confuso", mods: [], resumo: "veja a magia Confusão" },
  "dano-de-habilidade": { nome: "Dano de Habilidade", mods: [], resumo: "ponha a perda no Temp do atributo (volta 1 ponto por descanso longo)" },
  desprevenido: { nome: "Desprevenido", mods: [["CA", -4]], resumo: "−4 na CA" },
  enjoado: { nome: "Enjoado", mods: [], resumo: "só uma ação (padrão, bônus ou movimento) por rodada" },
  enredado: { nome: "Enredado", mods: [["Ataques", -2], ["DES", -4]], resumo: "−2 nos ataques, −4 na Des, metade do deslocamento, sem correr ou investir" },
  exausto: { nome: "Exausto", mods: [["FOR", -6], ["DES", -6]], resumo: "−6 na For e Des, metade do deslocamento, sem correr ou investir" },
  fascinado: { nome: "Fascinado", mods: [["Percepçao", -4]], resumo: "fica parado observando; −4 em Percepção" },
  fatigado: { nome: "Fatigado", mods: [["FOR", -2], ["DES", -2]], resumo: "−2 na For e Des, sem correr ou investir", substituidaPor: ["exausto"] },
  inconsciente: { nome: "Inconsciente", mods: [], resumo: "não pode agir", implica: ["indefeso"] },
  incorporeo: { nome: "Incorpóreo", mods: [], resumo: "imune a ataques não mágicos (mágicos: 50% de falha); seus ataques ignoram armadura, escudo e armadura natural" },
  indefeso: { nome: "Indefeso", mods: [], resumo: "CA = 5 + tamanho; pode sofrer golpe de misericórdia" },
  lento: { nome: "Lento", mods: [["Ataques", -1], ["CA", -1], ["Reflexo", -1]], resumo: "uma ação por rodada; −1 em ataques, CA e Reflexos; metade do deslocamento" },
  ofuscado: { nome: "Ofuscado", mods: [["Ataques", -1]], resumo: "−1 nos ataques" },
  paralisado: { nome: "Paralisado", mods: [], resumo: "For e Des efetivas 0; só ações mentais", implica: ["indefeso"] },
  pasmo: { nome: "Pasmo", mods: [], resumo: "não pode agir (mas se defende normalmente)" },
  sangrando: { nome: "Sangrando", mods: [], resumo: "no início do turno, Con CD 15: passa estabiliza; falha sofre 1d4 de dano" },
  surdo: { nome: "Surdo", mods: [["Iniciativa", -4], ["Percepçao", -4]], resumo: "−4 em Iniciativa e Percepção; Vontade CD 10 + nível da magia para lançar magias" },
  surpreendido: { nome: "Surpreendido", mods: [], resumo: "não age na primeira rodada", implica: ["desprevenido"] }
};

/**
 * Condições que valem, com as trazidas por outras.
 * @param {Iterable<string>} ids  efeitos de status do ator
 * @returns {{id, nome, resumo, via: string|null, substituida: boolean}[]}
 */
export function condicoesEfetivas(ids) {
  const ativos = new Set([...(ids ?? [])].filter((id) => CONDICOES[id]));
  const lista = [];
  const vistos = new Set();
  const incluir = (id, via) => {
    if (vistos.has(id)) return;
    vistos.add(id);
    const c = CONDICOES[id];
    const substituida = (c.substituidaPor ?? []).some((s) => ativos.has(s));
    lista.push({ id, nome: c.nome, resumo: c.resumo, via, substituida });
    for (const outra of c.implica ?? []) incluir(outra, c.nome);
  };
  for (const id of Object.keys(CONDICOES)) if (ativos.has(id)) incluir(id, null);
  // Uma condição trazida por outra que também está no token conta como do token.
  for (const c of lista) if (c.via && ativos.has(c.id)) c.via = null;
  return lista;
}

/**
 * Linhas de Modificadores que as condições pedem (mesmo formato de modificadoresDosTalentos).
 * @returns {Map<string, {origem, nome, tipo, hab, extra, situacional, escolha}>}
 */
export function modificadoresDasCondicoes(ids) {
  const desejadas = new Map();
  for (const c of condicoesEfetivas(ids)) {
    if (c.substituida) continue;
    CONDICOES[c.id].mods.forEach(([tipo, extra], n) => {
      const origem = `cond:${c.id}#${n}`;
      desejadas.set(origem, {
        origem, nome: `Condição: ${c.nome}${c.via ? ` (por ${c.via})` : ""}`, tipo, hab: "0", extra,
        situacional: false, escolha: null
      });
    });
  }
  return desejadas;
}

/** Faixa do topo da ficha: só as condições ativas, cada uma com o lembrete do que ela faz. */
export function faixaDeCondicoes(ids) {
  return condicoesEfetivas(ids).map((c) => ({
    ...c,
    texto: c.substituida ? `substituída por ${(CONDICOES[c.id].substituidaPor ?? []).map((s) => CONDICOES[s].nome).join(", ")}` : c.resumo
  }));
}
