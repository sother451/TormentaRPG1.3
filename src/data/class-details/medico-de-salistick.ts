import type { ClassDetail } from './schema';

export const classDetail = {
  "kind": "prestige",
  "slug": "medico-de-salistick",
  "name": "Médico de Salistick",
  "family": "Classes de Prestígio",
  "sourceDocId": "1h9ZYF9N4aZaT9we2TBRqStX3tgluy3dVfO7aTNPv4ZQ",
  "sourceTitle": "Médico de Salistick",
  "status": "complete",
  "editorialNotes": [],
  "requirements": [
    "Perícias: 8 Graduações em Cura",
    "Talentos: Médico de Campo",
    "Especial: Não pode ser devoto de nenhum deus."
  ],
  "basics": {
    "hitPoints": "um Médico de Salistick ganha 4 PV (+mod. Con) por nível.",
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
        "Conjunto de Medicina"
      ],
      [
        "2º",
        "+1",
        "Conhecimento Anatômico (1d6)"
      ],
      [
        "3º",
        "+2",
        "Cirurgia"
      ],
      [
        "4º",
        "+3",
        "Remédios"
      ],
      [
        "5º",
        "+3",
        "Conhecimento Anatômico (2d6)"
      ],
      [
        "6º",
        "+4",
        "Atendimento de Campo"
      ],
      [
        "7º",
        "+5",
        "Implantes"
      ],
      [
        "8º",
        "+6",
        "Atenção Médica, Conhecimento Anatômico (3d6)"
      ],
      [
        "9º",
        "+6",
        "Cirurgia"
      ],
      [
        "10º",
        "+7",
        "Doutor Frankenstein"
      ]
    ]
  },
  "sections": [
    {
      "title": "Conjunto de Medicina",
      "level": 3,
      "paragraphs": [
        "Você recebe um conjunto de instrumentos cirúrgicos, remédios, seringas e até mesmo sanguessugas, sem custo algum. A maleta conta como um kit de medicamentos obra-prima (+2 em testes de cura). Como uma ação padrão, você pode curar uma criatura adjacente a você utilizando sua maleta. Ela recupera 1d12 + MdN + Mod. Sab pontos de dano independente se a criatura está viva ou morta, para cada nível nesta classe o valor da cura aumenta em 1d12. Você só pode usar esta habilidade uma vez por dia numa mesma criatura. A partir do 5º nível pode utilizar esta habilidade uma vez adicional por criatura e uma terceira a partir do 10º nível."
      ],
      "tables": []
    },
    {
      "title": "Conhecimento Anatômico",
      "level": 3,
      "paragraphs": [
        "Sua compreensão do corpo torna-o letal em combate. Você causa 1d6 pontos de dano adicional em ataques, este bônus não se aplica contra construtos. A cada 3 níveis o bônus aumenta em 1d6."
      ],
      "tables": []
    },
    {
      "title": "Cirurgia",
      "level": 3,
      "paragraphs": [
        "Você pode consertar estragos que parecem irremediáveis. Uma cirurgia demora 1 hora, e exige um teste de Cura (CD 30). Se você for bem-sucedido, elimina todos os níveis negativos e danos de habilidade que a criatura tenha sofrido. Se falhar, não pode tentar de novo por 1 dia. Se estiver usando as regras de ferimentos permanentes, pode fazer uma cirurgia em alguém que tenha sofrido um desses ferimentos para removê-los também. A partir do 9º nível uma cirurgia pode ser feita em 1 minuto, além disso, se a cirurgia remover um nível negativo ou dano de habilidade de uma criatura com sucesso, a criatura recebe um bônus de +2 em um atributo a sua escolha durante o dia."
      ],
      "tables": []
    },
    {
      "title": "Remédios",
      "level": 3,
      "paragraphs": [
        "Com um dia de trabalho, você pode criar um remédio que funciona como uma poção (Escolha entre Remover Veneno, Remover Medo, Remover Doença, Remover Cegueira/Surdez ou Remover Paralisia). O remédio não é mágico, e é imune a efeitos que dissipam magia."
      ],
      "tables": []
    },
    {
      "title": "Atendimento de Campo",
      "level": 3,
      "paragraphs": [
        "O talento “Médico de Campo” sofre as seguintes mudanças:\nVocê pode usar magias ou habilidades de cura em um aliado até um minuto depois de sua morte.",
        "Quando você impede uma criatura de morrer através dessa habilidade, os PVs dela se abaixo de 0, se tornam 0, este efeito só pode ocorrer uma vez por criatura por combate."
      ],
      "tables": []
    },
    {
      "title": "Implantes",
      "level": 3,
      "paragraphs": [
        "Você aprende a realizar Implantes, para realizar isto, precisa de 1 hora e ter o material necessário para fazê-lo, uma criatura pode ter apenas um implante por vez."
      ],
      "tables": []
    },
    {
      "title": "Atenção Médica",
      "level": 3,
      "paragraphs": [
        "Você toma conta de seus companheiros mantendo-os saudáveis mesmo que à força! Enquanto estiverem andando com você (dormindo no mesmo acampamento, viajando juntos, dentro da mesma masmorra) seus colegas (até um número máximo igual a seu Mod. Sab) aumentam seus PVs Máximo em 10 + seu Mod. Sab. Quando eles se separam de você, os bônus desaparecem após 24 horas. Você pode conceder estes bônus a si mesmo, mas conta no limite de pacientes."
      ],
      "tables": []
    },
    {
      "title": "Doutor Frankenstein",
      "level": 3,
      "paragraphs": [
        "A partir do 10º nível você aprende a realizar implantes nunca antes vistos, ao invés de escolher implantes pertencentes a lista, pode adquirir características de monstros como seus implantes. Por exemplo, poderia escolher as presas de um vampiro para receber seu ataque drenante, as cordas vocais de uma sereia para ter seu canto e assim por diante, quando você realiza implantes aumenta o número máximo de implantes que uma criatura pode ter para 3."
      ],
      "tables": []
    }
  ],
  "classTalents": []
} satisfies ClassDetail;
