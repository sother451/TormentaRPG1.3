# Tormenta RPG 1.3 — Fonte Única para Compendiums do Foundry VTT

> Arquivo de handoff para Claude/IA.
>
> Snapshot gerado em 2026-11-14 a partir da wiki `sother451/TormentaRPG1.3`.
>
> **REGRA ABSOLUTA:** Tormenta RPG 1.3 é a fonte normativa. Não preencher lacunas com Tormenta RPG antigo, D&D 3.5 ou suplementos sem autorização explícita.

## Como usar este arquivo

O documento final reúne as regras e dados estruturados conhecidos pela wiki para orientar a criação de Compendium Packs no Foundry VTT.

Camadas:
1. **CORE 1.3 / NORMATIVO** — regras e dados tratados pela wiki como Tormenta RPG 1.3.
2. **CATÁLOGO-BASE + OVERLAY 1.3** — usado especialmente para Magias.
3. **EXTENSÕES SEPARADAS** — Homebrew e integrações externas, explicitamente marcadas.

## Modelo sugerido de Compendiums Foundry

Recomendação de implementação, não regra de jogo:

- `tormenta13.rules-character` — personagem, habilidades, níveis, multiclasse, bônus.
- `tormenta13.rules-combat` — combate, ações, manobras, dano, defesa, movimento.
- `tormenta13.races`
- `tormenta13.skills`
- `tormenta13.classes`
- `tormenta13.class-talents`
- `tormenta13.talents`
- `tormenta13.spells`
- `tormenta13.conditions`
- `tormenta13.weapons`
- `tormenta13.armors`
- `tormenta13.magic-items`
- `tormenta13.ships`
- `tormenta13.journals`
- `tormenta13.homebrew` — sempre separado do core.

### Tipos de documento sugeridos

- **JournalEntry/JournalEntryPage:** regras longas, combate, personagem, regras gerais, navios.
- **Item:** raça, perícia, classe, talento, magia, arma, armadura, escudo, encantamento e item mágico.
- **ActiveEffect:** apenas quando a regra puder ser representada fielmente; não inventar automação.
- **RollTable:** apenas para tabelas explicitamente aleatórias.

### Flags sugeridas

```json
{
  "flags": {
    "tormenta13": {
      "source": "tormenta-1.3",
      "sourcePath": "src/data/...",
      "sourceId": "slug-ou-id",
      "rulesVersion": "1.3"
    }
  }
}
```

### Regras de importação para a IA

- Preserve nomes, números, fórmulas, CDs, custos, pré-requisitos e descrições.
- Não corrija conteúdo usando conhecimento externo.
- Não automatize efeitos narrativos por inferência.
- Use `slug`/`id` existentes como chave estável.
- Quando houver camada de alteração 1.3, ela sobrescreve o catálogo-base.
- Conteúdo removido/obsoleto não vira entrada ativa.
- Homebrew deve ficar fora do core.

## Fórmulas críticas consolidadas

- Ataque corpo-a-corpo / arremesso: `1d20 + Nível + Mod. For`
- Ataque à distância: `1d20 + Nível + Mod. Des`
- Ataque de toque: `1d20 + Nível + Mod. Conjuração`
- Dano corpo-a-corpo / arremesso: `Arma + MdN + Mod. For`
- Dano com arma de disparo: `Arma + MdN + Mod. Des`
- Classe de Armadura: `10 + MdN + Mod. Des + armadura + escudo`
- Teste de Resistência: `1d20 + MdN + Mod. relevante`
- CD padrão: `10 + MdN + Mod. relevante`

## Perícias — resumo crítico

- Teste: `1d20 + graduações + modificador de habilidade + outros modificadores`.
- Treinada: `Nível + 3 graduações`.
- Não treinada: metade do nível, arredondado para baixo.
- Somente treinadas no resumo da wiki: Adestrar Animais, Conhecimento, Identificar Magia e Ladinagem.
- Penalidade de armadura no resumo: Acrobacia, Atletismo, Furtividade e Ladinagem.

## Condições — regra geral

Aplicar todas as condições. Quando efeitos conflitarem, aplicar o efeito mais severo.

## Encantamentos — resumo crítico

- Cada bônus mágico +1 fornece 1 slot.
- Máximo de 5 slots por item.
- Bônus acima de +5 viram bônus direto conforme a categoria do item.
- Escudos podem receber encantamentos de Arma e de Escudo.
- Itens de Poder podem receber encantamentos.
- Encantamentos progressivos usam Slot 1 a 5.
- Poderes de custo fixo usam bônus equivalente +1 a +4 no conjunto ativo atual.

## Magias — regra de overlay

O catálogo-base não deve ser usado sozinho. Sempre aplicar `magias.ts` e `magias-t13.ts`.

Exemplo: **Fogo Amigo** está no **5º ciclo** no estado atual do 1.3.

As variantes antigas absorvidas por aprimoramentos/regras do 1.3 são consolidadas e não devem gerar documentos duplicados no Foundry.

# CORE 1.3 — Fontes canônicas estruturadas


---

# Glossário e abreviações

**Fonte:** `src/data/glossario.ts`

~~~~typescript
export const glossary = [
  { abbreviation: 'RD', meaning: 'Redução de Dano' },
  { abbreviation: 'RE(s)', meaning: 'Resistência à Energia(s)' },
  { abbreviation: 'TdR', meaning: 'Teste de Resistência' },
  { abbreviation: 'JdA', meaning: 'Jogada de Ataque' },
  { abbreviation: 'JeT', meaning: 'Jogadas e Testes' },
  { abbreviation: 'MdC', meaning: 'Modificador de Conjuração' },
  { abbreviation: 'NdM', meaning: 'Nível da Magia' },
  { abbreviation: 'DdH', meaning: 'Dano de Habilidade' },
  { abbreviation: 'MdN', meaning: 'Metade do Nível' },
  { abbreviation: 'MdNdC', meaning: 'Metade do Nível de Conjurador' }
] as const;

export const classTalentRules = [
  'Ao receber Talentos de Habilidades de Classe, ainda é necessário que o personagem atenda aos pré-requisitos do talento(exceto quando a habilidade diz o contrário) para poder utilizar do talento.',
  'Se você já possuir o talento recebido pela Habilidade de Classe, pode substituí-lo por outro do mesmo grupo(Talento de Combate por outro Talento de Combate).'
] as const;

~~~~


---

# Personagem — habilidades, níveis, multiclasse, bônus e níveis temporários

**Fonte:** `src/data/personagem.ts`

~~~~typescript
export interface AbilityModifierRow {
  value: string;
  modifier: string;
}

export interface AbilityInfo {
  key: string;
  name: string;
  abbreviation: string;
  text: string;
}

export interface RuleBlock {
  title: string;
  paragraphs: string[];
}

export const abilityModifierTable: AbilityModifierRow[] = [
  { value: '1', modifier: '-5' },
  { value: '2-3', modifier: '-4' },
  { value: '4-5', modifier: '-3' },
  { value: '6-7', modifier: '-2' },
  { value: '8-9', modifier: '-1' },
  { value: '10-11', modifier: '0' },
  { value: '12-13', modifier: '+1' },
  { value: '14-15', modifier: '+2' },
  { value: '16-17', modifier: '+3' },
  { value: '18-19', modifier: '+4' },
  { value: '20-21', modifier: '+5' },
  { value: '22-23', modifier: '+6' },
  { value: '24-25', modifier: '+7' }
];

export const abilities: AbilityInfo[] = [
  {
    key: 'forca',
    name: 'Força',
    abbreviation: 'For',
    text: 'A Força mede seu poder muscular, sua força física. O modificador de Força será aplicado nas rolagens de ataque corpo-a-corpo; dano de ataque corpo-a-corpo ou com armas de arremesso; testes de Atletismo; testes de Força para levantar peso, quebrar objetos e atos similares.'
  },
  {
    key: 'destreza',
    name: 'Destreza',
    abbreviation: 'Des',
    text: 'A Destreza mede agilidade, reflexos, equilíbrio e coordenação motora. O modificador de Destreza será aplicado nas rolagens de ataque à distância; classe de armadura; testes de Reflexos; testes de Acrobacia, Cavalgar, Iniciativa, Furtividade e Ladinagem.'
  },
  {
    key: 'constituicao',
    name: 'Constituição',
    abbreviation: 'Con',
    text: 'A saúde e vigor físico do herói são representados pela Constituição. Seu modificador será aplicado em seus pontos de vida iniciais (que dependem de sua classe), e também aos PV que você ganha quando sobe de nível (mas mesmo com um modificador negativo, um personagem sempre ganha pelo menos 1 PV quando sobe de nível). Se a Constituição muda o suficiente para alterar seu modificador de habilidade, seus pontos de vida máximos também aumentam ou diminuem de acordo.'
  },
  {
    key: 'inteligencia',
    name: 'Inteligência',
    abbreviation: 'Int',
    text: 'A capacidade de pensar, raciocinar e resolver problemas é medida pela Inteligência. Você usará seu modificador de Inteligência para determinar seu número de perícias treinadas e idiomas conhecidos, e aplicará o modificador de Inteligência a testes de Conhecimento, Identificar Magia e Ofício.'
  },
  {
    key: 'sabedoria',
    name: 'Sabedoria',
    abbreviation: 'Sab',
    text: 'A Sabedoria representa a percepção e a força de vontade, além de seu bom senso, intuição e sentidos. Não é a mesma coisa que Inteligência: enquanto a Inteligência determina a capacidade de aprendizado e raciocínio, a Sabedoria diz como você percebe o mundo e a si mesmo. Um monge isolado nas montanhas que não sabe ler e nunca teve contato com qualquer cultura, pode ter alta Sab e baixa Int, enquanto um pesquisador arcano muito distraído teria alta Int e baixa Sab.'
  },
  {
    key: 'carisma',
    name: 'Carisma',
    abbreviation: 'Car',
    text: 'Carisma mede sua força de personalidade, magnetismo pessoal, charme, simpatia, capacidade de persuasão e beleza física. Seu modificador de Carisma será aplicado em testes de Adestrar Animais, Atuação, Diplomacia, Enganação, Intimidação e Obter Informação; qualquer teste envolvendo influenciar outras pessoas ou criaturas.'
  }
];

export const characterLevelBenefits: RuleBlock[] = [
  {
    title: 'Nível de Personagem',
    paragraphs: ['Este é o nível do personagem, às vezes chamado de "nível de experiência".']
  },
  {
    title: 'Pontos de Experiência',
    paragraphs: ['A quantidade de pontos de experiência que você deve acumular para chegar a este nível. Naturalmente, um personagem de 1º nível começa com 0 XP.']
  },
  {
    title: 'Graduação em Perícias',
    paragraphs: ['O personagem usa o número antes da barra em testes de perícias nas quais é treinado, e o número depois da barra para perícias nas quais não é treinado. Por exemplo, no 3º nível (+6/+1), você recebe + 6 em perícias treinadas e +1 em todas as outras. Para maiores detalhes veja Perícias.']
  },
  {
    title: 'Talentos',
    paragraphs: ['Todo personagem recebe um talento no 1º nível e a cada dois níveis seguintes (ou seja, todos os níveis ímpares). Para maiores detalhes veja Talentos. Além destes, no 1º nível todo personagem recebe um talento qualquer a escolha. No 4º, 12º nível o personagem recebe um talento de combate, magia, tormenta ou poder concedido. No 6º e 14º Recebe um talento de perícia. No 4º, 8º, 12º e 16º Recebe um talento de destino ou de classe. Você deve cumprir todos os pré-requisitos de qualquer talento que escolha.']
  },
  {
    title: 'Aumento de Habilidade',
    paragraphs: ['No 2º nível, e a cada dois níveis seguintes (ou seja, todos os níveis pares), um personagem ganha um ponto de habilidade. Um personagem nunca pode aumentar o mesmo atributo duas vezes consecutivas, ou seja, Um Bárbaro que aumentou sua força no 2º nível não pode aumentá-la novamente no 4º nível, deverá aumentar outro atributo para apenas no 6º poder aumentar novamente sua força.']
  },
  {
    title: 'Bônus na CA, Resistência e Dano',
    paragraphs: ['Todo personagem soma metade de seu nível (arredondado para baixo) à sua classe de armadura, testes de resistência, e jogadas de dano seja com armas, magias, ou qualquer habilidade especial.']
  }
];

export const multiclassRules: RuleBlock[] = [
  {
    title: 'Pontos de Vida',
    paragraphs: [
      'Os PVs dos personagens multiclasses somam os da classe inicial com os PVs por nível da nova classe.',
      'Ex: Um Bárbaro de 1° nível (24 + mod. Constituição PVs) que atinja o 2° nível e quer ao invés de adquirir um novo nível de Bárbaro decide adquirir o 1° nível de Ladino, nesse 2° nível, como decidiu ganhar um nível de Ladino invés de um nível de Bárbaro ele ganhará 3 + mod. Constituição PVs (Ladino) invés de 6 + mod. de Constituição PVs (Bárbaro).'
    ]
  },
  {
    title: 'Perícias e Talentos',
    paragraphs: ['Sempre que adquirir uma nova classe o jogador deve optar por receber um Talento ou uma Perícia da nova classe.']
  },
  {
    title: 'Bônus Base de Ataque',
    paragraphs: [
      'O Bônus Base de Ataque de um personagem deve ser visto pela soma dos Bônus Base de Ataque de todas as classes desse mesmo personagem.',
      'Ex: Esse mesmo Bárbaro que adquiriu um nível de Ladino, o Bônus Base de Ataque dele é igual a soma do BBA de suas duas classes juntas: 1 de Bárbaro de 1° nível + 0 de Ladino 1° nível, totalizando uma BBA de +1.'
    ]
  },
  {
    title: 'Pontos de Magia',
    paragraphs: ['PMs de um personagem multiclasse não são somados, ou seja, um personagem Mago e Clérigo terá PMs próprios para decorar magias Arcanas e uma outra quantidade de PMs para decorar magias Divinas.']
  },
  {
    title: 'Nível de Personagem',
    paragraphs: [
      'O nível de um personagem multiclasse é igual a soma de todos os níveis das Classes.',
      'Ex: O Bárbaro de 1° nível / Ladino de 1° nível é um personagem de 2° nível e só poderá atingir um novo nível em Bárbaro, Ladino ou outra classe quando atingir o 3° nível de personagem.'
    ]
  }
];

export const abilityRules: RuleBlock[] = [
  {
    title: 'Temporários',
    paragraphs: ['Pontos temporários provenientes de Magias(Perfeição dos Animais), Itens(Periapto da Sabedoria +6) ou outras fontes não garantem Usos adicionais de Habilidades, Talentos, Magias Adicionais, Pontos de Magia, Perícias Extras ou Magias Preparadas Extras.']
  },
  {
    title: 'Em parâmetros',
    paragraphs: [
      'Uma habilidade pode ser aplicada em um parâmetro(resistência, ataque, dano, etc) apenas uma vez, exceto em casos que a fonte diga explicitamente o contrário.',
      'Toda habilidade de classe que adiciona um modificador de habilidade a um parâmetro, como Autoconfiança (Car na CA), por exemplo, passa a ser limitada ao nível de classe caso o personagem faça multiclasse com outras classes básicas antes do 20º nível da classe em questão.',
      'Esta limitação também se aplica a habilidades concedidas por classes de prestígio caso o personagem tenha mais de uma classe de prestígio.'
    ]
  }
];

export const stackingRules: RuleBlock[] = [
  {
    title: 'Habilidades de Classe',
    paragraphs: [
      'Exemplo de acúmulo: Inspirar Coragem (+1 em jogadas de ataque, dano e testes de resistência contra o medo) e Fúria (+2 de JdA pelo +4 em For).',
      'De não acúmulo: Inspirar Coragem (+1 em jogadas de ataque, dano e testes de resistência contra o medo) e Grito de Kiai (+2 nas jogadas de ataque e dano durante uma rodada). Neste caso o bônus em JdA e Dano não se acumulam, mas os outros bônus continuam com seus efeitos normais.'
    ]
  },
  {
    title: 'Habilidades de Raça',
    paragraphs: [
      'Caso de raça que de magias ou habilidade de classe, como os hengeyokai, estas contam como magia ou habilidade de classe para acúmulos.',
      'Exemplo de não acúmulo: Forma selvagem(Hengeyokai) e Forma selvagem(druida).'
    ]
  },
  {
    title: 'Magias',
    paragraphs: [
      'Exemplo de acúmulo: Escudo arcano(+4 de CA) e Agilidade do gato(+2 de CA pelo +4 de Des).',
      'Exemplo de não acúmulo: Agilidade do gato(+4 de Des) e Físico do leão (+4 de For, Con e Des). O bônus em Des não acumula, mas os outros bônus de físico do leão continuam com seu efeito normal.'
    ]
  },
  {
    title: 'Itens mundanos e mágicos',
    paragraphs: [
      'Exemplo de acúmulo: Luvas da Destreza +4(4 de Des) e Manto Cinzento(+10 de furtividade).',
      'Exemplo de não acúmulo: Cinto da força +6(6 de For) e Cinto do campeão(+4 de força, +2 em manobras). O bônus em For não acumula, mas os outros bônus do cinto do campeão continuam com seu efeito normal.'
    ]
  },
  {
    title: 'Talentos',
    paragraphs: [
      'Talentos do mesmo grupo não se acumulam, apenas talentos de grupos diferentes se acumulam.',
      'Exemplo de acúmulo: Especialização em arma (+1 de jogada de ataque e +2 em dano) e Dom dos Justos (Você recebe +1 nas jogadas de ataque e dano contra criaturas Malignas). Sendo o primeiro de combate e o segundo Poder Concedido.',
      'Exemplo de não acúmulo: Especialização em arma (+1 de jogada de ataque e +2 em dano) e Exterminador de Monstros (+2 nas jogadas de ataque e dano contra criaturas Grandes ou maiores). Ambos de Combate.'
    ]
  },
  {
    title: 'Modelos',
    paragraphs: ['Diferente de outras fontes, modelos se acumulam. Um personagem pode ter quantos modelos conseguir, porém, seus níveis de ajuste se acumulam. Um guerreiro 3 com modelo Meio-Dragão(ND +2) é considerado um personagem de nível 5 para cálculo de ND e XP necessária para o próximo nível.']
  },
  {
    title: 'Outros',
    paragraphs: ['Qualquer habilidade que seja igual (Mesmo nome ou efeito), como autoconfiança do Nobre e Swashbuckler, por exemplo, não se acumulam. Exceto quando a habilidade diz o contrário.']
  }
];

