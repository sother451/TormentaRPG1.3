/**
 * Catálogo da progressão no Foundry: talentos (data/talentos.json) e classes do compêndio original
 * (data/classes-progressao.json), carregados uma vez por sessão.
 */
import { montarCatalogo } from "./progressao.mjs";

let promessa = null;

export function carregarCatalogo() {
  promessa ??= (async () => {
    const ler = async (arquivo) => {
      const r = await fetch(`systems/tormenta13/data/${arquivo}.json`);
      if (!r.ok) throw new Error(`Não foi possível ler data/${arquivo}.json (${r.status})`);
      return r.json();
    };
    const [talentos, classes] = await Promise.all([ler("talentos"), ler("classes-progressao")]);
    return montarCatalogo(talentos, classes);
  })().catch((erro) => {
    promessa = null;
    throw erro;
  });
  return promessa;
}
