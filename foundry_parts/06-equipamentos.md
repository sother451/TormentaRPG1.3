# Equipamentos, Itens Mágicos e Navios

## Nota sobre a Forja

Os dados de equipamento-base, materiais, regras mágicas e encantamentos vêm do Tormenta RPG 1.3.

O arquivo `src/data/equipamentos/forja.ts` contém **aprimoramentos físicos e preços externos da ORC & Roll**. Ele está anexado ao fim desta parte apenas como extensão conhecida da wiki e **não deve ser importado para o core 1.3 sem marcação separada**.


---

# Equipamentos gerais, carga, moedas, objetos e navios

**Fonte:** `src/data/equipamentos/geral.ts`

~~~~typescript
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

~~~~


---

# Armas — regras e catálogo completo

**Fonte:** `src/data/equipamentos/armas.ts`

~~~~typescript
export interface WeaponEntry {
  name: string;
  category: string;
  price: string;
  damage: string;
  critical: string;
  properties: string;
  weight: string;
  type: string;
}
export const weaponIntro = [
  "TODA ARMA REQUER O USO DE NO MINIMO UMA MÃO PARA ATACAR. ESTE FATO PODE SER SOBESCRITO POR OUTRAS PROPRIEDADES QUE A ARMA POSSA OU NÃO TER",
  "Um personagem atacando com uma arma que ele não saiba usar sofre -4 na jogada de ataque."
];
export const weaponTypes = [
  {
    "name": "Armas simples",
    "text": "São aquelas de fácil manejo, que qualquer criatura inteligente (e com capacidade para manipular instrumentos) sabe usar. Adagas, clavas e lanças são exemplos de armas simples. Todos os personagens sabem usar todas as armas simples."
  },
  {
    "name": "Armas marciais",
    "text": "Também conhecidas como \"comuns\", são aquelas mais familiares aos adeptos do combate. Arcos, espadas e machados são exemplos de armas marciais."
  },
  {
    "name": "Armas exóticas",
    "text": "Armas deste tipo são difíceis de dominar, porque são pouco conhecidas ou exigem muito treinamento. A katana e o mosquete são exemplos de armas exóticas."
  },
  {
    "name": "Armas Improvisadas",
    "text": "Atacar com um objeto que não tenha sido feito para lutar (cadeiras, canecas, garrafas quebradas...) provoca penalidade de -4 na jogada de ataque. O dano e o crítico de uma arma improvisada são determinados pelo mestre, de acordo com seu tamanho e material. Por exemplo, uma perna de cadeira é parecida com uma clava, então tem dano 1d6 e crítico x2. Uma garrafa quebrada é parecida com uma adaga, então tem dano 1d4 e crítico 19-20."
  }
];
export const weaponProperties = [
  {
    "name": "Ágil",
    "text": "Esta arma pode ser sacada utilizando de uma ação livre."
  },
  {
    "name": "Acuidade",
    "text": "Esta arma permite que o usuario utilize o modificador ou de Força ou de Destreza nas jogadas de ataque com a mesma."
  },
  {
    "name": "Alcance",
    "text": "Esta arma possui um um alcance maximo no qual ela pode atingir alvos com ataques a distancia. Ataques que sejam feitos contra alvos alem do alcance da arma erram automaticamente."
  },
  {
    "name": "Arremesso",
    "text": "Esta arma pode ser utilizada para realizar ataques de arremesso com um alcance informado entre parenteses na propridade. Ataques de arremesso com esta arma utilizam o mesmo modificador usado em um ataque corpo a corpo com a mesma."
  },
  {
    "name": "Camuflável",
    "text": "Esta arma concede um bônus de +4 em testes de Ladinagem para escondê-la."
  },
  {
    "name": "Duas mãos",
    "text": "Esta arma deve ser usada com as duas mãos quando realizar ataques"
  },
  {
    "name": "Dupla",
    "text": "Empunhar esta arma com as duas mãos é o mesmo que usar uma arma em cada mão, onde uma das armas possui a propriedade Leve, cada lado causando um dado de dano diferente descritos entre parenteses."
  },
  {
    "name": "Especial",
    "text": "Esta arma possui uma propriedade especial que estará descrita na propria arma."
  },
  {
    "name": "Haste",
    "text": "Esta arma possui uma area de ameaça de 3m"
  },
  {
    "name": "Leve",
    "text": "Esta arma possui as qualidades ideais para o uso com em conjunto com outras armas"
  },
  {
    "name": "Munição",
    "text": "Esta arma requesita, obrigatoriamente, das devidas munições( informadas entre parenteses na propridade) para realizar ataques a distancia. Você pode também realizar ataques corpo-a-corpo com estas munições, porem são considerados ataques corpo-a-corpo com armas improvisadas. Para mais informações sobre usar munições como arma, cheque a tabela de Munições tabela de Munições"
  },
  {
    "name": "Recarga",
    "text": "Esta arma possui um tempo necessario para conseguir colocar uma nova munição para ser disparada. Cada arma com esta propriedade terá a ação necessária para realizar a recarga dentro do parenteses na lateral da propriedade. Recarregar a arma requesita de uma mão livre."
  },
  {
    "name": "Técnica",
    "text": "Esta arma concede um bonus de +4 na manobra indicada entre parenteses nas armas que possuem esta propriedade."
  },
  {
    "name": "Versátil",
    "text": "Esta arma é desenhada para ser usada com uma ou duas mãos. Caso seja utilizada com duas mãos, utiliza o dado indicado dentro dos parenteses junto da propriedade"
  }
];
export const weaponSizeRules = [
  "Toda arma tem uma categoria de tamanho, que indica para qual tipo de criatura ela se destina. Assim, uma arma Média é própria para personagens médios, como humanos.",
  "Um personagem pode usar uma arma com uma categoria de tamanho menor ou maior que a sua própria (por exemplo, um humano usando uma besta pequena, ou um halfling usando um florete médio). No entanto, fazer isso causa uma penalidade de -4 nas jogadas de ataque.",
  "Um personagem não pode usar armas duas ou mais categorias de tamanho diferentes da sua."
];
export const weaponSizeTable = {
  "headers": [
    "Ínfimo",
    "Diminuto",
    "Mínimo",
    "Pequeno",
    "Médio",
    "Grande",
    "Enorme",
    "Descomunal",
    "Colossal"
  ],
  "rows": [
    [
      "1",
      "1",
      "1",
      "1",
      "1d4",
      "1d6",
      "1d8",
      "1d10",
      "1d12"
    ],
    [
      "1",
      "1",
      "1",
      "1d4",
      "1d6",
      "1d8",
      "1d10",
      "1d12",
      "2d8"
    ],
    [
      "1",
      "1",
      "1d4",
      "1d6",
      "1d8",
      "1d10",
      "1d12",
      "2d8",
      "2d10"
    ],
    [
      "1",
      "1d4",
      "1d6",
      "1d8",
      "1d10",
      "1d12",
      "2d8",
      "2d10",
      "2d12"
    ],
    [
      "1d4",
      "1d6",
      "1d8",
      "1d10",
      "1d12",
      "2d8",
      "2d10",
      "2d12",
      "4d8"
    ]
  ]
};
export const weapons: WeaponEntry[] = [
  {
    "name": "Adaga",
    "category": "Simples",
    "price": "2 TO",
    "damage": "1d4",
    "critical": "19-20",
    "properties": "Leve, Arremeso(6m), Camuflável, Acuidade",
    "weight": "0,5Kg",
    "type": "Perfuração"
  },
  {
    "name": "Arco Curto",
    "category": "Simples",
    "price": "30 TO",
    "damage": "1d6",
    "critical": "x3",
    "properties": "Alcance(12m), Recarga(Ação Livre), Munição(Flecha), Duas mãos",
    "weight": "1Kg (1,5 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Ataque Desarmado",
    "category": "Simples",
    "price": "---",
    "damage": "1",
    "critical": "x2",
    "properties": "Leve, Acuidade, Agil",
    "weight": "---",
    "type": "Esmagamento"
  },
  {
    "name": "Azagaia",
    "category": "Simples",
    "price": "1 TO",
    "damage": "1d6",
    "critical": "x2",
    "properties": "Haste, Arremesso(6m)",
    "weight": "1Kg",
    "type": "Perfuração"
  },
  {
    "name": "Bastão Acolchoado",
    "category": "Simples",
    "price": "1 TO",
    "damage": "1d6",
    "critical": "x2",
    "properties": "Versátil(1d8)",
    "weight": "2Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Besta Leve",
    "category": "Simples",
    "price": "35 TO",
    "damage": "1d8",
    "critical": "19-20",
    "properties": "Alcance(18m), Recarga(Ação Movimento), Munição(Virote), Duas mãos",
    "weight": "3Kg (0,5 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Bordão",
    "category": "Simples",
    "price": "---",
    "damage": "1d6",
    "critical": "x2",
    "properties": "Versátil(1d8), Dupla(1d6/1d4)",
    "weight": "2Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Clava",
    "category": "Simples",
    "price": "---",
    "damage": "1d6",
    "critical": "x2",
    "properties": "Leve",
    "weight": "1,5Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Espada Curta",
    "category": "Simples",
    "price": "10 TO",
    "damage": "1d6",
    "critical": "19-20",
    "properties": "Leve, Acuidade",
    "weight": "1Kg",
    "type": "Perfuração"
  },
  {
    "name": "Funda",
    "category": "Simples",
    "price": "1 TP",
    "damage": "1d4",
    "critical": "x2",
    "properties": "Alcance(12m), Recarga(Ação Livre), Munição(Bolota), Ágil",
    "weight": "250g (2 Kg)",
    "type": "Esmagamento"
  },
  {
    "name": "Lança",
    "category": "Simples",
    "price": "2 TO",
    "damage": "1d6",
    "critical": "x2",
    "properties": "Arremeso(4,5m)",
    "weight": "1,5Kg",
    "type": "Perfuração"
  },
  {
    "name": "Maça",
    "category": "Simples",
    "price": "12 TO",
    "damage": "1d8",
    "critical": "x2",
    "properties": "---",
    "weight": "6Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Pique",
    "category": "Simples",
    "price": "2 TO",
    "damage": "1d8",
    "critical": "x2",
    "properties": "Duas mãos",
    "weight": "5Kg",
    "type": "Perfuração"
  },
  {
    "name": "Tacape",
    "category": "Simples",
    "price": "---",
    "damage": "1d8",
    "critical": "x2",
    "properties": "Duas mãos",
    "weight": "4Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Escudo Leve",
    "category": "Marciais",
    "price": "5 TO",
    "damage": "1d4",
    "critical": "x2",
    "properties": "Leve",
    "weight": "3Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Machadinha",
    "category": "Marciais",
    "price": "6 TO",
    "damage": "1d6",
    "critical": "x3",
    "properties": "Leve, Arremesso(4,5m)",
    "weight": "2Kg",
    "type": "Corte"
  },
  {
    "name": "Martelo",
    "category": "Marciais",
    "price": "1 TO",
    "damage": "1d6",
    "critical": "x2",
    "properties": "Leve, Arremeso(4,5m)",
    "weight": "1Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Cimitarra",
    "category": "Marciais",
    "price": "15 TO",
    "damage": "1d6",
    "critical": "18-20",
    "properties": "Acuidade, Leve",
    "weight": "2Kg",
    "type": "Corte"
  },
  {
    "name": "Escudo Pesado",
    "category": "Marciais",
    "price": "15 TO",
    "damage": "1d6",
    "critical": "x2",
    "properties": "Versátil(1d8), Leve",
    "weight": "7Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Espada Longa",
    "category": "Marciais",
    "price": "15 TO",
    "damage": "1d8",
    "critical": "19-20",
    "properties": "Versátil(1d10)",
    "weight": "2Kg",
    "type": "Corte"
  },
  {
    "name": "Florete",
    "category": "Marciais",
    "price": "20 TO",
    "damage": "1d6",
    "critical": "18-20",
    "properties": "Acuidade",
    "weight": "1Kg",
    "type": "Perfuração"
  },
  {
    "name": "Gládio",
    "category": "Marciais",
    "price": "15 TO",
    "damage": "1d6",
    "critical": "19-20/x3",
    "properties": "---",
    "weight": "2Kg",
    "type": "Perfuração"
  },
  {
    "name": "Machado de Batalha",
    "category": "Marciais",
    "price": "10 TO",
    "damage": "1d8",
    "critical": "x3",
    "properties": "Versátil(1d10)",
    "weight": "3Kg",
    "type": "Corte"
  },
  {
    "name": "Maça-Estrela",
    "category": "Marciais",
    "price": "15 TO",
    "damage": "2d4",
    "critical": "x2",
    "properties": "---",
    "weight": "3Kg",
    "type": "Esmagamento/Perfuração"
  },
  {
    "name": "Mangual",
    "category": "Marciais",
    "price": "8 TO",
    "damage": "1d8",
    "critical": "x2",
    "properties": "Técnica(Desarmar)",
    "weight": "2,5Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Martelo de Guerra",
    "category": "Marciais",
    "price": "12 TO",
    "damage": "1d8",
    "critical": "x3",
    "properties": "Versátil(1d10)",
    "weight": "2,5Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Picareta",
    "category": "Marciais",
    "price": "8 TO",
    "damage": "1d6",
    "critical": "x3",
    "properties": "Versátil(1d8)",
    "weight": "3Kg",
    "type": "Perfuração"
  },
  {
    "name": "Tridente",
    "category": "Marciais",
    "price": "15 TO",
    "damage": "1d8",
    "critical": "x2",
    "properties": "Técnica(Derrubar)",
    "weight": "2Kg",
    "type": "Perfuração"
  },
  {
    "name": "Alabarda",
    "category": "Marciais",
    "price": "10 TO",
    "damage": "1d10",
    "critical": "x3",
    "properties": "Haste, Duas mãos",
    "weight": "6Kg",
    "type": "Corte"
  },
  {
    "name": "Alfange",
    "category": "Marciais",
    "price": "75 TO",
    "damage": "2d4",
    "critical": "18-20",
    "properties": "Duas mãos",
    "weight": "4Kg",
    "type": "Corte"
  },
  {
    "name": "Cajado de batalha",
    "category": "Marciais",
    "price": "10 TO",
    "damage": "1d10",
    "critical": "x2",
    "properties": "Duas mãos, Dupla(1d8,1d6)",
    "weight": "4Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Espada grande",
    "category": "Marciais",
    "price": "50 TO",
    "damage": "2d6",
    "critical": "19-20",
    "properties": "Duas mãos",
    "weight": "4Kg",
    "type": "Corte"
  },
  {
    "name": "Foice",
    "category": "Marciais",
    "price": "18 TO",
    "damage": "3d4",
    "critical": "x3",
    "properties": "Duas mãos",
    "weight": "5Kg",
    "type": "Corte"
  },
  {
    "name": "Lança montada",
    "category": "Marciais",
    "price": "10 TO",
    "damage": "1d8",
    "critical": "x3",
    "properties": "Versátil(1d10), Haste",
    "weight": "5Kg",
    "type": "Perfuração"
  },
  {
    "name": "Machado Grande",
    "category": "Marciais",
    "price": "20 TO",
    "damage": "1d12",
    "critical": "x3",
    "properties": "Duas mãos",
    "weight": "6Kg",
    "type": "Corte"
  },
  {
    "name": "Mangual Pesado",
    "category": "Marciais",
    "price": "15 TO",
    "damage": "1d12",
    "critical": "x3",
    "properties": "Duas mãos, Técnica(Desarmar)",
    "weight": "5Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Marreta",
    "category": "Marciais",
    "price": "20 TO",
    "damage": "3d4",
    "critical": "x3",
    "properties": "Duas mãos",
    "weight": "8Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Arco longo",
    "category": "Marciais",
    "price": "100 TO",
    "damage": "1d8",
    "critical": "x3",
    "properties": "Alcance(24m), Recarga(Ação Livre), Munição(Flecha), Duas mãos",
    "weight": "1,5Kg (1,5 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Besta pesada",
    "category": "Marciais",
    "price": "50 TO",
    "damage": "1d12",
    "critical": "19-20",
    "properties": "Alcance(27m), Recarga(Ação Padrão), Munição(Virote), Duas mãos",
    "weight": "4Kg (0,5 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Garra Feroz",
    "category": "Exóticas",
    "price": "10 TO",
    "damage": "1d6",
    "critical": "19-20",
    "properties": "Leve, Acuidade, Ágil",
    "weight": "0,5Kg",
    "type": "Corte"
  },
  {
    "name": "Túnica Calamarina",
    "category": "Exóticas",
    "price": "20 TO",
    "damage": "1d8",
    "critical": "x3",
    "properties": "Acuidade, Dupla(1d8/1d6), Duas mãos, Ágil",
    "weight": "3Kg",
    "type": "Corte/Perfuração"
  },
  {
    "name": "Wakizashi",
    "category": "Exóticas",
    "price": "310 TO",
    "damage": "1d8",
    "critical": "19-20",
    "properties": "Leve, Acuidade",
    "weight": "1Kg",
    "type": "Corte"
  },
  {
    "name": "Adaga com mola",
    "category": "Exóticas",
    "price": "25 TO",
    "damage": "1d4",
    "critical": "19-20",
    "properties": "Leve, Acuidade, Camuflável, Arremesso(9m), Ágil",
    "weight": "250g",
    "type": "Perfuração"
  },
  {
    "name": "Agulha de Ahlen",
    "category": "Exóticas",
    "price": "50 TO",
    "damage": "1d4",
    "critical": "19-20",
    "properties": "Leve, Acuidade, Camuflável, Arremesso(4,5m), Especial",
    "weight": "250g",
    "type": "Perfuração"
  },
  {
    "name": "Escudo de Corpo",
    "category": "Exóticas",
    "price": "200 TO",
    "damage": "1d8",
    "critical": "x2",
    "properties": "Versartil(1d10), Técnica(Derrubar), Leve",
    "weight": "",
    "type": "Esmagamento"
  },
  {
    "name": "Chicote",
    "category": "Exóticas",
    "price": "10 TO",
    "damage": "1d6",
    "critical": "x2",
    "properties": "Acuidade, Haste, Técnica(Derrubar), Técnica(Desarmar)",
    "weight": "1Kg",
    "type": "Corte"
  },
  {
    "name": "Espada Bastarda",
    "category": "Exóticas",
    "price": "35 TO",
    "damage": "1d10",
    "critical": "19-20",
    "properties": "Versartil(1d12)",
    "weight": "3Kg",
    "type": "Corte"
  },
  {
    "name": "Flagelo",
    "category": "Exóticas",
    "price": "20 TO",
    "damage": "1d6",
    "critical": "x2",
    "properties": "Acuidade, Haste, Especial",
    "weight": "2,5Kg",
    "type": "Corte"
  },
  {
    "name": "Katana",
    "category": "Exóticas",
    "price": "400 TO",
    "damage": "1d10",
    "critical": "19-20",
    "properties": "Acuidade, Versátil(1d12)",
    "weight": "3Kg",
    "type": "Corte"
  },
  {
    "name": "Kusari-gama",
    "category": "Exóticas",
    "price": "25 TO",
    "damage": "1d6/1d4",
    "critical": "19-20",
    "properties": "Acuidade, Haste, Dupla(1d6/1d4), Técnica(Desarmar), Técnica(Derrubar)",
    "weight": "2Kg",
    "type": "Corte/Esmagamento"
  },
  {
    "name": "Lança de falange",
    "category": "Exóticas",
    "price": "15 TO",
    "damage": "1d8",
    "critical": "x3",
    "properties": "Haste, Versátil(1d10), Arremesso(6m)",
    "weight": "3Kg",
    "type": "Perfuração"
  },
  {
    "name": "Machado anão",
    "category": "Exóticas",
    "price": "30 TO",
    "damage": "1d10",
    "critical": "x3",
    "properties": "Versartil(1d12)",
    "weight": "4Kg",
    "type": "Corte"
  },
  {
    "name": "Maça de Guerra",
    "category": "Exóticas",
    "price": "25 TO",
    "damage": "1d10",
    "critical": "x3",
    "properties": "Versartil(1d12)",
    "weight": "6Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Manopla-espada",
    "category": "Exóticas",
    "price": "25 TO",
    "damage": "1d8",
    "critical": "19-20",
    "properties": "Camuflável, Ágil, Especial",
    "weight": "2,5Kg",
    "type": "Corte"
  },
  {
    "name": "Sabre serrilhado",
    "category": "Exóticas",
    "price": "500 TO",
    "damage": "1d8",
    "critical": "19-20",
    "properties": "Especial",
    "weight": "2Kg",
    "type": "Corte"
  },
  {
    "name": "Corrente com cravos",
    "category": "Exóticas",
    "price": "25 TO",
    "damage": "2d6",
    "critical": "x2",
    "properties": "Acuidade, Haste, Técnica(Derrubar), Técnica(Desarmar), Duas mãos",
    "weight": "5Kg",
    "type": "Perfuração"
  },
  {
    "name": "Espada de duas lâminas",
    "category": "Exóticas",
    "price": "100 TO",
    "damage": "1d8",
    "critical": "19-20",
    "properties": "Versátil(1d10), Dupla(1d8,1d8), Acuidade",
    "weight": "5Kg",
    "type": "Corte"
  },
  {
    "name": "Espada táurica",
    "category": "Exóticas",
    "price": "50 TO",
    "damage": "2d8",
    "critical": "x3",
    "properties": "Duas mãos",
    "weight": "7,5Kg",
    "type": "Corte"
  },
  {
    "name": "Machado Táurico",
    "category": "Exóticas",
    "price": "30 TO",
    "damage": "2d8",
    "critical": "x3",
    "properties": "Duas mãos",
    "weight": "12Kg",
    "type": "Corte"
  },
  {
    "name": "Marreta Ogra",
    "category": "Exóticas",
    "price": "30 TO",
    "damage": "2d8",
    "critical": "x3",
    "properties": "Duas mãos",
    "weight": "12Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Grande lança",
    "category": "Exóticas",
    "price": "30 TO",
    "damage": "2d6",
    "critical": "x3",
    "properties": "Duas mãos, Haste",
    "weight": "9Kg",
    "type": "Perfuração"
  },
  {
    "name": "Besta de Mão",
    "category": "Exóticas",
    "price": "100 TO",
    "damage": "1d6",
    "critical": "19-20",
    "properties": "Alcance(9m), Recarga(Ação de Movimento), Munição(Virote)",
    "weight": "1Kg (0,5 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Arco élfico",
    "category": "Exóticas",
    "price": "500 TO",
    "damage": "1d8",
    "critical": "x3",
    "properties": "Alcance(18m), Recarga(Ação Livre), Munição(Flecha), Duas mãos, Especial",
    "weight": "1,5Kg (1,5 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Arco grandioso",
    "category": "Exóticas",
    "price": "750 TO",
    "damage": "1d12",
    "critical": "x3",
    "properties": "Alcance(18m), Recarga(Ação Padrão), Munição(Flecha), Duas mãos, Especial",
    "weight": "1Kg (1,5 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Mosquete",
    "category": "Exóticas",
    "price": "500 TO",
    "damage": "2d8",
    "critical": "19-20/x3",
    "properties": "Alcance(36m), Recarga(Ação Padrão), Munição(Bala), Duas mãos",
    "weight": "5Kg (1 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Pistola",
    "category": "Exóticas",
    "price": "250 TO",
    "damage": "1d10",
    "critical": "19-20/x3",
    "properties": "Alcance(18m), Recarga(Ação Padrão), Munição(Bala)",
    "weight": "1,5Kg (1 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Catapulta-de-braço",
    "category": "Exóticas",
    "price": "40 TO",
    "damage": "2d4",
    "critical": "x2",
    "properties": "Alcance(24m), Recarga(Ação de Movimento), Munição(Bolota)",
    "weight": "2Kg (1 Kg)",
    "type": "Esmagamento"
  },
  {
    "name": "Shuriken",
    "category": "Exóticas",
    "price": "1 TO",
    "damage": "1d4",
    "critical": "x2",
    "properties": "Arremesso (6m), Agil, Camuflavel, Leve",
    "weight": "250g",
    "type": "Perfuração"
  },
  {
    "name": "Fukiya",
    "category": "Exóticas",
    "price": "5 TO",
    "damage": "1",
    "critical": "x2",
    "properties": "Alcance(4,5m), Recarga(Ação Livre), Munição(Dardo)",
    "weight": "0,5Kg",
    "type": "Perfuração"
  },
  {
    "name": "Bolsa de Cola",
    "category": "Armas Alquimicas",
    "price": "50 TO",
    "damage": "-",
    "critical": "-",
    "properties": "Especial, Arremesso (6m), Ágil",
    "weight": "1Kg",
    "type": "-"
  },
  {
    "name": "Agua Benta",
    "category": "Armas Alquimicas",
    "price": "25 TO",
    "damage": "2d6",
    "critical": "-",
    "properties": "Especial, Arremesso (6m), Ágil",
    "weight": "1Kg",
    "type": "Sagrado"
  },
  {
    "name": "Água Benta Concentrada",
    "category": "Armas Alquimicas",
    "price": "150 TO",
    "damage": "4d6",
    "critical": "-",
    "properties": "Especial, Arremesso (6m), Ágil",
    "weight": "1Kg",
    "type": "Sagrado"
  },
  {
    "name": "Bomba Fétida",
    "category": "Armas Alquimicas",
    "price": "20 TO",
    "damage": "-",
    "critical": "-",
    "properties": "Especial, Arremesso (6m), Ágil",
    "weight": "1Kg",
    "type": "-"
  },
  {
    "name": "Bomba de Fumaça",
    "category": "Armas Alquimicas",
    "price": "20 TO",
    "damage": "-",
    "critical": "-",
    "properties": "Especial, Arremesso (6m), Ágil",
    "weight": "1Kg",
    "type": "-"
  },
  {
    "name": "Pó Cegante de Vandaime",
    "category": "Armas Alquimicas",
    "price": "20 TO",
    "damage": "-",
    "critical": "-",
    "properties": "Especial, Arremesso (3m), Ágil",
    "weight": "1Kg",
    "type": "-"
  },
  {
    "name": "Ácido",
    "category": "Armas Alquimicas",
    "price": "10 TO",
    "damage": "2d4",
    "critical": "-",
    "properties": "Especial, Arremesso (6m), Ágil",
    "weight": "1Kg",
    "type": "Ácido"
  },
  {
    "name": "Ácido Concentrado",
    "category": "Armas Alquimicas",
    "price": "30 TO",
    "damage": "4d4",
    "critical": "-",
    "properties": "Especial, Arremesso (6m), Ágil",
    "weight": "1Kg",
    "type": "Ácido"
  },
  {
    "name": "Óleo Inflamavel",
    "category": "Armas Alquimicas",
    "price": "30 TO",
    "damage": "-",
    "critical": "-",
    "properties": "Especial, Arremesso (6m), Ágil",
    "weight": "1Kg",
    "type": "-"
  },
  {
    "name": "Fogo alquímico",
    "category": "Armas Alquimicas",
    "price": "10 TO",
    "damage": "1d6",
    "critical": "-",
    "properties": "Especial, Arremesso (6m), Ágil",
    "weight": "1Kg",
    "type": "Fogo"
  },
  {
    "name": "Fogo Fumegante",
    "category": "Armas Alquimicas",
    "price": "50 TO",
    "damage": "3d6",
    "critical": "-",
    "properties": "Especial, Arremesso (6m), Ágil",
    "weight": "1Kg",
    "type": "Fogo"
  },
  {
    "name": "Extrato de gelo eterno",
    "category": "Armas Alquimicas",
    "price": "30 TO",
    "damage": "2d8",
    "critical": "-",
    "properties": "Especial, Arremesso (6m), Ágil",
    "weight": "1Kg",
    "type": "Frio"
  },
  {
    "name": "Estalinho Gury",
    "category": "Armas Alquimicas",
    "price": "20 TO",
    "damage": "-",
    "critical": "-",
    "properties": "Especial, Arremesso (6m), Ágil",
    "weight": "1Kg",
    "type": "-"
  },
  {
    "name": "Pó de Azgher",
    "category": "Armas Alquimicas",
    "price": "50 TO",
    "damage": "-",
    "critical": "-",
    "properties": "Especial, Arremesso (3m), Ágil",
    "weight": "1Kg",
    "type": "-"
  },
  {
    "name": "Balista (1 Virote)",
    "category": "Armas de Cerco",
    "price": "500 TO (20 TO)",
    "damage": "6d8",
    "critical": "19-20",
    "properties": "Especial, Alcance (45m), Munição",
    "weight": "150Kg (10 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Canhão (1 Bala)",
    "category": "Armas de Cerco",
    "price": "2.000 TO (50 TO)",
    "damage": "6d12",
    "critical": "19-20",
    "properties": "Especial, Alcance (60m), Munição",
    "weight": "200Kg (5 Kg)",
    "type": "Esmagamento"
  }
];
export const ammunition = [
  {
    "name": "Flecha",
    "price": "1 TO",
    "damage": "1d4",
    "critical": "x2",
    "properties": "Acuidade, Leve",
    "type": ""
  },
  {
    "name": "Virote",
    "price": "2 TO",
    "damage": "1d4",
    "critical": "x2",
    "properties": "Acuidade, Leve",
    "type": ""
  },
  {
    "name": "Bolota",
    "price": "1 TP",
    "damage": "1",
    "critical": "x2",
    "properties": "Arremesso(3m)",
    "type": ""
  },
  {
    "name": "Bala",
    "price": "50 TO",
    "damage": "1d4",
    "critical": "x2",
    "properties": "Arremesso(3m)",
    "type": ""
  },
  {
    "name": "Dardo",
    "price": "1 TP",
    "damage": "1d4",
    "critical": "x2",
    "properties": "Arremesso(3m)",
    "type": ""
  }
];
export const technologicalWeapons = [
  {
    "name": "Florete-agulha",
    "category": "Corpo a Corpo - Leve",
    "price": "250 TO",
    "damage": "1d4",
    "critical": "19-20",
    "range": "---",
    "weight": "1Kg",
    "type": "Perfuração"
  },
  {
    "name": "Espada-diapasão",
    "category": "Corpo a Corpo - Uma Mão",
    "price": "400 TO",
    "damage": "1d8",
    "critical": "19-20",
    "range": "---",
    "weight": "2,5Kg",
    "type": "Corte"
  },
  {
    "name": "Lança-foguete",
    "category": "Corpo a Corpo - Uma Mão",
    "price": "100 TO",
    "damage": "1d10",
    "critical": "x2",
    "range": "6m",
    "weight": "3Kg",
    "type": "Perfuração"
  },
  {
    "name": "Lança-mola",
    "category": "Corpo a Corpo - Uma Mão",
    "price": "50 TO",
    "damage": "1d6",
    "critical": "x2",
    "range": "---",
    "weight": "2,5Kg",
    "type": "Perfuração"
  },
  {
    "name": "Maça-granada",
    "category": "Corpo a Corpo - Uma Mão",
    "price": "100 TO",
    "damage": "1d8",
    "critical": "x2+4d6",
    "range": "3m",
    "weight": "6,5Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Martelo-pistão",
    "category": "Corpo a Corpo - Uma Mão",
    "price": "500 TO",
    "damage": "1d8",
    "critical": "20/especial",
    "range": "---",
    "weight": "3,5Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Vara-relâmpago",
    "category": "Corpo a Corpo - Uma Mão",
    "price": "1.000 TO",
    "damage": "2d10",
    "critical": "x4*",
    "range": "---",
    "weight": "4Kg",
    "type": "Perfuração"
  },
  {
    "name": "Girolette",
    "category": "Corpo a Corpo - Duas mãos",
    "price": "1.000 TO",
    "damage": "2d8",
    "critical": "x3",
    "range": "---",
    "weight": "9Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Marreta-pistão",
    "category": "Corpo a Corpo - Duas mãos",
    "price": "500 TO",
    "damage": "1d10",
    "critical": "20/especial",
    "range": "---",
    "weight": "9Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Montante cinético",
    "category": "Corpo a Corpo - Duas mãos",
    "price": "3.000 TO",
    "damage": "2d6",
    "critical": "19-20/x4",
    "range": "---",
    "weight": "10Kg",
    "type": "Esmagamento"
  },
  {
    "name": "Pistola de tambor (10 Balas)",
    "category": "Corpo a Corpo - Distância",
    "price": "1.000 TO (35 TO)",
    "damage": "2d6",
    "critical": "19-20/x3",
    "range": "15m",
    "weight": "2Kg (1 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Mosquete de Rolete",
    "category": "Corpo a Corpo - Distância",
    "price": "5.000 TO",
    "damage": "2d10",
    "critical": "x2",
    "range": "30m",
    "weight": "50Kg",
    "type": "Perfuração"
  },
  {
    "name": "Mosquetão (10 Balas)",
    "category": "Corpo a Corpo - Distância",
    "price": "1.000 TO (50 TO)",
    "damage": "2d10",
    "critical": "19-20/x3",
    "range": "30m",
    "weight": "5,5Kg (1 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Arcabuz (10 Balas)",
    "category": "Corpo a Corpo - Distância",
    "price": "700 TO (50 TO)",
    "damage": "3d4",
    "critical": "x3",
    "range": "Especial",
    "weight": "3Kg (1 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Balestra",
    "category": "Corpo a Corpo - Distância",
    "price": "100 TO",
    "damage": "1d12",
    "critical": "19-20",
    "range": "27m",
    "weight": "6Kg",
    "type": "Perfuração"
  },
  {
    "name": "Bazuca (1 Bala)",
    "category": "Corpo a Corpo - Distância",
    "price": "1.000 TO (100 TO)",
    "damage": "10d8",
    "critical": "x3",
    "range": "15m",
    "weight": "5Kg (2 Kg)",
    "type": "Fogo"
  },
  {
    "name": "Canhão Portátil (1 Bala)",
    "category": "Corpo a Corpo - Distância",
    "price": "600 TO (200 TO)",
    "damage": "3d12",
    "critical": "x3",
    "range": "20m",
    "weight": "20Kg (0,5 Kg)",
    "type": "Esmagamento"
  },
  {
    "name": "Besta pesada de repetição (10 Virotes)",
    "category": "Corpo a Corpo - Distância",
    "price": "500 TO (1 TO)",
    "damage": "1d12",
    "critical": "19-20",
    "range": "27m",
    "weight": "6Kg (0,5 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Besta leve de repetição (10 Virotes)",
    "category": "Corpo a Corpo - Distância",
    "price": "350 TO (1 TO)",
    "damage": "1d10",
    "critical": "19-20",
    "range": "18m",
    "weight": "4,5Kg (0,5 Kg)",
    "type": "Perfuração"
  },
  {
    "name": "Fecho-de-roda (10 Balas)",
    "category": "Corpo a Corpo - Distância",
    "price": "750 TO (35 TO)",
    "damage": "2d6",
    "critical": "19-20/x3",
    "range": "15m",
    "weight": "2,5Kg (1 kg)",
    "type": "Perfuração"
  },
  {
    "name": "Trabuco De Flecha (20 Flechas)",
    "category": "Corpo a Corpo - Distância",
    "price": "1.000 TO (1 TO)",
    "damage": "10D4",
    "critical": "x2",
    "range": "12m",
    "weight": "10 kg (1,5 Kg)",
    "type": "Perfuração"
  }
];
export const specificWeaponRule = "Itens Alquimicos e Armas de Cerco não são considerados como Armas para talentos, não podendo ser escolhidos para talentos ou Habilidades de Classe";
export const technologicalWarning = "ESTAS ARMAS NÃO FORAM E NÃO SERÃO BALANCEADAS, USE AS A SUA CONTA E RISCO COM AUTORIZAÇÃO DE SEU NARRADOR";

