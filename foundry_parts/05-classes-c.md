# Classes detalhadas — Parte 3


---

# Classe: paladino

**Fonte:** `src/data/class-details/paladino.ts`

~~~~typescript
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

~~~~


---

# Classe: artifice

**Fonte:** `src/data/class-details/artifice.ts`

~~~~typescript
import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "artifice",
  "name": "Artífice",
  "family": "Artífice",
  "sourceDocId": "1CnZx34Yaf-y1vdjq8XD7W0j4xEtpbyvEOckk93bkNH8",
  "sourceTitle": "Artifice",
  "status": "complete",
  "editorialNotes": [],
  "basics": {
    "hitPoints": "um Artífice começa com 12 pontos de vida (+ Mod. de Con) e ganha 3 PV (+mod. Con) por nível seguinte.",
    "trainedSkills": "Conhecimento (Engenharia) e outras 4 + mod. Inteligência. (Mínimo 4)",
    "classSkills": "Conhecimento (Int), Diplomacia (Car), Identificar Magia (Int), Intuição (Sab), Obter Informação (Car), Ofício (Int), Percepção (Sab).",
    "bonusTalents": "Usar Armaduras (leves, médias), Usar Armas Simples, Usar Escudos, Resistência Aprimorada (Vontade)."
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
        "Chave sônica (+2), Infundir Magias",
        "0,1º"
      ],
      [
        "2º",
        "+1",
        "Fabricar Itens (1/6)",
        ""
      ],
      [
        "3º",
        "+2",
        "Árvore de Natal (+1), Companheiro Autômato",
        ""
      ],
      [
        "4º",
        "+3",
        "",
        "2º"
      ],
      [
        "5º",
        "+3",
        "Chave sônica (+4)",
        ""
      ],
      [
        "6º",
        "+4",
        "",
        ""
      ],
      [
        "7º",
        "+5",
        "Ativação Metamagia",
        "3º"
      ],
      [
        "8º",
        "+6",
        "Criar Itens Mágicos (2d6+1 Dias / Menores)",
        ""
      ],
      [
        "9º",
        "+6",
        "Árvore de Natal (+2)",
        ""
      ],
      [
        "10º",
        "+7",
        "Chave sônica (+6), Fabricar Itens (1/8)",
        "4º"
      ],
      [
        "11º",
        "+8",
        "Homúnculo",
        ""
      ],
      [
        "12º",
        "+9",
        "Criar Itens Mágicos (1d8+1 Dias / Médios)",
        ""
      ],
      [
        "13º",
        "+9",
        "Companheiro Autômato",
        "5º"
      ],
      [
        "14º",
        "+10",
        "Transfusão de Cargas",
        ""
      ],
      [
        "15º",
        "+11",
        "Chave sônica (+8), Árvore de Natal (+3)",
        ""
      ],
      [
        "16º",
        "+12",
        "Criar Itens Mágicos (1d4+1 Dias / Maiores)",
        "6º"
      ],
      [
        "17º",
        "+12",
        "Improviso Mágico",
        ""
      ],
      [
        "18º",
        "+13",
        "Controlar Construtos",
        ""
      ],
      [
        "19º",
        "+14",
        "",
        ""
      ],
      [
        "20º",
        "+15",
        "Chave sônica (+10), Artesão lendário, Magnum Opus",
        ""
      ]
    ]
  },
  "sections": [
    {
      "title": "Chave Sônica",
      "level": 3,
      "paragraphs": [
        "Todo artífice tem uma ferramenta mágica pessoal multiuso de funcionamento complicado, impossível de entender, excerto para ele próprio. Este item substitui kits de ferramentas para teste de perícias. Além disso, com a chave em mãos, você recebe +2 em todos os testes de Ofício e de Ladinagem para abrir fechaduras, operar mecanismos e usar instrumentos mágicos, e pode fazer todos estes testes sem treinamento. O bônus da chave muda para +4 no 5º nível e aumenta em +2 a cada cinco níveis seguintes. Se a chave sônica for perdida ou destruída, você pode criar outra como se fosse criar um kit de artesão obra-prima."
      ],
      "tables": []
    },
    {
      "title": "Infundir Magias",
      "level": 3,
      "paragraphs": [
        "O artífice é um tipo de conjurador, mas em vez de lançar magia, ele infunde poder mágico em roupas, armaduras e outros acessórios, criando itens mágicos temporários. Uma criatura vestindo o item recebe os efeitos da magia quando o artífice os ativa. Magias infundidas podem ser dissipadas normalmente, Ele também pode encerrar o efeito quando desejar, mas precisa estar em posse do objeto infundido.",
        "Tipo e níveis de magia: no 1° nível o artífice pode infundir magias arcanas e divinas de 1º nível. a cada três níveis seguintes, seu nível de magia aumenta: no 4º nível pode infundir magias de 2º nível, no 7° nível pode infundir magias de 3° nível e assim por diante até o 16° nível, quando você pode infundir magias de 6° nível.",
        "Habilidade-chave: sua habilidade para lançar magias é Inteligência.",
        "Magias Conhecidas: você conhece um número de magias de 1º nível igual a 1 + seu MdC. Cada vez que avançar de nível, você aprende uma nova magia de qualquer nível que possa lançar.  Você só pode aprender magias dos descritores abjuração e transmutação, que tenham como alvo você, um objeto ou criatura (voluntária), e com duração diferente de instantânea, permanente ou concentração.",
        "Pontos de Magia: você tem um número de pontos de magia (PM) igual a 1 + MdC. Cada vez que avança de nível, recebe 3 PM.",
        "Preparação de Magia: Sua preparação de magias envolve infundir magias em seus itens com antecedência. A cada dia, deve trabalhar durante uma hora, e então escolher um número de itens igual a seu Nível de Artífice + MdC para preparar. Um mesmo objeto não pode receber mais de uma magia, e você não pode infundir itens que já sejam mágicos. Uma magia infundida fica dormente no objeto alvo durante um dia, ou até a próxima vez que você preparar magias. Uma vez ativa, a infusão tem a mesma duração que as magias originais e você pode ativar até duas infusões com uma Ação Padrão, gastando os PMs necessários para cada magia. Você pode reativar infusões quantas vezes quiser, gastando novamente os PMs e a ação necessária. Itens Infundidos não contam no limite de itens mágicos do personagem que os estiver usando."
      ],
      "tables": []
    },
    {
      "title": "Fabricar Item",
      "level": 3,
      "paragraphs": [
        "A Partir do 2º nível se torna perito em produzir itens mundanos, muito mais habilidoso que qualquer artesão ou forjador normal. Você ainda segue as regras normais de fabricação de itens não-mágicos, Com as seguintes diferenças:",
        "Para o artífice, fabricar um item exige 1/6 do valor original do item em matérias-primas (em vez de 1/3). Esse valor cai para 1/8 no 10° nível. Um personagem com múltiplas habilidades que reduzem o custo de um item aplica apenas a maior redução.",
        "Para o artífice, o tempo de fabricação necessário é de 1 dia para cada 300 TO do item (em vez de 100 por dia). Ao final desse período o artífice faz seu teste de ofício. Se tiver sucesso, o item estará pronto. Se falhar, pode gastar mais um dia para tentar de novo.",
        "O artífice pode escolher 10 se estiver em ambiente seguro e confortável, onde seja possível trabalhar sem interrupções."
      ],
      "tables": []
    },
    {
      "title": "Árvore de Natal",
      "level": 3,
      "paragraphs": [
        "No 3° nível o artífice não está mais limitado a apenas quatro itens mágicos entre armaduras, escudos e acessórios. Você se torna capaz de equipar cinco itens, no 9º nível da classe se torna capaz de equipar até seis e no 15º capaz de equipar até sete."
      ],
      "tables": []
    },
    {
      "title": "Companheiro Autômato",
      "level": 3,
      "paragraphs": [
        "No 3° nível você adquire um companheiro autônomo pequeno ou médio que pode ser bípede ou quadrúpede, de 3° nível, sem custo. Por sua dedicação constante à manutenção de seu companheiro, sempre que você avança nesta classe, o autômato também ganha um nível automaticamente. Você ainda precisa pagar por qualquer melhoria que deseje instalar em seu autómato, seguindo as regras normais. A partir do 13º Nível, o Artífice pode aplicar qualquer Modificação Passiva ou Ativa ao seu Companheiro Autômato pela metade do custo.",
        "Você pode escolher o corpo e as armas naturais de seu autômato como alvo para sua habilidade de infundir magias, assim como pode equipar Itens Mágicos em seu companheiro respeitando o limite comum para estes itens, assim como o Artífice que o Criou o Companheiro Autômato recebe os benefícios da habilidade \"Árvore de Natal” como se fosse um Artífice do nível de seu criador.",
        "Caso o autómato seja destruído, você fica atordoado por 1d4 rodadas. Você pode construir um substituto idêntico, sem custos, após um dia de trabalho por nível do autômato. Caso escolha construir um autômato diferente, deve arcar com os custos normalmente.",
        "O Companheiro Autômato age no turno do Artífice, compartilhando de sua rolagem de iniciativa, porém possui Ações próprias."
      ],
      "tables": []
    },
    {
      "title": "Ativação Matemágica",
      "level": 3,
      "paragraphs": [
        "Você pode aplicar os efeitos de quaisquer talentos metamágicos que possua em magias lançadas a partir de varinhas e cajados, gastando os PM armazenados no item. Por exemplo, para aplicar os benefícios de Estender Magia em uma varinha de voo você precisa ter o talento e gastar 1 PM adicional na ativação."
      ],
      "tables": []
    },
    {
      "title": "Criar Itens Mágicos",
      "level": 3,
      "paragraphs": [
        "Você pode fabricar diversos tipos de itens mágicos, conforme seu nível (veja as habilidades seguintes).",
        "Para o artífice, fabricar um item mágico exige metade do valor original do item em matérias-primas. Um personagem com múltiplas habilidades que reduzem o custo de um item aplica apenas a maior redução.",
        "O artífice pode fabricar um item mágico em 2d6+1 dias, não importando seu valor. Esse tempo se reduz para, 1d8+1 no 12° nível e 1d4+1 no 16° nível.",
        "Você pode criar varinhas contendo qualquer magia de um nível que consiga lançar, mesmo sem conhecê-la. Por exemplo, você não precisa conhecer a magia bola de fogo para criar a varinha de bola de fogo, basta ser capaz de lançar magias de 3° nível. Suas varinhas podem conter magias de até 6° nível e tem preço igual ao nível mínimo que um conjurador precisa ter para lançar a magia contida nele x 50 TO.",
        "Você pode criar poções contendo qualquer magia de um nível que consiga lançar, mesmo sem conhecê-la. Por exemplo, você não precisa conhecer a magia Curar Ferimentos para criar a Poção de Curar Ferimentos, basta ser capaz de lançar magias de 1° nível. Suas poções podem conter magias de até 5° nível e tem preço igual ao nível mínimo que um conjurador precisa ter para lançar a magia contida nele x 20 TO. Quando você cria uma poção, cria 5 unidades da mesma ao invés de apenas uma.",
        "Você pode criar qualquer cajado como se conhecesse todas as magias necessárias. Seu nível de artífice deve ser igual ou superior ao dobro do nível da magia mais poderosa no cajado. Por exemplo, criar um cajado da passagem exige ser um artífice de 18º nível (a magia de nível mais alto no cajado é projeção astral, de 9º nível).",
        "Você pode criar qualquer acessório menor (até 9.000 TO). A partir do 12º nível você pode criar acessórios médios (até 29.000 TO), e a partir do 16º nível pode criar acessórios maiores (acima de 30.000 TO). Você não pode criar elixires, tomos e manuais.",
        "Você pode criar armas, armaduras e escudos mágicos. O bônus total do item não pode ultrapassar metade de seu nível de artífice - 2, arredondado para baixo."
      ],
      "tables": []
    },
    {
      "title": "Homúnculo",
      "level": 3,
      "paragraphs": [
        "Você possui um homúnculo, uma criatura Mínima feita de alquimia. Vocês podem se comunicar telepaticamente em até 30 metros e ele obedece a suas ordens, mas ainda está limitado ao que uma criatura de seu tamanho e forma pode fazer. Um homúnculo funciona como um aliado que fornece +4 em testes de ofício e RD 5."
      ],
      "tables": []
    },
    {
      "title": "Improviso Mágico",
      "level": 3,
      "paragraphs": [
        "Você pode gastar uma ação livre para fabricar um item alquímico ou poção cuja fórmula conheça e tenha os materiais, instantaneamente. O custo do item é reduzido à metade e você não precisa fazer o teste de Ofício (alquimia). Contudo, ele só dura até o fim da cena. Você pode utilizar esta habilidade até 3 + Mod. Int vezes ao dia."
      ],
      "tables": []
    },
    {
      "title": "Controlar Constructo",
      "level": 3,
      "paragraphs": [
        "Você tem meios para acessar os sistemas internos de um construto e tomar seu controle. Você pode conjurar a magia dominação total em construtos, sem gastar PM, um número de vezes por dia igual a 1 + mod. de Inteligência."
      ],
      "tables": []
    },
    {
      "title": "Artesão Lendário",
      "level": 3,
      "paragraphs": [
        "Você atingiu o ápice de suas capacidades e conhecimentos como artífice. Você não precisa de testes de Ofício para fabricar itens mundanos. Você também pode forjar qualquer item mágico em apenas um dia. Ainda, você pode descobrir tudo sobre um item mágico (como na magia identificação) instantaneamente, apenas ao tocá-lo."
      ],
      "tables": []
    },
    {
      "title": "Magnum Opus",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Artífice, você nunca pode ter mais de um dos talentos de 20º nível da classe."
      ],
      "tables": []
    },
    {
      "title": "Companheiro Autômato",
      "level": 1,
      "paragraphs": [],
      "tables": []
    },
    {
      "title": "Núcleo",
      "level": 3,
      "paragraphs": [
        "Este é o motor central do autômato, que o alimenta com energia mágica. O núcleo contém uma ou mais gemas contendo a essência de um elemental vivo. Um autómato recebe BBA 1/Nível e 6 PV por nível, porém não recebe talentos. Quando um autômato chega a zero PV, seu núcleo é destruído e precisa ser substituído."
      ],
      "tables": []
    },
    {
      "title": "Chassi",
      "level": 3,
      "paragraphs": [
        "Este é o corpo do autômato, o que define sua forma e tamanho. Sua postura (bípede ou quadrúpede) e tamanho determinam seus PV extras, valores iniciais de Força e Destreza, dano, deslocamento e custo de construção. Autômatos recebem ajustes normais conforme a tabela Tamanho de Criaturas. A forma e tamanho do chassi também atuam como pré-requisitos para instalar modificações.",
        "Você pode transferir um núcleo para um novo chassi, e vice-versa. O procedimento requer um dia de trabalho por nível do autômato. Não é possível transferir um núcleo para um chassi com mais modificações instaladas que o dobro do nível do núcleo. Transferir uma modificação de um chassi para outro custa um quinto do preço e leva um dia de trabalho.",
        "PV Extras: um autômato recém-criado recebe pontos de vida adicionais conforme o tamanho do chassi.",
        "Perícias: o autômato possui 2 perícias treinadas. Ele não pode ser treinado em perícias baseadas em Inteligência ou Carisma.",
        "Força, Destreza: os valores iniciais de Força e Destreza de um autômato são determinados pelo tamanho do chassi.",
        "Constituição: autômatos têm valor nulo de Constituição.",
        "Inteligência, Sabedoria, Carisma: autômatos recém-criados têm Int 3, Sab 10, Car 3.",
        "Arma Natural: Um autômato tem dois ataques de pancada, e pode utilizar ambos na mesma rodada.",
        "Armadura Natural: um autômato tem CA+2. Algumas modificações aumentam esse valor de armadura.",
        "Outras habilidades: um autômato é imune a atordoamento, dano de habilidade, dano não letal, doença, encantamento, enjoo, fadiga, paralisia, necromancia, sono e veneno. Não precisa respirar, se alimentar e dormir. Não recupera pontos de vida com descanso ou curas mágicas, mas pode ser consertado. Consertar um autómato requer um teste de Conhecimento (engenharia) com CD igual a 15 + nível do autômato, e uma hora de trabalho para cada 5 PV restaurados."
      ],
      "tables": [
        {
          "headers": [
            "Chassi Bípede",
            "",
            "",
            "",
            "",
            ""
          ],
          "rows": [
            [
              "Tamanho",
              "Força, Destreza",
              "PV Extra",
              "Dano de Arma Natural",
              "Desl.",
              "Custo"
            ],
            [
              "Pequeno",
              "For 10, Des 16",
              "12",
              "1d4",
              "6m",
              "2.000 TO"
            ],
            [
              "Médio",
              "For 16, Des 14",
              "24",
              "1d6",
              "9m",
              "4.500 TO"
            ],
            [
              "Grande (Alto)",
              "For 24, Des 12",
              "36",
              "1d8",
              "12m",
              "12.500 TO"
            ],
            [
              "Enorme (Alto)",
              "For 30, Des 10",
              "48",
              "2d6",
              "12m",
              "25.000 TO"
            ]
          ]
        },
        {
          "headers": [
            "Chassi Quádrupede",
            "",
            "",
            "",
            "",
            ""
          ],
          "rows": [
            [
              "Tamanho",
              "Força, Destreza",
              "PV Extra",
              "Dano de Arma Natural",
              "Desl.",
              "Custo"
            ],
            [
              "Pequeno",
              "For 6, Des 18",
              "12",
              "1d4",
              "9m",
              "2.000 TO"
            ],
            [
              "Médio",
              "For 12, Des 16",
              "24",
              "1d6",
              "12m",
              "4.500 TO"
            ],
            [
              "Grande (Comprido)",
              "For 22, Des 14",
              "36",
              "1d8",
              "15m",
              "12.500 TO"
            ],
            [
              "Enorme (Comprido)",
              "For 28, Des 12",
              "48",
              "2d6",
              "15m",
              "25.000 TO"
            ]
          ]
        }
      ]
    },
    {
      "title": "Modificadores",
      "level": 3,
      "paragraphs": [
        "Quase todos os autômatos trazem, em seu chassi, uma ou mais modificações para melhor desempenhar suas tarefas. O número máximo de modificações permitidas é igual a 1 + 1 ⁄ 2 do nível do núcleo. Instalar uma modificação requer um dia de trabalho para cada 3.000 TO de custo. Um autômato precisa cumprir todos os pré-requisitos para ter uma modificação instalada. Cada modificação só pode ser instalada uma vez, a menos que sua descrição diga o contrário."
      ],
      "tables": []
    },
    {
      "title": "Modificações Passivas",
      "level": 4,
      "paragraphs": [
        "Os efeitos destas modificações estão sempre ativos, a menos que sua descrição diga o contrário.",
        "Ascensão: o autômato recebe deslocamento de voo e natação 12m. Pré-requisito: núcleo nível 9 ou maior. 11.250 TO.",
        "Blindagem: o corpo do autômato é reforçado com placas metálicas que aumentam o bônus de armadura natural. CA +3 (1.000 TO), CA+4 (4.000 TO), CA+5 (9.000 TO), CA+6 (16.000 TO).",
        "Combatente: o autômato sabe usar armas simples e marciais. Pré-requisito: chassi bípede. 750 TO.",
        "Compartimento de Carga: o construto tem um compartimento mágico com as mesmas propriedades de uma mochila de carga, mas comportando até 250kg. A um comando, o autômato pode expelir qualquer item como uma ação livre. 2.500 TO.",
        "Corpo Maciço: por sua construção sólida, o autômato recebe redução de dano 10/Aço Rubi. 9.000 TO.",
        "Corpo Resiliente: O Autômato recebe +2 de HP por nível. Esta modificação pode ser adquirida até 2 vezes. 4.000 TO.",
        "Disparador: o autômato é equipado com uma arma de ataque à distância com alcance e dano iguais a uma besta leve. A arma pode carregar até 20 virotes ou 5 itens de arremesso como frascos de ácido, fogo alquímico e até granadas. Recarregar a arma é uma ação completa. 750 TO.",
        "Escudo Arcano: cria um disco de força invisível à frente do autômato, provendo CA+4 e imunidade a mísseis mágicos. Pré-requisito: núcleo nível 5. 3.750 TO.",
        "Escudo Áureo: o chassi é tratado para resistir a dano por energia, recebendo resistência a ácido, fogo, frio, elétrico e sônico 10 (4.000 TO), 20 (9.000 TO) ou 30 (25.000 TO).",
        "Esmagador: o dano das armas naturais do autômato aumenta em uma categoria de tamanho. Esta modificação pode ser adquirida até 2 vezes. 250 TO.",
        "Iluminação: um conjunto de faróis mágicos no construto ilumina toda a área em volta a até 18m, ou como um único holofote com 1,5m de raio a até 120m. 250 TO.",
        "Máquina Viva: o chassi contém partes orgânicas integradas, que permitem ao autômato recuperar pontos de vida com magias de cura e descanso. Um autômato com essa modificação perde suas imunidades à doença, enjoo, fadiga, necromancia, sono e veneno. 16.500 TO.",
        "Rodas: o autômato tem rodas em vez de pés ou patas, aumentando seu deslocamento terrestre em +9m. 3.750 TO.",
        "Runas Defensivas: o chassi contém runas que concedem bônus em testes de resistência. +2 (4.000 TO), +4 (9.000 TO), +6 (25.000 TO).",
        "Talentoso: o autômato recebe um talento de combate que cumpra os pré-requisitos. Esta modificação pode ser adquirida até 2 vezes. Pré-requisito: núcleo nível 6 ou maior. 12.000 TO."
      ],
      "tables": []
    },
    {
      "title": "Modificações Ativas",
      "level": 4,
      "paragraphs": [
        "Estas modificações usam energia do núcleo para sua ativação. Todas podem ser usadas um número de vezes por dia igual a 2 + nível do núcleo. Todas também exigem uma ação padrão, a menos que sua descrição diga o contrário.",
        "Canhão Arcano: instala um poderoso canhão mágico capaz de disparar um raio de pura energia arcana, causando 8d10 pontos de dano de essência em uma explosão em linha de 30m a partir do autômato (Reflexos CD 10 + Nível de seu Núcleo). Cada disparo exige uma ação completa. Após cada disparo o canhão precisa de 1d4+1 rodadas para recarregar. Pré-requisito: núcleo nível 9 ou maior. 11.350 TO.",
        "Detecção Mágica: um conjunto de sensores especiais reproduz o efeito de uma entre as seguintes magias, escolhida na instalação: detectar animais, detectar armadilhas, detectar magia, detectar mortos-vivos, detectar portas secretas. Custo: 1.250 TO.",
        "Eletrificar: como uma reação, o autômato descarrega uma poderosa carga elétrica, causando 3d8 + Nível de seu Núcleo pontos de dano de eletricidade a qualquer criatura tocando-o (incluindo ataques corpo-a-corpo). Pré-requisito: núcleo nível 3 ou maior. 1.500 TO.",
        "Garra Extensora: o autômato pode disparar uma garra presa a um sistema de cabos, para tentar agarrar uma criatura ou objeto. Em termos de regras, ela funciona como uma rede, que o autômato sabe usar e pode ser recarregada como uma ação completa. 750 TO.",
        "Modo Armadura: o autômato pode se transformar em uma armadura própria para um usuário de mesmo tamanho ou menor. Nesta condição o autômato não pode realizar ações (exceto voltar ao normal), tornando-se um equipamento. O usuário é considerado sob cobertura total, pode usar as armas naturais do autômato, e recebe todas as suas melhorias. O autômato ainda pode ser alvo de ataques e magias, sofrendo dano normalmente. Remover a armadura exige uma ação livre do autômato. O modo armadura pode ser mantido durante 1 minuto para cada ativação. Se o autômato é destruído, o usuário precisa de um teste de Força (CD 15) para se libertar. Pré-requisito: chassi bípede Médio ou maior. 4.000 TO (Médio), 8.000 TO (Grande), 12.000 TO (Enorme).",
        "Modo Escudo: o autômato pode se transformar em um escudo próprio para um usuário uma categoria de tamanho maior. Nesta condição o autômato não pode realizar ações (exceto voltar ao normal), tornando-se um equipamento. Retornar ao modo normal exige uma ação livre. O usuário empunhando o escudo recebe seu bônus por armadura natural e as modificações blindagem, corpo maciço, escudo arcano e polimento protetivo, se houver. 1.000 TO.",
        "Modo Veículo: o autômato pode se transformar em um veículo com capacidade para um único passageiro de mesmo tamanho, ou 2 passageiros que sejam uma categoria menores, ou 4 passageiros que sejam 2 categorias menores, e assim por diante. Desta forma o construto tem acesso apenas a suas modificações passivas. Mudar de forma exige uma ação livre (e expulsa qualquer passageiro). 3.750 TO.",
        "Porta-Varinhas: um suporte especial no autômato pode acomodar uma varinha mágica. Uma vez por rodada, o usuário pode ativar e usar essa varinha como se estivesse empunhando, como uma ação livre (ataques de toque à distância usam a Destreza do autômato, em vez da sua). Cada ativação consome um uso da modificação por nível da magia na varinha. Os PMs da varinha são gastos normalmente. Pré-requisito: núcleo nível 5 ou maior. 3.750 TO.",
        "Pulso Estridente: o autômato emana um pulso sônico que afeta todas as criaturas vivas a até 6m. Cada alvo faz um teste de Fortitude (CD 10 + Nível de seu Núcleo) ou fica atordoado por 1d4+1 rodadas. Pré-requisito: núcleo nível 3 ou maior. 1.500 TO.",
        "Punho Voador: o autômato pode disparar um de seus punhos como um míssil, fazendo um ataque à distância com sua arma natural, com distância 9m. O punho retorna imediatamente após o ataque. Pré-requisito: chassi bípede. 750 TO.",
        "Raio Inferno: o autômato pode disparar um raio quente como ferro em brasa, como um ataque de toque à distância (alcance 30m) e dano 4d6+Nível de seu Núcleo de fogo. Pré-requisito: núcleo nível 3 ou maior. 1.500 TO."
      ],
      "tables": []
    }
  ],
  "classTalents": [
    {
      "id": "talento-gigante-de-ferro",
      "name": "Gigante de Ferro",
      "prerequisite": "4º Nível de Artífice",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Se um Ataque Corpo-a-Corpo ou a Distância iria atingir o Artífice enquanto o Companheiro Autômato estiver a pelo menos 3 metros de distância dele, o Artífice pode como reação pode redirecionar o dano que sofreria para seu Companheiro Autômato."
      ]
    },
    {
      "id": "talento-frasco-escarlate",
      "name": "Frasco Escarlate",
      "prerequisite": "4º Nível de Artífice",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "O Frasco Escarlate é uma poção que pode ser tomada uma vez por dia como uma Ação de Movimento, ela só funciona no próprio Artífice mesmo que seus efeitos originais sejam em área, o Artífice pode escolher 1 magia de cura de até 2º Nível para garantir os benefícios a ele. A partir do 8º nível ele pode escolher magias de cura de até 4º Nível, de até 6º no 12 e até 8º no 16."
      ]
    },
    {
      "id": "talento-matriz-de-protecao",
      "name": "Matriz de Proteção",
      "prerequisite": "4º Nível de Artífice",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Seu Companheiro Autômato não é mais destruído quando chega a 0 PVs, ao invés disto ele fica inativo (Não podendo agir) e só é destruído quando chega a metade dos seus pontos de vida negativos. Por fim você passa a recuperar 10 pontos de vida do Constructo por hora trabalhada, esse valor aumenta para 20 no 8º Nível e 50 no 16º Nível."
      ]
    },
    {
      "id": "talento-agite-antes-de-usar",
      "name": "Agite antes de usar",
      "prerequisite": "8º Nível de Artífice",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Quando usa uma arma à distância, você pode escolher seu modificador de Inteligência nos testes de ataque e rolagens de dano em vez de Destreza."
      ]
    },
    {
      "id": "talento-todos-se-amarram-em-robos-gigantes",
      "name": "Todos se Amarram em Robôs Gigantes",
      "prerequisite": "8º Nível de Artífice",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Você pode abrir mão de sua Ação padrão ou de Movimento e ceder ela a seu Companheiro Autômato"
      ]
    },
    {
      "id": "talento-eu-testo-minhas-armas",
      "name": "Eu testo minhas Armas",
      "prerequisite": "8º Nível de Artífice",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Quando usa uma arma corpo a corpo, você pode escolher utilizar seu modificador de Inteligência nos testes de ataque e rolagens de dano em vez de Força."
      ]
    },
    {
      "id": "talento-cano-raiado",
      "name": "Cano Raiado",
      "prerequisite": "12º Nível de Artífice",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Quando usa uma arma de ataque à distância feita por você mesmo, ela recebe +1 na margem de ameaça e multiplicador de crítico."
      ]
    },
    {
      "id": "talento-afie-antes-de-usar",
      "name": "Afie antes de Usar",
      "prerequisite": "12º Nível de Artífice",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Você recebe proficiência com armas marciais corpo a corpo. Além disso, você pode gastar uma ação de movimento e uma quantidade de PM a sua escolha (Igual a seu modificador de Inteligência - 3) para aprimorar uma arma corpo a corpo que esteja usando. Para cada PM que gastar, você recebe +1 em rolagens de dano com a arma até o final da cena."
      ]
    },
    {
      "id": "talento-a-fraqueza-do-aco",
      "name": "A Fraqueza do Aço",
      "prerequisite": "12º Nível de Artífice",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Tanto você quanto seu Companheiro Autômato recebem um bônus de +3 nas jogadas de Ataque e dano contra inimigos que utilizem de Armaduras Médias ou Pesadas se o inimigo for um construto o bônus aumenta para +6."
      ]
    },
    {
      "id": "talento-oficina-de-campo",
      "name": "Oficina de Campo",
      "prerequisite": "16º Nível de Artífice",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Durante um descanso curto, cada membro do grupo escolhe uma arma, armadura ou escudo para manutenção. Armas recebem +1 em testes de ataque; armaduras e escudos têm sua penalidade de armadura reduzida em 1. Os benefícios duram um dia. Estas melhorias são consideradas melhorias de Arma e Armadura não de Classe."
      ]
    },
    {
      "id": "talento-transfusao-magica",
      "name": "Transfusão Mágica",
      "prerequisite": "16º Nível de Artífice",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Você pode transferir PM entre duas criaturas aliadas. Com uma ação completa, pode transferir até 10 PMs entre duas criaturas que estejam a até 1,5 de você, ambas as criaturas devem estar conscientes e precisam ser voluntárias para a habilidade, você pode se escolher como alvo para esta habilidade."
      ]
    },
    {
      "id": "talento-sentinela-blindado",
      "name": "Sentinela Blindado",
      "prerequisite": "16º Nível de Artífice",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "O Construto Autômato com uma ação completa levanta uma barreira de 3m ao redor dele, o Autômato pode gastar sua ação de Movimento toda rodada para manter a barreira de pé por até 3 rodadas ou até que ele seja destruído ou inativado. Todo dano que seria causado a um aliado dentro da barreira é ao invés disso causado diretamente ao Autômato. O Autômato pode encerrar a barreira a qualquer momento como reação."
      ]
    },
    {
      "id": "talento-ele-vive",
      "name": "Ele vive!",
      "prerequisite": "20º Nível de Artífice",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você recebe um segundo Companheiro Autômato idêntico ao primeiro (Mesmo nível, aprimoramentos e modificações). Você só fica atordoado se ambos os Autômatos foram destruídos."
      ]
    },
    {
      "id": "talento-para-armar-um-exercito",
      "name": "Para Armar um Exército",
      "prerequisite": "20º Nível de Artífice",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "A habilidade Criar Itens Mágicos sofre as seguintes mudanças:",
        "Para o artífice, fabricar um item mágico exige 1/4 do valor original do item em matérias-primas. Um personagem com múltiplas habilidades que reduzem o custo de um item aplica apenas a maior redução.",
        "Você pode criar varinhas contendo qualquer magia de até 7º Ciclo, mesmo sem conhecê-la. Elas tem preço igual ao nível mínimo que um conjurador precisa ter para lançar a magia contida nele x 10 TO e você pode criar varinhas com efeitos metamágicos contanto que os conheça.",
        "Você pode criar poções contendo qualquer magia de até 7º Ciclo, mesmo sem conhecê-la. Suas poções podem conter magias de até 7° nível e tem preço igual ao nível mínimo que um conjurador precisa ter para lançar a magia contida nele x 2 TO. Quando você cria uma poção, cria 5 unidades da mesma ao invés de apenas uma.",
        "Você pode criar armas, armaduras e escudos mágicos. Com bônus de até +10."
      ]
    },
    {
      "id": "talento-minha-maior-criacao",
      "name": "Minha Maior Criação!",
      "prerequisite": "20º Nível de Artífice",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você cria um Artefato de forma gratuita. As limitações de o que um Artefato pode fazer fica a critério do mestre e devem ser discutidas com o mesmo."
      ]
    }
  ]
} satisfies ClassDetail;

