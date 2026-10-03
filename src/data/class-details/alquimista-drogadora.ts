import type { ClassDetail } from './schema';

export const classDetail = {
  "kind": "prestige",
  "slug": "alquimista-drogadora",
  "name": "Alquimista (Drogadora)",
  "family": "Classes de Prestígio",
  "sourceDocId": "1tHASYIQXbM2pHyvv7bNIxpn700HCq2EKTYFsalIUtrw",
  "sourceTitle": "Alquimista (Drogadora)",
  "status": "complete",
  "editorialNotes": [],
  "requirements": [
    "Perícias: 8 Graduações em Cura, 8 Graduações em Ofício (Alquimia)",
    "Talentos: Criar Consumíveis"
  ],
  "basics": {
    "hitPoints": "uma Alquimista ganha 4 PV (+mod. Con) por nível.",
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
        "Produzir Extratos, Sangue de Rosas"
      ],
      [
        "2º",
        "+1",
        "Toque Curativo (Padrão)"
      ],
      [
        "3º",
        "+2",
        "Meditação, Milagre Alquímico"
      ],
      [
        "4º",
        "+3",
        "Perfume Intoxicante (3m)"
      ],
      [
        "5º",
        "+3",
        "Produzir Extratos, Sangue de Rosas"
      ],
      [
        "6º",
        "+4",
        "Milagre Alquímico"
      ],
      [
        "7º",
        "+5",
        "Perfume Intoxicante (9m)"
      ],
      [
        "8º",
        "+6",
        "Toque Curativo (Movimento)"
      ],
      [
        "9º",
        "+6",
        "Milagre Alquímico"
      ],
      [
        "10º",
        "+7",
        "Alquimia Secreta, Produzir Extratos, Sangue de Rosas"
      ]
    ]
  },
  "sections": [
    {
      "title": "Produzir Extratos",
      "level": 3,
      "paragraphs": [
        "O talento “Criar Consumíveis” sofre as seguintes mudanças:",
        "Você pode criar pergaminhos, Varinhas ou Poções. O pré-requisito para criar um pergaminho, varinha ou poção é possuir o nível necessário nesta classe. No 1º nível desta classe você pode criar itens de até segundo ciclo, no 5º nível desta classe pode criar itens de até quarto, e por fim, no 10º nível desta classe pode criar itens de até sexto ciclo. Uma Alquimista não precisa conhecer as magia para produzir itens desta maneira.",
        "Além disso, quando criar um Pergaminho ou uma Poção, adicione seu Mod. Sab ou Metade de seu nível nesta classe (o que for menor) a quantidade de recursos criados pelo talento."
      ],
      "tables": []
    },
    {
      "title": "Sangue de Rosas",
      "level": 3,
      "paragraphs": [
        "No 1° nível você recebe uma das características abaixo de acordo com a sua escolha, no 5º e 10º nível você recebe uma nova característica a sua escolha.",
        "Imunidade a doenças mundanas e mágicas",
        "Imunidade a venenos mundanos e mágicas",
        "RE Ácido igual ao dobro de seu nível nesta classe",
        "Imunidade a paralisia, petrificação e sono.",
        "Você seu nível nesta classe a seus testes de Curar e Conhecimento (Natureza)"
      ],
      "tables": []
    },
    {
      "title": "Toque Curativo",
      "level": 3,
      "paragraphs": [
        "No 2º nível, as próprias emanações corporais do Alquimista atuam como medicamentos poderosos. Ele pode, com um toque e uma ação padrão, curar 1d8 + MdN + Mod. Sab pontos de dano em uma criatura viva, para cada nível nesta classe o valor da cura aumenta em 1d8. Esta habilidade pode ser utilizada um número de vezes por dia igual a seu nível nesta classe de prestígio. A partir do 8º nível a ação necessária para utilizar esta habilidade é uma ação de movimento."
      ],
      "tables": []
    },
    {
      "title": "Meditação",
      "level": 3,
      "paragraphs": [
        "Independentemente de sua raça, um Alquimista é capaz de entrar em um estado de transe que acelera sua regeneração natural. Consumindo uma poção criada através de sua habilidade “Produzir Extratos”, o Alquimista pode meditar por 4 horas ao invés de dormir, recebendo todos os benefícios de 8 horas de descanso e caso tenha sofrido dano temporário em atributos, restaura todos os pontos perdidos."
      ],
      "tables": []
    },
    {
      "title": "Milagre Alquímico",
      "level": 3,
      "paragraphs": [
        "No 3º nível, uma vez por dia, o Alquimista pode produzir Mod. Sab ou Metade de seu nível nesta classe (o que for menor) Poções sem gastar recursos. Preparar as poções por esta habilidade exige 10 min e elas possuem o mesmo requisito de criação que os itens gerados pela habilidade “Produzir Extrato”. Poções de Alquimista criadas por esta habilidade perdem seu efeito se não consumidas em 24 horas. A partir do 6º nível o Alquimista pode consumir poções criadas por esta habilidade como uma Ação Livre uma vez por rodada. A partir do 9º nível sempre que o Alquimista consome uma Poção criada por esta habilidade um aliado a até 6 metros (Escolhido pela própria Alquimista) recebe os mesmos benefícios da poção."
      ],
      "tables": []
    },
    {
      "title": "Perfume Intoxicante",
      "level": 3,
      "paragraphs": [
        "A partir do 4º nível, a primeira vez que uma criatura se aproxima a até 3m do Alquimista deve ser bem-sucedida em um teste de Vontade (CD 10 + MdN + Mod. Sab) ou é afetada por Enfeitiçar Monstro. Uma criatura bem-sucedida não pode ser afetada novamente por 24 horas. A partir do 7º nível o alcance desta habilidade se torna 9m."
      ],
      "tables": []
    },
    {
      "title": "Alquimia Secreta",
      "level": 3,
      "paragraphs": [
        "A partir do 10º nível sempre que o Alquimista utiliza do talento “Criar Consumíveis” ou da habilidade “Milagre Alquímico” ele gera o dobro de itens que normalmente geraria através da habilidade. Por exemplo, se fosse criar uma poção através de “Criar Consumíveis” ele cria duas no lugar, se fosse criar três, criaria seis e assim por diante."
      ],
      "tables": []
    }
  ],
  "classTalents": []
} satisfies ClassDetail;
