/**
 * Bônus numéricos de talentos aplicados sozinhos na ficha.
 *
 * Como funciona:
 * - Bônus gerais (resistências, CA, PV, PM, perícias, ataque, dano, atributos) viram linhas na tabela
 *   "Modificadores" da ficha do Roll20 (seção rep_mods), marcadas com xmod_origem = "<linha do talento>#<n>".
 *   Assim o jogador vê de onde vem cada número e pode desligar um bônus pela caixa da linha.
 *   - "situacional": a linha entra DESLIGADA (Torcida, Fúria Guerreira...): o jogador liga quando vale.
 *   - "escolha": a linha entra com Parâmetro "Nenhum" e o jogador escolhe (Resistência Aprimorada, Foco em
 *     Perícia...). Se o nome do talento já disser a escolha — "Foco em Perícia (Percepção)" —, ela é usada.
 *   O sistema mantém Nome, Hab e Extra dessas linhas (o valor acompanha o nível); a caixa e as escolhas
 *   são do jogador.
 * - Bônus de uma arma só (Especialização em Arma, Mestre em Arma, Acerto Crítico Aprimorado, Arma Racial)
 *   ficam em caixas na linha da arma e entram na rolagem dela (bonusDeArma).
 *
 * Os talentos são reconhecidos pelo nome da linha em Talentos & Habilidades (sem o que estiver entre
 * parênteses), então valem também os digitados à mão ou importados do Roll20.
 * Puro (testável em Node).
 */
import { slug } from "./progressao.mjs";

const inteiro = (v) => {
  const n = parseInt(v, 10);
  return Number.isFinite(n) ? n : 0;
};

/** Quantos dos marcos de nível o personagem já alcançou. */
const marcos = (nivel, lista) => lista.filter((n) => nivel >= n).length;
/** "Este bônus aumenta em 1 para cada dois outros talentos da Tormenta que você possui." */
const porOutrosDaTormenta = (ctx, cada) => Math.floor(Math.max(0, ctx.tormenta - 1) / cada);

/* Parâmetros da tabela Modificadores (textos exatos das opções da ficha do Roll20). */
const RESISTENCIAS = ["Fortitude", "Reflexo", "Vontade"];
const ATRIBUTOS = ["FOR", "DES", "CON", "INT", "SAB", "CAR"];
const PERICIAS = ["Acrobacia", "Adestrar Animais", "Atletismo", "Atuaçao", "Cavalgar", "Conhecimento", "Curar",
  "Diplomacia", "Enganaçao", "Furtividade", "Identificar Magia", "Iniciativa", "Intimidaçao", "Intuiçao", "Ladinagem",
  "Jogatina", "Meditaçao", "Obter Informaçao", "Oficio", "Percepçao", "Sobrevivencia"];
const ESCOLHAS = { resistencia: RESISTENCIAS, atributo: ATRIBUTOS, pericia: PERICIAS };

/* Atalhos para a tabela */
const b = (alvo, valor, extra = {}) => ({ alvo, valor, ...extra });
const sit = (alvo, valor, nota) => ({ alvo, valor, situacional: true, nota });
/** Jogadas de dano com armas: Dano CaC e Dano Dis ("Danos" somaria também no dano de magia). */
const danoArmas = (valor, extra = {}) => [b("Dano CaC", valor, extra), b("Dano Dis", valor, extra)];
const sitVarios = (alvos, valor, nota) => alvos.map((a) => sit(a, valor, nota));

/**
 * Talentos com bônus que a ficha aplica. Chave: slug do nome (sem parênteses).
 * valor: número ou (ctx) => número, com ctx = { nivel, tormenta } (tormenta = talentos da Tormenta na ficha).
 */