~~~~


---

# Classe: algoz-da-tormenta

**Fonte:** `src/data/class-details/algoz-da-tormenta.ts`

~~~~typescript
import type { ClassDetail } from './schema';

export const classDetail = {
  "kind": "prestige",
  "slug": "algoz-da-tormenta",
  "name": "Algoz da Tormenta",
  "family": "Classes de Prestígio",
  "sourceDocId": "1gXCdZDw4XMYLJN-s3nw_M3FCB3osYwi9eN69DyV2kmo",
  "sourceTitle": "Algoz da Tormenta",
  "status": "complete",
  "editorialNotes": [],
  "requirements": [
    "Bônus Base de Ataque: +5",
    "Talentos: Armamento da Tormenta e outros dois talentos da tormenta."
  ],
  "basics": {
    "hitPoints": "um Algoz da Tormenta ganha 5 PV (+mod. Con) por nível.",
    "trainedSkills": null,
    "classSkills": null,
    "bonusTalents": null
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
        "Anticarisma"
      ],
      [
        "2º",
        "+2",
        "Aspecto da Corrupção"
      ],
      [
        "3º",
        "+3",
        "Arsenal Rubro (Armas)"
      ],
      [
        "4º",
        "+4",
        "Desprezo Profano"
      ],
      [
        "5º",
        "+5",
        "Toque Carmesim"
      ],
      [
        "6º",
        "+6",
        "Aspecto da Corrupção, Arsenal Rubro (Escudos)"
      ],
      [
        "7º",
        "+7",
        "Caçador de Deuses"
      ],
      [
        "8º",
        "+8",
        "Mente Alienígena"
      ],
      [
        "9º",
        "+9",
        "Arsenal Rubro (Armaduras)"
      ],
      [
        "10º",
        "+10",
        "Aspecto da Corrupção, Lorde da Tormenta"
      ]
    ]
  },
  "sections": [
    {
      "title": "Anticarisma",
      "level": 3,
      "paragraphs": [
        "Seu carisma se torna nulo, você falha automaticamente em testes de perícia baseadas em Carisma exceto intimidação. Para testes de Intimidação você utiliza seu Mod.For e Mod.Con ao invés de Carisma."
      ],
      "tables": []
    },
    {
      "title": "Aspecto da Corrupção",
      "level": 3,
      "paragraphs": [
        "No 2° nível você recebe uma das características abaixo de acordo com a sua escolha, no 6º e 10º nível você recebe uma nova característica a sua escolha.",
        "Coordenação Perfeita:  Você recebe +1 em todos os testes de perícia. A cada 3 talentos da tormenta que possuir este bônus aumenta em +1",
        "Imortalidade: você não precisa respirar, se alimentar e dormir. Também não envelhece, e só morrem por causas violentas.",
        "Imunidades: Escolha entre ácido, dano de habilidade, doença, energia negativa, eletricidade, fogo, frio, metamorfose, paralisia, petrificação, sono ou veneno você se torna imune a um destes efeitos. A cada 7 talentos da tormenta que possuir, você pode escolher uma nova imunidade.",
        "Insanidade da Tormenta: uma criatura inteligente (Int 3 ou mais) que o veja, deve fazer um teste de Vontade (CD 10 + MdN + Seu número de talentos da Tormenta). Em caso de falha, sofre 1 ponto de dano em Carisma para cada 5 Talentos da Tormenta que você possuir. Em caso de sucesso, fica imune a esta habilidade por um dia. Esta habilidade não afeta aliados.",
        "Percepção Temporal:  Você recebe +1 em testes de resistências. A cada 3 talentos da tormenta que possuir este bônus aumenta em +1",
        "Nutrientes: você adquire cura acelerada 2. A cada 2 talentos da tormenta que possuir este bônus aumenta em +3"
      ],
      "tables": []
    },
    {
      "title": "Arsenal Rubro",
      "level": 3,
      "paragraphs": [
        "O talento “Armamento da Tormenta” passa a ter o seguinte efeito:",
        "Como ação de movimento, você pode expelir uma arma orgânica. Você pode criar qualquer arma que saiba utilizar, desde que não possuam partes móveis. Criar uma arma causa dano de acordo com o tipo de arma 1d4 (arma leve), 1d6 (arma de uma mão) ou 1d8 (arma de duas mãos).",
        "A arma é considerada de matéria vermelha, mas não causa dano ao seu criador. A cada três talentos da tormenta a arma recebe um bônus mágico de +1 que pode ser utilizado para comprar poderes ou como bônus numéricos. O bônus numérico deste efeito nunca pode ser maior do que metade de seu nível nesta classe. O benefício do talento “Sangue ácido\" tem seu dano aplicado aos armamentos da tormenta enquanto o criador da arma utiliza ela.",
        "A partir do 6º nível você pode invocar escudos com esta habilidade, recebendo dano de acordo com o tipo do escudo 1d6 (escudo leve), 1d8 (escudo pesado) ou 1d10 (escudo de corpo).",
        "E a partir do 9° nível você pode invocar armaduras com esta habilidade, recebendo dano de acordo com o tipo de armadura 1d8 (armadura leve), 1d10 (armadura média) ou 1d12 (armadura pesada).",
        "Nas mãos de qualquer outra criatura está arma se comporta como um equipamento mundano de matéria vermelha."
      ],
      "tables": []
    },
    {
      "title": "Desprezo Profano",
      "level": 3,
      "paragraphs": [
        "No 4º nível, sempre que você reduzir uma criatura a 0 ou menos PV, todos os inimigos que vejam isso devem fazer um teste de Vontade (CD 10 + MdN + Mod. Fo). Em caso de falha, ficam enjoados por uma rodada."
      ],
      "tables": []
    },
    {
      "title": "Toque Carmesim",
      "level": 3,
      "paragraphs": [
        "No 5º nível, seus ataques corpo a corpo e à distância de até 9m causam 1d4 de pontos de dano adicional de matéria vermelha. Este dano aumenta em 1d4 para cada outros 3 Talentos da tormenta que você possuir. O número de dados desta habilidade não pode exceder seu nível nesta classe."
      ],
      "tables": []
    },
    {
      "title": "Caçador de Deuses",
      "level": 3,
      "paragraphs": [
        "Você recebe +4 em Testes de Resistência contra magias e Habilidades de origem Divina, quando você tem sucesso em resistir um efeito proveniente dessas fontes, você ignora qualquer efeito secundário ou parcial que a habilidade causaria."
      ],
      "tables": []
    },
    {
      "title": "Mente Alienígena",
      "level": 3,
      "paragraphs": [
        "Qualquer um que tente estudar ou ler sua mente falha automaticamente em fazê-lo."
      ],
      "tables": []
    },
    {
      "title": "Lorde da Tormenta",
      "level": 3,
      "paragraphs": [
        "Você é considerado como tendo o dobro de talentos da tormenta para todas as suas habilidades e talentos."
      ],
      "tables": []
    }
  ],
  "classTalents": []
} satisfies ClassDetail;

