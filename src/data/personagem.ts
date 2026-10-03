export interface AbilityModifierRow {
  value: string;
  modifier: string;
}

export interface AbilityInfo {
  key: string;
  name: string;
  abbreviation: string;
  text: string;
}

export interface RuleBlock {
  title: string;
  paragraphs: string[];
}

export const abilityModifierTable: AbilityModifierRow[] = [
  { value: '1', modifier: '-5' },
  { value: '2-3', modifier: '-4' },
  { value: '4-5', modifier: '-3' },
  { value: '6-7', modifier: '-2' },
  { value: '8-9', modifier: '-1' },
  { value: '10-11', modifier: '0' },
  { value: '12-13', modifier: '+1' },
  { value: '14-15', modifier: '+2' },
  { value: '16-17', modifier: '+3' },
  { value: '18-19', modifier: '+4' },
  { value: '20-21', modifier: '+5' },
  { value: '22-23', modifier: '+6' },
  { value: '24-25', modifier: '+7' }
];

export const abilities: AbilityInfo[] = [
  {
    key: 'forca',
    name: 'Força',
    abbreviation: 'For',
    text: 'A Força mede seu poder muscular, sua força física. O modificador de Força será aplicado nas rolagens de ataque corpo-a-corpo; dano de ataque corpo-a-corpo ou com armas de arremesso; testes de Atletismo; testes de Força para levantar peso, quebrar objetos e atos similares.'
  },
  {
    key: 'destreza',
    name: 'Destreza',
    abbreviation: 'Des',
    text: 'A Destreza mede agilidade, reflexos, equilíbrio e coordenação motora. O modificador de Destreza será aplicado nas rolagens de ataque à distância; classe de armadura; testes de Reflexos; testes de Acrobacia, Cavalgar, Iniciativa, Furtividade e Ladinagem.'
  },
  {
    key: 'constituicao',
    name: 'Constituição',
    abbreviation: 'Con',
    text: 'A saúde e vigor físico do herói são representados pela Constituição. Seu modificador será aplicado em seus pontos de vida iniciais (que dependem de sua classe), e também aos PV que você ganha quando sobe de nível (mas mesmo com um modificador negativo, um personagem sempre ganha pelo menos 1 PV quando sobe de nível). Se a Constituição muda o suficiente para alterar seu modificador de habilidade, seus pontos de vida máximos também aumentam ou diminuem de acordo.'
  },
  {
    key: 'inteligencia',
    name: 'Inteligência',
    abbreviation: 'Int',
    text: 'A capacidade de pensar, raciocinar e resolver problemas é medida pela Inteligência. Você usará seu modificador de Inteligência para determinar seu número de perícias treinadas e idiomas conhecidos, e aplicará o modificador de Inteligência a testes de Conhecimento, Identificar Magia e Ofício.'
  },
  {
    key: 'sabedoria',
    name: 'Sabedoria',
    abbreviation: 'Sab',
    text: 'A Sabedoria representa a percepção e a força de vontade, além de seu bom senso, intuição e sentidos. Não é a mesma coisa que Inteligência: enquanto a Inteligência determina a capacidade de aprendizado e raciocínio, a Sabedoria diz como você percebe o mundo e a si mesmo. Um monge isolado nas montanhas que não sabe ler e nunca teve contato com qualquer cultura, pode ter alta Sab e baixa Int, enquanto um pesquisador arcano muito distraído teria alta Int e baixa Sab.'
  },
  {
    key: 'carisma',
    name: 'Carisma',
    abbreviation: 'Car',
    text: 'Carisma mede sua força de personalidade, magnetismo pessoal, charme, simpatia, capacidade de persuasão e beleza física. Seu modificador de Carisma será aplicado em testes de Adestrar Animais, Atuação, Diplomacia, Enganação, Intimidação e Obter Informação; qualquer teste envolvendo influenciar outras pessoas ou criaturas.'
  }
];

export const characterLevelBenefits: RuleBlock[] = [
  {
    title: 'Nível de Personagem',
    paragraphs: ['Este é o nível do personagem, às vezes chamado de "nível de experiência".']
  },
  {
    title: 'Pontos de Experiência',
    paragraphs: ['A quantidade de pontos de experiência que você deve acumular para chegar a este nível. Naturalmente, um personagem de 1º nível começa com 0 XP.']
  },
  {
    title: 'Graduação em Perícias',
    paragraphs: ['O personagem usa o número antes da barra em testes de perícias nas quais é treinado, e o número depois da barra para perícias nas quais não é treinado. Por exemplo, no 3º nível (+6/+1), você recebe + 6 em perícias treinadas e +1 em todas as outras. Para maiores detalhes veja Perícias.']
  },
  {
    title: 'Talentos',
    paragraphs: ['Todo personagem recebe um talento no 1º nível e a cada dois níveis seguintes (ou seja, todos os níveis ímpares). Para maiores detalhes veja Talentos. Além destes, no 1º nível todo personagem recebe um talento qualquer a escolha. No 4º, 12º nível o personagem recebe um talento de combate, magia, tormenta ou poder concedido. No 6º e 14º Recebe um talento de perícia. No 4º, 8º, 12º e 16º Recebe um talento de destino ou de classe. Você deve cumprir todos os pré-requisitos de qualquer talento que escolha.']
  },
  {
    title: 'Aumento de Habilidade',
    paragraphs: ['No 2º nível, e a cada dois níveis seguintes (ou seja, todos os níveis pares), um personagem ganha um ponto de habilidade. Um personagem nunca pode aumentar o mesmo atributo duas vezes consecutivas, ou seja, Um Bárbaro que aumentou sua força no 2º nível não pode aumentá-la novamente no 4º nível, deverá aumentar outro atributo para apenas no 6º poder aumentar novamente sua força.']
  },
  {
    title: 'Bônus na CA, Resistência e Dano',
    paragraphs: ['Todo personagem soma metade de seu nível (arredondado para baixo) à sua classe de armadura, testes de resistência, e jogadas de dano seja com armas, magias, ou qualquer habilidade especial.']
  }
];

