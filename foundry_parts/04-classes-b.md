# Classes detalhadas — Parte 2


---

# Classe: usurpador

**Fonte:** `src/data/class-details/usurpador.ts`

~~~~typescript
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

~~~~


---

# Classe: bardo

**Fonte:** `src/data/class-details/bardo.ts`

~~~~typescript
import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "bardo",
  "name": "Bardo",
  "family": "Bardo",
  "sourceDocId": "1yP8e-b3DWnhQRBMSmmfQKWfNsbiZaa3kEJzPzMrq0Nk",
  "sourceTitle": "Bardo",
  "status": "complete",
  "editorialNotes": [],
  "basics": {
    "hitPoints": "um Bardo começa com 12 pontos de vida (+ Mod. de Con) e ganha 3 PV (+mod. Con) por nível seguinte.",
    "trainedSkills": "Atuação (Três instrumentos a sua escolha) e outras 4 + mod. Inteligência.",
    "classSkills": "Acrobacia (Des), Atletismo (For), Atuação (Car), Cavalgar(Des), Conhecimento (Int), Diplomacia (Car), Enganação (Car), Furtividade (Des), Identificar Magia (Int), Iniciativa (Des), Intuição (Sab), Jogatina (Car), Ladinagem (Des), Obter Informação (Car), Percepção (Sab).",
    "bonusTalents": "Usar Armaduras Leves, Usar Armas (simples e marciais), Usar Escudos, Resistência Aprimorada (Reflexo e Vontade)."
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
        "Conhecimentos de Bardo, Música de Bardo"
      ],
      [
        "2º",
        "+1",
        "Estilo Musical"
      ],
      [
        "3º",
        "+2",
        "Música de Bardo"
      ],
      [
        "4º",
        "+3",
        "Jack of All Trades"
      ],
      [
        "5º",
        "+3",
        "Música de Bardo"
      ],
      [
        "6º",
        "+4",
        "Autoconfiança, Força da Personalidade"
      ],
      [
        "7º",
        "+5",
        "Música de Bardo"
      ],
      [
        "8º",
        "+6",
        "Estilo Musical"
      ],
      [
        "9º",
        "+6",
        "Música de Bardo, Vida da Arte"
      ],
      [
        "10º",
        "+7",
        "Abre Alas"
      ],
      [
        "11º",
        "+8",
        "Música de Bardo"
      ],
      [
        "12º",
        "+9",
        "Música Persistente"
      ],
      [
        "13º",
        "+9",
        "Música de Bardo"
      ],
      [
        "14º",
        "+10",
        "Estilo Musical"
      ],
      [
        "15º",
        "+11",
        "Música de Bardo"
      ],
      [
        "16º",
        "+12",
        "Vida da Arte"
      ],
      [
        "17º",
        "+12",
        "Música de Bardo"
      ],
      [
        "18º",
        "+13",
        "Celebridade"
      ],
      [
        "19º",
        "+14",
        "Música de Bardo"
      ],
      [
        "20º",
        "+15",
        "Palavras da Criação, Artifex ad Vitam"
      ]
    ]
  },
  "sections": [
    {
      "title": null,
      "level": 3,
      "paragraphs": [
        "Conhecimentos de Bardo",
        "Com seu acervo de histórias e lendas, o bardo é um arquivo vivo de assuntos ligados a aventuras. Você pode fazer testes de qualquer perícia de Conhecimento como se fosse treinado nela, com um bônus igual a seu nível + modificador de Inteligência."
      ],
      "tables": []
    },
    {
      "title": "Música de Bardo",
      "level": 3,
      "paragraphs": [
        "Você começa com dois efeitos da lista abaixo, à sua escolha. No 3º nível, e a cada dois níveis seguintes, aprende um novo efeito. Todos os efeitos têm alcance de 9m e duração de 1 rodada, a menos que sua descrição diga o contrário. Usar esta habilidade é uma ação padrão, e ela pode ser usada um número de vezes por dia igual a 10 + seu nível + modificador de Carisma. Ela só afeta criaturas inteligentes (Int 3 ou mais) que possam ouvir o bardo e independente de seu número de ações você nunca pode utilizar a mesma música duas vezes na mesma rodada."
      ],
      "tables": []
    },
    {
      "title": "Estilo Musical",
      "level": 3,
      "paragraphs": [
        "Escolha um estilo entre os seguintes: Diva, Metal, Clássico, Velha Guarda e Freestyle. A cada 7 níveis você pode escolher outro tipo de estilo. Quando você utiliza músicas do estilo que tenha escolhido, elas recebem os benefícios descritos abaixo.",
        "Diva: Seu intuito é animar e renovar o ânimo de seus aliados, quando você utiliza uma música do Estilo Diva, pode escolher até 5 criaturas para seus efeitos ao invés de apenas uma.",
        "Metal: Quebrar, Destruir, música foi feita para se libertar e você garante isso, quando você utiliza uma música do Estilo Metal, aumenta seus dados de dano de D6 para D8.",
        "Clássico: Paciência, Tempo, a música não é feita do dia para a noite e nem deve ser tocada rapidamente, quando você utiliza uma música do Estilo Clássico, a CD de todas elas aumenta em 2.",
        "Velha Guarda: Sua música pode ser triste mas você sabe fazê-la alegrar, quando você utiliza uma música do Estilo Velha Guarda elas têm alcance 18 metros e podem afetar você além de outro alvo se desejar.",
        "Freestyle: Não existem regras para sua música, você faz o que quer, quando quer. Depois de usar uma música do estilo livre, seu deslocamento aumenta em 9 metros até o início de sua próxima rodada."
      ],
      "tables": []
    },
    {
      "title": "Jack of All Trades",
      "level": 3,
      "paragraphs": [
        "A partir do 4º nível você pode fazer testes de perícias que exigem treinamento sem ser treinado nelas. Além disso, você recebe um bônus de +1 em testes de perícias nas quais não é treinado."
      ],
      "tables": []
    },
    {
      "title": "Autoconfiança",
      "level": 3,
      "paragraphs": [
        "A partir do 6º nível você soma seu bônus de Carisma ou seu nível nesta classe (O que for menor) à sua classe de armadura. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver imobilizado, ou usando qualquer tipo de armadura ou escudo."
      ],
      "tables": []
    },
    {
      "title": "Força da Personalidade",
      "level": 3,
      "paragraphs": [
        "A partir do 6º nível você soma seu bônus de Sabedoria e Carisma em seus testes de Vontade ao invés de apenas um deles, além disso recebe uma perícia treinada adicional."
      ],
      "tables": []
    },
    {
      "title": "Vida da Arte",
      "level": 3,
      "paragraphs": [
        "A partir do 9º nível você adiciona 4 músicas de Bardo a sua lista mas não pode escolher duas da mesma lista. No 16º Pode escolher novamente outras 4 músicas mas desta vez de qualquer lista."
      ],
      "tables": []
    },
    {
      "title": "Abre Alas",
      "level": 3,
      "paragraphs": [
        "A partir do 10º nível no início de um combate pode como reação realizar duas músicas de bardo de sua lista que utilizem uma ação padrão ou menos."
      ],
      "tables": []
    },
    {
      "title": "Música Persistente",
      "level": 3,
      "paragraphs": [
        "A partir do 12º nível, a duração mínima das suas músicas de bardo aumenta para 3 rodadas."
      ],
      "tables": []
    },
    {
      "title": "Celebridade",
      "level": 3,
      "paragraphs": [
        "A partir do 18º nível sua música já se tornou reconhecida, seja uma Musa Inspiradora, um velho cantor rabugento de tavernas ou até mesmo uma figura sem rosto que sussurra nas tavernas noturnas sua música é difícil de confundir, você recebe um bônus permanente de +4 em testes de atuação (Este bônus não possui tipo acumulando com habilidades de classe). Além disso, quando uma pessoa encontra-o pela primeira vez, ela faz um teste de Inteligência contra o CD 10. Se o PdM for bem-sucedido, você tem um bônus de +5 em todos os testes de perícias baseadas em Carisma contra ele."
      ],
      "tables": []
    },
    {
      "title": "Palavras da Criação",
      "level": 3,
      "paragraphs": [
        "A partir do 20º nível você pode combinar duas músicas de bardo em apenas uma. Você escolhe duas músicas diferentes e as combina utilizando a maior ação entre as duas. Por exemplo, poderia utilizar Melodia Revigorante e Inspirar Grandeza como uma única ação padrão ou utilizar Roda Punk e Hinos noturnos em um único descanso longo."
      ],
      "tables": []
    },
    {
      "title": "Artifex ad Vitam",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Bardo, você nunca pode ter mais de um dos talentos de 20º nível da classe."
      ],
      "tables": []
    },
    {
      "title": "Músicas de Bardo",
      "level": 1,
      "paragraphs": [],
      "tables": []
    },
    {
      "title": "Melodia Revigorante (Estilo Diva):",
      "level": 4,
      "paragraphs": [
        "Com uma Ação Padrão você ou um aliado cura 2d6+Mod. Car. pontos de vida. No 4º, 8º, 12º, 16º e 20º Nível este valor aumenta em 2d6."
      ],
      "tables": []
    },
    {
      "title": "Cântico de Resiliência (Estilo Diva):",
      "level": 4,
      "paragraphs": [
        "Com uma Ação Padrão você ou um aliado recebe Cura Acelerada 3. No 8º e 16º Nível este valor aumenta em 6. Diferente de outras músicas, esta dura 1 minuto."
      ],
      "tables": []
    },
    {
      "title": "Inspirar Grandeza (Estilo Diva):",
      "level": 4,
      "paragraphs": [
        "Com uma Ação de Movimento você ou um aliado recebe 10 pontos de vida temporários. No 8º e 16º Nível este valor aumenta em 10."
      ],
      "tables": []
    },
    {
      "title": "Reaja! (Estilo Diva):",
      "level": 4,
      "paragraphs": [
        "Como reação você ou um aliado reduzem o próximo dano que iriam receber em 5. No 8º e 16º Nível este valor aumenta em 10."
      ],
      "tables": []
    },
    {
      "title": "Hinos Noturnos (Estilo Diva):",
      "level": 4,
      "paragraphs": [
        "Durante um descanso longo você entoa um cântico que inspira um conjurador presente. Você ou um aliado afetado por este hino recebe 2 PM adicionais temporários no próximo dia. Estes PMs são perdidos se não forem utilizados no dia seguinte e não se acumulam. No 8º e 16º Nível este valor aumenta em 4."
      ],
      "tables": []
    },
    {
      "title": "Ruído da Mandrágora (Estilo Metal):",
      "level": 4,
      "paragraphs": [
        "Com uma Ação Padrão, uma criatura a sua escolha, deve fazer um Teste de Fortitude. Se falhar, sofre 2d6+Mod. Car. pontos de dano Sônico. Se for bem-sucedida, recebe metade do dano. Esta habilidade funciona em qualquer tipo de criatura, independente de sua inteligência. No 4º, 8º, 12º, 16º e 20º Nível este valor aumenta em 2d6."
      ],
      "tables": []
    },
    {
      "title": "Rachar o Aço (Estilo Metal):",
      "level": 4,
      "paragraphs": [
        "Com uma Ação Padrão você causa 3d6+Mod. Car. pontos de dano Sônico a um objeto feito de Metal como Armaduras Médias e Pesadas, Escudos ou Construtos. Esta habilidade funciona em objetos e criaturas, independente de sua inteligência e mesmo que não sejam capazes de ouvir o bardo. No 4º, 8º, 12º, 16º e 20º Nível este valor aumenta em 3d6."
      ],
      "tables": []
    },
    {
      "title": "Inspiração do Coração Dragônico (Estilo Metal):",
      "level": 4,
      "paragraphs": [
        "Com uma Ação de Movimento você encanta um aliado com o elemento dos dragões, escolha entre Fogo, Ácido, Frio e Eletricidade, ataques daquele aliado causam 1d6 de dano adicional do tipo escolhido. No 8º e 16º Nível este valor aumenta em 1d6."
      ],
      "tables": []
    },
    {
      "title": "Metal! E Pesado! (Estilo Metal):",
      "level": 4,
      "paragraphs": [
        "Quando você ou um aliado for atingido por um golpe corpo a corpo, você pode como reação causar 1d6 de dano sônico na criatura que realizou o ataque. No 8º e 16º Nível este valor aumenta em 1d6."
      ],
      "tables": []
    },
    {
      "title": "Roda Punk (Estilo Metal):",
      "level": 4,
      "paragraphs": [
        "Durante um descanso longo você ou um aliado afetado por essa habilidade recebe +2 em Força, Destreza ou Constituição até o final do dia. No 8º e 16º Nível este valor aumenta em 2."
      ],
      "tables": []
    },
    {
      "title": "Canção Apavorante (Estilo Clássico):",
      "level": 4,
      "paragraphs": [
        "Com uma Ação Padrão uma criatura a sua escolha deve fazer um teste de Vontade (CD 10 + metade do seu nível + modificador de Carisma). Se falhar, fica abalada. Se for bem-sucedida, fica imune a este efeito por um dia. A Partir do 8º nível ela fica Apavorada."
      ],
      "tables": []
    },
    {
      "title": "Staggering Tempo (Estilo Clássico):",
      "level": 4,
      "paragraphs": [
        "Com uma Ação Padrão uma criatura a sua escolha deve fazer um teste de Vontade (CD 10 + metade do seu nível + modificador de Carisma). Se falhar, fica Lenta. Se for bem-sucedida, fica imune a este efeito por um dia. A Partir do 12º nível ela fica Enjoada além de Lenta."
      ],
      "tables": []
    },
    {
      "title": "9º Sinfonia (Estilo Clássico):",
      "level": 4,
      "paragraphs": [
        "Com uma Ação de Movimento você pode reduzir o valor da próxima jogada de ataque da criatura em 1. No 6º, 12º e 18º Nível este valor Diminui em -1 (Para -4 no 18º Nível)."
      ],
      "tables": []
    },
    {
      "title": "Contra Som (Estilo Clássico):",
      "level": 4,
      "paragraphs": [
        "Como reação você pode anular um efeito baseado em som, como o grito da Harpia, Som da Sereia ou até mesmo a música de outro bardo."
      ],
      "tables": []
    },
    {
      "title": "Audiência Cativa (Estilo Clássico):",
      "level": 4,
      "paragraphs": [
        "Com 1 minuto de preparo você pode fascinar todas as criaturas dentro do alcance de sua música. Todas as criaturas na área devem fazer um teste de Vontade (CD 10 + metade do seu nível + modificador de Carisma). Em caso de falha, a criatura fica fascinada pelo tempo que você continuar a música (máximo 10 minutos). Se você falhar, o alvo fica imune a este efeito por um dia. Uma criatura fascinada não pode realizar ações e sofre penalidade de -4 em testes de Percepção. Uma ameaça óbvia contra a criatura fascinada cancela este efeito."
      ],
      "tables": []
    },
    {
      "title": "Liberdade pra Viver (Estilo Velha Guarda):",
      "level": 4,
      "paragraphs": [
        "Com uma ação Padrão, um aliado à sua escolha recebe o efeito da magia Remover Paralisia. No 8º Nível pode garantir também o efeito de Remover Maldição e por fim no 16º pode garantir o efeito de Remover Encantamento."
      ],
      "tables": []
    },
    {
      "title": "Inspirar Coragem (Estilo Velha Guarda):",
      "level": 4,
      "paragraphs": [
        "Com uma Ação Padrão você ou um aliado recebe +2 na classe de armadura e testes de resistência. No 8º e 16º Nível este valor aumenta em +2."
      ],
      "tables": []
    },
    {
      "title": "Inspirar Competência (Estilo Velha Guarda):",
      "level": 4,
      "paragraphs": [
        "Com uma Ação de Movimento, você e seus aliados recebem um bônus de +2 em testes de perícia. No 6º, 12º e 18º Nível este valor aumenta em +2."
      ],
      "tables": []
    },
    {
      "title": "Para a Lua (Estilo Velha Guarda):",
      "level": 4,
      "paragraphs": [
        "Como reação você garante um bônus de +1 na jogada de ataque e dano no próximo ataque de um aliado.  No 4º, 8º, 12º, 16º e 20º nível este valor aumenta em 1."
      ],
      "tables": []
    },
    {
      "title": "Preparar o Clima (Estilo Velha Guarda):",
      "level": 4,
      "paragraphs": [
        "Durante um descanso longo, Você ou um aliado afetado por esta habilidade recebe +2 em Inteligência, Sabedoria ou Carisma até o final do dia. No 8º e 16º Nível este valor aumenta em 2."
      ],
      "tables": []
    },
    {
      "title": "Truques do Ofício (Estilo Livre):",
      "level": 4,
      "paragraphs": [
        "Com uma ação padrão, você gera um efeito similar a uma magia de nível 0. A CD de suas magias desta forma é 10 + Mod. Car. No 8º Nível passa a adicionar metade do seu nível nesta classe às CDs e no 16º o dano de suas magias conjuradas desta forma aumentam em 6 dados."
      ],
      "tables": []
    },
    {
      "title": "Espíritos da Música (Estilo Livre):",
      "level": 4,
      "paragraphs": [
        "Com uma ação Padrão, você invoca uma criatura para lutar ao seu lado, ela tem as mesmas características da magia Invocar Monstro 1 mas seu tipo é espírito. Você não precisa se concentrar para manter a criatura invocada e ela dura 1 minuto mas você pode ter apenas uma criatura a qualquer momento desta forma. No 4º, 8º, 12°, 16° e 20° nível você passa a invocar uma criatura do próximo nível (Invocar Monstro 2 no 4º e assim por diante.)"
      ],
      "tables": []
    },
    {
      "title": "No Ritmo da dança (Estilo Livre):",
      "level": 4,
      "paragraphs": [
        "Com uma ação de movimento, você recebe os benefícios da magia \"Compreender Idiomas”. No 8º nível passa a receber o efeito de Idiomas."
      ],
      "tables": []
    },
    {
      "title": "Nascido nas Ruas (Estilo Livre):",
      "level": 4,
      "paragraphs": [
        "Como reação você recebe os benefícios da magia Escudo Arcano até o início da sua próxima rodada. No 8º e 16º este bônus aumenta em +1."
      ],
      "tables": []
    },
    {
      "title": "Cânticos da Colheita (Estilo Livre):",
      "level": 4,
      "paragraphs": [
        "Durante um descanso longo, Você gera os efeitos da magia Bom Fruto mas seus frutos sempre recuperam 4 de vida. No 8º nível seus frutos passam a curar 20 de vida e finalmente no 16º você pode conjurar Banquete dos Heróis."
      ],
      "tables": []
    }
  ],
  "classTalents": [
    {
      "id": "talento-panic-at-the-disco",
      "name": "Panic at the Disco",
      "prerequisite": "4º Nível de Bardo",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Uma vez por rodada depois de ser atingido por um ataque corpo-a-corpo ou a distância você pode se deslocar 1,5 em qualquer direção como reação, essa ação não gera um ataque de oportunidade."
      ]
    },
    {
      "id": "talento-it-s-going-down",
      "name": "It's going Down",
      "prerequisite": "4º Nível de Bardo",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Depois de utilizar uma ação padrão para gerar um efeito de música de bardo, seu deslocamento aumenta em 9 metros até o final de seu turno. Esta habilidade é cumulativa com outros efeitos de classe."
      ]
    },
    {
      "id": "talento-bring-me-to-life",
      "name": "Bring me to Life",
      "prerequisite": "4º Nível de Bardo",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Quando você reduz uma criatura a 0 ou menos PVs com uma música de Bardo recebe PVs temporários igual ao nível da criatura derrotada."
      ]
    },
    {
      "id": "talento-encantar-flecha",
      "name": "Encantar Flecha",
      "prerequisite": "8º Nível de Bardo",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Você adquire a habilidade de carregar uma flecha com uma de suas músicas. O alcance da música passa a ser o alcance da flecha. Encantar a flecha e dispara-la requer uma ação completa. Note que a flecha continua causando seu dano normal, se atingir uma criatura ou objeto."
      ]
    },
    {
      "id": "talento-danca-de-guerra",
      "name": "Dança de Guerra",
      "prerequisite": "8º Nível de Bardo",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Quando você utiliza uma ação padrão para gerar uma música de Bardo, pode como parte da mesma ação realizar um ataque com uma Arma corpo-a-corpo que esteja utilizando."
      ]
    },
    {
      "id": "talento-musica-sem-fronteiras",
      "name": "Música sem Fronteiras",
      "prerequisite": "8º Nível de Bardo",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Suas músicas de Bardo passam a afetar criaturas mesmo que sua inteligência seja menor do que 3."
      ]
    },
    {
      "id": "talento-corda-sublime",
      "name": "Corda Sublime",
      "prerequisite": "12º Nível de Bardo",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Todas as flechas que você dispara se tornam mágicas (mas apenas para você) como itens mágicos médios do retorno, fornecendo um bônus de +1 nas jogadas de ataque e dano e retornando para você no final de seu turno."
      ]
    },
    {
      "id": "talento-ao-alcance-da-voz",
      "name": "Ao Alcance da Voz",
      "prerequisite": "12º Nível de Bardo",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Depois de utilizar uma música de bardo, seu próximo ataque corpo-a-corpo tem +2 em jogadas de Ataque e Dano além de margem de ameaça e multiplicador de crítico aumentado em +1."
      ]
    },
    {
      "id": "talento-aumenta-o-volume",
      "name": "Aumenta o Volume",
      "prerequisite": "12º Nível de Bardo",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Suas músicas de Bardo passam a afetar criaturas mesmo que elas não possam te ouvir."
      ]
    },
    {
      "id": "talento-minueto-do-viajante",
      "name": "Minueto do Viajante",
      "prerequisite": "16º Nível de Bardo",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Você aprende a música “9° Sinfonia”, e passa a poder utilizá-la como reação ao invés de Movimento se assim desejar. Além disso, pode escolher um segundo inimigo para encantar com a música utilizando apenas de uma ação."
      ]
    },
    {
      "id": "talento-trovador",
      "name": "Trovador",
      "prerequisite": "16º Nível de Bardo",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Você aprende a música “Inspiração do Coração Dracônico”, e passa a poder utilizá-la como reação ao invés de Movimento se assim desejar. Além disso, pode escolher um segundo aliado para encantar com a música utilizando apenas de uma ação."
      ]
    },
    {
      "id": "talento-atencao-por-favor",
      "name": "Atenção por Favor",
      "prerequisite": "16º Nível de Bardo",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Suas músicas de Bardo que ocorrem durante um descanso longo passam a poder afetar um número de criaturas igual a seu nível nesta classe."
      ]
    },
    {
      "id": "talento-mestre-da-arte",
      "name": "Mestre da Arte",
      "prerequisite": "20º Nível de Bardo",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você aprende todos os Estilos da habilidade “Estilos Musicais”, O bônus de celebridade aumenta para +8. Por fim, pode gastar uma semana para criar uma Obra Prima homenageando uma pessoa ou grupo. Todas essas pessoas homenageadas recebem 3 pontos de ação que duram entre as sessões, e passam a contar como 4 níveis acima de seu nível real para todos os seus benefícios de pontos de ação, por um mês. Após criar esta obra prima você não pode criar outra por 3 meses."
      ]
    },
    {
      "id": "talento-musa-inspiradora",
      "name": "Musa Inspiradora",
      "prerequisite": "20º Nível de Bardo",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você e seus aliados adicionam seu Modificador de Carisma a seus testes de Iniciativa se forem capazes de vê-lo, quando você presta ajuda sempre fornece um bônus mínimo de +10 nos testes de seus aliados mesmo que não seja treinado na perícia. Se torna imune a encantamento e sempre tem sucesso nos testes de resistência contra efeitos de transmutação. Por fim, você pode usar testes de atuação no lugar de suas jogadas de ataque."
      ]
    },
    {
      "id": "talento-deus-grego",
      "name": "Deus Grego",
      "prerequisite": "20º Nível de Bardo",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Seu carisma aumenta em +4. Seu número de músicas de Bardo por dia aumenta para 20 + seu nível + modificador de carisma assim como o alcance de todas elas dobram, por fim escolha um dos Estilos da habilidade “Estilos Musicais” que você possua ela muda para os efeitos abaixo.",
        "Diva: Quando você utiliza uma música do Estilo Diva, pode escolher até 10 criaturas para seus efeitos ao invés de apenas uma. Os efeitos de cura provenientes do Estilo são dobrados.",
        "Metal: Quando você utiliza uma música do Estilo Metal, aumenta seus dados de dano de D6 para D12, Além disso quando utiliza um uma música da escola pode escolher até 5 criaturas.",
        "Clássico: Quando você utiliza uma música do Estilo Clássico, Aplica sua Carisma a CD delas duas vezes.",
        "Velha Guarda: Quando você utiliza uma música do Estilo Velha Guarda elas têm alcance 18 metros e afetam todos os aliados dentro de seu alcance.",
        "Freestyle: Você pode utilizar as músicas do Estilo livre que requeiram uma ação padrão como uma ação de Movimento, além disso depois de usar uma música do estilo livre, seu deslocamento aumenta em 18 metros até o início de sua próxima rodada."
      ]
    }
  ]
} satisfies ClassDetail;