~~~~


---

# Classe: cavaleiro-da-morte

**Fonte:** `src/data/class-details/cavaleiro-da-morte.ts`

~~~~typescript
import type { ClassDetail } from './schema';

export const classDetail = {
  "kind": "prestige",
  "slug": "cavaleiro-da-morte",
  "name": "Cavaleiro da Morte",
  "family": "Classes de Prestígio",
  "sourceDocId": "1bAPwcHHGJb0jxZA8-6BHR3WV_hjuRouLSJRxVc5M-4w",
  "sourceTitle": "Cavaleiro da Morte",
  "status": "complete",
  "editorialNotes": [],
  "requirements": [
    "Bônus Base de Ataque: +5",
    "Talentos: Ataque Poderoso"
  ],
  "basics": {
    "hitPoints": "um Cavaleiro da Morte ganha 5 PV (+mod. Con) por nível.",
    "trainedSkills": null,
    "classSkills": null,
    "bonusTalents": null
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
        "Disciplina da Necrópole, Reerguido"
      ],
      [
        "2º",
        "+2",
        "Garra da Morte"
      ],
      [
        "3º",
        "+3",
        "Disciplina da Necrópole"
      ],
      [
        "4º",
        "+4",
        "Corcel da Morte"
      ],
      [
        "5º",
        "+5",
        "Disciplina da Necrópole"
      ],
      [
        "6º",
        "+6",
        "Andar do Espectro"
      ],
      [
        "7º",
        "+7",
        "Disciplina da Necrópole"
      ],
      [
        "8º",
        "+8",
        "Proteção Anti Magia"
      ],
      [
        "9º",
        "+9",
        "Disciplina da Necrópole"
      ],
      [
        "10º",
        "+10",
        "O Rei da Morte"
      ]
    ]
  },
  "sections": [
    {
      "title": "Disciplina da Necrópole",
      "level": 3,
      "paragraphs": [
        "Você deve escolher uma das disciplinas da necrópole entre Profano, Sanguíneo ou Gélido. Uma vez feita, essa escolha não pode ser mudada. No 1º nível, você começa a receber habilidades ou aprimoramentos referente à disciplina escolhida. (As habilidades de cada disciplina podem ser encontradas abaixo das outras habilidades da classe)."
      ],
      "tables": []
    },
    {
      "title": "Reerguido",
      "level": 3,
      "paragraphs": [
        "Você recebe imunidade a dano não-letal, doenças mundanas, sono e venenos. Não precisa mais comer, beber ou respirar. Efeitos que detectam mortos-vivos ou efeitos baseados em tendência o tratam como maligno, independentemente da tendência real. Magias de cura ainda o curam normalmente."
      ],
      "tables": []
    },
    {
      "title": "Garra da Morte",
      "level": 3,
      "paragraphs": [
        "A partir do 2º nível você pode como uma ação padrão projetar uma garra de sombras que agarra e puxa um inimigo a até 9m a um espaço adjacente a você. Você deve ser bem-sucedido em um teste de manobra, além de ter linha de efeito para que a habilidade funcione. Esta habilidade pode ser utilizada três vezes por dia."
      ],
      "tables": []
    },
    {
      "title": "Corcel da Morte",
      "level": 3,
      "paragraphs": [
        "Você recebe uma Montaria Morta-Viva, sempre que você sobe de nível a montaria também recebe um nível, Uma Montaria Sagrada recebe BBA 1/Nível além dos demais benefícios por passagem de nível exceto Talentos. Diferentes de Montarias comuns ela pode ser invocada e desconvocada com uma ação completa. Caso esta montaria venha a morrer (novamente) você não pode invocá-la por 8 horas enquanto ela se reforma no além-vida.",
        "A Montaria Profana age no turno do Cavaleiro da Morte, compartilhando de sua rolagem de iniciativa, porém possui Ações próprias.",
        "Pv: uma Montaria Profana começa com 20 (+ mod. Constituição) Pontos de Vida e ganha 5 PV (+ mod. Constituição) por nível seguinte.",
        "Deslocamento: 18 Metros.",
        "Perícias: A Montaria Profana possui 2 + Mod. Int pericias treinadas, mas não pode escolher perícias baseadas em inteligência ou Carisma.",
        "Habilidades: For 18, Des 16, Con 16, Int 3, Sab 10, Car 3.",
        "Arma Natural: A montaria Profana possui dois ataques com arma natural que causa dano de forma equivalente a uma Adaga própria para o seu tamanho (1d4 para criaturas Médias).",
        "Tamanho: Uma Montaria Profana tem o mesmo tamanho que o Cavaleiro da Morte teria originalmente (Médio para uma Criatura Média).",
        "Outras Habilidades: Imunidade a atordoamento, dano de habilidade (apenas Força, Destreza ou Constituição), dano não-letal, imunidade a crítico, doença, encantamento, fadiga, paralisia, necromancia, sono e veneno. Não precisam respirar, se alimentar e dormir. Não recuperam pontos de vida normalmente. Sofrem dano com magias de cura e recuperam pontos de vida com magias de necromancia. Destruídos quando seus PV chegam a 0. Um morto-vivo não é afetado pelas magias reviver os mortos ou ressurreição. A magia ressurreição verdadeira o transforma na criatura que era quando vivo. Independente de sua tendência verdadeira, mortos-vivos reagem a habilidades (como destruir o mal dos paladinos) e magias (como proteção contra o mal) como se fossem Malignos."
      ],
      "tables": []
    },
    {
      "title": "Andar do Espectro",
      "level": 3,
      "paragraphs": [
        "Uma vez por dia você pode gerar um efeito similar a magia “Passeio Etéreo”, fazê-lo é uma ação livre."
      ],
      "tables": []
    },
    {
      "title": "Proteção Anti Magia",
      "level": 3,
      "paragraphs": [
        "Três vezes por dia você pode erguer uma proteção mágica ao seu redor. Como ação de movimento você recebe uma barreira que torna imune a danos mágicos. A barreira dura por 3 Rodadas ou até absorver 75 de dano mágico."
      ],
      "tables": []
    },
    {
      "title": "Rei da Morte",
      "level": 3,
      "paragraphs": [
        "O talento “Ataque Poderoso” recebe a seguinte mudança:",
        "Você pode aceitar uma penalidade em jogadas de ataque até o máximo de -5, em troca, recebe o triplo da penalidade como bônus em jogadas de dano."
      ],
      "tables": []
    },
    {
      "title": "Disciplina da Necrópole - Sanguíneo",
      "level": 1,
      "paragraphs": [],
      "tables": []
    },
    {
      "title": "Golpe da Morte",
      "level": 3,
      "paragraphs": [
        "Quando você usa o talento “Ataque Poderoso” e atinge uma criatura, você restaura pontos de vida igual o dano bônus garantido pelo talento."
      ],
      "tables": []
    },
    {
      "title": "Transfusão",
      "level": 3,
      "paragraphs": [
        "Durante sua rodada, como uma ação livre mas somente uma vez por rodada, você pode escolher receber até 5 + Mod. Con. pontos de dano por esta habilidade, se o fizer, no início de sua próxima rodada você cura o dobro de pontos de vida sacrificados para esta habilidade. Você não recupera pontos de vida através desta habilidade se cair abaixo de 0 antes de sua segunda ativação. Você pode utilizar esta habilidade um número de vezes por dia igual a 1 + Mod. Con."
      ],
      "tables": []
    },
    {
      "title": "Sorve Sangue",
      "level": 3,
      "paragraphs": [
        "Sempre que você restaura pontos de vida através de uma habilidade do Cavaleiro da Morte, além de receber a cura proveniente da habilidade também recebe PVs Temporários igual a cura recebida. Somente a maior fonte de cura se mantém."
      ],
      "tables": []
    },
    {
      "title": "Escudo de Sangue",
      "level": 3,
      "paragraphs": [
        "Quando uma habilidade do Cavaleiro da Morte te fizer restaurar pontos de Vida, você recebe RD e RE igual a seu nível nesta classe até o início de seu próximo turno."
      ],
      "tables": []
    },
    {
      "title": "Purgatório",
      "level": 3,
      "paragraphs": [
        "Quando um golpe causaria dano suficiente para te reduzir abaixo de 0 PVs, ao invés disso você é reduzido a 1 ponto de vida por até o fim de sua rodada e não pode ser reduzido abaixo disso, durante essa rodada toda cura que você recebe é dobrada. Esta habilidade pode ser utilizada uma vez por dia."
      ],
      "tables": []
    },
    {
      "title": "Disciplina da Necrópole - Gélido",
      "level": 1,
      "paragraphs": [],
      "tables": []
    },
    {
      "title": "Golpe Gélido",
      "level": 3,
      "paragraphs": [
        "Quando você usa o talento “Ataque Poderoso” e atinge uma criatura, você causa o dano bônus garantido pelo talento como dano de Frio a todos os inimigos adjacentes a ele. Este efeito se ativa no máximo 4 vezes por rodada."
      ],
      "tables": []
    },
    {
      "title": "Câmara Criogênica",
      "level": 3,
      "paragraphs": [
        "Inimigos a até 9 metros de você tem seu deslocamento em terra reduzido em 3m e são considerados como estando em terreno difícil."
      ],
      "tables": []
    },
    {
      "title": "Maquina Assassina",
      "level": 3,
      "paragraphs": [
        "Suas armas corpo-a-corpo têm suas margens de ameaça e multiplicador aumentadas em +1."
      ],
      "tables": []
    },
    {
      "title": "Gelo Estilhaçado",
      "level": 3,
      "paragraphs": [
        "Quando você realiza um acerto crítico usando o talento “Ataque Poderoso” o dano adicional de “Golpe Gélido” é dobrado."
      ],
      "tables": []
    },
    {
      "title": "O Longo Inverno",
      "level": 3,
      "paragraphs": [
        "Uma vez por dia você como uma ação completa, você pode realizar um ataque contra todos os inimigos em um cone de 9 Metros, inimigos que estejam adjacentes ao cone dessa habilidade ainda são afetados pelos seus ataques, mas recebem metade do dano caso sejam atingidos. Você ignora o limite da habilidade “Golpe Gélido” quando usa esta habilidade."
      ],
      "tables": []
    },
    {
      "title": "Disciplina da Necrópole - Profano",
      "level": 1,
      "paragraphs": [],
      "tables": []
    },
    {
      "title": "Golpe Suturante",
      "level": 3,
      "paragraphs": [
        "Quando você usa o talento “Ataque Poderoso” e atinge uma criatura, você causa o dano bônus garantido pelo talento como dano de Necromancia novamente no início de sua rodada à criatura. Este efeito se ativa apenas duas vezes por rodada."
      ],
      "tables": []
    },
    {
      "title": "Reviver Morto-Vivo",
      "level": 3,
      "paragraphs": [
        "Você recebe um ajudante morto-vivo. Sempre que você sobe de nível o Morto-Vivo também recebe um nível, Um Morto-Vivo recebe BBA 1/Nível além dos demais benefícios por passagem de nível exceto Talentos. Caso seu Morto-Vivo venha a morrer (de novo) você pode invocar um novo com um dia de trabalho (8 Horas). No 15º nível, caso seu Morto-Vivo morra (de novo), você pode trazê-la de volta à vida  após passar 1 hora em meditação.O Morto-Vivo age no turno do Cavaleiro da Morte, compartilhando de sua rolagem de iniciativa.",
        "Pv: Um Morto-Vivo começa com 24 Pontos de Vida e ganha 6 PV por nível seguinte.",
        "Deslocamento: 9 Metros",
        "Perícias: Um Morto-Vivo possui 2 perícias treinadas, mas não pode escolher perícias baseadas em inteligência ou Carisma.",
        "Habilidades: For 18, Des 18, Con -, Int 10, Sab 10, Car 10.",
        "Arma Natural: Possui dois ataques com arma natural que causa dano de forma equivalente a uma Espada Curta própria para o seu tamanho (1d6 para criaturas Médias).",
        "Tamanho: Médio",
        "Outras Habilidades: Imunidade a atordoamento, dano de habilidade (apenas Força, Destreza ou Constituição), dano não-letal, imunidade a crítico, doença, encantamento, fadiga, paralisia, necromancia, sono e veneno. Não precisam respirar, se alimentar e dormir. Não recuperam pontos de vida normalmente. Sofrem dano com magias de cura e recuperam pontos de vida com magias de necromancia. Destruídos quando seus PV chegam a 0. Um morto-vivo não é afetado pelas magias reviver os mortos ou ressurreição. A magia ressurreição verdadeira o transforma na criatura que era quando vivo. Independente de sua tendência verdadeira, mortos-vivos reagem a habilidades (como destruir o mal dos paladinos) e magias (como proteção contra o mal) como se fossem Malignos.",
        "Especial: Quando este morto-vivo causar dano a um inimigo, o dado de dano (1d6) é causado novamente no início da rodada do cavaleiro da morte."
      ],
      "tables": []
    },
    {
      "title": "Podridão da Morte",
      "level": 3,
      "paragraphs": [
        "Três vezes ao dia como uma ação de movimento você pode escolher um inimigo que possa ver e fazer os efeitos negativos de início de turno da habilidade “Golpe Suturante” e dos ataques do lacaio de “Reviver Morto-Vivo” acontecerem imediatamente, eles ainda irão ocorrer novamente no início da próxima rodada. O dano desta habilidade restaura PVs do lacaio criado por “Reviver Morto-Vivo”"
      ],
      "tables": []
    },
    {
      "title": "Contaminação Torpe",
      "level": 3,
      "paragraphs": [
        "Quando você realiza um acerto usando o talento “Ataque Poderoso” você pode escolher um inimigo a até 3 metros do seu alvo, você aplica os efeitos negativos da habilidade “Golpe Suturante” que seu inimigo receberia a ele."
      ],
      "tables": []
    },
    {
      "title": "Exército dos Mortos",
      "level": 3,
      "paragraphs": [
        "Uma vez por dia como uma ação completa você invoca outros 4 lacaios como pela habilidade “Reviver Morto-Vivo”, eles duram por três rodadas e então se desfazem retornando ao pó. Quando estes mortos-vivos causam dano a um inimigo, o dado de dano (1d6) é causado novamente no início da rodada do cavaleiro da morte."
      ],
      "tables": []
    }
  ],
  "classTalents": []
} satisfies ClassDetail;