export const temporaryLevelRules: RuleBlock[] = [
  {
    title: 'Positivos',
    paragraphs: ['Cada nível positivo garante um bônus cumulativo de +1 em jogadas e testes para cada nível adicional.']
  },
  {
    title: 'Negativos',
    paragraphs: [
      'Cada nível negativo impõe uma penalidade cumulativa de -1 em jogadas e testes para cada nível negativo. Em personagens que possuem PMs, além dos efeitos anteriores, Níveis negativos reduzem 1 PM e aumentam a redução em 1 PM a cada nível negativo seguinte. Por exemplo, um personagem que tenha recebido 3 níveis negativos, perderia 6 PMs(1 PM no primeiro nível, 2 no segundo e 3 no terceiro).',
      'Personagens que recebem Níveis negativos igual ao seu Nível morrem.',
      'A remoção de níveis negativos não recupera o PM perdido, mas qualquer outra fonte(poções, descanso, habilidades etc) recupera normalmente.'
    ]
  },
  {
    title: 'Perda de níveis',
    paragraphs: [
      'Um personagem que perde um nível permanente volta para o nível anterior com metade da XP necessária para o próximo nível. Além disso, níveis perdidos podem ser recuperados com treinamento de uma semana x nível que foi perdido.',
      'Ex: Um guerreiro 10 perde um nível se tornando um personagem de nível 9. Ele pode passar 10 semanas em treinamento para voltar ao nível anterior.'
    ]
  }
];

export const personagemIntro = [
  'Todo personagem tem seis números que indicam seus valores de habilidades: Força (For), Destreza (des), Constituição (Con), Inteligência (Int), Sabedoria (Sab) e Carisma (Car).',
  'Um modificador de habilidade é o número que você soma ou subtrai de uma jogada de dado quando seu personagem tenta fazer algo ligado àquela habilidade. Por exemplo, você usará o modificador de Destreza para atingir um alvo com um ataque à distância. Algumas vezes um modificador também será aplicado a algo que não depende de rolar dados seu modificador de Destreza também será somado à classe de armadura para determinar sua CA final.',
  'Cada habilidade tem seu modificador, de acordo com a tabela a seguir. Ele será positivo quando a habilidade é alta (12 ou mais), negativo quando a habilidade é baixa (9 ou menos), ou nulo quando a habilidade é mediana (10 ou 11).',
  'Um modificador positivo é chamado de bônus, enquanto um modificador negativo é chamado de penalidade.'
];

export const stackingIntro = 'Bônus se acumulam desde que sejam de fontes diferentes.';

~~~~


---

# Raças — catálogo completo

**Fonte:** `src/data/racas.ts`

~~~~typescript
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

~~~~


---

# Perícias — regras gerais e catálogo completo

**Fonte:** `src/data/pericias.ts`