~~~~


---

# Armaduras, Escudos e Materiais

**Fonte:** `src/data/equipamentos/armaduras.ts`

~~~~typescript
export const armorRules = [
  "Armaduras leves: Normalmente são feitas de tiras de couro ou pele de animal, oferecendo pouca proteção, mas preço relativamente baixo e muita liberdade de movimentos. Vestir ou remover uma armadura leve demora uma ação completa.",
  "Armaduras Médias: Em geral são feitas de cota de malha (espécie de trama feita com anéis metálicos), mas também podem incluir placas de materiais diversos como reforço. Vestir ou remover uma armadura média demora um minuto.",
  "Armaduras Pesadas: São as mais fortes, quase totalmente feitas de escamas e placas de metal ou outros materiais rígidos. Oferecem proteção pesada, mas restringem severamente os movimentos. Vestir ou remover uma armadura pesada demora cinco minutos.",
  "Escudos. Existem escudos leves, pesados e de corpo. Colocar ou tirar um escudo de qualquer tipo exige uma ação de movimento. Um personagem com Usar Escudo sabe usar escudos leves. Caso você possua o talento Usar Armaduras Médias, você também sabe usar Escudos Pesados e caso possua Usar Armaduras Pesadas, também sabe usar Escudos de Corpo.",
  "Mesmo que uma classe não ganhe talentos próprios para usar certa armadura, qualquer personagem pode escolher talentos Usar Armadura mais tarde, como talentos normais.",
  "Um personagem vestindo uma armadura ou escudo que não saiba usar aplica a penalidade de armadura não apenas em perícias, mas também em jogadas de ataque e testes de perícias baseadas em Força e Destreza.",
  "Armaduras magicas concedem RD igual a metade de seu bônus na CA.\nEste bônus não é afetado por qualquer habilidade ou efeito mágico, exceto bônus de encantamento."
];
export const armorProperties = [
  {
    "name": "Bonus na CA",
    "text": "Valor que corresponde a quantidade de CA que o usuario da armadura recebe por estar vestindo-a"
  },
  {
    "name": "Bônus Máximo de Destreza",
    "text": "Valor que corresponde a quantidade maxima de modificador de destreza que o usuario da armadura recebe por estar vestindo-a. Por exemplo, um personagem com 15 de destreza(+2 de modificador) usando uma cota de malha receberia 4 de CA pela armadura e 2 de CA pelo seu modifcador de destreza, totalizando em 6 de CA, entretanto, se o mesmo personagem passasse a usar uma cota de talas, receberia 5 de CA pela armadura e 0 de CA pelo seu modificador de destreza, totalizando em 5 de CA."
  },
  {
    "name": "Penalidade de Armadura",
    "text": "Valor que corresonde a penalidade que o usuario possue nas pericias que são afetas por esta penalidade(veja em pericias)."
  }
];
export const armors = [
  {
    "name": "Armadura Acolchoada",
    "category": "Armaduras Leves",
    "price": "5",
    "ca": "1",
    "maxDex": "4",
    "armorPenalty": "-1",
    "weight": "5Kg"
  },
  {
    "name": "Corselete de Couro",
    "category": "Armaduras Leves",
    "price": "25",
    "ca": "2",
    "maxDex": "4",
    "armorPenalty": "-1",
    "weight": "7Kg"
  },
  {
    "name": "Couro Batido",
    "category": "Armaduras Leves",
    "price": "75",
    "ca": "3",
    "maxDex": "4",
    "armorPenalty": "-1",
    "weight": "10Kg"
  },
  {
    "name": "Camisa de Cota de Malha",
    "category": "Armaduras Leves",
    "price": "225",
    "ca": "3",
    "maxDex": "5",
    "armorPenalty": "0",
    "weight": "12Kg"
  },
  {
    "name": "Couro Cristalino",
    "category": "Armaduras Leves",
    "price": "675",
    "ca": "3",
    "maxDex": "6",
    "armorPenalty": "0",
    "weight": "10Kg"
  },
  {
    "name": "Veste de Teia de Aranha",
    "category": "Armaduras Leves",
    "price": "2000",
    "ca": "3",
    "maxDex": "7",
    "armorPenalty": "0",
    "weight": "5Kg"
  },
  {
    "name": "Gibão de Peles",
    "category": "Armaduras Médias",
    "price": "15",
    "ca": "3",
    "maxDex": "2",
    "armorPenalty": "-3",
    "weight": "12Kg"
  },
  {
    "name": "Brunea",
    "category": "Armaduras Médias",
    "price": "50",
    "ca": "3",
    "maxDex": "3",
    "armorPenalty": "-2",
    "weight": "15Kg"
  },
  {
    "name": "Cota de Malha",
    "category": "Armaduras Médias",
    "price": "150",
    "ca": "4",
    "maxDex": "3",
    "armorPenalty": "-2",
    "weight": "20Kg"
  },
  {
    "name": "Couraça",
    "category": "Armaduras Médias",
    "price": "450",
    "ca": "4",
    "maxDex": "4",
    "armorPenalty": "-1",
    "weight": "15Kg"
  },
  {
    "name": "Couraça de Bronze",
    "category": "Armaduras Médias",
    "price": "1350",
    "ca": "5",
    "maxDex": "4",
    "armorPenalty": "-1",
    "weight": "15Kg"
  },
  {
    "name": "Armadura de Gladiador",
    "category": "Armaduras Médias",
    "price": "4000",
    "ca": "5",
    "maxDex": "5",
    "armorPenalty": "0",
    "weight": "12Kg"
  },
  {
    "name": "Cota de Talas",
    "category": "Armaduras Pesadas",
    "price": "100",
    "ca": "5",
    "maxDex": "0",
    "armorPenalty": "-5",
    "weight": "20Kg"
  },
  {
    "name": "Loriga Segmentada",
    "category": "Armaduras Pesadas",
    "price": "300",
    "ca": "6",
    "maxDex": "0",
    "armorPenalty": "-5",
    "weight": "17Kg"
  },
  {
    "name": "Meia-armadura",
    "category": "Armaduras Pesadas",
    "price": "900",
    "ca": "7",
    "maxDex": "0",
    "armorPenalty": "-5",
    "weight": "22Kg"
  },
  {
    "name": "O-Yoroi",
    "category": "Armaduras Pesadas",
    "price": "2700",
    "ca": "8",
    "maxDex": "0",
    "armorPenalty": "-5",
    "weight": "22Kg"
  },
  {
    "name": "Armadura Completa",
    "category": "Armaduras Pesadas",
    "price": "6000",
    "ca": "9",
    "maxDex": "0",
    "armorPenalty": "-5",
    "weight": "25Kg"
  },
  {
    "name": "Couro Draconico Cristalino",
    "category": "Armaduras Pesadas",
    "price": "8000",
    "ca": "10",
    "maxDex": "0",
    "armorPenalty": "-5",
    "weight": "25Kg"
  },
  {
    "name": "Escudo Leve",
    "category": "Escudos",
    "price": "5",
    "ca": "1",
    "maxDex": "---",
    "armorPenalty": "---",
    "weight": "3Kg"
  },
  {
    "name": "Escudo Pesado",
    "category": "Escudos",
    "price": "15",
    "ca": "2",
    "maxDex": "---",
    "armorPenalty": "---",
    "weight": "7Kg"
  },
  {
    "name": "Escudo de Corpo",
    "category": "Escudos",
    "price": "200",
    "ca": "4",
    "maxDex": "---",
    "armorPenalty": "---",
    "weight": "15Kg"
  }
];
export const specialMaterials = [
  {
    "description": "Aço Rubi. Este metal tem a aparência de vidro avermelhado, mas é duro como aço verdadeiro. Armas forjadas com ele vencem até 15 pontos de RD. Por sua raridade e também por não mostrar qualidades protetoras, aço-rubi não é usado para armaduras ou escudos.",
    "costs": {
      "weapon": "1.000 TO",
      "lightArmor": "-",
      "mediumArmor": "-",
      "heavyArmor": "-",
      "lightShield": "-",
      "heavyShield": "-"
    }
  },
  {
    "description": "Adamante. Metal extremamente raro, o adamante é encontrado apenas em meteoritos (e por isso também é chamado de \"metal estelar\". O adamante é escuro, fosco, e mais denso e resistente que o aço.  Armas de adamante causam +1d4 de dano por categoria de arma acima de Pequeno (por exemplo, 1d4 para uma Arma media, 2d4 para uma Arma grande, 3d4 para uma arma Enorme).  Armaduras e escudos pesados de adamante fornecem redução de dano, de acordo com seu tipo: escudos e armaduras leves, RD 1; armaduras médias, RD 2, e pesadas, RD 3.",
    "costs": {
      "weapon": "2.000 TO",
      "lightArmor": "1.500 TO",
      "mediumArmor": "3.000",
      "heavyArmor": "7.000",
      "lightShield": "-",
      "heavyShield": "1.500"
    }
  },
  {
    "description": "Gelo Eterno. As mais gélidas montanhas produzem um tipo de gelo muito duro, e que nunca derrete. Expedições de aventureiros exploram regiões glaciais perigosas, à caça do material fantástico.  Armas feitas de gelo eterno causam +1d4 ponto de dano por frio, enquanto armaduras e escudos pesados fornecem resistência a frio: 2 para escudos e armaduras leves, 5 para armaduras médias, e 10 para armaduras pesadas.",
    "costs": {
      "weapon": "1.000 TO",
      "lightArmor": "500",
      "mediumArmor": "1.000",
      "heavyArmor": "2.000",
      "lightShield": "-",
      "heavyShield": "500"
    }
  },
  {
    "description": "Madeira Negra. Em certas florestas, nasce um tipo especial de árvore, duras como o ferro das melhores forjas, e com propriedades mágicas. Armas de madeira bordões, clavas, lanças, nunchakus e tacapes e escudos leves podem ser feitas com madeira negra.  Armas de madeira negra não oferecem bônus, mas contam como armas mágicas para vencer redução de dano. Escudos leves de madeira negra oferecem RD 1. Não há escudos pesados ou armaduras de madeira negra, porque estes itens são feitos de metal.  O custo para itens adquiridos em certos reinos, que possuem florestas inteiras destas árvores, cai pela metade.",
    "costs": {
      "weapon": "100 TO",
      "lightArmor": "-",
      "mediumArmor": "-",
      "heavyArmor": "-",
      "lightShield": "1.000",
      "heavyShield": "-"
    }
  },
  {
    "description": "Matéria Vermelha. Qualquer material de origem aberrante desde suas garras e carapaças, até minérios e partes de estruturas encontradas em áreas aberrantes apresenta propriedades parecidas, sendo conhecido como \"matéria vermelha\".  Uma arma de matéria vermelha é hostil ao toque de seres naturais. Por isso, causa 1d6 pontos de dano extra contra quaisquer criaturas, exceto aberrantes. Infelizmente, sempre que o usuário executa um ataque corpo-a-corpo bem sucedido, ele próprio recebe 1 ponto de dano pela arma (membros da raça Lefou não sofrem este efeito colateral).  Por sua aparência \"borrada\", armaduras de matéria vermelha distorcem a percepção do atacante, impondo uma chance de falha para cada golpe: 10% para escudos e armaduras leves, 20% para médias e 30% para pesadas. Aberrantes e meio-aberrantes ignoram esta chance de erro.  Estes itens assustadores impõem ao usuário penalidade de -2 em perícias baseadas em Carisma (exceto Intimidação).",
    "costs": {
      "weapon": "1.000 TO",
      "lightArmor": "500",
      "mediumArmor": "750",
      "heavyArmor": "1.000",
      "lightShield": "500",
      "heavyShield": "500"
    }
  },
  {
    "description": "Mitral. Metal muito raro, encontrado em veios profundos e tipicamente minerado apenas por anões. O mitral é prateado e brilhante, e muito mais leve que o aço.  Armas de mitral aumentam sua margem de ameaça em 1. Por exemplo, uma espada longa de mitral tem margem de ameaça 18-20.  Armaduras de mitral são consideradas uma categoria mais leve que o normal (por exemplo, uma cota de malha de mitral é considerada uma armadura leve). Além disso, seu bônus máximo de Destreza aumenta em 2 e sua penalidade de armadura diminui em 2. Escudos de mitral não têm nenhuma penalidade de armadura.",
    "costs": {
      "weapon": "1000 TO",
      "lightArmor": "1.000",
      "mediumArmor": "2.000",
      "heavyArmor": "4.000",
      "lightShield": "",
      "heavyShield": "1.000"
    }
  },
  {
    "description": "Prata. Uma arma revestida de prata mantém as mesmas estatísticas, mas passa a ser capaz de ferir gravemente licantropos.",
    "costs": {
      "weapon": "100 TO",
      "lightArmor": "",
      "mediumArmor": "",
      "heavyArmor": "",
      "lightShield": "",
      "heavyShield": ""
    }
  }
];

~~~~


---

# Itens Mágicos — regras, slots, encantamentos e poderes

**Fonte:** `src/data/equipamentos/itens-magicos.ts`

~~~~typescript
export type MagicItemTier = 'Menor' | 'Médio' | 'Maior';
export type MagicApplicability = 'Arma' | 'Armadura' | 'Escudo' | 'Armadura e Escudo' | 'Item de Poder';

export interface ProgressiveEnchantLevel {
  slots: 1 | 2 | 3 | 4 | 5;
  effect: string;
}

export interface ProgressiveEnchant {
  id: string;
  name: string;
  appliesTo: MagicApplicability;
  intro?: string;
  levels: ProgressiveEnchantLevel[];
}

export interface FixedMagicPower {
  id: string;
  name: string;
  cost: 1 | 2 | 3 | 4;
  appliesTo: MagicApplicability;
  effect: string;
  mediumEffect?: string;
  majorEffect?: string;
}