~~~~


---

# Classe: medico-de-salistick

**Fonte:** `src/data/class-details/medico-de-salistick.ts`

~~~~typescript
import type { ClassDetail } from './schema';

export const classDetail = {
  "kind": "prestige",
  "slug": "medico-de-salistick",
  "name": "Médico de Salistick",
  "family": "Classes de Prestígio",
  "sourceDocId": "1h9ZYF9N4aZaT9we2TBRqStX3tgluy3dVfO7aTNPv4ZQ",
  "sourceTitle": "Médico de Salistick",
  "status": "complete",
  "editorialNotes": [],
  "requirements": [
    "Perícias: 8 Graduações em Cura",
    "Talentos: Médico de Campo",
    "Especial: Não pode ser devoto de nenhum deus."
  ],
  "basics": {
    "hitPoints": "um Médico de Salistick ganha 4 PV (+mod. Con) por nível.",
    "trainedSkills": null,
    "classSkills": null,
    "bonusTalents": null
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
        "+0",
        "Conjunto de Medicina"
      ],
      [
        "2º",
        "+1",
        "Conhecimento Anatômico (1d6)"
      ],
      [
        "3º",
        "+2",
        "Cirurgia"
      ],
      [
        "4º",
        "+3",
        "Remédios"
      ],
      [
        "5º",
        "+3",
        "Conhecimento Anatômico (2d6)"
      ],
      [
        "6º",
        "+4",
        "Atendimento de Campo"
      ],
      [
        "7º",
        "+5",
        "Implantes"
      ],
      [
        "8º",
        "+6",
        "Atenção Médica, Conhecimento Anatômico (3d6)"
      ],
      [
        "9º",
        "+6",
        "Cirurgia"
      ],
      [
        "10º",
        "+7",
        "Doutor Frankenstein"
      ]
    ]
  },
  "sections": [
    {
      "title": "Conjunto de Medicina",
      "level": 3,
      "paragraphs": [
        "Você recebe um conjunto de instrumentos cirúrgicos, remédios, seringas e até mesmo sanguessugas, sem custo algum. A maleta conta como um kit de medicamentos obra-prima (+2 em testes de cura). Como uma ação padrão, você pode curar uma criatura adjacente a você utilizando sua maleta. Ela recupera 1d12 + MdN + Mod. Sab pontos de dano independente se a criatura está viva ou morta, para cada nível nesta classe o valor da cura aumenta em 1d12. Você só pode usar esta habilidade uma vez por dia numa mesma criatura. A partir do 5º nível pode utilizar esta habilidade uma vez adicional por criatura e uma terceira a partir do 10º nível."
      ],
      "tables": []
    },
    {
      "title": "Conhecimento Anatômico",
      "level": 3,
      "paragraphs": [
        "Sua compreensão do corpo torna-o letal em combate. Você causa 1d6 pontos de dano adicional em ataques, este bônus não se aplica contra construtos. A cada 3 níveis o bônus aumenta em 1d6."
      ],
      "tables": []
    },
    {
      "title": "Cirurgia",
      "level": 3,
      "paragraphs": [
        "Você pode consertar estragos que parecem irremediáveis. Uma cirurgia demora 1 hora, e exige um teste de Cura (CD 30). Se você for bem-sucedido, elimina todos os níveis negativos e danos de habilidade que a criatura tenha sofrido. Se falhar, não pode tentar de novo por 1 dia. Se estiver usando as regras de ferimentos permanentes, pode fazer uma cirurgia em alguém que tenha sofrido um desses ferimentos para removê-los também. A partir do 9º nível uma cirurgia pode ser feita em 1 minuto, além disso, se a cirurgia remover um nível negativo ou dano de habilidade de uma criatura com sucesso, a criatura recebe um bônus de +2 em um atributo a sua escolha durante o dia."
      ],
      "tables": []
    },
    {
      "title": "Remédios",
      "level": 3,
      "paragraphs": [
        "Com um dia de trabalho, você pode criar um remédio que funciona como uma poção (Escolha entre Remover Veneno, Remover Medo, Remover Doença, Remover Cegueira/Surdez ou Remover Paralisia). O remédio não é mágico, e é imune a efeitos que dissipam magia."
      ],
      "tables": []
    },
    {
      "title": "Atendimento de Campo",
      "level": 3,
      "paragraphs": [
        "O talento “Médico de Campo” sofre as seguintes mudanças:\nVocê pode usar magias ou habilidades de cura em um aliado até um minuto depois de sua morte.",
        "Quando você impede uma criatura de morrer através dessa habilidade, os PVs dela se abaixo de 0, se tornam 0, este efeito só pode ocorrer uma vez por criatura por combate."
      ],
      "tables": []
    },
    {
      "title": "Implantes",
      "level": 3,
      "paragraphs": [
        "Você aprende a realizar Implantes, para realizar isto, precisa de 1 hora e ter o material necessário para fazê-lo, uma criatura pode ter apenas um implante por vez."
      ],
      "tables": []
    },
    {
      "title": "Atenção Médica",
      "level": 3,
      "paragraphs": [
        "Você toma conta de seus companheiros mantendo-os saudáveis mesmo que à força! Enquanto estiverem andando com você (dormindo no mesmo acampamento, viajando juntos, dentro da mesma masmorra) seus colegas (até um número máximo igual a seu Mod. Sab) aumentam seus PVs Máximo em 10 + seu Mod. Sab. Quando eles se separam de você, os bônus desaparecem após 24 horas. Você pode conceder estes bônus a si mesmo, mas conta no limite de pacientes."
      ],
      "tables": []
    },
    {
      "title": "Doutor Frankenstein",
      "level": 3,
      "paragraphs": [
        "A partir do 10º nível você aprende a realizar implantes nunca antes vistos, ao invés de escolher implantes pertencentes a lista, pode adquirir características de monstros como seus implantes. Por exemplo, poderia escolher as presas de um vampiro para receber seu ataque drenante, as cordas vocais de uma sereia para ter seu canto e assim por diante, quando você realiza implantes aumenta o número máximo de implantes que uma criatura pode ter para 3."
      ],
      "tables": []
    }
  ],
  "classTalents": []
} satisfies ClassDetail;

