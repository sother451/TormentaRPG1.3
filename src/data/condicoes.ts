export interface ConditionEntry {
  id: string;
  name: string;
  description: string;
}
export const conditions: ConditionEntry[] = [
  {
    "id": "abalado",
    "name": "Abalado",
    "description": "com medo de algo. O personagem sofre –2 em jogadas de ataque e testes de habilidade, perícia e resistência. Se o personagem ficar abalado novamente, em vez disso fica apavorado."
  },
  {
    "id": "agarrado",
    "name": "Agarrado",
    "description": "preso em combate corpo-a-corpo. O personagem sofre –2 nas jogadas de ataque, só pode atacar com armas leves, fica desprevenido e não pode se mover. Ela pode se soltar com uma ação padrão, vencendo um teste de manobra oposto."
  },
  {
    "id": "apavorado",
    "name": "Apavorado",
    "description": "com muito medo de algo. O personagem tenta fugir da fonte de seu medo da melhor maneira possível. Se não conseguir, poderá lutar, mas com o dobro das penalidades de estar abalado."
  },
  {
    "id": "atordoado",
    "name": "Atordoado",
    "description": "incapaz de agir e desprevenido."
  },
  {
    "id": "caido",
    "name": "Caído",
    "description": "deitado no chão. O personagem sofre –4 nas jogadas de ataque corpo-a-corpo e move-se com metade do seu deslocamento. Seus oponentes recebem +4 nas jogadas de ataque corpo-a-corpo, mas sofrem –4 nas jogadas de ataque à distância."
  },
  {
    "id": "cego",
    "name": "Cego",
    "description": "incapaz de enxergar. O personagem tem 50% de chance de errar qualquer ataque, fica desprevenido e sofre –4 na CA (para um total de –8), move-se com metade do seu deslocamento e sofre –4 em testes de perícia baseados em Força ou Destreza."
  },
  {
    "id": "confuso",
    "name": "Confuso",
    "description": "com o discernimento afetado por um efeito. Veja a magia confusão para mais detalhes."
  },
  {
    "id": "dano-de-habilidade",
    "name": "Dano de Habilidade",
    "description": "o personagem perdeu temporariamente 1 ou mais pontos em um ou mais valores de habilidades. Pontos de habilidades perdidos voltam à taxa de 1 por dia, ou de acordo com o efeito que diminui o valor."
  },
  {
    "id": "desprevenido",
    "name": "Desprevenido",
    "description": "com a guarda baixa. O personagem sofre –4 na classe de armadura."
  },
  {
    "id": "enjoado",
    "name": "Enjoado",
    "description": "passando mal por qualquer motivo. O personagem só pode realizar uma ação padrão, bônus ou movimento (não ambas) por rodada."
  },
  {
    "id": "enredado",
    "name": "Enredado",
    "description": "com o movimento prejudicado. O personagem sofre –2 nas jogadas de ataque, –4 na destreza, move-se com metade do seu deslocamento e não pode correr ou fazer investidas."
  },
  {
    "id": "exausto",
    "name": "Exausto",
    "description": "muito cansado. O personagem sofre –6 na Força e Destreza, move-se à metade do seu deslocamento e não pode correr ou fazer investidas. Se o personagem ficar fatigado ou exausto novamente, cai inconsciente."
  },
  {
    "id": "fascinado",
    "name": "Fascinado",
    "description": "com a atenção presa em alguma coisa. O personagem fica parado, sem fazer nada exceto observar aquilo que lhe fascinou, e sofre –4 nos testes de Percepção. Qualquer ameaça óbvia anula este efeito. Um personagem pode gastar uma ação padrão para sacudir um personagem fascinado e anular este efeito."
  },
  {
    "id": "fatigado",
    "name": "Fatigado",
    "description": "cansado. O personagem sofre –2 na Força e Destreza e não pode correr ou fazer investidas. Se o personagem ficar fatigado novamente, fica exausto."
  },
  {
    "id": "inconsciente",
    "name": "Inconsciente",
    "description": "indefeso e incapaz de agir."
  },
  {
    "id": "incorporeo",
    "name": "Incorpóreo",
    "description": "sem corpo físico. O personagem é imune a ataques, exceto mágicos, e mesmo esses têm 50% de chance de falha. Pode atravessar objetos sólidos (exceto efeitos de essência); assim, seus ataques ignoram bônus na CA por armaduras, escudos e armadura natural."
  },
  {
    "id": "indefeso",
    "name": "Indefeso",
    "description": "amarrado, inconsciente ou paralisado. Um personagem indefeso tem CA 5 + seu modificador de tamanho, e pode sofrer golpes de misericórdia."
  },
  {
    "id": "lento",
    "name": "Lento",
    "description": "o personagem só pode realizar uma ação padrão ou de movimento (não ambas) por rodada. Além disso, sofre –1 nas jogadas de ataque, na CA e nos testes de Reflexo, e move-se à metade do seu deslocamento."
  },
  {
    "id": "ofuscado",
    "name": "Ofuscado",
    "description": "com a visão prejudicada. O personagem sofre –1 nas jogadas de ataque."
  },
  {
    "id": "paralisado",
    "name": "Paralisado",
    "description": "indefeso e incapaz de se mover. O personagem fica com valores efetivos de Força e Destreza de 0, mas pode realizar ações puramente mentais. A CA de um personagem incapaz de se mover é 5 + seu modificador de tamanho (a mesma de um objeto inanimado)."
  },
  {
    "id": "pasmo",
    "name": "Pasmo",
    "description": "incapaz de agir (mas pode se defender normalmente)."
  },
  {
    "id": "sangrando",
    "name": "Sangrando",
    "description": "com um ferimento aberto. No início de cada turno, o personagem deve fazer um teste de Constituição (CD 15). Se for bem-sucedido, estabiliza. Se falhar, sofre 1d4 pontos de dano e continua sangrando."
  },
  {
    "id": "surdo",
    "name": "Surdo",
    "description": "incapaz de ouvir. O personagem sofre –4 nos testes de Iniciativa e Percepção. Além disso, precisa fazer um teste de Vontade para lançar qualquer magia (CD 10 + o nível da magia). Uma magia afetada pelo talento Magia Silenciosa não sofre essa limitação."
  },
  {
    "id": "surpreendido",
    "name": "Surpreendido",
    "description": "que não está ciente de seus inimigos. O personagem não pode agir e fica desprevenido durante a primeira rodada do combate."
  }
];

