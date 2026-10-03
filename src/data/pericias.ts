export interface SkillBlock {
  title: string | null;
  paragraphs: string[];
}

export interface SkillEntry {
  slug: string;
  name: string;
  ability: string | null;
  trainedOnly: boolean | null;
  armorPenalty: boolean | null;
  blocks: SkillBlock[];
  sourceNotes: string[];
}

export interface GeneralSkillRule {
  title: string;
  paragraphs: string[];
}

export const generalSkillRules: GeneralSkillRule[] = [
  {
    "title": "Tipos de Perícias",
    "paragraphs": [
      "Perícias de Classe: são aquelas que aparecem na descrição de cada classe. Por exemplo, as perícias de classe do bárbaro são: Adestrar Animais, Atletismo, Cavalgar, Iniciativa, Intimidação, Ofício, Percepção e Sobrevivência.\nPerícias de Outra Classe: são todas as outras perícias que não aparecem entre aquelas da classe escolhida. Uma perícia que não seja de classe pode ser treinada em troca de duas perícias.\nPerícias Treinadas: todo personagem tem certo número de perícias treinadas, que depende de sua classe e modificador de Inteligência.                                                                             \nIndependente de sua classe, humanos ganham +2 perícias treinadas, que podem ser escolhidas entre perícias de outra classe.\nMesmo que a soma final seja zero ou menos (devido a um modificador de Inteligência negativo), ainda assim o personagem tem pelo menos uma perícia treinada.\nVocê escolhe suas perícias treinadas no 1º nível. Uma vez escolhidas, elas não podem ser trocadas."
    ]
  },
  {
    "title": "Graduações",
    "paragraphs": [
      "* Perícia treinada: nível + 3 graduações.",
      "* Outras perícias: nível/2 graduações.\nAssim, perícias não-treinadas têm valor igual a metade do nível do personagem (arredondado para baixo)."
    ]
  },
  {
    "title": "Escolhendo as Perícias",
    "paragraphs": [
      "Você escolhe suas perícias treinadas no 1º nível, entre suas perícias de classe. Uma vez escolhidas, elas não podem ser trocadas.\nNovas Perícias: após o 1º nível, um personagem pode adquirir mais perícias de duas maneiras:",
      "* Inteligência: caso sua Inteligência aumente (em geral através de evolução do personagem), você ganha uma nova perícia para cada aumento de +1 no modificador de habilidade. Aumentos de inteligência temporários (por magia ou itens mágicos, por exemplo) não concedem mais perícias. Essa perícia pode ser “guardada” para treinar uma perícia não de classe em níveis futuros.",
      "* Treino em Perícia: este talento oferece perícias treinadas adicionais, que podem ser escolhidas entre todas as perícias."
    ]
  },
  {
    "title": "Usando as Perícias",
    "paragraphs": [
      "Um teste de perícias é feito da seguinte forma:\n1d20 + graduações + modificador de habilidade + outros modificadores",
      "* Graduações: este valor é igual ao nível do personagem + 3, para perícias treinadas; e metade do nível do personagem (arredonde para baixo) para outras perícias.",
      "* Modificador de Habilidade: cada perícia tem uma habilidade-chave associada a seu uso. Por exemplo, Acrobacia tem Destreza como habilidade-chave. Isso quer dizer que, se você tem uma alta Destreza, tem mais chances de ser bem-sucedido em um teste de Acrobacia.",
      "* Outros Modificadores: podem ser bônus ou penalidades fornecidos por traços raciais, talentos, equipamento, itens mágicos ou situações específicas.\nQuanto maior o resultado do teste, melhor  o sucesso depende da dificuldade da tarefa sendo realizada. Para ser bem sucedido, você precisa que esse resultado iguale ou exceda um teste de outro personagem, ou uma classe de dificuldade (CD) escolhida pelo mestre."
    ]
  },
  {
    "title": "Testes Opostos",
    "paragraphs": [
      "O personagem deve fazer um teste, e os oponentes que forem resistir ao teste devem realizar um teste oposto de perícia, de acordo com a perícia que foi utilizada.\nNo caso de empates em testes opostos, o personagem com o maior bônus de perícia vence. Se os bônus forem iguais, outra rolagem deve ser feita.\nTestes de perícia que se opõem a resistências tem CD fixa seguindo a regra padrão encontrada em “Combate”.\n10 + Metade do Nível de personagem + Modificador de Habilidade relevante."
    ]
  },
  {
    "title": "Testes Contra uma Classe de Dificuldade (CD)",
    "paragraphs": [
      "O personagem deve realizar um teste de perícia para atingir uma classe de dificuldade.\nEstes são alguns exemplos de classes de dificuldade, seguidos por tarefas e as perícias certas para realizá-las.",
      "* Muito Fácil (0): notar alguém completamente visível, em campo aberto (Percepção)",
      "* Fácil (5): subir uma costa íngreme (Atletismo)",
      "* Mediana (10): ouvir um guarda se aproximando (Percepção)",
      "* Difícil (15): estancar o sangramento de alguém ferido (Cura)",
      "* Desafiador (20): nadar contra uma correnteza (Atletismo)",
      "* Formidável (25): sabotar uma armadilha de engenharia avançada (Ladinagem)",
      "* Heroica (30): decifrar um pergaminho antigo em um idioma morto (Conhecimento)",
      "* Quase Impossível (40): rastrear um druida à noite, em terreno duro, após 12 dias de chuva (Sobrevivência)"
    ]
  },
  {
    "title": "Testes sem Treinamento",
    "paragraphs": [
      "Adestrar Animais, Conhecimento, Identificar Magia, e Ladinagem são perícias que só podem ser usadas quando você é treinado nelas. Então, se você não a escolheu como perícia treinada, você não tem o conhecimento mínimo necessário para tentar utilizá-la, não importa seu nível ou modificador de habilidade.\nQuando a palavra \"treinada\" aparece logo após o título da perícia, isso quer dizer que não se pode fazer testes sem treinamento para ela."
    ]
  },
  {
    "title": "Penalidade de Armadura",
    "paragraphs": [
      "Acrobacia, Atletismo, Furtividade e Ladinagem exigem liberdade de movimentos. A maioria das armaduras e escudos torna a utilização destas perícias mais difícil.\nQuando a palavra \"armadura\" aparece logo após o título da perícia, isso quer dizer que personagens usando armadura ou escudo sofrem uma penalidade em seus testes. Essa penalidade depende de cada peça (veja Armaduras e Escudos). Em geral, quanto mais pesada, maior o estorvo.\nPenalidades por armaduras e escudos são cumulativas: usar cota de malha (-3) e escudo grande (-2) penaliza seus testes em -5."
    ]
  },
  {
    "title": "Novas Tentativas",
    "paragraphs": [
      "Em geral, você pode tentar um teste novo em caso de falha, e continuar tentando por toda a eternidade. Contudo, algumas perícias acarretam penalidades (ou problemas!) em caso de falha.\nPor exemplo, se um personagem falhar no teste de Ladinagem para abrir uma porta trancada, ele pode tentar de novo. Mas se a porta tiver uma armadilha (disparada se o teste de Ladinagem falhar por 5 ou mais) então há uma consequência para a falha.\nDe maneira similar, um personagem que falhe em um teste de Atletismo para subir uma encosta pode tentar novamente. Mas se falhar por 5 ou mais, cairá. Ele pode se levantar e tentar de novo — supondo que a queda não tenha sido muito dolorida..."
    ]
  },
  {
    "title": "Condições Favoráveis e Desfavoráveis",
    "paragraphs": [
      "Algumas situações podem tornar uma perícia mais fácil ou mais difícil de usar, resultando em um bônus ou penalidade no modificador, ou mudando a CD do teste.\nEm casos especiais, o mestre pode alterar as chances de sucesso de quatro maneiras:",
      "* Conceder ao utilizador da perícia um bônus de +2 para representar circunstâncias que melhoram seu desempenho, como saber alguma informação sobre a tarefa.",
      "* Conceder ao utilizador da perícia uma penalidade de -2 para representar circunstâncias que atrapalham seu desempenho, como realizar uma tarefa sob pressão.",
      "* Reduzir a CD em 2 para representar circunstâncias que tornam a tarefa mais fácil, como ter uma audiência amigável ao fazer um teste de atuação, ou procurar por um livro em uma biblioteca bem organizada com um teste de Percepção.",
      "* Aumentar a CD em 2 representa circunstâncias que tornam a tarefa mais difícil, como fazer um teste de atuação para uma platéia hostil, ou procurar por um frasco de poção em um laboratório bagunçado com um teste de Percepção.\nCondições que afetem a habilidade do personagem de utilizar a perícia mudam o bônus da perícia. Condições que modifiquem o quão bem o personagem deve realizar a perícia para obter um sucesso mudam a CD. Um aumento no bônus de perícia de um personagem ou uma redução na CD do teste têm o mesmo resultado, ambos criam uma chance melhor de sucesso. Mas representam circunstâncias diferentes e, algumas vezes, essa diferença é importante."
    ]
  },
  {
    "title": "Testes sem Rolagens",
    "paragraphs": [
      "Um teste representa a realização de uma tarefa em situação de risco — você tem tempo limitado ou está em perigo, por exemplo. Quando este não é o caso, você pode alcançar resultados mais confiáveis. Estas regras aceleram os testes sob circunstâncias rotineiras, diminuindo o número de rolagens que os jogadores precisam fazer durante o jogo.\nEscolher 1: quando seu bônus total em um teste é igual ou maior que a CD menos 1, mesmo sob pressão, você é automaticamente bem-sucedido mesmo sem fazer o teste. A tarefa é um esforço trivial para alguém com suas habilidades. Caso o teste tenha variados níveis de sucesso, você obtém o mínimo possível (como se tivesse rolado 1 no dado). Você ainda pode fazer uma rolagem para alcançar um nível maior de sucesso, se quiser.\nEscolher 10: quando não há pressão para realizar uma tarefa, você pode escolher 10. Isso significa realizar uma tarefa com calma, sem chance de erros. Em vez de rolar 1d20, considere um resultado 10 automático. Isso costuma bastar para muitas tarefas.\nEscolher 20: quando não há pressão, e a tarefa não oferece nenhuma consequência ou penalidade em caso de falha, você pode escolher 20. Isso significa gastar todo o tempo do mundo e tentar todas as possibilidades, até ser bem-sucedido. Em vez de rolar 1d20, considere um resultado 20 automático. Escolher 20 exige vinte vezes mais tempo que o normal para executar a perícia."
    ]
  },
  {
    "title": "Prestar Ajuda",
    "paragraphs": [
      "Às vezes, os personagens trabalham juntos e se ajudam. Um personagem (normalmente aquele com o maior bônus) é considerado o líder, e faz o teste normal, e então um ajudante treinado na mesma perícia concede um bônus igual ao modificador seu modificador de atributo da perícia. Enquanto um ajudante não treinado concede apenas metade do modificador.\nEm muitos casos, ajuda externa não traz benefícios. Você não pode ajudar um colega a ser mais silencioso em seu teste de Furtividade. Apenas um personagem pode prestar ajuda por vez."
    ]
  },
  {
    "title": "Testes de Habilidades",
    "paragraphs": [
      "Em alguns casos, quando tenta algo que nenhuma perícia prevê, você faz um teste de habilidade: uma rolagem de 1d20 somada ao modificador da habilidade apropriada.\nO mestre determina a CD, ou então considera um teste oposto quando dois personagens estão envolvidos em uma competição como uma queda de braço, por exemplo. Aqui estão alguns exemplos simples de testes de habilidade, seguidos pela habilidade-chave testada:",
      "* Empurrar um bloco de pedra (Força).",
      "* Amarrar cordas (Destreza).",
      "* Segurar o fôlego (Constituição).",
      "* Escapar de um labirinto (Inteligência).",
      "* Reconhecer um estranho que já viu antes (Sabedoria).",
      "* Ser percebido em uma multidão (Carisma)."
    ]
  }
];

