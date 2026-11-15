import { TIPOS_BBA, TIPOS_ATAQUE, HABILIDADES } from "../config.mjs";

const { SchemaField, NumberField, StringField, BooleanField, HTMLField } = foundry.data.fields;

const int = (initial = 0, options = {}) =>
  new NumberField({ required: true, nullable: false, integer: true, initial, ...options });
const texto = () => new StringField({ required: true, blank: true, initial: "" });
const decimal = (initial = 0) => new NumberField({ required: true, nullable: false, initial, min: 0 });

class ItemBase extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return { descricao: new HTMLField({ required: true, blank: true, initial: "", label: "Descrição" }) };
  }
}

export class RacaData extends ItemBase {}

export class ClasseData extends ItemBase {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      nivel: int(1, { min: 0, max: 20 }),
      inicial: new BooleanField({ initial: false }),
      bba: new StringField({ required: true, blank: false, initial: "completo", choices: TIPOS_BBA }),
      pvInicial: int(0, { min: 0 }),
      pvPorNivel: int(0, { min: 0 }),
      // PM = base + mod. de conjuração (ficha) + porNivel a cada nível após o 1º. base nula = sem PM.
      pm: new SchemaField({
        base: int(0, { nullable: true, initial: null }),
        porNivel: int(0, { nullable: true, initial: null }),
        atual: int(0, { min: 0 })
      })
    };
  }
}

export class TalentoData extends ItemBase {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      grupo: texto(), prerequisitos: texto(), beneficio: texto(),
      usos: new SchemaField({ atual: int(0, { min: 0 }), max: int(0, { min: 0 }) })
    };
  }
}

export class MagiaData extends ItemBase {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      ciclo: int(1, { min: 0, max: 9 }),
      procedencia: texto(), escola: texto(), tempo: texto(), alcance: texto(), alvo: texto(),
      duracao: texto(), resistencia: texto(),
      custoPM: int(0, { min: 0 }),
      dano: texto(),               // fórmula livre, ex.: 3d6 ou 2d8+@mdc
      reserva: texto(),            // id da classe que paga o PM (vazio = primeira reserva)
      preparada: new BooleanField({ initial: false })
    };
  }
}

export class ArmaData extends ItemBase {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      categoria: texto(), propriedades: texto(), tipoDano: texto(),
      tipoAtaque: new StringField({ required: true, blank: false, initial: "corpo", choices: TIPOS_ATAQUE }),
      habilidadeAtaque: new StringField({ required: true, blank: true, initial: "", choices: { "": "Automática", ...Object.fromEntries(Object.entries(HABILIDADES).map(([k, v]) => [k, v.label])) } }),
      dano: new StringField({ required: true, blank: true, initial: "1d6" }),
      critico: new StringField({ required: true, blank: true, initial: "20/x2" }),
      bonusAtaque: texto(),         // fórmula livre, ex.: 1 + @furia
      bonusDano: texto(),
      municao: int(0, { nullable: true, initial: null, min: 0 }),
      peso: decimal(), quantidade: int(1, { min: 0 }), preco: texto(),
      equipada: new BooleanField({ initial: false })
    };
  }
}

export class ArmaduraData extends ItemBase {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      escudo: new BooleanField({ initial: false }),
      categoria: texto(),
      ca: int(0),
      maxDex: int(0, { nullable: true, initial: null }),
      penalidade: int(0),
      peso: decimal(), quantidade: int(1, { min: 0 }), preco: texto(),
      equipada: new BooleanField({ initial: false })
    };
  }
}

export class EquipamentoData extends ItemBase {
  static defineSchema() {
    return { ...super.defineSchema(), peso: decimal(), quantidade: int(1, { min: 0 }), preco: texto() };
  }
}

export class ItemMagicoData extends ItemBase {
  static defineSchema() {
    return { ...super.defineSchema(), peso: decimal(), quantidade: int(1, { min: 0 }), preco: texto(), equipado: new BooleanField({ initial: false }) };
  }
}
