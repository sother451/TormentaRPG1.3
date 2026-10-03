export type ClassStatus = 'mapeada' | 'revisar' | 'fonte-incompleta';

export interface ClassEntry {
  slug: string;
  name: string;
  family: string;
  bba: 'Completo' | 'Intermediário' | 'Baixo';
  pvInitial: number;
  pvPerLevel: number;
  systems: string[];
  status?: ClassStatus;
  note?: string;
}

export const classEntries: ClassEntry[] = [
  { slug:'barbaro', name:'Bárbaro', family:'Bárbaro', bba:'Completo', pvInitial:24, pvPerLevel:6, systems:['Fúria','Movimento Rápido','Instinto Selvagem','Gritos de Poder'] },
  { slug:'bardo', name:'Bardo', family:'Bardo', bba:'Intermediário', pvInitial:12, pvPerLevel:3, systems:['Música de Bardo','Estilos Musicais','Autoconfiança'] },
  { slug:'cavaleiro', name:'Cavaleiro', family:'Cavaleiro', bba:'Intermediário', pvInitial:16, pvPerLevel:4, systems:['Orgulho do Cavaleiro','Montaria Real','Lorde Guerreiro / Lorde Governante'] },
  { slug:'clerigo', name:'Clérigo', family:'Clérigo', bba:'Baixo', pvInitial:8, pvPerLevel:2, systems:['Canalizar Energia','Devoto','Símbolo Sagrado','Divina Comédia'] },
  { slug:'cruzado', name:'Cruzado', family:'Clérigo', bba:'Completo', pvInitial:16, pvPerLevel:4, systems:['Arma Sagrada','Canalizar Destruição','Armadura Sagrada','Prece de Combate'] },
  { slug:'usurpador', name:'Usurpador', family:'Clérigo', bba:'Baixo', pvInitial:16, pvPerLevel:4, systems:['Furto de Essência','Aprender','Glutão','Forma da Alma'] },
  { slug:'druida', name:'Druida', family:'Druida', bba:'Baixo', pvInitial:8, pvPerLevel:2, systems:['Forma Selvagem','Magia Natural','Sítio Sagrado','Ritos Primordiais'] },
  { slug:'metamorfo', name:'Metamorfo', family:'Druida', bba:'Completo', pvInitial:20, pvPerLevel:5, systems:['Mente Selvagem','Forma Selvagem','Formas Selvagens','Instinto Carnívoro'] },
  { slug:'senhor-das-feras', name:'Senhor das Feras', family:'Druida', bba:'Baixo', pvInitial:16, pvPerLevel:4, systems:['Companheiros Animais','Familiares','Táticas da Matilha','Frenesi Selvagem'] },
  { slug:'guerreiro', name:'Guerreiro', family:'Guerreiro', bba:'Completo', pvInitial:20, pvPerLevel:5, systems:['Golpes Marciais','Posturas','Treinamento de Armas','Escola de Combate'] },
  { slug:'samurai', name:'Samurai', family:'Guerreiro', bba:'Completo', pvInitial:20, pvPerLevel:5, systems:['Armas Ancestrais','Bushido','Grito de Kiai','Mente sobre o Corpo'] },
  { slug:'ladino', name:'Ladino', family:'Ladino', bba:'Intermediário', pvInitial:12, pvPerLevel:3, systems:['Ataque Furtivo','Armadilhas','Negócios do Submundo'] },
  { slug:'ninja', name:'Ninja', family:'Ladino', bba:'Intermediário', pvInitial:12, pvPerLevel:3, systems:['Truques Ninja','Passo Ninja','Golpe Ninja'] },
  { slug:'cavaleiro-arcano', name:'Cavaleiro Arcano', family:'Mago', bba:'Completo', pvInitial:16, pvPerLevel:4, systems:['A Arte da Cópia','Zauberei','Zadavat'] },
  { slug:'cronomante', name:'Cronomante', family:'Mago', bba:'Baixo', pvInitial:8, pvPerLevel:2, systems:['Velocidade do Pensamento','Celeridade Arcana','Manipulação Temporal'] },
  { slug:'geomante-naturalista', name:'Geomante (Naturalista)', family:'Mago', bba:'Baixo', pvInitial:8, pvPerLevel:2, systems:['Servo Elemental','1001 Formas','Forma Pura'] },
  { slug:'necromante', name:'Necromante', family:'Mago', bba:'Baixo', pvInitial:8, pvPerLevel:2, systems:['Ritual dos Túmulos','Epidemia','Necropotência','Necronomicon'] },
  { slug:'numeromante', name:'Numeromante', family:'Mago', bba:'Baixo', pvInitial:8, pvPerLevel:2, systems:['Dado Numeromântico','Alterar a Equação','Multiplicar Metamagia'] },
  { slug:'monge', name:'Monge', family:'Monge', bba:'Completo', pvInitial:16, pvPerLevel:4, systems:['Sentir o Chi','Foco Espiritual','Andar nas Nuvens','Dano Desarmado'] },
  { slug:'paladino', name:'Paladino', family:'Paladino', bba:'Completo', pvInitial:20, pvPerLevel:5, systems:['Golpe Divino','Impor de Mãos','Armamentos da Fé','Montaria Sagrada','Imposição Celestial'] },
  { slug:'ranger', name:'Ranger', family:'Ranger', bba:'Completo', pvInitial:16, pvPerLevel:4, systems:['Lista de Presas','Escolas de Ranger','Técnicas de Ranger','Companheiro Animal'] },
  { slug:'artifice', name:'Artífice', family:'Artífice', bba:'Intermediário', pvInitial:12, pvPerLevel:3, systems:['Chave Sônica','Infundir Magias','Criação de Itens','Companheiro Autômato'] }
];

export const classFamilies = [...new Set(classEntries.map((entry) => entry.family))];