~~~~


---

# Classe: barbaro

**Fonte:** `src/data/class-details/barbaro.ts`

~~~~typescript
import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "barbaro",
  "name": "Bárbaro",
  "family": "Bárbaro",
  "sourceDocId": "1jzwazsVg9jARiJvt4Xdic2lpAPLoktt7PTn15e1kvJw",
  "sourceTitle": "Bárbaro",
  "status": "complete",
  "editorialNotes": [],
  "basics": {
    "hitPoints": "um Bárbaro começa com 24 pontos de vida (+ Mod. de Con) e ganha 6 PV (+ Mod. Con) por nível seguinte.",
    "trainedSkills": "Conhecimento (Natureza) e outras 4 + mod. Inteligência. (Mínimo 4)",
    "classSkills": "Adestrar Animais (Car), Atletismo (For), Cavalgar (Des), Iniciativa (Des), Intimidação (Car), Ofício (Int), Percepção (Sab), Sobrevivência (Sab).",
    "bonusTalents": "Usar Armaduras (leves e médias), Usar Armas (simples e marciais), Usar Escudos, Resistência Aprimorada (Fortitude)."
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
        "Fúria 1/dia, Movimento Rápido 1,5m"
      ],
      [
        "2º",
        "+2",
        "Esquiva Sobrenatural"
      ],
      [
        "3º",
        "+3",
        "Instinto Selvagem+1, Gritos de Poder"
      ],
      [
        "4º",
        "+4",
        "Fúria 2/dia"
      ],
      [
        "5º",
        "+5",
        "Esquiva Sobrenatural Aprimorada, Movimento Rápido 3m"
      ],
      [
        "6º",
        "+6",
        "Pele de Aço, Gritos de Poder"
      ],
      [
        "7º",
        "+7",
        ""
      ],
      [
        "8º",
        "+8",
        "Fúria 3/dia"
      ],
      [
        "9º",
        "+9",
        "Instinto Selvagem +2, Gritos de Poder"
      ],
      [
        "10º",
        "+10",
        "Movimento Rápido 4,5m"
      ],
      [
        "11º",
        "+11",
        "Fúria Maior"
      ],
      [
        "12º",
        "+12",
        "Fúria 4/dia, Gritos de Poder"
      ],
      [
        "13º",
        "+13",
        ""
      ],
      [
        "14º",
        "+14",
        "Vontade Inabalável"
      ],
      [
        "15º",
        "+15",
        "Instinto Selvagem +3, Gritos de Poder, Movimento Rápido 6m"
      ],
      [
        "16º",
        "+16",
        "Fúria 5/dia"
      ],
      [
        "17º",
        "+17",
        "Fúria Incansável"
      ],
      [
        "18º",
        "+18",
        "Gritos de Poder"
      ],
      [
        "19º",
        "+19",
        ""
      ],
      [
        "20º",
        "+20",
        "Fúria 6/dia, Fúria Poderosa, Movimento Rápido 7,5m, Ápice"
      ]
    ]
  },
  "sections": [
    {
      "title": "Fúria",
      "level": 3,
      "paragraphs": [
        "Você pode invocar uma fúria selvagem, tornando-se temível por um curto período de tempo. Quando você usa essa habilidade, recebe +4 em Força e Constituição, mas sofre uma penalidade de –2 na classe de armadura. Além disso, não pode executar nenhuma ação que exige paciência ou concentração (como usar a perícia Furtividade ou lançar magias).",
        "Usar esta habilidade é uma ação livre e dura um número de rodadas igual a 3 + seu modificador de Constituição (mas você pode terminá-la antes, se quiser).",
        "Quando a fúria termina, você fica fatigado durante um minuto. Um bárbaro só pode entrar em fúria uma vez por encontro.",
        "No 1º nível ele pode usar sua fúria uma vez por dia. No 4º nível, e a cada 4 níveis seguintes, recebe uma utilização diária adicional (máximo 6 vezes por dia no 20º nível)."
      ],
      "tables": []
    },
    {
      "title": "Movimento Rápido",
      "level": 3,
      "paragraphs": [
        "Seu deslocamento aumenta em +1,5m. No 5º, 10º, 15° e 20° Nível ela aumenta novamente em +1,5m."
      ],
      "tables": []
    },
    {
      "title": "Esquiva Sobrenatural",
      "level": 3,
      "paragraphs": [
        "No 2º nível, seus instintos ficam tão apurados que você consegue reagir ao perigo antes que seus sentidos percebam. Você nunca fica desprevenido. Caso você já tenha recebido esquiva sobrenatural de outra classe, você recebe esquiva sobrenatural aprimorada."
      ],
      "tables": []
    },
    {
      "title": "Instinto Selvagem",
      "level": 3,
      "paragraphs": [
        "No 3º nível, você recebe +1 em testes de Iniciativa, Reflexos e Vontade. A cada seis níveis seguintes, esse bônus aumenta em +1."
      ],
      "tables": []
    },
    {
      "title": "Gritos de Poder",
      "level": 3,
      "paragraphs": [
        "No 3. nível e a cada 3 níveis seguintes, Você recebe dois gritos de poder da lista a partir da sessão Gritos de Poder. Você só pode usar um grito quando estiver em fúria, e cada grito consome certa quantidade de rodadas da duração da sua habilidade fúria. Usar um grito é uma ação livre mas só pode ser feito uma vez por rodada, os efeitos que não são instantâneos terminam quando a fúria termina. A CD dos testes de resistência contra os gritos de poder é 10 + MdN + mod. Con."
      ],
      "tables": []
    },
    {
      "title": "Esquiva Sobrenatural Aprimorada",
      "level": 3,
      "paragraphs": [
        "A partir do 5º nível, você consegue lutar contra diversos inimigos como se fossem apenas um. Você não pode ser flanqueado."
      ],
      "tables": []
    },
    {
      "title": "Pele de Aço",
      "level": 3,
      "paragraphs": [
        "A partir do 6º nível, o Bárbaro recebe RD e RE(Todas) igual o seu modificador de Constituição.",
        "Esta RD só pode ser vencida por Aço-rubi. Esta habilidade só funciona se você não estiver usando qualquer tipo de armadura."
      ],
      "tables": []
    },
    {
      "title": "Fúria Maior",
      "level": 3,
      "paragraphs": [
        "No 11º nível, o bônus fornecido pela fúria aumenta para +6 de Força e Constituição e sua duração aumenta para 5 + seu modificador de Constituição."
      ],
      "tables": []
    },
    {
      "title": "Vontade Inabalável",
      "level": 3,
      "paragraphs": [
        "No 14º nível, você se torna imune a medo e encantamento."
      ],
      "tables": []
    },
    {
      "title": "Fúria Incansável",
      "level": 3,
      "paragraphs": [
        "A partir do 17º nível, você não fica mais fatigado quando sua fúria termina e pode usá-la múltiplas vezes no mesmo encontro."
      ],
      "tables": []
    },
    {
      "title": "Fúria Poderosa",
      "level": 3,
      "paragraphs": [
        "No 20º, o bônus fornecido pela fúria aumenta para +8 de Força e Constituição e sua duração aumenta para 10 + seu modificador de Constituição."
      ],
      "tables": []
    },
    {
      "title": "Ápice",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Bárbaro, você nunca pode ter mais de um dos talentos de 20º nível da classe."
      ],
      "tables": []
    },
    {
      "title": "Gritos de Poder",
      "level": 1,
      "paragraphs": [],
      "tables": []
    },
    {
      "title": "Alcançar os Céus:",
      "level": 4,
      "paragraphs": [
        "Custo: 1 Rodada",
        "O bárbaro recebe um bônus de +8 em seus testes de Atletismo."
      ],
      "tables": []
    },
    {
      "title": "Alerta de Perigo",
      "level": 4,
      "paragraphs": [
        "Custo: 2 Rodadas",
        "O bárbaro usa este grito para alertar os seus aliados. Todos os aliados em um raio de 5km ficam cientes de que há perigo na localização aproximada do bárbaro."
      ],
      "tables": []
    },
    {
      "title": "Amuleto",
      "level": 4,
      "paragraphs": [
        "Custo: 1 Rodada",
        "Este grito protege o corpo contra magias. O bárbaro recebe resistência à magia +2."
      ],
      "tables": []
    },
    {
      "title": "Berro Doloroso",
      "level": 4,
      "paragraphs": [
        "Custo: 4 Rodadas",
        "Este grito causa 4d6+MdN+Mod. Con pontos de dano sônico em um cone de 9m, criaturas na área podem realizar um teste de Fortitude para reduzir o dano à metade."
      ],
      "tables": []
    },
    {
      "title": "Chefe de Guerra",
      "level": 4,
      "paragraphs": [
        "Custo: 2 Rodada",
        "Todos os aliados do bárbaro, em um raio de 9m recebem um bônus de +1 em todas as jogadas de ataque e 5 + Mod. Con PVs temporário."
      ],
      "tables": []
    },
    {
      "title": "Cicatrizar",
      "level": 4,
      "paragraphs": [
        "Custo: 2 Rodadas",
        "O bárbaro recebe cura acelerada 5."
      ],
      "tables": []
    },
    {
      "title": "Coordenar",
      "level": 4,
      "paragraphs": [
        "Custo: 2 Rodadas",
        "Todos os aliados do bárbaro em um raio de 9m recebem +4 em testes de Acrobacia, Atletismo, Cavalgar e Intimidação."
      ],
      "tables": []
    },
    {
      "title": "Desdém",
      "level": 4,
      "paragraphs": [
        "Custo: 4 Rodadas",
        "O bárbaro pode usar este grito quando for atingido por um ataque como reação, desde que não seja um acerto crítico. O bárbaro então ignora o dano recebido."
      ],
      "tables": []
    },
    {
      "title": "Dilacerar",
      "level": 4,
      "paragraphs": [
        "Custo: 2 Rodadas",
        "O bárbaro usa este grito quando acertar ataques com suas armas principal e secundária na mesma rodada, contra o mesmo oponente. Ele então causa dano adicional contra o alvo, igual ao dano da arma secundária."
      ],
      "tables": []
    },
    {
      "title": "Estouro de Manada",
      "level": 4,
      "paragraphs": [
        "Custo: 2 Rodadas",
        "Todos os aliados do bárbaro em um raio de 9m recebem +3m em seu deslocamento."
      ],
      "tables": []
    },
    {
      "title": "Finalizar",
      "level": 4,
      "paragraphs": [
        "Custo: 2 Rodadas",
        "O próximo ataque do bárbaro tem sua margem de ameaça aumentada em 2."
      ],
      "tables": []
    },
    {
      "title": "Morte Vinda dos Céus",
      "level": 4,
      "paragraphs": [
        "Custo: 1 Rodada",
        "Quando fizer uma investida, você pode saltar em direção a seu inimigo. Isso significa que você ignora terreno difícil e pode fazer a investida mesmo que não haja uma linha reta pelo solo (desde que nenhum dos obstáculos seja muito alto, segundo a decisão do mestre)."
      ],
      "tables": []
    },
    {
      "title": "Imposição",
      "level": 4,
      "paragraphs": [
        "Custo: 2 Rodadas",
        "Todas as criaturas adjacentes ao bárbaro devem ser bem-sucedidas em um teste de Vontade do Bárbaro ou ficarão fatigadas."
      ],
      "tables": []
    },
    {
      "title": "Quebrar",
      "level": 4,
      "paragraphs": [
        "Custo: 1 Rodada",
        "O bárbaro recebe um bônus de +8 em testes de Força ou jogadas de ataque para destruir objetos inanimados."
      ],
      "tables": []
    },
    {
      "title": "Sanguinolência",
      "level": 4,
      "paragraphs": [
        "Custo: 3 Rodadas",
        "O bárbaro usa este grito quando faz um acerto crítico com uma arma. O multiplicador de dano deste ataque é então aumentado em 1."
      ],
      "tables": []
    },
    {
      "title": "Súplica de Proteção",
      "level": 4,
      "paragraphs": [
        "Custo: 3 Rodadas",
        "O bárbaro recebe um bônus de +4 em CA."
      ],
      "tables": []
    },
    {
      "title": "Uivo dos Mortos",
      "level": 4,
      "paragraphs": [
        "Custo: 2 Rodadas",
        "Todas as criaturas em um raio de 6m devem ser bem-sucedidas em um teste de Vontade do Bárbaro ou ficarão abaladas."
      ],
      "tables": []
    },
    {
      "title": "Urro da Vida",
      "level": 4,
      "paragraphs": [
        "Custo: 1 Rodadas",
        "O bárbaro recebe 10 + Mod. Con PVs temporários."
      ],
      "tables": []
    },
    {
      "title": "Vingança",
      "level": 4,
      "paragraphs": [
        "Custo: 4 Rodadas",
        "O bárbaro usa este grito quando é acertado por um ataque corpo-a-corpo. Ele então tem direito a fazer um ataque corpo-a-corpo imediato como reação contra o inimigo que o acertou."
      ],
      "tables": []
    }
  ],
  "classTalents": [
    {
      "id": "talento-regeneracao-raivosa",
      "name": "Regeneração Raivosa",
      "prerequisite": "4º Nível de Bárbaro",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "O bárbaro recebe cura acelerada 5 enquanto estiver em Fúria, este bônus aumenta para 10 e 20 no 12º e 20º Nível de Bárbaro. Diferente de outros bônus, este talento se acumula com qualquer fonte de Cura Acelerada que o Bárbaro receba por esta classe."
      ]
    },
    {
      "id": "talento-imparavel",
      "name": "Imparável",
      "prerequisite": "4º Nível de Bárbaro",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Uma vez por dia enquanto estiver em fúria o Bárbaro pode se livrar de um dos seguintes efeitos que o estejam afetando Abalado, Apavorado, Atordoado, Cego, Confuso, Enjoado, Enredado, Fascinado, Ofuscado, Paralisado ou Pasmo ou Surdo. Fazê-lo é uma reação e o Bárbaro pode ativar esta habilidade mesmo que suas condições não permitam. No 12º Nível ele pode escolher dois efeitos e no 20º se liberta de todos os efeitos da lista que o estiverem afetando."
      ]
    },
    {
      "id": "talento-sede-de-sangue",
      "name": "Sede de Sangue",
      "prerequisite": "4º Nível de Bárbaro",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Enquanto estiver em Fúria sempre que você reduzir um inimigo a 0 ou menos pontos de vida recupera pontos de vida igual a metade do dano que derrubou a criatura."
      ]
    },
    {
      "id": "talento-voracidade",
      "name": "Voracidade",
      "prerequisite": "8º Nível de Bárbaro",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Quando voce estiver Combatendo com Duas Armas seu deslocamento aumenta em +6m e o dano de suas armas secundárias aumentam em uma categoria de tamanho."
      ]
    },
    {
      "id": "talento-mao-dos-titas",
      "name": "Mão dos Titãs",
      "prerequisite": "8º Nível de Bárbaro",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Quando estiver Combatendo com Duas Mãos e você realizar um acerto crítico aumenta a duração de sua Fúria em uma rodada. Caso não esteja em Fúria e realize um crítico, recebe uma Fúria de 1 Rodada mas não fica fatigado ao fim desta."
      ]
    },
    {
      "id": "talento-alma-de-bronze",
      "name": "Alma de Bronze",
      "prerequisite": "8º Nível de Bárbaro",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "A habilidade Pele de Aço passa a funcionar com Armaduras Médias e Leves."
      ]
    },
    {
      "id": "talento-transe-de-batalha",
      "name": "Transe de Batalha",
      "prerequisite": "12º Nível de Bárbaro",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Quando entrar em Fúria declare uma criatura que possa ver, sempre que realizar um Ataque Corpo a Corpo contra aquela criatura recebe um bônus cumulativo de +1 em jogadas de Ataque e Dano até um máximo de +4. Se durante sua fúria você atacar uma criatura que não a escolhida perde seus bônus além de receber uma penalidade -2 em jogadas de ataque e dano. A habilidade acaba junto de sua fúria ou se a criatura morrer."
      ]
    },
    {
      "id": "talento-massacrar",
      "name": "Massacrar",
      "prerequisite": "12º Nível de Bárbaro",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Quando causa dano com uma arma corpo a corpo, você pode rolar novamente qualquer resultado 1 das rolagens de dano da arma."
      ]
    },
    {
      "id": "talento-frenesi",
      "name": "Frenesi",
      "prerequisite": "12º Nível de Bárbaro",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Sua margem de ameaça e seu multiplicador de crítico com ataques corpo a corpo aumenta em +1."
      ]
    },
    {
      "id": "talento-banner-do-conquistador",
      "name": "Banner do Conquistador",
      "prerequisite": "16º Nível de Bárbaro",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Com uma ação padrão você finca o banner de sua tribo ao chão, aumentando o deslocamento de todos os seus aliados em +3m, cumulativo com outros bônus desta classe. Além disso, a Dano de magias de seus aliados aumenta em 1 dado. Os benefícios do Banner duram 1+Mod. Con rodadas e ele só pode ser utilizado uma vez por dia."
      ]
    },
    {
      "id": "talento-brado-de-batalha",
      "name": "Brado de Batalha",
      "prerequisite": "16º Nível de Bárbaro",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Com uma ação padrão você pode escolher até 1 + Mod. Con aliados você garante a eles o benefício de Pele de Aço por 3 rodadas. Esta habilidade pode ser utilizada uma vez por dia e eles utilizam o seu Mod. Con. para calcular os bônus da habilidade."
      ]
    },
    {
      "id": "talento-liderar-o-bando",
      "name": "Liderar o Bando",
      "prerequisite": "16º Nível de Bárbaro",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Com uma ação padrão você pode escolher até 1 + Mod. Con aliados você garante a eles o benefício de Fúria como se eles fossem bárbaros de 1º nível. Esta habilidade pode ser utilizada uma vez por dia e eles utilizam o seu Mod. Con. para calcular a duração de suas fúrias."
      ]
    },
    {
      "id": "talento-gritar-aos-ceus",
      "name": "Gritar aos Céus",
      "prerequisite": "20º Nível de Bárbaro",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Seus gritos de poder não consomem mais a duração de sua fúria."
      ]
    },
    {
      "id": "talento-superar-limites",
      "name": "Superar Limites",
      "prerequisite": "20º Nível de Bárbaro",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "O Bônus de sua Fúria aumenta para +16 de For. e Con. mas sua duração é reduzida para 1+Mod. Con."
      ]
    },
    {
      "id": "talento-controle-de-raiva",
      "name": "Controle de Raiva",
      "prerequisite": "20º Nível de Bárbaro",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você adiciona 4 usos diários a sua habilidade Fúria, enquanto está em fúria, você não fica inconsciente por estar com 0 ou menos pontos de vida e só morre se chegar em um valor negativo igual à duas vezes seus PV máximos."
      ]
    }
  ]
} satisfies ClassDetail;

~~~~


---

# Classe: ladino

**Fonte:** `src/data/class-details/ladino.ts`

