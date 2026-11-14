# Classes detalhadas — Parte 1


---

# Classe: ranger

**Fonte:** `src/data/class-details/ranger.ts`

~~~~typescript
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

~~~~


---

# Classe: cavaleiro

**Fonte:** `src/data/class-details/cavaleiro.ts`

~~~~typescript
import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "cavaleiro",
  "name": "Cavaleiro",
  "family": "Cavaleiro",
  "sourceDocId": "1vdc4RbmB5ph19of-9Y-XNwLE01lovYyai3SrpvJNg7E",
  "sourceTitle": "Cavaleiro / Nobre / Vassalo",
  "status": "complete",
  "editorialNotes": [],
  "basics": {
    "hitPoints": "um Cavaleiro começa com 16 pontos de vida (+ Mod. de Con) e ganha 4 PV (+mod. Con) por nível seguinte.",
    "trainedSkills": "Conhecimento(Nobreza) e outras 4 + mod. Inteligência.",
    "classSkills": "Adestrar Animais (Car), Atuação (Car), Cavalgar (Des), Conhecimento (Int), Diplomacia (Car), Enganação (Car), Iniciativa (Des), Intimidação (Car), Intuição (Sab), Obter Informação (Car) Ofício (Int), Percepção (Sab).",
    "bonusTalents": "Usar Armaduras (leves, médias, pesadas),Usar Armas Simples, Usar Armas Marciais, Usar Escudos, Resistência Aprimorada (Fortitude, Vontade)."
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
        "Orgulho do Cavaleiro"
      ],
      [
        "2º",
        "+1",
        "Lado a Lado"
      ],
      [
        "3º",
        "+2",
        "Debaixo da mesma Bandeira, Orgulho do Cavaleiro"
      ],
      [
        "4º",
        "+3",
        "Sem Trégua"
      ],
      [
        "5º",
        "+3",
        "Montaria Real, Orgulho do Cavaleiro"
      ],
      [
        "6º",
        "+4",
        "Autoconfiança"
      ],
      [
        "7º",
        "+5",
        "Orgulho do Cavaleiro"
      ],
      [
        "8º",
        "+6",
        "Entre a Cruz e a Espada"
      ],
      [
        "9º",
        "+6",
        "Orgulho do Cavaleiro"
      ],
      [
        "10º",
        "+7",
        "Em Formação, Manobra Esmagadora"
      ],
      [
        "11º",
        "+8",
        "Orgulho do Cavaleiro, Sem Trégua"
      ],
      [
        "12º",
        "+9",
        "Cavalo toma Peão, Entre a Cruz e a Espada"
      ],
      [
        "13º",
        "+9",
        "Orgulho do Cavaleiro"
      ],
      [
        "14º",
        "+10",
        "Alta ordem"
      ],
      [
        "15º",
        "+11",
        "Orgulho do Cavaleiro"
      ],
      [
        "16º",
        "+12",
        "Entre a Cruz e a Espada"
      ],
      [
        "17º",
        "+12",
        "Orgulho do Cavaleiro"
      ],
      [
        "18º",
        "+13",
        "Sem Trégua"
      ],
      [
        "19º",
        "+14",
        "Orgulho do Cavaleiro"
      ],
      [
        "20º",
        "+15",
        "Entre a Cruz e a Espada, Seu Imperador Retornou"
      ]
    ]
  },
  "sections": [
    {
      "title": "Orgulho do Cavaleiro",
      "level": 3,
      "paragraphs": [
        "Você começa com um dos efeitos da lista abaixo, à sua escolha. No 3º nível, e a cada dois níveis seguintes, aprende um novo efeito. Todos os efeitos têm alcance de 9m e duração de 1 minuto, a menos que sua descrição diga o contrário. Usar esta habilidade é uma ação padrão, e ela pode ser usada um número de vezes por dia igual à metade do seu nível + seu modificador de Carisma (Mínimo 1). Esta habilidade só afeta criaturas inteligentes (Int 3 ou mais) que possam vê-lo e ouvi-lo."
      ],
      "tables": []
    },
    {
      "title": "Lado a Lado",
      "level": 3,
      "paragraphs": [
        "No 2º Nível, enquanto você e um aliado estão adjacentes ao mesmo inimigo, vocês são considerados como flanqueando a criatura."
      ],
      "tables": []
    },
    {
      "title": "Debaixo da mesma Bandeira",
      "level": 3,
      "paragraphs": [
        "No 3º Nível, você recebe um Bônus em seus testes de iniciativa igual a quantidade de aliados no combate ou seu bônus de Carisma, o que for menor."
      ],
      "tables": []
    },
    {
      "title": "Sem Trégua",
      "level": 3,
      "paragraphs": [
        "No 4º Nível o bônus nas jogadas de ataque que você recebe por flanquear o inimigo aumenta para +4. Além disso, você e os aliados afetados causam +1d6 pontos de dano do mesmo tipo que suas armas com o primeiro ataque bem-sucedido na rodada. Este valor aumenta em +1d6 a cada 7 níveis."
      ],
      "tables": []
    },
    {
      "title": "Montaria Real",
      "level": 3,
      "paragraphs": [
        "No 5º nível, seus contatos e recursos lhe garantem um animal de confiança.Você recebe uma Montaria que cresce com você. Sempre que você subir de nível a montaria também recebe um nível, recebendo BBA 1/Nível e 4 PV,  além dos demais benefícios por passagem de nível exceto Talentos. Caso sua Montaria venha a morrer você pode conseguir uma nova com um dia de trabalho (8 Horas). No 10º nível, os PVs da sua montaria aumentam em um valor igual a metade dos PVs máximos do Cavaleiro. No 15º nível, caso sua montaria morra, seus contatos e recursos rapidamente lhe arrumam uma nova montaria sem custos dentro de 1 hora, contanto que você tenha acesso a civilização.",
        "A Montaria age no turno do Cavaleiro, compartilhando de sua rolagem de iniciativa, porém possui Ações próprias.",
        "Pv: uma Montaria começa com 20 (+ mod. Constituição) Pontos de Vida e ganha 4 PV (+ mod. Constituição) por nível seguinte.",
        "Deslocamento: 18 Metros.",
        "Perícias: A Montaria possui 2 + Mod. Int pericias treinadas, mas não pode escolher perícias baseadas em inteligência ou Carisma.",
        "Habilidades: For 18, Des 16, Con 16, Int 3, Sab 10, Car 3.",
        "Arma Natural: A montaria possui dois ataques com arma natural que causa dano de forma equivalente a uma Adaga própria para o seu tamanho (1d4 para criaturas Médias).",
        "Outras habilidades: A montaria possui couro, escamas ou carapaças que fornecem CA +2."
      ],
      "tables": []
    },
    {
      "title": "Autoconfiança",
      "level": 3,
      "paragraphs": [
        "No 6º Nível você recebe um bônus na CA igual ao seu nível nesta classe ou seu bônus de Carisma, o que for menor. Se você receber esta habilidade de outra classe, você soma o nível de ambas para calcular seus efeitos."
      ],
      "tables": []
    },
    {
      "title": "Entre a Cruz e a Espada",
      "level": 3,
      "paragraphs": [
        "No 8º Nível, Escolha entre se tornar um Lorde Guerreiro ou um Lorde Governante.",
        "Se escolher se tornar um Lorde Guerreiro passa a ter os pontos de vida de um Guerreiro de mesmo nível (recalcule retroativamente desde o 1º nível). No 12º Nível recebe um bônus em todos os testes de resistência igual a ¼ de seu nível nesta classe. No 16º você recebe RD 10 e torna-se imune a venenos e por fim, no 20º recebe 6 pontos de atributo para distribuir em habilidades físicas (Força, Destreza e Constituição).",
        "Se escolher ser um Lorde Governante pode repetir um número de testes de perícia por dia igual a seu bônus de Carisma +1, ficando com o melhor valor entre os dois rolados. No 12º Nível torna-se capaz de compreender e falar todos os idiomas, exceto idiomas extraplanares. No 16º Escolha uma magia divina de até 5º nível. Você pode lançar esta magia como se fosse um clérigo uma vez por dia sem gastar PMs e por fim, no 20º recebe 6 pontos de atributo para distribuir em habilidades mentais (Inteligência, Sabedoria e Carisma)."
      ],
      "tables": []
    },
    {
      "title": "Em Formação",
      "level": 3,
      "paragraphs": [
        "No 10º Nível, Enquanto possuir pelo menos 2 aliados adjacentes a si mesmo o Cavaleiro pode utilizar a habilidade “Orgulho” como uma Ação Livre ao invés de padrão mas nunca mais de uma vez por rodada"
      ],
      "tables": []
    },
    {
      "title": "Manobra Esmagadora",
      "level": 3,
      "paragraphs": [
        "No 10º Nível você recebe os bônus de Flanquear mesmo contra inimigos que normalmente seriam imunes."
      ],
      "tables": []
    },
    {
      "title": "Cavalo toma Peão",
      "level": 3,
      "paragraphs": [
        "No 12º Nível, enquanto estiver montado, tanto você quanto sua montaria dispõem de uma ação padrão e de movimento ao invés de dividir suas ações."
      ],
      "tables": []
    },
    {
      "title": "Alta Ordem",
      "level": 3,
      "paragraphs": [
        "No 14º Nível, Sua presença atrai seguidores de todos os cantos, você pode escolher 5 Aliados Diferentes de Rank Veterano para acompanhar você e seus companheiros. Uma vez em uma cidade ou local cuja sua influência se estende você pode escolher novos Aliados para substituir os atuais."
      ],
      "tables": []
    },
    {
      "title": "Seu Imperador Retornou",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Cavaleiro, você nunca pode ter mais de um dos talentos de 20º nível da classe."
      ],
      "tables": []
    },
    {
      "title": "Orgulho do Cavaleiro",
      "level": 1,
      "paragraphs": [],
      "tables": []
    },
    {
      "title": "Altivez",
      "level": 4,
      "paragraphs": [
        "Uma criatura à sua escolha deve fazer um teste de Vontade (CD 10 + MdN + Mod. Car). Se falhar, fica fascinada (não pode realizar ações e sofre -4 em testes de Percepção; uma ameaça óbvia anula a condição). Se for bem sucedida, fica imune a este efeito por um dia. No 12º nível esta habilidade passa a afetar todos os inimigos em sua área de alcance."
      ],
      "tables": []
    },
    {
      "title": "Duelo",
      "level": 4,
      "paragraphs": [
        "Escolha um inimigo. Você recebe um bônus de +1 nas jogadas de ataque e dano, mas só pode atacar o inimigo escolhido (se atacar outro, a habilidade termina imediatamente). No 6º, 12º e 18º Nível este valor aumenta em +1."
      ],
      "tables": []
    },
    {
      "title": "Integridade",
      "level": 4,
      "paragraphs": [
        "Escolha um inimigo. Você recebe um bônus de +1 na classe de armadura e nos testes de resistência enquanto aquele inimigo permanecer vivo no combate. No 6º, 12º e 18º Nível este valor aumenta em +1."
      ],
      "tables": []
    },
    {
      "title": "Opressão",
      "level": 4,
      "paragraphs": [
        "Uma criatura à sua escolha deve fazer um teste de Vontade (CD 10 + MdN + Mod. Car). Se falhar, fica abalada (-2 em jogadas de ataque e testes de habilidade, perícia e resistência). Se for bem sucedida, fica imune a este efeito por um dia. No 12º nível esta habilidade passa a afetar todas as criaturas em sua área de alcance."
      ],
      "tables": []
    },
    {
      "title": "Orgulho",
      "level": 4,
      "paragraphs": [
        "Todas as criaturas à sua escolha dentro do alcance devem fazer um teste de Vontade (CD 10 + MdN + Mod. Car). Aquelas que falharem devem obrigatoriamente atacá-lo (da maneira que quiserem) pela duração da habilidade."
      ],
      "tables": []
    },
    {
      "title": "Resolução",
      "level": 4,
      "paragraphs": [
        "Resolução é utilizada como uma reação mas apenas uma vez por dia por aliados. Você ou um aliado podem refazer um teste de resistência que tenham falhado, ficando com o segundo resultado. O segundo teste recebe um bônus de +4."
      ],
      "tables": []
    },
    {
      "title": "Confiança",
      "level": 4,
      "paragraphs": [
        "Aliados a até 6m de você recebem um bônus de +1 nas jogadas e dano, Se a qualquer momento um aliado sair do alcance, o benefício que ele recebe é anulado. No 8º e 16º Nível este valor aumenta em +1."
      ],
      "tables": []
    },
    {
      "title": "Glória",
      "level": 4,
      "paragraphs": [
        "Aliados a até 6m de você recebem um bônus de +1 na CA e testes de Resistência, Se a qualquer momento um aliado sair do alcance, o benefício que ele recebe é anulado. No 8º e 16º Nível este valor aumenta em +1."
      ],
      "tables": []
    },
    {
      "title": "Sangue Azul",
      "level": 4,
      "paragraphs": [
        "Você recupera 1d8+1 PVs. No 6º, 12º e 18º Nível este valor aumenta em 2d8+2."
      ],
      "tables": []
    },
    {
      "title": "Nobreza",
      "level": 4,
      "paragraphs": [
        "A próxima criatura que tentar machucá-lo (causar dano, através de um ataque, magia ou habilidade especial) deve antes fazer um teste de Vontade (CD 10 + MdN + Mod. Car). Se a criatura falhar, não conseguirá machucá-lo pelo próximo minuto. A criatura ainda pode fazer outras ações contra você, como agarrar ou derrubar, desde que não cause dano. Se você atacar a criatura, esta habilidade é anulada. Uma criatura bem sucedida, fica imune a este efeito por um dia."
      ],
      "tables": []
    }
  ],
  "classTalents": [
    {
      "id": "talento-coracao-de-cavaleiro",
      "name": "Coração de Cavaleiro",
      "prerequisite": "4º Nível de Cavaleiro",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Você se torna imune a efeitos de Medo e Fascinar."
      ]
    },
    {
      "id": "talento-vida-longa-ao-rei",
      "name": "Vida Longa ao Rei",
      "prerequisite": "4º Nível de Cavaleiro",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Uma vez por dia enquanto estiver adjacente a um aliado você pode se livrar de um dos seguintes efeitos que o estejam afetando Atordoado, Cego, Confuso, Enjoado, Enredado, Ofuscado, Paralisado ou Surdo. Fazê-lo é uma reação e você pode ativar esta habilidade mesmo que suas condições não permitam. No 12º Nível ele pode escolher dois efeitos e no 20º se liberta de todos os efeitos da lista que o estiverem afetando."
      ]
    },
    {
      "id": "talento-me-protejam",
      "name": "Me Protejam!",
      "prerequisite": "4º Nível de Cavaleiro",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Quando você sofrer dano que iria derrubá-lo em combate pode como reação redirecionar o dano que você receberia a um aliado que esteja adjacente a você. Você pode utilizar esta habilidade uma vez por dia. No 8º e 16º nível você recebe um uso adicional desta habilidade."
      ]
    },
    {
      "id": "talento-morte-montada",
      "name": "Morte Montada",
      "prerequisite": "8º Nível de Cavaleiro",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Enquanto em cima de sua Montaria todas as suas Armas Corpo-a-Corpo são tratadas como uma categoria de tamanho acima, além disso o Deslocamento de sua Montaria aumenta em 3 Metros."
      ]
    },
    {
      "id": "talento-costas-a-costas",
      "name": "Costas a Costas",
      "prerequisite": "8º Nível de Cavaleiro",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Enquanto possuir pelo menos 2 aliados adjacentes a si mesmo, o Cavaleiro e seus Aliados adjacentes não podem ser Flanqueados ou ficar Desprevenido."
      ]
    },
    {
      "id": "talento-comandar-o-fluxo",
      "name": "Comandar o Fluxo",
      "prerequisite": "8º Nível de Cavaleiro",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Quando um aliado errar um ataque ou falhar em um teste de perícia, você pode forçá-lo a repetir a rolagem, como uma reação. Você pode utilizar esta habilidade um número de vezes por dia igual ao seu modificador de Carisma."
      ]
    },
    {
      "id": "talento-assalto-da-cavalaria",
      "name": "Assalto da Cavalaria",
      "prerequisite": "12º Nível de Cavaleiro",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Os ataques Corpo-a-Corpo de sua Montaria aumentam em uma categoria de tamanho. Além disso, enquanto estiver montado nela você não pode ser derrubado de seu cavalo, apenas desmontar voluntariamente. (Isto não impede sua montaria de ser derrubada)"
      ]
    },
    {
      "id": "talento-lamina-da-guarda",
      "name": "Lâmina da Guarda",
      "prerequisite": "12º Nível de Cavaleiro",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Sua margem de ameaça e seu multiplicador de crítico com ataques Corpo-a-Corpo aumenta em +1."
      ]
    },
    {
      "id": "talento-capitao-do-reinado",
      "name": "Capitão do Reinado",
      "prerequisite": "12º Nível de Cavaleiro",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Enquanto possuir pelo menos 2 aliados adjacentes a si mesmo, o Cavaleiro recebe +3 em Jogadas de Ataque e Dano além de um bônus de +3 para realizar Manobras (Para um total de +6 para Manobras)."
      ]
    },
    {
      "id": "talento-liderar-pelo-exemplo",
      "name": "Liderar pelo Exemplo",
      "prerequisite": "16º Nível de Cavaleiro",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Quando um Aliado falhar em um teste de perícia, você pode como reação realizar o mesmo teste que ele, seu aliado passa a utilizar o seu resultado ao invés do resultado original. Você pode utilizar esta habilidade um número de vezes por dia igual ao seu modificador de Carisma."
      ]
    },
    {
      "id": "talento-campeao-equestre",
      "name": "Campeão Equestre",
      "prerequisite": "16º Nível de Cavaleiro",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Você recebe uma segunda “Montaria Real” idêntica a Original porém sem possuir seus equipamentos. Qualquer companheiro seu que utiliza esta montaria recebe os benefícios da habilidade \"Cavalo Toma Peão”."
      ]
    },
    {
      "id": "talento-grupo-de-apoio",
      "name": "Grupo de Apoio",
      "prerequisite": "16º Nível de Cavaleiro",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Seus companheiros utilizam seu modificador de Carisma ao invés de seus próprios para se beneficiar de Aliados, além disso sua habilidade “Alta Ordem“ lhe concede 1 Aliado Mestre e 5 Veteranos."
      ]
    },
    {
      "id": "talento-a-onda-do-imperador",
      "name": "A onda do Imperador",
      "prerequisite": "20º Nível de Cavaleiro",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Seu carisma aumenta em +4. Seja por seus feitos, conquistas, sorte ou até mesmo herança, você recebe um Feudo no valor de até 50.000 TO. Em questão de regras, um Feudo é um Domínio cujo regente é o Próprio Cavaleiro. Por fim você recebe o benefício de 12º nível não escolhido anteriormente pela habilidade “Entre a Cruz e a Espada”"
      ]
    },
    {
      "id": "talento-protecao-do-cavaleiro",
      "name": "Proteção do Cavaleiro",
      "prerequisite": "20º Nível de Cavaleiro",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você e sua montaria recebem imunidade a dano de habilidade, acertos críticos, golpes de misericórdia, efeitos de Dominação e Possessão, ficam permanentemente sob o efeito de velocidade e por fim sua montaria pode como reação, uma vez por dia sacrificar metade de seus pontos de vida Máximos para curar o Cavaleiro na mesma quantia."
      ]
    },
    {
      "id": "talento-formacao-inquebravel",
      "name": "Formação Inquebravel",
      "prerequisite": "20º Nível de Cavaleiro",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você pode escolher um número de aliados igual ao seu modificador de Carisma. O Cavaleiro e seus aliados então somam todos os seus pontos de vida no início do combate. O total de pontos de vida de todos passa a ser compartilhado, e nenhum membro da formação cai até que todo esse total acabe. Esta habilidade pode ser usada uma vez por dia."
      ]
    }
  ]
} satisfies ClassDetail;

~~~~


---

# Classe: monge

**Fonte:** `src/data/class-details/monge.ts`