export const BONUS_DE_TALENTOS = {
  /* Sempre ativos */
  "vitalidade": [b("PV/nivel", 2)],
  "poder-magico": [b("PM", (c) => c.nivel)],
  "estudos-diletantes": [b("PM", (c) => -c.nivel)],
  "resistencia-aprimorada": [b("escolha:resistencia", 2)],
  "foco-em-pericia": [b("escolha:pericia", 4)],
  "visao-ampla": [b("Percepçao", 4)],
  "carapaca": [b("CA", (c) => 1 + porOutrosDaTormenta(c, 2))],
  "visco-rubro": [b("Ataque CaC", (c) => 1 + porOutrosDaTormenta(c, 2))],
  "grandao": [b("Ataques", -1), b("CA", -1), b("Furtividade", -4)],
  "vitalidade-das-fadas": [b("PV", 0, { hab: "@{car_mod}" })],
  "investigador": [b("Obter Informaçao", 0, { hab: "@{int_mod}" }), sit("Percepçao", 0, "só para procurar")],
  "fundamentalista": [b("PM", 5), b("escolha:atributo", 2), b("escolha:atributo", 2)],
  "ao-sabor-do-destino": [
    b("Ataques", (c) => marcos(c.nivel, [5, 10, 15, 20])),
    ...danoArmas((c) => marcos(c.nivel, [5, 10, 15, 20])),
    b("CA", (c) => marcos(c.nivel, [7, 12, 17])),
    b("Resistencias", (c) => marcos(c.nivel, [9, 14, 19])),
    b("escolha:pericia", 4, { nivel: 6 }), b("escolha:pericia", 4, { nivel: 11 }), b("escolha:pericia", 4, { nivel: 16 }),
    b("escolha:atributo", 2, { nivel: 8 }), b("escolha:atributo", 2, { nivel: 13 }), b("escolha:atributo", 2, { nivel: 18 })
  ],
  "especializacao-em-raio": [b("Toques", 2), sit("Dano Magia", 4, "só magias de toque")],
  /* Poderes concedidos */
  "arma-de-valkaria": [b("Ataques", 1), ...danoArmas(2)],
  "mente-arcana": ["Conhecimento", "Identificar Magia", "Oficio"].map((a) => b(a, (c) => 2 + 2 * marcos(c.nivel, [6, 12, 18]))),
  "conhecimentos-gerais": [b("Conhecimento", (c) => 4 + 2 * marcos(c.nivel, [8, 16]))],
  "dom-da-verdade": [b("Intuiçao", (c) => 2 + 2 * marcos(c.nivel, [6, 12, 18])), b("Percepçao", (c) => 2 + 2 * marcos(c.nivel, [6, 12, 18]))],
  "alma-do-dragao": [b("CA", (c) => (c.nivel >= 4 ? 2 : 0)),
    ...[["FOR", 4], ["CON", 4], ["INT", 2], ["CAR", 2]].map(([a, v]) => b(a, (c) => (c.nivel >= 20 ? v : 0)))],
  /* Moreau: bônus permanente de atributo (as duas habilidades à escolha ficam no texto) */
  "heranca-do-bufalo": [b("FOR", 2)], "heranca-do-leao": [b("FOR", 2)],
  "heranca-do-coelho": [b("DES", 2)], "heranca-do-morcego": [b("DES", 2)],
  "heranca-do-crocodilo": [b("CON", 2)], "heranca-do-urso": [b("CON", 2)],
  "heranca-da-raposa": [b("INT", 2)], "heranca-da-serpente": [b("INT", 2)],
  "heranca-da-coruja": [b("SAB", 2)], "heranca-da-hiena": [b("SAB", 2)],
  "heranca-do-gato": [b("CAR", 2)], "heranca-do-lobo": [b("CAR", 2)],

  /* Situacionais: entram desligados */
  "torcida": sitVarios(["Ataques", "CA", "Resistencias"], 2, "com a torcida a seu favor"),
  "formacao-tartaruga": [sit("Resistencias", 2, "usando escudo")],
  "mobilidade-perfeita": sitVarios(["CA", "Resistencias"], 2, "depois de se deslocar no turno"),
  "bloqueio-ambidestro": [sit("CA", 1, "usando duas armas")],
  "truque-do-desarme": [sit("CA", 4, "ação completa, por uma rodada")],
  "especializacao-em-armadura": [sit("CA", 1, "com o tipo de armadura escolhido")],
  "brecha-na-guarda": danoArmas(4, { situacional: true, nota: "contra atordoados, caídos ou desprevenidos" }),
  "faro-para-medo": [sit("Ataques", 2, "criatura abalada ou apavorada no faro"),
    ...danoArmas(2, { situacional: true, nota: "criatura abalada ou apavorada no faro" })],
  "tiro-longo": [sit("Ataque Dis", 1, "alvo a 9m ou menos"), sit("Dano Dis", 1, "alvo a 9m ou menos")],
  "artilheiro": [sit("Ataque Dis", 4, "balistas, catapultas, canhões e nebulbos"), sit("Dano Dis", 4, "armas de cerco")],
  "autossuficiente": [sit("Sobrevivencia", 4, "sozinho")],
  "despistar": [sit("Furtividade", 4, "nas ruas de uma cidade que conheça")],
  "diligente": [sit("Pericias", 4, "depois de uma ação padrão de concentração")],
  "artista-em-conjunto-solo": [sit("Atuaçao", 6, "na situação escolhida (-4 na oposta)")],
  "magias-em-combate": [sit("Vontade", 4, "para conjurar defensivamente")],
  "entre-as-pernas": [sit("CA", 4, "no espaço de uma criatura Grande ou maior")],
  "visao-termica": [sit("Percepçao", 8, "ver seres vivos no escuro")],
  "placidez-de-marah": sitVarios(["CA", "Resistencias"], (c) => (c.nivel >= 12 ? 4 : 2), "rodadas sem atacar"),
  "carcacas-profanadas": [sit("Ataques", (c) => (c.nivel >= 10 ? 4 : 2), "depois de consumir uma carcaça"),
    ...danoArmas((c) => (c.nivel >= 10 ? 4 : 2), { situacional: true, nota: "depois de consumir uma carcaça" }),
    sit("Resistencias", (c) => (c.nivel >= 10 ? 4 : 2), "depois de consumir uma carcaça")],
  "furia-guerreira": [sit("Ataque CaC", (c) => 2 + marcos(c.nivel, [8, 16]), "em fúria"),
    sit("Dano CaC", (c) => 2 + marcos(c.nivel, [8, 16]), "em fúria"),
    sit("CA", (c) => -(2 + marcos(c.nivel, [8, 16])), "em fúria")],
  "defesa-da-magia": [sit("CA", (c) => 2 + 2 * marcos(c.nivel, [8, 16]), "depois de lançar uma magia")],
  "dom-dos-justos": [sit("Ataques", (c) => 1 + marcos(c.nivel, [5, 10, 15, 20]), "contra criaturas malignas"),
    ...danoArmas((c) => 1 + marcos(c.nivel, [5, 10, 15, 20]), { situacional: true, nota: "contra criaturas malignas" })]
};