~~~~typescript
import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "ladino",
  "name": "Ladino",
  "family": "Ladino",
  "sourceDocId": "1QMXxGiWT1TVS-IJRm7gdRmCxlquCHx5UwNt6YTGLtdU",
  "sourceTitle": "Ladino",
  "status": "complete",
  "editorialNotes": [],
  "basics": {
    "hitPoints": "um Ladino começa com 12 pontos de vida (+ Mod. de Con) e ganha 3 PV (+mod. Con) por nível seguinte.",
    "trainedSkills": "Ofício (Alquimia) e outras 4 + mod. Inteligência.",
    "classSkills": "Acrobacia (Des), Atletismo (For), Atuação (Car), Cavalgar (Des), Conhecimento (Int), Diplomacia (Car), Enganação (Car), Furtividade (Des), Iniciativa (Des), Intimidação (Car), Intuição (Sab), Jogatina (Car), Ladinagem (Des), Obter Informações (Car), Ofício (Int), Percepção (Sab).",
    "bonusTalents": "Usar Armaduras Leves, Usar Armas (simples e marciais), Usar Escudos, Resistência Aprimorada (Reflexo), Usar Venenos."
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
        "Ataque Furtivo (1d6), Encontrar Armadilhas"
      ],
      [
        "2º",
        "+1",
        "Sentir Armadilhas +2"
      ],
      [
        "3º",
        "+2",
        "Ataque Furtivo (2d6)"
      ],
      [
        "4º",
        "+3",
        "Maestria em Perícia, Golpe Incapacitante"
      ],
      [
        "5º",
        "+3",
        "Ataque Furtivo (3d6)"
      ],
      [
        "6º",
        "+4",
        "Sentir Armadilhas +4"
      ],
      [
        "7º",
        "+5",
        "Ataque Furtivo (4d6)"
      ],
      [
        "8º",
        "+6",
        "Negócios do Submundo, Mimetismo"
      ],
      [
        "9º",
        "+6",
        "Ataque Furtivo (5d6), Evasão"
      ],
      [
        "10º",
        "+7",
        "Sempre Pronto para Fugir, Sentir Armadilhas +6"
      ],
      [
        "11º",
        "+8",
        "Ataque Furtivo (6d6, Dano Adicional)"
      ],
      [
        "12º",
        "+9",
        "Ladinagem a Distância, Ataque Furtivo Improvisado"
      ],
      [
        "13º",
        "+9",
        "Ataque Furtivo (7d6), Esquiva Sobrenatural"
      ],
      [
        "14º",
        "+10",
        "Sentir Armadilhas +8"
      ],
      [
        "15º",
        "+11",
        "Ataque Furtivo (8d6)"
      ],
      [
        "16º",
        "+12",
        "Negócios do Submundo, Rolar os Dados"
      ],
      [
        "17º",
        "+12",
        "Ataque Furtivo (9d6)"
      ],
      [
        "18º",
        "+13",
        "Sentir Armadilhas +10"
      ],
      [
        "19º",
        "+14",
        "Ataque Furtivo (10d6)"
      ],
      [
        "20º",
        "+15",
        "Adaga no Anoitecer"
      ]
    ]
  },
  "sections": [
    {
      "title": null,
      "level": 3,
      "paragraphs": [
        "Encontrar Armadilhas",
        "Você pode usar a perícia Percepção para encontrar armadilhas."
      ],
      "tables": []
    },
    {
      "title": "Ataque Furtivo",
      "level": 3,
      "paragraphs": [
        "Você sabe aproveitar a distração do inimigo para atingi-lo em pontos vitais. A primeira vez na rodada que você atinge um alvo desprevenido ou flanqueado com um ataque corpo-a-corpo (ou à distância a até 9m), você causa 1d6 pontos de dano adicional do mesmo tipo de sua arma. A cada dois níveis seguintes, esse dano adicional aumenta em +1d6. A partir do 11º Nível você adiciona seu nível nesta classe ao dano da habilidade e pode utiliza-la uma segunda vez na mesma rodada."
      ],
      "tables": []
    },
    {
      "title": "Sentir Armadilhas",
      "level": 3,
      "paragraphs": [
        "No 2º nível, você adquire um sentido apurado contra armadilhas. Você recebe +2 em todos os testes contra armadilhas (Perícias, Resistências, CA). A cada três níveis seguintes, esse bônus aumenta em +2."
      ],
      "tables": []
    },
    {
      "title": "Maestria em Perícia",
      "level": 3,
      "paragraphs": [
        "A partir do 4º nível você pode fazer testes de perícias que exigem treinamento sem ser treinado nelas. Além disso, escolha 6 Perícias que você seja treinado, Usando essas perícias, você pode escolher 10 mesmo quando distraído ou sob pressão. Além disso, você adiciona metade de seu nível nesta classe a todos seus testes de Perícia."
      ],
      "tables": []
    },
    {
      "title": "Golpe Incapacitante",
      "level": 3,
      "paragraphs": [
        "Quando atingir uma criatura com um ataque furtivo, além de sofrer dano extra escolha um dos efeitos abaixo para causar:",
        "A criatura sofre uma penalidade de -2 em jogadas e testes por um minuto.",
        "A criatura sofre uma penalidade de -2 em CA por um minuto.",
        "A criatura tem seu deslocamento reduzido em 3 metros por um minuto.",
        "Após escolher um efeito desta lista a criatura fica imune ao efeito escolhido por uma hora."
      ],
      "tables": []
    },
    {
      "title": "Negócios do Submundo",
      "level": 3,
      "paragraphs": [
        "Você consegue fazer todos acreditarem que seus misteriosos elixires de água com açúcar funcionam tão bem quanto qualquer poção mágica incluindo a si mesmo. Com uma ação padrão você pode receber os benefícios de uma magia de até terceiro ciclo que seja pessoal e não instantânea. Contudo como isto não é um efeito mágico não pode ser dissipado. Você pode utilizar esta habilidade um número de vezes por dia igual a seu modificador de Inteligência (mínimo 1 vez por dia). A partir do 16º pode utilizar esta habilidade como uma ação livre, mas nunca mais de uma vez por rodada."
      ],
      "tables": []
    },
    {
      "title": "Mimetismo",
      "level": 3,
      "paragraphs": [
        "A partir do 8º nível você pode usar a perícia Furtividade para se esconder mesmo que esteja sendo observado."
      ],
      "tables": []
    },
    {
      "title": "Evasão",
      "level": 3,
      "paragraphs": [
        "A partir do 9º nível, quando sofre um ataque que permite um teste de Reflexos para reduzir o dano à metade, você não sofre nenhum dano se for bem-sucedido. Você ainda sofre dano normal se falhar no teste de Reflexos. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver imobilizado, ou usando armadura média ou pesada."
      ],
      "tables": []
    },
    {
      "title": "Sempre Pronto para Fugir",
      "level": 3,
      "paragraphs": [
        "A partir do 10º nível, você ignora penalidades de movimentação por terrenos difíceis e torna-se imune à condição Lento."
      ],
      "tables": []
    },
    {
      "title": "Ladinagem a Distância",
      "level": 3,
      "paragraphs": [
        "Você pode usar a perícia de ladinagem a uma distância de 9m. Fazer isso aumenta a CD do teste em +5, e você não pode escolher 10."
      ],
      "tables": []
    },
    {
      "title": "Ataque Furtivo Improvisado",
      "level": 3,
      "paragraphs": [
        "A partir do 12º nível, quando faz um ataque corpo-a-corpo ou à distância a até 9m, você pode declarar que ele será um ataque furtivo. Esta habilidade pode ser usada contra qualquer criatura, mesmo aquelas que normalmente seriam imunes. Você pode usar esta habilidade três vezes por dia, mas nunca mais de uma vez por rodada."
      ],
      "tables": []
    },
    {
      "title": "Esquiva Sobrenatural",
      "level": 3,
      "paragraphs": [
        "A partir do 13º nível, você pode lutar contra diversos inimigos como se fossem apenas um. Você não pode ser flanqueado e nunca fica desprevenido."
      ],
      "tables": []
    },
    {
      "title": "Rolar os Dados",
      "level": 3,
      "paragraphs": [
        "Você pode repetir um teste de ataque, perícia ou resistência. Você pode escolher com qual resultado deseja ficar. Você pode usar esta habilidade um número de vezes por dia igual a seu modificador de Inteligência (mínimo 1 vez por dia), mas nunca mais de uma vez por rodada."
      ],
      "tables": []
    },
    {
      "title": "Adaga no Anoitecer",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Ladino, você nunca pode ter mais de um dos talentos de 20º nível da classe."
      ],
      "tables": []
    }
  ],
  "classTalents": [
    {
      "id": "talento-rolamento-defensivo",
      "name": "Rolamento Defensivo",
      "prerequisite": "4º Nível de Ladino",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Quando você sofrer dano de um Ataque Corpo-a-Corpo ou a Distância, pode fazer um teste de Reflexo (CD = Metade do dano sofrido). Se for bem-sucedido, sofre apenas metade do dano. Você pode usar esta técnica apenas uma vez por dia. No 8 e 16º nível você recebe um uso diário adicional desta habilidade."
      ]
    },
    {
      "id": "talento-dados-marcados",
      "name": "Dados Marcados",
      "prerequisite": "4º Nível de Ladino",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Quando você rola um teste de resistência pode rolar também 1d4. Você soma o valor como bônus ao teste de resistência, você pode utilizar esta habilidade uma vez por dia. No 8 e 16º Nível você recebe dois usos adicionais da habilidade e este dado aumenta para 1d8 e 1d12 respectivamente."
      ]
    },
    {
      "id": "talento-sombra",
      "name": "Sombra",
      "prerequisite": "4º Nível de Ladino",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Sempre que for atingido por um ataque, efeito ou magia prejudicial, você pode rolar 1d6. Caso o resultado seja “1”, você ignora o efeito, seja ele qual for, você não pode se beneficiar desta habilidade mais de uma vez no mesmo combate."
      ]
    },
    {
      "id": "talento-trapaceiro-arcano",
      "name": "Trapaceiro Arcano",
      "prerequisite": "8º Nível de Ladino",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "A lista de Opções ou poções para \"Negócios do Submundo” não está mais limitada a magias pessoais e Instantâneas, porém agora se limita a efeitos de magias das escolas de Ilusão, Escuridão e Encantamento. Para estes efeitos a CD de qualquer Poção é 10 + MdN + Mod. Int."
      ]
    },
    {
      "id": "talento-sorria",
      "name": "Sorria",
      "prerequisite": "8º Nível de Ladino",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Quando você realiza uma finta em combate e tem sucesso seu alvo fica desprevenido contra todos os seus ataques até o fim da próxima rodada ao invés da rodada atualde apenas o próximo."
      ]
    },
    {
      "id": "talento-acido-como-meu-humor",
      "name": "Ácido como meu Humor",
      "prerequisite": "8º Nível de Ladino",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Quando você realiza um Ataque Furtivo com uma Arma Envenenada a CD dos seus venenos aumenta +4. Além disso, para você a fabricação de Venenos custa 1/6 de seu preço normal."
      ]
    },
    {
      "id": "talento-oportunista",
      "name": "Oportunista",
      "prerequisite": "12º Nível de Ladino",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Você recebe +3 em jogadas de ataque e dano contra inimigos que já sofreram dano de outras criaturas nesta rodada."
      ]
    },
    {
      "id": "talento-sanguinario",
      "name": "Sanguinário",
      "prerequisite": "12º Nível de Ladino",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Quando você faz um ataque furtivo, pode rolar novamente qualquer “1” rolado no dano (Somente os dados de bônus do ataque furtivo). Você pode rolar cada dado apenas uma vez."
      ]
    },
    {
      "id": "talento-faca-sua-sorte",
      "name": "Faça sua Sorte",
      "prerequisite": "12º Nível de Ladino",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Quando você Tem sucesso em uma manobra de finta, suas armas tem tem Margem de Ameaça e Multiplicador aumentada em +1 contra aquela criatura até o fim da próxima rodada."
      ]
    },
    {
      "id": "talento-campeao-do-submundo",
      "name": "Campeão do Submundo",
      "prerequisite": "16º Nível de Ladino",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Você pode garantir efeitos pessoais a seus aliados através da habilidade “Negócios do Submundo” porém apenas uma vez por dia por aliado."
      ]
    },
    {
      "id": "talento-linguagem-das-ruas",
      "name": "Linguagem das Ruas",
      "prerequisite": "16º Nível de Ladino",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Você e seus aliados podem se comunicar verbalmente na frente de outras pessoas, e não serão entendidos. Em combate, podem discutir planos complexos, formular estratégias e definir táticas, sem que o inimigo compreenda. Mensagens também podem ser escritas neste código. Nenhuma perícia ou habilidade é capaz de decifrá-los. Isto também permite que seus aliados conjurem magias ou ativem habilidades que necessitam de componentes somáticos sem serem compreendidos."
      ]
    },
    {
      "id": "talento-esquadrao-de-fuga",
      "name": "Esquadrão de Fuga",
      "prerequisite": "16º Nível de Ladino",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Seus aliados a até 9 metros de você recebem todos os benefícios da habilidade “Sempre Pronto para Fugir”, estes efeitos ainda duram por uma rodada após eles se afastarem de você."
      ]
    },
    {
      "id": "talento-assassino-frontal",
      "name": "Assassino Frontal",
      "prerequisite": "20º Nível de Ladino",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você pode realizar quatro Ataques Furtivos na mesma rodada ao invés de dois, além disso os dados da habilidade se tornam D8. Além disso você recebe 3 usos adicionais da habilidade “Ataque Furtivo Improvisado” e pode utilizar esta habilidade múltiplas vezes na mesma rodada."
      ]
    },
    {
      "id": "talento-sobre-o-veu-da-noite",
      "name": "Sobre o véu da Noite",
      "prerequisite": "20º Nível de Ladino",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você fica permanentemente sobre o efeito de “Invisibilidade Maior”, este efeito é suprimido caso caia inconsciente, você deseje que ele seja suprimido ou caso realize uma ação agressiva como atacar alguém (Neste caso você se torna invisível novamente no final de sua rodada). Inimigos com 5 níveis a menos que você não são capazes de ver através desta invisibilidade mesmo que normalmente possuam esta capacidade."
      ]
    },
    {
      "id": "talento-o-mestre-de-tudo",
      "name": "O Mestre de Tudo",
      "prerequisite": "20º Nível de Ladino",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "A habilidade “Mestre em Perícia\" muda para a seguinte habilidade:",
        "Você se torna treinado em todas as perícias, Usando perícias, você pode escolher 15 mesmo quando distraído ou sob pressão. Além disso, você adiciona seu nível nesta classe a todos seus testes de Perícia. Por fim você recebe +4 em Inteligência."
      ]
    }
  ]
} satisfies ClassDetail;

~~~~


---

# Classe: ninja

**Fonte:** `src/data/class-details/ninja.ts`

