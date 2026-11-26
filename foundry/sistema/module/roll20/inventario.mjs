/**
 * Inventário: itens físicos do compêndio entram no Inventário e são equipados de lá.
 * - arma: equipar cria a linha em Ataques (ligada à linha do inventário); desequipar apaga;
 * - armadura / escudo: equipar preenche "Armadura e escudo" (só uma armadura e um escudo por vez);
 * - item mágico: equipar ocupa uma vaga de "Equipamento Mágico" (Item 1 a 4, depois Item Extra);
 * - equipamento comum: só fica no inventário.
 * Puro (testável em Node): devolve os updates; quem grava é o ator.
 */
import { linhaDeItem, textoDeHtml } from "./do-item.mjs";

export const TIPOS_DE_INVENTARIO = ["arma", "armadura", "equipamento", "itemMagico"];
const VAGAS_MAGICAS = ["item1", "item2", "item3", "item4"];

const ARMADURA_VAZIA = { armadura: "", armadura_ca: 0, armadura_max_des: 0, armadura_penalidade: 0, armadura_type: "None", armadura_equipado: false };
const ESCUDO_VAZIO = { escudo: "", escudo_ca: 0, escudo_equip: false };

/** Item do compêndio → linha do inventário (com os dados para equipar depois). */
export function linhaDeInventario(item) {
  const s = item.system ?? {};
  const tipo = item.type === "armadura" && s.escudo ? "escudo" : item.type;
  const destino = linhaDeItem(item);
  return {
    xitem_nome: item.name,
    xitem_qtd: Number(s.quantidade) || 1,
    xitem_peso: Number(s.peso) || 0,
    xitem_descricao: textoDeHtml(s.descricao).split("\n")[0].slice(0, 250),
    xitem_tipo: tipo,
    xitem_dados: JSON.stringify(destino?.dados ?? destino?.campos ?? {}),
    xitem_equipado: false
  };
}

const lerDados = (linha) => {
  try { return JSON.parse(linha?.xitem_dados || "{}"); } catch { return {}; }
};
const comPrefixo = (campos) => Object.fromEntries(Object.entries(campos).map(([k, v]) => [`system.${k}`, v]));

/**
 * Update para equipar/desequipar a linha `id` do inventário.
 * @param {object} system  dados salvos do ator (system._source)
 * @param {string} id
 * @param {boolean} equipar
 * @param {object} op
 * @param {() => string} op.novoId                 gera ids de linha
 * @param {(caminho: string, chave: string) => object} op.apagar   operação de remover chave
 * @returns {object} update plano (chaves "system.x")
 */
export function atualizacaoDeEquipar(system, id, equipar, { novoId, apagar }) {
  const itens = system.rep_itens ?? {};
  const linha = itens[id];
  if (!linha) return {};
  const dados = lerDados(linha);
  const update = { [`system.rep_itens.${id}.xitem_equipado`]: equipar };

  switch (linha.xitem_tipo) {
    case "arma": {
      const ligadas = Object.entries(system.rep_arma ?? {}).filter(([, a]) => a.xarma_origem === id);
      if (equipar && !ligadas.length) {
        const ordem = Math.max(0, ...Object.values(system.rep_arma ?? {}).map((a) => Number(a.ordem) || 0)) + 1;
        update[`system.rep_arma.${novoId()}`] = { ...dados, xarma_origem: id, ordem };
      }
      if (!equipar) for (const [rid] of ligadas) Object.assign(update, apagar("system.rep_arma", rid));
      break;
    }
    case "armadura":
    case "escudo": {
      const ehEscudo = linha.xitem_tipo === "escudo";
      if (equipar) {
        // Só uma armadura (e um escudo) por vez: a anterior volta a ficar só no inventário.
        for (const [outroId, outro] of Object.entries(itens)) {
          if (outroId !== id && outro.xitem_tipo === linha.xitem_tipo && outro.xitem_equipado) {
            update[`system.rep_itens.${outroId}.xitem_equipado`] = false;
          }
        }
        Object.assign(update, comPrefixo(ehEscudo ? { ...ESCUDO_VAZIO, ...dados, escudo_equip: true }
          : { ...ARMADURA_VAZIA, ...dados, armadura_equipado: true }));
      } else {
        const nomeAtual = ehEscudo ? system.escudo : system.armadura;
        const nomeItem = ehEscudo ? dados.escudo : dados.armadura;
        if (!nomeAtual || nomeAtual === nomeItem) Object.assign(update, comPrefixo(ehEscudo ? ESCUDO_VAZIO : ARMADURA_VAZIA));
      }
      break;
    }
    case "itemMagico": {
      const nome = linha.xitem_nome;
      const vagaOcupada = VAGAS_MAGICAS.find((v) => system[v] === nome);
      const extra = Object.entries(system.rep_item_magico ?? {}).find(([, l]) => l.itemextra === nome);
      if (equipar && !vagaOcupada && !extra) {
        const vaga = VAGAS_MAGICAS.find((v) => !String(system[v] ?? "").trim());
        if (vaga) update[`system.${vaga}`] = nome;
        else {
          const ordem = Math.max(0, ...Object.values(system.rep_item_magico ?? {}).map((l) => Number(l.ordem) || 0)) + 1;
          update[`system.rep_item_magico.${novoId()}`] = { itemextra: nome, ordem };
        }
      }
      if (!equipar) {
        if (vagaOcupada) update[`system.${vagaOcupada}`] = "";
        else if (extra) Object.assign(update, apagar("system.rep_item_magico", extra[0]));
      }
      break;
    }
    default:
      break;
  }
  return update;
}
