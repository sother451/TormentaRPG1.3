/**
 * Progressão do personagem (aba Progressão): vagas de talento por nível e habilidades de classe.
 *
 * Regras (compêndio original, página Personagem):
 * - um talento no 1º nível e em todo nível ímpar; no 1º nível, mais um talento qualquer;
 * - 4º e 12º: talento de combate, magia, Tormenta ou poder concedido;
 * - 6º e 14º: talento de perícia;
 * - 4º, 8º, 12º e 16º: talento de destino ou de classe;
 * - níveis pares: +1 em um atributo (não o mesmo do nível par anterior);
 * - talentos de classe têm faixas (4º, 8º, 12º, 16º e 20º nível NA CLASSE);
 * - a habilidade do 20º de cada classe (Senhor da Guerra...) dá um talento da faixa do 20º.
 * As habilidades da tabela da classe entram sozinhas na ficha conforme o nível da classe.
 *
 * Puro (testável em Node). Os pré-requisitos não são bloqueados, só mostrados.
 */

export const slug = (t) => String(t ?? "").normalize("NFD").replace(/[̀-ͯ]/g, "")
  .toLowerCase().replace(/\(.*?\)/g, (m) => m.slice(1, -1)).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const CATEGORIAS = {
  "Talentos de Combate": "combate", "Talentos de Perícia": "pericia", "Talentos de Magia": "magia",
  "Metamágicos": "magia", "Talentos de Destino": "destino", "Talentos de Poder Concedido": "poder",
  "Talentos da Tormenta": "tormenta", "Talentos Raciais": "racial", "Talentos Moreau": "racial"
};
export const ATRIBUTOS = ["FOR", "DES", "CON", "INT", "SAB", "CAR"];

/** Catálogo a partir de data/talentos.json (formato de item) e data/classes-progressao.json. */
export function montarCatalogo(talentosItens, classes) {
  const talentos = talentosItens.map((t) => ({
    id: `geral:${slug(t.name)}`,
    nome: t.name,
    grupo: t.system?.grupo ?? "",
    categoria: CATEGORIAS[t.system?.grupo] ?? "outros",
    prerequisito: t.system?.prerequisitos ?? "",
    descricao: t.system?.descricao ?? ""
  }));
  for (const c of classes) {
    for (const t of c.talentos) {
      talentos.push({
        id: `classe:${c.id}:${slug(t.nome)}`, nome: t.nome, grupo: `Talentos de ${c.nome}`, categoria: "classe",
        classe: c.id, faixa: t.nivel, prerequisito: t.prerequisito, descricao: t.descricao
      });
    }
  }
  return { talentos, classes, porId: new Map(talentos.map((t) => [t.id, t])) };
}

/** Classe do catálogo para uma linha de "Informação de Classe" (pelo nome). */
export function classeDaLinha(catalogo, nome) {
  const s = slug(nome);
  if (!s) return null;
  return catalogo.classes.find((c) => c.id === s || slug(c.nome) === s)
    ?? catalogo.classes.find((c) => c.id.startsWith(`${s}-`) || s.startsWith(`${c.id}-`)) ?? null;
}

/** Vagas de talento ganhas no nível de personagem `n` (sem as de classe do 20º). */
export function vagasDoNivel(n) {
  const v = [];
  if (n === 1) v.push({ id: "n1-extra", tipo: "geral", rotulo: "Talento extra do 1º nível (qualquer)" });
  if (n % 2 === 1) v.push({ id: `n${n}-geral`, tipo: "geral", rotulo: "Talento" });
  if (n === 4 || n === 12) v.push({ id: `n${n}-combate`, tipo: "combate", rotulo: "Talento de combate, magia, Tormenta ou poder concedido" });
  if (n === 6 || n === 14) v.push({ id: `n${n}-pericia`, tipo: "pericia", rotulo: "Talento de perícia" });
  if ([4, 8, 12, 16].includes(n)) v.push({ id: `n${n}-classe`, tipo: "classe", rotulo: "Talento de destino ou de classe" });
  return v;
}

