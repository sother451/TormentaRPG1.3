import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "senhor-das-feras",
  "name": "Senhor das Feras",
  "family": "Druida",
  "sourceDocId": "1R6v2i51yGVEsIHXIrqFR5PDsukS4NA1Kx6nfSNXYiXs",
  "sourceTitle": "Senhor das Feras",
  "status": "complete",
  "editorialNotes": [],
  "basics": {
    "hitPoints": "um Senhor das Feras começa com 16 pontos de vida (+ Mod. de Con) e ganha 4 PV (+mod. Con) por nível seguinte.",
    "trainedSkills": "Conhecimento(Natureza) e outras 4 + mod. Inteligência.",
    "classSkills": "Adestrar Animais (Car), Atletismo (For), Cavalgar (Des), Cura (Sab) , Conhecimento (Int), Diplomacia (Car), Identificar Magia (Int), Ofício (Int), Percepção (Sab), Sobrevivência (Sab).",
    "bonusTalents": "Usar Armaduras (leves e médias), Usar Armas Simples, Usar Escudos, Resistência Aprimorada (Fortitude, Vontade)."
  },
  "progression": {
    "headers": [
      "Nível",
      "BBA",
      "",
      "Magias"
    ],
    "rows": [
      [
        "1º",
        "+0",
        "Crias da Selva, Devoto, Habilidade de Companheiro, Empatia Selvagem",
        "0,1º"
      ],
      [
        "2º",
        "+1",
        "Habilidade de Familiar, Pequenos Guias",
        ""
      ],
      [
        "3º",
        "+1",
        "Táticas da Matilha",
        ""
      ],
      [
        "4º",
        "+2",
        "",
        "2º"
      ],
      [
        "5º",
        "+2",
        "Frenesi Selvagem, Habilidade de Companheiro",
        ""
      ],
      [
        "6º",
        "+3",
        "Estouro da Manada",
        ""
      ],
      [
        "7º",
        "+3",
        "Crias da Selva, Guia das Matas",
        "3º"
      ],
      [
        "8º",
        "+4",
        "Pequenos Guias",
        ""
      ],
      [
        "9º",
        "+4",
        "",
        ""
      ],
      [
        "10º",
        "+5",
        "Habilidade de Companheiro",
        "4º"
      ],
      [
        "11º",
        "+5",
        "",
        ""
      ],
      [
        "12º",
        "+6",
        "Táticas da Matilha",
        ""
      ],
      [
        "13º",
        "+6",
        "Crias da Selva",
        "5º"
      ],
      [
        "14º",
        "+7",
        "Pequenos Guias",
        ""
      ],
      [
        "15º",
        "+7",
        "Frenesi Selvagem, Habilidade de Companheiro",
        ""
      ],
      [
        "16º",
        "+8",
        "Estouro da Manada",
        "6º"
      ],
      [
        "17º",
        "+8",
        "Guia das Matas",
        ""
      ],
      [
        "18º",
        "+9",
        "",
        ""
      ],
      [
        "19º",
        "+9",
        "Crias da Selva",
        ""
      ],
      [
        "20º",
        "+10",
        "Habilidade de Companheiro, O Rei da Selva, Pequenos Guias",
        ""
      ]
    ]
  },
  "sections": [
    {
      "title": "Magias",
      "level": 3,
      "paragraphs": [
        "Tipo e níveis de magia: você pode lançar magias divinas de nível 0 (truques) e 1º nível. A cada três níveis de Senhor das Feras seguintes, você pode lançar magias um nível acima: no 4º nível pode lançar magias de 2º nível, no 7º nível você pode lançar magias de 3º nível e assim por diante até o 16º nível, quando você pode lançar magias de 6º nível.",
        "Habilidade-chave: sua habilidade para lançar magias é Sabedoria.",
        "Magias Conhecidas: você conhece 4 magias Divinas de nível 0, e também um número de magias de 1º nível igual a 1 + seu modificador de Sabedoria. Cada vez que avançar de nível, você aprende duas novas magias de qualquer nível que possa lançar.",
        "Pontos de Magia: você tem um número de pontos de magia (PM) igual a 1 + modificador de Sabedoria. Cada vez que avança de nível, recebe 2 PM.",
        "Preparação de Magia: você precisa preparar suas magias com antecedência. A cada dia deve estudar durante uma hora, e então escolher um número igual a Metade do Nível + MdC de magias para preparar. Essas magias podem ser conjuradas livremente durante o dia com os PMs do conjurador, podendo receber efeitos de talentos metamágicos e habilidades de classe."
      ],
      "tables": []
    },
    {
      "title": "Crias da Selva",
      "level": 3,
      "paragraphs": [
        "No 1º nível, você cria um elo com um animal, você recebe um Companheiro Animal, sempre que você sobe de nível o Companheiro também recebe um nível, Um Companheiro Animal recebe BBA 1/Nível além dos demais benefícios por passagem de nível exceto Talentos. No 7º nível, você recebe um segundo companheiro animal. No 13º nível, você recebe um terceiro companheiro animal. Por fim, no 19º nível você recebe um quarto. Cada companheiro animal pode ser de uma espécie diferente e ter habilidades diferentes.",
        "Caso seu companheiro venha a morrer você pode invocar um novo com um dia de trabalho (8 Horas) em um ambiente Selvagem. No 15º nível, caso um de seus companheiros morra, você pode trazê-la de volta à vida como na magia ressurreição verdadeira após passar 1 hora em meditação, sem gastar PM ou componentes materiais.",
        "O Companheiro Animal age no turno do Senhor das Feras, compartilhando de sua rolagem de iniciativa, porém possui apenas uma Ação Padrão por Rodada. Uma vez por rodada o Senhor das Feras pode gastar sua ação de movimento para ordenar todos os seus companheiros animais, os companheiros que podem ouvir o Senhor das Feras recebem uma ação de movimento nesta rodada. Durante um combate você pode ter no máximo dois companheiros animais ativos, caso possua 3 ou mais companheiros deve escolher no início do combate quais deles irão participar do encontro, qualquer companheiro não escolhido participa do combate como um Ajudante para o próprio Senhor das Feras ou outros Companheiros Animais, Feras prestando ajuda através deste efeito não são contabilizadas no número máximo de Ajudantes que o Senhor das Feras e suas bestas podem possuir.",
        "."
      ],
      "tables": []
    },
    {
      "title": "Devoto",
      "level": 3,
      "paragraphs": [
        "Você deve escolher uma divindade padroeira entre aquelas disponíveis para Senhor das Feras (Allihanna, Megalokk, Oceano, Kallyadranoch ou Nimb), e atuar como seu devoto. Sua divindade determina quais talentos de poderes concedidos você pode ter."
      ],
      "tables": []
    },
    {
      "title": "Empatia Selvagem",
      "level": 3,
      "paragraphs": [
        "Você sabe se comunicar com animais através de linguagem corporal e vocalizações. Você pode fazer testes de Diplomacia com animais, com um bônus de Nível + Mod. Sab. Normalmente, animais domésticos são indiferentes e animais selvagens são inamistosos (ou mesmo hostis, no caso de um predador faminto). Se você usar empatia selvagem em um animal da mesma espécie de um de seus companheiros animais, recebe um bônus de +4 no teste."
      ],
      "tables": []
    },
    {
      "title": "Pequenos Guias",
      "level": 3,
      "paragraphs": [
        "No 2º nível, você recebe um familiar. Sempre que você sobe de nível, o Familiar também recebe um nível, Um Familiar recebe BBA ¼ Nível além dos demais benefícios por passagem de nível exceto Talentos. No 8º nível, você recebe um segundo Familiar. No 14º nível, você recebe um terceiro Familiar. Por fim, no 20º nível você recebe um quarto. Cada Familiar pode ser de uma espécie diferente e ter habilidades diferentes.",
        "Diferente de um Companheiro Animal, o Familiar sempre serve apenas como um Ajudante durante o combate, porém podendo auxiliar apenas o Próprio senhor das Feras ou os Companheiros Animais que ele controla, um familiar não é contabilizado no número máximo de Ajudantes que o Senhor das Feras e suas bestas podem possuir."
      ],
      "tables": []
    },
    {
      "title": "Táticas da Matilha",
      "level": 3,
      "paragraphs": [
        "A partir do 3º nível, você pode pagar 2 PM adicionais ao lançar uma magia de alcance pessoal com tempo de conjuração de uma ação padrão. Fazendo isso, você lança a magia em um de Companheiros Animais ao mesmo tempo. A partir do 12° Nível passa a lançar a magia em todos os seus Companheiros ao invés de apenas um."
      ],
      "tables": []
    },
    {
      "title": "Frenesi Selvagem",
      "level": 3,
      "paragraphs": [
        "Uma vez por dia com uma ação de movimento você pode forçar seus Companheiros Animais a uma frenesi, a Frenesi dura por um minuto e durante este período seus animais podem perder pontos de vida voluntariamente (até um máximo de 10 PV por ataque) e adicionar o valor perdido a sua próxima jogada dano, mesmo que o ataque erre a vida ainda é perdida. A partir do 15º nível a Frenesi passa a adicionar duas vezes o valor perdido às jogadas de dano."
      ],
      "tables": []
    },
    {
      "title": "Estouro da Manada",
      "level": 3,
      "paragraphs": [
        "Três vezes ao dia, mas apenas uma vez por rodada, com uma Ação Livre você pode ordenar todos os seus Companheiros Animais ativos, Durante esta rodada o deslocamento deles é Dobrado e eles recebem uma ação de movimento adicional, você ainda pode gastar de sua própria ação de movimento para dar uma segunda ação de movimento a eles. Na rodada seguinte após o uso desta habilidade o Senhor das Feras pode usar apenas uma ação padrão ou de movimento mas não ambas. A partir do 16º Nível quando o Senhor das Feras usa esta habilidade ele também pode trocar seus Companheiros Animais ativos em Combate por outros que estavam prestando ajuda, companheiros que entram no campo de batalha por esta habilidade não agem na rodada que se tornam ativos."
      ],
      "tables": []
    },
    {
      "title": "Guia das Matas",
      "level": 3,
      "paragraphs": [
        "A partir do 7º Nível você, seus Companheiros Animais e Familiares se tornam imunes a todos os venenos mágicos ou mundanos, e a dificuldade para rastreá-lo aumenta em CD +10. A partir do 17º nível, você, seus companheiros animais e familiares não sofrem mais penalidades por envelhecimento (veja o seção Características) além de ficarem imunes a envelhecimento mágico, por fim vocês podem atravessar terrenos difíceis sem sofrer redução em seus deslocamentos."
      ],
      "tables": []
    },
    {
      "title": "O Rei da Selva",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Senhor das Feras, você nunca pode ter mais de um dos talentos de 20º nível da classe."
      ],
      "tables": []
    },
    {
      "title": "Companheiros Animais",
      "level": 1,
      "paragraphs": [
        "Todo Companheiro Animal tem as características abaixo independente de sua função.",
        "Pv: Um Companheiro Animal começa com 12 (+ mod. Constituição) Pontos de Vida e ganha 3 PV (+ mod. Constituição) por nível seguinte.",
        "Deslocamento: 9 Metros",
        "Perícias: Um Companheiro Animal possui 2 perícias treinadas, mas não pode escolher perícias baseadas em inteligência ou Carisma.",
        "Habilidades: For 18, Des 16, Con 16, Int 3, Sab 10, Car 3.",
        "Arma Natural: Possui dois ataques com arma natural que causa dano de forma equivalente a uma Adaga própria para o seu tamanho (1d4 para criaturas Médias).",
        "Tamanho: Médio"
      ],
      "tables": []
    },
    {
      "title": "Habilidades Possíveis",
      "level": 3,
      "paragraphs": [
        "No 1º Nível você escolhe duas habilidades adicionais da lista abaixo para seu companheiro Animal, no 5º Nível e a cada 5 níveis após você pode escolher uma habilidade adicional da Lista para adicionar ao seu Companheiro Animal, um Companheiro não pode escolher a mesma habilidade múltiplas vezes. Em um ambiente selvagem você pode convocar um novo companheiro animal podendo então escolher novas habilidades para seu companheiro.",
        "Resiliência, Os Pvs do companheiro se tornam 16 (+ mod. Constituição) Pontos de Vida no primeiro nível e 4 PV (+ mod. Constituição) por nível seguinte, este efeito é retroativo.",
        "Armadura, RD igual a 1 + Mod. Sab. do Senhor das Feras.",
        "Runas - O Companheiro Animal recebe o Mod. Sab do Senhor das Feras como bônus em sua CA.",
        "Garras e Presas, O Companheiro Animal recebe metade do Mod. Sab do Senhor das Feras como bônus em suas JdA.",
        "Brutalidade, As Armas Naturais do Companheiro passam a causar dano como uma Espada Longa para seu tamanho (1d8 para criaturas Médias) ao invés de Adagas.",
        "Veneno, Uma criatura atingida por seu ataque natural deve fazer um teste de Fortitude (CD 10 + MdN + Mod. Sab. do Senhor das Feras). Se falhar, sofre mais 2d12 pontos de dano. No 8º e 16º nível o dano aumenta em 2d12. Uma Criatura imune a venenos também é imune a esta habilidade.",
        "Inseparaveis,  Enquanto o Companheiro e o Senhor das Feras estão adjacentes ao mesmo inimigo, vocês são considerados como flanqueando a criatura independente de suas posições atuais.",
        "Sagaz, O companheiro recebe um bônus de +4 para uma manobra de combate escolhida.",
        "Instinto, O companheiro recebe faro, visão na penumbra e +4 em testes de Percepção.",
        "Vôo, O companheiro recebe Vôo 12 Metros.",
        "Corrida, O Deslocamento do Companheiro aumenta para\" 18 Metros.",
        "Teia, O Companheiro pode lançar uma teia em uma criatura a até 18m como uma ação padrão. Faça um ataque à distância. Se acertar, a vítima fica imobilizada. Ela pode escapar com uma ação completa e um teste bem-sucedido de Força ou Acrobacia (CD 10 + MdN + Mod. Sab. do Senhor das Feras).",
        "Monstruosidade, um dos atributos físicos do companheiro (Força, Destreza ou Constituição) aumenta em +4. Quando o Companheiro atinge o 8 nível o bônus aumenta em +2 para +6 e novamente no 16º para um total de +8.",
        "Astúcia, um dos atributos mentais do companheiro (Inteligência, Sabedoria ou Carisma) aumenta em +4. Quando o Companheiro atinge o 8 nível o bônus aumenta em +2 para +6 e novamente no 16º para um total de +8. Um Companheiro com esta habilidade pode utilizar de Armas Simples.",
        "Crescimento, Seu companheiro aumenta ou diminui uma categoria de tamanho."
      ],
      "tables": []
    },
    {
      "title": "Familiares",
      "level": 1,
      "paragraphs": [
        "Todo Familiar tem as características abaixo independente de sua função.",
        "Pv: ½ do PV máximo do Senhor das Feras + Mod.Con",
        "Deslocamento: 9 Metros",
        "Perícias: Treinado em Sobrevivência e uma outra Perícia a escolha do Senhor das Feras entre Acrobacia, Atletismo, Atuação, Furtividade, Iniciativa, Intimidação, Intuição, Ladinagem ou Percepção.",
        "Habilidades: For 4, Des 16, Con 10, Int 4, Sab 12, Car 6.",
        "Arma Natural: Um ataque com arma natural que causa dano de forma equivalente a uma Adaga própria para o seu tamanho (1 para criaturas Mínimas).",
        "Tamanho: Mínimo"
      ],
      "tables": []
    },
    {
      "title": "Habilidades Possíveis",
      "level": 3,
      "paragraphs": [
        "No 1º Nível você escolhe duas habilidades adicionais da lista abaixo para seu Familiar, um Familiar não pode escolher a mesma habilidade múltiplas vezes. Em um ambiente selvagem você pode convocar um novo companheiro animal podendo então escolher novas habilidades para seu companheiro.",
        "Agressivo, O Familiar recebe treinamento em iniciativa, Enquanto o Familiar está auxiliando um aliado os ataques deste causam 2 de dano adicional Perfurante, no 6º, 12º nível este valor aumenta em 4 para um total de 10 no 16º.",
        "Bateria Mágica, O Familiar recebe treinamento em Identificar Magia. Enquanto o Familiar está auxiliando um aliado, o aliado pode uma vez por dia, consumir a essência mágica do Familiar restaurando 1 + Mod. Sab. do Senhor das Feras de seus PMs.",
        "Escoteiro, O Familiar recebe treinamento em Furtividade e Deslocamento Vôo 18 Metros. Enquanto o Familiar está auxiliando um aliado ele recebe o benefício da magia “Detectar Armadilhas”.",
        "Bibliotecário, O Familiar é capaz de entender 8 idiomas à sua escolha, incluindo idiomas que você mesmo não seja capaz de falar ou entender. Enquanto o Familiar está auxiliando um aliado, ele recebe +2 em testes de resistência.",
        "Vigia, o Familiar recebe treinamento em Percepção e Visão no Escuro, Enquanto o Familiar está auxiliando um aliado este aliado não pode ser flanqueado.",
        "Rastreador, O Familiar recebe treinamento em Sobrevivência, O Rastreador tem Faro 60 metros além de ser capaz de identificar o tipo de qualquer criatura dentro do alcance (animal, construto, espírito, humanoide, monstro ou morto-vivo). Enquanto o Familiar está auxiliando um aliado ele recebe os efeitos da magia “Passos sem Pegadas”",
        "Prestativo, o Familiar recebe treinamento em Atuação (Dramaturgia), enquanto o Familiar está auxiliando um aliado ele pode sacar qualquer item em sua posse com uma ação livre como se o familiar em si sacasse estes itens para ele.",
        "Parceiro de Crime, o Familiar recebe treinamento em Ladinagem, Enquanto o Familiar está auxiliando um aliado ele pode utilizar a magia “Som Fantasma” à vontade."
      ],
      "tables": []
    }
  ],
  "classTalents": [
    {
      "id": "talento-precaucao-da-selva",
      "name": "Precaução da Selva",
      "prerequisite": "4º Nível de Senhor das Feras",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Se um Ataque Corpo-a-Corpo ou a Distância iria atingir o Senhor das Feras enquanto um de seus Companheiros Animais estiverem a pelo menos 3 metros de distância dele, o Senhor das Feras pode como reação pode redirecionar o dano que sofreria para seu Companheiro."
      ]
    },
    {
      "id": "talento-instinto-de-sobrevivencia",
      "name": "Instinto de Sobrevivência",
      "prerequisite": "4º Nível de Senhor das Feras",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Quando um de seus Companheiros Animais sofre dano, você pode como reação gastar 1 PM e reduzir o dano recebido pelo Animal em 5. No 8º e 16º nível você pode pagar mais 1 PM e reduzir o dano novamente em 5, para 15 de Dano por 3 PMs no 16º nível."
      ]
    },
    {
      "id": "talento-regeneracao-frenetica",
      "name": "Regeneração Frenética",
      "prerequisite": "4º Nível de Senhor das Feras",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Quando um de seus Companheiros Animais reduzir um inimigo a 0 ou menos pontos de vida, ele recupera pontos de vida igual a metade do dano que derrubou a criatura."
      ]
    },
    {
      "id": "talento-alimentar-se-dos-fracos",
      "name": "Alimentar-se dos Fracos",
      "prerequisite": "8º Nível de Senhor das Feras",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Quando um de seus Companheiros Animais morre em combate todos os seus Companheiros Animais recebem uma das habilidades da lista do Companheiro caído, isso não permite um mesmo Companheiro ter a mesma habilidade múltiplas vezes ele pode adquirir apenas habilidades que não possuía. Este benefício dura por 10 minutos ou até você encontrar um novo Companheiro Animal para substituir o caido."
      ]
    },
    {
      "id": "talento-o-rei-entre-as-feras",
      "name": "O Rei entre as Feras",
      "prerequisite": "8º Nível de Senhor das Feras",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Escolha um de seus Companheiros Animais, ele recebe duas habilidades adicionais de Companheiro."
      ]
    },
    {
      "id": "talento-magia-selvagem",
      "name": "Magia Selvagem",
      "prerequisite": "8º Nível de Senhor das Feras",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Conjurar uma magia sobre um Companheiro Animal reduz o custo de sua próxima Magia em 2 (Min. 1)."
      ]
    },
    {
      "id": "talento-tatica-dos-ratos",
      "name": "Tática dos Ratos",
      "prerequisite": "12º Nível de Senhor das Feras",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Tanto você quanto seus Companheiros Animais recebem um bônus de +1 nas jogadas de Ataque e dano, este Bônus aumenta em +1 para cada Companheiro Animal adjacente ao mesmo inimigo."
      ]
    },
    {
      "id": "talento-tatica-dos-lobos",
      "name": "Tática dos Lobos",
      "prerequisite": "12º Nível de Senhor das Feras",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "A margem de ameaça e multiplicador de crítico de seus Companheiros Animais com ataques corpo-a-corpo e A Distância aumenta em +1."
      ]
    },
    {
      "id": "talento-tatica-dos-dragoes",
      "name": "Tática dos Dragões",
      "prerequisite": "12º Nível de Senhor das Feras",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Você passa a adicionar seu MdC ao Dano e Cura de suas Magias."
      ]
    },
    {
      "id": "talento-vigilia-da-natureza",
      "name": "Vigília da Natureza",
      "prerequisite": "16º Nível de Senhor das Feras",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Durante um descanso longo seus Companheiros Animais formam um perímetro em uma área de 60 metros ao redor de você e seus aliados, dentro desta área eles geram um efeito similar as magias Alarme, Dificultar Detecção e Círculo de Proteção contra Alinhamento protegendo exclusivamente seus aliados."
      ]
    },
    {
      "id": "talento-caminhada-pelas-matas",
      "name": "Caminhada pelas Matas",
      "prerequisite": "16º Nível de Senhor das Feras",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Quando você utiliza a habilidade “Estouro da Manada” pode escolher até 5 Criaturas além de seus Companheiros Animais, as criaturas escolhidas tem deslocamento Dobrado e uma ação de movimento adicional esta rodada."
      ]
    },
    {
      "id": "talento-influencia-astral",
      "name": "Influência Astral",
      "prerequisite": "16º Nível de Senhor das Feras",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Seus Familiares podem prestar ajuda para seus Aliados garantido todos os seus bônus a eles, diferente do Senhor das Feras e seus Companheiros Animais, quando os familiares auxiliam os aliados do Senhor das Feras eles contam no limite máximo de ajudantes que uma criatura pode ter."
      ]
    },
    {
      "id": "talento-ciclo-cruel",
      "name": "Ciclo Cruel",
      "prerequisite": "20º Nível de Senhor das Feras",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você adiciona 4 Companheiros Animal pela sua habilidade “Crias da Selva”, Quando o Senhor das Feras voluntariamente ataca um de seus Companheiros Animais todos os seus ataques são Acertos Críticos garantidos. Por fim, sempre que um dos Companheiros Animais do Senhor das Feras morre os outros Companheiros Animais recebem +4 em todas as suas Habilidades por 1 Hora, este efeito se acumula até duas vezes para um total de +8 em todos os seus Atributos."
      ]
    },
    {
      "id": "talento-fera-rei",
      "name": "Fera-Rei",
      "prerequisite": "20º Nível de Senhor das Feras",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Escolha um de seus Companheiros Animais e conceda a ele os seguintes benefícios:",
        "Tamanho: aumenta em duas categorias. Aplique os redutores relevantes às jogadas de ataque, classe de armadura e testes de furtividade. Aumente o dano das armas naturais de acordo.",
        "Classe de armadura: +8.",
        "Resistências: RD 10, RE 10, resistência a magia +4.",
        "Habilidades: For +16, Des +4, Con +8, Int +8, Sab +4, Car +4.",
        "Perícias: ganha treinamento em Iniciativa e Percepção. Também ganha bônus de +4 nos testes de Iniciativa, Percepção e qualquer outra perícia treinada.",
        "Talentos: Recebe o talento Vitalidade.",
        "Empatia Selvagem: Pode fazer testes de Diplomacia com animais de sua própria espécie, com um bônus igual a seu nível + modificador de Carisma",
        "Somente um de seus companheiros pode ter o benefício desta habilidade, encontrar uma nova Fera-Rei ou Treinar um de seus Companheiros para se tornar a nova Fera-Rei requer uma semana de treinamento (8 Horas por Dia)."
      ]
    },
    {
      "id": "talento-contos-da-floresta",
      "name": "Contos da Floresta",
      "prerequisite": "20º Nível de Senhor das Feras",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você recebe +4 em Sabedoria e pode utilizar seu Mod.Sab. e pode utilizar seu bônus de Sabedoria no lugar de Inteligência para perícias, além disso a Habilidade “Táticas da Matilha” sofre as seguintes alterações",
        "“Ao lançar uma magia de alcance pessoal com tempo de conjuração de uma ação padrão, você pode aplicar até quatro talentos metamágicos qualquer, com custo de até +5 PM, sem pagar seu custo e mesmo que você não os possua, além disso você lança a magia em todos os seus companheiros animais e familiares.\""
      ]
    }
  ]
} satisfies ClassDetail;
