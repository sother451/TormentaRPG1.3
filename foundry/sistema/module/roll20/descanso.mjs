/**
 * Descanso (Tormenta 1.3, "Cura natural"):
 * - Descanso rápido (pelo menos 1 hora): teste de Constituição; recupera o resultado em PV. A partir do 5º nível,
 *   o dobro; do 10º, o triplo; do 15º, o quádruplo.
 * - Descanso longo (pelo menos 8 horas): recupera todos os PV e PM e 1 ponto de dano de habilidade temporário.
 *   Os usos diários das habilidades e talentos também voltam.
 * Nunca recupera acima do máximo. Puro (testável em Node): recebe a FichaRoll20 para ler os valores calculados.
 */
import { inteiro } from "./motor.mjs";

const ATRIBUTOS = ["for", "des", "con", "int", "sab", "car"];
const NOMES = { for: "For", des: "Des", con: "Con", int: "Int", sab: "Sab", car: "Car" };

/** Multiplicador do descanso rápido pelo nível do personagem. */
export const multiplicadorDeDescanso = (nivel) => Math.min(4, 1 + Math.floor(Math.max(0, nivel) / 5));

/**
 * Descanso rápido: PV recuperados a partir do resultado do teste de Constituição.
 * @returns {{update, cura, multiplicador}}
 */
export function descansoRapido(system, ficha, resultado) {
  const multiplicador = multiplicadorDeDescanso(ficha.numero("nivel"));
  const atual = inteiro(system.pv);
  const max = ficha.numero("pv_max");
  const cura = Math.max(0, Math.min(Math.max(0, resultado) * multiplicador, max - atual));
  return { update: cura ? { "system.pv": atual + cura } : {}, cura, multiplicador };
}

/**
 * Descanso longo.
 * @returns {{update, partes: string[]}} partes = o que foi recuperado (para o chat)
 */
export function descansoLongo(system, ficha) {
  const update = {};
  const partes = [];

  const pv = inteiro(system.pv);
  const pvMax = ficha.numero("pv_max");
  if (pv < pvMax) { update["system.pv"] = pvMax; partes.push(`PV ${pv} → ${pvMax}`); }

  for (const [id, linha] of Object.entries(system.rep_pms ?? {})) {
    const total = ficha.numero("xpm_total", ficha.linha("pms", id));
    const atual = inteiro(linha.xpm_atual);
    if (atual < total) { update[`system.rep_pms.${id}.xpm_atual`] = total; partes.push(`PM ${atual} → ${total}`); }
  }

  let usos = 0;
  for (const [id, linha] of Object.entries(system.rep_talento ?? {})) {
    const max = ficha.numero("max_usos", ficha.linha("talento", id));
    if (max > 0 && inteiro(linha.usos_atual) < max) { update[`system.rep_talento.${id}.usos_atual`] = max; usos++; }
  }
  if (usos) partes.push(`usos diários de ${usos} habilidade(s)/talento(s)`);

  // Dano de habilidade: Temp negativo volta 1 ponto.
  for (const a of ATRIBUTOS) {
    const temp = inteiro(system[`${a}_temp`]);
    if (temp < 0) { update[`system.${a}_temp`] = temp + 1; partes.push(`${NOMES[a]} temp ${temp} → ${temp + 1}`); }
  }
  return { update, partes };
}
