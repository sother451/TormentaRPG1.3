import { FICHA } from "../roll20/campos.mjs";
import { executarMacro, macroDeArma, macroDeItem } from "../roll20/macro.mjs";
import { inteiro } from "../roll20/motor.mjs";
import { atualizacaoDeEquipar } from "../roll20/inventario.mjs";

/** Rola uma fórmula com os dados do Foundry (para o interpretador de macros). */
async function rolarNoFoundry(formula) {
  const roll = await new Roll(formula).evaluate();
  const naturais = roll.dice.flatMap((d) => d.results.filter((r) => r.active !== false).map((r) => r.result));
  return { total: roll.total, formula: roll.formula, naturais, roll };
}

const escapar = (t) => foundry.utils.escapeHTML?.(String(t)) ?? String(t);

/** Remove uma chave de um objeto num update (operador _del da v14; "-=chave" nas anteriores). */
export function apagar(caminho, chave) {
  return globalThis._del !== undefined ? { [`${caminho}.${chave}`]: globalThis._del } : { [`${caminho}.-=${chave}`]: null };
}

export class TormentaActor extends foundry.documents.Actor {
  /** @nome nas fórmulas do Foundry (iniciativa, macros): os mesmos nomes da ficha do Roll20. */
  getRollData() {
    return { ...(this.system.ficha?.dadosDeRolagem() ?? {}), recursos: this.system.recursos };
  }

  /** A barra do token mostra PV/PV máximo; editar a barra muda o campo PV da ficha. */
  async modifyTokenAttribute(attribute, value, isDelta, isBar) {
    if (attribute === "recursos.pv") {
      const atual = Number(this.system.pv) || 0;
      return this.update({ "system.pv": isDelta ? atual + value : value });
    }
    return super.modifyTokenAttribute(attribute, value, isDelta, isBar);
  }

  /* ------------------------------------------------------------------------------------------ */
  /*  Linhas das seções repetíveis                                                               */
  /* ------------------------------------------------------------------------------------------ */

  linha(secao, id) {
    return this.system.ficha?.linha(secao, id) ?? null;
  }

  async adicionarLinha(secao, dados = {}) {
    const linhas = this.system[`rep_${secao}`] ?? {};
    const ordem = Math.max(0, ...Object.values(linhas).map((l) => Number(l.ordem) || 0)) + 1;
    const id = foundry.utils.randomID();
    await this.update({ [`system.rep_${secao}.${id}`]: { ...dados, ordem } });
    return id;
  }

  async apagarLinha(secao, id) {
    // Item equipado que sai do inventário é desequipado antes (some de Ataques, Armadura etc.).
    if (secao === "itens" && this.system.rep_itens?.[id]?.xitem_equipado) await this.equiparItem(id, false);
    return this.update(apagar(`system.rep_${secao}`, id));
  }

  /** Equipa ou desequipa um item do inventário (ver module/roll20/inventario.mjs). */
  equiparItem(id, equipar) {
    const update = atualizacaoDeEquipar(this.system._source, id, equipar, { novoId: () => foundry.utils.randomID(), apagar });
    return Object.keys(update).length ? this.update(update) : null;
  }

  /* ------------------------------------------------------------------------------------------ */
  /*  Macros do Roll20                                                                            */
  /* ------------------------------------------------------------------------------------------ */

  /** Executa uma macro (texto do Roll20) e manda o resultado ao chat. */
  async executarMacro(texto, linha = null) {
    let resultado;
    try {
      resultado = await executarMacro(texto, this.system.ficha, linha, rolarNoFoundry);
    } catch (erro) {
      console.error(erro);
      ui.notifications.error(`Não foi possível rolar a macro: ${erro.message}`);
      return null;
    }
    const rolls = resultado.rolagens.map((r) => r.roll).filter((r) => r?.dice?.length);
    const html = resultado.emote
      ? `<span class="t13-emote">${escapar(this.name)} ${resultado.html}</span>`
      : resultado.html;
    const dados = {
      speaker: ChatMessage.getSpeaker({ actor: this }),
      content: `<div class="tormenta13-chat">${html}</div>`,
      rolls
    };
    if (rolls.length) dados.sound = CONFIG.sounds.dice;
    const modo = game.settings.settings.has("core.messageMode")
      ? game.settings.get("core", "messageMode") : game.settings.get("core", "rollMode");
    return ChatMessage.implementation.create(dados, { messageMode: modo, rollMode: modo });
  }

  /** Botão de rolagem fixo da ficha (testes, resistências, perícias, ataques básicos). */
  rolarBotao(chave, idLinha = null) {
    const texto = FICHA.macros[chave];
    if (!texto) return ui.notifications.warn(`Macro "${chave}" não encontrada.`);
    const secao = chave.split(":")[0];
    return this.executarMacro(texto, secao ? this.linha(secao, idLinha) : null);
  }

  /**
   * Botão de rolar de uma linha (clicked:repeating_*): gasta munição, usos, PM ou quantidade
   * como o script do Roll20 e rola a macro da linha.
   */
  async usarLinha(secao, id) {
    const dados = this.system[`rep_${secao}`]?.[id];
    if (!dados) return null;
    const caminho = `system.rep_${secao}.${id}`;

    if (secao === "arma") {
      const atual = inteiro(dados.xarma_municao);
      if (atual !== 0 && dados.xarma_tipo === "@{ataque_dis}") await this.update({ [`${caminho}.xarma_municao`]: String(atual - 1) });
      return this.executarMacro(macroDeArma(dados.macro_texto ?? "", dados.xarma_tipo), this.linha(secao, id));
    }
    if (secao === "talento") {
      const atual = inteiro(dados.usos_atual);
      if (atual !== 0) await this.update({ [`${caminho}.usos_atual`]: atual - 1 });
      return this.executarMacro(dados.macro ?? "", this.linha(secao, id));
    }
    if (/^magias\d$/.test(secao)) {
      const gasto = inteiro(dados.xmagias_pm);
      const pms = {};
      for (const [pid, pm] of Object.entries(this.system.rep_pms ?? {})) {
        if (pm.xpm_uso) pms[`system.rep_pms.${pid}.xpm_atual`] = inteiro(pm.xpm_atual) - gasto;
      }
      if (Object.keys(pms).length) await this.update(pms);
      return this.executarMacro(dados.macro_texto ?? "", this.linha(secao, id));
    }
    if (secao === "itens") {
      let atual = inteiro(dados.xitem_qtd);
      if (atual !== 0) atual--;
      await this.update({ [`${caminho}.xitem_qtd`]: atual });
      return this.executarMacro(macroDeItem(FICHA.calculados.xitem_macro_texto, atual), this.linha(secao, id));
    }
    return null;
  }
}
