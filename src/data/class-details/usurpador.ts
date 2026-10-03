import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "usurpador",
  "name": "Usurpador",
  "family": "Clérigo",
  "sourceDocId": "1zcFAmfV3YYP7pWH4ErSMjDB8K5XYVYLjsAMz9u5Oy_w",
  "sourceTitle": "Usurpador",
  "status": "complete",
  "editorialNotes": [],
  "basics": {
    "hitPoints": "um Usurpador começa com 16 pontos de vida (+ Mod. de Con) e ganha 4 PV (+mod. Con) por nível seguinte.",
    "trainedSkills": "Conhecimento(Religião) e outras 4 + mod. Inteligência.",
    "classSkills": "Adestrar Animais (Car), Conhecimento (Int), Cura (Sab), Identificar Magia (Int), Intuição (Sab), Meditação (Sab), Ofício (Int), Percepção (Sab).",
    "bonusTalents": "Usar Armaduras (leves), Usar Armas Simples, Resistência Aprimorada (Fortitude, Vontade)"
  },
  "progression": {
    "headers": [
      "Nível",
      "BBA",
      "",
      "Furto de Essência"
    ],
    "rows": [
      [
        "1º",
        "+0",
        "Aprender, Glutão",
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
        "",
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
        "Aprender, Essência da Metamagia",
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
        "",
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
        "",
        "5°"
      ],
      [
        "10º",
        "+5",
        "Absorção, Aprender, Chama Interior",
        ""
      ],
      [
        "11º",
        "+5",
        "",
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
        "",
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
        "Aprender, Evolução Essencial, Forma da Alma",
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
        "",
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
        "",
        "10º"
      ],
      [
        "20º",
        "+10",
        "Aprender, Forma Fluida",
        ""
      ]
    ]
  },
  "sections": [
    {
      "title": "Furto de Essência",
      "level": 3,
      "paragraphs": [
        "Um Usurpador é um tipo diferente de conjurador, ao invés de aprender magias como um conjurador normal ele aprender habilidades através da sua habilidade “Aprender”",
        "Tipo e níveis de Essência: O nível de Essência corresponde ao nível das criaturas na qual você pode utilizar de suas habilidades, nível para 0 para habilidades de Criaturas com ND 0 ou ½, nível 1 para habilidade de ND 1 e 2, nível 2 para Criaturas de ND 3 e 4 e assim por diante até o nível 10 para criaturas de ND 19 e 20.",
        "Habilidade-chave: sua habilidade para lançar Essências é Sabedoria.",
        "Essências Conhecidas: Existe um limite para o número de Essências que você pode “conhecer” simultaneamente, você pode possuir MdN + Mod. Sab. caso venha aprender uma nova essência enquanto já tiver o limite atual pode escolher uma essência qualquer para esquecer.",
        "Pontos de Essência: você tem um número de pontos de essência igual a 3 + Mod. Sab. Cada vez que avança de nível, recebe 2 de essência.",
        "Preparação de Essência: você não precisa preparar suas Essências com antecedência. Você pode lançar qualquer Essência que conheça, se tiver PE suficientes.",
        "Ativar Essência: Utilizar as Essências são as mesmas ações descritas nas habilidades originais, por exemplo, uma habilidade de Sopro de um Dragão é descrita como uma Ação Padrão, logo, o Usurpador utiliza uma ação padrão. Para habilidades que não possuem ações descritas ou são passivas como a Presença Aterradora de um Dragão, estas necessitam ser ativadas para entrar em efeito, e a ativação é feita por uma Ação Livre. Para habilidades que utilizem de Jogadas de Ataque, você usa seu Mod. Sab para elas e para CD, a CD se torna 10 + MdN + Mod. Sab. Uma essência fica ativa por 1 minuto mas você pode dispensá-la usando uma ação livre. Furto de Essência conta como capacidade de lançar magias divinas para efeitos de pré-requisito de talentos e classes de prestígio.",
        "As condições para ativar uma essência são as mesmas de conjurar uma magia."
      ],
      "tables": []
    },
    {
      "title": "Aprender",
      "level": 3,
      "paragraphs": [
        "No 1º nível, com uma ação completa, o Usurpador observa atentamente um único inimigo que esteja no combate até o momento que quiser parar ou trocar de alvo. Durante o período em que esta habilidade permanece ativa, o Usurpador abre totalmente a guarda, como se estivesse convidando o inimigo sendo observado a atacar. Qualquer ataque ou habilidade que inflija dano ou alguma condição negativa pode ser aprendida, um Ataque Natural de Garra de um Lobo (dano), um Toque Sombrio de uma Aparição (dano e condição negativa), Presença Aterradora de um Dragão (condição negativa). É importante ressaltar que o Usurpador só “aprende” habilidades de inimigos que não sejam do tipo Humanoide.",
        "Caso o ataque/habilidade seja bem sucedido e inflija dano (é necessário que você, perca PVs e sobreviva ao ataque), o Usurpador “aprende”, após o término do combate, o ataque de seu oponente que então pode ser usado com a habilidade “Furto de Essência” e para de observar o alvo (é necessário ativar a habilidade Aprender novamente caso queira outra), por exemplo: um Lobo acerta causando dano com um ataque natural de garra, 1d6+1 de dano, enquanto o Usurpador está utilizando o Aprender. Após o término do combate, a “magia” é completamente assimilada e pode ser utilizada através de “Furto de Essência“.",
        "No 5º nível nesta classe, Aprender passa a ser usado com uma Ação Padrão, no 10º nível nesta classe, Ação de movimento, no 15º nível nesta classe, Ação Livre, e finalmente no 20º nível nesta classe, a habilidade passa a ser Passiva, ou seja, está sempre ativa para todos as habilidades e ataques de qualquer inimigo (não está mais limitado a observar somente um único inimigo)."
      ],
      "tables": []
    },
    {
      "title": "Glutão",
      "level": 3,
      "paragraphs": [
        "No 1º nível, depois de “Aprender” uma habilidade, você recebe resistência contra aquele mesmo efeito igual ao seu Mod. Sab. ou seu nível nesta classe, o que for menor. Por exemplo, após “Aprender” o ataque natural de garra de um lobo 1d6+1 de dano, sempre que um lobo realiza o mesmo ataque contra você, você reduz o dano no valor de seu modificador. O mesmo se aplica para resistências e RE."
      ],
      "tables": []
    },
    {
      "title": "Essência da Metamagia",
      "level": 3,
      "paragraphs": [
        "Quando você invocar uma Essência pode escolher pagar um valor adicional em PEs para garantir a ele novos efeitos, você só pode escolher um dos efeitos da lista no momento da invocação.",
        "Essência Mutável, 2 PE, Escolha uma segunda Essência do mesmo nível ou inferior, no final desta rodada a Essência atual se transforma na segunda Essência escolhida.",
        "Ampliar Essência, 1 PE, o alcance da Essência aumenta em 1,5m caso seja um ataque corpo-a-corpo, 6m caso seja a distância e 4,5m caso seja um cone ou aura.",
        "Camuflar Essência, 1 PE, a essência parece parte de seu corpo normal, não possuindo nenhuma característica que possa distingui-la como uma arma.",
        "Essência Silenciosa, 1 PE, você pode ativar sua essência sem gestos ou verbalização."
      ],
      "tables": []
    },
    {
      "title": "Absorção",
      "level": 3,
      "paragraphs": [
        "Quando você derrota um inimigo (reduzindo seus PV para 0 ou menos), você recupera PEs igual ao ND da criatura."
      ],
      "tables": []
    },
    {
      "title": "Chama Interior",
      "level": 3,
      "paragraphs": [
        "A partir do 10º nível você passa a adicionar seu MdC às jogadas de dano e cura de suas essências."
      ],
      "tables": []
    },
    {
      "title": "Forma da Alma",
      "level": 3,
      "paragraphs": [
        "A duração das suas habilidades de “Furto de Essência” se torna uma hora."
      ],
      "tables": []
    },
    {
      "title": "Evolução Essencial",
      "level": 3,
      "paragraphs": [
        "Escolha três essências em sua lista, eles não passam mais a contar no seu limite de essências conhecidas e custam metade dos PEs originais para serem ativados. Durante um descanso longo, você pode escolher outras três essências para substituir os escolhidos por esta habilidade."
      ],
      "tables": []
    },
    {
      "title": "Forma Fluida",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Usurpador, você nunca pode ter mais de um dos talentos de 20º nível da classe."
      ],
      "tables": []
    }
  ],
  "classTalents": [
    {
      "id": "talento-devorar",
      "name": "Devorar",
      "prerequisite": "4º Nível de Usurpador",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Quando você faz uso da habilidade “Glutão” você recebe cura acelera 3 por 1 minuto. Este bônus aumenta para 6, 9, 12 e 15 no 8º, 12°, 16º e 20º nível."
      ]
    },
    {
      "id": "talento-autofagia",
      "name": "Autofagia",
      "prerequisite": "4º Nível de Usurpador",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Três vezes por dia você pode “Consumir” uma de suas Essências. Em termos de regra como uma ação de movimento você dissipa uma essência que esteja ativa e ganha PVs Temporário igual a duas vezes o custo original de invocação da essência (desconsiderando reduções de custo por outras habilidades). A partir do 10º nível você passa a ganhar quatro vezes o custo original da essência."
      ]
    },
    {
      "id": "talento-resistencia-lendaria",
      "name": "Resistência Lendária",
      "prerequisite": "4º Nível de Usurpador",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Uma vez por dia pode “Consumir” uma de suas essências para se livrar de um dos seguintes efeitos que o estejam afetando Abalado, Apavorado, Atordoado, Cego, Confuso, Enjoado, Enredado, Fascinado, Ofuscado, Paralisado ou Pasmo ou Surdo. Fazê-lo é uma reação e o Usurpador pode ativar esta habilidade mesmo que suas condições não permitam. No 12º Nível ele pode escolher dois efeitos e no 20º se liberta de todos os efeitos da lista que o estiverem afetando."
      ]
    },
    {
      "id": "talento-manipulacao-de-essencias",
      "name": "Manipulação de Essências",
      "prerequisite": "8º Nível de Usurpador",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Você passa a poder escolher quais criaturas dentro da área de suas essências são afetadas (Por exemplo, poderia fazer um sopro de dragão afetar apenas inimigos em sua área ao invés de todas as criaturas)"
      ]
    },
    {
      "id": "talento-sifao-de-poder",
      "name": "Sifão de Poder",
      "prerequisite": "8º Nível de Usurpador",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Você pode “sacrificar” duas essências ativas de nível igual para ativar uma essência com um nível acima sem pagar seu custo. Em termos de regra, você desativa duas essências que estejam ativas no momento para ativar uma terceira de nível acima sem pagar seu custo em PEs. Por exemplo, se tivesse duas essências de 1º nível ativo, poderia desativar ambas para ativar uma essência de 2º ciclo sem pagar seu custo em PEs."
      ]
    },
    {
      "id": "talento-surto-de-essencia",
      "name": "Surto de Essência",
      "prerequisite": "8º Nível de Usurpador",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Como reação, invoque uma Essência qualquer por metade de seu custo (Mínimo 1). Esta essência desaparece no fim do seu turno."
      ]
    },
    {
      "id": "talento-desalmado",
      "name": "Desalmado",
      "prerequisite": "12º Nível de Usurpador",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Quando você restaura PEs através da habilidade “Glutão” a CD para resistir suas essências aumenta em +3 por 1 minuto."
      ]
    },
    {
      "id": "talento-colheita-sombria",
      "name": "Colheita Sombria",
      "prerequisite": "12º Nível de Usurpador",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Suas Essências tem margem de crítico e multiplicador aumentado em +1."
      ]
    },
    {
      "id": "talento-conduite-de-alma",
      "name": "Conduite de Alma",
      "prerequisite": "12º Nível de Usurpador",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Na rodada que são criadas suas Essências tem +3 de JdA e Dano."
      ]
    },
    {
      "id": "talento-partilha-de-almas",
      "name": "Partilha de Almas",
      "prerequisite": "16º Nível de Usurpador",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Se você e outro Usurpador realizarem um descanso longo juntos vocês podem compartilhar seus conhecimentos. Em termos de regra vocês podem passar habilidades conhecidas através de “Furto de Essência” de um para o outro, ainda é necessário respeitar o número máximo de Essências conhecidas."
      ]
    },
    {
      "id": "talento-fome-de-alma",
      "name": "Fome de Alma",
      "prerequisite": "16º Nível de Usurpador",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "O Benefício de “Absorção” pode ser garantido a Aliados, caso não tenham PEs os Aliados recuperam PMs na mesma proporção e caso não tenham PMs e PEs recuperam PVs na mesma proporção."
      ]
    },
    {
      "id": "talento-professor-de-monstros",
      "name": "“Professor” de Monstros",
      "prerequisite": "16º Nível de Usurpador",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Durante um descanso longo você pode ensinar a até 1 + Mod. Sab. criaturas sobre uma das suas habilidades de “Furto de Essência”, as criaturas que você ensinou através dessa habilidade recebem um bônus igual metade do seu Mod. Sab. contra o efeito que você os ensinou. (Por exemplo se ensinou o ataque de um Lobo eles ganham metade do seu Mod. Sab. contra o ataque ou se ensinar o sopro de um dragão ganhariam metade do seu Mod. Sab no teste de Reflexo)"
      ]
    },
    {
      "id": "talento-o-desafio-dos-deuses",
      "name": "O Desafio dos Deuses",
      "prerequisite": "20º Nível de Usurpador",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Monstros, Fantasmas, Espiritos, Mortos-vivos, todos são criações do divino, assim como Humanoides e até itens mágicos, sua habilidade “Aprender” agora também afeta humanoides e até mesmo itens mágicos utilizados contra você. Por exemplo, se fosse atacado com uma espada com encantamento Flamejante enquanto apreender esta ativo, poderia adicionar tal ataque à sua lista, se fosse atingido por uma varinha de mísseis mágicos poderia também adicionar seu efeito a sua lista e assim por diante. Adicionalmente, não precisa mais “sobreviver” ao ataque, contanto que voce seja o alvo principal de uma habilidade ela pode ser assimilada mesmo que seja reduzido a 0 ou menos PVs ou que tenha sucesso no teste para resistir a habilidade. Por fim, você não precisa mais esperar até o final de um combate para adicionar uma essência a sua lista conhecida, se cumprir os requisitos da habilidade “Aprender” pode imediatamente assimilar a sua lista a habilidade que te afetou."
      ]
    },
    {
      "id": "talento-tempos-de-mudanca",
      "name": "Tempos de Mudança",
      "prerequisite": "20º Nível de Usurpador",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "“Essência da Metamagia” não possui mais um limite de ativações ou um custo por fazê-lo, em outras palavras pode ativar todas as Metamagias em suas essências sem custo adicional por fazê-lo, além disso as Metamagias sofrem as mudanças abaixo:",
        "Essência Mutável, Escolha uma segunda e terceira Essência do mesmo nível ou inferior, no final desta rodada a Essência atual se transforma na segunda Essência escolhida e na seguinte na terceira.",
        "Ampliar Essência, o alcance da Essência aumenta em 3m caso seja um ataque corpo-a-corpo, 12m caso seja a distância e 9m caso seja um cone ou aura.",
        "Camuflar Essência, a essência parece parte de seu corpo normal, não possuindo nenhuma característica que possa distingui-la como uma arma, passando a durar 24 horas.",
        "Essência Silenciosa, você pode ativar sua essência sem gestos ou verbalização.",
        "Essência Dupla, você pode ativar a mesma essência uma segunda vez com apenas uma ação sem custo adicional",
        "Por fim, você recebe +4 de Sabedoria permanentemente."
      ]
    },
    {
      "id": "talento-anatema",
      "name": "Anátema",
      "prerequisite": "20º Nível de Usurpador",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você dobra o número máximo de Essências que pode conhecer simultaneamente, seus PEs por nível se tornam 4 ao invés de 2 (Calcule seus PEs retroativamente), e por fim, a ND máxima de uma criatura da qual você pode aprender uma habilidade aumenta em 10. (Criaturas entre ND 21 e 30 se tornam essenciais de 10º nível)"
      ]
    }
  ]
} satisfies ClassDetail;