~~~~typescript
import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "monge",
  "name": "Monge",
  "family": "Monge",
  "sourceDocId": "1uRJTc_LegkopV6gpYJ5n0fp_IA0pYN-Vzm7AGHPvPFc",
  "sourceTitle": "Monge",
  "status": "complete",
  "editorialNotes": [],
  "basics": {
    "hitPoints": "um Monge começa com 16 pontos de vida (+ Mod. de Con) e ganha 4 PV (+mod. Con) por nível seguinte.",
    "trainedSkills": "Conhecimento(Religião) e outras 4 + mod. Inteligência.",
    "classSkills": "Acrobacia (Des), Atletismo (For), Conhecimento (Int), Cura (Sab), Diplomacia (Car), Furtividade (Des), Iniciativa (Des), Intuição (Sab), Meditação (Sab), Ofício (Int), Percepção (Sab).",
    "bonusTalents": "Usar Armaduras (leves), Usar Armas Simples e Resistência Aprimorada (Fortitude, Vontade e Reflexos), Ataque Desarmado Aprimorado."
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
        "Ensinamentos do Monastério, Sentir o Chi"
      ],
      [
        "2º",
        "+2",
        "Andar nas Nuvens"
      ],
      [
        "3º",
        "+3",
        "Sexto Sentido"
      ],
      [
        "4º",
        "+4",
        "Foco Espiritual"
      ],
      [
        "5º",
        "+5",
        "Dano Desarmado (1d8)"
      ],
      [
        "6º",
        "+6",
        "Sétimo Sentido, Sentir o Chi"
      ],
      [
        "7º",
        "+7",
        "Integridade Corporal"
      ],
      [
        "8º",
        "+8",
        "Andar nas Nuvens, Foco Espiritual"
      ],
      [
        "9º",
        "+9",
        "Evasão"
      ],
      [
        "10º",
        "+10",
        "Dano Desarmado (1d10)"
      ],
      [
        "11º",
        "+11",
        "Corpo de Diamante, Sentir o Chi"
      ],
      [
        "12º",
        "+12",
        "Foco Espiritual"
      ],
      [
        "13º",
        "+13",
        "Meditação Guiada"
      ],
      [
        "14º",
        "+14",
        "Andar nas Nuvens"
      ],
      [
        "15º",
        "+15",
        "Dano Desarmado (1d12)"
      ],
      [
        "16º",
        "+16",
        "Foco Espiritual"
      ],
      [
        "17º",
        "+17",
        ""
      ],
      [
        "18º",
        "+18",
        "Força Interior"
      ],
      [
        "19º",
        "+19",
        ""
      ],
      [
        "20º",
        "+20",
        "Andar nas Nuvens, Dano Desarmado (2d8),Serenidade"
      ]
    ]
  },
  "sections": [
    {
      "title": "Ensinamentos do Monastério",
      "level": 3,
      "paragraphs": [
        "Você começa o dia com marcadores de chi igual a seu nível nesta classe. Este marcador representa sua energia vital concentrada e dura até o fim do dia. Estes Marcadores podem ser gastos para que o Monge ative seus ensinamentos ou habilidades, você conhece todos os ensinamentos da lista e não precisa prepará-los. Ativar um Ensinamento é uma ação livre mas pode ser feita apenas uma vez por rodada."
      ],
      "tables": []
    },
    {
      "title": "Sentir o Chi",
      "level": 3,
      "paragraphs": [
        "Com uma ação de movimento, você pode fazer um teste de Percepção com uma Penalidade de -10, você percebe a presença de qualquer criatura que esteja a até 18 metros de você e tenha Nível de Personagem ou Nível de Desafio inferior ao resultado de seu Teste. A partir do 6º Nível você pode aumentar a penalidade para -15 para também Detectar se as criaturas na área estão mortas, moribundas (com 0 ou menos PV), fracas (com menos de 25% de seus PV), razoáveis (entre 25 a 90% de seus PV) ou saudáveis (com mais de 90% de seus PV). Por fim, a partir do 11º Nível pode aumentar a penalidade para -20 e detectar se as criaturas estão sob o efeito de alguma condição (Pasmo, Lento, Atordoado, Etc…)."
      ],
      "tables": []
    },
    {
      "title": "Andar nas Nuvens",
      "level": 3,
      "paragraphs": [
        "No 2º nível, seu deslocamento aumenta em +3m e você recebe um bônus de +4 em testes de Atletismo e Acrobacia. No 8º nível, você se torna ainda mais rápido: seu deslocamento aumenta em +6m (total) e seus bônus em Atletismo e Acrobacia Aumenta para +8. Além disso, a partir do 8º nível, você pode se levantar com uma ação livre, em vez de uma ação de movimento. No 14° nível, seu deslocamento aumenta em +9m (total) de deslocamento e seus bônus em Atletismo e Acrobacia aumentam para +12. Por fim, no 20º nível, seu deslocamento aumenta em +12m (total) de deslocamento e seus bônus em em Atletismo e Acrobacia aumenta para +16."
      ],
      "tables": []
    },
    {
      "title": "Sexto Sentido",
      "level": 3,
      "paragraphs": [
        "A partir do 3º nível, você adiciona o seu modificador de Sabedoria ou seu Nível nesta classe à sua CA (O que for menor). Você perde esta habilidade se estiver usando uma armadura média, pesada ou um escudo."
      ],
      "tables": []
    },
    {
      "title": "Foco Espiritual",
      "level": 3,
      "paragraphs": [
        "A partir do 4º nível, escolha um Ensinamento do Monastério que você cumpra seus pré-requisitos, você reduz seu custo para usá-lo em 1, mínimo 0. No 8º, 12º e 16º nível você pode escolher outro Ensinamento. Você pode escolher o mesmo Ensinamento múltiplas vezes. Durante um Descanso Longo você pode trocar os ensinamentos escolhidos."
      ],
      "tables": []
    },
    {
      "title": "Dano Desarmado",
      "level": 3,
      "paragraphs": [
        "A partir do 5º nível, seu Dano desarmado aumenta para 1d8. A Cada 5 níveis este valor aumenta novamente se tornando, 1d10 no 10º Nível, 1d12 no 15º Nível e por fim 2d8 no 20º Nível."
      ],
      "tables": []
    },
    {
      "title": "Sétimo Sentido",
      "level": 3,
      "paragraphs": [
        "A partir do 6º nível, você adiciona o seu modificador de Sabedoria ou seu Nível nesta classe (O que for menor) à sua Iniciativa e Percepção. Você perde esta habilidade se estiver usando armadura média, pesada ou um escudo."
      ],
      "tables": []
    },
    {
      "title": "Integridade Corporal",
      "level": 3,
      "paragraphs": [
        "A partir do 7º nível, o monge pode se concentrar para curar seus ferimentos. Você pode curar um total de pontos de vida igual a seu bônus de Sabedoria (mínimo 1) vezes seu nível. Por exemplo, um monge de 10º nível com Sabedoria 16 (bônus de +3) pode curar até 30 pontos de vida. Usar esta habilidade é uma ação padrão, e ela pode ser usada uma vez por dia."
      ],
      "tables": []
    },
    {
      "title": "Evasão",
      "level": 3,
      "paragraphs": [
        "A partir do 9º nível, quando sofre um ataque que permite um teste de Reflexos para reduzir o dano à metade, você não sofre nenhum dano se for bem-sucedido. Você ainda sofre dano normal se falhar no teste de Reflexos. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver imobilizado, ou usando armadura média, pesada ou um escudo."
      ],
      "tables": []
    },
    {
      "title": "Corpo de Diamante",
      "level": 3,
      "paragraphs": [
        "A partir do 11º nível, você se torna imune a doenças, venenos e confusão."
      ],
      "tables": []
    },
    {
      "title": "Meditação Guiada",
      "level": 3,
      "paragraphs": [
        "A partir do 13º nível, você pode assumir um estado etéreo, como a magia forma etérea. Usar esta habilidade é uma ação completa. Você pode permanecer na forma etérea durante até um minuto por dia."
      ],
      "tables": []
    },
    {
      "title": "Força Interior",
      "level": 3,
      "paragraphs": [
        "A partir do 18º nível, depois de utilizar um Ensinamento do Monastério você recebe RE igual ao seu Mod. Sab. até o início de sua próxima rodada."
      ],
      "tables": []
    },
    {
      "title": "Serenidade",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Monge, você nunca pode ter mais de um dos talentos de 20º nível da classe."
      ],
      "tables": []
    },
    {
      "title": "Ensinamentos do Monastério",
      "level": 1,
      "paragraphs": [],
      "tables": []
    },
    {
      "title": "Investida do Touro",
      "level": 4,
      "paragraphs": [
        "Custo: 1 de Chi",
        "Seu próximo ataque desarmado nesta rodada que causar dano também lhe permite começar a manobra de derrubar como ação livre contra a criatura atingida."
      ],
      "tables": []
    },
    {
      "title": "Chute do Sol Nascente",
      "level": 4,
      "paragraphs": [
        "Custo: 1 de Chi",
        "Seu próximo ataque desarmado nesta rodada, que causar dano, faz seu próximo Ensinamento custar 1 de Chi a menos (Mas nunca menos que 0)."
      ],
      "tables": []
    },
    {
      "title": "Rajada de Golpes",
      "level": 4,
      "paragraphs": [
        "Custo: 2 de Chi",
        "Pré-requisito: 4º Nível de Monge",
        "Você pode fazer um ataque desarmado adicional nesta rodada."
      ],
      "tables": []
    },
    {
      "title": "Rastejar da Serpente",
      "level": 4,
      "paragraphs": [
        "Custo: 2 de Chi",
        "Pré-requisito: 4º Nível de Monge",
        "Você recebe uma ação de movimento adicional nesta rodada, esta ação pode ser utilizada apenas para movimentar."
      ],
      "tables": []
    },
    {
      "title": "Dança da Garça",
      "level": 4,
      "paragraphs": [
        "Custo: 3 de Chi",
        "Pré-requisito: 8º Nível de Monge",
        "Seu próximo ataque desarmado nesta rodada é realizado contra todas as criaturas que estejam adjacentes a você."
      ],
      "tables": []
    },
    {
      "title": "Punho do Tigre Branco",
      "level": 4,
      "paragraphs": [
        "Custo: 3 de Chi",
        "Pré-requisito: 8º Nível de Monge",
        "Seu próximo ataque desarmado nesta rodada, que causar dano, também lhe cura em MdN + Mod. Sab."
      ],
      "tables": []
    },
    {
      "title": "Pontos de Pressão",
      "level": 4,
      "paragraphs": [
        "Custo: 4 de Chi",
        "Pré-requisito: 12º Nível de Monge",
        "Seu próximo ataque desarmado nesta rodada, que causar dano também tem Margem de Ameaça e Multiplicador aumentado em 2."
      ],
      "tables": []
    },
    {
      "title": "Olho do Tigre",
      "level": 4,
      "paragraphs": [
        "Custo: 4 de Chi",
        "Pré-requisito: 12º Nível de Monge",
        "Seu próximo ataque desarmado nesta rodada, que causar dano, lhe cura 1d6 pontos de habilidade."
      ],
      "tables": []
    },
    {
      "title": "Garras do Dragão",
      "level": 4,
      "paragraphs": [
        "Custo: 5 de Chi",
        "Pré-requisito: 16º Nível de Monge",
        "Até o final do combate, todos os seus ataques desarmados são considerados duas categorias de tamanho acima. Você só pode ativar Garras do Dragão uma vez por combate."
      ],
      "tables": []
    },
    {
      "title": "Explosão de Chi",
      "level": 4,
      "paragraphs": [
        "Custo: 5 de Chi",
        "Pré-requisito: 16º Nível de Monge",
        "Você recebe +6 em todas as habilidades básicas até o final do combate. Você só pode ativar Explosão de Chi uma vez por combate."
      ],
      "tables": []
    }
  ],
  "classTalents": [
    {
      "id": "talento-expelir-a-dor",
      "name": "Expelir a Dor",
      "prerequisite": "4º Nível de Monge",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "A cada 3 pontos de Chi que você gasta em combate, você também recupera Mod. Sab. pontos de vida. A partir do 8º nível também adiciona MdN nesta cura."
      ]
    },
    {
      "id": "talento-alta-tolerancia",
      "name": "Alta Tolerância",
      "prerequisite": "4º Nível de Monge",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Uma vez por dia você pode gastar sua reação e um Marcador de Chi para se livrar de um dos seguintes efeitos que o estejam afetando Abalado, Apavorado, Cego, Confuso, Enredado, Fascinado, Ofuscado, Pasmo ou Surdo. No 12º Nível ele pode escolher dois efeitos e no 20º se liberta de todos os efeitos da lista que o estiverem afetando. Você pode pode ativar esta habilidade mesmo que suas condições não permitam."
      ]
    },
    {
      "id": "talento-voe-como-uma-borboleta",
      "name": "Voe como uma Borboleta",
      "prerequisite": "4º Nível de Monge",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Quando você utiliza da ação “Defender” você recebe metade do seu nível nesta classe, como RE até o início de seu próximo turno."
      ]
    },
    {
      "id": "talento-karma-bom",
      "name": "Karma Bom",
      "prerequisite": "8º Nível de Monge",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Com uma ação de movimento você restaura 5 pontos de Chi. Você pode utilizar esta habilidade uma vez por dia."
      ]
    },
    {
      "id": "talento-ao-chao",
      "name": "Ao Chão",
      "prerequisite": "8º Nível de Monge",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Você recebe +4 em testes de ataque para agarrar e derrubar. Quando você derruba uma criatura com “Investida do Touro” pode também começar uma manobra de Agarrar."
      ]
    },
    {
      "id": "talento-ferroe-como-abelha",
      "name": "Ferroe como Abelha",
      "prerequisite": "8º Nível de Monge",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Quando você utiliza a ação “Defender”, até o início de sua próxima rodada, sempre que for atingido por um Ataque Corpo-a-Corpo ou a Distância, você recebe 1 Marcador de Chi."
      ]
    },
    {
      "id": "talento-movimentos-continuos",
      "name": "Movimentos Contínuos",
      "prerequisite": "12º Nível de Monge",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Seus ataques desarmados recebem +3 em jogadas de Ataque e Dano enquanto você não repetir uma técnica de  “Ensinamentos do Monastério\" durante o combate."
      ]
    },
    {
      "id": "talento-imobilizacao",
      "name": "Imobilização",
      "prerequisite": "12º Nível de Monge",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Você pode imobilizar uma criatura que esteja agarrando. Para isso, gaste uma ação padrão e faça um teste de manobra. Se for bem-sucedido, imobiliza a criatura, ela fica indefesa e não pode realizar nenhuma ação, exceto tentar se soltar (o que exige um teste de manobra). Caso a criatura consiga se soltar da imobilização, ainda fica agarrada."
      ]
    },
    {
      "id": "talento-lutador-elusivo",
      "name": "Lutador Elusivo",
      "prerequisite": "12º Nível de Monge",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Quando você utiliza a ação “Defender”, até o início de sua próxima rodada, se um ataque corpo-a-corpo for realizado contra você, você pode como reação, realizar um Ataque desarmado contra esta criatura, como parte desta mesma reação você pode ativar “Ensinamentos do Monastério\" contanto que não tenha utilizado a habilidade nesta rodada."
      ]
    },
    {
      "id": "talento-guia-das-nuvens",
      "name": "Guia das Nuvens",
      "prerequisite": "16º Nível de Monge",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Com uma ação de movimento, escolha até 3 Aliados que possam vê-lo, você garante a eles o benefício de “Andar nas Nuvens” como se fossem monges de 8º nível por 1 minuto. Esta habilidade pode ser utilizada uma vez por dia."
      ]
    },
    {
      "id": "talento-toque-mistico",
      "name": "Toque Místico",
      "prerequisite": "16º Nível de Monge",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Seus Ataques Desarmados reduzem qualquer Resistência a Energia que a criatura possua em um valor igual ao seu Mod. Sab. por 1 Rodada."
      ]
    },
    {
      "id": "talento-ponte-espiritual",
      "name": "Ponte Espiritual",
      "prerequisite": "16º Nível de Monge",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Com uma ação completa, escolha até 2 Aliados que possam vê-lo, você garante a eles o benefício de “Meditação Guiada” como se fossem monges de 13º nível. Esta habilidade pode ser utilizada uma vez por dia."
      ]
    },
    {
      "id": "talento-ascencao",
      "name": "Ascenção",
      "prerequisite": "20º Nível de Monge",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Seu número de marcadores de Chi por dia se torna igual a Duas vezes seu nível nesta classe, além disso a RE recebida por “Força Interior” se torna igual a três vezes seu Mod. Sab."
      ]
    },
    {
      "id": "talento-armamentos-da-ordem",
      "name": "Armamentos da Ordem",
      "prerequisite": "20º Nível de Monge",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Ativar esta habilidade é uma ação livre que pode ser feita uma vez por dia. Pelo próximo minuto após a ativação você pode executar dois “Ensinamento do Monastério\" na mesma rodada, porém, você nunca pode escolher o mesmo ensinamento duas vezes. Por fim, enquanto a habilidade durar, seus ataques Desarmados podem ser realizados contra alvos a até 9 Metros."
      ]
    },
    {
      "id": "talento-auto-perfeicao",
      "name": "Auto-Perfeição",
      "prerequisite": "20º Nível de Monge",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você recebe +4 em Sabedoria, pode se comunicar com qualquer criatura inteligente (Int 3 ou mais) e por fim, sempre pode escolher 15 em seus testes de resistência ao invés de rolar o dado."
      ]
    }
  ]
} satisfies ClassDetail;

~~~~


---

# Classe: guerreiro

**Fonte:** `src/data/class-details/guerreiro.ts`

