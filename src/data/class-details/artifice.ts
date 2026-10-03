import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "artifice",
  "name": "Artífice",
  "family": "Artífice",
  "sourceDocId": "1CnZx34Yaf-y1vdjq8XD7W0j4xEtpbyvEOckk93bkNH8",
  "sourceTitle": "Artifice",
  "status": "complete",
  "editorialNotes": [],
  "basics": {
    "hitPoints": "um Artífice começa com 12 pontos de vida (+ Mod. de Con) e ganha 3 PV (+mod. Con) por nível seguinte.",
    "trainedSkills": "Conhecimento (Engenharia) e outras 4 + mod. Inteligência. (Mínimo 4)",
    "classSkills": "Conhecimento (Int), Diplomacia (Car), Identificar Magia (Int), Intuição (Sab), Obter Informação (Car), Ofício (Int), Percepção (Sab).",
    "bonusTalents": "Usar Armaduras (leves, médias), Usar Armas Simples, Usar Escudos, Resistência Aprimorada (Vontade)."
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
        "Chave sônica (+2), Infundir Magias",
        "0,1º"
      ],
      [
        "2º",
        "+1",
        "Fabricar Itens (1/6)",
        ""
      ],
      [
        "3º",
        "+2",
        "Árvore de Natal (+1), Companheiro Autômato",
        ""
      ],
      [
        "4º",
        "+3",
        "",
        "2º"
      ],
      [
        "5º",
        "+3",
        "Chave sônica (+4)",
        ""
      ],
      [
        "6º",
        "+4",
        "",
        ""
      ],
      [
        "7º",
        "+5",
        "Ativação Metamagia",
        "3º"
      ],
      [
        "8º",
        "+6",
        "Criar Itens Mágicos (2d6+1 Dias / Menores)",
        ""
      ],
      [
        "9º",
        "+6",
        "Árvore de Natal (+2)",
        ""
      ],
      [
        "10º",
        "+7",
        "Chave sônica (+6), Fabricar Itens (1/8)",
        "4º"
      ],
      [
        "11º",
        "+8",
        "Homúnculo",
        ""
      ],
      [
        "12º",
        "+9",
        "Criar Itens Mágicos (1d8+1 Dias / Médios)",
        ""
      ],
      [
        "13º",
        "+9",
        "Companheiro Autômato",
        "5º"
      ],
      [
        "14º",
        "+10",
        "Transfusão de Cargas",
        ""
      ],
      [
        "15º",
        "+11",
        "Chave sônica (+8), Árvore de Natal (+3)",
        ""
      ],
      [
        "16º",
        "+12",
        "Criar Itens Mágicos (1d4+1 Dias / Maiores)",
        "6º"
      ],
      [
        "17º",
        "+12",
        "Improviso Mágico",
        ""
      ],
      [
        "18º",
        "+13",
        "Controlar Construtos",
        ""
      ],
      [
        "19º",
        "+14",
        "",
        ""
      ],
      [
        "20º",
        "+15",
        "Chave sônica (+10), Artesão lendário, Magnum Opus",
        ""
      ]
    ]
  },
  "sections": [
    {
      "title": "Chave Sônica",
      "level": 3,
      "paragraphs": [
        "Todo artífice tem uma ferramenta mágica pessoal multiuso de funcionamento complicado, impossível de entender, excerto para ele próprio. Este item substitui kits de ferramentas para teste de perícias. Além disso, com a chave em mãos, você recebe +2 em todos os testes de Ofício e de Ladinagem para abrir fechaduras, operar mecanismos e usar instrumentos mágicos, e pode fazer todos estes testes sem treinamento. O bônus da chave muda para +4 no 5º nível e aumenta em +2 a cada cinco níveis seguintes. Se a chave sônica for perdida ou destruída, você pode criar outra como se fosse criar um kit de artesão obra-prima."
      ],
      "tables": []
    },
    {
      "title": "Infundir Magias",
      "level": 3,
      "paragraphs": [
        "O artífice é um tipo de conjurador, mas em vez de lançar magia, ele infunde poder mágico em roupas, armaduras e outros acessórios, criando itens mágicos temporários. Uma criatura vestindo o item recebe os efeitos da magia quando o artífice os ativa. Magias infundidas podem ser dissipadas normalmente, Ele também pode encerrar o efeito quando desejar, mas precisa estar em posse do objeto infundido.",
        "Tipo e níveis de magia: no 1° nível o artífice pode infundir magias arcanas e divinas de 1º nível. a cada três níveis seguintes, seu nível de magia aumenta: no 4º nível pode infundir magias de 2º nível, no 7° nível pode infundir magias de 3° nível e assim por diante até o 16° nível, quando você pode infundir magias de 6° nível.",
        "Habilidade-chave: sua habilidade para lançar magias é Inteligência.",
        "Magias Conhecidas: você conhece um número de magias de 1º nível igual a 1 + seu MdC. Cada vez que avançar de nível, você aprende uma nova magia de qualquer nível que possa lançar.  Você só pode aprender magias dos descritores abjuração e transmutação, que tenham como alvo você, um objeto ou criatura (voluntária), e com duração diferente de instantânea, permanente ou concentração.",
        "Pontos de Magia: você tem um número de pontos de magia (PM) igual a 1 + MdC. Cada vez que avança de nível, recebe 3 PM.",
        "Preparação de Magia: Sua preparação de magias envolve infundir magias em seus itens com antecedência. A cada dia, deve trabalhar durante uma hora, e então escolher um número de itens igual a seu Nível de Artífice + MdC para preparar. Um mesmo objeto não pode receber mais de uma magia, e você não pode infundir itens que já sejam mágicos. Uma magia infundida fica dormente no objeto alvo durante um dia, ou até a próxima vez que você preparar magias. Uma vez ativa, a infusão tem a mesma duração que as magias originais e você pode ativar até duas infusões com uma Ação Padrão, gastando os PMs necessários para cada magia. Você pode reativar infusões quantas vezes quiser, gastando novamente os PMs e a ação necessária. Itens Infundidos não contam no limite de itens mágicos do personagem que os estiver usando."
      ],
      "tables": []
    },
    {
      "title": "Fabricar Item",
      "level": 3,
      "paragraphs": [
        "A Partir do 2º nível se torna perito em produzir itens mundanos, muito mais habilidoso que qualquer artesão ou forjador normal. Você ainda segue as regras normais de fabricação de itens não-mágicos, Com as seguintes diferenças:",
        "Para o artífice, fabricar um item exige 1/6 do valor original do item em matérias-primas (em vez de 1/3). Esse valor cai para 1/8 no 10° nível. Um personagem com múltiplas habilidades que reduzem o custo de um item aplica apenas a maior redução.",
        "Para o artífice, o tempo de fabricação necessário é de 1 dia para cada 300 TO do item (em vez de 100 por dia). Ao final desse período o artífice faz seu teste de ofício. Se tiver sucesso, o item estará pronto. Se falhar, pode gastar mais um dia para tentar de novo.",
        "O artífice pode escolher 10 se estiver em ambiente seguro e confortável, onde seja possível trabalhar sem interrupções."
      ],
      "tables": []
    },
    {
      "title": "Árvore de Natal",
      "level": 3,
      "paragraphs": [
        "No 3° nível o artífice não está mais limitado a apenas quatro itens mágicos entre armaduras, escudos e acessórios. Você se torna capaz de equipar cinco itens, no 9º nível da classe se torna capaz de equipar até seis e no 15º capaz de equipar até sete."
      ],
      "tables": []
    },
    {
      "title": "Companheiro Autômato",
      "level": 3,
      "paragraphs": [
        "No 3° nível você adquire um companheiro autônomo pequeno ou médio que pode ser bípede ou quadrúpede, de 3° nível, sem custo. Por sua dedicação constante à manutenção de seu companheiro, sempre que você avança nesta classe, o autômato também ganha um nível automaticamente. Você ainda precisa pagar por qualquer melhoria que deseje instalar em seu autómato, seguindo as regras normais. A partir do 13º Nível, o Artífice pode aplicar qualquer Modificação Passiva ou Ativa ao seu Companheiro Autômato pela metade do custo.",
        "Você pode escolher o corpo e as armas naturais de seu autômato como alvo para sua habilidade de infundir magias, assim como pode equipar Itens Mágicos em seu companheiro respeitando o limite comum para estes itens, assim como o Artífice que o Criou o Companheiro Autômato recebe os benefícios da habilidade \"Árvore de Natal” como se fosse um Artífice do nível de seu criador.",
        "Caso o autómato seja destruído, você fica atordoado por 1d4 rodadas. Você pode construir um substituto idêntico, sem custos, após um dia de trabalho por nível do autômato. Caso escolha construir um autômato diferente, deve arcar com os custos normalmente.",
        "O Companheiro Autômato age no turno do Artífice, compartilhando de sua rolagem de iniciativa, porém possui Ações próprias."
      ],
      "tables": []
    },
    {
      "title": "Ativação Matemágica",
      "level": 3,
      "paragraphs": [
        "Você pode aplicar os efeitos de quaisquer talentos metamágicos que possua em magias lançadas a partir de varinhas e cajados, gastando os PM armazenados no item. Por exemplo, para aplicar os benefícios de Estender Magia em uma varinha de voo você precisa ter o talento e gastar 1 PM adicional na ativação."
      ],
      "tables": []
    },
    {
      "title": "Criar Itens Mágicos",
      "level": 3,
      "paragraphs": [
        "Você pode fabricar diversos tipos de itens mágicos, conforme seu nível (veja as habilidades seguintes).",
        "Para o artífice, fabricar um item mágico exige metade do valor original do item em matérias-primas. Um personagem com múltiplas habilidades que reduzem o custo de um item aplica apenas a maior redução.",
        "O artífice pode fabricar um item mágico em 2d6+1 dias, não importando seu valor. Esse tempo se reduz para, 1d8+1 no 12° nível e 1d4+1 no 16° nível.",
        "Você pode criar varinhas contendo qualquer magia de um nível que consiga lançar, mesmo sem conhecê-la. Por exemplo, você não precisa conhecer a magia bola de fogo para criar a varinha de bola de fogo, basta ser capaz de lançar magias de 3° nível. Suas varinhas podem conter magias de até 6° nível e tem preço igual ao nível mínimo que um conjurador precisa ter para lançar a magia contida nele x 50 TO.",
        "Você pode criar poções contendo qualquer magia de um nível que consiga lançar, mesmo sem conhecê-la. Por exemplo, você não precisa conhecer a magia Curar Ferimentos para criar a Poção de Curar Ferimentos, basta ser capaz de lançar magias de 1° nível. Suas poções podem conter magias de até 5° nível e tem preço igual ao nível mínimo que um conjurador precisa ter para lançar a magia contida nele x 20 TO. Quando você cria uma poção, cria 5 unidades da mesma ao invés de apenas uma.",
        "Você pode criar qualquer cajado como se conhecesse todas as magias necessárias. Seu nível de artífice deve ser igual ou superior ao dobro do nível da magia mais poderosa no cajado. Por exemplo, criar um cajado da passagem exige ser um artífice de 18º nível (a magia de nível mais alto no cajado é projeção astral, de 9º nível).",
        "Você pode criar qualquer acessório menor (até 9.000 TO). A partir do 12º nível você pode criar acessórios médios (até 29.000 TO), e a partir do 16º nível pode criar acessórios maiores (acima de 30.000 TO). Você não pode criar elixires, tomos e manuais.",
        "Você pode criar armas, armaduras e escudos mágicos. O bônus total do item não pode ultrapassar metade de seu nível de artífice - 2, arredondado para baixo."
      ],
      "tables": []
    },
    {
      "title": "Homúnculo",
      "level": 3,
      "paragraphs": [
        "Você possui um homúnculo, uma criatura Mínima feita de alquimia. Vocês podem se comunicar telepaticamente em até 30 metros e ele obedece a suas ordens, mas ainda está limitado ao que uma criatura de seu tamanho e forma pode fazer. Um homúnculo funciona como um aliado que fornece +4 em testes de ofício e RD 5."
      ],
      "tables": []
    },
    {
      "title": "Improviso Mágico",
      "level": 3,
      "paragraphs": [
        "Você pode gastar uma ação livre para fabricar um item alquímico ou poção cuja fórmula conheça e tenha os materiais, instantaneamente. O custo do item é reduzido à metade e você não precisa fazer o teste de Ofício (alquimia). Contudo, ele só dura até o fim da cena. Você pode utilizar esta habilidade até 3 + Mod. Int vezes ao dia."
      ],
      "tables": []
    },
    {
      "title": "Controlar Constructo",
      "level": 3,
      "paragraphs": [
        "Você tem meios para acessar os sistemas internos de um construto e tomar seu controle. Você pode conjurar a magia dominação total em construtos, sem gastar PM, um número de vezes por dia igual a 1 + mod. de Inteligência."
      ],
      "tables": []
    },
    {
      "title": "Artesão Lendário",
      "level": 3,
      "paragraphs": [
        "Você atingiu o ápice de suas capacidades e conhecimentos como artífice. Você não precisa de testes de Ofício para fabricar itens mundanos. Você também pode forjar qualquer item mágico em apenas um dia. Ainda, você pode descobrir tudo sobre um item mágico (como na magia identificação) instantaneamente, apenas ao tocá-lo."
      ],
      "tables": []
    },
    {
      "title": "Magnum Opus",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Artífice, você nunca pode ter mais de um dos talentos de 20º nível da classe."
      ],
      "tables": []
    },
    {
      "title": "Companheiro Autômato",
      "level": 1,
      "paragraphs": [],
      "tables": []
    },
    {
      "title": "Núcleo",
      "level": 3,
      "paragraphs": [
        "Este é o motor central do autômato, que o alimenta com energia mágica. O núcleo contém uma ou mais gemas contendo a essência de um elemental vivo. Um autómato recebe BBA 1/Nível e 6 PV por nível, porém não recebe talentos. Quando um autômato chega a zero PV, seu núcleo é destruído e precisa ser substituído."
      ],
      "tables": []
    },
    {
      "title": "Chassi",
      "level": 3,
      "paragraphs": [
        "Este é o corpo do autômato, o que define sua forma e tamanho. Sua postura (bípede ou quadrúpede) e tamanho determinam seus PV extras, valores iniciais de Força e Destreza, dano, deslocamento e custo de construção. Autômatos recebem ajustes normais conforme a tabela Tamanho de Criaturas. A forma e tamanho do chassi também atuam como pré-requisitos para instalar modificações.",
        "Você pode transferir um núcleo para um novo chassi, e vice-versa. O procedimento requer um dia de trabalho por nível do autômato. Não é possível transferir um núcleo para um chassi com mais modificações instaladas que o dobro do nível do núcleo. Transferir uma modificação de um chassi para outro custa um quinto do preço e leva um dia de trabalho.",
        "PV Extras: um autômato recém-criado recebe pontos de vida adicionais conforme o tamanho do chassi.",
        "Perícias: o autômato possui 2 perícias treinadas. Ele não pode ser treinado em perícias baseadas em Inteligência ou Carisma.",
        "Força, Destreza: os valores iniciais de Força e Destreza de um autômato são determinados pelo tamanho do chassi.",
        "Constituição: autômatos têm valor nulo de Constituição.",
        "Inteligência, Sabedoria, Carisma: autômatos recém-criados têm Int 3, Sab 10, Car 3.",
        "Arma Natural: Um autômato tem dois ataques de pancada, e pode utilizar ambos na mesma rodada.",
        "Armadura Natural: um autômato tem CA+2. Algumas modificações aumentam esse valor de armadura.",
        "Outras habilidades: um autômato é imune a atordoamento, dano de habilidade, dano não letal, doença, encantamento, enjoo, fadiga, paralisia, necromancia, sono e veneno. Não precisa respirar, se alimentar e dormir. Não recupera pontos de vida com descanso ou curas mágicas, mas pode ser consertado. Consertar um autómato requer um teste de Conhecimento (engenharia) com CD igual a 15 + nível do autômato, e uma hora de trabalho para cada 5 PV restaurados."
      ],
      "tables": [
        {
          "headers": [
            "Chassi Bípede",
            "",
            "",
            "",
            "",
            ""
          ],
          "rows": [
            [
              "Tamanho",
              "Força, Destreza",
              "PV Extra",
              "Dano de Arma Natural",
              "Desl.",
              "Custo"
            ],
            [
              "Pequeno",
              "For 10, Des 16",
              "12",
              "1d4",
              "6m",
              "2.000 TO"
            ],
            [
              "Médio",
              "For 16, Des 14",
              "24",
              "1d6",
              "9m",
              "4.500 TO"
            ],
            [
              "Grande (Alto)",
              "For 24, Des 12",
              "36",
              "1d8",
              "12m",
              "12.500 TO"
            ],
            [
              "Enorme (Alto)",
              "For 30, Des 10",
              "48",
              "2d6",
              "12m",
              "25.000 TO"
            ]
          ]
        },
        {
          "headers": [
            "Chassi Quádrupede",
            "",
            "",
            "",
            "",
            ""
          ],
          "rows": [
            [
              "Tamanho",
              "Força, Destreza",
              "PV Extra",
              "Dano de Arma Natural",
              "Desl.",
              "Custo"
            ],
            [
              "Pequeno",
              "For 6, Des 18",
              "12",
              "1d4",
              "9m",
              "2.000 TO"
            ],
            [
              "Médio",
              "For 12, Des 16",
              "24",
              "1d6",
              "12m",
              "4.500 TO"
            ],
            [
              "Grande (Comprido)",
              "For 22, Des 14",
              "36",
              "1d8",
              "15m",
              "12.500 TO"
            ],
            [
              "Enorme (Comprido)",
              "For 28, Des 12",
              "48",
              "2d6",
              "15m",
              "25.000 TO"
            ]
          ]
        }
      ]
    },
    {
      "title": "Modificadores",
      "level": 3,
      "paragraphs": [
        "Quase todos os autômatos trazem, em seu chassi, uma ou mais modificações para melhor desempenhar suas tarefas. O número máximo de modificações permitidas é igual a 1 + 1 ⁄ 2 do nível do núcleo. Instalar uma modificação requer um dia de trabalho para cada 3.000 TO de custo. Um autômato precisa cumprir todos os pré-requisitos para ter uma modificação instalada. Cada modificação só pode ser instalada uma vez, a menos que sua descrição diga o contrário."
      ],
      "tables": []
    },
    {
      "title": "Modificações Passivas",
      "level": 4,
      "paragraphs": [
        "Os efeitos destas modificações estão sempre ativos, a menos que sua descrição diga o contrário.",
        "Ascensão: o autômato recebe deslocamento de voo e natação 12m. Pré-requisito: núcleo nível 9 ou maior. 11.250 TO.",
        "Blindagem: o corpo do autômato é reforçado com placas metálicas que aumentam o bônus de armadura natural. CA +3 (1.000 TO), CA+4 (4.000 TO), CA+5 (9.000 TO), CA+6 (16.000 TO).",
        "Combatente: o autômato sabe usar armas simples e marciais. Pré-requisito: chassi bípede. 750 TO.",
        "Compartimento de Carga: o construto tem um compartimento mágico com as mesmas propriedades de uma mochila de carga, mas comportando até 250kg. A um comando, o autômato pode expelir qualquer item como uma ação livre. 2.500 TO.",
        "Corpo Maciço: por sua construção sólida, o autômato recebe redução de dano 10/Aço Rubi. 9.000 TO.",
        "Corpo Resiliente: O Autômato recebe +2 de HP por nível. Esta modificação pode ser adquirida até 2 vezes. 4.000 TO.",
        "Disparador: o autômato é equipado com uma arma de ataque à distância com alcance e dano iguais a uma besta leve. A arma pode carregar até 20 virotes ou 5 itens de arremesso como frascos de ácido, fogo alquímico e até granadas. Recarregar a arma é uma ação completa. 750 TO.",
        "Escudo Arcano: cria um disco de força invisível à frente do autômato, provendo CA+4 e imunidade a mísseis mágicos. Pré-requisito: núcleo nível 5. 3.750 TO.",
        "Escudo Áureo: o chassi é tratado para resistir a dano por energia, recebendo resistência a ácido, fogo, frio, elétrico e sônico 10 (4.000 TO), 20 (9.000 TO) ou 30 (25.000 TO).",
        "Esmagador: o dano das armas naturais do autômato aumenta em uma categoria de tamanho. Esta modificação pode ser adquirida até 2 vezes. 250 TO.",
        "Iluminação: um conjunto de faróis mágicos no construto ilumina toda a área em volta a até 18m, ou como um único holofote com 1,5m de raio a até 120m. 250 TO.",
        "Máquina Viva: o chassi contém partes orgânicas integradas, que permitem ao autômato recuperar pontos de vida com magias de cura e descanso. Um autômato com essa modificação perde suas imunidades à doença, enjoo, fadiga, necromancia, sono e veneno. 16.500 TO.",
        "Rodas: o autômato tem rodas em vez de pés ou patas, aumentando seu deslocamento terrestre em +9m. 3.750 TO.",
        "Runas Defensivas: o chassi contém runas que concedem bônus em testes de resistência. +2 (4.000 TO), +4 (9.000 TO), +6 (25.000 TO).",
        "Talentoso: o autômato recebe um talento de combate que cumpra os pré-requisitos. Esta modificação pode ser adquirida até 2 vezes. Pré-requisito: núcleo nível 6 ou maior. 12.000 TO."
      ],
      "tables": []
    },
    {
      "title": "Modificações Ativas",
      "level": 4,
      "paragraphs": [
        "Estas modificações usam energia do núcleo para sua ativação. Todas podem ser usadas um número de vezes por dia igual a 2 + nível do núcleo. Todas também exigem uma ação padrão, a menos que sua descrição diga o contrário.",
        "Canhão Arcano: instala um poderoso canhão mágico capaz de disparar um raio de pura energia arcana, causando 8d10 pontos de dano de essência em uma explosão em linha de 30m a partir do autômato (Reflexos CD 10 + Nível de seu Núcleo). Cada disparo exige uma ação completa. Após cada disparo o canhão precisa de 1d4+1 rodadas para recarregar. Pré-requisito: núcleo nível 9 ou maior. 11.350 TO.",
        "Detecção Mágica: um conjunto de sensores especiais reproduz o efeito de uma entre as seguintes magias, escolhida na instalação: detectar animais, detectar armadilhas, detectar magia, detectar mortos-vivos, detectar portas secretas. Custo: 1.250 TO.",
        "Eletrificar: como uma reação, o autômato descarrega uma poderosa carga elétrica, causando 3d8 + Nível de seu Núcleo pontos de dano de eletricidade a qualquer criatura tocando-o (incluindo ataques corpo-a-corpo). Pré-requisito: núcleo nível 3 ou maior. 1.500 TO.",
        "Garra Extensora: o autômato pode disparar uma garra presa a um sistema de cabos, para tentar agarrar uma criatura ou objeto. Em termos de regras, ela funciona como uma rede, que o autômato sabe usar e pode ser recarregada como uma ação completa. 750 TO.",
        "Modo Armadura: o autômato pode se transformar em uma armadura própria para um usuário de mesmo tamanho ou menor. Nesta condição o autômato não pode realizar ações (exceto voltar ao normal), tornando-se um equipamento. O usuário é considerado sob cobertura total, pode usar as armas naturais do autômato, e recebe todas as suas melhorias. O autômato ainda pode ser alvo de ataques e magias, sofrendo dano normalmente. Remover a armadura exige uma ação livre do autômato. O modo armadura pode ser mantido durante 1 minuto para cada ativação. Se o autômato é destruído, o usuário precisa de um teste de Força (CD 15) para se libertar. Pré-requisito: chassi bípede Médio ou maior. 4.000 TO (Médio), 8.000 TO (Grande), 12.000 TO (Enorme).",
        "Modo Escudo: o autômato pode se transformar em um escudo próprio para um usuário uma categoria de tamanho maior. Nesta condição o autômato não pode realizar ações (exceto voltar ao normal), tornando-se um equipamento. Retornar ao modo normal exige uma ação livre. O usuário empunhando o escudo recebe seu bônus por armadura natural e as modificações blindagem, corpo maciço, escudo arcano e polimento protetivo, se houver. 1.000 TO.",
        "Modo Veículo: o autômato pode se transformar em um veículo com capacidade para um único passageiro de mesmo tamanho, ou 2 passageiros que sejam uma categoria menores, ou 4 passageiros que sejam 2 categorias menores, e assim por diante. Desta forma o construto tem acesso apenas a suas modificações passivas. Mudar de forma exige uma ação livre (e expulsa qualquer passageiro). 3.750 TO.",
        "Porta-Varinhas: um suporte especial no autômato pode acomodar uma varinha mágica. Uma vez por rodada, o usuário pode ativar e usar essa varinha como se estivesse empunhando, como uma ação livre (ataques de toque à distância usam a Destreza do autômato, em vez da sua). Cada ativação consome um uso da modificação por nível da magia na varinha. Os PMs da varinha são gastos normalmente. Pré-requisito: núcleo nível 5 ou maior. 3.750 TO.",
        "Pulso Estridente: o autômato emana um pulso sônico que afeta todas as criaturas vivas a até 6m. Cada alvo faz um teste de Fortitude (CD 10 + Nível de seu Núcleo) ou fica atordoado por 1d4+1 rodadas. Pré-requisito: núcleo nível 3 ou maior. 1.500 TO.",
        "Punho Voador: o autômato pode disparar um de seus punhos como um míssil, fazendo um ataque à distância com sua arma natural, com distância 9m. O punho retorna imediatamente após o ataque. Pré-requisito: chassi bípede. 750 TO.",
        "Raio Inferno: o autômato pode disparar um raio quente como ferro em brasa, como um ataque de toque à distância (alcance 30m) e dano 4d6+Nível de seu Núcleo de fogo. Pré-requisito: núcleo nível 3 ou maior. 1.500 TO."
      ],
      "tables": []
    }
  ],
  "classTalents": [
    {
      "id": "talento-gigante-de-ferro",
      "name": "Gigante de Ferro",
      "prerequisite": "4º Nível de Artífice",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Se um Ataque Corpo-a-Corpo ou a Distância iria atingir o Artífice enquanto o Companheiro Autômato estiver a pelo menos 3 metros de distância dele, o Artífice pode como reação pode redirecionar o dano que sofreria para seu Companheiro Autômato."
      ]
    },
    {
      "id": "talento-frasco-escarlate",
      "name": "Frasco Escarlate",
      "prerequisite": "4º Nível de Artífice",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "O Frasco Escarlate é uma poção que pode ser tomada uma vez por dia como uma Ação de Movimento, ela só funciona no próprio Artífice mesmo que seus efeitos originais sejam em área, o Artífice pode escolher 1 magia de cura de até 2º Nível para garantir os benefícios a ele. A partir do 8º nível ele pode escolher magias de cura de até 4º Nível, de até 6º no 12 e até 8º no 16."
      ]
    },
    {
      "id": "talento-matriz-de-protecao",
      "name": "Matriz de Proteção",
      "prerequisite": "4º Nível de Artífice",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Seu Companheiro Autômato não é mais destruído quando chega a 0 PVs, ao invés disto ele fica inativo (Não podendo agir) e só é destruído quando chega a metade dos seus pontos de vida negativos. Por fim você passa a recuperar 10 pontos de vida do Constructo por hora trabalhada, esse valor aumenta para 20 no 8º Nível e 50 no 16º Nível."
      ]
    },
    {
      "id": "talento-agite-antes-de-usar",
      "name": "Agite antes de usar",
      "prerequisite": "8º Nível de Artífice",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Quando usa uma arma à distância, você pode escolher seu modificador de Inteligência nos testes de ataque e rolagens de dano em vez de Destreza."
      ]
    },
    {
      "id": "talento-todos-se-amarram-em-robos-gigantes",
      "name": "Todos se Amarram em Robôs Gigantes",
      "prerequisite": "8º Nível de Artífice",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Você pode abrir mão de sua Ação padrão ou de Movimento e ceder ela a seu Companheiro Autômato"
      ]
    },
    {
      "id": "talento-eu-testo-minhas-armas",
      "name": "Eu testo minhas Armas",
      "prerequisite": "8º Nível de Artífice",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Quando usa uma arma corpo a corpo, você pode escolher utilizar seu modificador de Inteligência nos testes de ataque e rolagens de dano em vez de Força."
      ]
    },
    {
      "id": "talento-cano-raiado",
      "name": "Cano Raiado",
      "prerequisite": "12º Nível de Artífice",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Quando usa uma arma de ataque à distância feita por você mesmo, ela recebe +1 na margem de ameaça e multiplicador de crítico."
      ]
    },
    {
      "id": "talento-afie-antes-de-usar",
      "name": "Afie antes de Usar",
      "prerequisite": "12º Nível de Artífice",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Você recebe proficiência com armas marciais corpo a corpo. Além disso, você pode gastar uma ação de movimento e uma quantidade de PM a sua escolha (Igual a seu modificador de Inteligência - 3) para aprimorar uma arma corpo a corpo que esteja usando. Para cada PM que gastar, você recebe +1 em rolagens de dano com a arma até o final da cena."
      ]
    },
    {
      "id": "talento-a-fraqueza-do-aco",
      "name": "A Fraqueza do Aço",
      "prerequisite": "12º Nível de Artífice",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Tanto você quanto seu Companheiro Autômato recebem um bônus de +3 nas jogadas de Ataque e dano contra inimigos que utilizem de Armaduras Médias ou Pesadas se o inimigo for um construto o bônus aumenta para +6."
      ]
    },
    {
      "id": "talento-oficina-de-campo",
      "name": "Oficina de Campo",
      "prerequisite": "16º Nível de Artífice",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Durante um descanso curto, cada membro do grupo escolhe uma arma, armadura ou escudo para manutenção. Armas recebem +1 em testes de ataque; armaduras e escudos têm sua penalidade de armadura reduzida em 1. Os benefícios duram um dia. Estas melhorias são consideradas melhorias de Arma e Armadura não de Classe."
      ]
    },
    {
      "id": "talento-transfusao-magica",
      "name": "Transfusão Mágica",
      "prerequisite": "16º Nível de Artífice",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Você pode transferir PM entre duas criaturas aliadas. Com uma ação completa, pode transferir até 10 PMs entre duas criaturas que estejam a até 1,5 de você, ambas as criaturas devem estar conscientes e precisam ser voluntárias para a habilidade, você pode se escolher como alvo para esta habilidade."
      ]
    },
    {
      "id": "talento-sentinela-blindado",
      "name": "Sentinela Blindado",
      "prerequisite": "16º Nível de Artífice",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "O Construto Autômato com uma ação completa levanta uma barreira de 3m ao redor dele, o Autômato pode gastar sua ação de Movimento toda rodada para manter a barreira de pé por até 3 rodadas ou até que ele seja destruído ou inativado. Todo dano que seria causado a um aliado dentro da barreira é ao invés disso causado diretamente ao Autômato. O Autômato pode encerrar a barreira a qualquer momento como reação."
      ]
    },
    {
      "id": "talento-ele-vive",
      "name": "Ele vive!",
      "prerequisite": "20º Nível de Artífice",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você recebe um segundo Companheiro Autômato idêntico ao primeiro (Mesmo nível, aprimoramentos e modificações). Você só fica atordoado se ambos os Autômatos foram destruídos."
      ]
    },
    {
      "id": "talento-para-armar-um-exercito",
      "name": "Para Armar um Exército",
      "prerequisite": "20º Nível de Artífice",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "A habilidade Criar Itens Mágicos sofre as seguintes mudanças:",
        "Para o artífice, fabricar um item mágico exige 1/4 do valor original do item em matérias-primas. Um personagem com múltiplas habilidades que reduzem o custo de um item aplica apenas a maior redução.",
        "Você pode criar varinhas contendo qualquer magia de até 7º Ciclo, mesmo sem conhecê-la. Elas tem preço igual ao nível mínimo que um conjurador precisa ter para lançar a magia contida nele x 10 TO e você pode criar varinhas com efeitos metamágicos contanto que os conheça.",
        "Você pode criar poções contendo qualquer magia de até 7º Ciclo, mesmo sem conhecê-la. Suas poções podem conter magias de até 7° nível e tem preço igual ao nível mínimo que um conjurador precisa ter para lançar a magia contida nele x 2 TO. Quando você cria uma poção, cria 5 unidades da mesma ao invés de apenas uma.",
        "Você pode criar armas, armaduras e escudos mágicos. Com bônus de até +10."
      ]
    },
    {
      "id": "talento-minha-maior-criacao",
      "name": "Minha Maior Criação!",
      "prerequisite": "20º Nível de Artífice",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você cria um Artefato de forma gratuita. As limitações de o que um Artefato pode fazer fica a critério do mestre e devem ser discutidas com o mesmo."
      ]
    }
  ]
} satisfies ClassDetail;
