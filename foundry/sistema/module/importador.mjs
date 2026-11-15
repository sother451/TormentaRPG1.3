import { SYSTEM_ID } from "./config.mjs";

const { DialogV2 } = foundry.applications.api;

/** Compêndios gerados a partir do compendium Tormenta 1.3 (arquivos em data/). */
export const PACOTES = [
  { arquivo: "racas", nome: "tormenta13-racas", rotulo: "Tormenta 1.3 · Raças" },
  { arquivo: "classes", nome: "tormenta13-classes", rotulo: "Tormenta 1.3 · Classes" },
  { arquivo: "talentos-de-classe", nome: "tormenta13-talentos-de-classe", rotulo: "Tormenta 1.3 · Talentos de Classe" },
  { arquivo: "talentos", nome: "tormenta13-talentos", rotulo: "Tormenta 1.3 · Talentos" },
  { arquivo: "magias", nome: "tormenta13-magias", rotulo: "Tormenta 1.3 · Magias" },
  { arquivo: "armas", nome: "tormenta13-armas", rotulo: "Tormenta 1.3 · Armas" },
  { arquivo: "armaduras", nome: "tormenta13-armaduras", rotulo: "Tormenta 1.3 · Armaduras e Escudos" },
  { arquivo: "equipamentos", nome: "tormenta13-equipamentos", rotulo: "Tormenta 1.3 · Equipamentos" },
  { arquivo: "itens-magicos", nome: "tormenta13-itens-magicos", rotulo: "Tormenta 1.3 · Itens Mágicos" }
];

const caminho = (arquivo) => `systems/${SYSTEM_ID}/data/${arquivo}.json`;

export async function carregarJSON(arquivo) {
  const resposta = await fetch(caminho(arquivo));
  if (!resposta.ok) throw new Error(`Não foi possível ler ${caminho(arquivo)} (${resposta.status})`);
  return resposta.json();
}

async function obterPacote(def) {
  const existente = game.packs.get(`world.${def.nome}`);
  if (existente) {
    if (existente.locked) await existente.configure({ locked: false });
    return existente;
  }
  const Colecao = foundry.documents.collections.CompendiumCollection;
  return Colecao.createCompendium({ label: def.rotulo, name: def.nome, type: "Item", packageType: "world" });
}

/** Importa um pacote; itens que já existem (mesmo sourceId) são ignorados. Retorna quantos foram criados. */
async function importarPacote(def) {
  const dados = await carregarJSON(def.arquivo);
  const pacote = await obterPacote(def);

  await pacote.getIndex({ fields: [`flags.${SYSTEM_ID}.sourceId`] });
  const jaTem = new Set(pacote.index.map((e) => foundry.utils.getProperty(e, `flags.${SYSTEM_ID}.sourceId`)).filter(Boolean));
  const novos = dados.filter((d) => !jaTem.has(d.flags[SYSTEM_ID].sourceId));
  if (!novos.length) return 0;

  // Pastas (grupo de talento, ciclo da magia, categoria da arma...)
  const pastas = new Map(pacote.folders.map((f) => [f.name, f.id]));
  for (const nome of new Set(novos.map((d) => d.pasta).filter(Boolean))) {
    if (pastas.has(nome)) continue;
    const pasta = await Folder.create({ name: nome, type: "Item" }, { pack: pacote.collection });
    pastas.set(nome, pasta.id);
  }

  const docs = novos.map(({ pasta, ...resto }) => ({ ...resto, folder: pastas.get(pasta) ?? null }));
  for (let i = 0; i < docs.length; i += 100) {
    await CONFIG.Item.documentClass.createDocuments(docs.slice(i, i + 100), { pack: pacote.collection });
  }
  return novos.length;
}

/** Importa todos os compêndios. Só o Mestre pode executar. */
export async function importarCompendios() {
  if (!game.user.isGM) return ui.notifications.warn("Apenas o Mestre pode importar os compêndios.");
  const total = PACOTES.length;
  ui.notifications.info("Tormenta 1.3: importando compêndios. Isso pode levar alguns minutos; não feche o Foundry.");
  let criados = 0;
  try {
    for (const [i, def] of PACOTES.entries()) {
      const n = await importarPacote(def);
      criados += n;
      console.log(`${SYSTEM_ID} | ${def.rotulo}: ${n} itens criados (${i + 1}/${total})`);
    }
  } catch (erro) {
    console.error(erro);
    ui.notifications.error("A importação parou por um erro. Veja o console (F12) e tente novamente: o que já foi importado não será duplicado.");
    return;
  }
  await game.settings.set(SYSTEM_ID, "compendiosImportados", true);
  ui.notifications.info(criados
    ? `Tormenta 1.3: importação concluída (${criados} itens). Os compêndios estão na aba Compêndios.`
    : "Tormenta 1.3: os compêndios já estavam completos.");
}

/** Pergunta ao Mestre, na primeira vez que o mundo abre, se quer importar. */
export async function oferecerImportacao() {
  if (!game.user.isGM || game.settings.get(SYSTEM_ID, "compendiosImportados")) return;
  const sim = await DialogV2.confirm({
    window: { title: "Tormenta RPG 1.3" },
    content: `<p>Importar agora os compêndios do sistema (raças, classes, talentos, magias, armas, armaduras e itens mágicos)?</p>
      <p>Leva alguns minutos e só precisa ser feito uma vez por mundo. Depois você arrasta os itens para as fichas.</p>`,
    yes: { label: "Importar agora" }, no: { label: "Agora não" }, rejectClose: false
  });
  if (sim) await importarCompendios();
}