~~~~typescript
import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "ninja",
  "name": "Ninja",
  "family": "Ladino",
  "sourceDocId": "1PT89FusZOX5wAjmPjWUKQDuQjQ7QHjuCvnGFaG8PrZ4",
  "sourceTitle": "Ninja",
  "status": "complete",
  "editorialNotes": [],
  "basics": {
    "hitPoints": "um Ninja começa com 12 pontos de vida (+ Mod. de Con) e ganha 3 PV (+mod. Con) por nível seguinte.",
    "trainedSkills": "Conhecimento(Estratégia) e outras 4 + mod. Inteligência.",
    "classSkills": "Acrobacia (Des), Atletismo (For), Atuação (Car), Cavalgar (Des), Cura (Sab), Enganação (Car), Furtividade (Des), Ladinagem (Des), Obter Informação (Car), Iniciativa (Des), Intuição (Sab), Meditação (Sab), Percepção (Sab), Sobrevivência (Sab).",
    "bonusTalents": "Usar Armaduras (leves), Usar Armas (Simples), Resistência Aprimorada (Reflexos e Vontade, Ataque Desarmado Aprimorado."
  },
  "progression": {
    "headers": [
      "Nível",
      "BBA",
      "",
      "Truques"
    ],
    "rows": [
      [
        "1º",
        "+0",
        "Encontrar Armadilhas, Instrumentos Mortais",
        "-"
      ],
      [
        "2º",
        "+1",
        "Passo Ninja (+3, +4 / +4)",
        "-"
      ],
      [
        "3º",
        "+2",
        "Esquiva Engenhosa",
        "-"
      ],
      [
        "4º",
        "+3",
        "Truques Ninja",
        "2"
      ],
      [
        "5º",
        "+3",
        "Golpe Ninja",
        "2"
      ],
      [
        "6º",
        "+4",
        "Destemido",
        "2"
      ],
      [
        "7º",
        "+5",
        "Sentir Armadilhas +2",
        "3"
      ],
      [
        "8º",
        "+6",
        "Passo Ninja (+6, +8 / +8)",
        "3"
      ],
      [
        "9º",
        "+6",
        "Evasão",
        "3"
      ],
      [
        "10º",
        "+7",
        "",
        "4"
      ],
      [
        "11º",
        "+8",
        "Truque Rápido (Movimento)",
        "4"
      ],
      [
        "12º",
        "+9",
        "Sentir Armadilhas +4",
        "4"
      ],
      [
        "13º",
        "+9",
        "Esquiva Sobrenatural",
        "5"
      ],
      [
        "14º",
        "+10",
        "Passo Ninja (+9, +12 / +12)",
        "5"
      ],
      [
        "15º",
        "+11",
        "",
        "5"
      ],
      [
        "16º",
        "+12",
        "",
        "6"
      ],
      [
        "17º",
        "+12",
        "Sentir Armadilhas +6",
        "6"
      ],
      [
        "18º",
        "+13",
        "Truque Rápido (Livre)",
        "6"
      ],
      [
        "19º",
        "+14",
        "Demônio Ninja",
        "7"
      ],
      [
        "20º",
        "+15",
        "Passo Ninja (+12, +16 / +16), Chigyo",
        "7"
      ]
    ]
  },
  "sections": [
    {
      "title": "Encontrar Armadilhas",
      "level": 3,
      "paragraphs": [
        "Você pode usar a perícia Percepção para encontrar armadilhas."
      ],
      "tables": []
    },
    {
      "title": "Instrumentos Mortais",
      "level": 3,
      "paragraphs": [
        "Para um ninja as seguintes armas são consideradas simples:",
        "Cajado, Fukiya, Arco Curto, Kusari-Gama, Garra Feroz, Espada Curta, Shuriken, Adaga, Lança.",
        "Quando ele utiliza uma Arma simples, ele pode utilizar seu modificador de Inteligência para jogadas de Ataque ao invés de força ou destreza."
      ],
      "tables": []
    },
    {
      "title": "Passo Ninja",
      "level": 3,
      "paragraphs": [
        "Ninjas movimentam-se com rapidez, silêncio e graça, como sombras. No 2º nível, seu deslocamento aumenta em +3m e você recebe um bônus de +4 em testes de Acrobacia e Furtividade. No 8º nível, você se torna ainda mais rápido: seu deslocamento aumenta em +6m (total) e seus bônus em Acrobacia e Furtividade aumenta para +8. Além disso, a partir do 8º nível, você pode se levantar com uma ação livre, em vez de uma ação de movimento. No 14° nível, seu deslocamento aumenta em +9m (total) de deslocamento e seus bônus em Acrobacia e Furtividade aumentam para +12. Por fim, no 20º nível, seu deslocamento aumenta em +12m (total) de deslocamento e seus bônus em em Acrobacia e Furtividade aumentam para +16."
      ],
      "tables": []
    },
    {
      "title": "Esquiva Engenhosa",
      "level": 3,
      "paragraphs": [
        "A partir do 3º nível, você adiciona o seu modificador de Inteligência ou seu Nível nesta classe à sua CA (O que for menor). Você perde esta habilidade se estiver usando uma armadura média ou pesada."
      ],
      "tables": []
    },
    {
      "title": "Truques Ninja",
      "level": 3,
      "paragraphs": [
        "A partir do 4º nível, você está pronto para estrear o seu arsenal de truques. Usar um truque exige uma ação padrão e você precisa preparar seus Truques com antecedência. A cada dia deve praticar durante uma hora, e então escolher dois Truques para preparar. Esses Truques podem ser utilizados livremente durante o dia um total de vezes igual a 1 + Mod. Int. do Ninja. A cada 3 níveis o número de Truques que pode ser preparado aumenta em 1."
      ],
      "tables": []
    },
    {
      "title": "Golpe Ninja",
      "level": 3,
      "paragraphs": [
        "No 5º nível, você aprende a técnica do golpe ninja, um ataque que atinge pontos específicos e prova a superioridade das técnicas marciais do seu clã. Como uma ação padrão, você pode fazer um ataque qualquer com um bônus de +4 na jogada de ataque. Se você acertar, causa +1 ponto de dano por nível de ninja. Além disso, se este golpe reduzir um inimigo a 0 ou menos PV você recupera um uso de Truque Ninja."
      ],
      "tables": []
    },
    {
      "title": "Destemido",
      "level": 3,
      "paragraphs": [
        "O treinamento dos clãs envolve exposição a imagens aterrorizantes, através de alucinógenos e hipnotismo, para endurecer o ninja. No 6º nível, você se torna imune a medo."
      ],
      "tables": []
    },
    {
      "title": "Sentir Armadilhas",
      "level": 3,
      "paragraphs": [
        "No 7º nível, você adquire um sentido apurado contra armadilhas. Você recebe +2 em todos os testes contra armadilhas (Perícias, Resistências, CA). A cada quatro níveis seguintes, esse bônus aumenta em +2."
      ],
      "tables": []
    },
    {
      "title": "Evasão",
      "level": 3,
      "paragraphs": [
        "A partir do 9º nível, quando sofre um ataque que permite um teste de Reflexos para reduzir o dano à metade, você não sofre nenhum dano se for bem-sucedido. Você ainda sofre dano normal se falhar no teste de Reflexos. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver imobilizado, ou usando armadura média ou pesada."
      ],
      "tables": []
    },
    {
      "title": "Truque Rápido",
      "level": 3,
      "paragraphs": [
        "A Partir do 11º nível, você pode realizar seus truques ninjas com uma ação de movimento em vez de uma ação padrão. No 18º nível, você pode realizar seus truques ninjas como uma ação livre. Em qualquer caso, você ainda está restrito a um truque por rodada."
      ],
      "tables": []
    },
    {
      "title": "Esquiva Sobrenatural",
      "level": 3,
      "paragraphs": [
        "A partir do 13º nível, você pode lutar contra diversos inimigos como se fossem apenas um. Você não pode ser flanqueado."
      ],
      "tables": []
    },
    {
      "title": "Demônio Ninja",
      "level": 3,
      "paragraphs": [
        "A Primeira vez no dia em que você chega a 0 ou menos PVs você pode, como reação, realizar 2 truques ninja diferentes que tenha preparado e ficar com 1 PV, O único caso em que pode realizar múltiplos truques em uma mesma rodada."
      ],
      "tables": []
    },
    {
      "title": "Chigyo",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Ninja, você nunca pode ter mais de um dos talentos de 20º nível da classe."
      ],
      "tables": []
    },
    {
      "title": "Truques Ninja",
      "level": 1,
      "paragraphs": [],
      "tables": []
    },
    {
      "title": "Passos do Ninja",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: 4º Nível de Ninja",
        "Um ninja é capaz de escalar paredes ou pendurar-se no teto, com a mesma facilidade com que caminha no chão. Após usar este Truque você fica sob efeito da magia patas de aranha por uma hora. Este, contudo, não é um efeito mágico e não pode ser dissipado. Além disso, quando faz um teste de Atletismo para saltar, pode fazer outro teste de Atletismo para saltar, com o mesmo bônus do primeiro. Você soma o resultado dos dois testes para determinar a distância ou altura do seu salto."
      ],
      "tables": []
    },
    {
      "title": "Caminhar da Garça",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: 4º Nível de Ninja",
        "Você corre sobre água ou qualquer outro líquido (lama, areia movediça, ácido, lava…). Este truque não protege contra qualquer efeito que o líquido possa causar; você pode correr sobre a lava, mas ainda vai sofrer dano por calor. Além disso, até o fim do dia, a CD de testes de Sobrevivência para rastreá-lo aumenta em um valor igual à metade do seu nível nesta classe."
      ],
      "tables": []
    },
    {
      "title": "Estrepes Invisíveis",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: 4º Nível de Ninja",
        "Você larga os estrepes da cor do solo em um quadrado com 1,5m de lado a até 3m de você. Qualquer criatura que pisar nesta área sofre 1d4 + Mod. Int. pontos de dano e tem seu deslocamento reduzido à metade por um minuto. Criaturas têm direito a um teste de Percepção (CD 30) para perceber os estrepes antes de pisar neles. Qualquer um que perceba os estrepes pode passar pela área sem sofrer dano, mas com metade de seu deslocamento normal (ou pode simplesmente dar a volta…)."
      ],
      "tables": []
    },
    {
      "title": "Bomba de Fumaça",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: 4º Nível de Ninja",
        "Ninjas são mestres da arte de desaparecer subitamente. Quando você usa este truque, joga uma bomba de fumaça no chão e teletransporta-se para qualquer lugar a até 18m. Você então faz um teste de Furtividade oposto pelo teste de Percepção de qualquer oponente que possa percebê-lo. Oponentes que forem bem-sucedidos conseguem ver para onde você foi; aqueles que falharem, não. A partir de seu próximo turno, todas as regras para se esconder e ser percebido voltam a funcionar normalmente (ou seja, se você voltar a atacar seus inimigos, ele poderão percebê-lo)."
      ],
      "tables": []
    },
    {
      "title": "Rajada de Shuriken",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: 4º Nível de Ninja",
        "Quando usa este truque, você pode imediatamente disparar três shuriken em um único alvo. Faça três ataques à distância. Cada ataque que acertar causa 3 de dano adicional."
      ],
      "tables": []
    },
    {
      "title": "Falsificação e Intimidação",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: 8º Nível de Ninja",
        "Você pode fazer uma cópia perfeita de um livro, pergaminho, tabuleta ou outro tipo de documento escrito. A única diferença desta cópia para o original é a inclusão de uma mensagem no meio do texto. Esta é uma maneira segura de se comunicar com alguém, sem risco de ser detectado por meios mundanos ou mágicos, a não ser que um espião leia todo o documento para notar a mensagem fora de lugar. Também é eficiente como meio de ameaçar alguém você pode fazer um teste de Intimidação sem estar presente e com bônus de +5 através deste truque. Diferente de todos os outros, este truque requer um dia para ser utilizado. Este tempo representa o tempo necessário para obter a mensagem e criar uma cópia da mesma.Invisibilidade Ninja",
        "Pré-requisito: 8º Nível de Ninja",
        "O ninja cobre a si mesmo com um tecido com as mesmas cores e desenhos que o cenário ao seu redor, mesclando-se como um camaleão. Para usar este truque, você deve estar adjacente a uma parede ou objeto que tenha tamanho maior ou igual ao seu. Para todos os efeitos, você fica invisível enquanto existir uma parede ou objeto próximo na qual você possa se mesclar."
      ],
      "tables": []
    },
    {
      "title": "Pipa Ninja",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: 8º Nível de Ninja",
        "Depois de uma breve corrida, você abre uma pipa ou pandorga e decola. Você recebe deslocamento de voo de 18m por 3 minutos. Você deve estar a céu aberto para usar este truque."
      ],
      "tables": []
    },
    {
      "title": "Ilusão dos Espelhos",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: 8º Nível de Ninja",
        "Três cópias ilusórias suas aparecem ao seu redor. As duplicatas imitam suas ações, tornando difícil para um inimigo saber quem atacar. Você recebe CA+8. Quando três Ataques contra você errarem, as imagens desaparecem e o bônus é perdido. Um atacante precisa ser capaz de ver as cópias para ser confundido. Se você estiver invisível, ou o atacante estiver de olhos fechados, você não recebe o bônus (mas o atacante ainda sofre penalidades normais por não enxergar)."
      ],
      "tables": []
    },
    {
      "title": "Terror Ninja",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: 8º Nível de Ninja",
        "Apenas por olhar nos olhos de seus oponentes você é capaz de dobrar suas mentes fracas. Se você for bem-sucedido, todos os oponentes a até 9m devem fazer um teste de Vontade (CD 10 + Metade do Nível nesta Classe + Mod. Int.). Os oponentes que falhem ficam apavorados ou confusos (escolha a cada vez que usar o truque) por 1d4 rodadas. Inimigos que tiverem Sucesso ficam imunes a habilidade por 1 hora."
      ],
      "tables": []
    },
    {
      "title": "Toque da Morte",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: 16º Nível de Ninja",
        "Os mestres ninjas são capazes de paralisar ou mesmo matar com um mero toque, afetando os pontos de pressão no corpo do oponente. Seu próximo ataque corpo-a-corpo (que deve ser feito até o fim de seu próximo turno) é um toque da morte. Esse ataque não causa dano nos pontos de vida; em vez disso, causa 1 ponto de dano em uma habilidade física para cada Dois Modificadores de Inteligência do Ninja (Força, Destreza ou Constituição, à sua escolha). Atributos temporários como provenientes de Magias ou Habilidades não aumentam o dano causado por esta habilidade. Você só pode utilizar o Toque da Morte uma vez contra cada criatura. O dano causado por esta habilidade se recupera na taxa de 1 por dia."
      ],
      "tables": []
    },
    {
      "title": "Dança das Sombras",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: 16º Nível de Ninja",
        "Você cria um clone que age imediatamente depois de você, o clone tem as mesmas estatísticas e habilidades que você, mas possui apenas 1 PV. O Clone pode realizar um truque ou golpe por turno, além de movimentar-se, Ele dura 1 minuto se não for destruído e usa de seus usos diários para todos os propósitos."
      ],
      "tables": []
    },
    {
      "title": "Atacar os Fracos",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: 16º Nível de Ninja",
        "Quando um oponente a até 3 metros de você cai a 0 ou menos PVs por conta do ataque de um aliado, você pode utilizar sua reação para realizar um ataque de oportunidade contra um inimigo em sua margem de ameaça. Esta habilidade dura três rodadas."
      ],
      "tables": []
    },
    {
      "title": "Shunpo",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: 16º Nível de Ninja",
        "Você, instantaneamente, se move uma distância igual ao seu deslocamento base. Se você realizar um ataque contra um Inimigo adjacente ao seu destino na mesma rodada que utilizar este truque ele é considerado Desprevenido."
      ],
      "tables": []
    },
    {
      "title": "Mudar o Clima",
      "level": 4,
      "paragraphs": [
        "Pré-requisito: 16º Nível de Ninja",
        "Você pode criar qualquer condição climática: chuva, neve, ventos, névoas... em uma área a céu aberto com 60m de raio . Este truque afeta uma área de 60m de raio e dura um minuto. Você recebe camuflagem (20% de chance de erro e pode usar Furtividade mesmo sendo observado) enquanto estiver dentro da área."
      ],
      "tables": []
    }
  ],
  "classTalents": [
    {
      "id": "talento-truque-do-tronco",
      "name": "Truque do Tronco",
      "prerequisite": "4º Nível de Ninja",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Quando está prestes a sofrer um golpe, um ninja veterano pode desaparecer, fazendo o oponente acertar um tronco de madeira no lugar onde o ninja estava era tudo um embuste! Faça um teste de Furtividade após seu oponente ter acertado um ataque em você. Se você for bem-sucedido, evita o ataque e ressurge 1.5m em qualquer direção. Usar este truque é uma reação, mas ele só pode ser usado uma vez por combate. No 8º e 16º você pode utilizar este truque outra vez em combate."
      ]
    },
    {
      "id": "talento-manto-das-sombras",
      "name": "Manto das Sombras",
      "prerequisite": "4º Nível de Ninja",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Uma vez por dia você pode gastar sua reação e um uso de “Truque Ninja” para se livrar de um dos seguintes efeitos que o estejam afetando Abalado, Apavorado, Cego, Confuso, Enredado, Fascinado, Ofuscado, Pasmo ou Surdo. No 12º Nível ele pode escolher dois efeitos e no 20º se liberta de todos os efeitos da lista que o estiverem afetando. Você pode pode ativar esta habilidade mesmo que suas condições não permitam."
      ]
    },
    {
      "id": "talento-elusivo",
      "name": "Elusivo",
      "prerequisite": "4º Nível de Ninja",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Seus instintos ficam tão apurados que você consegue reagir ao perigo antes que seus sentidos percebam. Você nunca fica desprevenido."
      ]
    },
    {
      "id": "talento-tecnicas-sombrias",
      "name": "Técnicas Sombrias",
      "prerequisite": "8º Nível de Ninja",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Depois de utilizar um Truque Ninja você recebe um bônus de +4 em Furtividade cumulativo com outros bônus da classe e pode utilizar a perícia mesmo que esteja sendo observado."
      ]
    },
    {
      "id": "talento-simbolos-da-morte",
      "name": "Símbolos da Morte",
      "prerequisite": "8º Nível de Ninja",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Suas armas de “Instrumentos Mortais” são consideradas como uma categoria de tamanho acima para cálculo de dano."
      ]
    },
    {
      "id": "talento-tempestade-de-shurikens",
      "name": "Tempestade de Shurikens",
      "prerequisite": "8º Nível de Ninja",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "A primeira vez na rodada que você acerta Dois Ataques de Shurikens em um alvo, você tem direito a arremessar uma Shuriken adicional imediatamente."
      ]
    },
    {
      "id": "talento-premeditado",
      "name": "Premeditado",
      "prerequisite": "12º Nível de Ninja",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Depois de utilizar um Truque Ninja, seu próximo ataque Corpo-a-Corpo esta rodada tem +2 em Ataque e Dano. Se utilizar um dos seus “Instrumentos Mortais” para o Ataque recebe +4 em ambos ao invés disso."
      ]
    },
    {
      "id": "talento-encontrar-fraqueza",
      "name": "Encontrar Fraqueza",
      "prerequisite": "12º Nível de Ninja",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Você pode utilizar uma ação de Movimento para Estudar um Alvo que não o tenha percebido. Faça um teste de Percepção CD 10 + Nível da Criatura. Se tiver sucesso, seu próximo ataque corpo-a-corpo é um acerto crítico garantido."
      ]
    },
    {
      "id": "talento-truque-das-facas",
      "name": "Truque das Facas",
      "prerequisite": "12º Nível de Ninja",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Flechas e Shurikens que se beneficiem da habilidade “Instrumentos Mortais” disparadas por você, são consideradas como itens mágicos menores do retorno, fornecendo um bônus de +1 nas jogadas de ataque e dano e retornando para você no final de seu turno."
      ]
    },
    {
      "id": "talento-taticas-do-cla",
      "name": "Táticas do Clã",
      "prerequisite": "16º Nível de Ninja",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Com uma ação padrão você pode escolher até 1 + Mod. Int. aliados você garante a eles o benefício de “Passo Ninja” como se eles fossem Ninjas de 2º nível. Esta habilidade pode ser utilizada uma vez por dia e dura 1 minuto."
      ]
    },
    {
      "id": "talento-kyudan",
      "name": "Kyudan",
      "prerequisite": "16º Nível de Ninja",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Com uma ação padrão você pode escolher até 1 + Mod. Int. aliados você garante a eles o benefício de “Instrumentos Mortais” por 3 rodadas. Esta habilidade pode ser utilizada uma vez por dia e eles utilizam o seu Mod. Int. para calcular os bônus da habilidade."
      ]
    },
    {
      "id": "talento-espelhos-e-fumaca",
      "name": "Espelhos e Fumaça",
      "prerequisite": "16º Nível de Ninja",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Uma vez por dia, como uma ação completa, você e quaisquer aliados a até 6 metros são afetados pela magia porta dimensional. Você então faz um teste de Furtividade oposto pelo teste de Percepção de qualquer oponente que possa percebê-lo ou perceber algum membro de seu grupo. Oponentes que forem bem-sucedidos conseguem ver para onde você e seus aliados foram; aqueles que falharem, não."
      ]
    },
    {
      "id": "talento-mestre-arsenal",
      "name": "Mestre Arsenal",
      "prerequisite": "20º Nível de Ninja",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você não precisa mais preparar seus truques, tendo acesso a todos eles quando precisar, Além disso o número de usos diários da habilidade aumenta para 10  + Metade de seu nível nesta classe + Mod. Int."
      ]
    },
    {
      "id": "talento-mestre-das-sombras",
      "name": "Mestre das Sombras",
      "prerequisite": "20º Nível de Ninja",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Se você estiver em uma área coberta de sombras, pode se transportar instantaneamente para qualquer outra área coberta de sombras a até 30m (mesmo que essa área esteja atrás de uma parede). Usar esta habilidade é uma ação livre. Você então faz um teste de Furtividade oposto pelo teste de Percepção de qualquer oponente que possa percebê-lo. Oponentes que forem bem-sucedidos conseguem ver para onde você foi; aqueles que falharem, não. Além disso, quando atinge um alvo desprevenido utilizando um de seus “instrumentos mortais” causa 5d6 de dano adicional do mesmo tipo que sua arma."
      ]
    },
    {
      "id": "talento-hierarquia-do-cla",
      "name": "Hierarquia do Clã",
      "prerequisite": "20º Nível de Ninja",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Decidindo passar sua arte para outras gerações você passa a treinar futuras mentes na arte Ninja. Você recebe 10 Seguidores de 10º nível, em combate eles agem como Assassinos Veteranos (Regra de Aliados / Ataque furtivo +2d6 e fornece flanquear) fora dele, podem realizar missões e tarefas para você, você recebe +4 em Inteligência e pode utilizar seu bônus de inteligência no lugar de Carisma para perícias."
      ]
    }
  ]
} satisfies ClassDetail;

~~~~


---

# Classe: cavaleiro-arcano

**Fonte:** `src/data/class-details/cavaleiro-arcano.ts`

