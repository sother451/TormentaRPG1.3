import type { ClassDetail } from './schema';

export const classDetail = {
  "kind": "prestige",
  "slug": "cavaleiro-da-morte",
  "name": "Cavaleiro da Morte",
  "family": "Classes de Prestígio",
  "sourceDocId": "1bAPwcHHGJb0jxZA8-6BHR3WV_hjuRouLSJRxVc5M-4w",
  "sourceTitle": "Cavaleiro da Morte",
  "status": "complete",
  "editorialNotes": [],
  "requirements": [
    "Bônus Base de Ataque: +5",
    "Talentos: Ataque Poderoso"
  ],
  "basics": {
    "hitPoints": "um Cavaleiro da Morte ganha 5 PV (+mod. Con) por nível.",
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
        "Disciplina da Necrópole, Reerguido"
      ],
      [
        "2º",
        "+2",
        "Garra da Morte"
      ],
      [
        "3º",
        "+3",
        "Disciplina da Necrópole"
      ],
      [
        "4º",
        "+4",
        "Corcel da Morte"
      ],
      [
        "5º",
        "+5",
        "Disciplina da Necrópole"
      ],
      [
        "6º",
        "+6",
        "Andar do Espectro"
      ],
      [
        "7º",
        "+7",
        "Disciplina da Necrópole"
      ],
      [
        "8º",
        "+8",
        "Proteção Anti Magia"
      ],
      [
        "9º",
        "+9",
        "Disciplina da Necrópole"
      ],
      [
        "10º",
        "+10",
        "O Rei da Morte"
      ]
    ]
  },
  "sections": [
    {
      "title": "Disciplina da Necrópole",
      "level": 3,
      "paragraphs": [
        "Você deve escolher uma das disciplinas da necrópole entre Profano, Sanguíneo ou Gélido. Uma vez feita, essa escolha não pode ser mudada. No 1º nível, você começa a receber habilidades ou aprimoramentos referente à disciplina escolhida. (As habilidades de cada disciplina podem ser encontradas abaixo das outras habilidades da classe)."
      ],
      "tables": []
    },
    {
      "title": "Reerguido",
      "level": 3,
      "paragraphs": [
        "Você recebe imunidade a dano não-letal, doenças mundanas, sono e venenos. Não precisa mais comer, beber ou respirar. Efeitos que detectam mortos-vivos ou efeitos baseados em tendência o tratam como maligno, independentemente da tendência real. Magias de cura ainda o curam normalmente."
      ],
      "tables": []
    },
    {
      "title": "Garra da Morte",
      "level": 3,
      "paragraphs": [
        "A partir do 2º nível você pode como uma ação padrão projetar uma garra de sombras que agarra e puxa um inimigo a até 9m a um espaço adjacente a você. Você deve ser bem-sucedido em um teste de manobra, além de ter linha de efeito para que a habilidade funcione. Esta habilidade pode ser utilizada três vezes por dia."
      ],
      "tables": []
    },
    {
      "title": "Corcel da Morte",
      "level": 3,
      "paragraphs": [
        "Você recebe uma Montaria Morta-Viva, sempre que você sobe de nível a montaria também recebe um nível, Uma Montaria Sagrada recebe BBA 1/Nível além dos demais benefícios por passagem de nível exceto Talentos. Diferentes de Montarias comuns ela pode ser invocada e desconvocada com uma ação completa. Caso esta montaria venha a morrer (novamente) você não pode invocá-la por 8 horas enquanto ela se reforma no além-vida.",
        "A Montaria Profana age no turno do Cavaleiro da Morte, compartilhando de sua rolagem de iniciativa, porém possui Ações próprias.",
        "Pv: uma Montaria Profana começa com 20 (+ mod. Constituição) Pontos de Vida e ganha 5 PV (+ mod. Constituição) por nível seguinte.",
        "Deslocamento: 18 Metros.",
        "Perícias: A Montaria Profana possui 2 + Mod. Int pericias treinadas, mas não pode escolher perícias baseadas em inteligência ou Carisma.",
        "Habilidades: For 18, Des 16, Con 16, Int 3, Sab 10, Car 3.",
        "Arma Natural: A montaria Profana possui dois ataques com arma natural que causa dano de forma equivalente a uma Adaga própria para o seu tamanho (1d4 para criaturas Médias).",
        "Tamanho: Uma Montaria Profana tem o mesmo tamanho que o Cavaleiro da Morte teria originalmente (Médio para uma Criatura Média).",
        "Outras Habilidades: Imunidade a atordoamento, dano de habilidade (apenas Força, Destreza ou Constituição), dano não-letal, imunidade a crítico, doença, encantamento, fadiga, paralisia, necromancia, sono e veneno. Não precisam respirar, se alimentar e dormir. Não recuperam pontos de vida normalmente. Sofrem dano com magias de cura e recuperam pontos de vida com magias de necromancia. Destruídos quando seus PV chegam a 0. Um morto-vivo não é afetado pelas magias reviver os mortos ou ressurreição. A magia ressurreição verdadeira o transforma na criatura que era quando vivo. Independente de sua tendência verdadeira, mortos-vivos reagem a habilidades (como destruir o mal dos paladinos) e magias (como proteção contra o mal) como se fossem Malignos."
      ],
      "tables": []
    },
    {
      "title": "Andar do Espectro",
      "level": 3,
      "paragraphs": [
        "Uma vez por dia você pode gerar um efeito similar a magia “Passeio Etéreo”, fazê-lo é uma ação livre."
      ],
      "tables": []
    },
    {
      "title": "Proteção Anti Magia",
      "level": 3,
      "paragraphs": [
        "Três vezes por dia você pode erguer uma proteção mágica ao seu redor. Como ação de movimento você recebe uma barreira que torna imune a danos mágicos. A barreira dura por 3 Rodadas ou até absorver 75 de dano mágico."
      ],
      "tables": []
    },
    {
      "title": "Rei da Morte",
      "level": 3,
      "paragraphs": [
        "O talento “Ataque Poderoso” recebe a seguinte mudança:",
        "Você pode aceitar uma penalidade em jogadas de ataque até o máximo de -5, em troca, recebe o triplo da penalidade como bônus em jogadas de dano."
      ],
      "tables": []
    },
    {
      "title": "Disciplina da Necrópole - Sanguíneo",
      "level": 1,
      "paragraphs": [],
      "tables": []
    },
    {
      "title": "Golpe da Morte",
      "level": 3,
      "paragraphs": [
        "Quando você usa o talento “Ataque Poderoso” e atinge uma criatura, você restaura pontos de vida igual o dano bônus garantido pelo talento."
      ],
      "tables": []
    },
    {
      "title": "Transfusão",
      "level": 3,
      "paragraphs": [
        "Durante sua rodada, como uma ação livre mas somente uma vez por rodada, você pode escolher receber até 5 + Mod. Con. pontos de dano por esta habilidade, se o fizer, no início de sua próxima rodada você cura o dobro de pontos de vida sacrificados para esta habilidade. Você não recupera pontos de vida através desta habilidade se cair abaixo de 0 antes de sua segunda ativação. Você pode utilizar esta habilidade um número de vezes por dia igual a 1 + Mod. Con."
      ],
      "tables": []
    },
    {
      "title": "Sorve Sangue",
      "level": 3,
      "paragraphs": [
        "Sempre que você restaura pontos de vida através de uma habilidade do Cavaleiro da Morte, além de receber a cura proveniente da habilidade também recebe PVs Temporários igual a cura recebida. Somente a maior fonte de cura se mantém."
      ],
      "tables": []
    },
    {
      "title": "Escudo de Sangue",
      "level": 3,
      "paragraphs": [
        "Quando uma habilidade do Cavaleiro da Morte te fizer restaurar pontos de Vida, você recebe RD e RE igual a seu nível nesta classe até o início de seu próximo turno."
      ],
      "tables": []
    },
    {
      "title": "Purgatório",
      "level": 3,
      "paragraphs": [
        "Quando um golpe causaria dano suficiente para te reduzir abaixo de 0 PVs, ao invés disso você é reduzido a 1 ponto de vida por até o fim de sua rodada e não pode ser reduzido abaixo disso, durante essa rodada toda cura que você recebe é dobrada. Esta habilidade pode ser utilizada uma vez por dia."
      ],
      "tables": []
    },
    {
      "title": "Disciplina da Necrópole - Gélido",
      "level": 1,
      "paragraphs": [],
      "tables": []
    },
    {
      "title": "Golpe Gélido",
      "level": 3,
      "paragraphs": [
        "Quando você usa o talento “Ataque Poderoso” e atinge uma criatura, você causa o dano bônus garantido pelo talento como dano de Frio a todos os inimigos adjacentes a ele. Este efeito se ativa no máximo 4 vezes por rodada."
      ],
      "tables": []
    },
    {
      "title": "Câmara Criogênica",
      "level": 3,
      "paragraphs": [
        "Inimigos a até 9 metros de você tem seu deslocamento em terra reduzido em 3m e são considerados como estando em terreno difícil."
      ],
      "tables": []
    },
    {
      "title": "Maquina Assassina",
      "level": 3,
      "paragraphs": [
        "Suas armas corpo-a-corpo têm suas margens de ameaça e multiplicador aumentadas em +1."
      ],
      "tables": []
    },
    {
      "title": "Gelo Estilhaçado",
      "level": 3,
      "paragraphs": [
        "Quando você realiza um acerto crítico usando o talento “Ataque Poderoso” o dano adicional de “Golpe Gélido” é dobrado."
      ],
      "tables": []
    },
    {
      "title": "O Longo Inverno",
      "level": 3,
      "paragraphs": [
        "Uma vez por dia você como uma ação completa, você pode realizar um ataque contra todos os inimigos em um cone de 9 Metros, inimigos que estejam adjacentes ao cone dessa habilidade ainda são afetados pelos seus ataques, mas recebem metade do dano caso sejam atingidos. Você ignora o limite da habilidade “Golpe Gélido” quando usa esta habilidade."
      ],
      "tables": []
    },
    {
      "title": "Disciplina da Necrópole - Profano",
      "level": 1,
      "paragraphs": [],
      "tables": []
    },
    {
      "title": "Golpe Suturante",
      "level": 3,
      "paragraphs": [
        "Quando você usa o talento “Ataque Poderoso” e atinge uma criatura, você causa o dano bônus garantido pelo talento como dano de Necromancia novamente no início de sua rodada à criatura. Este efeito se ativa apenas duas vezes por rodada."
      ],
      "tables": []
    },
    {
      "title": "Reviver Morto-Vivo",
      "level": 3,
      "paragraphs": [
        "Você recebe um ajudante morto-vivo. Sempre que você sobe de nível o Morto-Vivo também recebe um nível, Um Morto-Vivo recebe BBA 1/Nível além dos demais benefícios por passagem de nível exceto Talentos. Caso seu Morto-Vivo venha a morrer (de novo) você pode invocar um novo com um dia de trabalho (8 Horas). No 15º nível, caso seu Morto-Vivo morra (de novo), você pode trazê-la de volta à vida  após passar 1 hora em meditação.O Morto-Vivo age no turno do Cavaleiro da Morte, compartilhando de sua rolagem de iniciativa.",
        "Pv: Um Morto-Vivo começa com 24 Pontos de Vida e ganha 6 PV por nível seguinte.",
        "Deslocamento: 9 Metros",
        "Perícias: Um Morto-Vivo possui 2 perícias treinadas, mas não pode escolher perícias baseadas em inteligência ou Carisma.",
        "Habilidades: For 18, Des 18, Con -, Int 10, Sab 10, Car 10.",
        "Arma Natural: Possui dois ataques com arma natural que causa dano de forma equivalente a uma Espada Curta própria para o seu tamanho (1d6 para criaturas Médias).",
        "Tamanho: Médio",
        "Outras Habilidades: Imunidade a atordoamento, dano de habilidade (apenas Força, Destreza ou Constituição), dano não-letal, imunidade a crítico, doença, encantamento, fadiga, paralisia, necromancia, sono e veneno. Não precisam respirar, se alimentar e dormir. Não recuperam pontos de vida normalmente. Sofrem dano com magias de cura e recuperam pontos de vida com magias de necromancia. Destruídos quando seus PV chegam a 0. Um morto-vivo não é afetado pelas magias reviver os mortos ou ressurreição. A magia ressurreição verdadeira o transforma na criatura que era quando vivo. Independente de sua tendência verdadeira, mortos-vivos reagem a habilidades (como destruir o mal dos paladinos) e magias (como proteção contra o mal) como se fossem Malignos.",
        "Especial: Quando este morto-vivo causar dano a um inimigo, o dado de dano (1d6) é causado novamente no início da rodada do cavaleiro da morte."
      ],
      "tables": []
    },
    {
      "title": "Podridão da Morte",
      "level": 3,
      "paragraphs": [
        "Três vezes ao dia como uma ação de movimento você pode escolher um inimigo que possa ver e fazer os efeitos negativos de início de turno da habilidade “Golpe Suturante” e dos ataques do lacaio de “Reviver Morto-Vivo” acontecerem imediatamente, eles ainda irão ocorrer novamente no início da próxima rodada. O dano desta habilidade restaura PVs do lacaio criado por “Reviver Morto-Vivo”"
      ],
      "tables": []
    },
    {
      "title": "Contaminação Torpe",
      "level": 3,
      "paragraphs": [
        "Quando você realiza um acerto usando o talento “Ataque Poderoso” você pode escolher um inimigo a até 3 metros do seu alvo, você aplica os efeitos negativos da habilidade “Golpe Suturante” que seu inimigo receberia a ele."
      ],
      "tables": []
    },
    {
      "title": "Exército dos Mortos",
      "level": 3,
      "paragraphs": [
        "Uma vez por dia como uma ação completa você invoca outros 4 lacaios como pela habilidade “Reviver Morto-Vivo”, eles duram por três rodadas e então se desfazem retornando ao pó. Quando estes mortos-vivos causam dano a um inimigo, o dado de dano (1d6) é causado novamente no início da rodada do cavaleiro da morte."
      ],
      "tables": []
    }
  ],
  "classTalents": []
} satisfies ClassDetail;