export const actionPoints = {
  gaining: [
  "Você começa cada sessão de jogo com um ponto de ação.",
  "Durante a aventura, pode ganhar mais através de heroísmo, interpretação e intervenção do mestre (veja abaixo). Pontos de ação não gastos não permanecem para a próxima sessão; você recomeça com um ponto, mais uma vez. Heroísmo. Você ganha pontos de ação por atos de heroísmo.O ato deve ser realmente valoroso e altruísta. Espancar um bando de goblins que não representa ameaça real não é heroísmo, mas escolher ser atingido no lugar de um amigo é. Resgatar pessoas de uma estalagem em chamas é heroísmo. Render-se para um vilão, a fim de salvar as vidas dos reféns, é heroísmo. Permitir que um vilão fuja enquanto você acalma uma fera enfurecida antes que ela ataque um inocente é heroísmo. O mestre decide se um ato específico é heroico o bastante.",
  "Interpretação. Quando você diz algo inspirado, que faz todos na mesa rirem ou aplaudirem, pode ganhar um ponto de ação. Isto não vale apenas para diálogos: se fizer uma descrição fantástica da ação de seu herói ou qualquer coisa que ajude a entreter o grupo de alguma outra forma você também pode merecer um ponto de ação.",
  "Intervenção do mestre. Você ganha pontos de ação quando o mestre “torce” as regras do jogo em favor dos vilões. O mestre essencialmente tem o direito de “roubar” em favor dos vilões, mas os jogadores ganham pontos de ação quando isso acontece. De modo geral, sempre que viola as regras para causar algum problema aos heróis, os jogadores ganham pontos de ação. Alguns exemplos de intervenção do mestre incluem:",
  "Permitir que um vilão escape automaticamente. As circunstâncias conspiram para permitir que o vilão fuja livre, destroços barram a perseguição, o vilão desaparece em uma explosão ou cai para uma “morte” misteriosa, e assim por diante.",
  "• Fazer com que um personagem jogador falhe automáticamente em um teste de resistência contra um perigo específico (como a armadilha de um vilão) para ajudar a mover a trama adiante.",
  "Fazer com que os heróis sejam automaticamente surpreendidos por um oponente.",
  "Dar a um personagem não jogador o benefício de um ponto de ação. Isto é importante, já que apenas os heróis possuem e ganham pontos de ação."
],
  using: [
  "Gastar um ponto de ação é uma reação, que não consome tempo algum (a menos que outra regra adiante diga o contrário). Você pode gastar quantos pontos de ação tiver, mas apenas um para cada benefício por rodada. Com o gasto de um ponto de ação você pode:",
  "Adicionar um dado a uma jogada ou teste. Você deve usar o ponto de ação depois de rolar o dado.",
  "Adicionar um dado à sua classe de armadura até o início de seu próximo turno.",
  "Fazer um segundo teste de resistência contra algum efeito nocivo que o esteja afetando, como uma magia dominar pessoa.",
  "Realizar uma ação padrão ou de movimento adicional na rodada. Por exemplo, pode realizar uma ação completa e uma ação padrão, ou uma ação padrão e duas ações de movimento, ou qualquer outra combinação.",
  "Recuperar pontos de vida ou PMs. A quantidade de PV e PMs que você recupera depende de seu nível.",
  "Fazer um segundo teste de perícia ou habilidade para realizar um feito."
],
  recoveryTable: {
  "headers": [
    "Nível",
    "Dado Extra",
    "PVs Recuperados",
    "PMs Recuperados"
  ],
  "rows": [
    [
      "1º - 4º",
      "1d4",
      "3d8 + 2",
      "1d4+1"
    ],
    [
      "5º - 8º",
      "2d4",
      "4d8 + 3",
      "2d4+2"
    ],
    [
      "9º - 12º",
      "2d6",
      "5d10 + 4",
      "2d6+3"
    ],
    [
      "13º - 16º",
      "3d6",
      "6d10 + 5",
      "3d6+4"
    ],
    [
      "17º - 20º",
      "4d8",
      "7d12 + 6",
      "4d8+5"
    ]
  ]
}
} as const;
