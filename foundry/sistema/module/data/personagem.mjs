/**
 * Modelo de dados do personagem e do NPC: os mesmos campos da ficha do Roll20.
 * A lista de campos vem de module/roll20/campos.mjs (gerado pelo conversor).
 */
import { FICHA } from "../roll20/campos.mjs";
import { FichaRoll20 } from "../roll20/motor.mjs";

const { SchemaField, NumberField, StringField, BooleanField, TypedObjectField } = foundry.data.fields;

function campo(def) {
  if (def.tipo === "numero") return new NumberField({ required: true, nullable: true, initial: def.inicial ?? 0 });
  if (def.tipo === "marcado") return new BooleanField({ initial: Boolean(def.inicial) });
  return new StringField({ required: true, blank: true, initial: String(def.inicial ?? "") });
}

const campos = (defs) => Object.fromEntries(Object.entries(defs).map(([k, def]) => [k, campo(def)]));

export class PersonagemData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const schema = campos(FICHA.salvos);
    for (const [secao, defs] of Object.entries(FICHA.repetiveis)) {
      schema[`rep_${secao}`] = new TypedObjectField(new SchemaField({
        ordem: new NumberField({ required: true, nullable: false, initial: 0 }),
        ...campos(defs.salvos)
      }), { initial: {} });
    }
    return schema;
  }

  /** Calcula a ficha como o Roll20 (fórmulas + scripts). */
  prepareDerivedData() {
    super.prepareDerivedData();
    this.ficha = new FichaRoll20(this.toObject(false), { nome: this.parent?.name ?? "" });
    // Barra do token: PV atual (campo "PV" da ficha) e máximo (campo calculado "PV_max").
    this.recursos = { pv: { value: Number(this.pv) || 0, max: this.ficha.numero("pv_max") } };
  }
}
