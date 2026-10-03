export interface CombatBlock {
  title: string | null;
  paragraphs: string[];
}

export interface CombatTable {
  headers: string[];
  rows: string[][];
}

export const combat = {
  "overviewIntro": "Um combate obedece os seguintes passos:",
  "overviewSteps": [
    "Cada personagem faz um teste de Iniciativa.",
    "O mestre determina quais personagens estão cientes de seus inimigos. Aqueles que não percebem a presença de inimigos começam o combate surpreendidos. Um personagem surpreendido não age na primeira rodada, e está desprevenido.",
    "Todos os personagens têm seu turno na ordem da Iniciativa (com exceção daqueles que estiverem surpreendidos, que não agem na primeira rodada).",
    "Quando todos os personagens tiverem seu turno, a rodada termina. Uma outra rodada se inicia, com todos os personagens agindo novamente, na mesma ordem. Mesmo aqueles que estavam surpresos agora podem agir."
  ],
  "attack": [
    "Quando você ataca, faz uma jogada de ataque, isto é, rola um d20 e soma seu bônus de ataque. Se o resultado é igual ou maior que a classe de armadura do alvo, você acerta e causa dano.",
    "* Jogada de ataque corpo-a-corpo ou arremesso: 1d20 + Nível de Personagem + modificador de Força.",
    "* Jogada de ataque à distância: 1d20 + Nível de Personagem + modificador de Destreza.",
    "* Jogadas de ataque de toque: 1d20 + Nível de Personagem + modificador de Conjuração.",
    "Por exemplo, um ladino de 5º nível com Força 12 (+1) e Destreza 16 (+3) tem bônus de ataque corpo-a-corpo +6 e a distância +8. Ele rolará 1d20 e somará 6 ao resultado para atacar corpo-a-corpo, ou 8 para atacar à distância.",
    "Pode haver ainda outros modificadores, oferecidos por bônus raciais (como o bônus dos halflings para atacar à distância), talentos (como Especialização em Arma), magias, armas mágicas e etc. Ataques de toque e toque a distância não podem ser impedidos por habilidades como aparar,  ripostar e desviar objetos. Armas leves e armas que permitam o uso de “Acuidade com arma” podem utilizar destreza como habilidade para ataques em Jogadas de ataque corpo-a-corpo ou arremesso. Dados escolhidos não geram efeitos dependente de rolagem, como, por exemplo, acertos críticos."
  ],
  "damage": [
    "Quando você acerta um ataque, causa dano. Esse dano reduz os pontos de vida do inimigo (veja adiante em \"Pontos de Vida\"). Você rola outros dados para descobrir quanto dano causou. O tipo de dano depende da arma ou ataque utilizado por exemplo, 1d4 para uma adaga ou 2d6 para uma espada grande. O dano de cada arma é descrito na página Equipamento.",
    "* Dano com arma de corpo-a-corpo ou de arremesso: Dano da arma + metade do nível do atacante + modificador de Força do atacante.",
    "* Dano com arma de disparo: dano da arma + metade do nível do atacante + modificador de Destreza do atacante.",
    "Então um personagem de 5º nível, com Força 16 e usando uma espada longa causa 1d8+5 pontos de dano (1d8 da espada longa, +2 por metade do nível, +3 pelo modificador de Força). Aqui também pode haver outros modificadores, oferecidos por talentos (como Especialização em Arma), magias, armas mágicas e outras condições. Dano mínimo. Um acerto bem-sucedido sempre causa pelo menos 1 ponto de dano, mesmo que quaisquer penalidades reduzam o dano a menos que 1. O talento Ataque Sagaz permite substituir o modificador de Força em jogadas de arremesso. Apenas criaturas do mesmo tamanho ou maior que a estrutura conseguem causar dano a mesma. Não se aplica a armas de cerco."
  ],
  "abilityDamage": [
    "Pontos de habilidades perdidos voltam à taxa de 1 por dia. Um personagem com Força ou Destreza 0 cai paralisado. Um personagem com Inteligência, Sabedoria ou Carisma 0 cai inconsciente. Um personagem com Constituição 0 morre. Dano de Habilidade. Uma criatura só pode receber Dano de Habilidade em cada atributo uma vez por rodada."
  ],
  "critical": [
    "Consulte a página de Equipamentos. Você verá, na tabela de armas, uma coluna onde diz \"Crítico\". Cada arma tem uma margem de ameaça (que pode ser 20, 19-20, ou 18-20) e um multiplicador (que pode ser x2, x3 ou x4). Ao fazer sua jogada de ataque, quando você rola um valor dentro da margem de ameaça da arma e o ataque acerta, é um acerto crítico. Um acerto crítico aumenta o dano por 2, 3 ou 4 dados, conforme o multiplicador da arma. Então se você ataca com uma espada longa (1d8, margem 19-20, multiplicador x2), rola 19 ou 20 do dado da jogada de ataque e acerta, causa dano crítico. Você rola dados de dano adicionais iguais aos dados da arma. Por exemplo, 1d8 para uma espada longa mais os bônus de dano (bônus por nível e modificador de Força). Porém valores extras sejam por talentos, habilidades de classe ou encantamentos (Como os do talento Especialização em Arma, os da habilidade ataque furtivo, encantamento elemental, etc), entretanto, não são adicionados. Mesmo criaturas sem pontos vitais, como mortos-vivos e construtos, sofrem acertos críticos.No entanto, certos tipos de criaturas disformes(aberrações, gosmas, enxames) são imunes a acertos críticos. Seres resistentes ou imunes a acertos críticos, sofrem metade do dano de Ataques Furtivos"
  ],
  "armorClass": [
    "A classe de armadura representa a dificuldade de acertar o alvo. Esse é o número-alvo que o atacante precisa obter em sua jogada de ataque para ser bem-sucedido.",
    "* Classe de armadura: 10 + metade do nível do personagem + modificador de Destreza + bônus de armadura e escudo.",
    "Por exemplo, um personagem de 5º nível com Destreza 12 tem CA 13 (10 +2 por metade do nível +1 por modificador de Destreza). Se estiver vestindo uma cota de malha (bônus de armadura +5) e usando um escudo pesado (bônus de escudo +2), sua CA aumenta para 20."
  ],
  "hitPoints": [
    "Pontos de vida indicam a quantidade de dano que alguém pode sofrer antes de cair inconsciente. Enquanto tiver pelo menos 1 PV, você pode agir e lutar normalmente. Se ficar com 0 ou menos pontos de vida, você fica inconsciente. Morte. Você morre quando seus PV chegam a um número negativo igual à metade de seus pontos de vida totais. Por exemplo, um personagem com 30 PV morre se chegar a -15PV."
  ],
  "fastHealing": [
    "No início de cada turno, a criatura recupera certa quantidade de PV (por exemplo, 5 PV com cura acelerada 5). Cura acelerada não recupera PV perdidos por inanição, desidratação ou asfixia. Em alguns casos, a cura acelerada não pode recuperar certos tipos de dano - que será listado após uma barra. Por exemplo, uma criatura com cura acelerada 5/ácido ou fogo recupera 5 PV no início de cada turno, a menos que o dano tenha sido causado por ácido ou fogo."
  ],
  "saves": [
    "Alguns tipos de ataque não são realizados contra a classe de armadura do alvo, porque não envolvem um golpe direto. Em geral estes ataques não precisam de jogadas para acertar, mas o alvo tem direito a um teste para reduzir ou evitar o efeito. Cada ataque tem sua classe de dificuldade para resistir. Quando você faz um teste de resistência, essa CD é seu número-alvo: se conseguir um resultado igual ou maior, você consegue evitar ou reduzir seus efeitos, conforme o caso. Teste de resistência: 1d20 + metade do nível do personagem + modificador de habilidade. Bônus por raça, classe, talentos, magia e itens mágicos também podem afetar esse teste.",
    "* Fortitude. Esta é a sua resistência a ataques que afetam a sua saúde ou vitalidade, como venenos e doenças. Usa o modificador de Força ou Constituição.",
    "* Reflexos. Sua capacidade de esquiva contra ataques de área, como jatos, explosões ou certas armadilhas. Usa o modificador de Destreza ou Inteligência.",
    "* Vontade. Sua capacidade de concentração e resistência a ataques mentais. Usa o modificador de Sabedoria ou Carisma.",
    "Sucessos e falhas automáticas. Um 1 natural (o resultado do d20 é 1) no teste de resistência sempre é uma falha. Um 20 natural (o resultado do d20 é 20) é um sucesso, não importa seu bônus de resistência ou a classe de dificuldade do ataque. Caso o personagem venha adquirir habilidades que permitam adicionar um atributo nas suas resistências novamente ele deve trocar o atributo chave para seu teste. Por exemplo, um personagem que já adicione Car na Vontade e venha a receber a habilidade ‘Graça Divina’ não adiciona Carisma duas vezes na vontade, ele deve trocar o atributo chave da resistência para Sab. CD igual dano: 10 + MdN + Mod. For (ou qualquer Mod. utilizado para causar dano no ataque, apenas um modificador é aplicado aqui e apenas uma vez) Testes de resistência: Todas as habilidades de classe, talentos ou habilidades raciais seguem a mesma fórmula para cálculos. 10 + Metade do Nível de personagem + Modificador de Habilidade relevante."
  ],
  "reductionResistance": [
    "Redução de dano: À criatura ignora parte do dano de ataques físicos (corte, esmagamento ou perfuração). Então, se uma criatura com redução de dano 5 recebe um ataque que causa 8 pontos de dano de corte, vai perder apenas 3 PV. Em alguns casos, certo tipo de dano é capaz de ultrapassar a RD  nesse caso, ele estará descrito após uma barra. Por exemplo, uma criatura com redução de dano 10/mágica ignora 10 pontos de dano de qualquer ataque físico, exceto aqueles realizados por armas mágicas. Redução de dano afeta somente os danos do tipo cortante, perfuração e esmagamento. RD/Mágica: Toda RD que não possuir condição para ser atravessada é considerada RD/Mágica. Itens mágicos menores e médios passam apenas metade da RD. Talentos e Itens mágicos maiores passam completamente.",
    "Resistência a Energia: A criatura ignora parte do dano causado por um tipo de energia. Por exemplo, uma criatura com resistência a fogo 10 que sofra um ataque que cause 15 pontos de dano de fogo perde apenas 5 PV. Resistência à Magia: A criatura recebe um bônus em todos os testes de resistência contra magia. Por exemplo, uma criatura com resistência à magia +4 recebe um bônus de +4 em testes de Fortitude, Reflexos ou Vontade contra magias. Imunidade: A criatura é imune a alguma coisa, como um tipo de ataque, um tipo de energia ou magia. Uma criatura imune à paralisia, por exemplo, não pode ser paralisada por nenhum efeito, seja ele normal ou mágico. Uma criatura imune ao fogo ignora todo o dano causado por fogo, seja ele normal ou mágico. Uma criatura imune à magia ignora todos os efeitos mágicos que a afetem diretamente. Ela não sofre dano de mágias que causem dano, não é enganada por ilusões, etc. Ela ainda pode ser afetada indiretamente,por exemplo, ainda pode cair num buraco causado por uma magia terremoto. Quando uma imunidade é ignorada, o alvo recebe metade do dano que teria sido causado, independente de qualquer habilidade. Caso seja um efeito que permita testes de resistência, também recebe +4 de bônus nos testes relacionados a sua imunidade. Por exemplo, uma criatura imune a fogo que seja alvo da magia Bola de Fogo, teria +4 em seu teste de Reflexos para resistir a magia, e caso receba dano, recebe apenas metade dele."
  ],
  "vulnerability": [
    "A criatura sofre 1,5 vezes (+50%) o dano causado por um tipo de energia. Por exemplo, uma criatura com vulnerabilidade a frio sofrendo um ataque que cause 20 pontos de dano de frio perde 30 PV."
  ],
  "sacrifice": [
    "Quando uma habilidade exige o sacrifício de pontos de vida (PV) ou Componente Material como parte de seu custo de ativação, a criatura ou personagem que a utiliza deve pagar esse custo integralmente no momento em que a habilidade é ativada:",
    "* O sacrifício de PV ocorre antes de qualquer efeito da habilidade se manifestar.",
    "* Se a habilidade for interrompida, anulada ou falhar por qualquer motivo, o material consumido não é recuperado. Uma vez pago, o custo é considerado consumido.",
    "* O sacrifício de PV ignora resistências, redução de dano, imunidades ou habilidades que previnam dano. Esses pontos são removidos diretamente da vida atual da criatura e não podem ser evitados, a menos que uma habilidade especificamente diga que substitui ou reduz custos de ativação.",
    "* Uma criatura não pode ativar uma habilidade cujo custo de PV seja maior que sua vida atual, mas pode ativá-la se isso a reduzir a 0 PVs (ficando inconsciente ou morrendo, conforme o caso)."
  ],
  "initiative": [
    "Em cada rodada, todo personagem tem sua vez, sua chance de agir. Este é seu turno. A Iniciativa determina quais personagens recebem seus turnos primeiro. Teste de Iniciativa. No início de um combate, cada jogador faz um teste de Iniciativa para seu personagem. O mestre faz testes de Iniciativa para os inimigos. Aqueles com os resultados mais altos agem primeiro. Não é preciso fazer novos testes de Iniciativa; a ordem se mantém igual durante todo o combate. Quando dois participantes têm os resultados iguais em seus testes de Iniciativa, aquele com o maior bônus de Iniciativa age primeiro. Em caso de empate, aquele com maior modificador de Destreza age primeiro. Se mesmo assim o empate persistir, eles fazem um novo teste de Iniciativa apenas entre si, para decidir quem age primeiro.",
    "* Entrando na batalha. Se um personagem entra na batalha depois que ela começou, faz um teste de Iniciativa e age quando seu turno chegar, na rodada seguinte.",
    "* Surpresa. Quando o combate começa, se você não percebeu seus inimigos, está surpreendido. Se você está ciente de seus inimigos, mas eles não estão cientes de você, eles é que estão surpreendidos. Caso os dois lados tenham se percebido, ninguém está surpreendido. E se nenhum lado percebe o outro... Bem, nenhum combate acontece!",
    "* Percebendo os inimigos.  O mestre determina quem está ciente de seus inimigos no começo do combate. Em geral ele diz aos jogadores para fazer testes de Percepção contra uma Classe de Dificuldade, ou resistidos contra os testes de Furtividade dos inimigos (caso estes estejam sendo cautelosos)."
  ],
  "roundIntro": [
    "Uma rodada representa cerca de seis segundos no mundo do jogo. Em sua Iniciativa, cada jogador tem a chance de executar uma ou mais ações. Assim, a rodada começa quando o primeiro jogador (aquele que teve Iniciativa mais alta) vai agir, e termina após o último (aquele com Iniciativa mais baixa) fazê-lo. Mas a rodada também é o tempo entre uma Iniciativa e a mesma Iniciativa na rodada seguinte. Efeitos que duram certo número de rodadas terminam imediatamente antes do mesmo resultado de Iniciativa quando se iniciaram, após o número apropriado de rodadas."
  ],
  "actionTypes": [
    "A cada rodada, no seu turno, você pode fazer uma ação padrão e uma ação de movimento (ou o contrário). Você pode trocar sua ação padrão por uma ação de movimento, para fazer duas ações de movimento. Mas não pode fazer o inverso (trocar sua ação de movimento para uma ação padrão). Você também pode abrir mão das duas ações (padrão e de movimento) para fazer uma ação completa. Portanto, em um turno você pode executar:",
    "* Uma ação padrão e uma ação de movimento (ou vice-versa).",
    "* Duas ações de movimento.",
    "* Uma ação completa.",
    "Você também pode executar qualquer quantidade de ações livres. E uma reação por Rodada. Ação padrão: Basicamente, uma ação padrão permite que você execute uma tarefa. Fazer um ataque ou conjurar uma magia são as ações padrão mais comuns. Ação de movimento: Esta ação representa algum tipo de movimento físico. Seu uso mais comum é percorrer uma distância igual a seu deslocamento. Levantar-se, sacar uma arma, abrir uma porta, beber uma poção e montar num cavalo também são ações de movimento. Ação livre: Esta ação não exige quase nenhum tempo e esforço. Lançar um objeto no chão, ou gritar uma ordem simples, são exemplos de ações livres, mas o mestre sempre pode decidir que uma ação é complicada demais para ser livre. Por exemplo, dizer uma frase curta é uma ação livre, mas recitar todo o mito da criação leva várias rodadas! Reação: Reação é um reflexo ou resposta automática, que pode ocorrer mesmo quando não é seu turno. Ação completa: Este tipo de ação exige todo o seu tempo e esforço durante uma rodada. Para uma ação completa, você deve abrir mão de sua ação padrão e sua ação de movimento mas, normalmente, você ainda pode realizar ações livres e reações."
  ],
  "standardActions": [
    {
      "title": "Ataque corpo-a-corpo",
      "paragraphs": [
        "Com uma arma corpo-a-corpo, você pode atacar qualquer inimigo dentro de seu alcance natural (1,5m para criaturas Pequenas e Médias; ou um inimigo adjacente, no mapa). Personagens maiores, ou usando certas armas, podem atacar mais longe (e também executar outras manobras que exigem uma jogada de ataque, como agarrar, derrubar...). Caso realize um ataque com um Escudo, perde os benefícios de CA até o começo do seu próximo turno."
      ]
    },
    {
      "title": "Ataques à distância",
      "paragraphs": [
        "Com uma arma de ataque à distância, você pode atacar qualquer inimigo que consiga ver, e que esteja a até quatro vezes o alcance da arma."
      ]
    },
    {
      "title": "Atirando em Combate Corpo-a-Corpo",
      "paragraphs": [
        "Quando faz um ataque à distância contra um alvo envolvido em combate corpo-a-corpo, você sofre uma penalidade de -4 na rolagem de ataque. Um personagem está em combate corpo-a-corpo se estiver a 1,5m (ou adjacente, no tabuleiro) de qualquer inimigo."
      ]
    },
    {
      "title": "Ataques Adicionais",
      "paragraphs": [
        "A cada 6 de BBA um personagem recebe um ataque adicional com uma de suas armas ou armas naturais, estes ataques adicionais podem devem ser feitos na mesma ação padrão de um Ataque Corpo-a-corpo ou a distância. Ataques extras com armas de ataque a distância não podem ser realizados com armas que possuam tempo de recarga maior que ação livre."
      ]
    },
    {
      "title": "Combater com Duas Armas",
      "paragraphs": [
        "Um personagem pode realizar um ataque extra por turno com uma arma que possua a propriedade Leve, porém, este ataque causa apenas os dados da arma em dano, sem receber nenhum bônus extra por nível ou habilidade. Um personagem não pode realizar este ataque adicional na mesma rodada que utilizou de Armas Naturais."
      ]
    },
    {
      "title": "Armas Naturais",
      "paragraphs": [
        "Um personagem que possua pelo menos uma arma natural pode realizar um ataque extra por turno com todos os bônus relevantes. Um personagem não pode realizar este ataque adicional na mesma rodada que utilizou de Combater com Duas Armas."
      ]
    },
    {
      "title": "Ataques de Toque",
      "paragraphs": [
        "Às vezes você precisa apenas tocar o alvo, nesses casos, faça uma jogada de ataque normal contra o CA do alvo. Se você for bem-sucedido, acertou o ataque de toque."
      ]
    },
    {
      "title": "Manobras de Combate",
      "paragraphs": [
        "Uma manobra é um ataque corpo-a-corpo para fazer algo diferente de causar dano como arrancar a arma do oponente ou empurrá-lo para um abismo. Faça um teste de manobra (uma jogada de ataque corpo-a-corpo) oposto com a criatura. Esse teste recebe +4 para cada categoria acima de Médio, ou -4 para cada categoria abaixo de Médio. Mesmo possuindo múltiplos ataques, uma manobra sempre toma uma ação padrão."
      ]
    },
    {
      "title": "Agarrar",
      "paragraphs": [
        "Caso você consiga agarrar um inimigo duas ou mais categorias de tamanho maior que você, o inimigo agarrado fica apenas desprevenido e você não pode arrastá-lo. Um personagem fazendo um ataque à distância contra um alvo envolvido na manobra de agarrar determina aleatoriamente qual alvo é acertado (50% de chance para cada). Enquanto agarra uma criatura, você fica com uma mão ocupada e move-se metade do deslocamento normal (mas arrastando a criatura que estiver agarrando). Você pode soltá-la com uma ação livre. Enquanto agarra uma criatura, você pode com uma ação padrão e vencendo um teste de manobra oposto causar dano igual a um Ataque desarmado a criatura que estiver agarrando, se estiver utilizando uma arma para agarrar pode utilizar os dados dela no lugar."
      ]
    },
    {
      "title": "Atropelar",
      "paragraphs": [
        "Esta manobra serve para derrubar o alvo e/ou avançar sem que ele consiga ficar no caminho. O alvo pode escolher resistir ou dar-lhe espaço. Se o alvo decide sair do caminho, nenhum teste é necessário. Se o alvo resiste, faça o teste de manobra oposto; se você vencer, consegue derrubar o alvo e também avançar. Se o alvo vence, continua de pé e detém seu avanço. Atropelar é uma ação padrão, ou uma ação livre se tentado durante uma investida."
      ]
    },
    {
      "title": "Derrubar. Você derruba o alvo",
      "paragraphs": [
        "Esta queda normalmente não causa dano, mas pode exigir um teste de Acrobacia para evitar uma queda de grande altura."
      ]
    },
    {
      "title": "Desarmar. Você derruba um item que a criatura esteja segurando",
      "paragraphs": [
        "Normalmente o item cai no mesmo lugar em que o alvo está (a menos que o alvo esteja voando, ou sobre uma ponte, etc)."
      ]
    },
    {
      "title": "Empurrar. Você empurra a criatura 1,5m",
      "paragraphs": [
        "Para cada 5 pontos de diferença entre os testes, você empurra o alvo mais 1,5m. Você deve avançar junto com o alvo para empurrá-lo, e pode avançar até o limite do seu deslocamento."
      ]
    },
    {
      "title": "Separar",
      "paragraphs": [
        "Você atinge um item que a criatura esteja segurando, com a intenção de quebrá-lo. Caso falhe na manobra, o item usado na manobra recebe metade do dano que deveria ser causado. Caso um Ataque Desarmado tenha sido usado, você sofre esse dano."
      ]
    },
    {
      "title": "Defender. Você se prepara e fortalece suas defesas",
      "paragraphs": [
        "Você recebe +4 de CA e Reflexos até o início do seu próximo turno. Você não pode realizar Ataques de Oportunidades enquanto estiver usando Defender."
      ]
    },
    {
      "title": "Fintar",
      "paragraphs": [
        "Para confundir um inimigo, faça um teste de enganação oposto a um teste de Iniciativa do alvo. Em caso de sucesso, o oponente estará desprevenido quando você fizer seu próximo ataque contra ele, mas apenas até o fim da próxima rodada."
      ]
    },
    {
      "title": "Lançar uma magia",
      "paragraphs": [
        "Quase todas as magias exigem uma ação padrão para serem conjuradas."
      ]
    },
    {
      "title": "Preparar",
      "paragraphs": [
        "Esta ação permite que você fique pronto para realizar uma ação (padrão ou de movimento) mais tarde, depois da sua Iniciativa, mas antes da sua Iniciativa na próxima rodada. Para isso, diga a ação que você vai tentar, e em quais circunstâncias. Então, a qualquer momento antes de seu próximo turno, você pode fazer a ação preparada como uma reação a essas circunstâncias. Se, no seu próximo turno, você ainda não tiver realizado sua ação preparada, você não tem mais direito a realizá-la (embora possa preparar a mesma ação de novo)."
      ]
    },
    {
      "title": "Usar um talento",
      "paragraphs": [
        "Alguns talentos, como Comandar, exigem uma ação padrão para serem usados."
      ]
    },
    {
      "title": "Usar uma perícia",
      "paragraphs": [
        "Algumas perícias, como Conhecimentos, exigem uma ação padrão para serem usados."
      ]
    }
  ],
  "moveActions": [
    {
      "title": "Levantar-se",
      "paragraphs": [
        "Levantar do chão exige uma ação de movimento."
      ]
    },
    {
      "title": "Movimentar-se",
      "paragraphs": [
        "Você pode percorrer uma distância igual a seu deslocamento (tipicamente 9m para raças de tamanho Médio, ou 6m para Pequeno). Outros tipos de movimento, como nadar, escalar ou cavalgar, também usam essa ação."
      ]
    },
    {
      "title": "Manipular item",
      "paragraphs": [
        "Muitas vezes, manipular um item exige uma ação de movimento. Pegar um objeto em uma mochila, abrir ou fechar uma porta, beber uma poção e atirar uma corda para alguém são ações de movimento."
      ]
    },
    {
      "title": "Sacar ou guardar arma",
      "paragraphs": [
        "Sacar ou guardar uma arma exige uma ação de movimento. A perícia Iniciativa permite sacar ou guardar uma arma por rodada como uma ação livre."
      ]
    }
  ],
  "fullActions": [
    {
      "title": "Corrida. Você pode correr mais rapidamente que seu deslocamento normal",
      "paragraphs": [
        "Veja a perícia Atletismo para detalhes."
      ]
    },
    {
      "title": "Investida. Também conhecida como \"carga\"",
      "paragraphs": [
        "Você pode avançar até o dobro de seu deslocamento (e no mínimo 3m) em linha reta e, no fim do movimento, fazer um ataque corpo-a-corpo. Você recebe +2 na jogada de ataque, devido ao impulso, mas sofre penalidade de -2 na classe de armadura até o início de seu próximo  turno, porque sua guarda fica aberta. Você não pode fazer uma investida em terreno difícil. Em uma investida, você pode usar a manobra atropelar como uma ação livre."
      ]
    },
    {
      "title": "Usar um talento",
      "paragraphs": [
        "Alguns talentos, exigem uma ação completa para serem usados."
      ]
    }
  ],
  "freeActions": [
    {
      "title": "Atrasar",
      "paragraphs": [
        "Escolhendo atrasar sua ação, você age mais tarde na ordem de Iniciativa voluntariamente pelo resto do combate. Quando sua nova (e menor) Iniciativa chegar, você age normalmente. Você pode especificar este novo valor de Iniciativa, ou apenas esperar até algum momento para agir, visando sua nova Iniciativa neste ponto. Atrasar é útil para ver o que seus amigos ou inimigos farão, antes de decidir o que você mesmo fará."
      ]
    },
    {
      "title": "Limites para atrasar",
      "paragraphs": [
        "Você pode atrasar sua Iniciativa até -10 menos seu bônus total de Iniciativa. Quando a contagem de Iniciativa chega a esse ponto, você deve agir, ou abrir mão de qualquer ação na rodada. Por exemplo, um personagem com um bônus de Iniciativa +3 pode esperar até a contagem de Iniciativa chegar até -13. Nesse ponto, ele deve agir ou desistir de seu turno."
      ]
    },
    {
      "title": "Vários atrasos",
      "paragraphs": [
        "Se vários personagens estão atrasando suas ações, aquele com o maior bônus de Iniciativa (ou a maior Destreza, em caso de empate) tem a vantagem. Se dois ou mais personagens que estejam atrasando quiserem agir na mesma contagem de Iniciativa, aquele com maior bônus age primeiro. Se dois ou mais personagens estão tentando agir um depois do outro, aquele com o maior bônus de Iniciativa tem direito de agir depois."
      ]
    },
    {
      "title": "Falar. Em geral, falar é uma ação livre",
      "paragraphs": [
        "Conjurar magias, ou usar habilidades de classe que dependem da voz (como música de bardo), não são ações livres. O mestre também pode limitar aquilo que você consegue falar durante uma rodada (vinte palavras são o limite padrão)."
      ]
    },
    {
      "title": "Jogar-se no chão",
      "paragraphs": [
        "Jogar-se no chão é uma ação livre (embora se levantar seja uma ação de movimento)."
      ]
    },
    {
      "title": "Largar um item",
      "paragraphs": [
        "Deixar cair um item que esteja segurando é uma ação livre. Mas deixar cair (ou jogar) um item com a intenção de acertar algo é uma ação padrão. E deixar cair (ou jogar) um item para que outra pessoa agarre é uma ação de movimento."
      ]
    }
  ],
  "reactions": [
    {
      "title": "Ataque de Oportunidade",
      "paragraphs": [
        "Com uma arma corpo-a-corpo, você pode atacar qualquer inimigo dentro de seu alcance natural que fique desprevenido fora de seu turno."
      ]
    },
    {
      "title": "Percepção",
      "paragraphs": [
        "Quando um inimigo se esconde em combate ou você se aproxima de uma armadilha pode utilizar sua reação para fazer um teste de percepção para notar algo escondido."
      ]
    },
    {
      "title": "Preparar",
      "paragraphs": [
        "Caso a condição de sua ação preparada ocorra, você pode utilizar sua reação para executá-la."
      ]
    },
    {
      "title": "Lançar uma magia",
      "paragraphs": [
        "Algumas magias utilizam da sua reação para serem conjuradas ou ativarem seus efeitos como contingência."
      ]
    },
    {
      "title": "Usar um talento",
      "paragraphs": [
        "Alguns talentos, como Poder Latente, exigem uma reação para serem usados."
      ]
    }
  ],
  "wounds": [
    "Se ficar com 0 PV ou menos, você cai inconsciente e começa a sangrar. No início de seu turno, faça um teste de Constituição (CD 15) para estabilizar e parar de sangrar. Se falhar, você perde 1d4 pontos de vida e continua sangrando. Você deve repetir o teste a cada rodada, até estabilizar ou morrer. Um personagem sangrando pode ser estabilizado com um teste de Cura (CD 15), ou com qualquer magia ou efeito de que cure pelo menos 1 PV. Se restaurar seus pontos de vida para 1 ou mais, você recobra a consciência e pode agir normalmente. Quando seus pontos de vida chegam a um número negativo igual à metade de seus PV totais, você morre. Então, um personagem com 30 PV ainda estará vivo com -14 PV, mas morre quando chega em -15 PV."
  ],
  "healing": [
    {
      "title": null,
      "paragraphs": [
        "Depois de sofrer dano, você pode recuperar seus pontos de vida naturalmente, com descanso, ou com magia de cura. Cura natural. Descanso rápido: Com um descanso rápido (pelo menos uma hora) você pode realizar um Teste de Constituição e recuperar o resultado em vida. A partir do nível 5, passa a recuperar o dobro do resultado, no nível 10 e em diante, o triplo, e a partir do nível 15, o quádruplo. Descanso longo: Com um descanso longo (pelo menos oito horas) você recupera todos os seus PVs e PMs, 1 ponto de dano de Habilidade temporária e pode realizar testes para resistir a doenças."
      ]
    },
    {
      "title": "Cura mágica",
      "paragraphs": [
        "Certas habilidades, magias e itens mágicos podem recuperar pontos de vida. O efeito normalmente é instantâneo."
      ]
    },
    {
      "title": "Limite de cura",
      "paragraphs": [
        "Você nunca pode recuperar mais pontos de vida do que perdeu. Mesmo a cura mágica não pode elevar seus PV acima do seu total original."
      ]
    }
  ],
  "nonlethal": [
    "Quase todo o dano causado em condições normais (armas, armadilhas, magias de ataque...) é letal. Dano não-letal funciona como dano letal, mas não conta para determinar quando você vai morrer. Por exemplo, se você sofrer dano não-letal suficiente para levar seus PV a 0 ou menos, vai cair inconsciente. No entanto, mesmo que esse dano não-letal seja suficiente para levar seus PV a um número negativo igual a metade de seus pontos de vida, você não morrerá. Normalmente, armas causam dano letal. Você pode usar uma arma para causar dano não-letal batendo com as partes não afiadas da arma, controlando a força dos golpes ou evitando pontos vitais, mas sofre uma penalidade de -4 na jogada de ataque. Ataques desarmados e certas armas específicas causam dano não-letal. Você pode usar um ataque desarmado ou uma arma que causa dano não-letal para causar dano letal, mas sofre a mesma penalidade de -4 na jogada de ataque."
  ],
  "movement": [
    {
      "title": "Deslocamento",
      "paragraphs": [
        "Esta é a medida de quantos metros você pode percorrer com uma ação de movimento. O deslocamento depende de sua raça, sendo normalmente 9m para raças Médias e 6m para Pequenas, mas há exceções (anões são Médios e têm deslocamento 6m, enquanto Goblins são Pequenos e têm deslocamento 9m)."
      ]
    },
    {
      "title": "Atravessar um espaço ocupado",
      "paragraphs": [
        "Você pode se mover livremente através de um espaço ocupado por um aliado. No entanto, não pode atravessar um quadrado ocupado por um inimigo, a menos que ele esteja indefeso (inconsciente, paralisado), ou seja pelo menos três categorias de tamanho maior ou menor que você. Você pode atravessar um espaço ocupado por um inimigo usando a perícia Acrobacia ou a manobra atropelar."
      ]
    },
    {
      "title": "Carga",
      "paragraphs": [
        "Se você estiver carregando uma carga pesada (veja em Equipamento), seu deslocamento diminui em 3m."
      ]
    },
    {
      "title": "Diagonais. Em um mapa, mover-se na diagonal custa o dobro",
      "paragraphs": [
        "Ou seja, andar 1,5m na diagonal conta como 3m."
      ]
    },
    {
      "title": "Outros tipos de movimento",
      "paragraphs": [
        "Além de apenas andar, você pode usar uma ação de movimento para se mover de outras maneiras. Consulte as perícias Acrobacia e Atletismo."
      ]
    },
    {
      "title": "Terreno difícil",
      "paragraphs": [
        "Lugares acidentados, como um pântano lamacento, neve profunda, florestas cheias de raízes ou ruínas com destroços, são terreno difícil. Mover-se em terreno difícil custa o dobro. Ou seja, você se move metade do deslocamento normal ou gasta 3m de deslocamento por quadrado, em vez de 1,5m. Atravessar um lugar muito apertado também conta como terreno difícil."
      ]
    }
  ],
  "opportunity": [
    "Em combate, às vezes você acaba fazendo algo que o distrai e deixa vulnerável. Quando isso acontece, inimigos que estejam perto podem aproveitar essa brecha e atacar. Área de Ameaça. Você ameaça qualquer lugar que consiga alcançar com um ataque corpo-a-corpo. Normalmente isso significa até 1,5m de você, mas pode ser mais que isso para personagens maiores que Médio, ou usando certas armas (como a alabarda). Um personagem só pode fazer ataques de oportunidade contra alvos que estejam nessa área. Provocando Ataques de Oportunidade. Duas coisas provocam ataques de oportunidade: quando o alvo abaixa sua guarda, ou quando sai de uma área ameaçada.",
    "* Abaixar a guarda: algumas ações complicadas, e que não tenham ligação direta com o oponente ameaçando sua área, distraem você e provocam ataques de oportunidade. Coisas como fazer um ataque à distância (contra outro alvo), lançar uma magia, levantar-se do chão, recarregar uma arma de disparo, prestar primeiros-socorros, abrir uma fechadura ou beber uma poção. Atacar desarmado também provoca ataques de oportunidade, pois você está colocando partes do corpo intencionalmente ao alcance das armas do oponente. Tentar manobras especiais de combate (agarrar, atropelar, derrubar, desarmar, empurrar, separar) também provoca ataques de oportunidade. Ações livres nunca provocam ataques de oportunidade.",
    "* Sair de uma área ameaçada: quando você dá as costas ao oponente, também dá a ele uma ótima chance para atacá-lo. Sair de uma área ameaçada provoca um ataque de oportunidade. Para afastar-se de um oponente sem dar-lhe a chance de atacar, use a manobra recuar ou a perícia Acrobacia.",
    "Fazendo um ataque de oportunidade. Se um oponente que esteja na área ameaçada faz algo que provoca ataques de oportunidade, você pode imediatamente fazer um ataque corpo-a-corpo (nunca à distância) contra ele, mesmo que não seja sua vez de agir. Esse ataque não conta como uma ação, e acontece antes da ação que o provocou: por exemplo, se uma clériga nagah em sua área ameaçada tenta conjurar uma magia, você pode fazer um ataque contra ela antes que a magia seja executada (e com boas chances de impedir a conjuração). Você não precisa fazer um ataque de oportunidade se não quiser. Cada personagem pode fazer apenas um ataque de oportunidade por turno. Recuar. Você pode afastar-se do oponente de maneira cautelosa, sem dar-lhe a chance de atacá-lo pelas costas. Fazer isso exige uma ação padrão (além da ação de movimento necessária para deslocar-se). Note que você só pode precaver-se desta forma contra um único oponente por vez: caso esteja sendo ameaçado por mais de um inimigo, só poderá evitar o ataque de um deles. Conjurar defensivamente. Um conjurador pode executar uma magia sem provocar ataques de oportunidade, com um teste bem-sucedido de Vontade (CD 15 + nível da magia). Talentos. Alguns talentos têm certos efeitos sobre ataques de oportunidade:",
    "* Um personagem desarmado não tem uma área de ameaça, e provoca ataques de oportunidade quando ataca desarmado, a menos que tenha o talento Ataque Desarmado Aprimorado ou uma arma natural.",
    "* O talento Escola a Distância lhe permite atacar inimigos sem provocar ataques de oportunidade.",
    "* Se você tem o talento correspondente a uma manobra de combate aprimorada, então pode executar essa manobra sem provocar ataques de oportunidade.",
    "* O talento Magias em Combate oferece +4 em testes de Vontade para conjurar defensivamente.",
    "* O talento Reflexos em Combate permite fazer mais ataques de oportunidade por rodada, até um limite igual a seu bônus de Destreza + 1."
  ],
  "specialConditions": [
    {
      "title": "Camuflagem",
      "paragraphs": [
        "Você recebe camuflagem quando algum efeito atrapalha a visão dos inimigos. Ataques contra você têm 20% de chance de falha, não importa se a jogada de ataque acerta ou não. Você recebe camuflagem total quando seus inimigos não podem vê-lo, A chance de falha em camuflagem total é 50%. Personagens com visão na penumbra (como elfos) ignoram camuflagem normal por escuridão. Personagens com visão no escuro (anões, goblins e lefou) ignoram a camuflagem total por escuridão."
      ]
    },
    {
      "title": "Cobertura",
      "paragraphs": [
        "Você recebe cobertura quando está atrás de algo que bloqueia o ataque dos inimigos, como uma árvore, uma muralha de castelo, a lateral de uma carroça ou uma criatura maior. A cobertura fornece +4 na classe de armadura. Trace uma linha reta entre os cantos. Se a linha é interrompida por um obstáculo ou criatura, o alvo tem cobertura. O alvo não recebe cobertura se a linha seguir ao longo de um obstáculo, ou apenas tocar a ponta de um obstáculo. Você recebe cobertura total quando seus inimigos não puderem alcançá-lo, por exemplo, atrás de uma parede. A cobertura total impede que você seja atacado."
      ]
    },
    {
      "title": "Flanquear",
      "paragraphs": [
        "Quando você luta corpo-a-corpo com um oponente, e um aliado faz o mesmo no lado oposto ou seja, o inimigo está exatamente entre vocês, então vocês estão flanqueando o alvo. Ambos recebem +2 em suas jogadas de ataque contra o alvo flanqueado. Não se pode flanquear à distância."
      ]
    },
    {
      "title": "Lento",
      "paragraphs": [
        "O personagem só pode realizar uma ação padrão ou de movimento, mas não ambas por rodada. Além disso sofre -2 nas jogadas de ataque, CA e testes de reflexo. Move-se metade do deslocamento."
      ]
    },
    {
      "title": "Ações Adicionais",
      "paragraphs": [
        "Independente de sua fonte, ações adicionais nunca se acumulam. Por exemplo, um Elfo montado não receberia duas ações de movimento adicionais (Uma por Vigilancia e Uma por Combate Montado) ele receberia apenas uma."
      ]
    }
  ],
  "attackerTable": {
    "headers": [
      "O atacante está...",
      "Modificador na jogada de ataque"
    ],
    "rows": [
      [
        "Assustado",
        "-2"
      ],
      [
        "Caído",
        "-4"
      ],
      [
        "Cego",
        "50% de chance de falha"
      ],
      [
        "Em posição mais alta",
        "+1"
      ],
      [
        "Flanqueando o alvo",
        "+2 (apenas para ataques corpo-a-corpo)"
      ],
      [
        "Invisível",
        "+4 (apenas para ataques corpo-a-corpo)"
      ],
      [
        "Ofuscado",
        "-1"
      ]
    ]
  },
  "targetTable": {
    "headers": [
      "O alvo está...",
      "Modificador na CA"
    ],
    "rows": [
      [
        "Caído",
        "-4 contra ataques corpo-a-corpo, +4 contra ataques à distância"
      ],
      [
        "Cego",
        "-8"
      ],
      [
        "Desprevenido",
        "-4"
      ],
      [
        "Sob Camuflagem",
        "20% de chance de falha"
      ],
      [
        "Sob Camuflagem Total",
        "50% de chance de falha"
      ],
      [
        "Sob Cobertura",
        "+4"
      ],
      [
        "Sob Cobertura Total",
        "O alvo não pode ser atacado"
      ]
    ]
  },
  "sizes": {
    "intro": [
      "Assim como raças pequenas sofrem ajustes em suas jogadas de ataque, CA e Furtividade, o mesmo vale para seres de outros tamanhos é mais fácil acertar ou perceber um gigante do que um inseto! Criaturas de tamanho Grande ou maior também usam regras um pouco diferentes. Primeiro, elas ocupam mais lugar no tabuleiro (uma criatura Grande ocupa um espaço de 3m). Segundo, elas têm alcance natural superior a 1,5m, sendo capazes de fazer ataques corpo-a-corpo contra alvos mais distantes. Se você usa ataques de oportunidade, criaturas com mais alcance também tem uma área de ameaça maior; uma criatura enorme pode atacar corpo-a-corpo criaturas a até 4,5m de distância."
    ],
    "headers": [
      "Categoria",
      "Exemplo",
      "Espaço",
      "Alcance",
      "CA e Ataque",
      "Furtividade"
    ],
    "rows": [
      [
        "Ínfimo",
        "Mosca",
        "15 cm",
        "1,5 m",
        "+8",
        "+16"
      ],
      [
        "Diminuto",
        "Sapo",
        "30 cm",
        "1,5 m",
        "+4",
        "+12"
      ],
      [
        "Mínimo",
        "Gato, sprite",
        "75 cm",
        "1,5 m",
        "+2",
        "+8"
      ],
      [
        "Pequeno",
        "Halfling",
        "1,5 m",
        "1,5 m",
        "+1",
        "+4"
      ],
      [
        "Médio",
        "Humano",
        "1,5 m",
        "1,5 m",
        "+0",
        "+0"
      ],
      [
        "Grande",
        "Bugbear",
        "3 m",
        "3 m",
        "-1",
        "-4"
      ],
      [
        "Enorme",
        "Ente",
        "4,5 m",
        "4,5 m",
        "-2",
        "-8"
      ],
      [
        "Descomunal",
        "Dragão venerável",
        "6 m",
        "6 m",
        "-4",
        "-12"
      ],
      [
        "Colossal",
        "Senhor das Profundezas",
        "9 m",
        "9 m",
        "-8",
        "-16"
      ]
    ],
    "footer": [
      "Aumentos de categoria não são cumulativos, independente da fonte. Ex: Um personagem com Grandão(+1), Arma de adamante(+1) e Aumentar pessoa(+1) aumentará a categoria de dano em 1 invés de 3."
    ]
  },
  "mounted": [
    "Sua montaria não rola Iniciativa. Ela age junto com você (ou seja, em sua Iniciativa). Você usa o valor de deslocamento da montaria e não o seu.",
    "Se você não é treinado em Cavalgar, precisa gastar uma ação de movimento e fazer um teste de Cavalgar (CD 10) por rodada para guiar a montaria. Mas um personagem treinado em Cavalgar não precisa gastar uma ação para guiar a montaria; então ele poderia percorrer o deslocamento da montaria e então atacar um inimigo, por exemplo.",
    "Montar ou desmontar é uma ação de movimento.",
    "Se uma única habilidade atingir tanto você quanto sua montaria vocês realizam apenas um teste para ambos utilizando o maior valor entre os dois. Além disso, você e sua montaria compartilham ações, enquanto estiver montado você e sua montaria tem direito a uma ação padrão e uma de movimento por rodada. Por fim, enquanto você está montado, você e sua montaria passam a contar como uma única criatura uma categoria de tamanho acima da montaria para efeitos de tamanhos de passagens e corredores.",
    "O balanço da montaria em movimento torna mais difícil atacar a distância (-2 na jogada de ataque) e conjurar magias: se falhar em um teste de Vontade (CD 15 + nível da magia), a magia não funciona, mas os PM são gastos mesmo assim."
  ]
} as const;
