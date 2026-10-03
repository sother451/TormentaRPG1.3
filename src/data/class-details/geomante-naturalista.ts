import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "geomante-naturalista",
  "name": "Geomante (Naturalista)",
  "family": "Mago",
  "sourceDocId": "1_O_5R5SQG88mPMfXAlzhczFZ7Qnh7DwDHinwU5-6Zjo",
  "sourceTitle": "Geomante (Naturalista)",
  "status": "complete",
  "editorialNotes": [],
  "basics": {
    "hitPoints": "um Naturalista começa com 8 pontos de vida (+ Mod. de Con) e ganha 2 PV (+mod. Con) por nível seguinte.",
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
        "Servo Elemental, 1001 Formas",
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
        "Molde de Argila, Surto da Natureza",
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
        "Camaleão Natural, Natureza da Magia",
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
        "Benção da Natureza, Forma Pura",
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
        "Um com o Mundo, A 10º Esfera",
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
        "Magias Conhecidas: você conhece 5 magias arcanas de nível 0, e também um número de magias de 1º nível igual a 1 + seu modificador de Inteligência. Cada vez que avançar de nível, você aprende uma nova magias de qualquer nível que possa lançar.",
        "Pontos de Magia: você tem um número de pontos de magia (PM) igual a 1 + modificador de Inteligência. Cada vez que avança de nível, recebe 3 PM.",
        "Preparação de Magia: você precisa preparar suas magias com antecedência. A cada dia deve estudar durante uma hora, e então escolher um número igual a Metade do Nível + MdC de magias para preparar. Essas magias podem ser conjuradas livremente durante o dia com os PMs do conjurador, podendo receber efeitos de talentos metamágicos e habilidades de classe."
      ],
      "tables": []
    },
    {
      "title": "Servo Elemental",
      "level": 3,
      "paragraphs": [
        "Você recebe um servo elemental, que atua como um elo com as forças primordiais do mundo. Invocar este servo consome um minuto de esforço ininterrupto em uma área previamente preparada por uma hora com símbolos arcanos. Após este ritual, o servo elemental surge, brotando de uma grande concentração elemental (do solo, da água, das chamas de um incêndio...).",
        "Um Elemental recebe BBA 3/4. Sempre que você avança nesta classe, o Elemental também ganha um nível recebendo todos os benefícios por isso, exceto talentos, em certos níveis o Servo também recebe certos benefícios. Se você e seu Elemental estiverem sujeitos ao mesmo efeito que afeta seus Pontos de Vida, você aplica esses efeitos apenas uma vez (aplicando o efeito maior, se aplicável). Por exemplo, se você e seu Elemental forem pegos em um efeito de área que curaria ou ferirá ambos, apenas a maior quantidade de cura ou dano se aplica. Se a qualquer momento o Naturalista for reduzido abaixo de 0 PVs, o Servo Elemental se desfaz retornando a terra.",
        "O Servo Elemental não pode utilizar de itens mágicos, mas se beneficia de qualquer item que o Naturalista estiver utilizando, por exemplo, caso o Naturalista utilize um Cinto da Força +4, tanto ele quanto seu servo elemental recebem o bônus de +4 em força. Além disso, você pode utilizar magias Pessoais em seu Servo Elemental como se conjurasse em si mesmo. Por fim, quando o Servo Elemental atinge um inimigo com sua jogada de ataque corpo-a-corpo e causa dano, o Naturalista pode Conjurar uma Magia de Toque como se ele mesmo estivesse realizando o ataque contra o inimigo. (O Naturalista ainda precisa gastar a ação necessária para conjurar a magia.)",
        "O servo elemental age no turno do Naturalista, compartilhando de sua rolagem de iniciativa, porém possui Ações próprias. Se você se afastar mais de 30m do servo, ele se une novamente à terra, e precisa ser invocado mais uma vez.",
        "Pv: um Elemental não possui pontos de vida. Ao invés disso, metade do dano recebido pelo Elemental reduz os pontos de vida do Naturalista como dano não letal do mesmo tipo, assim como a cura de qualquer um de vocês recupera seus Pontos de Vida.",
        "Deslocamento: 9 Metros. Este valor aumenta conforme o nível do Naturalista aumenta de acordo com a tabela abaixo.",
        "Perícias: o Elemental possui 2 + Mod. Int pericias treinadas, mas não pode escolher perícias baseadas em inteligência como Conhecimentos e Ofícios.",
        "Habilidades: For 16, Des 16, Con --, Int 14, Sab 10, Car 10.",
        "Arma Natural: O elemental possui um ataque com arma natural que causa dano de forma equivalente a uma adaga própria para o seu tamanho (1d4 para criaturas Médias). Este valor aumenta conforme o nível do Naturalista aumenta de acordo com a tabela abaixo. O tipo de dano varia de acordo com o ambiente onde o Naturalista está.",
        "Outras habilidades: um Elemental é imune a atordoamento, dano de habilidade, doença, enjoo, paralisia, sono e veneno. Não precisa respirar, se alimentar e dormir."
      ],
      "tables": [
        {
          "headers": [
            "Nível",
            "Dano",
            "Deslocamento Base",
            "Benefício"
          ],
          "rows": [
            [
              "1",
              "1d4",
              "9 metros",
              "-"
            ],
            [
              "5",
              "1d6",
              "9 metros",
              "Força +4"
            ],
            [
              "9",
              "1d8",
              "12 metros",
              "Destreza +4"
            ],
            [
              "13",
              "2d6",
              "12 metros",
              "CA +8"
            ],
            [
              "17",
              "3d6",
              "15 metros",
              "Voo 18 metros"
            ]
          ]
        },
        {
          "headers": [
            "Ambiente",
            "Descritor de dano (Reverso)",
            "Aparência"
          ],
          "rows": [
            [
              "Floresta",
              "Corte (Sônico)",
              "Terra com Raízes"
            ],
            [
              "Montanha",
              "Frio (Fogo)",
              "Pedras Empilhadas"
            ],
            [
              "Pântano",
              "Ácido (Esmagamento)",
              "Lama"
            ],
            [
              "Planície",
              "Sônico (Corte)",
              "Ar"
            ],
            [
              "Tundra",
              "Frio (Fogo)",
              "Gelo"
            ],
            [
              "Aquático",
              "Eletricidade (Corte)",
              "Água"
            ],
            [
              "Subterrâneo",
              "Esmagamento (Ácido)",
              "Bloco Maciço de Rocha"
            ]
          ]
        }
      ]
    },
    {
      "title": "1001 Formas",
      "level": 3,
      "paragraphs": [
        "Você altera a forma atual de seu Elemental, garantindo um bônus diferente de acordo com a Escolha, você pode mudar esta escolha com um minuto de contato com seu elemental.",
        "Atirador: Seu servo elemental recebe uma Arma Elemental que causa 1d4 de dano, alcance 30m e crítico 20/*2. Este valor aumenta assim como seu ataque corpo-a-corpo.",
        "Durão: Seu servo elemental recebe RD 5/Aço Rubi e um bônus de +2 nos testes de resistência.",
        "Lutador: Seu servo elemental recebe um bônus de +2 nas jogadas de Ataque e Dano."
      ],
      "tables": []
    },
    {
      "title": "Molde de Argila",
      "level": 3,
      "paragraphs": [
        "Com uma ação de Movimento do Naturalista você altera o tamanho de seu Servo Elemental, podendo alterá-lo para Grande ou Pequeno."
      ],
      "tables": []
    },
    {
      "title": "Surto da Natureza",
      "level": 3,
      "paragraphs": [
        "Com uma ação padrão do Naturalista seu Servo Elemental tem deslocamento aumentado em 9 metros e recebe um ataque natural adicional durante aquela rodada."
      ],
      "tables": []
    },
    {
      "title": "Natureza da Magia",
      "level": 3,
      "paragraphs": [
        "A partir do 10º nível você passa a adicionar seu MdC ao dano de seu Elemental."
      ],
      "tables": []
    },
    {
      "title": "Camaleão Natural",
      "level": 3,
      "paragraphs": [
        "Você e seu Elemental assumem parte das características do ambiente onde estão. Quando você e seu Elemental entram em um ambiente novo, recebem resistência a energia 15 conforme a região (veja tabela do Servo Elemental)"
      ],
      "tables": []
    },
    {
      "title": "Benção da Natureza",
      "level": 3,
      "paragraphs": [
        "Você pode escolher 5 magias Divinas de até 6º Ciclo que sejam pessoais e adicioná-las à sua lista, para você essas magias são consideradas Arcanas para todos os propósitos."
      ],
      "tables": []
    },
    {
      "title": "Forma Pura",
      "level": 3,
      "paragraphs": [
        "Você pode, como ação padrão e o custo de 5PM, fazer seu servo elemental assumir a forma de um elemental de acordo com o ambiente atual por 1 minuto. Enquanto nesta forma, o servo recebe as habilidades da lista a seguir."
      ],
      "tables": [
        {
          "headers": [
            "Água"
          ],
          "rows": [
            [
              "Imunidade a fogo. Vulnerabilidade a Frio."
            ],
            [
              "Deslocamento: natação 27m"
            ],
            [
              "Agarrar aprimorado: Pode, como ação livre, realizar uma manobra de agarrar contra oponentes que forem acertados por seus golpes de pancada. Se o elemental começar o turno agarrando um inimigo ele pode engolir o mesmo. Um inimigo engolido começa a sufocar, e automaticamente recebe o dano de pancada no começo de cada turno. Para escapar ele deve ser bem sucedido num teste de manobra. O inimigo recebe todas as penalidades e possíveis benefícios de estar submergido na água enquanto engolido."
            ],
            [
              "Vórtice: Enquanto estiver na água, o elemental pode se tornar um redemoinho, enquanto nesta forma ele não pode realizar ataques, mas, pode se mover por espaços ocupados por  criaturas de tamanho igual ou menor. Criaturas dentro do redemoinho devem ser bem sucedidas num teste de Reflexos(CD igual sua CD de magia) ou ficará agarrada(como na manobra), e recebe o dano da pancada automaticamente no início de seu turno. A cada turno a vítima tem direito a um novo teste para escapar do efeito."
            ]
          ]
        },
        {
          "headers": [
            "Ar"
          ],
          "rows": [
            [
              "Imunidade a sônico. Vulnerabilidade a Fogo"
            ],
            [
              "Deslocamento: Voo 30m"
            ],
            [
              "Controle do ar: O elemental possui uma aura de 9m que concede cobertura total contra projéteis. Inimigos dentro desta aura recebem uma penalidade de -2 em jogadas de ataque."
            ],
            [
              "Muralha de vento: O elemental pode criar uma muralha de vento. Como a magia de mesmo nome."
            ],
            [
              "Vendaval: O elemental do ar pode se transformar num forte vento, que derruba todos em uma área de 3m ao redor do elemental e causa o dano de uma pancada. Um teste de reflexos reduz o dano à metade e evita a queda."
            ]
          ]
        },
        {
          "headers": [
            "Fogo"
          ],
          "rows": [
            [
              "Imunidade a Fogo. Vulnerabilidade a Frio"
            ],
            [
              "Deslocamento: 18m"
            ],
            [
              "Aura de Calor: O elemental de fogo esquenta o metal ao seu redor. Qualquer usuário de armadura de metal até 9m do elemental recebe -2 de CA."
            ],
            [
              "Ataques incendiários: No final de seu turno, inimigos atingidos pelo elemental devem fazer um teste de Destreza, ou ficam em chamas, recebendo 1d6 de dano por rodada até se apagarem. Inimigos que receberam múltiplos golpes não fazem vários testes, ao invés disso, a CD aumenta em +1 para cada golpe adicional. Um inimigo que já esteja em chamas ao invés disso explode, causando 6d6 de dano de fogo adicional em uma área de 6m. Criaturas ao redor podem fazer um teste de reflexos para reduzir o dano à metade."
            ]
          ]
        },
        {
          "headers": [
            "Terra"
          ],
          "rows": [
            [
              "RD igual ao dobro do nível de seu nível."
            ],
            [
              "Deslocamento: 18m"
            ],
            [
              "Tremores: O elemental de Terra causa constantes tremores ao seu redor, inimigos até 9m do elemental recebem -1 de CA e JdA"
            ],
            [
              "Derrubar Aprimorado: Pode, como ação livre, realizar uma manobra de derrubar contra oponentes que forem acertados por seus golpes de pancada. Inimigos já caídos devem ser bem sucedidos em um teste de fortitude, ou ficam atordoados por 1d4 rodadas."
            ]
          ]
        }
      ]
    },
    {
      "title": "Um com o Mundo",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Naturalista, você nunca pode ter mais de um dos talentos de 20º nível da classe."
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
            "Elemental Gêmeo",
            "Você se transforma em uma Cópia de seu Servo Elemental, recebendo todos os Benefícios e habilidades que ele Possui."
          ],
          "rows": [
            [
              "Descritor: Transmutação",
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
              "Duração: 3 Rodadas",
              ""
            ],
            [
              "Tempo de Execução: Ação Padrão",
              ""
            ],
            [
              "Teste de Resistência: Nenhum",
              ""
            ]
          ]
        },
        {
          "headers": [
            "Forma Monstruosa",
            "Enquanto a Magia durar, seu Servo ou o próprio Naturalista recebe os benefícios abaixo.   Resistências: adquire imunidade a sono, paralisia e ao mesmo tipo de energia de seu sopro.  Classe de armadura: +4.  Deslocamento: adquire voo com o dobro de deslocamento normal em terra, a menos que a criatura-base tenha um deslocamento de voo melhor.  Sopro: Escolha entre fogo, frio, ácido, energia negativa, ácido ou eletricidade. Uma vez por dia, como uma ação padrão, o Elemental pode cuspir um cone de 9m da Energia escolhida. Todas as criaturas na área sofrem dano igual a 1d6 por nível do Servo. Um teste de Reflexos (CD 10 + metade do nível do Servo + modificador de Inteligência do Servo) reduz o dano à metade.  Habilidades: For +8, Dex +6, Int +2, Car +2."
          ],
          "rows": [
            [
              "Descritor: Transmutação",
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
              "Duração: 3 Rodadas",
              ""
            ],
            [
              "Tempo de Execução: Ação Padrão",
              ""
            ],
            [
              "Teste de Resistência: Nenhum",
              ""
            ]
          ]
        },
        {
          "headers": [
            "Genesis",
            "Quando você conjura a magia deve escolher um ambiente, você determina as características que desejar como Temperatura, Água e a forma do terreno (Esta magia não pode criar construções ou Vida), uma vez terminada a Magia o terreno então toma a forma que foi desejada pelo Conjurador. Após a primeira Conjuração o Naturalista pode Conjurar esta magia mais vezes, aumentando seu tamanho em mais 180 metros até alcançar 1 Kilometro."
          ],
          "rows": [
            [
              "Descritor: Transmutação",
              ""
            ],
            [
              "Alcance: 180 Metros (1 Quilômetro)",
              ""
            ],
            [
              "Alvo: Um local centrado em você",
              ""
            ],
            [
              "Duração: Permanente (D)",
              ""
            ],
            [
              "Tempo de Execução: 1 Semana (8 Horas por Dia)",
              ""
            ],
            [
              "Teste de Resistência: Nenhum",
              ""
            ]
          ]
        }
      ]
    }
  ],
  "classTalents": [
    {
      "id": "talento-cuidado-da-natureza",
      "name": "Cuidado da Natureza",
      "prerequisite": "4º Nível de Naturalista",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Uma vez por dia, quando o dano que o Servo Elemental tomaria, causasse o Naturalista a cair com 0 ou menos PVs, você pode como reação desinvocar seu Servo ignorando o dano que ele tomaria."
      ]
    },
    {
      "id": "talento-generosidade-arcana",
      "name": "Generosidade Arcana",
      "prerequisite": "4º Nível de Naturalista",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Ao sofrer dano pelo Servo Elemental, você pode como reação do Naturalista gastar 1 PM e reduzir o dano recebido pelo vínculo em 5 (Primeiro se reduz este valor e então se Divide o dano). No 8º e 16º nível você pode pagar mais 1 PM e reduzir o dano novamente em 5, para 15 de Dano por 3 PMs no 16º nível."
      ]
    },
    {
      "id": "talento-generosidade-divina",
      "name": "Generosidade Divina",
      "prerequisite": "4º Nível de Naturalista",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Enquanto estiver a pelo 3 metros de seu Servo Elemental, você possui Cura Acelerada 3, este valor aumenta em 3 no 8º, 12º e 16º Nível."
      ]
    },
    {
      "id": "talento-ao-alcance-da-mao",
      "name": "Ao Alcance da Mão",
      "prerequisite": "8º Nível de Naturalista",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Na forma Atirador o disparo do Servo é reduzido para 9 metros, Em contrapartida o Naturalista passa a poder conjurar magias de toque com o disparo do Servo."
      ]
    },
    {
      "id": "talento-partir-montanhas",
      "name": "Partir Montanhas",
      "prerequisite": "8º Nível de Naturalista",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Na forma Lutador, magias conjuradas pelo Naturalista junto ao ataque do Servo Elemental adicionam ¼ do nível do Servo a sua CD e Dano."
      ]
    },
    {
      "id": "talento-duro-como-pedra",
      "name": "Duro como Pedra",
      "prerequisite": "8º Nível de Naturalista",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Na forma Durão cada Magia pessoal conjurada sobre o Servo Elemental aumenta a RD da habilidade em 3 e as resistências em 2 acumulando até 3 vezes."
      ]
    },
    {
      "id": "talento-forcas-da-natureza",
      "name": "Forças da Natureza",
      "prerequisite": "12º Nível de Naturalista",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "A margem de ameaça e multiplicador de crítico do Servo Elemental com ataques corpo-a-corpo e A Distância aumenta em +1."
      ]
    },
    {
      "id": "talento-dualidade-dos-elementos",
      "name": "Dualidade dos Elementos",
      "prerequisite": "12º Nível de Naturalista",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Você pode concentrar uma magia adicional simultaneamente, porém esta magia deve beneficiar exclusivamente seu Servo Elemental, você não gasta ações por fazê-lo, caso precise fazer um teste para manter concentração deve fazer um teste individual para cada magia."
      ]
    },
    {
      "id": "talento-furia-das-estacoes",
      "name": "Fúria das Estações",
      "prerequisite": "12º Nível de Naturalista",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "A habilidade surto da Natureza passa a gastar uma Ação de Movimento do Naturalista e não mais uma ação padrão para ser ativa."
      ]
    },
    {
      "id": "talento-sobrevivencia-do-mais-adaptado",
      "name": "Sobrevivência do Mais Adaptado",
      "prerequisite": "16º Nível de Naturalista",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Aliados à até 6m da Elemental ou Naturalista recebem os bônus de Camaleão Natural."
      ]
    },
    {
      "id": "talento-bencao-das-formas",
      "name": "Benção das Formas",
      "prerequisite": "16º Nível de Naturalista",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Aliados a até 3 Metros do Servo Elemental que não o próprio Naturalista recebem todos os benefícios da Habilidade 1001 Formas que o servo atualmente se encontra. Além disso, esses mesmos aliados passam a causar 1d6 de dano adicional de acordo com o Ambiente."
      ]
    },
    {
      "id": "talento-redistribuicao-de-magia",
      "name": "Redistribuição de Magia",
      "prerequisite": "16º Nível de Naturalista",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Aliados a até 3 Metros do Servo Elemental que não o próprio Naturalista podem conjurar Magias de Toque como se estivessem utilizando o talento metamágico “Toque Longínquo\" mas sem aumentar o custo de suas próprias Magias."
      ]
    },
    {
      "id": "talento-dominio-dos-elementos",
      "name": "Domínio dos Elementos",
      "prerequisite": "20º Nível de Naturalista",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "O Naturalista com uma ação padrão pode manifestar em uma área de 18m de raio centrada na Elemental um ambiente a sua escolha, recebendo todos os benefícios de suas habilidades, enquanto a habilidade durar no início de cada rodada o Naturalista pode utilizar uma ação de Movimento para trocar o tipo do Ambiente. Utilizar esta habilidade custa 5 PMs e ela Dura 1 minuto."
      ]
    },
    {
      "id": "talento-per-aspera-ad-astra",
      "name": "Per Aspera Ad Astra",
      "prerequisite": "20º Nível de Naturalista",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "O Naturalista passa a poder utilizar os bônus da Tabela Reversa, podendo escolher se irá utilizar do descritor Normal ou Reverso quando usa as habilidades do Servo Elemental. Além disso, quando o Naturalista conjurar uma Magia cujo descritor seja o mesmo que do Ambiente ela é Maximizada Gratuitamente, se for do Ambiente Reverso ela é Acelerada também Gratuitamente."
      ]
    },
    {
      "id": "talento-forma-pura-ascendida",
      "name": "Forma Pura Ascendida",
      "prerequisite": "20º Nível de Naturalista",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Quando usar a habilidade “Forma Pura” você pode escolher a forma que seu elemental toma independente do ambiente, além disso adiciona duas formas a lista."
      ]
    }
  ]
} satisfies ClassDetail;
