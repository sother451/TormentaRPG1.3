export type MagicItemTier = 'Menor' | 'Médio' | 'Maior';
export type MagicApplicability = 'Arma' | 'Armadura' | 'Escudo' | 'Armadura e Escudo' | 'Item de Poder';

export interface ProgressiveEnchantLevel {
  slots: 1 | 2 | 3 | 4 | 5;
  effect: string;
}

export interface ProgressiveEnchant {
  id: string;
  name: string;
  appliesTo: MagicApplicability;
  intro?: string;
  levels: ProgressiveEnchantLevel[];
}

export interface FixedMagicPower {
  id: string;
  name: string;
  cost: 1 | 2 | 3 | 4;
  appliesTo: MagicApplicability;
  effect: string;
  mediumEffect?: string;
  majorEffect?: string;
}

export const magicItemRules = {
  intro: 'Itens mágicos são divididos em: armas, armaduras, escudos, poções, pergaminhos, varinhas, cajados e acessórios.',
  identification: 'Alguns itens mágicos parecem comuns, sem nada de especial. Outros são visivelmente encantados: brilham, zunem ou são cobertos de runas ou gemas faiscantes. Alguns itens trazem inscrições que indicam seus poderes, essas inscrições podem ser mágicas, mudando para um idioma que o usuário saiba ler, ou então exigir o conhecimento de línguas arcaicas. Outros itens podem não trazer nenhuma pista sobre seu funcionamento. Nesses casos, os poderes do item só ficam claros quando um personagem o identifica. Pode-se desvendar os poderes de um item mágico com magias próprias, como identificação e analisar encantamento ou através da velha tentativa e erro. Você pode simplesmente colocar no dedo aquele anel reluzente, e saltar de uma janela.',
  use: 'Armas, armaduras e escudos funcionam automaticamente: basta empunhar ou vestir o item para que seus poderes funcionem. Poções, pergaminhos, varinhas e cajados devem ser ativados, de acordo com sua descrição. Ativar um item mágico é uma ação padrão, a menos que sua descrição diga o contrário. Acessórios existem em ambos os tipos, alguns ativam-se automaticamente, bastando ser colocados, enquanto outros devem ser ativados de acordo com sua descrição. Via de regra, um personagem deve identificar o acessório para poder ativá-Io. Para itens mágicos que geram o efeito de uma magia, a CD do teste de resistência é igual a 15 + NdM + MdN do Personagem. Cajados são exceção, para uma magia lançada por um cajado, calcule a CD como se o usuário do cajado estivesse lançando a magia pessoalmente. Lançar uma magia através de um item mágico é mais simples, sem as limitações de lançar uma magia diretamente (veja Condições para lançar uma magia).',
  limits: 'Um personagem pode usar tantas armas e escudos mágicos quantas puder empunhar, e mais quatro itens mágicos entre armaduras e acessórios. Por exemplo, um personagem pode usar uma armadura mágica e três acessórios, como um anel e um par de botas. Se usar um quinto item mágico, ele não terá efeito algum, a menos que o usuário remova um dos outros. Poções, pergaminhos, varinhas e cajados não contam nesse limite. Bônus de itens mágicos acumulam com bônus de outros tipos (magias, talentos...) mas não entre si.',
  destruction: 'Itens mágicos têm o dobro dos pontos de vida de um item normal do mesmo tipo, e um bônus na RD conforme sua aura: RD +5 para aura tênue, RD +10 para aura moderada e RD +20 para aura poderosa. Itens mágicos também têm um bônus em testes de resistência dependendo da sua aura: +2 para tênue, +5 para moderada e +10 para poderosa.',
  command: 'Para ativar um item mágico é necessário dizer a palavra comando, apenas o portador pode ativar o item.',
  masterpiece: 'Todo item mágico é obra-prima, mas o bônus de obra-prima não se acumula com o bônus de magia.',
  shields: 'Escudos podem receber encantamentos tanto para Armas quanto para Escudos.',
  powerItems: 'Itens de poder (Varinhas, cajados, orbes, cetros e símbolos sagrados) podem receber encantamentos, seus bônus se aplicam em CD, jogadas de ataque e dano para magias.'
} as const;