~~~~typescript
import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "guerreiro",
  "name": "Guerreiro",
  "family": "Guerreiro",
  "sourceDocId": "1x4D4KXGLRK9hA2nsqZFI-3Vim7o3HSTO2CQ4L1678Os",
  "sourceTitle": "Guerreiro",
  "status": "complete",
  "editorialNotes": [],
  "basics": {
    "hitPoints": "um Guerreiro começa com 20 pontos de vida (+ Mod. de Con) e ganha 5 PV (+mod. Con) por nível seguinte.",
    "trainedSkills": "Conhecimento (Estratégia) e outras 4 + mod. Inteligência.",
    "classSkills": "Acrobacia (Des), Adestrar Animais (Car), Atletismo (For), Cavalgar (Des), Conhecimento (Int), Iniciativa (Des), Intimidação (Car), Ofício (Int), Percepção (Sab).",
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
        "Conhecimento de Golpes"
      ],
      [
        "2º",
        "+2",
        "Conhecimentos de Posturas"
      ],
      [
        "3º",
        "+3",
        "Treinamento de Armaduras"
      ],
      [
        "4º",
        "+4",
        ""
      ],
      [
        "5º",
        "+5",
        "Conhecimento de Golpes, Treinamento de Armas"
      ],
      [
        "6º",
        "+6",
        "Conhecimentos de Posturas"
      ],
      [
        "7º",
        "+7",
        "Treinamento de Armaduras"
      ],
      [
        "8º",
        "+8",
        "Morrer pela Lâmina (-1)"
      ],
      [
        "9º",
        "+9",
        "Conhecimento de Golpes, Treinamento de Armas"
      ],
      [
        "10º",
        "+10",
        "Conhecimentos de Posturas"
      ],
      [
        "11º",
        "+11",
        "Treinamento de Armaduras"
      ],
      [
        "12º",
        "+12",
        "Soldado Veterano, Escola de Combate"
      ],
      [
        "13º",
        "+13",
        "Conhecimento de Golpes, Treinamento de Armas"
      ],
      [
        "14º",
        "+14",
        "Conhecimentos de Posturas"
      ],
      [
        "15º",
        "+15",
        "Treinamento de Armaduras"
      ],
      [
        "16º",
        "+16",
        "Morrer pela Lâmina (-2)"
      ],
      [
        "17º",
        "+17",
        "Conhecimento de Golpes, Treinamento de Armas"
      ],
      [
        "18º",
        "+18",
        "Conhecimentos de Posturas"
      ],
      [
        "19º",
        "+19",
        "Treinamento de Armaduras"
      ],
      [
        "20º",
        "+20",
        "Senhor da Guerra"
      ]
    ]
  },
  "sections": [
    {
      "title": "Conhecimento de Golpes",
      "level": 3,
      "paragraphs": [
        "A partir do 1º nível e a cada 4 níveis, você recebe dois golpes da lista a partir da sessão Golpes Marciais, e 3 pontos de energia. Você pode utilizar a maioria de seus golpes como uma ação livre no lugar de ataques normais, investidas, etc, mas nunca mais de uma vez por rodada. Você pode recuperar 3 pontos de Energia utilizando uma ação completa."
      ],
      "tables": []
    },
    {
      "title": "Conhecimento de Posturas",
      "level": 3,
      "paragraphs": [
        "A partir do 2º nível e a cada 4 níveis, você recebe duas posturas da lista a partir da sessão Posturas. Ao contrário de golpes, posturas não são “ativadas”; você simplesmente declara qual está utilizando (ou se não está utilizando postura nenhuma) e recebe seus benefícios. Entretanto, você só pode usar uma postura por vez. Você pode trocar de postura uma vez por rodada como uma ação livre."
      ],
      "tables": []
    },
    {
      "title": "Treinamento de Armaduras",
      "level": 3,
      "paragraphs": [
        "A partir do 3º nível e a cada 4 níveis, o guerreiro aumenta o bônus de CA de qualquer armadura que utilizar em 1 e reduz a penalidade de armadura em -1(mínimo 0) e aumenta o bônus de destreza máximo em +1 de qualquer armadura que esteja utilizando."
      ],
      "tables": []
    },
    {
      "title": "Treinamento de Armas",
      "level": 3,
      "paragraphs": [
        "A partir do 5º nível, o guerreiro pode escolher dois grupos de armas da lista abaixo, ao fazer isso, ele recebe um bônus de +1 em jogadas de ataque e dano com aquele grupo. A cada 4 níveis o guerreiro pode escolher um novo grupo, e aumenta o bônus de todos os grupos em +1. Os grupos são:\nMachados, Armas de haste, Espadas de uma mão, Espadas de duas mãos, Maças, Duplas(armas versáteis), Bestas e Arcos."
      ],
      "tables": []
    },
    {
      "title": "Morrer pela Lâmina",
      "level": 3,
      "paragraphs": [
        "A partir do 8º nível, Por um minuto você reduz o custo de Energia de todos os seus golpes em 1 (Mínimo de 1), ativar esta habilidade é uma ação livre e pode ser feito uma vez por dia. A partir do 16º nível você reduz novamente o custo em 1 (Para um total de -2, Minimo 1)."
      ],
      "tables": []
    },
    {
      "title": "Soldado Veterano",
      "level": 3,
      "paragraphs": [
        "A partir do 12º nível você soma seu bônus de Força e Constituição em seus testes de Fortitude ao invés de apenas um deles, Você também pode dormir de armadura sem ficar fatigado."
      ],
      "tables": []
    },
    {
      "title": "Escola de Combate",
      "level": 3,
      "paragraphs": [
        "A partir do 12º nível você pode escolher tantas escolas quanto quiser, desde que cumpra os pré-requisitos de todas. Veja a descrição completa das escolas, seus pré-requisitos, seus benefícios e demais detalhes a partir da sessão Escolas de Combate."
      ],
      "tables": []
    },
    {
      "title": "Senhor da Guerra",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Guerreiro, você nunca pode ter mais de um dos talentos de 20º nível da classe."
      ],
      "tables": []
    },
    {
      "title": "Golpes Marciais",
      "level": 1,
      "paragraphs": [],
      "tables": []
    },
    {
      "title": "Aparar",
      "level": 4,
      "paragraphs": [
        "Custo: 1 de Energia",
        "Use este golpe como uma reação quando um oponente acerta um ataque corpo-a-corpo ou a distância em você. Faça uma jogada de ataque. Se o resultado da sua jogada for maior que o do oponente, você evita o ataque."
      ],
      "tables": []
    },
    {
      "title": "Ripostar",
      "level": 4,
      "paragraphs": [
        "Custo: 2 de Energia",
        "Use este golpe como uma reação quando um oponente acerta um ataque corpo-a-corpo em você. Faça uma jogada de ataque. Se o resultado da sua jogada for maior que o do oponente, você evita o ataque e pode fazer um ataque contra o oponente como parte da mesma reação.",
        "Bloqueio de Escudo",
        "Custo: 1 de Energia",
        "Use este golpe como uma ação livre durante sua rodada. Se estiver utilizando um escudo, você recebe +4 de CA até o início de sua próxima rodada."
      ],
      "tables": []
    },
    {
      "title": "Fôlego Concentrado",
      "level": 4,
      "paragraphs": [
        "Custo: 1 de Energia",
        "Gaste uma ação completa. Você recupera um nível de fadiga (fica fatigado se estava exausto, fica sem fadiga se estava fatigado) ou medo (fica abalado se estava apavorado, fica sem medo se estava abalado) adquirido no combate."
      ],
      "tables": []
    },
    {
      "title": "Arremesso Desesperado",
      "level": 4,
      "paragraphs": [
        "Custo: 2 de Energia",
        "Qualquer arma de corpo-a-corpo que você esteja usando pode ser usada como uma arma de arremesso, com incremento de distância de 6m, até o fim da rodada."
      ],
      "tables": []
    },
    {
      "title": "Ataque em Arco",
      "level": 4,
      "paragraphs": [
        "Custo: 2 de Energia",
        "Escolha duas criaturas dentro de sua margem de ameaça. Seu próximo ataque corpo-a-corpo é realizado contra ambas estas criaturas."
      ],
      "tables": []
    },
    {
      "title": "Ataque Giratório",
      "level": 4,
      "paragraphs": [
        "Custo: 4 de Energia",
        "Escolha até quatro criaturas dentro de sua margem de ameaça. Seu próximo ataque corpo-a-corpo é realizado contra todas estas criaturas.",
        "Finalizar",
        "Custo: 2 de Energia",
        "Seu próximo ataque com uma arma. Se você acertar e a criatura estiver com ¼ de seus pontos de vida máximo causa 6d6 de dano adicional"
      ],
      "tables": []
    },
    {
      "title": "Recuperação Rápida",
      "level": 4,
      "paragraphs": [
        "Custo: 1 de Energia",
        "Quando errar um ataque com arma pode gastar sua reação para rolar novamente a jogada de ataque, você deve ficar com o novo resultado mesmo que seja pior que o anterior"
      ],
      "tables": []
    },
    {
      "title": "Ataque Pesado",
      "level": 4,
      "paragraphs": [
        "Custo: 1 de Energia",
        "Seu próximo ataque com uma arma de esmagamento. Se você acertar, causa um dano extra no dano da arma."
      ],
      "tables": []
    },
    {
      "title": "Batida Destruidora",
      "level": 4,
      "paragraphs": [
        "Custo: 2 de Energia",
        "Seu próximo ataque com uma arma de esmagamento. Se você acertar, reduza o Bônus de CA da Armadura do alvo em 2, se ele não utilizar armadura ao invés disso reduza sua CA e sua fortitude em 1. Uma armadura com 0 de CA perde seus efeitos. A armadura pode ser reparada durante um descanso curto sem teste ou custo para fazê-lo."
      ],
      "tables": []
    },
    {
      "title": "Estocada Penetrante",
      "level": 4,
      "paragraphs": [
        "Custo: 1 de Energia",
        "Seu próximo ataque com uma arma de perfuração. Se você acertar, além do dano normal, ignora até 10 pontos de redução de dano."
      ],
      "tables": []
    },
    {
      "title": "Estocada no Abdômen",
      "level": 4,
      "paragraphs": [
        "Custo: 2 de Energia",
        "Seu próximo ataque com uma arma de perfuração. Se você acertar, além do dano normal, causa 1 ponto de dano de Constituição"
      ],
      "tables": []
    },
    {
      "title": "Ferir o Braço",
      "level": 4,
      "paragraphs": [
        "Custo: 1 de Energia",
        "Seu próximo ataque com uma arma cortante. Se você acertar e causar dano, o oponente sofrerá uma penalidade de –1 nas jogadas de ataque por um minuto. O efeito pode ser acumulado até 2 vezes."
      ],
      "tables": []
    },
    {
      "title": "Ferir a Perna",
      "level": 4,
      "paragraphs": [
        "Custo: 1 de Energia",
        "Seu próximo ataque com uma arma cortante. Se você acertar e causar dano, o oponente terá seu deslocamento reduzido à metade por um minuto."
      ],
      "tables": []
    },
    {
      "title": "Pancada com o Pomo",
      "level": 4,
      "paragraphs": [
        "Custo: 2 de Energia",
        "Seu próximo ataque com uma arma de duas mãos. Se você acertar, causa dano igual ao de uma adaga para seu tamanho (1d4 para um personagem Médio), além disso o oponente deve ser bem-sucedido num teste de Fortitude (CD 10+MdN+Mod For) ou será derrubado. O dano pode ser não-letal."
      ],
      "tables": []
    },
    {
      "title": "Pancada Pesada",
      "level": 4,
      "paragraphs": [
        "Custo: 2 de Energia",
        "Seu próximo ataque com uma arma de duas mãos.  Se você acertar, além de causar dano normal, o oponente deve ser bem-sucedido num teste de Fortitude (CD 10+MdN+Mod For) ou será empurrado 4,5m em uma direção à sua escolha."
      ],
      "tables": []
    },
    {
      "title": "Sobrepujar",
      "level": 4,
      "paragraphs": [
        "Custo: 1 de Energia",
        "Seu próximo ataque com o Escudo. Se você acertar, além de causar dano normal, inicia uma manobra de derrubar como ação livre."
      ],
      "tables": []
    },
    {
      "title": "Racha Crânio",
      "level": 4,
      "paragraphs": [
        "Custo: 2 de Energia",
        "Seu próximo ataque com o Escudo. Se você acertar e causar dano, o oponente deve fazer um teste de Fortitude (CD 10+MdN+Mod For.) Se ele falhar, sofre uma penalidade de –2 nas jogadas de ataque e na CA por um minuto."
      ],
      "tables": []
    },
    {
      "title": "Tudo ou Nada",
      "level": 4,
      "paragraphs": [
        "Custo: No mínimo 3 de Energia.",
        "Seu próximo ataque recebe um bônus de +4 de ataque e dano, o bônus aumenta em +1 para cada dois pontos de energia gasto além do terceiro."
      ],
      "tables": []
    },
    {
      "title": "Golpe em V",
      "level": 4,
      "paragraphs": [
        "Custo: 2 de Energia",
        "Seu próximo ataque. Se você acertar, causa o dano da arma (sem bônus e modificadores) novamente no início da próxima rodada."
      ],
      "tables": []
    },
    {
      "title": "Degolar",
      "level": 4,
      "paragraphs": [
        "Custo: 2 de Energia",
        "Seu próximo ataque possui um bônus de +1 na margem de ameaça e um bônus de +1 no multiplicador de crítico."
      ],
      "tables": []
    },
    {
      "title": "Golpe Baixo",
      "level": 4,
      "paragraphs": [
        "Custo: 1 de Energia",
        "Seu próximo ataque. Se você acertar e causar dano, o oponente deve ser bem-sucedido em um teste de Fortitude (CD 10+MdN+Mod For) ou ficará enjoado (só pode realizar uma ação padrão ou de movimento por rodada) durante 1d3 rodadas.",
        "Investida do Touro",
        "Custo: 1 de Energia",
        "Até o fim da sua próxima rodada, se voce realizar uma investida causa 2d6 de dano adicional com seu golpe e não gera ataques de oportunidade por se mover."
      ],
      "tables": []
    },
    {
      "title": "Posturas",
      "level": 1,
      "paragraphs": [],
      "tables": []
    },
    {
      "title": "Abraço da Montanha",
      "level": 4,
      "paragraphs": [
        "Você recebe um bônus de +2 nas jogadas de ataque, mas sofre uma penalidade de -2 na classe de armadura."
      ],
      "tables": []
    },
    {
      "title": "Aposta de Hyninn",
      "level": 4,
      "paragraphs": [
        "Você recebe +4 na CA. Porém, quando for atingido por um ataque à distância ou corpo-a-corpo, cai no chão e não pode usar nenhuma postura por duas rodadas."
      ],
      "tables": []
    },
    {
      "title": "Base Heroica",
      "level": 4,
      "paragraphs": [
        "No início da sua rodada, role 1d4. Com um resultado máximo, você ganha 1 ponto de ação que deve ser utilizado até o fim do combate, caso contrário é perdido. Após ganhar o ponto de ação, o dado aumenta em uma categoria seguindo a seguinte ordem 1d4->1d6->1d8-1d10->1d12->1d20. O dado diminui em uma categoria por descanso longo."
      ],
      "tables": []
    },
    {
      "title": "Base Selvagem",
      "level": 4,
      "paragraphs": [
        "Sempre que você atacar com armas naturais (garras, presas, chifres, cauda...) contra um oponente que tenha lhe causado dano na rodada anterior, você recebe +2 nas jogadas de dano."
      ],
      "tables": []
    },
    {
      "title": "Corrida Selvagem",
      "level": 4,
      "paragraphs": [
        "Você recebe +3m de deslocamento, mas tem uma penalidade de -2 de CA."
      ],
      "tables": []
    },
    {
      "title": "Espírito Tenaz",
      "level": 4,
      "paragraphs": [
        "Você recebe cura acelerada igual ao seu bônus de Constituição (mínimo 1). Esta postura só pode ser usada um número de rodadas por dia igual seu nível."
      ],
      "tables": []
    },
    {
      "title": "Fôlego de Tauron",
      "level": 4,
      "paragraphs": [
        "Você recupera o dobro dos pontos de Energia enquanto estiver nesta postura."
      ],
      "tables": []
    },
    {
      "title": "Hálito Elemental",
      "level": 4,
      "paragraphs": [
        "Seus ataques corpo-a-corpo causam +1 ponto de dano de frio/fogo/eletricidade/ácido (ou +1d6 contra criaturas vulneráveis ao elemento).",
        "Especial: Golpes Marciais realizados enquanto você estiver usando esta postura causam 1d6 de dano adicional do elemento, 2d6 contra criaturas vulneráveis."
      ],
      "tables": []
    },
    {
      "title": "Passo do Touro",
      "level": 4,
      "paragraphs": [
        "Você recebe um bônus de +1 nas jogadas de ataque e classe de armadura, mas diminui seu deslocamento em 3m."
      ],
      "tables": []
    },
    {
      "title": "Pata do Leopardo",
      "level": 4,
      "paragraphs": [
        "Você recebe um bônus de +2 nas jogadas de ataque, mas sofre uma penalidade de –2 nos testes de resistência."
      ],
      "tables": []
    },
    {
      "title": "Rancor de Keenn",
      "level": 4,
      "paragraphs": [
        "Sempre que você errar dois ou mais ataques em sequência, recupera 1 ponto de energia por ataque errado. Por exemplo, ao errar o segundo ataque em sequência, recupera 2 pontos de energia. Se, na rodada seguinte, errar de novo, recupera mais 1 ponto, e assim por diante. Além disso, sempre que você for atingido por um acerto crítico, recupera 2 pontos de energia."
      ],
      "tables": []
    },
    {
      "title": "Escolas de Combate",
      "level": 1,
      "paragraphs": [],
      "tables": []
    },
    {
      "title": "Escola a Distância:",
      "level": 4,
      "paragraphs": [],
      "tables": []
    },
    {
      "title": "Pré-Requisitos: Tiro Especial, Olho Marcial, Golpe Fôlego Concentrado, Golpe Degolar, Postura Passo do Touro.",
      "level": 3,
      "paragraphs": [
        "Enquanto estiver na postura Passo do Touro, a margem de ameaça com seus ataques a distância aumenta em +2 e toda rodada você pode gastar sua ação de movimento para aumentar seu alcance com armas de longo alcance em 9 metros."
      ],
      "tables": []
    },
    {
      "title": "Escola da Finta:",
      "level": 4,
      "paragraphs": [],
      "tables": []
    },
    {
      "title": "Pré-Requisitos: Flerte Estratégico, Ataque Sagaz, Golpe Ripostar, Golpe Aparar, Postura Aposta De Hyninn.",
      "level": 3,
      "paragraphs": [
        "Enquanto estiver na postura Aposta de Hyninn, suas fintas bem sucedidas fazem com que o oponente fique enjoado, podendo realizar apenas uma ação padrão ou de movimento no próximo turno.",
        "Além disso, você pode utilizar 1 ponto de energia adicional e rolar novamente o teste de Ripostar ou Aparar."
      ],
      "tables": []
    },
    {
      "title": "Escola das Armas de Haste:",
      "level": 4,
      "paragraphs": [],
      "tables": []
    },
    {
      "title": "Pré-Requisitos: Manobra Aprimorada (Investida), Estocada Cruel, Golpe Estocada Penetrante, Golpe Estocada no Abdômen, Postura Espírito Tenaz.",
      "level": 3,
      "paragraphs": [
        "Enquanto estiver na postura Espírito Tenaz, Você ignora até 10 pontos de Redução de Dano de outras criaturas quando atacá-las com uma arma de Haste, além disso todas suas armas de Haste recebem a propriedade Arremesso (18m)."
      ],
      "tables": []
    },
    {
      "title": "Escola das Duas Mãos:",
      "level": 4,
      "paragraphs": [],
      "tables": []
    },
    {
      "title": "Pré-Requisitos: Empunhadura Poderosa, Erosão, Golpe Pancada Pesada, Golpe Pancada com o Pomo, Postura Abraço Da Montanha.",
      "level": 3,
      "paragraphs": [
        "Enquanto estiver na postura Abraço da montanha, seus golpes corpo a corpo adicionam o dobro do seu modificador de força ao dano. Além disso, você pode utilizar uma ação de movimento para rolar novamente uma jogada de ataque que tenha recém realizado."
      ],
      "tables": []
    },
    {
      "title": "Escola de Duas Armas:",
      "level": 4,
      "paragraphs": [],
      "tables": []
    },
    {
      "title": "Pré-Requisitos: Combater com Duas Armas Aprimorado, Desviar Objetos, Golpe em V, Ataque em Arco, Postura Pata do Leopardo.",
      "level": 3,
      "paragraphs": [
        "Você pode utilizar duas Armas de Uma Mão. Além disso, enquanto estiver na postura Pata do Leopardo, o primeiro Ataque bem sucedido com sua mão secundária toda rodada causa 1 ponto de dano em constituição."
      ],
      "tables": []
    },
    {
      "title": "Escola de Escudos:",
      "level": 4,
      "paragraphs": [],
      "tables": []
    },
    {
      "title": "Pré-Requisitos: Especialização em Escudo, Ataque com Escudo Aprimorado, Golpe Sobrepujar, Golpe Racha Crânio, Postura Fôlego de Tauron.",
      "level": 3,
      "paragraphs": [
        "Enquanto estiver na postura Fôlego de Tauron, A primeira vez que realizar uma jogada de ataque com escudo na rodada, você pode fazer um ataque adicional com sua arma na mão principal."
      ],
      "tables": []
    },
    {
      "title": "Escola dos Movimentos:",
      "level": 4,
      "paragraphs": [],
      "tables": []
    },
    {
      "title": "Pré-Requisitos: Mobilidade Perfeita, Torcida, Golpe Ferir a Perna, Golpe Ferir o Braço, Postura Corrida Do Avestruz",
      "level": 3,
      "paragraphs": [
        "Enquanto estiver na postura Corrida Selvagem , a primeira vez em cada rodada que você atacar um oponente após se locomover, pode fazer um teste oposto de acrobacia como ação livre, caso bem sucedido, o oponente sofre uma penalidade de -3m de deslocamento e -1 de Reflexos até o final do combate. A penalidade aplicada aos testes de reflexo é cumulativa, mas pode ser removida com uma ação padrão.",
        "Além disso, os golpes Ferir a perna e ferir o braço podem utilizar destreza no lugar de força para cálculos de CD."
      ],
      "tables": []
    }
  ],
  "classTalents": [
    {
      "id": "talento-ignorar-a-dor",
      "name": "Ignorar a Dor",
      "prerequisite": "4º Nível de Guerreiro",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Sempre que for atingido por um ataque Corpo-a-corpo ou a distância pode reduzir o dano recebido pelo seu modificador de força. Na rodada seguinte você recebe qualquer dano que foi reduzido desta forma. A partir do 16º Nível passa a reduzir 5 vezes seu modificador de força."
      ]
    },
    {
      "id": "talento-vanguarda",
      "name": "Vanguarda",
      "prerequisite": "4º Nível de Guerreiro",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Usando um escudo normal você recebe Metade da CA fornecida por ele como RD, caso seja um escudo mágico que possua uma aura média, você passa a receber toda a CA de seu escudo como RD. No 16º Nível Aumenta o bônus de CA de seu escudo em +2."
      ]
    },
    {
      "id": "talento-ultimo-suspiro",
      "name": "Último Suspiro",
      "prerequisite": "4º Nível de Guerreiro",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Quando você ou um aliado adjacente recebe uma quantidade de dano que o reduza a 0 PV ou menos, você pode, como uma reação, transferir o dano para a armadura ou escudo que estiver utilizando, o alvo original não toma dano algum. Esta habilidade só pode ser utilizada 1 vez por dia em cada criatura.",
        "Um item destruído por esta habilidade sempre pode ser reparado com a perícia Ofício."
      ]
    },
    {
      "id": "talento-equipamento-padronizado",
      "name": "Equipamento padronizado",
      "prerequisite": "8º Nível de Guerreiro",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Sempre que ataca com uma arma com a qual possua Especialização em Arma, você causa um dado a mais de dano do mesmo tipo. Por exemplo, com uma Alabarda, causará 2d10 pontos de dano."
      ]
    },
    {
      "id": "talento-irmao-das-armas",
      "name": "Irmão das Armas",
      "prerequisite": "8º Nível de Guerreiro",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Os talentos Especialização em Arma e Especialização em Arma Aprimorada passam a se aplicar a uma categoria de armas. Os grupos são:",
        "Machados, Armas de haste, Espadas de uma mão, Espadas de duas mãos, Maças, Duplas(armas versáteis), Bestas e Arcos."
      ]
    },
    {
      "id": "talento-guarda-de-ferro",
      "name": "Guarda de Ferro",
      "prerequisite": "8º Nível de Guerreiro",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Qualquer oponente adjacente a você sofre uma penalidade de –4 nas jogadas de ataque contra seus aliados (mas não contra você)."
      ]
    },
    {
      "id": "talento-revanche",
      "name": "Revanche",
      "prerequisite": "12º Nível de Guerreiro",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Enquanto você estiver com metade dos seus pontos de vida máximas ou menos, você recebe +3 em Jogadas de Ataque e dano"
      ]
    },
    {
      "id": "talento-vitoria-absoluta",
      "name": "Vitória Absoluta",
      "prerequisite": "12º Nível de Guerreiro",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Enquanto estiver acima da metade dos seus pontos de vida, seus ataques com arma tem margem de crítico e multiplicador aumentado em +1."
      ]
    },
    {
      "id": "talento-sentenca-de-morte",
      "name": "Sentença de Morte",
      "prerequisite": "12º Nível de Guerreiro",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Você recebe +2 em Jogadas de Ataque e dano contra criaturas que estejam com menos da metade de seus pontos de vida máximos."
      ]
    },
    {
      "id": "talento-portador-da-seguranca",
      "name": "Portador da Segurança",
      "prerequisite": "16º Nível de Guerreiro",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Com uma ação de movimento, você pode carregar consigo (no colo, sobre os ombros...) uma criatura de tamanho pequeno ou menor. O protegido deve estar adjacente, e o portador precisa de uma mão livre. Exceto pelo uso de uma mão, o portador não sofre nenhuma penalidade por carregar o protegido.",
        "Enquanto está sendo carregado, o protegido é considerado sob cobertura (CA+4). Além disso, qualquer ataque bem-sucedido contra o protegido tem 50% de chance de, em vez disso, atingir o portador (o ataque é feito contra a sua CA)."
      ]
    },
    {
      "id": "talento-feridas-profundas",
      "name": "Feridas Profundas",
      "prerequisite": "16º Nível de Guerreiro",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Quando um aliado ataca uma criatura que você já tenha atacado está rodada, utilizando o mesmo tipo de arma que você ele causa 1 dado de dano adicional do mesmo tipo no primeiro ataque que realizar."
      ]
    },
    {
      "id": "talento-mestre-e-comandante",
      "name": "Mestre e Comandante",
      "prerequisite": "16º Nível de Guerreiro",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Quando você ativa a habilidade “Morrer pela Lâmina\" pode escolher até 2 aliados que estejam a até 3 Metros, eles podem utilizar um de seus golpes da habilidade “Conhecimento de Golpes” utilizando os seus Pontos de Energia. Você deve escolher qual golpe eles poderão utilizar ao ativar esta habilidade."
      ]
    },
    {
      "id": "talento-sombra-dos-colossos",
      "name": "Sombra dos Colossos",
      "prerequisite": "20º Nível de Guerreiro",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Quando você recebe dano ou efeito prejudicial de uma criatura com 10 níveis a menos que você, você ignora todos seus efeitos. Se for de uma criatura com 5 níveis a menos recebe apenas metade dos efeitos. Contra criaturas de mesmo nível ou maior que o seu sua RD não pode ser ignorada."
      ]
    },
    {
      "id": "talento-render-se-jamais",
      "name": "Render-se Jamais",
      "prerequisite": "20º Nível de Guerreiro",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você permanece consciente mesmo quando cai a 0 ou menos PV, mas ainda morre se alcançar metade dos seus pontos de vida negativos. Sempre que estiver abaixo da metade de seus pontos de vida máximo e derrotar uma criatura você recupera pontos de vida até ficar com a exata metade de seus pontos de vida."
      ]
    },
    {
      "id": "talento-maquina-de-guerra",
      "name": "Máquina de Guerra",
      "prerequisite": "20º Nível de Guerreiro",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Ao realizar um ataque e então trocar trocar de arma no meio do combate (largar uma arma e puxar uma arma de um grupo diferente), você recebe um bônus de +2 em todas as jogadas de ataque e dano com a nova arma. Se realizar um ataque e trocar de arma mais uma vez, recebe um bônus de +4 nas jogadas de ataque e dano com esta terceira arma. Trocando de novo, recebe um bônus de +6 nas jogadas de ataque e dano com a quarta arma, e assim por diante. Se em algum momento você repetir um grupo de Arma perde todos os benefícios do talento e deve começar os bônus novamente de +0."
      ]
    }
  ]
} satisfies ClassDetail;

