import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "clerigo",
  "name": "Clérigo",
  "family": "Clérigo",
  "sourceDocId": "1zk5Bek-jYAWnP8h4G9mxhmkuXYMQ-Uiqs3Jkq3nReKk",
  "sourceTitle": "Clérigo",
  "status": "complete",
  "editorialNotes": [],
  "basics": {
    "hitPoints": "um Clérigo começa com 8 pontos de vida (+ Mod. de Con) e ganha 2 PV (+mod. Con) por nível seguinte.",
    "trainedSkills": "Conhecimento(Religião) e outras 4 + mod. Inteligência.",
    "classSkills": "Conhecimento (Int), Cura (Sab), Diplomacia (Car), Identificar Magia (Int), Intuição (Sab), Iniciativa (Des), Meditação (Sab), Ofício (Int), Percepção (Sab).",
    "bonusTalents": "Usar Armaduras (leves),Usar Armas Simples, Resistência Aprimorada (Vontade)."
  },
  "progression": {
    "headers": [
      "Nível",
      "BBA",
      "",
      "Magias"
    ],
    "rows": [
      [
        "1º",
        "+0",
        "Canalizar Energia (1 Dado), Devoto, Símbolo Sagrado",
        "0, 1º"
      ],
      [
        "2º",
        "+1",
        "",
        ""
      ],
      [
        "3º",
        "+1",
        "Canalizar Energia (2 Dados)",
        "2°"
      ],
      [
        "4º",
        "+2",
        "",
        ""
      ],
      [
        "5º",
        "+2",
        "Canalizar Energia (3 Dados), Divina Comédia",
        "3°"
      ],
      [
        "6º",
        "+3",
        "",
        ""
      ],
      [
        "7º",
        "+3",
        "Canalizar Energia (4 Dados)",
        "4°"
      ],
      [
        "8º",
        "+4",
        "",
        ""
      ],
      [
        "9º",
        "+4",
        "Canalizar Energia (5 Dados)",
        "5°"
      ],
      [
        "10º",
        "+5",
        "A Fé move Montanhas, Palavras do Divino",
        ""
      ],
      [
        "11º",
        "+5",
        "Canalizar Energia (6 Dados)",
        "6°"
      ],
      [
        "12º",
        "+6",
        "",
        ""
      ],
      [
        "13º",
        "+6",
        "Canalizar Energia (7 Dados)",
        "7°"
      ],
      [
        "14º",
        "+7",
        "",
        ""
      ],
      [
        "15º",
        "+7",
        "Canalizar Energia (8 Dados), Apostolização",
        "8°"
      ],
      [
        "16º",
        "+8",
        "",
        ""
      ],
      [
        "17º",
        "+8",
        "Canalizar Energia (9 Dados)",
        "9°"
      ],
      [
        "18º",
        "+9",
        "",
        ""
      ],
      [
        "19º",
        "+9",
        "Canalizar Energia (10 Dados)",
        ""
      ],
      [
        "20º",
        "+10",
        "Apoteosis, A última ceia",
        "10°"
      ]
    ]
  },
  "sections": [
    {
      "title": "Magias",
      "level": 3,
      "paragraphs": [
        "Tipo e níveis de magia: você pode lançar magias divinas de nível 0 (truques) e 1º nível. A cada dois níveis de clérigo seguintes, você pode lançar magias um nível acima: no 3º nível pode lançar magias de 2º nível, no 5º nível você pode lançar magias de 3º nível e assim por diante até o 17º nível, quando você pode lançar magias de 9º nível.",
        "Habilidade-chave: sua habilidade para lançar magias é Sabedoria.",
        "Magias Conhecidas: você conhece 5 magias divinas de nível 0, e também um número de magias de 1º nível igual a 3 + seu modificador de Sabedoria. Cada vez que avançar de nível, você aprende duas novas magias de qualquer nível que possa lançar.",
        "Pontos de Magia: você tem um número de pontos de magia (PM) igual a 1 + modificador de Sabedoria. Cada vez que avança de nível, recebe 3 PM.",
        "Preparação de Magia: você precisa preparar suas magias com antecedência. A cada dia deve estudar durante uma hora, e então escolher um número igual a Metade do Nível + MdC de magias para preparar. Essas magias podem ser conjuradas livremente durante o dia com os PMs do conjurador, podendo receber efeitos de talentos metamágicos e habilidades de classe."
      ],
      "tables": []
    },
    {
      "title": "Canalizar Energia",
      "level": 3,
      "paragraphs": [
        "Você pode liberar uma onda de energia com alcance de até 9m a partir de você, todas as criaturas dentro do alcance de sua habilidade são afetadas.",
        "Canalizar Energia Positiva (Divindade Bondosa), Cura 1d6 PV de todas as criaturas na área exceto mortos vivos que recebem dano sagrado na mesma proporção.",
        "Canalizar Energia Negativa (Divindade Maligna), Cura 1d6 PV para criaturas mortas-vivas e causa a mesma quantia de dano profano em outras criaturas.",
        "Canalizar Energia (Divindade Neutra), Escolha um número de criaturas igual à seu Mod. Sab dentro do alcance da habilidade, elas Curam 1d4 PV, todas as outras criaturas dentro da área recebem o mesmo valor em dano sagrado.",
        "Criaturas que sofrem dano têm direito a um teste de Vontade (CD 10 + MdN + Mod. Sab) para reduzir esse dano à metade. Usar esta habilidade é uma ação padrão. Ela pode ser usada um número de vezes por dia igual à MdN + Mod. Sab. A cada dois níveis nesta classe o número de dados da habilidade aumenta em 1."
      ],
      "tables": []
    },
    {
      "title": "Devoto",
      "level": 3,
      "paragraphs": [
        "Você deve escolher uma divindade padroeira e atuar como seu devoto. As divindades determinam quais talentos de poderes concedidos você pode ter. Clérigos recebem habilidades diferentes dependendo da tendência de seu Deus."
      ],
      "tables": []
    },
    {
      "title": "Símbolo Sagrado",
      "level": 3,
      "paragraphs": [
        "Você recebe um objeto à sua escolha. Pode ser uma varinha, cajado, livro, chapéu, amuleto ou mesmo arma.",
        "Este item pode ser usado para lançar, uma vez por dia, qualquer magia que você conheça sem gastar PM (incluindo custos extras de talentos metamágicos). No entanto, para lançar qualquer magia sem estar usando ou segurando o item, você precisa fazer um teste de Religião (CD 15 + nível da magia). Se falhar, a magia não funciona, mas você gasta os PM mesmo assim.",
        "O Símbolo Sagrado tem dureza 10 e PV iguais a metade dos PV máximos do Clérigo. Um item danificado é restaurado na próxima vez que você preparar suas magias. Construir um novo Símbolo consome uma semana de trabalho e 100 TO."
      ],
      "tables": []
    },
    {
      "title": "Divina Comédia",
      "level": 3,
      "paragraphs": [
        "Você pode lançar a magia detectar mortos-vivos à vontade, com uma ação de movimento e sem gastar PM. Além disso, recebe uma das habilidades abaixo de acordo com seu deus.",
        "Exorcismo Final (Divindade Bondosa), Como uma ação padrão, e gastando um uso de canalizar energia, você pode escolher como alvo um morto-vivo cujo nível não supera seu nível nesta classe a até 9m. O morto-vivo então deve fazer um teste de Vontade (CD 10 + mod. Sab + MdN); se falhar, é exorcizado (destruído imediatamente)",
        "Últimas Escolhas (Divindade Neutra), Como uma ação padrão, e gastando um uso de canalizar energia, você pode escolher como alvo um morto-vivo cujo nível não supera seu nível nesta classe -4 a até 9m e escolher entre Exorcismo Final ou Baixa do Soldado. O morto-vivo então deve fazer um teste de Vontade (CD 10 + mod. Sab + MdN); Você gera os efeitos de Divina Comédia de acordo com a escolha.",
        "Baixa do Soldado (Divindade Maligna), Como uma ação padrão, e gastando um uso de canalizar energia, você pode escolher como alvo um morto-vivo cujo nível não supera seu nível nesta classe a até 9m. O morto-vivo então deve fazer um teste de Vontade (CD 10 + mod. Sab + MdN); se falhar, torna-se um servo seu, incapaz de desobedecer qualquer ordem sua. Mortos Vivos inteligentes (Int 3 ou Mais) podem realizar o teste novamente a cada hora para se soltarem do controle. O número máximo de Mortos-Vivos que você pode ter sob seu controle é igual ao dobro do seu nível nesta classe."
      ],
      "tables": []
    },
    {
      "title": "A Fé move Montanhas",
      "level": 3,
      "paragraphs": [
        "Escolha um aliado qualquer que esteja a até 30 metros da sua posição, três vezes por dia como uma Ação de Movimento você puxa o aliado até um espaço não ocupado adjacente a você. Você deve ter linha de visão para que a habilidade funcione, uma criatura movida por este efeito não sofre ataques de oportunidade."
      ],
      "tables": []
    },
    {
      "title": "Palavras do Divino",
      "level": 3,
      "paragraphs": [
        "A partir do 10º nível você passa a adicionar seu MdC ao dano e cura de suas magias."
      ],
      "tables": []
    },
    {
      "title": "Apostolização",
      "level": 3,
      "paragraphs": [
        "A partir do 15º nível, como uma ação Livre, o clérigo pode escolher um número de aliados que estejam a até 30 metros, igual ao seu modificador de sabedoria. O Clérigo passa então a poder lançar suas magias de toque a partir destes alvos como se ele estivesse em seus lugares (por exemplo, um aliado a 60 metros tocando alguém ferido para que o Clérigo possa usar Curar Ferimentos). Essa habilidade dura por 1 minuto e pode ser utilizada 3 vezes por dia."
      ],
      "tables": []
    },
    {
      "title": "Apoteosis",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Clérigo, você nunca pode ter mais de um dos talentos de 20º nível da classe."
      ],
      "tables": []
    },
    {
      "title": "A última ceia",
      "level": 3,
      "paragraphs": [
        "Você pode lançar uma magia de 10º Ciclo, seu deus Define qual magia você recebe ou você pode criar sua própria Magia, caso decida criar sua magia escolha 3 magias que totalizam até 10 níveis, você cria uma magia com o custo e efeito combinado dessas magias, você não precisa preparar a magia escolhida por esta habilidade mas conjurá-la apenas uma vez por dia."
      ],
      "tables": []
    }
  ],
  "classTalents": [
    {
      "id": "talento-piedade-dos-anjos",
      "name": "Piedade dos Anjos",
      "prerequisite": "4º Nível de Clérigo",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Quando conjurar um feitiço de cura em si mesmo, pode escolher receber metade do valor que a magia iria restaurar como PVs temporários por 1 minuto ao invés de Cura. A partir do 12º Nível, você recebe os PVs temporários mesmo que a magia não fosse restaurar seus pontos de vida, mas apenas uma vez por dia."
      ]
    },
    {
      "id": "talento-mover-se-com-fe",
      "name": "Mover-se com Fé",
      "prerequisite": "4º Nível de Clérigo",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Depois de restaurar seus pontos de Vida, seja com uma magia de Cura ou Habilidade de Classe, você pode se movimentar 1,5 Metros em qualquer direção não ocupada. Este movimento não gera ataques de oportunidade. No 6º, 12º e 18º nível o deslocamento fornecido por esta habilidade aumenta em 1,5 metros."
      ]
    },
    {
      "id": "talento-palavras-da-vida",
      "name": "Palavras da Vida",
      "prerequisite": "4º Nível de Clérigo",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "A primeira vez em combate que você é atingido por um Ataque Corpo-a-Corpo pode imediatamente lançar uma magia de cura alvejando somente si mesmo."
      ]
    },
    {
      "id": "talento-de-corpo-e-alma",
      "name": "De Corpo e Alma",
      "prerequisite": "8º Nível de Clérigo",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Depois de utilizar “Canalizar Energia” você pode escolher ativar a habilidade uma segunda vez na mesma rodada, porém utilizando apenas metade dos dados originais da habilidade."
      ]
    },
    {
      "id": "talento-roda-do-destino",
      "name": "Roda do Destino",
      "prerequisite": "8º Nível de Clérigo",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Depois de conjurar uma magia de Necromancia, sua próxima magia nesta rodada, se tiver o descritor de Cura, tem seu custo reduzido em 1 (Mínimo 1). Depois de Conjurar uma magia de Cura, sua próxima magia nesta rodada, se tiver o descritor de Necromancia, tem seu custo reduzido em 1 (Minimo 1)."
      ]
    },
    {
      "id": "talento-gracas-de-dante",
      "name": "Graças de Dante",
      "prerequisite": "8º Nível de Clérigo",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Sempre que usar “Divina Comédia\" com sucesso, você recebe um bônus igual ao ND do morto-vivo afetado na CD de seu próximo “Divina Comédia”, o bônus máximo que você pode receber por esta habilidade é igual a seu Mod. Sab."
      ]
    },
    {
      "id": "talento-infusao-de-gloria",
      "name": "Infusão de Glória",
      "prerequisite": "12º Nível de Clérigo",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Sempre que você usa “Canalizar Energia” de forma consecutiva, você aumenta o número de dados da habilidade em 1, em até no Máximo 3 Dados adicionais. Por exemplo, um Clérigo de 12º na primeira rodada utilizaria um “Canalizar Energia” por 6d6, na rodada seguinte se utilizar a habilidade novamente o faria por 7d6, na terceira rodada por 8d6 e assim por diante até chegar em 9d6 na quarta rodada. Se em algum momento o Clérigo não utilizar esta habilidade durante uma rodada os dados dela são reduzidos em 1 até alcançar seu valor original."
      ]
    },
    {
      "id": "talento-evangelismo",
      "name": "Evangelismo",
      "prerequisite": "12º Nível de Clérigo",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Depois de conjurar uma magia de Necromancia e reduzir um inimigo a 0 ou menos PVs, sua próxima magia de cura de alvo único nesta rodada é Maximizada e Acelerada sem custo adicional. Depois de conjurar uma magia de cura e restaurar uma criatura acima de 0 PVs, sua próxima magia de Necromancia de alvo único nesta rodada é Maximizada e Acelerada sem custo adicional."
      ]
    },
    {
      "id": "talento-apatia-para-os-mortos",
      "name": "Apatia para os Mortos",
      "prerequisite": "12º Nível de Clérigo",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Sempre que usar “Divina Comédia\" com sucesso, você recebe um bônus igual ao ND do morto-vivo afetado em seus testes de Resistência, Jogadas de Ataque e Dano, o bônus máximo que você pode receber por esta habilidade é igual a metade de seu Mod. Sab. Este bônus dura até o final do combate."
      ]
    },
    {
      "id": "talento-a-luz-alcanca-a-todos",
      "name": "A Luz Alcança a Todos",
      "prerequisite": "16º Nível de Clérigo",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Sua habilidade “Apostolização” também passa a afetar suas habilidades de classe, permitindo que utilize “Canalizar Energia” e “Divina Comédia\" a partir de seus aliados. Porém, esta habilidade funciona apenas em criaturas que seu aliado esteja tocando."
      ]
    },
    {
      "id": "talento-irmaos-da-fe",
      "name": "Irmãos da Fé",
      "prerequisite": "16º Nível de Clérigo",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Se você e outro conjurador divino realizarem um descanso longo juntos vocês podem compartilhar seus conhecimentos. Em termos de regra vocês podem escolher magias conhecidas de ambos os conjuradores durante a preparação de magias. Isto não muda sua capacidade de conjurar magias, apenas estende sua lista de magias conhecidas."
      ]
    },
    {
      "id": "talento-contra-o-mesmo-inimigo",
      "name": "Contra o mesmo Inimigo",
      "prerequisite": "16º Nível de Clérigo",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Aliados que estejam dentro do alcance da sua habilidade “Divina Cómedia”, recebem um bônus de +4 em Jogadas de Ataque e Dano contra mortos-vivos."
      ]
    },
    {
      "id": "talento-banhado-na-gloria",
      "name": "Banhado na Glória",
      "prerequisite": "20º Nível de Clérigo",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você passa a ter usos ilimitados de “Canalizar Energia”, além disso aumenta seu alcance para 18m, por fim a habilidade sofre as mudanças abaixo de acordo com sua divindade.",
        "Canalizar Energia Positiva (Divindade Bondosa), Cura 10d12 PV de todas as criaturas aliadas na área e causa dano a mortos vivos escolhidos como dano sagrado na mesma proporção.",
        "Canalizar Energia Negativa (Divindade Maligna), Cura 10d12 PV para mortos-vivos escolhidos e causa a mesma quantia de dano profano em criaturas escolhidas.",
        "Canalizar Energia (Divindade Neutra), Escolha qualquer número de criaturas dentro do alcance da habilidade, elas Curam 10d8 PV, todas as outras criaturas dentro da área recebem o mesmo valor em dano sagrado."
      ]
    },
    {
      "id": "talento-luz-e-trevas",
      "name": "Luz e Trevas",
      "prerequisite": "20º Nível de Clérigo",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "No início de cada dia você pode escolher entre Corrupção e Salvação, de acordo com sua escolha, suas magias conjuradas sofrem as mudanças abaixo.",
        "Corrupção, A primeira vez na rodada que você conjurar uma magia de Alvo único que restaure pontos de vida, você pode escolher um inimigo qualquer a até 3 metros do alvo, o alvo sofre dano igual a metade da cura realizada, um teste de Fortitude (CD 10 + MdN + Mod. Sab) anula este efeito.",
        "Salvação, A primeira vez na rodada que você conjurar uma magia de Alvo único que cause Dano, você pode escolher um aliado qualquer a até 3 metros do alvo, o aliado recupera pontos de vida igual a metade do dano causado pela magia."
      ]
    },
    {
      "id": "talento-os-infernos-de-dante",
      "name": "Os Infernos de Dante",
      "prerequisite": "20º Nível de Clérigo",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Sua habilidade “Divina Comédia\" passa a afetar os Espíritos além de mortos-vivos, tem seu alcance aumentado para 18 Metros e requer apenas uma ação de movimento para utilizar ao invés de uma Ação padrão. Uma vez por dia você pode afetar um morto-vivo sem limite de nível e por fim gera um efeito de “Canalizar Energia” em uma área de 9 metros ao seu redor de acordo com seu Deus."
      ]
    }
  ]
} satisfies ClassDetail;
