import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "numeromante",
  "name": "Numeromante",
  "family": "Mago",
  "sourceDocId": "1d_AqvE6KCzYC_RTP4E8me77mFaMnfmj1iiFKQqc8944",
  "sourceTitle": "Numeromante",
  "status": "complete",
  "editorialNotes": [],
  "basics": {
    "hitPoints": "um Numeromante começa com 8 pontos de vida (+ Mod. de Con) e ganha 2 PV (+mod. Con) por nível seguinte.",
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
        "Item de Poder, Dado Numeromântico (D4)",
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
        "Alterar a Equação, Dado Numeromântico (D6), Multiplicar Metamagia",
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
        "Dado Numeromântico (D8), Germinar Magia, Expansão Arcana",
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
        "Dado Numeromântico (D12), Dentro da Curva, Fora da Curva",
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
        "Arcana Numérica, Dado Numeromântico (D20), A 10º Esfera",
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
      "title": "Dado Numeromântico",
      "level": 3,
      "paragraphs": [
        "Uma vez por dia, ao lançar uma magia, você pode rolar o dado (1d4) e somar o resultado na CD e ao dano da magia. No 5º nível, e a cada 5 níveis seguintes (10º, 15º e 20º), o dado se transforma e melhora em um passo: d4 para d6, d6 para d8, d8 para d12, d12 para d20 e você recebe um uso adicional desta habilidade (Para um total de 2 usos por dia)."
      ],
      "tables": []
    },
    {
      "title": "Alterar a Equação",
      "level": 3,
      "paragraphs": [
        "Você reduz em 1 PM o custo do talento metamágico “Potencializar Magia”"
      ],
      "tables": []
    },
    {
      "title": "Multiplicar Metamagia",
      "level": 3,
      "paragraphs": [
        "Ao conjurar uma magia com o talento metamágico “Potencializar Magia”, você pode pagar +1 PM para alterar o alcance ou área da magia para o triplo de seu original. Este efeito não se acumula com os talentos metamágicos “Aumentar Magia” ou “Ampliar Magia”."
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
      "title": "Germinar Magia",
      "level": 3,
      "paragraphs": [
        "Esta habilidade funciona como um talento metamágico exclusivo, que custa +3 PM para ser aplicado a uma magia. Ao lançar a magia em questão, o alvo sofre os efeitos da magia duas vezes e recebe um teste de resistência, se aplicável, para cada magia. Para algumas magias, como enfeitiçar pessoa, falhar em ambos os testes de resistência resulta num efeito redundante mas um aliado do alvo teria que ter sucesso em duas tentativas de dissipar magia para libertar o alvo do efeito de encantamento. No caso de magias de área, a área é sobreposta; não é possível direcionar a magia duplicada para áreas diferentes. Você não pode acelerar magias na mesma rodada que utiliza esta habilidade."
      ],
      "tables": []
    },
    {
      "title": "Dentro da Curva",
      "level": 3,
      "paragraphs": [
        "Ao rolar os dados para determinar os efeitos de uma magia, você pode modificar todo dado rolado abaixo do valor médio (por exemplo, 3 para d6) para a média. Por exemplo, ao rolar 6d6 para calcular o dano de uma bola de fogo você obtém 1, 1, 3, 3, 4 e 5. Os dois 1 seriam transformados em 3."
      ],
      "tables": []
    },
    {
      "title": "Fora da Curva",
      "level": 3,
      "paragraphs": [
        "Ao rolar os dados para determinar os efeitos de uma magia, você pode rolar apenas um dado e multiplicar o resultado pela quantidade de dados em questão. Por exemplo, uma bola de fogo causa 6d6 pontos de dano. Você pode escolher rolar 1d6 e multiplicar esse resultado por seis. Contrária a toda lógica, esta habilidade pode ser combinada com a habilidade “Dentro da Curva”."
      ],
      "tables": []
    },
    {
      "title": "Arcana Numérica",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Numeromante, você nunca pode ter mais de um dos talentos de 20º nível da classe."
      ],
      "tables": []
    },
    {
      "title": "A 10º Esfera",
      "level": 3,
      "paragraphs": [
        "Você pode lançar uma magia de 10º Ciclo, escolha uma magia da lista abaixo ou crie sua própria magia, caso decida criar escolha 3 magias que totalizam até 10 níveis, você cria uma magia com o custo e efeito combinado dessas magias, você não precisa preparar a magia escolhida por esta habilidade mas conjurá-la apenas uma vez por dia."
      ],
      "tables": [
        {
          "headers": [
            "O “Milagre” da Multiplicação",
            "Durante esta rodada, ao lançar uma magia, você pode escolher conjurar ela em qualquer número de aliados a até 18 metros de você (sem custo em PMs), outros parâmetros da magia (como alcance, área de efeito e duração não são alterados)."
          ],
          "rows": [
            [
              "Descritor: Tempo",
              ""
            ],
            [
              "Alcance: Pessoal",
              ""
            ],
            [
              "Alvo: Você",
              ""
            ],
            [
              "Duração: 1 Rodada",
              ""
            ],
            [
              "Tempo de Execução: Ação Livre",
              ""
            ],
            [
              "Teste de Resistência: Nenhuma",
              ""
            ]
          ]
        },
        {
          "headers": [
            "Dividir para Conquistar",
            "Durante esta rodada, ao lançar uma magia em um alvo, este sofre os efeitos da magia quatro vezes e recebe um teste de resistência, se aplicável, para cada magia. Caso use em conjunto da habilidade “Germinar Magia” a magia surte efeito 6 vezes."
          ],
          "rows": [
            [
              "Descritor: Tempo",
              ""
            ],
            [
              "Alcance: Pessoal",
              ""
            ],
            [
              "Alvo: Você",
              ""
            ],
            [
              "Duração: 1 Rodada",
              ""
            ],
            [
              "Tempo de Execução: Ação Livre",
              ""
            ],
            [
              "Teste de Resistência: Nenhuma",
              ""
            ]
          ]
        },
        {
          "headers": [
            "Contagem para o fim do Mundo",
            "Após entoar longos cânticos, o conjurador dispara pelas mãos uma carga de energia que voa até um ponto desejado e então explode, causando 40d20+20 pontos de dano."
          ],
          "rows": [
            [
              "Descritor: Fogo",
              ""
            ],
            [
              "Alcance: 90 Metros",
              ""
            ],
            [
              "Área: Explosão com 30m de raio",
              ""
            ],
            [
              "Duração: Instantânea",
              ""
            ],
            [
              "Tempo de Execução: 3 Rodadas",
              ""
            ],
            [
              "Teste de Resistência: Fortitude reduz a Metade",
              ""
            ]
          ]
        }
      ]
    }
  ],
  "classTalents": [
    {
      "id": "talento-dados-do-destino",
      "name": "Dados do Destino",
      "prerequisite": "4º Nível de Numeromante",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Quando você utiliza a habilidade “Dado Numeromântico” o valor rolado no dado é somado aos seus testes de resistência até o início de sua próxima rodada."
      ]
    },
    {
      "id": "talento-aplicar-constante",
      "name": "Aplicar Constante",
      "prerequisite": "4º Nível de Numeromante",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Ao rolar os dados para determinar os efeitos de uma magia, qualquer dado maximizado faz sua CA aumentar em +1 por uma rodada. Estes bônus nunca pode superar metade de seu nível nesta classe."
      ]
    },
    {
      "id": "talento-angulo-crescente",
      "name": "Ângulo Crescente",
      "prerequisite": "4º Nível de Numeromante",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Uma vez por dia como Ação Livre você pode ativar esta habilidade. Ao rolar os dados para determinar os efeitos de sua próxima magia, qualquer dado maximizado garante 2 PVs Temporários por 3 rodadas. No 8 e 16º Nível você recebe outro uso desta habilidade."
      ]
    },
    {
      "id": "talento-truque-das-equacoes",
      "name": "Truque das Equações",
      "prerequisite": "8º Nível de Numeromante",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Quando você conjurar uma magia de 1º ciclo ou superior com dados variáveis e o resultado está na média ou abaixo dela, você recupera 1 PM."
      ]
    },
    {
      "id": "talento-forca-em-numeros",
      "name": "Força em Números",
      "prerequisite": "8º Nível de Numeromante",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Você adiciona as magias “Mísseis Mágicos” e “Sono” a sua lista e não precisa prepará-las sempre podendo utilizá-las contanto que pague seu custo. Além disso, quando conjuradas por você, estas magias recebem os benefícios dos talentos Metamágicos “Potencializar Magia” e da habilidade “Multiplicar Metamagia” sem custo adicional."
      ]
    },
    {
      "id": "talento-calculos-rapidos",
      "name": "Cálculos Rápidos",
      "prerequisite": "8º Nível de Numeromante",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "O custo da habilidade “Germinar Magia” é reduzido em 2."
      ]
    },
    {
      "id": "talento-teorema-da-magia",
      "name": "Teorema da Magia",
      "prerequisite": "12º Nível de Numeromante",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Você pode alterar magias de área ou efeito que usem forma de cilindro, cone, dispersão, emanação ou explosão. A alteração consiste em criar espaços dentro da área ou efeito que não são afetados pela magia. A dimensão mínima de um desses espaços é um cubo de 1,5m de lado."
      ]
    },
    {
      "id": "talento-matematica-teorica",
      "name": "Matemática Teórica",
      "prerequisite": "12º Nível de Numeromante",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "A habilidade “Multiplicar Metamagia” sofre as seguintes mudanças:",
        "Ao conjurar uma magia, você pode pagar +1 PM para alterar o alcance ou área da magia para o quadruplo de seu original. Este efeito não se acumula com os talentos metamágicos “Aumentar Magia” ou “Ampliar Magia”."
      ]
    },
    {
      "id": "talento-geometria-da-magia",
      "name": "Geometria da Magia",
      "prerequisite": "12º Nível de Numeromante",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Ao lançar uma magia, você pode dividi-la, para receber os benefícios dessa habilidade. Por exemplo, um escudo arcano, em vez de conceder CA+4 a um único alvo, poderia conceder CA+2 a dois alvos, ou CA+1 a até quatro alvos; ou, em vez de uma única bola de fogo causando 6d6 pontos de dano, você poderia conjurar até seis bolas de fogo causando 1d6 de dano cada. Outros parâmetros da magia (como alcance, área de efeito, duração e bônus de dano por nível ou por habilidades) também são divididos na mesma proporção. O número máximo de divisões é igual ao seu modificador de Inteligência e decimais são sempre arredondados para baixo."
      ]
    },
    {
      "id": "talento-resometria",
      "name": "Resometria",
      "prerequisite": "16º Nível de Numeromante",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "O numeromante não precisa pagar pelos componentes materiais de viagem planar, mas o tempo de execução da magia muda para 1 hora. Se tiver acesso aos componentes materiais, pode lançar a magia com o tempo de execução normal. Além disso, os cálculos numeromânticos aumentam a precisão do transporte: as criaturas chegam exatamente no destino pretendido."
      ]
    },
    {
      "id": "talento-estudos-arcanos",
      "name": "Estudos Arcanos",
      "prerequisite": "16º Nível de Numeromante",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Se você e outro conjurador arcano realizarem um descanso longo juntos vocês podem compartilhar seus grimórios. Em termos de regra vocês podem escolher magias conhecidas de ambos os grimórios durante a preparação de magias. Isto não muda sua capacidade de conjurar magias, apenas estende sua lista de magias conhecidas."
      ]
    },
    {
      "id": "talento-matematica-basica",
      "name": "Matemática Básica",
      "prerequisite": "16º Nível de Numeromante",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Você pode ensinar uma magia de 1° nível que conhece para um número de criaturas igual seu Mod. Int, gastando 10 minutos. Os \"alunos\" podem lançar a magia uma vez cada, durante as próximas 24 horas."
      ]
    },
    {
      "id": "talento-expansao-de-grimorio",
      "name": "Expansão de Grimório",
      "prerequisite": "20º Nível de Numeromante",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você recebe um bônus permanente de +4 em Inteligência e adiciona 4 Magias Conhecidas a todos os Ciclos de Magia que possa conjurar, por fim recebe 2 PM adicionais por nível nesta classe."
      ]
    },
    {
      "id": "talento-juros-compostos",
      "name": "Juros Compostos",
      "prerequisite": "20º Nível de Numeromante",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "O custo de todos os seus metamágicos reduz em 1 (Para um mínimo de 0), este efeito de redução sempre se aplica por último após qualquer outro efeito similar que você possuir. Se o custo de um Metamágico fosse reduzido abaixo de 0 por este efeito, reduza o custo da magia em 1 ao invés disso."
      ]
    },
    {
      "id": "talento-equacoes-taumatologicas",
      "name": "Equações Taumatológicas",
      "prerequisite": "20º Nível de Numeromante",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "A habilidade “Dentro da Curva” sofre as seguintes alterações:",
        "Ao rolar os dados para determinar os efeitos de uma magia, talento metamágico ou efeitos que causam dano, você pode modificar todo dado rolado igual ou abaixo do valor médio (por exemplo, 3 para d6) para o máximo. Por exemplo, ao rolar 6d6 para calcular o dano de uma bola de fogo você obtém 1, 1, 3, 3, 4 e 5. Os dois 1 e ambos os 3 seriam transformados em 6."
      ]
    }
  ]
} satisfies ClassDetail;