~~~~


---

# Classe: samurai

**Fonte:** `src/data/class-details/samurai.ts`

~~~~typescript
import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "samurai",
  "name": "Samurai",
  "family": "Guerreiro",
  "sourceDocId": "1e7XBeRiShqqIwvXAEGwhKlwKE9PUwbFm0TxKyxYopLc",
  "sourceTitle": "Samurai",
  "status": "complete",
  "editorialNotes": [],
  "basics": {
    "hitPoints": "um Samurai começa com 20 pontos de vida (+ Mod. de Con) e ganha 5 PV (+mod. Con) por nível seguinte.",
    "trainedSkills": "Conhecimento(Estratégia) e outras 4 + mod. Inteligência.",
    "classSkills": "Acrobacia (Des), Adestrar Animais (Car), Atletismo (For), Atuação (Car), Cavalgar (Des), Conhecimento (Int), Diplomacia (Car), Iniciativa (Des), Intimidação (Car), Intuição (Sab), Meditação (Sab), Ofício (Int), Percepção (Sab).",
    "bonusTalents": "Usar Armaduras (leves, médias e pesadas), Usar Armas (simples e marciais), Usar Escudos, Resistência Aprimorada (Vontade)."
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
        "Armas Ancestrais, Mente sobre o Corpo"
      ],
      [
        "2º",
        "+2",
        "Grito de Kiai"
      ],
      [
        "3º",
        "+3",
        "Espírito Impassivo"
      ],
      [
        "4º",
        "+4",
        "Princípios do Bushido"
      ],
      [
        "5º",
        "+5",
        "Armas Ancestrais, Mente sobre o Corpo"
      ],
      [
        "6º",
        "+6",
        "Decisão dos Ancestrais"
      ],
      [
        "7º",
        "+7",
        "Olhar Assustador"
      ],
      [
        "8º",
        "+8",
        "Repouso da Lâmina"
      ],
      [
        "9º",
        "+9",
        "Mente sobre o Corpo"
      ],
      [
        "10º",
        "+10",
        "Armas Ancestrais, Grito de Kiai"
      ],
      [
        "11º",
        "+11",
        "Clareza de Batalha"
      ],
      [
        "12º",
        "+12",
        ""
      ],
      [
        "13º",
        "+13",
        "Mente sobre o Corpo"
      ],
      [
        "14º",
        "+14",
        "Olhar Assustador"
      ],
      [
        "15º",
        "+15",
        "Armas Ancestrais"
      ],
      [
        "16º",
        "+16",
        "Sombra do Relâmpago"
      ],
      [
        "17º",
        "+17",
        "Mente sobre o Corpo"
      ],
      [
        "18º",
        "+18",
        "Grito de Kiai"
      ],
      [
        "19º",
        "+19",
        ""
      ],
      [
        "20º",
        "+20",
        "Armas Ancestrais, Vidência dos Ancestrais"
      ]
    ]
  },
  "sections": [
    {
      "title": "Armas Ancestrais",
      "level": 3,
      "paragraphs": [
        "Para um samurai as seguintes armas são consideradas marciais:",
        "Katana, Wakizashi",
        "Você possui um conjunto de 3 Armas especiais, abençoadas pelos seus ancestrais. Você começa com um conjunto de 3 Armas da sua escolha além de seus equipamentos e itens iniciais. Cada uma dessas Armas possui um bônus mágico de +1 e um guia espiritual, de um antigo membro do seu Clã, que fornece conselhos, assistência tática e treinamento. Se uma destas armas for destruída ou for removida do seu campo de visão por um minuto ela reaparece em sua bainha em uma rodada. Este guia aparece como uma partícula de energia branca. Ele usa seus sentidos para ver e ouvir e se comunica com você por telepatia. Assim, ele não pode interagir com objetos e criaturas que você não consegue ver. Uma vez por dia durante um combate você pode refletir sobre os ensinamentos passados por suas Armas, ao fazê-lo, deve escolher uma criatura no combate que você possa ver, você soma seu Mod. Sab em TdR contra efeitos da criatura e para rolagens de Perícia feitas contra ela. No 5º, 10º, 15º e 20º nível você recebe um uso adicional desta habilidade além de aumentar o bônus mágico garantido por ela em +1."
      ],
      "tables": []
    },
    {
      "title": "Mente sobre o Corpo",
      "level": 3,
      "paragraphs": [
        "A partir do 1º nível e a cada 4 níveis, você recebe dois movimentos da lista a partir da sessão Técnicas do Bushido, e 3 pontos de energia. Cada técnica tem sua descrição de como ser ativada, mas você nunca pode ativar mais de uma técnica por rodada. Você pode recuperar 3 pontos de Energia utilizando uma ação completa."
      ],
      "tables": []
    },
    {
      "title": "Grito de Kiai",
      "level": 3,
      "paragraphs": [
        "No 2º nível, você aprende a emitir um poderoso grito que torna seus ataques devastadores. Como uma ação livre, você recebe +2 nas jogadas de ataque e dano durante uma rodada. Esta habilidade pode ser usada um número de vezes por dia igual a 1 + seu modificador de Sabedoria. No 10º Nível o benefício desta habilidade aumenta para +4 e você passa a Ignorar até 10 Pontos de RD de uma criatura com este golpe. Por fim, no 18º Nível este bônus aumenta para +6 e você passa a Ignorar até 20 Pontos de RD de uma criatura com o Golpe."
      ],
      "tables": []
    },
    {
      "title": "Espírito Impassivo",
      "level": 3,
      "paragraphs": [
        "Você se torna imune a medo."
      ],
      "tables": []
    },
    {
      "title": "Princípios do Bushido",
      "level": 3,
      "paragraphs": [
        "Escolha entre seguir o caminho de um Ronin ou seguir sobre as ordens de um Daimyo, de acordo com a sua escolha você recebe as habilidades abaixo:",
        "Se escolher o caminho do Daimyo você passa a entender mais sobre as tradições de seu Clã, para você, sacar as armas de sua habilidade “Armas Ancestrais” é sempre uma ação Livre (Mas não guardá-las). Além disso, seu primeiro golpe durante um combate após sacar uma de suas “Armas Ancestrais” ignora camuflagem.",
        "Se escolher o caminho do Ronin, no início de cada combate você recebe uma ação de movimento adicional."
      ],
      "tables": []
    },
    {
      "title": "Decisão dos Ancestrais",
      "level": 3,
      "paragraphs": [
        "Até 3 vezes ao dia, quando realizar um teste de perícia pode pedir ajuda aos seus ancestrais, se fizer, adicione seu Mod.Sab ao resultado do teste."
      ],
      "tables": []
    },
    {
      "title": "Olhar Assustador",
      "level": 3,
      "paragraphs": [
        "A partir do 7º nível, você passa a somar seu bônus de Sabedoria em seus testes de Intimidação, além disso pode assustar uma criatura a até 9m com uma ação de movimento. Faça um teste de Intimidação resistido pelo teste de Vontade da criatura. Se você é bem-sucedido, a criatura fica abalada por 1 minuto. Se falhar, a criatura fica imune a esta habilidade por um dia. A partir do 14º  você pode escolher afetar qualquer número de criaturas a até 9 metros com esta habilidade."
      ],
      "tables": []
    },
    {
      "title": "Repouso da Lâmina",
      "level": 3,
      "paragraphs": [
        "Depois de utilizar uma técnica da habilidade “Mente Sobre o Corpo” você recupera PVs igual ao seu Nível nesta Classe."
      ],
      "tables": []
    },
    {
      "title": "Clareza de Batalha",
      "level": 3,
      "paragraphs": [
        "A partir do 11º nível você soma seu bônus de Sabedoria além de seu bônus de Destreza em seus testes de Iniciativa. Além disso, você nunca fica desprevenido."
      ],
      "tables": []
    },
    {
      "title": "Sombra do Relâmpago",
      "level": 3,
      "paragraphs": [
        "Três vezes por dia, mas apenas uma vez por rodada, você pode se deslocar 9m como uma ação livre. Este movimento não gera ataques de oportunidade e pode ser utilizado mesmo que esteja sendo agarrado, imobilizado ou enredado, você se liberta desses efeitos ao utilizar desta habilidade."
      ],
      "tables": []
    },
    {
      "title": "Vidência dos Ancestrais",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Samurai, você nunca pode ter mais de um dos talentos de 20º nível da classe. Além disso, você recebe uma das Técnicas do Bushido da habilidade “Mente sobre o Corpo” de 20 Nível."
      ],
      "tables": []
    },
    {
      "title": "Técnicas do Bushido",
      "level": 1,
      "paragraphs": [],
      "tables": []
    },
    {
      "title": "Ossos da Montanha",
      "level": 4,
      "paragraphs": [
        "Ação Necessária: Livre",
        "Duração: 1 Minuto",
        "Seu próximo ataque, se acertar, lhe garante RD igual ao seu Mod. Sab por 3 rodadas."
      ],
      "tables": []
    },
    {
      "title": "Ventos de Aço",
      "level": 4,
      "paragraphs": [
        "Ação Necessária: Livre",
        "Duração: Instantâneo",
        "Seu próximo ataque é realizado contra duas criaturas ao seu alcance."
      ],
      "tables": []
    },
    {
      "title": "Aperfeiçoar a Mente",
      "level": 4,
      "paragraphs": [
        "Ação Necessária: Reação",
        "Duração: Instantâneo",
        "Se você falhar em um teste de Resistência, pode rolar novamente o dado e ficar com o novo resultado."
      ],
      "tables": []
    },
    {
      "title": "Raízes da Montanha",
      "level": 4,
      "paragraphs": [
        "Ação Necessária: Padrão",
        "Duração: 1 Minuto",
        "Você recebe um bônus de +10 para resistir a todas as manobras. Além disso, criaturas a até 1,5 metros de você, recebem uma penalidade de 3 Metros em seus deslocamentos. Esta habilidade se desativa caso você se movimente."
      ],
      "tables": []
    },
    {
      "title": "Golpe do Desarme",
      "level": 4,
      "paragraphs": [
        "Ação Necessária: Padrão",
        "Duração: Instantâneo",
        "Você realiza um ataque contra um inimigo, se acertar e causar dano pode imediatamente começar uma manobra de desarmar. Você utiliza a mesma rolagem de ataque para o teste de Desarme."
      ],
      "tables": []
    },
    {
      "title": "Fluir dos Rios",
      "level": 4,
      "paragraphs": [
        "Ação Necessária: Movimento",
        "Duração: 1 Minuto",
        "Seu deslocamento aumenta em 6 Metros"
      ],
      "tables": []
    },
    {
      "title": "Instância do Gigante",
      "level": 4,
      "paragraphs": [
        "Ação Necessária: Movimento",
        "Duração: 1 Minuto",
        "Você calcula suas rolagens de dano como se fosse uma categoria de tamanho adicional."
      ],
      "tables": []
    },
    {
      "title": "Ouvir o Ar",
      "level": 4,
      "paragraphs": [
        "Ação Necessária: Movimento",
        "Duração: 1 Minuto",
        "Você recebe sentido sísmico 9 metros e +4 em testes de percepção."
      ],
      "tables": []
    },
    {
      "title": "Forma da Lâmina",
      "level": 4,
      "paragraphs": [
        "Ação Necessária: Movimento",
        "Duração: 1 Minuto",
        "Durante seu turno, sempre que você realizar um ataque com arma, seu alcance aumenta em 3 metros"
      ],
      "tables": []
    },
    {
      "title": "Sabedoria das Eras",
      "level": 4,
      "paragraphs": [
        "Ação Necessária: Movimento",
        "Duração: Instantâneo",
        "Seu próximo ataque, se acertar, lhe garante CA igual ao seu Mod. Sab por 3 rodadas."
      ],
      "tables": []
    },
    {
      "title": "Sem Mente",
      "level": 4,
      "paragraphs": [
        "Ação Necessária: Padrão",
        "Duração: 3 Rodadas",
        "Sua margem de ameaça e multiplicador de crítico aumenta em 1"
      ],
      "tables": []
    },
    {
      "title": "Passos de Prata",
      "level": 4,
      "paragraphs": [
        "Ação Necessária: Livre",
        "Duração: 1 Minuto",
        "Você não gera ataques de oportunidade por se movimentar e ignora terreno difícil."
      ],
      "tables": []
    },
    {
      "title": "Ataque do Vácuo",
      "level": 4,
      "paragraphs": [
        "Ação Necessária: Padrão",
        "Duração: Instantâneo",
        "Você realiza um ataque contra um inimigo, se acertar e o alvo deste golpe estiver abaixo de 50% dos pontos de vida, o ataque é um crítico automático."
      ],
      "tables": []
    },
    {
      "title": "Garra do Dragão",
      "level": 4,
      "paragraphs": [
        "Ação Necessária: Padrão",
        "Duração: 1 Rodada",
        "Você realiza um ataque contra um inimigo, se acertar o alvo deve fazer um teste de fortitude (CD 10 + Mod.Sab + MdN) ou ficará atordoado."
      ],
      "tables": []
    },
    {
      "title": "Olhar do Vulcão",
      "level": 4,
      "paragraphs": [
        "Ação Necessária: Livre",
        "Duração: 1 Rodada",
        "Você realiza um teste de intimidação contra um inimigo, se ele falhar fica desprevenido contra seus ataques até o fim da rodada."
      ],
      "tables": []
    },
    {
      "title": "Andorinha Reversa",
      "level": 4,
      "paragraphs": [
        "Requisito: 20º Nível de Samurai",
        "Ação Necessária:",
        "Duração:",
        "Seu próximo Ataque que acertar, causa o dano do Golpe 3 vezes ao invés de uma única (Em caso de acerto crítico, primeiro aplique os efeitos do crítico e depois ative os efeitos desta habilidade). Você só pode utilizar esta técnica uma única vez por dia."
      ],
      "tables": []
    },
    {
      "title": "O Tempo Fica Parado",
      "level": 4,
      "paragraphs": [
        "Requisito: 20º Nível de Samurai",
        "Ação Necessária: Completa",
        "Duração: Instantâneo",
        "Escolha uma criatura no alcance de seus Ataques, você realiza 6 Ataques contra ela, depois de realizar esses ataques, você imediatamente pode realizar outros 6 ataques contra a mesma criatura ou outra em seu alcance. Você só pode utilizar esta técnica uma única vez por dia."
      ],
      "tables": []
    }
  ],
  "classTalents": [
    {
      "id": "talento-julgamento-de-honra",
      "name": "Julgamento de Honra",
      "prerequisite": "4º Nível de Samurai",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Quando você atinge um golpe que esteja se beneficiando da habilidade “Grito de Kiai” e causa dano, você recebe PVs temporários igual ao seu modificador de sabedoria."
      ]
    },
    {
      "id": "talento-virtude-de-honra",
      "name": "Virtude de Honra",
      "prerequisite": "4º Nível de Samurai",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Enquanto estiver empunhando uma de suas “Armas Ancestrais” você recebe o bônus mágico que ela possui como RE."
      ]
    },
    {
      "id": "talento-fluir-as-emocoes",
      "name": "Fluir as Emoções",
      "prerequisite": "4º Nível de Samurai",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Uma vez por dia o Samurai pode se livrar de um dos seguintes efeitos que o estejam afetando Abalado, Apavorado, Atordoado, Cego, Confuso, Enjoado, Enredado, Fascinado, Ofuscado, Paralisado ou Pasmo ou Surdo. Fazê-lo é uma reação e o Samurai pode ativar esta habilidade mesmo que suas condições não permitam. No 12º Nível ele pode escolher dois efeitos e no 20º se liberta de todos os efeitos da lista que o estiverem afetando."
      ]
    },
    {
      "id": "talento-foco",
      "name": "Foco",
      "prerequisite": "8º Nível de Samurai",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Com armas a distância você pode utilizar sua Sabedoria ao Invés de Destreza para Jogadas de Ataque e Dano."
      ]
    },
    {
      "id": "talento-faca-o-seu-pior",
      "name": "Faça o seu Pior",
      "prerequisite": "8º Nível de Samurai",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Todos os oponentes em um raio de 3m do samurai sofrem uma penalidade de -2 nas suas jogadas de ataque."
      ]
    },
    {
      "id": "talento-respingos-no-lago",
      "name": "Respingos no Lago",
      "prerequisite": "8º Nível de Samurai",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Se você estiver usando duas armas, pode tentar refletir um ataque físico à distância, uma vez por rodada. Faça uma jogada de ataque contra o resultado de um ataque à distância que deseja refletir. Se você vencer a disputa, reflete o projétil ou arma de volta ao atacante, evitando o ataque."
      ]
    },
    {
      "id": "talento-movimentos-lentos",
      "name": "Movimentos Lentos",
      "prerequisite": "12º Nível de Samurai",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Sua margem de ameaça utilizando arcos aumenta em +3."
      ]
    },
    {
      "id": "talento-agua-sob-a-ponte",
      "name": "Água sob a Ponte",
      "prerequisite": "12º Nível de Samurai",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "A margem de ameaça e multiplicador de crítico de suas “Armas Ancestrais” aumenta em +1."
      ]
    },
    {
      "id": "talento-golpe-racha-pedra",
      "name": "Golpe Racha-Pedra",
      "prerequisite": "12º Nível de Samurai",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Com uma ação completa, faça um teste de Força. Você recebe um bônus no dano de seu próximo ataque corpo-a-corpo igual ao resultado do teste."
      ]
    },
    {
      "id": "talento-vigia-serena",
      "name": "Vigia Serena",
      "prerequisite": "16º Nível de Samurai",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Durante um descanso longo seus ancestrais vigiam por você, ao redor do seu local de descanso um efeito similar a magia “Alarme Maior” porém, como este não é um efeito mágico, não pode ser dissipado ou detectado através de magias."
      ]
    },
    {
      "id": "talento-conhecimento-do-cla",
      "name": "Conhecimento do Clã",
      "prerequisite": "16º Nível de Samurai",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Sua habilidade “Decisão dos Ancestrais” sofre as seguintes mudanças\n“Até 3 vezes ao dia, quando você ou qualquer aliado a até 9 metros realizar um teste de perícia, você pode pedir ajuda aos seus ancestrais, se fizer, adicione seu Mod.Sab ao resultado do teste”"
      ]
    },
    {
      "id": "talento-alianca-dos-clas",
      "name": "Aliança dos Clãs",
      "prerequisite": "16º Nível de Samurai",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Quando você escolhe um inimigo em combate para os efeitos da sua habilidade “Armas Ancestrais”, qualquer aliado que possua a mesma habilidade, também recebe os benefícios como se tivesse ativado a habilidade contra o alvo."
      ]
    },
    {
      "id": "talento-um-com-os-ancestrais",
      "name": "Um com os Ancestrais",
      "prerequisite": "20º Nível de Samurai",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você recebe um bônus permanente de +4 em Sabedoria e passa a ter 5 Armas Ancestrais ao invés de 3, por fim todas as suas “Armas Ancestrais” sem tornam armas +10 ao invés de seus +5 Comuns."
      ]
    },
    {
      "id": "talento-uniao-do-corpo-e-espada",
      "name": "União do Corpo e Espada",
      "prerequisite": "20º Nível de Samurai",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Seu número máximo de pontos de Energia da habilidade “Mente sobre o Corpo” se torna seu nível atual * 2, além disso você não está mais limitado a usar apenas uma técnica por rodada, podendo utilizar até 5 técnicas diferentes na mesma rodada"
      ]
    },
    {
      "id": "talento-lamina-cega",
      "name": "Lâmina Cega",
      "prerequisite": "20º Nível de Samurai",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Qualquer resultado “1” ou “2” natural em um ataque é considerado um “20” natural e, assim, um acerto crítico."
      ]
    }
  ]
} satisfies ClassDetail;

