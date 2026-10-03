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