~~~~


---

# Classe: alquimista-drogadora

**Fonte:** `src/data/class-details/alquimista-drogadora.ts`

~~~~typescript
import type { ClassDetail } from './schema';

export const classDetail = {
  "kind": "prestige",
  "slug": "alquimista-drogadora",
  "name": "Alquimista (Drogadora)",
  "family": "Classes de Prestígio",
  "sourceDocId": "1tHASYIQXbM2pHyvv7bNIxpn700HCq2EKTYFsalIUtrw",
  "sourceTitle": "Alquimista (Drogadora)",
  "status": "complete",
  "editorialNotes": [],
  "requirements": [
    "Perícias: 8 Graduações em Cura, 8 Graduações em Ofício (Alquimia)",
    "Talentos: Criar Consumíveis"
  ],
  "basics": {
    "hitPoints": "uma Alquimista ganha 4 PV (+mod. Con) por nível.",
    "trainedSkills": null,
    "classSkills": null,
    "bonusTalents": null
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
        "+0",
        "Produzir Extratos, Sangue de Rosas"
      ],
      [
        "2º",
        "+1",
        "Toque Curativo (Padrão)"
      ],
      [
        "3º",
        "+2",
        "Meditação, Milagre Alquímico"
      ],
      [
        "4º",
        "+3",
        "Perfume Intoxicante (3m)"
      ],
      [
        "5º",
        "+3",
        "Produzir Extratos, Sangue de Rosas"
      ],
      [
        "6º",
        "+4",
        "Milagre Alquímico"
      ],
      [
        "7º",
        "+5",
        "Perfume Intoxicante (9m)"
      ],
      [
        "8º",
        "+6",
        "Toque Curativo (Movimento)"
      ],
      [
        "9º",
        "+6",
        "Milagre Alquímico"
      ],
      [
        "10º",
        "+7",
        "Alquimia Secreta, Produzir Extratos, Sangue de Rosas"
      ]
    ]
  },
  "sections": [
    {
      "title": "Produzir Extratos",
      "level": 3,
      "paragraphs": [
        "O talento “Criar Consumíveis” sofre as seguintes mudanças:",
        "Você pode criar pergaminhos, Varinhas ou Poções. O pré-requisito para criar um pergaminho, varinha ou poção é possuir o nível necessário nesta classe. No 1º nível desta classe você pode criar itens de até segundo ciclo, no 5º nível desta classe pode criar itens de até quarto, e por fim, no 10º nível desta classe pode criar itens de até sexto ciclo. Uma Alquimista não precisa conhecer as magia para produzir itens desta maneira.",
        "Além disso, quando criar um Pergaminho ou uma Poção, adicione seu Mod. Sab ou Metade de seu nível nesta classe (o que for menor) a quantidade de recursos criados pelo talento."
      ],
      "tables": []
    },
    {
      "title": "Sangue de Rosas",
      "level": 3,
      "paragraphs": [
        "No 1° nível você recebe uma das características abaixo de acordo com a sua escolha, no 5º e 10º nível você recebe uma nova característica a sua escolha.",
        "Imunidade a doenças mundanas e mágicas",
        "Imunidade a venenos mundanos e mágicas",
        "RE Ácido igual ao dobro de seu nível nesta classe",
        "Imunidade a paralisia, petrificação e sono.",
        "Você seu nível nesta classe a seus testes de Curar e Conhecimento (Natureza)"
      ],
      "tables": []
    },
    {
      "title": "Toque Curativo",
      "level": 3,
      "paragraphs": [
        "No 2º nível, as próprias emanações corporais do Alquimista atuam como medicamentos poderosos. Ele pode, com um toque e uma ação padrão, curar 1d8 + MdN + Mod. Sab pontos de dano em uma criatura viva, para cada nível nesta classe o valor da cura aumenta em 1d8. Esta habilidade pode ser utilizada um número de vezes por dia igual a seu nível nesta classe de prestígio. A partir do 8º nível a ação necessária para utilizar esta habilidade é uma ação de movimento."
      ],
      "tables": []
    },
    {
      "title": "Meditação",
      "level": 3,
      "paragraphs": [
        "Independentemente de sua raça, um Alquimista é capaz de entrar em um estado de transe que acelera sua regeneração natural. Consumindo uma poção criada através de sua habilidade “Produzir Extratos”, o Alquimista pode meditar por 4 horas ao invés de dormir, recebendo todos os benefícios de 8 horas de descanso e caso tenha sofrido dano temporário em atributos, restaura todos os pontos perdidos."
      ],
      "tables": []
    },
    {
      "title": "Milagre Alquímico",
      "level": 3,
      "paragraphs": [
        "No 3º nível, uma vez por dia, o Alquimista pode produzir Mod. Sab ou Metade de seu nível nesta classe (o que for menor) Poções sem gastar recursos. Preparar as poções por esta habilidade exige 10 min e elas possuem o mesmo requisito de criação que os itens gerados pela habilidade “Produzir Extrato”. Poções de Alquimista criadas por esta habilidade perdem seu efeito se não consumidas em 24 horas. A partir do 6º nível o Alquimista pode consumir poções criadas por esta habilidade como uma Ação Livre uma vez por rodada. A partir do 9º nível sempre que o Alquimista consome uma Poção criada por esta habilidade um aliado a até 6 metros (Escolhido pela própria Alquimista) recebe os mesmos benefícios da poção."
      ],
      "tables": []
    },
    {
      "title": "Perfume Intoxicante",
      "level": 3,
      "paragraphs": [
        "A partir do 4º nível, a primeira vez que uma criatura se aproxima a até 3m do Alquimista deve ser bem-sucedida em um teste de Vontade (CD 10 + MdN + Mod. Sab) ou é afetada por Enfeitiçar Monstro. Uma criatura bem-sucedida não pode ser afetada novamente por 24 horas. A partir do 7º nível o alcance desta habilidade se torna 9m."
      ],
      "tables": []
    },
    {
      "title": "Alquimia Secreta",
      "level": 3,
      "paragraphs": [
        "A partir do 10º nível sempre que o Alquimista utiliza do talento “Criar Consumíveis” ou da habilidade “Milagre Alquímico” ele gera o dobro de itens que normalmente geraria através da habilidade. Por exemplo, se fosse criar uma poção através de “Criar Consumíveis” ele cria duas no lugar, se fosse criar três, criaria seis e assim por diante."
      ],
      "tables": []
    }
  ],
  "classTalents": []
} satisfies ClassDetail;