~~~~typescript
export interface SkillBlock {
  title: string | null;
  paragraphs: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface SkillEntry {
  slug: string;
  name: string;
  ability: string | null;
  trainedOnly: boolean | null;
  armorPenalty: boolean | null;
  blocks: SkillBlock[];
  sourceNotes: string[];
}

export interface GeneralSkillRule {
  title: string;
  paragraphs: string[];
}

export const generalSkillRules: GeneralSkillRule[] = [
  {
    "title": "Tipos de Perícias",
    "paragraphs": [
      "Perícias de Classe: são aquelas que aparecem na descrição de cada classe. Por exemplo, as perícias de classe do bárbaro são: Adestrar Animais, Atletismo, Cavalgar, Iniciativa, Intimidação, Ofício, Percepção e Sobrevivência.\nPerícias de Outra Classe: são todas as outras perícias que não aparecem entre aquelas da classe escolhida. Uma perícia que não seja de classe pode ser treinada em troca de duas perícias.\nPerícias Treinadas: todo personagem tem certo número de perícias treinadas, que depende de sua classe e modificador de Inteligência.                                                                             \nIndependente de sua classe, humanos ganham +2 perícias treinadas, que podem ser escolhidas entre perícias de outra classe.\nMesmo que a soma final seja zero ou menos (devido a um modificador de Inteligência negativo), ainda assim o personagem tem pelo menos uma perícia treinada.\nVocê escolhe suas perícias treinadas no 1º nível. Uma vez escolhidas, elas não podem ser trocadas."
    ]
  },
  {
    "title": "Graduações",
    "paragraphs": [
      "* Perícia treinada: nível + 3 graduações.",
      "* Outras perícias: nível/2 graduações.\nAssim, perícias não-treinadas têm valor igual a metade do nível do personagem (arredondado para baixo)."
    ]
  },
  {
    "title": "Escolhendo as Perícias",
    "paragraphs": [
      "Você escolhe suas perícias treinadas no 1º nível, entre suas perícias de classe. Uma vez escolhidas, elas não podem ser trocadas.\nNovas Perícias: após o 1º nível, um personagem pode adquirir mais perícias de duas maneiras:",
      "* Inteligência: caso sua Inteligência aumente (em geral através de evolução do personagem), você ganha uma nova perícia para cada aumento de +1 no modificador de habilidade. Aumentos de inteligência temporários (por magia ou itens mágicos, por exemplo) não concedem mais perícias. Essa perícia pode ser “guardada” para treinar uma perícia não de classe em níveis futuros.",
      "* Treino em Perícia: este talento oferece perícias treinadas adicionais, que podem ser escolhidas entre todas as perícias."
    ]
  },
  {
    "title": "Usando as Perícias",
    "paragraphs": [
      "Um teste de perícias é feito da seguinte forma:\n1d20 + graduações + modificador de habilidade + outros modificadores",
      "* Graduações: este valor é igual ao nível do personagem + 3, para perícias treinadas; e metade do nível do personagem (arredonde para baixo) para outras perícias.",
      "* Modificador de Habilidade: cada perícia tem uma habilidade-chave associada a seu uso. Por exemplo, Acrobacia tem Destreza como habilidade-chave. Isso quer dizer que, se você tem uma alta Destreza, tem mais chances de ser bem-sucedido em um teste de Acrobacia.",
      "* Outros Modificadores: podem ser bônus ou penalidades fornecidos por traços raciais, talentos, equipamento, itens mágicos ou situações específicas.\nQuanto maior o resultado do teste, melhor  o sucesso depende da dificuldade da tarefa sendo realizada. Para ser bem sucedido, você precisa que esse resultado iguale ou exceda um teste de outro personagem, ou uma classe de dificuldade (CD) escolhida pelo mestre."
    ]
  },
  {
    "title": "Testes Opostos",
    "paragraphs": [
      "O personagem deve fazer um teste, e os oponentes que forem resistir ao teste devem realizar um teste oposto de perícia, de acordo com a perícia que foi utilizada.\nNo caso de empates em testes opostos, o personagem com o maior bônus de perícia vence. Se os bônus forem iguais, outra rolagem deve ser feita.\nTestes de perícia que se opõem a resistências tem CD fixa seguindo a regra padrão encontrada em “Combate”.\n10 + Metade do Nível de personagem + Modificador de Habilidade relevante."
    ]
  },
  {
    "title": "Testes Contra uma Classe de Dificuldade (CD)",
    "paragraphs": [
      "O personagem deve realizar um teste de perícia para atingir uma classe de dificuldade.\nEstes são alguns exemplos de classes de dificuldade, seguidos por tarefas e as perícias certas para realizá-las.",
      "* Muito Fácil (0): notar alguém completamente visível, em campo aberto (Percepção)",
      "* Fácil (5): subir uma costa íngreme (Atletismo)",
      "* Mediana (10): ouvir um guarda se aproximando (Percepção)",
      "* Difícil (15): estancar o sangramento de alguém ferido (Cura)",
      "* Desafiador (20): nadar contra uma correnteza (Atletismo)",
      "* Formidável (25): sabotar uma armadilha de engenharia avançada (Ladinagem)",
      "* Heroica (30): decifrar um pergaminho antigo em um idioma morto (Conhecimento)",
      "* Quase Impossível (40): rastrear um druida à noite, em terreno duro, após 12 dias de chuva (Sobrevivência)"
    ]
  },
  {
    "title": "Testes sem Treinamento",
    "paragraphs": [
      "Adestrar Animais, Conhecimento, Identificar Magia, e Ladinagem são perícias que só podem ser usadas quando você é treinado nelas. Então, se você não a escolheu como perícia treinada, você não tem o conhecimento mínimo necessário para tentar utilizá-la, não importa seu nível ou modificador de habilidade.\nQuando a palavra \"treinada\" aparece logo após o título da perícia, isso quer dizer que não se pode fazer testes sem treinamento para ela."
    ]
  },
  {
    "title": "Penalidade de Armadura",
    "paragraphs": [
      "Acrobacia, Atletismo, Furtividade e Ladinagem exigem liberdade de movimentos. A maioria das armaduras e escudos torna a utilização destas perícias mais difícil.\nQuando a palavra \"armadura\" aparece logo após o título da perícia, isso quer dizer que personagens usando armadura ou escudo sofrem uma penalidade em seus testes. Essa penalidade depende de cada peça (veja Armaduras e Escudos). Em geral, quanto mais pesada, maior o estorvo.\nPenalidades por armaduras e escudos são cumulativas: usar cota de malha (-3) e escudo grande (-2) penaliza seus testes em -5."
    ]
  },
  {
    "title": "Novas Tentativas",
    "paragraphs": [
      "Em geral, você pode tentar um teste novo em caso de falha, e continuar tentando por toda a eternidade. Contudo, algumas perícias acarretam penalidades (ou problemas!) em caso de falha.\nPor exemplo, se um personagem falhar no teste de Ladinagem para abrir uma porta trancada, ele pode tentar de novo. Mas se a porta tiver uma armadilha (disparada se o teste de Ladinagem falhar por 5 ou mais) então há uma consequência para a falha.\nDe maneira similar, um personagem que falhe em um teste de Atletismo para subir uma encosta pode tentar novamente. Mas se falhar por 5 ou mais, cairá. Ele pode se levantar e tentar de novo — supondo que a queda não tenha sido muito dolorida..."
    ]
  },
  {
    "title": "Condições Favoráveis e Desfavoráveis",
    "paragraphs": [
      "Algumas situações podem tornar uma perícia mais fácil ou mais difícil de usar, resultando em um bônus ou penalidade no modificador, ou mudando a CD do teste.\nEm casos especiais, o mestre pode alterar as chances de sucesso de quatro maneiras:",
      "* Conceder ao utilizador da perícia um bônus de +2 para representar circunstâncias que melhoram seu desempenho, como saber alguma informação sobre a tarefa.",
      "* Conceder ao utilizador da perícia uma penalidade de -2 para representar circunstâncias que atrapalham seu desempenho, como realizar uma tarefa sob pressão.",
      "* Reduzir a CD em 2 para representar circunstâncias que tornam a tarefa mais fácil, como ter uma audiência amigável ao fazer um teste de atuação, ou procurar por um livro em uma biblioteca bem organizada com um teste de Percepção.",
      "* Aumentar a CD em 2 representa circunstâncias que tornam a tarefa mais difícil, como fazer um teste de atuação para uma platéia hostil, ou procurar por um frasco de poção em um laboratório bagunçado com um teste de Percepção.\nCondições que afetem a habilidade do personagem de utilizar a perícia mudam o bônus da perícia. Condições que modifiquem o quão bem o personagem deve realizar a perícia para obter um sucesso mudam a CD. Um aumento no bônus de perícia de um personagem ou uma redução na CD do teste têm o mesmo resultado, ambos criam uma chance melhor de sucesso. Mas representam circunstâncias diferentes e, algumas vezes, essa diferença é importante."
    ]
  },
  {
    "title": "Testes sem Rolagens",
    "paragraphs": [
      "Um teste representa a realização de uma tarefa em situação de risco — você tem tempo limitado ou está em perigo, por exemplo. Quando este não é o caso, você pode alcançar resultados mais confiáveis. Estas regras aceleram os testes sob circunstâncias rotineiras, diminuindo o número de rolagens que os jogadores precisam fazer durante o jogo.\nEscolher 1: quando seu bônus total em um teste é igual ou maior que a CD menos 1, mesmo sob pressão, você é automaticamente bem-sucedido mesmo sem fazer o teste. A tarefa é um esforço trivial para alguém com suas habilidades. Caso o teste tenha variados níveis de sucesso, você obtém o mínimo possível (como se tivesse rolado 1 no dado). Você ainda pode fazer uma rolagem para alcançar um nível maior de sucesso, se quiser.\nEscolher 10: quando não há pressão para realizar uma tarefa, você pode escolher 10. Isso significa realizar uma tarefa com calma, sem chance de erros. Em vez de rolar 1d20, considere um resultado 10 automático. Isso costuma bastar para muitas tarefas.\nEscolher 20: quando não há pressão, e a tarefa não oferece nenhuma consequência ou penalidade em caso de falha, você pode escolher 20. Isso significa gastar todo o tempo do mundo e tentar todas as possibilidades, até ser bem-sucedido. Em vez de rolar 1d20, considere um resultado 20 automático. Escolher 20 exige vinte vezes mais tempo que o normal para executar a perícia."
    ]
  },
  {
    "title": "Prestar Ajuda",
    "paragraphs": [
      "Às vezes, os personagens trabalham juntos e se ajudam. Um personagem (normalmente aquele com o maior bônus) é considerado o líder, e faz o teste normal, e então um ajudante treinado na mesma perícia concede um bônus igual ao modificador seu modificador de atributo da perícia. Enquanto um ajudante não treinado concede apenas metade do modificador.\nEm muitos casos, ajuda externa não traz benefícios. Você não pode ajudar um colega a ser mais silencioso em seu teste de Furtividade. Apenas um personagem pode prestar ajuda por vez."
    ]
  },
  {
    "title": "Testes de Habilidades",
    "paragraphs": [
      "Em alguns casos, quando tenta algo que nenhuma perícia prevê, você faz um teste de habilidade: uma rolagem de 1d20 somada ao modificador da habilidade apropriada.\nO mestre determina a CD, ou então considera um teste oposto quando dois personagens estão envolvidos em uma competição como uma queda de braço, por exemplo. Aqui estão alguns exemplos simples de testes de habilidade, seguidos pela habilidade-chave testada:",
      "* Empurrar um bloco de pedra (Força).",
      "* Amarrar cordas (Destreza).",
      "* Segurar o fôlego (Constituição).",
      "* Escapar de um labirinto (Inteligência).",
      "* Reconhecer um estranho que já viu antes (Sabedoria).",
      "* Ser percebido em uma multidão (Carisma)."
    ]
  }
];

export const skillSummarySourceRows = [
  {
    "name": "Acrobacia",
    "ability": "Destreza",
    "trainedOnly": false,
    "armorPenalty": true
  },
  {
    "name": "Adestrar Animais",
    "ability": "Carisma",
    "trainedOnly": true,
    "armorPenalty": false
  },
  {
    "name": "Atletismo",
    "ability": "Força",
    "trainedOnly": false,
    "armorPenalty": true
  },
  {
    "name": "Atuação",
    "ability": "Carisma",
    "trainedOnly": false,
    "armorPenalty": false
  },
  {
    "name": "Cavalgar",
    "ability": "Destreza",
    "trainedOnly": false,
    "armorPenalty": false
  },
  {
    "name": "Conhecimento",
    "ability": "Inteligência",
    "trainedOnly": true,
    "armorPenalty": false
  },
  {
    "name": "Cura",
    "ability": "Sabedoria",
    "trainedOnly": false,
    "armorPenalty": false
  },
  {
    "name": "Diplomacia",
    "ability": "Carisma",
    "trainedOnly": false,
    "armorPenalty": false
  },
  {
    "name": "Enganação",
    "ability": "Carisma",
    "trainedOnly": false,
    "armorPenalty": false
  },
  {
    "name": "Furtividade",
    "ability": "Destreza",
    "trainedOnly": false,
    "armorPenalty": true
  },
  {
    "name": "Identificar Magia",
    "ability": "Inteligência",
    "trainedOnly": true,
    "armorPenalty": false
  },
  {
    "name": "Iniciativa",
    "ability": "Destreza",
    "trainedOnly": false,
    "armorPenalty": false
  },
  {
    "name": "Intimidação",
    "ability": "Carisma",
    "trainedOnly": false,
    "armorPenalty": false
  },
  {
    "name": "Intuição",
    "ability": "Sabedoria",
    "trainedOnly": false,
    "armorPenalty": false
  },
  {
    "name": "Jogatina",
    "ability": "Carisma",
    "trainedOnly": false,
    "armorPenalty": false
  },
  {
    "name": "Ladinagem",
    "ability": "Destreza",
    "trainedOnly": true,
    "armorPenalty": true
  },
  {
    "name": "Obter Informação",
    "ability": "Carisma",
    "trainedOnly": false,
    "armorPenalty": false
  },
  {
    "name": "Ofício",
    "ability": "Inteligência",
    "trainedOnly": false,
    "armorPenalty": false
  },
  {
    "name": "Percepção",
    "ability": "Sabedoria",
    "trainedOnly": false,
    "armorPenalty": false
  },
  {
    "name": "Sobrevivência",
    "ability": "Sabedoria",
    "trainedOnly": false,
    "armorPenalty": false
  }
] as const;

export const skills: SkillEntry[] = [
  {
    "slug": "acrobacia",
    "name": "Acrobacia",
    "ability": "Destreza",
    "trainedOnly": false,
    "armorPenalty": true,
    "blocks": [
      {
        "title": "Amortecer Queda (CD 15)",
        "paragraphs": [
          "você pode reduzir o dano de uma queda para 1,5 m menos que a altura real, como uma reação."
        ]
      },
      {
        "title": "Arte da Fuga",
        "paragraphs": [
          "você pode escapar de cordas, redes e algemas como uma ação completa. Para cordas, faça um teste de Acrobacia oposto a um teste de Destreza de quem amarrou você (essa pessoa recebe +10 no teste, porque amarrar alguém é mais fácil que escapar de amarras). Você também pode escapar de redes (CD 20)."
        ]
      },
      {
        "title": "Cambalhota",
        "paragraphs": [
          "você pode atravessar um quadrado ocupado por um inimigo, como parte de seu movimento. Faça um teste de Acrobacia oposto ao teste de Iniciativa do oponente. Se você for bem sucedido, atravessa o quadrado; se falhar, não consegue atravessar o quadrado, e sua ação de movimento termina.",
          "Se estiver usando regras para ataques de oportunidade, você também pode usar esta manobra para escapar de um quadrado ameaçado sem provocar ataques de oportunidade (faça um teste contra cada criatura ameaçando o quadrado onde você está). Usar a cambalhota custa o dobro do deslocamento."
        ]
      },
      {
        "title": "Equilíbrio",
        "paragraphs": [
          "você pode se equilibrar ao andar em superfícies precárias, como um piso escorregadio (CD 10), o alto de um muro estreito (CD 15) ou uma corda esticada (CD 20). Cada movimentação em uma situação dessas exige um teste de Acrobacia. Em caso de sucesso você consegue andar metade do seu deslocamento; se falhar, não consegue andar; e se falhar por 5 ou mais, você cai."
        ]
      },
      {
        "title": "Levantar-se rapidamente (CD 20)",
        "paragraphs": [
          "caso esteja caído, você pode ficar de pé como uma ação livre. Se falhar por 5 ou mais, você perde uma ação de movimento e continua caído."
        ]
      },
      {
        "title": "Passar por espaço apertado (CD 30)",
        "paragraphs": [
          "você pode rastejar por espaços estreitos, suficientes para criaturas de uma categoria de tamanho menor (por exemplo, um humano poderia passar por um espaço suficiente para um goblin), como uma ação completa. Nesta condição você se move com metade da velocidade normal."
        ]
      },
      {
        "title": null,
        "paragraphs": [
          "As manobras “amortecer queda”, “cambalhota”, “levantar-se rapidamente” e \"passar por espaço apertado” só podem ser tentadas se você é treinado em Acrobacia."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "adestrar-animais",
    "name": "Adestrar Animais",
    "ability": "Carisma",
    "trainedOnly": true,
    "armorPenalty": false,
    "blocks": [
      {
        "title": "Domesticar um animal selvagem (CD 25)",
        "paragraphs": [
          "você pode criar um animal selvagem desde filhote, domesticando-o. O tempo necessário varia de acordo com a criatura."
        ]
      },
      {
        "title": "Ensinar um truque (CD 15)",
        "paragraphs": [
          "você pode ensinar um truque (atacar, atuar, ficar, guardar, pegar, procurar, proteger, quieto, rosnar, segue, vir...) com um teste e uma semana de treino. Um animal com Inteligência 1 pode aprender no máximo três truques, enquanto um animal com Inteligência 2 aprende até seis truques (criaturas com Int 3 ou mais são seres inteligentes)."
        ]
      },
      {
        "title": "Forçar um animal (CD 25)",
        "paragraphs": [
          "você pode forçar um animal a executar um truque que ele não sabe, mas é fisicamente capaz de realizar. Este uso gasta uma ação completa e, em caso de sucesso, o animal realiza o truque na sua próxima ação."
        ]
      },
      {
        "title": "Manejar um animal (CD 10)",
        "paragraphs": [
          "você pode comandar um animal para que realize um truque que ele já sabe. Este uso gasta uma ação padrão e, em caso de sucesso, o animal realiza o truque em sua próxima ação. Você pode fazer este uso mesmo sem treinamento em Adestrar Animais."
        ]
      },
      {
        "title": null,
        "paragraphs": [
          "Todo personagem recebe +5 em testes de Adestrar Animais envolvendo seu próprio companheiro animal."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "atletismo",
    "name": "Atletismo",
    "ability": "Força",
    "trainedOnly": false,
    "armorPenalty": true,
    "blocks": [
      {
        "title": "Corrida",
        "paragraphs": [
          "você pode correr mais rapidamente gastando uma ação completa. Sua velocidade é aumentada em 1,5m vezes o resultado de seu teste. Por exemplo, se um humano obtém um resultado 24, vai se mover 45 m (24 x 1,5 m + 9 m) naquela rodada.",
          "Você só pode correr em linha reta, e não pode correr em terreno difícil. Você pode manter a corrida um número de rodadas igual a seu valor de Constituição. Após isso, deve fazer um teste de Constituição (CD 10 + 1 por teste anterior) por rodada para continuar correndo. Se falhar, precisa parar e descansar um minuto antes de correr novamente."
        ]
      },
      {
        "title": "Escalada",
        "paragraphs": [
          "você pode subir em árvores, muros, encostas escarpadas e outras superfícies inclinadas. Faça um teste sempre que executar uma movimentação em superfície inclinada ou na vertical. Em caso de sucesso você avança metade de sua velocidade, ou se mantém no lugar (caso esteja fazendo outra coisa). Se falhar, não consegue executar a movimentação. E se falhar por 5 ou mais, você cai da altura que tinha alcançado.",
          "A dificuldade depende das condições da escalada: CD 5 para uma encosta íngreme, CD 10 para um muro com ajuda de uma corda, CD 15 para uma árvore, CD 20 para um muro com algumas reentrâncias ou CD 25 para uma parede muito lisa, quase sem apoios.",
          "Você precisa ter as duas mãos livres para escalar. Pode ser apoiar com uma mão para fazer uma ação que use apenas uma mão, mas não pode avançar assim. Como não pode se mexer para evitar um ataque, você é considerado desprevenido quando está escalando. Toda vez que sofre dano quando está escalando, deve fazer um novo teste de Atletismo, em caso de falha você cai."
        ]
      },
      {
        "title": "Natação",
        "paragraphs": [
          "você pode nadar, mergulhar e se desviar de obstáculos submersos. Cada rodada na água exige uma ação de movimentos e um teste de Atletismo (CD 10 para água calma, CD 15 para agitada, 20 para tempestuosa). Em caso de sucesso você avança metade de sua velocidade. Se falhar no teste você consegue boiar, mas não avança; se falhar por 5 ou mais você afunda. Você pode gastar uma segunda ação de movimento na mesma rodada para outro teste de Atletismo.",
          "Se estiver submerso (porque falhou no teste ou mergulhou intencionalmente), deve prender a respiração. Você pode prender a respiração por uma quantidade de rodadas igual a seu valor de Constituição. Esgotando esse tempo, deve fazer um teste de Constituição por rodada (CD 10 + por cada teste anterior). Se falhar, se afoga (é reduzido a 0 pontos de vida). Se continuar submerso, na próxima rodada vai para -1 PV. Na rodada seguinte, morre."
        ]
      },
      {
        "title": "Saltar",
        "paragraphs": [
          "você pode pular sobre buracos ou obstáculos, ou alcançar algo elevado. Para um salto longo, CD 10 para 1,5m; 15 para 3m; 20 para 4,5m; 25 para 6m e assim por diante. Para saltos em altura, CD 10 para 50cm; 20 para 1m; 30 para 1,5m e assim por diante. Você deve ter pelo menos 6m para correr e pegar impulso (sem esse espaço, a CD aumenta em +10).",
          "Ao pular de um lugar elevado, um teste de Atletismo (CD 15) reduz em 1d6 o dano da queda. Saltar é parte de seu movimento, e não exige uma ação."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "atuacao",
    "name": "Atuação",
    "ability": "Carisma",
    "trainedOnly": false,
    "armorPenalty": false,
    "blocks": [
      {
        "title": null,
        "paragraphs": [
          "Você pode impressionar uma platéia com sua música, canto, poesia ou outra manifestação artística.",
          "Assim como Conhecimento e Ofício, Atuação na verdade são várias perícias diferentes. Você pode ser treinado em várias perícias Atuação, cada uma escolhida como uma perícia separada.",
          "Dramaturgia (comédia, drama, mímica). Dança (balé, dança do ventre, valsa). Música (bandolim, canto, flauta, harpa, tambor, piano) Oratória (discursos, poesia).",
          "Seu desempenho como artista depende do resultado de seu teste: 15 para uma performance rotineira (o mínimo necessário para que não joguem tomates...), 25 para uma grande atuação e 35 para um espetáculo inesquecível, capaz de agradar aos reis."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "cavalgar",
    "name": "Cavalgar",
    "ability": "Destreza",
    "trainedOnly": false,
    "armorPenalty": false,
    "blocks": [
      {
        "title": null,
        "paragraphs": [
          "Coisas simples não exigem testes. Você pode colocar uma sela, montar, cavalgar em velocidade normal e desmontar do animal sem problemas. Apenas situações de combate ou perigo exigem testes."
        ]
      },
      {
        "title": "Montar ou desmontar rapidamente (CD 20)",
        "paragraphs": [
          "você pode montar ou desmontar como uma ação livre (o normal é gastar uma ação de movimento). Se falhar por 5 ou mais, você cai no chão."
        ]
      },
      {
        "title": "Cavalgar Rapidamente (CD 15)",
        "paragraphs": [
          "com uma ação bônus, você consegue esporear sua montaria e aumentar seu deslocamento em +3 durante uma rodada. Esta manobra causa 2 pontos de dano à montaria."
        ]
      },
      {
        "title": "Guiar com os joelhos (CD 10)",
        "paragraphs": [
          "com uma ação livre você consegue guiar sua montaria apenas com os joelhos, deixando suas mãos livres para lutar, durante uma rodada. Se falhar, precisa usar pelo menos uma mão para guiar a montaria, ou deixá-la parada durante esta rodada."
        ]
      },
      {
        "title": "Saltar (CD 15)",
        "paragraphs": [
          "você faz sua montaria saltar um obstáculo. Se você falhar, cai da montaria durante o salto e sofre 1d6 pontos de dano (ou mais, dependendo do obstáculo...). Este uso da perícia é parte do movimento da montaria, e não exige uma ação."
        ]
      },
      {
        "title": null,
        "paragraphs": [
          "Animais não domesticados, ou não adequados como montaria, impõem uma penalidade de -5 em testes de Cavalgar."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "conhecimento",
    "name": "Conhecimento",
    "ability": "Inteligência",
    "trainedOnly": true,
    "armorPenalty": false,
    "blocks": [
      {
        "title": null,
        "paragraphs": [
          "Assim como Atuação ou Ofício, Conhecimento na verdade são várias perícias diferentes. Você pode ser treinado em várias perícias de Conhecimento, cada uma escolhida como uma perícia separada.",
          "* Arcano (mistérios sobrenaturais, tradições mágicas, símbolos arcanos, frases crípticas, construtos, dragões). * Engenharia (castelos, pontes, cavernas). * Estratégia (vantagens e dedução de combate) * Geografia (terrenos, climas, povos). * História (datas importantes, lendas, tradições). * Natureza (animais, fadas, plantas, estações e ciclos). * Nobreza (linhagens, heráldica, cavalaria, personalidades, leis). * Planar(natureza, características e nativos dos múltiplos planos de existência) * Religião (deuses maiores, deuses menores, tradições eclesiásticas, símbolos sagrados, espíritos, mortos-vivos)."
        ]
      },
      {
        "title": "Decifrar escritas",
        "paragraphs": [
          "um teste pode decifrar inscrições em idiomas antigos ou desconhecidos – como aqueles normalmente encontrados em masmorras – ou entender mensagens arcaicas ou incompletas. O texto deve estar ligado ao Conhecimento que você possui. CD 20 para mensagens e avisos simples, 25 para textos comuns e 30 para escritos intrincados, exóticos ou arcaicos."
        ]
      },
      {
        "title": "Entender mistérios",
        "paragraphs": [
          "como uma ação completa, você pode tentar desvendar um mistério que tinha ligação com seu tipo de Conhecimento. CD 10 para assuntos simples, 15 para normais, 20 e 30 para difíceis."
        ]
      },
      {
        "title": "Identificar criatura",
        "paragraphs": [
          "você pode identificar uma criatura que tenha ligação com o Conhecimento escolhido (por exemplo, fadas para Conhecimento [natureza]), assim como seus poderes e vulnerabilidades, como uma ação completa. CD 10 + nível da criatura. Cada sucesso permite lembrar uma informação útil a respeito do monstro. Se falhar por 5 ou mais, tira uma conclusão errada (por exemplo, acreditar que determinado monstro é vulnerável a fogo, quando na verdade é vulnerável a frio)."
        ]
      },
      {
        "title": "Analisar batalha",
        "paragraphs": [
          "como uma ação completa, você pode fazer um teste oposto contra o líder inimigo para descobrir alguma informação sobre as forças dele, como uma fraqueza ou seu objetivo na batalha."
        ]
      },
      {
        "title": "Procurar vantagem estratégica",
        "paragraphs": [
          "(CD 15): como uma ação padrão, você pode procurar uma vantagem estratégica no campo de batalha. Se for bem-sucedido, encontra um terreno elevado ou um ponto que forneça cobertura ou camuflagem dentro de 30m. Se o mestre considerar que não existe nenhuma vantagem estratégica no campo de batalha, o teste falha automaticamente."
        ]
      },
      {
        "title": "Despistar",
        "paragraphs": [
          "Quando estiver nas ruas de uma cidade que conheça (à qual sua perícia Conhecimento se aplique), faça um teste de conhecimento (local) CD 15, se bem sucedido, você recebe um bônus de +4 em teste de Furtividade, em testes de Enganação para criar distração uma distração para se esconder e em testes de Atletismo para perseguições."
        ]
      },
      {
        "title": "Astrologia",
        "paragraphs": [
          "você pode usar as perícias Conhecimento (arcano) ou Conhecimento (religião) para obter informações sobre signos, estrelas, planetas e constelações do céu, e para saber como preparar horóscopos e mapas astrais, e detalhes de nascimento (e ganhar dinheiro com isso).",
          "Com uma semana de trabalho e um teste bem-sucedido com CD 30, você pode preparar um horóscopo para uma criatura, com previsões vagas para os próximos seis meses. A criatura pode usar esse horóscopo uma vez durante esse período para ganhar um ponto de ação como uma ação livre, e só poderá receber os benefícios de outro horóscopo após o final do período do horóscopo anterior.",
          "Criar um horóscopo custa 50 TO por nível do personagem (o preço de venda fica a cargo do astrólogo; em geral, o dobro do custo de criação). Em caso de falha, você não consegue preparar o horóscopo, mas deve gastar metade dos TO necessários mesmo assim. Com um dia de trabalho e um teste bem-sucedido com CD 35, você pode montar um mapa astral capaz de determinar em qual mundo uma alma renasceu, se tiver acesso à informações sobre a vida e a morte da criatura em questão (seja por meio de descrições detalhadas de um conhecido, ou por meio de magias como lendas e histórias). A previsão não é 100% precisa pois, mesmo que o mapa astral esteja correto, um deus maior pode simplesmente ter tomado posse da alma em questão. Criar um mapa astral custa 10 TO por nível do personagem (o preço de venda fica a cargo do astrólogo; em geral, o dobro do custo de criação). Em caso de falha, você não consegue preparar o mapa astral, mas deve gastar metade dos TO necessários mesmo assim. Se falhar por 10 pontos ou mais, você prepara um mapa astral, mas acredita que a alma foi enviada para um mundo errado, à escolha do mestre."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "cura",
    "name": "Cura",
    "ability": "Sabedoria",
    "trainedOnly": false,
    "armorPenalty": false,
    "blocks": [
      {
        "title": "Primeiros socorros (CD 15)",
        "paragraphs": [
          "com uma ação padrão, você pode salvar outro personagem que esteja morrendo. Se ele está com 0 PV ou menos, um teste de Cura pode estabilizá-lo e fazer com que pare de perder pontos de vida."
        ]
      },
      {
        "title": "Cuidados prolongados (CD 15)",
        "paragraphs": [
          "Se você for bem-sucedido no teste, ela recupera o dobro dos pontos de vida no próximo descanso rápido, este benefício é perdido no próximo descanso longo. Este uso leva uma hora e pode ser utilizado durante um descanso rápido(obtendo os resultados imediatamente), o número máximo de pessoas que você pode tratar ao mesmo tempo é igual ao seu Mod Sab."
        ]
      },
      {
        "title": "Tratar doenças",
        "paragraphs": [
          "faça um teste contra a CD da doença. Em caso de sucesso, o paciente recebe +5 em seu próximo teste de Fortitude contra a doença. Você deve acompanhar o paciente pelo menos uma hora por dia para realizar este teste."
        ]
      },
      {
        "title": "Tratar venenos",
        "paragraphs": [
          "contra um veneno que não seja de efeito imediato, faça um teste com a mesma CD do veneno. Em caso de sucesso, o paciente recebe +5 em seu próximo teste de Fortitude contra o veneno. Este uso gasta uma ação padrão."
        ]
      },
      {
        "title": null,
        "paragraphs": [
          "Usar esta perícia exige um kit de medicamentos. Sem ele, você sofre penalidade de –5 em testes de Cura. Um personagem pode usar a perícia Cura em si mesmo, mas sofre uma penalidade de –5 no teste."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "diplomacia",
    "name": "Diplomacia",
    "ability": "Carisma",
    "trainedOnly": false,
    "armorPenalty": false,
    "blocks": [
      {
        "title": "Barganha",
        "paragraphs": [
          "comprando ou vendendo algo, você pode tentar barganhar. Você e o outro negociante fazem testes opostos de Diplomacia. Se ganhar, você muda o preço em 10% a seu favor. Se ganhar por 10 pontos de diferença ou mais, muda em 20%. Mas se perder por 5 ou mais, você ofende o negociante – ele não voltará a tratar com você durante pelo menos uma semana."
        ]
      },
      {
        "title": "Mudar atitude",
        "paragraphs": [
          "você pode mudar a atitude de alguém em uma categoria, para melhorar ou pior, à sua escolha. Um teste de Diplomacia é oposto ao teste de Intuição do alvo. Normalmente a tentativa leva pelo menos um minuto; em caso de urgência você pode tentar o mesmo como uma ação completa (para evitar uma briga, por exemplo), mas sofre penalidade de -10 no teste. Você pode mudar a atitude de alguém apenas uma vez por dia. Se você falhar por 5 ou mais, a atitude do alvo vai na direção contrária."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "enganacao",
    "name": "Enganação",
    "ability": "Carisma",
    "trainedOnly": false,
    "armorPenalty": false,
    "blocks": [
      {
        "title": "Blefar",
        "paragraphs": [
          "você pode levar outras pessoas a tirar conclusões erradas sobre algo ou alguém.",
          "Um teste de Enganação é oposto ao teste de Intuição da vítima. Circunstâncias positivas e negativas pesam muito no resultado de um blefe (veja o abaixo). Um teste bem-sucedido de Enganação indica que o alvo reage como o personagem deseja, pelo menos por um breve período de tempo (1 rodada), ou acredita em algo que o personagem quer. Blefar gasta uma ação padrão.",
          "Exemplos de circunstâncias de Enganação e o modificador:",
          "* O alvo deseja acreditar no personagem (CD -5). “Mas tenho certeza de que você deixou cair esta peça de ouro. Não é mesmo sua?” * O blefe é verossímil e não afetará muito o alvo (CD +0). “Um ladrão goblin, você disse? Não, não vi ninguém assim passar por aqui.” * O blefe é um pouco difícil de acreditar ou colocará a vítima em perigo (CD +5). “Rápido, preciso da sua espada! Vem vindo um orc nesta direção!” * O blefe é difícil de acreditar ou colocará a vítima em grande perigo (CD +10). “Sim, entendo que seu mestre deixou você protegendo o laboratório, mas ele acaba de me pedir para apanhar sua bola de cristal ai dentro. Não vamos querer problemas com o mestre, certo?” * O blefe é muito fantástico, é quase impossível de acreditar nele (CD +20). “Sim, foi o que eu disse! O imperador dos minotauros foi substituído por um seguidor do Deus da Traição e ninguém percebeu! Temos que fazer alguma coisa!”"
        ]
      },
      {
        "title": "Disfarce",
        "paragraphs": [
          "com um pouco de maquiagem e alguns truques, você consegue mudar sua aparência ou a de outra pessoa.",
          "Faça um teste de Enganação contra um teste de Percepção de quem prestar atenção em você. Em caso de sucesso, a pessoa acredita em seu disfarce. Disfarces complexos impõem penalidades: -2 para sexo oposto, -5 para uma raça diferente, e -2 para idades muito diferentes. Estas penalidades são cumulativas.",
          "Como é mais difícil fingir ser alguém conhecido, aqueles que conhecem essa pessoa recebem bônus em seus testes de Percepção: +2 se apenas conhece de vista, +5 para amigos, +10 para intimo. Um disfarce exige pelo menos dez minutos e um kit de disfarces. Sem o kit, você sofre uma penalidade de -5 nos testes de Enganação para fazer um disfarce."
        ]
      },
      {
        "title": "Falsificação",
        "paragraphs": [
          "você pode forjar documentos.",
          "Faça um teste de Enganação contra um teste de Percepção de quem examina o documento falsificado. Em caso de sucesso, o examinador acredita que o documento é válido, caso contrário, ela percebe que é falso. Documentos complexos impõem penalidades: -2 para um documento desconhecido pelo falsificador; -2 para documentos complexos (como decretos reais ou ordens militares); -2 se inclui uma assinatura específica. Essas penalidades são cumulativas.",
          "Certas circunstâncias também modificam o teste do examinador: -2 se ele nunca viu um documento real; +2 se estiver habituado a ver esse tipo de documento; +2 ao analisar com muita atenção (por exemplo, guardas inspecionando criteriosamente os convites para uma festa restrita). Estes modificadores são cumulativos.",
          "Usada em conjunto com Ofício, você também pode forjar versões falsas de outros objetos (jóias, por exemplo).  Use a perícia Ofício para fabricar a peça, e então um teste de Enganação para que ela se pareça com o artigo genuíno."
        ]
      },
      {
        "title": "Fintar",
        "paragraphs": [
          "para confundir um inimigo, faça um teste de Enganação oposto a um teste de Iniciativa do alvo. Em caso de sucesso, o oponente estará desprevenido quando você fizer seu próximo ataque contra ele, mas apenas até o fim da próxima rodada."
        ]
      },
      {
        "title": "Golpe",
        "paragraphs": [
          "Você vende castelos, jóias e até lugares nos Reinos dos Deuses, ou ao menos promete. Ao chegar em um lugar, você pode fazer um teste de enganação contra CD 15 por dia. Se você for bem-sucedido, recebe 1 TO por cada ponto que seu teste exceder a CD. Como alternativa, você pode usar este talento para arrancar favores de plebeus. Estes favores podem incluir abrigo durante uma noite, transporte, informações, etc., desde que sejam coisas ao alcance de plebeus. A CD total para estes favores é 20 (favores simples), 25 (favores complicados, custosos ou arriscados), 30 (favores ilegais ou muito arriscados) ou mais, a critério do mestre (favores que ameacem a vida do plebeu ou de sua família). Em qualquer caso, se você rolar um “1 natural”, não poderá usar este uso de perícia por um mês. Além disso, você terá atraído a atenção de guardas. Obviamente, eles não estarão nada satisfeitos com você..."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "furtividade",
    "name": "Furtividade",
    "ability": "Destreza",
    "trainedOnly": false,
    "armorPenalty": true,
    "blocks": [
      {
        "title": null,
        "paragraphs": [
          "Faça um teste de Furtividade oposto pelo teste de Percepção daqueles que poderiam notá-lo. Você não é percebido pelas pessoas contra as quais tenha sido bem-sucedido.",
          "Usar Furtividade exige algum tipo de cobertura ou camuflagem entre você e seus alvos. Ou ainda, deve haver outras pessoas em cena com as quais você consiga se misturar (para sumir na multidão ou seguir alguém nas ruas, por exemplo). Você deve ficar parado ou se mover lentamente com metade do deslocamento (ou então com a mesma velocidade das pessoas em volta, se houver). Em deslocamento normal você sofre -5 em seu teste, e -20 em corrida ou investida. Um teste de Furtividade numa rodada em que você ataque também sofre penalidade de -20.",
          "Você não pode fazer um teste de Furtividade contra alguém que esteja olhando diretamente para você  mesmo que se esconda atrás de algo, o observador saberá que você está ali. No entanto, você pode um blefe (veja a perícia Enganação) para criar uma distração e, em caso de sucesso, tentar se esconder.",
          "Usar esta perícia é parte de sua movimentação."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "identificar-magia",
    "name": "Identificar Magia",
    "ability": "Inteligência",
    "trainedOnly": true,
    "armorPenalty": false,
    "blocks": [
      {
        "title": "Identificar magia",
        "paragraphs": [
          "quando alguém lança uma magia, você pode adivinhar qual é através de seus gestos e palavras (CD 15 + nível da magia), antes que ela seja efetivamente conjurada. Você também pode identificar uma magia que já tenha sido lançada e que esteja funcionando (CD 20 + nível da magia). Identificar uma magia é uma reação."
        ]
      },
      {
        "title": "Identificar poção (CD 20)",
        "paragraphs": [
          "identificar uma poção exige pelo menos 1 minuto."
        ]
      },
      {
        "title": "Lançar magia de armadura",
        "paragraphs": [
          "armaduras interferem com os gestos delicados necessários para conjurar. Lançar uma magia arcana usando armaduras que você não é treinado exige um teste (CD 25 + nível da magia). Se falhar, a magia não funciona, mas mesmo assim gasta pontos de magia."
        ]
      },
      {
        "title": "Usar instrumento mágico (CD 20 + 5 para cada categoria de item mágico)",
        "paragraphs": [
          "você pode “enganar” um item mágico para que funcione com você, mesmo quando não deveria. Por exemplo, pode golpear com uma espada sagrada que funciona apenas nas mãos de pessoas Bondosas (mesmo que você não seja), ou vestir uma capa mágica feita para elfos mesmo que você seja humano, ou atravessar um portão mágico construído para permitir apenas a passagem de druidas. Faça o teste para cada ativação do item (para pergaminhos, varinhas...) ou a cada hora (para armas, armaduras, anéis...)."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "iniciativa",
    "name": "Iniciativa",
    "ability": "Destreza",
    "trainedOnly": false,
    "armorPenalty": false,
    "blocks": [
      {
        "title": "Iniciativa em combate",
        "paragraphs": [
          "quando um combate se inicia, cada personagem envolvido faz um teste de Iniciativa. Aqueles com resultados mais altos agem primeiro."
        ]
      },
      {
        "title": "Evitar finta",
        "paragraphs": [
          "quando um oponente tentar fintar você em combate, você faz um teste de Iniciativa contra o teste de Enganação dele. Se você é bem-sucedido, a finta falha."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "intimidacao",
    "name": "Intimidação",
    "ability": "Carisma",
    "trainedOnly": false,
    "armorPenalty": false,
    "blocks": [
      {
        "title": "Assustar",
        "paragraphs": [
          "Como uma ação padrão, você pode fazer um teste de Intimidação oposto pelo teste de Intuição de um alvo a até 9m. Se você for bem-sucedido, o alvo fica abalado por 1 rodada. Se você for bem sucedido por 10 ou mais pontos, o alvo fica apavorado por uma rodada e então abalado por 1 minuto. Só pode ser usado uma vez por alvo."
        ]
      },
      {
        "title": "Coagir",
        "paragraphs": [
          "Você obriga uma pessoa a fazer algo. Faça um teste de Intimidação oposto pelo teste de Intuição da vítima. Se você for bem-sucedido, ela colabora por um minuto. Depois desse tempo, sua atitude cai em duas categorias. Se você falhar no teste por 5 ou mais, a vítima não obedece ou faz o oposto do ordenado. Se você mandar a pessoa fazer algo perigoso ou que vá contra a natureza dela, ela recebe +5 no teste ou é automaticamente bem-sucedida, de acordo com o mestre. Este uso demora um minuto de “conversa”.  Você pode coagir como uma ação completa, mas sofre uma penalidade de –10 no teste. Em combate, você tem uma penalidade de -10 para coagir."
        ]
      },
      {
        "title": "Extorquir",
        "paragraphs": [
          "Você pode sair pelas ruas da cidade coletando \"doações\". Faça um teste de Intimidação, e consulte a tabela abaixo para ver o quanto você conseguiu recolher. Este uso pode ser usado uma vez por dia (e, obviamente, apenas em cidades). 9 ou menos - Nenhum 10-19 - 1d4 TO x seu nível 20-29 - 1d8 TO x seu nível 30 ou mais - 2d6 TO x seu nível"
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "intuicao",
    "name": "Intuição",
    "ability": "Sabedoria",
    "trainedOnly": false,
    "armorPenalty": false,
    "blocks": [
      {
        "title": "Desacreditar (CD 20 ou 20 + nível da magia + modificador do conjurador)",
        "paragraphs": [
          "você percebe algo errado, mesmo sem nenhum sinal aparente; uma pessoa agindo de forma estranha por estar enfeitiçada; uma parede que não deveria estar ali (pois na verdade é uma ilusão); ou um monstro que não deveria existir na região – porque na verdade é uma criatura transformada, ou foi conjurado por um mago."
        ]
      },
      {
        "title": "Sentir motivação",
        "paragraphs": [
          "você percebe que alguém está mentindo. Um teste bem-sucedido faz com que você não seja afetado por um blefe (veja a perícia Enganação). Você pode também usar esta perícia para ter um “palpite” sobre a confiabilidade de uma pessoa (CD 20)."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "jogatina",
    "name": "Jogatina",
    "ability": "Carisma",
    "trainedOnly": false,
    "armorPenalty": false,
    "blocks": [
      {
        "title": "Jogos de azar",
        "paragraphs": [
          "Use esta perícia para ganhar dinheiro com jogos de azar. Para resolver uma noite de jogatina, pague 1d10 TO, faça um teste de perícia e consulte a tabela abaixo para determinar quanto você ganha.",
          "O mestre pode variar o valor da aposta básica. De 1d3 TO, para uma taverna suja do porto, frequentada por marujos e estivadores, a 1d10 x 1.000 TO, para um bordel de luxo na capital do Reinado!",
          "Jogatina é uma perícia de classe para bardos, ladinos e swashbucklers."
        ],
        "table": {
          "headers": ["Resultado do Teste", "Ganho"],
          "rows": [
            ["9 ou menos", "Nenhum."],
            ["10 a 14", "Metade da aposta."],
            ["15 a 19", "Valor da aposta (você “empata”)."],
            ["20 a 29", "Dobro da aposta."],
            ["30 a 39", "Triplo da aposta."],
            ["40 ou mais", "Quíntuplo da aposta."]
          ]
        }
      },
      {
        "title": "Wyrt",
        "paragraphs": [
          "O Wyrt é um dos jogos de azar mais conhecidos do Reinado — mas não um dos mais jogados, pelo menos abertamente. Originário de Ahlen, o Wyrt é ilegal a todos que não sejam nobres, embora cassinos e tavernas discretas ofereçam mesas clandestinas para quem puder pagar.",
          "O Wyrt é jogado com cartas e dados. Assim, depende em iguais partes de estratégia e sorte. No entanto, em Ahlen a trapaça faz parte do jogo quase tanto quanto as regras. “Roubar” sem ser apanhado é uma habilidade tão valorizada quanto dominar as táticas em si. Embora não exista uma descrição detalhada das regras do Wyrt, o mestre pode introduzi-lo (assim como outros jogos de azar) com uma simulação simplificada.",
          "Para entrar em uma mesa de Wyrt, um jogador deve primeiro cobrir a aposta. O valor varia de 1 TO, para mesas casuais, a 10.000 TO, para mesas exclusivas da elite de Valkaria. A aposta de uma mesa típica em uma taverna clandestina é 1d6x10 TO.",
          "Cada jogador faz um teste de Jogatina, que representa tanto sua habilidade com as cartas quanto sua sorte nos dados. O jogador com o maior resultado vence e fica com todo o valor apostado. Antes do teste de Jogatina, os jogadores podem blefar ou trapacear, para aumentar suas chances."
        ]
      },
      {
        "title": "Blefe",
        "paragraphs": [
          "Um jogador pode blefar com um teste de Enganação (CD 20). Se for bem-sucedido, recebe um bônus de +2 no teste de Jogatina, com +2 adicional para cada 5 pontos pelos quais o resultado do teste de Enganação exceder a CD (+4 com resultado 25, +6 com resultado 30 e assim por diante). Se falhar por 5 ou mais, acaba revelando parte de sua estratégia e sofre uma penalidade de –4 no teste de Jogatina."
        ]
      },
      {
        "title": "Trapaça",
        "paragraphs": [
          "Um jogador pode trapacear com um teste de Ladinagem (CD 20). Se for bem-sucedido, recebe um bônus de +10 no teste de Jogatina. Os outros jogadores podem fazer testes de Percepção (CD igual ao resultado do teste de Ladinagem). Um jogador bem-sucedido nota a trapaça — o que normalmente faz com que o jogo termine e uma briga comece."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "ladinagem",
    "name": "Ladinagem",
    "ability": "Destreza",
    "trainedOnly": true,
    "armorPenalty": true,
    "blocks": [
      {
        "title": "Abrir fechaduras",
        "paragraphs": [
          "com uma ação completa, você pode abrir uma fechadura trancada (isto é, sem ter a chave). Uma fechadura simples (porta da frente de uma casa) tem CD 20. Uma fechadura média (prisão, baú...) tem CD 25. E uma fechadura superior (cofre, câmara do tesouro) tem CD 30.",
          "Este uso exige um kit de ladrão. Sem ele, você sofre uma penalidade de -5 no teste."
        ]
      },
      {
        "title": "Ocultar item",
        "paragraphs": [
          "você precisa gastar uma ação padrão para esconder um item em seu corpo. O objeto deve ser pelo menos uma categoria de tamanho menor que você.",
          "Faça um teste de Ladinagem contra um teste de Percepção de qualquer um que possa vê-lo. Para um objeto uma categoria menor que você, seu teste sofre penalidade de -5; duas categorias menor, 0; três categorias menor +5; quatro ou mais categorias menor, +10. Se uma pessoa revistar você, recebe +10 no teste de Percepção."
        ]
      },
      {
        "title": "Operar mecanismos",
        "paragraphs": [
          "esta perícia permite desabilitar, ativar ou sabotar (mas não consertar) dispositivos mecânicos diversos, como fechaduras, armadilhas, veículos e armas de fogo. Você também pode sabotar aparatos para que funcionem por algum tempo, falhando apenas mais tarde (normalmente após 1d4 rodadas ou minutos de uso).",
          "Usar esta perícia leva 1d4 rodadas, e a dificuldade depende da complexidade da tarefa. Uma ação simples (emperrar uma fechadura ou arma de fogo) tem CD 10. Uma ação média (sabotar uma roda de carroça, ponte levadiça ou balão goblin) tem CD 15. Uma ação difícil (desativar ou reativar uma armadilha) tem CD 20. Por fim, uma ação muito complexa (como desativar ou reativar uma armadilha avançada, ou sabotar um canhão naval para explodir quando utilizado) tem CD 25.",
          "Se falhar por 5 ou mais, alguma coisa saiu muito errado: se é uma armadilha, ela se ativa. Se estiver tentando uma sabotagem, você acha que o mecanismo está desabilitado, mas na verdade ele ainda funciona normalmente.",
          "Este uso exige um kit de ladrão. Sem ele, você sofre uma penalidade de -5 no teste."
        ]
      },
      {
        "title": "Prestidigitação (CD 20)",
        "paragraphs": [
          "você consegue surrupiar ou plantar objetos nos bolsos de outras pessoas sem que elas percebam.",
          "Faça um teste de Ladinagem. Em caso de sucesso, você consegue pegar (ou colocar) o que queria. A vítima tem direito a um teste de Percepção (CD igual ao resultado de seu teste de Ladinagem). Se tiver sucesso, ela percebe que sua tentativa, tenha você conseguido ou não. Tentar surrupiar ou plantar algo gasta uma ação padrão. Com uma CD 30 você pode usar esta perícia com ação livre."
        ]
      },
      {
        "title": "Usar instrumento mágico (CD 25 + 5 para cada categoria de item mágico)",
        "paragraphs": [
          "você pode “enganar” um item mágico para que funcione com você, mesmo quando não deveria. Por exemplo, pode golpear com uma espada sagrada que funciona apenas nas mãos de pessoas Bondosas (mesmo que você não seja), ou vestir uma capa mágica feita para elfos mesmo que você seja humano, ou atravessar um portão mágico construído para permitir apenas a passagem de druidas. Faça o teste para cada ativação do item (para pergaminhos, varinhas...) ou a cada hora (para armas, armaduras, anéis...)."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "meditacao",
    "name": "Meditação",
    "ability": "Sabedoria",
    "trainedOnly": true,
    "armorPenalty": false,
    "blocks": [
      {
        "title": null,
        "paragraphs": [
          "Você treinou sua mente para obter domínio sobre seu próprio corpo e destravar capacidades extraordinárias. Meditação é uma perícia de classe para clérigos, lutadores, monges, ninjas, samurais e samaritanos."
        ]
      },
      {
        "title": "Força de vontade (CD 20)",
        "paragraphs": [
          "se ficar com 0 PV ou menos, você pode fazer um teste de Meditação como uma ação livre para se manter consciente por mais uma rodada. Você continua sangrando e deve fazer testes para estabilizar normalmente. Você só pode usar este efeito uma vez por combate."
        ]
      },
      {
        "title": "Memorizar (CD 15)",
        "paragraphs": [
          "você pode memorizar uma longa sequência de números, uma grande passagem de versos ou outro conjunto de informações complexo (mas nunca escritas mágicas ou similares). Cada teste bem-sucedido permite reter uma página de informação com uma ação completa. Se o documento for maior que uma página, você deve fazer testes adicionais para cada página. A informação memorizada é permanente, mas só pode ser acessada com outro teste bem-sucedido de Meditação."
        ]
      },
      {
        "title": "Resistir ao medo e magia (CD 25)",
        "paragraphs": [
          "contra qualquer efeito de medo e mágicos, você faz testes de resistência normalmente. Em caso de falha, você pode fazer um teste de Meditação na rodada seguinte; se for bem-sucedido, pode fazer um novo teste de resistência. Este uso da perícia só funciona uma vez para cada efeito de medo usado contra você."
        ]
      },
      {
        "title": "Resistir a venenos",
        "paragraphs": [
          "você pode substituir um teste de Meditação por um teste de Fortitude para evitar efeitos secundários de venenos."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "obter-informacao",
    "name": "Obter Informação",
    "ability": "Carisma",
    "trainedOnly": false,
    "armorPenalty": false,
    "blocks": [
      {
        "title": null,
        "paragraphs": [
          "Você pode fazer contatos, ouvir os rumores locais e descobrir informações específicas – como a localização de uma masmorra ou o esconderijo de um bandido.",
          "Usar esta perícia exige um dia inteiro, e algumas moedas para gastar em bebidas. A dificuldade do teste, assim como o dinheiro que vai gastar, dependem da informação que você quer descobrir.",
          "Informações gerais (“Quem é o guerreiro mais forte da aldeia?”) têm CD 10 e custam 1d6 PO. Informações específicas (“Quem é o ancião que está sempre ao lado do rei?”) tem CD 15 e custam 1d10 PO. Informações restritas, que poucas pessoas conhecem (“O que fazem naquela torre misteriosa?”), têm CD 20 e custam 3d6 PO. Por fim, informações protegidas, que podem colocar em risco quem responder à pergunta (“Quem é o líder da guilda de ladrões?”), têm CD 25 e custam 3d10 PO.",
          "Você pode pagar o dobro do dinheiro (mas tem que fazer a escolha antes da quantia ser rolada) para um bônus de +2 no teste."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "oficio",
    "name": "Ofício",
    "ability": "Inteligência",
    "trainedOnly": false,
    "armorPenalty": false,
    "blocks": [
      {
        "title": null,
        "paragraphs": [
          "Assim como Atuação e Conhecimento, Ofício na verdade são várias perícias diferentes. Você pode ser treinado em várias perícias de Ofício, cada uma escolhida como uma perícia separada. A seguir estão alguns exemplos de Ofício.",
          "* Administração (gerenciar negócios) [apresentado em Valkaria: Cidade Sob a Deusa] * Alquimia (ácidos, poções, venenos). * Alvenaria (itens e construções de pedra). * Armas de Cerco (armas de cerco, como catapultas, balistas e trabucos) * Carpintaria (itens e construções de madeira). * Joalheria (lapidação, pedras preciosas). * Metalurgia (armas, armaduras e itens de metal). * Uma arte, como escrita, escultura ou pintura. * Uma profissão, como cozinheiro, fazendeiro, pescador, estalajadeiro ou pastor."
        ]
      },
      {
        "title": "Avaliação",
        "paragraphs": [
          "um teste pode estimar o valor de um item ligado a seu Ofício – desde algo que você consiga fabricar até um instrumento ou ferramenta que esteja habituado a usar –, conseguindo diferenciar uma peça de qualidade de uma inferior.  Avaliar itens comuns ou conhecidos tem CD 10. Uma falha significa que você estimou entre 50% e 150% (2d6 +3 vezes 10%) do valor verdadeiro.  Avaliar um item rato ou exótico tem CD 20, e neste caso falhar indica que você não sabe o valor do item.",
          "Um teste de Ofício também pode substituir um teste de Percepção para perceber uma falsificação (veja Enganação. Nesse caso, você recebe +2 em seu teste de Ofício."
        ]
      },
      {
        "title": "Fabricar itens",
        "paragraphs": [
          "fabricar um item exige matéria-prima no valor de um terço do preço original do item. O tempo necessário é um dia por cada 100 PO, com o máximo sendo uma semana. No fim desse período, faça um teste de Ofício. Se tiver sucesso, o item estará pronto. Se falhar, pode gastar mais uma semana(ou o tempo original, o que for menor) para tentar de novo. Você pode fazer quantas tentativas quiser  mas se falhar por 5 ou mais em qualquer dos testes, você estraga as matérias-primas e precisa recomeçar do zero.",
          "A dificuldade depende do tipo e complexidade do item. Itens muito simples (como uma colher de pau) têm CD 10. Itens típicos (caldeirão de ferro, retrato, arma simples, armadura leve...) têm CD 15. Itens complexos (sino, arma marcial, armaduras médias...) têm CD 20. Por fim, itens de qualidade superior (fechadura, relógio, arma de fogo, armadura pesada...) têm CD 25. Você pode aceitar uma penalidade de -5 no teste para tentar fabricar o item na metade do tempo."
        ]
      },
      {
        "title": "Consertar",
        "paragraphs": [
          "geralmente, reparar um item tem a mesma CD necessária para fabricá-lo. Cada tentativa consome um dia inteiro de trabalho, e um quinto do preço original do item. Em caso de falha, o tempo e o dinheiro são perdidos – mas você sempre pode tentar novamente."
        ]
      },
      {
        "title": "Sustento",
        "paragraphs": [
          "você pode praticar seu trabalho e tirar sustento dele. Com uma semana de trabalho e um teste de Ofício, você ganha 1 PO para cada ponto que seu teste exceder 15. Por exemplo, se teve um resultado final 19, ganha 4 PO pela semana de trabalho. Trabalhadores treinados ganham uma média de 1 PO por semana, enquanto trabalhadores sem treinamento recebem em média 1 peça de prata por dia."
        ]
      },
      {
        "title": "Código (Profissões)",
        "paragraphs": [
          "Usando jargões de sua profissão, personagens podem se comunicar verbalmente na frente de outras pessoas, e não serão entendidos. Em combate, podem discutir planos complexos, formular estratégias e definir táticas, sem que o inimigo compreenda. Cada código é único (assim, dois grupos diferentes terão cada um o seu código particular). Mensagens também podem ser escritas neste código. Um código pode ser desvendado com um teste de conhecimento(qualquer), Obter informações ou por magias como compreender idiomas. A CD é igual ao maior teste de ofício do grupo que utiliza o código a ser desvendado."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "percepcao",
    "name": "Percepção",
    "ability": "Sabedoria",
    "trainedOnly": false,
    "armorPenalty": false,
    "blocks": [
      {
        "title": "Observar",
        "paragraphs": [
          "você pode notar coisas, pessoas ou criaturas escondidas. O teste é oposto ao teste de Furtividade do personagem tentando não ser visto. Às vezes o alvo não está se escondendo intencionalmente, mas ainda exige um teste de Percepção para ser notado. Nestes casos, a dificuldade varia entre CD 5 (uma pessoa em uma praça com pouco movimento) até 30 (um soldado específico em meio a uma grande batalha).",
          "Esta perícia também é usada para ver através de um disfarce, perceber um documento falso (veja a perícia enganação) e ler lábios (CD 20)."
        ]
      },
      {
        "title": "Ouvir",
        "paragraphs": [
          "você pode tentar ouvir coisas como uma conversa distante ou um inimigo tentando se aproximar em silêncio. Em masmorras, é bastante prudente parar para escutar antes de entrar em um novo corredor ou aposento.",
          "A dificuldade depende da intensidade do barulho. Uma conversa casual próxima tem CD 0 – ou seja, a menos que exista alguma penalidade (veja adiante), você é bem-sucedido automaticamente. Ouvir pessoas sussurrando tem CD 15. Ouvir do outro lado de uma porta aumenta a CD em +5.",
          "Ouvir alguém se aproximando sorrateiramente exige um teste de Percepção contra o teste de Furtividade da criatura. Perceber criaturas invisíveis tem CD 20, ou +10 no teste de Furtividade da criatura, o que for maior. Mesmo que você seja bem-sucedido no teste, ainda sofre penalidades normais por lutar sem ver o inimigo.",
          "Mesmo dormindo você pode fazer testes de Percepção para ouvir algo, mas sofre uma penalidade de -10; um sucesso faz você acordar."
        ]
      },
      {
        "title": "Procurar",
        "paragraphs": [
          "examinando atentamente uma coisa ou local, você pode perceber detalhes úteis ou encontrar algo que estava procurando. Você precisa estar a pelo menos 3m do item a ser examinado. Examinar uma área de 1,5m de lado gasta uma ação completa.",
          "Procurar um item específico dentro de um baú cheio de objetos: CD 10. Encontrar uma porta secreta: CD 20. Perceber uma porta secreta muito bem escondida: CD 20. Encontrar armadilhas (apenas personagens com a habilidade de classe encontrar armadilhas): CD 20 ou maior. Para armadilhas mágicas, CD 25 + nível da magia usada. Um teste de Percepção pode revelar rastros, mas não permite identificar esses rastros, segui-los ou dizer de que direção vieram (ou para onde vão). Para isso, utilize a perícia Sobrevivencia."
        ]
      }
    ],
    "sourceNotes": []
  },
  {
    "slug": "sobrevivencia",
    "name": "Sobrevivência",
    "ability": "Sabedoria",
    "trainedOnly": false,
    "armorPenalty": false,
    "blocks": [
      {
        "title": null,
        "paragraphs": [
          "Você é capaz de avançar sem se perder e manter a si mesmo e seus companheiros alimentados em áreas selvagens. Um teste bem-sucedido por dia garante a sobrevivência de um pequeno grupo (você e mais quatro ou cinco pessoas). A dificuldade depende do tipo de ambiente: CD 15 para planícies e áreas costeiras; CD 20 para florestas ou pântanos e CD 25 para desertos ou montanhas. Regiões especialmente áridas ou estéreis e clima ruim (neve, tempestade, etc.) impõem uma penalidade de –5 (cumulativa)."
        ]
      },
      {
        "title": "Rastrear",
        "paragraphs": [
          "Você pode fazer testes de Sobrevivência para encontrar rastros. A dificuldade varia de acordo com o solo CD 10 para solo macio (neve, lama), 15 para solo padrão (grama, terra) e 20 para solo duro (rocha ou piso de interiores).",
          "Você ganha +1 para cada três criaturas no grupo sendo seguido. Você sofre uma penalidade de –1 para cada dia desde a criação dos rastros e uma penalidade de –5 em visibilidade precária (noite, chuva, neblina). Você precisa fazer um teste para encontrar os rastros e mais um para cada dia de perseguição.",
          "Se falhar, você pode tentar novamente gastando mais um dia (mas lembre-se de que a CD aumenta a cada dia)."
        ]
      },
      {
        "title": "Pilhar Presa",
        "paragraphs": [
          "Seu conhecimento sobre a natureza possibilita aproveitar o máximo de seus recursos, inclusive de criaturas abatidas. Um teste de Sobrevivência CD 10 + Nível da criatura é necessário para extrair partes da carcaça sem danificar o material final. Os tipos de criaturas são:",
          "Animais: pelos, pele, presas e chifres. Construtos: 1kg de material padrão (pedra, aço, cobre, madeira, etc) para cada categoria de tamanho. Espíritos: essência espiritual, pó arcano, outros componentes de magia. Humanoides: Pele, cabelo, olhos, sangue. Monstros: Presas, chifres, sangue, pele, escamas, glândulas especiais. Mortos-vivos: carne putrefata, ossos, cinzas.",
          "Os materiais pilhados sempre ficam a critério do mestre (e do bom senso). Por exemplo: é possível obter presas de um lobo abatido, mas não chifres, por motivos óbvios. É possível também usar essa perícia para obter recursos para criar armas e armaduras especiais, como Couro de Dragão."
        ]
      }
    ],
    "sourceNotes": []
  }
];

export const skillCount = skills.length;

~~~~


---

# Combate — regras completas

**Fonte:** `src/data/combate.ts`

~~~~typescript
export interface CombatBlock {
  title: string | null;
  paragraphs: string[];
}

export interface CombatTable {
  headers: string[];
  rows: string[][];
}

export const combat = {
  "overviewIntro": "Um combate obedece os seguintes passos:",
  "overviewSteps": [
    "Cada personagem faz um teste de Iniciativa.",
    "O mestre determina quais personagens estão cientes de seus inimigos. Aqueles que não percebem a presença de inimigos começam o combate surpreendidos. Um personagem surpreendido não age na primeira rodada, e está desprevenido.",
    "Todos os personagens têm seu turno na ordem da Iniciativa (com exceção daqueles que estiverem surpreendidos, que não agem na primeira rodada).",
    "Quando todos os personagens tiverem seu turno, a rodada termina. Uma outra rodada se inicia, com todos os personagens agindo novamente, na mesma ordem. Mesmo aqueles que estavam surpresos agora podem agir."
  ],
  "attack": [
    "Quando você ataca, faz uma jogada de ataque, isto é, rola um d20 e soma seu bônus de ataque. Se o resultado é igual ou maior que a classe de armadura do alvo, você acerta e causa dano.",
    "* Jogada de ataque corpo-a-corpo ou arremesso: 1d20 + Nível de Personagem + modificador de Força.",
    "* Jogada de ataque à distância: 1d20 + Nível de Personagem + modificador de Destreza.",
    "* Jogadas de ataque de toque: 1d20 + Nível de Personagem + modificador de Conjuração.",
    "Por exemplo, um ladino de 5º nível com Força 12 (+1) e Destreza 16 (+3) tem bônus de ataque corpo-a-corpo +6 e a distância +8. Ele rolará 1d20 e somará 6 ao resultado para atacar corpo-a-corpo, ou 8 para atacar à distância.",
    "Pode haver ainda outros modificadores, oferecidos por bônus raciais (como o bônus dos halflings para atacar à distância), talentos (como Especialização em Arma), magias, armas mágicas e etc. Ataques de toque e toque a distância não podem ser impedidos por habilidades como aparar,  ripostar e desviar objetos. Armas leves e armas que permitam o uso de “Acuidade com arma” podem utilizar destreza como habilidade para ataques em Jogadas de ataque corpo-a-corpo ou arremesso. Dados escolhidos não geram efeitos dependente de rolagem, como, por exemplo, acertos críticos."
  ],
  "damage": [
    "Quando você acerta um ataque, causa dano. Esse dano reduz os pontos de vida do inimigo (veja adiante em \"Pontos de Vida\"). Você rola outros dados para descobrir quanto dano causou. O tipo de dano depende da arma ou ataque utilizado por exemplo, 1d4 para uma adaga ou 2d6 para uma espada grande. O dano de cada arma é descrito na página Equipamento.",
    "* Dano com arma de corpo-a-corpo ou de arremesso: Dano da arma + metade do nível do atacante + modificador de Força do atacante.",
    "* Dano com arma de disparo: dano da arma + metade do nível do atacante + modificador de Destreza do atacante.",
    "Então um personagem de 5º nível, com Força 16 e usando uma espada longa causa 1d8+5 pontos de dano (1d8 da espada longa, +2 por metade do nível, +3 pelo modificador de Força). Aqui também pode haver outros modificadores, oferecidos por talentos (como Especialização em Arma), magias, armas mágicas e outras condições. Dano mínimo. Um acerto bem-sucedido sempre causa pelo menos 1 ponto de dano, mesmo que quaisquer penalidades reduzam o dano a menos que 1. O talento Ataque Sagaz permite substituir o modificador de Força em jogadas de arremesso. Apenas criaturas do mesmo tamanho ou maior que a estrutura conseguem causar dano a mesma. Não se aplica a armas de cerco."
  ],
  "abilityDamage": [
    "Pontos de habilidades perdidos voltam à taxa de 1 por dia. Um personagem com Força ou Destreza 0 cai paralisado. Um personagem com Inteligência, Sabedoria ou Carisma 0 cai inconsciente. Um personagem com Constituição 0 morre. Dano de Habilidade. Uma criatura só pode receber Dano de Habilidade em cada atributo uma vez por rodada."
  ],
  "critical": [
    "Consulte a página de Equipamentos. Você verá, na tabela de armas, uma coluna onde diz \"Crítico\". Cada arma tem uma margem de ameaça (que pode ser 20, 19-20, ou 18-20) e um multiplicador (que pode ser x2, x3 ou x4). Ao fazer sua jogada de ataque, quando você rola um valor dentro da margem de ameaça da arma e o ataque acerta, é um acerto crítico. Um acerto crítico aumenta o dano por 2, 3 ou 4 dados, conforme o multiplicador da arma. Então se você ataca com uma espada longa (1d8, margem 19-20, multiplicador x2), rola 19 ou 20 do dado da jogada de ataque e acerta, causa dano crítico. Você rola dados de dano adicionais iguais aos dados da arma. Por exemplo, 1d8 para uma espada longa mais os bônus de dano (bônus por nível e modificador de Força). Porém valores extras sejam por talentos, habilidades de classe ou encantamentos (Como os do talento Especialização em Arma, os da habilidade ataque furtivo, encantamento elemental, etc), entretanto, não são adicionados. Mesmo criaturas sem pontos vitais, como mortos-vivos e construtos, sofrem acertos críticos.No entanto, certos tipos de criaturas disformes(aberrações, gosmas, enxames) são imunes a acertos críticos. Seres resistentes ou imunes a acertos críticos, sofrem metade do dano de Ataques Furtivos"
  ],
  "armorClass": [
    "A classe de armadura representa a dificuldade de acertar o alvo. Esse é o número-alvo que o atacante precisa obter em sua jogada de ataque para ser bem-sucedido.",
    "* Classe de armadura: 10 + metade do nível do personagem + modificador de Destreza + bônus de armadura e escudo.",
    "Por exemplo, um personagem de 5º nível com Destreza 12 tem CA 13 (10 +2 por metade do nível +1 por modificador de Destreza). Se estiver vestindo uma cota de malha (bônus de armadura +5) e usando um escudo pesado (bônus de escudo +2), sua CA aumenta para 20."
  ],
  "hitPoints": [
    "Pontos de vida indicam a quantidade de dano que alguém pode sofrer antes de cair inconsciente. Enquanto tiver pelo menos 1 PV, você pode agir e lutar normalmente. Se ficar com 0 ou menos pontos de vida, você fica inconsciente. Morte. Você morre quando seus PV chegam a um número negativo igual à metade de seus pontos de vida totais. Por exemplo, um personagem com 30 PV morre se chegar a -15PV."
  ],
  "fastHealing": [
    "No início de cada turno, a criatura recupera certa quantidade de PV (por exemplo, 5 PV com cura acelerada 5). Cura acelerada não recupera PV perdidos por inanição, desidratação ou asfixia. Em alguns casos, a cura acelerada não pode recuperar certos tipos de dano - que será listado após uma barra. Por exemplo, uma criatura com cura acelerada 5/ácido ou fogo recupera 5 PV no início de cada turno, a menos que o dano tenha sido causado por ácido ou fogo."
  ],
  "saves": [
    "Alguns tipos de ataque não são realizados contra a classe de armadura do alvo, porque não envolvem um golpe direto. Em geral estes ataques não precisam de jogadas para acertar, mas o alvo tem direito a um teste para reduzir ou evitar o efeito. Cada ataque tem sua classe de dificuldade para resistir. Quando você faz um teste de resistência, essa CD é seu número-alvo: se conseguir um resultado igual ou maior, você consegue evitar ou reduzir seus efeitos, conforme o caso. Teste de resistência: 1d20 + metade do nível do personagem + modificador de habilidade. Bônus por raça, classe, talentos, magia e itens mágicos também podem afetar esse teste.",
    "* Fortitude. Esta é a sua resistência a ataques que afetam a sua saúde ou vitalidade, como venenos e doenças. Usa o modificador de Força ou Constituição.",
    "* Reflexos. Sua capacidade de esquiva contra ataques de área, como jatos, explosões ou certas armadilhas. Usa o modificador de Destreza ou Inteligência.",
    "* Vontade. Sua capacidade de concentração e resistência a ataques mentais. Usa o modificador de Sabedoria ou Carisma.",
    "Sucessos e falhas automáticas. Um 1 natural (o resultado do d20 é 1) no teste de resistência sempre é uma falha. Um 20 natural (o resultado do d20 é 20) é um sucesso, não importa seu bônus de resistência ou a classe de dificuldade do ataque. Caso o personagem venha adquirir habilidades que permitam adicionar um atributo nas suas resistências novamente ele deve trocar o atributo chave para seu teste. Por exemplo, um personagem que já adicione Car na Vontade e venha a receber a habilidade ‘Graça Divina’ não adiciona Carisma duas vezes na vontade, ele deve trocar o atributo chave da resistência para Sab. CD igual dano: 10 + MdN + Mod. For (ou qualquer Mod. utilizado para causar dano no ataque, apenas um modificador é aplicado aqui e apenas uma vez) Testes de resistência: Todas as habilidades de classe, talentos ou habilidades raciais seguem a mesma fórmula para cálculos. 10 + Metade do Nível de personagem + Modificador de Habilidade relevante."
  ],
  "reductionResistance": [
    "Redução de dano: À criatura ignora parte do dano de ataques físicos (corte, esmagamento ou perfuração). Então, se uma criatura com redução de dano 5 recebe um ataque que causa 8 pontos de dano de corte, vai perder apenas 3 PV. Em alguns casos, certo tipo de dano é capaz de ultrapassar a RD  nesse caso, ele estará descrito após uma barra. Por exemplo, uma criatura com redução de dano 10/mágica ignora 10 pontos de dano de qualquer ataque físico, exceto aqueles realizados por armas mágicas. Redução de dano afeta somente os danos do tipo cortante, perfuração e esmagamento. RD/Mágica: Toda RD que não possuir condição para ser atravessada é considerada RD/Mágica. Itens mágicos menores e médios passam apenas metade da RD. Talentos e Itens mágicos maiores passam completamente.",
    "Resistência a Energia: A criatura ignora parte do dano causado por um tipo de energia. Por exemplo, uma criatura com resistência a fogo 10 que sofra um ataque que cause 15 pontos de dano de fogo perde apenas 5 PV. Resistência à Magia: A criatura recebe um bônus em todos os testes de resistência contra magia. Por exemplo, uma criatura com resistência à magia +4 recebe um bônus de +4 em testes de Fortitude, Reflexos ou Vontade contra magias. Imunidade: A criatura é imune a alguma coisa, como um tipo de ataque, um tipo de energia ou magia. Uma criatura imune à paralisia, por exemplo, não pode ser paralisada por nenhum efeito, seja ele normal ou mágico. Uma criatura imune ao fogo ignora todo o dano causado por fogo, seja ele normal ou mágico. Uma criatura imune à magia ignora todos os efeitos mágicos que a afetem diretamente. Ela não sofre dano de mágias que causem dano, não é enganada por ilusões, etc. Ela ainda pode ser afetada indiretamente,por exemplo, ainda pode cair num buraco causado por uma magia terremoto. Quando uma imunidade é ignorada, o alvo recebe metade do dano que teria sido causado, independente de qualquer habilidade. Caso seja um efeito que permita testes de resistência, também recebe +4 de bônus nos testes relacionados a sua imunidade. Por exemplo, uma criatura imune a fogo que seja alvo da magia Bola de Fogo, teria +4 em seu teste de Reflexos para resistir a magia, e caso receba dano, recebe apenas metade dele."
  ],
  "vulnerability": [
    "A criatura sofre 1,5 vezes (+50%) o dano causado por um tipo de energia. Por exemplo, uma criatura com vulnerabilidade a frio sofrendo um ataque que cause 20 pontos de dano de frio perde 30 PV."
  ],
  "sacrifice": [
    "Quando uma habilidade exige o sacrifício de pontos de vida (PV) ou Componente Material como parte de seu custo de ativação, a criatura ou personagem que a utiliza deve pagar esse custo integralmente no momento em que a habilidade é ativada:",
    "* O sacrifício de PV ocorre antes de qualquer efeito da habilidade se manifestar.",
    "* Se a habilidade for interrompida, anulada ou falhar por qualquer motivo, o material consumido não é recuperado. Uma vez pago, o custo é considerado consumido.",
    "* O sacrifício de PV ignora resistências, redução de dano, imunidades ou habilidades que previnam dano. Esses pontos são removidos diretamente da vida atual da criatura e não podem ser evitados, a menos que uma habilidade especificamente diga que substitui ou reduz custos de ativação.",
    "* Uma criatura não pode ativar uma habilidade cujo custo de PV seja maior que sua vida atual, mas pode ativá-la se isso a reduzir a 0 PVs (ficando inconsciente ou morrendo, conforme o caso)."
  ],
  "initiative": [
    "Em cada rodada, todo personagem tem sua vez, sua chance de agir. Este é seu turno. A Iniciativa determina quais personagens recebem seus turnos primeiro. Teste de Iniciativa. No início de um combate, cada jogador faz um teste de Iniciativa para seu personagem. O mestre faz testes de Iniciativa para os inimigos. Aqueles com os resultados mais altos agem primeiro. Não é preciso fazer novos testes de Iniciativa; a ordem se mantém igual durante todo o combate. Quando dois participantes têm os resultados iguais em seus testes de Iniciativa, aquele com o maior bônus de Iniciativa age primeiro. Em caso de empate, aquele com maior modificador de Destreza age primeiro. Se mesmo assim o empate persistir, eles fazem um novo teste de Iniciativa apenas entre si, para decidir quem age primeiro.",
    "* Entrando na batalha. Se um personagem entra na batalha depois que ela começou, faz um teste de Iniciativa e age quando seu turno chegar, na rodada seguinte.",
    "* Surpresa. Quando o combate começa, se você não percebeu seus inimigos, está surpreendido. Se você está ciente de seus inimigos, mas eles não estão cientes de você, eles é que estão surpreendidos. Caso os dois lados tenham se percebido, ninguém está surpreendido. E se nenhum lado percebe o outro... Bem, nenhum combate acontece!",
    "* Percebendo os inimigos.  O mestre determina quem está ciente de seus inimigos no começo do combate. Em geral ele diz aos jogadores para fazer testes de Percepção contra uma Classe de Dificuldade, ou resistidos contra os testes de Furtividade dos inimigos (caso estes estejam sendo cautelosos)."
  ],
  "roundIntro": [
    "Uma rodada representa cerca de seis segundos no mundo do jogo. Em sua Iniciativa, cada jogador tem a chance de executar uma ou mais ações. Assim, a rodada começa quando o primeiro jogador (aquele que teve Iniciativa mais alta) vai agir, e termina após o último (aquele com Iniciativa mais baixa) fazê-lo. Mas a rodada também é o tempo entre uma Iniciativa e a mesma Iniciativa na rodada seguinte. Efeitos que duram certo número de rodadas terminam imediatamente antes do mesmo resultado de Iniciativa quando se iniciaram, após o número apropriado de rodadas."
  ],
  "actionTypes": [
    "A cada rodada, no seu turno, você pode fazer uma ação padrão e uma ação de movimento (ou o contrário). Você pode trocar sua ação padrão por uma ação de movimento, para fazer duas ações de movimento. Mas não pode fazer o inverso (trocar sua ação de movimento para uma ação padrão). Você também pode abrir mão das duas ações (padrão e de movimento) para fazer uma ação completa. Portanto, em um turno você pode executar:",
    "* Uma ação padrão e uma ação de movimento (ou vice-versa).",
    "* Duas ações de movimento.",
    "* Uma ação completa.",
    "Você também pode executar qualquer quantidade de ações livres. E uma reação por Rodada. Ação padrão: Basicamente, uma ação padrão permite que você execute uma tarefa. Fazer um ataque ou conjurar uma magia são as ações padrão mais comuns. Ação de movimento: Esta ação representa algum tipo de movimento físico. Seu uso mais comum é percorrer uma distância igual a seu deslocamento. Levantar-se, sacar uma arma, abrir uma porta, beber uma poção e montar num cavalo também são ações de movimento. Ação livre: Esta ação não exige quase nenhum tempo e esforço. Lançar um objeto no chão, ou gritar uma ordem simples, são exemplos de ações livres, mas o mestre sempre pode decidir que uma ação é complicada demais para ser livre. Por exemplo, dizer uma frase curta é uma ação livre, mas recitar todo o mito da criação leva várias rodadas! Reação: Reação é um reflexo ou resposta automática, que pode ocorrer mesmo quando não é seu turno. Ação completa: Este tipo de ação exige todo o seu tempo e esforço durante uma rodada. Para uma ação completa, você deve abrir mão de sua ação padrão e sua ação de movimento mas, normalmente, você ainda pode realizar ações livres e reações."
  ],
  "standardActions": [
    {
      "title": "Ataque corpo-a-corpo",
      "paragraphs": [
        "Com uma arma corpo-a-corpo, você pode atacar qualquer inimigo dentro de seu alcance natural (1,5m para criaturas Pequenas e Médias; ou um inimigo adjacente, no mapa). Personagens maiores, ou usando certas armas, podem atacar mais longe (e também executar outras manobras que exigem uma jogada de ataque, como agarrar, derrubar...). Caso realize um ataque com um Escudo, perde os benefícios de CA até o começo do seu próximo turno."
      ]
    },
    {
      "title": "Ataques à distância",
      "paragraphs": [
        "Com uma arma de ataque à distância, você pode atacar qualquer inimigo que consiga ver, e que esteja a até quatro vezes o alcance da arma."
      ]
    },
    {
      "title": "Atirando em Combate Corpo-a-Corpo",
      "paragraphs": [
        "Quando faz um ataque à distância contra um alvo envolvido em combate corpo-a-corpo, você sofre uma penalidade de -4 na rolagem de ataque. Um personagem está em combate corpo-a-corpo se estiver a 1,5m (ou adjacente, no tabuleiro) de qualquer inimigo."
      ]
    },
    {
      "title": "Ataques Adicionais",
      "paragraphs": [
        "A cada 6 de BBA um personagem recebe um ataque adicional com uma de suas armas ou armas naturais, estes ataques adicionais podem devem ser feitos na mesma ação padrão de um Ataque Corpo-a-corpo ou a distância. Ataques extras com armas de ataque a distância não podem ser realizados com armas que possuam tempo de recarga maior que ação livre."
      ]
    },
    {
      "title": "Combater com Duas Armas",
      "paragraphs": [
        "Um personagem pode realizar um ataque extra por turno com uma arma que possua a propriedade Leve, porém, este ataque causa apenas os dados da arma em dano, sem receber nenhum bônus extra por nível ou habilidade. Um personagem não pode realizar este ataque adicional na mesma rodada que utilizou de Armas Naturais."
      ]
    },
    {
      "title": "Armas Naturais",
      "paragraphs": [
        "Um personagem que possua pelo menos uma arma natural pode realizar um ataque extra por turno com todos os bônus relevantes. Um personagem não pode realizar este ataque adicional na mesma rodada que utilizou de Combater com Duas Armas."
      ]
    },
    {
      "title": "Ataques de Toque",
      "paragraphs": [
        "Às vezes você precisa apenas tocar o alvo, nesses casos, faça uma jogada de ataque normal contra o CA do alvo. Se você for bem-sucedido, acertou o ataque de toque."
      ]
    },
    {
      "title": "Manobras de Combate",
      "paragraphs": [
        "Uma manobra é um ataque corpo-a-corpo para fazer algo diferente de causar dano como arrancar a arma do oponente ou empurrá-lo para um abismo. Faça um teste de manobra (uma jogada de ataque corpo-a-corpo) oposto com a criatura. Esse teste recebe +4 para cada categoria acima de Médio, ou -4 para cada categoria abaixo de Médio. Mesmo possuindo múltiplos ataques, uma manobra sempre toma uma ação padrão."
      ]
    },
    {
      "title": "Agarrar",
      "paragraphs": [
        "Caso você consiga agarrar um inimigo duas ou mais categorias de tamanho maior que você, o inimigo agarrado fica apenas desprevenido e você não pode arrastá-lo. Um personagem fazendo um ataque à distância contra um alvo envolvido na manobra de agarrar determina aleatoriamente qual alvo é acertado (50% de chance para cada). Enquanto agarra uma criatura, você fica com uma mão ocupada e move-se metade do deslocamento normal (mas arrastando a criatura que estiver agarrando). Você pode soltá-la com uma ação livre. Enquanto agarra uma criatura, você pode com uma ação padrão e vencendo um teste de manobra oposto causar dano igual a um Ataque desarmado a criatura que estiver agarrando, se estiver utilizando uma arma para agarrar pode utilizar os dados dela no lugar."
      ]
    },
    {
      "title": "Atropelar",
      "paragraphs": [
        "Esta manobra serve para derrubar o alvo e/ou avançar sem que ele consiga ficar no caminho. O alvo pode escolher resistir ou dar-lhe espaço. Se o alvo decide sair do caminho, nenhum teste é necessário. Se o alvo resiste, faça o teste de manobra oposto; se você vencer, consegue derrubar o alvo e também avançar. Se o alvo vence, continua de pé e detém seu avanço. Atropelar é uma ação padrão, ou uma ação livre se tentado durante uma investida."
      ]
    },
    {
      "title": "Derrubar. Você derruba o alvo",
      "paragraphs": [
        "Esta queda normalmente não causa dano, mas pode exigir um teste de Acrobacia para evitar uma queda de grande altura."
      ]
    },
    {
      "title": "Desarmar. Você derruba um item que a criatura esteja segurando",
      "paragraphs": [
        "Normalmente o item cai no mesmo lugar em que o alvo está (a menos que o alvo esteja voando, ou sobre uma ponte, etc)."
      ]
    },
    {
      "title": "Empurrar. Você empurra a criatura 1,5m",
      "paragraphs": [
        "Para cada 5 pontos de diferença entre os testes, você empurra o alvo mais 1,5m. Você deve avançar junto com o alvo para empurrá-lo, e pode avançar até o limite do seu deslocamento."
      ]
    },
    {
      "title": "Separar",
      "paragraphs": [
        "Você atinge um item que a criatura esteja segurando, com a intenção de quebrá-lo. Caso falhe na manobra, o item usado na manobra recebe metade do dano que deveria ser causado. Caso um Ataque Desarmado tenha sido usado, você sofre esse dano."
      ]
    },
    {
      "title": "Defender. Você se prepara e fortalece suas defesas",
      "paragraphs": [
        "Você recebe +4 de CA e Reflexos até o início do seu próximo turno. Você não pode realizar Ataques de Oportunidades enquanto estiver usando Defender."
      ]
    },
    {
      "title": "Fintar",
      "paragraphs": [
        "Para confundir um inimigo, faça um teste de enganação oposto a um teste de Iniciativa do alvo. Em caso de sucesso, o oponente estará desprevenido quando você fizer seu próximo ataque contra ele, mas apenas até o fim da próxima rodada."
      ]
    },
    {
      "title": "Lançar uma magia",
      "paragraphs": [
        "Quase todas as magias exigem uma ação padrão para serem conjuradas."
      ]
    },
    {
      "title": "Preparar",
      "paragraphs": [
        "Esta ação permite que você fique pronto para realizar uma ação (padrão ou de movimento) mais tarde, depois da sua Iniciativa, mas antes da sua Iniciativa na próxima rodada. Para isso, diga a ação que você vai tentar, e em quais circunstâncias. Então, a qualquer momento antes de seu próximo turno, você pode fazer a ação preparada como uma reação a essas circunstâncias. Se, no seu próximo turno, você ainda não tiver realizado sua ação preparada, você não tem mais direito a realizá-la (embora possa preparar a mesma ação de novo)."
      ]
    },
    {
      "title": "Usar um talento",
      "paragraphs": [
        "Alguns talentos, como Comandar, exigem uma ação padrão para serem usados."
      ]
    },
    {
      "title": "Usar uma perícia",
      "paragraphs": [
        "Algumas perícias, como Conhecimentos, exigem uma ação padrão para serem usados."
      ]
    }
  ],
  "moveActions": [
    {
      "title": "Levantar-se",
      "paragraphs": [
        "Levantar do chão exige uma ação de movimento."
      ]
    },
    {
      "title": "Movimentar-se",
      "paragraphs": [
        "Você pode percorrer uma distância igual a seu deslocamento (tipicamente 9m para raças de tamanho Médio, ou 6m para Pequeno). Outros tipos de movimento, como nadar, escalar ou cavalgar, também usam essa ação."
      ]
    },
    {
      "title": "Manipular item",
      "paragraphs": [
        "Muitas vezes, manipular um item exige uma ação de movimento. Pegar um objeto em uma mochila, abrir ou fechar uma porta, beber uma poção e atirar uma corda para alguém são ações de movimento."
      ]
    },
    {
      "title": "Sacar ou guardar arma",
      "paragraphs": [
        "Sacar ou guardar uma arma exige uma ação de movimento. A perícia Iniciativa permite sacar ou guardar uma arma por rodada como uma ação livre."
      ]
    }
  ],
  "fullActions": [
    {
      "title": "Corrida. Você pode correr mais rapidamente que seu deslocamento normal",
      "paragraphs": [
        "Veja a perícia Atletismo para detalhes."
      ]
    },
    {
      "title": "Investida. Também conhecida como \"carga\"",
      "paragraphs": [
        "Você pode avançar até o dobro de seu deslocamento (e no mínimo 3m) em linha reta e, no fim do movimento, fazer um ataque corpo-a-corpo. Você recebe +2 na jogada de ataque, devido ao impulso, mas sofre penalidade de -2 na classe de armadura até o início de seu próximo  turno, porque sua guarda fica aberta. Você não pode fazer uma investida em terreno difícil. Em uma investida, você pode usar a manobra atropelar como uma ação livre."
      ]
    },
    {
      "title": "Usar um talento",
      "paragraphs": [
        "Alguns talentos, exigem uma ação completa para serem usados."
      ]
    }
  ],
  "freeActions": [
    {
      "title": "Atrasar",
      "paragraphs": [
        "Escolhendo atrasar sua ação, você age mais tarde na ordem de Iniciativa voluntariamente pelo resto do combate. Quando sua nova (e menor) Iniciativa chegar, você age normalmente. Você pode especificar este novo valor de Iniciativa, ou apenas esperar até algum momento para agir, visando sua nova Iniciativa neste ponto. Atrasar é útil para ver o que seus amigos ou inimigos farão, antes de decidir o que você mesmo fará."
      ]
    },
    {
      "title": "Limites para atrasar",
      "paragraphs": [
        "Você pode atrasar sua Iniciativa até -10 menos seu bônus total de Iniciativa. Quando a contagem de Iniciativa chega a esse ponto, você deve agir, ou abrir mão de qualquer ação na rodada. Por exemplo, um personagem com um bônus de Iniciativa +3 pode esperar até a contagem de Iniciativa chegar até -13. Nesse ponto, ele deve agir ou desistir de seu turno."
      ]
    },
    {
      "title": "Vários atrasos",
      "paragraphs": [
        "Se vários personagens estão atrasando suas ações, aquele com o maior bônus de Iniciativa (ou a maior Destreza, em caso de empate) tem a vantagem. Se dois ou mais personagens que estejam atrasando quiserem agir na mesma contagem de Iniciativa, aquele com maior bônus age primeiro. Se dois ou mais personagens estão tentando agir um depois do outro, aquele com o maior bônus de Iniciativa tem direito de agir depois."
      ]
    },
    {
      "title": "Falar. Em geral, falar é uma ação livre",
      "paragraphs": [
        "Conjurar magias, ou usar habilidades de classe que dependem da voz (como música de bardo), não são ações livres. O mestre também pode limitar aquilo que você consegue falar durante uma rodada (vinte palavras são o limite padrão)."
      ]
    },
    {
      "title": "Jogar-se no chão",
      "paragraphs": [
        "Jogar-se no chão é uma ação livre (embora se levantar seja uma ação de movimento)."
      ]
    },
    {
      "title": "Largar um item",
      "paragraphs": [
        "Deixar cair um item que esteja segurando é uma ação livre. Mas deixar cair (ou jogar) um item com a intenção de acertar algo é uma ação padrão. E deixar cair (ou jogar) um item para que outra pessoa agarre é uma ação de movimento."
      ]
    }
  ],
  "reactions": [
    {
      "title": "Ataque de Oportunidade",
      "paragraphs": [
        "Com uma arma corpo-a-corpo, você pode atacar qualquer inimigo dentro de seu alcance natural que fique desprevenido fora de seu turno."
      ]
    },
    {
      "title": "Percepção",
      "paragraphs": [
        "Quando um inimigo se esconde em combate ou você se aproxima de uma armadilha pode utilizar sua reação para fazer um teste de percepção para notar algo escondido."
      ]
    },
    {
      "title": "Preparar",
      "paragraphs": [
        "Caso a condição de sua ação preparada ocorra, você pode utilizar sua reação para executá-la."
      ]
    },
    {
      "title": "Lançar uma magia",
      "paragraphs": [
        "Algumas magias utilizam da sua reação para serem conjuradas ou ativarem seus efeitos como contingência."
      ]
    },
    {
      "title": "Usar um talento",
      "paragraphs": [
        "Alguns talentos, como Poder Latente, exigem uma reação para serem usados."
      ]
    }
  ],
  "wounds": [
    "Se ficar com 0 PV ou menos, você cai inconsciente e começa a sangrar. No início de seu turno, faça um teste de Constituição (CD 15) para estabilizar e parar de sangrar. Se falhar, você perde 1d4 pontos de vida e continua sangrando. Você deve repetir o teste a cada rodada, até estabilizar ou morrer. Um personagem sangrando pode ser estabilizado com um teste de Cura (CD 15), ou com qualquer magia ou efeito de que cure pelo menos 1 PV. Se restaurar seus pontos de vida para 1 ou mais, você recobra a consciência e pode agir normalmente. Quando seus pontos de vida chegam a um número negativo igual à metade de seus PV totais, você morre. Então, um personagem com 30 PV ainda estará vivo com -14 PV, mas morre quando chega em -15 PV."
  ],
  "healing": [
    {
      "title": null,
      "paragraphs": [
        "Depois de sofrer dano, você pode recuperar seus pontos de vida naturalmente, com descanso, ou com magia de cura. Cura natural. Descanso rápido: Com um descanso rápido (pelo menos uma hora) você pode realizar um Teste de Constituição e recuperar o resultado em vida. A partir do nível 5, passa a recuperar o dobro do resultado, no nível 10 e em diante, o triplo, e a partir do nível 15, o quádruplo. Descanso longo: Com um descanso longo (pelo menos oito horas) você recupera todos os seus PVs e PMs, 1 ponto de dano de Habilidade temporária e pode realizar testes para resistir a doenças."
      ]
    },
    {
      "title": "Cura mágica",
      "paragraphs": [
        "Certas habilidades, magias e itens mágicos podem recuperar pontos de vida. O efeito normalmente é instantâneo."
      ]
    },
    {
      "title": "Limite de cura",
      "paragraphs": [
        "Você nunca pode recuperar mais pontos de vida do que perdeu. Mesmo a cura mágica não pode elevar seus PV acima do seu total original."
      ]
    }
  ],
  "nonlethal": [
    "Quase todo o dano causado em condições normais (armas, armadilhas, magias de ataque...) é letal. Dano não-letal funciona como dano letal, mas não conta para determinar quando você vai morrer. Por exemplo, se você sofrer dano não-letal suficiente para levar seus PV a 0 ou menos, vai cair inconsciente. No entanto, mesmo que esse dano não-letal seja suficiente para levar seus PV a um número negativo igual a metade de seus pontos de vida, você não morrerá. Normalmente, armas causam dano letal. Você pode usar uma arma para causar dano não-letal batendo com as partes não afiadas da arma, controlando a força dos golpes ou evitando pontos vitais, mas sofre uma penalidade de -4 na jogada de ataque. Ataques desarmados e certas armas específicas causam dano não-letal. Você pode usar um ataque desarmado ou uma arma que causa dano não-letal para causar dano letal, mas sofre a mesma penalidade de -4 na jogada de ataque."
  ],
  "movement": [
    {
      "title": "Deslocamento",
      "paragraphs": [
        "Esta é a medida de quantos metros você pode percorrer com uma ação de movimento. O deslocamento depende de sua raça, sendo normalmente 9m para raças Médias e 6m para Pequenas, mas há exceções (anões são Médios e têm deslocamento 6m, enquanto Goblins são Pequenos e têm deslocamento 9m)."
      ]
    },
    {
      "title": "Atravessar um espaço ocupado",
      "paragraphs": [
        "Você pode se mover livremente através de um espaço ocupado por um aliado. No entanto, não pode atravessar um quadrado ocupado por um inimigo, a menos que ele esteja indefeso (inconsciente, paralisado), ou seja pelo menos três categorias de tamanho maior ou menor que você. Você pode atravessar um espaço ocupado por um inimigo usando a perícia Acrobacia ou a manobra atropelar."
      ]
    },
    {
      "title": "Carga",
      "paragraphs": [
        "Se você estiver carregando uma carga pesada (veja em Equipamento), seu deslocamento diminui em 3m."
      ]
    },
    {
      "title": "Diagonais. Em um mapa, mover-se na diagonal custa o dobro",
      "paragraphs": [
        "Ou seja, andar 1,5m na diagonal conta como 3m."
      ]
    },
    {
      "title": "Outros tipos de movimento",
      "paragraphs": [
        "Além de apenas andar, você pode usar uma ação de movimento para se mover de outras maneiras. Consulte as perícias Acrobacia e Atletismo."
      ]
    },
    {
      "title": "Terreno difícil",
      "paragraphs": [
        "Lugares acidentados, como um pântano lamacento, neve profunda, florestas cheias de raízes ou ruínas com destroços, são terreno difícil. Mover-se em terreno difícil custa o dobro. Ou seja, você se move metade do deslocamento normal ou gasta 3m de deslocamento por quadrado, em vez de 1,5m. Atravessar um lugar muito apertado também conta como terreno difícil."
      ]
    }
  ],
  "opportunity": [
    "Em combate, às vezes você acaba fazendo algo que o distrai e deixa vulnerável. Quando isso acontece, inimigos que estejam perto podem aproveitar essa brecha e atacar. Área de Ameaça. Você ameaça qualquer lugar que consiga alcançar com um ataque corpo-a-corpo. Normalmente isso significa até 1,5m de você, mas pode ser mais que isso para personagens maiores que Médio, ou usando certas armas (como a alabarda). Um personagem só pode fazer ataques de oportunidade contra alvos que estejam nessa área. Provocando Ataques de Oportunidade. Duas coisas provocam ataques de oportunidade: quando o alvo abaixa sua guarda, ou quando sai de uma área ameaçada.",
    "* Abaixar a guarda: algumas ações complicadas, e que não tenham ligação direta com o oponente ameaçando sua área, distraem você e provocam ataques de oportunidade. Coisas como fazer um ataque à distância (contra outro alvo), lançar uma magia, levantar-se do chão, recarregar uma arma de disparo, prestar primeiros-socorros, abrir uma fechadura ou beber uma poção. Atacar desarmado também provoca ataques de oportunidade, pois você está colocando partes do corpo intencionalmente ao alcance das armas do oponente. Tentar manobras especiais de combate (agarrar, atropelar, derrubar, desarmar, empurrar, separar) também provoca ataques de oportunidade. Ações livres nunca provocam ataques de oportunidade.",
    "* Sair de uma área ameaçada: quando você dá as costas ao oponente, também dá a ele uma ótima chance para atacá-lo. Sair de uma área ameaçada provoca um ataque de oportunidade. Para afastar-se de um oponente sem dar-lhe a chance de atacar, use a manobra recuar ou a perícia Acrobacia.",
    "Fazendo um ataque de oportunidade. Se um oponente que esteja na área ameaçada faz algo que provoca ataques de oportunidade, você pode imediatamente fazer um ataque corpo-a-corpo (nunca à distância) contra ele, mesmo que não seja sua vez de agir. Esse ataque não conta como uma ação, e acontece antes da ação que o provocou: por exemplo, se uma clériga nagah em sua área ameaçada tenta conjurar uma magia, você pode fazer um ataque contra ela antes que a magia seja executada (e com boas chances de impedir a conjuração). Você não precisa fazer um ataque de oportunidade se não quiser. Cada personagem pode fazer apenas um ataque de oportunidade por turno. Recuar. Você pode afastar-se do oponente de maneira cautelosa, sem dar-lhe a chance de atacá-lo pelas costas. Fazer isso exige uma ação padrão (além da ação de movimento necessária para deslocar-se). Note que você só pode precaver-se desta forma contra um único oponente por vez: caso esteja sendo ameaçado por mais de um inimigo, só poderá evitar o ataque de um deles. Conjurar defensivamente. Um conjurador pode executar uma magia sem provocar ataques de oportunidade, com um teste bem-sucedido de Vontade (CD 15 + nível da magia). Talentos. Alguns talentos têm certos efeitos sobre ataques de oportunidade:",
    "* Um personagem desarmado não tem uma área de ameaça, e provoca ataques de oportunidade quando ataca desarmado, a menos que tenha o talento Ataque Desarmado Aprimorado ou uma arma natural.",
    "* O talento Escola a Distância lhe permite atacar inimigos sem provocar ataques de oportunidade.",
    "* Se você tem o talento correspondente a uma manobra de combate aprimorada, então pode executar essa manobra sem provocar ataques de oportunidade.",
    "* O talento Magias em Combate oferece +4 em testes de Vontade para conjurar defensivamente.",
    "* O talento Reflexos em Combate permite fazer mais ataques de oportunidade por rodada, até um limite igual a seu bônus de Destreza + 1."
  ],
  "specialConditions": [
    {
      "title": "Camuflagem",
      "paragraphs": [
        "Você recebe camuflagem quando algum efeito atrapalha a visão dos inimigos. Ataques contra você têm 20% de chance de falha, não importa se a jogada de ataque acerta ou não. Você recebe camuflagem total quando seus inimigos não podem vê-lo, A chance de falha em camuflagem total é 50%. Personagens com visão na penumbra (como elfos) ignoram camuflagem normal por escuridão. Personagens com visão no escuro (anões, goblins e lefou) ignoram a camuflagem total por escuridão."
      ]
    },
    {
      "title": "Cobertura",
      "paragraphs": [
        "Você recebe cobertura quando está atrás de algo que bloqueia o ataque dos inimigos, como uma árvore, uma muralha de castelo, a lateral de uma carroça ou uma criatura maior. A cobertura fornece +4 na classe de armadura. Trace uma linha reta entre os cantos. Se a linha é interrompida por um obstáculo ou criatura, o alvo tem cobertura. O alvo não recebe cobertura se a linha seguir ao longo de um obstáculo, ou apenas tocar a ponta de um obstáculo. Você recebe cobertura total quando seus inimigos não puderem alcançá-lo, por exemplo, atrás de uma parede. A cobertura total impede que você seja atacado."
      ]
    },
    {
      "title": "Flanquear",
      "paragraphs": [
        "Quando você luta corpo-a-corpo com um oponente, e um aliado faz o mesmo no lado oposto ou seja, o inimigo está exatamente entre vocês, então vocês estão flanqueando o alvo. Ambos recebem +2 em suas jogadas de ataque contra o alvo flanqueado. Não se pode flanquear à distância."
      ]
    },
    {
      "title": "Lento",
      "paragraphs": [
        "O personagem só pode realizar uma ação padrão ou de movimento, mas não ambas por rodada. Além disso sofre -2 nas jogadas de ataque, CA e testes de reflexo. Move-se metade do deslocamento."
      ]
    },
    {
      "title": "Ações Adicionais",
      "paragraphs": [
        "Independente de sua fonte, ações adicionais nunca se acumulam. Por exemplo, um Elfo montado não receberia duas ações de movimento adicionais (Uma por Vigilancia e Uma por Combate Montado) ele receberia apenas uma."
      ]
    }
  ],
  "attackerTable": {
    "headers": [
      "O atacante está...",
      "Modificador na jogada de ataque"
    ],
    "rows": [
      [
        "Assustado",
        "-2"
      ],
      [
        "Caído",
        "-4"
      ],
      [
        "Cego",
        "50% de chance de falha"
      ],
      [
        "Em posição mais alta",
        "+1"
      ],
      [
        "Flanqueando o alvo",
        "+2 (apenas para ataques corpo-a-corpo)"
      ],
      [
        "Invisível",
        "+4 (apenas para ataques corpo-a-corpo)"
      ],
      [
        "Ofuscado",
        "-1"
      ]
    ]
  },
  "targetTable": {
    "headers": [
      "O alvo está...",
      "Modificador na CA"
    ],
    "rows": [
      [
        "Caído",
        "-4 contra ataques corpo-a-corpo, +4 contra ataques à distância"
      ],
      [
        "Cego",
        "-8"
      ],
      [
        "Desprevenido",
        "-4"
      ],
      [
        "Sob Camuflagem",
        "20% de chance de falha"
      ],
      [
        "Sob Camuflagem Total",
        "50% de chance de falha"
      ],
      [
        "Sob Cobertura",
        "+4"
      ],
      [
        "Sob Cobertura Total",
        "O alvo não pode ser atacado"
      ]
    ]
  },
  "sizes": {
    "intro": [
      "Assim como raças pequenas sofrem ajustes em suas jogadas de ataque, CA e Furtividade, o mesmo vale para seres de outros tamanhos é mais fácil acertar ou perceber um gigante do que um inseto! Criaturas de tamanho Grande ou maior também usam regras um pouco diferentes. Primeiro, elas ocupam mais lugar no tabuleiro (uma criatura Grande ocupa um espaço de 3m). Segundo, elas têm alcance natural superior a 1,5m, sendo capazes de fazer ataques corpo-a-corpo contra alvos mais distantes. Se você usa ataques de oportunidade, criaturas com mais alcance também tem uma área de ameaça maior; uma criatura enorme pode atacar corpo-a-corpo criaturas a até 4,5m de distância."
    ],
    "headers": [
      "Categoria",
      "Exemplo",
      "Espaço",
      "Alcance",
      "CA e Ataque",
      "Furtividade"
    ],
    "rows": [
      [
        "Ínfimo",
        "Mosca",
        "15 cm",
        "1,5 m",
        "+8",
        "+16"
      ],
      [
        "Diminuto",
        "Sapo",
        "30 cm",
        "1,5 m",
        "+4",
        "+12"
      ],
      [
        "Mínimo",
        "Gato, sprite",
        "75 cm",
        "1,5 m",
        "+2",
        "+8"
      ],
      [
        "Pequeno",
        "Halfling",
        "1,5 m",
        "1,5 m",
        "+1",
        "+4"
      ],
      [
        "Médio",
        "Humano",
        "1,5 m",
        "1,5 m",
        "+0",
        "+0"
      ],
      [
        "Grande",
        "Bugbear",
        "3 m",
        "3 m",
        "-1",
        "-4"
      ],
      [
        "Enorme",
        "Ente",
        "4,5 m",
        "4,5 m",
        "-2",
        "-8"
      ],
      [
        "Descomunal",
        "Dragão venerável",
        "6 m",
        "6 m",
        "-4",
        "-12"
      ],
      [
        "Colossal",
        "Senhor das Profundezas",
        "9 m",
        "9 m",
        "-8",
        "-16"
      ]
    ],
    "footer": [
      "Aumentos de categoria não são cumulativos, independente da fonte. Ex: Um personagem com Grandão(+1), Arma de adamante(+1) e Aumentar pessoa(+1) aumentará a categoria de dano em 1 invés de 3."
    ]
  },
  "mounted": [
    "Sua montaria não rola Iniciativa. Ela age junto com você (ou seja, em sua Iniciativa). Você usa o valor de deslocamento da montaria e não o seu.",
    "Se você não é treinado em Cavalgar, precisa gastar uma ação de movimento e fazer um teste de Cavalgar (CD 10) por rodada para guiar a montaria. Mas um personagem treinado em Cavalgar não precisa gastar uma ação para guiar a montaria; então ele poderia percorrer o deslocamento da montaria e então atacar um inimigo, por exemplo.",
    "Montar ou desmontar é uma ação de movimento.",
    "Se uma única habilidade atingir tanto você quanto sua montaria vocês realizam apenas um teste para ambos utilizando o maior valor entre os dois. Além disso, você e sua montaria compartilham ações, enquanto estiver montado você e sua montaria tem direito a uma ação padrão e uma de movimento por rodada. Por fim, enquanto você está montado, você e sua montaria passam a contar como uma única criatura uma categoria de tamanho acima da montaria para efeitos de tamanhos de passagens e corredores.",
    "O balanço da montaria em movimento torna mais difícil atacar a distância (-2 na jogada de ataque) e conjurar magias: se falhar em um teste de Vontade (CD 15 + nível da magia), a magia não funciona, mas os PM são gastos mesmo assim."
  ]
} as const;

~~~~


---

# Condições e Pontos de Ação

**Fonte:** `src/data/condicoes.ts`

~~~~typescript
export interface ConditionEntry {
  id: string;
  name: string;
  description: string;
}
export const conditions: ConditionEntry[] = [
  {
    "id": "abalado",
    "name": "Abalado",
    "description": "com medo de algo. O personagem sofre –2 em jogadas de ataque e testes de habilidade, perícia e resistência. Se o personagem ficar abalado novamente, em vez disso fica apavorado."
  },
  {
    "id": "agarrado",
    "name": "Agarrado",
    "description": "preso em combate corpo-a-corpo. O personagem sofre –2 nas jogadas de ataque, só pode atacar com armas leves, fica desprevenido e não pode se mover. Ela pode se soltar com uma ação padrão, vencendo um teste de manobra oposto."
  },
  {
    "id": "apavorado",
    "name": "Apavorado",
    "description": "com muito medo de algo. O personagem tenta fugir da fonte de seu medo da melhor maneira possível. Se não conseguir, poderá lutar, mas com o dobro das penalidades de estar abalado."
  },
  {
    "id": "atordoado",
    "name": "Atordoado",
    "description": "incapaz de agir e desprevenido."
  },
  {
    "id": "caido",
    "name": "Caído",
    "description": "deitado no chão. O personagem sofre –4 nas jogadas de ataque corpo-a-corpo e move-se com metade do seu deslocamento. Seus oponentes recebem +4 nas jogadas de ataque corpo-a-corpo, mas sofrem –4 nas jogadas de ataque à distância."
  },
  {
    "id": "cego",
    "name": "Cego",
    "description": "incapaz de enxergar. O personagem tem 50% de chance de errar qualquer ataque, fica desprevenido e sofre –4 na CA (para um total de –8), move-se com metade do seu deslocamento e sofre –4 em testes de perícia baseados em Força ou Destreza."
  },
  {
    "id": "confuso",
    "name": "Confuso",
    "description": "com o discernimento afetado por um efeito. Veja a magia confusão para mais detalhes."
  },
  {
    "id": "dano-de-habilidade",
    "name": "Dano de Habilidade",
    "description": "o personagem perdeu temporariamente 1 ou mais pontos em um ou mais valores de habilidades. Pontos de habilidades perdidos voltam à taxa de 1 por dia, ou de acordo com o efeito que diminui o valor."
  },
  {
    "id": "desprevenido",
    "name": "Desprevenido",
    "description": "com a guarda baixa. O personagem sofre –4 na classe de armadura."
  },
  {
    "id": "enjoado",
    "name": "Enjoado",
    "description": "passando mal por qualquer motivo. O personagem só pode realizar uma ação padrão, bônus ou movimento (não ambas) por rodada."
  },
  {
    "id": "enredado",
    "name": "Enredado",
    "description": "com o movimento prejudicado. O personagem sofre –2 nas jogadas de ataque, –4 na destreza, move-se com metade do seu deslocamento e não pode correr ou fazer investidas."
  },
  {
    "id": "exausto",
    "name": "Exausto",
    "description": "muito cansado. O personagem sofre –6 na Força e Destreza, move-se à metade do seu deslocamento e não pode correr ou fazer investidas. Se o personagem ficar fatigado ou exausto novamente, cai inconsciente."
  },
  {
    "id": "fascinado",
    "name": "Fascinado",
    "description": "com a atenção presa em alguma coisa. O personagem fica parado, sem fazer nada exceto observar aquilo que lhe fascinou, e sofre –4 nos testes de Percepção. Qualquer ameaça óbvia anula este efeito. Um personagem pode gastar uma ação padrão para sacudir um personagem fascinado e anular este efeito."
  },
  {
    "id": "fatigado",
    "name": "Fatigado",
    "description": "cansado. O personagem sofre –2 na Força e Destreza e não pode correr ou fazer investidas. Se o personagem ficar fatigado novamente, fica exausto."
  },
  {
    "id": "inconsciente",
    "name": "Inconsciente",
    "description": "indefeso e incapaz de agir."
  },
  {
    "id": "incorporeo",
    "name": "Incorpóreo",
    "description": "sem corpo físico. O personagem é imune a ataques, exceto mágicos, e mesmo esses têm 50% de chance de falha. Pode atravessar objetos sólidos (exceto efeitos de essência); assim, seus ataques ignoram bônus na CA por armaduras, escudos e armadura natural."
  },
  {
    "id": "indefeso",
    "name": "Indefeso",
    "description": "amarrado, inconsciente ou paralisado. Um personagem indefeso tem CA 5 + seu modificador de tamanho, e pode sofrer golpes de misericórdia."
  },
  {
    "id": "lento",
    "name": "Lento",
    "description": "o personagem só pode realizar uma ação padrão ou de movimento (não ambas) por rodada. Além disso, sofre –1 nas jogadas de ataque, na CA e nos testes de Reflexo, e move-se à metade do seu deslocamento."
  },
  {
    "id": "ofuscado",
    "name": "Ofuscado",
    "description": "com a visão prejudicada. O personagem sofre –1 nas jogadas de ataque."
  },
  {
    "id": "paralisado",
    "name": "Paralisado",
    "description": "indefeso e incapaz de se mover. O personagem fica com valores efetivos de Força e Destreza de 0, mas pode realizar ações puramente mentais. A CA de um personagem incapaz de se mover é 5 + seu modificador de tamanho (a mesma de um objeto inanimado)."
  },
  {
    "id": "pasmo",
    "name": "Pasmo",
    "description": "incapaz de agir (mas pode se defender normalmente)."
  },
  {
    "id": "sangrando",
    "name": "Sangrando",
    "description": "com um ferimento aberto. No início de cada turno, o personagem deve fazer um teste de Constituição (CD 15). Se for bem-sucedido, estabiliza. Se falhar, sofre 1d4 pontos de dano e continua sangrando."
  },
  {
    "id": "surdo",
    "name": "Surdo",
    "description": "incapaz de ouvir. O personagem sofre –4 nos testes de Iniciativa e Percepção. Além disso, precisa fazer um teste de Vontade para lançar qualquer magia (CD 10 + o nível da magia). Uma magia afetada pelo talento Magia Silenciosa não sofre essa limitação."
  },
  {
    "id": "surpreendido",
    "name": "Surpreendido",
    "description": "que não está ciente de seus inimigos. O personagem não pode agir e fica desprevenido durante a primeira rodada do combate."
  }
];

export const actionPoints = {
  gaining: [
  "Você começa cada sessão de jogo com um ponto de ação.",
  "Durante a aventura, pode ganhar mais através de heroísmo, interpretação e intervenção do mestre (veja abaixo). Pontos de ação não gastos não permanecem para a próxima sessão; você recomeça com um ponto, mais uma vez.",
  "Heroísmo. Você ganha pontos de ação por atos de heroísmo.O ato deve ser realmente valoroso e altruísta. Espancar um bando de goblins que não representa ameaça real não é heroísmo, mas escolher ser atingido no lugar de um amigo é. Resgatar pessoas de uma estalagem em chamas é heroísmo. Render-se para um vilão, a fim de salvar as vidas dos reféns, é heroísmo. Permitir que um vilão fuja enquanto você acalma uma fera enfurecida antes que ela ataque um inocente é heroísmo. O mestre decide se um ato específico é heroico o bastante.",
  "Interpretação. Quando você diz algo inspirado, que faz todos na mesa rirem ou aplaudirem, pode ganhar um ponto de ação. Isto não vale apenas para diálogos: se fizer uma descrição fantástica da ação de seu herói ou qualquer coisa que ajude a entreter o grupo de alguma outra forma você também pode merecer um ponto de ação.",
  "Intervenção do mestre. Você ganha pontos de ação quando o mestre “torce” as regras do jogo em favor dos vilões. O mestre essencialmente tem o direito de “roubar” em favor dos vilões, mas os jogadores ganham pontos de ação quando isso acontece. De modo geral, sempre que viola as regras para causar algum problema aos heróis, os jogadores ganham pontos de ação. Alguns exemplos de intervenção do mestre incluem:",
  "Permitir que um vilão escape automaticamente. As circunstâncias conspiram para permitir que o vilão fuja livre, destroços barram a perseguição, o vilão desaparece em uma explosão ou cai para uma “morte” misteriosa, e assim por diante.",
  "• Fazer com que um personagem jogador falhe automáticamente em um teste de resistência contra um perigo específico (como a armadilha de um vilão) para ajudar a mover a trama adiante.",
  "Fazer com que os heróis sejam automaticamente surpreendidos por um oponente.",
  "Dar a um personagem não jogador o benefício de um ponto de ação. Isto é importante, já que apenas os heróis possuem e ganham pontos de ação."
],
  using: [
  "Gastar um ponto de ação é uma reação, que não consome tempo algum (a menos que outra regra adiante diga o contrário). Você pode gastar quantos pontos de ação tiver, mas apenas um para cada benefício por rodada. Com o gasto de um ponto de ação você pode:",
  "Adicionar um dado a uma jogada ou teste. Você deve usar o ponto de ação depois de rolar o dado.",
  "Adicionar um dado à sua classe de armadura até o início de seu próximo turno.",
  "Fazer um segundo teste de resistência contra algum efeito nocivo que o esteja afetando, como uma magia dominar pessoa.",
  "Realizar uma ação padrão ou de movimento adicional na rodada. Por exemplo, pode realizar uma ação completa e uma ação padrão, ou uma ação padrão e duas ações de movimento, ou qualquer outra combinação.",
  "Recuperar pontos de vida ou PMs. A quantidade de PV e PMs que você recupera depende de seu nível.",
  "Fazer um segundo teste de perícia ou habilidade para realizar um feito."
],
  recoveryTable: {
  "headers": [
    "Nível",
    "Dado Extra",
    "PVs Recuperados",
    "PMs Recuperados"
  ],
  "rows": [
    [
      "1º - 4º",
      "1d4",
      "3d8 + 2",
      "1d4+1"
    ],
    [
      "5º - 8º",
      "2d4",
      "4d8 + 3",
      "2d4+2"
    ],
    [
      "9º - 12º",
      "2d6",
      "5d10 + 4",
      "2d6+3"
    ],
    [
      "13º - 16º",
      "3d6",
      "6d10 + 5",
      "3d6+4"
    ],
    [
      "17º - 20º",
      "4d8",
      "7d12 + 6",
      "4d8+5"
    ]
  ]
}
} as const;

~~~~
