import rawCatalog from './cardapio-itens-magicos.txt?raw';

export type MagicItemAura = 'Tênue' | 'Moderada' | 'Poderosa' | 'Avassaladora' | 'Sem Aura';

export interface MagicCatalogItem {
  id: string;
  name: string;
  aura: MagicItemAura;
  auraSlug: string;
  paragraphs: string[];
  price: string | null;
  priceValue: number | null;
  weight: string | null;
}

const definitions: Array<{ name: string; aura: MagicItemAura }> = [{"name":"Nota Promissória do Poder","aura":"Tênue"},{"name":"Flecha do sono","aura":"Tênue"},{"name":"Elixir do amor","aura":"Tênue"},{"name":"Elixir do Estrangeiro","aura":"Tênue"},{"name":"Pó de apagar rastros","aura":"Tênue"},{"name":"Virote gritante","aura":"Tênue"},{"name":"Elixir da verdade","aura":"Tênue"},{"name":"Flechas Elementais","aura":"Tênue"},{"name":"Fúria dos Céus","aura":"Tênue"},{"name":"Língua do Dragão","aura":"Tênue"},{"name":"Nevasca","aura":"Tênue"},{"name":"Elixir Estrambólico","aura":"Tênue"},{"name":"Arco de Tollon","aura":"Tênue"},{"name":"Chave de Wynna","aura":"Tênue"},{"name":"Máscara da Revolução","aura":"Tênue"},{"name":"Filactério da Fé","aura":"Tênue"},{"name":"Armadura de Treinamento","aura":"Tênue"},{"name":"Braçadeiras da armadura","aura":"Tênue"},{"name":"Manto da resistência","aura":"Tênue"},{"name":"Arma dos Becos","aura":"Tênue"},{"name":"Elixir de cuspir fogo","aura":"Tênue"},{"name":"Ar Engarrafado","aura":"Tênue"},{"name":"Pó da ilusão","aura":"Tênue"},{"name":"Lâmina Élfica","aura":"Tênue"},{"name":"Amuleto dos Sussurros","aura":"Tênue"},{"name":"Azagaia dos relâmpagos","aura":"Tênue"},{"name":"Chapéu do disfarce","aura":"Tênue"},{"name":"Flauta do som","aura":"Tênue"},{"name":"Espada de Cavaleiro","aura":"Tênue"},{"name":"Pedra da Boa Sorte","aura":"Tênue"},{"name":"Cápsula da Sinergia","aura":"Tênue"},{"name":"Amuleto do Conhecimento Arcano","aura":"Tênue"},{"name":"Criatura em Miniatura","aura":"Tênue"},{"name":"Anel de proteção","aura":"Tênue"},{"name":"Arma do Plebeu","aura":"Tênue"},{"name":"Anel de queda suave","aura":"Tênue"},{"name":"Gema elemental","aura":"Tênue"},{"name":"Flecha assassina","aura":"Tênue"},{"name":"Anel do sustento","aura":"Tênue"},{"name":"Bordão das Maldições","aura":"Tênue"},{"name":"Amuleto do Idioma","aura":"Tênue"},{"name":"Manto élfico","aura":"Tênue"},{"name":"Anel da Graça das Águas","aura":"Tênue"},{"name":"Mochila de carga","aura":"Tênue"},{"name":"Carrilhão da abertura","aura":"Tênue"},{"name":"Lanceiro","aura":"Tênue"},{"name":"Ferraduras da velocidade","aura":"Tênue"},{"name":"Corda da escalada","aura":"Tênue"},{"name":"Arma Ocultável","aura":"Tênue"},{"name":"Escudo do conjurador","aura":"Tênue"},{"name":"Espada de Aço-Rubi","aura":"Tênue"},{"name":"Cota de malha élfica","aura":"Tênue"},{"name":"Pó do desaparecimento","aura":"Tênue"},{"name":"Bálsamo de pedra","aura":"Tênue"},{"name":"Itens de Atributo(força,destreza,constituição,inteligência,sabedoria,carisma) +2/+4/+6","aura":"Tênue"},{"name":"Anel da Contramágica","aura":"Tênue"},{"name":"Estilhaçadora","aura":"Tênue"},{"name":"Escudo brilhante","aura":"Tênue"},{"name":"Couraça dos anões","aura":"Tênue"},{"name":"Manto dos Dao","aura":"Tênue"},{"name":"Incenso da meditação","aura":"Tênue"},{"name":"Bastão imóvel","aura":"Tênue"},{"name":"Braçadeiras Bélicas","aura":"Tênue"},{"name":"Braçadeiras do arqueiro","aura":"Tênue"},{"name":"Cinturão de Controle da Gravidade","aura":"Tênue"},{"name":"Amuleto de Valkaria","aura":"Tênue"},{"name":"Indumentária do Guarda-Costas","aura":"Tênue"},{"name":"Mapa da Cidade","aura":"Tênue"},{"name":"Pedra Infectada","aura":"Tênue"},{"name":"Couro de rinoceronte","aura":"Tênue"},{"name":"Garrafa da fumaça eterna","aura":"Tênue"},{"name":"Botas de caminhar e saltar","aura":"Tênue"},{"name":"Leque do vento","aura":"Tênue"},{"name":"Escudo espinhoso","aura":"Tênue"},{"name":"Amuleto dos punhos poderosos","aura":"Tênue"},{"name":"Barraca Segura de Aleph","aura":"Tênue"},{"name":"Venda da Escuridão","aura":"Tênue"},{"name":"Anel do escudo mental","aura":"Tênue"},{"name":"Adaga venenosa","aura":"Tênue"},{"name":"Bastão do Favor de Wynna","aura":"Tênue"},{"name":"Caneco de Murphy","aura":"Tênue"},{"name":"Bastões metamágicos","aura":"Moderada"},{"name":"Escudo do leão","aura":"Moderada"},{"name":"Capa de Thyatis","aura":"Moderada"},{"name":"Bordão do Geomante","aura":"Moderada"},{"name":"Cospe-Chamas","aura":"Moderada"},{"name":"Distintivo da Milícia","aura":"Moderada"},{"name":"Cajado da Enfeitiçar","aura":"Moderada"},{"name":"Manto da Invisibilidade","aura":"Moderada"},{"name":"Botas da velocidade","aura":"Moderada"},{"name":"Colar das Bolas de Fogo","aura":"Moderada"},{"name":"Monóculo da Águia","aura":"Moderada"},{"name":"Cinto do monge","aura":"Moderada"},{"name":"Gema da luminosidade","aura":"Moderada"},{"name":"Cajado da Fogo","aura":"Moderada"},{"name":"Cajado da Enxame","aura":"Moderada"},{"name":"Bainha das lâminas afiadas","aura":"Moderada"},{"name":"Botas aladas","aura":"Moderada"},{"name":"Bordão da Defesa","aura":"Moderada"},{"name":"Manto de Keenn","aura":"Moderada"},{"name":"Vassoura voadora","aura":"Moderada"},{"name":"Cajado da  Cura","aura":"Moderada"},{"name":"Escudo alado","aura":"Moderada"},{"name":"Espada Sagrada","aura":"Moderada"},{"name":"Tridente de comandar peixes","aura":"Moderada"},{"name":"Loriga segmentada da sorte","aura":"Moderada"},{"name":"Anel de invisibilidade","aura":"Moderada"},{"name":"Brincos de Marah","aura":"Moderada"},{"name":"Anel do arcano","aura":"Moderada"},{"name":"Cruz dos Caçadores","aura":"Moderada"},{"name":"Capa da Invisibilidade","aura":"Moderada"},{"name":"Bastão das Maravilhas","aura":"Moderada"},{"name":"Manto Cinzento","aura":"Moderada"},{"name":"Cinto do Campeão","aura":"Moderada"},{"name":"Língua flamejante","aura":"Moderada"},{"name":"Espada da sutileza","aura":"Moderada"},{"name":"Espada dos planos","aura":"Moderada"},{"name":"Armadura celestial","aura":"Moderada"},{"name":"Ladra das nove vidas","aura":"Moderada"},{"name":"Cajado da Frio","aura":"Moderada"},{"name":"Manto da Difusão","aura":"Moderada"},{"name":"Armadura das profundezas","aura":"Moderada"},{"name":"Bordão da Invocação","aura":"Moderada"},{"name":"Couraça do comando","aura":"Moderada"},{"name":"Arco do juramento","aura":"Moderada"},{"name":"Manto do morcego","aura":"Moderada"},{"name":"Armadura da velocidade","aura":"Moderada"},{"name":"Elmo da telepatia","aura":"Moderada"},{"name":"Periapto da saúde","aura":"Moderada"},{"name":"Alaúde Elétrico","aura":"Moderada"},{"name":"Cajado da Iluminação","aura":"Moderada"},{"name":"Manual do de atributos","aura":"Moderada"},{"name":"Arco Arcano","aura":"Moderada"},{"name":"Robe das Estrelas","aura":"Moderada"},{"name":"Toga do Senador","aura":"Moderada"},{"name":"Voz da Rebelião","aura":"Moderada"},{"name":"Chicote Escravizador","aura":"Moderada"},{"name":"Lanterna da revelação","aura":"Poderosa"},{"name":"Florete do Duelo","aura":"Poderosa"},{"name":"Medalhão de Lena","aura":"Poderosa"},{"name":"Arco Energético","aura":"Poderosa"},{"name":"Cajado da Transmutação","aura":"Poderosa"},{"name":"Cajado da Necromancia","aura":"Poderosa"},{"name":"Cajado da Abjuração","aura":"Poderosa"},{"name":"Cajado da Adivinhação","aura":"Poderosa"},{"name":"Cajado da Evocação","aura":"Poderosa"},{"name":"Cajado da Ilusão","aura":"Poderosa"},{"name":"Cajado do Encantamento","aura":"Poderosa"},{"name":"Bordão da Evocação","aura":"Poderosa"},{"name":"Cajado da Florestas","aura":"Poderosa"},{"name":"Anel de movimentação livre","aura":"Poderosa"},{"name":"Anel Anti-Veneno","aura":"Poderosa"},{"name":"Sorvedouro de vidas","aura":"Poderosa"},{"name":"Bola de cristal","aura":"Poderosa"},{"name":"Arco de Luz","aura":"Poderosa"},{"name":"Orbe das tempestades","aura":"Poderosa"},{"name":"Escudo absorvente","aura":"Poderosa"},{"name":"Sabre da perfuração","aura":"Poderosa"},{"name":"Lâmina do sol","aura":"Poderosa"},{"name":"Armadura demoníaca","aura":"Poderosa"},{"name":"Estigma do gelo","aura":"Poderosa"},{"name":"Cajado da Passagem","aura":"Poderosa"},{"name":"Gema Antimagia","aura":"Poderosa"},{"name":"Tapete voador","aura":"Poderosa"},{"name":"Caveira negra","aura":"Poderosa"},{"name":"Martelo de arremesso anão","aura":"Poderosa"},{"name":"Elmo do teletransporte","aura":"Poderosa"},{"name":"Anel de telecinesia","aura":"Poderosa"},{"name":"Robe do arquimago","aura":"Poderosa"},{"name":"Robe do Arco-Íris","aura":"Poderosa"},{"name":"Anel de regeneração","aura":"Poderosa"},{"name":"Estandarte da Legião","aura":"Poderosa"},{"name":"Espelho da oposição","aura":"Poderosa"},{"name":"Anel de refletir magias","aura":"Poderosa"},{"name":"Cajado do Poder","aura":"Poderosa"},{"name":"Escudo do sol","aura":"Poderosa"},{"name":"Vingadora sagrada","aura":"Poderosa"},{"name":"Cajado da Vida","aura":"Poderosa"},{"name":"Lâmina da sorte","aura":"Poderosa"},{"name":"Bordão do Tempo","aura":"Poderosa"},{"name":"Diamante do caos","aura":"Poderosa"},{"name":"Gema Bruta","aura":"Poderosa"},{"name":"Espelho do aprisionamento","aura":"Poderosa"},{"name":"Espada Vorpal","aura":"Poderosa"},{"name":"A Adaga da Coragem de Vallen","aura":"Poderosa"},{"name":"A Manopla da Juventude de Vallen","aura":"Poderosa"},{"name":"O Escudo do Amor de Vallen","aura":"Poderosa"},{"name":"Armadura de Crânio Negro","aura":"Poderosa"},{"name":"Baú do Açougueiro","aura":"Poderosa"},{"name":"Escudo de Azgher","aura":"Poderosa"},{"name":"Sabre Vampírico","aura":"Poderosa"},{"name":"Wakizashi da Morte","aura":"Poderosa"},{"name":"Toga do Reitor","aura":"Avassaladora"},{"name":"Armadura Risonha","aura":"Avassaladora"},{"name":"Espada-Deus","aura":"Avassaladora"},{"name":"Rhumnam, Espada-Pistola","aura":"Avassaladora"},{"name":"Tomo da Criação Mágica","aura":"Avassaladora"},{"name":"O Desbravador","aura":"Avassaladora"},{"name":"Holy Avenger","aura":"Avassaladora"},{"name":"Kailash","aura":"Avassaladora"},{"name":"O Olho de Sszzaas","aura":"Avassaladora"},{"name":"Os Rubis da Virtude","aura":"Avassaladora"},{"name":"Shorder","aura":"Avassaladora"},{"name":"Slash Calliber","aura":"Avassaladora"},{"name":"Espada das Estrelas","aura":"Sem Aura"},{"name":"Flauta Negra","aura":"Sem Aura"},{"name":"Ledd - A Lança Rubra","aura":"Sem Aura"},{"name":"Masakkoulèv, Espada de Maddox","aura":"Sem Aura"},{"name":"Máscara de Prata","aura":"Sem Aura"},{"name":"Manto do imperador","aura":"Sem Aura"},{"name":"Cálice dos Deuses","aura":"Sem Aura"},{"name":"Ruína da Civilização","aura":"Sem Aura"},{"name":"Cajado das Matas (Allihanna)","aura":"Sem Aura"},{"name":"Cimitarra Solar (Azgher)","aura":"Sem Aura"},{"name":"Adaga Sorrateira (Hyninn)","aura":"Sem Aura"},{"name":"Lança da Dominação (Kallyadranoch)","aura":"Sem Aura"},{"name":"Machado da Bravura (Keenn)","aura":"Sem Aura"},{"name":"Espada da Justiça (Khalmyr)","aura":"Sem Aura"},{"name":"Caldeirão da Vida (Lena)","aura":"Sem Aura"},{"name":"Katana da Determinação (Lin-Wu)","aura":"Sem Aura"},{"name":"Instrumento da Alegria (Marah)","aura":"Sem Aura"},{"name":"Maça Monstruosa (Megalokk)","aura":"Sem Aura"},{"name":"Alguma Coisa de Nimb…","aura":"Sem Aura"},{"name":"Tridente Aquoso (Oceano)","aura":"Sem Aura"},{"name":"Foice das Almas (Ragnar)","aura":"Sem Aura"},{"name":"Adaga Pavorosa (Sszzaas)","aura":"Sem Aura"},{"name":"Bordão Sabichão (Tanna-Toh)","aura":"Sem Aura"},{"name":"Machado Glorioso (Tauron)","aura":"Sem Aura"},{"name":"Shuriken Noturno (Tenebra)","aura":"Sem Aura"},{"name":"Espada Imaculada (Thyatis)","aura":"Sem Aura"},{"name":"Mangual Aventureiro (Valkaria)","aura":"Sem Aura"},{"name":"Varinha da Generosidade (Wynna)","aura":"Sem Aura"},{"name":"Vingança de Khinlanas","aura":"Sem Aura"}];