~~~~


---

# Classe: druida

**Fonte:** `src/data/class-details/druida.ts`

~~~~typescript
import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "druida",
  "name": "Druida",
  "family": "Druida",
  "sourceDocId": "1u0GU-dQxb1n-stQg0fW3jdopQ9THM2LKwNIGyf030Ww",
  "sourceTitle": "Druida",
  "status": "complete",
  "editorialNotes": [],
  "basics": {
    "hitPoints": "um Druida começa com 8 pontos de vida (+ Mod. de Con) e ganha 2 PV (+mod. Con) por nível seguinte.",
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
        "Devoto, Empatia Selvagem, Estado Natural",
        "0, 1º"
      ],
      [
        "2º",
        "+1",
        "",
        ""
      ],
      [
        "3º",
        "+1",
        "Forma Selvagem (1 Forma)",
        "2°"
      ],
      [
        "4º",
        "+2",
        "",
        ""
      ],
      [
        "5º",
        "+2",
        "Magia Natural, Sítio Sagrado",
        "3°"
      ],
      [
        "6º",
        "+3",
        "",
        ""
      ],
      [
        "7º",
        "+3",
        "Forma Selvagem (2 Formas)",
        "4°"
      ],
      [
        "8º",
        "+4",
        "",
        ""
      ],
      [
        "9º",
        "+4",
        "",
        "5°"
      ],
      [
        "10º",
        "+5",
        "Instinto Feral, Ritos Primordiais",
        ""
      ],
      [
        "11º",
        "+5",
        "Forma Selvagem (3 Formas)",
        "6°"
      ],
      [
        "12º",
        "+6",
        "",
        ""
      ],
      [
        "13º",
        "+6",
        "",
        "7°"
      ],
      [
        "14º",
        "+7",
        "",
        ""
      ],
      [
        "15º",
        "+7",
        "Forma Selvagem (4 Formas), Balança Natural, Corpo Atemporal",
        "8°"
      ],
      [
        "16º",
        "+8",
        "",
        ""
      ],
      [
        "17º",
        "+8",
        "",
        "9°"
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
        "Forma Selvagem (5 Formas)",
        ""
      ],
      [
        "20º",
        "+10",
        "Alma da Floresta, Convocar Espíritos",
        "10°"
      ]
    ]
  },
  "sections": [
    {
      "title": "Magias",
      "level": 3,
      "paragraphs": [
        "Tipo e níveis de magia: você pode lançar magias divinas de nível 0 (truques) e 1º nível. A cada dois níveis de druida seguintes, você pode lançar magias um nível acima: no 3º nível pode lançar magias de 2º nível, no 5º nível você pode lançar magias de 3º nível e assim por diante até o 17º nível, quando você pode lançar magias de 9º nível.",
        "Habilidade-chave: sua habilidade para lançar magias é Sabedoria.",
        "Magias Conhecidas: você conhece 5 magias divinas de nível 0, e também um número de magias de 1º nível igual a 3 + seu modificador de Sabedoria. Cada vez que avançar de nível, você aprende duas novas magias de qualquer nível que possa lançar.",
        "Pontos de Magia: você tem um número de pontos de magia (PM) igual a 1 + modificador de Sabedoria. Cada vez que avança de nível, recebe 3 PM.",
        "Preparação de Magia: você precisa preparar suas magias com antecedência. A cada dia deve estudar durante uma hora, e então escolher um número igual a Metade do Nível + MdC de magias para preparar. Essas magias podem ser conjuradas livremente durante o dia com os PMs do conjurador, podendo receber efeitos de talentos metamágicos e habilidades de classe."
      ],
      "tables": []
    },
    {
      "title": "Devoto",
      "level": 3,
      "paragraphs": [
        "Você deve escolher uma divindade padroeira entre aquelas disponíveis para Druida (Allihanna, Megalokk, Oceano, Kallyadranoch ou Nimb), e atuar como seu devoto. Sua divindade determina quais talentos de poderes concedidos você pode ter."
      ],
      "tables": []
    },
    {
      "title": "Empatia Selvagem",
      "level": 3,
      "paragraphs": [
        "Você sabe se comunicar com animais através de linguagem corporal e vocalizações. Você pode fazer testes de Diplomacia com animais, voce soma seu Mod. Sab nesses testes. Normalmente, animais domésticos são indiferentes e animais selvagens são inamistosos (ou mesmo hostis, no caso de um predador faminto). Se você usar empatia selvagem em um animal da mesma espécie de um de seus companheiros animais, recebe um bônus de +4 no teste."
      ],
      "tables": []
    },
    {
      "title": "Estado Natural",
      "level": 3,
      "paragraphs": [
        "No 1º nível, você se torna imune a doenças e venenos mágicos e mundanos."
      ],
      "tables": []
    },
    {
      "title": "Forma Selvagem",
      "level": 3,
      "paragraphs": [
        "No 3º nível, você pode adquirir a forma de uma criatura selvagem que em geral corresponde a algum animal existente na região, mas também pode ser uma fera desconhecida. Suas estatísticas não mudam, mas você recebe uma habilidade da lista a seguir, de acordo com o animal em que se transformou (por exemplo, escalar para um macaco, presas para um lobo...). Usar esta habilidade é uma ação de movimento e você pode ativar ou alterar qualquer número de Formas com um único uso. Ela pode ser usada um número de vezes por dia igual a 1 + seu modificador de Sabedoria. Na forma selvagem você não pode lançar magias. Outras criaturas podem fazer um teste de Percepção resistido pelo seu teste de Enganação (você recebe um bônus de +10 neste teste) para perceber que você não é um animal comum. Qualquer roupa ou equipamento que você esteja usando é absorvido pela forma selvagem, e ressurge quando você volta ao normal. Cada transformação dura pelo tempo que você quiser, mas você reverte à forma normal se ficar inconsciente ou morrer. A partir do 7º nível, você recebe duas habilidades diferentes. Essas habilidades aumentam para três no 11º nível, quatro no 15 ,e para cinco no 20º nível. Você pode escolher habilidades diferentes a cada transformação, mas nunca uma mesma habilidade mais de uma vez."
      ],
      "tables": []
    },
    {
      "title": "Magia Natural",
      "level": 3,
      "paragraphs": [
        "No 5º nível, Você pode lançar magias quando está na forma selvagem."
      ],
      "tables": []
    },
    {
      "title": "Sitio Sagrado",
      "level": 3,
      "paragraphs": [
        "No 5º nível, você deve fazer uma escolha entre um vínculo com a Natureza ou com sua Divindade.",
        "Se escolher um vínculo com a natureza você recebe um companheiro animal de 5º Nível, sempre que você sobe de nível o Companheiro também recebe um nível, Um Companheiro Animal recebe BBA 1/Nível além dos demais benefícios por passagem de nível exceto Talentos.",
        "Caso seu companheiro venha a morrer você pode invocar um novo com um dia de trabalho (8 Horas) em um ambiente Selvagem. No 15º nível, caso um de seus companheiros morra, você pode trazê-la de volta à vida como na magia ressurreição verdadeira após passar 1 hora em meditação, sem gastar PM ou componentes materiais.",
        "O Companheiro Animal age no turno do Druida, compartilhando de sua rolagem de iniciativa, porém possui apenas uma Ação Padrão por Rodada. Uma vez por rodada o Druida pode gastar sua ação de movimento para ordenar seu companheiro animal, caso o companheiro possa ouvir o druida ele recebe uma ação de movimento nesta rodada.",
        "Caso escolha um vínculo com sua divindade, sempre que estiver em sua forma selvagem recebe os seguintes benefícios:",
        "+2 na CD de Magias",
        "Quando conjurar uma magia pode escolher alterar o tipo de dano dela para dano físico (corte, esmagamento ou perfuração). Este dano está sujeito à redução de dano apropriada (por exemplo, 5/esmagamento), mas não a qualquer tipo de resistência a energia ou a magia."
      ],
      "tables": []
    },
    {
      "title": "Instinto Feral",
      "level": 3,
      "paragraphs": [
        "No 10º nível, você pode atravessar terrenos difíceis sem sofrer redução em seu deslocamento e a dificuldade para rastreá-lo aumenta em CD +10. Além disso seu deslocamento em terra aumenta em 3 metros. Caso possua alguma outra forma de deslocamento, eles também recebem este benefício."
      ],
      "tables": []
    },
    {
      "title": "Ritos Primordiais",
      "level": 3,
      "paragraphs": [
        "A partir do 10º nível você passa a adicionar seu MdC ao dano e cura de suas magias."
      ],
      "tables": []
    },
    {
      "title": "Balança Natural",
      "level": 3,
      "paragraphs": [
        "No 15º nível, o custo para conjurar magias é reduzido em um (mínimo 1) se a habilidade forma selvagem não estiver ativa. Enquanto sua forma selvagem estiver ativa suas magias que tenham como alvo você recebe o efeito do talento metamágico “Estender Magia”."
      ],
      "tables": []
    },
    {
      "title": "Corpo Atemporal",
      "level": 3,
      "paragraphs": [
        "Você é pouco afetado pela passagem do tempo. Você envelhece um ano a cada dez anos."
      ],
      "tables": []
    },
    {
      "title": "Alma da Floresta",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Druida, você nunca pode ter mais de um dos talentos de 20º nível da classe."
      ],
      "tables": []
    },
    {
      "title": "Convocar Espiritos",
      "level": 3,
      "paragraphs": [
        "Você pode lançar uma magia de 10º Ciclo, seu deus Define qual magia você pode escolher de acordo com a lista abaixo ou você pode criar sua própria Magia, caso decida criar sua magia escolha 3 magias que totalizam até 10 níveis, você cria uma magia com o custo e efeito combinado dessas magias, você não precisa preparar a magia escolhida por esta habilidade mas conjurá-la apenas uma vez por dia."
      ],
      "tables": []
    },
    {
      "title": "Formas Selvagens",
      "level": 1,
      "paragraphs": [],
      "tables": []
    },
    {
      "title": "Armadura Natural",
      "level": 4,
      "paragraphs": [
        "Você recebe couro, escamas ou carapaças que fornecem CA igual seu Mod Sab ou seu nível nesta classe, o que for menor.",
        "Agarrar Instantâneo",
        "Quando você acerta um ataque corpo-a-corpo, pode começar uma manobra de agarrar contra a criatura atingida, como uma ação livre. A partir do 11º Nível você recebe um bônus de +4 para agarrar."
      ],
      "tables": []
    },
    {
      "title": "Bote",
      "level": 4,
      "paragraphs": [
        "Quando você faz uma investida, pode atacar com todas as suas armas naturais.",
        "Guerreiro",
        "Você adiciona seu Mod. Sab a suas jogadas de ataque e dano ou seu nível nesta classe, o que for menor."
      ],
      "tables": []
    },
    {
      "title": "Garras e Presas",
      "level": 4,
      "paragraphs": [
        "Você recebe dois ataques naturais de garras, que causam dano equivalente a uma adaga própria para seu tamanho(1d4 para uma criatura Média) e um ataque natural de mordida, que causa dano equivalente a uma espada curta própria para seu tamanho (1d6 para uma criatura Média). A partir do 11º Nível o dano de suas garras sobe para 1d8 e o dano de sua mordida para 1d10."
      ],
      "tables": []
    },
    {
      "title": "Mobilidade Ambiental",
      "level": 4,
      "paragraphs": [
        "Você pode nadar e escalar com deslocamento de 12m. A partir do 11º Nível este valor aumenta para 18m."
      ],
      "tables": []
    },
    {
      "title": "Instintos Apurados",
      "level": 4,
      "paragraphs": [
        "Você recebe faro, visão na penumbra e +4 em testes de Percepção. A partir do 11º Nível você recebe visão no escuro e visão térmica além dos bônus anteriores."
      ],
      "tables": []
    },
    {
      "title": "Mudança de Tamanho",
      "level": 4,
      "paragraphs": [
        "Você aumenta ou diminui seu tamanho em uma categoria. A partir do 11º Nível você pode aumentar ou diminuir duas categorias de tamanho ao invés de uma.",
        "Astúcia",
        "Pré-requisito: 7º Nível de Druida",
        "Você recebe +4 em  Destreza ou Sabedoria. A partir do 11º Nível o bônus fornecido aumenta para +6.",
        "Feérico",
        "Pré-requisito: 7º Nível de Druida",
        "Usar um feitiço de cura em uma outra criatura restaura metade do valor curado em PVs para você. A partir do 11º Nível quando usa uma magia de cura em si mesmo, ela é maximizada.",
        "Planta",
        "Pré-requisito: 7º Nível de Druida",
        "Você recebe imunidade a sono, paralisia e atordoamento. Além disso, recebe dois ataques naturais de pancada, que causam dano equivalente a uma clava própria para seu tamanho (1d6 para uma criatura Média). A partir do 11º Nível o dano de suas clavas aumentam para 1d10."
      ],
      "tables": []
    },
    {
      "title": "Teia",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: 7º Nível de Druida",
        "Você pode lançar uma teia em uma criatura a até 18m como uma ação padrão. Faça um ataque de toque à distância. Se você acertar, a vítima fica imobilizada. Ela pode escapar com uma ação completa e um teste bem-sucedido de Força ou Acrobacia (CD 25)."
      ],
      "tables": []
    },
    {
      "title": "Veneno",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: 7º Nível de Druida",
        "Uma criatura atingida por seu ataque natural deve fazer um teste de Fortitude (CD 10 + MdN + modificador de Constituição). Se falhar, sofre 1d2 pontos de dano na constituição. A partir do 11º Nível este valor aumenta para 2d2.",
        "Resiliência",
        "Pré-requisito: 7º Nível de Druida",
        "Você recebe +4 em Constituição ou Força. A partir do 11º Nível o bônus fornecido aumenta para +6."
      ],
      "tables": []
    },
    {
      "title": "Voar",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: 7º Nível de Druida",
        "Você pode voar com deslocamento de 9m. A partir do 11º Nível este bônus aumenta para 12m."
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
        "Armadura, RD igual a 1 + Mod. Sab. do Druida.",
        "Runas - O Companheiro Animal recebe o Mod. Sab do Druida como bônus em sua CA.",
        "Garras e Presas, O Companheiro Animal recebe metade do Mod. Sab do Druida como bônus em suas JdA e JdD.",
        "Brutalidade, As Armas Naturais do Companheiro passam a causar dano como uma Espada Longa para seu tamanho (1d8 para criaturas Médias) ao invés de Adagas.",
        "Veneno, Uma criatura atingida por seu ataque natural deve fazer um teste de Fortitude (CD 10 + MdN + Mod. Sab. do Druida). Se falhar, sofre mais 2d12 pontos de dano. No 8º e 16º nível o dano aumenta em 2d12. Uma Criatura imune a venenos também é imune a esta habilidade.",
        "Inseparáveis,  Enquanto o Companheiro e o Druida estão adjacentes ao mesmo inimigo, vocês são considerados como flanqueando a criatura independente de suas posições atuais.",
        "Sagaz, O companheiro recebe um bônus de +4 para uma manobra de combate escolhida.",
        "Instinto, O companheiro recebe faro, visão na penumbra e +4 em testes de Percepção.",
        "Vôo, O companheiro recebe Vôo 12 Metros.",
        "Corrida, O Deslocamento do Companheiro aumenta para 18 Metros.",
        "Teia, O Companheiro pode lançar uma teia em uma criatura a até 18m como uma ação padrão. Faça um ataque à distância. Se acertar, a vítima fica imobilizada. Ela pode escapar com uma ação completa e um teste bem-sucedido de Força ou Acrobacia (CD 10 + MdN + Mod. Sab. do Druida).",
        "Monstruosidade, um dos atributos físicos do companheiro (Força, Destreza ou Constituição) aumenta em +4. Quando o Companheiro atinge o 8 nível o bônus aumenta em +2 para +6 e novamente no 16º para um total de +8.",
        "Astúcia, um dos atributos mentais do companheiro (Inteligência, Sabedoria ou Carisma) aumenta em +4. Quando o Companheiro atinge o 8 nível o bônus aumenta em +2 para +6 e novamente no 16º para um total de +8. Um Companheiro com esta habilidade pode utilizar de Armas Simples.",
        "Crescimento, Seu companheiro aumenta ou diminui uma categoria de tamanho."
      ],
      "tables": []
    }
  ],
  "classTalents": [
    {
      "id": "talento-recomposicao-rapida",
      "name": "Recomposição Rápida",
      "prerequisite": "4º Nível de Druida",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Uma vez por dia enquanto estiver em “Forma Selvagem” o Druida pode se livrar de um dos seguintes efeitos que o estejam afetando Abalado, Apavorado, Atordoado, Cego, Confuso, Enjoado, Enredado, Fascinado, Ofuscado, Paralisado ou Pasmo ou Surdo. Fazê-lo é uma reação e o Druida pode ativar esta habilidade mesmo que suas condições não permitam. No 12º Nível ele pode escolher dois efeitos e no 20º se liberta de todos os efeitos da lista que o estiverem afetando."
      ]
    },
    {
      "id": "talento-resiliencia-feral",
      "name": "Resiliência Feral",
      "prerequisite": "4º Nível de Druida",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Quando você é alvo de um ataque corpo-a-corpo ou a distância, pode como reação ativar a “Forma Selvagem” “Resiliência” recebendo +6 de Constituição independente de seu nível, você pode ativar esta habilidade até 3 vezes por dia e seu efeito dura por uma rodada. Esta habilidade permite exceder seu limite de Formas Selvagens ativas simultaneamente."
      ]
    },
    {
      "id": "talento-regeneracao-selvagem",
      "name": "Regeneração Selvagem",
      "prerequisite": "4º Nível de Druida",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Ao ativar “Forma Selvagem”, você recebe cura acelerada 3 por 3 rodadas, este bônus aumenta para 6 e 10 no 12º e 20º Nível de Druida. Diferente de outros bônus, este talento se acumula com qualquer fonte de Cura Acelerada que o Druida receba por esta classe."
      ]
    },
    {
      "id": "talento-recomposicao",
      "name": "Recomposição",
      "prerequisite": "8º Nível de Druida",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Suas magias de cura são maximizadas se a habilidade “Forma Selvagem” não estiver ativa. Enquanto “Forma Selvagem” estiver ativa, seus efeitos de Cura acelerada se tornam instantâneos (Geram o efeito total imediatamente e se encerram)."
      ]
    },
    {
      "id": "talento-equilibrio",
      "name": "Equilíbrio",
      "prerequisite": "8º Nível de Druida",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "A habilidade “Sítio Sagrado” sofre as seguintes alterações:",
        "Se você escolheu um vínculo com a natureza, você pode escolher duas habilidades extras para seu companheiro animal.",
        "Se escolheu um vínculo com a sua divindade, suas magias que causam dano físico ignoram até 10 pontos de RD."
      ]
    },
    {
      "id": "talento-rasgar-a-carne",
      "name": "Rasgar a Carne",
      "prerequisite": "8º Nível de Druida",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Você recebe um ataque adicional toda rodada, porém este ataque pode ser realizado apenas com armas naturais."
      ]
    },
    {
      "id": "talento-crescimento-excessivo",
      "name": "Crescimento Excessivo",
      "prerequisite": "12º Nível de Druida",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Conjurar uma magia de cura em um aliado garante a ele Cura Acelerada igual ao ciclo da magia utilizado por uma rodada. Usar múltiplas magias no mesmo alvo não garante múltiplas instâncias de cura acelerada ao invés disso apenas mantém o maior valor entre os feitiços."
      ]
    },
    {
      "id": "talento-santuario-ancestral",
      "name": "Santuário Ancestral",
      "prerequisite": "12º Nível de Druida",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "A habilidade “Sítio Sagrado” sofre as seguintes alterações:",
        "Se você escolheu um vínculo com a natureza, a margem de ameaça e multiplicador de crítico de seu Companheiro Animal com ataques corpo-a-corpo aumenta em +1.",
        "Se você escolheu um vínculo com a sua divindade, você pode concentrar uma magia adicional simultaneamente, mas esta magia deve beneficiar somente você, você não gasta ações por fazê-lo, caso precise fazer um teste para manter concentração deve fazer um teste individual para cada magia."
      ]
    },
    {
      "id": "talento-selvageria",
      "name": "Selvageria",
      "prerequisite": "12º Nível de Druida",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Enquanto “Forma Selvagem” está ativa, seus ataques naturais recebem +3 em Jogadas de Ataque e rolagens de dano."
      ]
    },
    {
      "id": "talento-lider-da-matilha",
      "name": "Líder da Matilha",
      "prerequisite": "16º Nível de Druida",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Aliados a até 6 Metros do Druida recebem o benefício da habilidade “Instinto Feral”."
      ]
    },
    {
      "id": "talento-congregacao-da-selva",
      "name": "Congregação da Selva",
      "prerequisite": "16º Nível de Druida",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Se você e outro conjurador divino realizarem um descanso longo juntos vocês podem compartilhar seus conhecimentos. Em termos de regra vocês podem escolher magias conhecidas de ambos os conjuradores durante a preparação de magias. Isto não muda sua capacidade de conjurar magias, apenas estende sua lista de magias conhecidas."
      ]
    },
    {
      "id": "talento-a-natureza-prove",
      "name": "A Natureza Provê",
      "prerequisite": "16º Nível de Druida",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Você e seus aliados só precisam descansar por 2 horas ao invés dos 8 Normais quando realizando um descanso longo."
      ]
    },
    {
      "id": "talento-coracao-selvagem",
      "name": "Coração Selvagem",
      "prerequisite": "20º Nível de Druida",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você está permanentemente sobre o efeito de Perfeição dos Animais, Visão da Verdade, Resistência a Magia Maior e outras duas magias divinas de até 6º ciclo a sua escolha. Estes contanto não são efeitos mágicos e não podem ser dissipados."
      ]
    },
    {
      "id": "talento-avatar-dos-deuses",
      "name": "Avatar dos Deuses",
      "prerequisite": "20º Nível de Druida",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "A habilidade “Sítio Sagrado” sofre as seguintes alterações:",
        "Se escolheu um vínculo com a natureza, sempre que você utiliza a habilidade “Forma Selvagem” pode garantir os benefícios para o seu companheiro animal além de si mesmo. Além disso seu companheiro recebe os seguintes benefícios:",
        "Tamanho: aumenta em uma categoria. Aplique os redutores relevantes às jogadas de ataque, classe de armadura e testes de furtividade. Aumente o dano das armas naturais de acordo.",
        "Classe de armadura: +4.",
        "Resistências: RD 5, RE 5, resistência à magia +2.",
        "Habilidades: For +8, Des +2, Con +4, Int +4, Sab +2, Car +2.",
        "Perícias: ganha treinamento em Iniciativa e Percepção.",
        "Talentos: Recebe o talento Vitalidade.",
        "Se escolheu um vínculo com a sua divindade, Você para de envelhecer completamente, deixando de receber as penalidades por Idade Avançada mas ainda recebendo os benefícios pela mesma. Você recebe um bônus permanente de +4 em Sabedoria e por fim recebe 2 PM adicionais por nível nesta classe."
      ]
    },
    {
      "id": "talento-elementalista",
      "name": "Elementalista",
      "prerequisite": "20º Nível de Druida",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você não tem mais um limite de usos diários para a habilidade “Forma Selvagem”. Além disso, o número máximo de formas selvagens que você pode ter ativado simultaneamente aumenta para 8. Por fim, você adiciona a seguinte habilidade a lista de “Forma Selvagem”",
        "Forma Elemental, seu corpo se torna feito de água, ar, fogo ou terra. Você recebe redução de dano 10/mágica e imunidade a atordoamento, paralisia, sono e veneno. Além disso, recebe dois ataques naturais de pancada (1d6 para criaturas médias). Além disso, recebe os benefícios abaixo de acordo com o elemento escolhido."
      ]
    }
  ]
} satisfies ClassDetail;

