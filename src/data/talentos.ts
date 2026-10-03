export type TalentBlockKind = 'paragraph' | 'subheading';

export interface TalentBlock {
  kind: TalentBlockKind;
  text: string;
}

export interface TalentEntry {
  id: string;
  name: string;
  group: string;
  groupSlug: string;
  sourceGroup: string;
  prerequisites: string[];
  costs: string[];
  blocks: TalentBlock[];
}

export const talentGroups = [
  {
    "name": "Talentos de Combate",
    "slug": "combate",
    "count": 71
  },
  {
    "name": "Talentos de Perícia",
    "slug": "pericia",
    "count": 26
  },
  {
    "name": "Talentos de Magia",
    "slug": "magia",
    "count": 17
  },
  {
    "name": "Metamágicos",
    "slug": "metamagicos",
    "count": 14
  },
  {
    "name": "Talentos de Destino",
    "slug": "destino",
    "count": 24
  },
  {
    "name": "Talentos de Poder Concedido",
    "slug": "poder-concedido",
    "count": 100
  },
  {
    "name": "Talentos da Tormenta",
    "slug": "tormenta",
    "count": 27
  },
  {
    "name": "Talentos Raciais",
    "slug": "raciais",
    "count": 51
  },
  {
    "name": "Talentos Moreau",
    "slug": "moreau",
    "count": 12
  }
] as const;