const auraHeadings = [
  'Aura Tênue',
  'Aura Moderada',
  'Aura Poderosa',
  'Aura Avassaladora',
  'Sem Aura / Uniques Sem Aura'
];

const escapeRegex = (value: string) => value.replace(/[.*+?^$()|[\]\\]/g, '\\$&');

const normalizeParagraph = (value: string) => value
  .replace(/([A-Za-zÀ-ÿ])\s+-\s*\n\s*([a-zà-ÿ])/g, '$1$2')
  .replace(/([A-Za-zÀ-ÿ])-\s*\n\s*([a-zà-ÿ])/g, '$1-$2')
  .replace(/\s*\n\s*/g, ' ')
  .replace(/\s{2,}/g, ' ')
  .trim();

const slugify = (value: string) => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '');

const auraSlug = (aura: MagicItemAura) => slugify(aura);

const locate = (name: string, fromIndex: number) => {
  const source = rawCatalog.slice(fromIndex);
  const pattern = new RegExp(`^\\s*•?\\s*${escapeRegex(name)}(?=\\s*:|\\s|$)`, 'm');
  const match = pattern.exec(source);
  return match ? fromIndex + match.index : -1;
};

const starts = definitions.map((definition, index) => ({
  ...definition,
  start: -1,
  index
}));