export const magicItemTiers = [
  { minBonus: 1, maxBonus: 3, tier: 'Menor' as const, cd: 20 },
  { minBonus: 4, maxBonus: 6, tier: 'Médio' as const, cd: 25 },
  { minBonus: 7, maxBonus: 10, tier: 'Maior' as const, cd: 30 }
];

export const enchantmentSlotRule = {
  text: 'Para cada bônus mágico de +1 de um equipamento ele recebe também um Slot. Um item pode ter múltiplos encantamentos, mas nenhum item pode ter mais que 5 slots.',
  maxSlots: 5,
  extraBonus: 'A partir de +6, os bônus acima dos 5 slots são usados como bônus direto no item: uma arma +6 garante +1 em jogadas de ataque e dano; uma armadura +6 concede +1 na CA e reduz sua penalidade em 1; itens de poder aumentam a CD de suas magias em +1 e seu dano também.'
} as const;

export const progressiveEnchantments: ProgressiveEnchant[] = [
  {
    id:'afiado', name:'Afiado', appliesTo:'Arma',
    levels:[
      {slots:1,effect:'Acertos críticos com está arma ignoram 10 pontos de RD.'},
      {slots:2,effect:'A margem de ameaça da arma aumenta em +1.'},
      {slots:3,effect:'Um acerto com esta arma causa, além do dano normal, 1 ponto de dano da Constituição. Criaturas imunes a acertos críticos também são imunes ao dano da Constituição.'},
      {slots:4,effect:'O bônus de 2 slots aumenta para +2.'},
      {slots:5,effect:'Em um 20 natural você arranca a cabeça da criatura atingida; uma criatura imune a críticas é imune a este efeito mas recebe 5d6 pontos de dano de essência no lugar, e este dano se beneficia do multiplicador de crítico.'}
    ]
  },
  {
    id:'anti-criatura', name:'Anti-Criatura', appliesTo:'Arma',
    intro:'Escolha entre animal, construto, espírito, humanoide, monstro ou morto-vivo. Os efeitos da arma se aplicam contra o tipo de criatura escolhido.',
    levels:[
      {slots:1,effect:'Quando uma criatura do tipo escolhido está a 30m de você, um efeito similar à magia Alarme dispara, porém somente você é capaz de ouvi-lo.'},
      {slots:2,effect:'Contra o tipo escolhido a arma recebe +2 em jogadas de ataque e causa 2d6 de dano a mais.'},
      {slots:3,effect:'Escolha um segundo tipo de criatura para o efeito do encantamento.'},
      {slots:4,effect:'O bônus de 2 slots aumenta para +4 e causa 4d6.'},
      {slots:5,effect:'Você tem vantagem em todos os testes de resistências contra criaturas do tipo escolhido.'}
    ]
  },
  {
    id:'armazenar-magia', name:'Armazenar Magia', appliesTo:'Arma',
    levels:[
      {slots:1,effect:'Um conjurador pode guardar uma magia de até 1º nível na arma. Sempre que a arma atinge uma criatura, você pode escolher lançar a magia guardada contra a criatura ou em si mesmo, como uma ação livre. A CD e o Dano utilizam os modificadores e habilidades relevantes do usuário. Magias que exijam concentração são mantidas pelo usuário da arma.'},
      {slots:2,effect:'Você se torna capaz de ver auras mágicas a 3m de você como se estivesse utilizando Detectar Magia.'},
      {slots:3,effect:'Ao ativar o efeito de 1 slot existe uma chance de 50% da magia armazenada não ser consumida, podendo ser usada novamente.'},
      {slots:4,effect:'O ciclo de 1 slot aumenta para 3º nível.'},
      {slots:5,effect:'Você pode armazenar até 3 magias diferentes e escolher qual quer ativar ao acertar uma criatura; cada magia tem um uso independente.'}
    ]
  },
  {
    id:'disparo', name:'Disparo', appliesTo:'Arma',
    levels:[
      {slots:1,effect:'Uma arma corpo-a-corpo pode ser arremessada com distância 9m. Armas de arremesso e disparo têm alcance aumentado em 9m.'},
      {slots:2,effect:'Esta arma voa de volta para aquele que a arremessou, no início de seu próximo turno. Pegar a arma é uma ação livre e não requer nenhum teste.'},
      {slots:3,effect:'Esta arma atinge criaturas incorpóreas normalmente, sem 50% de chance de falha. Criaturas incorpóreas podem empunhar armas de Disparo como se fossem corpóreas.'},
      {slots:4,effect:'O efeito de 2º slot se torna imediato após acertar ou errar o alvo.'},
      {slots:5,effect:'A arma pode ricochetear em seu alvo e atingir um segundo alvo a até 9m dele, usando a mesma jogada de ataque original quando o primeiro ataque acerta. Além disso, você não pode ser desarmado ou ser separado de sua arma; ela sempre retorna para sua mão com um comando.'}
    ]
  },
  {
    id:'defensora', name:'Defensora', appliesTo:'Arma',
    levels:[
      {slots:1,effect:'Esta arma concede CA +2 ao seu usuário, não cumulativa com escudos.'},
      {slots:2,effect:'Ataques com esta arma restauram 1 PV e 1 PM de seu usuário em ataques bem-sucedidos.'},
      {slots:3,effect:'O bônus de 1 slot aumenta para +4.'},
      {slots:4,effect:'O bônus de 2 slots aumenta para 3.'},
      {slots:5,effect:'Você recebe o efeito da magia Deslocamento permanente enquanto segura esta arma: todos os ataques contra você têm 50% de chance de falha.'}
    ]
  },
  {
    id:'elemental', name:'Elemental', appliesTo:'Arma',
    levels:[
      {slots:1,effect:'Você recebe o efeito da magia Suportar Elementos permanente enquanto segura esta arma.'},
      {slots:2,effect:'Escolha entre eletricidade, fogo, frio ou ácido; a arma causa 1d6 de dano adicional do tipo escolhido.'},
      {slots:3,effect:'O bônus de 2 slots aumenta para 2d6.'},
      {slots:4,effect:'Os dados de dano adicionais deste encantamento aumentam para d12 em caso de um acerto crítico.'},
      {slots:5,effect:'O dano base da arma passa a ser do mesmo elemento escolhido no slot 2.'}
    ]
  },
  {
    id:'divino', name:'Divino', appliesTo:'Arma',
    levels:[
      {slots:1,effect:'Todo o dano causado por esta arma é não letal. O usuário pode desativar e ativar esse poder com uma ação livre.'},
      {slots:2,effect:'Quando esta arma atinge uma criatura, cria um lampejo de Energia que causa 3d6 de dano à criatura atingida. O tipo de dano é baseado no alinhamento de seu portador: Sagrado para criaturas bondosas, Energia Negativa para criaturas malignas. Criaturas neutras escolhem este efeito no início de cada dia.'},
      {slots:3,effect:'O dano desta arma restaura pontos de vida ao invés de causar dano. O usuário pode desativar e ativar esse poder com uma ação livre.'},
      {slots:4,effect:'O bônus de 2 slots aumenta para 5d6.'},
      {slots:5,effect:'Esta arma ignora 10 pontos de RD e causa 1 nível negativo em criaturas com alinhamento oposto ao de seu portador. Com uma ação livre, o usuário pode ativar este poder para, em vez disso, restaurar 1 nível perdido e 1 ponto de dano de habilidade de uma criatura.'}
    ]
  },
  {
    id:'dancarina', name:'Dançarina', appliesTo:'Arma',
    levels:[
      {slots:1,effect:'O portador desta arma não é afetado por terreno difícil.'},
      {slots:2,effect:'O usuário desta arma recebe um bônus de +4 em testes de iniciativa.'},
      {slots:3,effect:'Como uma ação livre, o usuário pode soltar a arma no ar. Ela flutua e ataca os inimigos de seu dono, com os mesmos bônus que teria se empunhada por ele, por três rodadas, e então cai no chão. Um personagem pode ter até Int. Mod (mínimo 1) ou MdN, o que for menor.'},
      {slots:4,effect:'Sacar esta arma se torna uma ação livre, o bônus de 2 slots aumenta para +8 e, uma vez por dia, o usuário pode re-rolar um teste de iniciativa.'},
      {slots:5,effect:'O usuário desta arma calcula sua BBA como +4 para cálculo de número de ataques por rodada.'}
    ]
  },
  {
    id:'primal', name:'Primal', appliesTo:'Arma',
    intro:'Primal é um encantamento único. Pode ser aplicado a punhos, garras, pés e partes do corpo mesmo que não possuam slots. Partes do corpo encantadas recebem um número de slots igual ao valor de encantamento Primal aplicado. Encantamentos Primais custam 500 moedas de ouro a mais quando aplicados em armas e só podem ser aplicados a armas corpo-a-corpo.',
    levels:[
      {slots:1,effect:'O usuário desta arma está permanentemente sob o efeito da magia Intuir Direções.'},
      {slots:2,effect:'Uma arma primitiva causa +4 de dano e concede +10 para quebrar armas e objetos refinados com a manobra Separar.'},
      {slots:3,effect:'Cada ataque bem-sucedido com esta arma causa dano igual ao Modificador de Força do usuário em todas as criaturas a até 3m, exceto o próprio usuário. O alvo do ataque recebe este dano em adição ao dano normal da arma.'},
      {slots:4,effect:'O bônus de 2 slots aumenta para +6 de dano e +15 no teste indicado.'},
      {slots:5,effect:'Quando o usuário reduz uma criatura a 0 ou menos PV com um ataque, pode se mover na direção de um inimigo usando seu deslocamento base e realizar imediatamente um ataque contra o novo alvo. Este efeito se ativa uma única vez por rodada.'}
    ]
  },
  {
    id:'arcano', name:'Arcano', appliesTo:'Item de Poder',
    levels:[
      {slots:1,effect:'O portador deste item pode conjurar Bala de Força com uma ação de movimento 3 vezes por dia como se fosse um mago de mesmo nível ao seu nível de personagem.'},
      {slots:2,effect:'Escolha uma escola de Magia; magias da escola selecionada recebem +2 em jogadas de ataque e causam 2 pontos de dano adicional.'},
      {slots:3,effect:'Magias que exigem jogadas de ataque com este item têm sua margem de ameaça e multiplicador aumentados em 1.'},
      {slots:4,effect:'O bônus de 2 slots aumenta para +4.'},
      {slots:5,effect:'Magias que exigem jogadas de ataque com este item ignoram até 20 de RE de criaturas atingidas.'}
    ]
  },
  {
    id:'focalizador', name:'Focalizador', appliesTo:'Item de Poder',
    levels:[
      {slots:1,effect:'O portador deste item pode conjurar Detectar Magia com uma ação de movimento 3 vezes por dia como se fosse um mago de mesmo nível ao seu nível de personagem.'},
      {slots:2,effect:'Escolha uma escola de Magia; magias da escola custam 1 PM a menos para serem conjuradas, mínimo 1.'},
      {slots:3,effect:'O portador deste item tem vantagem em testes de concentração para magias.'},
      {slots:4,effect:'O bônus de 2 slots aumenta para 2.'},
      {slots:5,effect:'Magias pessoais conjuradas com este item duram 24 horas.'}
    ]
  }
];