export const magicItemRules = {
  intro: 'Itens mágicos são divididos em: armas, armaduras, escudos, poções, pergaminhos, varinhas, cajados e acessórios.',
  identification: 'Alguns itens mágicos parecem comuns, sem nada de especial. Outros são visivelmente encantados: brilham, zunem ou são cobertos de runas ou gemas faiscantes. Alguns itens trazem inscrições que indicam seus poderes, essas inscrições podem ser mágicas, mudando para um idioma que o usuário saiba ler, ou então exigir o conhecimento de línguas arcaicas. Outros itens podem não trazer nenhuma pista sobre seu funcionamento. Nesses casos, os poderes do item só ficam claros quando um personagem o identifica. Pode-se desvendar os poderes de um item mágico com magias próprias, como identificação e analisar encantamento ou através da velha tentativa e erro. Você pode simplesmente colocar no dedo aquele anel reluzente, e saltar de uma janela.',
  use: 'Armas, armaduras e escudos funcionam automaticamente: basta empunhar ou vestir o item para que seus poderes funcionem. Poções, pergaminhos, varinhas e cajados devem ser ativados, de acordo com sua descrição. Ativar um item mágico é uma ação padrão, a menos que sua descrição diga o contrário. Acessórios existem em ambos os tipos, alguns ativam-se automaticamente, bastando ser colocados, enquanto outros devem ser ativados de acordo com sua descrição. Via de regra, um personagem deve identificar o acessório para poder ativá-Io. Para itens mágicos que geram o efeito de uma magia, a CD do teste de resistência é igual a 15 + NdM + MdN do Personagem. Cajados são exceção, para uma magia lançada por um cajado, calcule a CD como se o usuário do cajado estivesse lançando a magia pessoalmente. Lançar uma magia através de um item mágico é mais simples, sem as limitações de lançar uma magia diretamente (veja Condições para lançar uma magia).',
  limits: 'Um personagem pode usar tantas armas e escudos mágicos quantas puder empunhar, e mais quatro itens mágicos entre armaduras e acessórios. Por exemplo, um personagem pode usar uma armadura mágica e três acessórios, como um anel e um par de botas. Se usar um quinto item mágico, ele não terá efeito algum, a menos que o usuário remova um dos outros. Poções, pergaminhos, varinhas e cajados não contam nesse limite. Bônus de itens mágicos acumulam com bônus de outros tipos (magias, talentos...) mas não entre si.',
  destruction: 'Itens mágicos têm o dobro dos pontos de vida de um item normal do mesmo tipo, e um bônus na RD conforme sua aura: RD +5 para aura tênue, RD +10 para aura moderada e RD +20 para aura poderosa. Itens mágicos também têm um bônus em testes de resistência dependendo da sua aura: +2 para tênue, +5 para moderada e +10 para poderosa.',
  command: 'Para ativar um item mágico é necessário dizer a palavra comando, apenas o portador pode ativar o item.',
  masterpiece: 'Todo item mágico é obra-prima, mas o bônus de obra-prima não se acumula com o bônus de magia.',
  shields: 'Escudos podem receber encantamentos tanto para Armas quanto para Escudos.',
  powerItems: 'Itens de poder (Varinhas, cajados, orbes, cetros e símbolos sagrados) podem receber encantamentos, seus bônus se aplicam em CD, jogadas de ataque e dano para magias.'
} as const;

export const magicItemTiers = [
  { minBonus: 1, maxBonus: 3, tier: 'Menor' as const, cd: 20 },
  { minBonus: 4, maxBonus: 6, tier: 'Médio' as const, cd: 25 },
  { minBonus: 7, maxBonus: 10, tier: 'Maior' as const, cd: 30 }
];

export const enchantmentSlotRule = {
  text: 'Para cada bônus mágico de +1 de um equipamento ele recebe também um Slot. Um item pode ter múltiplos encantamentos, mas nenhum item pode ter mais que 5 slots.',
  maxSlots: 5,
  extraBonus: 'A partir de +6, os bônus acima dos 5 slots são usados como bônus direto no item: uma arma +6 garante +1 em jogadas de ataque e dano; uma armadura +6 concede +1 na CA e reduz sua penalidade em 1; itens de poder aumentam a CD de suas magias em +1 e seu dano também.'
} as const;

export const progressiveEnchantments: ProgressiveEnchant[] = [
  {
    id:'afiado', name:'Afiado', appliesTo:'Arma',
    levels:[
      {slots:1,effect:'Acertos críticos com está arma ignoram 10 pontos de RD.'},
      {slots:2,effect:'A margem de ameaça da arma aumenta em +1.'},
      {slots:3,effect:'Um acerto com esta arma causa, além do dano normal, 1 ponto de dano da Constituição. Criaturas imunes a acertos críticos também são imunes ao dano da Constituição.'},
      {slots:4,effect:'O bônus de 2 slots aumenta para +2.'},
      {slots:5,effect:'Em um 20 natural você arranca a cabeça da criatura atingida; uma criatura imune a críticas é imune a este efeito mas recebe 5d6 pontos de dano de essência no lugar, e este dano se beneficia do multiplicador de crítico.'}
    ]
  },
  {
    id:'anti-criatura', name:'Anti-Criatura', appliesTo:'Arma',
    intro:'Escolha entre animal, construto, espírito, humanoide, monstro ou morto-vivo. Os efeitos da arma se aplicam contra o tipo de criatura escolhido.',
    levels:[
      {slots:1,effect:'Quando uma criatura do tipo escolhido está a 30m de você, um efeito similar à magia Alarme dispara, porém somente você é capaz de ouvi-lo.'},
      {slots:2,effect:'Contra o tipo escolhido a arma recebe +2 em jogadas de ataque e causa 2d6 de dano a mais.'},
      {slots:3,effect:'Escolha um segundo tipo de criatura para o efeito do encantamento.'},
      {slots:4,effect:'O bônus de 2 slots aumenta para +4 e causa 4d6.'},
      {slots:5,effect:'Você tem vantagem em todos os testes de resistências contra criaturas do tipo escolhido.'}
    ]
  },
  {
    id:'armazenar-magia', name:'Armazenar Magia', appliesTo:'Arma',
    levels:[
      {slots:1,effect:'Um conjurador pode guardar uma magia de até 1º nível na arma. Sempre que a arma atinge uma criatura, você pode escolher lançar a magia guardada contra a criatura ou em si mesmo, como uma ação livre. A CD e o Dano utilizam os modificadores e habilidades relevantes do usuário. Magias que exijam concentração são mantidas pelo usuário da arma.'},
      {slots:2,effect:'Você se torna capaz de ver auras mágicas a 3m de você como se estivesse utilizando Detectar Magia.'},
      {slots:3,effect:'Ao ativar o efeito de 1 slot existe uma chance de 50% da magia armazenada não ser consumida, podendo ser usada novamente.'},
      {slots:4,effect:'O ciclo de 1 slot aumenta para 3º nível.'},
      {slots:5,effect:'Você pode armazenar até 3 magias diferentes e escolher qual quer ativar ao acertar uma criatura; cada magia tem um uso independente.'}
    ]
  },
  {
    id:'disparo', name:'Disparo', appliesTo:'Arma',
    levels:[
      {slots:1,effect:'Uma arma corpo-a-corpo pode ser arremessada com distância 9m. Armas de arremesso e disparo têm alcance aumentado em 9m.'},
      {slots:2,effect:'Esta arma voa de volta para aquele que a arremessou, no início de seu próximo turno. Pegar a arma é uma ação livre e não requer nenhum teste.'},
      {slots:3,effect:'Esta arma atinge criaturas incorpóreas normalmente, sem 50% de chance de falha. Criaturas incorpóreas podem empunhar armas de Disparo como se fossem corpóreas.'},
      {slots:4,effect:'O efeito de 2º slot se torna imediato após acertar ou errar o alvo.'},
      {slots:5,effect:'A arma pode ricochetear em seu alvo e atingir um segundo alvo a até 9m dele, usando a mesma jogada de ataque original quando o primeiro ataque acerta. Além disso, você não pode ser desarmado ou ser separado de sua arma; ela sempre retorna para sua mão com um comando.'}
    ]
  },
  {
    id:'defensora', name:'Defensora', appliesTo:'Arma',
    levels:[
      {slots:1,effect:'Esta arma concede CA +2 ao seu usuário, não cumulativa com escudos.'},
      {slots:2,effect:'Ataques com esta arma restauram 1 PV e 1 PM de seu usuário em ataques bem-sucedidos.'},
      {slots:3,effect:'O bônus de 1 slot aumenta para +4.'},
      {slots:4,effect:'O bônus de 2 slots aumenta para 3.'},
      {slots:5,effect:'Você recebe o efeito da magia Deslocamento permanente enquanto segura esta arma: todos os ataques contra você têm 50% de chance de falha.'}
    ]
  },
  {
    id:'elemental', name:'Elemental', appliesTo:'Arma',
    levels:[
      {slots:1,effect:'Você recebe o efeito da magia Suportar Elementos permanente enquanto segura esta arma.'},
      {slots:2,effect:'Escolha entre eletricidade, fogo, frio ou ácido; a arma causa 1d6 de dano adicional do tipo escolhido.'},
      {slots:3,effect:'O bônus de 2 slots aumenta para 2d6.'},
      {slots:4,effect:'Os dados de dano adicionais deste encantamento aumentam para d12 em caso de um acerto crítico.'},
      {slots:5,effect:'O dano base da arma passa a ser do mesmo elemento escolhido no slot 2.'}
    ]
  },
  {
    id:'divino', name:'Divino', appliesTo:'Arma',
    levels:[
      {slots:1,effect:'Todo o dano causado por esta arma é não letal. O usuário pode desativar e ativar esse poder com uma ação livre.'},
      {slots:2,effect:'Quando esta arma atinge uma criatura, cria um lampejo de Energia que causa 3d6 de dano à criatura atingida. O tipo de dano é baseado no alinhamento de seu portador: Sagrado para criaturas bondosas, Energia Negativa para criaturas malignas. Criaturas neutras escolhem este efeito no início de cada dia.'},
      {slots:3,effect:'O dano desta arma restaura pontos de vida ao invés de causar dano. O usuário pode desativar e ativar esse poder com uma ação livre.'},
      {slots:4,effect:'O bônus de 2 slots aumenta para 5d6.'},
      {slots:5,effect:'Esta arma ignora 10 pontos de RD e causa 1 nível negativo em criaturas com alinhamento oposto ao de seu portador. Com uma ação livre, o usuário pode ativar este poder para, em vez disso, restaurar 1 nível perdido e 1 ponto de dano de habilidade de uma criatura.'}
    ]
  },
  {
    id:'dancarina', name:'Dançarina', appliesTo:'Arma',
    levels:[
      {slots:1,effect:'O portador desta arma não é afetado por terreno difícil.'},
      {slots:2,effect:'O usuário desta arma recebe um bônus de +4 em testes de iniciativa.'},
      {slots:3,effect:'Como uma ação livre, o usuário pode soltar a arma no ar. Ela flutua e ataca os inimigos de seu dono, com os mesmos bônus que teria se empunhada por ele, por três rodadas, e então cai no chão. Um personagem pode ter até Int. Mod (mínimo 1) ou MdN, o que for menor.'},
      {slots:4,effect:'Sacar esta arma se torna uma ação livre, o bônus de 2 slots aumenta para +8 e, uma vez por dia, o usuário pode re-rolar um teste de iniciativa.'},
      {slots:5,effect:'O usuário desta arma calcula sua BBA como +4 para cálculo de número de ataques por rodada.'}
    ]
  },
  {
    id:'primal', name:'Primal', appliesTo:'Arma',
    intro:'Primal é um encantamento único. Pode ser aplicado a punhos, garras, pés e partes do corpo mesmo que não possuam slots. Partes do corpo encantadas recebem um número de slots igual ao valor de encantamento Primal aplicado. Encantamentos Primais custam 500 moedas de ouro a mais quando aplicados em armas e só podem ser aplicados a armas corpo-a-corpo.',
    levels:[
      {slots:1,effect:'O usuário desta arma está permanentemente sob o efeito da magia Intuir Direções.'},
      {slots:2,effect:'Uma arma primitiva causa +4 de dano e concede +10 para quebrar armas e objetos refinados com a manobra Separar.'},
      {slots:3,effect:'Cada ataque bem-sucedido com esta arma causa dano igual ao Modificador de Força do usuário em todas as criaturas a até 3m, exceto o próprio usuário. O alvo do ataque recebe este dano em adição ao dano normal da arma.'},
      {slots:4,effect:'O bônus de 2 slots aumenta para +6 de dano e +15 no teste indicado.'},
      {slots:5,effect:'Quando o usuário reduz uma criatura a 0 ou menos PV com um ataque, pode se mover na direção de um inimigo usando seu deslocamento base e realizar imediatamente um ataque contra o novo alvo. Este efeito se ativa uma única vez por rodada.'}
    ]
  },
  {
    id:'arcano', name:'Arcano', appliesTo:'Item de Poder',
    levels:[
      {slots:1,effect:'O portador deste item pode conjurar Bala de Força com uma ação de movimento 3 vezes por dia como se fosse um mago de mesmo nível ao seu nível de personagem.'},
      {slots:2,effect:'Escolha uma escola de Magia; magias da escola selecionada recebem +2 em jogadas de ataque e causam 2 pontos de dano adicional.'},
      {slots:3,effect:'Magias que exigem jogadas de ataque com este item têm sua margem de ameaça e multiplicador aumentados em 1.'},
      {slots:4,effect:'O bônus de 2 slots aumenta para +4.'},
      {slots:5,effect:'Magias que exigem jogadas de ataque com este item ignoram até 20 de RE de criaturas atingidas.'}
    ]
  },
  {
    id:'focalizador', name:'Focalizador', appliesTo:'Item de Poder',
    levels:[
      {slots:1,effect:'O portador deste item pode conjurar Detectar Magia com uma ação de movimento 3 vezes por dia como se fosse um mago de mesmo nível ao seu nível de personagem.'},
      {slots:2,effect:'Escolha uma escola de Magia; magias da escola custam 1 PM a menos para serem conjuradas, mínimo 1.'},
      {slots:3,effect:'O portador deste item tem vantagem em testes de concentração para magias.'},
      {slots:4,effect:'O bônus de 2 slots aumenta para 2.'},
      {slots:5,effect:'Magias pessoais conjuradas com este item duram 24 horas.'}
    ]
  }
];

export const fixedMagicPowers: FixedMagicPower[] = [
  {id:'apanhador-de-flechas',name:'Apanhador de Flechas',cost:1,appliesTo:'Escudo',effect:'Ataques à distância são atraídos para este escudo, que fornece +2 na classe de armadura contra esses ataques. Além disso, qualquer ataque à distância realizado contra um alvo a até 1,5m do usuário do escudo é desviado para ele.',mediumEffect:'O alcance aumenta para 3m.',majorEffect:'O alcance aumenta para 4,5m.'},
  {id:'camuflagem',name:'Camuflagem',cost:1,appliesTo:'Armadura',effect:'Com um comando, a armadura adquire a aparência de uma roupa comum, mas mantendo suas propriedades.'},
  {id:'cegante',name:'Cegante',cost:1,appliesTo:'Escudo',effect:'Com um comando, este escudo emite lampejos de luz brilhante. Todas as criaturas a até 6m devem ser bem-sucedidas num teste de Reflexos CD 10+MdN+Mod. Car. ou ficarão cegas por 1d4 rodadas. Este poder pode ser usado duas vezes por dia.'},
  {id:'escorregadia',name:'Escorregadia',cost:1,appliesTo:'Armadura',effect:'Uma armadura com este poder parece estar sempre coberta de óleo levemente gorduroso. Ela fornece +5 em testes de Acrobacia para arte da fuga.',mediumEffect:'Permite utilizar Acrobacia no lugar de JdA para fugir da manobra agarrar.'},
  {id:'fortificacao',name:'Fortificação',cost:1,appliesTo:'Armadura e Escudo',effect:'Quando o usuário é atingido por um acerto crítico, há uma chance de 25% de que o acerto crítico seja anulado e tratado como um ataque normal.',mediumEffect:'A chance aumenta para 50%.',majorEffect:'A chance aumenta para 75%.'},
  {id:'reluzente',name:'Reluzente',cost:1,appliesTo:'Armadura e Escudo',effect:'Uma vez por dia, como uma ação padrão, pode ser usada para gerar uma luz clara e ofuscante, que cega todos os inimigos em um raio de 6m por 1d4 rodada.'},
  {id:'sombria',name:'Sombria',cost:1,appliesTo:'Armadura',effect:'Uma armadura com este poder é escura, fosca e bem lubrificada, de modo que não faz barulho. Ela fornece +5 em testes de Furtividade.',mediumEffect:'O bônus aumenta para +10 em Furtividade.',majorEffect:'O bônus aumenta para +15 em Furtividade.'},
  {id:'magia-poderosa',name:'Magia poderosa',cost:1,appliesTo:'Item de Poder',effect:'A CD para resistir suas magias aumenta em +1.',mediumEffect:'O bônus aumenta para +2.',majorEffect:'O bônus aumenta para +3.'},

  {id:'abencoado',name:'Abençoado',cost:2,appliesTo:'Armadura e Escudo',effect:'Seu usuário recebe resistência a energia negativa 10 e se torna imune a dreno de energia, não podendo sofrer níveis negativos.'},
  {id:'animado',name:'Animado',cost:2,appliesTo:'Escudo',effect:'Com um comando, este escudo flutua próximo de seu portador, fornecendo proteção como se estivesse sendo empunhado, mas liberando ambas as mãos.'},
  {id:'assustador',name:'Assustador',cost:2,appliesTo:'Armadura e Escudo',effect:'Uma vez por dia, seu usuário pode emitir uma aura de medo. Todos os inimigos a até 9m devem fazer um teste de Vontade (CD 10+MdN+Mod. Car). Em caso de falha ficam abalados por 1 minuto.'},
  {id:'celebre',name:'Célebre',cost:2,appliesTo:'Armadura e Escudo',effect:'Um item célebre concede +2 em Carisma. Além disso, o usuário ganha +1 em jogadas de ataque e CA sempre que estiver lutando contra um inimigo que o conheça. Caso um inimigo venha caçar o usuário por sua fama ou feitos, estes bônus dobram para +2.'},
  {id:'deflexao-de-flechas',name:'Deflexão de Flechas',cost:2,appliesTo:'Armadura e Escudo',effect:'O usuário recebe o talento Desviar Objetos. Caso já o possua, recebe +5 em testes de Reflexos para evitar ataques.'},
  {id:'distrativa',name:'Distrativa',cost:2,appliesTo:'Armadura',effect:'O primeiro inimigo que atacar o usuário em cada combate deve ser bem-sucedido em um teste de Vontade (CD 10+MdN+Mod. Car.) ou ficará pasmo por uma rodada. Além disso, uma vez por dia, o usuário pode fazer uma pose com uma ação padrão para fascinar criaturas inteligentes num raio de 9m por um minuto, caso falhem no mesmo teste de Vontade.'},
  {id:'leveza',name:'Leveza',cost:2,appliesTo:'Armadura',effect:'Seu bônus máximo de Destreza aumenta em 5.',majorEffect:'Reduz a categoria de armadura em 1 e aumenta em +5 o bônus máximo de Destreza.'},
  {id:'resistencia-energia',name:'Resistência à energia',cost:2,appliesTo:'Armadura e Escudo',effect:'Fornece resistência 10 a um tipo de energia.',mediumEffect:'A resistência aumenta para 20.',majorEffect:'A resistência aumenta para 30.'},
  {id:'resistencia-magia',name:'Resistência à magia',cost:2,appliesTo:'Armadura e Escudo',effect:'Fornece +2 nos testes de resistência do usuário contra magia.',mediumEffect:'O bônus aumenta para +4.',majorEffect:'O bônus aumenta para +6.'},
  {id:'perseveranca',name:'Perseverança',cost:2,appliesTo:'Armadura',effect:'Sempre que o usuário falhar em qualquer teste, pode ativar o poder. Se tentar o mesmo teste na rodada seguinte, recebe +1. Em caso de nova falha pode tentar novamente na rodada seguinte, recebendo +2, então +3, +4 e +5, o máximo. Se for bem-sucedido ou fizer qualquer outra ação voluntária, o efeito é quebrado e o bônus desaparece.'},
  {id:'tufao',name:'Tufão',cost:2,appliesTo:'Armadura',effect:'Concede +2 em CA contra todos os ataques à distância e +4 em testes de Atletismo para saltar. Além disso, o usuário fica permanentemente sob efeito de Queda Suave.'},

  {id:'incandescente',name:'Incandescente',cost:3,appliesTo:'Armadura',effect:'Uma vez por dia, seu usuário pode fazer com que ela entre em chamas por um minuto. Durante este período, recebe resistência a fogo 10 e qualquer criatura que o ataque em corpo-a-corpo automaticamente sofre 2d6+3 pontos de dano de fogo.'},
  {id:'invulnerabilidade',name:'Invulnerabilidade',cost:3,appliesTo:'Armadura',effect:'O usuário desta armadura recebe redução de dano 5/mágica.'},
  {id:'toque-espectral',name:'Toque Espectral',cost:3,appliesTo:'Armadura e Escudo',effect:'Esta armadura ou escudo aplica seu bônus na classe de armadura mesmo contra ataques de criaturas incorpóreas. Criaturas incorpóreas podem usar armaduras ou escudos de toque espectral como se fossem corpóreas.'},

  {id:'absorcao',name:'Absorção',cost:4,appliesTo:'Armadura e Escudo',effect:'Fornece ao usuário resistência 10 a todos os tipos de energia: ácido, eletricidade, fogo, frio e sônico.'},
  {id:'controlar-mortos-vivos',name:'Controlar Mortos-vivos',cost:4,appliesTo:'Armadura e Escudo',effect:'O usuário pode lançar Controlar Mortos-vivos (Vontade CD 10+MdN+Mod Car) uma vez por dia. Itens com este poder parecem feitos de ossos.'},
  {id:'forma-eterea',name:'Forma Etérea',cost:4,appliesTo:'Armadura',effect:'Com um comando, o usuário torna-se etéreo, como a magia Passeio Etéreo. Este poder pode ser usado uma vez por dia.'},
  {id:'reflexao',name:'Reflexão',cost:4,appliesTo:'Escudo',effect:'Uma vez por dia, como uma ação livre, pode ser usado para refletir uma magia de volta a seu conjurador, como Reverter Magia.'}
];

export const fixedPowersByCost = [1,2,3,4].map((cost) => ({
  cost,
  powers: fixedMagicPowers.filter((power) => power.cost === cost)
}));

export const armorMagicPowers = fixedMagicPowers.filter((power) => power.appliesTo === 'Armadura' || power.appliesTo === 'Armadura e Escudo');
export const shieldMagicPowers = fixedMagicPowers.filter((power) => power.appliesTo === 'Escudo' || power.appliesTo === 'Armadura e Escudo');
export const powerItemMagicPowers = fixedMagicPowers.filter((power) => power.appliesTo === 'Item de Poder');

~~~~


---

# Cardápio de Itens Mágicos — itens prontos

**Fonte:** `src/data/equipamentos/cardapio-itens-magicos.txt`

~~~~text










Aura Tênue

Nota Promissória do Poder: As notas promissórias do poder são muito utilizadas para transferência segura de valores, principalmente pagamento para aventureiros, mercenários e até mesmo piratas e contrabandistas. Uma criatura pode assinar o pergaminho, garantindo um único uso de uma habilidade de classe, talento ou magia para aquele que estiver delineado como seu receptor (ativar o pergaminho é uma ação padrão). O contrato da nota promissória pode possuir outros parâmetros, ou mesmo a possibilidade de passar adiante a nota. O custo deste item varia de acordo com a magia ou poder armazenado no pergaminho. Para magias de 1º a 3º nível, o custo é o mesmo de um pergaminho. Para magias de 4º a 9º nível, o preço é igual ao nível da magia x o nível mínimo para usar a magia x 25 TO, mais o custo de qualquer componente material, mais 1 TO para cada 1 XP se a magia tiver esse custo. Para habilidades de classe ou talentos, um único uso é armazenado na nota promissória, e a duração máxima de seus benefícios é 1 minuto. O custo é de 300 TO x nível em que a habilidade é adquirida; ou 500 TO mais 500 TO para cada pré-requisito, no caso de talentos. Quaisquer outros parâmetros devem ser estabelecidos pelo mestre. Correm rumores que até mesmo deuses às vezes criam essas notas e as usam em negociatas intramundanas…
Preço: Variável.

Flecha do sono: esta flecha +1 é pintada de branco, incluindo suas penas. Ela causa dano não letal e força a criatura atingida aBo ser bem-sucedida em um teste de Vontade (CD 11) ou adormecer durante 1 hora. Preço: 132 TO

Elixir do amor: um humanoide que beba este líquido de sabor adocicado fica apaixonado(mesmo efeito da magia enfeitiçar pessoa; Vontade CD 15 anula) pela primeira criatura que enxergar. O efeito dura 1d3 dias. Preço: 150

Elixir do Estrangeiro: Estrangeiros em Skerry, o Mundo Despedaçado, não são maltratados por suas origens ou costumes — mas o próprio ambiente de baixa gravidade é perigoso para eles, diminuindo a força de seus músculos e ossos aos poucos, até a  completa atrofia. Para evitar isso, o elixir do estrangeiro é a solução mais simples. Se for ingerido uma vez por mês, ele evita os efeitos de perda de Força em gravidade baixa. Infelizmente, sua ausência é perigosa; se deixar de ser ingerido em um mês, o personagem perde 1 ponto de Força para cada mês em que bebeu o elixir (entrando em coma se chegar em Força 0). Beber o elixir posteriormente não recupera essa perda; apenas a magia recuperar musculatura, ou o retorno a um mundo de gravidade normal, podem fazê-lo.
Preço: 150 TO.

Pó de apagar rastros: é capaz de ocultar a passagem do personagem e seus companheiros. Lançado ao ar, faz com que um recinto com até 9m de lado torne-se tão empoeirado, sujo e coberto de teias de aranha como se estivesse abandonado e intocado por uma década. Espalhado sobre uma trilha, apaga as pegadas de um grupo com até doze homens e cavalos por uma distância de até 75m. Testes de Sobrevivência para rastrear pegadas afetadas por este item têm sua dificuldade aumentada em CD+20.
Preço: 250

Virote gritante: ao ser disparado, este virote +2 grita, forçando todos os inimigos a até 6m de seu trajeto a fazer um teste de Vontade (CD 14). Aqueles que falharem ficam abalados por 1 minuto. Preço: 267 TO

Elixir da verdade: este elixir obriga aquele que o ingerir a responder com a verdade qualquer pergunta que lhe seja feita durante 10 minutos (Vontade CD 16 anula). 
Preço: 500

