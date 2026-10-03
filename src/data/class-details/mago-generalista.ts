import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "mago-generalista",
  "name": "Mago Generalista",
  "family": "Mago",
  "sourceDocId": "13U2-8MzN0jTIGWQxT9xrC6mDFG92cCRs8zRY2hSpnuE",
  "sourceTitle": "Mago Generalista",
  "status": "incomplete_source",
  "editorialNotes": [
    "A fonte atual contém marcadores “??”, usa “Cronomante” na linha de PV e repete a lista de talentos do Cronomante. O compêndio preserva essas inconsistências e não completa o material por inferência."
  ],
  "basics": {
    "hitPoints": "um Cronomante começa com 8 pontos de vida (+ Mod. de Con) e ganha 2 PV (+mod. Con) por nível seguinte.",
    "trainedSkills": "Conhecimento(Arcano) e outras 4 + mod. Inteligência.",
    "classSkills": "Conhecimento (Int), Identificar Magia (Int), Ofício (Int), Percepção (Sab).",
    "bonusTalents": "Usar Armas Simples, Resistência Aprimorada (Vontade)."
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
        "Item de Poder, ??",
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
        "",
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
        "??, ??",
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
        "",
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
        "??, Expansão Arcana",
        ""
      ],
      [
        "11º",
        "+5",
        "",
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
        "??, ??",
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
        "",
        ""
      ],
      [
        "20º",
        "+10",
        "??, A 10º Esfera",
        "10°"
      ]
    ]
  },
  "sections": [
    {
      "title": "Magias",
      "level": 3,
      "paragraphs": [
        "Tipo e níveis de magia: você pode lançar magias arcanas de nível 0 (truques) e 1º nível. A cada dois níveis de mago seguintes, você pode lançar magias um nível acima: no 3º nível pode lançar magias de 2º nível, no 5º nível você pode lançar magias de 3º nível e assim por diante até o 17º nível, quando você pode lançar magias de 9º nível.",
        "Habilidade-chave: sua habilidade para lançar magias é Inteligência.",
        "Magias Conhecidas: você conhece 5 magias arcanas de nível 0, e também um número de magias de 1º nível igual a 3 + seu modificador de Inteligência. Cada vez que avançar de nível, você aprende duas novas magias de qualquer nível que possa lançar.",
        "Pontos de Magia: você tem um número de pontos de magia (PM) igual a 3 + modificador de Inteligência. Cada vez que avança de nível, recebe 3 PM.",
        "Preparação de Magia: você precisa preparar suas magias com antecedência. A cada dia deve estudar durante uma hora, e então escolher um número igual a Metade do Nível + MdC de magias para preparar. Essas magias podem ser conjuradas livremente durante o dia com os PMs do conjurador, podendo receber efeitos de talentos metamágicos e habilidades de classe."
      ],
      "tables": []
    },
    {
      "title": "Item de Poder",
      "level": 3,
      "paragraphs": [
        "Você recebe um objeto à sua escolha. Pode ser uma varinha, cajado, livro, chapéu, amuleto ou mesmo arma.",
        "Este item pode ser usado para lançar, uma vez por dia, qualquer magia que você conheça sem gastar PM (incluindo custos extras de talentos metamágicos). No entanto, para lançar qualquer magia sem estar usando ou segurando o item, você precisa fazer um teste de Identificar Magia (CD 15 + nível da magia). Se falhar, a magia não funciona, mas você gasta os PM mesmo assim.",
        "O item de poder tem dureza 10 e PV iguais a metade dos PV máximos do mago. Um item danificado é restaurado na próxima vez que você preparar suas magias. Se o item é destruído, você fica atordoado por 1d4 rodadas. Construir um novo item de poder consome uma semana de trabalho e 100 TO."
      ],
      "tables": []
    },
    {
      "title": "?",
      "level": 3,
      "paragraphs": [
        "Você soma seu bônus de Inteligência ou seu nível nesta classe (O que for menor) a seus testes de Iniciativa."
      ],
      "tables": []
    },
    {
      "title": "?",
      "level": 3,
      "paragraphs": [
        "Você reduz em 1 PM o custo do talento metamágico “Acelerar Magia”"
      ],
      "tables": []
    },
    {
      "title": "?",
      "level": 3,
      "paragraphs": [
        "Uma vez por rodada, como uma reação, você pode gastar 1 PM para tentar escapar de um ataque em corpo-a-corpo ou à distância. Faça um teste de Iniciativa oposto pela jogada de ataque. Se você for bem-sucedido, o ataque erra e você ressurge onde estava. Você não pode usar esta habilidade se estiver desprevenido."
      ],
      "tables": []
    },
    {
      "title": "Expansão Arcana",
      "level": 3,
      "paragraphs": [
        "A partir do 10º nível você passa a adicionar seu MdC ao dano de suas magias."
      ],
      "tables": []
    },
    {
      "title": "?",
      "level": 3,
      "paragraphs": [
        "A partir do 10º nível você pode adiar o efeito de suas magias fazendo com que uma magia tenha efeito 1 rodada depois de ser conjurada."
      ],
      "tables": []
    },
    {
      "title": "?",
      "level": 3,
      "paragraphs": [
        "Você é pouco afetado pela passagem do tempo. Você envelhece um ano a cada dez anos."
      ],
      "tables": []
    },
    {
      "title": "?",
      "level": 3,
      "paragraphs": [
        "Você pode \"exilar\" a si mesmo em outra dimensão. Você se retira voluntariamente do contínuo do espaço-tempo para algum lugar desconhecido, onde esses conceitos não existem (ou existem de outra forma). Você retorna ao seu Plano natal dez anos depois, em perfeitas condições de saúde, com os mesmos itens e objetos que carregava ao exilar-se mas dez anos mais velho. O exílio cósmico exige apenas uma fração de segundo para surtir efeito. Em termos de regras, é uma reação (o cronomante pode realizá-lo fora de seu turno, em resposta imediata a um evento qualquer). O cronomante sofre os efeitos de qualquer evento (o dano de um golpe, por exemplo) antes que o exílio ocorra. Contudo, retornará com saúde perfeita, recuperando-se de qualquer condição, a menos que seja permanente (como a morte), mas não recupera PMs e Usos Diários. Você só pode utilizar esta habilidade uma vez por semana."
      ],
      "tables": []
    },
    {
      "title": "?",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Cronomante, você nunca pode ter mais de um dos talentos de 20º nível da classe."
      ],
      "tables": []
    },
    {
      "title": "A 10º Esfera",
      "level": 3,
      "paragraphs": [
        "Você pode lançar uma magia de 10º Ciclo, crie sua própria magia, escolha 3 magias que totalizam até 20 níveis, você cria uma magia com o custo e efeito combinado dessas magias, você não precisa preparar a magia escolhida por esta habilidade mas pode conjurá-la apenas uma vez por dia."
      ],
      "tables": []
    }
  ],
  "classTalents": [
    {
      "id": "talento-inversao",
      "name": "Inversão",
      "prerequisite": "4º Nível de Cronomante",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Uma vez por dia ao final de seu turno você pode escolher retornar a posição onde começou ele como uma ação livre. Em outras palavras, poderia Andar, Realizar suas ações e então retornar ao local onde começou sua rodada. A partir do 12º Nível você também recupera qualquer ponto de Vida que venha a perder durante suas ações se decidir retornar. No 8º e 16º recebe outro uso desta habilidade."
      ]
    },
    {
      "id": "talento-roubar-segundos",
      "name": "Roubar Segundos",
      "prerequisite": "4º Nível de Cronomante",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Quando suas magias afetam outras criaturas que não você mesmo, você recebe um bônus de +1 em CA e +2 em Iniciativa. Estes Bônus nunca podem superar metade de seu nível nesta classe e tem duração igual à duração original da magia, este talento não se beneficia de magias instantâneas."
      ]
    },
    {
      "id": "talento-mais-uma-vez",
      "name": "Mais uma Vez",
      "prerequisite": "4º Nível de Cronomante",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Uma vez por dia como Ação Livre você pode ativar esta habilidade. Na rodada seguinte após a ativação da habilidade você recebe PV Temporários igual ao seu Nível nesta classe + seu modificador de Inteligência, os PV Temporários gerados dessa forma desaparecem na rodada seguinte após serem recebidos. No 8 e 16º Nível você recebe outro uso desta habilidade."
      ]
    },
    {
      "id": "talento-regra-de-tres",
      "name": "Regra de Tres",
      "prerequisite": "8º Nível de Cronomante",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "A terceira magia que você conjura toda rodada custa 3 PMs a menos. (Minimo 1)"
      ]
    },
    {
      "id": "talento-controle-de-grupo",
      "name": "Controle de Grupo",
      "prerequisite": "8º Nível de Cronomante",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Você adiciona as magias “Lentidão” e “Velocidade” a sua lista e não precisa Prepará-las sempre podendo utilizá-las contanto que pague seu custo. Além disso, quando conjuradas por você, estas magias recebem os benefícios dos talentos Metamágicos “Acelerar Magia” e “Estender Magia” sem custo adicional."
      ]
    },
    {
      "id": "talento-pense-rapido",
      "name": "Pense Rápido",
      "prerequisite": "8º Nível de Cronomante",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "A redução de custo da habilidade “Celeridade Arcana” aumenta em -1 (Para um total de -2)"
      ]
    },
    {
      "id": "talento-explosao-controlada",
      "name": "Explosão Controlada",
      "prerequisite": "12º Nível de Cronomante",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "A habilidade “Congelamento Temporal” muda para o efeito abaixo:",
        "Você pode adiar o efeito de suas magias fazendo com que uma magia tenha efeito até 10 minutos depois de ser conjurada."
      ]
    },
    {
      "id": "talento-ecos",
      "name": "Ecos",
      "prerequisite": "12º Nível de Cronomante",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Você faz com que uma magia tenha efeito duas vezes na área ou no alvo. Esta habilidade funciona como um talento metamágico exclusivo, que custa O Nível da Magia - 1 PM para ser aplicado a uma magia. Ao lançar a magia em questão, o alvo sofre os efeitos da magia duas vezes, uma vez na rodada da conjuração e outra na rodada seguinte. O alvo realiza um teste de resistência, se aplicável, para cada magia. No caso de magias de área, a área é sobreposta; não é possível direcionar a magia duplicada para áreas diferentes."
      ]
    },
    {
      "id": "talento-paradoxos",
      "name": "Paradoxos",
      "prerequisite": "12º Nível de Cronomante",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Três vezes ao dia Ao rolar os dados para determinar os efeitos de uma magia, você pode escolher rerolar todos os dados da magia ficando com o segundo resultado mesmo que seja pior que o primeiro."
      ]
    },
    {
      "id": "talento-planos-futuros",
      "name": "Planos Futuros",
      "prerequisite": "16º Nível de Cronomante",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Você pode utilizar a habilidade “Congelamento Atemporal” nas habilidades e magias de seus próprios aliados, fazendo elas ativarem apenas na rodada seguinte. Usar este talento gasta sua reação."
      ]
    },
    {
      "id": "talento-estudos-arcanos",
      "name": "Estudos Arcanos",
      "prerequisite": "16º Nível de Cronomante",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Se você e outro conjurador arcano realizarem um descanso longo juntos vocês podem compartilhar seus grimórios. Em termos de regra vocês podem escolher magias conhecidas de ambos os grimórios durante a preparação de magias. Isto não muda sua capacidade de conjurar magias, apenas estende sua lista de magias conhecidas."
      ]
    },
    {
      "id": "talento-ajuda-de-outros-tempos",
      "name": "Ajuda de outros Tempos",
      "prerequisite": "16º Nível de Cronomante",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Com uma semana (8 Horas por dia), você pode “Adiantar” o nível de um Aliado. Ele recebe um Talento, Habilidade de Classe ou Ponto de Habilidade como se fosse um personagem de um nível acima. Você pode garantir este benefício a quantos aliados quiser, mas deve passar uma semana com cada, o bônus perdura até que eles avancem para o próximo nível quando então você deve começar tudo de novo."
      ]
    },
    {
      "id": "talento-velho-como-o-mundo",
      "name": "Velho como o Mundo",
      "prerequisite": "20º Nível de Cronomante",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você pára de envelhecer completamente, deixando de receber as penalidades por Idade Avançada mas ainda recebendo os benefícios pela mesma. Você recebe um bônus permanente de +4 em Inteligência e por fim recebe 2 PM adicionais por nível nesta classe."
      ]
    },
    {
      "id": "talento-renascimento-regenerativo",
      "name": "Renascimento Regenerativo",
      "prerequisite": "20º Nível de Cronomante",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Uma vez por semana você pode ativar esta habilidade como reação mesmo que uma condição fosse lhe impedir. Você imediatamente recupera todos seus Pontos de Vida, Mana, Usos Diários de habilidades e se liberta de qualquer condição negativa que não seja permanente. Por fim, você age imediatamente como se fosse sua rodada de combate."
      ]
    },
    {
      "id": "talento-colapso-temporal",
      "name": "Colapso Temporal",
      "prerequisite": "20º Nível de Cronomante",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você adiciona “Parar o Tempo” a sua lista de Magias e não precisa Prepará-la sempre podendo utilizá-la contanto que pague seu custo. Além disso, para você a magia sempre dura 5 Rodadas e não pode ser anulada, por fim você pode, como uma reação, anular uma magia qualquer da escola de “Tempo” lançada a até 30m de distância. Essa \"contramágica\" especial não custa pontos de magia e não exige teste."
      ]
    }
  ]
} satisfies ClassDetail;