export const skillSummarySourceRows = [
  {
    "name": "Acrobacia",
    "ability": "Destreza",
    "trainedOnly": false,
    "armorPenalty": true
  },
  {
    "name": "Adestrar Animais",
    "ability": "Carisma",
    "trainedOnly": true,
    "armorPenalty": false
  },
  {
    "name": "Atletismo",
    "ability": "Força",
    "trainedOnly": false,
    "armorPenalty": true
  },
  {
    "name": "Atuação",
    "ability": "Carisma",
    "trainedOnly": false,
    "armorPenalty": false
  },
  {
    "name": "Cavalgar",
    "ability": "Destreza",
    "trainedOnly": false,
    "armorPenalty": false
  },
  {
    "name": "Conhecimento",
    "ability": "Inteligência",
    "trainedOnly": true,
    "armorPenalty": false
  },
  {
    "name": "Cura",
    "ability": "Sabedoria",
    "trainedOnly": false,
    "armorPenalty": false
  },
  {
    "name": "Diplomacia",
    "ability": "Carisma",
    "trainedOnly": false,
    "armorPenalty": false
  },
  {
    "name": "Enganação",
    "ability": "Carisma",
    "trainedOnly": false,
    "armorPenalty": false
  },
  {
    "name": "Furtividade",
    "ability": "Destreza",
    "trainedOnly": false,
    "armorPenalty": true
  },
  {
    "name": "Identificar Magia",
    "ability": "Inteligência",
    "trainedOnly": true,
    "armorPenalty": false
  },
  {
    "name": "Iniciativa",
    "ability": "Destreza",
    "trainedOnly": false,
    "armorPenalty": false
  },
  {
    "name": "Intimidação",
    "ability": "Carisma",
    "trainedOnly": false,
    "armorPenalty": false
  },
  {
    "name": "Intuição",
    "ability": "Sabedoria",
    "trainedOnly": false,
    "armorPenalty": false
  },
  {
    "name": "Jogatina",
    "ability": "Carisma",
    "trainedOnly": false,
    "armorPenalty": false
  },
  {
    "name": "Ladinagem",
    "ability": "Destreza",
    "trainedOnly": true,
    "armorPenalty": true
  },
  {
    "name": "Obter Informação",
    "ability": "Carisma",
    "trainedOnly": false,
    "armorPenalty": false
  },
  {
    "name": "Ofício",
    "ability": "Inteligência",
    "trainedOnly": false,
    "armorPenalty": false
  },
  {
    "name": "Percepção",
    "ability": "Sabedoria",
    "trainedOnly": false,
    "armorPenalty": false
  },
  {
    "name": "Sobrevivência",
    "ability": "Sabedoria",
    "trainedOnly": false,
    "armorPenalty": false
  }
] as const;