~~~~


---

# Classe: metamorfo

**Fonte:** `src/data/class-details/metamorfo.ts`

~~~~typescript
import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "metamorfo",
  "name": "Metamorfo",
  "family": "Druida",
  "sourceDocId": "115COKjfkTDU_e8mOIqSkPzGZTGakN-qkaA9oLG7ArXw",
  "sourceTitle": "Metamorfo",
  "status": "complete",
  "editorialNotes": [
    "Alguns pré-requisitos internos da fonte usam a expressão “7º Nível de Druida” dentro do documento do Metamorfo. O compêndio preserva o texto como está na fonte."
  ],
  "basics": {
    "hitPoints": "um Metamorfo começa com 20 pontos de vida (+ Mod. de Con) e ganha 5 PV (+mod. Con) por nível seguinte.",
    "trainedSkills": "Conhecimento(Natureza) e outras 4 + mod. Inteligência.",
    "classSkills": "Adestrar Animais (Car), Atletismo (For), Cavalgar (Des), Conhecimento (Int), Furtividade (Des), Percepção (Sab), Sobrevivência (Sab).",
    "bonusTalents": "Resistência Aprimorada (Fortitude, Vontade)."
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
        "Mente Selvagem, Estado Natural, Forma Selvagem (1 Forma)"
      ],
      [
        "2º",
        "+2",
        "Caçador Primitivo"
      ],
      [
        "3º",
        "+3",
        "Forma Selvagem (2 Formas)"
      ],
      [
        "4º",
        "+4",
        "Fúria Primal"
      ],
      [
        "5º",
        "+5",
        "Forma Selvagem (3 Formas)"
      ],
      [
        "6º",
        "+6",
        "-"
      ],
      [
        "7º",
        "+7",
        "Forma Selvagem (4 Formas)"
      ],
      [
        "8º",
        "+8",
        "Forma Bestial (+2)"
      ],
      [
        "9º",
        "+9",
        "Forma Selvagem (5 Formas)"
      ],
      [
        "10º",
        "+10",
        "Fúria Primal"
      ],
      [
        "11º",
        "+11",
        "Forma Selvagem (6 Formas)"
      ],
      [
        "12º",
        "+12",
        "Instinto Carnívoro"
      ],
      [
        "13º",
        "+13",
        "Forma Selvagem (7 Formas)"
      ],
      [
        "14º",
        "+14",
        "Aspecto da Natureza"
      ],
      [
        "15º",
        "+15",
        "Corpo Atemporal, Forma Selvagem (8 Formas)"
      ],
      [
        "16º",
        "+16",
        "Forma Bestial (+4)"
      ],
      [
        "17º",
        "+17",
        "Forma Selvagem (9 Formas)"
      ],
      [
        "18º",
        "+18",
        "-"
      ],
      [
        "19º",
        "+19",
        "Forma Selvagem (10 Formas)"
      ],
      [
        "20º",
        "+20",
        "Evolucionista"
      ]
    ]
  },
  "sections": [
    {
      "title": null,
      "level": 3,
      "paragraphs": [
        "Mente Selvagem",
        "Você não pode aprender a utilizar Armas ou Armaduras ou Conjurar Magias, caso adquira níveis em outra classe ou talentos que fossem lhe garantir habilidade para uso dos mesmos, esta habilidade sobrescreve seus efeitos. Seu tipo muda para monstro e por fim seus testes de intimidação passam a ser feitos utilizando de Força ao invés de Carisma."
      ],
      "tables": []
    },
    {
      "title": "Estado Natural",
      "level": 3,
      "paragraphs": [
        "No 1º nível, você se torna imune a doenças e venenos mágicos e mundanos."
      ],
      "tables": []
    },
    {
      "title": "Forma Selvagem",
      "level": 3,
      "paragraphs": [
        "No 1º nível, você pode adquirir a forma de uma criatura selvagem que em geral corresponde a algum animal existente na região, mas também pode ser uma fera desconhecida. Suas estatísticas não mudam, mas você recebe uma habilidade da lista a seguir, de acordo com o animal em que se transformou (por exemplo, escalar para um macaco, presas para um lobo...). Usar esta habilidade é uma ação de movimento e você pode ativar ou alterar qualquer número de Formas com um único uso. Ela pode ser usada um número de vezes por dia igual a 1 + seu modificador de Sabedoria. Na forma selvagem você não pode lançar magias. Outras criaturas podem fazer um teste de Percepção resistido pelo seu teste de Enganação (você recebe um bônus de +10 neste teste) para perceber que você não é um animal comum. Qualquer roupa ou equipamento que você esteja usando é absorvido pela forma selvagem, e ressurge quando você volta ao normal. Cada transformação dura pelo tempo que você quiser, mas você reverte à forma normal se ficar inconsciente ou morrer. A partir do 3º nível, você recebe duas habilidades diferentes. Essas habilidades em um a cada dois níveis para um máximo de 10 formas no 19º nível. Você pode escolher habilidades diferentes a cada transformação, mas nunca uma mesma habilidade mais de uma vez."
      ],
      "tables": []
    },
    {
      "title": "Caçador Primitivo",
      "level": 3,
      "paragraphs": [
        "Você recebe Faro, para rastrear uma criatura que esteja ferida ou sangrando você recebe um bônus de +15 nos testes de Sobrevivência."
      ],
      "tables": []
    },
    {
      "title": "Fúria Primal",
      "level": 3,
      "paragraphs": [
        "Seus ataques naturais passam a ser considerados como armas mágicas menores para atravessar RD, no 10º nível passam a ser consideradas como armas mágicas de aura média."
      ],
      "tables": []
    },
    {
      "title": "Forma Bestial",
      "level": 3,
      "paragraphs": [
        "Você recebe um bônus permanente de +2 em Força ou Destreza e +2 em Constituição, este bônus aumenta em +2 (Para um total de +4) no 16º nível."
      ],
      "tables": []
    },
    {
      "title": "Instinto Carnívoro",
      "level": 3,
      "paragraphs": [
        "Quando você reduz uma criatura a 0 ou menos PVs através de seus ataques com armas naturais você pode alterar uma de suas “Formas Selvagens” ativas por outra qualquer da lista que possa usar e que não esteja ativa. Esta mudança é uma ação livre mas pode ocorrer apenas uma vez por rodada. Você não gasta seus usos diários da habilidade ao “Forma Selvagem” ao utilizar desta habilidade"
      ],
      "tables": []
    },
    {
      "title": "Aspecto da Natureza",
      "level": 3,
      "paragraphs": [
        "Você aumenta ou diminui uma categoria de tamanho permanente de acordo com a sua escolha. Diferente de outros efeitos, sua alteração por esta habilidade lhe garante apenas seus benefícios sem as penalidades por alteração de tamanho. (Penalidades em Dados de Dano, Penalidades em Perícia e Penalidades para Manobras)"
      ],
      "tables": []
    },
    {
      "title": "Corpo Atemporal",
      "level": 3,
      "paragraphs": [
        "Você é pouco afetado pela passagem do tempo. Você envelhece um ano a cada dez anos."
      ],
      "tables": []
    },
    {
      "title": "Evolucionista",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Metamorfo, você nunca pode ter mais de um dos talentos de 20º nível da classe."
      ],
      "tables": []
    },
    {
      "title": "Formas Selvagens",
      "level": 1,
      "paragraphs": [],
      "tables": []
    },
    {
      "title": "Armadura Natural",
      "level": 4,
      "paragraphs": [
        "Você recebe couro, escamas ou carapaças que fornecem CA igual seu Mod Sab ou seu nível nesta classe, o que for menor."
      ],
      "tables": []
    },
    {
      "title": "Regeneração",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: Armadura Natural ativo",
        "Você recebe Cura Acelerada igual ao seu Mod. Sab."
      ],
      "tables": []
    },
    {
      "title": "Espinhos",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: Armadura Natural ativo",
        "Quando você sofre dano por um ataque corpo-a-corpo, o atacante sofre dano igual seu Mod Sab ou seu nível nesta classe, o que for menor."
      ],
      "tables": []
    },
    {
      "title": "Bote",
      "level": 4,
      "paragraphs": [
        "Quando você faz uma investida, pode atacar com todas as suas armas naturais."
      ],
      "tables": []
    },
    {
      "title": "Dilacerar",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: Bote ativo",
        "Se você acertar um mesmo alvo com dois ataques de garra na mesma rodada, causa dano extra igual a um ataque de garra com um dado adicional do mesmo tipo (por exemplo, se o seu ataque de garra causa 1d6 pontos de dano, seu ataque de dilacerar causará 2d6)"
      ],
      "tables": []
    },
    {
      "title": "Pernas Poderosas",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: Bote ativo",
        "Seu deslocamento em terra aumenta em +6 Metros."
      ],
      "tables": []
    },
    {
      "title": "Guerreiro",
      "level": 4,
      "paragraphs": [
        "Você adiciona seu Mod. Sab a suas jogadas de ataque e dano ou seu nível nesta classe, o que for menor."
      ],
      "tables": []
    },
    {
      "title": "Garras e Presas",
      "level": 4,
      "paragraphs": [
        "Você recebe dois ataques naturais de garras, que causam dano equivalente a uma adaga própria para seu tamanho(1d4 para uma criatura Média) e um ataque natural de mordida, que causa dano equivalente a uma espada curta própria para seu tamanho (1d6 para uma criatura Média), o tipo de ambas estas armas é corte. A partir do 11º Nível o dano de suas garras sobe para 1d8 e o dano de sua mordida para 1d10."
      ],
      "tables": []
    },
    {
      "title": "Presas Perfurantes",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: Garras e Presas ativo",
        "Uma criatura atingida por seu ataque natural deve fazer um teste de Fortitude (CD 10 + MdN + modificador de Constituição). Se falhar, sofre 1d2 pontos de dano na Força. A partir do 11º Nível este valor aumenta para 2d2."
      ],
      "tables": []
    },
    {
      "title": "Tirar Bocados",
      "level": 4,
      "paragraphs": [
        "Seus ataques naturais tem sua margem de ameaça e multiplicador aumentados em +1."
      ],
      "tables": []
    },
    {
      "title": "Mobilidade Ambiental",
      "level": 4,
      "paragraphs": [
        "Você pode nadar e escalar com deslocamento de 12m. A partir do 11º Nível este valor aumenta para 18m."
      ],
      "tables": []
    },
    {
      "title": "Perseguidor",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: Mobilidade Ambiental",
        "Você consegue respirar embaixo d’água e recebe percepção às cegas 18m."
      ],
      "tables": []
    },
    {
      "title": "Instintos Apurados",
      "level": 4,
      "paragraphs": [
        "Você recebe faro, visão na penumbra e +4 em testes de Percepção. A partir do 11º Nível você recebe visão no escuro e visão térmica além dos bônus anteriores."
      ],
      "tables": []
    },
    {
      "title": "Instintos Sobrenaturais",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: Instintos Apurados ativo",
        "Você não pode ser surpreendido."
      ],
      "tables": []
    },
    {
      "title": "Mudança de Tamanho",
      "level": 4,
      "paragraphs": [
        "Você aumenta ou diminui seu tamanho em uma categoria. A partir do 11º Nível você pode aumentar ou diminuir duas categorias de tamanho ao invés de uma."
      ],
      "tables": []
    },
    {
      "title": "Agarrar Instantâneo",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: 7º Nível de Druida",
        "A primeira vez na rodada que você acerta um ataque corpo-a-corpo, pode começar uma manobra de agarrar contra a criatura atingida como uma ação livre."
      ],
      "tables": []
    },
    {
      "title": "Constrição",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: Agarrar Instantâneo ativo",
        "No início do seu turno, você automaticamente causa 1d8 + MdN a qualquer criatura que esteja agarrando."
      ],
      "tables": []
    },
    {
      "title": "Titânico",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: Constrição ativo",
        "Você pode agarrar e manter duas criaturas agarradas simultaneamente."
      ],
      "tables": []
    },
    {
      "title": "Ferrão",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: 7º Nível de Druida",
        "Você recebe um ataque natural de ferrão, que causa dano equivalente a uma Espada longa para seu tamanho(1d8 para uma criatura Média), seu primeiro ataque com esta arma toda rodada se acertar, reduz a CA de seu alvo em -2 por 1 minuto até um máximo de -8."
      ],
      "tables": []
    },
    {
      "title": "Bico",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: 7º Nível de Druida",
        "Você ganha um ataque natural com um bico. Este ataque causa o mesmo dano que uma Espada longa para uma criatura do seu tamanho, mas seu crítico é 19-20/x3 e seu tipo é perfuração."
      ],
      "tables": []
    },
    {
      "title": "Astúcia",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: 7º Nível de Druida",
        "Você recebe +4 em  Destreza ou Sabedoria. A partir do 11º Nível o bônus fornecido aumenta para +6."
      ],
      "tables": []
    },
    {
      "title": "Evasão da Floresta",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: Astúcia ativo",
        "Quando sofre um ataque que permite um teste de Reflexos para reduzir o dano à metade, você não sofre nenhum dano se for bem-sucedido"
      ],
      "tables": []
    },
    {
      "title": "Planta",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: 7º Nível de Druida",
        "Você recebe imunidade a sono, paralisia e atordoamento. Além disso, recebe dois ataques naturais de pancada, que causam dano equivalente a uma clava própria para seu tamanho (1d6 para uma criatura Média). A partir do 11º Nível o dano de suas clavas aumentam para 1d10."
      ],
      "tables": []
    },
    {
      "title": "Esporos",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: Planta ativo",
        "Você está constantemente soltando esporos que irritam a visão das criaturas ao seu redor. Cada criatura adjacente a você tem 20% chance de errar seus ataques. Criaturas que não dependem da visão para atacar são imunes a este efeito."
      ],
      "tables": []
    },
    {
      "title": "Teia",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: 7º Nível de Druida",
        "Você pode lançar uma teia em uma criatura a até 18m como uma ação padrão. Faça um ataque de toque à distância. Se você acertar, a vítima fica imobilizada. Ela pode escapar com uma ação completa e um teste bem-sucedido de Força ou Acrobacia (CD 25)."
      ],
      "tables": []
    },
    {
      "title": "Veneno",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: 7º Nível de Druida",
        "Uma criatura atingida por seu ataque natural deve fazer um teste de Fortitude (CD 10 + MdN + modificador de Constituição). Se falhar, sofre 1d2 pontos de dano na constituição. A partir do 11º Nível este valor aumenta para 2d2."
      ],
      "tables": []
    },
    {
      "title": "Resiliência",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: 7º Nível de Druida",
        "Você recebe +4 em Constituição ou Força. A partir do 11º Nível o bônus fornecido aumenta para +6."
      ],
      "tables": []
    },
    {
      "title": "Voar",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: 7º Nível de Druida",
        "Você pode voar com deslocamento de 9m. A partir do 11º Nível este bônus aumenta para 12m."
      ],
      "tables": []
    },
    {
      "title": "Investida Aérea",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: Voar ativo",
        "Quando estiver voando e fizer uma investida aumenta o bônus garantido pela investida em +2 e causa 4 pontos de dano adicional com seus ataques na rodada."
      ],
      "tables": []
    },
    {
      "title": "Pisotear",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: 7º Nível de Druida",
        "Quando se movimenta, você pode passar por cima de criaturas duas ou mais categorias de tamanho menores que você, causando 4d6 + MdN + Mod. For. Essas criaturas podem fazer um teste de Reflexos (CD 10 + MdN + Mod For.) para reduzir o dano à metade."
      ],
      "tables": []
    },
    {
      "title": "Lebre",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: 7º Nível de Druida",
        "Quando se movimenta, você pode ignorar quadrados ocupados por criaturas com uma ou mais categorias de tamanho acima de você, você recebe +10 em testes de Atletismo e Acrobacia."
      ],
      "tables": []
    }
  ],
  "classTalents": [
    {
      "id": "talento-recomposicao-rapida",
      "name": "Recomposição Rápida",
      "prerequisite": "4º Nível de Metamorfo",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Uma vez por dia enquanto estiver em “Forma Selvagem” o Metamorfo pode se livrar de um dos seguintes efeitos que o estejam afetando Abalado, Apavorado, Atordoado, Cego, Confuso, Enjoado, Enredado, Fascinado, Ofuscado, Paralisado ou Pasmo ou Surdo. Fazê-lo é uma reação e o Metamorfo pode ativar esta habilidade mesmo que suas condições não permitam. No 12º Nível ele pode escolher dois efeitos e no 20º se liberta de todos os efeitos da lista que o estiverem afetando."
      ]
    },
    {
      "id": "talento-resiliencia-feral",
      "name": "Resiliência Feral",
      "prerequisite": "4º Nível de Metamorfo",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Quando você é alvo de um ataque corpo-a-corpo ou a distância, pode como reação ativar a “Forma Selvagem” “Resiliência” recebendo +6 de Constituição independente de seu nível, você pode ativar esta habilidade até 3 vezes por dia e seu efeito dura por uma rodada. Esta habilidade permite exceder seu limite de Formas Selvagens ativas simultaneamente."
      ]
    },
    {
      "id": "talento-regeneracao-frenetica",
      "name": "Regeneração Frenética",
      "prerequisite": "4º Nível de Metamorfo",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Causar um acerto crítico com uma arma natural faz com que você receba Cura Acelerada 5 por 3 rodadas. O bônus de cura aumenta para 10 e 15 no 12º e 20º nível. Múltiplas aplicações deste talento não se acumulam mas renovam sua duração."
      ]
    },
    {
      "id": "talento-peso-pesado",
      "name": "Peso Pesado",
      "prerequisite": "8º Nível de Metamorfo",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Seus ataques naturais são brutos e pesados, sempre que você atinge uma criatura com um ataque natural pode iniciar uma manobra de empurrar como parte do ataque."
      ]
    },
    {
      "id": "talento-garra-atroz",
      "name": "Garra Atroz",
      "prerequisite": "8º Nível de Metamorfo",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Seus ataques naturais na rodada que forem um acerto crítico recuperam um uso diário da habilidade “Forma Selvagem”"
      ]
    },
    {
      "id": "talento-predador-primal",
      "name": "Predador Primal",
      "prerequisite": "8º Nível de Metamorfo",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Sua habilidade “Fúria Primal” faz como se suas armas naturais fossem consideradas como uma categoria de aura mágica acima para atravessar RD."
      ]
    },
    {
      "id": "talento-selvageria-do-touro",
      "name": "Selvageria do Touro",
      "prerequisite": "12º Nível de Metamorfo",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Suas manobras causam MdN+Mod.For como dano em criaturas que falham em resisti-las. Em criaturas que têm sucesso em resistir suas manobras elas ainda recebem MdN como dano."
      ]
    },
    {
      "id": "talento-selvageria-do-tigre",
      "name": "Selvageria do Tigre",
      "prerequisite": "12º Nível de Metamorfo",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Enquanto estiver abaixo da metade dos seus pontos de vida, seus ataques com armas naturais tem margem de crítico e multiplicador aumentado em +1."
      ]
    },
    {
      "id": "talento-selvageria-do-lobo",
      "name": "Selvageria do Lobo",
      "prerequisite": "12º Nível de Metamorfo",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Na rodada em que você ativa “Forma Selvagem” ou altera uma de suas formas ativas, seus ataques naturais recebem +3 em Jogadas de Ataque e rolagens de dano até o fim de sua próxima rodada."
      ]
    },
    {
      "id": "talento-cheiro-da-presa",
      "name": "Cheiro da Presa",
      "prerequisite": "16º Nível de Metamorfo",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Aliados a até 18 metros de você recebem o benefício da habilidade “Caçador Primitivo”"
      ]
    },
    {
      "id": "talento-fabrica-de-monstro",
      "name": "Fabrica de Monstro",
      "prerequisite": "16º Nível de Metamorfo",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Você sabe se comunicar com monstros através de linguagem corporal e vocalizações. Você pode fazer testes de Diplomacia com monstros, você soma seu Mod. Sab nesses testes."
      ]
    },
    {
      "id": "talento-a-natureza-prove",
      "name": "A Natureza Provê",
      "prerequisite": "16º Nível de Metamorfo",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Você e seus aliados só precisam descansar por 2 horas ao invés dos 8 Normais quando realizando um descanso longo."
      ]
    },
    {
      "id": "talento-forma-fluida",
      "name": "Forma Fluida",
      "prerequisite": "20º Nível de Metamorfo",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "A habilidade “Aspecto da Natureza” sofre as seguintes mudanças:\nVocê aumenta ou diminui três categorias de tamanho de acordo com a sua escolha, você pode ativar e desativar esta habilidade com uma ação de movimento, podendo escolher se irá aumentar ou diminuir sempre que ativar esta habilidade. Diferente de outros efeitos, sua alteração por esta habilidade lhe garante apenas seus benefícios sem as penalidades por alteração de tamanho. (Penalidades em Dados de Dano, Penalidades em Perícia e Penalidades para Manobras). Você recebe RD 10 e pode escolher duas formas selvagens para estarem permanentemente ativadas, estas formas selvagens não contam no seu limite de formas e não desativam mesmo que caia inconsciente."
      ]
    },
    {
      "id": "talento-instintos-afiados",
      "name": "Instintos Afiados",
      "prerequisite": "20º Nível de Metamorfo",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você está permanentemente sobre o efeito de Perfeição dos Animais, além disso, sempre que ativar a habilidade “Forma Selvagem” para adquirir uma Arma Natural, escolha encantamentos mágicos que somem até +5, a arma natural escolhida recebe estes bônus até que você desative. Estes efeitos contanto não são efeitos mágicos e não podem ser dissipados."
      ]
    },
    {
      "id": "talento-elementalista",
      "name": "Elementalista",
      "prerequisite": "20º Nível de Metamorfo",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você não tem mais um limite de usos diários para a habilidade “Forma Selvagem”. Além disso, o número máximo de formas selvagens que você pode ter ativado simultaneamente aumenta para 15. Por fim, você adiciona a seguinte habilidade a lista de “Forma Selvagem”",
        "Forma Elemental, seu corpo se torna feito de água, ar, fogo ou terra. Você recebe redução de dano 10/mágica e imunidade a atordoamento, paralisia, sono e veneno. Além disso, recebe dois ataques naturais de pancada (1d6 para criaturas médias). Além disso, recebe os benefícios abaixo de acordo com o elemento escolhido."
      ]
    }
  ]
} satisfies ClassDetail;