export const multiclassRules: RuleBlock[] = [
  {
    title: 'Pontos de Vida',
    paragraphs: [
      'Os PVs dos personagens multiclasses somam os da classe inicial com os PVs por nível da nova classe.',
      'Ex: Um Bárbaro de 1° nível (24 + mod. Constituição PVs) que atinja o 2° nível e quer ao invés de adquirir um novo nível de Bárbaro decide adquirir o 1° nível de Ladino, nesse 2° nível, como decidiu ganhar um nível de Ladino invés de um nível de Bárbaro ele ganhará 3 + mod. Constituição PVs (Ladino) invés de 6 + mod. de Constituição PVs (Bárbaro).'
    ]
  },
  {
    title: 'Perícias e Talentos',
    paragraphs: ['Sempre que adquirir uma nova classe o jogador deve optar por receber um Talento ou uma Perícia da nova classe.']
  },
  {
    title: 'Bônus Base de Ataque',
    paragraphs: [
      'O Bônus Base de Ataque de um personagem deve ser visto pela soma dos Bônus Base de Ataque de todas as classes desse mesmo personagem.',
      'Ex: Esse mesmo Bárbaro que adquiriu um nível de Ladino, o Bônus Base de Ataque dele é igual a soma do BBA de suas duas classes juntas: 1 de Bárbaro de 1° nível + 0 de Ladino 1° nível, totalizando uma BBA de +1.'
    ]
  },
  {
    title: 'Pontos de Magia',
    paragraphs: ['PMs de um personagem multiclasse não são somados, ou seja, um personagem Mago e Clérigo terá PMs próprios para decorar magias Arcanas e uma outra quantidade de PMs para decorar magias Divinas.']
  },
  {
    title: 'Nível de Personagem',
    paragraphs: [
      'O nível de um personagem multiclasse é igual a soma de todos os níveis das Classes.',
      'Ex: O Bárbaro de 1° nível / Ladino de 1° nível é um personagem de 2° nível e só poderá atingir um novo nível em Bárbaro, Ladino ou outra classe quando atingir o 3° nível de personagem.'
    ]
  }
];

export const abilityRules: RuleBlock[] = [
  {
    title: 'Temporários',
    paragraphs: ['Pontos temporários provenientes de Magias(Perfeição dos Animais), Itens(Periapto da Sabedoria +6) ou outras fontes não garantem Usos adicionais de Habilidades, Talentos, Magias Adicionais, Pontos de Magia, Perícias Extras ou Magias Preparadas Extras.']
  },
  {
    title: 'Em parâmetros',
    paragraphs: [
      'Uma habilidade pode ser aplicada em um parâmetro(resistência, ataque, dano, etc) apenas uma vez, exceto em casos que a fonte diga explicitamente o contrário.',
      'Toda habilidade de classe que adiciona um modificador de habilidade a um parâmetro, como Autoconfiança (Car na CA), por exemplo, passa a ser limitada ao nível de classe caso o personagem faça multiclasse com outras classes básicas antes do 20º nível da classe em questão.',
      'Esta limitação também se aplica a habilidades concedidas por classes de prestígio caso o personagem tenha mais de uma classe de prestígio.'
    ]
  }
];