/** Talentos que valem numa arma só: caixa na linha da arma. */
export const TALENTOS_DE_ARMA = {
  "especializacao-em-arma": "xarma_especializada",
  "especializacao-em-arma-aprimorada": "xarma_especializada",
  "acerto-critico-aprimorado": "xarma_especializada",
  "mestre-em-arma": "xarma_mestre",
  "especializacao-em-arma-racial": "xarma_racial"
};

/** Nome da linha → { chave (slug sem parênteses), escolhas (texto entre parênteses) }. */
export function identificarTalento(nome) {
  const texto = String(nome ?? "");
  const dentro = [...texto.matchAll(/\(([^)]*)\)/g)].map((m) => m[1]).join(",");
  return { chave: slug(texto.replace(/\([^)]*\)/g, " ")), escolhas: dentro.split(/,|;|\be\b|\//).map((s) => slug(s)).filter(Boolean) };
}

const nivelDoPersonagem = (system) => Object.values(system.rep_class ?? {}).reduce((s, c) => s + inteiro(c.xclasse_nivel), 0);
const ordenadas = (secao) => Object.entries(secao ?? {}).sort(([, a], [, b2]) => (Number(a.ordem) || 0) - (Number(b2.ordem) || 0));

/** Parâmetro da lista de escolhas que bate com um texto ("percepcao" → "Percepçao"; "for"/"forca" → "FOR"). */
function escolhaPorTexto(lista, texto) {
  const forca = { forca: "for", destreza: "des", constituicao: "con", inteligencia: "int", sabedoria: "sab", carisma: "car", reflexos: "reflexo" };
  const t = forca[texto] ?? texto;
  return lista.find((op) => slug(op) === t) ?? lista.find((op) => slug(op).startsWith(t) || t.startsWith(slug(op))) ?? null;
}

