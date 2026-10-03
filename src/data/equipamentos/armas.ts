export interface WeaponEntry {
  name: string;
  category: string;
  price: string;
  damage: string;
  critical: string;
  properties: string;
  weight: string;
  type: string;
}
export const weaponIntro = [
  "TODA ARMA REQUER O USO DE NO MINIMO UMA MÃO PARA ATACAR. ESTE FATO PODE SER SOBESCRITO POR OUTRAS PROPRIEDADES QUE A ARMA POSSA OU NÃO TER",
  "Tipos"
];
export const weaponTypes = [
  {
    "name": "Armas simples",
    "text": "São aquelas de fácil manejo, que qualquer criatura inteligente (e com capacidade para manipular instrumentos) sabe usar. Adagas, clavas e lanças são exemplos de armas simples. Todos os personagens sabem usar todas as armas simples."
  },
  {
    "name": "Armas marciais",
    "text": "Também conhecidas como \"comuns\", são aquelas mais familiares aos adeptos do combate. Arcos, espadas e machados são exemplos de armas marciais."
  },
  {
    "name": "Armas exóticas",
    "text": "Armas deste tipo são difíceis de dominar, porque são pouco conhecidas ou exigem muito treinamento. A katana e o mosquete são exemplos de armas exóticas."
  },
  {
    "name": "Armas Improvisadas",
    "text": "Atacar com um objeto que não tenha sido feito para lutar (cadeiras, canecas, garrafas quebradas...) provoca penalidade de -4 na jogada de ataque. O dano e o crítico de uma arma improvisada são determinados pelo mestre, de acordo com seu tamanho e material. Por exemplo, uma perna de cadeira é parecida com uma clava, então tem dano 1d6 e crítico x2. Uma garrafa quebrada é parecida com uma adaga, então tem dano 1d4 e crítico 19-20."
  }
];
export const weaponProperties = [
  {
    "name": "Ágil",
    "text": "Esta arma pode ser sacada utilizando de uma ação livre."
  },
  {
    "name": "Acuidade",
    "text": "Esta arma permite que o usuario utilize o modificador ou de Força ou de Destreza nas jogadas de ataque com a mesma."
  },
  {
    "name": "Alcance",
    "text": "Esta arma possui um um alcance maximo no qual ela pode atingir alvos com ataques a distancia. Ataques que sejam feitos contra alvos alem do alcance da arma erram automaticamente."
  },
  {
    "name": "Arremesso",
    "text": "Esta arma pode ser utilizada para realizar ataques de arremesso com um alcance informado entre parenteses na propridade. Ataques de arremesso com esta arma utilizam o mesmo modificador usado em um ataque corpo a corpo com a mesma."
  },
  {
    "name": "Camuflável",
    "text": "Esta arma concede um bônus de +4 em testes de Ladinagem para escondê-la."
  },
  {
    "name": "Duas mãos",
    "text": "Esta arma deve ser usada com as duas mãos quando realizar ataques"
  },
  {
    "name": "Dupla",
    "text": "Empunhar esta arma com as duas mãos é o mesmo que usar uma arma em cada mão, onde uma das armas possui a propriedade Leve, cada lado causando um dado de dano diferente descritos entre parenteses."
  },
  {
    "name": "Especial",
    "text": "Esta arma possui uma propriedade especial que estará descrita na propria arma."
  },
  {
    "name": "Haste",
    "text": "Esta arma possui uma area de ameaça de 3m"
  },
  {
    "name": "Leve",
    "text": "Esta arma possui as qualidades ideais para o uso com em conjunto com outras armas"
  },
  {
    "name": "Munição",
    "text": "Esta arma requesita, obrigatoriamente, das devidas munições( informadas entre parenteses na propridade) para realizar ataques a distancia. Você pode também realizar ataques corpo-a-corpo com estas munições, porem são considerados ataques corpo-a-corpo com armas improvisadas. Para mais informações sobre usar munições como arma, cheque a tabela de Munições tabela de Munições"
  },
  {
    "name": "Recarga",
    "text": "Esta arma possui um tempo necessario para conseguir colocar uma nova munição para ser disparada. Cada arma com esta propriedade terá a ação necessária para realizar a recarga dentro do parenteses na lateral da propriedade. Recarregar a arma requesita de uma mão livre."
  },
  {
    "name": "Técnica",
    "text": "Esta arma concede um bonus de +4 na manobra indicada entre parenteses nas armas que possuem esta propriedade."
  },
  {
    "name": "Versátil",
    "text": "Esta arma é desenhada para ser usada com uma ou duas mãos. Caso seja utilizada com duas mãos, utiliza o dado indicado dentro dos parenteses junto da propriedade"
  }
];
export const weaponSizeRules = [
  "Toda arma tem uma categoria de tamanho, que indica para qual tipo de criatura ela se destina. Assim, uma arma Média é própria para personagens médios, como humanos.",
  "Um personagem pode usar uma arma com uma categoria de tamanho menor ou maior que a sua própria (por exemplo, um humano usando uma besta pequena, ou um halfling usando um florete médio). No entanto, fazer isso causa uma penalidade de -4 nas jogadas de ataque.",
  "Um personagem não pode usar armas duas ou mais categorias de tamanho diferentes da sua."
];
export const weaponSizeTable = {
  "headers": [
    "Ínfimo",
    "Diminuto",
    "Mínimo",
    "Pequeno",
    "Médio",
    "Grande",
    "Enorme",
    "Descomunal",
    "Colossal"
  ],
  "rows": [
    [
      "1",
      "1",
      "1",
      "1",
      "1d4",
      "1d6",
      "1d8",
      "1d10",
      "1d12"
    ],
    [
      "1",
      "1",
      "1",
      "1d4",
      "1d6",
      "1d8",
      "1d10",
      "1d12",
      "2d8"
    ],
    [
      "1",
      "1",
      "1d4",
      "1d6",
      "1d8",
      "1d10",
      "1d12",
      "2d8",
      "2d10"
    ],
    [
      "1",
      "1d4",
      "1d6",
      "1d8",
      "1d10",
      "1d12",
      "2d8",
      "2d10",
      "2d12"
    ],
    [
      "1d4",
      "1d6",
      "1d8",
      "1d10",
      "1d12",
      "2d8",
      "2d10",
      "2d12",
      "4d8"
    ]
  ]
};
export const weapons: WeaponEntry[] = [
  {
    "name": "Adaga",
    "category": "Simples",
    "price": "2 TO",
    "damage": "1d4",
    "critical": "19-20",
    "properties": "Leve, Arremeso(6m), Camuflável, Acuidade",
    "weight": "0,5Kg",
    "type": "Perfuração"
  },
  {
    "name": "Arco Curto",
    "category": "Simples",
    "price": "30 TO",
    "damage": "1d6",
    "critical": "x3",
    "properties": "Alcance(12m), Recarga(Ação Livre), Munição(Flecha), Duas mãos",
    "weight": "1Kg (1,5 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Ataque Desarmado",
    "category": "Simples",
    "price": "---",
    "damage": "1",
    "critical": "x2",
    "properties": "Leve, Acuidade, Agil",
    "weight": "---",
    "type": "Esmagamento"
  },
  {
    "name": "Azagaia",
    "category": "Simples",
    "price": "1 TO",
    "damage": "1d6",
    "critical": "x2",
    "properties": "Haste, Arremesso(6m)",
    "weight": "1Kg",
    "type": "Perfuração"
  },
  {
    "name": "Bastão Acolchoado",
    "category": "Simples",
    "price": "1 TO",
    "damage": "1d6",
    "critical": "x2",
    "properties": "Versátil(1d8)",
    "weight": "2Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Besta Leve",
    "category": "Simples",
    "price": "35 TO",
    "damage": "1d8",
    "critical": "19-20",
    "properties": "Alcance(18m), Recarga(Ação Movimento), Munição(Virote), Duas mãos",
    "weight": "3Kg (0,5 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Bordão",
    "category": "Simples",
    "price": "---",
    "damage": "1d6",
    "critical": "x2",
    "properties": "Versátil(1d8), Dupla(1d6/1d4)",
    "weight": "2Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Clava",
    "category": "Simples",
    "price": "---",
    "damage": "1d6",
    "critical": "x2",
    "properties": "Leve",
    "weight": "1,5Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Espada Curta",
    "category": "Simples",
    "price": "10 TO",
    "damage": "1d6",
    "critical": "19-20",
    "properties": "Leve, Acuidade",
    "weight": "1Kg",
    "type": "Perfuração"
  },
  {
    "name": "Funda",
    "category": "Simples",
    "price": "1 TP",
    "damage": "1d4",
    "critical": "x2",
    "properties": "Alcance(12m), Recarga(Ação Livre), Munição(Bolota), Ágil",
    "weight": "250g (2 Kg)",
    "type": "Esmagamento"
  },
  {
    "name": "Lança",
    "category": "Simples",
    "price": "2 TO",
    "damage": "1d6",
    "critical": "x2",
    "properties": "Arremeso(4,5m)",
    "weight": "1,5Kg",
    "type": "Perfuração"
  },
  {
    "name": "Maça",
    "category": "Simples",
    "price": "12 TO",
    "damage": "1d8",
    "critical": "x2",
    "properties": "---",
    "weight": "6Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Pique",
    "category": "Simples",
    "price": "2 TO",
    "damage": "1d8",
    "critical": "x2",
    "properties": "Duas mãos",
    "weight": "5Kg",
    "type": "Perfuração"
  },
  {
    "name": "Tacape",
    "category": "Simples",
    "price": "---",
    "damage": "1d8",
    "critical": "x2",
    "properties": "Duas mãos",
    "weight": "4Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Escudo Leve",
    "category": "Marciais",
    "price": "5 TO",
    "damage": "1d4",
    "critical": "x2",
    "properties": "Leve",
    "weight": "3Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Machadinha",
    "category": "Marciais",
    "price": "6 TO",
    "damage": "1d6",
    "critical": "x3",
    "properties": "Leve, Arremesso(4,5m)",
    "weight": "2Kg",
    "type": "Corte"
  },
  {
    "name": "Martelo",
    "category": "Marciais",
    "price": "1 TO",
    "damage": "1d6",
    "critical": "x2",
    "properties": "Leve, Arremeso(4,5m)",
    "weight": "1Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Cimitarra",
    "category": "Marciais",
    "price": "15 TO",
    "damage": "1d6",
    "critical": "18-20",
    "properties": "Acuidade, Leve",
    "weight": "2Kg",
    "type": "Corte"
  },
  {
    "name": "Escudo Pesado",
    "category": "Marciais",
    "price": "15 TO",
    "damage": "1d6",
    "critical": "x2",
    "properties": "Versátil(1d8), Leve",
    "weight": "7Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Espada Longa",
    "category": "Marciais",
    "price": "15 TO",
    "damage": "1d8",
    "critical": "19-20",
    "properties": "Versátil(1d10)",
    "weight": "2Kg",
    "type": "Corte"
  },
  {
    "name": "Florete",
    "category": "Marciais",
    "price": "20 TO",
    "damage": "1d6",
    "critical": "18-20",
    "properties": "Acuidade",
    "weight": "1Kg",
    "type": "Perfuração"
  },
  {
    "name": "Gládio",
    "category": "Marciais",
    "price": "15 TO",
    "damage": "1d6",
    "critical": "19-20/x3",
    "properties": "---",
    "weight": "2Kg",
    "type": "Perfuração"
  },
  {
    "name": "Machado de Batalha",
    "category": "Marciais",
    "price": "10 TO",
    "damage": "1d8",
    "critical": "x3",
    "properties": "Versátil(1d10)",
    "weight": "3Kg",
    "type": "Corte"
  },
  {
    "name": "Maça-Estrela",
    "category": "Marciais",
    "price": "15 TO",
    "damage": "2d4",
    "critical": "x2",
    "properties": "---",
    "weight": "3Kg",
    "type": "Esmagamento/Perfuração"
  },
  {
    "name": "Mangual",
    "category": "Marciais",
    "price": "8 TO",
    "damage": "1d8",
    "critical": "x2",
    "properties": "Técnica(Desarmar)",
    "weight": "2,5Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Martelo de Guerra",
    "category": "Marciais",
    "price": "12 TO",
    "damage": "1d8",
    "critical": "x3",
    "properties": "Versátil(1d10)",
    "weight": "2,5Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Picareta",
    "category": "Marciais",
    "price": "8 TO",
    "damage": "1d6",
    "critical": "x3",
    "properties": "Versátil(1d8)",
    "weight": "3Kg",
    "type": "Perfuração"
  },
  {
    "name": "Tridente",
    "category": "Marciais",
    "price": "15 TO",
    "damage": "1d8",
    "critical": "x2",
    "properties": "Técnica(Derrubar)",
    "weight": "2Kg",
    "type": "Perfuração"
  },
  {
    "name": "Alabarda",
    "category": "Marciais",
    "price": "10 TO",
    "damage": "1d10",
    "critical": "x3",
    "properties": "Haste, Duas mãos",
    "weight": "6Kg",
    "type": "Corte"
  },
  {
    "name": "Alfange",
    "category": "Marciais",
    "price": "75 TO",
    "damage": "2d4",
    "critical": "18-20",
    "properties": "Duas mãos",
    "weight": "4Kg",
    "type": "Corte"
  },
  {
    "name": "Cajado de batalha",
    "category": "Marciais",
    "price": "10 TO",
    "damage": "1d10",
    "critical": "x2",
    "properties": "Duas mãos, Dupla(1d8,1d6)",
    "weight": "4Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Espada grande",
    "category": "Marciais",
    "price": "50 TO",
    "damage": "2d6",
    "critical": "19-20",
    "properties": "Duas mãos",
    "weight": "4Kg",
    "type": "Corte"
  },
  {
    "name": "Foice",
    "category": "Marciais",
    "price": "18 TO",
    "damage": "3d4",
    "critical": "x3",
    "properties": "Duas mãos",
    "weight": "5Kg",
    "type": "Corte"
  },
  {
    "name": "Lança montada",
    "category": "Marciais",
    "price": "10 TO",
    "damage": "1d8",
    "critical": "x3",
    "properties": "Versátil(1d10), Haste",
    "weight": "5Kg",
    "type": "Perfuração"
  },
  {
    "name": "Machado Grande",
    "category": "Marciais",
    "price": "20 TO",
    "damage": "1d12",
    "critical": "x3",
    "properties": "Duas mãos",
    "weight": "6Kg",
    "type": "Corte"
  },
  {
    "name": "Mangual Pesado",
    "category": "Marciais",
    "price": "15 TO",
    "damage": "1d12",
    "critical": "x3",
    "properties": "Duas mãos, Técnica(Desarmar)",
    "weight": "5Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Marreta",
    "category": "Marciais",
    "price": "20 TO",
    "damage": "3d4",
    "critical": "x3",
    "properties": "Duas mãos",
    "weight": "8Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Arco longo",
    "category": "Marciais",
    "price": "100 TO",
    "damage": "1d8",
    "critical": "x3",
    "properties": "Alcance(24m), Recarga(Ação Livre), Munição(Flecha), Duas mãos",
    "weight": "1,5Kg (1,5 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Besta pesada",
    "category": "Marciais",
    "price": "50 TO",
    "damage": "1d12",
    "critical": "19-20",
    "properties": "Alcance(27m), Recarga(Ação Padrão), Munição(Virote), Duas mãos",
    "weight": "4Kg (0,5 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Garra Feroz",
    "category": "Exóticas",
    "price": "10 TO",
    "damage": "1d6",
    "critical": "19-20",
    "properties": "Leve, Acuidade, Ágil",
    "weight": "0,5Kg",
    "type": "Corte"
  },
  {
    "name": "Túnica Calamarina",
    "category": "Exóticas",
    "price": "20 TO",
    "damage": "1d8",
    "critical": "x3",
    "properties": "Acuidade, Dupla(1d8/1d6), Duas mãos, Ágil",
    "weight": "3Kg",
    "type": "Corte/Perfuração"
  },
  {
    "name": "Wakizashi",
    "category": "Exóticas",
    "price": "310 TO",
    "damage": "1d8",
    "critical": "19-20",
    "properties": "Leve, Acuidade",
    "weight": "1Kg",
    "type": "Corte"
  },
  {
    "name": "Adaga com mola",
    "category": "Exóticas",
    "price": "25 TO",
    "damage": "1d4",
    "critical": "19-20",
    "properties": "Leve, Acuidade, Camuflável, Arremesso(9m), Ágil",
    "weight": "250g",
    "type": "Perfuração"
  },
  {
    "name": "Agulha de Ahlen",
    "category": "Exóticas",
    "price": "50 TO",
    "damage": "1d4",
    "critical": "19-20",
    "properties": "Leve, Acuidade, Camuflável, Arremesso(4,5m), Especial",
    "weight": "250g",
    "type": "Perfuração"
  },
  {
    "name": "Escudo de Corpo",
    "category": "Exóticas",
    "price": "200 TO",
    "damage": "1d8",
    "critical": "x2",
    "properties": "Versartil(1d10), Técnica(Derrubar), Leve",
    "weight": "",
    "type": "Esmagamento"
  },
  {
    "name": "Chicote",
    "category": "Exóticas",
    "price": "10 TO",
    "damage": "1d6",
    "critical": "x2",
    "properties": "Acuidade, Haste, Técnica(Derrubar), Técnica(Desarmar)",
    "weight": "1Kg",
    "type": "Corte"
  },
  {
    "name": "Espada Bastarda",
    "category": "Exóticas",
    "price": "35 TO",
    "damage": "1d10",
    "critical": "19-20",
    "properties": "Versartil(1d12)",
    "weight": "3Kg",
    "type": "Corte"
  },
  {
    "name": "Flagelo",
    "category": "Exóticas",
    "price": "20 TO",
    "damage": "1d6",
    "critical": "x2",
    "properties": "Acuidade, Haste, Especial",
    "weight": "2,5Kg",
    "type": "Corte"
  },
  {
    "name": "Katana",
    "category": "Exóticas",
    "price": "400 TO",
    "damage": "1d10",
    "critical": "19-20",
    "properties": "Acuidade, Versátil(1d12)",
    "weight": "3Kg",
    "type": "Corte"
  },
  {
    "name": "Kusari-gama",
    "category": "Exóticas",
    "price": "25 TO",
    "damage": "1d6/1d4",
    "critical": "19-20",
    "properties": "Acuidade, Haste, Dupla(1d6/1d4), Técnica(Desarmar), Técnica(Derrubar)",
    "weight": "2Kg",
    "type": "Corte/Esmagamento"
  },
  {
    "name": "Lança de falange",
    "category": "Exóticas",
    "price": "15 TO",
    "damage": "1d8",
    "critical": "x3",
    "properties": "Haste, Versátil(1d10), Arremesso(6m)",
    "weight": "3Kg",
    "type": "Perfuração"
  },
  {
    "name": "Machado anão",
    "category": "Exóticas",
    "price": "30 TO",
    "damage": "1d10",
    "critical": "x3",
    "properties": "Versartil(1d12)",
    "weight": "4Kg",
    "type": "Corte"
  },
  {
    "name": "Maça de Guerra",
    "category": "Exóticas",
    "price": "25 TO",
    "damage": "1d10",
    "critical": "x3",
    "properties": "Versartil(1d12)",
    "weight": "6Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Manopla-espada",
    "category": "Exóticas",
    "price": "25 TO",
    "damage": "1d8",
    "critical": "19-20",
    "properties": "Camuflável, Ágil, Especial",
    "weight": "2,5Kg",
    "type": "Corte"
  },
  {
    "name": "Sabre serrilhado",
    "category": "Exóticas",
    "price": "500 TO",
    "damage": "1d8",
    "critical": "19-20",
    "properties": "Especial",
    "weight": "2Kg",
    "type": "Corte"
  },
  {
    "name": "Corrente com cravos",
    "category": "Exóticas",
    "price": "25 TO",
    "damage": "2d6",
    "critical": "x2",
    "properties": "Acuidade, Haste, Técnica(Derrubar), Técnica(Desarmar), Duas mãos",
    "weight": "5Kg",
    "type": "Perfuração"
  },
  {
    "name": "Espada de duas lâminas",
    "category": "Exóticas",
    "price": "100 TO",
    "damage": "1d8",
    "critical": "19-20",
    "properties": "Versátil(1d10), Dupla(1d8,1d8), Acuidade",
    "weight": "5Kg",
    "type": "Corte"
  },
  {
    "name": "Espada táurica",
    "category": "Exóticas",
    "price": "50 TO",
    "damage": "2d8",
    "critical": "x3",
    "properties": "Duas mãos",
    "weight": "7,5Kg",
    "type": "Corte"
  },
  {
    "name": "Machado Táurico",
    "category": "Exóticas",
    "price": "30 TO",
    "damage": "2d8",
    "critical": "x3",
    "properties": "Duas mãos",
    "weight": "12Kg",
    "type": "Corte"
  },
  {
    "name": "Marreta Ogra",
    "category": "Exóticas",
    "price": "30 TO",
    "damage": "2d8",
    "critical": "x3",
    "properties": "Duas mãos",
    "weight": "12Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Grande lança",
    "category": "Exóticas",
    "price": "30 TO",
    "damage": "2d6",
    "critical": "x3",
    "properties": "Duas mãos, Haste",
    "weight": "9Kg",
    "type": "Perfuração"
  },
  {
    "name": "Besta de Mão",
    "category": "Exóticas",
    "price": "100 TO",
    "damage": "1d6",
    "critical": "19-20",
    "properties": "Alcance(9m), Recarga(Ação de Movimento), Munição(Virote)",
    "weight": "1Kg (0,5 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Arco élfico",
    "category": "Exóticas",
    "price": "500 TO",
    "damage": "1d8",
    "critical": "x3",
    "properties": "Alcance(18m), Recarga(Ação Livre), Munição(Flecha), Duas mãos, Especial",
    "weight": "1,5Kg (1,5 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Arco grandioso",
    "category": "Exóticas",
    "price": "750 TO",
    "damage": "1d12",
    "critical": "x3",
    "properties": "Alcance(18m), Recarga(Ação Padrão), Munição(Flecha), Duas mãos, Especial",
    "weight": "1Kg (1,5 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Mosquete",
    "category": "Exóticas",
    "price": "500 TO",
    "damage": "2d8",
    "critical": "19-20/x3",
    "properties": "Alcance(36m), Recarga(Ação Padrão), Munição(Bala), Duas mãos",
    "weight": "5Kg (1 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Pistola",
    "category": "Exóticas",
    "price": "250 TO",
    "damage": "1d10",
    "critical": "19-20/x3",
    "properties": "Alcance(18m), Recarga(Ação Padrão), Munição(Bala)",
    "weight": "1,5Kg (1 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Catapulta-de-braço",
    "category": "Exóticas",
    "price": "40 TO",
    "damage": "2d4",
    "critical": "x2",
    "properties": "Alcance(24m), Recarga(Ação de Movimento), Munição(Bolota)",
    "weight": "2Kg (1 Kg)",
    "type": "Esmagamento"
  },
  {
    "name": "Shuriken",
    "category": "Exóticas",
    "price": "1 TO",
    "damage": "1d4",
    "critical": "x2",
    "properties": "Arremesso (6m), Agil, Camuflavel, Leve",
    "weight": "250g",
    "type": "Perfuração"
  },
  {
    "name": "Fukiya",
    "category": "Exóticas",
    "price": "5 TO",
    "damage": "1",
    "critical": "x2",
    "properties": "Alcance(4,5m), Recarga(Ação Livre), Munição(Dardo)",
    "weight": "0,5Kg",
    "type": "Perfuração"
  },
  {
    "name": "Bolsa de Cola",
    "category": "Armas Alquimicas",
    "price": "50 TO",
    "damage": "-",
    "critical": "-",
    "properties": "Especial, Arremesso (6m), Ágil",
    "weight": "1Kg",
    "type": "-"
  },
  {
    "name": "Agua Benta",
    "category": "Armas Alquimicas",
    "price": "25 TO",
    "damage": "2d6",
    "critical": "-",
    "properties": "Especial, Arremesso (6m), Ágil",
    "weight": "1Kg",
    "type": "Sagrado"
  },
  {
    "name": "Água Benta Concentrada",
    "category": "Armas Alquimicas",
    "price": "150 TO",
    "damage": "4d6",
    "critical": "-",
    "properties": "Especial, Arremesso (6m), Ágil",
    "weight": "1Kg",
    "type": "Sagrado"
  },
  {
    "name": "Bomba Fétida",
    "category": "Armas Alquimicas",
    "price": "20 TO",
    "damage": "-",
    "critical": "-",
    "properties": "Especial, Arremesso (6m), Ágil",
    "weight": "1Kg",
    "type": "-"
  },
  {
    "name": "Bomba de Fumaça",
    "category": "Armas Alquimicas",
    "price": "20 TO",
    "damage": "-",
    "critical": "-",
    "properties": "Especial, Arremesso (6m), Ágil",
    "weight": "1Kg",
    "type": "-"
  },
  {
    "name": "Pó Cegante de Vandaime",
    "category": "Armas Alquimicas",
    "price": "20 TO",
    "damage": "-",
    "critical": "-",
    "properties": "Especial, Arremesso (3m), Ágil",
    "weight": "1Kg",
    "type": "-"
  },
  {
    "name": "Ácido",
    "category": "Armas Alquimicas",
    "price": "10 TO",
    "damage": "2d4",
    "critical": "-",
    "properties": "Especial, Arremesso (6m), Ágil",
    "weight": "1Kg",
    "type": "Ácido"
  },
  {
    "name": "Ácido Concentrado",
    "category": "Armas Alquimicas",
    "price": "30 TO",
    "damage": "4d4",
    "critical": "-",
    "properties": "Especial, Arremesso (6m), Ágil",
    "weight": "1Kg",
    "type": "Ácido"
  },
  {
    "name": "Óleo Inflamavel",
    "category": "Armas Alquimicas",
    "price": "30 TO",
    "damage": "-",
    "critical": "-",
    "properties": "Especial, Arremesso (6m), Ágil",
    "weight": "1Kg",
    "type": "-"
  },
  {
    "name": "Fogo alquímico",
    "category": "Armas Alquimicas",
    "price": "10 TO",
    "damage": "1d6",
    "critical": "-",
    "properties": "Especial, Arremesso (6m), Ágil",
    "weight": "1Kg",
    "type": "Fogo"
  },
  {
    "name": "Fogo Fumegante",
    "category": "Armas Alquimicas",
    "price": "50 TO",
    "damage": "3d6",
    "critical": "-",
    "properties": "Especial, Arremesso (6m), Ágil",
    "weight": "1Kg",
    "type": "Fogo"
  },
  {
    "name": "Extrato de gelo eterno",
    "category": "Armas Alquimicas",
    "price": "30 TO",
    "damage": "2d8",
    "critical": "-",
    "properties": "Especial, Arremesso (6m), Ágil",
    "weight": "1Kg",
    "type": "Frio"
  },
  {
    "name": "Estalinho Gury",
    "category": "Armas Alquimicas",
    "price": "20 TO",
    "damage": "-",
    "critical": "-",
    "properties": "Especial, Arremesso (6m), Ágil",
    "weight": "1Kg",
    "type": "-"
  },
  {
    "name": "Pó de Azgher",
    "category": "Armas Alquimicas",
    "price": "50 TO",
    "damage": "-",
    "critical": "-",
    "properties": "Especial, Arremesso (3m), Ágil",
    "weight": "1Kg",
    "type": "-"
  },
  {
    "name": "Balista (1 Virote)",
    "category": "Armas de Cerco",
    "price": "500 TO (20 TO)",
    "damage": "6d8",
    "critical": "19-20",
    "properties": "Especial, Alcance (45m), Munição",
    "weight": "150Kg (10 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Canhão (1 Bala)",
    "category": "Armas de Cerco",
    "price": "2.000 TO (50 TO)",
    "damage": "6d12",
    "critical": "19-20",
    "properties": "Especial, Alcance (60m), Munição",
    "weight": "200Kg (5 Kg)",
    "type": "Esmagamento"
  }
];
export const ammunition = [
  {
    "name": "Flecha",
    "price": "1 TO",
    "damage": "1d4",
    "critical": "x2",
    "properties": "Acuidade, Leve",
    "type": ""
  },
  {
    "name": "Virote",
    "price": "2 TO",
    "damage": "1d4",
    "critical": "x2",
    "properties": "Acuidade, Leve",
    "type": ""
  },
  {
    "name": "Bolota",
    "price": "1 TP",
    "damage": "1",
    "critical": "x2",
    "properties": "Arremesso(3m)",
    "type": ""
  },
  {
    "name": "Bala",
    "price": "50 TO",
    "damage": "1d4",
    "critical": "x2",
    "properties": "Arremesso(3m)",
    "type": ""
  },
  {
    "name": "Dardo",
    "price": "1 TP",
    "damage": "1d4",
    "critical": "x2",
    "properties": "Arremesso(3m)",
    "type": ""
  }
];
export const technologicalWeapons = [
  {
    "name": "Florete-agulha",
    "category": "Corpo a Corpo - Leve",
    "price": "250 TO",
    "damage": "1d4",
    "critical": "19-20",
    "range": "---",
    "weight": "1Kg",
    "type": "Perfuração"
  },
  {
    "name": "Espada-diapasão",
    "category": "Corpo a Corpo - Uma Mão",
    "price": "400 TO",
    "damage": "1d8",
    "critical": "19-20",
    "range": "---",
    "weight": "2,5Kg",
    "type": "Corte"
  },
  {
    "name": "Lança-foguete",
    "category": "Corpo a Corpo - Uma Mão",
    "price": "100 TO",
    "damage": "1d10",
    "critical": "x2",
    "range": "6m",
    "weight": "3Kg",
    "type": "Perfuração"
  },
  {
    "name": "Lança-mola",
    "category": "Corpo a Corpo - Uma Mão",
    "price": "50 TO",
    "damage": "1d6",
    "critical": "x2",
    "range": "---",
    "weight": "2,5Kg",
    "type": "Perfuração"
  },
  {
    "name": "Maça-granada",
    "category": "Corpo a Corpo - Uma Mão",
    "price": "100 TO",
    "damage": "1d8",
    "critical": "x2+4d6",
    "range": "3m",
    "weight": "6,5Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Martelo-pistão",
    "category": "Corpo a Corpo - Uma Mão",
    "price": "500 TO",
    "damage": "1d8",
    "critical": "20/especial",
    "range": "---",
    "weight": "3,5Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Vara-relâmpago",
    "category": "Corpo a Corpo - Uma Mão",
    "price": "1.000 TO",
    "damage": "2d10",
    "critical": "x4*",
    "range": "---",
    "weight": "4Kg",
    "type": "Perfuração"
  },
  {
    "name": "Girolette",
    "category": "Corpo a Corpo - Duas mãos",
    "price": "1.000 TO",
    "damage": "2d8",
    "critical": "x3",
    "range": "---",
    "weight": "9Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Marreta-pistão",
    "category": "Corpo a Corpo - Duas mãos",
    "price": "500 TO",
    "damage": "1d10",
    "critical": "20/especial",
    "range": "---",
    "weight": "9Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Montante cinético",
    "category": "Corpo a Corpo - Duas mãos",
    "price": "3.000 TO",
    "damage": "2d6",
    "critical": "19-20/x4",
    "range": "---",
    "weight": "10Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Pistola de tambor (10 Balas)",
    "category": "Corpo a Corpo - Distância",
    "price": "1.000 TO (35 TO)",
    "damage": "2d6",
    "critical": "19-20/x3",
    "range": "15m",
    "weight": "2Kg (1 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Mosquete de Rolete",
    "category": "Corpo a Corpo - Distância",
    "price": "5.000 TO",
    "damage": "2d10",
    "critical": "x2",
    "range": "30m",
    "weight": "50Kg",
    "type": "Perfuração"
  },
  {
    "name": "Mosquetão (10 Balas)",
    "category": "Corpo a Corpo - Distância",
    "price": "1.000 TO (50 TO)",
    "damage": "2d10",
    "critical": "19-20/x3",
    "range": "30m",
    "weight": "5,5Kg (1 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Arcabuz (10 Balas)",
    "category": "Corpo a Corpo - Distância",
    "price": "700 TO (50 TO)",
    "damage": "3d4",
    "critical": "x3",
    "range": "Especial",
    "weight": "3Kg (1 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Balestra",
    "category": "Corpo a Corpo - Distância",
    "price": "100 TO",
    "damage": "1d12",
    "critical": "19-20",
    "range": "27m",
    "weight": "6Kg",
    "type": "Perfuração"
  },
  {
    "name": "Bazuca (1 Bala)",
    "category": "Corpo a Corpo - Distância",
    "price": "1.000 TO (100 TO)",
    "damage": "10d8",
    "critical": "x3",
    "range": "15m",
    "weight": "5Kg (2 Kg)",
    "type": "Fogo"
  },
  {
    "name": "Canhão Portátil (1 Bala)",
    "category": "Corpo a Corpo - Distância",
    "price": "600 TO (200 TO)",
    "damage": "3d12",
    "critical": "x3",
    "range": "20m",
    "weight": "20Kg (0,5 Kg)",
    "type": "Esmagamento"
  },
  {
    "name": "Besta pesada de repetição (10 Virotes)",
    "category": "Corpo a Corpo - Distância",
    "price": "500 TO (1 TO)",
    "damage": "1d12",
    "critical": "19-20",
    "range": "27m",
    "weight": "6Kg (0,5 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Besta leve de repetição (10 Virotes)",
    "category": "Corpo a Corpo - Distância",
    "price": "350 TO (1 TO)",
    "damage": "1d10",
    "critical": "19-20",
    "range": "18m",
    "weight": "4,5Kg (0,5 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Fecho-de-roda (10 Balas)",
    "category": "Corpo a Corpo - Distância",
    "price": "750 TO (35 TO)",
    "damage": "2d6",
    "critical": "19-20/x3",
    "range": "15m",
    "weight": "2,5Kg (1 kg)",
    "type": "Perfuração"
  },
  {
    "name": "Trabuco De Flecha (20 Flechas)",
    "category": "Corpo a Corpo - Distância",
    "price": "1.000 TO (1 TO)",
    "damage": "10D4",
    "critical": "x2",
    "range": "12m",
    "weight": "10 kg (1,5 Kg)",
    "type": "Perfuração"
  }
];
export const technologicalWarning = "ESTAS ARMAS NÃO FORAM E NÃO SERÃO BALANCEADAS, USE AS A SUA CONTA E RISCO COM AUTORIZAÇÃO DE SEU NARRADOR";