~~~~


---

# Classe: senhor-das-feras

**Fonte:** `src/data/class-details/senhor-das-feras.ts`

~~~~typescript
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

~~~~


---

# Classe: clerigo

**Fonte:** `src/data/class-details/clerigo.ts`

~~~~typescript
import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "clerigo",
  "name": "Clérigo",
  "family": "Clérigo",
  "sourceDocId": "1zk5Bek-jYAWnP8h4G9mxhmkuXYMQ-Uiqs3Jkq3nReKk",
  "sourceTitle": "Clérigo",
  "status": "complete",
  "editorialNotes": [],
  "basics": {
    "hitPoints": "um Clérigo começa com 8 pontos de vida (+ Mod. de Con) e ganha 2 PV (+mod. Con) por nível seguinte.",
    "trainedSkills": "Conhecimento(Religião) e outras 4 + mod. Inteligência.",
    "classSkills": "Conhecimento (Int), Cura (Sab), Diplomacia (Car), Identificar Magia (Int), Intuição (Sab), Iniciativa (Des), Meditação (Sab), Ofício (Int), Percepção (Sab).",
    "bonusTalents": "Usar Armaduras (leves),Usar Armas Simples, Resistência Aprimorada (Vontade)."
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
        "Canalizar Energia (1 Dado), Devoto, Símbolo Sagrado",
        "0, 1º"
      ],
      [
        "2º",
        "+1",
        "",
        ""
      ],
      [
        "3º",
        "+1",
        "Canalizar Energia (2 Dados)",
        "2°"
      ],
      [
        "4º",
        "+2",
        "",
        ""
      ],
      [
        "5º",
        "+2",
        "Canalizar Energia (3 Dados), Divina Comédia",
        "3°"
      ],
      [
        "6º",
        "+3",
        "",
        ""
      ],
      [
        "7º",
        "+3",
        "Canalizar Energia (4 Dados)",
        "4°"
      ],
      [
        "8º",
        "+4",
        "",
        ""
      ],
      [
        "9º",
        "+4",
        "Canalizar Energia (5 Dados)",
        "5°"
      ],
      [
        "10º",
        "+5",
        "A Fé move Montanhas, Palavras do Divino",
        ""
      ],
      [
        "11º",
        "+5",
        "Canalizar Energia (6 Dados)",
        "6°"
      ],
      [
        "12º",
        "+6",
        "",
        ""
      ],
      [
        "13º",
        "+6",
        "Canalizar Energia (7 Dados)",
        "7°"
      ],
      [
        "14º",
        "+7",
        "",
        ""
      ],
      [
        "15º",
        "+7",
        "Canalizar Energia (8 Dados), Apostolização",
        "8°"
      ],
      [
        "16º",
        "+8",
        "",
        ""
      ],
      [
        "17º",
        "+8",
        "Canalizar Energia (9 Dados)",
        "9°"
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
        "Canalizar Energia (10 Dados)",
        ""
      ],
      [
        "20º",
        "+10",
        "Apoteosis, A última ceia",
        "10°"
      ]
    ]
  },
  "sections": [
    {
      "title": "Magias",
      "level": 3,
      "paragraphs": [
        "Tipo e níveis de magia: você pode lançar magias divinas de nível 0 (truques) e 1º nível. A cada dois níveis de clérigo seguintes, você pode lançar magias um nível acima: no 3º nível pode lançar magias de 2º nível, no 5º nível você pode lançar magias de 3º nível e assim por diante até o 17º nível, quando você pode lançar magias de 9º nível.",
        "Habilidade-chave: sua habilidade para lançar magias é Sabedoria.",
        "Magias Conhecidas: você conhece 5 magias divinas de nível 0, e também um número de magias de 1º nível igual a 3 + seu modificador de Sabedoria. Cada vez que avançar de nível, você aprende duas novas magias de qualquer nível que possa lançar.",
        "Pontos de Magia: você tem um número de pontos de magia (PM) igual a 1 + modificador de Sabedoria. Cada vez que avança de nível, recebe 3 PM.",
        "Preparação de Magia: você precisa preparar suas magias com antecedência. A cada dia deve estudar durante uma hora, e então escolher um número igual a Metade do Nível + MdC de magias para preparar. Essas magias podem ser conjuradas livremente durante o dia com os PMs do conjurador, podendo receber efeitos de talentos metamágicos e habilidades de classe."
      ],
      "tables": []
    },
    {
      "title": "Canalizar Energia",
      "level": 3,
      "paragraphs": [
        "Você pode liberar uma onda de energia com alcance de até 9m a partir de você, todas as criaturas dentro do alcance de sua habilidade são afetadas.",
        "Canalizar Energia Positiva (Divindade Bondosa), Cura 1d6 PV de todas as criaturas na área exceto mortos vivos que recebem dano sagrado na mesma proporção.",
        "Canalizar Energia Negativa (Divindade Maligna), Cura 1d6 PV para criaturas mortas-vivas e causa a mesma quantia de dano profano em outras criaturas.",
        "Canalizar Energia (Divindade Neutra), Escolha um número de criaturas igual à seu Mod. Sab dentro do alcance da habilidade, elas Curam 1d4 PV, todas as outras criaturas dentro da área recebem o mesmo valor em dano sagrado.",
        "Criaturas que sofrem dano têm direito a um teste de Vontade (CD 10 + MdN + Mod. Sab) para reduzir esse dano à metade. Usar esta habilidade é uma ação padrão. Ela pode ser usada um número de vezes por dia igual à MdN + Mod. Sab. A cada dois níveis nesta classe o número de dados da habilidade aumenta em 1."
      ],
      "tables": []
    },
    {
      "title": "Devoto",
      "level": 3,
      "paragraphs": [
        "Você deve escolher uma divindade padroeira e atuar como seu devoto. As divindades determinam quais talentos de poderes concedidos você pode ter. Clérigos recebem habilidades diferentes dependendo da tendência de seu Deus."
      ],
      "tables": []
    },
    {
      "title": "Símbolo Sagrado",
      "level": 3,
      "paragraphs": [
        "Você recebe um objeto à sua escolha. Pode ser uma varinha, cajado, livro, chapéu, amuleto ou mesmo arma.",
        "Este item pode ser usado para lançar, uma vez por dia, qualquer magia que você conheça sem gastar PM (incluindo custos extras de talentos metamágicos). No entanto, para lançar qualquer magia sem estar usando ou segurando o item, você precisa fazer um teste de Religião (CD 15 + nível da magia). Se falhar, a magia não funciona, mas você gasta os PM mesmo assim.",
        "O Símbolo Sagrado tem dureza 10 e PV iguais a metade dos PV máximos do Clérigo. Um item danificado é restaurado na próxima vez que você preparar suas magias. Construir um novo Símbolo consome uma semana de trabalho e 100 TO."
      ],
      "tables": []
    },
    {
      "title": "Divina Comédia",
      "level": 3,
      "paragraphs": [
        "Você pode lançar a magia detectar mortos-vivos à vontade, com uma ação de movimento e sem gastar PM. Além disso, recebe uma das habilidades abaixo de acordo com seu deus.",
        "Exorcismo Final (Divindade Bondosa), Como uma ação padrão, e gastando um uso de canalizar energia, você pode escolher como alvo um morto-vivo cujo nível não supera seu nível nesta classe a até 9m. O morto-vivo então deve fazer um teste de Vontade (CD 10 + mod. Sab + MdN); se falhar, é exorcizado (destruído imediatamente)",
        "Últimas Escolhas (Divindade Neutra), Como uma ação padrão, e gastando um uso de canalizar energia, você pode escolher como alvo um morto-vivo cujo nível não supera seu nível nesta classe -4 a até 9m e escolher entre Exorcismo Final ou Baixa do Soldado. O morto-vivo então deve fazer um teste de Vontade (CD 10 + mod. Sab + MdN); Você gera os efeitos de Divina Comédia de acordo com a escolha.",
        "Baixa do Soldado (Divindade Maligna), Como uma ação padrão, e gastando um uso de canalizar energia, você pode escolher como alvo um morto-vivo cujo nível não supera seu nível nesta classe a até 9m. O morto-vivo então deve fazer um teste de Vontade (CD 10 + mod. Sab + MdN); se falhar, torna-se um servo seu, incapaz de desobedecer qualquer ordem sua. Mortos Vivos inteligentes (Int 3 ou Mais) podem realizar o teste novamente a cada hora para se soltarem do controle. O número máximo de Mortos-Vivos que você pode ter sob seu controle é igual ao dobro do seu nível nesta classe."
      ],
      "tables": []
    },
    {
      "title": "A Fé move Montanhas",
      "level": 3,
      "paragraphs": [
        "Escolha um aliado qualquer que esteja a até 30 metros da sua posição, três vezes por dia como uma Ação de Movimento você puxa o aliado até um espaço não ocupado adjacente a você. Você deve ter linha de visão para que a habilidade funcione, uma criatura movida por este efeito não sofre ataques de oportunidade."
      ],
      "tables": []
    },
    {
      "title": "Palavras do Divino",
      "level": 3,
      "paragraphs": [
        "A partir do 10º nível você passa a adicionar seu MdC ao dano e cura de suas magias."
      ],
      "tables": []
    },
    {
      "title": "Apostolização",
      "level": 3,
      "paragraphs": [
        "A partir do 15º nível, como uma ação Livre, o clérigo pode escolher um número de aliados que estejam a até 30 metros, igual ao seu modificador de sabedoria. O Clérigo passa então a poder lançar suas magias de toque a partir destes alvos como se ele estivesse em seus lugares (por exemplo, um aliado a 60 metros tocando alguém ferido para que o Clérigo possa usar Curar Ferimentos). Essa habilidade dura por 1 minuto e pode ser utilizada 3 vezes por dia."
      ],
      "tables": []
    },
    {
      "title": "Apoteosis",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Clérigo, você nunca pode ter mais de um dos talentos de 20º nível da classe."
      ],
      "tables": []
    },
    {
      "title": "A última ceia",
      "level": 3,
      "paragraphs": [
        "Você pode lançar uma magia de 10º Ciclo, seu deus Define qual magia você recebe ou você pode criar sua própria Magia, caso decida criar sua magia escolha 3 magias que totalizam até 10 níveis, você cria uma magia com o custo e efeito combinado dessas magias, você não precisa preparar a magia escolhida por esta habilidade mas conjurá-la apenas uma vez por dia."
      ],
      "tables": []
    }
  ],
  "classTalents": [
    {
      "id": "talento-piedade-dos-anjos",
      "name": "Piedade dos Anjos",
      "prerequisite": "4º Nível de Clérigo",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Quando conjurar um feitiço de cura em si mesmo, pode escolher receber metade do valor que a magia iria restaurar como PVs temporários por 1 minuto ao invés de Cura. A partir do 12º Nível, você recebe os PVs temporários mesmo que a magia não fosse restaurar seus pontos de vida, mas apenas uma vez por dia."
      ]
    },
    {
      "id": "talento-mover-se-com-fe",
      "name": "Mover-se com Fé",
      "prerequisite": "4º Nível de Clérigo",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Depois de restaurar seus pontos de Vida, seja com uma magia de Cura ou Habilidade de Classe, você pode se movimentar 1,5 Metros em qualquer direção não ocupada. Este movimento não gera ataques de oportunidade. No 6º, 12º e 18º nível o deslocamento fornecido por esta habilidade aumenta em 1,5 metros."
      ]
    },
    {
      "id": "talento-palavras-da-vida",
      "name": "Palavras da Vida",
      "prerequisite": "4º Nível de Clérigo",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "A primeira vez em combate que você é atingido por um Ataque Corpo-a-Corpo pode imediatamente lançar uma magia de cura alvejando somente si mesmo."
      ]
    },
    {
      "id": "talento-de-corpo-e-alma",
      "name": "De Corpo e Alma",
      "prerequisite": "8º Nível de Clérigo",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Depois de utilizar “Canalizar Energia” você pode escolher ativar a habilidade uma segunda vez na mesma rodada, porém utilizando apenas metade dos dados originais da habilidade."
      ]
    },
    {
      "id": "talento-roda-do-destino",
      "name": "Roda do Destino",
      "prerequisite": "8º Nível de Clérigo",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Depois de conjurar uma magia de Necromancia, sua próxima magia nesta rodada, se tiver o descritor de Cura, tem seu custo reduzido em 1 (Mínimo 1). Depois de Conjurar uma magia de Cura, sua próxima magia nesta rodada, se tiver o descritor de Necromancia, tem seu custo reduzido em 1 (Minimo 1)."
      ]
    },
    {
      "id": "talento-gracas-de-dante",
      "name": "Graças de Dante",
      "prerequisite": "8º Nível de Clérigo",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Sempre que usar “Divina Comédia\" com sucesso, você recebe um bônus igual ao ND do morto-vivo afetado na CD de seu próximo “Divina Comédia”, o bônus máximo que você pode receber por esta habilidade é igual a seu Mod. Sab."
      ]
    },
    {
      "id": "talento-infusao-de-gloria",
      "name": "Infusão de Glória",
      "prerequisite": "12º Nível de Clérigo",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Sempre que você usa “Canalizar Energia” de forma consecutiva, você aumenta o número de dados da habilidade em 1, em até no Máximo 3 Dados adicionais. Por exemplo, um Clérigo de 12º na primeira rodada utilizaria um “Canalizar Energia” por 6d6, na rodada seguinte se utilizar a habilidade novamente o faria por 7d6, na terceira rodada por 8d6 e assim por diante até chegar em 9d6 na quarta rodada. Se em algum momento o Clérigo não utilizar esta habilidade durante uma rodada os dados dela são reduzidos em 1 até alcançar seu valor original."
      ]
    },
    {
      "id": "talento-evangelismo",
      "name": "Evangelismo",
      "prerequisite": "12º Nível de Clérigo",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Depois de conjurar uma magia de Necromancia e reduzir um inimigo a 0 ou menos PVs, sua próxima magia de cura de alvo único nesta rodada é Maximizada e Acelerada sem custo adicional. Depois de conjurar uma magia de cura e restaurar uma criatura acima de 0 PVs, sua próxima magia de Necromancia de alvo único nesta rodada é Maximizada e Acelerada sem custo adicional."
      ]
    },
    {
      "id": "talento-apatia-para-os-mortos",
      "name": "Apatia para os Mortos",
      "prerequisite": "12º Nível de Clérigo",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Sempre que usar “Divina Comédia\" com sucesso, você recebe um bônus igual ao ND do morto-vivo afetado em seus testes de Resistência, Jogadas de Ataque e Dano, o bônus máximo que você pode receber por esta habilidade é igual a metade de seu Mod. Sab. Este bônus dura até o final do combate."
      ]
    },
    {
      "id": "talento-a-luz-alcanca-a-todos",
      "name": "A Luz Alcança a Todos",
      "prerequisite": "16º Nível de Clérigo",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Sua habilidade “Apostolização” também passa a afetar suas habilidades de classe, permitindo que utilize “Canalizar Energia” e “Divina Comédia\" a partir de seus aliados. Porém, esta habilidade funciona apenas em criaturas que seu aliado esteja tocando."
      ]
    },
    {
      "id": "talento-irmaos-da-fe",
      "name": "Irmãos da Fé",
      "prerequisite": "16º Nível de Clérigo",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Se você e outro conjurador divino realizarem um descanso longo juntos vocês podem compartilhar seus conhecimentos. Em termos de regra vocês podem escolher magias conhecidas de ambos os conjuradores durante a preparação de magias. Isto não muda sua capacidade de conjurar magias, apenas estende sua lista de magias conhecidas."
      ]
    },
    {
      "id": "talento-contra-o-mesmo-inimigo",
      "name": "Contra o mesmo Inimigo",
      "prerequisite": "16º Nível de Clérigo",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Aliados que estejam dentro do alcance da sua habilidade “Divina Cómedia”, recebem um bônus de +4 em Jogadas de Ataque e Dano contra mortos-vivos."
      ]
    },
    {
      "id": "talento-banhado-na-gloria",
      "name": "Banhado na Glória",
      "prerequisite": "20º Nível de Clérigo",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você passa a ter usos ilimitados de “Canalizar Energia”, além disso aumenta seu alcance para 18m, por fim a habilidade sofre as mudanças abaixo de acordo com sua divindade.",
        "Canalizar Energia Positiva (Divindade Bondosa), Cura 10d12 PV de todas as criaturas aliadas na área e causa dano a mortos vivos escolhidos como dano sagrado na mesma proporção.",
        "Canalizar Energia Negativa (Divindade Maligna), Cura 10d12 PV para mortos-vivos escolhidos e causa a mesma quantia de dano profano em criaturas escolhidas.",
        "Canalizar Energia (Divindade Neutra), Escolha qualquer número de criaturas dentro do alcance da habilidade, elas Curam 10d8 PV, todas as outras criaturas dentro da área recebem o mesmo valor em dano sagrado."
      ]
    },
    {
      "id": "talento-luz-e-trevas",
      "name": "Luz e Trevas",
      "prerequisite": "20º Nível de Clérigo",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "No início de cada dia você pode escolher entre Corrupção e Salvação, de acordo com sua escolha, suas magias conjuradas sofrem as mudanças abaixo.",
        "Corrupção, A primeira vez na rodada que você conjurar uma magia de Alvo único que restaure pontos de vida, você pode escolher um inimigo qualquer a até 3 metros do alvo, o alvo sofre dano igual a metade da cura realizada, um teste de Fortitude (CD 10 + MdN + Mod. Sab) anula este efeito.",
        "Salvação, A primeira vez na rodada que você conjurar uma magia de Alvo único que cause Dano, você pode escolher um aliado qualquer a até 3 metros do alvo, o aliado recupera pontos de vida igual a metade do dano causado pela magia."
      ]
    },
    {
      "id": "talento-os-infernos-de-dante",
      "name": "Os Infernos de Dante",
      "prerequisite": "20º Nível de Clérigo",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Sua habilidade “Divina Comédia\" passa a afetar os Espíritos além de mortos-vivos, tem seu alcance aumentado para 18 Metros e requer apenas uma ação de movimento para utilizar ao invés de uma Ação padrão. Uma vez por dia você pode afetar um morto-vivo sem limite de nível e por fim gera um efeito de “Canalizar Energia” em uma área de 9 metros ao seu redor de acordo com seu Deus."
      ]
    }
  ]
} satisfies ClassDetail;