~~~~


---

# Classe: bruxa-da-tormenta

**Fonte:** `src/data/class-details/bruxa-da-tormenta.ts`

~~~~typescript
import type { ClassDetail } from './schema';

export const classDetail = {
  "kind": "prestige",
  "slug": "bruxa-da-tormenta",
  "name": "Bruxa da Tormenta",
  "family": "Classes de Prestígio",
  "sourceDocId": "1TlkbLGjG88-x2gFJ4-iHFbJzU7qH55wqv98K0VDSQF4",
  "sourceTitle": "Bruxa da Tormenta",
  "status": "complete",
  "editorialNotes": [],
  "requirements": [
    "Magias: capacidade de lançar magias arcanas de 3º nível",
    "Talentos: Identidade Fraca"
  ],
  "basics": {
    "hitPoints": "uma Bruxa da Tormenta ganha 3 PV (+mod. Con) por nível.",
    "trainedSkills": null,
    "classSkills": null,
    "bonusTalents": null
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
        "+0",
        "Anticarisma, Magias"
      ],
      [
        "2º",
        "+1",
        "Conjurador Rubro"
      ],
      [
        "3º",
        "+1",
        "Convite Rubro"
      ],
      [
        "4º",
        "+2",
        ""
      ],
      [
        "5º",
        "+2",
        "Aspecto da Corrupção"
      ],
      [
        "6º",
        "+3",
        "Autofagia"
      ],
      [
        "7º",
        "+3",
        "Caçador de Deuses"
      ],
      [
        "8º",
        "+4",
        "Mente Alienígena"
      ],
      [
        "9º",
        "+4",
        ""
      ],
      [
        "10º",
        "+5",
        "Aspecto da Corrupção, Lar Rubro"
      ]
    ]
  },
  "sections": [
    {
      "title": "Anticarisma",
      "level": 3,
      "paragraphs": [
        "Seu carisma se torna nulo, você falha automaticamente em testes de perícia baseadas em Carisma exceto intimidação. Para testes de Intimidação você utiliza seu Mod.For e Mod.Con ao invés de Carisma."
      ],
      "tables": []
    },
    {
      "title": "Magias",
      "level": 3,
      "paragraphs": [
        "Níveis de Bruxa da Tormenta se acumulam com níveis numa classe conjuradora arcana que o personagem já possua para propósitos de magia conhecidas e PM."
      ],
      "tables": []
    },
    {
      "title": "Conjurador Rubro",
      "level": 3,
      "paragraphs": [
        "Você adiciona “Momento de Tormenta” a sua lista de magias conhecidas. Para você, essa magia sempre está preparada e pode ser conjurada contanto que pague seu custo em PMs. Quando conjurar esta magia você altera sua duração para 3 Rodadas, remove sua condição de concentração e adiciona ela a característica (D). Por fim, sempre que a conjura, pode escolher um talento metamágico qualquer (mesmo que não o possua) para adicionar aos efeitos da magia gratuitamente."
      ],
      "tables": []
    },
    {
      "title": "Convite Rubro",
      "level": 3,
      "paragraphs": [
        "O talento “Identidade Fraca” passa a ter o seguinte efeito:",
        "Escolha um companheiro, que pode ser um personagem jogador ou um PdM. Quando estiver próximo desse companheiro (18m ou menos), você recebe +1 em jogadas, testes e CD de Magias. Esse bônus aumenta em 1 para cada três outros talentos da Tormenta que você possui (Mas não pode exceder seu nível nesta classe de Prestígio). Além disso, quando conjurar a magia “Momento de Tormenta” pela habilidade “Conjurador Rubro”, reduz o custo da magia em 2 PMs.",
        "Se estiver distante mais de 18m desse companheiro, você sofre penalidade iguais aos bônus que receberia normalmente.",
        "Você pode designar um novo companheiro uma vez por mês."
      ],
      "tables": []
    },
    {
      "title": "Aspecto da Corrupção",
      "level": 3,
      "paragraphs": [
        "No 5° nível você recebe uma das características abaixo de acordo com a sua escolha, no 10º nível você recebe uma nova característica a sua escolha.",
        "Coordenação Perfeita:  Você recebe +1 em todos os testes de perícia. Este bônus aumenta em +1 para cada 3 outros talentos da Tormenta que você possui.",
        "Imortalidade: você não precisa respirar, se alimentar e dormir. Também não envelhece, e só morrem por causas violentas.",
        "Imunidades: Escolha entre ácido, dano de habilidade, doença, energia negativa, eletricidade, fogo, frio, metamorfose, paralisia, petrificação, sono ou veneno você se torna imune a um destes efeitos. A cada 7 talentos da tormenta que possuir, você pode escolher uma nova imunidade.",
        "Insanidade da Tormenta: uma criatura inteligente (Int 3 ou mais) que o veja, deve fazer um teste de Vontade (CD 10 + MdN + Seu número de talentos da Tormenta). Em caso de falha, sofre 1 ponto de dano em Carisma para cada 5 Talentos da Tormenta que você possuir. Em caso de sucesso, fica imune a esta habilidade por um dia. Esta habilidade não afeta aliados.",
        "Percepção Temporal:  Você recebe +1 em testes de resistências. Este bônus aumenta em +1 para cada 3 outros talentos da Tormenta que você possui.",
        "Nutrientes: você adquire cura acelerada 2. Este bônus aumenta em 3 para cada dois outros talentos da Tormenta que você possui."
      ],
      "tables": []
    },
    {
      "title": "Autofagia",
      "level": 3,
      "paragraphs": [
        "A partir do 6º nível, pode, como uma ação de movimento, sofrer -2 de penalidade temporária em qualquer habilidade. Esta penalidade se converte em 5 PMs, que podem ser usados livremente. Você pode utilizar esta habilidade uma vez por dia. As penalidades dessa habilidade desaparecem à taxa de 2 pontos por dia. Quando uma penalidade desaparece, os PM vindos dela também se esvaem."
      ],
      "tables": []
    },
    {
      "title": "Caçador de Deuses",
      "level": 3,
      "paragraphs": [
        "Você recebe +4 em Testes de Resistência contra magias e Habilidades de origem Divina, quando você tem sucesso em resistir um efeito proveniente dessas fontes, você ignora qualquer efeito secundário ou parcial que a habilidade causaria."
      ],
      "tables": []
    },
    {
      "title": "Mente Alienígena",
      "level": 3,
      "paragraphs": [
        "Qualquer um que tente estudar ou ler sua mente falha automaticamente em fazê-lo."
      ],
      "tables": []
    },
    {
      "title": "Lar Rubro",
      "level": 3,
      "paragraphs": [
        "Ao alcançar o 10º nível, você não sofre nenhuma penalidade por estar em uma área de Tormenta. Torna-se imune a todo dano de matéria vermelha, e nenhum fenômeno em uma área de Tormenta pode prejudicá-lo. Por fim, recebe um covil dentro de uma área de tormenta com o modelo estrutura aberrante. Dentro do covil, você pode descansar apenas 4 horas, e terá todos os benefícios de descansar 8 horas."
      ],
      "tables": []
    }
  ],
  "classTalents": []
} satisfies ClassDetail;