/**
 * Linhas de Modificadores que os talentos da ficha pedem.
 * @returns {Map<string, {origem, nome, tipo, hab, extra, situacional, escolha}>} chave = xmod_origem
 */
export function modificadoresDosTalentos(system) {
  const talentos = ordenadas(system.rep_talento).map(([id, t]) => ({ id, ...identificarTalento(t.nome), nome: String(t.nome ?? "").trim() }));
  const ctx = { nivel: nivelDoPersonagem(system), tormenta: talentos.filter((t) => TORMENTA.has(t.chave)).length };
  const desejadas = new Map();
  for (const t of talentos) {
    const efeitos = BONUS_DE_TALENTOS[t.chave];
    if (!efeitos) continue;
    const usadas = {};
    efeitos.forEach((e, n) => {
      if (e.nivel && ctx.nivel < e.nivel) return;
      const valor = typeof e.valor === "function" ? e.valor(ctx) : e.valor;
      if (!valor && !e.hab) return;
      let tipo = e.alvo;
      let escolha = null;
      if (tipo.startsWith("escolha:")) {
        escolha = tipo.slice(8);
        const lista = ESCOLHAS[escolha];
        // n-ésima escolha desta categoria = n-ésimo texto entre parênteses que for dessa categoria
        const validas = t.escolhas.map((s) => escolhaPorTexto(lista, s)).filter(Boolean);
        usadas[escolha] = (usadas[escolha] ?? -1) + 1;
        tipo = validas[usadas[escolha]] ?? null;
      }
      const sufixo = e.situacional ? ` (situacional: ${e.nota})` : (escolha && !tipo ? " (escolha o parâmetro)" : "");
      desejadas.set(`${t.id}#${n}`, {
        origem: `${t.id}#${n}`, nome: `${t.nome}${sufixo}`, tipo, hab: e.hab ?? "0", extra: valor,
        situacional: Boolean(e.situacional), escolha
      });
    });
  }
  return desejadas;
}

const TORMENTA = new Set(["anatomia-insana", "anular-individuo", "armamento-da-tormenta", "carapaca", "corpo-aberrante",
  "deformidade-aprimorada", "deslocar", "desmaterializar", "forma-aberrante", "golpes-da-tempestade", "identidade-fraca",
  "insanidade-da-tormenta", "manto-mucoso", "membros-estendidos", "mente-caotica", "moldar-alma", "parodia-elfica",
  "patas-articuladas", "recuperacao-aberrante", "sangue-acido", "sentido-sismico", "toque-da-corrosao",
  "toque-da-destruicao", "toque-da-erosao", "visao-ampla", "visao-no-escuro", "visco-rubro"]);

/**
 * Update que deixa a tabela Modificadores de acordo com os talentos.
 * @param {object} system  system._source do ator
 * @param {{novoId: () => string, apagar: (caminho, chave) => object}} op
 */
