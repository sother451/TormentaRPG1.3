import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "necromante",
  "name": "Necromante",
  "family": "Mago",
  "sourceDocId": "1Jc8R5pa5W_0CKBSnLoxMsfHRbgNbgafp4hwMxliUAQI",
  "sourceTitle": "Necromante",
  "status": "complete",
  "editorialNotes": [],
  "basics": {
    "hitPoints": "um Necromante começa com 8 pontos de vida (+ Mod. de Con) e ganha 2 PV (+mod. Con) por nível seguinte.",
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
        "Item de Poder, Ritual dos Túmulos",
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
        "Carisma Mortal, Epidemia",
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
        "Colheita Sombria, Necropotencia",
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
        "Necronomicon, Purgatório",
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
        "Mais forte que a Morte, A 10º Esfera",
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
        "Escola Proibida: Necromantes não podem aprender ou lançar magias de Encantamento.",
        "Habilidade-chave: sua habilidade para lançar magias é Inteligência.",
        "Magias Conhecidas: você conhece 5 magias arcanas de nível 0, e também um número de magias de 1º nível igual a 1 + seu modificador de Inteligência. Cada vez que avançar de nível, você aprende duas novas magias de qualquer nível que possa lançar.",
        "Pontos de Magia: você tem um número de pontos de magia (PM) igual a 1 + modificador de Inteligência. Cada vez que avança de nível, recebe 3 PM.",
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
        "O item de poder tem RD 10 e PV iguais a metade dos PV máximos do mago. Um item danificado é restaurado na próxima vez que você preparar suas magias. Se o item é destruído, você fica atordoado por 1d4 rodadas. Construir um novo item de poder consome uma semana de trabalho e 100 TO."
      ],
      "tables": []
    },
    {
      "title": "Ritual dos Túmulos",
      "level": 3,
      "paragraphs": [
        "No 1º Nível, Escolha entre se tornar um Guerreiro ou um Comandante",
        "Se você escolheu se tornar um Guerreiro, você recebe uma foice negra mágica. Ela é considerada uma arma mágica de duas mãos, que causa 2d6 pontos de dano de corte, com crítico 19-20/x4. Seu bônus mágico começa em +1 no 1º nível, e aumenta em +1 a cada 5 níveis (+2 no 5º nível, +3 no 10º nível +4 no 15º nível e +5 no 20º nível). Apenas seus níveis de necromante contam para esse bônus. Apenas você se beneficia deste bônus; para todos os outros usuários a foice é uma arma comum. Você sabe usar a foice automaticamente sem precisar adquirir quaisquer talentos. Sempre que você causa dano em combate corpo-a-corpo com a foice, recebe uma quantidade de PV igual ao dano causado. Diferente de outras armas, tanto seu ataque, quanto seu dano causado com esta arma utiliza de seu Modificador de Inteligência ao invés de seus modificadores normais.",
        "Se você escolheu se tornar um Comandante, você recebe um ajudante morto-vivo. Sempre que você sobe de nível o Morto-Vivo também recebe um nível, Um Morto-Vivo recebe BBA 1/Nível além dos demais benefícios por passagem de nível exceto Talentos. Caso seu Morto-Vivo venha a morrer (de novo) você pode invocar um novo com um dia de trabalho (8 Horas). No 15º nível, caso seu Morto-Vivo morra (de novo), você pode trazê-la de volta à vida  após passar 1 hora em meditação.O Morto-Vivo age no turno do Necromante, compartilhando de sua rolagem de iniciativa, porém possui apenas uma Ação Padrão por Rodada. Uma vez por rodada o Necromante pode gastar sua ação de movimento para ordenar seu Morto-Vivo, garantindo a ele uma ação de movimento nesta rodada. Você pode equipá-lo com as armas e armaduras que quiser (Ele sabe utilizar de Armas Simples e Marciais além de Armaduras Leves, Médias e Escudos). E por fim, o lacaio recebe seu MdC ou seu nível nesta Classe (o que for menor) como um bônus em CA, testes de resistência e jogadas de ataque e dano.",
        "Pv: Um Morto-Vivo começa com 24 Pontos de Vida e ganha 6 PV por nível seguinte.",
        "Deslocamento: 9 Metros",
        "Perícias: Um Morto-Vivo possui 2 perícias treinadas.",
        "Habilidades: For 18, Des 18, Con -, Int 10, Sab 10, Car 10.",
        "Arma Natural: Possui dois ataques com arma natural que causa dano de forma equivalente a uma Espada Curta própria para o seu tamanho (1d6 para criaturas Médias).",
        "Tamanho: Médio",
        "Outras Habilidades: Imunidade a atordoamento, dano de habilidade (apenas Força, Destreza ou Constituição), dano não-letal, imunidade a crítico, doença, encantamento, fadiga, paralisia, necromancia, sono e veneno. Não precisam respirar, se alimentar e dormir. Não recuperam pontos de vida normalmente. Sofrem dano com magias de cura e recuperam pontos de vida com magias de necromancia. Destruídos quando seus PV chegam a 0. Um morto-vivo não é afetado pelas magias reviver os mortos ou ressurreição. A magia ressurreição verdadeira o transforma na criatura que era quando vivo. Independente de sua tendência verdadeira, mortos-vivos reagem a habilidades (como destruir o mal dos paladinos) e magias (como proteção contra o mal) como se fossem Malignos."
      ],
      "tables": []
    },
    {
      "title": "Carisma Mortal",
      "level": 3,
      "paragraphs": [
        "Você pode se comunicar com quaisquer mortos-vivos à vontade, mesmo aqueles sem um valor de Inteligência, a despeito dos idiomas que você e seus interlocutores conheçam. Você pode usar perícias baseadas em Carisma com quaisquer mortos-vivos, mesmo aqueles sem um valor de Inteligência. Além disso, Mortos-Vivos não inteligentes vão sempre considerá-lo como um deles e nunca vão te atacar, a não ser que você ataque primeiro…"
      ],
      "tables": []
    },
    {
      "title": "Epidemia",
      "level": 3,
      "paragraphs": [
        "Quando você lança uma magia de Necromancia que afeta um número de alvos, pode escolher gastar o dobro de PM. Se fizer isso, a magia afeta o dobro de alvos."
      ],
      "tables": []
    },
    {
      "title": "Necropotencia",
      "level": 3,
      "paragraphs": [
        "A partir do 10º nível você passa a adicionar seu MdC ao dano de suas magias."
      ],
      "tables": []
    },
    {
      "title": "Colheita Sombria",
      "level": 3,
      "paragraphs": [
        "Sempre que você ou um de seus Lacaios deixar um oponente com 0 ou menos PVs, seja com magias ou ataques, recebe uma quantidade de PVs Temporários igual ao dano causado no inimigo."
      ],
      "tables": []
    },
    {
      "title": "Necronomicon",
      "level": 3,
      "paragraphs": [
        "Você pode escolher 5 magias Divinas de até 6º Ciclo da escola de Necromancia e adicioná-las à sua lista, para você essas magias são consideradas Arcanas para todos os propósitos."
      ],
      "tables": []
    },
    {
      "title": "Purgatório",
      "level": 3,
      "paragraphs": [
        "Uma vez por dia, quando você sofrer dano que poderia levá-lo a 0 ou menos pontos de vida, você pode ignorar completamente esse dano e recuperar PV iguais ao dano que teria sofrido."
      ],
      "tables": []
    },
    {
      "title": "Mais Forte que a Morte",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Necromante, você nunca pode ter mais de um dos talentos de 20º nível da classe."
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
            "Contágio Torpe",
            "Você faz uma criatura adoecer com uma versão mais poderosa de doenças conhecidas. Você escolhe uma das Doenças possíveis e causa um contágio imediato na criatura com efeito dobrado (Uma criatura com contágio sofre o efeito da doença novamente todos os dias até que seja curada da mesma). A CD para resistir sua Doença e 10 + MdN + Mod. Int. Mesmo uma criatura que tenha sucesso se torna um vetor de sua doença e sempre que ele entrar em contato com uma nova criatura a magia é conjurada sobre esta nova criatura e assim sucessivamente..."
          ],
          "rows": [
            [
              "Descritor: Necromancia",
              ""
            ],
            [
              "Alcance: 18 Metros",
              ""
            ],
            [
              "Alvo: 1 Criatura",
              ""
            ],
            [
              "Duração: 1 Semana (D)",
              ""
            ],
            [
              "Tempo de Execução: Ação Padrão",
              ""
            ],
            [
              "Teste de Resistência: Fortitude parcial",
              ""
            ]
          ]
        },
        {
          "headers": [
            "Braços da Abominação",
            "Enquanto a magia durar você recebe dois braços adicionais feitos de ossos e carne podre. Eles são mãos hábeis e você tem controle perfeito de ambas, diferente de seus braços normais, os braços da abominação tem alcance 18 metros e são considerados enormes para manobras."
          ],
          "rows": [
            [
              "Descritor: Necromancia",
              ""
            ],
            [
              "Alcance: 18 Metros",
              ""
            ],
            [
              "Alvo: Você",
              ""
            ],
            [
              "Duração: 1 Minuto",
              ""
            ],
            [
              "Tempo de Execução: Ação Padrão",
              ""
            ],
            [
              "Teste de Resistência: Ver o Texto",
              ""
            ]
          ]
        },
        {
          "headers": [
            "Banquete dos Mortos",
            "Você conjura um banquete profano, com carne podre, cadáveres e insetos, que dura uma hora. Mortos-Vivos que consumam o banquete (usando de uma ação completa) recebem +4 em testes de Resistências, 40 PV's Temporários e ficam imunes a efeitos de energia Positiva."
          ],
          "rows": [
            [
              "Descritor: Necromancia",
              ""
            ],
            [
              "Alcance: 9 Metros",
              ""
            ],
            [
              "Alvo: -",
              ""
            ],
            [
              "Duração: 1 Hora",
              ""
            ],
            [
              "Tempo de Execução: 10 Minutos",
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
      "id": "talento-protecao-positiva",
      "name": "Proteção Positiva",
      "prerequisite": "4º Nível de Necromante",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Você se cura com efeitos de Energia Negativa ao invés de receber dano, além disso se torna imune a efeitos que causam Níveis Negativos."
      ]
    },
    {
      "id": "talento-armadura-de-ossos",
      "name": "Armadura de Ossos",
      "prerequisite": "4º Nível de Necromante",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Com uma ação padrão, você pode lançar uma versão modificada de armadura arcana, criando uma armadura feita de ossos unidos por energia negativa que dura por 1 hora. A armadura de ossos concede um bônus de +4 em CA. Este bônus aumenta em +1 a cada 3 Níveis para um total de +10 no nível 19. A armadura de ossos não se acumula com armaduras normais ou a magia armadura arcana."
      ]
    },
    {
      "id": "talento-duro-de-matar",
      "name": "Duro de Matar",
      "prerequisite": "4º Nível de Necromante",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Quando você sofre dano que poderia matá-lo, você pode ignorar completamente esse dano. Você pode usar este talento uma vez por dia. No 8º e 16º recebe outro uso desta habilidade."
      ]
    },
    {
      "id": "talento-ritual-macabro",
      "name": "Ritual Macabro",
      "prerequisite": "8º Nível de Necromante",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Suas Magias de Necromancia que afetem um único alvo custam 1 PM a menos (Mínimo 1) para serem Conjuradas ou 2 PM (Mínimo 1) a menos caso sejam utilizadas em Mortos-Vivos."
      ]
    },
    {
      "id": "talento-lamina-profana",
      "name": "Lâmina Profana",
      "prerequisite": "8º Nível de Necromante",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Você pode gastar 1 PM como uma ação livre para encantar uma arma que esteja empunhando durante um minuto. A arma afetada tem seu dano alterado para Energia Negativa somente quando atacando outras criaturas que não você mesmo. Esta arma encantada ignora a Imunidade a Energia Negativa mas não tem efeito em Mortos-Vivos. Além disso, uma criatura atingida pelo golpe desta arma não pode ser beneficiada por Magias ou Efeitos de Cura até o fim da rodada."
      ]
    },
    {
      "id": "talento-horda-cinzenta",
      "name": "Horda Cinzenta",
      "prerequisite": "8º Nível de Necromante",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Você adiciona as magias, Criar Mortos-Vivos, Criar Esqueletos Arcanos e Servos de Tenebra a sua lista de magias conhecidas e não precisa Prepará-las ou pagar por seus componentes materiais sempre podendo utilizá-las contanto que pague seu custo em PMs. Além disso, seu nível de personagem conta como o triplo de níveis para a quantidade de mortos-vivos que você pode ter sob seu comando pelas magias de criar mortos-vivos."
      ]
    },
    {
      "id": "talento-peste-sanguinea",
      "name": "Peste Sanguínea",
      "prerequisite": "12º Nível de Necromante",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Quando uma criatura falha em um Teste de Resistência contra suas Magias de Necromancia (Magias que não tem um teste de resistência permitem um teste de Fortitude CD 10 + MdN + Mod. Int.), ela sofre 1d6 + Mod. Int. pontos de dano de Energia Negativa por rodada durante um minuto. Você ganha pontos de Vida Temporários Igual ao Dano causado por esta habilidade. Ao afetar múltiplos inimigos com Peste Sanguínea, some o dano causado a todas as criaturas para calcular seus PVs Temporários. Criaturas afetadas ficam imunes a esta habilidade por um dia."
      ]
    },
    {
      "id": "talento-golpe-do-flagelo",
      "name": "Golpe do Flagelo",
      "prerequisite": "12º Nível de Necromante",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Você recebe proficiência com armas marciais corpo a corpo e pode usar Armaduras Leves ignorando a chance de falha Arcana. Além disso você recebe +3 em Jogadas de Ataque e Dano com Armas corpo-a-corpo."
      ]
    },
    {
      "id": "talento-exercito-dos-mortos",
      "name": "Exército dos Mortos",
      "prerequisite": "12º Nível de Necromante",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Seus Mortos-Vivos ganham um bônus de +1 nas jogadas de Ataque e rolagens de dano. Este bônus aumenta em +1 para cada outro Morto-Vivo adjacente a ele. Unidades Militares contabilizam como apenas um Morto-Vivo para os benefícios deste talento."
      ]
    },
    {
      "id": "talento-estudos-arcanos",
      "name": "Estudos Arcanos",
      "prerequisite": "16º Nível de Necromante",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Se você e outro conjurador arcano realizarem um descanso longo juntos vocês podem compartilhar seus grimórios. Em termos de regra vocês podem escolher magias conhecidas de ambos os grimórios durante a preparação de magias. Isto não muda sua capacidade de conjurar magias, apenas estende sua lista de magias conhecidas."
      ]
    },
    {
      "id": "talento-lingua-dos-mortos",
      "name": "Língua dos Mortos",
      "prerequisite": "16º Nível de Necromante",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Aliados a até 18 Metros de você recebem os Benefícios da habilidade “Carisma Mortal”"
      ]
    },
    {
      "id": "talento-fogo-amigo-maior",
      "name": "Fogo Amigo Maior",
      "prerequisite": "16º Nível de Necromante",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Depois de um descanso longo você pode escolher um número de criaturas igual ao seu MdN + Mod. Int. Estas criaturas podem ignorar qualquer dano e efeitos negativos causados pelas suas magias. Você pode encerrar este efeito a qualquer momento mas ele não possui uma duração limite."
      ]
    },
    {
      "id": "talento-expansao-de-grimorio",
      "name": "Expansão de Grimório",
      "prerequisite": "20º Nível de Necromante",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você recebe um bônus permanente de +4 em Inteligência e adiciona 4 Magias Conhecidas a todos os Ciclos de Magia que possa conjurar, por fim recebe 2 PM adicionais por nível nesta classe."
      ]
    },
    {
      "id": "talento-ritual-do-lich",
      "name": "Ritual do Lich",
      "prerequisite": "20º Nível de Necromante",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você abandona sua forma mortal e se torna um Lich através de um ritual sofrendo as seguintes mudanças:",
        "Pv: Um Lich começa com 24 Pontos de Vida e ganha 6 PV por nível seguinte. Este efeito é retroativo, recalcule seus PVs do nível 1 em diante.",
        "Deslocamento: 9 Metros em Terra, 18 Metros Voo",
        "Classe de Armadura: + 5",
        "Resistências: Adquire +4 em todas as Resistências, imunidade a eletricidade, frio e metamorfose e redução de dano 15/esmagamento e mágica.",
        "Ataques: Adquire um ataque de toque paralisante. Além disso, se já possui um ataque natural irá causar 1d8+5 de dano adicional de energia negativa com ele.",
        "Habilidades: A Constituição se torna nula. Ganha mais 2 em Int, Sab e Car.",
        "Perícias: Adquire um bônus de +8 em furtividade, intuição e percepção.",
        "Aura de medo: Qualquer criatura a até 18 metros do Lich deve fazer um teste de vontade (CD 10 + MdN + mod. Int) ou ficara assustada por 1 minuto, se for bem sucedida fica imune a esta habilidade por um dia.",
        "Toque paralisante: O lich possui um ataque de toque que causa 1d8+5 de energia negativa, uma criatura atingida deve ser bem sucedida em um teste de Fortitude (10 + MdN + Mod. Int) ou ficará paralisada permanentemente. As magias Remover maldição, Remover encantamento, e remover paralisia podem libertar a vítima. Uma criatura paralisada pelo Lich parece morta, mas um teste de cura (CD 20) revela que a vítima está viva",
        "Outras Habilidades: Imunidade a atordoamento, dano de habilidade (apenas Força, Destreza ou Constituição), dano não-letal, imunidade a crítico, doença, encantamento, fadiga, paralisia, necromancia, sono e veneno. Não precisam respirar, se alimentar e dormir. Não recuperam pontos de vida normalmente. Sofrem dano com magias de cura e recuperam pontos de vida com magias de necromancia. Destruídos quando seus PV chegam a 0. Um morto-vivo não é afetado pelas magias reviver os mortos ou ressurreição. A magia ressurreição verdadeira o transforma na criatura que era quando vivo. Independente de sua tendência verdadeira, mortos-vivos reagem a habilidades (como destruir o mal dos paladinos) e magias (como proteção contra o mal) como se fossem Malignos.",
        "Filacteria: Uma parte vital de se tornar um lich é criar um filactério mágico no qual o personagem armazena sua força vital. Via de regra, a única maneira de se livrar de um lich é destruir seu filactério. A menos que seu filactério seja localizado e destruído, um lich reaparece 1d10 dias após sua aparente morte."
      ]
    },
    {
      "id": "talento-comandar-a-horda",
      "name": "Comandar a Horda",
      "prerequisite": "20º Nível de Necromante",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Conjurar magias em em um de seus Lacaios ou Criaturas Invocadas também conjura a mesma magia em todos os Lacaios e Criaturas Invocadas que estejam a até 36 metros da mesma. Magias conjuradas em seus Lacaios recebem o efeito do talento metamágico “Estender Magia” de forma Gratuita. Por fim, efeitos que fariam seus Lacaios perderem o controle (possessão ou dominação) falham."
      ]
    }
  ]
} satisfies ClassDetail;