~~~~


---

# Classe: mestre-das-bonecas

**Fonte:** `src/data/class-details/mestre-das-bonecas.ts`

~~~~typescript
import type { ClassDetail } from './schema';

export const classDetail = {
  "kind": "prestige",
  "slug": "mestre-das-bonecas",
  "name": "Mestre das Bonecas",
  "family": "Classes de Prestígio",
  "sourceDocId": "1RXXGHI0115Tp5_gpQFWbDTLI27O5KSqI3ToyP1EofSM",
  "sourceTitle": "Mestre das Bonecas - WIP",
  "status": "wip",
  "editorialNotes": [
    "A fonte está explicitamente marcada como WIP. O compêndio apresenta o material existente sem completar lacunas por inferência."
  ],
  "requirements": [
    "Magias: capacidade de lançar magias arcanas de 3º nível",
    "Talentos: Comandar"
  ],
  "basics": {
    "hitPoints": "uma Mestre das Bonecas ganha 2 PV (+mod. Con) por nível.",
    "trainedSkills": null,
    "classSkills": null,
    "bonusTalents": null
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
        "+0",
        "Criar Bonecas, Magias"
      ],
      [
        "2º",
        "+1",
        "En Passant"
      ],
      [
        "3º",
        "+1",
        "Roque"
      ],
      [
        "4º",
        "+2",
        ""
      ],
      [
        "5º",
        "+2",
        "Mate do Estudioso"
      ],
      [
        "6º",
        "+3",
        "Ave Imperator"
      ],
      [
        "7º",
        "+3",
        "Gambito da Rainha"
      ],
      [
        "8º",
        "+4",
        ""
      ],
      [
        "9º",
        "+4",
        "Veni Vidi Vici"
      ],
      [
        "10º",
        "+5",
        "Promover o Peão"
      ]
    ]
  },
  "sections": [
    {
      "title": "Criar Bonecas",
      "level": 3,
      "paragraphs": [
        "Com um dia de trabalho (8 horas) você pode criar uma boneca arcana que obedece a seus comandos, ela possui o mesmo nível que você quando a criou. Você pode ter um número de bonecas igual ao seu nível nesta classe, mas só pode possuir um número de bonecas ativas igual a metade de seu nível nesta classe (Arredondado para cima). Caso uma boneca seja destruída, você pode invocar uma boneca reserva, se ainda tiver com uma ação de movimento. Você pode realizar aprimoramentos e mudanças a suas bonecas contato que pague o custo pelos aprimoramentos.",
        "Bonecas invocadas através dessa habilidade, só podem se mover e realizar atividades que exijam pouca força e recebem BBA 3/4. Mas contam como um oponente para o propósito de flanquear e servem como uma extensão dos membros do conjurador para realizar ataques de toque. Você pode equipá-las com as armas e armaduras que quiser (Elas sabem utilizar de Armas Simples além de Armaduras Leves).",
        "Uma boneca age no turno do Mestre das Bonecas, compartilhando de sua rolagem de iniciativa, porém possui Ações próprias. Se você se afastar mais de 30m de uma boneca ela é desativada, e cai inerte no chão precisando ser reativada com uma ação de movimento.",
        "Pv: Uma Boneca tem ½ dos PVs de seu criador",
        "Deslocamento: 12 Metros (Voo)",
        "Perícias: Uma boneca é treinada em Furtividade e Percepção.",
        "Habilidades: For 10, Des 20, Con -, Int 5, Sab 10, Car -.",
        "Arma Natural: Possui dois ataques com arma natural que causa dano de forma equivalente a uma Adaga própria para o seu tamanho (1d1 para criaturas Ínfimas).",
        "Tamanho: Minúsculo",
        "Outras Habilidades:  Imunidade a atordoamento, dano de habilidade, dano não-letal, doença, encantamento, fadiga, paralisia, necromancia, sono e veneno. Uma boneca é um construto."
      ],
      "tables": []
    },
    {
      "title": "Magias",
      "level": 3,
      "paragraphs": [
        "Níveis de Mestre das Bonecas se acumulam com níveis numa classe conjuradora arcana que o personagem já possua para propósitos de magia conhecidas e PM."
      ],
      "tables": []
    },
    {
      "title": "En Passant",
      "level": 3,
      "paragraphs": [
        "Com uma ação padrão, você pode comandar uma ou mais bonecas para atacar por você. Cada boneca ataca separadamente usando o seu bônus de toque-a-distância, mas causam dano usando os próprios modificadores e armas. Mesmo que suas bonecas já tenham atacado nesta rodada, elas podem atacar novamente pelos efeitos desta habilidade."
      ],
      "tables": []
    },
    {
      "title": "Roque",
      "level": 3,
      "paragraphs": [
        "Acostumada a ser protegida por suas bonecas, sua CA aumenta em +1 para cada boneca ativa a até 3m de você. Este bônus não é cumulativo com Escudos mas é cumulativo com Armaduras e Magias. Quando você usa o Talento “Comandar” seus aliados também recebem os benefícios desta habilidade."
      ],
      "tables": []
    },
    {
      "title": "Mate do Estudioso",
      "level": 3,
      "paragraphs": [
        "Suas bonecas passam a somar seu Mod.Int as Jogadas de Ataque e Dano delas e são automaticamente afetadas pelo seu talento “Comandar”. Mesmo que não possam ouvi-lo ou não estejam ativas."
      ],
      "tables": []
    },
    {
      "title": "Ave Imperator",
      "level": 3,
      "paragraphs": [
        "Aprendendo a manipular mais suas habilidades arcanas, suas magias causam +1 ponto de dano para cada boneca ativa a até 3m de você. Quando você usa o Talento “Comandar” seus aliados também recebem os benefícios desta habilidade."
      ],
      "tables": []
    },
    {
      "title": "Gambito da Rainha",
      "level": 3,
      "paragraphs": [
        "Uma vez por dia você pode redirecionar um ataque que lhe afetaria para uma de suas bonecas a até 9 metros, você não precisa ser o alvo principal de um ataque ou magia para ativar esta habilidade, apenas precisa ser afetado por ela de alguma forma."
      ],
      "tables": []
    },
    {
      "title": "Veni Vidi Vici",
      "level": 3,
      "paragraphs": [
        "Quando os PVs de uma das suas bonecas chega a 0 ,você pode escolher ativar uma explosão a partir dela, causando 6d6 + MdN + Mod.Int pontos de dano a criaturas a até 3 metros da mesma. Criaturas que estejam se beneficiando do seu talento “Comandar” não são afetadas pela explosão."
      ],
      "tables": []
    },
    {
      "title": "Promover o Peão",
      "level": 3,
      "paragraphs": [
        "Você aprende a extrair o máximo de suas bonecas, especialmente de como comandá-las. Quando você usa o talento “Comandar” pode escolher um dos benefícios abaixo para garantir a suas bonecas além dos efeitos comuns do talento e suas habilidades:",
        "Torre, As bonecas recebem um ataque adicional por rodada, o alcance de seus ataques passa a ser 36 metros caso utilizem de armas corpo-a-corpo ou recebem 36 metros de alcance adicionais se forem longa distância. Enquanto este efeito perdurar suas bonecas podem usar qualquer arma, armadura e escudo como se possuíssem todos os requisitos para fazê-lo.",
        "Bispo, As bonecas recebem cura acelerada, RD e RE igual ao seu Mod.Int, voce pode ativar “Gambito da Rainha” uma segunda vez este dia se já tiver utilizado da habilidade.",
        "Cavalo, o deslocamento de suas bonecas se torna 36 metros vôo, elas não geram mais ataques de oportunidade por se moverem e se tornam capazes de te carregar (Seu deslocamento se torna igual ao das bonecas contanto que uma delas ainda esteja ativa)",
        "Rainha, Suas bonecas recebem todos os bônus garantidos pela Torre, Bispo e Cavalo porém morrem em 3 rodadas a partir da ativação da habilidade.",
        "Materiais para Bonecas!",
        "Madeira, O dado de dano para “Veni Vidi Vici” aumenta para D8 ao invés de D6",
        "Pedra, A boneca recebe CA igual ao Mod. Int de seu criador",
        "Argila, A boneca recebe RE igual ao Mod. Int de seu criador, este efeito se acumula com o efeito “Bispo” de “Promover o Peão”",
        "Couro, A boneca pode ser treinada em duas perícias adicionais",
        "Ferro, A boneca recebe RD igual ao Mod. Int de seu criador, este efeito se acumula com o efeito “Bispo” de “Promover o Peão”",
        "Carne e Ossos, a boneca passa a ter vida igual a de seu criador ao invés de metade."
      ],
      "tables": []
    }
  ],
  "classTalents": []
} satisfies ClassDetail;

