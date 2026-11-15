export const SYSTEM_ID = "tormenta13";

export const HABILIDADES = {
  for: { label: "Força", abrev: "For" },
  des: { label: "Destreza", abrev: "Des" },
  con: { label: "Constituição", abrev: "Con" },
  int: { label: "Inteligência", abrev: "Int" },
  sab: { label: "Sabedoria", abrev: "Sab" },
  car: { label: "Carisma", abrev: "Car" }
};

/** Tabela de tamanhos (combate.ts): bônus em CA e ataque, e em Furtividade. */
export const TAMANHOS = {
  infimo: { label: "Ínfimo", ca: 8, furtividade: 16 },
  diminuto: { label: "Diminuto", ca: 4, furtividade: 12 },
  minimo: { label: "Mínimo", ca: 2, furtividade: 8 },
  pequeno: { label: "Pequeno", ca: 1, furtividade: 4 },
  medio: { label: "Médio", ca: 0, furtividade: 0 },
  grande: { label: "Grande", ca: -1, furtividade: -4 },
  enorme: { label: "Enorme", ca: -2, furtividade: -8 },
  descomunal: { label: "Descomunal", ca: -4, furtividade: -12 },
  colossal: { label: "Colossal", ca: -8, furtividade: -16 }
};

/** Resumo de perícias (pericias.ts). */
export const PERICIAS = {
  acrobacia: { label: "Acrobacia", hab: "des", soTreinada: false, armadura: true },
  adestrarAnimais: { label: "Adestrar Animais", hab: "car", soTreinada: true, armadura: false },
  atletismo: { label: "Atletismo", hab: "for", soTreinada: false, armadura: true },
  atuacao: { label: "Atuação", hab: "car", soTreinada: false, armadura: false },
  cavalgar: { label: "Cavalgar", hab: "des", soTreinada: false, armadura: false },
  conhecimento: { label: "Conhecimento", hab: "int", soTreinada: true, armadura: false },
  cura: { label: "Cura", hab: "sab", soTreinada: false, armadura: false },
  diplomacia: { label: "Diplomacia", hab: "car", soTreinada: false, armadura: false },
  enganacao: { label: "Enganação", hab: "car", soTreinada: false, armadura: false },
  furtividade: { label: "Furtividade", hab: "des", soTreinada: false, armadura: true },
  identificarMagia: { label: "Identificar Magia", hab: "int", soTreinada: true, armadura: false },
  iniciativa: { label: "Iniciativa", hab: "des", soTreinada: false, armadura: false },
  intimidacao: { label: "Intimidação", hab: "car", soTreinada: false, armadura: false },
  intuicao: { label: "Intuição", hab: "sab", soTreinada: false, armadura: false },
  jogatina: { label: "Jogatina", hab: "car", soTreinada: false, armadura: false },
  ladinagem: { label: "Ladinagem", hab: "des", soTreinada: true, armadura: true },
  obterInformacao: { label: "Obter Informação", hab: "car", soTreinada: false, armadura: false },
  oficio: { label: "Ofício", hab: "int", soTreinada: false, armadura: false },
  percepcao: { label: "Percepção", hab: "sab", soTreinada: false, armadura: false },
  sobrevivencia: { label: "Sobrevivência", hab: "sab", soTreinada: false, armadura: false }
};

/** Perícias que se dividem em várias (Atuação, Conhecimento, Ofício). */
export const PERICIAS_ESPECIALIZAVEIS = ["atuacao", "conhecimento", "oficio"];

export const RESISTENCIAS = {
  fortitude: { label: "Fortitude", hab: "con" },
  reflexos: { label: "Reflexos", hab: "des" },
  vontade: { label: "Vontade", hab: "sab" }
};

export const TIPOS_BBA = { completo: "Completo", intermediario: "Intermediário", baixo: "Baixo" };
export const TIPOS_ATAQUE = { corpo: "Corpo a corpo", distancia: "À distância", arremesso: "Arremesso" };

/** Nomes que as variáveis do jogador não podem usar (já são dados de rolagem). */
export const RESERVADAS = [
  ...Object.keys(HABILIDADES), ...Object.keys(PERICIAS), ...Object.keys(RESISTENCIAS),
  "nivel", "mdn", "mdc", "bba", "ca", "cd"
];