Flechas Elementais: Estas poderosas flechas eram criadas para os guardiões de Lenórienn, e hoje podem ser encontradas em torres de vigia abandonadas nas selvas de Lamnor. Existem diversas versões; todas podem ser usadas com qualquer tipo de arco e contam como flechas +2. Note que os bônus de ataque e dano das flechas não são cumulativos com quaisquer bônus que o arco tenha. Entretanto, caso sejam utilizadas em conjunto com um arco mágico, as flechas aumentam o bônus do arco em +1.

Fúria dos Céus: esta flecha de penas brancas transforma-se em um raio quando é disparada. Ela causa +2d6 pontos de dano de eletricidade e atinge todas as criaturas numa linha, até o primeiro incremento de distância do arco, quando então se dissipa. Ou seja, se for disparada de um arco longo (distância 24m), atinge todas as criaturas em uma linha até 24m do arqueiro. Faça apenas uma jogada de ataque; todas as criaturas no caminho da flecha têm direito a um teste de Reflexos (CD igual à jogada de ataque) para sair do caminho do relâmpago e evitar o dano.Preço: 500 TO por flecha.

Língua do Dragão: a madeira desta flecha parece ter sido queimada, sendo enegrecida e quente ao toque. Ela causa +2d6 pontos de dano de fogo e recobre o alvo atingido em labaredas. A criatura deve fazer um teste de Reflexos (CD igual ao resultado da jogada de ataque). Se falhar, pega fogo, sofrendo mais 2d6 pontos de dano de fogo por 1d6 rodadas. A criatura pode gastar uma ação completa para apagar as chamas. Preço: 500 TO por flecha.

Nevasca: esta flecha azulada é fria ao toque. Ela causa +2d6 pontos de dano de frio e recobre o alvo com uma camada de gelo. A criatura deve fazer um teste de Fortitude (CD igual ao resultado da jogada de ataque). Se falhar, fica paralisada por 1d4 rodadas, mas recebe redução de dano 10/adamante. Se sofrer qualquer dano, a camada de gelo quebra, e o efeito de paralisia termina. Mesmo que a criatura seja bem-sucedida no teste de Fortitude, fica lenta (veja a magia lentidão) por uma rodada.
Preço: 500 TO por flecha.

Elixir Estrambólico: Este líquido mágico é muito procurado por aventureiros e comerciantes que desejam evitar os efeitos “normalizadores” da Síndrome de Khalmyr, em Ordine. Ao beber o elixir estrambólico, todos os redutores e bônus oferecidos pela presença continuada neste mundo (em direção à médias raciais) são imediatamente removidos, e o usuário fica imune a esses efeitos por 1 semana.
Preço: 500 TO.

Arco de Tollon: Feito com a madeira mágica da floresta de Tollon, este arco é mais resistente que o normal, por isso, consegue uma puxada mais forte. Funciona como um arco longo de madeira Tollon obra-prima, fornecendo um bônus de +1 nas jogadas de ataque e contando como uma arma mágica para fins de ultrapassar redução de dano. Além disso, permite que seu usuário aplique seu bônus de Força nas jogadas de dano. Seu preço é 800 TO. 

Chave de Wynna: Esta pequena e delicada chave dourada traz a efígie da Deusa da Magia. Ela permite, uma vez por dia, lançar portal para o saber.
Preço: 900

Máscara da Revolução: Assim que é posta sobre o rosto, a máscara da revolução se mescla à pele do
usuário, modificando sua aparência. Todos os usuários adquirem O mesmo rosto comum e ordinário, sem características marcantes. Todas as testemunhas têm dificuldade para descrevê- lo. Sempre lembram apenas que "tem altura mediana, cabelos castanhos e pele branca". Também sempre enxergam-no como homem, mesmo que seja mulher. Preço 1.000 TO; Peso 250g.

Filactério da Fé: Esta pequena caixa de madeira contém escrituras religiosas, sendo mantida fechada por um cordão de couro. Apesar de seu poder reduzido, é muito valorizada por devotos do Panteão. O usuário de um filactério da fé é alertado telepaticamente quando está prestes a executar uma ação condenada por sua divindade  em termos de jogo, uma ação contrária a sua tendência ou às obrigações e restrições de deus. O usuário recebe o alerta a tempo de voltar atrás, se quiser.
Preço: 1.000

Armadura de Treinamento: Os legionários têm suas táticas tradicionais e seu modo típico de lutar, mas também precisam se adaptar a batalhas e situações específicas. Os rebeldes convivem todos os dias com novos desafios e tarefas imprevistas, e precisam estar sempre prontos. Uma armadura de treinamento pode ser de qualquer tipo. Um usuário pode vesti-la e treinar durante uma hora para trocar um de seus calemos por outro talento qualquer (desde que cumpra seus pré-requisitos). A troca permanece ativa enquanto o usuário estiver usando a armadura de treinamento. Uma vez que tire a armadura, seu talento volta ao normal. Existe uma versão maior da armadura de treinamento, que permite que o usuário troque qualquer número de talentos (um por hora de treinamento).
Preço: encantamento +1 ou +3 para a maior.

Braçadeiras da armadura: estes braceletes podem ser feitos de metal ou couro, e protegem seu usuário com um campo de força invisível, porém tangível. Fornecem um bônus de +1 a +8 na classe de armadura, não cumulativo com bônus de armaduras.
Preço: 1.000, 4.000, 9.000, 16.000, 25.000, 36.000, 49.000, 64.000 TO

Manto da resistência: este traje protege seu usuário, fornecendo um bônus de +1 a +5 em todos os testes de resistência.
Preço: 1.000, 4.000, 9.000, 16.000, 25.000

Arma dos Becos: Estas armas (sempre de ataque à distância) são especialmente encantadas para uso em combates nas ruas. Seus alvos náo podem utilizar esquinas, paredes e outros típicos obstáculos urbanos para evitar suas flechas. O usuário de uma arma dos becos deve fazer um teste de Percepção oposto pelo teste de Furtividade ou Acrobacia do alvo. Caso seja bem-sucedido, o usuário ignora roda a cobertura (inclusive cobertura total) devido a obstáculos urbanos (como esquinas, becos e prédios). A arma (ou os projéteis que ela dispara) dobram esquinas em busca do alvo, passam por cima de muralhas e desviam-se de carroças. Caso o alvo entre em um prédio ou cômodo e feche uma porta, a flecha não persegue-o - apenas desvia-se de obstáculos que possam ser contornados. Obviamente, o poder de uma arma dos becos funciona apenas em cidades (outros ambientes não apresentam "obstáculos urbanos"). 
Preço: + 1 de bônus.

Elixir de cuspir fogo: este elixir borbulhante fornece para quem o ingerir a capacidade de cuspir labaredas. A criatura pode cuspir fogo até três vezes, infligindo 4d6 pontos de dano de fogo (Reflexos CD 16 reduz à metade) por vez. Cada ataque atinge um único alvo a até 9m. Labaredas não utilizadas se dissipam uma hora após o líquido ter sido ingerido.
Preço: 1.100

Ar Engarrafado: Vendedores de bugigangas costumam tentar convencer os forasteiros a comprar garrafas vazias, dizendo que contêm "o ar de Valkaria engarrafado". Não se sabe se o ar engarrafado mágico deu origem a esse trambique, ou se algum mago empreendedor
teve a ideia de fabricá-lo após ver um dos trambiqueiros em ação - mas é fato que existem garrafas que contêm um pouco da "essência" de Valkaria ou outras grandes cidades.Ao ser aberta, a garrafa de ar engarrafado expele urna fumaça translúcida, que mostra relances momentâneos de cenas e prédios da capital (ou de outra cidade). Cada garrafa simula uma cidade específica. A fumaça não tem cheiro e não obscurece a visão, mas ocupa uma área de 30 por 30 metros. Esta área passa a contar como Valkaria (ou a cidade em questão) para fins de habilidades de classe, talentos, magias, etc. Assim, um pastor de Valkaria pode usar sua habilidade pequenos deuses dentro da área coberta pela fumaça, por exemplo. Quaisquer criaturas vivas "criadas" pela fumaça para atender a habilidades ou magias (por exemplo, os guardas trazidos pelo talento Chamar Reforços) comportam-se exatamente como suas contrapartes reais, mas são na verdade construtos mágicos criados pela fumaça. O ar engarrafado, no entanto, não cria ou simula nenhum local específico de Valkaria ou qualquer outra cidade - não permite acesso aos esconderijos do rei do crime ou ao templo do pastor de Valkaria, por exemplo. A fumaça dissipa-se depois de 15 minutos (ou 5 minutos, com ventos fortes ou magias que criem vento). Uma vez utilizado, o ar engarrafado se esvai; é preciso comprar outra garrafa (comando cuidado para que seja legítima!). Talvez existam itens como este para simular outros terrenos (florestas, montanhas... ), mas isso não é confirmado.
Preço: 1.125 TO.

Pó da ilusão: esta poeira parece pó de giz — mas, se examinada com atenção, nota-se sua cor e forma mutáveis. Atirada sobre alguém, gera os efeitos da magia disfarce ilusório. A criatura adquire uma forma desejada pelo personagem que atirou o pó da ilusão.
Preço: 1.200

Lâmina Élfica: Usada pelos guardiões de Lenórienn, esta espada é feita de mitral, um metal prateado, brilhante e mais leve que o aço. Fios de prata correm ao longo da lâmina, formando desenhos belos e delicados. A lâmina élfica é uma espada longa de mitral obra-prima. Tem as estatísticas de uma espada longa, com bônus de +1 nas jogadas de ataque e na margem de ameaça e peso de 1kg. Seu preço é 1.315 TO, mas, na época atual, esta arma é encontrada apenas em lojas de antiguidades e relíquias élficas. 

Amuleto dos Sussurros: amuleto dos sussurros é um item de uso único, com grande poder mas de curta duração. Por sua natureza descartável (e porque não deve despertar suspeitas), em geral é confeccionado com materiais ordinários e/ou aparência tosca: uma conta de vidro barato presa a um graveto, um pequeno cubo de chumbo envolto em pergaminho puído, um quadrado de bronze com
um osso de galinha amarrado. Em geral, há algum tipo de pedra ou metal e um item que pode ser quebrado ou rasgado com facilidade. Quando a parte mais frágil é quebrada, a magia do amuleto se ativa: o usuário e todos num raio de 3 metros ficam imunes a efeitos de adivinhação. Ou seja, ainda precisam se preocupar com espiões ocultos nas sombras, mas são imunes a magias como vidência e itens como bola de cristal. Caso o usuário já estivesse sendo observado e, de repente, a vidência parasse de   funcionar, o observador poderia ficar alarmado. No entanto, o amuleto substitui as imagens e sons atuais
do usuário por junções convincentes de suas atividades passadas. Apenas com um teste de Inteligência (CD 20) um observador pode notar que está vendo uma “colagem” de situações antigas. O efeito dura 3d10 rodadas. O usuário sente quando restam duas rodadas para o final do efeito. Após utilizado, o amuleto dos sussurros passa a ser um amontoado de sucata inútil, não sendo detectado como mágico de forma alguma.
Preço 1.500 TO.

Azagaia dos relâmpagos: esta azagaia se torna um relâmpago (como a magia, 6d6 de dano de eletricidade, Ref CD 14 reduz à metade) quando arremessada. Ela é consumida no ataque. Preço: 1.500 TO

Chapéu do disfarce: este chapéu permite que o usuário altere sua aparência como se estivesse sob efeito da magia disfarce ilusório. Como parte do disfarce, o chapéu pode mudar para o aspecto de um elmo, faixa, tiara, gorro, touca, pente e assim por diante. Rumores dizem que o infame assassino Camaleão tem um chapéu do disfarce, e graças ao item ninguém jamais viu seu rosto verdadeiro.
Preço: 1.800

Flauta do som: quando tocada por um personagem treinado em Atuação (música), esta flauta cria diversos sons mágicos, equivalentes à magia som fantasma.
Preço: 1.800

Espada de Cavaleiro: Forjada por anões, esta espada é feita de adamante, um metal escuro, fosco e mais denso que o aço. A antiga aliança entre Doherimm e a Ordem da Luz faz com que muitos cavaleiros recebam esta arma de presente dos anões; por isso ela tem este nome no mundo da superfície. Em termos de regras, é uma espada bastarda de adamante obra-prima. Tem as estatísticas de uma espada bastarda, com um bônus de +1 nas jogadas de ataque e dano de 2d8. Seu preço é 1.835 TO. 

Pedra da Boa Sorte: Uma vez por dia, o usuário de uma pedra da boa sorte pode rolar novamente
uma jogada ou teste que tenha recém realizado.
Preço: 2.000 TO.

Cápsula da Sinergia: Esta cápsula especial é um trunfo nas mãos de um mago pistoleiro arcano que possua aliados também capazes de lançar magias. Um conjurador arcano pode lançar uma magia diretamente em uma cápsula da sinergia que esteja em sua posse. A magia armazenada na cápsula pode então ser utilizada por um pistoleiro arcano, e não conta em seu limite de magias preparadas. Cápsulas da sinergia são valiosas, mas de uso limitado; depois de disparadas são completamente destruídas.
Preço: Seu custo é variável: 200 TO x número máximo de PMs que a cápsula pode receber (entre uma única magia e um número qualquer de talentos metamágicos), até um máximo de 2.000 TO por uma cápsula que possa armazenar 10 PM

Amuleto do Conhecimento Arcano: Este amuleto de prata, gravado com o brasão da Academia Arcana, pode ser usado como prendedor de capa ou como broche. É oferecido como premiação para alunos aprovados no Teste do Vento . Uma vez por dia, oferece ao usuário um bônus de +10 em um teste de Conhecimento (arcano). No entanto, o amuleto não funciona no território da Academia  — impedindo que seja usado em exames e provas.
Preço: 2.000

Criatura em Miniatura: Estes fabulosos construtos mágicos são versões em miniatura de criaturas reais, cabendo na palma da mão de uma criatura média. Existem miniaturas de gnolls, águias, ogros e até dragões — a variedade é quase infinita. Os materiais e a manufatura dependem do poder da criatura representada. Gnolls costumam ser feitos de madeira ou argila, águias são feitas de prata ou marfim, dragões são feitos de ouro e jóias. Uma vez por dia, como uma ação padrão, o usuário de uma criatura em miniatura pode arremessá-la ao chão e falar uma palavra de comando, fazendo com que o item torne-se uma versão típica da criatura representada. A criatura então irá lutar em nome do usuário, ou cumprir qualquer tarefa a seu alcance (um grifo pode ser montado, um gigante pode erguer objetos pesados, etc.). Se for usada em combate, uma criatura em miniatura permanece ativa até o final do encontro, ou até ser reduzida a 0 PV. Fora de combate, a criatura em miniatura fica ativa por até 4 horas.
Preço: 2.000, 12.000, 35.000, 70.000, 120.000

Anel de proteção: este anel desvia ataques realizados contra o usuário, fornecendo de +1 a +5 em sua classe de armadura.
Preço: 2.000, 8.000, 18.000, 32.000, 50.000

Arma do Plebeu: No início das Guerras Táuricas, os reinos invadidos simplesmente não possuíam contingente para enfrentar as legiões. Depois da ocupação, isso é um problema ainda mais grave - os exércitos oficiais não podem se chocar contra os invasores. É preciso armar a população. Não se pode ter um guerreiro em cada cabana, mas é possível ter um cidadão! Uma arma do plebeu é uma arma encantada para que qualquer um possa usá-la, mesmo sem o talento apropriado. Normalmente são armas marciais, como espadas e arcos longos, que com este encantamento podem ser usadas mesmo por quem não possuí Usar Armas Marciais. Bandos rebeldes distribuem estas armas em aldeias remotas, e grupos de aventureiros usam-nas para garantir que mesmo os magos possam empunhar ferramentas mortais. Existem armas exóticas encantadas desta forma, e são ainda mais úteis e raras.
Preço: 2.000 (encantamento +1)

Anel de queda suave: este anel é decorado com um padrão de penas ao longo da orla. Seu usuário fica sob efeito da magia queda suave ao cair de 1,5m ou mais.
Preço: 2.200

Gema elemental: esta gema contém uma magia de invocação vinculada a um Plano Elemental específico (ar, terra, fogo ou água). Quando a gema é esmagada (uma ação padrão), um elemental Grande do tipo correspondente surge. O elemental fica sob controle da criatura que quebrou a gema, mas desaparece em 1 minuto.
Preço: 2.250

Flecha assassina: esta flecha é ligada a um tipo de criatura, como uma arma anti criatura. Se atingir uma criatura do tipo certo, a vítima deve ser bem-sucedida em um teste de Fortitude (CD 20) ou será destruída. Preço: 2.282 TO

Anel do sustento: este anel supre a necessidade de comer e beber de seu usuário. Também refresca corpo e mente, permitindo que ele durma apenas duas horas por dia como se fossem oito. Os efeitos do anel só se ativam após uma semana de uso.
Preço: 2.500 TO

Bordão das Maldições: Este bordão + 1 é feito de madeira Tollon retorcida, e tem aparência sinistra e perturbadora. Apesar do material e da qualidade de sua manufatura, muitas vezes tem aspecto primitivo, com adornos rústicos (ossos de animais, ervas fedorentas, etc.). O bordão das maldições fornece um bônus de + 5 em testes de Identificar Magia para as maldições de um bruxo.
Preço: 2.500

Amuleto do Idioma: Um personagem usando esse amuleto pode compreender e falar o  idioma específico com o qual item foi imbuído. Caso saiba ler e escrever, também conseguirá fazê-lo no idioma do amuleto. Cada amuleto do idioma tem uma aparência diferente, com aspectos que lembrem a raça que emprega aquela língua, como adornos de folhas e flores para um amuleto do idioma silvestre, ou ondas e peixes para um amuleto do idioma aquan.
Preço: 2.500

Manto élfico: é indistinguível de um manto cinza comum. Entretanto, quando usado com o capuz cobrindo o rosto, fornece +5 em testes de Furtividade.
Preço: 2.500

Anel da Graça das Águas: Este anel de prata exibe uma turmalina incrustada; na própria gema está gravado o brasão da Academia Arcana.É oferecido como premiação para alunos aprovados no Teste da Água. Fornece um bônus de + 1 em CA e, uma vez por dia, oferece um bônus de + 5 em um teste de Conhecimento (natureza). O bônus em CA funciona em qualquer lugar, mas o bônus em Conhecimento (natureza) não pode ser usado no território da Academia.
Preço: 2.500

Mochila de carga: este item, que parece uma simples mochila de pano, está na verdade ligado um espaço inter-dimensional — fazendo com que seja maior por dentro que por fora. Pode-se guardar até 100kg dentro de uma mochila de carga, mas ela pesará no máximo 5kg. Se a mochila for rasgada, todos os objetos em seu interior se perdem para sempre. Criaturas vivas colocadas no interior da mochila podem sobreviver até 10 minutos, mas depois disso morrerão asfixiadas.
Preço: 2.500 TO

Carrilhão da abertura: quando este tubo oco de madeira com cerca de 30cm é soprado, emite vibrações mágicas que abrem qualquer tipo de tranca (portas, cadeados, algemas...). O carrilhão da abertura também dissipa automaticamente qualquer magia cerrar portas ou tranca arcana. A magia silêncio anula este item. O carrilhão da abertura pode ser usado 10 vezes antes de perder seu poder.
Preço: 3.000

Lanceiro: Reforçado com mitral, este arco é capaz de disparar poderosas flechas metálicas, muito pesadas para arcos normais. Funciona como um arco longo de mitral obra-prima, fornecendo um bônus de +1 nas jogadas de ataque e na margem de ameaça. As flechas metálicas aumentam o dano do arco em uma categoria (para 1d10). O preço do arco é 3.000 TO. O preço de cada flecha metálica é 1 TO. 

Ferraduras da velocidade: este conjunto com quatro ferraduras de ferro pode ser fixado nos cascos de um cavalo para aumentar seu deslocamento em +9m.
Preço: 3.000

Corda da escalada: este corda de 15m é bastante fina, mas forte o suficiente para suportar até 1.500kg. Com um comando, a corda se move em qualquer direção (incluindo para cima) a 3m por rodada, fixando-se firmemente onde seu usuário desejar. Ela pode se desamarrar e voltar da mesma forma.
Preço: 3.000

Arma Ocultável: Para fingir inocência, entrar despercebido em um baile ou mesmo abordar um suspeito sem atrair hostilidade, é importante ser capaz de ocultar suas armas. Uma arma ocultável é qualquer arma que, através de um encantamento especial, pode ser escondida dentro de um manto ou casaco simples. Caso o usuário tire o casaco, manto ou peça de roupa onde a arma está escondida, ela é revelada - mas uma revista casual não mostra nada. Qualquer arma pessoal pode ser escondida, se estiver sob este encantamento: uma enorme espada de duas mãos passa a caber em um mero colete! Uma arma encantada desta forma também pode ser sacada e guardada como uma ação livre. Caso o usuário possua várias armas ocultáveis, pode trocar de arma (guardando uma e sacando a outra) como uma ação livre. 
Preço: +2 de bônus.


Escudo do conjurador: este escudo leve +1 tem uma pequena tira de couro na parte inferior, onde um conjurador pode escrever qualquer magia de até 3º nível que possa lançar. A tira de couro pode então ser lida como um pergaminho. Escrever uma magia na tira leva um minuto, e apenas uma magia pode ser escrita por dia. Preço 3.305 TO

Espada de Aço-Rubi: Esta espada foi forjada com aço-rubi, um metal com a aparência de vidro avermelhado, capaz de cortar qualquer substância. Em termos de regras, é uma espada longa de aço-rubi magistral e precisa. Tem as estatísticas de uma espada longa, com um bônus de +2 nas jogadas de ataque, +1 na margem de ameaça e a capacidade de ultrapassar qualquer tipo de redução de dano. Seu preço é 3.415 TO

Cota de malha élfica: esta cota de malha de mitral +1 é composta de finíssimos anéis, fazendo com que ela pareça ser feita de um tecido leve, como seda. Preço 3.450 TO

Pó do desaparecimento: uma criatura ou objeto coberto por este pó torna-se invisível (como em invisibilidade maior) por 2d6 rodadas. O usuário não sabe quando a invisibilidade vai terminar.
Preço: 3.500

Bálsamo de pedra: este unguento tem duas finalidades. Se aplicado sobre uma criatura petrificada, ela retorna ao normal, como pela magia pedra em carne. Se aplicado em uma criatura normal, ela fica protegida, como pela magia pele rochosa. Um frasco contém o sufi ciente para um uso.
Preço: 4.000 TO 

Itens de Atributo(força,destreza,constituição,inteligência,sabedoria,carisma) +2/+4/+6: Fornece um bônus de +2, +4 ou +6 no atributo do usuário.
Preço: 4.000, 16.000, 36.000

Anel da Contramágica: Este anel feito de aço polido com uma pérola incrustada armazena uma magia arcana. Quando o usuário do anel da contramágica é alvo da mesma magia que está armazenada, pode anular a magia lançada contra ele automaticamente. A magia armazenada no anel é então “gasta”. Armazenar uma magia no anel exige o tempo de execução normal da magia escolhida.
Preço: 4.000

Estilhaçadora: a lâmina desta espada longa +1 é levemente serrilhada. Se usada para uma manobra de separar, se torna uma espada longa +4. Preço: 4.315 TO

Escudo brilhante: este escudo pesado +1 é feito de metal reluzente e brilhante. Qualquer inimigo a até 6m do usuário deve ser bem-sucedido em um teste de Fortitude (CD 15) ou ficará ofuscado por 1 minuto. Uma vítima bem-sucedida no teste de resistência fica imune a este efeito por um dia. Preço 4.320 TO

Couraça dos anões: esta couraça de adamante +1 é pesada,mas oferece boa proteção. Preço 4.500 TO

Manto dos Dao: Este belo manto de tecido azul escuro (para alunos do sexo masculino) ou vermelho escuro (para o sexo feminino) tem símbolos da Academia Arcana e de Wynna bordados alternadamente na gola e nas bainhas. É oferecido como premiação para alunos aprovados no Teste da Terra. Fornece um bônus de +2 em todos os testes de resistência e um bônus adicional de +2 em testes de Vontade para lançar magias em condições precárias (em movimento, ao sofrer dano, etc.). Um presente dos dao (outro nome dos gênios da terra) aos alunos mais bravos e dedicados, este item funciona dentro do território da Academia - ao contrário do amuleto do conhecimento arcano e do anel da graça das águas. Assim, seu bônus em testes de resistência pode ser usado para os testes de frustração
dos alunos.
Preço: 4.500

Incenso da meditação: este incenso possui fragrância adocicada e fumaça perolada. Se um conjurador divino acendê-lo e meditar por uma hora, na próxima vez que preparar suas magias, todas serão afetadas pelo talento metamágico Maximizar Magia, mas sem a necessidade de pagar PM adicionais.
Preço: 4.900

Bastão imóvel: este bastão é uma barra de ferro achatada com um botão em uma das pontas. Quando o botão é pressionado(uma ação de movimento), o bastão fica imóvel no lugar — mesmo que isso desafie a gravidade! Assim, o bastão imóvel pode ser usado para segurar cordas, barrar portas, entre outras coisas. Dois bastões imóveis podem ser usados para criar uma escada em qualquer lugar. Um bastão imóvel pode suportar até 4.000kg antes de cair. Mover o bastão exige um teste bem-sucedido de Força (CD 30).
Preço: 5.000 TO

Braçadeiras Bélicas: Estas braçadeiras de couro desgastado possuem farpas de aço costuradas. Os encantamentos infundidos nestas braçadeiras tornam os golpes de seu usuário mais potentes. As braçadeiras bélicas fornecem um bônus de +1 em todas as jogadas de dano. Seu preço é 5.000 TO.