~~~~typescript
import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "cavaleiro-arcano",
  "name": "Cavaleiro Arcano",
  "family": "Mago",
  "sourceDocId": "17wGAnu4Y2rV7f3_jh6CRZVh8f0QHQuiALtrDfDDUw9A",
  "sourceTitle": "Cavaleiro Arcano",
  "status": "complete",
  "editorialNotes": [],
  "basics": {
    "hitPoints": "um Cavaleiro Arcano começa com 16 pontos de vida (+ Mod. de Con) e ganha 4 PV (+mod. Con) por nível seguinte.",
    "trainedSkills": "Conhecimento(Arcano) e outras 4 + mod. Inteligência.",
    "classSkills": "Atletismo (For), Cavalgar (Des), Conhecimento (Int), Identificar Magia (Int), Iniciativa (Des), Ofício (Int), Percepção (Sab).",
    "bonusTalents": "Usar Armaduras (leves e médias), Usar Armas (simples e marciais), Usar Escudo, Resistência Aprimorada (Fortitude, Reflexos)."
  },
  "progression": {
    "headers": [
      "Nível",
      "BBA",
      "",
      "Zaubers"
    ],
    "rows": [
      [
        "1º",
        "+1",
        "A Arte da Cópia, Zauberei",
        "0, 1º"
      ],
      [
        "2º",
        "+2",
        "",
        ""
      ],
      [
        "3º",
        "+3",
        "",
        "2°"
      ],
      [
        "4º",
        "+4",
        "",
        ""
      ],
      [
        "5º",
        "+5",
        "Novas Artes, Zadavat, Zauberei",
        "3°"
      ],
      [
        "6º",
        "+6",
        "",
        ""
      ],
      [
        "7º",
        "+7",
        "",
        "4°"
      ],
      [
        "8º",
        "+8",
        "",
        ""
      ],
      [
        "9º",
        "+9",
        "",
        "5°"
      ],
      [
        "10º",
        "+10",
        "Criação Acelerada, Sempre Preparado, Zadavat, Zauberei",
        ""
      ],
      [
        "11º",
        "+11",
        "",
        "6°"
      ],
      [
        "12º",
        "+12",
        "",
        ""
      ],
      [
        "13º",
        "+13",
        "",
        "7°"
      ],
      [
        "14º",
        "+14",
        "",
        ""
      ],
      [
        "15º",
        "+15",
        "Evolução do Arsenal, Surja!, Zadavat, Zauberei",
        "8°"
      ],
      [
        "16º",
        "+16",
        "",
        ""
      ],
      [
        "17º",
        "+17",
        "",
        "9°"
      ],
      [
        "18º",
        "+18",
        "",
        ""
      ],
      [
        "19º",
        "+19",
        "",
        "10º"
      ],
      [
        "20º",
        "+20",
        "Escolha da Vitória, O 10º Zauber, Zadavat, Zauberei",
        ""
      ]
    ]
  },
  "sections": [
    {
      "title": "Zauberei",
      "level": 3,
      "paragraphs": [
        "Você domina a escola de magia Zauberei, e aprendeu a preparar e evocar seus zauber armas, escudos e armaduras feitas de energia mágica pura. Cada cavaleiro arcano tem um arsenal único e pessoal de Zauber, que se expande e se modifica conforme ele ganha níveis nesta classe. Todos os Zauber, mesmo os básicos, não são considerados objetos; eles não podem ser alvo de efeitos que têm como alvo um objeto. Porém, como são um tipo modificado de magia arcana, são afetados normalmente por dissipar magia ou similares. Eles também não contam no limite de itens mágicos.",
        "Tipo e níveis de zauber: no 1º nível de cavaleiro arcano você pode evocar zauber de nível 0 (básico) e 1º nível. A cada dois níveis seguintes, você pode evocar zauber de um nível acima: no 3º nível pode evocar zauber de 2º nível, no 5º nível zauber de 3º nível e assim por diante até o 19º nível, quando você pode evocar zauber de 10º nível. O nível de um zauber corresponde ao bônus total da soma de seus poderes. Por exemplo, uma espada larga afiada da explosão flamejante +3 é um zauber de 6º nível. Zauber de nível 0 não têm bônus mágico, mas recebem as melhorias de um item obra-prima e são considerados mágicos para todos os efeitos.",
        "Zauber conhecidos: você começa o jogo com 4 zauber de nível 0 (básicos) e um número de zauber de 1º nível igual a 1 + mod de Inteligência. Cada vez que avançar de nível, você adiciona em sua lista dois novos zaubers de qualquer nível que possa evocar. Ao adicionar um zauber à lista, você define seu nome, tipo e habilidades, que não podem ser alterados depois de escolhidos. Por exemplo, ao avançar para o 5º nível, você pode adicionar ao seu arsenal um arco longo caçador anti-animais +1 (3º nível) chamado Rapina. A partir de então, esse equipamento fica disponível para ser preparado e evocado. Você só pode adicionar à lista equipamentos que saiba usar, e todos os equipamentos da sua lista devem ser apropriados para o seu tamanho. Você pode escolher Armas Alquímicas para esta habilidade, ao fazê-lo cria 5 cópias do item com essa habilidade mas pode fazê-lo apenas uma vez por dia. A aparência de um zauber é geralmente surreal e espalhafatosa, sendo facilmente distinguível de um equipamento comum.",
        "Pontos de Magia: você tem um número de pontos de magia (PM) igual a 3 + modificador de Inteligência. Cada vez que avança de nível, recebe 3 PM.",
        "Preparação de zauber: você precisa preparar seus Zaubers com antecedência. A cada dia deve estudar durante uma hora, e então escolher um número igual a Metade do Nível + Mod. Int. de Zaubers para preparar. Esses Zaubers podem ser conjurados livremente durante o dia com os PMs do Cavaleiro Arcano, podendo receber efeitos de habilidades de classe.",
        "Evocação de zauber: você pode evocar um zauber que tenha preparado usando uma ação de movimento. O zauber evocado surge em suas mãos, ou vestido em você, caso seja uma armadura, contanto que haja espaço para ele aparecer (uma ou mais mãos livres ou espaço para a armadura). Um zauber evocado fica ativo por uma hora, mas você pode dispensá-lo usando uma ação livre. Evocar Zauber conta como capacidade de lançar magias arcanas para efeitos de pré-requisito de talentos e classes de prestígio. Zauber de ataque à distância não usam munição: flechas, virotes e balas se formam magicamente quando você empunha a arma, mas ainda usam as regras normais de recarga. Zauber não podem ser usados por outra criatura que não você. Como uma ação padrão, você pode teletransportar um zauber que esteja ativo de volta para suas mãos, contanto que ele esteja em sua linha de visão. Você só pode ter dois zauber ativos por vez. A partir do 5º nível, você pode ter três zauber ativos por vez. Esse limite aumenta em um zauber adicional a cada cinco níveis, até um máximo de seis zauber ativos no 20º nível.",
        "As condições para evocar um zauber são as mesmas para lançar uma magia."
      ],
      "tables": []
    },
    {
      "title": "A Arte da Cópia",
      "level": 3,
      "paragraphs": [
        "Armas, armaduras, para você itens são apenas meio para um fim, durante um descanso curto (1 Hora) você pode analisar uma Arma, Armadura ou Escudo qualquer que esteja em sua posse e não seja ainda parte de seus Zaubereis conhecidos. Você adiciona o item à sua lista de Zaubereis com todos seus aprimoramentos, incluindo materiais especiais e efeitos únicos, itens não mágicos se tornam Zaubers de nível 0 enquanto qualquer outra Arma, Armadura ou Escudo é adicionada ao seu nível correspondente. Adicionar um Zauber a sua lista desta forma destrói o item original. Você só pode adicionar à sua lista equipamentos que possa evocar normalmente."
      ],
      "tables": []
    },
    {
      "title": "Novas Artes",
      "level": 3,
      "paragraphs": [
        "Você pode adicionar itens à sua lista de Zaubers além de Armas, Armaduras e Escudos, quando você utilizar a habilidade “A Arte da Cópia”, pode escolher também um item qualquer que esteja em sua posse como um Kit de Medicamento, Kit de Disfarces para adicionar a sua lista, estes itens se mundanos são considerados como Zaubers de 1º Nível, itens com Auras fracas são tratados como Zaubers de 3º nível, moderadas como 5º nível, poderosas 8º e Avassaladoras como de 10º. Isto não lhe permite adicionar a sua lista de Zaubers itens que normalmente contariam no limite máximo de itens mágicos como acessórios ou que são consumidos ao usar como poções e pergaminhos."
      ],
      "tables": []
    },
    {
      "title": "Zadavat",
      "level": 3,
      "paragraphs": [
        "A partir do 5º nível, você aprende a preparar e evocar um Zadavat, um conjunto composto por até três Zauber. Sempre que você prepara seus Zaubers pelo dia, também pode trocar seu Zadavat. Evocar um Zadavat requer metade do valor total em PM dos zauber escolhidos (arredondado para cima), e evocá-lo requer uma ação completa. A soma dos níveis dos equipamentos que compõem o kit não pode ser maior que o seu nível de cavaleiro arcano. No 10º nível e a cada cinco níveis seguintes, você adiciona um zadavat novo em sua lista e aumenta o número de Zauber que compõem cada Zadavat em um."
      ],
      "tables": []
    },
    {
      "title": "Criação Acelerada",
      "level": 3,
      "paragraphs": [
        "A partir do 10º nível, você pode evocar um zauber como uma ação livre, mas com limite de uma vez por rodada. Você ainda pode invocar mais Zaubers utilizando de uma ação de movimento, além disso, uma vez por rodada você pode dispensar um de seus Zaubers ativos como reação, se fizer pode invocá-lo novamente no início de sua próxima rodada com uma ação livre sem custo por fazê-lo."
      ],
      "tables": []
    },
    {
      "title": "Sempre Preparado",
      "level": 3,
      "paragraphs": [
        "A duração dos seus Zauber aumenta para um dia a partir do 10º nível."
      ],
      "tables": []
    },
    {
      "title": "Evolução do Arsenal",
      "level": 3,
      "paragraphs": [
        "Escolha três Zauber em sua lista você pode evocá-los mesmo que não os tenha preparado e sem pagar o custo de PM. Durante um descanso longo você pode escolher outros três Zauber qualquer para substituir os escolhidos pela habilidade."
      ],
      "tables": []
    },
    {
      "title": "Surja!",
      "level": 3,
      "paragraphs": [
        "Uma vez por rodada se você fosse invocar uma arma pela sua habilidade “Zauberei”, você pode escolher dispará-la contra um inimigo em até 18 metros ao invés de colocá-la em sua mão, se a arma escolhida era uma Arma Corpo-a-Corpo você é considerado como adjacente ao inimigo para realizar o golpe, se você escolheu uma arma-à-distância realiza um disparo com ela contra o inimigo. Ataques realizados com esta habilidade contam no seu limite de ataques por rodada."
      ],
      "tables": []
    },
    {
      "title": "Escolha da Vitória",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Cavaleiro Arcano, você nunca pode ter mais de um dos talentos de 20º nível da classe."
      ],
      "tables": []
    },
    {
      "title": "O 10º Zauber",
      "level": 3,
      "paragraphs": [
        "Você pode adicionar um Artefato a sua lista de Zaubers com a habilidade “A Arte da Cópia”, invocar um Artefato sempre custa 10 PM independente de seu bônus mágico. Você pode ter apenas um artefato adicionado à sua lista por esta habilidade mas pode trocá-lo durante um descanso longo. Um artefato copiado com esta habilidade não se quebra, apenas perde seus efeitos até que você absorva um novo Zauber com esta habilidade ou morra."
      ],
      "tables": []
    }
  ],
  "classTalents": [
    {
      "id": "talento-guarda-arcana",
      "name": "Guarda Arcana",
      "prerequisite": "4º Nível de Cavaleiro Arcano",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Uma vez por dia você pode como reação transferir o dano de um ataque que você receberia para uma armadura Zauber, se você o fizer, não sofre nenhum ponto de dano causado pelo ataque. A armadura então desaparece como se tivesse sido dissipada."
      ]
    },
    {
      "id": "talento-repelir",
      "name": "Repelir",
      "prerequisite": "4º Nível de Cavaleiro Arcano",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Para cada Zauber ativo que você estiver equipado também recebe um bônus de +1 em TdR e recebe 1 de RE."
      ]
    },
    {
      "id": "talento-schutz-vor-magie",
      "name": "Schutz vor Magie",
      "prerequisite": "4º Nível de Cavaleiro Arcano",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Três vezes por dia você pode “Consumir” um de seus Zaubers. Em termos de regra como uma ação de movimento você dissipa um de seus Zaubers que esteja invocado e ganha PVs Temporário igual a duas vezes o custo original de invocação do item (desconsiderando reduções de custo por outras habilidades). A partir do 10º nível você passa a ganhar quatro vezes o custo original do item."
      ]
    },
    {
      "id": "talento-armaduras-metamagicas",
      "name": "Armaduras Metamágicas",
      "prerequisite": "8º Nível de Cavaleiro Arcano",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Quando você invocar uma Armadura ou Escudo Zauber pode escolher pagar um valor adicional em PMs para garantir a ele novos efeitos, você só pode escolher um dos efeitos da lista no momento da invocação.",
        "Zauber Mutável, 2 PM - Escolha um segundo Zauber do mesmo nível ou inferior, no final desta rodada o Zauber atual se transforma no segundo Zauber escolhido.",
        "Zauber Sólido, 2 PM - Você adiciona metade da CA do item como RD. Você só pode ter um item com este efeito por vez.",
        "Manipular Zauber, 1 PM - O Bônus máximo de Destreza do item aumenta em +1 e a Penalidade de Armadura reduz em 1."
      ]
    },
    {
      "id": "talento-armas-metamagicas",
      "name": "Armas Metamágicas",
      "prerequisite": "8º Nível de Cavaleiro Arcano",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Quando você invocar uma Arma Zauber pode escolher pagar um valor adicional em PMs para garantir a ele novos efeitos, você só pode escolher um dos efeitos da lista no momento da invocação.",
        "Zauber Mutável, 2 PM - Escolha uma segunda Arma Zauber do mesmo nível ou inferior, no final desta rodada o Zauber atual se transforma na segunda arma escolhida.",
        "Ampliar Zauber, 1 PM - O alcance de sua arma Zauber aumenta em 1,5 metros, se for uma arma de longo alcance aumenta em 6 metros.",
        "Camuflar Zauber, 1 PM - Você pode invocar seu Zauber sem nenhum componente Verbal ou Gestual."
      ]
    },
    {
      "id": "talento-recriar",
      "name": "Recriar",
      "prerequisite": "8º Nível de Cavaleiro Arcano",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Como reação, invoque um zauber preparado qualquer por metade de seu custo (Mínimo 1). Este Zauber desaparece no fim do turno mas não conta para seu limite de Zaubers ativos."
      ]
    },
    {
      "id": "talento-planejamento-marcial",
      "name": "Planejamento Marcial",
      "prerequisite": "12º Nível de Cavaleiro Arcano",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Enquanto estiver utilizando de uma Armadura e Escudo Zauber suas JdA e Dano com Armas e Escudos aumentam em +2."
      ]
    },
    {
      "id": "talento-precisao",
      "name": "Precisão",
      "prerequisite": "12º Nível de Cavaleiro Arcano",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Suas Armas Zauber tem margem de crítico e multiplicador aumentado em +1.."
      ]
    },
    {
      "id": "talento-arsenal-de-replicas",
      "name": "Arsenal de Réplicas",
      "prerequisite": "12º Nível de Cavaleiro Arcano",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Na rodada que são criadas suas Armas Zauber tem +3 de JdA, Dano e suas Armaduras e Escudos Zauber tem +2 de CA."
      ]
    },
    {
      "id": "talento-duales-wissen",
      "name": "Duales Wissen",
      "prerequisite": "16º Nível de Cavaleiro Arcano",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Se você e outro Cavaleiro Arcano realizarem um descanso longo juntos vocês podem compartilhar seus conhecimentos. Em termos de regra vocês podem escolher Zaubers conhecidos de ambos os grimórios durante a preparação diária. Isto não muda sua capacidade de conjurar Zaubers, apenas estende sua lista de itens conhecidos."
      ]
    },
    {
      "id": "talento-dateiregistrierung",
      "name": "Dateiregistrierung",
      "prerequisite": "16º Nível de Cavaleiro Arcano",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Quando você invoca um item adicionado à sua lista pela habilidade “Novas Artes” pode permitir que qualquer aliado utilize o item em seu lugar, a duração do Zauber assim como seu custo não é afetada."
      ]
    },
    {
      "id": "talento-gruppenmagie",
      "name": "Gruppenmagie",
      "prerequisite": "16º Nível de Cavaleiro Arcano",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "A qualquer momento que você poderia invocar um Zauber pode escolher invocar o item em um aliado ao invés de sob sua posse, qualquer Zauber invocado desta forma desaparece no início da próxima rodada."
      ]
    },
    {
      "id": "talento-schmiedemeister",
      "name": "Schmiedemeister",
      "prerequisite": "20º Nível de Cavaleiro Arcano",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Ativar esta habilidade é uma ação livre que dura 3 rodadas e pode ser feita uma vez por dia. Enquanto a habilidade durar você pode invocar seus Zadavat como uma ação livre sem gastar PMs por fazê-lo, além disso, uma vez por rodada se fosse dissipar um Zauber pode ao invés disso escolher destruí-lo, ao destruir um Zauber qualquer criatura a até 3 metros do mesmo exceto você, sofrem Xd4 pontos de dano de essência onde X é o custo original de invocação do Zauber, um teste de fortitude reduz o dano pela metade. Se você tiver o talento “Gruppenmagie” pode invocar apenas um Zauber por aliado por rodada enquanto esta habilidade estiver ativa."
      ]
    },
    {
      "id": "talento-schatze",
      "name": "Schätze",
      "prerequisite": "20º Nível de Cavaleiro Arcano",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você não tem mais limite de quantas vezes pode utilizar a habilidade “Surja!” na mesma rodada, a primeira vez na rodada que o fizer deve pagar o custo normalmente do Zauber que escolher, porém qualquer Zauber sequente na mesma rodada que se beneficiar de “Surja!” e for do mesmo nível ou inferior ao o primeiro não tem custo algum."
      ]
    },
    {
      "id": "talento-kriegsvorbereitung",
      "name": "Kriegsvorbereitung",
      "prerequisite": "20º Nível de Cavaleiro Arcano",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Sua habilidade “Zadavat” sofre as seguintes mudanças",
        "A soma dos níveis dos equipamentos que compõem seu Zadavat passa a ser três vezes seu nível de cavaleiro arcano.",
        "Evocar um Zadavat é uma Ação de Movimento",
        "Você pode trocar os itens que compõem seu Zadavat com 1 minuto escolhendo Zaubers que tenha preparado para o dia",
        "Você pode ter 10 Zadavats"
      ]
    }
  ]
} satisfies ClassDetail;

~~~~


---

# Classe: necromante

**Fonte:** `src/data/class-details/necromante.ts`

