import { SYSTEM_ID, HABILIDADES, TIPOS_BBA, TIPOS_ATAQUE } from "../config.mjs";

const { HandlebarsApplicationMixin } = foundry.applications.api;
const { ItemSheetV2 } = foundry.applications.sheets;

export class TormentaItemSheet extends HandlebarsApplicationMixin(ItemSheetV2) {
  static DEFAULT_OPTIONS = {
    classes: ["tormenta13", "item-ficha"],
    position: { width: 540, height: 620 },
    window: { resizable: true },
    form: { submitOnChange: true }
  };

  static PARTS = {
    corpo: { template: `systems/${SYSTEM_ID}/templates/item/item.hbs` }
  };

  async _prepareContext(options) {
    const contexto = await super._prepareContext(options);
    const item = this.item;
    Object.assign(contexto, {
      item, sys: item.system, fonte: item.system._source, campos: item.system.schema.fields,
      tipo: item.type, editavel: this.isEditable,
      tiposBBA: Object.entries(TIPOS_BBA).map(([id, label]) => ({ id, label })),
      tiposAtaque: Object.entries(TIPOS_ATAQUE).map(([id, label]) => ({ id, label })),
      habilidadesAtaque: [{ id: "", label: "Automática" }, ...Object.entries(HABILIDADES).map(([id, h]) => ({ id, label: h.label }))],
      ehEquipavel: ["arma", "armadura", "equipamento", "itemMagico"].includes(item.type)
    });
    contexto.enriquecido = {
      descricao: await foundry.applications.ux.TextEditor.implementation.enrichHTML(item.system.descricao, {
        relativeTo: item, rollData: item.actor?.getRollData?.() ?? {}
      })
    };
    return contexto;
  }
}
