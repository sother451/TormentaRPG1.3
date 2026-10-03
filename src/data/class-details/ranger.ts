import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "ranger",
  "name": "Ranger",
  "family": "Ranger",
  "sourceDocId": "1exOf7wvtprTATIDmAIiPf03PEuV-SXX_0-2CdAJ-VQE",
  "sourceTitle": "Ranger",
  "status": "complete",
  "editorialNotes": [],
  "basics": {
    "hitPoints": "um Ranger começa com 16 pontos de vida (+ Mod. de Con) e ganha 4 PV (+mod. Con) por nível seguinte.",
    "trainedSkills": "Conhecimento(Geografia) e outras 4 + mod. Inteligência.",
    "classSkills": "Adestrar Animais (Car), Atletismo (For), Cavalgar (Des), Conhecimento (Int), Cura (Sab), Furtividade (Des), Iniciativa (Des), Ofício (Int), Percepção (Sab), Sobrevivência (Sab).",
    "bonusTalents": "Usar Armaduras (leves, médias e pesadas), Usar Armas Simples, Usar Armas Marciais, Rastrear, Resistência Aprimorada (Fortitude, Reflexo)"
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
        "+1",
        "Lista de Presas, Sentidos Aguçados (+1)",
        "0,1º"
      ],
      [
        "2º",
        "+2",
        "Meditação",
        ""
      ],
      [
        "3º",
        "+3",
        "",
        ""
      ],
      [
        "4º",
        "+4",
        "Caminho do Caçador (+2)",
        "2º"
      ],
      [
        "5º",
        "+5",
        "Benção da Caça",
        ""
      ],
      [
        "6º",
        "+6",
        "Sentidos Aguçados (+2)",
        ""
      ],
      [
        "7º",
        "+7",
        "",
        "3º"
      ],
      [
        "8º",
        "+8",
        "Escola de Ranger",
        ""
      ],
      [
        "9º",
        "+9",
        "Técnicas de Ranger (1º Técnica)",
        ""
      ],
      [
        "10º",
        "+10",
        "Caminho do Caçador (+4)",
        "4º"
      ],
      [
        "11º",
        "+11",
        "",
        ""
      ],
      [
        "12º",
        "+12",
        "Sentidos Aguçados (+3)",
        ""
      ],
      [
        "13º",
        "+13",
        "Técnicas de Ranger (2º Técnica)",
        "5º"
      ],
      [
        "14º",
        "+14",
        "",
        ""
      ],
      [
        "15º",
        "+15",
        "Riscar as Presas",
        ""
      ],
      [
        "16º",
        "+16",
        "Caminho do Caçador (+6)",
        "6º"
      ],
      [
        "17º",
        "+17",
        "Técnicas de Ranger (3º Técnica)",
        ""
      ],
      [
        "18º",
        "+18",
        "",
        ""
      ],
      [
        "19º",
        "+19",
        "Troféu do Caçador",
        ""
      ],
      [
        "20º",
        "+20",
        "A Caça Selvagem, Sentidos Aguçados (+4)",
        ""
      ]
    ]
  },
  "sections": [
    {
      "title": "Lista de Presas",
      "level": 3,
      "paragraphs": [
        "Todo Ranger possui suas presas preferidas, que estudou com afinco e que deseja ter como troféus. No 1° nível ou no início de cada dia, você cria uma lista com 10 criaturas. Estes não são tipos de criaturas, mas espécies específicas, como trolls, dragões, grifos, etc. Contra qualquer uma dessas criaturas da lista, você aplica os bônus da sua classe (veja nas habilidades de classe abaixo). Uma vez que você tenha derrotado uma dessas criaturas em um combate, pode riscar o nome da criatura da sua lista e adicionar mais uma nova criatura. Seus bônus são aprimorados para criaturas que já derrotaram, e você recebe bônus contra as novas criaturas de sua lista."
      ],
      "tables": []
    },
    {
      "title": "Sentidos Aguçados",
      "level": 3,
      "paragraphs": [
        "Você recebe +1 nas jogadas de ataque, dano e testes de Percepção, Intuição e Sobrevivência contra criaturas da sua lista de presas. Este bônus aumenta para +2 no 6º Nível, +3 no 12º e finalmente +4 no 20º nível. Contra inimigos da sua lista que já tenham sido derrotados os bônus aumentam em +2."
      ],
      "tables": []
    },
    {
      "title": "Magias",
      "level": 3,
      "paragraphs": [
        "Tipo e níveis de magia: você pode lançar magias divinas de nível 0 (truques) e 1º nível. A cada três níveis de ranger seguintes, você pode lançar magias um nível acima: no 4º nível pode lançar magias de 2º nível, no 7º nível você pode lançar magias de 3º nível e assim por diante até o 16º nível, quando você pode lançar magias de 6º nível.",
        "Habilidade-chave: sua habilidade para lançar magias é Sabedoria.",
        "Magias Conhecidas: você conhece 4 magias Divinas de nível 0, e também um número de magias de 1º nível igual a 1 + seu modificador de Sabedoria. Cada vez que avançar de nível, você aprende duas novas magias de qualquer nível que possa lançar. Você não pode aprender magias com os descritores Invocação ou Necromancia.",
        "Pontos de Magia: você tem um número de pontos de magia (PM) igual a 1 + modificador de Sabedoria. Cada vez que avança de nível, recebe 2 PM.",
        "Preparação de Magia: você precisa preparar suas magias com antecedência. A cada dia deve estudar durante uma hora, e então escolher um número igual a Metade do Nível + MdC de magias para preparar. Essas magias podem ser conjuradas livremente durante o dia com os PMs do conjurador, podendo receber efeitos de talentos metamágicos e habilidades de classe."
      ],
      "tables": []
    },
    {
      "title": "Meditação",
      "level": 3,
      "paragraphs": [
        "Independentemente de sua raça, um Ranger é capaz de entrar em um estado de transe que acelera sua regeneração natural. Você precisa descansar apenas duas horas para ter todos os benefícios de um descanso completo."
      ],
      "tables": []
    },
    {
      "title": "Caminho do Caçador",
      "level": 3,
      "paragraphs": [
        "Você pode atravessar terrenos difíceis sem sofrer redução em seu deslocamento e atravessar terrenos naturais sem deixar marcas. A dificuldade para rastreá-lo aumenta em CD +10. Além disso, escolha entre Floresta, Montanha, Pântano, Planície, Tundra, Aquático ou Subterrâneo, Você recebe +2 em classe de armadura e testes de resistência quando estiver no tipo de terreno escolhido. No 10º e 16º Nível você escolhe um novo terreno e aumenta os bônus garantidos pela habilidade em +2. Por fim, gastando 1 semana em um ambiente diferente de suas escolhas, você pode substituir um ambiente escolhido anteriormente pela habilidade por um novo."
      ],
      "tables": []
    },
    {
      "title": "Benção da Caça",
      "level": 3,
      "paragraphs": [
        "No 5º nível, você deve fazer uma escolha entre um vínculo com a Natureza ou focar em suas presas.",
        "Se escolher um vínculo com a natureza você recebe um companheiro animal de 5º Nível, sempre que você sobe de nível o Companheiro também recebe um nível, Um Companheiro Animal recebe BBA 1/Nível além dos demais benefícios por passagem de nível exceto Talentos.",
        "Caso seu companheiro venha a morrer você pode invocá-lo novamente com um dia de trabalho (8 Horas) em um ambiente selvagem. No 15º nível, caso seu companheiro morra, você pode trazê-la de volta à vida como na magia ressurreição verdadeira após passar 1 hora em meditação, sem gastar PM ou componentes materiais.",
        "O Companheiro Animal age no turno do Ranger, compartilhando de sua rolagem de iniciativa.",
        "Se escolher focar em suas presas você passa a causar uma penalidade de -1 em todos os testes de criaturas na sua lista que possa ver, contra criaturas que você já tenha riscado de sua lista a penalidade aumenta para -2. Além disso sua margem de ameaça aumenta contra criaturas da sua lista aumenta em +1 e contra criaturas que já tenha riscado de sua lista este bônus aumenta para +2."
      ],
      "tables": []
    },
    {
      "title": "Escola de Ranger",
      "level": 3,
      "paragraphs": [
        "Existem 4 Escolas de combate de Ranger, no 8º nível você pode escolher uma das escolas e aprender seus ensinamentos.",
        "Escola do Lobo: a mais balanceada de todas, essa escola mescla o combate corporal com o uso de Magias. Duas vezes por dia, um Ranger usando armadura média ou leve é capaz de conjurar uma Magia como uma ação livre, sem provocar ataque de oportunidade, como parte de uma ataque. Caso a magia exija uma jogada de ataque para acertar um inimigo, você usa a mesma jogada de ataque da habilidade para o acerto dela.",
        "Escola do Gato: considerada atualmente uma escola “suja”, é usada pelos Rangers mais urbanos e focada em eliminar alvos com apenas um golpe. Um Ranger dessa escola usando apenas armaduras leves pode, duas vezes por dia, passar uma rodada inteira estudando os movimentos de um alvo. Se o Ranger acertar um ataque nesse alvo dentro das próximas duas rodadas, esse ataque será automaticamente um acerto crítico.",
        "Escola do Grifo: focada em aprimorar a conjuração defensiva de Magias. Um Ranger dessa escola, quando usa armadura média, não precisa fazer testes de conjuração por condições adversas. Além disso, duas vezes por dia, ele pode alterar a conjuração de uma das suas magias usando os talentos metamágicos Aumentar Magia, Ampliar Magia e Estender Magia.",
        "Escola do Urso: preferida por Rangers que gostam de caçar criaturas maiores e mais fortes, essa escola favorece a proteção. Sempre que um Ranger ursino estiver vestindo armadura pesada, ele recebe RD igual ao seu Mod. Sab.",
        "É possível alterar sua escola de Ranger passando uma semana treinando em um ambiente natural."
      ],
      "tables": []
    },
    {
      "title": "Técnicas de Ranger",
      "level": 3,
      "paragraphs": [
        "No 9º nível você pode escolher uma das técnicas abaixo e aprende a utiliza-lá, no 13º e 17º nível você pode escolher uma nova técnica para adicionar à lista.",
        "Movimento Rápido: seu deslocamento aumenta em +6m.",
        "Armadilhas: você aprende a preparar armadilhas usando materiais naturais, como galhos, cipós e espinhos. Construir uma armadilha leva dez minutos, e você pode preparar um número máximo de armadilhas por dia igual a 1 + modificador de Sabedoria. A armadilha afeta um quadrado de 3m de lado. A dificuldade para encontrá-la é CD 10 + MdN + Mod. Sab, mas somente criaturas com habilidade “Encontrar Armadilhas” podem tentar. A primeira criatura que entrar na área deve fazer um teste de Reflexos (CD 10 + MdN + Mod. Sab). Se falhar, sofre 6d6 + MdN + Mod. Sab pontos de dano de perfuração ou esmagamento (De acordo com o Ragner) ou fica imobilizada, à sua escolha. Uma criatura imobilizada pode escapar com um teste de Força ou Acrobacia (CD 30).",
        "Uso de Ervas: Você aprende a aplicar ervas que curam e desintoxicam. Esta habilidade cura qualquer dano de habilidade, remove qualquer veneno e doença em você ou qualquer aliado adjacente. Usar esta habilidade é uma ação padrão. Ela pode ser usada uma vez por dia.",
        "Alquimia Secreta: Você aprende a fazer poções e elixires de até 3º ciclo fabricando elas por 1/6 do valor delas (em vez de 1/3).",
        "Marca do Caçador: Você pode gastar uma ação de movimento para analisar uma criatura que consiga ver, enquanto seguir esta criatura você consegue se mover com seu deslocamento normal enquanto rastreia, sem sofrer penalidade no teste de Sobrevivência e recebe a habilidade Faro."
      ],
      "tables": []
    },
    {
      "title": "Riscar as Presas",
      "level": 3,
      "paragraphs": [
        "Uma vez por dia, como uma ação de movimento, você pode remover uma presa de sua lista e escrever uma nova em seu lugar. Você perde todos os bônus que tinha contra a presa que foi removida da lista e passa a ter os bônus contra a nova presa da lista."
      ],
      "tables": []
    },
    {
      "title": "Troféus do Caçador",
      "level": 3,
      "paragraphs": [
        "Você pode gastar um dia de trabalho para fazer um troféu baseado em uma de suas vítimas, contra o tipo de criatura na qual o troféu foi feito (animal, construto, espírito, humanoide, monstro ou morto-vivo), você recebe os seguintes benefícios:",
        "Você ignora a imunidade a medo da criatura, se a criatura já estiver riscada de sua lista, você recebe um bônus de +10 em testes de intimidação contra ela.",
        "Recebe RD e RE 5 contra efeitos da criatura, se criatura já estiver riscada de sua lista este bônus dobra.",
        "Se torna imune a efeitos de encantamento da criatura, se criatura já estiver riscada de sua lista também recebe imunidade à ilusão contra efeitos da criatura.",
        "Você só pode ter um Troféu por vez, para ter um novo Troféu você precisa descartar o anterior."
      ],
      "tables": []
    },
    {
      "title": "A Caça Selvagem",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Ranger, você nunca pode ter mais de um dos talentos de 20º nível da classe."
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
        "Arma Natural: Possui dois ataques com arma natural que causa dano de forma equivalente a uma espada curta própria para o seu tamanho (1d6 para criaturas Médias).",
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
        "Armadura, RD igual a 1 + Mod. Sab. do Ranger.",
        "Runas - O Companheiro Animal recebe o Mod. Sab do Ranger como bônus em sua CA.",
        "Garras e Presas, O Companheiro Animal recebe metade do Mod. Sab do Ranger como bônus em suas JdA e JdD.",
        "Brutalidade, As Armas Naturais do Companheiro passam a causar dano como uma Espada Longa para seu tamanho (1d8 para criaturas Médias) ao invés de Adagas.",
        "Veneno, Uma criatura atingida por seu ataque natural deve fazer um teste de Fortitude (CD 10 + MdN + Mod. Sab. do Ranger). Se falhar, sofre mais 2d12 pontos de dano. No 8º e 16º nível o dano aumenta em 2d12. Uma Criatura imune a venenos também é imune a esta habilidade.",
        "Inseparáveis,  Enquanto o Companheiro e o Ranger estão adjacentes ao mesmo inimigo, vocês são considerados como flanqueando a criatura independente de suas posições atuais.",
        "Sagaz, O companheiro recebe um bônus de +4 para uma manobra de combate escolhida.",
        "Instinto, O companheiro recebe faro, visão na penumbra e +4 em testes de Percepção.",
        "Vôo, O companheiro recebe Vôo 12 Metros.",
        "Corrida, O Deslocamento do Companheiro aumenta para 18 Metros.",
        "Teia, O Companheiro pode lançar uma teia em uma criatura a até 18m como uma ação padrão. Faça um ataque à distância. Se acertar, a vítima fica imobilizada. Ela pode escapar com uma ação completa e um teste bem-sucedido de Força ou Acrobacia (CD 10 + MdN + Mod. Sab. do Ranger).",
        "Monstruosidade, um dos atributos físicos do companheiro (Força, Destreza ou Constituição) aumenta em +4. Quando o Companheiro atinge o 8 nível o bônus aumenta em +2 para +6 e novamente no 16º para um total de +8.",
        "Astúcia, um dos atributos mentais do companheiro (Inteligência, Sabedoria ou Carisma) aumenta em +4. Quando o Companheiro atinge o 8 nível o bônus aumenta em +2 para +6 e novamente no 16º para um total de +8. Um Companheiro com esta habilidade pode utilizar de Armas Simples.",
        "Crescimento, Seu companheiro aumenta ou diminui uma categoria de tamanho."
      ],
      "tables": []
    }
  ],
  "classTalents": [
    {
      "id": "talento-provisao",
      "name": "Provisão",
      "prerequisite": "4º Nível de Ranger",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Se você estiver em um terreno beneficiado pela habilidade “Caminho do Caçador” , você recebe Cura Acelerada 3, no 8, 12, 16 e 20º Nível este valor aumenta em 3."
      ]
    },
    {
      "id": "talento-lista-de-vitimas",
      "name": "Lista de Vítimas",
      "prerequisite": "4º Nível de Ranger",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Matar um inimigo da sua Lista de Presas restaura seus PVs igual a duas vezes o nível da criatura"
      ]
    },
    {
      "id": "talento-resistencia-natural",
      "name": "Resistência Natural",
      "prerequisite": "4º Nível de Ranger",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Enquanto enfrentar um inimigo da sua Lista de Presas escolha um dos seguintes efeitos que o estejam afetando entre Abalado, Apavorado, Cego, Confuso, Enredado, Fatigado, Ofuscado, Pasmo ou Surdo, uma vez por dia você pode remover um destes efeitos de si mesmo como uma reação. No 12º Nível pode escolher dois efeitos e no 20º se liberta de todos os efeitos da lista que o estiverem afetando. Você pode pode ativar esta habilidade mesmo que suas condições não permitam."
      ]
    },
    {
      "id": "talento-revisar-recursos",
      "name": "Revisar Recursos",
      "prerequisite": "8º Nível de Ranger",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Se você estiver em um terreno beneficiado pela habilidade “Caminho do Caçador”, o custo para conjurar magias reduz em 1."
      ]
    },
    {
      "id": "talento-aprendizado-dos-cacadores",
      "name": "Aprendizado dos Caçadores",
      "prerequisite": "8º Nível de Ranger",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Você pode escolher uma segunda escola de Ranger através da habilidade “Escola de Ranger”"
      ]
    },
    {
      "id": "talento-tocado-pela-caca",
      "name": "Tocado pela Caça",
      "prerequisite": "8º Nível de Ranger",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "A habilidade “Benção da Caça” sofre as seguintes mudanças:",
        "Se você escolheu um vínculo com a natureza, você pode escolher duas habilidades extras para seu companheiro animal.",
        "Se escolheu focar em suas presas, Seus ataques ignoram a cobertura e camuflagem (exceto cobertura ou camuflagem totais) de criaturas na sua lista."
      ]
    },
    {
      "id": "talento-conjurador-selvagem",
      "name": "Conjurador Selvagem",
      "prerequisite": "12º Nível de Ranger",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Contra inimigos na sua Lista de Presas o dano de suas magias aumenta em 2d6. Contra inimigos da sua lista que já tenham sido derrotados os bônus aumentam em +2d6."
      ]
    },
    {
      "id": "talento-temido",
      "name": "Temido",
      "prerequisite": "12º Nível de Ranger",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "A margem de ameaça de seus ataques aumenta em +1 somente contra inimigos da sua Lista de Presas. Contra inimigos da sua lista que já tenham sido derrotados seu multiplicador de crítico também aumenta em +1."
      ]
    },
    {
      "id": "talento-mordida-do-mangusto",
      "name": "Mordida do Mangusto",
      "prerequisite": "12º Nível de Ranger",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Seu primeiro ataque no combate que acertar uma criatura em sua lista de presas causa 1d8 de dano adicional. No início de cada turno a criatura recebe novamente este 1d8 de dano até o fim do combate ou até que gaste uma ação completa para fazer um teste de Fortitude CD 10 + MdN + Mod. Sab. para parar o efeito."
      ]
    },
    {
      "id": "talento-guia-das-matas",
      "name": "Guia das Matas",
      "prerequisite": "16º Nível de Ranger",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Aliados a até 18 Metros de você podem atravessar terrenos difíceis sem sofrer redução em seu deslocamento e atravessar terrenos naturais sem deixar marcas. A dificuldade para rastreá-los aumenta em CD +10."
      ]
    },
    {
      "id": "talento-grupo-de-caca",
      "name": "Grupo de Caça",
      "prerequisite": "16º Nível de Ranger",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Você estende os efeitos da habilidade “Sentidos Aguçados” a aliados até 18 metros como se eles fossem Rangers de 1º nível, para todos os propósitos estes aliados usam sua Lista de Presas como se fossem as próprias."
      ]
    },
    {
      "id": "talento-meditacao-em-grupo",
      "name": "Meditação em Grupo",
      "prerequisite": "16º Nível de Ranger",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Você e seus aliados podem realizar uma meditação em grupo, uma vez por dia, escolha um número de aliados igual ao Mod Sab, eles recebem os benefícios da habilidade “Meditação” durante este dia."
      ]
    },
    {
      "id": "talento-forma-de-sangue",
      "name": "Forma de Sangue",
      "prerequisite": "20º Nível de Ranger",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você alcança o ápice do Caçador, convocando a vontade de seus ancestrais para alcançar novos patamares. Uma vez por dia como uma ação de movimento você pode ativar esta habilidade recebendo os seguintes efeitos por 1 minuto:",
        "Todas as criaturas em combate passam a ser consideradas como riscadas em sua Lista de Presas, mesmo que não estejam em sua lista ainda, mata-las em combate faz com que elas sejam colocadas e riscadas de sua lista imediatamente, novamente, mesmo que não estejam em sua lista",
        "Você recebe +8 em For, Des e Con",
        "Seu deslocamento aumenta em 6m",
        "Recebe RE 20",
        "Recebe imunidade a atordoamento, dano de habilidade, dano não-letal, doenças, encantamento, fadiga, paralisia, necromancia, sono e veneno",
        "Todos os seus ataques recebem o bônus do encantamento “Anti-Criatura (Todas)” como se fossem um item mágico maior",
        "No fim desta habilidade você fica inconsciente por 1 round."
      ]
    },
    {
      "id": "talento-cacada-incansavel",
      "name": "Caçada Incansável",
      "prerequisite": "20º Nível de Ranger",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "“Caminho do Caçador” sofre as seguintes mudanças:",
        "Você pode atravessar terrenos difíceis sem sofrer redução em seu deslocamento e atravessar terrenos naturais sem deixar marcas. A dificuldade para rastreá-lo aumenta em CD +20. Você recebe +10 em classe de armadura e testes de resistência independente do Terreno que estiver (Pois todos os terrenos passam a ser considerados seu domínio), fica permanentemente sob o efeito das Magias Visão da Verdade e Caminhar nos Ventos. Estes contanto não são efeitos mágicos e não podem ser dissipados."
      ]
    },
    {
      "id": "talento-regras-de-combate",
      "name": "Regras de Combate",
      "prerequisite": "20º Nível de Ranger",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "A habilidade “Benção da Caça” sofre as seguintes mudanças:",
        "Se você escolheu um vínculo com a natureza, você estende todos os benefícios da habilidade “Sentidos Aguçados” e “Caminho do Caçador” para seu companheiro, ele utiliza sua Lista de Presas para as criaturas, além disso ele recebe os seguintes benefícios:",
        "Tamanho: aumenta ou diminui em uma categoria. Aplique os redutores relevantes às jogadas de ataque, classe de armadura e testes de furtividade. Aumente ou diminua o dano das armas naturais de acordo.",
        "Classe de armadura: +4.",
        "Resistências: RD 5, RE 5, resistência à magia +2.",
        "Habilidades: For +8, Des +2, Con +4, Int +4, Sab +2, Car +2.",
        "Perícias: ganha treinamento em Iniciativa e Percepção.",
        "Talentos: Recebe o talento Vitalidade.",
        "Se escolheu focar em suas presas, A penalidade que você concede às criaturas pela habilidade se tornam -4 ou -8 para criaturas riscadas, além disso o bônus em margem e multiplicador dobram. Por fim, você ignora a imunidade a críticas de criaturas que já riscou de sua lista."
      ]
    }
  ]
} satisfies ClassDetail;