~~~~typescript
import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "necromante",
  "name": "Necromante",
  "family": "Mago",
  "sourceDocId": "1Jc8R5pa5W_0CKBSnLoxMsfHRbgNbgafp4hwMxliUAQI",
  "sourceTitle": "Necromante",
  "status": "complete",
  "editorialNotes": [],
  "basics": {
    "hitPoints": "um Necromante começa com 8 pontos de vida (+ Mod. de Con) e ganha 2 PV (+mod. Con) por nível seguinte.",
    "trainedSkills": "Conhecimento(Arcano) e outras 4 + mod. Inteligência.",
    "classSkills": "Conhecimento (Int), Identificar Magia (Int), Ofício (Int), Percepção (Sab).",
    "bonusTalents": "Usar Armas Simples, Resistência Aprimorada (Vontade)."
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
        "Item de Poder, Ritual dos Túmulos",
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
        "Carisma Mortal, Epidemia",
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
        "Colheita Sombria, Necropotencia",
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
        "Necronomicon, Purgatório",
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
        ""
      ],
      [
        "20º",
        "+10",
        "Mais forte que a Morte, A 10º Esfera",
        "10°"
      ]
    ]
  },
  "sections": [
    {
      "title": "Magias",
      "level": 3,
      "paragraphs": [
        "Tipo e níveis de magia: você pode lançar magias arcanas de nível 0 (truques) e 1º nível. A cada dois níveis de mago seguintes, você pode lançar magias um nível acima: no 3º nível pode lançar magias de 2º nível, no 5º nível você pode lançar magias de 3º nível e assim por diante até o 17º nível, quando você pode lançar magias de 9º nível.",
        "Escola Proibida: Necromantes não podem aprender ou lançar magias de Encantamento.",
        "Habilidade-chave: sua habilidade para lançar magias é Inteligência.",
        "Magias Conhecidas: você conhece 5 magias arcanas de nível 0, e também um número de magias de 1º nível igual a 1 + seu modificador de Inteligência. Cada vez que avançar de nível, você aprende duas novas magias de qualquer nível que possa lançar.",
        "Pontos de Magia: você tem um número de pontos de magia (PM) igual a 1 + modificador de Inteligência. Cada vez que avança de nível, recebe 3 PM.",
        "Preparação de Magia: você precisa preparar suas magias com antecedência. A cada dia deve estudar durante uma hora, e então escolher um número igual a Metade do Nível + MdC de magias para preparar. Essas magias podem ser conjuradas livremente durante o dia com os PMs do conjurador, podendo receber efeitos de talentos metamágicos e habilidades de classe."
      ],
      "tables": []
    },
    {
      "title": "Item de Poder",
      "level": 3,
      "paragraphs": [
        "Você recebe um objeto à sua escolha. Pode ser uma varinha, cajado, livro, chapéu, amuleto ou mesmo arma.",
        "Este item pode ser usado para lançar, uma vez por dia, qualquer magia que você conheça sem gastar PM (incluindo custos extras de talentos metamágicos). No entanto, para lançar qualquer magia sem estar usando ou segurando o item, você precisa fazer um teste de Identificar Magia (CD 15 + nível da magia). Se falhar, a magia não funciona, mas você gasta os PM mesmo assim.",
        "O item de poder tem RD 10 e PV iguais a metade dos PV máximos do mago. Um item danificado é restaurado na próxima vez que você preparar suas magias. Se o item é destruído, você fica atordoado por 1d4 rodadas. Construir um novo item de poder consome uma semana de trabalho e 100 TO."
      ],
      "tables": []
    },
    {
      "title": "Ritual dos Túmulos",
      "level": 3,
      "paragraphs": [
        "No 1º Nível, Escolha entre se tornar um Guerreiro ou um Comandante",
        "Se você escolheu se tornar um Guerreiro, você recebe uma foice negra mágica. Ela é considerada uma arma mágica de duas mãos, que causa 2d6 pontos de dano de corte, com crítico 19-20/x4. Seu bônus mágico começa em +1 no 1º nível, e aumenta em +1 a cada 5 níveis (+2 no 5º nível, +3 no 10º nível +4 no 15º nível e +5 no 20º nível). Apenas seus níveis de necromante contam para esse bônus. Apenas você se beneficia deste bônus; para todos os outros usuários a foice é uma arma comum. Você sabe usar a foice automaticamente sem precisar adquirir quaisquer talentos. Sempre que você causa dano em combate corpo-a-corpo com a foice, recebe uma quantidade de PV igual ao dano causado. Diferente de outras armas, tanto seu ataque, quanto seu dano causado com esta arma utiliza de seu Modificador de Inteligência ao invés de seus modificadores normais.",
        "Se você escolheu se tornar um Comandante, você recebe um ajudante morto-vivo. Sempre que você sobe de nível o Morto-Vivo também recebe um nível, Um Morto-Vivo recebe BBA 1/Nível além dos demais benefícios por passagem de nível exceto Talentos. Caso seu Morto-Vivo venha a morrer (de novo) você pode invocar um novo com um dia de trabalho (8 Horas). No 15º nível, caso seu Morto-Vivo morra (de novo), você pode trazê-la de volta à vida  após passar 1 hora em meditação.O Morto-Vivo age no turno do Necromante, compartilhando de sua rolagem de iniciativa, porém possui apenas uma Ação Padrão por Rodada. Uma vez por rodada o Necromante pode gastar sua ação de movimento para ordenar seu Morto-Vivo, garantindo a ele uma ação de movimento nesta rodada. Você pode equipá-lo com as armas e armaduras que quiser (Ele sabe utilizar de Armas Simples e Marciais além de Armaduras Leves, Médias e Escudos). E por fim, o lacaio recebe seu MdC ou seu nível nesta Classe (o que for menor) como um bônus em CA, testes de resistência e jogadas de ataque e dano.",
        "Pv: Um Morto-Vivo começa com 24 Pontos de Vida e ganha 6 PV por nível seguinte.",
        "Deslocamento: 9 Metros",
        "Perícias: Um Morto-Vivo possui 2 perícias treinadas.",
        "Habilidades: For 18, Des 18, Con -, Int 10, Sab 10, Car 10.",
        "Arma Natural: Possui dois ataques com arma natural que causa dano de forma equivalente a uma Espada Curta própria para o seu tamanho (1d6 para criaturas Médias).",
        "Tamanho: Médio",
        "Outras Habilidades: Imunidade a atordoamento, dano de habilidade (apenas Força, Destreza ou Constituição), dano não-letal, imunidade a crítico, doença, encantamento, fadiga, paralisia, necromancia, sono e veneno. Não precisam respirar, se alimentar e dormir. Não recuperam pontos de vida normalmente. Sofrem dano com magias de cura e recuperam pontos de vida com magias de necromancia. Destruídos quando seus PV chegam a 0. Um morto-vivo não é afetado pelas magias reviver os mortos ou ressurreição. A magia ressurreição verdadeira o transforma na criatura que era quando vivo. Independente de sua tendência verdadeira, mortos-vivos reagem a habilidades (como destruir o mal dos paladinos) e magias (como proteção contra o mal) como se fossem Malignos."
      ],
      "tables": []
    },
    {
      "title": "Carisma Mortal",
      "level": 3,
      "paragraphs": [
        "Você pode se comunicar com quaisquer mortos-vivos à vontade, mesmo aqueles sem um valor de Inteligência, a despeito dos idiomas que você e seus interlocutores conheçam. Você pode usar perícias baseadas em Carisma com quaisquer mortos-vivos, mesmo aqueles sem um valor de Inteligência. Além disso, Mortos-Vivos não inteligentes vão sempre considerá-lo como um deles e nunca vão te atacar, a não ser que você ataque primeiro…"
      ],
      "tables": []
    },
    {
      "title": "Epidemia",
      "level": 3,
      "paragraphs": [
        "Quando você lança uma magia de Necromancia que afeta um número de alvos, pode escolher gastar o dobro de PM. Se fizer isso, a magia afeta o dobro de alvos."
      ],
      "tables": []
    },
    {
      "title": "Necropotencia",
      "level": 3,
      "paragraphs": [
        "A partir do 10º nível você passa a adicionar seu MdC ao dano de suas magias."
      ],
      "tables": []
    },
    {
      "title": "Colheita Sombria",
      "level": 3,
      "paragraphs": [
        "Sempre que você ou um de seus Lacaios deixar um oponente com 0 ou menos PVs, seja com magias ou ataques, recebe uma quantidade de PVs Temporários igual ao dano causado no inimigo."
      ],
      "tables": []
    },
    {
      "title": "Necronomicon",
      "level": 3,
      "paragraphs": [
        "Você pode escolher 5 magias Divinas de até 6º Ciclo da escola de Necromancia e adicioná-las à sua lista, para você essas magias são consideradas Arcanas para todos os propósitos."
      ],
      "tables": []
    },
    {
      "title": "Purgatório",
      "level": 3,
      "paragraphs": [
        "Uma vez por dia, quando você sofrer dano que poderia levá-lo a 0 ou menos pontos de vida, você pode ignorar completamente esse dano e recuperar PV iguais ao dano que teria sofrido."
      ],
      "tables": []
    },
    {
      "title": "Mais Forte que a Morte",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Necromante, você nunca pode ter mais de um dos talentos de 20º nível da classe."
      ],
      "tables": []
    },
    {
      "title": "A 10º Esfera",
      "level": 3,
      "paragraphs": [
        "Você pode lançar uma magia de 10º Ciclo, escolha uma magia da lista abaixo ou crie sua própria magia, caso decida criar escolha 3 magias que totalizam até 10 níveis, você cria uma magia com o custo e efeito combinado dessas magias, você não precisa preparar a magia escolhida por esta habilidade mas conjurá-la apenas uma vez por dia."
      ],
      "tables": [
        {
          "headers": [
            "Contágio Torpe",
            "Você faz uma criatura adoecer com uma versão mais poderosa de doenças conhecidas. Você escolhe uma das Doenças possíveis e causa um contágio imediato na criatura com efeito dobrado (Uma criatura com contágio sofre o efeito da doença novamente todos os dias até que seja curada da mesma). A CD para resistir sua Doença e 10 + MdN + Mod. Int. Mesmo uma criatura que tenha sucesso se torna um vetor de sua doença e sempre que ele entrar em contato com uma nova criatura a magia é conjurada sobre esta nova criatura e assim sucessivamente..."
          ],
          "rows": [
            [
              "Descritor: Necromancia",
              ""
            ],
            [
              "Alcance: 18 Metros",
              ""
            ],
            [
              "Alvo: 1 Criatura",
              ""
            ],
            [
              "Duração: 1 Semana (D)",
              ""
            ],
            [
              "Tempo de Execução: Ação Padrão",
              ""
            ],
            [
              "Teste de Resistência: Fortitude parcial",
              ""
            ]
          ]
        },
        {
          "headers": [
            "Braços da Abominação",
            "Enquanto a magia durar você recebe dois braços adicionais feitos de ossos e carne podre. Eles são mãos hábeis e você tem controle perfeito de ambas, diferente de seus braços normais, os braços da abominação tem alcance 18 metros e são considerados enormes para manobras."
          ],
          "rows": [
            [
              "Descritor: Necromancia",
              ""
            ],
            [
              "Alcance: 18 Metros",
              ""
            ],
            [
              "Alvo: Você",
              ""
            ],
            [
              "Duração: 1 Minuto",
              ""
            ],
            [
              "Tempo de Execução: Ação Padrão",
              ""
            ],
            [
              "Teste de Resistência: Ver o Texto",
              ""
            ]
          ]
        },
        {
          "headers": [
            "Banquete dos Mortos",
            "Você conjura um banquete profano, com carne podre, cadáveres e insetos, que dura uma hora. Mortos-Vivos que consumam o banquete (usando de uma ação completa) recebem +4 em testes de Resistências, 40 PV's Temporários e ficam imunes a efeitos de energia Positiva."
          ],
          "rows": [
            [
              "Descritor: Necromancia",
              ""
            ],
            [
              "Alcance: 9 Metros",
              ""
            ],
            [
              "Alvo: -",
              ""
            ],
            [
              "Duração: 1 Hora",
              ""
            ],
            [
              "Tempo de Execução: 10 Minutos",
              ""
            ],
            [
              "Teste de Resistência: Nenhum",
              ""
            ]
          ]
        }
      ]
    }
  ],
  "classTalents": [
    {
      "id": "talento-protecao-positiva",
      "name": "Proteção Positiva",
      "prerequisite": "4º Nível de Necromante",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Você se cura com efeitos de Energia Negativa ao invés de receber dano, além disso se torna imune a efeitos que causam Níveis Negativos."
      ]
    },
    {
      "id": "talento-armadura-de-ossos",
      "name": "Armadura de Ossos",
      "prerequisite": "4º Nível de Necromante",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Com uma ação padrão, você pode lançar uma versão modificada de armadura arcana, criando uma armadura feita de ossos unidos por energia negativa que dura por 1 hora. A armadura de ossos concede um bônus de +4 em CA. Este bônus aumenta em +1 a cada 3 Níveis para um total de +10 no nível 19. A armadura de ossos não se acumula com armaduras normais ou a magia armadura arcana."
      ]
    },
    {
      "id": "talento-duro-de-matar",
      "name": "Duro de Matar",
      "prerequisite": "4º Nível de Necromante",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Quando você sofre dano que poderia matá-lo, você pode ignorar completamente esse dano. Você pode usar este talento uma vez por dia. No 8º e 16º recebe outro uso desta habilidade."
      ]
    },
    {
      "id": "talento-ritual-macabro",
      "name": "Ritual Macabro",
      "prerequisite": "8º Nível de Necromante",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Suas Magias de Necromancia que afetem um único alvo custam 1 PM a menos (Mínimo 1) para serem Conjuradas ou 2 PM (Mínimo 1) a menos caso sejam utilizadas em Mortos-Vivos."
      ]
    },
    {
      "id": "talento-lamina-profana",
      "name": "Lâmina Profana",
      "prerequisite": "8º Nível de Necromante",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Você pode gastar 1 PM como uma ação livre para encantar uma arma que esteja empunhando durante um minuto. A arma afetada tem seu dano alterado para Energia Negativa somente quando atacando outras criaturas que não você mesmo. Esta arma encantada ignora a Imunidade a Energia Negativa mas não tem efeito em Mortos-Vivos. Além disso, uma criatura atingida pelo golpe desta arma não pode ser beneficiada por Magias ou Efeitos de Cura até o fim da rodada."
      ]
    },
    {
      "id": "talento-horda-cinzenta",
      "name": "Horda Cinzenta",
      "prerequisite": "8º Nível de Necromante",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Você adiciona as magias, Criar Mortos-Vivos, Criar Esqueletos Arcanos e Servos de Tenebra a sua lista de magias conhecidas e não precisa Prepará-las ou pagar por seus componentes materiais sempre podendo utilizá-las contanto que pague seu custo em PMs. Além disso, seu nível de personagem conta como o triplo de níveis para a quantidade de mortos-vivos que você pode ter sob seu comando pelas magias de criar mortos-vivos."
      ]
    },
    {
      "id": "talento-peste-sanguinea",
      "name": "Peste Sanguínea",
      "prerequisite": "12º Nível de Necromante",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Quando uma criatura falha em um Teste de Resistência contra suas Magias de Necromancia (Magias que não tem um teste de resistência permitem um teste de Fortitude CD 10 + MdN + Mod. Int.), ela sofre 1d6 + Mod. Int. pontos de dano de Energia Negativa por rodada durante um minuto. Você ganha pontos de Vida Temporários Igual ao Dano causado por esta habilidade. Ao afetar múltiplos inimigos com Peste Sanguínea, some o dano causado a todas as criaturas para calcular seus PVs Temporários. Criaturas afetadas ficam imunes a esta habilidade por um dia."
      ]
    },
    {
      "id": "talento-golpe-do-flagelo",
      "name": "Golpe do Flagelo",
      "prerequisite": "12º Nível de Necromante",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Você recebe proficiência com armas marciais corpo a corpo e pode usar Armaduras Leves ignorando a chance de falha Arcana. Além disso você recebe +3 em Jogadas de Ataque e Dano com Armas corpo-a-corpo."
      ]
    },
    {
      "id": "talento-exercito-dos-mortos",
      "name": "Exército dos Mortos",
      "prerequisite": "12º Nível de Necromante",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Seus Mortos-Vivos ganham um bônus de +1 nas jogadas de Ataque e rolagens de dano. Este bônus aumenta em +1 para cada outro Morto-Vivo adjacente a ele. Unidades Militares contabilizam como apenas um Morto-Vivo para os benefícios deste talento."
      ]
    },
    {
      "id": "talento-estudos-arcanos",
      "name": "Estudos Arcanos",
      "prerequisite": "16º Nível de Necromante",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Se você e outro conjurador arcano realizarem um descanso longo juntos vocês podem compartilhar seus grimórios. Em termos de regra vocês podem escolher magias conhecidas de ambos os grimórios durante a preparação de magias. Isto não muda sua capacidade de conjurar magias, apenas estende sua lista de magias conhecidas."
      ]
    },
    {
      "id": "talento-lingua-dos-mortos",
      "name": "Língua dos Mortos",
      "prerequisite": "16º Nível de Necromante",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Aliados a até 18 Metros de você recebem os Benefícios da habilidade “Carisma Mortal”"
      ]
    },
    {
      "id": "talento-fogo-amigo-maior",
      "name": "Fogo Amigo Maior",
      "prerequisite": "16º Nível de Necromante",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Depois de um descanso longo você pode escolher um número de criaturas igual ao seu MdN + Mod. Int. Estas criaturas podem ignorar qualquer dano e efeitos negativos causados pelas suas magias. Você pode encerrar este efeito a qualquer momento mas ele não possui uma duração limite."
      ]
    },
    {
      "id": "talento-expansao-de-grimorio",
      "name": "Expansão de Grimório",
      "prerequisite": "20º Nível de Necromante",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você recebe um bônus permanente de +4 em Inteligência e adiciona 4 Magias Conhecidas a todos os Ciclos de Magia que possa conjurar, por fim recebe 2 PM adicionais por nível nesta classe."
      ]
    },
    {
      "id": "talento-ritual-do-lich",
      "name": "Ritual do Lich",
      "prerequisite": "20º Nível de Necromante",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você abandona sua forma mortal e se torna um Lich através de um ritual sofrendo as seguintes mudanças:",
        "Pv: Um Lich começa com 24 Pontos de Vida e ganha 6 PV por nível seguinte. Este efeito é retroativo, recalcule seus PVs do nível 1 em diante.",
        "Deslocamento: 9 Metros em Terra, 18 Metros Voo",
        "Classe de Armadura: + 5",
        "Resistências: Adquire +4 em todas as Resistências, imunidade a eletricidade, frio e metamorfose e redução de dano 15/esmagamento e mágica.",
        "Ataques: Adquire um ataque de toque paralisante. Além disso, se já possui um ataque natural irá causar 1d8+5 de dano adicional de energia negativa com ele.",
        "Habilidades: A Constituição se torna nula. Ganha mais 2 em Int, Sab e Car.",
        "Perícias: Adquire um bônus de +8 em furtividade, intuição e percepção.",
        "Aura de medo: Qualquer criatura a até 18 metros do Lich deve fazer um teste de vontade (CD 10 + MdN + mod. Int) ou ficara assustada por 1 minuto, se for bem sucedida fica imune a esta habilidade por um dia.",
        "Toque paralisante: O lich possui um ataque de toque que causa 1d8+5 de energia negativa, uma criatura atingida deve ser bem sucedida em um teste de Fortitude (10 + MdN + Mod. Int) ou ficará paralisada permanentemente. As magias Remover maldição, Remover encantamento, e remover paralisia podem libertar a vítima. Uma criatura paralisada pelo Lich parece morta, mas um teste de cura (CD 20) revela que a vítima está viva",
        "Outras Habilidades: Imunidade a atordoamento, dano de habilidade (apenas Força, Destreza ou Constituição), dano não-letal, imunidade a crítico, doença, encantamento, fadiga, paralisia, necromancia, sono e veneno. Não precisam respirar, se alimentar e dormir. Não recuperam pontos de vida normalmente. Sofrem dano com magias de cura e recuperam pontos de vida com magias de necromancia. Destruídos quando seus PV chegam a 0. Um morto-vivo não é afetado pelas magias reviver os mortos ou ressurreição. A magia ressurreição verdadeira o transforma na criatura que era quando vivo. Independente de sua tendência verdadeira, mortos-vivos reagem a habilidades (como destruir o mal dos paladinos) e magias (como proteção contra o mal) como se fossem Malignos.",
        "Filacteria: Uma parte vital de se tornar um lich é criar um filactério mágico no qual o personagem armazena sua força vital. Via de regra, a única maneira de se livrar de um lich é destruir seu filactério. A menos que seu filactério seja localizado e destruído, um lich reaparece 1d10 dias após sua aparente morte."
      ]
    },
    {
      "id": "talento-comandar-a-horda",
      "name": "Comandar a Horda",
      "prerequisite": "20º Nível de Necromante",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Conjurar magias em em um de seus Lacaios ou Criaturas Invocadas também conjura a mesma magia em todos os Lacaios e Criaturas Invocadas que estejam a até 36 metros da mesma. Magias conjuradas em seus Lacaios recebem o efeito do talento metamágico “Estender Magia” de forma Gratuita. Por fim, efeitos que fariam seus Lacaios perderem o controle (possessão ou dominação) falham."
      ]
    }
  ]
} satisfies ClassDetail;

~~~~


---

# Classe: cronomante

**Fonte:** `src/data/class-details/cronomante.ts`

~~~~typescript
import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "cronomante",
  "name": "Cronomante",
  "family": "Mago",
  "sourceDocId": "1r941q0XAsUX_A9KN0K17n3BIcM_JElQqjCXmnxGOTJ4",
  "sourceTitle": "Cronomante",
  "status": "complete",
  "editorialNotes": [],
  "basics": {
    "hitPoints": "um Cronomante começa com 8 pontos de vida (+ Mod. de Con) e ganha 2 PV (+mod. Con) por nível seguinte.",
    "trainedSkills": "Conhecimento(Arcano) e outras 4 + mod. Inteligência.",
    "classSkills": "Conhecimento (Int), Identificar Magia (Int), Ofício (Int), Percepção (Sab).",
    "bonusTalents": "Usar Armas Simples, Resistência Aprimorada (Vontade)."
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
        "Item de Poder, Velocidade do Pensamento",
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
        "Celeridade Arcana, Piscadela",
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
        "Congelamento Atemporal, Expansão Arcana",
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
        "Mestre do Tempo, Exílio Cósmico",
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
        ""
      ],
      [
        "20º",
        "+10",
        "Tempo Emprestado, A 10º Esfera",
        "10°"
      ]
    ]
  },
  "sections": [
    {
      "title": "Magias",
      "level": 3,
      "paragraphs": [
        "Tipo e níveis de magia: você pode lançar magias arcanas de nível 0 (truques) e 1º nível. A cada dois níveis de mago seguintes, você pode lançar magias um nível acima: no 3º nível pode lançar magias de 2º nível, no 5º nível você pode lançar magias de 3º nível e assim por diante até o 17º nível, quando você pode lançar magias de 9º nível.",
        "Habilidade-chave: sua habilidade para lançar magias é Inteligência.",
        "Magias Conhecidas: você conhece 5 magias arcanas de nível 0, e também um número de magias de 1º nível igual a 3 + seu modificador de Inteligência. Cada vez que avançar de nível, você aprende duas novas magias de qualquer nível que possa lançar.",
        "Pontos de Magia: você tem um número de pontos de magia (PM) igual a 3 + modificador de Inteligência. Cada vez que avança de nível, recebe 3 PM.",
        "Preparação de Magia: você precisa preparar suas magias com antecedência. A cada dia deve estudar durante uma hora, e então escolher um número igual a Metade do Nível + MdC de magias para preparar. Essas magias podem ser conjuradas livremente durante o dia com os PMs do conjurador, podendo receber efeitos de talentos metamágicos e habilidades de classe."
      ],
      "tables": []
    },
    {
      "title": "Item de Poder",
      "level": 3,
      "paragraphs": [
        "Você recebe um objeto à sua escolha. Pode ser uma varinha, cajado, livro, chapéu, amuleto ou mesmo arma.",
        "Este item pode ser usado para lançar, uma vez por dia, qualquer magia que você conheça sem gastar PM (incluindo custos extras de talentos metamágicos). No entanto, para lançar qualquer magia sem estar usando ou segurando o item, você precisa fazer um teste de Identificar Magia (CD 15 + nível da magia). Se falhar, a magia não funciona, mas você gasta os PM mesmo assim.",
        "O item de poder tem dureza 10 e PV iguais a metade dos PV máximos do mago. Um item danificado é restaurado na próxima vez que você preparar suas magias. Se o item é destruído, você fica atordoado por 1d4 rodadas. Construir um novo item de poder consome uma semana de trabalho e 100 TO."
      ],
      "tables": []
    },
    {
      "title": "Velocidade do Pensamento",
      "level": 3,
      "paragraphs": [
        "Você soma seu bônus de Inteligência ou seu nível nesta classe (O que for menor) a seus testes de Iniciativa."
      ],
      "tables": []
    },
    {
      "title": "Celeridade Arcana",
      "level": 3,
      "paragraphs": [
        "Você reduz em 1 PM o custo do talento metamágico “Acelerar Magia”"
      ],
      "tables": []
    },
    {
      "title": "Piscadela",
      "level": 3,
      "paragraphs": [
        "Uma vez por rodada, como uma reação, você pode gastar 1 PM para tentar escapar de um ataque em corpo-a-corpo ou à distância. Faça um teste de Iniciativa oposto pela jogada de ataque. Se você for bem-sucedido, o ataque erra e você ressurge onde estava. Você não pode usar esta habilidade se estiver desprevenido."
      ],
      "tables": []
    },
    {
      "title": "Expansão Arcana",
      "level": 3,
      "paragraphs": [
        "A partir do 10º nível você passa a adicionar seu MdC ao dano de suas magias."
      ],
      "tables": []
    },
    {
      "title": "Congelamento Atemporal",
      "level": 3,
      "paragraphs": [
        "A partir do 10º nível você pode adiar o efeito de suas magias fazendo com que uma magia tenha efeito 1 rodada depois de ser conjurada."
      ],
      "tables": []
    },
    {
      "title": "Mestre do Tempo",
      "level": 3,
      "paragraphs": [
        "Você é pouco afetado pela passagem do tempo. Você envelhece um ano a cada dez anos."
      ],
      "tables": []
    },
    {
      "title": "Exílio Cósmico",
      "level": 3,
      "paragraphs": [
        "Você pode \"exilar\" a si mesmo em outra dimensão. Você se retira voluntariamente do contínuo do espaço-tempo para algum lugar desconhecido, onde esses conceitos não existem (ou existem de outra forma). Você retorna ao seu Plano natal dez anos depois, em perfeitas condições de saúde, com os mesmos itens e objetos que carregava ao exilar-se mas dez anos mais velho. O exílio cósmico exige apenas uma fração de segundo para surtir efeito. Em termos de regras, é uma reação (o cronomante pode realizá-lo fora de seu turno, em resposta imediata a um evento qualquer). O cronomante sofre os efeitos de qualquer evento (o dano de um golpe, por exemplo) antes que o exílio ocorra. Contudo, retornará com saúde perfeita, recuperando-se de qualquer condição, a menos que seja permanente (como a morte), mas não recupera PMs e Usos Diários. Você só pode utilizar esta habilidade uma vez por semana."
      ],
      "tables": []
    },
    {
      "title": "Tempo Emprestado",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Cronomante, você nunca pode ter mais de um dos talentos de 20º nível da classe."
      ],
      "tables": []
    },
    {
      "title": "A 10º Esfera",
      "level": 3,
      "paragraphs": [
        "Você pode lançar uma magia de 10º Ciclo, escolha uma magia da lista abaixo ou crie sua própria magia, caso decida criar escolha 3 magias que totalizam até 10 níveis, você cria uma magia com o custo e efeito combinado dessas magias, você não precisa preparar a magia escolhida por esta habilidade mas conjurá-la apenas uma vez por dia."
      ],
      "tables": [
        {
          "headers": [
            "Dilatação temporal",
            "Você garante a uma criatura uma rodada extra sem influenciar sua iniciativa normal. Você só pode conjurar esta magia no final de uma rodada."
          ],
          "rows": [
            [
              "Descritor: Tempo",
              ""
            ],
            [
              "Alcance: 18m",
              ""
            ],
            [
              "Alvo: 1 criatura",
              ""
            ],
            [
              "Duração: Instantânea",
              ""
            ],
            [
              "Tempo de Execução: Reação",
              ""
            ],
            [
              "Teste de Resistência: Nenhuma",
              ""
            ]
          ]
        },
        {
          "headers": [
            "Transe Temporal",
            "Enquanto a magia durar, você pode lançar uma magia adicional toda rodada como ação de movimento sem custo adicional em PMs por fazê-lo."
          ],
          "rows": [
            [
              "Descritor: Tempo",
              ""
            ],
            [
              "Alcance: Pessoal",
              ""
            ],
            [
              "Alvo: Você",
              ""
            ],
            [
              "Duração: 3 Rodadas",
              ""
            ],
            [
              "Tempo de Execução: Ação Completa",
              ""
            ],
            [
              "Teste de Resistência: Nenhuma",
              ""
            ]
          ]
        },
        {
          "headers": [
            "Manipular a Linha",
            "Esta magia funciona como uma versão mais poderosa de Paradoxo dos Gêmeos. Você invoca uma cópia de si mesmo que permanece ao seu lado por 3 rodadas (A rodada Invocada e mais duas). A cópia tem os mesmos recursos que você ao terminar de conjurar esta magia e age normalmente como você faria."
          ],
          "rows": [
            [
              "Descritor: Tempo",
              ""
            ],
            [
              "Alcance: Pessoal",
              ""
            ],
            [
              "Alvo: Você",
              ""
            ],
            [
              "Duração: 3 Rodadas",
              ""
            ],
            [
              "Tempo de Execução: Ação Completa",
              ""
            ],
            [
              "Teste de Resistência: Nenhuma",
              ""
            ]
          ]
        }
      ]
    }
  ],
  "classTalents": [
    {
      "id": "talento-inversao",
      "name": "Inversão",
      "prerequisite": "4º Nível de Cronomante",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Uma vez por dia ao final de seu turno você pode escolher retornar a posição onde começou ele como uma ação livre. Em outras palavras, poderia Andar, Realizar suas ações e então retornar ao local onde começou sua rodada. A partir do 12º Nível você também recupera qualquer ponto de Vida que venha a perder durante suas ações se decidir retornar. No 8º e 16º recebe outro uso desta habilidade."
      ]
    },
    {
      "id": "talento-roubar-segundos",
      "name": "Roubar Segundos",
      "prerequisite": "4º Nível de Cronomante",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Quando suas magias afetam outras criaturas que não você mesmo, você recebe um bônus de +1 em CA e +2 em Iniciativa. Estes Bônus nunca podem superar metade de seu nível nesta classe e tem duração igual à duração original da magia, este talento não se beneficia de magias instantâneas."
      ]
    },
    {
      "id": "talento-mais-uma-vez",
      "name": "Mais uma Vez",
      "prerequisite": "4º Nível de Cronomante",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Uma vez por dia como Ação Livre você pode ativar esta habilidade. Na rodada seguinte após a ativação da habilidade você recebe PV Temporários igual ao seu Nível nesta classe + seu modificador de Inteligência, os PV Temporários gerados dessa forma desaparecem na rodada seguinte após serem recebidos. No 8 e 16º Nível você recebe outro uso desta habilidade."
      ]
    },
    {
      "id": "talento-regra-de-tres",
      "name": "Regra de Tres",
      "prerequisite": "8º Nível de Cronomante",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "A terceira magia que você conjura toda rodada custa 3 PMs a menos. (Minimo 1)"
      ]
    },
    {
      "id": "talento-controle-de-grupo",
      "name": "Controle de Grupo",
      "prerequisite": "8º Nível de Cronomante",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Você adiciona as magias “Lentidão” e “Velocidade” a sua lista e não precisa Prepará-las sempre podendo utilizá-las contanto que pague seu custo. Além disso, você pode concentrar uma magia adicional simultaneamente, você não gasta ações por fazê-lo, mas pode usar este efeito apenas para manter a magia as magias “Lentidão” e “Velocidade”."
      ]
    },
    {
      "id": "talento-pense-rapido",
      "name": "Pense Rápido",
      "prerequisite": "8º Nível de Cronomante",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "A redução de custo da habilidade “Celeridade Arcana” aumenta em -1 (Para um total de -2)"
      ]
    },
    {
      "id": "talento-explosao-controlada",
      "name": "Explosão Controlada",
      "prerequisite": "12º Nível de Cronomante",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "A habilidade “Congelamento Temporal” muda para o efeito abaixo:",
        "Você pode adiar o efeito de suas magias fazendo com que uma magia tenha efeito até 10 minutos depois de ser conjurada."
      ]
    },
    {
      "id": "talento-ecos",
      "name": "Ecos",
      "prerequisite": "12º Nível de Cronomante",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Você faz com que uma magia tenha efeito duas vezes na área ou no alvo. Esta habilidade funciona como um talento metamágico exclusivo, que custa O Nível da Magia - 1 PM para ser aplicado a uma magia. Ao lançar a magia em questão, o alvo sofre os efeitos da magia duas vezes, uma vez na rodada da conjuração e outra na rodada seguinte. O alvo realiza um teste de resistência, se aplicável, para cada magia. No caso de magias de área, a área é sobreposta; não é possível direcionar a magia duplicada para áreas diferentes."
      ]
    },
    {
      "id": "talento-paradoxos",
      "name": "Paradoxos",
      "prerequisite": "12º Nível de Cronomante",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Três vezes ao dia Ao rolar os dados para determinar os efeitos de uma magia, você pode escolher rerolar todos os dados da magia ficando com o segundo resultado mesmo que seja pior que o primeiro."
      ]
    },
    {
      "id": "talento-planos-futuros",
      "name": "Planos Futuros",
      "prerequisite": "16º Nível de Cronomante",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Você pode utilizar a habilidade “Congelamento Atemporal” nas habilidades e magias de seus próprios aliados, fazendo elas ativarem apenas na rodada seguinte. Usar este talento gasta sua reação."
      ]
    },
    {
      "id": "talento-estudos-arcanos",
      "name": "Estudos Arcanos",
      "prerequisite": "16º Nível de Cronomante",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Se você e outro conjurador arcano realizarem um descanso longo juntos vocês podem compartilhar seus grimórios. Em termos de regra vocês podem escolher magias conhecidas de ambos os grimórios durante a preparação de magias. Isto não muda sua capacidade de conjurar magias, apenas estende sua lista de magias conhecidas."
      ]
    },
    {
      "id": "talento-ajuda-de-outros-tempos",
      "name": "Ajuda de outros Tempos",
      "prerequisite": "16º Nível de Cronomante",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Com uma semana (8 Horas por dia), você pode “Adiantar” o nível de um Aliado. Ele recebe um Talento, Habilidade de Classe ou Ponto de Habilidade como se fosse um personagem de um nível acima. Você pode garantir este benefício a quantos aliados quiser, mas deve passar uma semana com cada, o bônus perdura até que eles avancem para o próximo nível quando então você deve começar tudo de novo."
      ]
    },
    {
      "id": "talento-velho-como-o-mundo",
      "name": "Velho como o Mundo",
      "prerequisite": "20º Nível de Cronomante",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você pára de envelhecer completamente, deixando de receber as penalidades por Idade Avançada mas ainda recebendo os benefícios pela mesma. Você recebe um bônus permanente de +4 em Inteligência e por fim recebe 2 PM adicionais por nível nesta classe."
      ]
    },
    {
      "id": "talento-renascimento-regenerativo",
      "name": "Renascimento Regenerativo",
      "prerequisite": "20º Nível de Cronomante",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Uma vez por semana você pode ativar esta habilidade como reação mesmo que uma condição fosse lhe impedir. Você imediatamente recupera todos seus Pontos de Vida, Mana, Usos Diários de habilidades e se liberta de qualquer condição negativa que não seja permanente. Por fim, você age imediatamente como se fosse sua rodada de combate."
      ]
    },
    {
      "id": "talento-colapso-temporal",
      "name": "Colapso Temporal",
      "prerequisite": "20º Nível de Cronomante",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você adiciona “Parar o Tempo” a sua lista de Magias e não precisa Prepará-la sempre podendo utilizá-la contanto que pague seu custo. Além disso, para você a magia sempre dura 5 Rodadas e não pode ser anulada, por fim você pode, como uma reação, anular uma magia qualquer da escola de “Tempo” lançada a até 30m de distância. Essa \"contramágica\" especial não custa pontos de magia e não exige teste."
      ]
    }
  ]
} satisfies ClassDetail;