export const talents: TalentEntry[] = [
  {
    "id": "combate-acerto-critico-aprimorado",
    "name": "Acerto Crítico Aprimorado",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "8º nível, Especialização em Arma."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "A margem de ameaça de todas as armas que você tenha “Especialização em Arma” aumenta em +2"
      }
    ]
  },
  {
    "id": "combate-alcance-supremo",
    "name": "Alcance Supremo",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Especialização em Arma, 8º nível."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Enquanto estiver usando uma arma corpo-a-corpo na qual você tenha “Especialização em Arma”, você dobra seu alcance natural."
      }
    ]
  },
  {
    "id": "combate-animal-encurralado",
    "name": "Animal Encurralado",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Destreza 12."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Quando você estiver flanqueado, sua margem de ameaça aumenta em 1 por oponente que estiver flanqueando-o. Por exemplo, se estiver usando uma espada longa (margem de ameaça 19-20) e sendo flanqueado por dois oponentes, sua margem de ameaça passa para 17-20. Este benefício se aplica apenas contra oponentes que"
      },
      {
        "kind": "paragraph",
        "text": "estão flanqueando-o. Você não recebe o benefício caso não possa ser flanqueado."
      }
    ]
  },
  {
    "id": "combate-aparencia-inofensiva",
    "name": "Aparência Inofensiva",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Carisma 12."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "A primeira criatura inteligente (Inteligência 3 ou mais) que atacar você em um combate deve fazer um teste de Vontade CD 10+MdN+Mod Car. Se falhar, perderá sua ação."
      },
      {
        "kind": "paragraph",
        "text": "Este talento só funciona uma vez por combate; isto é, independente da criatura falhar ou não no teste, poderá atacar você normalmente nas rodadas seguintes. Executar um ataque ou magia agressiva anula o talento durante aquele combate."
      }
    ]
  },
  {
    "id": "combate-artilheiro",
    "name": "Artilheiro",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe um bônus de +4 em jogadas de ataque e dano com balistas, catapultas, canhões e nebulbos, e pode recarregar estas armas com apenas uma ação completa. Além disso, enquanto estiver operando uma destas armas recebe cobertura parcial contra ataques a distância."
      }
    ]
  },
  {
    "id": "combate-assustar-aprimorado",
    "name": "Assustar Aprimorado",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Carisma 12, Treinado em Intimidação."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Como ação de movimento você pode forçar um inimigo a fazer um teste de vontade CD 10+MdN+Mod Car, em caso de falha o alvo fica desprevenido até o início do próximo turno dele."
      }
    ]
  },
  {
    "id": "combate-ataque-atordoante",
    "name": "Ataque Atordoante",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Sabedoria 12, Ataque Desarmado Aprimorado."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Declare que está usando este talento antes de fazer um ataque desarmado. Se você acertar o ataque, além de sofrer dano normal, a vítima deve fazer um teste de Fortitude CD 10+MdN+Mod Sab. Se falhar, fica atordoada até o final de sua próxima rodada."
      },
      {
        "kind": "paragraph",
        "text": "Você pode usar este talento um número de vezes por dia igual a 1 + seu modificador de Sabedoria."
      }
    ]
  },
  {
    "id": "combate-ataque-com-escudo",
    "name": "Ataque com Escudo",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Usar escudo."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você não perde mais os benefícios de CA do Escudo por atacar com ele."
      }
    ]
  },
  {
    "id": "combate-ataque-desarmado-aprimorado",
    "name": "Ataque Desarmado Aprimorado",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Seus ataques desarmados causam 1d6 pontos de dano, e podem causar dano letal."
      }
    ]
  },
  {
    "id": "combate-ataque-poderoso",
    "name": "Ataque Poderoso",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Força 14."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode aceitar uma penalidade em jogadas de ataque até o máximo de -5, em troca, recebe o dobro da penalidade como bônus em jogadas de dano."
      }
    ]
  },
  {
    "id": "combate-ataque-sagaz",
    "name": "Ataque Sagaz",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "4º nível, Destreza ou Inteligência ou Sabedoria ou Carisma 16."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Ao atacar com armas com acuidade, escolha uma habilidade entre Destreza, Inteligência, Carisma e Sabedoria. O modificador dessa habilidade substitui o modificador de Força no cálculo do dano."
      }
    ]
  },
  {
    "id": "combate-basta",
    "name": "Basta!",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "10º nível"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Três vezes por dia, um ataque seu pode ignorar qualquer camuflagem, imunidade e redução de dano do alvo. Se você errar o ataque, o uso diário não é perdido."
      }
    ]
  },
  {
    "id": "combate-bloqueio-ambidestro",
    "name": "Bloqueio Ambidestro",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "6º Nível, Destreza 18"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe +1 de CA enquanto utilizar duas armas, além disso, quando sofrer dano pode, como reação, reduzir o dano recebido pelos dados de dano de suas armas. (2d8 se utiliza duas espadas longas, por exemplo)."
      }
    ]
  },
  {
    "id": "combate-bote-da-vibora",
    "name": "Bote da Víbora",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Combater com Duas Armas Aprimorado"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Se você estiver lutando com duas armas, pode fazer um ataque com cada uma no final de uma investida."
      }
    ]
  },
  {
    "id": "combate-brecha-na-guarda",
    "name": "Brecha na Guarda",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Tendência não Leal"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe um bônus de +4 nas jogadas de dano contra oponentes atordoados, caídos ou desprevenidos. Este talento se acumula com outros talentos de combate."
      }
    ]
  },
  {
    "id": "combate-casca-grossa",
    "name": "Casca Grossa",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você soma seu bônus de Constituição na CA ao invés do bônus de Destreza. Este bônus não é cumulativo com armaduras."
      }
    ]
  },
  {
    "id": "combate-combater-com-duas-armas-aprimorado",
    "name": "Combater com Duas Armas Aprimorado",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "4° nível"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "O Ataque Extra de combate com duas armas passa a receber todos os danos de dano aplicáveis."
      }
    ]
  },
  {
    "id": "combate-desviar-objetos",
    "name": "Desviar Objetos",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Destreza 12, Ataque Desarmado Aprimorado."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode tentar desviar um ataque à distância realizado com arma que iria atingi-lo, usando sua reação, faça um teste de Reflexos. Você reduz o dano que receberia pela metade do resultado de seu teste."
      },
      {
        "kind": "paragraph",
        "text": "Caso reduza o dano a zero você pode, na mesma reação, apanhar o projétil ou desviá-lo de volta ao atacante com uma jogada de ataque à distância."
      }
    ]
  },
  {
    "id": "combate-empunhadura-poderosa",
    "name": "Empunhadura Poderosa",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "4º Nível, Força 16"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Ao usar Armas de uma categoria de tamanho acima da sua, sua penalidade cai para –2."
      }
    ]
  },
  {
    "id": "combate-entrada-triunfal",
    "name": "Entrada Triunfal",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "8º Nível, Treino em Iniciativa."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Sempre que você ganhar a iniciativa, recebe uma quantidade de PVs temporários igual à seu nível x 5."
      }
    ]
  },
  {
    "id": "combate-erosao",
    "name": "Erosão",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Ataque Poderoso"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Sempre que você acertar um Ataque Corpo-a-Corpo em um inimigo que tenha RD, ele perde 1 ponto de sua RD. A RD do inimigo volta ao normal após o fim do combate. Este talento afeta qualquer tipo de RD, exceto aquelas que não podem ser ignoradas. O valor máximo que um personagem pode reduzir através desta habilidade é igual a seu nível de personagem."
      }
    ]
  },
  {
    "id": "combate-escudo-fraterno",
    "name": "Escudo Fraterno",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Usar Escudo, Falange"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Se você terminar seu turno adjacente a um aliado, pode conceder seu bônus de escudo em CA a ele sacrificando seu próprio bônus. Seu aliado perde o bônus e você recupera o seu se ele não estiver mais adjacente a você. Este bônus não é cumulativo com outros Escudos."
      }
    ]
  },
  {
    "id": "combate-escudo-heroico",
    "name": "Escudo Heroico",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Ataque com Escudo.",
      "Escudo Heroico"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Seus escudos recebem a propriedade Arremesso com alcances variados para cada tipo da seguinte maneira:"
      },
      {
        "kind": "paragraph",
        "text": "Escudo leve: Arremesso(9m)."
      },
      {
        "kind": "paragraph",
        "text": "Escudo pesado: Arremesso(7,5m)."
      },
      {
        "kind": "paragraph",
        "text": "Escudo de corpo: Arremesso(6m)."
      },
      {
        "kind": "paragraph",
        "text": "Escudo Inteligente"
      },
      {
        "kind": "paragraph",
        "text": "O alcance da propriedade Arremesso dos seus escudos aumenta em 3m. Adicionalmente, quando você realiza um ataque de arremesso com seu escudo, ele retorna para a sua mão imediatamente."
      }
    ]
  },
  {
    "id": "combate-especializacao-em-arma",
    "name": "Especialização em Arma",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "4º nível"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Escolha três armas que saiba utilizar, você recebe +1 em jogadas de ataque e +2 em jogadas de dano com a arma escolhida."
      }
    ]
  },
  {
    "id": "combate-especializacao-em-arma-aprimorada",
    "name": "Especialização em Arma Aprimorada",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "12º nível"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Os bônus de Especialização em Arma aumentam para +2/+4 respectivamente."
      }
    ]
  },
  {
    "id": "combate-especializacao-em-armadura",
    "name": "Especialização em Armadura",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "8º nível, saber usar o tipo da armadura escolhida."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Escolha entre os tipos, Leve, Média ou Pesada. Quando usando uma armadura do tipo escolhido, você aumenta seu bônus de armadura em +1 e diminui sua penalidade de armadura em –1. Além disso, você recebe toda a CA da armadura como RD/Adamante ao invés de metade caso ela seja um item menor. Por exemplo, com este talento, uma Armadura Completa passaria a fornecer +9 de CA e RD/Adamante e -4 de penalidade de armadura."
      }
    ]
  },
  {
    "id": "combate-especializacao-em-combate",
    "name": "Especialização em Combate",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "2º nível"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode aceitar uma penalidade em jogadas de ataque até o máximo de -5, em troca, recebe a mesma quantidade como bônus em CA até o próximo turno."
      },
      {
        "kind": "paragraph",
        "text": "Especialização em Escudo"
      },
      {
        "kind": "paragraph",
        "text": "Escolha um tipo de escudo entre leve, pesado ou de corpo. Quando estiver usando um escudo do tipo escolhido, você aumenta seu bônus de CA em +2 e recebe Resistência à Magia +2 (+2 em testes de resistência contra magias)."
      }
    ]
  },
  {
    "id": "combate-estocada-cruel",
    "name": "Estocada Cruel",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Especialização em Arma (Qualquer arma corpo a corpo de perfuração)"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Sempre que você acerta um ataque com uma arma corpo-a-corpo de perfuração na qual você tenha Especialização em arma infringe uma ferida, no início do seu próximo turno ela deve ser bem sucedida em um teste de Fortitude contra CD 10+MdN+Mod. For ou Mod. Des +1 Por ferida ou sofrerá 1d4 de dano de perfuração por ferida, caso tenha sucesso remove todas as feridas e não sofre dano. Você pode infligir um número máximo de ferimentos por criatura igual ao seu nível de personagem."
      }
    ]
  },
  {
    "id": "combate-exterminador-de-monstros",
    "name": "Exterminador de Monstros",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "16º nível"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe +2 nas jogadas de ataque e dano contra criaturas Grandes ou maiores.Adicionalmente, para cada categoria de tamanho acima da sua, a partir do Grande, o bônus aumenta em +2, por exemplo, você sendo um personagem de tamanho médio receberia: +2 contra criaturas grandes, +4 contra enormes, +6 contra descomunais e +8 contra colossais. Além disso, seus inimigos não recebem bônus por tamanho em testes de manobra (como agarrar, derrubar ou empurrar)."
      }
    ]
  },
  {
    "id": "combate-falange",
    "name": "Falange",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Usar Escudo."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Se estiver adjacente a um aliado com este talento, você pode gastar uma Ação de Movimento para formar uma falange. Uma falange concede cobertura parcial a todos os seus participantes. Caso os participantes possuam o talento Escudo Fraterno, todos os aliados da falange recebem um bônus de CA do igual ao melhor escudo da falange."
      },
      {
        "kind": "paragraph",
        "text": "A falange tem efeito enquanto os aliados se mantêm adjacentes um ao outro."
      },
      {
        "kind": "paragraph",
        "text": "Uma falange pode ser quebrada ao derrubar ou empurrar um membro mais próximo ao “meio”"
      }
    ]
  },
  {
    "id": "combate-fintar-aprimorada",
    "name": "Fintar Aprimorada",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Carisma 14"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode realizar um teste de Enganação para fintar em combate usando uma ação de movimento."
      }
    ]
  },
  {
    "id": "combate-flerte-estrategico",
    "name": "Flerte Estratégico",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Fintar aprimorado"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Faça uma finta em combate. Se for bem-sucedido, até o início do seu próximo turno seu oponente além de desprevinido tem sua CA reduzida em 4, este talento funciona apenas uma vez contra cada inimigo e inimigos que têm sucesso neste teste ficam imunes ao efeito pelas próximas 24 horas."
      }
    ]
  },
  {
    "id": "combate-formacao-tartaruga",
    "name": "Formação Tartaruga",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Especialização em Escudo"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Enquanto utilizar um escudo, você não pode ser flanqueado e recebe +2 em testes de resistência."
      }
    ]
  },
  {
    "id": "combate-granadeiro",
    "name": "Granadeiro",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Treinado em Ofício (Alquimia)"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe +2 em jogadas de ataque e dano com qualquer bomba alquímica, como fogo alquímico e granadas, e pode fabricar esses itens por 1/6 do preço normal ao invés de 1/3. O Mestre tem a palavra final sobre o que é considerado uma arma alquímica"
      }
    ]
  },
  {
    "id": "combate-granadeiro-mestre",
    "name": "Granadeiro Mestre",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Granadeiro, 4º Nível"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você adiciona seu modificador de Destreza, Sabedoria, Carisma ou Inteligência em Dano de todas as bombas alquímicas que fabricar ao invés de força, além disso suas armas alquimicas que causam dano aumentam em uma categoria de tamanho."
      }
    ]
  },
  {
    "id": "combate-grudar-o-cano",
    "name": "Grudar o Cano",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Especialização em Arma (Pistola, mosquete, ou outra arma de fogo)"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Se você disparar sua arma de fogo quando estiver adjacente ao oponente (a até 1,5m), recebe um bônus de +2 na jogada de ataque e aumenta a margem de ameaça de crítico em +1. Você não gera ataques de oportunidade realizando ataques desta forma."
      }
    ]
  },
  {
    "id": "combate-investida-montada",
    "name": "Investida Montada",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Treinado em Cavalgar, Mobilidade Perfeita"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Quando está montado e faz uma investida, você pode continuar se movendo depois do ataque. Você deve continuar se movendo em linha reta, e seu movimento total na rodada não pode ser superior ao dobro do deslocamento da montaria."
      }
    ]
  },
  {
    "id": "combate-investida-ricochete",
    "name": "Investida Ricochete",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Manobra Aprimorada (Investida), Especialização em Arma (Qualquer corpo a corpo), Mobilidade Perfeita, 8º nível"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Quando você fizer uma investida usando uma arma corpo-a-corpo com a qual tenha Especialização em Arma, pode ricochetear do oponente, indo atacar um segundo inimigo. Após realizar o ataque, mova-se para o segundo inimigo, como se fizesse uma outra investida. Esta segunda investida não gera um novo ricochete."
      }
    ]
  },
  {
    "id": "combate-lutar-as-cegas",
    "name": "Lutar às Cegas",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Sempre que você erra um ataque devido a camuflagem, pode rolar mais uma vez a chance de acertar. Além disso, você não fica desprevenido contra inimigos que não possa ver."
      }
    ]
  },
  {
    "id": "combate-manobra-aprimorada",
    "name": "Manobra Aprimorada",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Força 12"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Substitui: Agarrar, Atropelar, Separar, Derrubar, Investida Aprimorada"
      },
      {
        "kind": "paragraph",
        "text": "Você recebe um bônus de +4(ou no caso de investida, aumenta o bônus para +4) para a manobra escolhida. Este talento pode ser adquirido várias vezes, mas nunca para a mesma manobra."
      }
    ]
  },
  {
    "id": "combate-mestre-em-arma",
    "name": "Mestre em Arma",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "16º nível, Especialização em Arma Aprimorada.",
      "10º Nível, Pisotear"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Usando a arma escolhida, você recebe +1 em jogadas de ataque e dano (cumulativo com o bônus garantido por Especialização em Arma Aprimorada), e sua margem de ameaça aumenta em + 1. Além disso, três vezes por dia, você pode rolar outra vez uma jogada de ataque que tenha recém realizado. Você deve aceitar a segunda rolagem, mesmo que seja pior que a primeira."
      },
      {
        "kind": "paragraph",
        "text": "Mestre Montado"
      },
      {
        "kind": "paragraph",
        "text": "Enquanto estiver montado você tem direito a uma ação de movimento adicional, esta ação pode ser utilizada apenas para movimentar a montaria."
      }
    ]
  },
  {
    "id": "combate-mobilidade-perfeita",
    "name": "Mobilidade Perfeita",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "6º Nível, Destreza 18, Corrida"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe +2 de CA e resistências até o próximo turno caso tenha utilizado sua ação de movimento para se locomover durante este turno. Além disso, você não gera ataques de oportunidade por sair da margem de ameaça de um inimigo."
      }
    ]
  },
  {
    "id": "combate-olho-do-cacador",
    "name": "Olho do Caçador",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Foco em Perícia (Percepção), Olho Marcial."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Faça um teste de Percepção contra CD 15 + nível da criatura como uma ação de movimento. Em caso de sucesso você recebe +2 em um parâmetro entre: TdR, JATQ, dano ou CA até o final do combate contra a criatura escolhida. Para cada 5 pontos além da CD você pode escolher mais um parâmetro."
      }
    ]
  },
  {
    "id": "combate-olho-marcial",
    "name": "Olho Marcial",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Treinado em Percepção"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Para descobrir detalhes sobre um oponente, faça um teste de Percepção CD 10 + nível da criatura como uma ação de movimento. Em caso de sucesso, você descobre sua classe de armadura, bônus de ataque ou quantidade de pontos de vida atual. Novos testes podem revelar as informações adicionais (até que todas as três sejam conhecidas). Para cada 5 pontos além da CD você pode escolher mais um parâmetro"
      }
    ]
  },
  {
    "id": "combate-parede-de-escudos",
    "name": "Parede de Escudos",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Falange."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Se você estiver participando de uma falange, pode fazer um ataque corpo-a-corpo imediato contra qualquer criatura que se mova para ficar adjacente a você ou aos aliados adjacentes a você e que estejam na falange. Este talento conta como Ataque de Oportunidade."
      }
    ]
  },
  {
    "id": "combate-perito-em-arma",
    "name": "Perito em Arma",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Especialização em arma, 8º Nível, Inteligência 14"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode substituir um teste de qualquer perícia por uma jogada de ataque com a arma escolhida. Você pode usar este talento um número de vezes por dia igual a seu modificador de Inteligência. Este talento não pode ser usado com perícias que sejam apenas treinadas como Conhecimentos, Ofícios, Ladinagem e outros."
      }
    ]
  },
  {
    "id": "combate-pisotear",
    "name": "Pisotear",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Treinado em Cavalgar, Manobra Aprimorada (Atropelar)"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Quando está montado e realiza a manobra Atropelar, o alvo não pode escolher evitá-lo. Além disso, se uma criatura for derrubada pela manobra de atropelar da montaria, a montaria pode fazer um ataque contra aquela criatura como uma ação livre (recebendo o bônus padrão de +4 em jogadas de ataque contra oponentes caídos)."
      }
    ]
  },
  {
    "id": "combate-rapidez-de-recarga",
    "name": "Rapidez de Recarga",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Saber utilizar a arma escolhida."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "A ação necessária para recarregar a arma escolhida diminui em uma categoria, ação completa vira padrão, padrão vira de movimento, e de movimento vira livre. Por exemplo, recarregar um mosquete normalmente é uma ação padrão, mas para um personagem com este talento é uma ação de movimento."
      }
    ]
  },
  {
    "id": "combate-rapidez-de-recarga-aprimorada",
    "name": "Rapidez de Recarga Aprimorada",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "6º nível, Rapidez de Recarga"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "A ação necessária para recarregar a arma escolhida diminui em duas categorias."
      }
    ]
  },
  {
    "id": "combate-reflexos-de-combate",
    "name": "Reflexos de Combate",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Destreza 12"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Se estiver adjacente a um oponente desprevenido, você pode fazer um ataque corpo-a-corpo contra ele como uma reação. Este talento é considerado um ataque de oportunidade."
      },
      {
        "kind": "paragraph",
        "text": "O número máximo de Ataques de Oportunidade aumenta para um total igual a 1+Mod Destreza."
      }
    ]
  },
  {
    "id": "combate-rigidez-raivosa",
    "name": "Rigidez Raivosa",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Casca Grossa"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Sempre que você sofrer dano físico, recebe redução de dano 1, cumulativa com quaisquer outras fontes. Por exemplo, se sofrer três golpes que causem dano físico, recebe redução de dano 3. Este efeito diminui em 1 sempre que recebe um efeito de cura ou ficar um turno sem receber dano físico. O valor máximo que um personagem pode possuir através desta habilidade é igual a seu nível de personagem. Este talento não pode ser usado com armaduras."
      }
    ]
  },
  {
    "id": "combate-retroceder-nunca-render-se-jamais",
    "name": "Retroceder Nunca, Render-se Jamais!",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Vitalidade, Resistência Aprimorada (Vontade)"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Para cada aliado caído, você recebe +1 de CA e Resistência (Cumulativo com qualquer outro talento deste grupo). Estes bônus são dobrados caso você seja o último de pé."
      }
    ]
  },
  {
    "id": "combate-salto-para-salvacao",
    "name": "Salto para Salvação",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Treinado em Cura e Iniciativa."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Como reação declare que sua ação na próxima rodada será curar um companheiro específico (você deve dizer quem). Você torna-se o primeiro a agir na ordem de iniciativa a partir da próxima rodada e ganha uma ação de movimento adicional, que deve usar especificamente para se mover até o companheiro. Você pode usar este talento uma vez por combate."
      }
    ]
  },
  {
    "id": "combate-sentinela-implacavel",
    "name": "Sentinela Implacável",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "10º nível, Treinado em Percepção e Iniciativa."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Se você estiver com uma arma de ataque à distância, pode fazer um ataque contra qualquer criatura dentro do incremento de distância da sua arma. Este ataque é uma reação, realizada durante a ação de movimento do inimigo, e interrompe-a caso acerte. Este talento pode ser usado uma vez por combate."
      }
    ]
  },
  {
    "id": "combate-tiro-especial",
    "name": "Tiro Especial",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "4º nível, Tiro Preciso, Tiro Longo."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode realizar as manobras de combate derrubar, desarmar e empurrar com ataques à distância. Seu teste de manobra usa seu bônus de ataque à distância, mas seu oponente continua usando seu bônus de ataque corpo-a-corpo. Para todos os outros critérios, use as regras normais de manobras."
      }
    ]
  },
  {
    "id": "combate-tiro-longo",
    "name": "Tiro Longo",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Dobra o alcance de armas à distância, além disso, caso você esteja a 9m ou menos do alvo recebe +1 de Jogada de ataque e dano."
      }
    ]
  },
  {
    "id": "combate-tiro-montado",
    "name": "Tiro Montado",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Treinado em Cavalgar"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Sua penalidade para ataques à distância quando sua montaria se movimenta é reduzida para 0."
      }
    ]
  },
  {
    "id": "combate-tiro-preciso",
    "name": "Tiro Preciso",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode fazer ataques à distância contra oponentes envolvidos em combate corpo-a-corpo sem sofrer a penalidade de –4 na jogada de ataque."
      }
    ]
  },
  {
    "id": "combate-tiro-preciso-aprimorado",
    "name": "Tiro Preciso Aprimorado",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "10º nível, Destreza 18, Tiro Longo, Tiro Preciso"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Seus ataques à distância ignoram cobertura e camuflagem (exceto cobertura ou camuflagem totais). Além disso, quando ataca um alvo envolvido na manobra Agarrar, você acerta automaticamente o alvo que escolheu."
      }
    ]
  },
  {
    "id": "combate-torcida",
    "name": "Torcida",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "4º nível."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe +2 em jogadas de ataque, CA e testes de resistência quando tem a torcida a seu favor, durante uma luta ou outro tipo de disputa. Entenda-se por “torcida” qualquer número de pessoas ou criaturas inteligentes (mesmo que seja apenas uma!) que não está realizando nenhuma outra ação além de ver a luta. Você só recebe este benefício quando a maioria das pessoas presentes na cena está gritando seu nome ou torcendo por sua vitória"
      }
    ]
  },
  {
    "id": "combate-trespassar",
    "name": "Trespassar",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Ataque Poderoso.",
      "Fintar Aprimorado"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Quando você derruba um inimigo com um ataque corpo-a-corpo (reduzindo seus PV para 0 ou menos), pode realizar um ataque adicional contra outra criatura adjacente."
      },
      {
        "kind": "paragraph",
        "text": "O ataque adicional usa os mesmos bônus de ataque e dano do primeiro, mas os dados devem ser rolados novamente. Usar esse talento é um Ataque de Oportunidade."
      },
      {
        "kind": "paragraph",
        "text": "Truque do Chapéu"
      },
      {
        "kind": "paragraph",
        "text": "Como uma ação de movimento, você arremessa seu chapéu no rosto de um oponente de tamanho Pequeno a Enorme que esteja a até 9m. Faça uma finta contra este oponente. Se você for bem-sucedido, tem direito a fazer um teste de Furtividade contra o oponente ou realizar um ataque contra ele. Se você fizer um ataque e acertar, causa dano adicional de ataque furtivo (se tiver esta habilidade). Este truque só funciona uma vez por oponente por combate."
      }
    ]
  },
  {
    "id": "combate-truque-do-desarme",
    "name": "Truque do Desarme",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Bloqueio Ambidestro"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode gastar uma ação completa para receber um bônus de +4 em CA durante uma rodada. Como reação, você pode tentar desarmar todos os atacantes corpo a corpo que tentem te atacar."
      }
    ]
  },
  {
    "id": "combate-usar-armas-simples",
    "name": "Usar Armas Simples",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você sabe usar todas as armas simples."
      }
    ]
  },
  {
    "id": "combate-usar-armas-marciais",
    "name": "Usar Armas Marciais",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Usar Armas Simples"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você sabe usar todas as armas marciais."
      }
    ]
  },
  {
    "id": "combate-usar-armas-exoticas",
    "name": "Usar Armas Exóticas",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Usar Armas Marciais"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você sabe usar todas as armas exóticas."
      }
    ]
  },
  {
    "id": "combate-usar-armaduras-leves",
    "name": "Usar Armaduras Leves",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "nenhum."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você sabe usar armaduras leves."
      }
    ]
  },
  {
    "id": "combate-usar-armaduras-medias",
    "name": "Usar Armaduras Médias",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Usar Armaduras Leves."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você sabe usar armaduras médias."
      }
    ]
  },
  {
    "id": "combate-usar-armaduras-pesadas",
    "name": "Usar Armaduras Pesadas",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Usar Armaduras Médias."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você sabe usar armaduras pesadas."
      }
    ]
  },
  {
    "id": "combate-usar-escudos",
    "name": "Usar Escudos",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Usar Armaduras Leves."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você sabe usar escudos leves. Caso você possua o talento Usar Armaduras Médias, você também sabe usar Escudos Pesados e caso possua Usar Armaduras Pesadas, também sabe usar Escudos de Corpo."
      }
    ]
  },
  {
    "id": "combate-usar-venenos",
    "name": "Usar Venenos",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [
      "Treinado em Ofício(Alquimia), tendência não bondosa."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode aplicar veneno em armas sem risco de se envenenar acidentalmente."
      }
    ]
  },
  {
    "id": "combate-vitalidade",
    "name": "Vitalidade",
    "group": "Talentos de Combate",
    "groupSlug": "combate",
    "sourceGroup": "fTALENTOS DE COMBATE",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Pré-requisito: Nenhum."
      },
      {
        "kind": "paragraph",
        "text": "Você recebe 2 PVs extras por nível. Você pode adquirir este talento até duas vezes."
      }
    ]
  },
  {
    "id": "pericia-acrobacia-audaz",
    "name": "Acrobacia Audaz",
    "group": "Talentos de Perícia",
    "groupSlug": "pericia",
    "sourceGroup": "TALENTOS DE PERÍCIA",
    "prerequisites": [
      "6º nível, Treinado em Acrobacia"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode atravessar terrenos difíceis sem sofrer redução em seu deslocamento. Você pode realizar investidas mesmo nessas condições."
      }
    ]
  },
  {
    "id": "pericia-agil",
    "name": "Ágil",
    "group": "Talentos de Perícia",
    "groupSlug": "pericia",
    "sourceGroup": "TALENTOS DE PERÍCIA",
    "prerequisites": [
      "Destreza 14"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode usar seu modificador de Destreza em vez de Força em testes de Atletismo e não perde mais sua ação de movimento na primeira vez do dia que falhe no teste Acrobacia para Levantar Rapidamente."
      }
    ]
  },
  {
    "id": "pericia-alquimista-prodigio",
    "name": "Alquimista Prodígio",
    "group": "Talentos de Perícia",
    "groupSlug": "pericia",
    "sourceGroup": "TALENTOS DE PERÍCIA",
    "prerequisites": [
      "Foco em Perícia (Alquimia)"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode criar versões obra-prima de itens alquímicos e poções. Se o item tiver um efeito medido em dados, você pode adicionar um dado do mesmo tipo ao efeito. Por exemplo, o ácido causa 2d4 pontos de dano. Ácido obra-prima causa 3d4 pontos de dano. Se o item não tiver um efeito medido em dados, adicione +2 à CD para resistir a ele ou dobre a duração de seus efeitos (você escolhe). Todas as outras características do item permanecem inalteradas. Criar um item alquímico de obra-prima aumenta a CD do teste de Ofício em +5, e o custo de criação em +100 TO."
      }
    ]
  },
  {
    "id": "pericia-aprendiz-da-forja",
    "name": "Aprendiz da Forja",
    "group": "Talentos de Perícia",
    "groupSlug": "pericia",
    "sourceGroup": "TALENTOS DE PERÍCIA",
    "prerequisites": [
      "Foco em Perícia (Ofício)",
      "Preparar Armadilhas"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode construir armas, armaduras e kits de ferramentas de qualidade obra-prima e brutais, para você estes aprimoramentos custam 1/4 de seu preço."
      },
      {
        "kind": "paragraph",
        "text": "Armadilheiro de Combate"
      },
      {
        "kind": "paragraph",
        "text": "Você pode construir e carregar armadilhas para uso posterior, em combate, perseguição, etc. Você pode carregar um número de armadilhas desta forma igual a 1 + seu modificador de Inteligência.  Você ainda precisa gastar uma ação completa para armar estas armadilhas."
      }
    ]
  },
  {
    "id": "pericia-armadilheiro-mal-intencionado",
    "name": "Armadilheiro Mal-Intencionado",
    "group": "Talentos de Perícia",
    "groupSlug": "pericia",
    "sourceGroup": "TALENTOS DE PERÍCIA",
    "prerequisites": [
      "Preparar Armadilhas"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Todas as suas armadilhas que causam dano causam 2d6 pontos de dano adicional. Além disso, a CD do teste de Percepção para encontrar suas armadilhas, e dos testes de resistência para resistir aos efeitos delas, aumenta em +2."
      }
    ]
  },
  {
    "id": "pericia-armadilheiro-peconhento",
    "name": "Armadilheiro Peçonhento",
    "group": "Talentos de Perícia",
    "groupSlug": "pericia",
    "sourceGroup": "TALENTOS DE PERÍCIA",
    "prerequisites": [
      "Capacidade de lançar as magias envenenamento ou praga, ou habilidade de classe Fabricar Venenos, Armadilheiro Mal-Intencionado"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode adicionar às suas armadilhas o efeito das magias envenenamento ou praga (escolha uma magia) ou de um veneno que você possa fabricar. O efeito acontece ao mesmo tempo em que outros efeitos das armadilhas. Você deve pagar o custo do veneno em separado da armadilha, ou 100 TO se adicionar o efeito de envenenamento ou praga."
      }
    ]
  },
  {
    "id": "pericia-armadilheiro-versatil",
    "name": "Armadilheiro Versátil",
    "group": "Talentos de Perícia",
    "groupSlug": "pericia",
    "sourceGroup": "TALENTOS DE PERÍCIA",
    "prerequisites": [
      "Inteligência ou Sabedoria 16, Preparar Armadilhas"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode construir e armar todas as armadilhas da lista da página 43 do Manual do Malandro."
      }
    ]
  },
  {
    "id": "pericia-artista-comercial",
    "name": "Artista Comercial",
    "group": "Talentos de Perícia",
    "groupSlug": "pericia",
    "sourceGroup": "TALENTOS DE PERÍCIA",
    "prerequisites": [
      "Treinado em Atuação"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Quando você faz um teste de Atuação para realizar uma performance que lhe renda dividendos (ouro ou riqueza equivalente), pode escolher 10 e ganhar o triplo da quantidade normal. Contudo, sempre que encontrar um outro bardo ou personagem treinado em Atuação ou Ofício (escrita, escultura, pintura ou desenho) que tenha ouvido sobre você, a atitude dele para com você piora em duas categorias, pois você “se vendeu”."
      }
    ]
  },
  {
    "id": "pericia-artista-em-conjunto-solo",
    "name": "Artista em Conjunto/Solo",
    "group": "Talentos de Perícia",
    "groupSlug": "pericia",
    "sourceGroup": "TALENTOS DE PERÍCIA",
    "prerequisites": [
      "6º Nível, Foco em Perícia (Atuação)",
      "Inteligência ou Sabedoria 14"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Escolha entre conjunto ou solo, enquanto atuar na situação escolhida recebe um bônus de +6 em testes de atuação, em contrapartida, recebe -4 na situação oposta. Este talento se acumula com o talento Foco em Perícia."
      },
      {
        "kind": "paragraph",
        "text": "Artista Intelectual"
      },
      {
        "kind": "paragraph",
        "text": "Você pode aplicar o seu modificador de Inteligência ou Sabedoria em vez de seu modificador de Carisma em testes das perícias Atuação e Diplomacia. Você também recebe um bônus de +1 em todos os testes de Atuação e Diplomacia."
      }
    ]
  },
  {
    "id": "pericia-autossuficiente",
    "name": "Autossuficiente",
    "group": "Talentos de Perícia",
    "groupSlug": "pericia",
    "sourceGroup": "TALENTOS DE PERÍCIA",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você não sofre a penalidade de –5 para fazer testes de Cura em si mesmo, e recebe +4 nos testes de Sobrevivência se estiver sozinho (sem nenhum aliado a até 18m)."
      }
    ]
  },
  {
    "id": "pericia-cortesa-sedutora",
    "name": "Cortesã Sedutora",
    "group": "Talentos de Perícia",
    "groupSlug": "pericia",
    "sourceGroup": "TALENTOS DE PERÍCIA",
    "prerequisites": [
      "Carisma 14, Treinado em Enganação"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode seduzir pessoas. Faça um teste de enganação oposto pelo teste de Vontade de seu alvo. Se você for bem sucedido, o alvo sofre efeitos idênticos aos de uma magia enfeitiçar pessoa, com duração de um dia. Usar este talento exige um minuto de conversa (ou dança no palco da taverna, ou performance entre quatro paredes...), e ele pode ser usado um número de vezes por dia igual ao seu bônus de carisma."
      }
    ]
  },
  {
    "id": "pericia-danca-excitante",
    "name": "Dança Excitante",
    "group": "Talentos de Perícia",
    "groupSlug": "pericia",
    "sourceGroup": "TALENTOS DE PERÍCIA",
    "prerequisites": [
      "Treinado em Atuação, Cortesã Sedutora"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode estimular pessoas com sua dança. Todos os aliados a até 9m que possam vê-lo e ouvi-lo recebem um bônus de +2 de ataque e, se realizarem uma ação completa para atacar, podem fazer um ataque extra. Usar este talento exige uma ação completa, seus efeitos duram um minuto e ele pode ser usado um número de vezes por dia igual ao seu bônus de carisma."
      }
    ]
  },
  {
    "id": "pericia-despistar",
    "name": "Despistar",
    "group": "Talentos de Perícia",
    "groupSlug": "pericia",
    "sourceGroup": "TALENTOS DE PERÍCIA",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Quando estiver nas ruas de uma cidade que conheça , você recebe um bônus de +4 em teste de Furtividade, em testes de Enganação para criar distração uma distração para se esconder e em testes de Atletismo para perseguições."
      }
    ]
  },
  {
    "id": "pericia-diligente",
    "name": "Diligente",
    "group": "Talentos de Perícia",
    "groupSlug": "pericia",
    "sourceGroup": "TALENTOS DE PERÍCIA",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode gastar uma ação de padrão para se concentrar na tarefa à frente. Se fizer isso, recebe +4 nos testes de perícia realizados até o final da próxima rodada."
      }
    ]
  },
  {
    "id": "pericia-domador-amador",
    "name": "Domador Amador",
    "group": "Talentos de Perícia",
    "groupSlug": "pericia",
    "sourceGroup": "TALENTOS DE PERÍCIA",
    "prerequisites": [
      "Foco em Perícia (Adestrar Animais)"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe a habilidade de classe empatia selvagem."
      }
    ]
  },
  {
    "id": "pericia-domador-de-feras",
    "name": "Domador de Feras",
    "group": "Talentos de Perícia",
    "groupSlug": "pericia",
    "sourceGroup": "TALENTOS DE PERÍCIA",
    "prerequisites": [
      "Habilidade de classe Empatia Selvagem"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode utilizar a sua habilidade de classe empatia selvagem também em espíritos e monstros irracionais (com Int 1 ou 2), mas sofre uma penalidade de –4 no teste."
      }
    ]
  },
  {
    "id": "pericia-foco-em-pericia",
    "name": "Foco em Perícia",
    "group": "Talentos de Perícia",
    "groupSlug": "pericia",
    "sourceGroup": "TALENTOS DE PERÍCIA",
    "prerequisites": [
      "Treinado na perícia escolhida"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe +4 em testes da perícia escolhida além disso você pode rolar outra vez um teste da perícia escolhida que tenha recém realizado, você deve manter o segundo resultado, mesmo que seja pior."
      }
    ]
  },
  {
    "id": "pericia-ginga-das-ondas",
    "name": "Ginga das Ondas",
    "group": "Talentos de Perícia",
    "groupSlug": "pericia",
    "sourceGroup": "TALENTOS DE PERÍCIA",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Em um navio, nunca precisa fazer testes de Acrobacia para ficar de pé devido às condições do mar, e nunca sofre penalidades em testes por estar navegando."
      }
    ]
  },
  {
    "id": "pericia-homem-dos-sete-instrumentos",
    "name": "Homem dos Sete Instrumentos",
    "group": "Talentos de Perícia",
    "groupSlug": "pericia",
    "sourceGroup": "TALENTOS DE PERÍCIA",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode fazer testes de perícias que exigem treinamento sem ser treinado nelas. Além disso, você recebe um bônus de +1 em testes de perícias nas quais não é treinado."
      }
    ]
  },
  {
    "id": "pericia-intuicao-natural",
    "name": "Intuição Natural",
    "group": "Talentos de Perícia",
    "groupSlug": "pericia",
    "sourceGroup": "TALENTOS DE PERÍCIA",
    "prerequisites": [
      "Sabedoria 14"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você soma seu nível a um único teste de Conhecimento (natureza), Cura ou Sobrevivência. Você deve anunciar o uso deste talento antes de o mestre determinar se o teste foi bem-sucedido ou não. Você pode usar este talento um número de vezes por dia igual a seu bônus de Sabedoria."
      }
    ]
  },
  {
    "id": "pericia-investigador",
    "name": "Investigador",
    "group": "Talentos de Perícia",
    "groupSlug": "pericia",
    "sourceGroup": "TALENTOS DE PERÍCIA",
    "prerequisites": [
      "Inteligência 14"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode somar seu bônus de Inteligência a testes de Obter Informação e testes de Percepção para procurar."
      }
    ]
  },
  {
    "id": "pericia-mestre-armadilheiro",
    "name": "Mestre Armadilheiro",
    "group": "Talentos de Perícia",
    "groupSlug": "pericia",
    "sourceGroup": "TALENTOS DE PERÍCIA",
    "prerequisites": [
      "Armadilheiro de Combate (opcional), Armadilheiro Mal-Intencionado (opcional), Armadilheiro Peçonhento (opcional), Armadilheiro Versátil (opcional), Preparar Armadilhas e pelo menos um dos talentos \"opcionais\""
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode construir armadilhas enormes (que ocupam um quadrado de 6m de lado) pelo dobro do custo. Você também pode armar até duas armadilhas no mesmo espaço. Uma criatura que entre nesse espaço é atingida simultaneamente pelas duas armadilhas."
      }
    ]
  },
  {
    "id": "pericia-mestre-da-forja",
    "name": "Mestre da Forja",
    "group": "Talentos de Perícia",
    "groupSlug": "pericia",
    "sourceGroup": "TALENTOS DE PERÍCIA",
    "prerequisites": [
      "Aprendiz da Forja, 12º Nível"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode construir armas, armaduras e kits de ferramentas de qualidade Precisa, Magistral, Maciça, Equilibrada, Cravejada de Joias e Banhada a ouro, para você estes aprimoramentos custam 1/4 de seu preço."
      }
    ]
  },
  {
    "id": "pericia-preparar-armadilhas",
    "name": "Preparar Armadilhas",
    "group": "Talentos de Perícia",
    "groupSlug": "pericia",
    "sourceGroup": "TALENTOS DE PERÍCIA",
    "prerequisites": [
      "Treinado em Ofício ou Sobrevivência"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você aprende a construir e armar duas armadilhas da lista da página 43 do Manual do Malandro. Construir uma armadilha exige dez minutos e o gasto de matérias-primas (indicado em cada armadilha específica). Uma vez que a armadilha esteja construída, você pode armá-la com uma ação completa.  Você pode armar uma armadilha em qualquer espaço adjacente a você que não esteja ocupado por outra armadilha ou por outro personagem. A armadilha ocupa uma área de 3m de lado, e afeta a primeira criatura que entrar nessa área.  Qualquer armadilha colocada desta forma fica escondida, caso contrário, não teria muita utilidade! Para detectar uma armadilha é necessário possuir a habilidade de classe encontrar armadilhas e ser bem-sucedido em um teste de Percepção contra CD 20 + MdN + seu modificador de Inteligência ou Sabedoria, à sua escolha. Para desarmar uma armadilha é necessário possuir um kit de ladrão e realizar um teste de Ladinagem contra CD 20 + MdN + seu modificador de Inteligência ou Sabedoria. Se o personagem falhar no teste de Ladinagem por 5 pontos ou mais, irá ativar a armadilha e falhará automaticamente em qualquer teste de resistência relacionado a ela. O personagem pode tentar desarmar uma armadilha sem um kit de ladrão, mas sofre uma penalidade de –5 no teste de Ladinagem.  Um personagem que note a armadilha pode pular sobre ela com um teste de Atletismo contra CD 25 (ou CD 15 com uma corrida de no mínimo 6m para pegar impulso). Ele também pode passar por ela sem ativá-la com um teste de Acrobacia contra CD 20. É claro que, se houver espaço suficiente, um personagem que tenha detectado a armadilha pode simplesmente passar ao largo e evitá-la. Se você armar a armadilha à vista de outro personagem (ou seja, ele notar claramente o que você está fazendo, enquanto você faz), ele é automaticamente bem-sucedido no teste para notar a armadilha."
      }
    ]
  },
  {
    "id": "pericia-rastrear",
    "name": "Rastrear",
    "group": "Talentos de Perícia",
    "groupSlug": "pericia",
    "sourceGroup": "TALENTOS DE PERÍCIA",
    "prerequisites": [
      "Treinado em Sobrevivência"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode fazer testes de sobrevivência para encontrar rastros. A dificuldade varia de acordo com o solo — CD 10 para solo macio (neve, lama), 15 para solo padrão (grama, terra) e 20 para solo duro (rocha ou piso de interiores).  Você ganha +1 para cada três criaturas no grupo sendo seguido. Você sofre uma penalidade de –1 para cada dia desde a criação dos rastros e uma penalidade de –5 em visibilidade precária (noite, chuva, neblina). Você precisa fazer um teste para encontrar os rastros e mais um para cada dia de perseguição.  Se falhar, você pode tentar novamente gastando mais um dia (mas lembre-se de que a CD aumenta a cada dia)."
      }
    ]
  },
  {
    "id": "pericia-treino-em-pericia",
    "name": "Treino em Perícia",
    "group": "Talentos de Perícia",
    "groupSlug": "pericia",
    "sourceGroup": "TALENTOS DE PERÍCIA",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você se torna treinado em um número de perícias igual a 1+Mod Int."
      }
    ]
  },
  {
    "id": "magia-adaptabilidade",
    "name": "Adaptabilidade",
    "group": "Talentos de Magia",
    "groupSlug": "magia",
    "sourceGroup": "TALENTOS DE MAGIA",
    "prerequisites": [
      "Possuir uma classe que prepare magias."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode lançar uma magia que não preparou pelo dobro do custo normal."
      }
    ]
  },
  {
    "id": "magia-canto-monastico",
    "name": "Canto Monástico",
    "group": "Talentos de Magia",
    "groupSlug": "magia",
    "sourceGroup": "TALENTOS DE MAGIA",
    "prerequisites": [
      "Treinado em Atuação (Música), Capacidade de lançar magias divinas de 3° Nível."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Quando você lança uma magia, pode gastar uma ação de movimento para entoar um canto litúrgico. Se fizer isso, a CD para resistir à magia aumenta em +2 e você soma seu bônus de Carisma aos efeitos numéricos variáveis da magia (dano causado, PV curados, etc.)."
      }
    ]
  },
  {
    "id": "magia-conhecimento-magico",
    "name": "Conhecimento Mágico",
    "group": "Talentos de Magia",
    "groupSlug": "magia",
    "sourceGroup": "TALENTOS DE MAGIA",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você aprende mais três magias de quaisquer níveis que possa lançar. Você pode escolher este talento diversas vezes. Cada vez que ele é escolhido além da primeira, as magias aprendidas fornecidas pelo talento aumentam em +1."
      }
    ]
  },
  {
    "id": "magia-contramagica-aprimorada",
    "name": "Contramágica Aprimorada",
    "group": "Talentos de Magia",
    "groupSlug": "magia",
    "sourceGroup": "TALENTOS DE MAGIA",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode usar qualquer magia como contramágica, desde que seu custo em PM seja igual ou superior ao custo da magia que você quer anular. Um personagem sem este talento só pode usar como contramágica uma magia igual à que ele quer anular."
      }
    ]
  },
  {
    "id": "magia-criar-itens-magicos",
    "name": "Criar itens mágicos",
    "group": "Talentos de Magia",
    "groupSlug": "magia",
    "sourceGroup": "TALENTOS DE MAGIA",
    "prerequisites": [
      "Capacidade de lançar magias de 6º nível."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode infundir armas, armaduras e escudos com poderes mágicos. O pré-requisito para criar esses itens é a capacidade de lançar magias de determinado nível, de acordo com o bônus total (bônus numérico + bônus por poderes especiais) do item:"
      },
      {
        "kind": "paragraph",
        "text": "Magias de 6º nível para itens com bônus de até +2"
      },
      {
        "kind": "paragraph",
        "text": "Magias de 7º nível para itens com bônus de até +4"
      },
      {
        "kind": "paragraph",
        "text": "Magias de 8º nível para itens com bônus de até +6"
      },
      {
        "kind": "paragraph",
        "text": "Magias de 9º nível para itens com bônus de até +8"
      },
      {
        "kind": "paragraph",
        "text": "Um item mágico criado por este talento custa metade do preço normal. O tempo necessário é um dia por cada 500 PO."
      }
    ]
  },
  {
    "id": "magia-criar-consumiveis",
    "name": "Criar Consumíveis",
    "group": "Talentos de Magia",
    "groupSlug": "magia",
    "sourceGroup": "TALENTOS DE MAGIA",
    "prerequisites": [
      "Capacidade de lançar magias de 1º nível, Treinado em Ofício (Alquimia)"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode criar pergaminhos, Varinhas ou Poções. O pré-requisito para criar um pergaminho, varinha ou poção é conhecer a magia que ele irá conter. O preço de um pergaminho é igual ao nível mínimo que um conjurador precisa ter para lançar a magia contida nele x 10 TO, para uma Varinha x 100 TO e para uma uma poção x 20 TO. Se a magia tiver um componente material ou um custo em XP, você deve pagar esses custos para criar o item. Quando criar um pergaminho, você pode adicionar o efeito de um talento metamágico que conheça a magia contida nele. Os talentos metamágicos que podem ser adicionados desta forma são Aumentar Magia, Estender Magia e Potencializar Magia. Varinhas e Poções podem conter magias de até 5º nível que tenham uma ou mais criaturas como alvo. A CD para criar qualquer item através deste talento é 10 + 2 * O Ciclo da Magia contida no consumível e requer um teste de Alquimia."
      }
    ]
  },
  {
    "id": "magia-duelista-arcano",
    "name": "Duelista arcano",
    "group": "Talentos de Magia",
    "groupSlug": "magia",
    "sourceGroup": "TALENTOS DE MAGIA",
    "prerequisites": [
      "Contramágica Aprimorada"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode realizar contramágia como uma reação, além disso, um conjurador que tenha sua magia cancelada recebe uma penalidade de -4 em testes de resistência contra as suas magias no próximo turno."
      }
    ]
  },
  {
    "id": "magia-dominar-magia",
    "name": "Dominar Magia",
    "group": "Talentos de Magia",
    "groupSlug": "magia",
    "sourceGroup": "TALENTOS DE MAGIA",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Escolha uma magia. O custo em PM para lançar a magia escolhida diminui em 1. O custo final (após aplicar todos os modificadores, incluindo este talento e talentos metamágicos) é no mínimo 1 PM."
      }
    ]
  },
  {
    "id": "magia-dupla-concentracao",
    "name": "Dupla Concentração",
    "group": "Talentos de Magia",
    "groupSlug": "magia",
    "sourceGroup": "TALENTOS DE MAGIA",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode concentrar uma magia adicional simultaneamente, você não gasta ações por fazê-lo, caso precise fazer um teste para manter concentração deve fazer um teste individual para cada magia."
      }
    ]
  },
  {
    "id": "magia-especializacao-em-raio",
    "name": "Especialização em Raio",
    "group": "Talentos de Magia",
    "groupSlug": "magia",
    "sourceGroup": "TALENTOS DE MAGIA",
    "prerequisites": [
      "4º nível"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe +2 em jogadas de ataque e +4 em jogadas de dano com magias de Toque e Toque à distância."
      }
    ]
  },
  {
    "id": "magia-expert-em-catalisador",
    "name": "Expert em Catalisador",
    "group": "Talentos de Magia",
    "groupSlug": "magia",
    "sourceGroup": "TALENTOS DE MAGIA",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Escolha entre cajado, cetro, varinha ou orbe. Enquanto estiver utilizando o catalisador escolhido você recebe os seguintes benefícios:"
      },
      {
        "kind": "paragraph",
        "text": "Cajado: suas magias com área de cone têm alcance dobrado, você também recebe um bônus de +2 em ataques de toque associados a magias."
      },
      {
        "kind": "paragraph",
        "text": "Cetro:  suas magias de alcance pessoal têm duração dobrada. Além disso, seu nível de personagem conta como dois níveis acima para a quantidade de mortos-vivos que você pode ter sob seu comando."
      },
      {
        "kind": "paragraph",
        "text": "Varinha: suas magias com área de linha têm seu alcance dobrado. Além disso, você recebe um bônus de +2 em ataques de toque à distância associados a magias."
      },
      {
        "kind": "paragraph",
        "text": "Orbe: Enquanto você estiver usando um orbe ou bola de cristal (mágicos ou comuns), suas magias com área de esfera ou explosão têm alcance dobrado e causam +2 pontos de dano."
      }
    ]
  },
  {
    "id": "magia-foco-em-magia",
    "name": "Foco em Magia",
    "group": "Talentos de Magia",
    "groupSlug": "magia",
    "sourceGroup": "TALENTOS DE MAGIA",
    "prerequisites": [
      "4º nível"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Escolha uma magia. A dificuldade do teste de resistência contra a magia escolhida aumenta em CD+2. Você pode escolher este talento diversas vezes. Mas deve escolher uma magia diferente toda vez."
      }
    ]
  },
  {
    "id": "magia-foco-em-magia-aprimorado",
    "name": "Foco em Magia Aprimorado",
    "group": "Talentos de Magia",
    "groupSlug": "magia",
    "sourceGroup": "TALENTOS DE MAGIA",
    "prerequisites": [
      "Foco em Magia com a magia escolhida, 4° Nível."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "O aumento de dificuldade oferecido pelo talento Foco em Magia aumenta para +4. Além disso, a magia afetada por este talento atravessa qualquer RD/RE. Você pode escolher este talento diversas vezes. Mas deve escolher uma magia diferente toda vez."
      }
    ]
  },
  {
    "id": "magia-magias-em-combate",
    "name": "Magias em Combate",
    "group": "Talentos de Magia",
    "groupSlug": "magia",
    "sourceGroup": "TALENTOS DE MAGIA",
    "prerequisites": [
      "Treinado em Curar, Identificar magia e saber pelo menos uma magia de cura.",
      "Capacidade de lançar magias arcanas"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você não fica desprevenido quando lança uma magia. Um personagem sem este talento fica desprevenido até seu próximo turno quando lança uma magia. Além de receber um bônus de +4 em testes de Vontade para conjurar defensivamente."
      },
      {
        "kind": "paragraph",
        "text": "Magia Fortalecedora"
      },
      {
        "kind": "paragraph",
        "text": "Uma vez por combate, Você pode transformar uma magia de cura em PVs temporários que duram 1 rodada para cada 5 níveis de personagem."
      },
      {
        "kind": "paragraph",
        "text": "Mágico de Palco"
      },
      {
        "kind": "paragraph",
        "text": "Sempre que lançar uma magia arcana, você pode escolher diminuir seu dano, alcance ou duração em um ou mais passos. No caso de dano, cada “passo” equivale a um dado. No caso de alcance, cada passo diminui o alcance pela metade, até o mínimo de 1,5m. No caso de duração, cada passo diminui a duração de 1 dia ou mais para 1 hora, então para 1 minuto, então para 1 rodada (mínimo). Sacrificando esses parâmetros, você cria efeitos mais vistosos e espetaculares."
      },
      {
        "kind": "paragraph",
        "text": "Cada passo diminuído desta forma concede um bônus de +1 em seu próximo teste de perícia baseado em Carisma com qualquer um que tenha visto você lançar a magia. Por exemplo, você lança bola de fogo com dano de 2d6 (–4d6) e alcance de 15m (metade do normal). Na rodada seguinte, faz um teste de Intimidação contra aqueles que viram sua bola de fogo modificada, e recebe um bônus de +5 (+4 pelo dano diminuído, +1 pelo alcance diminuído). Obviamente, parâmetros que já estejam no limite mínimo ou que não se apliquem (no caso de magias que não causam dano, têm alcance pessoal ou duração de 1 rodada ou menos) não podem ser diminuídos ainda mais."
      }
    ]
  },
  {
    "id": "magia-medico-de-campo",
    "name": "Médico de Campo",
    "group": "Talentos de Magia",
    "groupSlug": "magia",
    "sourceGroup": "TALENTOS DE MAGIA",
    "prerequisites": [
      "Substituição Elemental (Ácido, Eletricidade, Fogo, Frio e Sônico)"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode usar uma magia ou habilidade de cura em um aliado até uma rodada depois de sua morte.Mestre Elemental"
      },
      {
        "kind": "paragraph",
        "text": "Quando você utiliza o talento Substituição Elemental Aprimorada pode escolher dois elementos, o primeiro elemento escolhido define o tipo de dano da magia além de gerar seu efeito adicional, o segundo elemento apenas gera seu efeito adicional."
      }
    ]
  },
  {
    "id": "magia-personalizar-magia",
    "name": "Personalizar Magia",
    "group": "Talentos de Magia",
    "groupSlug": "magia",
    "sourceGroup": "TALENTOS DE MAGIA",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Escolha um tema para sua magia, como brilhos rosados, caveiras com chifres ou um padrão em espiral. Todas as suas magias passam a lembrar esse tema em sua aparência, dificultando sua identificação por seus oponentes. A CD para identificar suas magias passa a ser (20 + nível da magia) para magias sendo lançadas, e (25 + nível da magia) para magias já lançadas."
      }
    ]
  },
  {
    "id": "magia-poder-magico",
    "name": "Poder Mágico",
    "group": "Talentos de Magia",
    "groupSlug": "magia",
    "sourceGroup": "TALENTOS DE MAGIA",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe 1 PM extra por nível."
      }
    ]
  },
  {
    "id": "metamagicos-acelerar-magia",
    "name": "Acelerar Magia",
    "group": "Metamágicos",
    "groupSlug": "metamagicos",
    "sourceGroup": "Metamágicos",
    "prerequisites": [],
    "costs": [
      "+4 PM"
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Quando você usa este talento, pode lançar uma magia como uma ação livre. Lançar uma magia acelerada não deixa você desprevenido."
      },
      {
        "kind": "paragraph",
        "text": "Você só pode usar este talento uma vez por rodada. Magias com um tempo de execução maior que uma ação completa não são afetadas por este talento."
      }
    ]
  },
  {
    "id": "metamagicos-ampliar-magia",
    "name": "Ampliar Magia",
    "group": "Metamágicos",
    "groupSlug": "metamagicos",
    "sourceGroup": "Metamágicos",
    "prerequisites": [],
    "costs": [
      "+3 PM"
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Quando você usa este talento, a área da magia é duplicada (por exemplo, uma bola de fogo ampliada tem 12m de raio, em vez de 6m).Magias sem área de efeito não são afetadas por este talento"
      }
    ]
  },
  {
    "id": "metamagicos-aumentar-magia",
    "name": "Aumentar Magia",
    "group": "Metamágicos",
    "groupSlug": "metamagicos",
    "sourceGroup": "Metamágicos",
    "prerequisites": [],
    "costs": [
      "+1 PM"
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Quando você usa este talento, o alcance da magia é duplicado (por exemplo, um relâmpago aumentado tem um alcance de 90m, em vez de 45m).Magias sem alcance medido em metros não podem ser afetadas por este talento."
      }
    ]
  },
  {
    "id": "metamagicos-esculpir-magia",
    "name": "Esculpir Magia",
    "group": "Metamágicos",
    "groupSlug": "metamagicos",
    "sourceGroup": "Metamágicos",
    "prerequisites": [],
    "costs": [
      "+1 PM"
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Este talento só pode ser aplicado em magias que tenham como área cilindro, cone, esfera, linha, explosão ou quadrado. Você pode trocar a área da magia para um cilindro com 3m de raio, um cone com 9m de comprimento, uma esfera com 6m de raio, uma linha com 30m comprimento ou um quadrado com 9m de lado."
      }
    ]
  },
  {
    "id": "metamagicos-estender-magia",
    "name": "Estender Magia",
    "group": "Metamágicos",
    "groupSlug": "metamagicos",
    "sourceGroup": "Metamágicos",
    "prerequisites": [],
    "costs": [
      "+1 PM",
      "+3 PM"
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "A duração da magia é duplicada (por exemplo, um imobilizar pessoa estendido dura 2 minutos, em vez de 1 min).  Magias com duração instantânea, permanente ou concentração não podem ser afetadas por este talento.Invocação Aberrante"
      },
      {
        "kind": "paragraph",
        "text": "Suas criaturas invocadas adquirem o modelo criatura da Tormenta (veja o quadro na página 101 do Manual das Raças)"
      }
    ]
  },
  {
    "id": "metamagicos-magia-camuflada",
    "name": "Magia Camuflada",
    "group": "Metamágicos",
    "groupSlug": "metamagicos",
    "sourceGroup": "Metamágicos",
    "prerequisites": [],
    "costs": [
      "De +1 PM a +3 PM"
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "+1 PM: A Magia pode ser lançada sem nenhum componente gestual."
      },
      {
        "kind": "paragraph",
        "text": "+2 PM: A Magia pode ser lançada sem nenhum componente verbal."
      },
      {
        "kind": "paragraph",
        "text": "+3 PM: Um oponente deve ser bem-sucedido num teste de Identificar Magia contra CD 25 + MdC - Nível da magia, para determinar quem é o conjurador."
      },
      {
        "kind": "paragraph",
        "text": "Pagar um custo maior concede também os efeitos anteriores, por exemplo pagar +2 Para conjurar a Magia sem componentes verbais também concederia o efeito de conjurar sem componente gestual."
      }
    ]
  },
  {
    "id": "metamagicos-magia-celestial",
    "name": "Magia Celestial",
    "group": "Metamágicos",
    "groupSlug": "metamagicos",
    "sourceGroup": "Metamágicos",
    "prerequisites": [],
    "costs": [
      "+1 PM"
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode trocar o descritor de uma magia que causa dano para sagrado. (Uma bola de fogo se torna uma bola de luz, por exemplo)."
      }
    ]
  },
  {
    "id": "metamagicos-magia-mortificada",
    "name": "Magia Mortificada",
    "group": "Metamágicos",
    "groupSlug": "metamagicos",
    "sourceGroup": "Metamágicos",
    "prerequisites": [],
    "costs": [
      "+1 PM"
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode trocar o descritor de uma magia que causa dano para necromancia, causando dano por energia negativa (uma bola de fogo se torna uma bola de trevas, por exemplo). Uma magia mortificada pode curar a mesma quantidade de dano em mortos-vivos."
      }
    ]
  },
  {
    "id": "metamagicos-magia-piedosa",
    "name": "Magia Piedosa",
    "group": "Metamágicos",
    "groupSlug": "metamagicos",
    "sourceGroup": "Metamágicos",
    "prerequisites": [],
    "costs": [
      "+0 PM"
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Uma magia aprimorada com este talento causa dano não-letal em vez de dano normal. O descritor da magia permanece inalterado."
      }
    ]
  },
  {
    "id": "metamagicos-maximizar-magia",
    "name": "Maximizar Magia",
    "group": "Metamágicos",
    "groupSlug": "metamagicos",
    "sourceGroup": "Metamágicos",
    "prerequisites": [],
    "costs": [
      "+3 PM"
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Quando você usa este talento, todos os efeitos numéricos variáveis da magia são aumentados ao máximo. Por exemplo, uma bola de fogo capaz de causar 6d6 pontos de dano, quando maximizada, causará 36 pontos de dano (mais quaisquer bônus), sem a necessidade de rolar dados. Uma magia sem efeitos variáveis não pode ser afetada por este talento.  Uma magia potencializada e maximizada adquire os benefícios separados de cada talento: o resultado máximo, mais metade do resultado jogado normalmente."
      }
    ]
  },
  {
    "id": "metamagicos-potencializar-magia",
    "name": "Potencializar Magia",
    "group": "Metamágicos",
    "groupSlug": "metamagicos",
    "sourceGroup": "Metamágicos",
    "prerequisites": [],
    "costs": [
      "+2 PM"
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Quando você usa este talento, todos os efeitos numéricos variáveis da magia são aumentados em 50%. Por exemplo, um relâmpago capaz de causar 6d6 pontos de dano, após rolar 21, causa mais 50% (neste caso, 10), para um total de 31 pontos de dano. Quaisquer bônus que você tenha também são potencializados.  Uma magia sem efeitos variáveis não pode ser afetada por este talento.  Uma magia potencializada e maximizada adquire os benefícios separados de cada talento: o resultado máximo, mais metade do resultado jogado normalmente."
      }
    ]
  },
  {
    "id": "metamagicos-substituicao-elemental",
    "name": "Substituição Elemental",
    "group": "Metamágicos",
    "groupSlug": "metamagicos",
    "sourceGroup": "Metamágicos",
    "prerequisites": [],
    "costs": [
      "+0 PM"
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Escolha um descritor elemental, entre ácido, eletricidade, fogo, frio ou sônico. Você pode trocar o descritor de uma magia que cause dano para o descritor escolhido a qualquer momento. Por exemplo, uma bola de fogo causa 6d6 pontos de dano de fogo. Com Substituição Elemental (ácido), pode tornar-se uma bola de ácido, causando 6d6 pontos de dano de ácido. Você pode escolher este talento várias vezes. A cada vez, ele se aplica a um descritor elemental diferente. Assim, você pode ter Substituição Elemental (ácido), Substituição Elemental (eletricidade), Substituição Elemental (fogo) e assim por diante."
      }
    ]
  },
  {
    "id": "metamagicos-substituicao-elemental-aprimorada",
    "name": "Substituição Elemental Aprimorada",
    "group": "Metamágicos",
    "groupSlug": "metamagicos",
    "sourceGroup": "Metamágicos",
    "prerequisites": [
      "Substituição Elemental"
    ],
    "costs": [
      "+1 PM"
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Baseado em seu Elemento, caso o alvo falhe em seu teste de resistência à magia gera um efeito adicional:"
      },
      {
        "kind": "paragraph",
        "text": "Fogo: A magia arremessa alvos 3m para trás, deixando-os derrubados."
      },
      {
        "kind": "paragraph",
        "text": "Frio: A magia congela os alvos, deixando-os enredados por uma rodada."
      },
      {
        "kind": "paragraph",
        "text": "Eletricidade: A magia atordoa os alvos por uma rodada"
      },
      {
        "kind": "paragraph",
        "text": "Ácido: A magia causa metade do dano como dano adicional no próximo turno."
      },
      {
        "kind": "paragraph",
        "text": "Sonico: A magia deixa o alvo surdo por uma rodada."
      },
      {
        "kind": "paragraph",
        "text": "Magias sem testes de resistência não podem se beneficiar deste talento."
      }
    ]
  },
  {
    "id": "metamagicos-toque-longinquo",
    "name": "Toque Longínquo",
    "group": "Metamágicos",
    "groupSlug": "metamagicos",
    "sourceGroup": "Metamágicos",
    "prerequisites": [],
    "costs": [
      "+1 PM"
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Este talento só pode ser aplicado em magias de toque. Uma magia de toque longínquo passa a ter alcance de 12m. Você ainda deve fazer um ataque de toque à distância para acertar o alvo."
      }
    ]
  },
  {
    "id": "destino-advogado-da-f-i-r-m-a",
    "name": "Advogado da F.I.R.M.A.",
    "group": "Talentos de Destino",
    "groupSlug": "destino",
    "sourceGroup": "TALENTOS DE DESTINO",
    "prerequisites": [
      "Treinado em Ofício (advogado), Tendência Leal, Inteligência 14"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode substituir testes de Diplomacia ou Enganação por testes de Ofício (advogado), efetivamente dando uma “carteirada” em seus desafios. Você pode usar este talento um número de vezes por dia igual a seu bônus de inteligência."
      }
    ]
  },
  {
    "id": "destino-ao-sabor-do-destino",
    "name": "Ao Sabor do Destino",
    "group": "Talentos de Destino",
    "groupSlug": "destino",
    "sourceGroup": "TALENTOS DE DESTINO",
    "prerequisites": [
      "Carisma 14, 6º Nível"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe os seguintes benefícios, de acordo com seu nível de personagem. Caso adquira este talento depois do 5º nível, você recebe todos os benefícios dos níveis anteriores."
      },
      {
        "kind": "paragraph",
        "text": "5º +1 em jogadas de ataque e dano."
      },
      {
        "kind": "paragraph",
        "text": "6º +4 em uma perícia à sua escolha."
      },
      {
        "kind": "paragraph",
        "text": "7º +1 na CA."
      },
      {
        "kind": "paragraph",
        "text": "8º +2 em uma habilidade à sua escolha (cumulativo)."
      },
      {
        "kind": "paragraph",
        "text": "9º +1 nos testes de resistência."
      },
      {
        "kind": "paragraph",
        "text": "10º +2 em jogadas de ataque e dano."
      },
      {
        "kind": "paragraph",
        "text": "11º +4 em uma perícia à sua escolha."
      },
      {
        "kind": "paragraph",
        "text": "12º +2 na CA."
      },
      {
        "kind": "paragraph",
        "text": "13º +2 em uma habilidade à sua escolha (cumulativo)."
      },
      {
        "kind": "paragraph",
        "text": "14º +2 nos testes de resistência."
      },
      {
        "kind": "paragraph",
        "text": "15º +3 em jogadas de ataque e dano."
      },
      {
        "kind": "paragraph",
        "text": "16º +4 em uma perícia à sua escolha."
      },
      {
        "kind": "paragraph",
        "text": "17º +3 na CA."
      },
      {
        "kind": "paragraph",
        "text": "18º +2 em uma habilidade à sua escolha (cumulativo)."
      },
      {
        "kind": "paragraph",
        "text": "19º +3 nos testes de resistência."
      },
      {
        "kind": "paragraph",
        "text": "20º +4 em jogadas de ataque e dano."
      },
      {
        "kind": "paragraph",
        "text": "Ao utilizar qualquer item mágico, você perde os benefícios do talento por uma semana ou pela duração do efeito, o que for maior."
      }
    ]
  },
  {
    "id": "destino-atraente",
    "name": "Atraente",
    "group": "Talentos de Destino",
    "groupSlug": "destino",
    "sourceGroup": "TALENTOS DE DESTINO",
    "prerequisites": [
      "Carisma 14"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Contra Humanoides você recebe +4 nas jogadas de Diplomacia, Enganação e Atuação. Contra estas criaturas você pode usar estas perícias mesmo em situações nas quais isso não seria permitido."
      }
    ]
  },
  {
    "id": "destino-celebridade",
    "name": "Celebridade",
    "group": "Talentos de Destino",
    "groupSlug": "destino",
    "sourceGroup": "TALENTOS DE DESTINO",
    "prerequisites": [
      "Autorização do Narrador"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Sempre que interage com um PdM, você tem chance de ser reconhecido. Quando uma pessoa encontra-o pela primeira vez, ela faz um teste de Inteligência contra CD 10. Você pode conceder um bônus nesse teste igual à metade do seu nível. Se o PdM for bem-sucedido, você tem um bônus em todos os testes de perícias baseadas em Carisma contra ele igual à margem de sucesso (por exemplo, +5 em caso de um resultado 15)."
      }
    ]
  },
  {
    "id": "destino-comandar",
    "name": "Comandar",
    "group": "Talentos de Destino",
    "groupSlug": "destino",
    "sourceGroup": "TALENTOS DE DESTINO",
    "prerequisites": [
      "Carisma 14"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode usar uma ação padrão para gritar ordens para seus aliados. Aqueles que puderem ouvi-lo recebem +1 em suas jogadas e testes por um número de rodadas igual a 1 + seu modificador de Carisma."
      }
    ]
  },
  {
    "id": "destino-companheiro-enxame",
    "name": "Companheiro Enxame",
    "group": "Talentos de Destino",
    "groupSlug": "destino",
    "sourceGroup": "TALENTOS DE DESTINO",
    "prerequisites": [
      "Um Companheiro concedido por habilidade de Classe"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você perde o seu companheiro regular e recebe, no lugar dele, um enxame de minúsculas criaturas, ratos, vespas, aranhas, pequenos répteis, etc., à sua escolha."
      },
      {
        "kind": "paragraph",
        "text": "Especial: Um personagem com múltiplos companheiros pode escolher este múltiplas vezes uma para cada Companheiro."
      }
    ]
  },
  {
    "id": "destino-corrida",
    "name": "Corrida",
    "group": "Talentos de Destino",
    "groupSlug": "destino",
    "sourceGroup": "TALENTOS DE DESTINO",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Seu deslocamento terrestre aumenta em +3m."
      }
    ]
  },
  {
    "id": "destino-destinado-a-grandeza",
    "name": "Destinado à Grandeza",
    "group": "Talentos de Destino",
    "groupSlug": "destino",
    "sourceGroup": "TALENTOS DE DESTINO",
    "prerequisites": [
      "8° Nível"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Escolha duas classes na qual você possua pelo menos um nível. Você soma o nível de ambas as classes para os requisitos de talentos de classe."
      }
    ]
  },
  {
    "id": "destino-destino",
    "name": "Destino",
    "group": "Talentos de Destino",
    "groupSlug": "destino",
    "sourceGroup": "TALENTOS DE DESTINO",
    "prerequisites": [
      "Autorização do Narrador"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe um ponto de ação adicional no início de cada sessão de jogo. Além disso, quando gasta um ponto de ação para recuperar pontos de vida, recupera o dobro dos pontos de vida normais."
      }
    ]
  },
  {
    "id": "destino-devoto",
    "name": "Devoto",
    "group": "Talentos de Destino",
    "groupSlug": "destino",
    "sourceGroup": "TALENTOS DE DESTINO",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Escolha duas magias divinas de nível 0. Você pode lançar esta magia até três vezes por dia, como se fosse um clérigo. Este talento funciona como a habilidade de classe devoto (de clérigos, druidas e paladinos), permitindo que você adquira talentos de Poder Concedido de sua divindade padroeira."
      }
    ]
  },
  {
    "id": "destino-espirito-do-vento",
    "name": "Espírito do Vento",
    "group": "Talentos de Destino",
    "groupSlug": "destino",
    "sourceGroup": "TALENTOS DE DESTINO",
    "prerequisites": [
      "Tendência Bondosa, Treinado em Sobrevivência"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você nunca se perde e sempre sabe para onde fica o norte. Uma vez por dia, pode lançar montaria fantasmagórica sem gastar PM."
      }
    ]
  },
  {
    "id": "destino-estudos-diletantes",
    "name": "Estudos Diletantes",
    "group": "Talentos de Destino",
    "groupSlug": "destino",
    "sourceGroup": "TALENTOS DE DESTINO",
    "prerequisites": [
      "Capacidade de conjurar Magias"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você aprende uma magia extra ao subir de nível, mas recebe 1 PM a menos por nível."
      }
    ]
  },
  {
    "id": "destino-expulsar-fascinar-mortos-vivos",
    "name": "Expulsar/Fascinar Mortos-Vivos",
    "group": "Talentos de Destino",
    "groupSlug": "destino",
    "sourceGroup": "TALENTOS DE DESTINO",
    "prerequisites": [
      "Habilidade de classe Canalizar Energia Positiva/Negativa"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Este talento afeta todos os mortos-vivos a até 9m. Se você canaliza energia positiva, pode deixá-los apavorados durante um minuto. Se canaliza energia negativa, pode deixá-los fascinados. O nível somado de mortos-vivos sob este efeito não pode superar duas vezes seu próprio nível.  Mortos-vivos têm direito a um teste de Vontade (CD 10 + metade de seu nível + modificador de Carisma) para evitar qualquer destes efeitos.  Usar este talento é uma ação padrão, e gasta uma utilização diária da habilidade canalizar energia positiva/negativa."
      }
    ]
  },
  {
    "id": "destino-fundamentalista",
    "name": "Fundamentalista",
    "group": "Talentos de Destino",
    "groupSlug": "destino",
    "sourceGroup": "TALENTOS DE DESTINO",
    "prerequisites": [
      "Cumpridor das obrigações e restrições de seu deus, Devoto"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Além de cumprir as obrigações e restrições de sua divindade, você deve cumprir seus dogmas fundamentalistas. A lista dos dogmas fundamentalistas de cada divindade está na caixa de texto da página 48 do Manual do Devoto. Em troca, você recebe um bônus de +2 em duas habilidades básicas à sua escolha e +5 PM.  Caso um fundamentalista falhe em seguir os dogmas, perde todas as suas habilidades de classe (além do uso deste talento) por um mês, ou até fazer uma penitência imposta por outro fundamentalista do mesmo deus."
      }
    ]
  },
  {
    "id": "destino-lei-do-mais-forte",
    "name": "Lei do Mais Forte",
    "group": "Talentos de Destino",
    "groupSlug": "destino",
    "sourceGroup": "TALENTOS DE DESTINO",
    "prerequisites": [
      "Força 14, Liderança (Seguidores)"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você soma seu modificador de Força ao seu modificador de Carisma para determinar quantos níveis de seguidores você tem. Por exemplo, um bárbaro de 8º nível com For 21 (+5) e Car 13 (+1) tem 48 níveis de seguidores."
      }
    ]
  },
  {
    "id": "destino-lideranca",
    "name": "Liderança",
    "group": "Talentos de Destino",
    "groupSlug": "destino",
    "sourceGroup": "TALENTOS DE DESTINO",
    "prerequisites": [
      "6º nível de personagem, Autorização do Narrador"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Escolha entre ter um parceiro, ou ter seguidores."
      },
      {
        "kind": "paragraph",
        "text": "Um parceiro é um segundo personagem, dois níveis abaixo do seu. Você é livre para construir esse personagem, escolhendo sua raça e classe, mas a tendência do parceiro deve estar apenas um passo distante da sua. O parceiro avança de nível quando você também avança. Um parceiro é alguém leal, que segue seu personagem por razões pessoais. Ele segue suas ordens, e pode até arriscar a vida para ajudá-lo. Mas um parceiro constantemente maltratado pode por intervenção do mestre desistir de segui-lo."
      },
      {
        "kind": "paragraph",
        "text": "Se escolheu seguidores, você tem uma quantidade de níveis de seguidores igual a seu nível multiplicado por seu modificador de Carisma (mínimo 1). Por exemplo, um paladino de 10º nível e Carisma 16 (+3) tem 30 níveis de seguidores. Você pode distribuir os níveis como quiser para construir os personagens, mas o nível máximo que eles podem ter é igual a metade do seu. Então, o mesmo paladino poderia ter seguidores de até 5º nível. Essa diferença de poder torna os seguidores ineficazes em combate. Em geral eles atuam apenas contra adversários fracos, ou então como ajudantes, guardas, mensageiros e carregadores.  Seguidores podem ser de qualquer tendência, mas não costumam ser tão leais e corajosos quanto parceiros. Podem lutar se ordenados, mas abandonam a luta se perdem metade ou mais de seus pontos de vida. Os seguidores não sobem de nível; quando você sobe de nível, ganha mais seguidores."
      },
      {
        "kind": "paragraph",
        "text": "Ao perder parceiros ou seguidores (por morte ou desistência), você vai precisar de 1d4 meses para encontrar outros. Você pode escolher este talento duas vezes, uma para parceiro e uma para seguidores."
      }
    ]
  },
  {
    "id": "destino-linguista",
    "name": "Linguista",
    "group": "Talentos de Destino",
    "groupSlug": "destino",
    "sourceGroup": "TALENTOS DE DESTINO",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você aprende um número de novos idiomas igual a 3 + seu modificador de Inteligência (mínimo 3)."
      }
    ]
  },
  {
    "id": "destino-luz-da-alvorada-ocaso",
    "name": "Luz da Alvorada/Ocaso",
    "group": "Talentos de Destino",
    "groupSlug": "destino",
    "sourceGroup": "TALENTOS DE DESTINO",
    "prerequisites": [
      "Habilidade de classe Canalizar Energia Positiva (Alvorada) ou Negativa (Ocaso)"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Como uma ação padrão, você pode gastar um uso de sua habilidade canalizar energia positiva/negativa para invocar uma luz que encanta sua arma, seu escudo ou seu símbolo sagrado. Esta luz funciona como uma tocha muito forte (alcance de 9m) e que revela criatura incorpóreas. Ataques contra criaturas incorpóreas dentro da área atingida pela luz não têm chance de erro (como se as armas tivessem o poder toque espectral). A luz dura uma hora."
      }
    ]
  },
  {
    "id": "destino-meditacao-autoafirmativa",
    "name": "Meditação Autoafirmativa",
    "group": "Talentos de Destino",
    "groupSlug": "destino",
    "sourceGroup": "TALENTOS DE DESTINO",
    "prerequisites": [
      "Sabedoria 16, Resistência Aprimorada (Vontade), Treinado em Meditação"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode meditar por um dia para receber um benefício da tabela abaixo. No fim do dia, faça um teste de Meditação. Se você for bem-sucedido, adquire o benefício pelo resto da semana."
      },
      {
        "kind": "paragraph",
        "text": "CD 20: +1 em Jogadas de Ataque"
      },
      {
        "kind": "paragraph",
        "text": "CD 25: +1 em CA"
      },
      {
        "kind": "paragraph",
        "text": "CD 30: +1 em Testes de Resistência"
      },
      {
        "kind": "paragraph",
        "text": "CD 35: Os bônus anteriores aumentam para +2"
      },
      {
        "kind": "paragraph",
        "text": "CD 40: Os bônus anteriores aumentam para +3"
      }
    ]
  },
  {
    "id": "destino-poder-latente",
    "name": "Poder Latente",
    "group": "Talentos de Destino",
    "groupSlug": "destino",
    "sourceGroup": "TALENTOS DE DESTINO",
    "prerequisites": [
      "4º nível de personagem, Treinado em Meditação"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Uma vez por dia, como uma reação, você recebe um bônus igual ao seu nível em sua próxima jogada ou teste."
      }
    ]
  },
  {
    "id": "destino-purificacao-pelo-fogo",
    "name": "Purificação pelo Fogo",
    "group": "Talentos de Destino",
    "groupSlug": "destino",
    "sourceGroup": "TALENTOS DE DESTINO",
    "prerequisites": [
      "Capacidade de lançar pelo menos uma magia divina com o descritor fogo, Autorização do Narrador"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Sempre que você derrubar um inimigo (reduzi-lo a 0 ou menos PV) com uma magia que cause dano de fogo, pode convertê-lo para o “lado certo”. Caso este inimigo seja curado durante este mesmo combate, adquire a sua tendência pelo restante do combate. Isso pode significar a perda de habilidades de classe, violação de códigos de conduta, etc. Em geral, também significa que ele muda de lado durante a batalha! Um guerreiro servindo a um necromante maligno certamente mudaria de lado após ser convertido por um paladino, por exemplo. O mestre tem a palavra final sobre o que acontece nesses casos. Após o final do combate, o inimigo volta à sua tendência original."
      }
    ]
  },
  {
    "id": "destino-resistencia-aprimorada",
    "name": "Resistência Aprimorada",
    "group": "Talentos de Destino",
    "groupSlug": "destino",
    "sourceGroup": "TALENTOS DE DESTINO",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Escolha entre Fortitude, Reflexo ou Vontade, você recebe +2 naquele teste de resistência. Este talento pode ser adquirido múltiplas vezes."
      }
    ]
  },
  {
    "id": "destino-senhor-dos-mortos",
    "name": "Senhor dos Mortos",
    "group": "Talentos de Destino",
    "groupSlug": "destino",
    "sourceGroup": "TALENTOS DE DESTINO",
    "prerequisites": [
      "10º nível de personagem"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "O nível máximo somado dos mortos-vivos sob seu comando passa a ser o dobro do seu nível."
      }
    ]
  },
  {
    "id": "destino-sonhos-premonitorios",
    "name": "Sonhos Premonitórios",
    "group": "Talentos de Destino",
    "groupSlug": "destino",
    "sourceGroup": "TALENTOS DE DESTINO",
    "prerequisites": [
      "Sabedoria 14, 6º nível de personagem"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Sempre que você tiver uma boa noite de sono, pode acordar com uma premonição. A premonição fornece +5 em uma única jogada ou teste, ou CA+5 contra um único ataque. Usar a premonição não conta como uma ação. Você pode usar a premonição depois da jogada ser feita, mas deve usá-la antes de o mestre dizer se ela foi bem-sucedida ou não. A premonição dura 1 dia ou até ser utilizada; você nunca pode ter mais de uma premonição ativa."
      }
    ]
  },
  {
    "id": "poder-concedido-amigo-dos-animais",
    "name": "Amigo dos Animais",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Allihanna"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe a habilidade de classe empatia com a natureza, como se fosse um druida de nível igual ao MdN de personagem. Caso você já possua essa habilidade, recebe um bônus de +4 em seus testes. O bônus por já possuir esta habilidade aumenta em +4 no 8º nível e novamente no 18º para um total de +12."
      }
    ]
  },
  {
    "id": "poder-concedido-bencao-da-natureza",
    "name": "Benção da Natureza",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Allihanna"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você está permanentemente sob efeito de proteção contra o Mal, Quando está em um ambiente natural o bônus garantido aumenta em +2. No 10º Nível o bônus garantido pela magia em um ambiente natural aumenta em +2 para um total de +6."
      }
    ]
  },
  {
    "id": "poder-concedido-dominio-das-plantas",
    "name": "Domínio das Plantas",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Allihanna"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode lançar magias que dependam de plantas em qualquer lugar sem realizar testes, a vegetação brota e desaparece ao final do efeito. (Exemplo: Constrição, Pele de Árvore). Quando conjura essas magias reduz seu custo e um de seus metamágicos aplicados a magia em 1 (Minimo 1)."
      }
    ]
  },
  {
    "id": "poder-concedido-dominio-dos-animais",
    "name": "Domínio dos Animais",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Allihanna"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você está permanentemente sob efeito da magia falar com animais. Além disso, recebe treinamento em Adestrar Animais, caso já seja treinado recebe Foco em Perícia (Adestrar Animais). Enquanto estiver em um terreno natural você pode conjurar a magia “Bom Fruto” à vontade mesmo que não tenha frutos em sua mão."
      }
    ]
  },
  {
    "id": "poder-concedido-herbanario",
    "name": "Herbanário",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Allihanna"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode entrar em um transe especial se estiver em contato com uma planta e convencê-la a crescer da forma que você desejar (a duração é decidida pelo mestre; mínimo 1 semana). Durante o transe, você não sofre os efeitos de fome ou sede e recupera a quantidade normal de PV por dia de descanso. Além disso, você pode ficar perfeitamente imóvel, de pés descalços, sobre solo natural (terra, pedra, areia...) pelo tempo que quiser. Enquanto estiver assim, você não precisa comer, dormir ou beber água, realizando um processo semelhante à fotossíntese. Depois de oito horas assim, você conta como se tivesse dormido oito horas e feito uma refeição completa."
      }
    ]
  },
  {
    "id": "poder-concedido-discipulo-do-sol",
    "name": "Discípulo do Sol",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Azgher"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Quando você causa dano sagrado a um morto-vivo faz com que peguem fogo, recebendo 2d6 de dano sagrado por turno até que se apaguem."
      }
    ]
  },
  {
    "id": "poder-concedido-dominio-do-fogo",
    "name": "Domínio do Fogo",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Azgher, 10º Nível"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode lançar Escudo de Fogo 3 vezes ao dia como se fosse um feiticeiro de 10 nível."
      }
    ]
  },
  {
    "id": "poder-concedido-espada-em-chamas",
    "name": "Espada em Chamas",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Azgher"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Uma vez por dia, você pode fazer com que sua cimitarra arda em chamas fazendo com que seus Ataques Corpo-a-Corpo bem sucedidos causem 2d6 de dano de Fogo adicional. No 8º nível o dano aumenta para 3d6 e no 16º para 4d6. Este efeito dura uma hora e não acumula com o encantamento elemental."
      }
    ]
  },
  {
    "id": "poder-concedido-guarda-do-sol",
    "name": "Guarda do Sol",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Azgher"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você está permanentemente sob efeito de proteção contra o Mal, Quando você está sob a luz do sol o bônus garantido aumenta em +2. No 10º Nível o bônus garantido pela magia, enquanto estiver sob a luz do Sol, aumenta em +2 para um total de +6."
      }
    ]
  },
  {
    "id": "poder-concedido-imunidade-do-sol",
    "name": "Imunidade do Sol",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Azgher"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você é considerado sempre sob efeito da magia suportar elementos. A partir do 9º fica sob efeito de Adaptação Ambiental."
      }
    ]
  },
  {
    "id": "poder-concedido-beleza-das-mares",
    "name": "Beleza das Marés",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Grande Oceano"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode se comunicar com criaturas aquáticas, mesmo com aquelas que não possuem inteligência. Além disso, recebe treinamento em Sobrevivência, caso já seja treinado recebe Foco em Perícia (Sobrevivência)"
      }
    ]
  },
  {
    "id": "poder-concedido-dominio-da-agua",
    "name": "Domínio da Água",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Grande Oceano"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você está permanentemente sob efeito da magia respirar na água e pode estender este efeito a até outras 9 criaturas voluntárias por até 1 dia, você pode garantir este benefício até 3 vezes por dia."
      }
    ]
  },
  {
    "id": "poder-concedido-forma-do-mar",
    "name": "Forma do Mar",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Grande Oceano"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Três vezes por dia, com uma ação padrão, você pode assumir a forma de um animal aquático, com deslocamento de nado 18m. Na forma do mar você não pode lançar magias, a menos que seja capaz de fazê-lo sem usar componentes verbais. A habilidade dura até que você decida encerrá-la."
      }
    ]
  },
  {
    "id": "poder-concedido-tridente-de-oceano",
    "name": "Tridente de Oceano",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Grande Oceano"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Uma vez por dia, você pode fazer com que seu Tridente congele ao redor de sua ponta fazendo com que seus Ataques Corpo-a-Corpo bem sucedidos causem 2d6 de dano de Frio adicional. No 8º nível o dano aumenta para 3d6 e no 16º para 4d6. Este efeito dura uma hora e não acumula com o encantamento elemental."
      }
    ]
  },
  {
    "id": "poder-concedido-voz-do-mar",
    "name": "Voz do Mar",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Grande Oceano"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode lançar “Dominar Animal” duas vezes por dia como se fosse um Druida de seu nível, apenas contra criaturas aquáticas. A partir do 12º Nível passa a poder conjurar “Dominação Total” nestas criaturas sem componentes."
      }
    ]
  },
  {
    "id": "poder-concedido-disfarce-ilusorio",
    "name": "Disfarce Ilusório",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Hynnin"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode lançar disfarce ilusório à vontade como uma ação livre tendo apenas você como alvo. Esta magia recebe os efeitos de “Magia Camuflada” como se fossem pagos 3 PMs."
      }
    ]
  },
  {
    "id": "poder-concedido-dominio-da-trapaca",
    "name": "Domínio da Trapaça",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Hynnin"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe treinamento em Enganação, Furtividade e Ladinagem. Caso já seja treinado em todas as três, recebe foco em perícia em duas das 3 perícias a sua escolha."
      }
    ]
  },
  {
    "id": "poder-concedido-forma-de-macaco",
    "name": "Forma de Macaco",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Hynnin"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Três vezes por dia, você pode se transformar em um macaco, um animal Mínimo (+2 em jogadas de ataque e classe de armadura, +8 em furtividade) com deslocamento de escalada 9m. Na forma de macaco você não pode lançar magias, a menos que seja capaz de fazê-lo sem usar componentes verbais. A transformação dura quanto tempo você desejar."
      }
    ]
  },
  {
    "id": "poder-concedido-fuga",
    "name": "Fuga",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Hynnin"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Uma vez por dia, como uma ação completa, você pode fazer um teste de enganação (resistido pelo teste de Intuição do adversário com maior bônus nessa perícia). Em caso de sucesso, você cria uma distração que permite que você e seus aliados fujam da batalha de maneira espetacular. Você e quaisquer aliados a até 6 metros são afetados pela magia porta dimensional. A porta leva para o local seguro mais próximo, a critério do Mestre."
      }
    ]
  },
  {
    "id": "poder-concedido-talento-ladino",
    "name": "Talento Ladino",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Hynnin, Domínio da Trapaça"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você se torna treinado em duas perícias da lista de perícias de classe do Ladino, No 14º Nível, três vezes por dia quando realizar um teste de perícia qualquer pode rerolar o teste e escolher o melhor resultado."
      }
    ]
  },
  {
    "id": "poder-concedido-conjurar-arma",
    "name": "Conjurar Arma",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Keen"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode, uma vez por dia, como ação de movimento, criar uma arma de combate corpo-corpo ou de arremesso à sua escolha. A arma é comum (não mágica), mas de qualidade obra-prima. A arma dura uma hora, e então se desfaz, além de só funcionar em suas mãos.  Você pode utilizar 2 PMs ao ativar este talento, se o fizer cria uma arma mágica com bônus de +1. Para cada 2 PMs além do primeiro o bônus da arma aumenta em +1, o bónus máximo que a arma pode possuir desta forma é igual a metade do seu nível de personagem limitando se a um bônus de +5."
      }
    ]
  },
  {
    "id": "poder-concedido-coragem-total",
    "name": "Coragem Total",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Keen"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você é imune a efeitos de medo, mágicos ou não."
      }
    ]
  },
  {
    "id": "poder-concedido-dominio-da-destruicao",
    "name": "Domínio da Destruição",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Keen"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Uma vez por dia você pode adicionar seu nível a uma jogada de dano, você deve declarar o uso desta habilidade antes de realizar a jogada de ataque mas não perde ela se errar o ataque. No 8º e 16º Nível recebe um uso adicional da habilidade mas nunca pode utilizá-la mais de uma vez por rodada."
      }
    ]
  },
  {
    "id": "poder-concedido-dominio-da-guerra",
    "name": "Domínio da Guerra",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Keen, 2º Nível"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe “Especialização em Arma” em duas Armas, sendo uma a Arma de seu Deus e a outra uma arma a sua escolha."
      }
    ]
  },
  {
    "id": "poder-concedido-dominio-do-massacre",
    "name": "Domínio do Massacre",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Keen"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você está permanentemente sob efeito de proteção contra o Bem, Quando você mata um inimigo em combate este bônus aumenta em +2 até o fim do encontro, mas apenas uma vez por combate. No 10º Nível o bônus garantido pela magia por matar um inimigo aumenta em +2 para um total de +6."
      }
    ]
  },
  {
    "id": "poder-concedido-dom-dos-justos",
    "name": "Dom dos Justos",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Khalmyr"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe +1 nas jogadas de ataque e dano contra criaturas Malignas. No 5º, 10º, 15º e 20º nível, o bônus aumenta em +1 para um total de +5 no 20º nível.."
      }
    ]
  },
  {
    "id": "poder-concedido-dominio-do-bem",
    "name": "Domínio do Bem",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Khalmyr"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você está permanentemente sob efeito de proteção contra o Mal, Quando você enfrenta um morto-vivo o bônus garantido aumenta em +2. No 10º Nível o bônus garantido pela magia enquanto enfrenta um morto-vivo aumenta em +2 para um total de +6."
      }
    ]
  },
  {
    "id": "poder-concedido-dominio-da-ordem",
    "name": "Domínio da Ordem",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Khalmyr"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você está permanentemente sob efeito de proteção contra o Caos, Quando você enfrenta um morto-vivo o bônus garantido aumenta em +2. No 10º Nível o bônus garantido pela magia enquanto enfrenta um morto-vivo aumenta em +2 para um total de +6."
      }
    ]
  },
  {
    "id": "poder-concedido-dom-da-vontade",
    "name": "Dom da Vontade",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Khalmyr, 4º Nível"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Uma vez por dia, você pode fazer com que sua Arma irradie luz Sagrada fazendo com que seus Ataques Corpo-a-Corpo bem sucedidos causem 1d6 de dano Sagrado adicional. No 8º nível o dano aumenta para 2d6 e no 16º para 3d6. Este efeito dura uma hora e não acumula com o encantamento Sagrada."
      }
    ]
  },
  {
    "id": "poder-concedido-protecao-dos-santos",
    "name": "Proteção dos Santos",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Khalmyr"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Como reação, você pode conceder a um aliado(Exceto você mesmo) até 9m um bônus em uma resistência igual ao seu nível de personagem até o final do turno. Você pode utilizar esta habilidade até 3 vezes por dia."
      }
    ]
  },
  {
    "id": "poder-concedido-alma-do-dragao",
    "name": "Alma do Dragão",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Kallyadranoch, 4º Nível de Personagem"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe os seguintes benefícios de acordo com seu nível:"
      },
      {
        "kind": "paragraph",
        "text": "No 4º Nível, você recebe CA +2 e RE 2."
      },
      {
        "kind": "paragraph",
        "text": "No 8º Nível, Você recebe dois ataques naturais de garras, que causam dano de corte equivalente a uma Espada Curta própria para seu tamanho (1d6 para uma criatura Média)."
      },
      {
        "kind": "paragraph",
        "text": "No 12º Nível, Você recebe um ataque de sopro que causa 1d6 pontos de dano para cada dois níveis. Escolha entre um cone de fogo, frio, ácido ou energia negativa de 9m; ou uma linha de ácido ou eletricidade de 18m. Um teste de Reflexos (CD 10 + MdN + Mod. Con) reduz o dano à metade. Usar o sopro é uma ação padrão, e ele pode ser usado uma vez por dia para cada modificador de Constituição (mínimo 1)."
      },
      {
        "kind": "paragraph",
        "text": "No 16º Nível, você pode voar com deslocamento de 18m."
      },
      {
        "kind": "paragraph",
        "text": "No 20º Nível você recebe For +4, Con +4, Int +2, Car +2."
      }
    ]
  },
  {
    "id": "poder-concedido-companheiro-draconico",
    "name": "Companheiro Dracônico",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Kallyadranoch, 4º Nível de Personagem."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Seu companheiro recebe as modificações abaixo de acordo com o seu nível:"
      },
      {
        "kind": "paragraph",
        "text": "No 4º Nível, Recebe CA +1 e RE 1."
      },
      {
        "kind": "paragraph",
        "text": "No 8º Nível, Dois ataques naturais de garras, que causam dano de corte equivalente a uma Adaga própria para seu tamanho (1d4 para uma criatura Média)."
      },
      {
        "kind": "paragraph",
        "text": "No 12º Nível, Recebe um ataque de sopro que causa 1d4 pontos de dano para cada dois níveis. Escolha entre um cone de fogo, frio, ácido ou energia negativa de 9m; ou uma linha de ácido ou eletricidade de 18m. Um teste de Reflexos (CD 10 + MdN + Mod. Con) reduz o dano à metade. Usar o sopro é uma ação padrão, e ele pode ser usado uma vez por dia para cada modificador de Constituição (mínimo 1). A cada 1d4 Turnos."
      },
      {
        "kind": "paragraph",
        "text": "No 16º Nível, você pode voar com deslocamento de 12m."
      },
      {
        "kind": "paragraph",
        "text": "No 20º Nível você recebe For +2, Con +2, Int +2, Car +2."
      },
      {
        "kind": "paragraph",
        "text": "Especial: Um personagem com múltiplos companheiros pode escolher este múltiplas vezes uma para cada Companheiro."
      }
    ]
  },
  {
    "id": "poder-concedido-ego",
    "name": "Ego",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Kallyadranoch"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode receber +4 em uma jogada de ataque ou teste recém realizado. Você deve usar este talento antes que o mestre diga se você foi bem-sucedido e, se falhar, sofre uma penalidade de –2 em todas as jogadas e testes por uma hora. Você pode usar este talento um número de vezes por dia igual ao seu bônus de Carisma (mínimo 1)."
      }
    ]
  },
  {
    "id": "poder-concedido-presenca-aterradora",
    "name": "Presença Aterradora",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Kallyadranoch, 4º Nível de Personagem."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Ativar este talento exige uma ação livre (que envolve algum ato dramático, como exibir as garras, abrir as asas ou rosnar), mas ele pode ser usado apenas uma vez por rodada. Todos os adversários do Devoto a até 9m devem fazer um teste de Vontade (CD 10 + MdN + Mod. Car.). Em caso de falha, a vítima fica abalada (-2 em testes de habilidade, ataque, perícia e resistência) durante 1 minuto. Uma criatura bem-sucedida no teste fica imune a esta habilidade por um dia. Este poder não afeta criaturas de nível superior a você. Este é um efeito de medo. A partir do 16º nível criaturas que falha ficam apavoradas ao invés disso."
      }
    ]
  },
  {
    "id": "poder-concedido-servos-do-dragao",
    "name": "Servos do Dragão",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Kallyadranoch"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Com uma ação padrão, você pode conjurar um número de kobolds igual ao seu nível multiplicado por seu bônus de Carisma. Então, um Devoto de 5º nível com Carisma 18 (+4) conjura 20 kobolds. Os kobolds surgem em qualquer ponto a até 9m, à sua escolha (de arbustos, buracos no chão, atrás dos móveis) e permanecem até serem destruídos ou dispensados pelo conjurador, quando então desaparecem sem deixar vestígios. Eles são leais a você, falam seu idioma e seguem suas ordens, incluindo lutar até a morte. Você pode usar este talento um número de vezes por dia igual a seu modificador de Carisma (mas não pode conjurar novos kobolds até que todos os antigos tenham sumido."
      }
    ]
  },
  {
    "id": "poder-concedido-cura-gentil",
    "name": "Cura Gentil",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Lena"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você adiciona seu modificador de Carisma aos PV restaurados por suas magias de cura. Assim, um clérigo com Carisma 14 (modificador de +2) e este talento cura 1d8+3 PV com curar ferimentos leves (em vez de 1d8+1)."
      }
    ]
  },
  {
    "id": "poder-concedido-dominio-da-cura",
    "name": "Domínio da Cura",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Lena"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Suas magias de cura curam 1 PV adicional por PM gasto. Por exemplo, curar ferimentos (Aprimorado +1) cura 2 PV adicionais."
      }
    ]
  },
  {
    "id": "poder-concedido-maximizar-cura",
    "name": "Maximizar Cura",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Lena, 4º Nível de Personagem."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "3 Vezes por dia você pode fazer com que uma magia de cura recupere o número máximo de PVs. Uma magia sobre o efeito de ambos potencializar e maximizar recebem ambos efeitos de forma separada. Ou seja, cura o valor máximo dos dados e roda metade dos dados para potencializar."
      }
    ]
  },
  {
    "id": "poder-concedido-potencializar-cura",
    "name": "Potencializar Cura",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Lena, 4º Nível de Personagem."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "3 Vezes ao dia você pode fazer com que uma magia de cura recupere 50% a mais de PV. Uma magia sobre o efeito de ambos potencializar e maximizar recebem ambos efeitos de forma separada. Ou seja, cura o valor máximo dos dados e roda metade dos dados para potencializar."
      }
    ]
  },
  {
    "id": "poder-concedido-outra-face",
    "name": "Outra Face",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Lena"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Sempre que um inimigo atacá-lo com sucesso (causando dano ou prejudicando-o de qualquer forma), você pode escolher perdoá-lo. Se fizer isso, o inimigo sofre uma penalidade cumulativa de –1 em todas as jogadas de ataque durante este combate realizadas contra você. Entretanto, se você atacar este inimigo, todas as penalidades desaparecem. A penalidade máxima que este talento pode infringir é igual a metade do seu nível de personagem."
      }
    ]
  },
  {
    "id": "poder-concedido-dom-da-verdade",
    "name": "Dom da Verdade",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Lin-Wu"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe +2 em testes de Intuição e Percepção. Além disso, pode lançar discernir mentiras uma vez por dia como um Clérigo de mesmo nível. No 6º, 12º e 18º nível o bônus aumenta em +2 e você recebe um uso adicional da magia."
      }
    ]
  },
  {
    "id": "poder-concedido-dom-do-espadachim",
    "name": "Dom do Espadachim",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Lin-Wu"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você está permanentemente sob efeito de proteção contra o Caos, Quando você maximiza o dano de sua arma contra um inimigo o bônus garantido aumenta em +2 até o final do combate. No 10º Nível o bônus garantido pela magia aumenta em +2."
      }
    ]
  },
  {
    "id": "poder-concedido-grito-de-kiai-divino",
    "name": "Grito de Kiai Divino",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Lin-Wu, 4º Nível de Personagem."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode usar este talento como uma ação livre depois de rolar um ataque corpo-a-corpo. Você causa dano máximo, sem a necessidade de rolar dados. Você pode utilizar este talento três vezes por dia."
      }
    ]
  },
  {
    "id": "poder-concedido-naito-dotai",
    "name": "Naito Dotai",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Lin-Wu"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você causa dano com qualquer espada como se a arma pertencesse a uma categoria de tamanho maior (por exemplo, em suas mãos uma espada longa causa 2d6 de dano)."
      }
    ]
  },
  {
    "id": "poder-concedido-imunidade-contra-ilusoes",
    "name": "Imunidade Contra Ilusões",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Lin-Wu, 12º Nível"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você é imune a magias de ilusão."
      }
    ]
  },
  {
    "id": "poder-concedido-ataque-piedoso",
    "name": "Ataque Piedoso",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Marah"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode usar armas de corpo-a-corpo para causar dano não-letal sem sofrer penalidades na jogada de ataque. A partir do 12º Nível você pode causar dano não letal em criaturas com imunidade a esse tipo de dano, como mortos-vivos, construtos e outros."
      }
    ]
  },
  {
    "id": "poder-concedido-aura-de-paz",
    "name": "Aura de Paz",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Marah, Aparência Inofensiva"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "O talento Aparência Inofensiva passa a funcionar contra o primeiro ataque que você recebe de cada criatura."
      }
    ]
  },
  {
    "id": "poder-concedido-discurso-conciliador",
    "name": "Discurso Conciliador",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Marah"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode usar uma ação completa para iniciar um efeito similar a magia “Fascinação”, todas as criaturas a até 9m de você devem realizar um teste de Vontade (CD 10 + MdN + Mod Car)  ou não conseguirá tirar os olhos de você, totalmente encantada com sua beleza. Você pode utilizar esta habilidade até 3 vezes por dia e ela dura por até 10 minutos mas não tem efeito em combate."
      }
    ]
  },
  {
    "id": "poder-concedido-palavras-de-bondade",
    "name": "Palavras de Bondade",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Marah"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode lançar “Enfeitiçar Pessoa” três vezes por dia como se fosse um feiticeiro de mesmo nível. A partir do 8º nível passa a lançar “Sugestão” e no 16º passa a conjurar Dominar Pessoa."
      }
    ]
  },
  {
    "id": "poder-concedido-placidez-de-marah",
    "name": "Placidez de Marah",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Marah"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Nas rodadas em que não realizar nenhum ataque, você recebe um bônus de +2 em CA e Testes de Resistência. Esse bônus aumenta para +4 no 12º nível."
      }
    ]
  },
  {
    "id": "poder-concedido-carcacas-profanadas",
    "name": "Carcaças Profanadas",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Megalokk"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você consome os restos de um cadáver de um Humanoide, animal ou monstro, Uma carcaça é consumida em dez minutos. Você recupera todos os PV e recebe um bônus de +2 em jogadas de ataque e dano e testes de resistência por um dia. Esse bônus aumenta para +4 no 10º Nível. Uma carcaça usada como fonte de alimento não pode ser reanimada como um morto-vivo."
      }
    ]
  },
  {
    "id": "poder-concedido-dominio-dos-ossos",
    "name": "Domínio dos Ossos",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Megalokk"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você está permanentemente sob efeito de proteção contra o Bem, quando você consome o corpo de uma criatura viva o bônus aumenta em +2 até o final do dia. No 10º Nível o bônus garantido pela magia por consumir uma criatura aumenta em +2. Uma carcaça é consumida em dez minutos."
      }
    ]
  },
  {
    "id": "poder-concedido-garras-de-fera",
    "name": "Garras de Fera",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Megalokk"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe duas armas naturais de garras, que causam dano de corte equivalente a uma espada longa própria para seu tamanho. No 6º nível suas armas naturais se tornam mágicas com o bônus de +1, no 12º nível esse bônus aumenta para +3 e para +5 no 18º nível."
      }
    ]
  },
  {
    "id": "poder-concedido-invocacao-de-monstros",
    "name": "Invocação de Monstros",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Megalokk"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode lançar invocar monstro I uma vez por dia, porém não precisa concentrar e a magia tem duração de 1 hora. A cada 2 níveis de personagem o nível de invocar monstro aumenta em um. No 9º Nível e no 18º recebe um uso diário adicional mas pode ter apenas 1 Monstro invocado desta forma por vez."
      }
    ]
  },
  {
    "id": "poder-concedido-voz-de-megalokk",
    "name": "Voz de Megalokk",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Megalokk"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você conhece os idiomas de todos os monstros inteligentes (criaturas do tipo monstro com Int 3 ou mais). Você também pode se comunicar com monstros não inteligentes (lnt 1 ou 2) livremente, como a magia falar com animais."
      }
    ]
  },
  {
    "id": "poder-concedido-anatomia-insana",
    "name": "Anatomia Insana",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Nimb"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você tem 50% de chance de ignorar o dano adicional de um acerto crítico. Especial: Esta habilidade substitui qualquer outra chance que você tenha."
      }
    ]
  },
  {
    "id": "poder-concedido-dominio-da-sorte",
    "name": "Domínio da Sorte",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Nimb"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Uma vez por dia, você pode rolar novamente uma jogada ou teste que tenha realizado. No 9º Nível e no 18º recebe um uso diário adicional, mas nunca pode ativar esta habilidade mais de uma vez por rodada."
      }
    ]
  },
  {
    "id": "poder-concedido-poder-oculto",
    "name": "Poder Oculto",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Nimb"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Três vezes por dia, como uma ação livre, você recebe +4 em Força, Destreza,Constituição, Inteligência, Sabedoria ou Carisma (escolhido aleatoriamente). Este efeito dura 1 minuto mas não pode ser ativado uma segunda vez enquanto o efeito original durar. No 10º Nível o bônus fornecido aumenta para +8 e no 20º Nível aumenta para +12."
      }
    ]
  },
  {
    "id": "poder-concedido-transmissao-da-loucura",
    "name": "Transmissão da Loucura",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Nimb"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode lançar confusão uma vez por dia (CD 10 + metade de seu nível + mod. Car). No 9º Nível e no 18º recebe um uso diário adicional."
      }
    ]
  },
  {
    "id": "poder-concedido-profeta-do-caos",
    "name": "Profeta do Caos",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Nimb"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode “profetizar” o resultado de uma rolagem que use d20 e depois definir o resultado do teste. Por exemplo, um jogador está prestes a fazer uma jogada de ataque (rolagem de 1d20). Você diz que o resultado da rolagem será 7 (sem nenhum modificador, apenas o resultado do dado). Se você acertar (ou seja, se o resultado do dado for 7), você pode definir o que acontece com a rolagem, por exemplo, dizendo que a jogada de ataque errou, ou é um acerto crítico! Da mesma forma, se o mestre faz uma rolagem em nome de um inimigo, você pode prever que o resultado será 20. Caso o mestre realmente role um 20, você pode definir que este valor é um erro! O resultado do dado não pode ser alterado de nenhuma forma por itens, talentos, habilidades ou qualquer outro meio. Usar este talento é uma ação livre. Você pode usá-lo um número de vezes por dia igual ao seu bônus de Carisma (mas apenas uma vez em cada rolagem)."
      }
    ]
  },
  {
    "id": "poder-concedido-aura-de-panico",
    "name": "Aura de Pânico",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Ragnar"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Uma vez por dia, como uma ação padrão, você pode exalar uma aura de pânico; Todos os inimigos a até 9m devem fazer um teste de Vontade (CD 10+MdN+Mod Sab ou Mod Car.) Se falharem ficam apavorados por um minuto. Se forem bem-sucedidos ficam abalados por uma rodada. No 12º Nível esta habilidade ignora imunidade a medo de criaturas."
      }
    ]
  },
  {
    "id": "poder-concedido-dominio-da-morte",
    "name": "Domínio da Morte",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Ragnar"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Uma vez por dia, você pode usar o toque da morte. Faça uma jogada de ataque com uma de suas armas. Se você acertar, causa dano normal com a arma e então rola 1d6 por nível de personagem. Se o total igualar ou superar os pontos de vida do alvo, ele morre (sem direito a teste de resistência). Caso contrário, o alvo não sofre nada."
      }
    ]
  },
  {
    "id": "poder-concedido-furia-mortal",
    "name": "Fúria Mortal",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Ragnar"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você está permanentemente sob efeito de proteção contra o Bem, quando você está abaixo da metade de seus pontos de vida máximos o bônus aumenta em +2, o bônus se perde caso sua vida suba acima deste valor. No 10º nível o bônus garantido pela magia por estar abaixo dos pontos de vida é aumentado em +2."
      }
    ]
  },
  {
    "id": "poder-concedido-mestre-de-cerimonia",
    "name": "Mestre de Cerimônia",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Ragnar, Treinado em Conhecimento (Religião)"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe um bônus de +4 em teste de Conhecimento (Religião) para realizar sacrifícios em nome de uma divindade Maligna. no 9º Nível e no 18º este bônus aumenta em +4."
      }
    ]
  },
  {
    "id": "poder-concedido-tropas-de-ragnar",
    "name": "Tropas de Ragnar",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Ragnar, 4º Nível de Personagem"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Uma vez por dia, como uma ação padrão, você pode invocar goblinóides. Os goblinóides seguem suas ordens por até uma hora, quando então partem. O tipo e quantidade de goblinóides que você invoca dependem de seu nível."
      },
      {
        "kind": "paragraph",
        "text": "1º a 5º - 1d6+1 recrutas goblins (Invocar Monstro 1)"
      },
      {
        "kind": "paragraph",
        "text": "6º a 10º - 1d4+1 soldados hobgoblins (Invocar Monstro 3)"
      },
      {
        "kind": "paragraph",
        "text": "11º a 15º - 1d4 sargentos hobgoblins (Invocar Monstro 5)"
      },
      {
        "kind": "paragraph",
        "text": "16º a 20º - 1d2 campeões bugbears (Invocar Monstro 7)"
      }
    ]
  },
  {
    "id": "poder-concedido-beijo-da-serpente",
    "name": "Beijo da Serpente",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Sszzaas"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Como uma ação padrão, você pode fazer surgir veneno em uma arma corpo-a-corpo que esteja empunhando. O veneno causa 1d6 pontos de dano de Constituição; um teste de Fortitude (CD 10+MdN+Mod Int) reduz o dano à metade.  A presença do veneno na arma dura um minuto, ou até a arma atingir uma criatura, o que acontecer primeiro. Este talento pode ser usado até três vezes por dia. No 10º e 20º Nível o dano do veneno aumenta em 1d6."
      }
    ]
  },
  {
    "id": "poder-concedido-cordeis-da-corte",
    "name": "Cordéis da Corte",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Sszzaas"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode lançar “Comandar” três vezes por dia como se fosse um feiticeiro de mesmo nível. A partir do 8º nível passa a lançar “Coordenar a Batalha” e no 16º passa a conjurar “Marionete”."
      }
    ]
  },
  {
    "id": "poder-concedido-dominio-da-traicao",
    "name": "Domínio da Traição",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Sszzaas"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Até 3 vezes por dia você pode fazer um ataque corpo-a-corpo ou à distância ou conjurar uma magia que cause dano ferindo um de seus aliados. Se você for bem-sucedido (ou seja, se causar dano ao aliado), todos os seus oponentes a até 3m sofrem o mesmo dano que o seu alvo, com o mesmo descritor. As criaturas afetadas podem fazer um teste de Vontade para sofrer apenas metade do dano"
      }
    ]
  },
  {
    "id": "poder-concedido-imunidade-contra-veneno",
    "name": "Imunidade Contra Veneno",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Sszzaas, 8º Nível de Personagem"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você é imune a venenos e doenças."
      }
    ]
  },
  {
    "id": "poder-concedido-ventriloquismo",
    "name": "Ventriloquismo",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Sszzaas"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode lançar a magia “Ventriloquismo” à vontade como se fosse um Feiticeiro de mesmo nível. Esta magia recebe os efeitos de “Magia Camuflada” como se fossem pagos 3 PMs."
      }
    ]
  },
  {
    "id": "poder-concedido-conhecimentos-gerais",
    "name": "Conhecimentos Gerais",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Tanna-Toh"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe +4 em todos os testes de Conhecimento. No 8º e 16º nível este bônus aumenta em +2."
      }
    ]
  },
  {
    "id": "poder-concedido-dominio-do-conhecimento",
    "name": "Domínio do Conhecimento",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Tanna-Toh"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode fazer testes de qualquer conhecimento como se fosse treinado, com um bônus igual a seu nível + modificador de Inteligência."
      }
    ]
  },
  {
    "id": "poder-concedido-dominio-da-viagem",
    "name": "Domínio da Viagem",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Tanna-Toh"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Uma vez por dia, você pode se tornar imune a qualquer efeito que restrinja seu movimento (como se usasse a magia movimentação livre), por um número de rodadas igual ao seu nível."
      }
    ]
  },
  {
    "id": "poder-concedido-habilidades-linguisticas",
    "name": "Habilidades Linguísticas",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Tanna-Toh"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode lançar Compreender Idiomas à vontade. No 7º Nível pode utilizar Idiomas à vontade. No 14º Fica permanentemente sobre o efeito de Idiomas."
      }
    ]
  },
  {
    "id": "poder-concedido-viajante-incansavel",
    "name": "Viajante Incansável",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Tanna-Toh"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Enquanto estiver viajando, Você recebe +4 em testes de Constituição para prender o fôlego e evitar dano por fome ou sede, e em testes de Fortitude para evitar dano por frio ou calor. Você também pode dormir de armadura sem ficar fatigado. Além disso, pode fazer com que um número de pessoas igual ao seu nível de classe (incluindo você mesmo) viaje a uma velocidade 25% maior que o normal."
      }
    ]
  },
  {
    "id": "poder-concedido-explosao-de-forca",
    "name": "Explosão de Força",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Tauron"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Uma vez por dia, como uma ação livre, você pode receber um bônus igual ao seu nível na Força por uma rodada. No 9º Nível e no 18º recebe um uso diário adicional, mas nunca pode utilizá-la mais de uma vez por rodada."
      }
    ]
  },
  {
    "id": "poder-concedido-forca-absoluta",
    "name": "Força Absoluta",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Tauron"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você está permanentemente sob efeito de proteção contra o Caos, Enquanto você estiver sob um efeito que aumente seu modificador de força o bônus garantido por este talento aumenta em +2. No 10º Nível, o bônus condicional garantido aumenta em +2 para um total de +6."
      }
    ]
  },
  {
    "id": "poder-concedido-furia-guerreira",
    "name": "Fúria Guerreira",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Tauron"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Uma vez por dia, como uma ação livre, você pode entrar em fúria. Você recebe +2 nas jogadas de ataque e dano corpo-acorpo, mas sofre -2 na classe de armadura. A fúria dura um número de rodadas igual a 5 + seu modificador de Força. No 8º e 16º nível o bônus em Ataque e Dano aumentam em +1 e a penalidade na classe de armadura aumenta em + 1."
      }
    ]
  },
  {
    "id": "poder-concedido-sangue-de-ferro",
    "name": "Sangue de Ferro",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Tauron, 4º Nível de Personagem"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode transformar seu sangue em ferro. Com um ação livre você recebe Força +4 e redução de dano 10/adamante. Além disso, seus ataques desarmados causam dano letal equivalente a uma clava para seu tamanho. Você pode usar este talento uma vez por dia, e seu efeito dura 1 rodada por nível de personagem."
      }
    ]
  },
  {
    "id": "poder-concedido-superar-limites",
    "name": "Superar Limites",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Tauron, Explosão de Força"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "A primeira vez em combate que você cai abaixo da metade de seus pontos de vida você recebe os benefícios de “Explosão de Força” por 3 rodadas."
      }
    ]
  },
  {
    "id": "poder-concedido-comunhao-com-as-sombras",
    "name": "Comunhão com as Sombras",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Tenebra"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe +10 em testes de Furtividade para se esconder nas sombras. Você também pode lançar invisibilidade uma vez por dia, no 10º Nível passa a conjurar Invisibilidade Maior."
      }
    ]
  },
  {
    "id": "poder-concedido-guia-dos-mortos",
    "name": "Guia dos Mortos",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Tenebra, Véu da Noite"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Uma vez por dia, você pode gastar uma ação completa para erguer um cadáver a até 9m como um zumbi. O nível máximo do zumbi é igual ao seu (veja o Bestiário de Arton para estatísticas de zumbis mais poderosos). Este Zumbi desaparece após 24 horas."
      }
    ]
  },
  {
    "id": "poder-concedido-imunidade-do-luar",
    "name": "Imunidade do Luar",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Tenebra"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você é considerado sempre sob efeito da magia suportar elementos. A partir do 9º fica sob efeito de Adaptação Ambiental."
      }
    ]
  },
  {
    "id": "poder-concedido-olhos-da-sacerdotisa",
    "name": "Olhos da Sacerdotisa",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Tenebra"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você adquire visão no escuro, com alcance de 18m. Caso já possua visão no escuro, terá seu alcance dobrado (para anões, por exemplo, será 36m). A partir do 8º nível você passa a enxergar através de escuridões mágicas também."
      }
    ]
  },
  {
    "id": "poder-concedido-veu-da-noite",
    "name": "Véu da Noite",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Tenebra"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você está permanentemente sob efeito de proteção contra o Bem, Quando você está sob a luz do luar ou escuridão completa o bônus garantido aumenta em +2. No 10º Nível o bônus garantido pela magia, enquanto estiver sob a luz do luar ou escuridão completa, aumenta em +2 para um total de +6."
      }
    ]
  },
  {
    "id": "poder-concedido-dom-da-fenix",
    "name": "Dom da Fênix",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Thyatis, 6º Nível de Personagem"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe imunidade a fogo. A partir do 12º Nível, sempre que for alvejado por um efeito de fogo que cause dano (normal ou mágico), faça um teste de Vontade (CD igual a metade do dano). Em caso de sucesso você recupera pontos de vida em quantidade igual ao dano que o efeito causaria."
      }
    ]
  },
  {
    "id": "poder-concedido-dom-da-imortalidade",
    "name": "Dom da Imortalidade",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Thyatis"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você é imortal. Sempre que morrer, não importando o motivo, volta à vida após 4d6 dias. Você não perde níveis de experiência ou pontos de Constituição, como na magia reviver os mortos. Este talento pode ser adquirido apenas com permissão do mestre."
      }
    ]
  },
  {
    "id": "poder-concedido-dom-da-profecia",
    "name": "Dom da Profecia",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Thyatis"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode lançar augúrio 1 vez por dia. Além disso, três vezes por dia, você recebe +2 em uma jogada de ataque, teste de habilidade, perícia ou resistência. Você pode usar este bônus depois da rolagem, mas antes que o mestre diga o resultado, você não pode ativar esta habilidade múltiplas vezes na mesma rodada."
      }
    ]
  },
  {
    "id": "poder-concedido-dom-da-ressurreicao",
    "name": "Dom da Ressurreição",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Thyatis, 8º Nível de Personagem."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode lançar ressurreição por seu custo normal uma vez por mês, mesmo que não tenha capacidade de lançar magias. No entanto, não se pode usar esta magia para ressuscitar mais de uma vez a mesma pessoa."
      }
    ]
  },
  {
    "id": "poder-concedido-segunda-chance",
    "name": "Segunda Chance",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Thyatis"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe 1 ponto de ação a mais por sessão de jogo. A Partir do 10º nível, quando utiliza um ponto de ação para re-rolar um efeito, você pode escolher com qual resultado irá ficar."
      }
    ]
  },
  {
    "id": "poder-concedido-arma-de-valkaria",
    "name": "Arma de Valkaria",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Valkaria"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe + 1 em JdA e +2 em JdD com todas as armas que saiba usar. O efeito deste talento não é cumulativo com o talento Especialização em Arma."
      }
    ]
  },
  {
    "id": "poder-concedido-aventuras-de-valkaria",
    "name": "Aventuras de Valkaria",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Valkaria"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você está permanentemente sob efeito de proteção contra o Mal, Enquanto estiver em um ambiente desconhecido para você, o bônus garantido aumenta em +2. No 10º Nível o bônus garantido pela magia enquanto está em um ambiente novo, aumenta em +2 para um total de +6."
      }
    ]
  },
  {
    "id": "poder-concedido-manha-das-cidades",
    "name": "Manha das Cidades",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Valkaria"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você é treinado em Conhecimento (local) para qualquer cidade onde estiver. Esta especialização de Conhecimento normalmente fornece informações sobre uma região específica. Veja uma descrição mais detalhada no suplemento Valkaria: Cidade sob a Deusa. Além disso, em uma cidade você pode fazer testes de Obter Informação sem falar com pessoas e sem gastar dinheiro, apenas sentindo a “vibração” das ruas."
      }
    ]
  },
  {
    "id": "poder-concedido-olhos-de-valkaria",
    "name": "Olhos de Valkaria",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Valkaria"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você nunca pode ser surpreendido em combate. A partir do 8º você não pode ficar desprevenido."
      }
    ]
  },
  {
    "id": "poder-concedido-vitoria-absoluta",
    "name": "Vitória Absoluta",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Valkaria"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe 1 ponto de ação a mais por sessão de jogo. Quando você utiliza um ponto de ação para adicionar a um de seus testes você adiciona metade do resultado do ponto de ação em sua próxima jogada."
      }
    ]
  },
  {
    "id": "poder-concedido-defesa-da-magia",
    "name": "Defesa da Magia",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Wynna"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe CA+2 ao lançar uma magia. Esse bônus dura até o começo de seu próximo turno. No 8º e 16º Nível o bônus garantido aumenta em +2."
      }
    ]
  },
  {
    "id": "poder-concedido-dominio-do-ar",
    "name": "Domínio do Ar",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Wynna"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você está permanentemente sob efeito da magia queda suave. A partir do 16º recebe deslocamento de voo igual ao terrestre."
      }
    ]
  },
  {
    "id": "poder-concedido-dominio-da-magia",
    "name": "Domínio da Magia",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Wynna"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Uma vez por dia, você pode lançar qualquer magia que conheça sem gastar pontos de magia. Você também pode aplicar efeitos de talentos metamágicos que você possua a essa magia. No 12º Nível você recebe um uso adicional desta habilidade."
      }
    ]
  },
  {
    "id": "poder-concedido-magia-oculta",
    "name": "Magia Oculta",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Wynna"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Como uma ação de movimento, você pode fazer um teste de Vontade (CD 15). Se for bem-sucedido, você aplica o talento Potencializar Magia (mesmo sem possuí-lo) a uma magia que lançará até sua próxima rodada. Cada vez que usa este talento no mesmo dia, a dificuldade do teste de Vontade aumenta em CD+5."
      }
    ]
  },
  {
    "id": "poder-concedido-mente-arcana",
    "name": "Mente Arcana",
    "group": "Talentos de Poder Concedido",
    "groupSlug": "poder-concedido",
    "sourceGroup": "TALENTOS DE PODER CONCEDIDO",
    "prerequisites": [
      "Devoto de Wynna"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe +2 em todos os testes de Conhecimento, Identificar Magia e Ofício. No 6º, 12º e 18º o bônus aumenta em +2"
      }
    ]
  },
  {
    "id": "tormenta-anatomia-insana",
    "name": "Anatomia Insana",
    "group": "Talentos da Tormenta",
    "groupSlug": "tormenta",
    "sourceGroup": "TALENTOS DA TORMENTA",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você tem 25% de chance de ignorar o dano adicional de um acerto crítico ou ataque furtivo esta chance aumenta em 25% para cada outros dois talentos da tormenta que possuir."
      }
    ]
  },
  {
    "id": "tormenta-anular-individuo",
    "name": "Anular Indivíduo",
    "group": "Talentos da Tormenta",
    "groupSlug": "tormenta",
    "sourceGroup": "TALENTOS DA TORMENTA",
    "prerequisites": [
      "Dois talentos da Tormenta quaisquer"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você é capaz de suprimir sua individualidade — incluindo suas opiniões, moralidade e pensamentos. Sempre que estiver sob efeito de magias de adivinhação e efeitos similares capazes de detectar sua tendência, seus pensamentos, suas mentiras, etc., você simula a tendência e pensamentos do usuário da magia ou efeito. Por exemplo, caso um conjurador Bondoso lance detectar o mal sobre você, irá percebê-lo como Bondoso, independente de sua tendência verdadeira."
      },
      {
        "kind": "paragraph",
        "text": "Caso conjuradores de tendências diferentes lancem a mesma magia ou efeito sobre você, irão percebê-lo de forma contraditória (por exemplo, um conjurador Neutro irá percebê-lo como Neutro; um Bondoso, como Bondoso). É possível que notem esse fenômeno comparando suas impressões, mas cada um terá certeza do que notou."
      }
    ]
  },
  {
    "id": "tormenta-armamento-da-tormenta",
    "name": "Armamento da Tormenta",
    "group": "Talentos da Tormenta",
    "groupSlug": "tormenta",
    "sourceGroup": "TALENTOS DA TORMENTA",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Como ação de movimento, você pode expelir uma arma orgânica. Você pode criar qualquer arma que saiba utilizar, desde que não possuam partes móveis. Criar uma arma causa dano de acordo com o tipo de arma 1d4 (arma leve), 1d6 (arma de uma mão) ou 1d8 (arma de duas mãos)."
      },
      {
        "kind": "paragraph",
        "text": "A arma é considerada de matéria vermelha, mas não causa dano ao seu criador. A cada dois talentos da tormenta a arma causa +1 de dano."
      },
      {
        "kind": "paragraph",
        "text": "Especial: O benefício do talento “Sangue ácido\" tem seu dano aplicado aos armamentos da tormenta enquanto o criador da arma utilizar ela."
      }
    ]
  },
  {
    "id": "tormenta-carapaca",
    "name": "Carapaça",
    "group": "Talentos da Tormenta",
    "groupSlug": "tormenta",
    "sourceGroup": "TALENTOS DA TORMENTA",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe +1 na CA. Este bônus aumenta em +1 para cada dois outros talentos da Tormenta que você possui."
      }
    ]
  },
  {
    "id": "tormenta-corpo-aberrante",
    "name": "Corpo Aberrante",
    "group": "Talentos da Tormenta",
    "groupSlug": "tormenta",
    "sourceGroup": "TALENTOS DA TORMENTA",
    "prerequisites": [
      "Outro talento da Tormenta"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe RD 1 e RE. Esta redução de dano aumenta em 1 para cada dois outros talentos da Tormenta que você possui."
      }
    ]
  },
  {
    "id": "tormenta-deformidade-aprimorada",
    "name": "Deformidade Aprimorada",
    "group": "Talentos da Tormenta",
    "groupSlug": "tormenta",
    "sourceGroup": "TALENTOS DA TORMENTA",
    "prerequisites": [
      "Lefou"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "O benefício de sua deformidade racial muda para:"
      },
      {
        "kind": "paragraph",
        "text": "Articulações flexíveis: +4 em testes de Acrobacia e para resistir a manobras de combate."
      },
      {
        "kind": "paragraph",
        "text": "Dedos rígidos: deslocamento de escalada 9m."
      },
      {
        "kind": "paragraph",
        "text": "Dentes afiados: +4 em testes de Intimidação, ataque natural de mordida (1d4)."
      },
      {
        "kind": "paragraph",
        "text": "Mãos membranosas: deslocamento de natação 9m."
      },
      {
        "kind": "paragraph",
        "text": "Olhos vermelhos: +4 em testes de Percepção (apenas para observar), ver o invisível uma vez por dia."
      },
      {
        "kind": "paragraph",
        "text": "Pele rígida: classe de armadura +1, redução de dano 2 (cumulativa com outras)."
      }
    ]
  },
  {
    "id": "tormenta-deslocar",
    "name": "Deslocar",
    "group": "Talentos da Tormenta",
    "groupSlug": "tormenta",
    "sourceGroup": "TALENTOS DA TORMENTA",
    "prerequisites": [
      "Três outros talentos da Tormenta, 6º nível de personagem"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode lançar um efeito idêntico à magia deslocamento (apenas em si mesmo) uma vez por dia para cada talento da Tormenta que possui."
      }
    ]
  },
  {
    "id": "tormenta-desmaterializar",
    "name": "Desmaterializar",
    "group": "Talentos da Tormenta",
    "groupSlug": "tormenta",
    "sourceGroup": "TALENTOS DA TORMENTA",
    "prerequisites": [
      "Três outros talentos da Tormenta, 14º nível de personagem"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você lança um efeito idêntico à magia passeio etéreo uma vez por dia para cada tres talentos da Tormenta que possui."
      }
    ]
  },
  {
    "id": "tormenta-forma-aberrante",
    "name": "Forma Aberrante",
    "group": "Talentos da Tormenta",
    "groupSlug": "tormenta",
    "sourceGroup": "TALENTOS DA TORMENTA",
    "prerequisites": [
      "Habilidade de classe Forma Selvagem, Três outros talentos da Tormenta, 12º nível de personagem."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você acrescenta o modelo criatura da Tormenta à sua lista de habilidades de forma selvagem."
      },
      {
        "kind": "paragraph",
        "text": "Tipo: Muda para Monstro"
      },
      {
        "kind": "paragraph",
        "text": "Adquire visão ampla (Percepção +4 e não pode ser flanqueado), e sentido sísmico, Este sentido tem alcance igual a 1,5m (Caso uma forma de sentido sísmico seja adquirido de outra forma, Esse bônus aumenta em 1,5m para cada dois outros talentos da Tormenta que você possui.)."
      },
      {
        "kind": "paragraph",
        "text": "Adquire imunidade a doenças, metamorfose, paralisia, petrificação e veneno."
      },
      {
        "kind": "paragraph",
        "text": "CA +2"
      },
      {
        "kind": "paragraph",
        "text": "Mente Alienígena: qualquer um que tente ler ou estudar a mente de uma criatura da Realidade Aberrante deve fazer um teste de Vontade (CD 10 + metade do nível da criatura). Em caso de falha, adquire um número de pontos de insanidade igual ao nível da criatura."
      },
      {
        "kind": "paragraph",
        "text": "Perde qualquer capacidade que tinha de conjurar magia"
      }
    ]
  },
  {
    "id": "tormenta-golpes-da-tempestade",
    "name": "Golpes da Tempestade",
    "group": "Talentos da Tormenta",
    "groupSlug": "tormenta",
    "sourceGroup": "TALENTOS DA TORMENTA",
    "prerequisites": [
      "Dois outros talentos da Tormenta"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "O dano de seus ataques desarmados ou armas naturais aumenta em +1. Esse bônus aumenta em 1 para cada dois outros talentos da Tormenta que você possui."
      }
    ]
  },
  {
    "id": "tormenta-identidade-fraca",
    "name": "Identidade Fraca",
    "group": "Talentos da Tormenta",
    "groupSlug": "tormenta",
    "sourceGroup": "TALENTOS DA TORMENTA",
    "prerequisites": [
      "Carisma 7 ou menos, Dois outros talentos da Tormenta"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Escolha um companheiro, que pode ser um personagem jogador ou um PdM. Quando estiver próximo desse companheiro (15m ou menos), você recebe +1 em jogadas e testes. Esse bônus aumenta em 1 para cada três outros talentos da Tormenta que você possui."
      },
      {
        "kind": "paragraph",
        "text": "Se estiver distante mais de 15m desse companheiro, você sofre penalidade iguais aos bônus que receberia normalmente. Caso o companheiro morra você fica atordoado por 1d4 rodadas, não redutível por qualquer meio."
      },
      {
        "kind": "paragraph",
        "text": "Você pode designar um novo companheiro uma vez por mês."
      }
    ]
  },
  {
    "id": "tormenta-insanidade-da-tormenta",
    "name": "Insanidade da Tormenta",
    "group": "Talentos da Tormenta",
    "groupSlug": "tormenta",
    "sourceGroup": "TALENTOS DA TORMENTA",
    "prerequisites": [
      "Três outros talentos da Tormenta"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Qualquer ser inteligente (Int 3 ou mais) que veja você deve fazer um teste de Vontade (CD 10 + número de talentos da Tormenta que você tem). Se falhar, sofre o efeito da magia confusão. Em caso de sucesso, fica imune a esta habilidade por um dia. Você é imune à insanidade da Tormenta causada por qualquer criatura de nível igual ou inferior a você."
      }
    ]
  },
  {
    "id": "tormenta-manto-mucoso",
    "name": "Manto Mucoso",
    "group": "Talentos da Tormenta",
    "groupSlug": "tormenta",
    "sourceGroup": "TALENTOS DA TORMENTA",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Escolha entre Ácido, Fogo, Eletricidade ou Sonico, Você tem RE contra o elemento escolhido igual ao número de talentos da Tormenta que possui. Você pode escolher este talento múltiplas vezes mas pode escolher um elemento somente uma vez."
      }
    ]
  },
  {
    "id": "tormenta-membros-estendidos",
    "name": "Membros Estendidos",
    "group": "Talentos da Tormenta",
    "groupSlug": "tormenta",
    "sourceGroup": "TALENTOS DA TORMENTA",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "O alcance de seus ataques corporais aumenta em 1,5m (se você for uma criatura Média, por exemplo, seu alcance natural passa para 3m)."
      }
    ]
  },
  {
    "id": "tormenta-mente-caotica",
    "name": "Mente Caótica",
    "group": "Talentos da Tormenta",
    "groupSlug": "tormenta",
    "sourceGroup": "TALENTOS DA TORMENTA",
    "prerequisites": [
      "Tendência Caótica"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Qualquer criatura que tente ler ou estudar sua mente deve ser bem-sucedida em um teste de Vontade (CD 20 + seu número de talentos da Tormenta). Se falhar, a criatura fica atordoada por um número de rodadas igual ao número de talentos da Tormenta que você possui."
      }
    ]
  },
  {
    "id": "tormenta-moldar-alma",
    "name": "Moldar Alma",
    "group": "Talentos da Tormenta",
    "groupSlug": "tormenta",
    "sourceGroup": "TALENTOS DA TORMENTA",
    "prerequisites": [
      "Anular Indivíduo"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você é imune a todos os efeitos negativos que afetam tendências específicas, e recebe todos os efeitos benéficos relativos a tendências. Por exemplo, um personagem Caótico e Maligno com este talento não é detectado por detectar o mal, não é afetado pela habilidade destruir o mal, não sofre dano extra por uma arma axiomática e pode empunhar uma arma sagrada sem sofrer um nível negativo."
      }
    ]
  },
  {
    "id": "tormenta-parodia-elfica",
    "name": "Paródia Élfica",
    "group": "Talentos da Tormenta",
    "groupSlug": "tormenta",
    "sourceGroup": "TALENTOS DA TORMENTA",
    "prerequisites": [
      "Elfo, Elfo-do-Mar, Elfo-do-Céu, Elfo Sombrio ou Meio-Elfo, 5º nível de personagem"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você é imune a efeitos de encantamento."
      }
    ]
  },
  {
    "id": "tormenta-patas-articuladas",
    "name": "Patas Articuladas",
    "group": "Talentos da Tormenta",
    "groupSlug": "tormenta",
    "sourceGroup": "TALENTOS DA TORMENTA",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Suas patas ficam nas costas, ombros, flancos ou mesmo em seus braços, à sua escolha. Elas não atacam ou seguram objetos, mas oferecem +2 em testes de Atletismo para escalar e em manobras de combate (agarrar, derrubar, desarmar, empurrar). Esse bônus aumenta em 2 para cada três outros talentos da Tormenta que você possui."
      }
    ]
  },
  {
    "id": "tormenta-recuperacao-aberrante",
    "name": "Recuperação Aberrante",
    "group": "Talentos da Tormenta",
    "groupSlug": "tormenta",
    "sourceGroup": "TALENTOS DA TORMENTA",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Sempre que você é afetado por um efeito nocivo com duração medida em rodadas (atordoado, enjoado, paralisado, enfeitiçado...), reduza a duração do efeito em 1 rodada, +1 rodada para cada dois outros talentos da Tormenta que você possui (mínimo 1 rodada). Este talento não afeta efeitos de duração mais longa (minutos, horas, dias...)."
      }
    ]
  },
  {
    "id": "tormenta-sangue-acido",
    "name": "Sangue Ácido",
    "group": "Talentos da Tormenta",
    "groupSlug": "tormenta",
    "sourceGroup": "TALENTOS DA TORMENTA",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Quando você sofre dano por um ataque corpo-a-corpo, o atacante sofre 1d4 pontos de dano por ácido. Esse dano aumenta em +1 para cada dois outros talentos da Tormenta que você possui."
      }
    ]
  },
  {
    "id": "tormenta-sentido-sismico",
    "name": "Sentido Sísmico",
    "group": "Talentos da Tormenta",
    "groupSlug": "tormenta",
    "sourceGroup": "TALENTOS DA TORMENTA",
    "prerequisites": [
      "Sabedoria 14"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você percebe qualquer criatura em movimento que esteja em contato com o chão. Este sentido tem alcance igual a 1,5m para cada talento da Tormenta que você possui."
      }
    ]
  },
  {
    "id": "tormenta-toque-da-corrosao",
    "name": "Toque da Corrosão",
    "group": "Talentos da Tormenta",
    "groupSlug": "tormenta",
    "sourceGroup": "TALENTOS DA TORMENTA",
    "prerequisites": [
      "Toque da Erosão"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Quando consegue um acerto crítico com um ataque desarmado ou arma natural contra um alvo usando armadura ou escudo, além de multiplicar o dano, você também danifica essa armadura ou escudo (à sua escolha). A peça perde bônus na CA em quantidade igual ao número de talentos da Tormenta que você possui. Se esse valor chegar a 0 ou menos, a armadura ou escudo é destruído.  Este talento não afeta peças mágicas ou feitas de materiais especiais, mas afeta peças obra-prima."
      }
    ]
  },
  {
    "id": "tormenta-toque-da-destruicao",
    "name": "Toque da Destruição",
    "group": "Talentos da Tormenta",
    "groupSlug": "tormenta",
    "sourceGroup": "TALENTOS DA TORMENTA",
    "prerequisites": [
      "Toque da Corrosão, Toque da Erosão"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Quando alguém consegue um acerto crítico contra você, multiplica o dano normalmente, mas qualquer arma mundana de luta corpo-a-corpo ou arremesso se quebra.  Este talento não afeta armas mágicas ou feitas de materiais especiais, mas afeta armas obra-prima."
      }
    ]
  },
  {
    "id": "tormenta-toque-da-erosao",
    "name": "Toque da Erosão",
    "group": "Talentos da Tormenta",
    "groupSlug": "tormenta",
    "sourceGroup": "TALENTOS DA TORMENTA",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Seus ataques desarmados ou com armas naturais ignoram redução de dano de objetos.  Este talento não afeta objetos mágicos ou feitos de materiais especiais (aço-rubi, adamante, gelo eterno, madeira Tollon, matéria vermelha, mitral e outros), mas afeta itens obra-prima."
      }
    ]
  },
  {
    "id": "tormenta-visao-ampla",
    "name": "Visão Ampla",
    "group": "Talentos da Tormenta",
    "groupSlug": "tormenta",
    "sourceGroup": "TALENTOS DA TORMENTA",
    "prerequisites": [
      "Sabedoria 14"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe +4 em testes de Percepção e não pode ser flanqueado."
      }
    ]
  },
  {
    "id": "tormenta-visao-no-escuro",
    "name": "Visão no Escuro",
    "group": "Talentos da Tormenta",
    "groupSlug": "tormenta",
    "sourceGroup": "TALENTOS DA TORMENTA",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe visão no escuro 18m. Se você já possui visão no escuro, seu alcance aumenta em +18m."
      }
    ]
  },
  {
    "id": "tormenta-visco-rubro",
    "name": "Visco Rubro",
    "group": "Talentos da Tormenta",
    "groupSlug": "tormenta",
    "sourceGroup": "TALENTOS DA TORMENTA",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe um bônus de +1 nas jogadas de ataque corpo-a-corpo. Este bônus aumenta em 1 para cada dois outros talentos da Tormenta que você possui."
      }
    ]
  },
  {
    "id": "raciais-ajuda-aprimorada",
    "name": "Ajuda Aprimorada",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Qarren"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você concede o dobro do seu modificador para Ajuda em perícias treinadas."
      }
    ]
  },
  {
    "id": "raciais-ajuda-avancada",
    "name": "Ajuda Avançada",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Qarren"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você concede seu modificador inteiro para Ajuda em perícias não treinadas."
      }
    ]
  },
  {
    "id": "raciais-amo",
    "name": "Amo",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Qareen, Qualquer talento metamágico"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Escolha alguém como seu amo, que pode ser um personagem jogador ou um PdM. Quando você lança uma magia a pedido de seu amo pela habilidade racial Desejos, essa magia recebe o benefício de um talento metamágico que você possua, sem custo extra em PM. Porem sempre que outra criatura que não seu amo lhe faz um Desejo a habilidade  Desejos não funciona."
      }
    ]
  },
  {
    "id": "raciais-arma-natural-aprimorada",
    "name": "Arma Natural Aprimorada",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "4º Nível, Arma natural"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Escolha um tipo de arma natural. Seu dano aumenta uma categoria de tamanho.  Este talento afeta todas as suas armas naturais do mesmo tipo escolhido (por exemplo, duas garras), mas não armas de tipos diferentes (por exemplo, garras e mordida)."
      }
    ]
  },
  {
    "id": "raciais-asas-de-aco",
    "name": "Asas de Aço",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Asas"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Suas asas lhe concedem proteção como se estivesse utilizando um escudo. Você recebe +1 de CA para cada asa, e pode atacar com as mesmas, causando 1d4+Mod. For. Ataques com asas não são considerados Ataques Naturais. Você não pode atacar ou defender com as asas enquanto estiver voando. Além disso você é considerado sempre sob efeito da magia queda suave, mesmo que esteja inconsciente ou morrendo suas asas impedem a queda, devido a seu formato e reflexos involuntários."
      },
      {
        "kind": "paragraph",
        "text": "Especial: Personagens com esse talento são considerados como treinados em uso de escudos (Apenas suas asas) e podem cumprir pré-requisitos de escudo."
      }
    ]
  },
  {
    "id": "raciais-armamento-de-allihanna",
    "name": "Armamento de Allihanna",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Meio-Dríade"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Armas que você faz utilizando Moldar Madeira ganham um bônus de +2 em Jogadas de ataque e Dano enquanto você as utilizar, além disso, quando conjurar pele de árvore em si mesmo você recebe RD 2 durante a duração da magia."
      }
    ]
  },
  {
    "id": "raciais-camuflagem",
    "name": "Camuflagem",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Elfo-do-Mar, Trog, Goblin, Hobgoblin ou Bugbear"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Ativar ou desativar esta habilidade requer uma ação de movimento. Você é considerado sob efeito da magia invisibilidade, mas este efeito não afeta suas roupas e equipamento: você recebe +10 em testes de Furtividade se estiver nu, +5 com armadura ou roupas leves, +2 com armadura ou roupas médias, e nenhum bônus para armadura ou roupas pesadas."
      }
    ]
  },
  {
    "id": "raciais-cauda-manipuladora",
    "name": "Cauda Manipuladora",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Nagah"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Sua cauda é considerada uma mão inábil."
      }
    ]
  },
  {
    "id": "raciais-chuva-de-laminas",
    "name": "Chuva de Lâminas",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Meio-Dríade, 10º Nível"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Uma vez por dia você pode expelir lâminas em uma área igual a um cone com 18m. O dano é igual a 10d6 cortante, com direito a um teste de Reflexos para meio dano (CD 10 + nível do meio-dríade + bônus de Sabedoria do meio-dríade)."
      }
    ]
  },
  {
    "id": "raciais-comandar-aprimorado",
    "name": "Comandar Aprimorado",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Humano, Comandar"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode gritar ordens para seus aliados como uma ação de movimento. Além disso, o bônus recebido por seus aliados aumenta para +2."
      }
    ]
  },
  {
    "id": "raciais-companheiro-aprimorado",
    "name": "Companheiro Aprimorado",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Um Companheiro concedido por habilidade de Classe"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você é considerado 2 níveis acima para determinar as características de seu Companheiro."
      },
      {
        "kind": "paragraph",
        "text": "Especial: Um personagem com múltiplos companheiros pode escolher este múltiplas vezes uma para cada Companheiro."
      }
    ]
  },
  {
    "id": "raciais-companheiro-vegetal",
    "name": "Companheiro Vegetal",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Elfo ou Meio-Dríade, Um Companheiro concedido por habilidade de Classe"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Seu companheiro adquire as habilidades a seguir."
      },
      {
        "kind": "paragraph",
        "text": "Tipo monstro."
      },
      {
        "kind": "paragraph",
        "text": "Classe de armadura +4."
      },
      {
        "kind": "paragraph",
        "text": "Imunidade a magias e efeitos que afetam apenas animais (mas pode ser afetado por magias e efeitos que afetam plantas)."
      },
      {
        "kind": "paragraph",
        "text": "Imunidade a veneno, sono, paralisia e atordoamento."
      },
      {
        "kind": "paragraph",
        "text": "Furtividade +10 onde houver vegetação."
      },
      {
        "kind": "paragraph",
        "text": "Especial: Um personagem com múltiplos companheiros pode escolher este múltiplas vezes uma para cada Companheiro."
      }
    ]
  },
  {
    "id": "raciais-conforto-do-aco",
    "name": "Conforto do Aço",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Anão"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Quando usa armadura de qualquer tipo, você não está limitado a um bônus máximo de Destreza, nem sofre qualquer penalidade de armadura."
      }
    ]
  },
  {
    "id": "raciais-constricao-atroz",
    "name": "Constrição Atroz",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Meio-Dríade, 4º nível de personagem"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode lançar constrição mesmo em áreas onde não existe vegetação; as plantas simplesmente brotam do chão, ou de seu próprio corpo.  A magia também se torna mais agressiva — não apenas enredando, mas atacando. Além de seus efeitos normais, a constrição causa 1d6 pontos de dano por rodada a qualquer criatura enredada."
      }
    ]
  },
  {
    "id": "raciais-corredor-veloz",
    "name": "Corredor Veloz",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Velocis"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Seu deslocamento básico aumenta para 18m."
      }
    ]
  },
  {
    "id": "raciais-devocao-simulada",
    "name": "Devoção Simulada",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Nagah, Carisma 12, Treinado em Conhecimento (Religião)"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Portando o símbolo sagrado de uma divindade qualquer, você pode lançar uma magia ou manifestar um poder concedido dessa mesma divindade — mas trata-se de uma ilusão, sem efeito real. Testemunhas que tenham razões para duvidar têm direito a um teste de Intuição (CD 20 + modificador de Carisma da nagah) para desacreditar.  Quando o poder simulado é agressivo, a vítima também tem direito ao mesmo teste de Intuição (além de quaisquer testes normalmente permitidos contra o efeito). A critério do mestre, alguns poderes não podem ser simulados, ou têm dificuldade reduzida para desacreditar.  Você pode usar este poder um número de vezes por dia igual a seu modificador de Carisma."
      }
    ]
  },
  {
    "id": "raciais-doutrina-implacavel",
    "name": "Doutrina Implacável",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Hobgoblin"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você se torna imune a efeitos de encantamento."
      }
    ]
  },
  {
    "id": "raciais-duas-cabecas",
    "name": "Duas Cabeças",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Gnoll, Lefou, Orc ou Trog"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Suas cabeças não são necessariamente iguais; uma delas pode ser menor ou atrofiada. Em termos de jogo, você ainda tem as mesmas habilidades mentais, perícias e tendência — mas, se quiser, pode dar personalidades diferentes às suas cabeças e interpretar diálogos entre elas!  Você pode rolar qualquer teste de Vontade duas vezes, ficando com o melhor resultado. Além disso, se você tem uma arma natural (mordida), você ganha uma arma extra desse tipo (mas apenas com uma segunda cabeça de mesmo tamanho da sua).  Você não recebe usos adicionais de ataques especiais feitos com a cabeça (como sopro de dragão). Este talento pode ser adquirido apenas no 1º nível."
      }
    ]
  },
  {
    "id": "raciais-dupla-conjuracao",
    "name": "Dupla Conjuração",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Gnoll, Lefou, Orc ou Trog, Capacidade de Lançar Magias, Destreza 16, Duas Cabeças"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode lançar duas magias diferentes com a mesma ação padrão, pagando pelo custo total em PM. Para isso você deve ter ambas as mãos livres (lançar uma magia exige pelo menos uma mão livre). Você não pode utilizar “Acelerar Magia” na mesma rodada que ativar esta habilidade."
      }
    ]
  },
  {
    "id": "raciais-dupla-prontidao",
    "name": "Dupla Prontidão",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Gnoll, Lefou, Orc ou Trog, Duas Cabeças, Prontidão"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Com campo de visão superior e órgãos de sentidos duplicados, você nunca fica desprevenido e não pode ser flanqueado."
      }
    ]
  },
  {
    "id": "raciais-encanto-das-fadas",
    "name": "Encanto das Fadas",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Meio-Dríade, Qareen ou Sprite, Carisma 14"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode lançar enfeitiçar pessoa três vezes por dia como um feiticeiro de mesmo nível."
      }
    ]
  },
  {
    "id": "raciais-entre-as-pernas",
    "name": "Entre as Pernas",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Tamanho Pequeno ou menor, Treinado em Acrobacia"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode ocupar o mesmo espaço de uma criatura Grande ou maior. Enquanto estiver ali, você recebe CA+4 contra quaisquer ataques (inclusive da própria criatura). Além disso, qualquer ataque que não da própria criatura contra você tem 50% de chance de atingir a criatura."
      }
    ]
  },
  {
    "id": "raciais-especializacao-em-arma-racial",
    "name": "Especialização em Arma Racial",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "2º Nível, Pelo menos uma arma racial"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe um bônus de +1 em jogadas de Ataque e +2 nos danos quando utiliza uma arma tradicional de sua raça. “Armas tradicionais” são aquelas em que o personagem é competente devido a traços raciais (machados e martelos para anões, por exemplo).  Armas que trazem o nome da raça em seu nome (como a espada táurica) também são consideradas raciais. O mestre pode autorizar outros tipos de armas como “raciais” seguindo o bom senso."
      }
    ]
  },
  {
    "id": "raciais-faro-discriminatorio",
    "name": "Faro Discriminatório",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Faro, Sabedoria 14"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Quando percebe a presença de criaturas, você pode dizer seu tipo (animal, construto, espírito, humanoide, monstro ou morto-vivo), mas apenas tipos de criaturas que já tenha farejado antes.  Você percebe criaturas daquele tipo ao alcance de seu faro, mas não pode dizer quantas ou quais. Você pode tentar identificar o tipo de uma criatura específica (por exemplo, um monstro disfarçado de humano) com um exame cuidadoso. Isso exige uma ação completa e um teste de Percepção (CD 15). A criatura deve estar adjacente.  Você também recebe +4 em testes de Intuição e +2 em testes de Ofício para fazer avaliações."
      }
    ]
  },
  {
    "id": "raciais-faro-para-magia",
    "name": "Faro para Magia",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Faro, Sabedoria 14, Faro Discriminatório"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode farejar auras mágicas, da mesma forma que detectar magia."
      }
    ]
  },
  {
    "id": "raciais-faro-para-medo",
    "name": "Faro para Medo",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Bugbear, Tendência Maligna"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Quando uma criatura ao alcance de seu faro está abalada ou apavorada, você recebe +2 em todas as suas jogadas de ataque e dano (contra qualquer oponente)."
      }
    ]
  },
  {
    "id": "raciais-faz-tudo",
    "name": "Faz-Tudo",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Humano, Inteligência 14"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você é treinado no dobro de perícias para sua classe, incluindo qualquer perícia adicional por bônus de inteligência"
      }
    ]
  },
  {
    "id": "raciais-filho-das-trevas",
    "name": "Filho das Trevas",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Sulfure, Tendência Maligna, Herança Extraplanar"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você se torna imune a dano por fogo, frio ou eletricidade, à sua escolha."
      }
    ]
  },
  {
    "id": "raciais-filho-da-luz",
    "name": "Filho da Luz",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Aggelus, Tendência Bondosa, Herança Extraplanar"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você se torna imune a dano por ácido, frio ou eletricidade, à sua escolha."
      }
    ]
  },
  {
    "id": "raciais-foco-em-polvora",
    "name": "Foco em Pólvora",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Anão, Goblin, ou Hobgoblin"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe +1 em jogadas de ataque e +2 em rolagens de dano com armas de pólvora. Normalmente isso inclui armas de fogo, granadas e canhões."
      }
    ]
  },
  {
    "id": "raciais-forma-humana",
    "name": "Forma Humana",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Centauro ou Nagah, Constituição 12"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode, com uma ação de movimento, mudar para uma forma bípede de tamanho Médio, com o mesmo rosto e aparência geral de sua forma verdadeira, mas aparentemente humana (ou élfica). Você pode fazer isso uma vez por dia para cada ponto de seu modificador de Constituição.  Roupas e itens comportam-se da mesma forma que na magia alterar-se. Na forma humana você não está sujeito a modificadores de tamanho (você é uma criatura Média, mesmo que sua raça original não seja) e tem deslocamento 9m. Nesta forma você também não pode utilizar quaisquer traços raciais ou habilidades ligadas a uma anatomia não humanoide (como os ataques com cascos de um centauro, ou talentos com a cauda de uma nagah)."
      }
    ]
  },
  {
    "id": "raciais-grandao",
    "name": "Grandão",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Força 16, Constituição 16, Tamanho Médio"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você é considerado uma categoria de tamanho maior para efeito de manobras de combate e armas que pode usar (por exemplo, uma criatura Média com este talento pode usar uma arma Grande sem penalidades, ou uma arma Enorme com uma penalidade de –4). Entretanto, você sofre as mesmas penalidades das criaturas Grandes: –1 nas jogadas de ataque e classe de armadura, –4 em testes de Furtividade. Este talento pode ser adquirido apenas no 1º nível."
      }
    ]
  },
  {
    "id": "raciais-heranca-extraplanar",
    "name": "Herança Extraplanar",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Aggelus ou Sulfure"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode usar seu ataque especial racial (luz do dia para aggelus, escuridão para sulfure) duas vezes adicionais por dia. Além disso, uma de suas resistências a energia (fogo, frio, eletricidade ou ácido, à sua escolha) aumenta para 10. A partir do 10º nível você recebe um par de asas que lhe dão deslocamento voo com o dobro do deslocamento base."
      }
    ]
  },
  {
    "id": "raciais-marrada-ligeira",
    "name": "Marrada Ligeira",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "4º Nível, Arma Natural (Chifres), Ataque Poderoso"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Quando você faz um ataque de investida com os chifres, pode também fazer um segundo ataque com outra arma, à sua escolha. Ambos recebem o bônus normal de +2 por investida."
      }
    ]
  },
  {
    "id": "raciais-mascara-da-serpente",
    "name": "Máscara da Serpente",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Nagah, Inteligência 12"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você é considerado sempre sob efeito da magia dissimular tendência."
      }
    ]
  },
  {
    "id": "raciais-mau-cheiro-adicional",
    "name": "Mau Cheiro Adicional",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "2º Nível, Trog"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode usar seu mau cheiro duas vezes adicionais por dia. E aumenta sua CD em 1."
      }
    ]
  },
  {
    "id": "raciais-forma-das-mares",
    "name": "Forma das Marés",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Elfo-do-Mar, Camuflagem"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Além de mudar de cor, você também pode alterar traços faciais e outros detalhes anatômicos menores (por exemplo, adquirir orelhas humanas arredondadas). Você recebe +8 em testes de Enganação para se disfarçar como alguém de outra raça ou sexo."
      }
    ]
  },
  {
    "id": "raciais-olhar-atordoante-adicional",
    "name": "Olhar Atordoante Adicional",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "2º Nível, Medusa"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você pode usar seu olhar atordoante duas vezes adicionais por dia. E aumenta sua CD em 1."
      }
    ]
  },
  {
    "id": "raciais-olhar-paralisante",
    "name": "Olhar Paralisante",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "4º Nível, Medusa"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Sua habilidade “Olhar Atordoante” Passa a conjurar “Imobilizar pessoa” contra alvos humanoides. O teste de resistência muda para Fortitude e a duração é de 1 minuto, você não precisa se concentrar nesta habilidade."
      }
    ]
  },
  {
    "id": "raciais-olhar-paralisante-aprimorado",
    "name": "Olhar Paralisante Aprimorado",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "8º Nível, Medusa, Olhar Paralisante"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Sua habilidade “Olhar Atordoante” Passa a conjurar “Imobilizar monstro”. O teste de resistência muda para Fortitude e a duração é de 1 minuto, você não precisa se concentrar nesta habilidade."
      }
    ]
  },
  {
    "id": "raciais-olhar-petrificante",
    "name": "Olhar Petrificante",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "14º Nível, Medusa, Olhar Paralisante Aprimorado"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Sua habilidade “Olhar Atordoante” Passa a conjurar “Carne para pedra”."
      }
    ]
  },
  {
    "id": "raciais-pequeno-alpinista",
    "name": "Pequeno Alpinista",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Goblin ou Halfling, Treinado em Atletismo, Foco em Perícia"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você é sempre considerado sob efeito da magia patas de aranha."
      }
    ]
  },
  {
    "id": "raciais-pontaria-de-tenebra",
    "name": "Pontaria de Tenebra",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Anão"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Para ataques à distância, você usa seu modificador de Sabedoria."
      }
    ]
  },
  {
    "id": "raciais-portador-da-seguranca",
    "name": "Portador da Segurança",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Minotauro ou Força 18"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Com uma ação de movimento, você pode carregar consigo (no colo, sobre os ombros...) uma criatura de tamanho Pequeno ou menor. O protegido deve estar adjacente, e o portador precisa de uma mão livre. Exceto pelo uso de uma mão, o portador não sofre nenhuma penalidade por carregar o protegido.  Enquanto está sendo carregado, o protegido é considerado sob cobertura (CA+4). Além disso, qualquer ataque bem-sucedido contra o protegido tem 50% de chance de, em vez disso, atingir o portador (o ataque é feito contra a sua CA)."
      }
    ]
  },
  {
    "id": "raciais-postura-inabalavel",
    "name": "Postura Inabalável",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Anão"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Sempre que está em contato com o chão e imóvel (sem deslocar-se nesta rodada), você recebe +6 em testes para resistir a manobras especiais (agarrar, atropelar, derrubar, desarmar, empurrar, separar)."
      }
    ]
  },
  {
    "id": "raciais-protetor-eterno",
    "name": "Protetor Eterno",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Minotauro, Tendência Bondosa"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Enquanto tiver pelo menos um aliado adjacente, você continua consciente quando fica com pontos de vida negativos, mas só pode realizar uma ação padrão ou movimento (não ambas) por rodada. Você ainda morre caso seus PV negativos cheguem à metade de seu total."
      }
    ]
  },
  {
    "id": "raciais-salvador",
    "name": "Salvador",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Minotauro, Tendência Bondosa"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Como uma reação, uma vez por rodada, você pode impedir que um aliado adjacente receba um ataque — em vez disso, o ataque é feito contra você. O ataque ainda deve vencer sua CA para causar dano."
      }
    ]
  },
  {
    "id": "raciais-tradicao-perdida",
    "name": "Tradição Perdida",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Não Humano, Classe conjuradora"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Escolha uma habilidade básica entre Força, Destreza, Inteligência, Sabedoria e Carisma. Esta habilidade passa a ser sua habilidade chave de conjuração."
      }
    ]
  },
  {
    "id": "raciais-veneno-aprimorado",
    "name": "Veneno Aprimorado",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Medusa, Constituição 12"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "O dano do veneno de suas serpentes aumenta para 2d4 em Força."
      }
    ]
  },
  {
    "id": "raciais-visao-termica",
    "name": "Visão Térmica",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Visão no Escuro"
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Além de enxergar no escuro, você pode distinguir extremos de temperatura — alaranjado brilhante para calor, preto para frio. Itens em temperatura ambiente aparecem em preto e branco, como na visão no escuro normal.  Graças a isso você enxerga normalmente seres vivos invisíveis, e recebe +8 em testes de Percepção para enxergar seres vivos no escuro. Não se aplica a mortos-vivos, construtos, seres incorpóreos, seres vivos de sangue frio (nagahs, trogs...) e outras criaturas a critério do mestre."
      }
    ]
  },
  {
    "id": "raciais-vitalidade-das-fadas",
    "name": "Vitalidade das Fadas",
    "group": "Talentos Raciais",
    "groupSlug": "raciais",
    "sourceGroup": "TALENTOS RACIAIS",
    "prerequisites": [
      "Qareen ou Sprite."
    ],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe PVs extras igual ao seu modificador de carisma, além disso, uma vez por dia como Ação Padrão pode recuperar uma quantidade de PVs igual ao seu nível x Mod Car."
      }
    ]
  },
  {
    "id": "moreau-heranca-do-bufalo",
    "name": "Herança do Búfalo",
    "group": "Talentos Moreau",
    "groupSlug": "moreau",
    "sourceGroup": "TALENTOS MOREAU",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe um bônus permanente de Força +2.  Além disso, escolha duas habilidades entre as seguintes:"
      },
      {
        "kind": "paragraph",
        "text": "+2 em jogadas de ataque para atropelar, derrubar e empurrar."
      },
      {
        "kind": "paragraph",
        "text": "+4 em jogadas de ataque (em vez de +2) quando faz investidas."
      },
      {
        "kind": "paragraph",
        "text": "+4 em testes de Intimidação."
      },
      {
        "kind": "paragraph",
        "text": "Faro. Você percebe criaturas a até 9m e recebe +4 em testes de Sobrevivência para rastrear."
      },
      {
        "kind": "paragraph",
        "text": "Ataque natural de chifres (1d6)."
      }
    ]
  },
  {
    "id": "moreau-heranca-do-coelho",
    "name": "Herança do Coelho",
    "group": "Talentos Moreau",
    "groupSlug": "moreau",
    "sourceGroup": "TALENTOS MOREAU",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe um bônus permanente de Destreza +2. Além disso, escolha duas habilidades entre as seguintes:"
      },
      {
        "kind": "paragraph",
        "text": "+4 em testes de Percepção."
      },
      {
        "kind": "paragraph",
        "text": "+4 em testes de Iniciativa."
      },
      {
        "kind": "paragraph",
        "text": "+4 em testes de Intuição."
      },
      {
        "kind": "paragraph",
        "text": "Deslocamento +3m."
      },
      {
        "kind": "paragraph",
        "text": "Visão na Penumbra. Você ignora camuflagem (mas não camuflagem total) por escuridão."
      }
    ]
  },
  {
    "id": "moreau-heranca-da-coruja",
    "name": "Herança da Coruja",
    "group": "Talentos Moreau",
    "groupSlug": "moreau",
    "sourceGroup": "TALENTOS MOREAU",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe um bônus permanente de Sabedoria +2. Além disso, escolha duas habilidades entre as seguintes:"
      },
      {
        "kind": "paragraph",
        "text": "+2 em jogadas de ataque para agarrar."
      },
      {
        "kind": "paragraph",
        "text": "Margem de ameaça +2 contra alvos desprevenidos (este bônus não é dobrado por qualquer razão)."
      },
      {
        "kind": "paragraph",
        "text": "+4 em testes de Furtividade."
      },
      {
        "kind": "paragraph",
        "text": "Visão no Escuro 18m. Você ignora a camuflagem (incluindo camuflagem total) por escuridão."
      },
      {
        "kind": "paragraph",
        "text": "Ataque natural de garras (1d4)."
      }
    ]
  },
  {
    "id": "moreau-heranca-do-crocodilo",
    "name": "Herança do Crocodilo",
    "group": "Talentos Moreau",
    "groupSlug": "moreau",
    "sourceGroup": "TALENTOS MOREAU",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe um bônus permanente de Constituição +2. Além disso, escolha duas habilidades entre as seguintes:"
      },
      {
        "kind": "paragraph",
        "text": "Classe de armadura +1."
      },
      {
        "kind": "paragraph",
        "text": "+2 em jogadas de ataque para derrubar."
      },
      {
        "kind": "paragraph",
        "text": "+4 em testes de Furtividade."
      },
      {
        "kind": "paragraph",
        "text": "Deslocamento de natação 6m."
      },
      {
        "kind": "paragraph",
        "text": "Ataque natural de mordida (1d6)."
      }
    ]
  },
  {
    "id": "moreau-heranca-do-gato",
    "name": "Herança do Gato",
    "group": "Talentos Moreau",
    "groupSlug": "moreau",
    "sourceGroup": "TALENTOS MOREAU",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe um bônus permanente de Carisma +2. Além disso, escolha duas habilidades entre as seguintes:"
      },
      {
        "kind": "paragraph",
        "text": "+2 em jogadas de ataque para agarrar."
      },
      {
        "kind": "paragraph",
        "text": "Margem de ameaça +2 contra alvos desprevenidos (este bônus não é dobrado por qualquer razão)."
      },
      {
        "kind": "paragraph",
        "text": "+4 em testes de Acrobacia."
      },
      {
        "kind": "paragraph",
        "text": "+4 em testes de Atletismo."
      },
      {
        "kind": "paragraph",
        "text": "+4 em testes de Furtividade."
      },
      {
        "kind": "paragraph",
        "text": "Visão na Penumbra. Você ignora camuflagem (mas não camuflagem total) por escuridão."
      },
      {
        "kind": "paragraph",
        "text": "Ataque natural de garras (1d4)."
      }
    ]
  },
  {
    "id": "moreau-heranca-da-hiena",
    "name": "Herança da Hiena",
    "group": "Talentos Moreau",
    "groupSlug": "moreau",
    "sourceGroup": "TALENTOS MOREAU",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe um bônus permanente de Sabedoria +2. Além disso, escolha duas habilidades entre as seguintes:"
      },
      {
        "kind": "paragraph",
        "text": "+4 em jogadas de ataque (em vez de +2) quando está flanqueando."
      },
      {
        "kind": "paragraph",
        "text": "+4 em testes de enganação para fintar."
      },
      {
        "kind": "paragraph",
        "text": "Faro. Você percebe criaturas a até 9m e recebe +4 em testes de Sobrevivência para rastrear."
      },
      {
        "kind": "paragraph",
        "text": "Ataque natural de mordida (1d6)."
      }
    ]
  },
  {
    "id": "moreau-heranca-do-leao",
    "name": "Herança do Leão",
    "group": "Talentos Moreau",
    "groupSlug": "moreau",
    "sourceGroup": "TALENTOS MOREAU",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe um bônus permanente de Força +2. Além disso, escolha duas habilidades entre as seguintes:"
      },
      {
        "kind": "paragraph",
        "text": "+2 em jogadas de ataque para agarrar."
      },
      {
        "kind": "paragraph",
        "text": "+4 em testes de Atletismo."
      },
      {
        "kind": "paragraph",
        "text": "+4 em testes de Intimidação."
      },
      {
        "kind": "paragraph",
        "text": "• Visão na Penumbra. Você ignora camuflagem (mas não camuflagem total) por escuridão."
      },
      {
        "kind": "paragraph",
        "text": "Ataque natural de mordida (1d6)."
      },
      {
        "kind": "paragraph",
        "text": "Ataque natural de garras (1d4)."
      }
    ]
  },
  {
    "id": "moreau-heranca-do-lobo",
    "name": "Herança do Lobo",
    "group": "Talentos Moreau",
    "groupSlug": "moreau",
    "sourceGroup": "TALENTOS MOREAU",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe um bônus permanente de Carisma +2. Além disso, escolha duas habilidades entre as seguintes:"
      },
      {
        "kind": "paragraph",
        "text": "+4 em jogadas de ataque (em vez de +2) quando está flanqueando."
      },
      {
        "kind": "paragraph",
        "text": "+4 em testes de Enganação para fintar."
      },
      {
        "kind": "paragraph",
        "text": "Faro. Você percebe criaturas a até 9m e recebe +4 em testes de Sobrevivência para rastrear."
      },
      {
        "kind": "paragraph",
        "text": "Ataque natural de mordida (1d6)."
      }
    ]
  },
  {
    "id": "moreau-heranca-do-morcego",
    "name": "Herança do Morcego",
    "group": "Talentos Moreau",
    "groupSlug": "moreau",
    "sourceGroup": "TALENTOS MOREAU",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe um bônus permanente de Destreza +2. Além disso, escolha duas habilidades entre as seguintes:"
      },
      {
        "kind": "paragraph",
        "text": "Visão no Escuro 18m. Você ignora a camuflagem (incluindo camuflagem total) por escuridão."
      },
      {
        "kind": "paragraph",
        "text": "+4 em testes de Percepção."
      },
      {
        "kind": "paragraph",
        "text": "+4 em testes de Furtividade."
      },
      {
        "kind": "paragraph",
        "text": "+4 em testes de Intimidação."
      },
      {
        "kind": "paragraph",
        "text": "Patágio. Você tem uma membrana ligando seus membros. Pode planar como se estivesse sob efeito de queda suave, e percorrer uma distância igual ao dobro da altura que estiver caindo, mas apenas se não usar nenhuma armadura."
      }
    ]
  },
  {
    "id": "moreau-heranca-da-raposa",
    "name": "Herança da Raposa",
    "group": "Talentos Moreau",
    "groupSlug": "moreau",
    "sourceGroup": "TALENTOS MOREAU",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe um bônus permanente de Inteligência +2. Além disso, escolha duas habilidades entre as seguintes:"
      },
      {
        "kind": "paragraph",
        "text": "+4 em testes de Acrobacia."
      },
      {
        "kind": "paragraph",
        "text": "+4 em testes de Furtividade."
      },
      {
        "kind": "paragraph",
        "text": "+4 em testes de Iniciativa."
      },
      {
        "kind": "paragraph",
        "text": "Deslocamento +3m."
      },
      {
        "kind": "paragraph",
        "text": "Faro. Você percebe criaturas a até 9m e recebe +4 em testes de Sobrevivência para rastrear."
      }
    ]
  },
  {
    "id": "moreau-heranca-da-serpente",
    "name": "Herança da Serpente",
    "group": "Talentos Moreau",
    "groupSlug": "moreau",
    "sourceGroup": "TALENTOS MOREAU",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe um bônus permanente de Inteligência +2. Além disso, escolha duas habilidades entre as seguintes:"
      },
      {
        "kind": "paragraph",
        "text": "+2 em jogadas de ataque para agarrar."
      },
      {
        "kind": "paragraph",
        "text": "Margem de ameaça +2 contra alvos desprevenidos (este bônus não é dobrado por qualquer razão)."
      },
      {
        "kind": "paragraph",
        "text": "Deslocamento de escalada 6m."
      },
      {
        "kind": "paragraph",
        "text": "+4 em testes de Furtividade."
      },
      {
        "kind": "paragraph",
        "text": "+4 em testes de Iniciativa."
      },
      {
        "kind": "paragraph",
        "text": "+4 em testes de Intimidação."
      },
      {
        "kind": "paragraph",
        "text": "Visão na Penumbra. Você ignora camuflagem (mas não camuflagem total) por escuridão."
      }
    ]
  },
  {
    "id": "moreau-heranca-do-urso",
    "name": "Herança do Urso",
    "group": "Talentos Moreau",
    "groupSlug": "moreau",
    "sourceGroup": "TALENTOS MOREAU",
    "prerequisites": [],
    "costs": [],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Você recebe um bônus permanente de Constituição +2. Além disso, escolha duas habilidades entre as seguintes:"
      },
      {
        "kind": "paragraph",
        "text": "+2 em jogadas de ataque para agarrar."
      },
      {
        "kind": "paragraph",
        "text": "+4 em testes de Intimidação."
      },
      {
        "kind": "paragraph",
        "text": "Faro. Você percebe criaturas a até 9m e recebe +4 em testes de Sobrevivência para rastrear."
      },
      {
        "kind": "paragraph",
        "text": "Ataque natural de mordida (1d6)."
      },
      {
        "kind": "paragraph",
        "text": "Ataque natural de garras (1d4)."
      }
    ]
  }
];

export const talentCount = talents.length;
export const talentsByGroup = Object.fromEntries(
  talentGroups.map((group) => [group.slug, talents.filter((talent) => talent.groupSlug === group.slug)])
) as Record<string, TalentEntry[]>;

export const talentsById = Object.fromEntries(talents.map((talent) => [talent.id, talent])) as Record<string, TalentEntry>;
