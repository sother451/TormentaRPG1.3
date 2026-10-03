export interface RaceEntry {
  slug: string;
  name: string;
  abilityRule: string | null;
  size: string | null;
  movement: string | null;
  vision: string | null;
  traits: string[];
}

export const races: RaceEntry[] = [
  {
    "slug": "aggelus",
    "name": "Aggelus",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio ou Pequeno.",
    "movement": "Aggelus de tamanho Médio têm deslocamento de 9m; Aggelus Pequenos têm deslocamento de 6m.",
    "vision": "Visão No Escuro",
    "traits": [
      "Tamanho Médio ou Pequeno. Aggelus nascidos em famílias humanas, élficas ou de outras raças de tamanho Médio também têm esse tamanho, sem receber bônus ou penalidades especiais. Aggelus nascidos em famílias halflings, goblins e de outras raças de tamanho Pequeno conservam esse mesmo tamanho, recebendo os mesmos bônus e penalidades (+1 na classe de armadura, +1 nas jogadas de ataque, +4 em testes de Furtividade, e precisam usar armas menores).",
      "Aggelus de tamanho Médio têm deslocamento de 9m; Aggelus Pequenos têm deslocamento de 6m.",
      "Espírito. Um Aggelus não é considerado humanoide, sendo imune a efeitos que afetam apenas estas criaturas. Eles são afetados normalmente por magias e efeitos que afetam espíritos. Magias que enviam extraplanares de volta ao Plano de origem não os afetam (mas magias de Banimento, que expulsam a vítima do Plano do conjurador, sim).",
      "Ao contrário de outros seres do tipo espírito, Aggelus podem ser devolvidos à vida com magias como Reviver Os Mortos ou Ressurreição.",
      "Visão No Escuro. Aggelus enxergam no escuro a até 18m, mas apenas em preto e branco. Aggelus ignoram camuflagem (incluindo camuflagem total) por escuridão.",
      "Um Aggelus pode lançar a magia Luz Do Dia uma vez por dia.",
      "Resistência a ácido, frio e eletricidade 5. Aggelus ignoram os primeiros 5 pontos de dano provocado por estas energias."
    ]
  },
  {
    "slug": "anao",
    "name": "Anão",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio.",
    "movement": "Deslocamento 6m.",
    "vision": "Visão no Escuro",
    "traits": [
      "Tamanho Médio.",
      "Deslocamento 6m. Embora sejam do tamanho Médio, anões têm pernas curtas e seu deslocamento é o mesmo de criaturas pequenas. No entanto, o deslocamento de um anão jamais é reduzido por uso de armadura ou excesso de carga.",
      "Visão no Escuro. Anões podem enxergar no escuro a até 18 metros, apenas em preto e branco. Um anão ignora camuflagem (incluindo camuflagem total) por escuridão.",
      "+4 em testes de resistência contra venenos e magias",
      "Para anões, todos os tipos de machados e martelos são armas simples",
      "Classe de armadura +4 contra adversários de tamanho Grande ou maior.",
      "+2 em testes de perícias para assuntos relacionados a pedra e metal, apenas para perícias com Inteligência ou Sabedoria como habilidade-chave. Este bônus aplica-se a coisas como masmorras, armadilhas, passagens secretas, armas, armaduras, jóias e gemas preciosas, objetos de arte",
      "Anões são automaticamente bem-sucedidos em testes de resistência para evitar qualquer forma de petrificação."
    ]
  },
  {
    "slug": "bugbear",
    "name": "Bugbear",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Grande.",
    "movement": "Deslocamento 9m.",
    "vision": "Visão No Escuro",
    "traits": [
      "Tamanho Grande. Bugbears são considerados criaturas Grandes (-1 nas Jogadas De Ataque, -1 em sua Classe De Armadura, -4 em testes de Furtividade, precisam usar armas maiores e recebem +4 em testes de manobra contra oponentes médios).",
      "Deslocamento 9m.",
      "Visão No Escuro. Bugbears enxergam no escuro a até 18m, mas apenas em preto e branco. Um Bugbear ignora camuflagem (incluindo camuflagem total) por escuridão.",
      "Faro. Bugbears detectam automaticamente a presença de criaturas a até 9m e recebem +4 em testes de sobrevivência para rastrear.",
      "+4 em testes de Furtividade e Intimidação. Bugbears são silenciosos e sabem como aterrorizar."
    ]
  },
  {
    "slug": "cacadoras",
    "name": "Caçadoras",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio.",
    "movement": "Deslocamento básico 9m em terra, 6m em escalada.",
    "vision": "Visão na Penumbra",
    "traits": [
      "Tamanho Médio.",
      "Deslocamento básico 9m em terra, 6m em escalada.",
      "Visão na Penumbra. Caçadoras ignoram camuflagem (mas não camuflagem total) por escuridão.",
      "Armas naturais. Caçadoras podem atacar com garras (1d4 cada, corte) e mordida (1d6, perfuração).",
      "Faro. Caçadoras recebem +4 em testes de sobrevivência para rastrear usando o faro, e também detectam automaticamente a presença de criaturas a até 9m.",
      "+4 em testes de Atletismo e Sobrevivência. Caçadoras têm agilidade extrema e aptidão natural para a vida nos ermos.",
      "+4 em testes de Destreza para usar cordas. A imobilização de vítimas é praticada como arte pelas caçadoras.",
      "Caçadoras recuperam +1 PV por nível durante um descanso rápido, aumentando em +1 a cada 5 níveis."
    ]
  },
  {
    "slug": "centauro",
    "name": "Centauro",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Grande.",
    "movement": "Deslocamento 12m.",
    "vision": null,
    "traits": [
      "Tamanho Grande. Embora tenham uma metade humana, por sua estrutura poderosa, centauros são considerados criaturas Grandes (-1 nas Jogadas De Ataque, -1 em sua Classe De Armadura, -4 em testes de Furtividade, precisam usar armas maiores e recebem +4 em testes de manobra contra oponentes Médios).",
      "Deslocamento 12m.",
      "Cascos. Centauros têm uma arma natural de cascos (dano 1d6, esmagamento).",
      "Centauros podem usar armas e armaduras de criaturas médias ou grandes. Um centauro se qualifica para talentos que exijam montaria e usa Atletismo no lugar de Cavalgar.",
      "Medo de Altura. Caso tenha que subir qualquer altura superior a 3m (ou se estiver a até 3m de uma queda desta altura), um centauro sofre –4 em suas jogadas e testes. Ele também não pode realizar nenhuma ação que dependa de concentração, como lançar magias."
    ]
  },
  {
    "slug": "ceratops",
    "name": "Ceratops",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Grande.",
    "movement": "Deslocamento 9m.",
    "vision": null,
    "traits": [
      "Tamanho Grande. Ceratops são considerados criaturas Grandes (-1 nas Jogadas De Ataque, -1 em sua Classe De Armadura, -4 em testes de Furtividade, precisam usar armas maiores e recebem +4 em testes de manobra contra oponentes Médios).",
      "Deslocamento 9m.",
      "Chifres. Ceratops têm uma arma natural de chifres (dano 1d6, esmagamento).",
      "Classe de armadura +2. Ceratops têm couro rígido.",
      "Ceratops machos recebem +2 em testes de Intimidação, e usam Força como habilidade-chave dessa perícia. Fêmeas recebem +2 em duas entre as seguintes perícias: Cura, Ofício, Profissão ou Sobrevivência.",
      "Medo de Altura. Caso tenha que subir qualquer altura superior a 3m (ou se estiver a até 3m de uma queda desta altura), um ceratops sofre –4 em suas jogadas e testes. Ele também não pode realizar nenhuma ação que dependa de concentração, como lançar magias."
    ]
  },
  {
    "slug": "elfos",
    "name": "Elfos",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio.",
    "movement": "Deslocamento 9m.",
    "vision": "Visão na Penumbra",
    "traits": [
      "Tamanho Médio.",
      "Deslocamento 9m.",
      "Visão na Penumbra. Um Elfo ignora a camuflagem (mas não a camuflagem total) pela escuridão.",
      "Elfos sabem usar espadas curtas, espadas longas, floretes e arcos (curtos, longos e compostos). Elfos também recebem +1 em jogadas de ataque com uma destas armas (à escolha do jogador).",
      "+4 em testes de Vontade contra Encantamentos. Elfos também são imunes à magia Sono.",
      "+4 em testes de Identificar Magia e Percepção. Elfos têm familiaridade com magia e sentidos apurados.",
      "Qualquer Magia Arcana lançada por um Elfo tem classe de dificuldade +2 para resistir.",
      "Braquiação: Em matas fechadas, podem se mover livremente através das copas das árvores, balançando em galhos e cipós, com seu deslocamento normal. Você faz testes de Acrobacia apenas em situações extremas (por exemplo, se recebeu dano). Você deve estar com as mãos livres para se deslocar, mas pode usá-las normalmente se ficar parado.",
      "Vigilância: Na primeira rodada de combate, você tem direito a uma ação de movimento adicional"
    ]
  },
  {
    "slug": "elfos-do-ceu",
    "name": "Elfos-do-Céu",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio.",
    "movement": "Elfos-do-céu têm deslocamento básico de 9m em terra.",
    "vision": "Visão na Penumbra",
    "traits": [
      "Tamanho Médio.",
      "Elfos-do-céu têm deslocamento básico de 9m em terra. Eles também podem voar a uma velocidade de 18m.",
      "Visão na Penumbra. Um Elfo-do-céu ignora camuflagem (mas não camuflagem total) por escuridão.",
      "Elfos-do-céu sabem usar espadas curtas, espadas longas, floretes e arcos (curtos, longos e compostos).",
      "+4 em testes de Percepção. Elfos têm visão aguçada.",
      "+4 em testes de Vontade contra Encantamentos. Elfos-do-céu também são imunes à magia Sono.",
      "Vigilância: Na primeira rodada de combate, você tem direito a uma ação de movimento adicional."
    ]
  },
  {
    "slug": "elfos-do-mar",
    "name": "Elfos do Mar",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio.",
    "movement": "Deslocamento 9m, natação 9m.",
    "vision": "Visão na Penumbra",
    "traits": [
      "Tamanho Médio.",
      "Deslocamento 9m, natação 9m.",
      "Visão na Penumbra. Um elfo-do-mar ignora camuflagem (mas não camuflagem total) por escuridão. Elfos-do-mar podem ver duas vezes mais longe que os humanos em situações de pouca luminosidade, como luz das estrelas e tochas.",
      "Percepção às Cegas 12m. Um elfo-do-mar pode perceber através de um sentido de radar, apenas debaixo d’água, qualquer criatura num raio de 12m.",
      "Terreno Predileto. Um elfo-do-mar recebe +2 na sua classe de armadura e em testes de Acrobacia, Atletismo, Furtividade, Percepção e Sobrevivência embaixo d’água.",
      "Dependência de Água. Um elfo-do-mar pode ficar fora d’água por um número de horas igual ao seu valor de Constituição. Esgotado esse prazo ele começa a sufocar. O elfo-do-mar deve permanecer imerso em água durante pelo menos oito horas antes de um novo período em terra seca.",
      "Elfos-do-mar sabem usar tridente, rede e azagaia. Elfos-do-mar também recebem +1 em jogadas de ataque com uma destas armas (à escolha do jogador).",
      "Elfos do Mar podem lançar enfeitiçar animal livremente, mas apenas para animais aquáticos"
    ]
  },
  {
    "slug": "elfos-sombrios",
    "name": "Elfos Sombrios",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio.",
    "movement": "Deslocamento 9m.",
    "vision": "Visão no Escuro",
    "traits": [
      "Tamanho Médio.",
      "Deslocamento 9m.",
      "Visão no Escuro. Elfos sombrios podem enxergar no escuro, apenas em preto e branco. Um elfo sombrio ignora a camuflagem (incluindo camuflagem total) por escuridão.",
      "Elfos sombrios sabem usar espadas curtas, floretes e bestas de mão, e também recebem +1 em jogadas de ataque com uma destas armas (à escolha do jogador).",
      "+4 em testes de resistência contra venenos, magias ou habilidades similares à magia.",
      "+4 em testes de Identificar Magia e Percepção.",
      "Magias arcanas lançadas por um elfo sombrio tem CD +2 para resistir.",
      "Sensibilidade à luz. Um elfo sombrio fica ofuscado (–1 nas jogadas de ataque) quando exposto à luz do sol ou similares, como a magia luz do dia."
    ]
  },
  {
    "slug": "feithnari",
    "name": "Feithnari",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio.",
    "movement": "Feithnari têm deslocamento básico de 6m em terra.",
    "vision": "Visão na Penumbra",
    "traits": [
      "Tamanho Médio.",
      "Feithnari têm deslocamento básico de 6m em terra. Eles também podem voar com deslocamento de 18m.",
      "Visão na Penumbra. Um feithnari ignora camuflagem (mas não camuflagem total) por escuridão.",
      "+4 em testes de Percepção. Feithnari podem enxergar muito longe.",
      "Resistência a fogo 5. Feithnari ignoram os primeiros 5 pontos de dano provocados por ataques flamejantes.",
      "Feithnari podem fazer testes de Conhecimento mesmo sem treinamento, por seus aprendizados longos e intensos sobre os detalhes de Arton e outros mundos."
    ]
  },
  {
    "slug": "finntroll",
    "name": "Finntroll",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio.",
    "movement": "Deslocamento 9m.",
    "vision": "Visão no Escuro",
    "traits": [
      "Tamanho Médio.",
      "Deslocamento 9m.",
      "Visão no Escuro. Finntroll enxergam no escuro a até 18 metros, mas apenas em preto e branco. Um finntroll ignora a camuflagem (incluindo camuflagem total) por escuridão.",
      "Devido ao material fibroso (um tipo complexo de fungo) que forma seus corpos, finntroll são imunes a atordoamento e metamorfose. Por outro lado, finntroll são afetados por magias que afetam apenas plantas.",
      "Respeito dos Trolls. Trolls de todos os tipos reconhecem os finntroll como seus mestres, e não os atacam em circunstâncias normais. Trolls devem ser bem-sucedidos em um teste de Vontade para atacar um finntroll CD 10+MdN+Mod. Car.",
      "Resistência a magia +4. Finntroll recebem +4 em testes de resistência contra magias.",
      "+4 em testes de Identificar Magia e Intimidação.",
      "Regeneração. Qualquer dano causado a um finntroll é considerado dano não letal. Apenas fogo e ácido causam dano normal a eles. Um membro decepado cresce novamente em 2d6 dias. Diferentes dos trolls comuns, os finntroll não podem “grudar” um membro decepado apenas segurando-o contra o ferimento. Sua regeneração não funciona enquanto estão expostos à luz do sol ou similar (como a magia luz do dia), permitindo que sofram qualquer dano normalmente.",
      "Sensibilidade à Luz. Um finntroll fica ofuscado (–1 em ataques) quando exposto à luz do sol ou similar, como a magia luz do dia."
    ]
  },
  {
    "slug": "gnoll",
    "name": "Gnoll",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio.",
    "movement": "Deslocamento 9m.",
    "vision": "Visão na Penumbra",
    "traits": [
      "Tamanho Médio.",
      "Deslocamento 9m.",
      "+1 na classe de armadura. Gnolls possuem pelo grosso.",
      "Faro. Gnolls recebem +4 em testes de Sobrevivência para rastrear usando o faro, e também detectam automaticamente a presença de criaturas a até 9m.",
      "Mordida. Gnolls possuem um ataque natural de mordida (1d6, corte).",
      "Visão na Penumbra. Um Gnoll ignora camuflagem (mas não camuflagem total) por escuridão."
    ]
  },
  {
    "slug": "gnomos",
    "name": "Gnomos",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Pequeno.",
    "movement": "Deslocamento 6m.",
    "vision": "Visão na Penumbra",
    "traits": [
      "Tamanho Pequeno. Gnomos recebem classe de armadura +1, +1 nas jogadas de ataque e +4 em testes de Furtividade, mas precisam usar armas menores.",
      "Deslocamento 6m.",
      "Visão na Penumbra. Um gnomo ignora a camuflagem (mas não a camuflagem total) por escuridão. Gnomos podem ver duas vezes mais longe que os humanos em condições de pouca iluminação, como luz das estrelas e tochas.",
      "+4 em testes de Intuição e Ofício (alquimia). Gnomos são perspicazes e familiarizados com ilusões e poções.",
      "Classe de armadura +4 contra adversários de tamanho Grande ou maior.",
      "Gnomos podem se comunicar com animais livremente. Veja a magia falar com animais.",
      "Um gnomo com Carisma 10 ou mais pode lançar as seguintes magias livremente, sem gastar pontos de magia: globos de luz, som fantasma, prestidigitação."
    ]
  },
  {
    "slug": "goblin",
    "name": "Goblin",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Pequeno: Goblins recebem classe de armadura +1, +1 nas jogadas de ataque e +4 em testes de Furtividade, mas precisam us...",
    "movement": "Deslocamento 9m.",
    "vision": "Visão no Escuro",
    "traits": [
      "Tamanho Pequeno: Goblins recebem classe de armadura +1, +1 nas jogadas de ataque e +4 em testes de Furtividade, mas precisam usar armas menores.",
      "Deslocamento 9m. Apesar de pequenos, os goblins são rápidos. Sua velocidade é a mesma de criaturas Médias.",
      "Visão no Escuro. Goblins (assim como outros goblinóides) podem enxergar no escuro até 18 metros, apenas em preto e branco. Um goblin ignora a camuflagem (incluindo camuflagem total) por escuridão.",
      "+4 em testes de Fortitude contra doenças e venenos. Os goblins também não precisam fazer testes de Fortitude por ingerir comida estragada.",
      "+4 em testes de Ladinagem e Ofício (um à escolha do jogador). Goblins estão acostumados a roubar para viver, e têm aptidão natural para engenhocas."
    ]
  },
  {
    "slug": "halfling",
    "name": "Halfling",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Pequeno.",
    "movement": "Deslocamento 6m.",
    "vision": null,
    "traits": [
      "Tamanho Pequeno. Halfings recebem classe de armadura +1, +1 em jogadas de ataque e +4 em testes de Furtividade e precisam usar armas menores.",
      "Deslocamento 6m.",
      "+2 em todos os testes de resistência, por sua sorte incrível.",
      "+1 em jogadas de ataque com armas de arremesso e fundas. O arremesso de pedras é um esporte popular da raça.",
      "Para halflings a perícia de atletismo é baseada em Destreza e não em Força.",
      "+4 em testes de enganação. Ninguém desconfia de haflings."
    ]
  },
  {
    "slug": "hengeyokai",
    "name": "Hengeyokai",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio ou Pequeno.",
    "movement": "Hengeyokais de tamanho Médio têm deslocamento 9m; hengeyokais de tamanho Pequeno têm deslocamento 6m.",
    "vision": "Visão no Escuro",
    "traits": [
      "Tamanho Médio ou Pequeno. O tamanho de um hengeyokai depende da forma híbrida preferida por sua família. Famílias que se passariam por humanas, élficas, nezumi ou vanara, de tamanho Médio, não recebem bônus ou penalidades. Famílias que se passariam por korobokuru, halflings ou goblins são de tamanho Pequeno, recebendo os mesmos bônus e redutores (+1 na classe de armadura, +1 nas jogadas de ataque, +4 em testes de Furtividade, precisam usar armas menores).",
      "Hengeyokais de tamanho Médio têm deslocamento 9m; hengeyokais de tamanho Pequeno têm deslocamento 6m.",
      "Espírito. Um hengeyokai não é considerado humanoide, sendo imune a efeitos que afetam apenas estas criaturas, mas são afetados normalmente por magias e efeitos que afetam espíritos. Eles não podem ser devolvidos à vida com magias como reviver os mortos ou ressurreição. Fora de seu mundo de origem, eles podem ser afetados por magias como banimento e outras que enviam espíritos de volta ao seu próprio Plano.",
      "Visão no Escuro. Hengeyokais enxergam no escuro a até 18m, mas apenas em preto e branco. Hengeyokais ignoram camuflagem (incluindo camuflagem total) por escuridão.",
      "Forma-base. Um hengeyokai deve escolher um animal para sua forma-base. A aparência da forma-base é a do animal escolhido com características fantásticas, exóticas ou assustadoras, mas sempre chamativas. Ele pode assumir sua forma-base com uma ação padrão. Se estiver em sua forma-base, possui todas as suas estatísticas normais, mais uma habilidade da forma selvagem do druida, esta forma selvagem é considerada como uma habilidade de classe para propósitos de acúmulos. Forma híbrida. A aparência padrão do hengeyokai é a de um humanoide com traços animais de sua forma-base. Ele pode assumir sua forma híbrida com uma ação padrão. Essa é sua forma natural para magias como desmetamorfosear ou visão da verdade .",
      "O hengeyokai pode lançar a magia alterar-se sem gastar PM. Porém, a duração da magia muda para concentração.",
      "Um hengeyokai pode alterar sua forma-base, mas isso exige eventos traumáticos ou de grande peso. Em termos de regras, o mestre pode aceitar a mudança em um momento apropriado, ao custo de 200 XP por nível do personagem. A critério do mestre, esse custo pode ser cancelado se o jogador aceitar uma nova tendência aleatória (duas rolagens de 1d6: 1–2 Bondoso ou Leal, 3–4 Neutro, 5–6 Maligno ou Caótico)."
    ]
  },
  {
    "slug": "hobgoblin",
    "name": "Hobgoblin",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio.",
    "movement": "Deslocamento 9m.",
    "vision": "Visão no Escuro",
    "traits": [
      "Tamanho Médio.",
      "Deslocamento 9m.",
      "Visão no Escuro: Hobgoblins podem enxergar no escuro a até 18 metros, apenas em preto e branco. Um hobgoblin ignora camuflagem (incluindo camuflagem total) por escuridão.",
      "1 talento de combate à escolha do jogador.",
      "+4 em testes de Furtividade e Ofício (metalurgia)."
    ]
  },
  {
    "slug": "humano",
    "name": "Humano",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio.",
    "movement": "Deslocamento 9m.",
    "vision": null,
    "traits": [
      "Tamanho Médio.",
      "Deslocamento 9m.",
      "1 talento adicional à escolha do jogador.",
      "2 perícias treinadas extras, que não precisam ser escolhidas entre suas perícias de classe."
    ]
  },
  {
    "slug": "kobold",
    "name": "Kobold",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Pequeno.",
    "movement": "Deslocamento 9m.",
    "vision": "Visão no Escuro",
    "traits": [
      "Tamanho Pequeno. Por seu tamanho reduzido, os kobolds recebem CA+1, +1 nas jogadas de ataque, +4 em testes de Furtividade, e devem usar armas e vestimentas menores.",
      "Deslocamento 9m. Mesmo sendo criaturas Pequenas, kobolds são bastante ágeis, possuindo o mesmo deslocamento de criaturas Médias.",
      "Classe de armadura +1. Kobolds têm escamas duras sobre o corpo.",
      "Visão no Escuro. Kobolds podem enxergar no escuro a até 18m, mas apenas em preto e branco. Um kobold ignora a camuflagem (incluindo camuflagem total) por escuridão.",
      "Potência Dracônica. Devido à potência do seu sangue dracônico, magias com os descritores ácido, eletricidade, fogo ou frio conjuradas por um kobold recebem um bônus de +1 em cada dado de dano. Um toque chocante, por exemplo, causaria 2d8+2 pontos de dano.",
      "Horda. Quando mais de um kobold ataca o mesmo alvo ao mesmo tempo, todos eles recebem um bônus em qualquer jogada de ataque, seja corpo-a-corpo ou à distância, igual ao número de kobolds atacando por exemplo, +5 se forem cinco kobolds. O bônus máximo que um kobold pode receber com esta habilidade é igual a metade do seu nível de personagem, arredondado para baixo (por exemplo, +3 no 6º nível).",
      "Sensibilidade à luz. Os Kobolds ficam ofuscados (–1 em ataques) sob luz solar ou a magia luz do dia."
    ]
  },
  {
    "slug": "lefeu",
    "name": "Lefeu",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio.",
    "movement": "Deslocamento 9m.",
    "vision": "Visão no Escuro",
    "traits": [
      "Tamanho Médio.",
      "Deslocamento 9m.",
      "Monstro. Lefou não são considerados humanos ou humanoides, sendo imunes a magias e efeitos que afetam apenas estas criaturas.",
      "Visão no Escuro. Lefou enxergam no escuro a até 18m, mas apenas em preto e branco. Lefou ignoram camuflagem (incluindo camuflagem total) por escuridão.",
      "1 talento da Tormenta adicional. Lefou não perdem pontos de carisma por este talento (mas perdem se adquirirem outros).",
      "Afinidade com a Tormenta. Lefou não recebem níveis negativos devido a efeitos causados pela Tormenta ou seus habitantes. Mas ainda podem receber níveis negativos de outras origens.",
      "Deformidade. Todo lefou tem algum defeito físico que, embora seja desagradável aos olhos, confere certa vantagem. O jogador deve escolher uma característica entre as seguintes.",
      "Articulações flexíveis",
      "+4 em testes de Acrobacia.",
      "Dedos rígidos",
      "Deslocamento de escalada 4,5m.",
      "Dentes afiados",
      "+4 em testes de Intimidação.",
      "Mãos membranosas",
      "Deslocamento de natação 4,5m.",
      "Olhos vermelhos",
      "+4 em testes de Percepção.",
      "Pele rígida",
      "Classe de armadura +1."
    ]
  },
  {
    "slug": "medusa",
    "name": "Medusa",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio.",
    "movement": "Deslocamento 9m.",
    "vision": "Visão no Escuro",
    "traits": [
      "Tipo monstro. Medusas não são consideradas humanoides.",
      "Tamanho Médio.",
      "Deslocamento 9m.",
      "Visão no Escuro. Medusas enxergam no escuro a até 18 metros, mas apenas em preto e branco. Medusas ignoram a camuflagem (incluindo camuflagem total) por escuridão.",
      "Medusas recebem +1 em jogadas de ataque com arco curto. Esta é a arma tradicional da raça.",
      "Serpentes. Os cabelos de serpentes da medusa podem ser usados como uma arma natural (dano 1d4 sem modificador de Força, perfuração). Todas as serpentes contam como um único ataque conjunto (não podem ser dirigidas contra alvos diferentes).",
      "Veneno. Um ataque bem-sucedido da medusa com suas serpentes exige da vítima um teste de Fortitude 10+MdN+Mod Con. Em caso de falha, a vítima sofre dano de 1d4 pontos de Força.",
      "Olhar atordoante. Uma vez por dia, como uma ação livre, uma medusa pode tentar atordoar uma criatura a até 9m olhando diretamente em seus olhos. A vítima deve ser bem-sucedida em um teste de Fortitude CD 10+MdN+Mod Car. para evitar o efeito. Se falhar, fica atordoada (incapaz de agir e desprevenida; CA–4) durante uma rodada."
    ]
  },
  {
    "slug": "meio-driade",
    "name": "Meio-Dríade",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio.",
    "movement": "Deslocamento 9m.",
    "vision": null,
    "traits": [
      "Tamanho Médio.",
      "Deslocamento 9m.",
      "Empatia selvagem. Meio-dríades já nascem com esta habilidade. Caso se tornem druidas ou rangers, recebem +4 em seus testes de Diplomacia com animais.",
      "Magias: Meio-dríades podem lançar constrição, torcer madeira, moldar madeira, forma de árvore e pele de árvore (apenas em si mesmos) livremente, sem gastar pontos de magia. No entanto, lançar ou manter estas magias em áreas estéreis (grandes cidades, desertos, embarcações...) ou malditas (cemitérios, templos malignos, casas assombradas...) exige um teste de Vontade (CD 15) por rodada.",
      "Sentidos Aguçados: +4 em testes de Percepção e Sobrevivência. Meio-dríades têm sentidos apurados e aptidão para viver nos ermos.",
      "Em matas fechadas, meio-dríades podem se mover livremente através das copas das árvores, balançando em galhos e cipós, com seu deslocamento normal. Você faz testes de Acrobacia apenas em situações extremas (por exemplo, se recebeu dano). Você deve estar com as mãos livres para se deslocar, mas pode usá-las normalmente se ficar parado."
    ]
  },
  {
    "slug": "meio-elfo",
    "name": "Meio-Elfo",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio.",
    "movement": "Deslocamento 9m",
    "vision": null,
    "traits": [
      "Tamanho Médio.",
      "Deslocamento 9m",
      "1 talento à escolha do jogador.",
      "1 perícia treinada extra, que precisa ser escolhida entre suas perícias de classe.",
      "+2 em testes de Vontade contra encantamentos.",
      "+2 em testes de Identificar Magia e Percepção.",
      "Escolha uma habilidade de qualquer variante de elfo, você recebe esta habilidade."
    ]
  },
  {
    "slug": "meio-elfo-do-mar",
    "name": "Meio Elfo do Mar",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio.",
    "movement": "Deslocamento 9m",
    "vision": "Visão na Penumbra",
    "traits": [
      "Tamanho Médio.",
      "Deslocamento 9m",
      "Visão na Penumbra. Um meio elfo-do-mar ignora camuflagem (mas não camuflagem total) por escuridão.",
      "+2 em testes de Percepção e Sobrevivência",
      "1 talento bônus à escolha do jogador",
      "1 perícia treinada extra, que precisa ser escolhida entre suas perícias de classe.",
      "Respirar na Água. Um meio elfo-do-mar pode respirar na água normalmente. Neste aspecto, herdam o melhor de cada progenitor, pois podem viver tanto no mundo seco quanto no mundo submerso.",
      "Um meio-elfo-do-mar satisfaz requisitos como se fosse um elfo-do-mar."
    ]
  },
  {
    "slug": "meio-orc",
    "name": "Meio Orc",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio.",
    "movement": "Deslocamento 9m",
    "vision": "Visão no Escuro",
    "traits": [
      "Tamanho Médio.",
      "Deslocamento 9m",
      "Visão no Escuro. Meio-orcs podem enxergar no escuro a até 18 metros, apenas em preto e branco. Um meio-orc ignora a camuflagem (incluindo camuflagem total) por escuridão.",
      "1 talento de combate à escolha do jogador.",
      "+4 em testes de Intimidação. Meio-orcs são ameaçadores.",
      "Sangue orc. Para todos os efeitos relacionados à raça, meio-orcs são considerados orcs"
    ]
  },
  {
    "slug": "minauro",
    "name": "Minauro",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio.",
    "movement": "Deslocamento 9m",
    "vision": null,
    "traits": [
      "Tamanho Médio.",
      "Deslocamento 9m",
      "Minauros podem escolher três entre os seguintes traços raciais:",
      "+2 em uma habilidade à escolha do jogador.",
      "1 talento adicional à escolha do jogador.",
      "1 perícia treinada extra, que precisa ser escolhida entre suas perícias de classe.",
      "+4 em testes de Diplomacia e Obter Informação. Minauros têm mente aberta, e por isso fazem amizade e se relacionam com outras pessoas mais facilmente que a raça de seus pais."
    ]
  },
  {
    "slug": "minaques",
    "name": "Minaques",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio.",
    "movement": "Deslocamento 9m.",
    "vision": null,
    "traits": [
      "Tamanho Médio.",
      "Deslocamento 9m.",
      "Classe de armadura +1. Minaques têm pêlos espessos e um couro rígido. Além disso, eles nunca precisam fazer testes de Fortitude para evitar dano por ambientes frios (mas recebem dano normal por magias e efeitos de frio).",
      "+4 em testes de Atletismo e Sobrevivência. Desde muito cedo, minaques aprendem a escalar paredões, saltar precipícios, caçar e sobreviver nas montanhas geladas."
    ]
  },
  {
    "slug": "minotauros",
    "name": "Minotauros",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio.",
    "movement": "Deslocamento 9m",
    "vision": null,
    "traits": [
      "Tamanho Médio.",
      "Deslocamento 9m",
      "Classe de armadura +1. Minotauros têm couro rígido.",
      "Minotauros possuem um ataque natural de chifres (1d6, crítico x2, perfurante).",
      "Faro. Minotauros recebem +4 em testes de sobrevivência para rastrear usando o faro, e também detectam automaticamente a presença de criaturas a até 9m.",
      "Lógica labiríntica: Minotauros têm excelente senso de direção, e recebem +8 em testes de Sobrevivência para não se perder.",
      "Medo de altura. Caso tenha que subir qualquer altura superior a 3m (ou se estiver a até 3m de uma queda desta altura), um minotauro sofre penalidade de -4 em suas jogadas e testes. Ele também não pode realizar nenhuma ação que dependa de concentração, como conjurar magias."
    ]
  },
  {
    "slug": "moreaus",
    "name": "Moreaus",
    "abilityRule": "Você recebe +2. Distribua em uma habilidade a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio.",
    "movement": "Deslocamento 9m",
    "vision": null,
    "traits": [
      "Tamanho Médio.",
      "Deslocamento 9m",
      "1 talento de Moreau adicional a escolha do jogador e 1 talento adicional à escolha do jogador.",
      "1 perícia treinada extra, que precisa ser escolhida entre suas perícias de classe."
    ]
  },
  {
    "slug": "nagah",
    "name": "Nagah",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio.",
    "movement": "Deslocamento 9m",
    "vision": "Visão na Penumbra",
    "traits": [
      "Tamanho Médio.",
      "Deslocamento 9m",
      "Embora tenham uma metade humana, por sua estrutura poderosa, nagahs são consideradas criaturas Grandes (ataques -1, CA -1, Furtividade -4, usam armas maiores, recebem +4 em testes de manobra contra oponentes Médios).",
      "Cauda. Nagahs têm uma arma natural de cauda (dano 1d6, esmagamento).",
      "Classe de armadura +2. Nagahs têm couro rígido.",
      "Visão na Penumbra. Uma nagah ignora camuflagem (mas não camuflagem total) por escuridão.",
      "+4 em testes de Fortitude contra venenos.",
      "+4 em testes de enganação . Nagahs são dissimuladas.",
      "–2 em testes de Percepção (apenas para ouvir). Nagahs têm audição ruim.",
      "–4 em testes de resistência contra música de bardo ou magias lançadas por bardos. É difícil para nagahs resistir a boa música.",
      "Nagahs sofrem um redutor de –4 em testes de resistência contra frio e gelo.",
      "Nagahs são automaticamente bem-sucedidas em testes de resistência para evitar qualquer forma de petrificação.",
      "Fêmeas: Recebem +2 em testes de Atuação, Diplomacia e Enganação (apenas para blefar) usando a cauda",
      "Machos: Recebem +2 em testes de Acrobacia e Atletismo usando a cauda."
    ]
  },
  {
    "slug": "nimbus",
    "name": "Nimbus",
    "abilityRule": "+4 em uma única habilidade, escolhida aleatoriamente. Cada nimbus é diferente. Suas habilidades refletem suas características bizarras, ou suas características bizarras refletem suas habilidades. Ou não. O jogador deve rolar 1d6 (1 - Força, 2 - Destreza, etc) para descobrir em qual habilidade ele receberá o bônus racial, antes de rolar ou selecionar seus valores de habilidades.",
    "size": "Tamanho Médio ou Pequeno.",
    "movement": "Nimbus de tamanho Médio têm deslocamento 9m; nimbus de tamanho Pequeno têm deslocamento 6m.",
    "vision": "Visão no Escuro",
    "traits": [
      "Tamanho Médio ou Pequeno. Nimbus nascidos em famílias humanas, élficas ou de outras raças de tamanho Médio também têm esse tamanho, sem receber bônus ou redutores especiais. Nimbus nascidos em famílias halflings, goblins e outras raças de tamanho Pequeno conservam esse mesmo tamanho, recebendo os mesmos bônus e redutores (+1 na classe de armadura, +1 nas jogadas de ataque, +4 em testes de Furtividade, precisam usar armas menores).",
      "Nimbus de tamanho Médio têm deslocamento 9m; nimbus de tamanho Pequeno têm deslocamento 6m.",
      "Visão no Escuro. Nimbus enxergam no escuro a até 18m, mas apenas em preto e branco. Nimbus ignoram camuflagem (incluindo camuflagem total) por escuridão.",
      "Característica Bizarra. Nimbus possuem alguns traços físicos imprevisíveis. Essas características podem ajudá-los em certas situações. Você pode selecionar duas perícias cuja habilidade- chave seja sua habilidade rolada aleatoriamente, e receber um bônus de +4 em seus testes. Essas perícias são consideradas de classe para o nimbus. As características normalmente têm relação direta com as perícias que favorecem.",
      "Perturbação Mental. Todo nimbus deve possuir pelo menos uma perturbação mental, que é um elemento importante de sua personalidade (verificar em Insanidade). Isso os torna imunes a adquirir pontos de insanidade, a dano de Sabedoria e a efeitos de confusão. Por suas perturbações, os nimbus têm dificuldade em obter a confiança dos outros, sofrendo penalidade de –2 em testes de Diplomacia.",
      "Resistência à energia 10. Nimbus são resistentes a um tipo particular de energia, escolhido aleatoriamente. O jogador deve rolar 1d6 para descobrir sua resistência à energia (1 - ácido, 2 - eletricidade, 3 - fogo, 4 - frio, 5 - sônico, 6 - essência).",
      "Sorte e azar. Uma vez por dia, um nimbus pode lançar sorte súbita ou azar atípico (CD 12 + mod. Carisma)."
    ]
  },
  {
    "slug": "orc",
    "name": "Orc",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio.",
    "movement": "Deslocamento 9m.",
    "vision": "Visão no Escuro",
    "traits": [
      "Tamanho Médio.",
      "Deslocamento 9m.",
      "1 talento de combate à escolha do jogador.",
      "+4 em testes de Intimidação e Ofício (minerador).",
      "Brutalidade. Os Orcs recebem um bônus de +1 nas jogadas de dano corpo-a-corpo.",
      "Sensibilidade à Luz. Os Orcs ficam ofuscados (-1 em ataques) sob luz solar ou a magia luz do dia.",
      "Visão no Escuro. Orcs enxergam no escuro a até 18 metros, mas apenas em preto e branco. Orcs ignoram camuflagem (incluindo camuflagem total) por escuridão."
    ]
  },
  {
    "slug": "pteros",
    "name": "Pteros",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio.",
    "movement": "Deslocamento básico 9m em terra, ou 15 metros em voo.",
    "vision": "Visão na Penumbra",
    "traits": [
      "Tamanho Médio.",
      "Deslocamento básico 9m em terra, ou 15 metros em voo. As asas, quando abertas, medem o dobro da altura do personagem. Ele sempre vai precisar deste espaço para decolar e voar. Pteros não conseguem voar usando armaduras de qualquer tipo.",
      "Visão na Penumbra. Voadores ignoram camuflagem (mas não camuflagem total) por escuridão.",
      "Garras dos pés. Voadores têm duas armas naturais de garras dos pés (dano 1d6 cada, corte). As garras só podem ser usadas se o ptero estiver voando.",
      "Ligação Natural. Cada dragão-voador é mentalmente ligado a um(a) parceiro(a) de sexo oposto, que pode ser um personagem jogador ou PdM. Um voador e seu parceiro(a) podem comunicar-se mentalmente quando estão dentro do alcance visual, e um sempre saberá em que direção e distância pode encontrar o outro. Um voador sem parceiro(a) recebe um talento adicional.",
      "Lógica Labiríntica. Voadores têm excelente senso de direção, e recebem +8 em testes de Sobrevivência para não se perder.",
      "+2 em testes de Atletismo (apenas para escalar) e Sobrevivência. Voadores têm aptidão natural para a vida nas montanhas e outros lugares elevados.",
      "+4 em testes de Percepção para observar. Pteros têm visão bastante aguçada.",
      "Mãos rudimentares. As duas mãos de um dragão-voador são consideradas inábeis. Além disso, voadores sofrem um redutor de –2 em testes de Destreza e perícias que envolvem habilidade manual."
    ]
  },
  {
    "slug": "qareen",
    "name": "Qareen",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio.",
    "movement": "Deslocamento 9m",
    "vision": null,
    "traits": [
      "Tamanho Médio.",
      "Deslocamento 9m",
      "Desejos. Uma vez por dia, um meio-gênio pode lançar uma magia que conheça sem gastar PM (ou sem esquecê-la), mas apenas se fizer isso na mesma rodada em que alguém tenha lhe pedido. \"Fazer um desejo\" ao meio-gênio é uma ação livre. Em combate, isso significa que o Qareen deve aguardar pela iniciativa de quem fez o pedido para poder lançar a magia (que tem tempo de execução normal). O Qareen não tem obrigação de lançar magias contra a própria vontade, mesmo que alguém peça.",
      "Pequenos desejos. Mesmo que não pertença a uma classe conjuradora, um meio-gênio pode conjurar todos os truques (magias arcanas de nível 0) como um feiticeiro. No entanto, ele só pode conjurar esses truques quando outra pessoa pede.",
      "Uma vez por dia, um meio-gênio pode conjurar vôo como um feiticeiro de mesmo nível, sem gastar pontos de magia.",
      "Conforme sua descendência, um meio-gênio tem resistência especial contra as seguintes formas de ataque.",
      "Água: resistência a frio e ácido 5.",
      "Ar: resistência a eletricidade e sônico 5.",
      "Fogo: resistência a fogo 5.",
      "Terra: redução de dano 3/cortante ou perfurante.",
      "Luz: resistência à eletricidade 10.",
      "Trevas: resistência a ácido e energia negativa 5. “Energia negativa” é provocada por efeitos e magias necromânticos (como infligir ferimentos)."
    ]
  },
  {
    "slug": "sklirynei",
    "name": "Sklirynei",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio.",
    "movement": "Deslocamento 9m",
    "vision": "Visão na Penumbra",
    "traits": [
      "Tamanho Médio.",
      "Deslocamento 9m",
      "Visão na Penumbra. Um skliryne ignora camuflagem (mas não camuflagem total) por escuridão.",
      "1 perícia treinada extra, que precisa ser escolhida entre suas perícias de classe.",
      "Para os sklirynei, pistolas e mosquetes são considerados armas simples, e eles não precisam ser treinados em perícias para usar armas ou armaduras tecnológicas (como o escafandro).",
      "Sklirynei com Carisma 10 ou mais podem lançar livremente as magias globos de luz, mãos mágicas ou prestidigitação.",
      "Por seus ossos frágeis, sklirynei sofrem um ponto de dano adicional por dado de dano de esmagamento. Por exemplo, um golpe normal de clava (dano 1d6) causa 1d6+1 pontos de dano em um skliryne. Já um tiro de tai-tai (dano 2d4) causa 2d4+2 pontos de dano."
    ]
  },
  {
    "slug": "sprite",
    "name": "Sprite",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Mínimo, Sprites recebem classe de armadura +2, +2 nas jogadas de ataque e +8 em testes de Furtividade, mas precisam usa...",
    "movement": "Deslocamento 3m, voo 12m com boa capacidade de manobra.",
    "vision": null,
    "traits": [
      "Tamanho Mínimo, Sprites recebem classe de armadura +2, +2 nas jogadas de ataque e +8 em testes de Furtividade, mas precisam usar armas e armaduras mínimas.",
      "Deslocamento 3m, voo 12m com boa capacidade de manobra.",
      "Língua da Natureza. As Sprites podem se comunicar com animais, como se estivessem constantemente sob efeito da magia falar com animais.",
      "Magias de Fada. Um sprite com Carisma 10 ou mais pode lançar globos de luz, som fantasma e prestidigitação livremente.",
      "Sprites podem, com uma ação de movimento, mudar livremente entre tamanho Miúdo (natural para sprites) e Pequeno. Quando estão em tamanho pequeno. Seus bônus mudam para CA+1, +1 nas jogadas de ataque e +4 em testes de furtividade. Suas asas desaparecem quando você muda para tamanho Pequeno, e você não pode voar enquanto não retornar ao tamanho Miúdo. Roupas e itens comportam-se da mesma forma que na magia alterar-se."
    ]
  },
  {
    "slug": "sulfure",
    "name": "Sulfure",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio ou Pequeno.",
    "movement": "Sulfure de tamanho Médio têm deslocamento 9m; sulfure Pequenos têm deslocamento 6m.",
    "vision": "Visão no Escuro",
    "traits": [
      "Tamanho Médio ou Pequeno. Sulfure nascidos em famílias humanas, élficas ou de outras raças de tamanho Médio também têm esse tamanho, sem receber bônus ou redutores especiais. Sulfure nascidos em famílias halflings, goblins e outras raças de tamanho Pequeno conservam esse mesmo tamanho, recebendo os mesmos bônus e redutores (+1 na classe de armadura, +1 nas jogadas de ataque, +4 em testes de Furtividade, precisam usar armas menores).",
      "Sulfure de tamanho Médio têm deslocamento 9m; sulfure Pequenos têm deslocamento 6m.",
      "Espírito. Um sulfure não é considerado humanoide, sendo imune a efeitos que afetam apenas estas criaturas. Eles são afetados normalmente por magias e efeitos que afetam espíritos. Magias que enviam extraplanares de volta ao Plano de origem não os afetam (mas magias de banimento, que expulsam a vítima do Plano do conjurador, sim).",
      "Ao contrário de outros seres do tipo espírito, sulfure podem ser devolvidos à vida com magias como reviver os mortos ou ressurreição.",
      "Visão no Escuro. Sulfure enxergam no escuro a até 18m, mas apenas em preto e branco. Sulfure ignoram camuflagem (incluindo camuflagem total) por escuridão.",
      "+2 em testes de Enganação e Furtividade. Sulfure são escorregadios.",
      "Escuridão. Sulfure podem lançar esta magia uma vez por dia.",
      "Resistência a fogo, frio e eletricidade 5. Sulfure sempre ignoram os primeiros 5 pontos de dano provocado por estas energias."
    ]
  },
  {
    "slug": "troglodita",
    "name": "Troglodita",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio.",
    "movement": "Deslocamento 9m",
    "vision": "Visão no Escuro",
    "traits": [
      "Tamanho Médio.",
      "Deslocamento 9m",
      "Tipo monstro. Um trog não é considerado humano ou humanoide, sendo imune a magias e efeitos que afetam apenas estas criaturas.",
      "Visão no Escuro. Trogs enxergam no escuro a até 18 metros, mas apenas em preto e branco. Trogs ignoram camuflagem (incluindo camuflagem total) por escuridão.",
      "Classe de armadura +2. Trogs têm couro rígido.",
      "Mordida. Trogs têm uma arma natural de mordida (dano 1d6, perfuração).",
      "+4 em testes de Furtividade (+8 em áreas rochosas). A pele dos trogs pode mudar de cor, camuflando-se com o ambiente. Esta habilidade não funciona se o trog estiver vestindo armadura média ou pesada.",
      "Mau cheiro. Uma vez por dia, com uma ação de movimento, um trog pode expelir uma secreção oleosa de odor nauseante. Todos os humanoides a até 9m devem ter sucesso em um teste de Fortitude CD 10 + MdN + Mod. Con. ou ficam enjoados durante 1d6 rodadas. Uma criatura enjoada pode executar apenas uma ação padrão ou de movimento (não ambas) por rodada. Falhando ou não, uma vítima não pode ser novamente afetada por 24 horas. O mau cheiro afeta apenas humanoides. Criaturas com habilidade de faro falham automaticamente no teste de resistência. Magias e efeitos que protegem contra veneno também protegem contra o mau cheiro.",
      "Trogs sofrem redutor de –4 em testes de resistência contra frio e gelo."
    ]
  },
  {
    "slug": "velocis",
    "name": "Velocis",
    "abilityRule": "Escolha entre: +4,+2 e -2, ou, +2 e +2. Distribua em habilidades a sua escolha. Você não pode escolher a mesma habilidade duas vezes.",
    "size": "Tamanho Médio.",
    "movement": "Deslocamento básico 12 metros.",
    "vision": "Visão na Penumbra",
    "traits": [
      "Tamanho Médio.",
      "Deslocamento básico 12 metros.",
      "Visão na Penumbra. Velocis ignoram camuflagem (mas não camuflagem total) por escuridão.",
      "Faro. Velocis recebem +4 em testes de Sobrevivência para rastrear usando o faro, e também detectam automaticamente a presença de criaturas a até 9m.",
      "Velocis ganham dois talentos adicionais escolhidos entre os seguintes: Corrida, Faro Discriminatório, Foco em Perícia (Iniciativa), Corredor Veloz.",
      "+2 em testes de Sobrevivência. Velocis são habituados a uma vida nômade.",
      "+8 em testes de Atletismo para saltar. Velocis são capazes de saltos incríveis."
    ]
  }
];

export const raceCount = races.length;
