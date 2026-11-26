/**
 * Gera os compêndios do sistema (pacotes LevelDB em packs/) a partir de data/*.json.
 *
 *   node ferramentas/montar-pacotes.mjs
 *
 * 1. Cada item ganha um _id fixo (derivado do sourceId), para que atualizar o sistema
 *    não crie cópias nem quebre links (@UUID) para os itens.
 * 2. As "pastas" viram documentos Folder dentro do pacote.
 * 3. Os arquivos-fonte vão para packs/_fonte/<pacote>/ e o CLI oficial do Foundry
 *    (@foundryvtt/foundryvtt-cli) compila para packs/<pacote>/ (LevelDB).
 */
import { compilePack } from "@foundryvtt/foundryvtt-cli";
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const RAIZ = path.resolve(import.meta.dirname, "..");
const SISTEMA = "tormenta13";

export const PACOTES = [
  { arquivo: "racas", nome: "racas", rotulo: "Raças" },
  { arquivo: "classes", nome: "classes", rotulo: "Classes" },
  { arquivo: "talentos-de-classe", nome: "talentos-de-classe", rotulo: "Talentos de Classe" },
  { arquivo: "talentos", nome: "talentos", rotulo: "Talentos" },
  { arquivo: "magias", nome: "magias", rotulo: "Magias" },
  { arquivo: "armas", nome: "armas", rotulo: "Armas" },
  { arquivo: "armaduras", nome: "armaduras", rotulo: "Armaduras e Escudos" },
  { arquivo: "equipamentos", nome: "equipamentos", rotulo: "Equipamentos" },
  { arquivo: "itens-magicos", nome: "itens-magicos", rotulo: "Itens Mágicos" }
];

/** _id do Foundry: 16 caracteres alfanuméricos. Derivado de um texto, é sempre o mesmo. */
const ALFABETO = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
export function idFixo(texto) {
  const bytes = createHash("sha256").update(texto).digest();
  let id = "";
  for (let i = 0; i < 16; i++) id += ALFABETO[bytes[i] % ALFABETO.length];
  return id;
}

const slug = (t) => String(t).normalize("NFD").replace(/[̀-ͯ]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

function gerarFontes(def) {
  const dados = JSON.parse(fs.readFileSync(path.join(RAIZ, "data", `${def.arquivo}.json`), "utf8"));
  const destino = path.join(RAIZ, "packs", "_fonte", def.nome);
  fs.rmSync(destino, { recursive: true, force: true });
  fs.mkdirSync(destino, { recursive: true });

  const pastas = new Map();
  const vistos = new Set();
  let ordem = 0;
  for (const { pasta, ...doc } of dados) {
    const fonte = doc.flags?.[SISTEMA]?.sourceId ?? `${doc.type}-${doc.name}`;
    const id = idFixo(`${def.nome}/${fonte}`);
    if (vistos.has(id)) throw new Error(`${def.nome}: sourceId repetido "${fonte}"`);
    vistos.add(id);

    let pastaId = null;
    if (pasta) {
      if (!pastas.has(pasta)) {
        pastaId = idFixo(`${def.nome}/pasta/${pasta}`);
        pastas.set(pasta, pastaId);
        const folder = { _id: pastaId, _key: `!folders!${pastaId}`, name: pasta, type: "Item", folder: null,
          sorting: "a", sort: pastas.size * 100000, color: null, flags: {} };
        fs.writeFileSync(path.join(destino, `_pasta-${slug(pasta)}.json`), JSON.stringify(folder, null, 1));
      }
      pastaId = pastas.get(pasta);
    }
    const item = { _id: id, _key: `!items!${id}`, folder: pastaId, sort: ++ordem * 100, effects: [], ...doc };
    fs.writeFileSync(path.join(destino, `${slug(fonte)}-${id}.json`), JSON.stringify(item, null, 1));
  }
  return { itens: vistos.size, pastas: pastas.size };
}

export async function montarTudo() {
  for (const def of PACOTES) {
    const r = gerarFontes(def);
    const destino = path.join(RAIZ, "packs", def.nome);
    fs.rmSync(destino, { recursive: true, force: true });
    await compilePack(path.join(RAIZ, "packs", "_fonte", def.nome), destino);
    console.log(`${def.rotulo}: ${r.itens} itens, ${r.pastas} pastas -> packs/${def.nome}`);
  }
}

if (path.resolve(process.argv[1] ?? "") === path.resolve(import.meta.filename)) await montarTudo();
