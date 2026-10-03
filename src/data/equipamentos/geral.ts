export const generalEquipment = {
  "load": [
    "Você pode carregar, sem problemas, peso igual a três vezes seu valor de Força, em quilos (então, se tiver Força 15, pode carregar até 45kg). Acima disso, você sofre uma penalidade de -2 em testes de Acrobacia, Atletismo, Furtividade e Ladinagem, e seu deslocamento é reduzido em 3m. O peso máximo que você pode carregar é igual a dez vezes sua Força, em quilos ( se tiver força 18, pode carregar até 180 kg). Você ainda sofre penalidade de carga normal."
  ],
  "currencyIntro": [
    "O Tibar (T$) é a moeda padrão do reinado. Existem também o Tibar de prata (TP), que vale 10T$, e o Tibar de ouro (TO), que vale 100 T$, sendo este o mais utilizado por aristocratas e aventureiros. Há ainda o raro Tibar de platina (TL), que vale 1.000 T$ e é empregado apenas por donos de grandes fortunas, como regentes e arquimagos. Uma moeda de qualquer tipo mede 2 cm e pesa 10 gramas."
  ],
  "currencyTable": {
    "headers": [
      "Moeda",
      "T$",
      "TP",
      "TO",
      "TL"
    ],
    "rows": [
      [
        "Tibar",
        "1",
        "1/10",
        "1/100",
        "1/1000"
      ],
      [
        "Tibar de Prata",
        "10",
        "1",
        "1/10",
        "1/100"
      ],
      [
        "Tibar de Ouro",
        "100",
        "10",
        "1",
        "1/10"
      ],
      [
        "Tibar de Platina",
        "1.000",
        "100",
        "10",
        "1"
      ]
    ]
  },
  "objectStatsIntro": [
    "Todos os equipamentos possuem 3 estatísticas: CA, RD e PV. Cada estatística é dada de acordo com o Estado (CA), Material (RD) e Tipo (PVs) dos equipamentos."
  ],
  "objectStateTable": {
    "headers": [
      "Estado",
      "CA"
    ],
    "rows": [
      [
        "Parado/Imóvel",
        "5 + MdT"
      ],
      [
        "Em movimento",
        "10 + MdT"
      ],
      [
        "Sendo usado/carregado por uma criatura",
        "Resultado do Teste na Manobra Separar"
      ]
    ]
  },
  "objectMaterialTable": {
    "headers": [
      "Material",
      "RD"
    ],
    "rows": [
      [
        "Madeira",
        "5"
      ],
      [
        "Metal",
        "10"
      ],
      [
        "Aço-rubi",
        "15"
      ],
      [
        "Adamante",
        "30"
      ],
      [
        "Gelo Eterno",
        "20"
      ],
      [
        "Madeira Negra",
        "15"
      ],
      [
        "Matéria Vermelha",
        "20"
      ],
      [
        "Mitral",
        "15"
      ],
      [
        "Prata",
        "15"
      ]
    ]
  },
  "objectTypeTable": {
    "headers": [
      "Tipo",
      "PV"
    ],
    "rows": [
      [
        "Arma Leve",
        "5"
      ],
      [
        "Arma de uma Mão",
        "10"
      ],
      [
        "Arma de duas Mãos",
        "20"
      ],
      [
        "Escudo Leve",
        "5"
      ],
      [
        "Escudo Pesado",
        "10"
      ],
      [
        "Escudo de Corpo",
        "20"
      ],
      [
        "Armadura Leve",
        "20"
      ],
      [
        "Armadura Média",
        "30"
      ],
      [
        "Armadura Pesada",
        "40"
      ]
    ]
  },
  "objectStatsNotes": [
    "*RD dos itens só podem ser vencidos por Aço-rubi.",
    "*PVs base para o tamanho Médio. Divida por 2 para cada categoria de tamanho inferior ou multiplique por 2 para cada categoria de tamanho superior.",
    "Por exemplo, uma armadura Média de adamante de tamanho médio parada sobre uma mesa teria, CA 5, RD 30 e 30 de PV.",
    "Itens mágicos têm o dobro dos pontos de vida de um item normal, e um bônus na RD conforme sua aura: RD +5 para aura tênue, RD +10 para aura moderada e RD +20 para aura poderosa."
  ]
} as const;
export const shipBasics = [
  "Tamanho: o tamanho de um navio varia de Grande (botes e canoas) a Colossal (naus, galeões) e define sua tripulação, deslocamento, classe de armadura, pontos de vida e armamento.",
  "Redução de Dano: a maioria dos navios oceânicos é feita de madeira (RD 5) ou madeira reforçada (RD 6). madeira-ferro (RD 10), e em alguns mundos usa-se cerâmica magicamente tratada para construir navios capazes de resistir à lava ou vidro derretido (RD 8, imunidade ao fogo).",
  "Tripulação: todo navio requer uma equipe para funcionar,de acordo com seu tamanho.",
  "Deslocamento: o deslocamento do navio sobre a água.",
  "Classe de armadura: a CA de um navio é igual a 10 + redução de dano + modificador de tamanho. Um piloto manobrando o navio pode adicionar seu modificador de Destreza à CA do navio.",
  "Armamento: navios de tamanho Grande não carregam armas próprias. Navios maiores têm certo número de espaços para balistas, canhões em seu convés; balistas ocupam um espaço cada; canhões ocupam dois espaços cada. Um navio Descomunal, por exemplo, pode conter até oito balistas ou quatro canhões. Um navio também pode ser equipado com um aríete ou esporão na proa, para ataques de carga (veja adiante / não veja não).",
  "Pontos de Vida: variam conforme o tamanho."
]
export const shipRules = [
  "Reparos: consertar requer uma hora de trabalho, 10 TO em suprimentos de reparo e um teste de Ofício (engenharia) contra CD 15. Se você for bem-sucedido, recupera 1d8 pontos de vida do navio, mais 1d8 para cada 5 pontos pelos quais o teste exceder a CD.(Magias podem auxiliar no processo de reparos. De acordo com o mestre, uma magia lançada em conjunto com o teste de Ofício fornece um bônus igual ao dobro do nível dela no teste. Exemplos de magias que podem ser usadas com esse propósito incluem: Animar corda, Ao alcance da mão, Compor, Consertar, Extinguir fogo, Madeira-ferro, Moldar madeira, Reparar objetos*, Reparar objetos maior, Tornar inteiro. É possível receber bônus por mais de uma magia diferente, mas usos múltiplos de uma mesma magia não se acumulam.",
  "Pilotagem e Combate Manobrar um navio exige testes da perícia Ofício (marinheiro). A CD do teste varia: 15 para águas calmas, 20 para águas agitadas ou 25 para águas tempestuosas. Condições ruins (correntes desconhecidas, vento contrário, nevoeiro, etc.) fornecem uma penalidade de –4 no teste. O piloto tem um bônus de +10 em situações normais, mas não em combate. O tamanho do navio modifica o teste de Ofício (marinheiro) do piloto.",
  "• Embarcação Grande: –1. • Embarcação Enorme: –2. • Embarcação Descomunal: –4. • Embarcação Colossal: –8.",
  "A qualidade da tripulação também modifica o teste. • Tripulação verde (sem treinamento em Ofício): –2. • Tripulação treinada (personagens de níveis 1–3): +0. • Tripulação veterana (personagens de níveis 4–6): +2. • Tripulação de elite (personagens acima de 6º nível): +4.",
  "Por fim, um piloto manobrando uma embarcação com tripulação abaixo do total sofre uma penalidade de –4 nos testes de Ofício (marinheiro). Não é possível manobrar uma embarcação com tripulação abaixo da mínima. Em viagem, o piloto deve fazer um teste de Ofício (marinheiro) a cada dia / semana / mês (a critério do mestre).",
  "Ele também deve fazer um teste sempre que encontrar um obstáculo, como uma tempestade, monstro marinho. Em caso de sucesso, o navio avança sem problemas; em caso de falha, deve enfrentar o obstáculo ou avança apenas 1/4 da distância normal para o período.",
  "• Ataques a Navios: o combate entre navios é muito parecido com um combate normal. Os tripulantes podem atacar navios próximos com seus próprios ataques à distância (seja com armas ou magias), ou então com as armas do próprio navio (balistas, canhões). Estas armas são descritas na seção Equipamento.",
  "• Iniciativa: um navio se movimenta durante a ação de seu piloto, ou no fim da rodada, se não houver ninguém pilotando.",
  "• Dano em Navios: navios são imunes a atordoamento, dano de habilidade, dano não letal, doenças, encantamentos, fadiga, paralisia, necromancia, sono e venenos. Eles sofrem apenas metade do dano por armas de ataque à distância e ataques de frio (divida o dano por 2 antes de aplicar a RD).  Um navio reduzido à metade de seus pontos de vida impõe uma penalidade de –2 nos testes de Ofício (marinheiro). Um navio que perca todos os seus PV é destruído e afunda ou se despedaça rapidamente (1d6 rodadas).",
  "• Movimentação: manobrar um navio em combate é uma ação de movimento. Com um teste bem-sucedido, o piloto pode parar o navio ou movimentá-lo até seu deslocamento máximo, uma vez por rodada. Se o navegador não gastar nenhuma ação na rodada para manobrar, o navio continua se movimentando no mesmo sentido e velocidade da rodada anterior; O piloto também pode usar uma ação completa para manobrar seu navio defensivamente, substituindo a CA normal da embarcação por um teste de Ofício (marinheiro).",
  "• Ataques de Carga: um navio pode fazer um ataque de carga, investindo contra um alvo. Isso exige uma ação completa e um teste de Ofício (marinheiro) do piloto, com CD igual à CA do alvo. Um ataque de carga causa dano conforme o tamanho do navio agressor: 4d6 para Grande, 8d6 para Enorme, 16d6 para Descomunal e 32d6 para Colossal. Tanto o navio atacante quanto o alvo sofrem o mesmo dano. Navios equipados com aríetes ou esporões sofrem apenas metade do dano quando fazem um ataque de carga.",
  "• Abordagem: após um ataque de carga, ou mesmo se dois navios estiverem próximos o bastante, ganchos e pranchas de abordagem podem ser lançados. Isso exige uma ação completa e um teste de Ofício (marinheiro) contra CD 20 para cada gancho ou prancha de abordagem lançados. Navios presos desse modo estão efetivamente agarrados: –2 nas jogadas de ataque, –4 na classe de armadura, não podem se mover e ataques à distância não podem ser usados sem causar dano a ambos os navios.",
  "• Lutando em um Navio: lutar a bordo de um navio em movimento é difícil. Como regra opcional, você pode exigir testes de Acrobacia contra CD 5 a cada rodada quando os personagens estiverem lutando em um navio em movimento. Personagens que falhem nos testes caem no chão. A CD baixa significa que quase todos serão bem-sucedidos. Contudo, todos os personagens que não forem treinados em Acrobacia ficam desprevenidos (–4 na classe de armadura) quando precisam fazer testes para ficar de pé! Esta CD presume uma embarcação em boas condições, com uma tripulação que joga areia ou serragem no convés de vez em quando para tornar o piso menos escorregadio. Durante uma tempestade a CD aumenta para 10 ou 15. A melhor maneira de evitar estas penalidades é escolher o talento Ginga das Ondas.",
  "• Lançando Magias em um Navio: quando um navio sofre dano, o balanço dificulta a conjuração de magias. Conjurar uma magia em um navio que sofreu dano na rodada anterior exige um teste de Vontade (CD 15 + nível da magia). Um navio com 1/4 de seus PV ou menos aumenta a CD em +5. Além disso, condições climáticas e o próprio movimento natural do navio podem exigir testes do conjurador, como explicado no Capítulo 8 de Tormenta RPG."
];
export const ships = [
  {
    "name": "Canoa",
    "text": "construída a partir de um único tronco de árvore, talvez seja a embarcação mais simples de todas. Use estas estatísticas também para botes. Embarcação Grande; Tripulação mínima 1, total 4; Desl. 3m; CA 14 (–1 tamanho, +5 natural); PV 70; redução de dano 5; armamento: nenhum; Custo 50 TO."
  },
  {
    "name": "Jangada",
    "text": "barco típico de pescadores, com uma vela e remos. Embarcação Grande; Tripulação mínima 1, total 4; Desl. 4,5m; CA 14 (–1 tamanho, +5 natural); PV 70; redução de dano 5; armamento: nenhum. Custo 1.050 TO."
  },
  {
    "name": "Barcaça",
    "text": "este pequeno navio tem um único mastro, de vela quadrangular, e alguns remos para suplementar a força da vela. Pode navegar em rios e mar aberto. Muito comum em mundos pacíficos como Serena, Terápolis e até mesmo Ramknal. Embarcação Enorme; Tripulação mínima 1, total 10; Desl. 6m; CA 13 (–2 tamanho, +5 natural); PV 120; redução de dano 5; armamento: nenhum; Custo 3.000 TO."
  },
  {
    "name": "Veleiro",
    "text": "com três mastros de velas quadrangulares, é o típico navio de viagem, muito popular entre mercadores.  Embarcação Descomunal; Tripulação mínima 5, total 30; Desl. 9m; CA 11 (–4 tamanho, +5 natural); PV 220; redução de dano 5; armamento: nenhum. Custo 10.000 TO."
  },
  {
    "name": "Galé",
    "text": "esta embarcação comprida e estreita tem um mastro, mas é impelida basicamente por remos. Típico navio de guerra, usado tanto pela marinha de diversos reinos quanto por piratas.  Embarcação Descomunal; Tripulação mínima 5, total 40; Desl. 9m; CA 11 (–4 tamanho, +5 natural); PV 260; redução de dano 5; armamento: 4 balistas. Custo 16.000 TO."
  },
  {
    "name": "Caravela",
    "text": "seus três mastros usam grandes velas triangulares, que são melhores para regiões onde os ventos são desconhecidos. Por essa razão a caravela é favorita para desbravar mares inexplorados. Embarcação Descomunal; Tripulação mínima 5, total 30; Desl. 9m; CA 11 (–4 tamanho, +5 natural); 220 PV; armamento: nenhum; Custo 11.000 PO. O piloto não sofre a penalidade em testes de Ofício (marinheiro) por condições ruins."
  },
  {
    "name": "Trirreme",
    "text": "com um mastro e três linhas de remos em cada lado, é muito usado na marinha do Império Táurico em Arton  e em batalhas navais em Kundali e Pelágia. Os remadores normalmente são escravos, acorrentados aos remos.  Embarcação Descomunal: Tripulação mínima 5, total 40; Desl. 10,5m; CA 11 (–4 tamanho, +5 natural); PV 260; redução de dano 5; armamento: aríete; Custo 16.000 TO."
  },
  {
    "name": "Drácar",
    "text": "o drácar se parece com uma galé (comprido e estreito, com um mastro e remos), mas apresenta uma cabeça de dragão ou outro monstro na proa, e um alongamento na popa imitando a cauda da criatura. É usado por salteadores, e tem essa aparência para assustar suas vítimas.  Embarcação Descomunal: Tripulação mínima 5, total 40;  Desl. 9m; CA 11 (–4 tamanho, +5 natural); PV 260; redução de dano 5; armamento: nenhum; Custo 15.000 PO. Todos os inimigos a até 36m sofrem uma penalidade de moral de –1 na CA e nos testes de resistência. Este é um efeito de medo."
  },
  {
    "name": "Junco",
    "text": "navio rápido e estável, graças às suas velas divididas horizontalmente por ripas de pau. Muito comum nos mares de Sora, esse navio também é típico de Tamu-ra. Mesmo após a libertação de Tamu-ra, escombros de juncos ainda são visão comum perto da ilha. Alguns ainda guardam resquícios da corrupção da Tormenta. Embarcação Descomunal; Tripulação mínima 5, total 30; Desl. 9m; CA 11 (–4 tamanho, +5 natural); 220 PV; armamento: nenhum; Custo 11.500 PO. O piloto recebe um bônus de +2 em testes de Ofício (marinheiro)."
  },
  {
    "name": "Nau",
    "text": "embarcação grande, com três mastros e castelo de proa e de popa. Embarcação Colossal; Tripulação mínima 15, total 100; Desl. 12m; CA 7 (–8 tamanho, +5 natural); PV 400; redução de dano 5; armamento: nenhum; Custo 30.000 TO."
  },
  {
    "name": "Galeão",
    "text": "este impressionante navio é o maior a singrar os mares de Arton e dos mundos dos deuses. Possui seis conveses e quatro mastros, além de castelos de popa e proa.  Embarcação Colossal; Tripulação mínima 15, total 150; Desl. 13,5m; CA 7 (–8 tamanho, +5 natural); PV 560; armamento: 8 canhões; 10 botes salva-vidas; Custo 63.500 TO."
  },
  {
    "name": "Quinquirreme",
    "text": "versão maior do trirreme. Também tem Três linhas de remos, mas os remos de cima são maiores, e impulsionados por três escravos cada. Além disso, o quinquirreme tem uma torre para canhões no centro do convés.  Embarcação Colossal; Tripulação mínima 15, total 130; Desl. 15m; CA 7 (–8 tamanho, +5 natural); PV 480; armamento: 4 canhões, aríete; Custo 50.000 TO."
  },
  {
    "name": "Bravado",
    "text": "o famoso navio de James K. é um galeão conhecido em todo o Mar Negro, pela fama de seu capitão e por ser entupido de canhões. As estatísticas abaixo já consideram James K. como piloto. Embarcação Colossal; Tripulação mínima 15, total 200 (elite, +4); piloto James K. (Des 26, Ofício (marinheiro) +21); Desl. 16,5m; CA 20 (–8 tamanho, +6 natural, +8 Des, +4 navegador mestre); PV 720; redução de dano 6; armamento: 16 canhões; Custo 111.000 PO."
  }
];
export const shipUpgrades = [
  {
    "name": "Cordames de boa qualidade",
    "text": "o piloto recebe um bônus de +2 em seus testes de Ofício (marinheiro). Custo: 1.500 TO."
  },
  {
    "name": "Leme confiável",
    "text": "o piloto não sofre a penalidade de –4 em seus testes de Ofício (marinheiro) por condições ruins. Custo: 1.000 TO."
  },
  {
    "name": "Casco bem desenhado",
    "text": "aumenta o deslocamento em +1,5m ou +3m. Custo: 1.000 TO (por +1,5m) ou 3.000 TO (por +3m)."
  },
  {
    "name": "Robustez",
    "text": "aumenta os pontos de vida em +10. Você pode aumentar os PV de um navio até o dobro da quantidade inicial (logo, um navio Colossal pode ter até 800 PV). Para cada 10 PV adicionais, aumente a tripulação total em três. Para cada 20 PV adicionais, aumente um espaço disponível para armas (um navio Descomunal com 300 PV, por exemplo, tem 12 espaços para armas). Custo: 1.000 TO por cada 10 PV."
  },
  {
    "name": "Materiais alternativos",
    "text": "o casco do seu navio pode ser feito de outro material, que não madeira, para aumentar sua redução de dano. Madeira reforçada fornece RD 6, cerâmica magicamente tratada fornece RD 8 e madeira-ferro fornece RD 10. O único desses materiais disponível em Arton é madeira reforçada. Os outros estão disponíveis apenas nos mundos dos deuses. Custo: multiplique o preço básico do navio, definido pelo tamanho, por 1,5 (madeira reforçada), por 3 (cerâmica magicamente tratada) ou por 5 (madeira-aço)."
  },
  {
    "name": "Aríete ou esporão na proa",
    "text": "um navio com aríete ou esporão sofre apenas metade do dano quando faz um ataque de carga. Custo: 1.000 TO."
  },
  {
    "name": "Acrostólio",
    "text": "adorno esculpido em forma de cabeça ou corpo de uma criatura fantástica, colocado na proa da embarcação para aumentar o moral da tripulação (ou baixar o dos inimigos). Existem muitos acrostólios cabeça de dragão, corpo de sereia, anjo, etc. mas todos se encaixam em um de três tipos: assustador, motivador ou protetor Um acrostólio assustador impõe uma penalidade de –1 na CA e nos testes de resistência de todos os inimigos a até 36m do navio. Um acrostólio motivador fornece um bônus de +1 nas jogadas de ataque e dano da tripulação (apenas enquanto os tripulantes estiverem no próprio navio ou abordando uma embarcação inimiga). Por fim, um acrostólio protetor funciona como um motivador, mas o bônus fornecido para a tripulação é de +1 na CA e nos testes de resistência. Cada navio só pode ter um acrostólio. Custo: 5.000 TO."
  },
  {
    "name": "Botes salva-vidas",
    "text": "botes acoplados à embarcação principal, capazes de carregar até 4 pessoas cada. Só podem ser acrescentados a embarcações Enormes ou maiores. Custo: 50 TO cada."
  }
];