export const skills: SkillEntry[] = [
  {
    "slug": "acrobacia",
    "name": "Acrobacia",
    "ability": "Destreza",
    "trainedOnly": false,
    "armorPenalty": true,
    "blocks": [
      {
        "title": "Amortecer Queda (CD 15)",
        "paragraphs": [
          "você pode reduzir o dano de uma queda para 1,5 m menos que a altura real, como uma reação."
        ]
      },
      {
        "title": "Arte da Fuga",
        "paragraphs": [
          "você pode escapar de cordas, redes e algemas como uma ação completa. Para cordas, faça um teste de Acrobacia oposto a um teste de Destreza de quem amarrou você (essa pessoa recebe +10 no teste, porque amarrar alguém é mais fácil que escapar de amarras). Você também pode escapar de redes (CD 20)."
        ]
      },
      {
        "title": "Cambalhota",
        "paragraphs": [
          "você pode atravessar um quadrado ocupado por um inimigo, como parte de seu movimento. Faça um teste de Acrobacia oposto ao teste de Iniciativa do oponente. Se você for bem sucedido, atravessa o quadrado; se falhar, não consegue atravessar o quadrado, e sua ação de movimento termina.",
          "Se estiver usando regras para ataques de oportunidade, você também pode usar esta manobra para escapar de um quadrado ameaçado sem provocar ataques de oportunidade (faça um teste contra cada criatura ameaçando o quadrado onde você está). Usar a cambalhota custa o dobro do deslocamento."
        ]
      },
      {
        "title": "Equilíbrio",
        "paragraphs": [
          "você pode se equilibrar ao andar em superfícies precárias, como um piso escorregadio (CD 10), o alto de um muro estreito (CD 15) ou uma corda esticada (CD 20). Cada movimentação em uma situação dessas exige um teste de Acrobacia. Em caso de sucesso você consegue andar metade do seu deslocamento; se falhar, não consegue andar; e se falhar por 5 ou mais, você cai."
        ]
      },
      {
        "title": "Levantar-se rapidamente (CD 20)",
        "paragraphs": [
          "caso esteja caído, você pode ficar de pé como uma ação livre. Se falhar por 5 ou mais, você perde uma ação de movimento e continua caído."
        ]
      },
      {
        "title": "Passar por espaço apertado (CD 30)",
        "paragraphs": [
          "você pode rastejar por espaços estreitos, suficientes para criaturas de uma categoria de tamanho menor (por exemplo, um humano poderia passar por um espaço suficiente para um goblin), como uma ação completa. Nesta condição você se move com metade da velocidade normal."
        ]
      },
      {
        "title": null,
        "paragraphs": [
          "As manobras “amortecer queda”, “cambalhota”, “levantar-se rapidamente” e \"passar por espaço apertado” só podem ser tentadas se você é treinado em Acrobacia."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "adestrar-animais",
    "name": "Adestrar Animais",
    "ability": "Carisma",
    "trainedOnly": true,
    "armorPenalty": false,
    "blocks": [
      {
        "title": "Domesticar um animal selvagem (CD 25)",
        "paragraphs": [
          "você pode criar um animal selvagem desde filhote, domesticando-o. O tempo necessário varia de acordo com a criatura."
        ]
      },
      {
        "title": "Ensinar um truque (CD 15)",
        "paragraphs": [
          "você pode ensinar um truque (atacar, atuar, ficar, guardar, pegar, procurar, proteger, quieto, rosnar, segue, vir...) com um teste e uma semana de treino. Um animal com Inteligência 1 pode aprender no máximo três truques, enquanto um animal com Inteligência 2 aprende até seis truques (criaturas com Int 3 ou mais são seres inteligentes)."
        ]
      },
      {
        "title": "Forçar um animal (CD 25)",
        "paragraphs": [
          "você pode forçar um animal a executar um truque que ele não sabe, mas é fisicamente capaz de realizar. Este uso gasta uma ação completa e, em caso de sucesso, o animal realiza o truque na sua próxima ação."
        ]
      },
      {
        "title": "Manejar um animal (CD 10)",
        "paragraphs": [
          "você pode comandar um animal para que realize um truque que ele já sabe. Este uso gasta uma ação padrão e, em caso de sucesso, o animal realiza o truque em sua próxima ação. Você pode fazer este uso mesmo sem treinamento em Adestrar Animais."
        ]
      },
      {
        "title": null,
        "paragraphs": [
          "Todo personagem recebe +5 em testes de Adestrar Animais envolvendo seu próprio companheiro animal."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "atletismo",
    "name": "Atletismo",
    "ability": "Força",
    "trainedOnly": false,
    "armorPenalty": true,
    "blocks": [
      {
        "title": "Corrida",
        "paragraphs": [
          "você pode correr mais rapidamente gastando uma ação completa. Sua velocidade é aumentada em 1,5m vezes o resultado de seu teste. Por exemplo, se um humano obtém um resultado 24, vai se mover 45 m (24 x 1,5 m + 9 m) naquela rodada.",
          "Você só pode correr em linha reta, e não pode correr em terreno difícil. Você pode manter a corrida um número de rodadas igual a seu valor de Constituição. Após isso, deve fazer um teste de Constituição (CD 10 + 1 por teste anterior) por rodada para continuar correndo. Se falhar, precisa parar e descansar um minuto antes de correr novamente."
        ]
      },
      {
        "title": "Escalada",
        "paragraphs": [
          "você pode subir em árvores, muros, encostas escarpadas e outras superfícies inclinadas. Faça um teste sempre que executar uma movimentação em superfície inclinada ou na vertical. Em caso de sucesso você avança metade de sua velocidade, ou se mantém no lugar (caso esteja fazendo outra coisa). Se falhar, não consegue executar a movimentação. E se falhar por 5 ou mais, você cai da altura que tinha alcançado.",
          "A dificuldade depende das condições da escalada: CD 5 para uma encosta íngreme, CD 10 para um muro com ajuda de uma corda, CD 15 para uma árvore, CD 20 para um muro com algumas reentrâncias ou CD 25 para uma parede muito lisa, quase sem apoios.",
          "Você precisa ter as duas mãos livres para escalar. Pode ser apoiar com uma mão para fazer uma ação que use apenas uma mão, mas não pode avançar assim. Como não pode se mexer para evitar um ataque, você é considerado desprevenido quando está escalando. Toda vez que sofre dano quando está escalando, deve fazer um novo teste de Atletismo, em caso de falha você cai."
        ]
      },
      {
        "title": "Natação",
        "paragraphs": [
          "você pode nadar, mergulhar e se desviar de obstáculos submersos. Cada rodada na água exige uma ação de movimentos e um teste de Atletismo (CD 10 para água calma, CD 15 para agitada, 20 para tempestuosa). Em caso de sucesso você avança metade de sua velocidade. Se falhar no teste você consegue boiar, mas não avança; se falhar por 5 ou mais você afunda. Você pode gastar uma segunda ação de movimento na mesma rodada para outro teste de Atletismo.",
          "Se estiver submerso (porque falhou no teste ou mergulhou intencionalmente), deve prender a respiração. Você pode prender a respiração por uma quantidade de rodadas igual a seu valor de Constituição. Esgotando esse tempo, deve fazer um teste de Constituição por rodada (CD 10 + por cada teste anterior). Se falhar, se afoga (é reduzido a 0 pontos de vida). Se continuar submerso, na próxima rodada vai para -1 PV. Na rodada seguinte, morre."
        ]
      },
      {
        "title": "Saltar",
        "paragraphs": [
          "você pode pular sobre buracos ou obstáculos, ou alcançar algo elevado. Para um salto longo, CD 10 para 1,5m; 15 para 3m; 20 para 4,5m; 25 para 6m e assim por diante. Para saltos em altura, CD 10 para 50cm; 20 para 1m; 30 para 1,5m e assim por diante. Você deve ter pelo menos 6m para correr e pegar impulso (sem esse espaço, a CD aumenta em +10).",
          "Ao pular de um lugar elevado, um teste de Atletismo (CD 15) reduz em 1d6 o dano da queda. Saltar é parte de seu movimento, e não exige uma ação."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "atuacao",
    "name": "Atuação",
    "ability": "Carisma",
    "trainedOnly": false,
    "armorPenalty": false,
    "blocks": [
      {
        "title": null,
        "paragraphs": [
          "Você pode impressionar uma platéia com sua música, canto, poesia ou outra manifestação artística.",
          "Assim como Conhecimento e Ofício, Atuação na verdade são várias perícias diferentes. Você pode ser treinado em várias perícias Atuação, cada uma escolhida como uma perícia separada.",
          "Dramaturgia (comédia, drama, mímica). Dança (balé, dança do ventre, valsa). Música (bandolim, canto, flauta, harpa, tambor, piano) Oratória (discursos, poesia).",
          "Seu desempenho como artista depende do resultado de seu teste: 15 para uma performance rotineira (o mínimo necessário para que não joguem tomates...), 25 para uma grande atuação e 35 para um espetáculo inesquecível, capaz de agradar aos reis."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "cavalgar",
    "name": "Cavalgar",
    "ability": "Destreza",
    "trainedOnly": false,
    "armorPenalty": false,
    "blocks": [
      {
        "title": null,
        "paragraphs": [
          "Coisas simples não exigem testes. Você pode colocar uma sela, montar, cavalgar em velocidade normal e desmontar do animal sem problemas. Apenas situações de combate ou perigo exigem testes."
        ]
      },
      {
        "title": "Montar ou desmontar rapidamente (CD 20)",
        "paragraphs": [
          "você pode montar ou desmontar como uma ação livre (o normal é gastar uma ação de movimento). Se falhar por 5 ou mais, você cai no chão."
        ]
      },
      {
        "title": "Cavalgar Rapidamente (CD 15)",
        "paragraphs": [
          "com uma ação bônus, você consegue esporear sua montaria e aumentar seu deslocamento em +3 durante uma rodada. Esta manobra causa 2 pontos de dano à montaria."
        ]
      },
      {
        "title": "Guiar com os joelhos (CD 10)",
        "paragraphs": [
          "com uma ação livre você consegue guiar sua montaria apenas com os joelhos, deixando suas mãos livres para lutar, durante uma rodada. Se falhar, precisa usar pelo menos uma mão para guiar a montaria, ou deixá-la parada durante esta rodada."
        ]
      },
      {
        "title": "Saltar (CD 15)",
        "paragraphs": [
          "você faz sua montaria saltar um obstáculo. Se você falhar, cai da montaria durante o salto e sofre 1d6 pontos de dano (ou mais, dependendo do obstáculo...). Este uso da perícia é parte do movimento da montaria, e não exige uma ação."
        ]
      },
      {
        "title": null,
        "paragraphs": [
          "Animais não domesticados, ou não adequados como montaria, impõem uma penalidade de -5 em testes de Cavalgar."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "conhecimento",
    "name": "Conhecimento",
    "ability": "Inteligência",
    "trainedOnly": true,
    "armorPenalty": false,
    "blocks": [
      {
        "title": null,
        "paragraphs": [
          "Assim como Atuação ou Ofício, Conhecimento na verdade são várias perícias diferentes. Você pode ser treinado em várias perícias de Conhecimento, cada uma escolhida como uma perícia separada.",
          "* Arcano (mistérios sobrenaturais, tradições mágicas, símbolos arcanos, frases crípticas, construtos, dragões). * Engenharia (castelos, pontes, cavernas). * Estratégia (vantagens e dedução de combate) * Geografia (terrenos, climas, povos). * História (datas importantes, lendas, tradições). * Natureza (animais, fadas, plantas, estações e ciclos). * Nobreza (linhagens, heráldica, cavalaria, personalidades, leis). * Planar(natureza, características e nativos dos múltiplos planos de existência) * Religião (deuses maiores, deuses menores, tradições eclesiásticas, símbolos sagrados, espíritos, mortos-vivos)."
        ]
      },
      {
        "title": "Decifrar escritas",
        "paragraphs": [
          "um teste pode decifrar inscrições em idiomas antigos ou desconhecidos – como aqueles normalmente encontrados em masmorras – ou entender mensagens arcaicas ou incompletas. O texto deve estar ligado ao Conhecimento que você possui. CD 20 para mensagens e avisos simples, 25 para textos comuns e 30 para escritos intrincados, exóticos ou arcaicos."
        ]
      },
      {
        "title": "Entender mistérios",
        "paragraphs": [
          "como uma ação completa, você pode tentar desvendar um mistério que tinha ligação com seu tipo de Conhecimento. CD 10 para assuntos simples, 15 para normais, 20 e 30 para difíceis."
        ]
      },
      {
        "title": "Identificar criatura",
        "paragraphs": [
          "você pode identificar uma criatura que tenha ligação com o Conhecimento escolhido (por exemplo, fadas para Conhecimento [natureza]), assim como seus poderes e vulnerabilidades, como uma ação completa. CD 10 + nível da criatura. Cada sucesso permite lembrar uma informação útil a respeito do monstro. Se falhar por 5 ou mais, tira uma conclusão errada (por exemplo, acreditar que determinado monstro é vulnerável a fogo, quando na verdade é vulnerável a frio)."
        ]
      },
      {
        "title": "Analisar batalha",
        "paragraphs": [
          "como uma ação completa, você pode fazer um teste oposto contra o líder inimigo para descobrir alguma informação sobre as forças dele, como uma fraqueza ou seu objetivo na batalha."
        ]
      },
      {
        "title": "Procurar vantagem estratégica",
        "paragraphs": [
          "(CD 15): como uma ação padrão, você pode procurar uma vantagem estratégica no campo de batalha. Se for bem-sucedido, encontra um terreno elevado ou um ponto que forneça cobertura ou camuflagem dentro de 30m. Se o mestre considerar que não existe nenhuma vantagem estratégica no campo de batalha, o teste falha automaticamente."
        ]
      },
      {
        "title": "Despistar",
        "paragraphs": [
          "Quando estiver nas ruas de uma cidade que conheça (à qual sua perícia Conhecimento se aplique), faça um teste de conhecimento (local) CD 15, se bem sucedido, você recebe um bônus de +4 em teste de Furtividade, em testes de Enganação para criar distração uma distração para se esconder e em testes de Atletismo para perseguições."
        ]
      },
      {
        "title": "Astrologia",
        "paragraphs": [
          "você pode usar as perícias Conhecimento (arcano) ou Conhecimento (religião) para obter informações sobre signos, estrelas, planetas e constelações do céu, e para saber como preparar horóscopos e mapas astrais, e detalhes de nascimento (e ganhar dinheiro com isso).",
          "Com uma semana de trabalho e um teste bem-sucedido com CD 30, você pode preparar um horóscopo para uma criatura, com previsões vagas para os próximos seis meses. A criatura pode usar esse horóscopo uma vez durante esse período para ganhar um ponto de ação como uma ação livre, e só poderá receber os benefícios de outro horóscopo após o final do período do horóscopo anterior.",
          "Criar um horóscopo custa 50 TO por nível do personagem (o preço de venda fica a cargo do astrólogo; em geral, o dobro do custo de criação). Em caso de falha, você não consegue preparar o horóscopo, mas deve gastar metade dos TO necessários mesmo assim. Com um dia de trabalho e um teste bem-sucedido com CD 35, você pode montar um mapa astral capaz de determinar em qual mundo uma alma renasceu, se tiver acesso à informações sobre a vida e a morte da criatura em questão (seja por meio de descrições detalhadas de um conhecido, ou por meio de magias como lendas e histórias). A previsão não é 100% precisa pois, mesmo que o mapa astral esteja correto, um deus maior pode simplesmente ter tomado posse da alma em questão. Criar um mapa astral custa 10 TO por nível do personagem (o preço de venda fica a cargo do astrólogo; em geral, o dobro do custo de criação). Em caso de falha, você não consegue preparar o mapa astral, mas deve gastar metade dos TO necessários mesmo assim. Se falhar por 10 pontos ou mais, você prepara um mapa astral, mas acredita que a alma foi enviada para um mundo errado, à escolha do mestre."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "cura",
    "name": "Cura",
    "ability": "Sabedoria",
    "trainedOnly": false,
    "armorPenalty": false,
    "blocks": [
      {
        "title": "Primeiros socorros (CD 15)",
        "paragraphs": [
          "com uma ação padrão, você pode salvar outro personagem que esteja morrendo. Se ele está com 0 PV ou menos, um teste de Cura pode estabilizá-lo e fazer com que pare de perder pontos de vida."
        ]
      },
      {
        "title": "Cuidados prolongados (CD 15)",
        "paragraphs": [
          "Se você for bem-sucedido no teste, ela recupera o dobro dos pontos de vida no próximo descanso rápido, este benefício é perdido no próximo descanso longo. Este uso leva uma hora e pode ser utilizado durante um descanso rápido(obtendo os resultados imediatamente), o número máximo de pessoas que você pode tratar ao mesmo tempo é igual ao seu Mod Sab."
        ]
      },
      {
        "title": "Tratar doenças",
        "paragraphs": [
          "faça um teste contra a CD da doença. Em caso de sucesso, o paciente recebe +5 em seu próximo teste de Fortitude contra a doença. Você deve acompanhar o paciente pelo menos uma hora por dia para realizar este teste."
        ]
      },
      {
        "title": "Tratar venenos",
        "paragraphs": [
          "contra um veneno que não seja de efeito imediato, faça um teste com a mesma CD do veneno. Em caso de sucesso, o paciente recebe +5 em seu próximo teste de Fortitude contra o veneno. Este uso gasta uma ação padrão."
        ]
      },
      {
        "title": null,
        "paragraphs": [
          "Usar esta perícia exige um kit de medicamentos. Sem ele, você sofre penalidade de –5 em testes de Cura. Um personagem pode usar a perícia Cura em si mesmo, mas sofre uma penalidade de –5 no teste."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "diplomacia",
    "name": "Diplomacia",
    "ability": "Carisma",
    "trainedOnly": false,
    "armorPenalty": false,
    "blocks": [
      {
        "title": "Barganha",
        "paragraphs": [
          "comprando ou vendendo algo, você pode tentar barganhar. Você e o outro negociante fazem testes opostos de Diplomacia. Se ganhar, você muda o preço em 10% a seu favor. Se ganhar por 10 pontos de diferença ou mais, muda em 20%. Mas se perder por 5 ou mais, você ofende o negociante – ele não voltará a tratar com você durante pelo menos uma semana."
        ]
      },
      {
        "title": "Mudar atitude",
        "paragraphs": [
          "você pode mudar a atitude de alguém em uma categoria, para melhorar ou pior, à sua escolha. Um teste de Diplomacia é oposto ao teste de Intuição do alvo. Normalmente a tentativa leva pelo menos um minuto; em caso de urgência você pode tentar o mesmo como uma ação completa (para evitar uma briga, por exemplo), mas sofre penalidade de -10 no teste. Você pode mudar a atitude de alguém apenas uma vez por dia. Se você falhar por 5 ou mais, a atitude do alvo vai na direção contrária."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "enganacao",
    "name": "Enganação",
    "ability": "Carisma",
    "trainedOnly": false,
    "armorPenalty": false,
    "blocks": [
      {
        "title": "Blefar",
        "paragraphs": [
          "você pode levar outras pessoas a tirar conclusões erradas sobre algo ou alguém.",
          "Um teste de Enganação é oposto ao teste de Intuição da vítima. Circunstâncias positivas e negativas pesam muito no resultado de um blefe (veja o abaixo). Um teste bem-sucedido de Enganação indica que o alvo reage como o personagem deseja, pelo menos por um breve período de tempo (1 rodada), ou acredita em algo que o personagem quer. Blefar gasta uma ação padrão.",
          "Exemplos de circunstâncias de Enganação e o modificador:",
          "* O alvo deseja acreditar no personagem (CD -5). “Mas tenho certeza de que você deixou cair esta peça de ouro. Não é mesmo sua?” * O blefe é verossímil e não afetará muito o alvo (CD +0). “Um ladrão goblin, você disse? Não, não vi ninguém assim passar por aqui.” * O blefe é um pouco difícil de acreditar ou colocará a vítima em perigo (CD +5). “Rápido, preciso da sua espada! Vem vindo um orc nesta direção!” * O blefe é difícil de acreditar ou colocará a vítima em grande perigo (CD +10). “Sim, entendo que seu mestre deixou você protegendo o laboratório, mas ele acaba de me pedir para apanhar sua bola de cristal ai dentro. Não vamos querer problemas com o mestre, certo?” * O blefe é muito fantástico, é quase impossível de acreditar nele (CD +20). “Sim, foi o que eu disse! O imperador dos minotauros foi substituído por um seguidor do Deus da Traição e ninguém percebeu! Temos que fazer alguma coisa!”"
        ]
      },
      {
        "title": "Disfarce",
        "paragraphs": [
          "com um pouco de maquiagem e alguns truques, você consegue mudar sua aparência ou a de outra pessoa.",
          "Faça um teste de Enganação contra um teste de Percepção de quem prestar atenção em você. Em caso de sucesso, a pessoa acredita em seu disfarce. Disfarces complexos impõem penalidades: -2 para sexo oposto, -5 para uma raça diferente, e -2 para idades muito diferentes. Estas penalidades são cumulativas.",
          "Como é mais difícil fingir ser alguém conhecido, aqueles que conhecem essa pessoa recebem bônus em seus testes de Percepção: +2 se apenas conhece de vista, +5 para amigos, +10 para intimo. Um disfarce exige pelo menos dez minutos e um kit de disfarces. Sem o kit, você sofre uma penalidade de -5 nos testes de Enganação para fazer um disfarce."
        ]
      },
      {
        "title": "Falsificação",
        "paragraphs": [
          "você pode forjar documentos.",
          "Faça um teste de Enganação contra um teste de Percepção de quem examina o documento falsificado. Em caso de sucesso, o examinador acredita que o documento é válido, caso contrário, ela percebe que é falso. Documentos complexos impõem penalidades: -2 para um documento desconhecido pelo falsificador; -2 para documentos complexos (como decretos reais ou ordens militares); -2 se inclui uma assinatura específica. Essas penalidades são cumulativas.",
          "Certas circunstâncias também modificam o teste do examinador: -2 se ele nunca viu um documento real; +2 se estiver habituado a ver esse tipo de documento; +2 ao analisar com muita atenção (por exemplo, guardas inspecionando criteriosamente os convites para uma festa restrita). Estes modificadores são cumulativos.",
          "Usada em conjunto com Ofício, você também pode forjar versões falsas de outros objetos (jóias, por exemplo).  Use a perícia Ofício para fabricar a peça, e então um teste de Enganação para que ela se pareça com o artigo genuíno."
        ]
      },
      {
        "title": "Fintar",
        "paragraphs": [
          "para confundir um inimigo, faça um teste de Enganação oposto a um teste de Iniciativa do alvo. Em caso de sucesso, o oponente estará desprevenido quando você fizer seu próximo ataque contra ele, mas apenas até o fim da próxima rodada."
        ]
      },
      {
        "title": "Golpe",
        "paragraphs": [
          "Você vende castelos, jóias e até lugares nos Reinos dos Deuses, ou ao menos promete. Ao chegar em um lugar, você pode fazer um teste de enganação contra CD 15 por dia. Se você for bem-sucedido, recebe 1 TO por cada ponto que seu teste exceder a CD. Como alternativa, você pode usar este talento para arrancar favores de plebeus. Estes favores podem incluir abrigo durante uma noite, transporte, informações, etc., desde que sejam coisas ao alcance de plebeus. A CD total para estes favores é 20 (favores simples), 25 (favores complicados, custosos ou arriscados), 30 (favores ilegais ou muito arriscados) ou mais, a critério do mestre (favores que ameacem a vida do plebeu ou de sua família). Em qualquer caso, se você rolar um “1 natural”, não poderá usar este uso de perícia por um mês. Além disso, você terá atraído a atenção de guardas. Obviamente, eles não estarão nada satisfeitos com você..."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "furtividade",
    "name": "Furtividade",
    "ability": "Destreza",
    "trainedOnly": false,
    "armorPenalty": true,
    "blocks": [
      {
        "title": null,
        "paragraphs": [
          "Faça um teste de Furtividade oposto pelo teste de Percepção daqueles que poderiam notá-lo. Você não é percebido pelas pessoas contra as quais tenha sido bem-sucedido.",
          "Usar Furtividade exige algum tipo de cobertura ou camuflagem entre você e seus alvos. Ou ainda, deve haver outras pessoas em cena com as quais você consiga se misturar (para sumir na multidão ou seguir alguém nas ruas, por exemplo). Você deve ficar parado ou se mover lentamente com metade do deslocamento (ou então com a mesma velocidade das pessoas em volta, se houver). Em deslocamento normal você sofre -5 em seu teste, e -20 em corrida ou investida. Um teste de Furtividade numa rodada em que você ataque também sofre penalidade de -20.",
          "Você não pode fazer um teste de Furtividade contra alguém que esteja olhando diretamente para você  mesmo que se esconda atrás de algo, o observador saberá que você está ali. No entanto, você pode um blefe (veja a perícia Enganação) para criar uma distração e, em caso de sucesso, tentar se esconder.",
          "Usar esta perícia é parte de sua movimentação."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "identificar-magia",
    "name": "Identificar Magia",
    "ability": "Inteligência",
    "trainedOnly": true,
    "armorPenalty": false,
    "blocks": [
      {
        "title": "Identificar magia",
        "paragraphs": [
          "quando alguém lança uma magia, você pode adivinhar qual é através de seus gestos e palavras (CD 15 + nível da magia), antes que ela seja efetivamente conjurada. Você também pode identificar uma magia que já tenha sido lançada e que esteja funcionando (CD 20 + nível da magia). Identificar uma magia é uma reação."
        ]
      },
      {
        "title": "Identificar poção (CD 20)",
        "paragraphs": [
          "identificar uma poção exige pelo menos 1 minuto."
        ]
      },
      {
        "title": "Lançar magia de armadura",
        "paragraphs": [
          "armaduras interferem com os gestos delicados necessários para conjurar. Lançar uma magia arcana usando armaduras que você não é treinado exige um teste (CD 25 + nível da magia). Se falhar, a magia não funciona, mas mesmo assim gasta pontos de magia."
        ]
      },
      {
        "title": "Usar instrumento mágico (CD 20 + 5 para cada categoria de item mágico)",
        "paragraphs": [
          "você pode “enganar” um item mágico para que funcione com você, mesmo quando não deveria. Por exemplo, pode golpear com uma espada sagrada que funciona apenas nas mãos de pessoas Bondosas (mesmo que você não seja), ou vestir uma capa mágica feita para elfos mesmo que você seja humano, ou atravessar um portão mágico construído para permitir apenas a passagem de druidas. Faça o teste para cada ativação do item (para pergaminhos, varinhas...) ou a cada hora (para armas, armaduras, anéis...)."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "iniciativa",
    "name": "Iniciativa",
    "ability": "Destreza",
    "trainedOnly": false,
    "armorPenalty": false,
    "blocks": [
      {
        "title": "Iniciativa em combate",
        "paragraphs": [
          "quando um combate se inicia, cada personagem envolvido faz um teste de Iniciativa. Aqueles com resultados mais altos agem primeiro."
        ]
      },
      {
        "title": "Evitar finta",
        "paragraphs": [
          "quando um oponente tentar fintar você em combate, você faz um teste de Iniciativa contra o teste de Enganação dele. Se você é bem-sucedido, a finta falha."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "intimidacao",
    "name": "Intimidação",
    "ability": "Carisma",
    "trainedOnly": false,
    "armorPenalty": false,
    "blocks": [
      {
        "title": "Assustar",
        "paragraphs": [
          "Como uma ação padrão, você pode fazer um teste de Intimidação oposto pelo teste de Intuição de um alvo a até 9m. Se você for bem-sucedido, o alvo fica abalado por 1 rodada. Se você for bem sucedido por 10 ou mais pontos, o alvo fica apavorado por uma rodada e então abalado por 1 minuto. Só pode ser usado uma vez por alvo."
        ]
      },
      {
        "title": "Coagir",
        "paragraphs": [
          "Você obriga uma pessoa a fazer algo. Faça um teste de Intimidação oposto pelo teste de Intuição da vítima. Se você for bem-sucedido, ela colabora por um minuto. Depois desse tempo, sua atitude cai em duas categorias. Se você falhar no teste por 5 ou mais, a vítima não obedece ou faz o oposto do ordenado. Se você mandar a pessoa fazer algo perigoso ou que vá contra a natureza dela, ela recebe +5 no teste ou é automaticamente bem-sucedida, de acordo com o mestre. Este uso demora um minuto de “conversa”.  Você pode coagir como uma ação completa, mas sofre uma penalidade de –10 no teste. Em combate, você tem uma penalidade de -10 para coagir."
        ]
      },
      {
        "title": "Extorquir",
        "paragraphs": [
          "Você pode sair pelas ruas da cidade coletando \"doações\". Faça um teste de Intimidação, e consulte a tabela abaixo para ver o quanto você conseguiu recolher. Este uso pode ser usado uma vez por dia (e, obviamente, apenas em cidades). 9 ou menos - Nenhum 10-19 - 1d4 TO x seu nível 20-29 - 1d8 TO x seu nível 30 ou mais - 2d6 TO x seu nível"
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "intuicao",
    "name": "Intuição",
    "ability": "Sabedoria",
    "trainedOnly": false,
    "armorPenalty": false,
    "blocks": [
      {
        "title": "Desacreditar (CD 20 ou 20 + nível da magia + modificador do conjurador)",
        "paragraphs": [
          "você percebe algo errado, mesmo sem nenhum sinal aparente; uma pessoa agindo de forma estranha por estar enfeitiçada; uma parede que não deveria estar ali (pois na verdade é uma ilusão); ou um monstro que não deveria existir na região – porque na verdade é uma criatura transformada, ou foi conjurado por um mago."
        ]
      },
      {
        "title": "Sentir motivação",
        "paragraphs": [
          "você percebe que alguém está mentindo. Um teste bem-sucedido faz com que você não seja afetado por um blefe (veja a perícia Enganação). Você pode também usar esta perícia para ter um “palpite” sobre a confiabilidade de uma pessoa (CD 20)."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "jogatina",
    "name": "Jogatina",
    "ability": "Carisma",
    "trainedOnly": false,
    "armorPenalty": false,
    "blocks": [],
    "sourceNotes": [
      "Esta perícia aparece na tabela-resumo da fonte, mas não possui uma seção de descrição detalhada no documento."
    ]
  },
  {
    "slug": "ladinagem",
    "name": "Ladinagem",
    "ability": "Destreza",
    "trainedOnly": true,
    "armorPenalty": true,
    "blocks": [
      {
        "title": "Abrir fechaduras",
        "paragraphs": [
          "com uma ação completa, você pode abrir uma fechadura trancada (isto é, sem ter a chave). Uma fechadura simples (porta da frente de uma casa) tem CD 20. Uma fechadura média (prisão, baú...) tem CD 25. E uma fechadura superior (cofre, câmara do tesouro) tem CD 30.",
          "Este uso exige um kit de ladrão. Sem ele, você sofre uma penalidade de -5 no teste."
        ]
      },
      {
        "title": "Ocultar item",
        "paragraphs": [
          "você precisa gastar uma ação padrão para esconder um item em seu corpo. O objeto deve ser pelo menos uma categoria de tamanho menor que você.",
          "Faça um teste de Ladinagem contra um teste de Percepção de qualquer um que possa vê-lo. Para um objeto uma categoria menor que você, seu teste sofre penalidade de -5; duas categorias menor, 0; três categorias menor +5; quatro ou mais categorias menor, +10. Se uma pessoa revistar você, recebe +10 no teste de Percepção."
        ]
      },
      {
        "title": "Operar mecanismos",
        "paragraphs": [
          "esta perícia permite desabilitar, ativar ou sabotar (mas não consertar) dispositivos mecânicos diversos, como fechaduras, armadilhas, veículos e armas de fogo. Você também pode sabotar aparatos para que funcionem por algum tempo, falhando apenas mais tarde (normalmente após 1d4 rodadas ou minutos de uso).",
          "Usar esta perícia leva 1d4 rodadas, e a dificuldade depende da complexidade da tarefa. Uma ação simples (emperrar uma fechadura ou arma de fogo) tem CD 10. Uma ação média (sabotar uma roda de carroça, ponte levadiça ou balão goblin) tem CD 15. Uma ação difícil (desativar ou reativar uma armadilha) tem CD 20. Por fim, uma ação muito complexa (como desativar ou reativar uma armadilha avançada, ou sabotar um canhão naval para explodir quando utilizado) tem CD 25.",
          "Se falhar por 5 ou mais, alguma coisa saiu muito errado: se é uma armadilha, ela se ativa. Se estiver tentando uma sabotagem, você acha que o mecanismo está desabilitado, mas na verdade ele ainda funciona normalmente.",
          "Este uso exige um kit de ladrão. Sem ele, você sofre uma penalidade de -5 no teste."
        ]
      },
      {
        "title": "Prestidigitação (CD 20)",
        "paragraphs": [
          "você consegue surrupiar ou plantar objetos nos bolsos de outras pessoas sem que elas percebam.",
          "Faça um teste de Ladinagem. Em caso de sucesso, você consegue pegar (ou colocar) o que queria. A vítima tem direito a um teste de Percepção (CD igual ao resultado de seu teste de Ladinagem). Se tiver sucesso, ela percebe que sua tentativa, tenha você conseguido ou não. Tentar surrupiar ou plantar algo gasta uma ação padrão. Com uma CD 30 você pode usar esta perícia com ação livre."
        ]
      },
      {
        "title": "Usar instrumento mágico (CD 25 + 5 para cada categoria de item mágico)",
        "paragraphs": [
          "você pode “enganar” um item mágico para que funcione com você, mesmo quando não deveria. Por exemplo, pode golpear com uma espada sagrada que funciona apenas nas mãos de pessoas Bondosas (mesmo que você não seja), ou vestir uma capa mágica feita para elfos mesmo que você seja humano, ou atravessar um portão mágico construído para permitir apenas a passagem de druidas. Faça o teste para cada ativação do item (para pergaminhos, varinhas...) ou a cada hora (para armas, armaduras, anéis...)."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "meditacao",
    "name": "Meditação",
    "ability": null,
    "trainedOnly": null,
    "armorPenalty": null,
    "blocks": [
      {
        "title": "Força de vontade (CD 20)",
        "paragraphs": [
          "se ficar com 0 PV ou menos, você pode fazer um teste de Meditação como uma ação livre para se manter consciente por mais uma rodada. Você continua sangrando e deve fazer testes para estabilizar normalmente. Você só pode usar este efeito uma vez por combate."
        ]
      },
      {
        "title": "Memorizar (CD 15)",
        "paragraphs": [
          "você pode memorizar uma longa sequência de números, uma grande passagem de versos ou outro conjunto de informações complexo (mas nunca escritas mágicas ou similares). Cada teste bem-sucedido permite reter uma página de informação com uma ação completa. Se o documento for maior que uma página, você deve fazer testes adicionais para cada página. A informação memorizada é permanente, mas só pode ser acessada com outro teste bem-sucedido de Meditação."
        ]
      },
      {
        "title": "Resistir ao medo e magia (CD 25)",
        "paragraphs": [
          "contra qualquer efeito de medo e mágicos, você faz testes de resistência normalmente. Em caso de falha, você pode fazer um teste de Meditação na rodada seguinte; se for bem-sucedido, pode fazer um novo teste de resistência. Este uso da perícia só funciona uma vez para cada efeito de medo usado contra você."
        ]
      },
      {
        "title": "Resistir a venenos",
        "paragraphs": [
          "você pode substituir um teste de Meditação por um teste de Fortitude para evitar efeitos secundários de venenos."
        ]
      }
    ],
    "sourceNotes": [
      "Esta perícia possui descrição detalhada na fonte, mas não aparece na tabela-resumo de perícias."
    ]
  },
  {
    "slug": "obter-informacao",
    "name": "Obter Informação",
    "ability": "Carisma",
    "trainedOnly": false,
    "armorPenalty": false,
    "blocks": [
      {
        "title": null,
        "paragraphs": [
          "Você pode fazer contatos, ouvir os rumores locais e descobrir informações específicas – como a localização de uma masmorra ou o esconderijo de um bandido.",
          "Usar esta perícia exige um dia inteiro, e algumas moedas para gastar em bebidas. A dificuldade do teste, assim como o dinheiro que vai gastar, dependem da informação que você quer descobrir.",
          "Informações gerais (“Quem é o guerreiro mais forte da aldeia?”) têm CD 10 e custam 1d6 PO. Informações específicas (“Quem é o ancião que está sempre ao lado do rei?”) tem CD 15 e custam 1d10 PO. Informações restritas, que poucas pessoas conhecem (“O que fazem naquela torre misteriosa?”), têm CD 20 e custam 3d6 PO. Por fim, informações protegidas, que podem colocar em risco quem responder à pergunta (“Quem é o líder da guilda de ladrões?”), têm CD 25 e custam 3d10 PO.",
          "Você pode pagar o dobro do dinheiro (mas tem que fazer a escolha antes da quantia ser rolada) para um bônus de +2 no teste."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "oficio",
    "name": "Ofício",
    "ability": "Inteligência",
    "trainedOnly": false,
    "armorPenalty": false,
    "blocks": [
      {
        "title": null,
        "paragraphs": [
          "Assim como Atuação e Conhecimento, Ofício na verdade são várias perícias diferentes. Você pode ser treinado em várias perícias de Ofício, cada uma escolhida como uma perícia separada. A seguir estão alguns exemplos de Ofício.",
          "* Administração (gerenciar negócios) [apresentado em Valkaria: Cidade Sob a Deusa] * Alquimia (ácidos, poções, venenos). * Alvenaria (itens e construções de pedra). * Armas de Cerco (armas de cerco, como catapultas, balistas e trabucos) * Carpintaria (itens e construções de madeira). * Joalheria (lapidação, pedras preciosas). * Metalurgia (armas, armaduras e itens de metal). * Uma arte, como escrita, escultura ou pintura. * Uma profissão, como cozinheiro, fazendeiro, pescador, estalajadeiro ou pastor."
        ]
      },
      {
        "title": "Avaliação",
        "paragraphs": [
          "um teste pode estimar o valor de um item ligado a seu Ofício – desde algo que você consiga fabricar até um instrumento ou ferramenta que esteja habituado a usar –, conseguindo diferenciar uma peça de qualidade de uma inferior.  Avaliar itens comuns ou conhecidos tem CD 10. Uma falha significa que você estimou entre 50% e 150% (2d6 +3 vezes 10%) do valor verdadeiro.  Avaliar um item rato ou exótico tem CD 20, e neste caso falhar indica que você não sabe o valor do item.",
          "Um teste de Ofício também pode substituir um teste de Percepção para perceber uma falsificação (veja Enganação. Nesse caso, você recebe +2 em seu teste de Ofício."
        ]
      },
      {
        "title": "Fabricar itens",
        "paragraphs": [
          "fabricar um item exige matéria-prima no valor de um terço do preço original do item. O tempo necessário é um dia por cada 100 PO, com o máximo sendo uma semana. No fim desse período, faça um teste de Ofício. Se tiver sucesso, o item estará pronto. Se falhar, pode gastar mais uma semana(ou o tempo original, o que for menor) para tentar de novo. Você pode fazer quantas tentativas quiser  mas se falhar por 5 ou mais em qualquer dos testes, você estraga as matérias-primas e precisa recomeçar do zero.",
          "A dificuldade depende do tipo e complexidade do item. Itens muito simples (como uma colher de pau) têm CD 10. Itens típicos (caldeirão de ferro, retrato, arma simples, armadura leve...) têm CD 15. Itens complexos (sino, arma marcial, armaduras médias...) têm CD 20. Por fim, itens de qualidade superior (fechadura, relógio, arma de fogo, armadura pesada...) têm CD 25. Você pode aceitar uma penalidade de -5 no teste para tentar fabricar o item na metade do tempo."
        ]
      },
      {
        "title": "Consertar",
        "paragraphs": [
          "geralmente, reparar um item tem a mesma CD necessária para fabricá-lo. Cada tentativa consome um dia inteiro de trabalho, e um quinto do preço original do item. Em caso de falha, o tempo e o dinheiro são perdidos – mas você sempre pode tentar novamente."
        ]
      },
      {
        "title": "Sustento",
        "paragraphs": [
          "você pode praticar seu trabalho e tirar sustento dele. Com uma semana de trabalho e um teste de Ofício, você ganha 1 PO para cada ponto que seu teste exceder 15. Por exemplo, se teve um resultado final 19, ganha 4 PO pela semana de trabalho. Trabalhadores treinados ganham uma média de 1 PO por semana, enquanto trabalhadores sem treinamento recebem em média 1 peça de prata por dia."
        ]
      },
      {
        "title": "Código (Profissões)",
        "paragraphs": [
          "Usando jargões de sua profissão, personagens podem se comunicar verbalmente na frente de outras pessoas, e não serão entendidos. Em combate, podem discutir planos complexos, formular estratégias e definir táticas, sem que o inimigo compreenda. Cada código é único (assim, dois grupos diferentes terão cada um o seu código particular). Mensagens também podem ser escritas neste código. Um código pode ser desvendado com um teste de conhecimento(qualquer), Obter informações ou por magias como compreender idiomas. A CD é igual ao maior teste de ofício do grupo que utiliza o código a ser desvendado."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "percepcao",
    "name": "Percepção",
    "ability": "Sabedoria",
    "trainedOnly": false,
    "armorPenalty": false,
    "blocks": [
      {
        "title": "Observar",
        "paragraphs": [
          "você pode notar coisas, pessoas ou criaturas escondidas. O teste é oposto ao teste de Furtividade do personagem tentando não ser visto. Às vezes o alvo não está se escondendo intencionalmente, mas ainda exige um teste de Percepção para ser notado. Nestes casos, a dificuldade varia entre CD 5 (uma pessoa em uma praça com pouco movimento) até 30 (um soldado específico em meio a uma grande batalha).",
          "Esta perícia também é usada para ver através de um disfarce, perceber um documento falso (veja a perícia enganação) e ler lábios (CD 20)."
        ]
      },
      {
        "title": "Ouvir",
        "paragraphs": [
          "você pode tentar ouvir coisas como uma conversa distante ou um inimigo tentando se aproximar em silêncio. Em masmorras, é bastante prudente parar para escutar antes de entrar em um novo corredor ou aposento.",
          "A dificuldade depende da intensidade do barulho. Uma conversa casual próxima tem CD 0 – ou seja, a menos que exista alguma penalidade (veja adiante), você é bem-sucedido automaticamente. Ouvir pessoas sussurrando tem CD 15. Ouvir do outro lado de uma porta aumenta a CD em +5.",
          "Ouvir alguém se aproximando sorrateiramente exige um teste de Percepção contra o teste de Furtividade da criatura. Perceber criaturas invisíveis tem CD 20, ou +10 no teste de Furtividade da criatura, o que for maior. Mesmo que você seja bem-sucedido no teste, ainda sofre penalidades normais por lutar sem ver o inimigo.",
          "Mesmo dormindo você pode fazer testes de Percepção para ouvir algo, mas sofre uma penalidade de -10; um sucesso faz você acordar."
        ]
      },
      {
        "title": "Procurar",
        "paragraphs": [
          "examinando atentamente uma coisa ou local, você pode perceber detalhes úteis ou encontrar algo que estava procurando. Você precisa estar a pelo menos 3m do item a ser examinado. Examinar uma área de 1,5m de lado gasta uma ação completa.",
          "Procurar um item específico dentro de um baú cheio de objetos: CD 10. Encontrar uma porta secreta: CD 20. Perceber uma porta secreta muito bem escondida: CD 20. Encontrar armadilhas (apenas personagens com a habilidade de classe encontrar armadilhas): CD 20 ou maior. Para armadilhas mágicas, CD 25 + nível da magia usada. Um teste de Percepção pode revelar rastros, mas não permite identificar esses rastros, segui-los ou dizer de que direção vieram (ou para onde vão). Para isso, utilize a perícia Sobrevivencia."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "sobrevivencia",
    "name": "Sobrevivência",
    "ability": "Sabedoria",
    "trainedOnly": false,
    "armorPenalty": false,
    "blocks": [
      {
        "title": null,
        "paragraphs": [
          "Você é capaz de avançar sem se perder e manter a si mesmo e seus companheiros alimentados em áreas selvagens. Um teste bem-sucedido por dia garante a sobrevivência de um pequeno grupo (você e mais quatro ou cinco pessoas). A dificuldade depende do tipo de ambiente: CD 15 para planícies e áreas costeiras; CD 20 para florestas ou pântanos e CD 25 para desertos ou montanhas. Regiões especialmente áridas ou estéreis e clima ruim (neve, tempestade, etc.) impõem uma penalidade de –5 (cumulativa)."
        ]
      },
      {
        "title": "Rastrear",
        "paragraphs": [
          "Você pode fazer testes de Sobrevivência para encontrar rastros. A dificuldade varia de acordo com o solo CD 10 para solo macio (neve, lama), 15 para solo padrão (grama, terra) e 20 para solo duro (rocha ou piso de interiores).",
          "Você ganha +1 para cada três criaturas no grupo sendo seguido. Você sofre uma penalidade de –1 para cada dia desde a criação dos rastros e uma penalidade de –5 em visibilidade precária (noite, chuva, neblina). Você precisa fazer um teste para encontrar os rastros e mais um para cada dia de perseguição.",
          "Se falhar, você pode tentar novamente gastando mais um dia (mas lembre-se de que a CD aumenta a cada dia)."
        ]
      },
      {
        "title": "Pilhar Presa",
        "paragraphs": [
          "Seu conhecimento sobre a natureza possibilita aproveitar o máximo de seus recursos, inclusive de criaturas abatidas. Um teste de Sobrevivência CD 10 + Nível da criatura é necessário para extrair partes da carcaça sem danificar o material final. Os tipos de criaturas são:",
          "Animais: pelos, pele, presas e chifres. Construtos: 1kg de material padrão (pedra, aço, cobre, madeira, etc) para cada categoria de tamanho. Espíritos: essência espiritual, pó arcano, outros componentes de magia. Humanoides: Pele, cabelo, olhos, sangue. Monstros: Presas, chifres, sangue, pele, escamas, glândulas especiais. Mortos-vivos: carne putrefata, ossos, cinzas.",
          "Os materiais pilhados sempre ficam a critério do mestre (e do bom senso). Por exemplo: é possível obter presas de um lobo abatido, mas não chifres, por motivos óbvios. É possível também usar essa perícia para obter recursos para criar armas e armaduras especiais, como Couro de Dragão."
        ]
      }
    ],
    "sourceNotes": []
  }
];

export const skillCount = skills.length;
