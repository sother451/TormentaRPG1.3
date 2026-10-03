import type { ClassDetail } from './schema';

export const classDetail = {
  "kind": "prestige",
  "slug": "mestre-das-bonecas",
  "name": "Mestre das Bonecas",
  "family": "Classes de Prestígio",
  "sourceDocId": "1RXXGHI0115Tp5_gpQFWbDTLI27O5KSqI3ToyP1EofSM",
  "sourceTitle": "Mestre das Bonecas - WIP",
  "status": "wip",
  "editorialNotes": [
    "A fonte está explicitamente marcada como WIP. O compêndio apresenta o material existente sem completar lacunas por inferência."
  ],
  "requirements": [
    "Magias: capacidade de lançar magias arcanas de 3º nível",
    "Talentos: Comandar"
  ],
  "basics": {
    "hitPoints": "uma Mestre das Bonecas ganha 2 PV (+mod. Con) por nível.",
    "trainedSkills": null,
    "classSkills": null,
    "bonusTalents": null
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
        "Criar Bonecas, Magias"
      ],
      [
        "2º",
        "+1",
        "En Passant"
      ],
      [
        "3º",
        "+1",
        "Roque"
      ],
      [
        "4º",
        "+2",
        ""
      ],
      [
        "5º",
        "+2",
        "Mate do Estudioso"
      ],
      [
        "6º",
        "+3",
        "Ave Imperator"
      ],
      [
        "7º",
        "+3",
        "Gambito da Rainha"
      ],
      [
        "8º",
        "+4",
        ""
      ],
      [
        "9º",
        "+4",
        "Veni Vidi Vici"
      ],
      [
        "10º",
        "+5",
        "Promover o Peão"
      ]
    ]
  },
  "sections": [
    {
      "title": "Criar Bonecas",
      "level": 3,
      "paragraphs": [
        "Com um dia de trabalho (8 horas) você pode criar uma boneca arcana que obedece a seus comandos, ela possui o mesmo nível que você quando a criou. Você pode ter um número de bonecas igual ao seu nível nesta classe, mas só pode possuir um número de bonecas ativas igual a metade de seu nível nesta classe (Arredondado para cima). Caso uma boneca seja destruída, você pode invocar uma boneca reserva, se ainda tiver com uma ação de movimento. Você pode realizar aprimoramentos e mudanças a suas bonecas contato que pague o custo pelos aprimoramentos.",
        "Bonecas invocadas através dessa habilidade, só podem se mover e realizar atividades que exijam pouca força e recebem BBA 3/4. Mas contam como um oponente para o propósito de flanquear e servem como uma extensão dos membros do conjurador para realizar ataques de toque. Você pode equipá-las com as armas e armaduras que quiser (Elas sabem utilizar de Armas Simples além de Armaduras Leves).",
        "Uma boneca age no turno do Mestre das Bonecas, compartilhando de sua rolagem de iniciativa, porém possui Ações próprias. Se você se afastar mais de 30m de uma boneca ela é desativada, e cai inerte no chão precisando ser reativada com uma ação de movimento.",
        "Pv: Uma Boneca tem ½ dos PVs de seu criador",
        "Deslocamento: 12 Metros (Voo)",
        "Perícias: Uma boneca é treinada em Furtividade e Percepção.",
        "Habilidades: For 10, Des 20, Con -, Int 5, Sab 10, Car -.",
        "Arma Natural: Possui dois ataques com arma natural que causa dano de forma equivalente a uma Adaga própria para o seu tamanho (1d1 para criaturas Ínfimas).",
        "Tamanho: Minúsculo",
        "Outras Habilidades:  Imunidade a atordoamento, dano de habilidade, dano não-letal, doença, encantamento, fadiga, paralisia, necromancia, sono e veneno. Uma boneca é um construto."
      ],
      "tables": []
    },
    {
      "title": "Magias",
      "level": 3,
      "paragraphs": [
        "Níveis de Mestre das Bonecas se acumulam com níveis numa classe conjuradora arcana que o personagem já possua para propósitos de magia conhecidas e PM."
      ],
      "tables": []
    },
    {
      "title": "En Passant",
      "level": 3,
      "paragraphs": [
        "Com uma ação padrão, você pode comandar uma ou mais bonecas para atacar por você. Cada boneca ataca separadamente usando o seu bônus de toque-a-distância, mas causam dano usando os próprios modificadores e armas. Mesmo que suas bonecas já tenham atacado nesta rodada, elas podem atacar novamente pelos efeitos desta habilidade."
      ],
      "tables": []
    },
    {
      "title": "Roque",
      "level": 3,
      "paragraphs": [
        "Acostumada a ser protegida por suas bonecas, sua CA aumenta em +1 para cada boneca ativa a até 3m de você. Este bônus não é cumulativo com Escudos mas é cumulativo com Armaduras e Magias. Quando você usa o Talento “Comandar” seus aliados também recebem os benefícios desta habilidade."
      ],
      "tables": []
    },
    {
      "title": "Mate do Estudioso",
      "level": 3,
      "paragraphs": [
        "Suas bonecas passam a somar seu Mod.Int as Jogadas de Ataque e Dano delas e são automaticamente afetadas pelo seu talento “Comandar”. Mesmo que não possam ouvi-lo ou não estejam ativas."
      ],
      "tables": []
    },
    {
      "title": "Ave Imperator",
      "level": 3,
      "paragraphs": [
        "Aprendendo a manipular mais suas habilidades arcanas, suas magias causam +1 ponto de dano para cada boneca ativa a até 3m de você. Quando você usa o Talento “Comandar” seus aliados também recebem os benefícios desta habilidade."
      ],
      "tables": []
    },
    {
      "title": "Gambito da Rainha",
      "level": 3,
      "paragraphs": [
        "Uma vez por dia você pode redirecionar um ataque que lhe afetaria para uma de suas bonecas a até 9 metros, você não precisa ser o alvo principal de um ataque ou magia para ativar esta habilidade, apenas precisa ser afetado por ela de alguma forma."
      ],
      "tables": []
    },
    {
      "title": "Veni Vidi Vici",
      "level": 3,
      "paragraphs": [
        "Quando os PVs de uma das suas bonecas chega a 0 ,você pode escolher ativar uma explosão a partir dela, causando 6d6 + MdN + Mod.Int pontos de dano a criaturas a até 3 metros da mesma. Criaturas que estejam se beneficiando do seu talento “Comandar” não são afetadas pela explosão."
      ],
      "tables": []
    },
    {
      "title": "Promover o Peão",
      "level": 3,
      "paragraphs": [
        "Você aprende a extrair o máximo de suas bonecas, especialmente de como comandá-las. Quando você usa o talento “Comandar” pode escolher um dos benefícios abaixo para garantir a suas bonecas além dos efeitos comuns do talento e suas habilidades:",
        "Torre, As bonecas recebem um ataque adicional por rodada, o alcance de seus ataques passa a ser 36 metros caso utilizem de armas corpo-a-corpo ou recebem 36 metros de alcance adicionais se forem longa distância. Enquanto este efeito perdurar suas bonecas podem usar qualquer arma, armadura e escudo como se possuíssem todos os requisitos para fazê-lo.",
        "Bispo, As bonecas recebem cura acelerada, RD e RE igual ao seu Mod.Int, voce pode ativar “Gambito da Rainha” uma segunda vez este dia se já tiver utilizado da habilidade.",
        "Cavalo, o deslocamento de suas bonecas se torna 36 metros vôo, elas não geram mais ataques de oportunidade por se moverem e se tornam capazes de te carregar (Seu deslocamento se torna igual ao das bonecas contanto que uma delas ainda esteja ativa)",
        "Rainha, Suas bonecas recebem todos os bônus garantidos pela Torre, Bispo e Cavalo porém morrem em 3 rodadas a partir da ativação da habilidade.",
        "Materiais para Bonecas!",
        "Madeira, O dado de dano para “Veni Vidi Vici” aumenta para D8 ao invés de D6",
        "Pedra, A boneca recebe CA igual ao Mod. Int de seu criador",
        "Argila, A boneca recebe RE igual ao Mod. Int de seu criador, este efeito se acumula com o efeito “Bispo” de “Promover o Peão”",
        "Couro, A boneca pode ser treinada em duas perícias adicionais",
        "Ferro, A boneca recebe RD igual ao Mod. Int de seu criador, este efeito se acumula com o efeito “Bispo” de “Promover o Peão”",
        "Carne e Ossos, a boneca passa a ter vida igual a de seu criador ao invés de metade."
      ],
      "tables": []
    }
  ],
  "classTalents": []
} satisfies ClassDetail;
