import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "barbaro",
  "name": "Bárbaro",
  "family": "Bárbaro",
  "sourceDocId": "1jzwazsVg9jARiJvt4Xdic2lpAPLoktt7PTn15e1kvJw",
  "sourceTitle": "Bárbaro",
  "status": "complete",
  "editorialNotes": [],
  "basics": {
    "hitPoints": "um Bárbaro começa com 24 pontos de vida (+ Mod. de Con) e ganha 6 PV (+ Mod. Con) por nível seguinte.",
    "trainedSkills": "Conhecimento (Natureza) e outras 4 + mod. Inteligência. (Mínimo 4)",
    "classSkills": "Adestrar Animais (Car), Atletismo (For), Cavalgar (Des), Iniciativa (Des), Intimidação (Car), Ofício (Int), Percepção (Sab), Sobrevivência (Sab).",
    "bonusTalents": "Usar Armaduras (leves e médias), Usar Armas (simples e marciais), Usar Escudos, Resistência Aprimorada (Fortitude)."
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
        "Fúria 1/dia, Movimento Rápido 1,5m"
      ],
      [
        "2º",
        "+2",
        "Esquiva Sobrenatural"
      ],
      [
        "3º",
        "+3",
        "Instinto Selvagem+1, Gritos de Poder"
      ],
      [
        "4º",
        "+4",
        "Fúria 2/dia"
      ],
      [
        "5º",
        "+5",
        "Esquiva Sobrenatural Aprimorada, Movimento Rápido 3m"
      ],
      [
        "6º",
        "+6",
        "Pele de Aço, Gritos de Poder"
      ],
      [
        "7º",
        "+7",
        ""
      ],
      [
        "8º",
        "+8",
        "Fúria 3/dia"
      ],
      [
        "9º",
        "+9",
        "Instinto Selvagem +2, Gritos de Poder"
      ],
      [
        "10º",
        "+10",
        "Movimento Rápido 4,5m"
      ],
      [
        "11º",
        "+11",
        "Fúria Maior"
      ],
      [
        "12º",
        "+12",
        "Fúria 4/dia, Gritos de Poder"
      ],
      [
        "13º",
        "+13",
        ""
      ],
      [
        "14º",
        "+14",
        "Vontade Inabalável"
      ],
      [
        "15º",
        "+15",
        "Instinto Selvagem +3, Gritos de Poder, Movimento Rápido 6m"
      ],
      [
        "16º",
        "+16",
        "Fúria 5/dia"
      ],
      [
        "17º",
        "+17",
        "Fúria Incansável"
      ],
      [
        "18º",
        "+18",
        "Gritos de Poder"
      ],
      [
        "19º",
        "+19",
        ""
      ],
      [
        "20º",
        "+20",
        "Fúria 6/dia, Fúria Poderosa, Movimento Rápido 7,5m, Ápice"
      ]
    ]
  },
  "sections": [
    {
      "title": "Fúria",
      "level": 3,
      "paragraphs": [
        "Você pode invocar uma fúria selvagem, tornando-se temível por um curto período de tempo. Quando você usa essa habilidade, recebe +4 em Força e Constituição, mas sofre uma penalidade de –2 na classe de armadura. Além disso, não pode executar nenhuma ação que exige paciência ou concentração (como usar a perícia Furtividade ou lançar magias).",
        "Usar esta habilidade é uma ação livre e dura um número de rodadas igual a 3 + seu modificador de Constituição (mas você pode terminá-la antes, se quiser).",
        "Quando a fúria termina, você fica fatigado durante um minuto. Um bárbaro só pode entrar em fúria uma vez por encontro.",
        "No 1º nível ele pode usar sua fúria uma vez por dia. No 4º nível, e a cada 4 níveis seguintes, recebe uma utilização diária adicional (máximo 6 vezes por dia no 20º nível)."
      ],
      "tables": []
    },
    {
      "title": "Movimento Rápido",
      "level": 3,
      "paragraphs": [
        "Seu deslocamento aumenta em +1,5m. No 5º, 10º, 15° e 20° Nível ela aumenta novamente em +1,5m."
      ],
      "tables": []
    },
    {
      "title": "Esquiva Sobrenatural",
      "level": 3,
      "paragraphs": [
        "No 2º nível, seus instintos ficam tão apurados que você consegue reagir ao perigo antes que seus sentidos percebam. Você nunca fica desprevenido. Caso você já tenha recebido esquiva sobrenatural de outra classe, você recebe esquiva sobrenatural aprimorada."
      ],
      "tables": []
    },
    {
      "title": "Instinto Selvagem",
      "level": 3,
      "paragraphs": [
        "No 3º nível, você recebe +1 em testes de Iniciativa, Reflexos e Vontade. A cada seis níveis seguintes, esse bônus aumenta em +1."
      ],
      "tables": []
    },
    {
      "title": "Gritos de Poder",
      "level": 3,
      "paragraphs": [
        "No 3. nível e a cada 3 níveis seguintes, Você recebe dois gritos de poder da lista a partir da sessão Gritos de Poder. Você só pode usar um grito quando estiver em fúria, e cada grito consome certa quantidade de rodadas da duração da sua habilidade fúria. Usar um grito é uma ação livre mas só pode ser feito uma vez por rodada, os efeitos que não são instantâneos terminam quando a fúria termina. A CD dos testes de resistência contra os gritos de poder é 10 + MdN + mod. Con."
      ],
      "tables": []
    },
    {
      "title": "Esquiva Sobrenatural Aprimorada",
      "level": 3,
      "paragraphs": [
        "A partir do 5º nível, você consegue lutar contra diversos inimigos como se fossem apenas um. Você não pode ser flanqueado."
      ],
      "tables": []
    },
    {
      "title": "Pele de Aço",
      "level": 3,
      "paragraphs": [
        "A partir do 6º nível, o Bárbaro recebe RD e RE(Todas) igual o seu modificador de Constituição.",
        "Esta RD só pode ser vencida por Aço-rubi. Esta habilidade só funciona se você não estiver usando qualquer tipo de armadura."
      ],
      "tables": []
    },
    {
      "title": "Fúria Maior",
      "level": 3,
      "paragraphs": [
        "No 11º nível, o bônus fornecido pela fúria aumenta para +6 de Força e Constituição e sua duração aumenta para 5 + seu modificador de Constituição."
      ],
      "tables": []
    },
    {
      "title": "Vontade Inabalável",
      "level": 3,
      "paragraphs": [
        "No 14º nível, você se torna imune a medo e encantamento."
      ],
      "tables": []
    },
    {
      "title": "Fúria Incansável",
      "level": 3,
      "paragraphs": [
        "A partir do 17º nível, você não fica mais fatigado quando sua fúria termina e pode usá-la múltiplas vezes no mesmo encontro."
      ],
      "tables": []
    },
    {
      "title": "Fúria Poderosa",
      "level": 3,
      "paragraphs": [
        "No 20º, o bônus fornecido pela fúria aumenta para +8 de Força e Constituição e sua duração aumenta para 10 + seu modificador de Constituição."
      ],
      "tables": []
    },
    {
      "title": "Ápice",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Bárbaro, você nunca pode ter mais de um dos talentos de 20º nível da classe."
      ],
      "tables": []
    },
    {
      "title": "Gritos de Poder",
      "level": 1,
      "paragraphs": [],
      "tables": []
    },
    {
      "title": "Alcançar os Céus:",
      "level": 4,
      "paragraphs": [
        "Custo: 1 Rodada",
        "O bárbaro recebe um bônus de +8 em seus testes de Atletismo."
      ],
      "tables": []
    },
    {
      "title": "Alerta de Perigo",
      "level": 4,
      "paragraphs": [
        "Custo: 2 Rodadas",
        "O bárbaro usa este grito para alertar os seus aliados. Todos os aliados em um raio de 5km ficam cientes de que há perigo na localização aproximada do bárbaro."
      ],
      "tables": []
    },
    {
      "title": "Amuleto",
      "level": 4,
      "paragraphs": [
        "Custo: 1 Rodada",
        "Este grito protege o corpo contra magias. O bárbaro recebe resistência à magia +2."
      ],
      "tables": []
    },
    {
      "title": "Berro Doloroso",
      "level": 4,
      "paragraphs": [
        "Custo: 4 Rodadas",
        "Este grito causa 4d6+MdN+Mod. Con pontos de dano sônico em um cone de 9m, criaturas na área podem realizar um teste de Fortitude para reduzir o dano à metade."
      ],
      "tables": []
    },
    {
      "title": "Chefe de Guerra",
      "level": 4,
      "paragraphs": [
        "Custo: 2 Rodada",
        "Todos os aliados do bárbaro, em um raio de 9m recebem um bônus de +1 em todas as jogadas de ataque e 5 + Mod. Con PVs temporário."
      ],
      "tables": []
    },
    {
      "title": "Cicatrizar",
      "level": 4,
      "paragraphs": [
        "Custo: 2 Rodadas",
        "O bárbaro recebe cura acelerada 5."
      ],
      "tables": []
    },
    {
      "title": "Coordenar",
      "level": 4,
      "paragraphs": [
        "Custo: 2 Rodadas",
        "Todos os aliados do bárbaro em um raio de 9m recebem +4 em testes de Acrobacia, Atletismo, Cavalgar e Intimidação."
      ],
      "tables": []
    },
    {
      "title": "Desdém",
      "level": 4,
      "paragraphs": [
        "Custo: 4 Rodadas",
        "O bárbaro pode usar este grito quando for atingido por um ataque como reação, desde que não seja um acerto crítico. O bárbaro então ignora o dano recebido."
      ],
      "tables": []
    },
    {
      "title": "Dilacerar",
      "level": 4,
      "paragraphs": [
        "Custo: 2 Rodadas",
        "O bárbaro usa este grito quando acertar ataques com suas armas principal e secundária na mesma rodada, contra o mesmo oponente. Ele então causa dano adicional contra o alvo, igual ao dano da arma secundária."
      ],
      "tables": []
    },
    {
      "title": "Estouro de Manada",
      "level": 4,
      "paragraphs": [
        "Custo: 2 Rodadas",
        "Todos os aliados do bárbaro em um raio de 9m recebem +3m em seu deslocamento."
      ],
      "tables": []
    },
    {
      "title": "Finalizar",
      "level": 4,
      "paragraphs": [
        "Custo: 2 Rodadas",
        "O próximo ataque do bárbaro tem sua margem de ameaça aumentada em 2."
      ],
      "tables": []
    },
    {
      "title": "Morte Vinda dos Céus",
      "level": 4,
      "paragraphs": [
        "Custo: 1 Rodada",
        "Quando fizer uma investida, você pode saltar em direção a seu inimigo. Isso significa que você ignora terreno difícil e pode fazer a investida mesmo que não haja uma linha reta pelo solo (desde que nenhum dos obstáculos seja muito alto, segundo a decisão do mestre)."
      ],
      "tables": []
    },
    {
      "title": "Imposição",
      "level": 4,
      "paragraphs": [
        "Custo: 2 Rodadas",
        "Todas as criaturas adjacentes ao bárbaro devem ser bem-sucedidas em um teste de Vontade do Bárbaro ou ficarão fatigadas."
      ],
      "tables": []
    },
    {
      "title": "Quebrar",
      "level": 4,
      "paragraphs": [
        "Custo: 1 Rodada",
        "O bárbaro recebe um bônus de +8 em testes de Força ou jogadas de ataque para destruir objetos inanimados."
      ],
      "tables": []
    },
    {
      "title": "Sanguinolência",
      "level": 4,
      "paragraphs": [
        "Custo: 3 Rodadas",
        "O bárbaro usa este grito quando faz um acerto crítico com uma arma. O multiplicador de dano deste ataque é então aumentado em 1."
      ],
      "tables": []
    },
    {
      "title": "Súplica de Proteção",
      "level": 4,
      "paragraphs": [
        "Custo: 3 Rodadas",
        "O bárbaro recebe um bônus de +4 em CA."
      ],
      "tables": []
    },
    {
      "title": "Uivo dos Mortos",
      "level": 4,
      "paragraphs": [
        "Custo: 2 Rodadas",
        "Todas as criaturas em um raio de 6m devem ser bem-sucedidas em um teste de Vontade do Bárbaro ou ficarão abaladas."
      ],
      "tables": []
    },
    {
      "title": "Urro da Vida",
      "level": 4,
      "paragraphs": [
        "Custo: 1 Rodadas",
        "O bárbaro recebe 10 + Mod. Con PVs temporários."
      ],
      "tables": []
    },
    {
      "title": "Vingança",
      "level": 4,
      "paragraphs": [
        "Custo: 4 Rodadas",
        "O bárbaro usa este grito quando é acertado por um ataque corpo-a-corpo. Ele então tem direito a fazer um ataque corpo-a-corpo imediato como reação contra o inimigo que o acertou."
      ],
      "tables": []
    }
  ],
  "classTalents": [
    {
      "id": "talento-regeneracao-raivosa",
      "name": "Regeneração Raivosa",
      "prerequisite": "4º Nível de Bárbaro",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "O bárbaro recebe cura acelerada 5 enquanto estiver em Fúria, este bônus aumenta para 10 e 20 no 12º e 20º Nível de Bárbaro. Diferente de outros bônus, este talento se acumula com qualquer fonte de Cura Acelerada que o Bárbaro receba por esta classe."
      ]
    },
    {
      "id": "talento-imparavel",
      "name": "Imparável",
      "prerequisite": "4º Nível de Bárbaro",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Uma vez por dia enquanto estiver em fúria o Bárbaro pode se livrar de um dos seguintes efeitos que o estejam afetando Abalado, Apavorado, Atordoado, Cego, Confuso, Enjoado, Enredado, Fascinado, Ofuscado, Paralisado ou Pasmo ou Surdo. Fazê-lo é uma reação e o Bárbaro pode ativar esta habilidade mesmo que suas condições não permitam. No 12º Nível ele pode escolher dois efeitos e no 20º se liberta de todos os efeitos da lista que o estiverem afetando."
      ]
    },
    {
      "id": "talento-sede-de-sangue",
      "name": "Sede de Sangue",
      "prerequisite": "4º Nível de Bárbaro",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Enquanto estiver em Fúria sempre que você reduzir um inimigo a 0 ou menos pontos de vida recupera pontos de vida igual a metade do dano que derrubou a criatura."
      ]
    },
    {
      "id": "talento-voracidade",
      "name": "Voracidade",
      "prerequisite": "8º Nível de Bárbaro",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Quando voce estiver Combatendo com Duas Armas seu deslocamento aumenta em +6m e o dano de suas armas secundárias aumentam em uma categoria de tamanho."
      ]
    },
    {
      "id": "talento-mao-dos-titas",
      "name": "Mão dos Titãs",
      "prerequisite": "8º Nível de Bárbaro",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Quando estiver Combatendo com Duas Mãos e você realizar um acerto crítico aumenta a duração de sua Fúria em uma rodada. Caso não esteja em Fúria e realize um crítico, recebe uma Fúria de 1 Rodada mas não fica fatigado ao fim desta."
      ]
    },
    {
      "id": "talento-alma-de-bronze",
      "name": "Alma de Bronze",
      "prerequisite": "8º Nível de Bárbaro",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "A habilidade Pele de Aço passa a funcionar com Armaduras Médias e Leves."
      ]
    },
    {
      "id": "talento-transe-de-batalha",
      "name": "Transe de Batalha",
      "prerequisite": "12º Nível de Bárbaro",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Quando entrar em Fúria declare uma criatura que possa ver, sempre que realizar um Ataque Corpo a Corpo contra aquela criatura recebe um bônus cumulativo de +1 em jogadas de Ataque e Dano até um máximo de +4. Se durante sua fúria você atacar uma criatura que não a escolhida perde seus bônus além de receber uma penalidade -2 em jogadas de ataque e dano. A habilidade acaba junto de sua fúria ou se a criatura morrer."
      ]
    },
    {
      "id": "talento-massacrar",
      "name": "Massacrar",
      "prerequisite": "12º Nível de Bárbaro",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Quando causa dano com uma arma corpo a corpo, você pode rolar novamente qualquer resultado 1 das rolagens de dano da arma."
      ]
    },
    {
      "id": "talento-frenesi",
      "name": "Frenesi",
      "prerequisite": "12º Nível de Bárbaro",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Sua margem de ameaça e seu multiplicador de crítico com ataques corpo a corpo aumenta em +1."
      ]
    },
    {
      "id": "talento-banner-do-conquistador",
      "name": "Banner do Conquistador",
      "prerequisite": "16º Nível de Bárbaro",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Com uma ação padrão você finca o banner de sua tribo ao chão, aumentando o deslocamento de todos os seus aliados em +3m, cumulativo com outros bônus desta classe. Além disso, a Dano de magias de seus aliados aumenta em 1 dado. Os benefícios do Banner duram 1+Mod. Con rodadas e ele só pode ser utilizado uma vez por dia."
      ]
    },
    {
      "id": "talento-brado-de-batalha",
      "name": "Brado de Batalha",
      "prerequisite": "16º Nível de Bárbaro",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Com uma ação padrão você pode escolher até 1 + Mod. Con aliados você garante a eles o benefício de Pele de Aço por 3 rodadas. Esta habilidade pode ser utilizada uma vez por dia e eles utilizam o seu Mod. Con. para calcular os bônus da habilidade."
      ]
    },
    {
      "id": "talento-liderar-o-bando",
      "name": "Liderar o Bando",
      "prerequisite": "16º Nível de Bárbaro",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Com uma ação padrão você pode escolher até 1 + Mod. Con aliados você garante a eles o benefício de Fúria como se eles fossem bárbaros de 1º nível. Esta habilidade pode ser utilizada uma vez por dia e eles utilizam o seu Mod. Con. para calcular a duração de suas fúrias."
      ]
    },
    {
      "id": "talento-gritar-aos-ceus",
      "name": "Gritar aos Céus",
      "prerequisite": "20º Nível de Bárbaro",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Seus gritos de poder não consomem mais a duração de sua fúria."
      ]
    },
    {
      "id": "talento-superar-limites",
      "name": "Superar Limites",
      "prerequisite": "20º Nível de Bárbaro",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "O Bônus de sua Fúria aumenta para +16 de For. e Con. mas sua duração é reduzida para 1+Mod. Con."
      ]
    },
    {
      "id": "talento-controle-de-raiva",
      "name": "Controle de Raiva",
      "prerequisite": "20º Nível de Bárbaro",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você adiciona 4 usos diários a sua habilidade Fúria, enquanto está em fúria, você não fica inconsciente por estar com 0 ou menos pontos de vida e só morre se chegar em um valor negativo igual à duas vezes seus PV máximos."
      ]
    }
  ]
} satisfies ClassDetail;