~~~~


---

# Classe: cruzado

**Fonte:** `src/data/class-details/cruzado.ts`

~~~~typescript
import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "cruzado",
  "name": "Cruzado",
  "family": "Clérigo",
  "sourceDocId": "1SdGVLDRtNCqY4LzolXo5dZ860BuIPCVp2NKJjHPyAaI",
  "sourceTitle": "Cruzado",
  "status": "complete",
  "editorialNotes": [],
  "basics": {
    "hitPoints": "um Cruzado começa com 16 pontos de vida (+ Mod. de Con) e ganha 4 PV (+mod. Con) por nível seguinte.",
    "trainedSkills": "Conhecimento(Religião) e outras 4 + mod. Inteligência.",
    "classSkills": "Adestrar Animais (Car), Conhecimento (Int), Cura (Sab), Identificar Magia (Int), Intuição (Sab), Meditação (Sab), Ofício (Int), Percepção (Sab).",
    "bonusTalents": "Usar Armaduras (leves, médias e pesadas), Usar Armas Simples, Usar Armas Marciais, Usar Escudos, Resistência Aprimorada (Fortitude, Vontade)"
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
        "Arma Sagrada, Canalizar Destruição (1d6), Devoto",
        "0,1º"
      ],
      [
        "2º",
        "+2",
        "Consagração",
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
        "Armadura Sagrada",
        "2º"
      ],
      [
        "5º",
        "+5",
        "Arma Sagrada, Canalizar Destruição (2d6)",
        ""
      ],
      [
        "6º",
        "+6",
        "Prece de Combate",
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
        "Armadura Sagrada, Santificação",
        ""
      ],
      [
        "9º",
        "+9",
        "Canalizar Destruição (3d6), Passo da Vanguarda",
        ""
      ],
      [
        "10º",
        "+10",
        "Arma Sagrada",
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
        "Armadura Sagrada, Prece de Combate",
        ""
      ],
      [
        "13º",
        "+13",
        "Canalizar Destruição (4d6), Decreto Sagrado",
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
        "Arma Sagrada",
        ""
      ],
      [
        "16º",
        "+16",
        "Armadura Sagrada",
        "6º"
      ],
      [
        "17º",
        "+17",
        "Canalizar Destruição (5d6)",
        ""
      ],
      [
        "18º",
        "+18",
        "Aspecto da Guerra",
        ""
      ],
      [
        "19º",
        "+19",
        "",
        ""
      ],
      [
        "20º",
        "+20",
        "Arma Sagrada, Armadura Sagrada, A Última Cruzada",
        ""
      ]
    ]
  },
  "sections": [
    {
      "title": "Arma Sagrada",
      "level": 3,
      "paragraphs": [
        "Com uma Ação Padrão o Cruzado abençoa uma Arma que ele estiver portando. Sempre que o Cruzado acertar com esta arma, seu dano é baseado em seu nível (De Acordo com a Tabela) e não em seu tamanho ou tipo. A Arma mantém seu Preço, Propriedades, Peso, Aprimoramentos e Encantamentos que possuir. O Cruzado pode ter apenas uma Arma Sagrada por vez, mas pode desativar seus efeitos com uma ação livre. Os bônus de Arma Sagrada se aplicam apenas enquanto o próprio Cruzado utilizar a arma, nas mãos de qualquer outra criatura a Arma se porta com suas características normais."
      ],
      "tables": [
        {
          "headers": [
            "Nível",
            "Dano",
            "Crítico",
            "Multiplicador",
            "Tipo"
          ],
          "rows": [
            [
              "1",
              "1d4",
              "19-20",
              "x2",
              "Sagrado"
            ],
            [
              "5",
              "1d6",
              "19-20",
              "x2",
              "Sagrado"
            ],
            [
              "10",
              "1d8",
              "18-20",
              "x3",
              "Sagrado"
            ],
            [
              "15",
              "1d10",
              "18-20",
              "x3",
              "Sagrado"
            ],
            [
              "20",
              "1d12",
              "17-20",
              "x4",
              "Sagrado"
            ]
          ]
        }
      ]
    },
    {
      "title": "Canalizar Destruição",
      "level": 3,
      "paragraphs": [
        "Ativar esta habilidade é uma ação livre mas pode ser feita apenas uma vez por rodada. Seu próximo ataque com sua Arma Sagrada nesta rodada que causar dano também causa 1d6 de dano Sagrado Adicional. A cada 4 níveis o dano desta habilidade aumenta em 1d6 de acordo com a tabela. Esta habilidade pode ser usada um número de vezes por dia igual à 1 + seu modificador de Sabedoria."
      ],
      "tables": []
    },
    {
      "title": "Devoto",
      "level": 3,
      "paragraphs": [
        "Você deve escolher uma divindade padroeira e atuar como seu devoto. As divindades determinam quais talentos de poderes concedidos você pode ter."
      ],
      "tables": []
    },
    {
      "title": "Magias",
      "level": 3,
      "paragraphs": [
        "Tipo e níveis de magia: você pode lançar magias divinas de nível 0 (truques) e 1º nível. A cada três níveis de cruzado seguintes, você pode lançar magias um nível acima: no 4º nível pode lançar magias de 2º nível, no 7º nível você pode lançar magias de 3º nível e assim por diante até o 16º nível, quando você pode lançar magias de 6º nível.",
        "Habilidade-chave: sua habilidade para lançar magias é Sabedoria.",
        "Magias Conhecidas: você conhece 4 magias Divinas de nível 0, e também um número de magias de 1º nível igual a 1 + seu modificador de Sabedoria. Cada vez que avançar de nível, você aprende duas novas magias de qualquer nível que possa lançar. Você não pode aprender magias com os descritores Cura ou Necromancia.",
        "Pontos de Magia: você tem um número de pontos de magia (PM) igual a 1 + modificador de Sabedoria. Cada vez que avança de nível, recebe 2 PM.",
        "Preparação de Magia: você precisa preparar suas magias com antecedência. A cada dia deve estudar durante uma hora, e então escolher um número igual a Metade do Nível + MdC de magias para preparar. Essas magias podem ser conjuradas livremente durante o dia com os PMs do conjurador, podendo receber efeitos de talentos metamágicos e habilidades de classe."
      ],
      "tables": []
    },
    {
      "title": "Consagração",
      "level": 3,
      "paragraphs": [
        "Com uma Ação Completa o cruzado invoca uma Aura Sagrada ao seu redor. A aura é um círculo de 3 Metros ao redor do próprio Cruzado que dura por 1 minuto. No início de cada turno do Cruzado, inimigos que estiverem dentro da área de efeito da Aura recebem Dano Sagrado igual a Metade do Nível do Cruzado nesta classe. Esta habilidade pode ser utilizada uma vez por dia."
      ],
      "tables": []
    },
    {
      "title": "Armadura Sagrada",
      "level": 3,
      "paragraphs": [
        "Com uma Ação Padrão o Cruzado abençoa uma Armadura que ele estiver utilizando. Os bônus garantidos pela armadura são baseados em seu nível (De Acordo com a Tabela) e não em seu Tipo. A armadura mantém seu Preço, Peso, Aprimoramentos e Encantamentos que possuir. O Cruzado pode ter apenas uma Armadura Sagrada por vez, mas pode desativar seus efeitos com uma ação livre. Os bônus de Armadura Sagrada se aplicam apenas enquanto o próprio Cruzado utilizar a armadura, nas mãos de qualquer outra criatura a armadura se porta com suas características normais. A primeira vez no dia em que o Cruzado cai com 0 ou menos pontos de Vida e estiver vestindo de sua Armadura Sagrada ele pode utilizar sua reação para recuperar um valor em pontos de Vida de acordo com a Tabela."
      ],
      "tables": [
        {
          "headers": [
            "Nível",
            "Bônus na CA",
            "Bônus Máximo de Destreza",
            "Penalidade de Armadura",
            "Pontos de Vida Recuperados"
          ],
          "rows": [
            [
              "4",
              "6",
              "0",
              "0",
              "2d6 + Mod. Sab"
            ],
            [
              "8",
              "7",
              "0",
              "0",
              "4d6  + Mod. Sab"
            ],
            [
              "12",
              "8",
              "0",
              "0",
              "6d6  + Mod. Sab"
            ],
            [
              "16",
              "9",
              "0",
              "0",
              "8d8  + Mod. Sab"
            ],
            [
              "20",
              "10",
              "0",
              "0",
              "10d8  + Mod. Sab"
            ]
          ]
        }
      ]
    },
    {
      "title": "Prece de Combate",
      "level": 3,
      "paragraphs": [
        "Você é capaz de acelerar o lançamento de magias pessoais. A partir do 6º nível, você pode pagar 2 PM adicionais ao lançar uma magia de alcance pessoal com tempo de conjuração de uma ação padrão. Fazendo isso, você lança a magia como uma ação de movimento, mas apenas uma vez por rodada. A partir do 12º nível passa a fazê-lo como uma ação Livre (Ainda com o custo de 2 PM Adicionais), mas continua podendo fazê-lo apenas uma vez por rodada."
      ],
      "tables": []
    },
    {
      "title": "Santificação",
      "level": 3,
      "paragraphs": [
        "Depois de Conjurar uma Magia Pessoal, você recebe duas vezes o Nível da Magia como PVs temporários."
      ],
      "tables": []
    },
    {
      "title": "Passo da Vanguarda",
      "level": 3,
      "paragraphs": [
        "Enquanto a Consagração estiver Ativa o deslocamento do Cruzado aumenta em 3 Metros. Enquanto o Cruzado estiver empunhando sua Arma Sagrada ele é bem sucedido em todos os testes para resistir a manobra de desarmar e separar. Enquanto o Cruzado estiver utilizando sua Armadura Sagrada ele fica imune às Condições Lento, Enjoado e Fascinado."
      ],
      "tables": []
    },
    {
      "title": "Decreto Sagrado",
      "level": 3,
      "paragraphs": [
        "Enquanto estiver empunhando sua Arma Sagrada, você pode com uma Ação Padrão, Escolher até 4 Alvos que estejam dentro da sua Área de Consagração, você pode realizar uma jogada de Ataque Corpo-a-Corpo contra cada uma destas criaturas além de utilizar sua habilidade “Canalizar Destruição” nestes ataques. A única ocasião em que pode utilizar sua habilidade “Canalizar Destruição” mais de uma vez por rodada."
      ],
      "tables": []
    },
    {
      "title": "Aspecto da Guerra",
      "level": 3,
      "paragraphs": [
        "Você pode resistir a golpes e feitiços fatais com uma determinação sem igual. Se sofrer dano que for deixá-lo com menos do que 1 PV, você é reduzido a 1 PV, e desconta o dano em excesso de seus PM. Em outras palavras, seus PMs funcionam como um segundo montante de PV. Se você ficar sem PM, o dano que sobrar é aplicado a seus PV."
      ],
      "tables": []
    },
    {
      "title": "A Última Cruzada",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Cruzado, você nunca pode ter mais de um dos talentos de 20º nível da classe."
      ],
      "tables": []
    }
  ],
  "classTalents": [
    {
      "id": "talento-barricada-da-fe",
      "name": "Barricada da Fé",
      "prerequisite": "4º Nível de Cruzado",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Enquanto a Consagração estiver ativa você recebe Cura Acelerada 3, no 8, 12, 16 e 20º Nível este valor aumenta em 3."
      ]
    },
    {
      "id": "talento-forca-da-conviccao",
      "name": "Força da Convicção",
      "prerequisite": "4º Nível de Cruzado",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Enquanto estiver utilizando de sua Arma Sagrada, o dano causado por “Canalizar Destruição” é convertido como Cura para você."
      ]
    },
    {
      "id": "talento-inquisidor-incansavel",
      "name": "Inquisidor Incansável",
      "prerequisite": "4º Nível de Cruzado",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Enquanto vestir sua Armadura Sagrada escolha um dos seguintes efeitos que o estejam afetando entre Abalado, Apavorado, Cego, Confuso, Enredado, Fatigado, Ofuscado, Pasmo ou Surdo, uma vez por dia você pode remover um destes efeitos de si mesmo como uma reação. No 12º Nível pode escolher dois efeitos e no 20º se liberta de todos os efeitos da lista que o estiverem afetando. Você pode pode ativar esta habilidade mesmo que suas condições não permitam."
      ]
    },
    {
      "id": "talento-solo-santificado",
      "name": "Solo Santificado",
      "prerequisite": "8º Nível de Cruzado",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Você recebe dois usos diários adicionais de Consagrar além de aumentar sua Duração Original para 10 Minutos."
      ]
    },
    {
      "id": "talento-arte-da-guerra",
      "name": "Arte da Guerra",
      "prerequisite": "8º Nível de Cruzado",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Você pode ter uma segunda Arma abençoada pela habilidade “Arma Sagrada”."
      ]
    },
    {
      "id": "talento-resolucao-do-cruzado",
      "name": "Resolução do Cruzado",
      "prerequisite": "8º Nível de Cruzado",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Enquanto vestir sua Armadura Sagrada o custo de “Prece de Combate” reduz em 1 PM."
      ]
    },
    {
      "id": "talento-consagracao-pelas-chamas",
      "name": "Consagração pelas Chamas",
      "prerequisite": "12º Nível de Cruzado",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Consagração se torna uma Ação de Movimento para Ativar, além disso, inimigos a até 1,5 Metros do Cruzado recebem o Nível do Cruzado como Dano Sagrado ao invés de apenas metade."
      ]
    },
    {
      "id": "talento-lamina-consagrada",
      "name": "Lâmina Consagrada",
      "prerequisite": "12º Nível de Cruzado",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "A margem de ameaça e multiplicador de crítico de sua “Arma Sagrada” aumenta em +1."
      ]
    },
    {
      "id": "talento-forca-na-adversidade",
      "name": "Força na Adversidade",
      "prerequisite": "12º Nível de Cruzado",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Enquanto vestir sua Armadura Sagrada, “Santificação” também aumenta o dano de seu próximo golpe igual ao nível da última magia que você conjurou."
      ]
    },
    {
      "id": "talento-aegis-sagrada",
      "name": "Aegis Sagrada",
      "prerequisite": "16º Nível de Cruzado",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Aliados dentro da área de sua Consagração são Curados igual a Metade do Nível de seu nível nesta classe no início de cada rodada. O próprio Cruzado não se beneficia desta habilidade."
      ]
    },
    {
      "id": "talento-comando-virtuoso",
      "name": "Comando Virtuoso",
      "prerequisite": "16º Nível de Cruzado",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Com uma Ação Completa, escolha até 2 Aliados que estejam a até 3 metros de você, você garante a uma Arma que eles estejam empunhando os efeitos de “Arma Sagrada” como se eles fossem Cruzados de 10º Nível. Para todos os requisitos e efeitos, esses aliados são considerados como tendo ativado a habilidade."
      ]
    },
    {
      "id": "talento-barricada-sagrada",
      "name": "Barricada Sagrada",
      "prerequisite": "16º Nível de Cruzado",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Com uma Ação Completa, escolha até 2 Aliados que estejam a até 3 metros de você, você garante a uma Armadura que eles estejam utilizando os efeitos de “Armadura Sagrada” como se eles fossem Cruzados de 12º Nível. Para todos os requisitos e efeitos, esses aliados são considerados como tendo ativado a habilidade."
      ]
    },
    {
      "id": "talento-das-cinzas-as-cinzas",
      "name": "Das Cinzas às Cinzas",
      "prerequisite": "20º Nível de Cruzado",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "A Habilidade Consagração se torna uma Área de 9 Metros ao redor do Cruzado. Inimigos dentro desta Área devem realizar um teste de Fortitude (CD 10 + MdN + Mod. Sab), criaturas com 5 Níveis ou menos que falharem neste teste são Mortas imediatamente. Criaturas entre os níveis 6 e 14 ficam paralisadas por 1d4+1 Rodadas. Criaturas entre os Níveis 15 ou acima ficam Atordoadas por 1d3 rodadas. Uma criatura que seja bem sucedida no teste fica cega por 1 rodada. Uma criatura afetada por essa habilidade fica imune a seus efeitos por 24 horas."
      ]
    },
    {
      "id": "talento-momento-de-gloria",
      "name": "Momento de Glória",
      "prerequisite": "20º Nível de Cruzado",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Ativar esta habilidade requer estar empunhando sua “Arma Sagrada”, é uma Ação Livre e dura por 1 minuto. Enquanto a habilidade estiver ativa você recebe os efeitos de Velocidade e Heroísmo Maior, além disso com uma Ação Padrão, você pode se teleportar a um alvo a até 30 metros que esteja enxergando e realizar seus ataques com a mesma ação."
      ]
    },
    {
      "id": "talento-veredito-final",
      "name": "Veredito Final",
      "prerequisite": "20º Nível de Cruzado",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Ativar esta habilidade requer estar utilizando sua “Armadura Sagrada”, é uma Ação Livre e dura por 3 Rodadas. Durante estas rodadas todo dano que você causar é convertido em vida para você, além disso, qualquer cura que exceder seus pontos de vida máximo é convertido em PV Temporário. Estes PVs temporários duram por até 3 rodadas depois do término de Veredito Final."
      ]
    }
  ]
} satisfies ClassDetail;

~~~~
