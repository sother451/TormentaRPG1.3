import type { ClassDetail } from './schema';

export const classDetail = {
  "kind": "prestige",
  "slug": "algoz-da-tormenta",
  "name": "Algoz da Tormenta",
  "family": "Classes de Prestígio",
  "sourceDocId": "1gXCdZDw4XMYLJN-s3nw_M3FCB3osYwi9eN69DyV2kmo",
  "sourceTitle": "Algoz da Tormenta",
  "status": "complete",
  "editorialNotes": [],
  "requirements": [
    "Bônus Base de Ataque: +5",
    "Talentos: Armamento da Tormenta e outros dois talentos da tormenta."
  ],
  "basics": {
    "hitPoints": "um Algoz da Tormenta ganha 5 PV (+mod. Con) por nível.",
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
        "+1",
        "Anticarisma"
      ],
      [
        "2º",
        "+2",
        "Aspecto da Corrupção"
      ],
      [
        "3º",
        "+3",
        "Arsenal Rubro (Armas)"
      ],
      [
        "4º",
        "+4",
        "Desprezo Profano"
      ],
      [
        "5º",
        "+5",
        "Toque Carmesim"
      ],
      [
        "6º",
        "+6",
        "Aspecto da Corrupção, Arsenal Rubro (Escudos)"
      ],
      [
        "7º",
        "+7",
        "Caçador de Deuses"
      ],
      [
        "8º",
        "+8",
        "Mente Alienígena"
      ],
      [
        "9º",
        "+9",
        "Arsenal Rubro (Armaduras)"
      ],
      [
        "10º",
        "+10",
        "Aspecto da Corrupção, Lorde da Tormenta"
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
      "title": "Aspecto da Corrupção",
      "level": 3,
      "paragraphs": [
        "No 2° nível você recebe uma das características abaixo de acordo com a sua escolha, no 6º e 10º nível você recebe uma nova característica a sua escolha.",
        "Coordenação Perfeita:  Você recebe +1 em todos os testes de perícia. A cada 3 talentos da tormenta que possuir este bônus aumenta em +1",
        "Imortalidade: você não precisa respirar, se alimentar e dormir. Também não envelhece, e só morrem por causas violentas.",
        "Imunidades: Escolha entre ácido, dano de habilidade, doença, energia negativa, eletricidade, fogo, frio, metamorfose, paralisia, petrificação, sono ou veneno você se torna imune a um destes efeitos. A cada 7 talentos da tormenta que possuir, você pode escolher uma nova imunidade.",
        "Insanidade da Tormenta: uma criatura inteligente (Int 3 ou mais) que o veja, deve fazer um teste de Vontade (CD 10 + MdN + Seu número de talentos da Tormenta). Em caso de falha, sofre 1 ponto de dano em Carisma para cada 5 Talentos da Tormenta que você possuir. Em caso de sucesso, fica imune a esta habilidade por um dia. Esta habilidade não afeta aliados.",
        "Percepção Temporal:  Você recebe +1 em testes de resistências. A cada 3 talentos da tormenta que possuir este bônus aumenta em +1",
        "Nutrientes: você adquire cura acelerada 2. A cada 2 talentos da tormenta que possuir este bônus aumenta em +3"
      ],
      "tables": []
    },
    {
      "title": "Arsenal Rubro",
      "level": 3,
      "paragraphs": [
        "O talento “Armamento da Tormenta” passa a ter o seguinte efeito:",
        "Como ação de movimento, você pode expelir uma arma orgânica. Você pode criar qualquer arma que saiba utilizar, desde que não possuam partes móveis. Criar uma arma causa dano de acordo com o tipo de arma 1d4 (arma leve), 1d6 (arma de uma mão) ou 1d8 (arma de duas mãos).",
        "A arma é considerada de matéria vermelha, mas não causa dano ao seu criador. A cada três talentos da tormenta a arma recebe um bônus mágico de +1 que pode ser utilizado para comprar poderes ou como bônus numéricos. O bônus numérico deste efeito nunca pode ser maior do que metade de seu nível nesta classe. O benefício do talento “Sangue ácido\" tem seu dano aplicado aos armamentos da tormenta enquanto o criador da arma utiliza ela.",
        "A partir do 6º nível você pode invocar escudos com esta habilidade, recebendo dano de acordo com o tipo do escudo 1d6 (escudo leve), 1d8 (escudo pesado) ou 1d10 (escudo de corpo).",
        "E a partir do 9° nível você pode invocar armaduras com esta habilidade, recebendo dano de acordo com o tipo de armadura 1d8 (armadura leve), 1d10 (armadura média) ou 1d12 (armadura pesada).",
        "Nas mãos de qualquer outra criatura está arma se comporta como um equipamento mundano de matéria vermelha."
      ],
      "tables": []
    },
    {
      "title": "Desprezo Profano",
      "level": 3,
      "paragraphs": [
        "No 4º nível, sempre que você reduzir uma criatura a 0 ou menos PV, todos os inimigos que vejam isso devem fazer um teste de Vontade (CD 10 + MdN + Mod. Fo). Em caso de falha, ficam enjoados por uma rodada."
      ],
      "tables": []
    },
    {
      "title": "Toque Carmesim",
      "level": 3,
      "paragraphs": [
        "No 5º nível, seus ataques corpo a corpo e à distância de até 9m causam 1d4 de pontos de dano adicional de matéria vermelha. Este dano aumenta em 1d4 para cada outros 3 Talentos da tormenta que você possuir. O número de dados desta habilidade não pode exceder seu nível nesta classe."
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
      "title": "Lorde da Tormenta",
      "level": 3,
      "paragraphs": [
        "Você é considerado como tendo o dobro de talentos da tormenta para todas as suas habilidades e talentos."
      ],
      "tables": []
    }
  ],
  "classTalents": []
} satisfies ClassDetail;
