import type { ClassDetail } from './schema';

export const classDetail = {
  "kind": "prestige",
  "slug": "bruxa-da-tormenta",
  "name": "Bruxa da Tormenta",
  "family": "Classes de Prestígio",
  "sourceDocId": "1TlkbLGjG88-x2gFJ4-iHFbJzU7qH55wqv98K0VDSQF4",
  "sourceTitle": "Bruxa da Tormenta",
  "status": "complete",
  "editorialNotes": [],
  "requirements": [
    "Magias: capacidade de lançar magias arcanas de 3º nível",
    "Talentos: Identidade Fraca"
  ],
  "basics": {
    "hitPoints": "uma Bruxa da Tormenta ganha 3 PV (+mod. Con) por nível.",
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
        "Anticarisma, Magias"
      ],
      [
        "2º",
        "+1",
        "Conjurador Rubro"
      ],
      [
        "3º",
        "+1",
        "Convite Rubro"
      ],
      [
        "4º",
        "+2",
        ""
      ],
      [
        "5º",
        "+2",
        "Aspecto da Corrupção"
      ],
      [
        "6º",
        "+3",
        "Autofagia"
      ],
      [
        "7º",
        "+3",
        "Caçador de Deuses"
      ],
      [
        "8º",
        "+4",
        "Mente Alienígena"
      ],
      [
        "9º",
        "+4",
        ""
      ],
      [
        "10º",
        "+5",
        "Aspecto da Corrupção, Lar Rubro"
      ]
    ]
  },
  "sections": [
    {
      "title": "Anticarisma",
      "level": 3,
      "paragraphs": [
        "Seu carisma se torna nulo, você falha automaticamente em testes de perícia baseadas em Carisma exceto intimidação. Para testes de Intimidação você utiliza seu Mod.For e Mod.Con ao invés de Carisma."
      ],
      "tables": []
    },
    {
      "title": "Magias",
      "level": 3,
      "paragraphs": [
        "Níveis de Bruxa da Tormenta se acumulam com níveis numa classe conjuradora arcana que o personagem já possua para propósitos de magia conhecidas e PM."
      ],
      "tables": []
    },
    {
      "title": "Conjurador Rubro",
      "level": 3,
      "paragraphs": [
        "Você adiciona “Momento de Tormenta” a sua lista de magias conhecidas. Para você, essa magia sempre está preparada e pode ser conjurada contanto que pague seu custo em PMs. Quando conjurar esta magia você altera sua duração para 3 Rodadas, remove sua condição de concentração e adiciona ela a característica (D). Por fim, sempre que a conjura, pode escolher um talento metamágico qualquer (mesmo que não o possua) para adicionar aos efeitos da magia gratuitamente."
      ],
      "tables": []
    },
    {
      "title": "Convite Rubro",
      "level": 3,
      "paragraphs": [
        "O talento “Identidade Fraca” passa a ter o seguinte efeito:",
        "Escolha um companheiro, que pode ser um personagem jogador ou um PdM. Quando estiver próximo desse companheiro (18m ou menos), você recebe +1 em jogadas, testes e CD de Magias. Esse bônus aumenta em 1 para cada três outros talentos da Tormenta que você possui (Mas não pode exceder seu nível nesta classe de Prestígio). Além disso, quando conjurar a magia “Momento de Tormenta” pela habilidade “Conjurador Rubro”, reduz o custo da magia em 2 PMs.",
        "Se estiver distante mais de 18m desse companheiro, você sofre penalidade iguais aos bônus que receberia normalmente.",
        "Você pode designar um novo companheiro uma vez por mês."
      ],
      "tables": []
    },
    {
      "title": "Aspecto da Corrupção",
      "level": 3,
      "paragraphs": [
        "No 5° nível você recebe uma das características abaixo de acordo com a sua escolha, no 10º nível você recebe uma nova característica a sua escolha.",
        "Coordenação Perfeita:  Você recebe +1 em todos os testes de perícia. Este bônus aumenta em +1 para cada 3 outros talentos da Tormenta que você possui.",
        "Imortalidade: você não precisa respirar, se alimentar e dormir. Também não envelhece, e só morrem por causas violentas.",
        "Imunidades: Escolha entre ácido, dano de habilidade, doença, energia negativa, eletricidade, fogo, frio, metamorfose, paralisia, petrificação, sono ou veneno você se torna imune a um destes efeitos. A cada 7 talentos da tormenta que possuir, você pode escolher uma nova imunidade.",
        "Insanidade da Tormenta: uma criatura inteligente (Int 3 ou mais) que o veja, deve fazer um teste de Vontade (CD 10 + MdN + Seu número de talentos da Tormenta). Em caso de falha, sofre 1 ponto de dano em Carisma para cada 5 Talentos da Tormenta que você possuir. Em caso de sucesso, fica imune a esta habilidade por um dia. Esta habilidade não afeta aliados.",
        "Percepção Temporal:  Você recebe +1 em testes de resistências. Este bônus aumenta em +1 para cada 3 outros talentos da Tormenta que você possui.",
        "Nutrientes: você adquire cura acelerada 2. Este bônus aumenta em 3 para cada dois outros talentos da Tormenta que você possui."
      ],
      "tables": []
    },
    {
      "title": "Autofagia",
      "level": 3,
      "paragraphs": [
        "A partir do 6º nível, pode, como uma ação de movimento, sofrer -2 de penalidade temporária em qualquer habilidade. Esta penalidade se converte em 5 PMs, que podem ser usados livremente. Você pode utilizar esta habilidade uma vez por dia. As penalidades dessa habilidade desaparecem à taxa de 2 pontos por dia. Quando uma penalidade desaparece, os PM vindos dela também se esvaem."
      ],
      "tables": []
    },
    {
      "title": "Caçador de Deuses",
      "level": 3,
      "paragraphs": [
        "Você recebe +4 em Testes de Resistência contra magias e Habilidades de origem Divina, quando você tem sucesso em resistir um efeito proveniente dessas fontes, você ignora qualquer efeito secundário ou parcial que a habilidade causaria."
      ],
      "tables": []
    },
    {
      "title": "Mente Alienígena",
      "level": 3,
      "paragraphs": [
        "Qualquer um que tente estudar ou ler sua mente falha automaticamente em fazê-lo."
      ],
      "tables": []
    },
    {
      "title": "Lar Rubro",
      "level": 3,
      "paragraphs": [
        "Ao alcançar o 10º nível, você não sofre nenhuma penalidade por estar em uma área de Tormenta. Torna-se imune a todo dano de matéria vermelha, e nenhum fenômeno em uma área de Tormenta pode prejudicá-lo. Por fim, recebe um covil dentro de uma área de tormenta com o modelo estrutura aberrante. Dentro do covil, você pode descansar apenas 4 horas, e terá todos os benefícios de descansar 8 horas."
      ],
      "tables": []
    }
  ],
  "classTalents": []
} satisfies ClassDetail;
