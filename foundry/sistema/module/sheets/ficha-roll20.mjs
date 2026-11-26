/**
 * Ficha do personagem com o visual e o comportamento da ficha do Roll20.
 * O template (templates/actor/ficha-roll20.hbs) e o CSS são gerados pelo conversor a partir do
 * HTML/CSS originais; aqui ficam só os comportamentos (abas, botões, seções repetíveis).
 */
import { SYSTEM_ID } from "../config.mjs";
import { FichaRoll20 } from "../roll20/motor.mjs";
import { linhaDeItem } from "../roll20/do-item.mjs";
import { importarDoRoll20 } from "../roll20/importar.mjs";
import { apagar } from "../documents/actor.mjs";

const { HandlebarsApplicationMixin, DialogV2 } = foundry.applications.api;
const { ActorSheetV2 } = foundry.applications.sheets;

export class FichaRoll20Sheet extends HandlebarsApplicationMixin(ActorSheetV2) {
  /** Estado só da interface (no Roll20 eram atributos escondidos). */
  ui = { aba: "personagem", tab_magias: 1, tab_filtro: 0, filtro_cor: 0 };

  static DEFAULT_OPTIONS = {
    classes: ["tormenta13-r20"],
    position: { width: 900, height: 860 },
    window: {
      resizable: true,
      controls: [{ action: "importarRoll20", icon: "fa-solid fa-file-import", label: "Importar do Roll20", ownership: "OWNER" }]
    },
    form: { submitOnChange: true, closeOnSubmit: false },
    actions: {
      aba: FichaRoll20Sheet.#aba,
      rolar: FichaRoll20Sheet.#rolar,
      repRolar: FichaRoll20Sheet.#repRolar,
      repAdicionar: FichaRoll20Sheet.#repAdicionar,
      repApagar: FichaRoll20Sheet.#repApagar,
      abrir_grimorio: FichaRoll20Sheet.#abrirGrimorio,
      abrir_filtro: FichaRoll20Sheet.#abrirFiltro,
      filtrar: FichaRoll20Sheet.#filtrar,
      importarRoll20: FichaRoll20Sheet.#importarRoll20
    }
  };

  static PARTS = {
    ficha: { template: `systems/${SYSTEM_ID}/templates/actor/ficha-roll20.hbs`, scrollable: [""] }
  };

  async _prepareContext(options) {
    const contexto = await super._prepareContext(options);
    const fonte = this.actor.system.toObject(false);
    const ficha = new FichaRoll20(fonte, { nome: this.actor.name, filtrando: this.ui.filtro_cor === 1 });
    const { v, b, reps } = ficha.paraTemplate(fonte);
    return Object.assign(contexto, { actor: this.actor, v, b, reps, ui: this.ui, editavel: this.isEditable });
  }

  /**
   * Campos que aparecem mais de uma vez na ficha do Roll20 (ex.: a caixa "treinada" escondida que o CSS
   * consulta, as magias no grimório e nas preparadas): só uma cópia vai no formulário; as outras
   * ("espelhos", com data-campo) salvam por conta própria.
   */
  _onRender(context, options) {
    super._onRender(context, options);
    for (const campo of this.element.querySelectorAll("[data-campo]")) {
      campo.addEventListener("change", (event) => {
        event.stopPropagation();
        if (!this.isEditable) return;
        let valor = campo.value;
        if (campo.type === "checkbox") valor = campo.checked;
        else if (campo.type === "number") valor = campo.value === "" ? null : Number(campo.value);
        this.actor.update({ [campo.dataset.campo]: valor });
      });
    }
  }