let cursor = 0;
for (const entry of starts) {
  entry.start = locate(entry.name, cursor);
  if (entry.start < 0) {
    throw new Error(`Item mágico não localizado no cardápio: ${entry.name}`);
  }
  cursor = entry.start + entry.name.length;
}

const extractPrice = (text: string) => {
  if (/\(sem preço\)/i.test(text)) return 'Sem preço informado';

  const explicit = text.match(/(?:^|[.;]\s+|\n)Preço\s*:?[ ]*([^\n]+?)(?=(?:\s+Peso\s*:?)|$)/i);
  if (explicit?.[1]) return explicit[1].trim().replace(/[.;]+$/, '');

  const possessive = text.match(/(?:Seu|O) preço (?:é|do [^.;]+ é)\s*([^.;]+(?:TO|bônus)[^.;]*)/i);
  if (possessive?.[1]) return possessive[1].trim();

  const trailing = text.match(/(?:^|\s)(\d[\d.]*\s*TO)(?:[.;]|$)/i);
  if (trailing?.[1]) return trailing[1].trim();

  return null;
};

const extractPriceValue = (price: string | null) => {
  if (!price || !/TO/i.test(price) || /variável/i.test(price)) return null;
  const match = price.match(/\d[\d.]*/);
  if (!match) return null;
  const value = Number(match[0].replace(/\./g, ''));
  return Number.isFinite(value) ? value : null;
};

const extractWeight = (text: string) => {
  const match = text.match(/Peso\s*:?[ ]*([^.;]+)/i);
  return match?.[1]?.trim() ?? null;
};

export const magicItemsCatalog: MagicCatalogItem[] = starts.map((entry, index) => {
  const nextStart = starts[index + 1]?.start ?? rawCatalog.length;
  let chunk = rawCatalog.slice(entry.start, nextStart);

  for (const heading of auraHeadings) {
    chunk = chunk.replace(new RegExp(`^\\s*${escapeRegex(heading)}\\s*$`, 'gm'), '');
  }

  chunk = chunk.replace(new RegExp(`^\\s*•?\\s*${escapeRegex(entry.name)}\\s*:?\\s*`, 'm'), '');

  const paragraphs = chunk
    .split(/\n\s*\n+/)
    .map(normalizeParagraph)
    .filter(Boolean);

  const joined = paragraphs.join('\n');
  const price = extractPrice(joined);

  return {
    id: slugify(entry.name),
    name: entry.name.replace(/\s{2,}/g, ' '),
    aura: entry.aura,
    auraSlug: auraSlug(entry.aura),
    paragraphs,
    price,
    priceValue: extractPriceValue(price),
    weight: extractWeight(joined)
  };
});