~~~~


---

# Classe: geomante-naturalista

**Fonte:** `src/data/class-details/geomante-naturalista.ts`

~~~~typescript
import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "geomante-naturalista",
  "name": "Geomante (Naturalista)",
  "family": "Mago",
  "sourceDocId": "1_O_5R5SQG88mPMfXAlzhczFZ7Qnh7DwDHinwU5-6Zjo",
  "sourceTitle": "Geomante (Naturalista)",
  "status": "complete",
  "editorialNotes": [],
  "basics": {
    "hitPoints": "um Naturalista começa com 8 pontos de vida (+ Mod. de Con) e ganha 2 PV (+mod. Con) por nível seguinte.",
    "trainedSkills": "Conhecimento(Arcano) e outras 4 + mod. Inteligência.",
    "classSkills": "Conhecimento (Int), Identificar Magia (Int), Ofício (Int), Percepção (Sab).",
    "bonusTalents": "Usar Armas Simples, Resistência Aprimorada (Vontade)."
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
        "Servo Elemental, 1001 Formas",
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
        "Molde de Argila, Surto da Natureza",
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
        "Camaleão Natural, Natureza da Magia",
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
        "Benção da Natureza, Forma Pura",
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
        ""
      ],
      [
        "20º",
        "+10",
        "Um com o Mundo, A 10º Esfera",
        "10°"
      ]
    ]
  },
  "sections": [
    {
      "title": "Magias",
      "level": 3,
      "paragraphs": [
        "Tipo e níveis de magia: você pode lançar magias arcanas de nível 0 (truques) e 1º nível. A cada dois níveis de mago seguintes, você pode lançar magias um nível acima: no 3º nível pode lançar magias de 2º nível, no 5º nível você pode lançar magias de 3º nível e assim por diante até o 17º nível, quando você pode lançar magias de 9º nível.",
        "Habilidade-chave: sua habilidade para lançar magias é Inteligência.",
        "Magias Conhecidas: você conhece 5 magias arcanas de nível 0, e também um número de magias de 1º nível igual a 1 + seu modificador de Inteligência. Cada vez que avançar de nível, você aprende uma nova magias de qualquer nível que possa lançar.",
        "Pontos de Magia: você tem um número de pontos de magia (PM) igual a 1 + modificador de Inteligência. Cada vez que avança de nível, recebe 3 PM.",
        "Preparação de Magia: você precisa preparar suas magias com antecedência. A cada dia deve estudar durante uma hora, e então escolher um número igual a Metade do Nível + MdC de magias para preparar. Essas magias podem ser conjuradas livremente durante o dia com os PMs do conjurador, podendo receber efeitos de talentos metamágicos e habilidades de classe."
      ],
      "tables": []
    },
    {
      "title": "Servo Elemental",
      "level": 3,
      "paragraphs": [
        "Você recebe um servo elemental, que atua como um elo com as forças primordiais do mundo. Invocar este servo consome um minuto de esforço ininterrupto em uma área previamente preparada por uma hora com símbolos arcanos. Após este ritual, o servo elemental surge, brotando de uma grande concentração elemental (do solo, da água, das chamas de um incêndio...).",
        "Um Elemental recebe BBA 3/4. Sempre que você avança nesta classe, o Elemental também ganha um nível recebendo todos os benefícios por isso, exceto talentos, em certos níveis o Servo também recebe certos benefícios. Se você e seu Elemental estiverem sujeitos ao mesmo efeito que afeta seus Pontos de Vida, você aplica esses efeitos apenas uma vez (aplicando o efeito maior, se aplicável). Por exemplo, se você e seu Elemental forem pegos em um efeito de área que curaria ou ferirá ambos, apenas a maior quantidade de cura ou dano se aplica. Se a qualquer momento o Naturalista for reduzido abaixo de 0 PVs, o Servo Elemental se desfaz retornando a terra.",
        "O Servo Elemental não pode utilizar de itens mágicos, mas se beneficia de qualquer item que o Naturalista estiver utilizando, por exemplo, caso o Naturalista utilize um Cinto da Força +4, tanto ele quanto seu servo elemental recebem o bônus de +4 em força. Além disso, você pode utilizar magias Pessoais em seu Servo Elemental como se conjurasse em si mesmo. Por fim, quando o Servo Elemental atinge um inimigo com sua jogada de ataque corpo-a-corpo e causa dano, o Naturalista pode Conjurar uma Magia de Toque como se ele mesmo estivesse realizando o ataque contra o inimigo. (O Naturalista ainda precisa gastar a ação necessária para conjurar a magia.)",
        "O servo elemental age no turno do Naturalista, compartilhando de sua rolagem de iniciativa, porém possui Ações próprias. Se você se afastar mais de 30m do servo, ele se une novamente à terra, e precisa ser invocado mais uma vez.",
        "Pv: um Elemental não possui pontos de vida. Ao invés disso, metade do dano recebido pelo Elemental reduz os pontos de vida do Naturalista como dano não letal do mesmo tipo, assim como a cura de qualquer um de vocês recupera seus Pontos de Vida.",
        "Deslocamento: 9 Metros. Este valor aumenta conforme o nível do Naturalista aumenta de acordo com a tabela abaixo.",
        "Perícias: o Elemental possui 2 + Mod. Int pericias treinadas, mas não pode escolher perícias baseadas em inteligência como Conhecimentos e Ofícios.",
        "Habilidades: For 16, Des 16, Con --, Int 14, Sab 10, Car 10.",
        "Arma Natural: O elemental possui um ataque com arma natural que causa dano de forma equivalente a uma adaga própria para o seu tamanho (1d4 para criaturas Médias). Este valor aumenta conforme o nível do Naturalista aumenta de acordo com a tabela abaixo. O tipo de dano varia de acordo com o ambiente onde o Naturalista está.",
        "Outras habilidades: um Elemental é imune a atordoamento, dano de habilidade, doença, enjoo, paralisia, sono e veneno. Não precisa respirar, se alimentar e dormir."
      ],
      "tables": [
        {
          "headers": [
            "Nível",
            "Dano",
            "Deslocamento Base",
            "Benefício"
          ],
          "rows": [
            [
              "1",
              "1d4",
              "9 metros",
              "-"
            ],
            [
              "5",
              "1d6",
              "9 metros",
              "Força +4"
            ],
            [
              "9",
              "1d8",
              "12 metros",
              "Destreza +4"
            ],
            [
              "13",
              "2d6",
              "12 metros",
              "CA +8"
            ],
            [
              "17",
              "3d6",
              "15 metros",
              "Voo 18 metros"
            ]
          ]
        },
        {
          "headers": [
            "Ambiente",
            "Descritor de dano (Reverso)",
            "Aparência"
          ],
          "rows": [
            [
              "Floresta",
              "Corte (Sônico)",
              "Terra com Raízes"
            ],
            [
              "Montanha",
              "Frio (Fogo)",
              "Pedras Empilhadas"
            ],
            [
              "Pântano",
              "Ácido (Esmagamento)",
              "Lama"
            ],
            [
              "Planície",
              "Sônico (Corte)",
              "Ar"
            ],
            [
              "Tundra",
              "Frio (Fogo)",
              "Gelo"
            ],
            [
              "Aquático",
              "Eletricidade (Corte)",
              "Água"
            ],
            [
              "Subterrâneo",
              "Esmagamento (Ácido)",
              "Bloco Maciço de Rocha"
            ]
          ]
        }
      ]
    },
    {
      "title": "1001 Formas",
      "level": 3,
      "paragraphs": [
        "Você altera a forma atual de seu Elemental, garantindo um bônus diferente de acordo com a Escolha, você pode mudar esta escolha com um minuto de contato com seu elemental.",
        "Atirador: Seu servo elemental recebe uma Arma Elemental que causa 1d4 de dano, alcance 30m e crítico 20/*2. Este valor aumenta assim como seu ataque corpo-a-corpo.",
        "Durão: Seu servo elemental recebe RD 5/Aço Rubi e um bônus de +2 nos testes de resistência.",
        "Lutador: Seu servo elemental recebe um bônus de +2 nas jogadas de Ataque e Dano."
      ],
      "tables": []
    },
    {
      "title": "Molde de Argila",
      "level": 3,
      "paragraphs": [
        "Com uma ação de Movimento do Naturalista você altera o tamanho de seu Servo Elemental, podendo alterá-lo para Grande ou Pequeno."
      ],
      "tables": []
    },
    {
      "title": "Surto da Natureza",
      "level": 3,
      "paragraphs": [
        "Com uma ação padrão do Naturalista seu Servo Elemental tem deslocamento aumentado em 9 metros e recebe um ataque natural adicional durante aquela rodada."
      ],
      "tables": []
    },
    {
      "title": "Natureza da Magia",
      "level": 3,
      "paragraphs": [
        "A partir do 10º nível você passa a adicionar seu MdC ao dano de seu Elemental."
      ],
      "tables": []
    },
    {
      "title": "Camaleão Natural",
      "level": 3,
      "paragraphs": [
        "Você e seu Elemental assumem parte das características do ambiente onde estão. Quando você e seu Elemental entram em um ambiente novo, recebem resistência a energia 15 conforme a região (veja tabela do Servo Elemental)"
      ],
      "tables": []
    },
    {
      "title": "Benção da Natureza",
      "level": 3,
      "paragraphs": [
        "Você pode escolher 5 magias Divinas de até 6º Ciclo que sejam pessoais e adicioná-las à sua lista, para você essas magias são consideradas Arcanas para todos os propósitos."
      ],
      "tables": []
    },
    {
      "title": "Forma Pura",
      "level": 3,
      "paragraphs": [
        "Você pode, como ação padrão e o custo de 5PM, fazer seu servo elemental assumir a forma de um elemental de acordo com o ambiente atual por 1 minuto. Enquanto nesta forma, o servo recebe as habilidades da lista a seguir."
      ],
      "tables": [
        {
          "headers": [
            "Água"
          ],
          "rows": [
            [
              "Imunidade a fogo. Vulnerabilidade a Frio."
            ],
            [
              "Deslocamento: natação 27m"
            ],
            [
              "Agarrar aprimorado: Pode, como ação livre, realizar uma manobra de agarrar contra oponentes que forem acertados por seus golpes de pancada. Se o elemental começar o turno agarrando um inimigo ele pode engolir o mesmo. Um inimigo engolido começa a sufocar, e automaticamente recebe o dano de pancada no começo de cada turno. Para escapar ele deve ser bem sucedido num teste de manobra. O inimigo recebe todas as penalidades e possíveis benefícios de estar submergido na água enquanto engolido."
            ],
            [
              "Vórtice: Enquanto estiver na água, o elemental pode se tornar um redemoinho, enquanto nesta forma ele não pode realizar ataques, mas, pode se mover por espaços ocupados por  criaturas de tamanho igual ou menor. Criaturas dentro do redemoinho devem ser bem sucedidas num teste de Reflexos(CD igual sua CD de magia) ou ficará agarrada(como na manobra), e recebe o dano da pancada automaticamente no início de seu turno. A cada turno a vítima tem direito a um novo teste para escapar do efeito."
            ]
          ]
        },
        {
          "headers": [
            "Ar"
          ],
          "rows": [
            [
              "Imunidade a sônico. Vulnerabilidade a Fogo"
            ],
            [
              "Deslocamento: Voo 30m"
            ],
            [
              "Controle do ar: O elemental possui uma aura de 9m que concede cobertura total contra projéteis. Inimigos dentro desta aura recebem uma penalidade de -2 em jogadas de ataque."
            ],
            [
              "Muralha de vento: O elemental pode criar uma muralha de vento. Como a magia de mesmo nome."
            ],
            [
              "Vendaval: O elemental do ar pode se transformar num forte vento, que derruba todos em uma área de 3m ao redor do elemental e causa o dano de uma pancada. Um teste de reflexos reduz o dano à metade e evita a queda."
            ]
          ]
        },
        {
          "headers": [
            "Fogo"
          ],
          "rows": [
            [
              "Imunidade a Fogo. Vulnerabilidade a Frio"
            ],
            [
              "Deslocamento: 18m"
            ],
            [
              "Aura de Calor: O elemental de fogo esquenta o metal ao seu redor. Qualquer usuário de armadura de metal até 9m do elemental recebe -2 de CA."
            ],
            [
              "Ataques incendiários: No final de seu turno, inimigos atingidos pelo elemental devem fazer um teste de Destreza, ou ficam em chamas, recebendo 1d6 de dano por rodada até se apagarem. Inimigos que receberam múltiplos golpes não fazem vários testes, ao invés disso, a CD aumenta em +1 para cada golpe adicional. Um inimigo que já esteja em chamas ao invés disso explode, causando 6d6 de dano de fogo adicional em uma área de 6m. Criaturas ao redor podem fazer um teste de reflexos para reduzir o dano à metade."
            ]
          ]
        },
        {
          "headers": [
            "Terra"
          ],
          "rows": [
            [
              "RD igual ao dobro do nível de seu nível."
            ],
            [
              "Deslocamento: 18m"
            ],
            [
              "Tremores: O elemental de Terra causa constantes tremores ao seu redor, inimigos até 9m do elemental recebem -1 de CA e JdA"
            ],
            [
              "Derrubar Aprimorado: Pode, como ação livre, realizar uma manobra de derrubar contra oponentes que forem acertados por seus golpes de pancada. Inimigos já caídos devem ser bem sucedidos em um teste de fortitude, ou ficam atordoados por 1d4 rodadas."
            ]
          ]
        }
      ]
    },
    {
      "title": "Um com o Mundo",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Naturalista, você nunca pode ter mais de um dos talentos de 20º nível da classe."
      ],
      "tables": []
    },
    {
      "title": "A 10º Esfera",
      "level": 3,
      "paragraphs": [
        "Você pode lançar uma magia de 10º Ciclo, escolha uma magia da lista abaixo ou crie sua própria magia, caso decida criar escolha 3 magias que totalizam até 10 níveis, você cria uma magia com o custo e efeito combinado dessas magias, você não precisa preparar a magia escolhida por esta habilidade mas conjurá-la apenas uma vez por dia."
      ],
      "tables": [
        {
          "headers": [
            "Elemental Gêmeo",
            "Você se transforma em uma Cópia de seu Servo Elemental, recebendo todos os Benefícios e habilidades que ele Possui."
          ],
          "rows": [
            [
              "Descritor: Transmutação",
              ""
            ],
            [
              "Alcance: Pessoal",
              ""
            ],
            [
              "Alvo: Você",
              ""
            ],
            [
              "Duração: 3 Rodadas",
              ""
            ],
            [
              "Tempo de Execução: Ação Padrão",
              ""
            ],
            [
              "Teste de Resistência: Nenhum",
              ""
            ]
          ]
        },
        {
          "headers": [
            "Forma Monstruosa",
            "Enquanto a Magia durar, seu Servo ou o próprio Naturalista recebe os benefícios abaixo.   Resistências: adquire imunidade a sono, paralisia e ao mesmo tipo de energia de seu sopro.  Classe de armadura: +4.  Deslocamento: adquire voo com o dobro de deslocamento normal em terra, a menos que a criatura-base tenha um deslocamento de voo melhor.  Sopro: Escolha entre fogo, frio, ácido, energia negativa, ácido ou eletricidade. Uma vez por dia, como uma ação padrão, o Elemental pode cuspir um cone de 9m da Energia escolhida. Todas as criaturas na área sofrem dano igual a 1d6 por nível do Servo. Um teste de Reflexos (CD 10 + metade do nível do Servo + modificador de Inteligência do Servo) reduz o dano à metade.  Habilidades: For +8, Dex +6, Int +2, Car +2."
          ],
          "rows": [
            [
              "Descritor: Transmutação",
              ""
            ],
            [
              "Alcance: Pessoal",
              ""
            ],
            [
              "Alvo: Você",
              ""
            ],
            [
              "Duração: 3 Rodadas",
              ""
            ],
            [
              "Tempo de Execução: Ação Padrão",
              ""
            ],
            [
              "Teste de Resistência: Nenhum",
              ""
            ]
          ]
        },
        {
          "headers": [
            "Genesis",
            "Quando você conjura a magia deve escolher um ambiente, você determina as características que desejar como Temperatura, Água e a forma do terreno (Esta magia não pode criar construções ou Vida), uma vez terminada a Magia o terreno então toma a forma que foi desejada pelo Conjurador. Após a primeira Conjuração o Naturalista pode Conjurar esta magia mais vezes, aumentando seu tamanho em mais 180 metros até alcançar 1 Kilometro."
          ],
          "rows": [
            [
              "Descritor: Transmutação",
              ""
            ],
            [
              "Alcance: 180 Metros (1 Quilômetro)",
              ""
            ],
            [
              "Alvo: Um local centrado em você",
              ""
            ],
            [
              "Duração: Permanente (D)",
              ""
            ],
            [
              "Tempo de Execução: 1 Semana (8 Horas por Dia)",
              ""
            ],
            [
              "Teste de Resistência: Nenhum",
              ""
            ]
          ]
        }
      ]
    }
  ],
  "classTalents": [
    {
      "id": "talento-cuidado-da-natureza",
      "name": "Cuidado da Natureza",
      "prerequisite": "4º Nível de Naturalista",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Uma vez por dia, quando o dano que o Servo Elemental tomaria, causasse o Naturalista a cair com 0 ou menos PVs, você pode como reação desinvocar seu Servo ignorando o dano que ele tomaria."
      ]
    },
    {
      "id": "talento-generosidade-arcana",
      "name": "Generosidade Arcana",
      "prerequisite": "4º Nível de Naturalista",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Ao sofrer dano pelo Servo Elemental, você pode como reação do Naturalista gastar 1 PM e reduzir o dano recebido pelo vínculo em 5 (Primeiro se reduz este valor e então se Divide o dano). No 8º e 16º nível você pode pagar mais 1 PM e reduzir o dano novamente em 5, para 15 de Dano por 3 PMs no 16º nível."
      ]
    },
    {
      "id": "talento-generosidade-divina",
      "name": "Generosidade Divina",
      "prerequisite": "4º Nível de Naturalista",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Enquanto estiver a pelo 3 metros de seu Servo Elemental, você possui Cura Acelerada 3, este valor aumenta em 3 no 8º, 12º e 16º Nível."
      ]
    },
    {
      "id": "talento-ao-alcance-da-mao",
      "name": "Ao Alcance da Mão",
      "prerequisite": "8º Nível de Naturalista",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Na forma Atirador o disparo do Servo é reduzido para 9 metros, Em contrapartida o Naturalista passa a poder conjurar magias de toque com o disparo do Servo."
      ]
    },
    {
      "id": "talento-partir-montanhas",
      "name": "Partir Montanhas",
      "prerequisite": "8º Nível de Naturalista",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Na forma Lutador, magias conjuradas pelo Naturalista junto ao ataque do Servo Elemental adicionam ¼ do nível do Servo a sua CD e Dano."
      ]
    },
    {
      "id": "talento-duro-como-pedra",
      "name": "Duro como Pedra",
      "prerequisite": "8º Nível de Naturalista",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Na forma Durão cada Magia pessoal conjurada sobre o Servo Elemental aumenta a RD da habilidade em 3 e as resistências em 2 acumulando até 3 vezes."
      ]
    },
    {
      "id": "talento-forcas-da-natureza",
      "name": "Forças da Natureza",
      "prerequisite": "12º Nível de Naturalista",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "A margem de ameaça e multiplicador de crítico do Servo Elemental com ataques corpo-a-corpo e A Distância aumenta em +1."
      ]
    },
    {
      "id": "talento-dualidade-dos-elementos",
      "name": "Dualidade dos Elementos",
      "prerequisite": "12º Nível de Naturalista",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Você pode concentrar uma magia adicional simultaneamente, porém esta magia deve beneficiar exclusivamente seu Servo Elemental, você não gasta ações por fazê-lo, caso precise fazer um teste para manter concentração deve fazer um teste individual para cada magia."
      ]
    },
    {
      "id": "talento-furia-das-estacoes",
      "name": "Fúria das Estações",
      "prerequisite": "12º Nível de Naturalista",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "A habilidade surto da Natureza passa a gastar uma Ação de Movimento do Naturalista e não mais uma ação padrão para ser ativa."
      ]
    },
    {
      "id": "talento-sobrevivencia-do-mais-adaptado",
      "name": "Sobrevivência do Mais Adaptado",
      "prerequisite": "16º Nível de Naturalista",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Aliados à até 6m da Elemental ou Naturalista recebem os bônus de Camaleão Natural."
      ]
    },
    {
      "id": "talento-bencao-das-formas",
      "name": "Benção das Formas",
      "prerequisite": "16º Nível de Naturalista",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Aliados a até 3 Metros do Servo Elemental que não o próprio Naturalista recebem todos os benefícios da Habilidade 1001 Formas que o servo atualmente se encontra. Além disso, esses mesmos aliados passam a causar 1d6 de dano adicional de acordo com o Ambiente."
      ]
    },
    {
      "id": "talento-redistribuicao-de-magia",
      "name": "Redistribuição de Magia",
      "prerequisite": "16º Nível de Naturalista",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Aliados a até 3 Metros do Servo Elemental que não o próprio Naturalista podem conjurar Magias de Toque como se estivessem utilizando o talento metamágico “Toque Longínquo\" mas sem aumentar o custo de suas próprias Magias."
      ]
    },
    {
      "id": "talento-dominio-dos-elementos",
      "name": "Domínio dos Elementos",
      "prerequisite": "20º Nível de Naturalista",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "O Naturalista com uma ação padrão pode manifestar em uma área de 18m de raio centrada na Elemental um ambiente a sua escolha, recebendo todos os benefícios de suas habilidades, enquanto a habilidade durar no início de cada rodada o Naturalista pode utilizar uma ação de Movimento para trocar o tipo do Ambiente. Utilizar esta habilidade custa 5 PMs e ela Dura 1 minuto."
      ]
    },
    {
      "id": "talento-per-aspera-ad-astra",
      "name": "Per Aspera Ad Astra",
      "prerequisite": "20º Nível de Naturalista",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "O Naturalista passa a poder utilizar os bônus da Tabela Reversa, podendo escolher se irá utilizar do descritor Normal ou Reverso quando usa as habilidades do Servo Elemental. Além disso, quando o Naturalista conjurar uma Magia cujo descritor seja o mesmo que do Ambiente ela é Maximizada Gratuitamente, se for do Ambiente Reverso ela é Acelerada também Gratuitamente."
      ]
    },
    {
      "id": "talento-forma-pura-ascendida",
      "name": "Forma Pura Ascendida",
      "prerequisite": "20º Nível de Naturalista",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Quando usar a habilidade “Forma Pura” você pode escolher a forma que seu elemental toma independente do ambiente, além disso adiciona duas formas a lista."
      ]
    }
  ]
} satisfies ClassDetail;

