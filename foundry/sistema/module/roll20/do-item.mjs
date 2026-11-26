/**
 * Arrastar um item do compêndio para a ficha: o item vira uma linha da seção repetível
 * equivalente (como se o jogador tivesse preenchido no Roll20), ou preenche campos da ficha.
 * Puro (testável em Node).
 */
import { FICHA } from "./campos.mjs";
import { parseCritico } from "../rules.mjs";

/** HTML da descrição → texto (as caixas de texto da ficha são texto puro). */
export function textoDeHtml(html) {
  return String(html ?? "")
    .replace(/<\/(p|li|h\d|div)>|<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"").replace(/&#39;/g, "'")
    .replace(/\n{3,}/g, "\n\n").trim();
}

const opcoes = (secao, campo) => FICHA.repetiveis[secao]?.salvos[campo]?.opcoes ?? [];
const escolher = (secao, campo, valor, padrao = "Nenhum") => (opcoes(secao, campo).includes(valor) ? valor : padrao);
const semAcento = (t) => String(t ?? "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

function procedencia(texto) {
  const t = semAcento(texto);
  const arcana = /mago|feiticeiro|bardo/.test(t);
  const divina = /clerigo|druida|abencoado|paladino|ranger/.test(t);
  if (arcana && !divina) return "Arcana";
  if (divina && !arcana) return "Divina";
  return "Nenhum";
}

function tempoDeExecucao(texto) {
  const t = semAcento(texto);
  if (/livre/.test(t)) return "Livre";
  if (/movimento/.test(t)) return "Movimento";
  if (/completa/.test(t)) return "Completa";
  if (/padrao/.test(t)) return "Padrão";
  if (/rodada/.test(t)) return "Rodadas";
  return "Nenhum";
}

function alcance(texto) {
  const t = semAcento(texto);
  if (/pessoal/.test(t)) return "Pessoal";
  if (/toque/.test(t)) return "Toque";
  if (/ilimitado/.test(t)) return "Ilimitado";
  if (/metro|\dm\b|km/.test(t)) return "Metros";
  return "Nenhum";
}

function efeito(texto) {
  const t = semAcento(texto);
  const mapa = [["cilindro", "Cilindro"], ["cone", "Cone"], ["esfera", "Esfera"], ["linha", "Linha"],
    ["explos", "Explosão"], ["dispers", "Dispersão"], ["emana", "Emanação"], ["raio", "Raio"],
    ["objeto", "Objeto"], ["criatura", "Criatura"], ["voce", "Criatura"]];
  const achado = mapa.find(([chave]) => t.includes(chave));
  return achado ? achado[1] : (t ? "Outros" : "Nenhum");
}

function resistencia(texto) {
  const t = semAcento(texto);
  if (t.startsWith("vontade")) return "Vontade";
  if (t.startsWith("fortitude")) return "Fortitude";
  if (t.startsWith("reflexo")) return "Reflexo";
  return "Nenhum";
}

/** Talento de classe (tem a classe nas flags), racial ou geral. */
function tipoDeTalento(item) {
  if (item.flags?.tormenta13?.classe) return "Classe";
  if (/Raciais|Moreau/.test(item.system?.grupo ?? "")) return "Racial";
  return "Talento";
}

const BBA = { completo: "1", intermediario: "0.75", baixo: "0.5" };

/**
 * @param {{type: string, name: string, system: object}} item
 * @returns {{secao?: string, dados?: object, campos?: object} | null}
 *   secao+dados: nova linha em system.rep_<secao>; campos: campos da ficha a preencher.
 */
export function linhaDeItem(item) {
  const s = item.system ?? {};
  const descricao = textoDeHtml(s.descricao);
  switch (item.type) {
    case "arma": {
      const { margem, multiplicador } = parseCritico(s.critico);
      const distancia = s.tipoAtaque === "distancia";
      const hab = s.habilidadeAtaque ? `@{${s.habilidadeAtaque}_mod}` : (distancia ? "@{des_mod}" : "@{for_mod}");
      return {
        secao: "arma",
        dados: {
          xarma_nome: item.name, xarma_tipo: distancia ? "@{ataque_dis}" : "@{ataque_cac}",
          xarma_dano: s.dano || "0", xarma_habilidade: escolher("arma", "xarma_habilidade", hab, "0"),
          xarma_critico: margem, xarma_multiplicador: multiplicador,
          xarma_municao: s.municao === null || s.municao === undefined ? "0" : String(s.municao)
        }
      };
    }
    case "talento":
      return { secao: "talento", dados: { nome: item.name, tipo: tipoDeTalento(item), descricao } };
    case "magia": {
      const ciclo = Math.min(9, Math.max(0, Number(s.ciclo) || 0));
      const secao = `magias${ciclo}`;
      const detalhes = [
        s.procedencia && `Procedência: ${s.procedencia}`, s.escola && `Escola: ${s.escola}`,
        s.tempo && `Execução: ${s.tempo}`, s.alcance && `Alcance: ${s.alcance}`, s.alvo && `Alvo/Área: ${s.alvo}`,
        s.duracao && `Duração: ${s.duracao}`, s.resistencia && `Resistência: ${s.resistencia}`
      ].filter(Boolean).join("\n");
      return {
        secao,
        dados: {
          xmagias_nome: item.name, xmagias_pm: Number(s.custoPM) || 0,
          xmagias_procedencia: escolher(secao, "xmagias_procedencia", procedencia(s.procedencia)),
          xmagias_descritor: escolher(secao, "xmagias_descritor", s.escola),
          xmagias_tempo_execucao: escolher(secao, "xmagias_tempo_execucao", tempoDeExecucao(s.tempo)),
          xmagias_alcance: escolher(secao, "xmagias_alcance", alcance(s.alcance)),
          xmagias_efeito: escolher(secao, "xmagias_efeito", efeito(s.alvo)),
          xmagias_resistencia: escolher(secao, "xmagias_resistencia", resistencia(s.resistencia)),
          xmagias_dano: s.dano || "0",
          xmagias_descricao: [detalhes, descricao].filter(Boolean).join("\n\n")
        }
      };
    }
    case "equipamento":
    case "itemMagico":
      return { secao: "itens", dados: { xitem_nome: item.name, xitem_qtd: Number(s.quantidade) || 1, xitem_peso: Number(s.peso) || 0, xitem_descricao: descricao.split("\n")[0].slice(0, 250) } };
    case "classe":
      return {
        secao: "class",
        dados: {
          xclass_nome: item.name, xclasse_nivel: 1,
          // Tormenta 1.3: BBA = nível em todas as classes (a ficha ainda deixa escolher a fração).
          xclasse_bba: "1",
          xclasse_pv: escolher("class", "xclasse_pv", String(s.pvPorNivel ?? ""), "0")
        }
      };
    case "raca":
      return { campos: { raca: item.name } };
    case "armadura":
      return s.escudo
        ? { campos: { escudo: item.name, escudo_ca: Number(s.ca) || 0, escudo_equip: true } }
        : { campos: { armadura: item.name, armadura_ca: Number(s.ca) || 0, armadura_max_des: s.maxDex ?? 0,
          armadura_penalidade: Number(s.penalidade) || 0, armadura_equipado: true,
          armadura_type: /leve/i.test(s.categoria) ? "Leve" : /m[eé]dia/i.test(s.categoria) ? "Média"
            : /pesada/i.test(s.categoria) ? "Pesada" : "None" } };
    default:
      return null;
  }
}

/** BBA do compêndio como fração do Roll20 (exportado para quem preferir o valor do livro). */
export const fracaoBBA = (tipo) => BBA[tipo] ?? "1";
