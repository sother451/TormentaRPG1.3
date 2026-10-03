import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "paladino",
  "name": "Paladino",
  "family": "Paladino",
  "sourceDocId": "1-zQwcwrZy_SceJYklJIGsqg7uEb6xsWjexG_QMydkuA",
  "sourceTitle": "Paladino",
  "status": "complete",
  "editorialNotes": [],
  "basics": {
    "hitPoints": "um Paladino começa com 20 pontos de vida (+ Mod. de Con) e ganha 5 PV (+mod. Con) por nível seguinte.",
    "trainedSkills": "Conhecimento(Religião) e outras 4 + mod. Inteligência.",
    "classSkills": "Adestrar Animais (Car), Atletismo (For), Cavalgar (Des), Conhecimento (Int), Cura (Sab), Diplomacia (Car), Iniciativa (Des), Intuição (Sab), Ofício (Int).",
    "bonusTalents": "Usar Armaduras (leves, médias e pesadas), Usar Armas (simples e marciais), Usar Escudos, Resistência Aprimorada (Fortitude)."
  },
  "progression": {
    "headers": [
      "Nível",
      "BBA",
      ""
    ],
    "rows": [
      [
        "1º",
        "+1",
        "Devoto, Golpe divino (3 Usos), Encontrar o Inimigo"
      ],
      [
        "2º",
        "+2",
        "Impor de Mãos 1d8+1, Graça Divina"
      ],
      [
        "3º",
        "+3",
        "Presença dos Deuses, Saúde Divina"
      ],
      [
        "4º",
        "+4",
        "Armamentos da Fé, Golpe divino (5 Usos)"
      ],
      [
        "5º",
        "+5",
        "Vínculo Divino"
      ],
      [
        "6º",
        "+6",
        "Impor de Mãos 2d8+2, Imposição de Celestial"
      ],
      [
        "7º",
        "+7",
        "Golpe divino (7 Usos)"
      ],
      [
        "8º",
        "+8",
        "Armamentos da Fé"
      ],
      [
        "9º",
        "+9",
        "Imposição de Celestial"
      ],
      [
        "10º",
        "+10",
        "Impor de Mãos 3d8+3, Golpe divino (9 Usos), Presença dos Deuses"
      ],
      [
        "11º",
        "+11",
        ""
      ],
      [
        "12º",
        "+12",
        "Armamentos da Fé, Imposição de Celestial"
      ],
      [
        "13º",
        "+13",
        "Golpe divino (11 Usos)"
      ],
      [
        "14º",
        "+14",
        "Impor de Mãos 4d8+4"
      ],
      [
        "15º",
        "+15",
        "Imposição de Celestial"
      ],
      [
        "16º",
        "+16",
        "Golpe divino (13 Usos)"
      ],
      [
        "17º",
        "+17",
        ""
      ],
      [
        "18º",
        "+18",
        "Armamentos da Fé, Impor de Mãos 5d8+5, Imposição de Celestial, Presença dos Deuses"
      ],
      [
        "19º",
        "+19",
        "Golpe divino (15 Usos)"
      ],
      [
        "20º",
        "+20",
        "O Escolhido"
      ]
    ]
  },
  "sections": [
    {
      "title": "Devoto",
      "level": 3,
      "paragraphs": [
        "Você deve escolher uma divindade padroeira Bondosa ou Maligna e atuar como seu devoto. As divindades determinam quais talentos de poderes concedidos você pode ter. Paladinos recebem habilidades diferentes dependendo da tendência de seu Deus."
      ],
      "tables": []
    },
    {
      "title": "Golpe divino:",
      "level": 3,
      "paragraphs": [
        "Como uma ação livre, pode anunciar o uso desta habilidade antes de rolar um ataque corpo-a-corpo. Se o alinhamento do alvo é Maligno (Divindade Bondosa) / Bondoso (Divindade Maligna), você soma seu bônus de Carisma à jogada de ataque, e seu nível de paladino ao dano como dano Sagrado (Divindade Bondosa) / Profano (Divindade Maligna). Contra um alvo não Maligno (Divindade Bondosa) / Bondoso (Divindade Maligna), a habilidade não tem efeito, mas você gasta um uso diário mesmo assim. Esta habilidade pode ser utilizada 3 vezes ao dia. A cada três níveis seguintes, você recebe dois usos diários adicionais."
      ],
      "tables": []
    },
    {
      "title": "Encontrar o Inimigo:",
      "level": 3,
      "paragraphs": [
        "A partir do 1º nível, você pode lançar a magia Detectar o Mal (Divindade Bondosa) / Detectar o Bem (Divindade Maligna) à vontade com uma ação de movimento."
      ],
      "tables": []
    },
    {
      "title": "Impor de Mãos:",
      "level": 3,
      "paragraphs": [
        "No 2º nível, você recebe a habilidade de dar ou tirar a vida usando uma Ação Padrão.",
        "Curar Pelas Mãos (Divindade Bondosa): Cura 1d8+1 PV para criaturas vivas. Com um Jogada de Toque, causa dano em mortos-vivos.",
        "Ferir Pelas Mãos (Divindade Maligna): Cura 1d8+1 PV para mortos-vivos. Com uma Jogada de Toque, causa dano em criaturas vivas.",
        "No 6º nível, e a cada quatro níveis seguintes, esse valor aumenta em 1d8+1.",
        "Essa habilidade pode ser usada um número de vezes por dia igual a 3 + seu modificador de Carisma."
      ],
      "tables": []
    },
    {
      "title": "Graça Divina:",
      "level": 3,
      "paragraphs": [
        "No 2º nível, você soma seu bônus de Carisma ou seu nível nesta classe (O que for menor) a todos os testes de resistência."
      ],
      "tables": []
    },
    {
      "title": "Presença dos Deuses:",
      "level": 3,
      "paragraphs": [
        "No 3º nível, você recebe Imunidade a Medo superando ou se tornando ele. Além disso, recebe uma aura associada ao seu caminho:",
        "Aura de Coragem (Divindade Bondosa): Todos os seus aliados a até 3m recebem +4 em testes de resistência contra medo. No 10º nível, o alcance aumenta para 9m e o bônus aumenta para +6, além de garantir bônus contra Encantamento e a partir do 18º nível, todos dentro do alcance ficam imunes a medo e encantamento.",
        "Aura do Desespero (Divindade Maligna): Uma vez por dia, com uma Ação Livre, fazer todos os seus inimigos a até 3m ficarem Abalados por 1 minuto se falharem em um teste de Vontade (CD 10 + metade do Nível + Mod. Carisma). No 10º nível, a CD aumenta em 5(15 + metade do Nível + Mod. Carisma) e a partir do 18º nível, a habilidade não possui Teste de Resistência."
      ],
      "tables": []
    },
    {
      "title": "Saúde Divina:",
      "level": 3,
      "paragraphs": [
        "No 3º nível, você se torna imune a todas as doenças mundanas (mas ainda pode ser afetado por doenças mágicas ou maldições)."
      ],
      "tables": []
    },
    {
      "title": "Armamentos da Fé:",
      "level": 3,
      "paragraphs": [
        "Arma da Fé: a partir do 4º nível, seus ataques corpo-a-corpo são considerados armas mágicas menores para causar dano a criaturas com redução de dano.",
        "Armadura da Fé: no 8º nível, você recebe CA+2.",
        "Poder Sagrado: a partir do 12º nível, você pode canalizar energia divina para melhorar sua capacidade de combate. Você recebe +4 nas jogadas de ataque e dano durante um minuto. Usar esta habilidade é uma ação padrão, e ela pode ser usada uma vez por dia.",
        "Campeão dos Deuses: a partir do 18º nível, você pode usar sua energia divina para se tornar praticamente invencível em batalha. Você recebe RD 20 durante um minuto. Usar esta habilidade é uma ação de movimento, e ela pode ser usada uma vez por dia."
      ],
      "tables": []
    },
    {
      "title": "Vínculo Divino:",
      "level": 3,
      "paragraphs": [
        "No 5º nível, você cria um elo com um animal, você recebe uma Montaria Sagrada, sempre que você sobe de nível a montaria também recebe um nível, Uma Montaria Sagrada recebe BBA 1/Nível além dos demais benefícios por passagem de nível exceto Talentos. Caso sua Montaria Sagrada venha a morrer você pode invocar uma nova com um dia de trabalho (8 Horas). No 10º nível, os PVs da sua montaria aumentam em um valor igual a metade dos PVs máximos do Paladino. No 15º nível, caso sua montaria sagrada morra, você pode trazê-la de volta à vida como na magia ressurreição verdadeira após passar 1 hora em oração e meditação, sem gastar PM ou componentes materiais.",
        "A Montaria Sagrada age no turno do Paladino, compartilhando de sua rolagem de iniciativa, porém possui Ações próprias.",
        "Pv: uma Montaria Sagrada começa com 20 (+ mod. Constituição) Pontos de Vida e ganha 4 PV (+ mod. Constituição) por nível seguinte.",
        "Deslocamento: 18 Metros.",
        "Perícias: A Montaria Sagrada possui 2 + Mod. Int pericias treinadas, mas não pode escolher perícias baseadas em inteligência ou Carisma.",
        "Habilidades: For 18, Des 16, Con 16, Int 3, Sab 10, Car 3.",
        "Arma Natural: A montaria sagrada possui dois ataques com arma natural que causa dano de forma equivalente a uma Adaga própria para o seu tamanho (1d4 para criaturas Médias).",
        "Tamanho: Uma Montaria Sagrada tem o mesmo tamanho que o Paladino teria originalmente (Médio para uma Criatura Média).",
        "Outras habilidades: A montaria sagrada possui couro, escamas ou carapaças que fornecem CA +2."
      ],
      "tables": []
    },
    {
      "title": "Imposição Celestial:",
      "level": 3,
      "paragraphs": [
        "Escolha uma das condições a seguir: Abalado, Apavorado, Atordoado, Cego, Doente(Divindade Bondosa) / Ofuscado(Divindade Maligna), Envenenado(Divindade Bondosa) / Enredado(Divindade Maligna), Exausto, Fatigado ou Surdo. Quando você usa:",
        "Curar Pelas Mãos: Além de curar PV, também remove essa condição da criatura curada (um alvo apavorado fica abalado; um alvo exausto fica fatigado).",
        "Ferir Pelas Mãos: além de infligir dano, também inflige essa condição na criatura se ela falhar em um teste de Fortitude (CD 10 + metade do Nível + Mod. Carisma). (um alvo só fica: Apavorado se já estiver Abalado; Exausto se já estiver Fatigado ). Dura 1d3+1 rodadas.",
        "No 9º nível, e a cada três níveis seguintes, você pode escolher outra condição. Mas você cura/inflige apenas uma condição por cada uso de Impor de Mãos."
      ],
      "tables": []
    },
    {
      "title": "O Escolhido:",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Paladino, você nunca pode ter mais de um dos talentos de 20º nível da classe."
      ],
      "tables": []
    }
  ],
  "classTalents": [
    {
      "id": "talento-intervencao-divina",
      "name": "Intervenção Divina",
      "prerequisite": "4º Nível de Paladino",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Quando você utiliza a habilidade “Impor de Mãos” em si mesmo, você dobra os dados da habilidade além de aumentá-los para D10. Uma vez por dia você pode utilizar este efeito em um aliado. No 8º nível utilizar este efeito uma segunda vez e uma terceira no 16º nível."
      ]
    },
    {
      "id": "talento-protecao-da-magia",
      "name": "Proteção da Magia",
      "prerequisite": "4º Nível de Paladino",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Você recebe um bônus de +4 em testes de resistência contra magias arcanas lançadas por conjuradores."
      ]
    },
    {
      "id": "talento-bencao-da-protecao",
      "name": "Benção da Proteção",
      "prerequisite": "4º Nível de Paladino",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Como uma Ação Padrão e um uso de “Impor de Mãos”  você ergue uma barreira sobre si que dura 1 minuto, a barreira lhe concede PV Temporários igual seu Nível nesta classe + seu modificador de Carisma. No 8º nível o escudo recebe um bônus fixo de +5, No 16º nível o escudo passa a ser igual a 5 + Duas vezes seu Nível nesta classe + Duas vezes seu modificador de Carisma."
      ]
    },
    {
      "id": "talento-julgamento",
      "name": "Julgamento",
      "prerequisite": "8º Nível de Paladino",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "A habilidade “Impor de Mãos” tem seu alcance aumentado para 9 Metros e passa a adicionar seu Modificador de Carisma a sua Cura ou Dano. Quando você usa:",
        "Curar Pelas Mãos: Escolha também uma segunda criatura, ela recupera a mesma quantidade de pontos de vida que a primeira.",
        "Ferir Pelas Mãos: Os dados da habilidade se tornam D10. Além disso, se utilizar a habilidade para Curar um Morto-Vivo, pode utilizar a habilidade como uma ação de Movimento."
      ]
    },
    {
      "id": "talento-guardiao-celestial",
      "name": "Guardião Celestial",
      "prerequisite": "8º Nível de Paladino",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Enquanto estiver utilizando um escudo você se torna imune a venenos, paralisia e metamorfose."
      ]
    },
    {
      "id": "talento-golpes-purificadores",
      "name": "Golpes Purificadores",
      "prerequisite": "8º Nível de Paladino",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Se estiver empunhando uma Arma com Duas Mãos, sua habilidade “Golpe Divino” gera um efeito de dissipar magia maior no alvo. Considere que seu nível de conjurador é seu nível nesta classe."
      ]
    },
    {
      "id": "talento-soar-de-sinos",
      "name": "Soar de Sinos",
      "prerequisite": "12º Nível de Paladino",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Como ação Livre e um uso de “Golpe Divino”, você escolhe uma criatura que possa ver e esteja a até 18 metros. Durante a rodada seguinte após o uso desta habilidade, seus ataques contra a criatura recebem +3 em Jogadas de Ataque e Dano. Estes valores se acumulam com os benefícios de Golpe Divino e Poder Sagrado."
      ]
    },
    {
      "id": "talento-defensor-ardente",
      "name": "Defensor Ardente",
      "prerequisite": "12º Nível de Paladino",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Quando você utiliza a ação “Defender”, até o início de sua próxima rodada, ataques corpo-a-corpo ou à distância contra você, causam 2d6 + Mod. Car. de dano Sagrado (Divindade Bondosa) / Profano (Divindade Maligna) de volta ao atacante."
      ]
    },
    {
      "id": "talento-queimar-os-infieis",
      "name": "Queimar os Infiéis",
      "prerequisite": "12º Nível de Paladino",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Como uma ação padrão, você pode fazer um teste de Vontade oposto contra um conjurador arcano a até 9m. Caso seja bem-sucedido, o Paladino rola os mesmos dados que rolaria para a habilidade cura pelas mãos. O oponente perde PMs iguais a metade do número rolado. Usar esta habilidade gasta um uso diário da habilidade “Impor de Mãos”."
      ]
    },
    {
      "id": "talento-aura-de-sacrificio",
      "name": "Aura de Sacrifício",
      "prerequisite": "16º Nível de Paladino",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Quando um Aliado a até 3 metros de você sofrer qualquer tipo de dano, você pode como reação transferir o dano para si mesmo."
      ]
    },
    {
      "id": "talento-aura-de-retribuicao",
      "name": "Aura de Retribuição",
      "prerequisite": "16º Nível de Paladino",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Quando um Aliado a até 1,5 metros de você sofrer um acerto crítico, você pode gastar sua reação para que o próximo ataque de seu aliado seja um crítico garantido."
      ]
    },
    {
      "id": "talento-aura-de-devocao",
      "name": "Aura de Devoção",
      "prerequisite": "16º Nível de Paladino",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Quando um Aliado a até 3 metros for reduzido a 0 ou menos PVs você pode como sua reação utilizar a habilidade “Impor de Mãos\" nele. Independente de seu caminho, esta habilidade sempre cura o alvo."
      ]
    },
    {
      "id": "talento-seraphim",
      "name": "Seraphim",
      "prerequisite": "20º Nível de Paladino",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Ao ativar “Poder Sagrado” da habilidade “Armamentos da Fé” você convoca os Poderes de seu Deus. Enquanto “Poder Sagrado” durar a margem de Ameaça e Multiplicador de todos seus Ataques aumenta em +2 e o bônus em Ataque e Dano garantido pela habilidade aumenta para +8. Além disso recebe imunidade a dano de habilidade, acertos críticos e golpes de misericórdia."
      ]
    },
    {
      "id": "talento-fantasma-santo",
      "name": "Fantasma Santo",
      "prerequisite": "20º Nível de Paladino",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você recebe as habilidades: “Ataque Espectral”, “Drenar Energia” e “Incorpóreo”.",
        "Ataque espectral: você pode escolher atingir criaturas corpóreas como se você não fosse incorpóreo.",
        "Drenar energia: A primeira vez que você causar dano corpo-a-corpo em uma criatura viva, esta criatura sofre dois níveis negativos. Você recebe 5 PV temporários para cada nível negativo. Um dia depois, a criatura deve fazer um teste de Fortitude (CD 20 + mod. Car do Paladino) para cada nível negativo. Um sucesso elimina o nível negativo. Uma falha transforma o nível negativo na perda de um nível permanente.",
        "Incorpóreo: você não tem mais corpo físico. Seu valor de Força se torna nulo, você atravessa objetos sólidos, não podendo mais manipulá-los e seus ataques são sempre de toque. Você só pode ser atingido por armas mágicas, magias ou outras criaturas incorpóreas. Mesmo quando atingido por uma arma mágica, tem 50% de chance de ignorar o ataque. Você é imune a manobras de combate, como agarrar e empurrar."
      ]
    },
    {
      "id": "talento-paladino-entre-paladinos",
      "name": "Paladino Entre Paladinos",
      "prerequisite": "20º Nível de Paladino",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Quando você utiliza suas habilidades “Golpe Divino”, “Encontrar o Inimigo”, “impor de Mãos”, “Presença dos Deuses”, “Armamentos da Fé” ou “Imposição Celestial” você ignora a tendência de sua Divindade, podendo utilizar a habilidade do Caminho Bondoso ou Maligno na ativação das mesmas. Por exemplo ao utilizar “Impor de Mãos” poderia na ativação da habilidade escolher entre Curar ou Inlingir com seu toque."
      ]
    }
  ]
} satisfies ClassDetail;