export function sincronizacaoDeModificadores(system, { novoId, apagar }) {
  const desejadas = modificadoresDosTalentos(system);
  const update = {};
  const existentes = new Set();
  for (const [id, m] of Object.entries(system.rep_mods ?? {})) {
    if (!m.xmod_origem) continue;
    const d = desejadas.get(m.xmod_origem);
    if (!d || existentes.has(m.xmod_origem)) {
      Object.assign(update, apagar("system.rep_mods", id));
      continue;
    }
    existentes.add(m.xmod_origem);
    const caminho = `system.rep_mods.${id}`;
    if (m.xmod_nome !== d.nome) update[`${caminho}.xmod_nome`] = d.nome;
    if (inteiro(m.xmod_extra) !== d.extra) update[`${caminho}.xmod_extra`] = d.extra;
    if ((m.xmod_habilidade ?? "0") !== d.hab) update[`${caminho}.xmod_habilidade`] = d.hab;
    // Parâmetro: fixo do talento, ou a escolha (a do nome do talento ganha; senão fica a do jogador).
    if (d.tipo && m.xmod_tipo !== d.tipo) update[`${caminho}.xmod_tipo`] = d.tipo;
  }
  let ordem = Math.max(0, ...Object.values(system.rep_mods ?? {}).map((m) => Number(m.ordem) || 0));
  for (const [origem, d] of desejadas) {
    if (existentes.has(origem)) continue;
    update[`system.rep_mods.${novoId()}`] = {
      xmod_origem: origem, xmod_nome: d.nome, xmod_tipo: d.tipo ?? "Nenhum", xmod_habilidade: d.hab,
      xmod_extra: d.extra, xmod_equip: !d.situacional, ordem: ++ordem
    };
  }
  return update;
}

/**
 * Bônus dos talentos de arma numa linha de arma (entra na rolagem).
 * - Especialização em Arma: +1 ataque/+2 dano (Aprimorada: +2/+4); Acerto Crítico Aprimorado: margem +2.
 * - Mestre em Arma: +1 ataque/+1 dano e margem +1 (cumulativo com a Especialização).
 * - Especialização em Arma Racial: +1/+2 (não soma com a Especialização em Arma: vale a maior).
 * - Arma de Valkaria (já somada em Modificadores) não acumula com a Especialização: sai nas armas especializadas.
 * @returns {{ataque, dano, margem, fontes: string[], disponiveis: {xarma_especializada, xarma_mestre, xarma_racial}}}
 */
export function bonusDeArma(system, arma = {}) {
  const tem = new Set(Object.values(system.rep_talento ?? {}).map((t) => identificarTalento(t.nome).chave));
  const disponiveis = { xarma_especializada: false, xarma_mestre: false, xarma_racial: false };
  for (const [chave, campo] of Object.entries(TALENTOS_DE_ARMA)) if (tem.has(chave)) disponiveis[campo] = true;
  let ataque = 0, dano = 0, margem = 0;
  const fontes = [];
  let espAtaque = 0, espDano = 0;
  if (arma.xarma_especializada && disponiveis.xarma_especializada) {
    if (tem.has("especializacao-em-arma-aprimorada")) { espAtaque = 2; espDano = 4; fontes.push("Especialização em Arma Aprimorada"); }
    else if (tem.has("especializacao-em-arma")) { espAtaque = 1; espDano = 2; fontes.push("Especialização em Arma"); }
    if (tem.has("acerto-critico-aprimorado")) { margem += 2; fontes.push("Acerto Crítico Aprimorado"); }
  }
  if (arma.xarma_racial && tem.has("especializacao-em-arma-racial") && espDano < 2) {
    espAtaque = 1; espDano = 2; fontes.push("Especialização em Arma Racial");
  }
  ataque += espAtaque; dano += espDano;
  if (arma.xarma_mestre && tem.has("mestre-em-arma")) { ataque += 1; dano += 1; margem += 1; fontes.push("Mestre em Arma"); }
  if (espDano && tem.has("arma-de-valkaria")) {
    const valkaria = Object.values(system.rep_mods ?? {}).some((m) => m.xmod_equip && String(m.xmod_nome ?? "").startsWith("Arma de Valkaria"));
    if (valkaria) { ataque -= 1; dano -= 2; fontes.push("sem Arma de Valkaria (não acumula)"); }
  }
  return { ataque, dano, margem, fontes, disponiveis };
}

/** Texto curto para a linha da arma: "+1 ataque, +2 dano, margem +2". */
export function resumoDeArma({ ataque, dano, margem }) {
  const sinal = (n) => (n >= 0 ? `+${n}` : String(n));
  const partes = [];
  if (ataque) partes.push(`${sinal(ataque)} ataque`);
  if (dano) partes.push(`${sinal(dano)} dano`);
  if (margem) partes.push(`margem de ameaça +${margem}`);
  return partes.join(", ");
}