Braçadeiras do arqueiro: estes protetores de punho fornecem +1 nas jogadas de ataque com armas de ataque à distância.
Preço: 5.000 TO

Cinturão de Controle da Gravidade: Este item especial é usado por tripulantes e engenheiros de naves-vivas para realizar reparos externos quando necessário. Trata-se de um cinto com dois pequenos cristais na fivela, encantado para permitir ao usuário controlar os efeitos da gravidade sobre o seu corpo. Quando o item é ativado (uma ação padrão), ele permite ao usuário andar em qualquer superfície, como se estivesse andando em terra firme. Ele ganha deslocamento de escalar igual ao seu deslocamento em terra. Enquanto usa o cinto, o usuário nunca sofre dano por quedas.
Preço: 5.000 TO.

Amuleto de Valkaria: Este item muito simples, favorito entre os aventureiros, contém a bênção da Deusa da Ambição. Valkaria incentiva a sede de aventuras - assim, o usuário recebe 1 ponto de ação adicional por heroísmo
Preço: 5.000TO.

Indumentária do Guarda-Costas: Muitos nobres, burgueses e figurões em Valkaria possuem poder político e econômico mas nenhuma capacidade de combate. Outros (como clérigos e magos) são capazes de se defender, mas preferem deixar os confrontos físicos para seus guardas. De qualquer forma, é comum que esses poderosos tenham guarda-costas inteiramente dedicados a preservar suas vidas - muitas vezes ao custo de seu próprio sacrifício. A indumentária do guarda-costas é um conjunto de itens em pares. Cada peça de um par deve ser vestida pelo guarda costas e pelo protegido. Cada uma confere uma habilidade específica à dupla, sempre com a finalidade de preservar a segurança do protegido e facilitar o trabalho do protetor Os itens são descritos a seguir.

Amuletos: usados ao redor dos pescoços de ambos. Tornam o guarda-costas capaz de atrair quaisquer perigos que afetariam o protegido, desde que ambos estejam a 3 metros ou menos de distância um do outro. Quaisquer armadilhas, venenos, magias, efeitos ambientais, etc. afetam apenas o guarda-costas. 

Anéis: um par de anéis usados nas mãos direitas do protegido e do protetor. Tomam o guarda-costas capaz de "atrair" ataques originalmente direccionados ao protegido, desde que ambos estejam a 3 metros ou menos de distância um do outro. Quaisquer inimigos que desejam atacar o protegido precisam ser bem-sucedidos em testes de Vontade (CD igual a 10 + o nível do protetor). Caso falhem, podem atacar apenas o protetor. 

Braceletes: o protetor usa um bracelete; o outro é usado pelo protegido. Os braceletes concedem ao protegido o talento Liderança (mesmo que ele não cumpra seus pré-requisitos), adquirindo um parceiro (que será o guarda-costas). Caso o protegido seja um personagem jogador, os braceletes têm um efeito adicional- permitem que o guarda-costas seja controlado pelo jogador (normalmente, é um PdM sob controle do mestre).

Cinturões: alguns protegidos confiam tanto em seus guarda-costas que escolhem voluntariamente tornar-se mais frágeis, para que o guarda-costas fique forte e resistente, capaz de garantir a segurança de ambos. O protegido pode transferir seus pontos de vida para o protetor, na quantidade que quiser. Esta transferência é permanente, até que o guarda-costas morra ou os cinturões sejam destruídos. Em contrapartida, o guarda costas pode gastar uma ação padrão para curar 3d8 pontos de vida do protegido (perdendo a mesma quantidade de pontos de vida), desde que possa tocá-lo. 

Mantos: cobrem os ombros do protegido e do guarda-costas. O protegido pode transferir quaisquer XP que receba para o guarda-costas, fazendo com que ele avance de nível.
Preço: 5.000 TO (amuletos), 10.000 TO (anéis), 50.000 TO (braceletes), 25.000 TO (mantos).

Mapa da Cidade: Muito popular entre criminosos e outros rufiões sempre em fuga, o mapa da cidade é um pergaminho encantado que mostra toda Valkaria (com uma quantidade variável de detalhes, já que quase ninguém é capaz de mapear cada prédio e esquina da metrópole). O mapa da cidade mostra a localização de pessoas escolhidas pelo usuário - elas aparecem como pontos luminosos, de cores diferentes, movendo-se pelas ruas desenhadas no mapa. Para "marcar" uma pessoa no mapa da cidade, o usuário precisa conhecer sua descrição física exata e seu nome (em geral, basta observá-la por alguns minutos). A "vítima'' tem direito a um teste de Vontade contra CD 20 - se for bem-sucedida, nada acontece. Contudo, se falhar, suas idas e vindas são registradas pelo mapa, tornando qualquer vigilância e emboscada muito mais fáceis. Remover maldição retira a pessoa do mapa, mas a maioria dos alvos nem mesmo sabe que está sendo vigiada. Além de seu uso mais comum (para escapar de autoridades e seguir futuras vítimas de assaltos e chantagens), estes mapas também são usados por turistas ricos que desejam bisbilhotar as vidas de celebridades de Valkaria, maridos e esposas que suspeitam de infidelidade e aventureiros que desejam manter-se a par da localização de seus companheiros. Todos os criminosos da capital esforçam-se para que nenhum destes itens jamais caia nas mãos da milícia. Existem versões do mapa da cidade capazes de comportar a localização de cinco, dez e quinze pessoas. 
Preço: 5.000 TO (cinco pessoas), 7.500 TO (dez pessoas) e 10.000 TO (quinze pessoas).

Pedra Infectada: Este leve pedaço de pedra-pomes possui pequenos vermes esbranquiçados e translúcidos passeando por seus buracos. Pode estar preso em um cordão de couro, como um pingente, ou simplesmente ser carregado num bolso. O portador de uma pedra infectada permite que a Pedra-que-tudo-vê enxergue através de seus olhos e ouça com seus ouvidos, enquanto ele mesmo pode usar a magia clarividência/clariaudiência uma vez por dia. Carregar a pedra infectada causa 1d2 pontos de dano de Constituição por dia.
Preço: A pedra infectada normalmente não pode ser comprada, apenas oferecida a um personagem por um membro do Culto do Novo Dia. Em mercados ilegais, ela pode ser encontrada por 5.000 TO ou mais.

Couro de rinoceronte: feito de couro de rinoceronte, este gibão de peles +2 fornece +2d6 de dano em ataques de investida realizados por seu usuário. Preço 5.315 TO

Garrafa da fumaça eterna: quando a tampa desta urna de metal é retirada, uma grande quantidade de fumaça é liberada, gerando o efeito da magia névoa. A fumaça persiste até a garrafa ser tampada. Após isso, se dissipa em um minuto (ou 4 rodadas, sob vento forte, ou 1 rodada, sob um vendaval).
Preço: 5.400

Botas de caminhar e saltar: estas botas aumentam o deslocamento do usuário em 3m, e fornecem +5 em testes de Atletismo. 
Preço: 5.500 TO

Leque do vento: este leque com estrutura de madeira e folha de tecido pode ser balançado para criar um efeito idêntico à magia lufada de vento (Fortitude CD 16 anula). Pode ser usado uma vez por dia sem problemas; caso seja usado mais de uma vez no mesmo dia, há 20% de chance por uso de que se despedaçe em farrapos inúteis.
Preço: 5.500

Escudo espinhoso: este escudo pesado +1 é coberto de espinhos. Três vezes por dia, o usuário pode ativá-lo para disparar um de seus espinhos. Cada espinho é uma arma de ataque à distância +1
(1d10, crítico 19-20, perfuração) com distância de 36m. Preço 5.725 TO

Amuleto dos punhos poderosos: um amuleto simples, normalmente feito de madeira com ideogramas pintados. Fornece um bônus de +1 a +5 nas jogadas de ataque e dano com ataques desarmados e armas naturais. Preço: 6.000, 24.000, 54.000, 96.000, 150,000

Barraca Segura de Aleph: Esta barraca mágica foi criada pelo famoso Aleph Olhos Vermelhos, para ajudá-lo em suas andanças por Arton. É o objeto de desejo de todos os arcanos que não gostam de acampar nos ermos — ou seja, quase todos. Trata-se de uma barraca de tecido simples, com capacidade para duas criaturas Médias. A barraca segura de Aleph protege seus ocupantes de todas as intempéries climáticas, até mesmo em casos extremos (tempestades, inundações, terremotos, avalanches, erupções vulcânicas, etc.), mantendo-os em condições confortáveis de temperatura e umidade. Além disso, quando uma criatura se aproxima a menos de 9m da barraca com intenção de ferir seus ocupantes, eles acordam imediatamente, cientes da situação perigosa. Todos os efeitos da barraca só funcionam se ela estiver fechada.
Preço: 7.500

Venda da Escuridão: Esta faixa de tecido negro é feita para ser amarrada ao redor da cabeça, tapando os olhos. Um usuário da venda da escuridão não consegue enxergar (por motivos óbvios...). Mas apenas em ambientes iluminados. Em ambientes escuros, ele passa a enxergar normalmente, como se possuísse visão no escuro com alcance ilimitado. A visão no escuro da venda vence mesmo escuridão mágica.
Preço: 7.500 TO.

Anel do escudo mental: este anel, forjado em ouro maciço, é finamente trabalhado. Seu usuário fica imune a detectar pensamentos, discernir mentiras e qualquer tentativa de determinar sua tendência através de magia. Preço: 8.000

Adaga venenosa: esta adaga +1 tem lâmina negra e serrilhada. Como uma ação livre, seu usuário pode infligir um efeito de envenenamento (como a magia, Fort CD 14 anula) na criatura atingida. Este poder pode ser usado uma vez por dia. Preço: 8.302 TO

Bastão do Favor de Wynna: Este bastão de metal é pintado com faixas de cores exóticas
e possui duas pedras preciosas, um rubi e uma ametista, em cada extremidade. É oferecido como premiação para alunos aprovados no Teste do Fogo e, portanto, serve como comprovação de que o usuário formou-se na Academia Arcana. Funciona exatamente como um bastão metamágico, mas o talento que proporciona é determinado aleatoriamente ao nascer do sol. Role 1d10:
1-2) Aumentar Magia.
3-4) Estender Magia.
5-6) Magia Silenciosa.
7-8) Potencializar Magia.
9-10) Maximizar Magia.
Preço: 9.000

Caneco de Murphy: Efeito: Toda vez que o caneco é cheio com qualquer líquido (uma ação de movimento), há 50% de chance dele imbuir a bebida com os efeitos de sorte súbita, e 50% de imbuir
com os efeitos de azar atípico. Toda a bebida no caneco deve ser consumida para receber os efeitos da magia. Preço: 24.000 TO.

Aura Moderada

Bastões metamágicos: o usuário do bastão metamágico pode usá-lo, como uma ação livre e até três vezes por dia, para aplicar os efeitos de um talento metamágico em uma magia que esteja lançando, sem aumentar seu custo em PM. Um bastão metamágico pode afetar qualquer magia de até 3º nível; um bastão metamágico aprimorado pode afetar qualquer magia de até 6º nível, e um bastão metamágico maior pode afetar qualquer magia de até 9º nível.
Preço: 3.000(Aumentar, Estender, Silencioso), 9.000(Potencializar), 11.000(Aumentar apr., Estender apr, Silencioso apr.), 14.000(maximizar).
24.500(Aumentar maior, Estender maior, Silencioso maior), 32.500(Potencializar apr), 35.000(Acelerar). 54.000(maximizar apr.), 73.000(Potencializar maior), 75.500(acelerar apr), 121.500(maximizar maior),170.000(acelerar maior).

Escudo do leão: este escudo pesado +2 é forjado como uma cabeça de leão rugindo. Três vezes por dia, como uma ação livre, o usuário pode ordenar que a cabeça ataque. Ela morde com o mesmo bônus de ataque do usuário, e causa 2d6 de dano de perfuração. O ataque ocorre independentemente das ações do usuário. Preço 9.315 TO

Capa de Thyatis Ela concede um bônus de +2 ao carisma do personagem, além de resistência a fogo 5.
Preço 10.000 TO. Peso: 1 kg.

Bordão do Geomante: Este bordão +1 é feito de pedra, mas pesa o mesmo que um bordão normal. Sua aparência abrutalhada combina com os geomantes. O bordão do geomante concede um bônus de + 1 em ataques, dano, CA e testes de resistência ao servo elemental de um geomante. Além disso, o usuário recebe redução de dano 2. Esta redução de dano é aplicada à metade do dano que um geomante recebe do seu servo.
Preço: 10.000

Cospe-Chamas: Este arco chamuscado e enegrecido, quase como se fosse feito de carvão, faz qualquer flecha disparada por ele irromper em chamas. O cospe-chamas é um arco longo flamejante +1. Uma criatura atingida por uma de suas flechas pega fogo, sofrendo mais 1d6 pontos de dano no fim de seu próximo turno, a menos que gaste uma ação completa para apagar as chamas. Seu preço é 10.100 TO. 

Distintivo da Milícia: Dizem as más línguas que este item foi criado após reclamações dos milicianos de Valkaria - que afirmavam nunca contar com apoio mágico algum, enquanto que uma organização muito menor, os Xerifes de Azgher, possuíam distintivos encantados para ajudá-los a caçar criminosos. Independente da veracidade deste boato, poucos milicianos possuem um distintivo da milícia. Em geral, apenas investigadores e sargentos que tenham se destacado com atos de heroísmo ou resolvido casos notórios. O distintivo da milícia concede os seguintes poderes:
· O usuário torna-se capaz de ser compreendido por qualquer criatura inteligente, mesmo que seja nativa de outro reino, mundo ou Plano. Contudo, apenas algumas frases são afetadas (o usuário pode dar voz de prisão e recitar os direitos do suspeito, nada mais).
· O usuário recebe um bônus de +5 em testes de Intimidação e Diplomacia.
· O usuário pode lançar imobilizar pessoa, sem gastar PM, uma vez por dia (CD do teste de resistência 12 + modificador de Sabedoria do usuário).
· O usuário tem acesso ao talento Chamar Reforços. Caso já possua esse talento, tem direito a um uso diário adicional.
Fisicamente, o distintivo da milícia é uma espécie de disco de aço, com uma imagem da estátua de Valkaria e um par de espadas cruzadas. A milícia continua lutando para que cada patrulheiro possua seu próprio distintivo.
Preço: 10.300 TO.


Cajado da Enfeitiçar: feito de madeira retorcida e esculpida com cuidado, Este cajado permite o uso de enfeitiçar monstro e enfeitiçar pessoa. Preço 11.250 TO

Manto da Invisibilidade Este manto deixa seu usuário invisível quando o capuz é vestido. Se o usuário fizer qualquer ação ofensiva, o efeito do manto é anulado por 1 minuto. Preço 12.000 TO.

Botas da velocidade: uma vez por dia, o usuário destas botas pode bater seus saltos (uma ação livre) para receber os benefícios da magia velocidade.
Preço: 12.000 TO

Colar das Bolas de Fogo: Este colar de ouro possui cinco pequenos rubis incrustados.
Uma vez por dia, com uma ação padrão, o usuário do colar das bolas de fogo pode invocar uma bola de fogo ( CD para resistir 17). Além disso, o usuário recebe resistência a fogo 10.
Preço: 12.000

Monóculo da Águia: Este monóculo com armação de ouro e uma lente fina se encaixa magicamente sobre o olho de qualquer criatura Grande ou menor. O monóculo da águia concede visão perfeita e a capacidade de enxergar detalhes normalmente imperceptíveis a olho nu. O usuário recebe um bônus de +5 em testes de Percepção e a habilidade de classe encontrar armadilhas.
Preço: 12.500

Cinto do monge: esta simples faixa de tecido, quando amarrada na cintura, fornece grandes habilidades de combate desarmado. Um monge será considerado cinco níveis acima para determinar dano desarmado e bônus na CA. Se o usuário não é um monge, recebe o talento Ataque Desarmado Aprimorado e as habilidades dano desarmado e sexto sentido, como um monge de 5º nível.
Preço: 13.000

Gema da luminosidade: este cristal tem a aparência de um longo prisma. Com um comando, emite luz de dois tipos — luz equivalente a uma tocha, ou então um raio brilhante, que força uma criatura a até 9m a ser bem-sucedida em um teste de Fortitude (CD 14) ou ficar cega por 1d4 rodadas.
Preço: 13.000

Cajado da Fogo: feito de madeira resistente e com ponteiras de bronze, Este cajado lança bola de fogo, mãos flamejantes e muralhas de fogo.Preço 15.000 TO

Cajado da Enxame: este sinistro cajado de madeira escura possui manchas negras, semelhantes a pequenos insetos, que ocasionalmente parecem se mover. Um cajado do enxame pode lançar invocar enxame e praga de insetos.Preço 15.750 TO

Bainha das lâminas afiadas: esta bainha é feita de couro curtido e prata. Ela pode encolher ou alargar para acomodar qualquer adaga, espada ou arma similar. Três vezes por dia, com um comando, a bainha lança lâmina afiada em qualquer arma colocada em seu interior.
Preço: 16.000 TO

Botas aladas: estas botas parecem comuns mas, com um comando, asas brotam da altura dos calcanhares, permitindo que seu usuário voe com deslocamento 18m por até 1 minuto. Este poder pode ser usado três vezes por dia.
Preço: 16.000 TO

Bordão da Defesa: Este bordão +2 é feito de aço com empunhaduras de cobre. É a marca dos arcanos lutadores, muito valorizado por aqueles que passam mais tempo em masmorras do que em laboratórios, e concede CA +2 ao usuário.
Preço: 16.000

Manto de Keenn Um manto com bordados ou pinturas típicas do Deus da Guerra. Concede +1 nas jogadas de ataque e na classe de armadura do usuário. Preço 17.000 TO.

Vassoura voadora: esta vassoura é capaz de voar como se estivesse sob efeito de voo prolongado. Ela pode carregar até 200kg, mas também pode viajar sozinha a um lugar determinado pelo dono, desde que ele tenha uma boa ideia da localização do lugar. Se estiver a até 300m do dono, a vassoura vem até ele quando um comando é pronunciado.
Preço: 17.000

Cajado da  Cura: este cajado de feixe branco incrustado de runas prateadas pode lançar curar ferimentos graves, restauração menor, remover cegueira/surdez e remover doenças.Preço 17.250 TO

Escudo alado: este escudo pesado +3 é redondo, com um par de asas emplumadas. Uma vez por dia, pode lançar a magia voo em seu usuário. Preço 17.315 TO

Espada Sagrada: Clérigos de Khalmyr, o Deus da Justiça, abençoaram esta arma para que ela destrua criaturas malignas. Esta arma é uma espada longa sagrada +1. Tem as estatísticas de uma espada longa, com um bônus de +1 nas jogadas de ataque e dano. Também causa 2d6 pontos de dano extra contra criaturas Malignas e conta como uma arma Bondosa para fi ns de ultrapassar redução de dano. Seu preço é 18.015 TO. 

Tridente de comandar peixes: o usuário deste tridente +1 pode se comunicar com animais aquáticos (baleias, peixes, lulas...), como a magia falar com animais, e nunca será atacado por eles. Além disso, uma vez por dia, pode lançar enfeitiçar monstro em Massa (Vontade CD 22 anula), apenas contra animais aquáticos. Preço: 18.650 TO

Loriga segmentada da sorte: dezenas de joias decoram esta loriga segmentada +3. Uma vez por dia, o usuário pode fazer com que um ataque contra ele seja rolado novamente. A segunda rolagem deve ser aceita, mesmo sendo melhor que a primeira, afinal, nem sempre a sorte é boa. O usuário deve usar esta habilidade antes de rolar o dano. Preço 19.050 TO

Anel de invisibilidade: ao colocar este anel de prata, o usuário fica sob efeito da magia invisibilidade.
Preço: 20.000

Brincos de Marah: abençoado pela Deusa da Paz, este par de brincos brancos protege o usuário contra agressão. Qualquer criatura que tente atacá-lo deve ser bem-sucedida em um teste de Vontade (CD 15), ou perderá sua ação. Se o usuário dos brincos de Marah atacar uma criatura, o efeito dos itens é cancelado por um dia.
Preço: 20.000 TO

Anel do arcano: este anel fornece 5 PM adicionais a qualquer conjurador arcano. Os efeitos do anel só se ativam após um dia inteiro de uso.
Preço: 20.000

Cruz dos Caçadores: Um cordão simples ornamentado com uma cruz de prata. Este é o símbolo da Ordem dos Caçadores, em Sombria. É considerado um sinal de esperança por todos aqueles que tentam sobreviver no mundo da noite eterna. Qualquer personagem
de tendência Bondosa a até 9m do caçador recebe +1 em todas as jogadas de ataque e testes de resistência. Além disso, quando empunhada por um personagem capaz de canalizar energia positiva de tendência Bondosa, o item permite o uso dessa habilidade (algo normalmente impossível em Sombria), como se ele tivesse metade do seu nível, arredondado para baixo (um clérigo de 9º nível poderia canalizar energia positiva como se fosse de 4º nível).
Preço: A cruz dos caçadores não pode ser comprada, apenas oferecida a um personagem por um membro da Ordem dos Caçadores mediante sua aceitação. Em mercados ilegais, pode ser encontrada por 20.000 TO ou mais.

Capa da Invisibilidade: Estas capas vêm em diversos modelos: algumas são simples, humildes até; outras são tão luxuosas que poderiam ser usadas por reis e rainhas. Em comum, todas têm capuz. Quando o capuz é colocado sobre a cabeça (uma ação de movimento), o usuário fica invisível, como se fosse alvo da magia invisibilidade. Como pela magia, o efeito termina se o usuário fizer qualquer ação ofensiva direta contra outra criatura. Nesse caso, o item só poderá ser ativado novamente após um minuto.
Preço: 20.000

Bastão das Maravilhas: Efeito: Usando uma ação padrão, você pode apontar o bastão para uma única criatura e falar uma palavra mágica qualquer; um efeito mágico aleatório é então gerado a partir do bastão das maravilhas. O mestre pode decidir por qualquer efeito que considerar apropriado, e não há nenhuma correlação entre palavra mágica e efeito obtido (mas pode haver correlação, também). Se o mestre estiver com preguiça, pode simplesmente rolar na tabela abaixo. O bastão vem carregado com 50 PM, e cada vez que é ativado, 1 PM é gasto. Um bastão das maravilhas sem PM se torna um item mundano, e não pode ser recarregado. Preço: 20.000 TO

Manto Cinzento Este manto puído e cinzento é muito discreto e tem o poder de tornar quem o está vestindo igualmente discreto. O usuário de um manto cinzento recebe um bônus de +10 em Testes de Furtividade e o benefício do talento Aparência Inofensiva. Se já possuir este talento, a CD para resistir a seu efeito aumenta em +5.  Preço 20.000 TO.

Cinto do Campeão: Seu usuário recebe um bônus de 4 em Força e um bônus de +2 em manobras de combate (como desarmar, derrubar, etc.). Além disso, caso o usuário tenha o talento Torcida, seu bônus por ele é duplicado (+2 em jogadas de ataque, CA e testes de resistência, em vez de + 1). Preço 20.500 TO; Peso 1 Kg.

Língua flamejante: uma espada longa da explosão flamejante +1, a língua flamejante pode disparar um raio de chamas uma vez por dia. O raio exige um ataque de toque à distância, tem alcance de 30m e causa 4d6 de dano de fogo. Preço: 20.715 TO

Espada da sutileza: esta espada curta +1 tem lâmina delgada e fosca, e fornece +4 nas jogadas de ataque e dano quando utilizada para um ataque furtivo. preço 22.310 TO

Espada dos planos: esta espada longa +1 se torna +4 se usada em qualquer plano que não o Plano Material, ou contra criaturas nativas de qualquer plano que não o Plano Material. Preço: 22.315 TO

Armadura celestial: esta cota de malha +3 em prata ou ouro brilhante é tão fina e leve que pode
ser usada sob roupas normais. É considerada uma armadura leve, com bônus máximo de Destreza +8, penalidade de armadura –0 e peso 10kg. Uma vez por dia, seu usuário pode lançar voo. Preço 22.450 TO

Ladra das nove vidas: esta espada longa+2 tem o terrível poder de sugar vidas. Quando seu usuário faz um acerto crítico, pode ativar o poder da espada. Se fizer isso, a criatura atingida deve ser bem-sucedida em um teste de Fortitude (CD 20) ou morrerá. A espada pode usar seu poder nove vezes (quer ele seja
bem-sucedido ou não), quando então se torna apenas uma espada longa +2. preço: 23.057 TO

Cajado da Frio: com um diamante reluzente em cada ponta, este cajado pode lançar cone glacial, muralha de gelo e tempestade glacial. Preço 24.000 TO

Manto da Difusão: Este manto rosado com forro púrpura cria imagens estáticas semitransparentes de seu usuário quando este se movimenta. O usuário do manto da difusão fica permanentemente sob o efeito da magia nublar (20% de falha em todos os ataques contra ele). O usuário pode ativar e desativar este efeito a qualquer momento, como uma ação livre.
Preço: 24.000

Armadura das profundezas: esta armadura completa +1 é decorada com motivos de peixes e ondas. Seu usuário não sofre penalidade de armadura em testes de Atletismo para natação, pode respirar sob a água e conversar com qualquer criatura aquática que possua um idioma.Preço 24.800 TO