/** Talentos que podem ocupar uma vaga. */
function opcoesDaVaga(vaga, catalogo, classesDoPersonagem) {
  const gerais = catalogo.talentos.filter((t) => t.categoria !== "classe");
  switch (vaga.tipo) {
    case "geral": return gerais;
    case "combate": return gerais.filter((t) => ["combate", "magia", "tormenta", "poder"].includes(t.categoria));
    case "pericia": return gerais.filter((t) => t.categoria === "pericia");
    case "classe": return [
      ...gerais.filter((t) => t.categoria === "destino"),
      ...catalogo.talentos.filter((t) => t.categoria === "classe" && t.faixa < 20
        && classesDoPersonagem.some((c) => c.id === t.classe && c.nivel >= t.faixa))
    ];
    case "vigesimo": return catalogo.talentos.filter((t) => t.categoria === "classe" && t.classe === vaga.classe && t.faixa === 20);
    default: return [];
  }
}

const linhasOrdenadas = (obj) => Object.entries(obj ?? {}).sort(([, a], [, b]) => (Number(a.ordem) || 0) - (Number(b.ordem) || 0));
const lerJSON = (t, padrao) => { try { return JSON.parse(t || "") ?? padrao; } catch { return padrao; } };

/** Classes do personagem (linhas de "Informação de Classe" que existem no catálogo). */
export function classesDoPersonagem(system, catalogo) {
  return linhasOrdenadas(system.rep_class).map(([id, l]) => {
    const dados = classeDaLinha(catalogo, l.xclass_nome);
    return { linha: id, nomeNaFicha: l.xclass_nome, nivel: Math.max(0, Math.min(20, Number(l.xclasse_nivel) || 0)), dados, id: dados?.id };
  });
}

/**
 * Monta a aba Progressão.
 * @returns {{nivel, classes, niveis: Array, pendentes: number}}
 */
export function montarProgressao(system, catalogo) {
  const classes = classesDoPersonagem(system, catalogo);
  const nivel = classes.reduce((s, c) => s + c.nivel, 0);
  const conhecidas = classes.filter((c) => c.dados);
  const talentos = linhasOrdenadas(system.rep_talento);
  const porVaga = new Map(talentos.filter(([, t]) => t.xtal_vaga).map(([id, t]) => [t.xtal_vaga, { linha: id, nome: t.nome }]));
  const nomesTidos = new Set(talentos.map(([, t]) => slug(t.nome)));
  const atributos = lerJSON(system.xprog_atributos, {});
  let pendentes = 0;

  const vaga = (v) => {
    const escolhido = porVaga.get(v.id) ?? null;
    if (!escolhido) pendentes++;
    const opcoes = escolhido ? [] : opcoesDaVaga(v, catalogo, conhecidas)
      .filter((t) => !nomesTidos.has(slug(t.nome)))
      .map((t) => ({ id: t.id, nome: t.nome, grupo: t.grupo, prerequisito: t.prerequisito }));
    // Agrupadas para o <select> (optgroup)
    const grupos = [];
    for (const o of opcoes) {
      let g = grupos.find((x) => x.grupo === o.grupo);
      if (!g) grupos.push(g = { grupo: o.grupo, opcoes: [] });
      g.opcoes.push(o);
    }
    return { ...v, escolhido, grupos, semOpcoes: !escolhido && !opcoes.length };
  };

  const niveis = [];
  for (let n = 1; n <= nivel; n++) {
    const item = { nivel: n, vagas: vagasDoNivel(n).map(vaga), atributo: null };
    if (n % 2 === 0) {
      const escolhido = atributos[n] ?? "";
      if (!escolhido) pendentes++;
      const anterior = atributos[n - 2] ?? "";
      item.atributo = { escolhido, opcoes: ATRIBUTOS.map((a) => ({ id: a, bloqueado: a === anterior && n > 2 })) };
    }
    niveis.push(item);
  }

  const resumoClasses = classes.map((c) => {
    const vagas = [];
    if (c.dados && c.nivel >= 20 && c.dados.habilidades.some((h) => h.talentoDoVigesimo)) {
      const h = c.dados.habilidades.find((x) => x.talentoDoVigesimo);
      vagas.push(vaga({ id: `c-${c.id}-20`, tipo: "vigesimo", classe: c.id, rotulo: `${h.nome}: talento do 20º nível de ${c.dados.nome}` }));
    }
    const ganhos = c.dados ? c.dados.tabela.filter((l) => l.nivel <= c.nivel && l.habilidades.length)
      .map((l) => ({ nivel: l.nivel, habilidades: l.habilidades.join(", "), extra: l.extra ?? "" })) : [];
    return { nome: c.dados?.nome ?? c.nomeNaFicha, nivel: c.nivel, conhecida: Boolean(c.dados), ganhos, vagas,
      colunaExtra: c.dados?.colunaExtra ?? null };
  });

  return { nivel, classes: resumoClasses, niveis: niveis.reverse(), pendentes };
}

