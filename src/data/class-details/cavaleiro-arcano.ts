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