Bordão da Invocação: Este bordão +1 é feito de vidro, e entalhado com desenhos de inúmeras criaturas em toda a sua superfície. Enquanto um conjurador arcano estiver empunhando o bordão da invocação, todas as criaturas invocadas por ele recebem redução de dano 1 por nível da magia que as invocou. Por exemplo, o monstro invocado por invocar monstro IV recebe RD 4. Preço: 25.000

Couraça do comando: esta couraça +2 irradia uma aura de dignidade e autoridade. Seu usuário recebe +2 em testes de Carisma e perícias baseadas em Carisma. Além disso, todos os seguidores do usuário recebem +4 em testes de resistência contra medo. Preço 25.550 TO

Arco do juramento: uma vez por dia, o usuário deste arco longo +2 de madeira branca pode jurar em voz alta que irá matar seu alvo. Se fizer isso, contra o alvo jurado o arco se torna +5, suas flechas causam +2d6 de dano e seu multiplicador de crítico se torna x4. Contra todas as outras criaturas, o arco se torna uma arma mundana obra-prima. Além disso, seu usuário sofre –1 nos ataques se usar qualquer outra arma. Esses modificadores duram até o alvo jurado morrer ou sete dias se passarem, o que vier primeiro. O usuário só pode jurar outro alvo depois de matar o primeiro, ou após sete dias, o que vier primeiro.
Sempre que é disparado contra um alvo jurado, o arco do juramento grita “morte rápida a meus inimigos”, em élfico. Preço:25.600 TO

Manto do morcego: Quando ativado, o manto do morcego transforma o usuário em um morcego de tamanho mínimo. O usuário adquire voo com deslocamento de 12 m, +8 em Furtividade (pelo tamanho) e percepção às cegas. Contudo, sofre –2 de penalidade em todas as jogadas e testes sob luz direta do sol. O usuário pode ficar assim por quanto tempo quiser, e não pode ser detectado por magias ou habilidades capazes de enxergar ilusões  pois não é uma ilusão, ele é efetivamente transformado. Em todos os outros aspectos, isto é tratado como a magia metamorfose. Preço 26.000 TO; Peso 1kg.

Armadura da velocidade: uma vez por dia, como uma ação livre, o usuário desta armadura completa de mitral +1 pode lançar velocidade sobre si mesmo.Preço 26.650 TO

Elmo da telepatia: o usuário pode usar detectar pensamentos sem limite diário. Ele também pode se comunicar telepaticamente com qualquer criatura cujos pensamentos possa captar. Além disso, uma vez por dia, o usuário do elmo da telepatia pode implantar uma sugestão (como a magia, Vontade CD 17 anula) juntamente com uma mensagem telepática.
Preço: 27.000

Periapto da saúde: o usuário desta jóia verde em um cordão de prata fica imune a doenças (incluindo doenças mágicas).
Preço: 27.000

Alaúde Elétrico: Este alaúde pintado como uma explosão solar é cheio de medidores e instrumentos, como se fosse uma engenhoca goblin. É pesado e agressivo, mas seu real poder vem quando um personagem treinado em Atuação começa a dedilhar suas cordas. O alaúde elétrico é imbuído com o poder do relâmpago. A cada nota que produz, faíscas e pequenas descargas elétricas correm por suas cordas e surgem de seu braço. O som que ele produz é distorcido, áspero e muito alto. Qualquer uso de música de bardo com o alaúde elétrico tem efeito a até 27 metros do bardo (em vez dos 9m normais). Além disso, cada aliado afetado pela música de bardo produzida pelo alaúde elétrico recebe um ponto de ação, que desaparece no fim da cena. Independentemente de quantas músicas o bardo use, nenhum aliado pode receber mais de um ponto de ação por cena. Sempre que um bardo estiver usando o alaúde elétrico (produzindo música de bardo ou apenas tocando-o), deve fazer um teste de Atuação por rodada e anotar os resultados. Assim que somar 66 pontos em resultados de testes de Atuação, o bardo pode, como uma ação padrão, lançar corrente de relâmpagos. Os testes de Atuação contam para esta soma mesmo se forem usados para outro fim (como música de bardo). Preço: 27.000

Cajado da Iluminação: folheado em prata e finamente decorado com sóis, este belo cajado permite o uso de brilho, globos de luz, explosão solar e luz do dia. Preço 27.000 TO

Manual do de atributos: Uma criatura que leia o livro inteiro (o que leva uma semana) recebe um bônus de +1 a +5 em seu valor de atributo. O atributos respectivo de uma criatura pode aumentar até +5 pelo uso de livros, e este bônus não é cumulativo com aquele concedido pela magia desejo. Assim que o livro é lido, a magia desaparece de suas páginas, e ele se torna um item mundano.
Preço: 27.500, 55.000, 82.500, 110.000, 137.500

Arco Arcano: Diversas runas foram entalhadas neste arco, tornando-o um canal de poder arcano. O arco arcano é um arco longo +3. Se o usuário for um conjurador, pode gastar 1 PM como uma ação livre para receber um bônus de +2 em suas jogadas de ataque e dano com o arco por um turno. Seu preço é 28.400 TO. 


Robe das Estrelas: Diz-se que este robe totalmente escuro por fora e por dentro foi um presente de Tenebra para alguns de seus servos arcanos. O robe das estrelas revela seu poder apenas durante a noite ou em ambientes muito escuros. Nessas condições, lindas estrelas brilham sobre o fundo escuro do robe. O usuário recebe um bônus de +2 em todas as habilidades, visão no escuro e -4 de penalidade em testes de furtividade.
Preço: 29.000

Toga do Senador: Seu usuário recebe +4 na classe de armadura e +4 em testes de Diplomacia e Intuição. Além disso, todas as habilidades do personagem que fornecem um bônus direto para seus aliados (como inspirar coragem do bardo ou aura de retidão do senador) fornecem o dobro do seu bónus
normal este efeito não se aplica a magias. Por fim, a atitude de qualquer cidadão do Império de Tauron em relação ao usuário automaticamente melhora em uma categoria (um personagem que seria indiferente se torna amistoso, por exemplo). O uso de uma destas togas é terminantemente proibido a qualquer um que não seja um senador. Preço 39.200 TO; Peso 1 kg.

