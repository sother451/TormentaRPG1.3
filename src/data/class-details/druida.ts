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
