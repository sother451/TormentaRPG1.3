/**
 * Regras do Tormenta RPG 1.3 como funções puras (sem dependência do Foundry),
 * para poderem ser testadas em Node. Fonte: TORMENTA_1_3_FOUNDRY_COMPENDIUM.md.
 */
const soma = (lista) => lista.reduce((s, v) => s + (Number(v) || 0), 0);

/** Tabela de habilidades: modificador = floor(total / 2) - 5. */
export const modHabilidade = (total) => Math.floor(total / 2) - 5;

/** MdN: metade do nível, arredondada para baixo. */
export const metadeNivel = (nivel) => Math.floor(nivel / 2);

const FATOR_BBA = { completo: 1, intermediario: 0.75, baixo: 0.5 };
/** BBA de uma classe (o do personagem é a soma de todas as classes). */
export const bbaClasse = (tipo, nivel) => Math.floor(nivel * (FATOR_BBA[tipo] ?? 0));

/** Perícia: treinada = nível + 3 graduações; não treinada = metade do nível. */
export const graduacao = (nivel, treinada) => (treinada ? nivel + 3 : metadeNivel(nivel));

export function bonusPericia({ nivel, treinada, mod, outros = 0, penalidadeArmadura = 0, tamanho = 0 }) {
  return graduacao(nivel, treinada) + mod + outros + penalidadeArmadura + tamanho;
}

/** Bônus máximo de Destreza: o menor limite entre as peças equipadas. */
export function desEfetiva(modDes, limites = []) {
  const validos = limites.filter((l) => l !== null && l !== undefined);
  return validos.length ? Math.min(modDes, ...validos) : modDes;
}

/** CA = 10 + MdN + Des + armadura + escudo (+ tamanho + outros). */
export const calcularCA = ({ mdn, des, armadura = 0, escudo = 0, tamanho = 0, bonus = 0 }) =>
  10 + mdn + des + armadura + escudo + tamanho + bonus;

/**
 * PV: a classe inicial dá o PV inicial (+Con) no 1º nível; cada nível seguinte dá
 * o PV/nível da classe escolhida (+Con), nunca menos que 1.
 */
export function pvMaximo({ classes, con, bonusNivel = 0, bonus = 0 }) {
  const total = soma(classes.map((c) => c.nivel));
  if (total <= 0) return Math.max(0, bonus);
  const inicial = classes.find((c) => c.inicial && c.nivel > 0) ?? classes.find((c) => c.nivel > 0);
  let pv = inicial.pvInicial + con + bonusNivel;
  for (const c of classes) {
    const niveis = c === inicial ? c.nivel - 1 : c.nivel;
    if (niveis > 0) pv += niveis * Math.max(1, c.pvPorNivel + con + bonusNivel);
  }
  return pv + bonus;
}

/** PM de uma classe: base + modificador de conjuração + PM por nível a partir do 2º. */
export function pmMaximo({ base, porNivel, nivel, mdc, bonus = 0 }) {
  if (base === null || base === undefined || nivel <= 0) return 0;
  return base + mdc + (nivel - 1) * (porNivel ?? 0) + bonus;
}

/** Interpreta "19-20", "x3", "19-20/x3": margem de ameaça e multiplicador. */
export function parseCritico(texto) {
  const t = String(texto ?? "");
  const margem = /(\d+)\s*[-–]\s*20/.exec(t);
  const mult = /[x×]\s*(\d)/i.exec(t);
  return { margem: margem ? Number(margem[1]) : 20, multiplicador: mult ? Number(mult[1]) : 2 };
}

/** Multiplica os dados de uma fórmula ("1d8+1", x2 -> "2d8+1"). */
export const multiplicarDados = (formula, fator) =>
  String(formula).replace(/(\d*)d(\d+)/gi, (_, n, f) => `${(Number(n) || 1) * fator}d${f}`);

/** Valor de uma variável do jogador: número quando possível, senão o texto (ex.: "1d4"). */
export function valorVariavel(v) {
  if (typeof v === "number") return v;
  const s = String(v ?? "").trim();
  return s !== "" && Number.isFinite(Number(s)) ? Number(s) : s;
}

/** Nome de variável seguro para usar como @nome numa fórmula. */
export const slugVariavel = (nome) =>
  String(nome ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[^a-z0-9_]+/g, "_").replace(/^_+|_+$/g, "");

/** Extrai o peso em kg de textos como "1Kg (1,5 Kg)" ou "0,5Kg". */
export const pesoKg = (texto) => {
  const m = /([\d.,]+)\s*kg/i.exec(String(texto ?? ""));
  return m ? Number(m[1].replace(",", ".")) : 0;
};

/** Pontos de Ação (compendium, tabela de recuperação): dado extra, PV e PM recuperados por faixa de nível. */
const TABELA_PA = [
  { ate: 4, dado: "1d4", pv: "3d8 + 2", pm: "1d4 + 1" },
  { ate: 8, dado: "2d4", pv: "4d8 + 3", pm: "2d4 + 2" },
  { ate: 12, dado: "2d6", pv: "5d10 + 4", pm: "2d6 + 3" },
  { ate: 16, dado: "3d6", pv: "6d10 + 5", pm: "3d6 + 4" },
  { ate: 20, dado: "4d8", pv: "7d12 + 6", pm: "4d8 + 5" }
];
export const tabelaPA = (nivel) => TABELA_PA.find((f) => nivel <= f.ate) ?? TABELA_PA[TABELA_PA.length - 1];