~~~~


---

# Classe: numeromante

**Fonte:** `src/data/class-details/numeromante.ts`

~~~~typescript
import type { ClassDetail } from './schema';

export const classDetail = {
  "slug": "numeromante",
  "name": "Numeromante",
  "family": "Mago",
  "sourceDocId": "1d_AqvE6KCzYC_RTP4E8me77mFaMnfmj1iiFKQqc8944",
  "sourceTitle": "Numeromante",
  "status": "complete",
  "editorialNotes": [],
  "basics": {
    "hitPoints": "um Numeromante começa com 8 pontos de vida (+ Mod. de Con) e ganha 2 PV (+mod. Con) por nível seguinte.",
    "trainedSkills": "Conhecimento(Arcano) e outras 4 + mod. Inteligência.",
    "classSkills": "Conhecimento (Int), Identificar Magia (Int), Ofício (Int), Percepção (Sab).",
    "bonusTalents": "Usar Armas Simples, Resistência Aprimorada (Vontade)."
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
        "Item de Poder, Dado Numeromântico (D4)",
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
        "Alterar a Equação, Dado Numeromântico (D6), Multiplicar Metamagia",
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
        "Dado Numeromântico (D8), Germinar Magia, Expansão Arcana",
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
        "Dado Numeromântico (D12), Dentro da Curva, Fora da Curva",
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
        ""
      ],
      [
        "20º",
        "+10",
        "Arcana Numérica, Dado Numeromântico (D20), A 10º Esfera",
        "10°"
      ]
    ]
  },
  "sections": [
    {
      "title": "Magias",
      "level": 3,
      "paragraphs": [
        "Tipo e níveis de magia: você pode lançar magias arcanas de nível 0 (truques) e 1º nível. A cada dois níveis de mago seguintes, você pode lançar magias um nível acima: no 3º nível pode lançar magias de 2º nível, no 5º nível você pode lançar magias de 3º nível e assim por diante até o 17º nível, quando você pode lançar magias de 9º nível.",
        "Habilidade-chave: sua habilidade para lançar magias é Inteligência.",
        "Magias Conhecidas: você conhece 5 magias arcanas de nível 0, e também um número de magias de 1º nível igual a 3 + seu modificador de Inteligência. Cada vez que avançar de nível, você aprende duas novas magias de qualquer nível que possa lançar.",
        "Pontos de Magia: você tem um número de pontos de magia (PM) igual a 3 + modificador de Inteligência. Cada vez que avança de nível, recebe 3 PM.",
        "Preparação de Magia: você precisa preparar suas magias com antecedência. A cada dia deve estudar durante uma hora, e então escolher um número igual a Metade do Nível + MdC de magias para preparar. Essas magias podem ser conjuradas livremente durante o dia com os PMs do conjurador, podendo receber efeitos de talentos metamágicos e habilidades de classe."
      ],
      "tables": []
    },
    {
      "title": "Item de Poder",
      "level": 3,
      "paragraphs": [
        "Você recebe um objeto à sua escolha. Pode ser uma varinha, cajado, livro, chapéu, amuleto ou mesmo arma.",
        "Este item pode ser usado para lançar, uma vez por dia, qualquer magia que você conheça sem gastar PM (incluindo custos extras de talentos metamágicos). No entanto, para lançar qualquer magia sem estar usando ou segurando o item, você precisa fazer um teste de Identificar Magia (CD 15 + nível da magia). Se falhar, a magia não funciona, mas você gasta os PM mesmo assim.",
        "O item de poder tem dureza 10 e PV iguais a metade dos PV máximos do mago. Um item danificado é restaurado na próxima vez que você preparar suas magias. Se o item é destruído, você fica atordoado por 1d4 rodadas. Construir um novo item de poder consome uma semana de trabalho e 100 TO."
      ],
      "tables": []
    },
    {
      "title": "Dado Numeromântico",
      "level": 3,
      "paragraphs": [
        "Uma vez por dia, ao lançar uma magia, você pode rolar o dado (1d4) e somar o resultado na CD e ao dano da magia. No 5º nível, e a cada 5 níveis seguintes (10º, 15º e 20º), o dado se transforma e melhora em um passo: d4 para d6, d6 para d8, d8 para d12, d12 para d20 e você recebe um uso adicional desta habilidade (Para um total de 2 usos por dia)."
      ],
      "tables": []
    },
    {
      "title": "Alterar a Equação",
      "level": 3,
      "paragraphs": [
        "Você reduz em 1 PM o custo do talento metamágico “Potencializar Magia”"
      ],
      "tables": []
    },
    {
      "title": "Multiplicar Metamagia",
      "level": 3,
      "paragraphs": [
        "Ao conjurar uma magia com o talento metamágico “Potencializar Magia”, você pode pagar +1 PM para alterar o alcance ou área da magia para o triplo de seu original. Este efeito não se acumula com os talentos metamágicos “Aumentar Magia” ou “Ampliar Magia”."
      ],
      "tables": []
    },
    {
      "title": "Expansão Arcana",
      "level": 3,
      "paragraphs": [
        "A partir do 10º nível você passa a adicionar seu MdC ao dano de suas magias."
      ],
      "tables": []
    },
    {
      "title": "Germinar Magia",
      "level": 3,
      "paragraphs": [
        "Esta habilidade funciona como um talento metamágico exclusivo, que custa +3 PM para ser aplicado a uma magia. Ao lançar a magia em questão, o alvo sofre os efeitos da magia duas vezes e recebe um teste de resistência, se aplicável, para cada magia. Para algumas magias, como enfeitiçar pessoa, falhar em ambos os testes de resistência resulta num efeito redundante mas um aliado do alvo teria que ter sucesso em duas tentativas de dissipar magia para libertar o alvo do efeito de encantamento. No caso de magias de área, a área é sobreposta; não é possível direcionar a magia duplicada para áreas diferentes. Você não pode acelerar magias na mesma rodada que utiliza esta habilidade."
      ],
      "tables": []
    },
    {
      "title": "Dentro da Curva",
      "level": 3,
      "paragraphs": [
        "Ao rolar os dados para determinar os efeitos de uma magia, você pode modificar todo dado rolado abaixo do valor médio (por exemplo, 3 para d6) para a média. Por exemplo, ao rolar 6d6 para calcular o dano de uma bola de fogo você obtém 1, 1, 3, 3, 4 e 5. Os dois 1 seriam transformados em 3."
      ],
      "tables": []
    },
    {
      "title": "Fora da Curva",
      "level": 3,
      "paragraphs": [
        "Ao rolar os dados para determinar os efeitos de uma magia, você pode rolar apenas um dado e multiplicar o resultado pela quantidade de dados em questão. Por exemplo, uma bola de fogo causa 6d6 pontos de dano. Você pode escolher rolar 1d6 e multiplicar esse resultado por seis. Contrária a toda lógica, esta habilidade pode ser combinada com a habilidade “Dentro da Curva”."
      ],
      "tables": []
    },
    {
      "title": "Arcana Numérica",
      "level": 3,
      "paragraphs": [
        "Você recebe um talento adicional que deve ser escolhido entre os talentos de classe do 20º Nível do Numeromante, você nunca pode ter mais de um dos talentos de 20º nível da classe."
      ],
      "tables": []
    },
    {
      "title": "A 10º Esfera",
      "level": 3,
      "paragraphs": [
        "Você pode lançar uma magia de 10º Ciclo, escolha uma magia da lista abaixo ou crie sua própria magia, caso decida criar escolha 3 magias que totalizam até 10 níveis, você cria uma magia com o custo e efeito combinado dessas magias, você não precisa preparar a magia escolhida por esta habilidade mas conjurá-la apenas uma vez por dia."
      ],
      "tables": [
        {
          "headers": [
            "O “Milagre” da Multiplicação",
            "Durante esta rodada, ao lançar uma magia, você pode escolher conjurar ela em qualquer número de aliados a até 18 metros de você (sem custo em PMs), outros parâmetros da magia (como alcance, área de efeito e duração não são alterados)."
          ],
          "rows": [
            [
              "Descritor: Tempo",
              ""
            ],
            [
              "Alcance: Pessoal",
              ""
            ],
            [
              "Alvo: Você",
              ""
            ],
            [
              "Duração: 1 Rodada",
              ""
            ],
            [
              "Tempo de Execução: Ação Livre",
              ""
            ],
            [
              "Teste de Resistência: Nenhuma",
              ""
            ]
          ]
        },
        {
          "headers": [
            "Dividir para Conquistar",
            "Durante esta rodada, ao lançar uma magia em um alvo, este sofre os efeitos da magia quatro vezes e recebe um teste de resistência, se aplicável, para cada magia. Caso use em conjunto da habilidade “Germinar Magia” a magia surte efeito 6 vezes."
          ],
          "rows": [
            [
              "Descritor: Tempo",
              ""
            ],
            [
              "Alcance: Pessoal",
              ""
            ],
            [
              "Alvo: Você",
              ""
            ],
            [
              "Duração: 1 Rodada",
              ""
            ],
            [
              "Tempo de Execução: Ação Livre",
              ""
            ],
            [
              "Teste de Resistência: Nenhuma",
              ""
            ]
          ]
        },
        {
          "headers": [
            "Contagem para o fim do Mundo",
            "Após entoar longos cânticos, o conjurador dispara pelas mãos uma carga de energia que voa até um ponto desejado e então explode, causando 40d20+20 pontos de dano."
          ],
          "rows": [
            [
              "Descritor: Fogo",
              ""
            ],
            [
              "Alcance: 90 Metros",
              ""
            ],
            [
              "Área: Explosão com 30m de raio",
              ""
            ],
            [
              "Duração: Instantânea",
              ""
            ],
            [
              "Tempo de Execução: 3 Rodadas",
              ""
            ],
            [
              "Teste de Resistência: Fortitude reduz a Metade",
              ""
            ]
          ]
        }
      ]
    }
  ],
  "classTalents": [
    {
      "id": "talento-dados-do-destino",
      "name": "Dados do Destino",
      "prerequisite": "4º Nível de Numeromante",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Quando você utiliza a habilidade “Dado Numeromântico” o valor rolado no dado é somado aos seus testes de resistência até o início de sua próxima rodada."
      ]
    },
    {
      "id": "talento-aplicar-constante",
      "name": "Aplicar Constante",
      "prerequisite": "4º Nível de Numeromante",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Ao rolar os dados para determinar os efeitos de uma magia, qualquer dado maximizado faz sua CA aumentar em +1 por uma rodada. Estes bônus nunca pode superar metade de seu nível nesta classe."
      ]
    },
    {
      "id": "talento-angulo-crescente",
      "name": "Ângulo Crescente",
      "prerequisite": "4º Nível de Numeromante",
      "prerequisiteLevel": 4,
      "paragraphs": [
        "Uma vez por dia como Ação Livre você pode ativar esta habilidade. Ao rolar os dados para determinar os efeitos de sua próxima magia, qualquer dado maximizado garante 2 PVs Temporários por 3 rodadas. No 8 e 16º Nível você recebe outro uso desta habilidade."
      ]
    },
    {
      "id": "talento-truque-das-equacoes",
      "name": "Truque das Equações",
      "prerequisite": "8º Nível de Numeromante",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Quando você conjurar uma magia de 1º ciclo ou superior com dados variáveis e o resultado está na média ou abaixo dela, você recupera 1 PM."
      ]
    },
    {
      "id": "talento-forca-em-numeros",
      "name": "Força em Números",
      "prerequisite": "8º Nível de Numeromante",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "Você adiciona as magias “Mísseis Mágicos” e “Sono” a sua lista e não precisa prepará-las sempre podendo utilizá-las contanto que pague seu custo. Além disso, quando conjuradas por você, estas magias recebem os benefícios dos talentos Metamágicos “Potencializar Magia” e da habilidade “Multiplicar Metamagia” sem custo adicional."
      ]
    },
    {
      "id": "talento-calculos-rapidos",
      "name": "Cálculos Rápidos",
      "prerequisite": "8º Nível de Numeromante",
      "prerequisiteLevel": 8,
      "paragraphs": [
        "O custo da habilidade “Germinar Magia” é reduzido em 2."
      ]
    },
    {
      "id": "talento-teorema-da-magia",
      "name": "Teorema da Magia",
      "prerequisite": "12º Nível de Numeromante",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Você pode alterar magias de área ou efeito que usem forma de cilindro, cone, dispersão, emanação ou explosão. A alteração consiste em criar espaços dentro da área ou efeito que não são afetados pela magia. A dimensão mínima de um desses espaços é um cubo de 1,5m de lado."
      ]
    },
    {
      "id": "talento-matematica-teorica",
      "name": "Matemática Teórica",
      "prerequisite": "12º Nível de Numeromante",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "A habilidade “Multiplicar Metamagia” sofre as seguintes mudanças:",
        "Ao conjurar uma magia, você pode pagar +1 PM para alterar o alcance ou área da magia para o quadruplo de seu original. Este efeito não se acumula com os talentos metamágicos “Aumentar Magia” ou “Ampliar Magia”."
      ]
    },
    {
      "id": "talento-geometria-da-magia",
      "name": "Geometria da Magia",
      "prerequisite": "12º Nível de Numeromante",
      "prerequisiteLevel": 12,
      "paragraphs": [
        "Ao lançar uma magia, você pode dividi-la, para receber os benefícios dessa habilidade. Por exemplo, um escudo arcano, em vez de conceder CA+4 a um único alvo, poderia conceder CA+2 a dois alvos, ou CA+1 a até quatro alvos; ou, em vez de uma única bola de fogo causando 6d6 pontos de dano, você poderia conjurar até seis bolas de fogo causando 1d6 de dano cada. Outros parâmetros da magia (como alcance, área de efeito, duração e bônus de dano por nível ou por habilidades) também são divididos na mesma proporção. O número máximo de divisões é igual ao seu modificador de Inteligência e decimais são sempre arredondados para baixo."
      ]
    },
    {
      "id": "talento-resometria",
      "name": "Resometria",
      "prerequisite": "16º Nível de Numeromante",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "O numeromante não precisa pagar pelos componentes materiais de viagem planar, mas o tempo de execução da magia muda para 1 hora. Se tiver acesso aos componentes materiais, pode lançar a magia com o tempo de execução normal. Além disso, os cálculos numeromânticos aumentam a precisão do transporte: as criaturas chegam exatamente no destino pretendido."
      ]
    },
    {
      "id": "talento-estudos-arcanos",
      "name": "Estudos Arcanos",
      "prerequisite": "16º Nível de Numeromante",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Se você e outro conjurador arcano realizarem um descanso longo juntos vocês podem compartilhar seus grimórios. Em termos de regra vocês podem escolher magias conhecidas de ambos os grimórios durante a preparação de magias. Isto não muda sua capacidade de conjurar magias, apenas estende sua lista de magias conhecidas."
      ]
    },
    {
      "id": "talento-matematica-basica",
      "name": "Matemática Básica",
      "prerequisite": "16º Nível de Numeromante",
      "prerequisiteLevel": 16,
      "paragraphs": [
        "Você pode ensinar uma magia de 1° nível que conhece para um número de criaturas igual seu Mod. Int, gastando 10 minutos. Os \"alunos\" podem lançar a magia uma vez cada, durante as próximas 24 horas."
      ]
    },
    {
      "id": "talento-expansao-de-grimorio",
      "name": "Expansão de Grimório",
      "prerequisite": "20º Nível de Numeromante",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "Você recebe um bônus permanente de +4 em Inteligência e adiciona 4 Magias Conhecidas a todos os Ciclos de Magia que possa conjurar, por fim recebe 2 PM adicionais por nível nesta classe."
      ]
    },
    {
      "id": "talento-juros-compostos",
      "name": "Juros Compostos",
      "prerequisite": "20º Nível de Numeromante",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "O custo de todos os seus metamágicos reduz em 1 (Para um mínimo de 0), este efeito de redução sempre se aplica por último após qualquer outro efeito similar que você possuir. Se o custo de um Metamágico fosse reduzido abaixo de 0 por este efeito, reduza o custo da magia em 1 ao invés disso."
      ]
    },
    {
      "id": "talento-equacoes-taumatologicas",
      "name": "Equações Taumatológicas",
      "prerequisite": "20º Nível de Numeromante",
      "prerequisiteLevel": 20,
      "paragraphs": [
        "A habilidade “Dentro da Curva” sofre as seguintes alterações:",
        "Ao rolar os dados para determinar os efeitos de uma magia, talento metamágico ou efeitos que causam dano, você pode modificar todo dado rolado igual ou abaixo do valor médio (por exemplo, 3 para d6) para o máximo. Por exemplo, ao rolar 6d6 para calcular o dano de uma bola de fogo você obtém 1, 1, 3, 3, 4 e 5. Os dois 1 e ambos os 3 seriam transformados em 6."
      ]
    }
  ]
} satisfies ClassDetail;

~~~~