  /** Linha (seção e id) do elemento clicado. */
  static #linhaDe(alvo) {
    const item = alvo.closest(".repitem");
    const secao = alvo.closest(".repcontainer")?.dataset.secao ?? alvo.dataset.secao;
    return { secao, id: item?.dataset.linha ?? null };
  }

  static #aba(event, alvo) {
    this.ui.aba = alvo.dataset.aba;
    // As abas são o "truque" de CSS do Roll20: basta trocar o valor dos campos escondidos.
    for (const campo of this.element.querySelectorAll(".sheet-tabstoggle")) campo.setAttribute("value", this.ui.aba);
  }

  static #rolar(event, alvo) {
    const { id } = FichaRoll20Sheet.#linhaDe(alvo);
    return this.actor.rolarBotao(alvo.dataset.macro, id);
  }

  static #repRolar(event, alvo) {
    const { secao, id } = FichaRoll20Sheet.#linhaDe(alvo);
    return this.actor.usarLinha(secao, id);
  }

  static #repAdicionar(event, alvo) {
    if (!this.isEditable) return;
    return this.actor.adicionarLinha(alvo.dataset.secao);
  }

  static async #repApagar(event, alvo) {
    if (!this.isEditable) return;
    const { secao, id } = FichaRoll20Sheet.#linhaDe(alvo);
    const ok = await DialogV2.confirm({
      window: { title: "Apagar linha" }, content: "<p>Apagar esta linha da ficha?</p>", rejectClose: false
    });
    if (ok) return this.actor.apagarLinha(secao, id);
  }

  static #abrirGrimorio() {
    this.ui.tab_magias = this.ui.tab_magias === 1 ? 0 : 1;
    this.render();
  }

  static #abrirFiltro() {
    this.ui.tab_filtro = this.ui.tab_filtro === 1 ? 0 : 1;
    this.render();
  }

  static #filtrar() {
    this.ui.filtro_cor = this.ui.filtro_cor === 1 ? 0 : 1;
    this.render();
  }

  /** Arrastar do compêndio: o item vira uma linha da ficha (não um item embutido). */
  async _onDropItem(event, item) {
    if (!this.actor.isOwner) return null;
    const r = linhaDeItem(item);
    if (!r) {
      ui.notifications.warn(`A ficha não tem onde colocar itens do tipo "${item.type}".`);
      return null;
    }
    if (r.campos) {
      await this.actor.update(Object.fromEntries(Object.entries(r.campos).map(([k, v]) => [`system.${k}`, v])));
    } else {
      await this.actor.adicionarLinha(r.secao, r.dados);
    }
    ui.notifications.info(`${item.name} adicionado à ficha.`);
    return null;
  }

  /** Importa um personagem exportado do Roll20 (JSON), substituindo os dados desta ficha. */
  static async #importarRoll20() {
    const conteudo = `
      <p>Escolha o arquivo <b>.json</b> exportado do Roll20 (VTT Enhancement Suite → Export) ou cole o conteúdo.
      <b>Os dados atuais desta ficha serão substituídos.</b></p>
      <input type="file" name="arquivo" accept=".json,application/json">
      <textarea name="texto" rows="6" style="width:100%" placeholder="...ou cole o JSON aqui"></textarea>`;
    const resposta = await DialogV2.prompt({
      window: { title: `Importar do Roll20: ${this.actor.name}` },
      content: conteudo,
      ok: {
        label: "Importar",
        callback: async (event, botao) => {
          const form = botao.form;
          const arquivo = form.elements.arquivo.files?.[0];
          return arquivo ? arquivo.text() : form.elements.texto.value;
        }
      },
      rejectClose: false
    });
    if (!resposta) return;

    let importado;
    try {
      importado = importarDoRoll20(resposta);
    } catch (erro) {
      return ui.notifications.error(`Não foi possível ler o arquivo: ${erro.message}`);
    }
    // Apaga as linhas atuais das seções repetíveis antes de gravar as do Roll20.
    const limpeza = {};
    for (const chave of Object.keys(this.actor.system._source)) {
      if (!chave.startsWith("rep_")) continue;
      for (const id of Object.keys(this.actor.system._source[chave] ?? {})) Object.assign(limpeza, apagar(`system.${chave}`, id));
    }
    if (Object.keys(limpeza).length) await this.actor.update(limpeza);
    const dados = { name: importado.name, system: importado.system };
    if (importado.img) dados.img = importado.img;
    await this.actor.update(dados);
    ui.notifications.info(`Importado do Roll20: ${importado.name}.`
      + (importado.ignorados.length ? ` ${importado.ignorados.length} atributos sem campo equivalente foram ignorados (veja o console).` : ""));
    if (importado.ignorados.length) console.log("tormenta13 | Atributos do Roll20 ignorados:", importado.ignorados);
  }
}
