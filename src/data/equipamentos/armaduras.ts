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