/** Linha de "Talentos & Habilidades" para um talento escolhido numa vaga. */
export function linhaDeTalento(talento, vagaId) {
  const pre = talento.prerequisito ? `Pré-requisito: ${talento.prerequisito}\n` : "";
  return {
    nome: talento.nome,
    tipo: talento.categoria === "classe" ? "Classe" : talento.categoria === "racial" ? "Racial" : "Talento",
    descricao: pre + String(talento.descricao ?? "").replace(/<[^>]+>/g, "\n").replace(/\n{2,}/g, "\n").trim(),
    xtal_vaga: vagaId
  };
}

/**
 * Habilidades da tabela de cada classe até o nível atual: entram como linhas de "Talentos & Habilidades"
 * (tipo Classe, marcadas com xtal_concedido); as que passaram do nível saem. Devolve o update.
 */
export function sincronizacaoDeHabilidades(system, catalogo, { novoId, apagar }) {
  const desejadas = new Map();
  for (const c of classesDoPersonagem(system, catalogo)) {
    if (!c.dados) continue;
    for (const l of c.dados.tabela) {
      if (l.nivel > c.nivel) continue;
      for (const nomeNaTabela of l.habilidades) {
        const h = c.dados.habilidades.find((x) => x.nome && nomeNaTabela.startsWith(x.nome))
          ?? c.dados.habilidades.find((x) => slug(nomeNaTabela).startsWith(slug(x.nome)));
        if (!h) continue;
        // Fica o nome da tabela do nível mais alto já alcançado ("Fúria 3/dia"); o nível é o primeiro em que veio.
        const chaveHab = `${c.id}:${h.id}`;
        const primeiro = desejadas.get(chaveHab)?.nivel ?? l.nivel;
        desejadas.set(chaveHab, { nome: nomeNaTabela, descricao: h.descricao, nivel: primeiro, classe: c.dados.nome });
      }
    }
  }
  const update = {};
  const existentes = new Map();
  for (const [id, t] of Object.entries(system.rep_talento ?? {})) {
    if (!t.xtal_concedido) continue;
    if (!desejadas.has(t.xtal_concedido) || existentes.has(t.xtal_concedido)) Object.assign(update, apagar("system.rep_talento", id));
    else {
      existentes.set(t.xtal_concedido, id);
      const d = desejadas.get(t.xtal_concedido);
      if (t.nome !== d.nome) update[`system.rep_talento.${id}.nome`] = d.nome;
    }
  }
  let ordem = Math.max(0, ...Object.values(system.rep_talento ?? {}).map((t) => Number(t.ordem) || 0));
  for (const [chave, d] of desejadas) {
    if (existentes.has(chave)) continue;
    update[`system.rep_talento.${novoId()}`] = {
      nome: d.nome, tipo: "Classe", descricao: `${d.classe}, ${d.nivel}º nível.\n${d.descricao}`,
      xtal_concedido: chave, ordem: ++ordem
    };
  }
  return update;
}
