export interface ForgeImprovement {
  id: string;
  name: string;
  effect: string;
  price: number;
  appliesTo: 'weapon' | 'armor' | 'shield' | 'protection';
}

export const forgeSources = {
  weaponImprovements: 'https://trpg.orcnroll.com/forjadearmas/',
  armorImprovements: 'https://trpg.orcnroll.com/forjadearmaduras/'
} as const;

/**
 * Aprimoramentos e sobretaxas reproduzem a referência da Forja ORC & Roll.
 * Armas-base, armaduras-base, materiais e encantamentos são carregados
 * separadamente dos dados do Tormenta 1.3.
 */
export const weaponForgeImprovements: ForgeImprovement[] = [
  { id:'precisa', name:'Precisa', effect:'+1 na margem de ameaça.', price:1500, appliesTo:'weapon' },
  { id:'obra-prima', name:'Obra-prima', effect:'+1 nas jogadas de ataque.', price:300, appliesTo:'weapon' },
  { id:'magistral', name:'Magistral', effect:'+2 nas jogadas de ataque.', price:900, appliesTo:'weapon' },
  { id:'macica', name:'Maciça', effect:'+1 no multiplicador de crítico.', price:3000, appliesTo:'weapon' },
  { id:'macabra', name:'Macabra', effect:'+2 em Intimidar, –2 em Diplomacia.', price:300, appliesTo:'weapon' },
  { id:'equilibrada', name:'Equilibrada', effect:'+2 em testes de manobras.', price:600, appliesTo:'weapon' },
  { id:'cravejada-joias', name:'Cravejada de joias', effect:'+2 em testes de Enganação.', price:3000, appliesTo:'weapon' },
  { id:'brutal', name:'Brutal', effect:'+1 nas jogadas de dano.', price:600, appliesTo:'weapon' },
  { id:'banhada-ouro', name:'Banhada a ouro', effect:'+2 em testes de Diplomacia.', price:1000, appliesTo:'weapon' }
];

export const armorForgeImprovements: ForgeImprovement[] = [
  { id:'espinhos-escudo', name:'Espinhos no Escudo', effect:'Aumenta o dano do escudo.', price:50, appliesTo:'shield' },
  { id:'espinhos-armadura', name:'Espinhos na Armadura', effect:'Causa dano com a manobra agarrar.', price:300, appliesTo:'armor' },
  { id:'obra-prima', name:'Obra-prima', effect:'Diminui a penalidade de armadura em 1.', price:300, appliesTo:'protection' },
  { id:'reforcada', name:'Reforçada', effect:'+1 na CA e aumenta a penalidade de armadura em 2.', price:600, appliesTo:'protection' },
  { id:'sob-medida', name:'Sob Medida', effect:'Diminui a penalidade de armadura em 2.', price:900, appliesTo:'protection' },
  { id:'delicada', name:'Delicada', effect:'Aumenta o bônus máximo de Destreza em 2.', price:1500, appliesTo:'protection' },
  { id:'polida', name:'Polida', effect:'+2 na CA durante a primeira rodada.', price:1500, appliesTo:'protection' },
  { id:'selada', name:'Selada', effect:'+1 nos testes de resistência.', price:3000, appliesTo:'protection' },
  { id:'banhado-ouro', name:'Banhado a ouro', effect:'+2 em testes de Diplomacia.', price:1000, appliesTo:'protection' },
  { id:'cravejado-joias', name:'Cravejado de Joias', effect:'+2 em testes de Enganação.', price:3000, appliesTo:'protection' },
  { id:'macabro', name:'Macabro', effect:'+2 em testes de Intimidar, –2 em testes de Diplomacia.', price:300, appliesTo:'protection' }
];

export const weaponMagicBonusPrices = [0, 2000, 8000, 18000, 32000, 50000, 72000, 98000, 128000, 162000, 200000] as const;
export const armorMagicBonusPrices = [0, 1000, 4000, 9000, 16000, 25000, 36000, 49000, 64000, 81000, 100000] as const;