~~~~


---

# Classe: cavaleiro-do-corvo

**Fonte:** `src/data/class-details/cavaleiro-do-corvo.ts`

~~~~typescript
import type { ClassDetail } from './schema';

export const classDetail = {
  "kind": "prestige",
  "slug": "cavaleiro-do-corvo",
  "name": "Cavaleiro do Corvo",
  "family": "Classes de Prestígio",
  "sourceDocId": "1j5LKlKVJS6m_i4dBCsR-zDrjVwRNZMDeztkCT698lSo",
  "sourceTitle": "Cavaleiro do Corvo",
  "status": "complete",
  "editorialNotes": [],
  "requirements": [
    "Bônus Base de Ataque: +5",
    "Perícias: Treinado em Furtividade",
    "Talentos: Olho do Caçador"
  ],
  "basics": {
    "hitPoints": "um Cavaleiro do Corvo ganha 5 PV (+mod. Con) por nível.",
    "trainedSkills": null,
    "classSkills": null,
    "bonusTalents": null
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
        "Língua dos Corvos, Reconhecimento e Infiltração"
      ],
      [
        "2º",
        "+2",
        "Estômago de Otyugh, Não Tenho Nome"
      ],
      [
        "3º",
        "+3",
        "Missão Dada É Missão Cumprida"
      ],
      [
        "4º",
        "+4",
        "Atrás das Linhas Inimigas"
      ],
      [
        "5º",
        "+5",
        "Ferramentas da Morte"
      ],
      [
        "6º",
        "+6",
        "Missão Dada É Missão Cumprida"
      ],
      [
        "7º",
        "+7",
        "Das Trevas"
      ],
      [
        "8º",
        "+8",
        "Atrás das Linhas Inimigas, Não Tenho Nome"
      ],
      [
        "9º",
        "+9",
        "Missão Dada É Missão Cumprida"
      ],
      [
        "10º",
        "+10",
        "Trazemos a Luz"
      ]
    ]
  },
  "sections": [
    {
      "title": "Língua dos Corvos",
      "level": 3,
      "paragraphs": [
        "Um Cavaleiro do Corvo pode se comunicar livremente com seus aliados que possam vê-lo, como se todos estivessem sob efeito da magia ligação telepática. É impossível para qualquer inimigo compreender completamente essa comunicação."
      ],
      "tables": []
    },
    {
      "title": "Reconhecimento e Infiltração",
      "level": 3,
      "paragraphs": [
        "Um cavaleiro do corvo não sofre penalidades em perícias ou deslocamento por utilizar qualquer tipo de armadura."
      ],
      "tables": []
    },
    {
      "title": "Estômago de Otyugh",
      "level": 3,
      "paragraphs": [
        "A partir do 2º nível, o Cavaleiro pode usar a perícia Sobrevivência para se sustentar mesmo em terrenos onde isso normalmente seria impossível, como Planos Infernais, áreas de realidade aberrante e tumbas de liches."
      ],
      "tables": []
    },
    {
      "title": "Não Tenho Nome",
      "level": 3,
      "paragraphs": [
        "No 2º nível o Cavaleiro do Corvo torna-se imune a efeitos de medo, sono e veneno. No 8º nível torna-se imune a doença, encantamento e dano não-letal."
      ],
      "tables": []
    },
    {
      "title": "Missão Dada É Missão Cumprida",
      "level": 3,
      "paragraphs": [
        "A partir do 3º nível, No início de cada dia o Cavaleiro pode gastar uma hora se preparando para realizar sua missão, se o fizer, pode escolher um dos benefícios abaixo para receber durante o dia. No 6º e no 9º desta classe você pode escolher um efeito adicional ao ativar esta habilidade.",
        "Inteligência, o Cavaleiro pode escolher uma perícia adicional, na qual passa a ser treinado durante o dia",
        "Reconhecimento, quando o Cavaleiro utiliza a habilidade “Olho Marcial” além das opções básicas do talento ele pode escolher descobrir Fraquezas, Imunidades ou PMs atuais da criatura.",
        "Infiltração, você recebe um bônus de +4 nos seus testes de perícia, este efeito se encerra no fim do dia ou até você executar 3 testes de perícia."
      ],
      "tables": []
    },
    {
      "title": "Atrás das Linhas Inimigas",
      "level": 3,
      "paragraphs": [
        "A partir do 4º nível, Habilidades como faro, percepção às cegas, sentido sísmico e mágias de adivinhação não te detectam mais automaticamente, porém você ainda pode ser detectado com um teste de Percepção oposto ao seu teste de Furtividade. Além disso, quando usar o talento “Olho do Caçador” pode escolher até 1 Criaturas por NdC que não tenham te percebido ainda e utilizar o talento contra todas simultaneamente (Faça 1 teste e compare a CD contra  cada criatura). Por fim, partir do 8º nível, quando utilizar o talento “Olho do Caçador” os bônus garantidos pelo talento são dobrados."
      ],
      "tables": []
    },
    {
      "title": "Ferramentas da Morte",
      "level": 3,
      "paragraphs": [
        "A partir do 5º nível, Voce e um aliado podem realizar um ataque coordenado. Escolha um aliado que você possa ver, ao invés de realizar seu ataque durante sua ação como normalmente faria, você pode ao invés disso realizar seus ataques durante a ação de seu aliado como se fosse seu próprio turno gastando ações normalmente, você não precisa realizar todos os seus ataques de uma única vez podendo coordenar os golpes com seu aliado, quando você utilizar esta habilidade, tanto você quanto seu aliado causam 1d4 adicional do mesmo tipo com todos os seus ataques durante a rodada. Por exemplo, ao usar essa habilidade o Cavaleiro com 6 de BBA poderia realizar um ataque durante a ação de seu aliado, permitir que seu aliado realize um ataque em então o Cavaleiro poderia dar um segundo ataque após a ação de seu aliado. Você pode alternativamente realizar Manobras no turno de seus aliados ao invés de realizar ataques."
      ],
      "tables": []
    },
    {
      "title": "Das Trevas",
      "level": 3,
      "paragraphs": [
        "A partir do 7º nível, quando o Corvo agarra uma criatura, a criatura não pode emitir qualquer som até se soltar. Além disso, se o Cavaleiro realizar um ataque desarmado corpo-a-corpo ou com uma arma leve contra a criatura até o fim de seu próximo turno a criatura é considerada como desprevenida para este ataque. Esta habilidade só pode ser usada contra criaturas até uma categoria de tamanho maior que o Corvo."
      ],
      "tables": []
    },
    {
      "title": "Trazemos a Luz",
      "level": 3,
      "paragraphs": [
        "No 10º nível, como ação de movimento o Cavaleiro, pode escolher uma criatura que possa ver como seu alvo primário por 1 hora, a criatura passa a ser considerada como desprevenida contra todos os ataques do Cavaleiro. Além disso, seus golpes podem ser acertos críticos e causar dano extra por ataques furtivos mesmo a criaturas que normalmente são imunes. Por fim, sua margem de ameaça e multiplicador de crítico aumenta em +3 contra o Alvo. Esta habilidade pode ser utilizada 3 vezes por dia, mas somente um alvo pode existir por vez."
      ],
      "tables": []
    }
  ],
  "classTalents": []
} satisfies ClassDetail;

~~~~
