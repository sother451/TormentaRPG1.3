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