export const stackingRules: RuleBlock[] = [
  {
    title: 'Habilidades de Classe',
    paragraphs: [
      'Exemplo de acúmulo: Inspirar Coragem (+1 em jogadas de ataque, dano e testes de resistência contra o medo) e Fúria (+2 de JdA pelo +4 em For).',
      'De não acúmulo: Inspirar Coragem (+1 em jogadas de ataque, dano e testes de resistência contra o medo) e Grito de Kiai (+2 nas jogadas de ataque e dano durante uma rodada). Neste caso o bônus em JdA e Dano não se acumulam, mas os outros bônus continuam com seus efeitos normais.'
    ]
  },
  {
    title: 'Habilidades de Raça',
    paragraphs: [
      'Caso de raça que de magias ou habilidade de classe, como os hengeyokai, estas contam como magia ou habilidade de classe para acúmulos.',
      'Exemplo de não acúmulo: Forma selvagem(Hengeyokai) e Forma selvagem(druida).'
    ]
  },
  {
    title: 'Magias',
    paragraphs: [
      'Exemplo de acúmulo: Escudo arcano(+4 de CA) e Agilidade do gato(+2 de CA pelo +4 de Des).',
      'Exemplo de não acúmulo: Agilidade do gato(+4 de Des) e Físico do leão (+4 de For, Con e Des). O bônus em Des não acumula, mas os outros bônus de físico do leão continuam com seu efeito normal.'
    ]
  },
  {
    title: 'Itens mundanos e mágicos',
    paragraphs: [
      'Exemplo de acúmulo: Luvas da Destreza +4(4 de Des) e Manto Cinzento(+10 de furtividade).',
      'Exemplo de não acúmulo: Cinto da força +6(6 de For) e Cinto do campeão(+4 de força, +2 em manobras). O bônus em For não acumula, mas os outros bônus do cinto do campeão continuam com seu efeito normal.'
    ]
  },
  {
    title: 'Talentos',
    paragraphs: [
      'Talentos do mesmo grupo não se acumulam, apenas talentos de grupos diferentes se acumulam.',
      'Exemplo de acúmulo: Especialização em arma (+1 de jogada de ataque e +2 em dano) e Dom dos Justos (Você recebe +1 nas jogadas de ataque e dano contra criaturas Malignas). Sendo o primeiro de combate e o segundo Poder Concedido.',
      'Exemplo de não acúmulo: Especialização em arma (+1 de jogada de ataque e +2 em dano) e Exterminador de Monstros (+2 nas jogadas de ataque e dano contra criaturas Grandes ou maiores). Ambos de Combate.'
    ]
  },
  {
    title: 'Modelos',
    paragraphs: ['Diferente de outras fontes, modelos se acumulam. Um personagem pode ter quantos modelos conseguir, porém, seus níveis de ajuste se acumulam. Um guerreiro 3 com modelo Meio-Dragão(ND +2) é considerado um personagem de nível 5 para cálculo de ND e XP necessária para o próximo nível.']
  },
  {
    title: 'Outros',
    paragraphs: ['Qualquer habilidade que seja igual (Mesmo nome ou efeito), como autoconfiança do Nobre e Swashbuckler, por exemplo, não se acumulam. Exceto quando a habilidade diz o contrário.']
  }
];

export const temporaryLevelRules: RuleBlock[] = [
  {
    title: 'Positivos',
    paragraphs: ['Cada nível positivo garante um bônus cumulativo de +1 em jogadas e testes para cada nível adicional.']
  },
  {
    title: 'Negativos',
    paragraphs: [
      'Cada nível negativo impõe uma penalidade cumulativa de -1 em jogadas e testes para cada nível negativo. Em personagens que possuem PMs, além dos efeitos anteriores, Níveis negativos reduzem 1 PM e aumentam a redução em 1 PM a cada nível negativo seguinte. Por exemplo, um personagem que tenha recebido 3 níveis negativos, perderia 6 PMs(1 PM no primeiro nível, 2 no segundo e 3 no terceiro).',
      'Personagens que recebem Níveis negativos igual ao seu Nível morrem.',
      'A remoção de níveis negativos não recupera o PM perdido, mas qualquer outra fonte(poções, descanso, habilidades etc) recupera normalmente.'
    ]
  },
  {
    title: 'Perda de níveis',
    paragraphs: [
      'Um personagem que perde um nível permanente volta para o nível anterior com metade da XP necessária para o próximo nível. Além disso, níveis perdidos podem ser recuperados com treinamento de uma semana x nível que foi perdido.',
      'Ex: Um guerreiro 10 perde um nível se tornando um personagem de nível 9. Ele pode passar 10 semanas em treinamento para voltar ao nível anterior.'
    ]
  }
];

export const personagemIntro = [
  'Todo personagem tem seis números que indicam seus valores de habilidades: Força (For), Destreza (des), Constituição (Con), Inteligência (Int), Sabedoria (Sab) e Carisma (Car).',
  'Um modificador de habilidade é o número que você soma ou subtrai de uma jogada de dado quando seu personagem tenta fazer algo ligado àquela habilidade. Por exemplo, você usará o modificador de Destreza para atingir um alvo com um ataque à distância. Algumas vezes um modificador também será aplicado a algo que não depende de rolar dados seu modificador de Destreza também será somado à classe de armadura para determinar sua CA final.',
  'Cada habilidade tem seu modificador, de acordo com a tabela a seguir. Ele será positivo quando a habilidade é alta (12 ou mais), negativo quando a habilidade é baixa (9 ou menos), ou nulo quando a habilidade é mediana (10 ou 11).',
  'Um modificador positivo é chamado de bônus, enquanto um modificador negativo é chamado de penalidade.'
];

export const stackingIntro = 'Bônus se acumulam desde que sejam de fontes diferentes.';
