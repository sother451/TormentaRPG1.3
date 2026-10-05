export interface SpellAlteration {
  id: string;
  name: string;
  level: number;
  text: string;
  levels?: number[];
}
export interface NewSpellList {
  level: number;
  tradition: string;
}
export interface NewSpell {
  id: string;
  name: string;
  school: string;
  action: string;
  range: string;
  effect: string;
  duration: string;
  resistance: string;
  description: string;
  lists: NewSpellList[];
}
export const magicRules = [
  {
    "id": "geral",
    "title": "Geral",
    "paragraphs": [
      "Magias de Nível 0: Recebem um bônus nos dados de dano igual ao maior nível de magia que o conjurador possa usar - 2.",
      "Duração: Um conjurador sempre sabe a duração de suas magias.",
      "Um alvo bem sucedido em um TdR sente uma força hostil ou um formigamento, mas não consegue deduzir a natureza nem direção do ataque.(exceto em casos óbvios, como um relâmpago) O conjurador sente quando criaturas falham em uma magia, mas não em magias de área. Magias benéficas podem ser resistidas, negando seu efeito. Um alvo sempre pode escolher falhar em TdR.",
      "Qualquer habilidade que simule magia ou gere um efeito de uma magia está sujeita a efeitos que afetem magias, independente do que a habilidade original diga.",
      "Um conjurador arcano que saiba utilizar armadura não é afetado pela chance de falha arcana.",
      "Um conjurador arcano precisa de uma mão livre ou um item de poder (Varinhas, cajados, orbes, etc.) para conjurar. Você fica desprevenido quando lança uma magia.",
      "Algumas magias receberam a propriedade Aprimorar, essas magias recebem efeitos adicionais de acordo com os PMs gastos em sua conjuração. O máximo de PMs que pode ser gasto desta maneira é igual ao maior nível de magia que o conjurador possa utilizar."
    ]
  },
  {
    "id": "descritores",
    "title": "Descritores",
    "paragraphs": [
      "Em geral, magias que causam dano têm o mesmo descritor que o tipo de dano, caso a magia não tenha um descritor de dano, use a tabela a seguir:"
    ]
  },
  {
    "id": "escolas",
    "title": "Escolas",
    "paragraphs": [
      "Abjuração: Uma magia que crie uma barreira que impeça a passagem de criaturas não pode ser utilizada para empurrar, tentar empurrar uma criatura faz com que a magia se encerre.  Conjuração: Criaturas e objetos invocados não podem aparecer dentro de objetos ou criaturas.  Evocação: Magias elementais (Fogo, Ar, Terra, Água, Sónico, Ácido, Eletricidade, Frio e etc) passam a ser da escola de Evocação"
    ]
  },
  {
    "id": "componentes-materiais",
    "title": "Componentes Materiais",
    "paragraphs": [
      "Os componentes são consumidos do personagem no momento da conjuração(a não ser que algo contrário seja dito na magia), não sendo necessário ação para pegar o mesmo. Caso o componente esteja em algum lugar extradimensional(Mochila de carga, arca segura, etc) ele deve ser pego normalmente com qualquer ação que seja necessária, a não ser que tenham sido marcados com uma Marca Arcana."
    ]
  },
  {
    "id": "custo-de-xp",
    "title": "Custo de XP",
    "paragraphs": [
      "Caso não esteja utilizando XP, a conversão de XP para ouro é 1 por 5."
    ]
  },
  {
    "id": "concentracao",
    "title": "Concentração",
    "paragraphs": [
      "Magias pessoais com duração diferente de instantânea ou com efeitos benéficos cujo a duração original sejam de 1 Minuto passam a ser magias de concentração, elas passam a durar 10 Minutos ou até terem sua concentração quebrada e recebem a Tag (D)  Magias que infrinjam efeitos negativos cujo a duração seja de 1 Minuto passam a ser magias de concentração ou até terem sua concentração quebrada e recebem a Tag (D).  É possível ter apenas uma única magia concentrada por vez originalmente e não é necessário gastar ações para mantê-la ativa. No caso do conjurador sofrer dano ou sofrer uma manobra (Agarrar, Derrubar ou Atropelar) ele deve fazer um teste de Vontade CD 10 + Duas vezes o ciclo da magia ou o efeito da magia se encerra."
    ]
  },
  {
    "id": "magias-de-cura",
    "title": "Magias de cura",
    "paragraphs": [
      "Magias de cura sucessivas na mesma rodada perdem 50% de eficiência. Ou seja, se em uma rodada você receber uma cura de 4d6+8 e outra de 6d6+10, você irá curar um total de 7d6+13. Esta penalidade não se aplica a PVs temporários ou cura acelerada."
    ]
  },
  {
    "id": "substituir-magias",
    "title": "Substituir Magias",
    "paragraphs": [
      "Ao adquirir níveis em uma classe, se você fosse adquirir uma nova magia por conta deste nível, você pode além de adicionar novas magias à sua lista, trocar uma Magia qualquer de ciclo menor que possuía por uma magia nova do ciclo mais alto que possa conjurar."
    ]
  },
  {
    "id": "preparacao",
    "title": "Preparação",
    "paragraphs": [
      "Conjuradores que preparam magia não gastam PM ao fazê-lo. Ao invés disso, escolhem um número igual a 1 + Metade do Nível + MdC de magias para preparar. Essas magias podem ser conjuradas livremente durante o dia com os PMs do conjurador, podendo receber efeitos de talentos metamágicos e habilidades de classe. Ex: Um Clérigo Nv 20 com Mod. Sab. 9 poderia preparar 120 magias. Já um mago de Nível 20 e Mod. Int 11 poderia preparar 22 magias."
    ]
  }
] as const;
export const spellAlterations: SpellAlteration[] = [
  {
    "id": "aprimorar-familiar",
    "name": "Aprimorar Familiar",
    "level": 1,
    "text": "Aprimorar (+2 PM): O bônus da magia aumenta em +1."
  },
  {
    "id": "arma-elemental",
    "name": "Arma Elemental",
    "level": 1,
    "text": "O conjurador pode escolher qual versão quer usar, pagando PM de acordo."
  },
  {
    "id": "arma-magica",
    "name": "Arma Mágica",
    "level": 1,
    "text": "Aprimorar (+2 PM): O bônus da magia aumenta em +1."
  },
  {
    "id": "armadura-arcana",
    "name": "Armadura Arcana",
    "level": 1,
    "text": "Aprimorar (+2 PM): O bônus da magia aumenta em +1. Esta magia pode ser aprimorada duas vezes (Para um total de +5 e +6 respectivamente no quinto ciclo)"
  },
  {
    "id": "ataque-certeiro",
    "name": "Ataque Certeiro",
    "level": 1,
    "text": "Seu próximo ataque é considerado um 20 automático.  Aprimorar (+3 PM): O número de ataques considerados um 20 automático aumenta em +1."
  },
  {
    "id": "aumentar-pessoa",
    "name": "Aumentar Pessoa",
    "level": 1,
    "text": "Aprimorar (+4 PM): A criatura aumenta em uma categoria de tamanho adicional e recebe +2 de Força (Para um total de +4 e +6 respectivamente no nono ciclo)."
  },
  {
    "id": "auxilio-divino",
    "name": "Auxílio Divino",
    "level": 1,
    "text": "Aprimorar (+4 PM): O bônus da magia aumenta em +1."
  },
  {
    "id": "curar-ferimentos-leves",
    "name": "Curar Ferimentos Leves",
    "level": 1,
    "text": "Aprimorar (+1 PM): O Efeito da magia aumenta em 1d8+2"
  },
  {
    "id": "detectar-mal-bem-caos-ordem",
    "name": "Detectar Mal/Bem/Caos/Ordem",
    "level": 1,
    "text": "Esta magia precisa ser comprada apenas uma vez, ao fim de um descanso longo você pode escolher qual alinhamento ela irá detectar. A escolha persiste até o próximo descanso."
  },
  {
    "id": "escudo-arcano",
    "name": "Escudo Arcano",
    "level": 1,
    "text": "Aprimorar (+2 PM): O bônus da magia aumenta em +1. Esta magia pode ser aprimorada duas vezes (Para um total de +5 e +6 respectivamente no quinto ciclo)"
  },
  {
    "id": "escudo-da-fe",
    "name": "Escudo da Fé",
    "level": 1,
    "text": "Aprimorar (+2 PM): O bônus da magia aumenta em +1."
  },
  {
    "id": "espirito-animal",
    "name": "Espírito Animal",
    "level": 1,
    "text": "Aprimorar (+1 PM): O conjurador pode escolher qual versão quer usar, pagando PM de acordo."
  },
  {
    "id": "invocar-monstro",
    "name": "Invocar Monstro",
    "level": 1,
    "text": "Aprimorar (+1 PM): O conjurador pode escolher qual versão quer usar, pagando PM de acordo."
  },
  {
    "id": "magia-curinga",
    "name": "Magia Curinga",
    "level": 1,
    "text": "Aprimorar (+1 PM): O conjurador pode escolher qual versão quer usar, pagando PM de acordo."
  },
  {
    "id": "infligir-ferimentos-leves",
    "name": "Infligir Ferimentos Leves",
    "level": 1,
    "text": "Aprimorar (+1 PM): O Efeito da magia aumenta em 1d8+2."
  },
  {
    "id": "misseis-magicos",
    "name": "Mísseis Mágicos",
    "level": 1,
    "text": "Aprimorar (+1 PM): Você dispara um dardo adicional."
  },
  {
    "id": "pedra-encantada",
    "name": "Pedra Encantada",
    "level": 1,
    "text": "O conjurador pode escolher qual versão quer usar, pagando PM de acordo."
  },
  {
    "id": "presa-magica",
    "name": "Presa Mágica",
    "level": 1,
    "text": "Aprimorar (+2 PM): O bônus da magia aumenta em +1."
  },
  {
    "id": "protecao-contra-o-mal-bem-caos-ordem",
    "name": "Proteção contra o Mal/Bem/Caos/Ordem",
    "level": 1,
    "text": "Esta magia precisa ser comprada apenas uma vez, ao fim de um descanso longo você pode escolher contra qual alinhamento ela irá garantir seu bônus. A escolha persiste até o próximo descanso completo."
  },
  {
    "id": "reduzir-pessoa",
    "name": "Reduzir Pessoa",
    "level": 1,
    "text": "Esta magia diminui a altura do alvo pela metade, o que reduz seu tamanho em uma categoria e fornece Destreza +2. Todo equipamento carregado pelo alvo também é afetado. Reduzir pessoa anula aumentar pessoa.  Aprimorar (+4 PM): A criatura reduz em uma categoria de tamanho adicional e recebe +2 de Destreza (Para um total de +4 e +6 respectivamente no nono ciclo)."
  },
  {
    "id": "toque-chocante",
    "name": "Toque Chocante",
    "level": 1,
    "text": "Aprimorar (+2 PM): O efeito da magia aumenta em 2d8."
  },
  {
    "id": "choque-estatico",
    "name": "Choque Estático",
    "level": 2,
    "text": "Aprimorar (+4 PM): O Efeito da magia aumenta em 6d8."
  },
  {
    "id": "combustao",
    "name": "Combustão",
    "level": 2,
    "text": "Aprimorar (+3 PM): Aumente o número de alvos da magia em 2 e o dano da magia em 1d6."
  },
  {
    "id": "determinacao",
    "name": "Determinação",
    "level": 2,
    "text": "Esta magia faz com que o alvo renove sua determinação e confiança durante o combate. O alvo recebe 10 PV temporários e cura acelera 1.  Aprimorar (+2 PM): A criatura recebe 5 PVs temporários adicionais e aumenta a cura acelerada em 1."
  },
  {
    "id": "fogo-amigo",
    "name": "Fogo Amigo",
    "level": 5,
    "levels": [5],
    "text": "Movida para o 5º Ciclo"
  },
  {
    "id": "vitalidade-ilusoria",
    "name": "Vitalidade Ilusória",
    "level": 2,
    "text": "Você recebe 5 + MdC pontos de vida temporários. PV temporários são os primeiros a serem perdidos, e desaparecem quando a duração da magia termina  Aprimorar (+2 PM): Você recebe 5 PVs temporários adicionais e aumenta a duração da magia em 1 Hora."
  }
];
export const newSpells: NewSpell[] = [
  {
    "id": "raio-de-luz",
    "name": "Raio de Luz",
    "school": "Luz",
    "action": "Padrão",
    "range": "9 Metros",
    "effect": "Raio",
    "duration": "Instantânea",
    "resistance": "CA",
    "description": "Você dispara um raio de luz. Faça um ataque de toque à distância. Se acertar, o alvo sofre 1d3 pontos de dano e recebe uma penalidade de -1 em sua CA na rodada seguinte.",
    "lists": [
      {
        "level": 0,
        "tradition": "Divino"
      }
    ]
  },
  {
    "id": "mori",
    "name": "Mori",
    "school": "Necromancia",
    "action": "Padrão",
    "range": "9 Metros",
    "effect": "Raio",
    "duration": "Instantânea",
    "resistance": "CA",
    "description": "Você dispara um raio de energia negativa. Faça um ataque de toque à distância. Se acertar, o alvo sofre 1d3 pontos de dano, da próxima vez que a criatura restauraria pontos de vida reduza a cura pelo dano desta magia.",
    "lists": [
      {
        "level": 0,
        "tradition": "Divino"
      },
      {
        "level": 0,
        "tradition": "Arcano"
      }
    ]
  },
  {
    "id": "lamina-fantasma",
    "name": "Lâmina Fantasma",
    "school": "Evocação",
    "action": "Um ataque",
    "range": "Pessoal",
    "effect": "Voce",
    "duration": "Instantânea",
    "resistance": "CA",
    "description": "Diferente de magia comuns,a Lâmina fantasma pode ser conjurada livremente como parte de um ataque corpo-a-corpo, a lâmina fantasma causa 1d4 de dano sônico substituindo o dano original do golpe.",
    "lists": [
      {
        "level": 0,
        "tradition": "Arcano"
      }
    ]
  },
  {
    "id": "cama-de-ferro",
    "name": "Cama de Ferro",
    "school": "Transmutação",
    "action": "Padrão",
    "range": "Toque",
    "effect": "1 Criatura",
    "duration": "8 Horas",
    "resistance": "Nenhuma",
    "description": "A criatura pode dormir utilizando de Armadura Média ou Pesada sem sofrer fadiga ou penalidades",
    "lists": [
      {
        "level": 1,
        "tradition": "Divino"
      }
    ]
  },
  {
    "id": "armadura-guardia",
    "name": "Armadura Guardia",
    "school": "Invocação",
    "action": "Padrão",
    "range": "9 Metros",
    "effect": "1 Criatura Voluntária",
    "duration": "Instantânea",
    "resistance": "Fortitude",
    "description": "Você teleporta uma armadura que esteja vestindo ou carregando para o corpo de uma criatura, a armadura aparece propriamente equipada no alvo garantindo seus benefícios imediatamente. Esta magia não tem efeito em uma criatura usando armadura.",
    "lists": [
      {
        "level": 1,
        "tradition": "Divino"
      }
    ]
  },
  {
    "id": "infusao",
    "name": "Infusão",
    "school": "Transmutação",
    "action": "Completa",
    "range": "Toque",
    "effect": "1 Objeto",
    "duration": "Instantânea",
    "resistance": "Nenhuma",
    "description": "Um item que você possua e que tenha carga em PMs recupera 1 PM.  Aprimorar (+1 PM): O item Recupera 1 PM extra.",
    "lists": [
      {
        "level": 1,
        "tradition": "Arcano"
      }
    ]
  },
  {
    "id": "sangue-em-dinheiro",
    "name": "Sangue em Dinheiro",
    "school": "Transmutação",
    "action": "Movimento",
    "range": "Pessoal",
    "effect": "-",
    "duration": "1 Minuto",
    "resistance": "Nenhum",
    "description": "Ao conjurar esta magia você recebe 1 Ponto de Dano em constituição, ao fazê-lo gera também os componentes materiais necessários para uma magia qualquer que conheça e tenha valor até 100 de ouro. Este ingrediente desaparece caso não seja utilizado, você recupera a constituição perdida através desta magia normalmente no valor de 1 ponto por dia.  Aprimorar (+1 PM): O valor máximo do componente aumenta em 100 de ouro.",
    "lists": [
      {
        "level": 1,
        "tradition": "Arcano"
      }
    ]
  }
];
export const unmatchedAlterationNames: string[] = [];