export const fixedMagicPowers: FixedMagicPower[] = [
  {id:'apanhador-de-flechas',name:'Apanhador de Flechas',cost:1,appliesTo:'Escudo',effect:'Ataques à distância são atraídos para este escudo, que fornece +2 na classe de armadura contra esses ataques. Além disso, qualquer ataque à distância realizado contra um alvo a até 1,5m do usuário do escudo é desviado para ele.',mediumEffect:'O alcance aumenta para 3m.',majorEffect:'O alcance aumenta para 4,5m.'},
  {id:'camuflagem',name:'Camuflagem',cost:1,appliesTo:'Armadura',effect:'Com um comando, a armadura adquire a aparência de uma roupa comum, mas mantendo suas propriedades.'},
  {id:'cegante',name:'Cegante',cost:1,appliesTo:'Escudo',effect:'Com um comando, este escudo emite lampejos de luz brilhante. Todas as criaturas a até 6m devem ser bem-sucedidas num teste de Reflexos CD 10+MdN+Mod. Car. ou ficarão cegas por 1d4 rodadas. Este poder pode ser usado duas vezes por dia.'},
  {id:'escorregadia',name:'Escorregadia',cost:1,appliesTo:'Armadura',effect:'Uma armadura com este poder parece estar sempre coberta de óleo levemente gorduroso. Ela fornece +5 em testes de Acrobacia para arte da fuga.',mediumEffect:'Permite utilizar Acrobacia no lugar de JdA para fugir da manobra agarrar.'},
  {id:'fortificacao',name:'Fortificação',cost:1,appliesTo:'Armadura e Escudo',effect:'Quando o usuário é atingido por um acerto crítico, há uma chance de 25% de que o acerto crítico seja anulado e tratado como um ataque normal.',mediumEffect:'A chance aumenta para 50%.',majorEffect:'A chance aumenta para 75%.'},
  {id:'reluzente',name:'Reluzente',cost:1,appliesTo:'Armadura e Escudo',effect:'Uma vez por dia, como uma ação padrão, pode ser usada para gerar uma luz clara e ofuscante, que cega todos os inimigos em um raio de 6m por 1d4 rodada.'},
  {id:'sombria',name:'Sombria',cost:1,appliesTo:'Armadura',effect:'Uma armadura com este poder é escura, fosca e bem lubrificada, de modo que não faz barulho. Ela fornece +5 em testes de Furtividade.',mediumEffect:'O bônus aumenta para +10 em Furtividade.',majorEffect:'O bônus aumenta para +15 em Furtividade.'},
  {id:'magia-poderosa',name:'Magia poderosa',cost:1,appliesTo:'Item de Poder',effect:'A CD para resistir suas magias aumenta em +1.',mediumEffect:'O bônus aumenta para +2.',majorEffect:'O bônus aumenta para +3.'},

  {id:'abencoado',name:'Abençoado',cost:2,appliesTo:'Armadura e Escudo',effect:'Seu usuário recebe resistência a energia negativa 10 e se torna imune a dreno de energia, não podendo sofrer níveis negativos.'},
  {id:'animado',name:'Animado',cost:2,appliesTo:'Escudo',effect:'Com um comando, este escudo flutua próximo de seu portador, fornecendo proteção como se estivesse sendo empunhado, mas liberando ambas as mãos.'},
  {id:'assustador',name:'Assustador',cost:2,appliesTo:'Armadura e Escudo',effect:'Uma vez por dia, seu usuário pode emitir uma aura de medo. Todos os inimigos a até 9m devem fazer um teste de Vontade (CD 10+MdN+Mod. Car). Em caso de falha ficam abalados por 1 minuto.'},
  {id:'celebre',name:'Célebre',cost:2,appliesTo:'Armadura e Escudo',effect:'Um item célebre concede +2 em Carisma. Além disso, o usuário ganha +1 em jogadas de ataque e CA sempre que estiver lutando contra um inimigo que o conheça. Caso um inimigo venha caçar o usuário por sua fama ou feitos, estes bônus dobram para +2.'},
  {id:'deflexao-de-flechas',name:'Deflexão de Flechas',cost:2,appliesTo:'Armadura e Escudo',effect:'O usuário recebe o talento Desviar Objetos. Caso já o possua, recebe +5 em testes de Reflexos para evitar ataques.'},
  {id:'distrativa',name:'Distrativa',cost:2,appliesTo:'Armadura',effect:'O primeiro inimigo que atacar o usuário em cada combate deve ser bem-sucedido em um teste de Vontade (CD 10+MdN+Mod. Car.) ou ficará pasmo por uma rodada. Além disso, uma vez por dia, o usuário pode fazer uma pose com uma ação padrão para fascinar criaturas inteligentes num raio de 9m por um minuto, caso falhem no mesmo teste de Vontade.'},
  {id:'leveza',name:'Leveza',cost:2,appliesTo:'Armadura',effect:'Seu bônus máximo de Destreza aumenta em 5.',majorEffect:'Reduz a categoria de armadura em 1 e aumenta em +5 o bônus máximo de Destreza.'},
  {id:'resistencia-energia',name:'Resistência à energia',cost:2,appliesTo:'Armadura e Escudo',effect:'Fornece resistência 10 a um tipo de energia.',mediumEffect:'A resistência aumenta para 20.',majorEffect:'A resistência aumenta para 30.'},
  {id:'resistencia-magia',name:'Resistência à magia',cost:2,appliesTo:'Armadura e Escudo',effect:'Fornece +2 nos testes de resistência do usuário contra magia.',mediumEffect:'O bônus aumenta para +4.',majorEffect:'O bônus aumenta para +6.'},
  {id:'perseveranca',name:'Perseverança',cost:2,appliesTo:'Armadura',effect:'Sempre que o usuário falhar em qualquer teste, pode ativar o poder. Se tentar o mesmo teste na rodada seguinte, recebe +1. Em caso de nova falha pode tentar novamente na rodada seguinte, recebendo +2, então +3, +4 e +5, o máximo. Se for bem-sucedido ou fizer qualquer outra ação voluntária, o efeito é quebrado e o bônus desaparece.'},
  {id:'tufao',name:'Tufão',cost:2,appliesTo:'Armadura',effect:'Concede +2 em CA contra todos os ataques à distância e +4 em testes de Atletismo para saltar. Além disso, o usuário fica permanentemente sob efeito de Queda Suave.'},

  {id:'incandescente',name:'Incandescente',cost:3,appliesTo:'Armadura',effect:'Uma vez por dia, seu usuário pode fazer com que ela entre em chamas por um minuto. Durante este período, recebe resistência a fogo 10 e qualquer criatura que o ataque em corpo-a-corpo automaticamente sofre 2d6+3 pontos de dano de fogo.'},
  {id:'invulnerabilidade',name:'Invulnerabilidade',cost:3,appliesTo:'Armadura',effect:'O usuário desta armadura recebe redução de dano 5/mágica.'},
  {id:'toque-espectral',name:'Toque Espectral',cost:3,appliesTo:'Armadura e Escudo',effect:'Esta armadura ou escudo aplica seu bônus na classe de armadura mesmo contra ataques de criaturas incorpóreas. Criaturas incorpóreas podem usar armaduras ou escudos de toque espectral como se fossem corpóreas.'},

  {id:'absorcao',name:'Absorção',cost:4,appliesTo:'Armadura e Escudo',effect:'Fornece ao usuário resistência 10 a todos os tipos de energia: ácido, eletricidade, fogo, frio e sônico.'},
  {id:'controlar-mortos-vivos',name:'Controlar Mortos-vivos',cost:4,appliesTo:'Armadura e Escudo',effect:'O usuário pode lançar Controlar Mortos-vivos (Vontade CD 10+MdN+Mod Car) uma vez por dia. Itens com este poder parecem feitos de ossos.'},
  {id:'forma-eterea',name:'Forma Etérea',cost:4,appliesTo:'Armadura',effect:'Com um comando, o usuário torna-se etéreo, como a magia Passeio Etéreo. Este poder pode ser usado uma vez por dia.'},
  {id:'reflexao',name:'Reflexão',cost:4,appliesTo:'Escudo',effect:'Uma vez por dia, como uma ação livre, pode ser usado para refletir uma magia de volta a seu conjurador, como Reverter Magia.'}
];

export const fixedPowersByCost = [1,2,3,4].map((cost) => ({
  cost,
  powers: fixedMagicPowers.filter((power) => power.cost === cost)
}));

export const armorMagicPowers = fixedMagicPowers.filter((power) => power.appliesTo === 'Armadura' || power.appliesTo === 'Armadura e Escudo');
export const shieldMagicPowers = fixedMagicPowers.filter((power) => power.appliesTo === 'Escudo' || power.appliesTo === 'Armadura e Escudo');
export const powerItemMagicPowers = fixedMagicPowers.filter((power) => power.appliesTo === 'Item de Poder');