Voz da Rebelião: A voz da rebelião parece uma espécie de caixa ou pequeno baú adornado com cobre e outros metais baratos. Movendo os adornos na combinação certa, a caixa se abre, revelando um espelho permanentemente turvo, como um lago enevoado. O usuário pode falar próximo a esse espelho, e será ouvido por todos aqueles que ele mesmo desejar, num raio de 50 quilómetros. Caso haja outra voz da rebelião dentro desta área, seu usuário pode usá-la para propagar as palavras do primeiro, e assim por diante. É impossível detectar ou ouvir uma transmissão feita com uma voz da rebelião, mesmo com magia, se o usuário não desejar isso. Apenas desejo ou milagre são capazes de interceptar as transmissões. O usuário pode definir categorias amplas para seus ouvintes ("tOdos os náo-minotauros", "todos os devotos de Marah", "todos os prisioneiros") ou designar pessoas específicas como alvo.
Qualquer um que escute as transmissões pode parar de ouvi~las apenas desejando isso. A5 células rebeldes usam as vozes da rebelião para se comunicar, (trocando informações e planejando ataques secretos. Aldeias inteiras fecham os olhos em determinada hora da noite, para ouvir em suas cabeças as palavras de esperança de algum líder rebelde. Clérigos de deuses proibidos usam esses itens para assegurar seu rebanho de que os deuses não esqueceram Arton, e que suas almas devem continuar livres. Preço 45.000 TO; Peso Ikg.


• Chicote Escravizador: Um chicote escravizador é um chicote +2, de couro negro e 
opaco. Sempre que a arma é usada num ataque, lança a magia medo sobre o alvo (CD 16). Se for usada num ataque contra uma vitima já afetada pelo medo. lança dominar pessoa (CD 17). Um alvo que seja bem-sucedido em um teste de resistência Contra um desses efe icos torna-se imune a ele por 24 horas.
Preço 53.000 TO; Peso 1 kg.




Aura Poderosa

Lanterna da revelação: este item funciona como um lampião normal, mas sua luz revela todas as criaturas e objetos invisíveis a até 9m, como a magia purgar invisibilidade.
Preço: 30.000

Florete do Duelo: Este florete +2 tem um senso de honra digno dos duelistas mais exigentes (ou mais brigões). Caso o portador da arma seja trapaceado, traído ou simplesmente ofendido, a lâmina dela brilha com uma luz tênue. Nesse momento, o portador do florete pode desafiar seu ofensor para um duelo. Enquanto estiver duelando contra seu ofensor, o bônus do florete torna-se igual ao bônus de Carisma do usuário (mínimo +2). Um usuário com Carisma 22, por exemplo, irá atacar com um florete +6! Este bônus só é válido contra o alvo do desafio; contra todas as outras criaturas, o florete do duelo continua sendo uma arma +2. O bônus dura até o fim do duelo, independentemente
de quem vencer, ou por até um mês após a ofensa inicial (o florete é esquentado, mas não é rancoroso).
Preço: 30.000 TO.

Medalhão de Lena: quando seu usuário é reduzido a 0 ou menos PV, esta joia gera uma emissão de cura que restaura 100 PV. Este poder só se ativa uma vez por dia.
Preço: 30.000 TO

Arco Energético: Este poderoso arco foi presenteado a um jovem ranger vindo de outro mundo, muito tempo atrás. Infelizmente, o bravo garoto, líder de um bando de aventureiros, decidiu voltar para seu mundo natal, uma terra árida, sem emoção e desprovida de magia, sendo alvo de chacota dos principais heróis artonianos desde então. Diz-se que seu arco continua por aí em algum lugar. O arco energético conta como um arco longo +3, mas parece apenas um pedaço de um arco — não tem corda, e não aceita flechas de nenhum tipo. Contudo, uma vez empunhado, quando o usuário faz o gesto como se puxasse a corda inexistente, o arco cria uma corda e uma flecha de energia. O arco é dourado, assim como a energia que emite. O arco energético é capaz de ler as intenções do usuário, produzindo diferentes tipos de flechas energéticas à escolha dele.

Flecha normal: uma flecha feita de energia que causa 3d8 pontos de dano de essência.

Flecha piedosa: uma flecha de energia que causa 4d8 pontos de dano não letal. Segundo histórias, o usuário original do arco nunca costumava matar seus inimigos.

Flecha-rede: não causa dano, mas prende todas as criaturas em um raio de 3m com uma rede feita de energia. As criaturas podem atravessar a rede sendo bem-sucedidas num teste de Força contra CD 20, mas sofrem 3d8 pontos de dano. A rede dura por 10 minutos.

Flecha explosiva: causa 2d8 pontos de dano de fogo no alvo e em todas as criaturas a até 3m (essas têm direito a um teste de Reflexos contra CD 20 para reduzir o dano à metade).

Flecha-amarra: enrola-se ao redor do alvo e de até três criaturas Médias adjacentes a ele. Não causa dano, mas prende os braços de todas as criaturas atingidas, impedindo que façam quaisquer ações com os braços a menos que pelo menos uma delas seja bem-sucedida em um teste de Força contra CD 22 (quebrando a amarra e libertando todas). A amarra dura por 10 minutos.
Preço: 35.000


• Cajado da Transmutação: feito de madeira petrificada, este cajado permite
o uso de alterar-se, desintegrar, metamorfose, metamorfose tórrida,
piscar e recuo acelerado. 35.250 TO

• Cajado da Necromancia: feito de ébano, e esculpido com imagens macabras
de ossos e crânios, este cajado permite o uso de causar medo,
círculo da morte, drenar temporário, imobilizar mortos-vivos, onda de
fadiga e toque do carniçal. 35.250 TO

• Cajado da Abjuração: esculpido do cerne de um carvalho antigo, este cajado pode lançar dissipar magia, escudo arcano, expulsão, globo de invulnerabilidade menor, repulsão e resistência a energia. 35.250 TO

• Cajado da Adivinhação: feito de um galho flexível de salgueiro com
ponta dupla, este cajado lança detectar portas secretas, idiomas, localizar
criatura, localizar objetos, olhos observadores e visão da verdade. 35.250 TO

• Cajado da Evocação: este bastão de madeira escura e lisa, reforçado com
ponteiras de metal, pode lançar bola de fogo, corrente de relâmpagos,
despedaçar, mísseis mágicos, muralhas de energia e tempestade glacial. 35.250 TO

• Cajado da Ilusão: esculpido em forma de espiral, este cajado pode ser
usado para lançar despistar, imagem maior, imagem persistente, padrão
prismático, reflexos e transformação momentânea. 35.250 TO

• Cajado do Encantamento: feito de macieira e com um cristal transparente
em sua ponta, este cajado pode lançar desespero esmagador,
névoa mental, riso histérico, sono, sugestão e sugestão em massa. 35.250 TO

Bordão da Evocação: Este bordão +3 é feito de ferro escuro. Enquanto um conjurador arcano estiver empunhando o bordão da evocação, todas as suas magias que causam dano têm seu dano aumentado em + 1 dado do mesmo tipo.
Preço: 38.000

• Maça do terror: esta maça +2 é feita com um osso e um crânio.
Como uma ação livre, seu usuário adquire uma aparência assustadora,
que deixa todas as criaturas vivas a até 9m apavoradas
por 1 minuto (Vontade CD 16 anula). Este poder pode ser usado
três vezes por dia. Preço: 38.552 TO

• Cajado da Florestas: com a aparência de um simples galho de árvore
natural, não esculpido, este cajado pode lançar animar plantas, enfeitiçar
animal, falar com animais, invocar monstro VI, muralha de
espinhos e pele de árvore. 39.750 TO

Anel de movimentação livre: este anel de ouro mantém seu usuário sob efeito permanente da magia movimentação livre. 
Preço: 40.000

Anel Anti-Veneno: Estes raros anéis são muito procurados por aventureiros que pretendem explorar as imensidões inóspitas e venenosas de Venomia. Usando o anel, o usuário é imune a qualquer veneno, normal ou mágico. Há rumores de que alguns destes anéis são amaldiçoados por servos do Deus da Traição e parecem funcionar normalmente, mas um único típico de veneno é capaz de vencer sua imunidade, deixando seus usuários vulneráveis.
Preço: 40.000 TO.

• Sorvedouro de vidas: uma criatura atingida por este machado
grande +1 sofre dois níveis negativos. Um dia após sofrer os
níveis negativos, a criatura deve ser bem-sucedida em um teste de
Fortitude (CD 16) para cada nível negativo, ou perderá um nível
permanentemente. Cada vez que o sorvedouro de vidas causa dano,
seu usuário também sofre um nível negativo. Por este motivo, esta
arma é normalmente usada por construtos e mortos-vivos, que não
sofrem sua desvantagem. Preço: 40.320 TO

Bola de cristal: esta esfera de cristal com cerca de 15cm de diâmetro pode ser usada para enxergar qualquer lugar ou pessoa, como a magia vidência. 
Preço: 42.000 TO

Arco de Luz: Este arco não usa flechas. Em vez disso, dispara rajadas de luz. O arco de luz é um arco longo +4. Seus disparos causam 2d6+4 pontos de dano de essência e causam dano dobrado contra mortos-vivos. Seu preço é 43.900 TO.

Orbe das tempestades: esta esfera de vidro com 20cm de diâmetro pode ser usada uma vez por dia para lançar controlar o clima, e uma vez por mês para lançar tempestade da vingança. O usuário do orbe das tempestades fica permanentemente protegido por suportar elementos.
Preço: 48.000 TO

• Escudo absorvente: este escudo pesado +1 é completamente
negro, e parece absorver a luz. Uma vez por dia, como uma ação
livre, pode lançar desintegrar (Fortitude CD 19 parcial) contra uma
criatura atingida por um ataque bem-sucedido do escudo. 50.315 TO

• Sabre da perfuração: três vezes por dia, este sabre do sangramento
+2 pode ser usado para fazer um ataque de toque que causa
1d6 pontos de dano de Constituição. Este poder não afeta criaturas
imunes a acertos críticos. Preço: 50.320 TO

• Lâmina do sol: esta espada bastarda +2 tem a lâmina dourada e
brilhante. Contra criaturas Malignas, seu bônus se torna +4, e contra
mortos-vivos ela causa dano dobrado. O portador de uma lâmina do
sol pode brandi-la acima da cabeça (uma ação padrão) para que ela
irradie luz brilhante como o sol a até 18m, durante 1 minuto. Preço: 50.335 TO

• Armadura demoníaca: esta armadura completa +4 é forjada
para fazer com que seu usuário pareça um demônio — o elmo
tem o formato de uma cabeça demoníaca com chifres, e o usuário
enxerga através da boca aberta e repleta de dentes. As manoplas
da armadura permitem que o usuário realize dois ataques de garra
(1d10, crítico x2, corte), que contam como armas +1 e causam o
efeito da magia envenenamento (Fortitude CD 16 anula) em qualquer
criatura atingida. 52.410 TO

• Estigma do gelo: esta espada grande congelante +3 fornece resistência
a fogo 10. Além disso, como uma ação padrão, seu usuário
pode dissipar qualquer magia de fogo, como se lançasse dissipar
magia maior (bônus de conjurador +14). preço: 54.475 TO

• Cajado da Passagem: a aparência singela deste cajado — um bastão de
madeira com uma única ponteira de metal — esconde seu grande
poder. Um cajado da passagem pode lançar criar passagens, passagem
invisível, porta dimensional, projeção astral e teletransporte maior. 57.000 TO

• Gema Antimagia: Qualquer conjurador
a até 6m de uma gema antimagia que lance uma magia deve
realizar um teste de Identificar Magia (CD 25 + nível da magia). Se
falhar, a magia não funciona (mas os PM são gastos mesmo assim).
Incrustada num estandarte da legião, a gema antimagia pro~
rege todos os legionários. Qualquer conjurador que lance uma
magia ofensiva cujo alvo sejam os legionários ou cuja área esteja
ocupada por eles deve fazer o teste de Identificar Magia para não
perder a magia.
Preço 60.000 TO; Peso 0,5kg.

Tapete voador: com um comando, este tapete levanta voo, como se estivesse sob efeito de voo prolongado. Alguém que conheça a palavra de comando pode controlar o voo do tapete mesmo que não esteja sobre ele, desde que sua voz o alcance. Um tapete normal tem 3m x 3m, e pode carregar até 400kg, mas existem tapetes menores e maiores.
Preço: 60.000

Caveira negra: esta pedra de ébano esculpida em formato de crânio gera permanentemente o efeito da magia conspurcar, onde quer que esteja, com o próprio crânio como ponto de origem.
Preço: 60.000

• Martelo de arremesso anão: normalmente um martelo de
guerra +2, nas mãos de um anão sua distância aumenta para 9m,
seu bônus aumenta em +1 (para um total +3) e ela adquire o poder
retorno. Além disso, causa +1d8 de dano, ou +2d8 de dano se usada
contra criaturas Grandes ou maiores. Preço 60.312 TO

Elmo do teletransporte: o usuário deste item pode lançar teletransporte três vezes por dia.
Preço: 73.500

Anel de telecinesia: quando ativado, este anel permite que seu usuário use a magia telecinesia.
Preço: 75.000 TO

Robe do arquimago: este traje pode ser branco (1 e 2 em 1d6; tendência Bondosa), cinza (3 e 4; tendência Neutra) ou negro (5 e 6; tendência Maligna). Se o usuário é um conjurador da tendência certa, recebe +5 na CA e +4 em testes de resistência. Além disso, a dificuldade para resistir às suas magias aumenta em CD+1.
Preço: 75.000

Robe do Arco-Íris: Este robe extravagante é colorido com as cores do arco-íris em um padrão de linhas verticais. É usado tanto por pessoas que defendem a liberdade e o amor incondicional, quanto por pessoas com senso de moda vanguardista. Como uma ação padrão, o usuário do robe do arco-íris pode lançar através de suas mangas compridas
as magias brilho, leque cromático, muralha prismática, padrão cintilante, padrão prismático, pirotecnia (apenas fogos de artifício) e rajada prismática. Ele pode usar três magias dessa lista por dia.
Preço: 81.000 TO.

Anel de regeneração: este anel de ouro branco fornece cura acelerada 1. Caso seu usuário perca um membro, um órgão ou outra parte do corpo, ela regenera como pela magia regeneração. Os efeitos do anel só se ativam após um dia de uso.
Preço: 90.000 TO

• Estandarte da Legião: Um oficial que carregar um estandarte da legião ou estiver
adjacente a ele pode dar ordens em voz normal, e será ouvido e
compreendido por todos os soldados sob o seu comando que possam
enxergar o estandarte.
Além disso, um conjurador arcano ou divino pode lançar
magias sobre o estandarte da legião. Se o fizer, as magias assim con ~
juradas afetam todos os soldados da legião capazes de enxergar o
estandarte. Por exemplo, é possível lançar força do touro sobre o
estandarte, e afetar dezenas e dezenas de legionários.
Ambos os poderes só funcionam com soldados que pertençam
à legião que possui o estandarte. Aliados civis ou de outras legiões,
mesmo lutando ao lado desses legionários, não são afetados.
Caso um bando de aventureiros obtenha um destes itens (em geral
através de roubo), é necessário definir uma hierarquia militar dentro
do grupo, com um líder inquestionável, e fazer juramentos de
serviço, lealdade e obediência para que seus poderes funcionem.
Preço 91.000TO; Peso 5kg.

Espelho da oposição: este item lembra um espelho normal com cerca de 1,2m de comprimento e 1,5m de altura. Pode ser fixado em qualquer superfície, e ativado (ou desativado) com um comando. Quando uma criatura observa seu reflexo, o espelho
cria uma cópia sua, com as mesmas habilidades e equipamento. A duplicata
ataca a criatura original; quando um dos dois é derrotado, a duplicata e seus itens desaparecem.
Preço: 92.000

Anel de refletir magias: três vezes por dia, este aro de platina pode ser ativado para refletir os próximos nove níveis de magia lançados sobre seu usuário (como se ele estivesse sob efeito de reverter magias).
Preço: 98.280

•Anel Arcano Maior
Como o anel do arcano, mas fornece 20 PM adicionais.
Preço 100.000 TO.

• Cajado do Poder: um cajado do poder tem cabo reto e liso, com uma joia
cintilante na ponta, e pode lançar bola de fogo, chama contínua,
cone glacial, globo de invulnerabilidade, imobilizar monstro, levitação,
mísseis mágicos, muralha de energia, raio do enfraquecimento e
relâmpago. Ele também pode ser usado como um bordão +2, e fornece
+2 na classe de armadura e testes de resistência. Com o gasto
de 1 PM, um ataque do cajado causa dano dobrado.
Um cajado do poder pode ser usado para um golpe de retaliação.
Para isso, seu usuário deve quebrá-lo intencionalmente (uma
ação padrão, não é necessário teste de Força). Todas as criaturas
a até 9m sofrem 1d6 de dano por cada PM restante no cajado
(máximo 50d6); um teste de Refl exos (CD 17) reduz o dano à
metade. O usuário tem 50% de ser transportado para outro plano
de existência  mas, se isso não acontecer, será instantaneamente
destruído pela explosão mágica.
Um cajado do poder sem PM continua sendo um bordão +2,
mas não pode mais ser usado para um golpe de retaliação. 100.750 TO

• Escudo do sol: este escudo pesado da resistência ao fogo maior
+4 é forjado na forma de um sol estilizado. Uma vez por dia, ele
pode gerar uma luz brilhante e quente, que causa 6d6 pontos de
dano em cone de 9m (Reflexos CD 22 reduz à metade). Mortos-vivos e espíritos Malignos sofrem 16d6 de dano. 107.400 TO

• Vingadora sagrada: esta espada longa +2 revela todo o seu
poder apenas quando empunhada por um paladino. Nessa situação,
se torna uma espada longa sagrada +5, que fornece +4 em
testes de resistência contra magia ao usuário e seus aliados a até
3m. Além disso, permite que o usuário lance dissipar magia maior
(usando o bônus de Vontade do paladino) como uma ação padrão,
sem limite de usos diários. Preço: 120.630 TO

• Cajado da Vida: feito de carvalho com ponteiras de ouro, este cajado
pode lançar cura completa e reviver os mortos. 123.250 TO

•Lâmina da sorte: esta espada curta +2 é cravejada de pequenas
joias. Ela fornece +2 aos testes de resistência de seu usuário e,
uma vez por dia, permite que ele role novamente qualquer jogada
ou teste que tenha recém realizado. O usuário deve ficar com
a segunda rolagem, mesmo sendo pior que a primeira. Por fim,
A lâmina da sorte possui três desejos que seu portador pode usar.
Quando os desejos terminam, a arma mantém seus outros poderes. Preço: 142.960 TO

Bordão do Tempo: Este bordão +4 é feito de madeira e tem aparência simples e comum, mas possui grande poder. Uma vez por dia, o usuário do bordão do tempo pode gastar uma ação completa para conceder o poder do tempo a seus aliados. 1d6 aliados a até 9m podem usar uma ação padrão no turno do usuário, além de ter suas ações normais durante a rodada.
Preço: 150.000

Diamante do caos: esta gema brilhante, do tamanho de um punho humano, não é lapidada. Ela concede a seu usuário a capacidade de lançar as magias círculo mágico contra a ordem, confusão menor, manto do caos e palavra do caos, cada uma 1d4 vezes por dia. Os diamantes do caos foram criados pelo deus Nimb, e espalhados por toda Arton para promover o caos. Ou não.
Preço: 160.000

•Gema Bruta: O usuário de uma gema bruta recebe o
dobro dos PM ganhos por nível (por exemplo, 2 + 2 x mod.
Int no 1º nível, e 6 PM por nível adicional, para um mago).
Aura poderosa; Criar Item Maravilhoso, desejo; Preço
200.000 TO.

Espelho do aprisionamento: este item de cristal, com 1,5m de altura e moldura de metal, pode ser fixado em qualquer superfície e ativado (ou desativado) com um comando. Qualquer criatura que se aproxime a menos de 9m do espelho do aprisionamento e enxergue seu próprio reflexo deve ser bem-sucedida em um teste de Reflexos (CD 23) ou será transportada mágicamente para um espaço extra-dimensional dentro do espelho, ficando presa ali. O tamanho da criatura não importa mas construtos, mortos-vivos e objetos não podem ser transportados. Com um comando, é possível conversar com uma criatura presa no espelho, ou libertá-la. Se o espelho for quebrado, todas as criaturas dentro dele são libertadas. 
Preço: 200.000

Espada Vorpal: Esta temível espada é capaz de decapitar criaturas com um único golpe. Em termos de regras, é uma espada longa vorpal +5. Seu preço é 200.015 TO. Existem poucos exemplares desta arma em Arton, e — desnecessário dizer — só é possível encontrar um deles à venda na coleção de um poderoso mago comerciante, como Lorde Vectorius ou Salini Alan. 


• A Adaga da Coragem de Vallen: A Adaga da
Coragem de Vallen
A adaga da coragem de Vallen é uma adaga +3 imbuída
com o ímpeto, teimosia e autoconfi ança do aventureiro. Essa
valentia excessiva concede ao usuário a capacidade de aceitar
uma penalidade em sua classe de armadura para causar mais
dano ou receber outro benefício. Para cada –1 na classe de armadura
(até um máximo de –5), o usuário pode causar +1d6
de dano ou aumentar a margem de ameaça ou o multiplicador
de acerto crítico em 1. Assim, por exemplo, um usuário que
aceite –4 em sua classe de armadura pode causar +2d6 de dano,
com margem 18 a 20 (em vez de 19 a 20) e multiplicador x3
(em vez de x2). As penalidades e bônus duram até o próximo
turno do usuário.
Qualquer um que utilize ou mesmo carregue a adaga torna-
se mais impulsivo, mais propenso a entrar em lutas, mesmo
que esteja em clara desvantagem. Além disso, tem vagas impressões
de estar sendo empurrado por algum tipo de personalidade
forte e aventuresca (o próprio Vallen). Não são visões
claras, mas algo indefinível e sutil.(sem preço)

•A Manopla da Juventude de Vallen:
Ajusta-se perfeitamente à mão esquerda
de qualquer usuário entre tamanho Pequeno e Grande,
conferindo-lhe uma aparência um pouco agigantada.
O usuário da manopla não sofre quaisquer efeitos de idade
enquanto usá-la. Nem mesmo habilidades especiais de criaturas
capazes de envelhecer seus inimigos afetam-no. Contudo,
este poder funciona apenas enquanto a manopla permanecer
na mão do usuário. Caso seja tirada, quaisquer efeitos de idade
que tenham sido evitados atingem-no imediatamente — inclusive
a morte! Assim, um usuário que já teria morrido de
velhice não pode tirá-la nunca. Caso o usuário já tenha sofrido
qualquer penalidade por idade antes de colocar a manopla,
essas penalidades somem, mas quaisquer bônus permanecem.
Além disso, o vigor fornecido pela manopla concede um bônus
de +4 na Força, Destreza e Constituição do usuário.
A presença de Vallen não é tão forte na manopla quanto
nos outros itens. O usuário torna-se repleto de uma sensação
de bem-estar e ânimo, além de uma certa inquietude e curiosidade.
Experimenta tênues impressões de pertencer a um bando
de jovens metidos em aventuras.(sem preço)

•O Escudo do Amor de Vallen:
O escudo do amor de Vallen é talvez o item mais poderoso
do conjunto, rivalizando apenas com o anel feito de sua
felicidade. É um escudo pesado apanhador de flechas da fortifi -
cação leve +3. Contudo, seu poder mais impressionante surge
quando o usuário decide proteger outra criatura. Com uma
ação de movimento, o usuário pode abrir mão de todos os
bônus do escudo e concedê-los a uma criatura adjacente. Para
essa criatura, ele se torna então um escudo pesado da fortificação moderada +5. O efeito apanhador de flechas continua
funcionando para o usuário (ou seja, os projéteis são atraídos
para o usuário, não para a criatura que ele está protegendo).
Essa proteção dura até o início do próximo turno do usuário
(quando então ele pode usar outra ação de movimento para
renová-la, ou trocá-la para outro alvo), mas acaba se o usuário
e o aliado não estiverem mais adjacentes.

A presença de Vallen Allond é sentida fortemente pelo
usuário. Embora não seja a fonte do poder do escudo, Vallen
é o foco do sentimento que originou-o. O usuário sente forte
afeição por qualquer um que lembre Vallen Allond de alguma
forma (mesmo que nunca tenha ouvido falar do aventureiro).
Em geral, escolhe uma ou duas pessoas para focalizar o sentimento.
Por exemplo, pode se apegar muito (com amor ou
amizade) a um guerreiro, ao líder de um grupo de aventureiros
ou mesmo a alguém com nome parecido.(sem preço)

• Armadura de Crânio Negro
A armadura de Crânio Negro é uma armadura completa da
fortificação moderada +5, que parece se mover sozinha (suas
placas deslizam para manter o usuário protegido e defendê-lo).
Apesar de seu peso e solidez, não atrapalha os movimentos,
permitindo grandes saltos e acrobacias em meio ao combate:
seu usuário conta como se estivesse sem armadura.
Contudo, por ser feita a partir das memórias de uma artoniana,
a armadura tem um efeito colateral: bombardeia o
usuário com impressões da vida de Ellisa Thorn. Molda o estilo
de luta e até mesmo parte do comportamento do usuário para
refletir os membros do Esquadrão do Inferno. Por exemplo,
Crânio Negro luta com duas espadas (como Vallen Allond),
rastreia (como a própria Ellisa ou Andilla Dente-de-Ferro) e
repete “não há morte” (como Gregor Vahn). (sem preço)

• Baú do Açougueiro: Qualquer item ou criatura no interior do baú do açougueiro
torna-se imune a detecção de tendência. Apenas criaturas
Pequenas ou menores podem entrar no baú, mas dentro dele
fi cam imperceptíveis a efeitos como detectar o mal e similares.
Além disso, qualquer efeito que afete tendências originado de
dentro do baú permite que as criaturas afetadas façam dois testes
de resistência, escolhendo o melhor resultado. Por exemplo:
guardada dentro do baú do açougueiro, Rhumnam continua
enviando a magia pesadelo a um portador indigno, mas o alvo
tem direito a dois testes de Vontade por noite.(sem preço)

• Escudo de Azgher
O escudo de Azgher é um belíssimo escudo pesado +3 feito de
ouro, com a face de Azgher esculpida em sua superfície. Sua aparência
marcante chama a atenção, e destaca-se em qualquer campo
de batalha. Contudo, seu verdadeiro poder é revelar a verdade.
Ao comando do usuário, o escudo de Azgher emite um
cone de luz de 12 metros, que revela quaisquer ilusões ou efeitos
de mudança de forma, como forma selvagem, metamorfose
e outros. Todos que estiverem olhando para a área afetada pelo
cone enxergam a aparência real das coisas, não apenas o usuário
do escudo. Contudo, o escudo não dissipa as magias e efeitos,
apenas revela a verdade. Assim, o alvo de uma metamorfose ainda
manterá as estatísticas de sua forma modificada, mas será
visto como sua forma original. O escudo de Azgher também
revela disfarces e mentiras (o alvo fica cercado por uma névoa
leitosa), mortos-vivos (cercados por uma aura pálida) e quaisquer
espíritos, criaturas etéreas e outros seres invisíveis na área.
Pode ser desconcertante enxergar algo sob o efeito do escudo
de Azgher (por exemplo, um humano sob o efeito de forma
selvagem atacando com garras que não parecem possuir). O objetivo
de Azgher é exatamente esse: revelar essas metamorfoses
e truques como as tolices que são. Alguns efeitos poderosos
(como a aparência humana do albino) podem ser imunes aos
poderes do escudo, mas isso é extremamente raro. O efeito do
cone dura 10 minutos, e pode ser usado uma vez por dia.(sem preço)

• Sabre Vampírico: O sabre vampírico é um florete de matéria vermelha +3.
Quando perfura um adversário, prende-se a seu corpo, causando
os efeitos da manobra agarrar. Além disso, começa a beber seu
sangue, causando 1 ponto de dano na Constituição. Esse dano
é cumulativo por rodada em que a vítima continuar agarrada
(ou seja, 2 pontos de dano de Constituição na segunda rodada,
3 pontos na terceira, e assim por diante). O sabre vampírico não
pode ser usado para atacar enquanto estiver agarrado a alguém.
O sabre vampírico pode reter sangue equivalente a até 15
pontos de Constituição em suas bolsas. Ao atingir esse limite, a
arma não é mais capaz de beber (não pode mais provocar dano
de Constituição). O usuário deve soltar a vítima e gastar uma
ação padrão para “esvaziar” as bolsas.(sem preço)

• Wakizashi da Morte: Qualquer criatura inteligente que veja seu refl exo na lâmina
da wakizashi irá enxergar o momento de sua própria morte, vendo
a si mesma “de fora”. Um personagem que enxergue sua morte
tem um bônus de +2 em CA e testes de resistência em qualquer
combate antes do momento fatídico. Em compensação, no
encontro que levará à sua morte, sofre –4 em CA e testes de
resistência, e todos os acertos contra ele são considerados críticos.
Tudo conspira para que a profecia se cumpra. No caso de mortes
que não envolvam combate, esses bônus e penalidades são
adaptados. Por exemplo, um personagem marcado para morrer
de doença recebe +4 em testes de Fortitude, mas falha automaticamente
ao entrar em contato com a peste que irá matá-lo.
Felizmente, nem sempre a previsão é exata. Caso o personagem
consiga destruir defi nitivamente a causa de sua morte
(matando um inimigo, erradicando uma doença, etc.), consegue
mudar o futuro, e todos os bônus e penalidades somem.
Contudo, muitas vezes isso é ilusório — quando chega o momento,
descobre-se que o inimigo morto tinha um irmão gêmeo,
ou que a doença “erradicada” voltou mais forte.
O mestre determina as circunstâncias da morte de qualquer
personagem que veja seu refl exo na lâmina.(sem preço)



Aura Avassaladora

• Toga do Reitor: Seu usuário
recebe +10 na classe de armadura, +5 nos testes de resistência
e resistência 10 a todos os tipos de energia (ácido, eletricidade,
fogo, frio e sônico). Além disso, sempre que é alvo de uma magia
de até 3º nível, não sofre nenhum efeito; em vez disso, recebe
um número de PM igual ao custo da magia. Esses PM podem
ser usados para memorizar uma magia instantaneamente.

• Armadura Risonha: A Armadura Risonha é uma armadura completa +5. Não restringe
os movimentos de seu usuário, que conta como se não estivesse
usando armadura e fi ca sob efeito de movimentação livre.
Além disso, gera um efeito de caos e aleatoriedade, que força todas
as criaturas Leais e Caóticas a até 9m a rolar duas vezes cada
teste ou jogada. Criaturas Leais usam o pior resultado; criaturas
Caóticas, o melhor. Criaturas neutras não são afetadas.
A armadura às vezes é acompanhada por um escudo pesado
da reflexão +4. A habilidade reflexão pode ser usada uma vez
por rodada (em vez de apenas uma vez por dia, como normal).
Ao contrário do que alguns pensam, a armadura não afeta a
mente ou as ações de seu usuário. Apenas torna o caos atraente

• Espada-Deus: A espada-deus conta como uma espada longa, mas fornece
+6 nas jogadas de ataque, permite um ataque adicional
por turno sem penalidades, causa 2d12+6 pontos de dano e
tem margem de ameaça 17-20. Alguns estudiosos e armeiros
dizem que seu fio é tão fino que pode cortar qualquer coisa, e
em todos os Planos de existência simultaneamente. Por causa
disso, a espada-deus ultrapassa qualquer redução de dano (até
mesmo a que não pode ser vencida por nenhum material ou
propriedade) e atinge criaturas incorpóreas (como se possuísse
o poder toque espectral). Seus acertos críticos afetam até mesmo
criaturas imunes a acertos críticos. A espada-deus nunca pode
ser quebrada e nunca precisa fazer testes de resistência.
A espada-deus é um item inteligente (veja abaixo) Caótico e
Neutro, com Int 14, Sab 19, Car 22 e Ego 22. Possui percepção
às cegas 36m e se comunica por empatia, sempre projetando
vontade de lutar. Quando há chance de combate, ela estremece e
vibra na mão do usuário, ou mesmo na bainha. Apenas criaturas
com pelo menos 15 níveis em classes com bônus base de ataque
máximo (guerreiro, bárbaro, paladino, ranger...) podem empunhar
a espada-deus. Os demais são capazes de segurá-la, mas erram
todos os ataques com a arma. Quando está aguardando seu
próximo usuário, a espada-deus não permite que criaturas que
não cumpram esses pré-requisitos tirem-na de onde está.
Fisicamente, a espada-deus é surpreendentemente simples.

•Rhumnam, Espada-Pistola: É uma espada grande +5 inteligente. É capaz de falar
todos os idiomas de Arton, mas dirige-se apenas a pessoas de tendência Bondosa. Aí começam as diferenças: após a modifi
cação, a espada pode se dirigir a indivíduos de tendência
Caótica. Ainda exala a forte moralidade, como antes: estando
próximo a ela, qualquer um tem noção exata das maldades e
injustiças que já cometeu, lembra-se a todo instante do sofrimento
que causou. Quando usada por uma pessoa indigna (ou
seja, qualquer um que não se encaixe nas tendências exigidas
ou que seja culpado de crimes graves, segundo o julgamento
da própria espada), Rhumnam é apenas uma espada grande
+1, que provoca terríveis pesadelos (como a magia pesadelo)
no mortal que ousa portá-la. Durante esses pesadelos, a pessoa
lembra-se de quem prejudicou com seus atos. Alguns criminosos
nem mesmo conseguem dormir perto de Rhumnam.
Empunhada por alguém digno (de tendência Bondosa, mas
não necessariamente Leal, ou com comportamento perfeito),
Rhumnam, com um ataque bem-sucedido, destrói automaticamente
qualquer criatura de tendência Maligna ou culpada de
crimes graves (não mais crimes de qualquer tipo). Contra alvos
inocentes, a Espada da Justiça não causa dano. Ela concede ao
portador imunidade total a magias arcanas, mas a imunidade
contra ataques realizados por mortos-vivos
desapareceu (afi nal, essas criaturas são algumas
das preferidas de Tenebra).
A arma de pólvora embutida em Rhumnam
é uma pistola caçadora +5. Suas restrições
são as mesmas da espada: nas mãos de
um usuário que não seja Bondoso, é apenas
uma pistola +1. Um tiro bem-sucedido também
destrói qualquer criatura de tendência
Maligna. Usuários que saibam usar pistolas
podem golpear com a lâmina e apertar o gatilho
ao mesmo tempo, com uma ação padrão.
Nesse caso, fazem duas jogadas de ataque
— uma para a espada, outra para a pistola
— com –2 de penalidade em ambas. Os dois
danos são calculados normalmente. Obviamente,
se uma criatura Maligna for destruída
pelo golpe ou pelo tiro, não poderá ser mais
destruída pelo segundo ataque…

•Tomo da Criação Mágica: Qualquer mago pode estudar o tomo da criação mágica.
É necessário um teste estendido de Identificar Magia (CD 20,
12 sucessos exigidos, um teste por dia). Em caso de sucesso,
o mago vê que, subitamente, os escritos passam a fazer sentido.
O que antes parecia obscuro torna-se claro — e, mais do
que isso, torna-se exatamente o que ele precisa. O mago então
é capaz de simular qualquer magia (como pela magia desejo),
mesmo que normalmente não seja capaz de lançá-la, ou então
criar uma magia completamente nova. Durante este primeiro
uso, o tomo detecta e interpreta as necessidades do usuário,
oferecendo uma magia adequada.
Usos posteriores exigem apenas 9 sucessos, e o usuário
pode pesquisar a magia que desejar. Caso deseje criar uma magia
nova, o usuário pode combinar os efeitos de até três magias
arcanas ou divinas, desde que a soma de seus níveis não ultrapasse
10. Por exemplo: um mago deseja ver seus inimigos surdos
e em agonia. Então pesquisa e cria a magia urro de morte,
que produz um grito horrendo a partir da garganta do usuário,
combinando grito (arcana 4) e drenar temporário (arcana 4).
Com a permissão do mestre, essas novas magias podem,
em vez de combinar magias já existentes, aumentar o efeito
de outra magia. Rufus usou viagem planar para levar o albino
até a Anti Criação — mas uma versão que alcançava esse outro
universo, não um mero Plano de existência. Nenhuma magia
lançada a partir do tomo exige componentes materiais.
No entanto, como já foi dito, o tomo é perigoso. Ao estudar
uma magia nova, o usuário deve concentrar-se profundamente
em seu objetivo. A energia mágica do tomo traz esse objetivo
mais para perto do mago — muitas vezes com resultados desastrosos.
O usuário deve, ao fi nal do estudo, fazer um teste de
Vontade (CD 20 + 2 para cada uso do tomo além do primeiro).
Em caso de sucesso, nada acontece. Em caso de falha, é afetado
permanentemente por parte do efeito da magia que estava pesquisando.
Por exemplo, o mago que criou urro de morte poderia
ficar surdo para sempre. Rufus foi afetado pela loucura e corrupção
da Tormenta ao criar um portal para a Anti Criação.
A magia criada fica nas páginas do tomo até ser lançada.
Depois disso, o texto volta a parecer incongruente.

• O Desbravador
Antes de ser aprisionada, durante suas andanças por Arton
e pelos planos, Valkaria adotava a aparência de uma aventureira
armada com um mangual, o Desbravador. Quando foi salva de seu
cativeiro, a Deusa da Ambição deu o Desbravador como recompensa
a seus Libertadores. Desde então, a arma passou de mãos em
mãos, algumas vezes presenteada, outras roubada. Não há como
saber onde está agora. Talvez nas profundezas de uma masmorra,
ao lado do corpo de um aventureiro ambicioso demais...
O Desbravador é um mangual do toque espectral +6. Refl etindo
o caráter inconstante de sua mestra, ele pode se transformar em
numerosas outras armas, e possui diversos poderes. Todos podem
ser usados livremente, sem limite de utilizações diárias.
• Armas. Ao acionar um botão (uma ação de movimento), o
usuário pode transformar o Desbravador em qualquer destas armas:
espada longa fl amejante +6, machado de batalha afi ado +6, martelo
de guerra congelante +6 ou lança defensora +6.
• Anticriatura. Em todas as suas formas, o Desbravador é
considerado uma arma anticriaturas contra todos os tipos de criatura,
exceto humanos ou devotos de Valkaria.
• Dissipar Magia. O Desbravador pode lançar dissipar magia
(nível de conjurador 20) como uma ação padrão.
• Imobilizar Pessoas. Em todas as suas formas, o Desbravador
pode ser usado para realizar um ataque de toque que paralisa a
criatura atingida por 1 minuto. Um teste de Fortitude (CD 20)
anula o efeito.
• Medo. O Desbravador pode lançar medo (Vontade CD 18
anula) como uma ação padrão.

• Holy Avenger
A arma mais poderosa de Arton foi criada pelo deus Sszzaas
através de um plano extremamente intrincado, que envolveu enganar
todos os outros deuses do Panteão e forçá-los a depositar seu
poder nesta espada.
A Holy Avenger é uma espada bastarda +10, que provoca 4d6
pontos de dano adicional e fornece +8 em testes de resistência contra
magia. Além disso, pode lançar dissipar magia maior (nível de
conjurador 20) como uma ação padrão.
Três vezes por dia, a Holy Avenger pode ser usada para desferir
um ataque de destruição total. Caso seja atingida por um ataque de
toque feito com a espada, qualquer criatura é totalmente destruída,
sem direito a testes de resistência. Nenhum tipo de imunidade
impede este ataque, que pode destruir até mesmo um deus maior
— caso este seja atacado em seu próprio Plano.
Logo após a criação da espada, a Holy Avenger caiu nas mãos
de Arsenal, que havia se aliado ao sumo-sacerdote de Sszzaas justamente
para tomar posse desta arma suprema. Com a derrota do
clérigo da guerra durante sua invasão ao Reinado, talvez o artefato
tenha se perdido novamente.

•Kailash
Pequeno e de aspecto quase inofensivo, o kailash (“grande
matador” em idioma halfl ing) lembra uma pequena esfera metálica
com cravos, com um cordão de suporte para o arremesso. No
entanto, uma vez dominado, tem grande poder destrutivo.
Em termos de regras, o kailash é uma arma marcial de arremesso
(dano 1d6, crítico 19-20, distância 30m, perfuração), com
bônus mágico +3 e os poderes explosão fl amejante e retorno. Além
disso, possui as seguintes habilidades.
Captura. Quando o kailash é arremessado, seu cordão pode
crescer e formar um laço capaz de capturar uma criatura Grande
ou menor. Se o usuário do kailash é bem-sucedido em um ataque
de toque, o alvo fi ca enredado. A vítima pode se soltar com uma
ação completa e um teste de Acrobacia (CD 25).Arrastar. Com um comando, o usuário do kailash pode fazer
uma criatura enredada pela arma ser arrastada para longe (até 30m
do usuário) ou perto (até onde o usuário está). A vítima pode resistir
com um teste de Fortitude (CD 25).
Forma de Maça. Com um comando, o kailash pode distender
um de seus espigões para servir como empunhadura, e ser usado
como uma maça. Nesta forma será uma maça antimortos-vivos +3.
Forma de Picareta. Com um comando, o kailash pode distender
dois espigões e ser usado como picareta. Nesta forma será
uma picareta anti-humanoides +3.
Forma de Lança. Com um comando, o kailash pode distender
dois espigões. Nesta forma será uma lança antimonstros +3.

• O Olho de Sszzaas
Como parte de seu plano para retornar
ao Panteão, o deus Sszzaas removeu
um de seus próprios olhos para forjar um
artefato — o Olho de Sszzaas, uma gema
es verdeada segura por um cajado de madeira
fossilizada. As extremidades do cajado
são ligadas por uma corrente, cujo
comprimento pode variar magicamente.
Cultistas de Sszzaas foram encarregados
de esconder o artefato em um templo
secreto nas proximidades de Lenórienn,
onde deveria ser encontrado pela pessoa certa.
O portador da peça acreditaria ser capaz
de usar magia poderosa, quando na verdade
estaria servindo aos interesses do Grande
Corruptor. De fato, o Olho carrega parte da
consciência do próprio Sszzaas, que testemunha
e manipula tudo à distância.
O cajado permite ao conjurador lançar
qualquer magia que conheça ou tenha
ouvido falar — seja arcana ou divina —
como se fosse uma habilidade mágica, sem
precisar gastar pontos de magia.
Além disso, qualquer magia lançada
recebe os benefícios de um dentre os seguintes
talentos metamágicos, à escolha do
usuário: Acelerar Magia, Ampliar Magia,
Aumentar Magia, Estender Magia, Potencializar
Magia ou Maximizar Magia.
Lançar uma magia corretamente exige
um teste de Identifi car Magia (CD igual
a 20 + custo em PM da magia, incluindo
ajustes por talentos metamágicos). Caso o
teste falhe, a magia não funciona, ou provoca
algum efeito imprevisível (alvo trocado,
efeito invertido, teletransporte para um local
diferente...), ou assim parece. Na verdade,
sempre que uma magia “falha”, isso quer
dizer que Sszzaas está no controle — e as
coisas estão saindo exatamente como ele
planejou, seguindo algum plano intrincado
e desconhecido pelo portador do cajado.
Apesar de poderoso, o Olho de Sszzaas é uma peça pouco conhecida.
Reconhecê-lo e descobrir como usá-lo exige um teste de
Conhecimento (arcano), CD 30.

• Os Rubis da Virtude
Criados originalmente como uma forma de selar um pacto entre
os deuses, os Rubis da Virtude (que virtude? confi ança) quase foram
a causa de sua morte. Cada um, se destruído, destruiria também o
deus que estivesse secretamente ligado a ele — sem que fosse possível
descobrir qual rubi pertencia a quem. Entregues aleatoriamente a
cada deus após sua criação, eles seriam mantidos como provas de
confi ança, provas de que os deuses — mesmo aqueles envolvidos em
disputas pessoais — jamais tentariam destruir uns aos outros.
Por segurança, as gemas foram encantadas de modo que não
pudessem ser detectadas por nenhum meio mágico. Os rubis também
não poderiam ser danifi cados por mortais, ou mesmo por
deuses menores; apenas um deus do Panteão poderia destruí-los.
Mesmo sem saber a quem estava ligado, cada deus guardou
em lugar seguro a gema em sua posse. No entanto, conseguindo
o que parecia ser impossível, Sszzaas — o mais traiçoeiro e furtivo
dos seres — roubou todos os rubis. Ele foi descoberto e julgado
antes de descobrir como utilizá-los, mas teve tempo de escondê-los
em Arton. E os rubis, protegidos de qualquer detecção mágica, não
puderam ser encontrados.
Como castigo por sua traição, Sszzaas foi transformado em avatar
e condenado a vagar pelo mundo até ser destruído ou aceito de
volta. Antes de receber a pena, o Traidor conseguiu de Khalmyr a
promessa de não interferir diretamente em seus atos — afi nal, que
chance teria? O que havia de “justo” no confronto entre um avatar e
um deus maior? Sem escolha, o Deus da Justiça concordou.
Os rubis estavam desaparecidos, mas nenhum mortal poderia
danifi cá-los. Mesmo assim, para evitar riscos, Khalmyr decretou
que as ligações vitais entre os rubis e os deuses fossem rompidas.
E assim foi feito.
Mesmo sem essa conexão, as gemas ainda eram poderosas, pois
traziam parte da essência divina dos vinte deuses. Sabendo que poderia
utilizá-las de alguma forma, Sszzaas tratou de mantê-las longe
dos olhos dos deuses, até o último instante.
Os Rubis da Virtude são artefatos capazes de trazer grande poder
para quem encontrá-los. Cada Rubi da Virtude oferece a seu
portador um nível de experiência adicional em uma classe pré-existente
— em geral aquela em que o personagem possui mais níveis.
Para surtir efeito, a gema deve de alguma forma ser incrustada no
corpo da criatura, o que exige um teste de Cura (CD 25). O efeito
leva 24 horas para se manifestar.
Por sua invulnerabilidade, cada rubi oferece ao portador
redução de dano 1 e +2 em testes de resistência, cumulativos com
quaisquer efeitos já existentes — incluindo outros rubis.
Por sua indetectabilidade, cada rubi torna o portador mais
difícil de observar por meios mágicos. Um conjurador que lance
uma magia de adivinhação contra o portador de um rubi deve ser
bem-sucedido em um teste de Vontade (CD 25 + a quantidade de
rubis) ou a magia não terá efeito.

• Shorder
Shorder é uma armadura mágica única no mundo. Mais parece
um cofre de duas pernas, feita com chapas de aço grossas como
paredes. É tão pesada que vários cavalos seriam necessários para
arrastá-la — e mesmo o mais forte guerreiro não poderia sequer
levantar um braço dentro dela.
Na verdade, qualquer criatura Pequena ou Média pode vestir
a armadura (ou melhor, entrar nela) e mover-se sem problemas.
Shorder conta como uma armadura completa +5 que fornece +8 na
Força, redução de dano 10, +4 nos testes de resistência e deixa seu
usuário permanentemente sob efeito de movimentação livre. Além
disso, Shorder tem maças afi adas +2 no lugar das mãos. Seu usuário
pode atacar com elas como se possuísse o talento Combater com
Duas Armas Maior. Por fi m, dentro de Shorder seu usuário conta
como uma criatura Grande.
Shorder torna seu usuário quase invencível, mas cobra um preço
alto — quem a utiliza não pode mais sair. Nem mesmo magias como
teletransporte, remover maldição ou semelhantes conseguem permitir
a saída de Shorder, embora se acredite que um desejo ou milagre possam.
A entrada da armadura jamais pode ser aberta enquanto uma
criatura viva estiver em seu interior. Uma pessoa que tenha morrido
dentro de Shorder não pode ser ressuscitada por meios mortais; apenas
uma intervenção divina consegue trazê-la de volta.
O usuário não pode segurar objetos (pois a armadura não tem
mãos) ou lançar magias (a menos que use o talento Magia sem
Gestos). Entretanto, dentro da armadura o usuário não sente fome
ou sede, e pode dormir (e recuperar pontos de vida) normalmente.

• Slash Calliber
Qualquer frequentador de tavernas já ouviu histórias sobre
duelos de honra, confl itos entre aldeias, ou mesmo guerras entre
reinos que teriam sido provocados por um único item mágico:
uma espada chamada Slash Calliber.
Infelizmente para seu portador, Slash Calliber é uma espada
mágica inteligente com um desejo incontrolável por combate. Tentará
iniciar batalhas de todas as maneiras, seja xingando o adversário
(geralmente as pessoas acreditam que a voz vem do portador,
não da espada!), seja com pequenas mentiras (“Estou lendo a mente
daquele goblin! Ele vai atacar!”). Mas ela nunca fará coisas estúpidas
ou puramente malignas, como provocar um ataque suicida
contra um dragão vermelho ou degolar um camponês desarmado.
Pelo menos, quase nunca...
Slash Calliber é uma espada longa anárquica da velocidade +3.
Pode ser usada para lançar detectar pensamentos, localizar objetos e
ver o invisível à vontade, e corrente de relâmpagos uma vez por dia.








Sem Aura / Uniques Sem Aura
• Espada das Estrelas: 2d12 19-20/x2 C 2 Mãos FOR 30 para ser usada. seu golpe
É sempre considerado ataque de toque, e ignora qualquer redução de dano.

• Flauta Negra: A flauta negra concede +4 em testes de Atuação com esse instrumento. Além disso, uma
vez ao dia, ela permite conjurar servos lefeu, a serviço do portador do artefato. Após 23
horas, todas as criaturas desaparecem. Novos lacaios podem ser invocados somente após
uma hora ter se passado. O usuário deve fazer um teste de Atuação (auta) contra CD
10. Para cada ponto de sucesso acima da CD alvo, o músico pode conjurar 5 níveis de
monstros lefeu, em qualquer combinação. Níveis excedentes não podem ser usados para
aprimorar monstros; se não puder conjurar monstros com os níveis disponíveis, nada
acontece

• Ledd - A Lança Rubra: A Lança Rubra é uma lança de aço-rubi anti-monstros do retorno +3.Qualquer dragão, atingido três vezes por
ela, morrerá automaticamente, sem direito a qualquer tipo de teste para resistir. Nenhum
tipo de imunidade funciona contra este efeito.
Apesar deste magnífico poder, a lança demanda grande maestria de seu usuário. É
notório o fato de que, caso alguém empunhando a lança erre um único golpe, a arma
perderá todos os poderes e propriedades especiais, tornando-se uma simples lança comum.
Por isso, apenas grandes campeões possuíram ao longo das eras a coragem (ou loucura!)
necessária para usá-la em combate.

• Masakkoulèv, Espada de Maddox: +2 6d6+1d4+1 19-20/x3 C  2 Mãos (Descomunal) Matéria
Vermelha. Intimidação+2. sempre que acertar um golpe com a espada, seu usuário pode realizar a
manobra agarrar, como uma ação livre.

• Máscara de Prata: Seu usuário se torna imune a quaisquer magias de encantamento. Além disso, ele não sofre os efeitos negativos
de estar em uma área de Tormenta, cando imune aos efeitos ambientais, insanidade,
perda de nível, entre outros. Quaisquer itens mágicos que carregue consigo são protegidos
do efeito de magia débil.

• Manto do imperador: O manto do imperator fornece +4 em CA e
testes de resistência, e +10 em Intuição.

• Cálice dos Deuses: Quando o cálice dos deuses é cheio de qualquer líquido
(mas preferencialmente hidromel, a bebida dos heróis), transforma-
o em uma versão potável, não venenosa e mágica da
bebida. Assim, água pode ser purificada, veneno pode ser anulado,
etc., ao ser derramado dentro do cálice.
Contudo, o efeito mais impressionante é a inspiração e
entusiasmo que toma conta de todos que consomem a bebida.
Os usuários recebem 1 ponto de ação imediatamente. Além
disso, recebem +4 em duas habilidades à sua escolha, +2 em
todos os testes de resistência e tornam-se imunes a todos os
efeitos de medo. Cada usuário também pode escolher um dos
seguintes efeitos: um uso do talento Duro de Matar, 10 PM
adicionais ou +8 em testes de duas perícias à sua escolha. Caso
um personagem sem níveis de aventureiro (ou seja, um plebeu)
beba do cálice, recebe imediatamente um nível de guerreiro (ou
outra classe apropriada). Os efeitos funcionam apenas sobre
criaturas inteligentes e duram 24 horas. Uma mesma criatura
pode beber do cálice apenas uma vez por dia.
Usar o cálice dos deuses tem um efeito colateral: os usuários
veem-se como heróis, tornam-se muito entusiasmados e otimistas,
acreditando que nada pode vencê-los. Qualquer tarefa
à frente, mesmo as mais tediosas ou sofridas, passa a ser vista
com alegria, ou ao menos por um prisma positivo. Ficar parado
(guarnecendo ou esperando algo) é quase intolerável, e os
usuários querem, acima de tudo, agir.

• Ruína da Civilização: À Ruína da Civilização é uma foice Enorme afiada anárquica
de trespassar poderoso +4, com o poder anti criatura contra
seres racionais (ou seja, seu bônus mágico aumenta em +2, e
ela causa +2d6 de dano, contra criaturas com Int 3 ou maior).

Cajado das Matas (Allihanna): Este bordão +1 é feito com o que parece ser uma série de galhos finos retorcidos e fundidos com uma empunhadura feita de couro. Nas mãos de um devoto de Allihanna, torna-se um bordão +3. Enquanto o devoto estiver ao ar livre e pisando sobre terra, o cajado concede um bônus de +2 em CA e testes de resistência. Nas mãos de um devoto de 11º nível ou mais, torna-se um bordão +5.

Cimitarra Solar (Azgher): Esta cimitarra +1 tem cabo de marfim e lâmina de aço reluzente. Quando reflete a luz do sol, o aço tem um brilho dourado. Nas mãos de um devoto de Azgher, ganha o poder explosão flamejante (+1d6 de dano de fogo por acerto, +1d10 de dano de fogo adicional com um acerto crítico). Toda vez que o devoto fizer uma doação de 1.000 TO ou mais para o templo de Azgher, a cimitarra reluz mais forte na luz do sol e aumenta o seu encantamento para +2 por um mês. Nas mãos de um devoto de 11º nível ou mais, torna-se uma cimitarra da explosão flamejante +3 (ou +4 após uma doação de 1.000 TO).

Adaga Sorrateira (Hyninn): Esta adaga +1 é feita do que parece ser metal enferrujado. O cabo é feito de mitral maculado. Quando empunhada por um devoto de Hyninn, torna-se uma adaga +3 e tem sua margem de crítico aumentada para 18-20. Além disso, quando o devoto for bem-sucedido em um teste Enganação ou Furtividade, no próximo minuto o personagem pode escolher receber um bônus de +4 em qualquer teste ou rolagem. Esta habilidade só funciona uma vez por dia. Nas mãos de um devoto de 11º nível ou mais, torna-se uma adaga +5 com margem de crítico 17-20.

Lança da Dominação (Kallyadranoch): Esta lança +1 é feita de uma única haste de metal, com uma ponta muito afiada. A sua coloração é cinza escuro, e tem um brilho muito tênue alaranjado. A cada acerto, causa 1d10 pontos dano, mais 1d6 pontos de dano de ácido, eletricidade, energia negativa, fogo ou frio (à escolha do usuário a cada golpe). Cada vez que o devoto sobe de nível enquanto estiver com a lança, o encantamento da arma aumenta em +1 (até um máximo de +6). Entretanto, a cada mês que o devoto passar separado da lança, seu encantamento diminui em –1 (até um mínimo de +1).

Machado da Bravura (Keenn): Este machado de batalha +1 tem cabo de madeira marrom escura com um reforço de metal nas laterais e lâmina única, feita de aço com muitos entalhes representando batalhas e monstros. Nas mãos de um devoto de Keenn, torna-se um machado de batalha +3 e concede um bônus de +4 em testes de Iniciativa. Sempre que seu usuário for o primeiro a agir no combate (vencendo a iniciativa ou surpreendendo seus oponentes), recebe 2 PV temporários por nível de personagem, que terminam no fi m do combate. Nas mãos de um devoto de 11º nível ou mais, torna-se um machado de batalha +5.

Espada da Justiça (Khalmyr): Esta espada longa +1 não deixa dúvidas sobre sua origem ou propósito. É uma espada de aço reluzente sem nenhum detalhe, exceto no seu cabo de ouro, onde existem algumas inscrições de orações a Khalmyr. Nas mãos de um devoto, torna se axiomática (+2d6 pontos de dano contra criaturas Caóticas) e sagrada (+2d6 pontos de dano contra criaturas Malignas). Nas mãos de um devoto de 11º nível ou mais, torna-se uma espada longa axiomática sagrada +3.

Caldeirão da Vida (Lena): Esta grande panela de ferro é abençoada com o poder de Lena, e imbui qualquer comida cozinhada nela com energia positiva. Uma refeição do caldeirão pode alimentar até cinco criaturas Médias (uma criatura Pequena come o equivalente à metade de uma criatura Média, e uma criatura Grande, o equivalente ao dobro) e fornece +1 nos testes de resistência de todas as criaturas que se alimentarem dela. Se a refeição for preparada por uma devota de Lena, também fornece 1d8+1 PV temporários. Por fi m, se for preparada por uma devota de 11º nível ou mais, os bônus duplicam: +2 nos testes de resistência e 2d8+2 PV temporários. Apenas a primeira refeição de cada dia preparada no caldeirão da vida fornece esses bônus, e eles duram até o fim do dia.

Katana da Determinação (Lin-Wu): Esta katana +1 é feita de aço tamuraniano e tem cabo coberto de tiras de couro trançadas. A lâmina tem coloração avermelhada, sinal de Lin-Wu para que seus devotos nunca se esqueçam da grande tragédia que se abateu sobre seu povo. Nas mãos de um devoto de Lin-Wu, torna-se uma katana +3. Sempre que o usuário derrotar um lefeu com a katana, recebe 20 PV temporários e um bônus de +2 nos testes de resistência e CA por 1 minuto (não cumulativo). Nas mãos de um devoto de 11º nível ou mais, torna-se uma katana +5.

Instrumento da Alegria (Marah): Este item pode vir na forma de qualquer instrumento musical leve, como uma flauta, um bandolim ou um tambor pequeno. Um personagem treinado em Atuação (música) pode gastar uma ação padrão para tocar o instrumento e gerar um efeito de fascinar, como a música de bardo. Caso o usuário já possua a habilidade música de bardo, recebe um bônus de +2 no seu teste de Atuação (música). Nas mãos de um devoto de Marah, o instrumento também pode ser usado para gerar uma música alegre, que impede sentimentos agressivos e impõe uma penalidade de –1 nas jogadas de ataque de todas as criaturas Malignas a até 18m. Usar este efeito exige uma ação padrão, e ele dura 1 minuto. Nas mãos de um devoto de Marah de 11º nível ou mais, a penalidade aumenta para –2, e se aplica nas jogadas de dano, além de nas jogadas de ataque.

Maça Monstruosa (Megalokk): Esta maça +1 é feita de rocha vulcânica. Nas mãos de um devoto de Megalokk, a maça causa 3d8+1 pontos de dano em vez de 1d8+1. Nas mãos de um devoto de 11º nível ou maior, a maça causa 5d8+1 pontos de dano.

Alguma Coisa de Nimb…: E pode nem ser uma arma. Uma frigideira, salame ou pluma de avestruz prateada pode ser um objeto litúrgico tanto quanto uma maça ou espada. Objetos litúrgicos de Nimb só aparecem para seus devotos, sempre em momentos inesperados. O devoto sabe instintivamente que a adaga na bota do guarda, ou o arco no armorial do castelo ou até mesmo a panela do cozinheiro goblin é na verdade um item sagrado de seu deus. Qualquer que seja o objeto é uma arma anárquica +2 (+2d6 pontos de dano contra criaturas Leais). Nas mãos de um devoto de 11º nível ou mais, torna-se uma arma anárquica +5.

Tridente Aquoso (Oceano): Este tridente +1 parece ser feito de coral translúcido azulado. As três pontas do tridente emanam uma tênue névoa gelada. Nas mãos de um devoto do Oceano, o tridente ganha o encantamento explosão congelante (+1d6 de pontos de dano de frio por acerto, +1d10 pontos de dano de frio adicional com um acerto crítico). Nas mãos de um devoto de 11º nível ou mais, torna-se um tridente da explosão congelante +4.

Foice das Almas (Ragnar): Esta foice +1 é feita de osso muito duro e afiado. Nas mãos de um devoto de Ragnar, torna-se uma foice do toque espectral +2. Além disso, sempre que o usuário derrubar uma criatura a 0 ou menos PV, o inimigo derrubado é afetado pela magia
drenar força vital. Um teste bem-sucedido de Vontade contra CD 16 anula o efeito da magia. Nas mãos de um devoto de 11º nível ou mais, torna-se uma foice do toque espectral +3.

Adaga Pavorosa (Sszzaas): Esta adaga +1 é feita da presa de uma serpente gigantesca. Possui um compartimento oco no cabo com veneno de cascavel (1d12 pontos de dano, Fort CD 15 anula). O veneno é magicamente reposto a cada golpe. Nas mãos de um devoto de
Sszzaas, torna-se uma adaga +3 que ignora qualquer resistência ou imunidade a veneno de uma criatura atingida. Nas mãos de um devoto de 11º nível ou mais, o veneno passa a causar 2d12 pontos de dano (Fort CD 20 reduz à metade).

Bordão Sabichão (Tanna-Toh): Este bordão +1 é feito de metal e cravejado de diversas gemas, todas da mesma cor (cada cajado individual tem sua cor). Nas mãos de um devoto de Tanna-Toh, torna-se um bordão misericordioso +2 (causa +1d6 pontos de dano, e todo dano causado é não letal). O usuário pode desativar e ativar este poder como uma ação livre. Além disso, o cajado sussurra conselhos e lembretes quando o usuário realiza testes de Conhecimento, concedendo um bônus de +4 em todos esses testes. Nas mãos de um devoto de 11º nível ou mais, aumente torna-se um bordão misericordioso +4. Além disso, uma vez por dia o usuário pode repetir um teste de Conhecimento que tenha falhado.

Machado Glorioso (Tauron): Este machado grande +1 é feito de adamante e tem nos seus dois gumes inscrições na língua de Tapista. O cabo é coberto de entalhes representando labirintos. Por ser feito de adamante, o machado causa 2d8 pontos de dano em vez de 1d12. Nas mãos de um devoto de Tauron, permite utilizar o talento Ataque Poderoso sem sofrer penalidade no ataque e fazer investidas sem sofrer penalidade na CA. Nas mãos de um devoto de 11º nível ou mais, torna-se um machado grande +3.

Shuriken Noturno (Tenebra): Este shuriken +1 é feito de aço reluzente com uma safira no centro. Quando arremessado, ele deixa um rastro de sombras com estrelas no fundo — mas apenas por um instante. Nas mãos de um devoto de Tenebra, torna-se um shuriken +2 do arremesso e retorno: o shuriken tem alcance de 6m e volta voando ao usuário, no início de seu próximo turno. Pegar a arma é uma ação livre e não exige nenhum teste. Nas mãos de um devoto de 11º nível ou mais, torna-se um shuriken +5 do arremesso e retorno com alcance de 9m.

Espada Imaculada (Thyatis): Esta espada longa +1 tem cabo de aço tingido de vermelho vivo, com asas de pássaro servindo de guarda-mão. Nas mãos de um devoto, torna-se uma espada longa +2 e uma vez por dia, como uma ação livre, o usuário pode transformá-la em uma espada de energia brilhante +2 por um minuto — a lâmina torna-se luz. Armas de energia brilhante fazem ataques de toque (em vez de ataques normais) e emanam luz como uma tocha. Nas mãos de um devoto de 11º nível ou maior, torna-se uma espada longa +4 e uma vez por dia o usuário pode transformá-la em uma espada longa de energia brilhante trovejante por um minuto.

Mangual Aventureiro (Valkaria): Este mangual + 1 tem o cabo e a cabeça feitos de aço, interligados por uma corrente coberta de ouro. Nas mãos de um devoto, torna-se um mangual +2 dançarino — como uma ação padrão, o usuário pode soltá-lo no ar. A arma então flutua, ataca os inimigos do usuário (com os mesmos bônus que teria se fosse empunhada por ele) por quatro rodadas, então cai no chão. Nas mãos de um devoto de 11º nível ou mais, torna-se um mangual +3 dançarino, e luta por seis rodadas antes de cair.

Varinha da Generosidade (Wynna) Esta varinha incomum é feita de madeira Tollon e tem
várias runas que emanam uma luz púrpura quando encontram a luz da lua. A varinha tem a capacidade de gerar um campo de força, concedendo resistência a dano 2 ao usuário. Nas mãos de um devoto, a varinha pode ser usada como um florete +3. O usuário pode usar a varinha como uma arma desta forma sem precisar de treinamento com armas marciais. Nas mãos de um devoto de 11º nível ou mais, o encantamento aumenta para +5.

Vingança de Khinlanas: O arco pessoal do último Rei dos Elfos. Vingança de Khinlanas é um arco grande e pesado, de madeira verde oliva, escurecida pelos séculos. É um arco longo +5. Seu bônus aumenta em +1 se o usuário for um elfo ou devoto de Glórienn. Os bônus são cumulativos — assim, para um elfo devoto de Glórienn, Vingança é um arco longo +7. Esta era a arma do rei de uma raça orgulhosa, e a magia dela reage à força da personalidade de seu portador. O usuário de Vingança de Khinlanas soma seu modificador de Carisma às jogadas de dano com a arma. 



































































~~~~


# EXTENSÃO EXTERNA — FORJA ORC & ROLL

**Não normativa para o core Tormenta 1.3.**


---

# Aprimoramentos físicos usados pela interface da Forja

**Fonte:** `src/data/equipamentos/forja.ts`

~~~~typescript
export interface ForgeImprovement {
  id: string;
  name: string;
  effect: string;
  price: number;
  appliesTo: 'weapon' | 'armor' | 'shield' | 'protection';
}

export const forgeSources = {
  weaponImprovements: 'https://trpg.orcnroll.com/forjadearmas/',
  armorImprovements: 'https://trpg.orcnroll.com/forjadearmaduras/'
} as const;

/**
 * Aprimoramentos e sobretaxas reproduzem a referência da Forja ORC & Roll.
 * Armas-base, armaduras-base, materiais e encantamentos são carregados
 * separadamente dos dados do Tormenta 1.3.
 */
export const weaponForgeImprovements: ForgeImprovement[] = [
  { id:'precisa', name:'Precisa', effect:'+1 na margem de ameaça.', price:1500, appliesTo:'weapon' },
  { id:'obra-prima', name:'Obra-prima', effect:'+1 nas jogadas de ataque.', price:300, appliesTo:'weapon' },
  { id:'magistral', name:'Magistral', effect:'+2 nas jogadas de ataque.', price:900, appliesTo:'weapon' },
  { id:'macica', name:'Maciça', effect:'+1 no multiplicador de crítico.', price:3000, appliesTo:'weapon' },
  { id:'macabra', name:'Macabra', effect:'+2 em Intimidar, –2 em Diplomacia.', price:300, appliesTo:'weapon' },
  { id:'equilibrada', name:'Equilibrada', effect:'+2 em testes de manobras.', price:600, appliesTo:'weapon' },
  { id:'cravejada-joias', name:'Cravejada de joias', effect:'+2 em testes de Enganação.', price:3000, appliesTo:'weapon' },
  { id:'brutal', name:'Brutal', effect:'+1 nas jogadas de dano.', price:600, appliesTo:'weapon' },
  { id:'banhada-ouro', name:'Banhada a ouro', effect:'+2 em testes de Diplomacia.', price:1000, appliesTo:'weapon' }
];

export const armorForgeImprovements: ForgeImprovement[] = [
  { id:'espinhos-escudo', name:'Espinhos no Escudo', effect:'Aumenta o dano do escudo.', price:50, appliesTo:'shield' },
  { id:'espinhos-armadura', name:'Espinhos na Armadura', effect:'Causa dano com a manobra agarrar.', price:300, appliesTo:'armor' },
  { id:'obra-prima', name:'Obra-prima', effect:'Diminui a penalidade de armadura em 1.', price:300, appliesTo:'protection' },
  { id:'reforcada', name:'Reforçada', effect:'+1 na CA e aumenta a penalidade de armadura em 2.', price:600, appliesTo:'protection' },
  { id:'sob-medida', name:'Sob Medida', effect:'Diminui a penalidade de armadura em 2.', price:900, appliesTo:'protection' },
  { id:'delicada', name:'Delicada', effect:'Aumenta o bônus máximo de Destreza em 2.', price:1500, appliesTo:'protection' },
  { id:'polida', name:'Polida', effect:'+2 na CA durante a primeira rodada.', price:1500, appliesTo:'protection' },
  { id:'selada', name:'Selada', effect:'+1 nos testes de resistência.', price:3000, appliesTo:'protection' },
  { id:'banhado-ouro', name:'Banhado a ouro', effect:'+2 em testes de Diplomacia.', price:1000, appliesTo:'protection' },
  { id:'cravejado-joias', name:'Cravejado de Joias', effect:'+2 em testes de Enganação.', price:3000, appliesTo:'protection' },
  { id:'macabro', name:'Macabro', effect:'+2 em testes de Intimidar, –2 em testes de Diplomacia.', price:300, appliesTo:'protection' }
];

export const weaponMagicBonusPrices = [0, 2000, 8000, 18000, 32000, 50000, 72000, 98000, 128000, 162000, 200000] as const;
export const armorMagicBonusPrices = [0, 1000, 4000, 9000, 16000, 25000, 36000, 49000, 64000, 81000, 100000] as const;

~~~~
