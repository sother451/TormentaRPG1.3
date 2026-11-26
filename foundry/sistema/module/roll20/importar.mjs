/**
 * Importa um personagem exportado do Roll20 (JSON do VTT Enhancement Suite / "Export character").
 * Como os campos do Foundry têm os mesmos nomes da ficha do Roll20, cada atributo vai direto
 * para o campo equivalente; as seções repetíveis mantêm as linhas e a ordem.
 * Puro (testável em Node).
 */
import { FICHA, } from "./campos.mjs";
import { norm } from "./motor.mjs";

const ID_ROLL20 = 20;   // ids de linha do Roll20: "-" + 19 caracteres

function converter(valor, def) {
  if (def.tipo === "marcado") {
    const v = String(valor ?? "").trim();
    return v !== "" && v !== "0" && v.toLowerCase() !== "false";
  }
  if (def.tipo === "numero") {
    if (valor === "" || valor === null || valor === undefined) return null;
    const n = Number(String(valor).replace(",", "."));
    return Number.isFinite(n) ? n : null;
  }
  return String(valor ?? "");
}

/** Chave segura para o Foundry a partir do id do Roll20. */
const chaveDeLinha = (id) => `r20${String(id).replace(/[^A-Za-z0-9]/g, "")}`;

/**
 * @param {object|string} json   conteúdo do arquivo exportado
 * @returns {{name: string, img: string|null, system: object, ignorados: string[]}}
 */
export function importarDoRoll20(json) {
  const dados = typeof json === "string" ? JSON.parse(json) : json;
  const atributos = dados.attribs ?? dados.attributes ?? [];
  if (!Array.isArray(atributos) || !atributos.length) throw new Error("O arquivo não tem a lista de atributos (attribs) do Roll20.");

  const system = {};
  const ignorados = [];
  const ordens = {};

  for (const a of atributos) {
    const nome = String(a.name ?? "");
    const valor = a.current;
    const reporder = /^_reporder_repeating_(.+)$/i.exec(nome);
    if (reporder) {
      ordens[norm(reporder[1])] = String(valor ?? "").split(",").map((id) => id.trim().toLowerCase()).filter(Boolean);
      continue;
    }
    const rep = /^repeating_([^_]+)_(.+)$/i.exec(nome);
    if (rep) {
      const secao = norm(rep[1]);
      const resto = rep[2];
      const defs = FICHA.repetiveis[secao];
      if (!defs || resto[ID_ROLL20] !== "_") { ignorados.push(nome); continue; }
      const id = resto.slice(0, ID_ROLL20);
      const campo = norm(resto.slice(ID_ROLL20 + 1));
      const def = defs.salvos[campo];
      if (!def) { if (!(campo in defs.calculados)) ignorados.push(nome); continue; }
      const linhas = (system[`rep_${secao}`] ??= {});
      const linha = (linhas[chaveDeLinha(id)] ??= { ordem: 0, _idRoll20: id.toLowerCase() });
      linha[campo] = converter(valor, def);
      continue;
    }
    const campo = norm(nome);
    const def = FICHA.salvos[campo];
    if (def) system[campo] = converter(valor, def);
    else if (!(campo in FICHA.calculados) && campo !== "character_name") ignorados.push(nome);
  }

  // Ordem das linhas: a do Roll20 (_reporder) e, depois, as que não estavam na lista.
  for (const [chave, linhas] of Object.entries(system)) {
    if (!chave.startsWith("rep_")) continue;
    const ordem = ordens[chave.slice(4)] ?? [];
    const lista = Object.values(linhas);
    for (const l of lista) {
      const i = ordem.indexOf(l._idRoll20);
      l.ordem = i >= 0 ? i + 1 : ordem.length + 1 + lista.indexOf(l);
      delete l._idRoll20;
    }
  }

  return { name: dados.name ?? "Personagem do Roll20", img: dados.avatar || null, system, ignorados };
}
