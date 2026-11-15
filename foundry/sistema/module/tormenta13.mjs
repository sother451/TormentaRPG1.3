import { SYSTEM_ID } from "./config.mjs";
import * as config from "./config.mjs";
import { CharacterData } from "./data/character.mjs";
import { RacaData, ClasseData, TalentoData, MagiaData, ArmaData, ArmaduraData, EquipamentoData, ItemMagicoData } from "./data/items.mjs";
import { TormentaActor } from "./documents/actor.mjs";
import { TormentaItem } from "./documents/item.mjs";
import { TormentaCharacterSheet } from "./sheets/character-sheet.mjs";
import { TormentaItemSheet } from "./sheets/item-sheet.mjs";
import { importarCompendios, oferecerImportacao, carregarJSON } from "./importador.mjs";

/** Ícones do Foundry usados nas condições (as demais ficam com o ícone padrão). */
const ICONES_CONDICAO = {
  abalado: "icons/svg/terror.svg", apavorado: "icons/svg/terror.svg", atordoado: "icons/svg/daze.svg",
  caido: "icons/svg/falling.svg", cego: "icons/svg/blind.svg", surdo: "icons/svg/deaf.svg",
  enredado: "icons/svg/net.svg", agarrado: "icons/svg/net.svg", paralisado: "icons/svg/paralysis.svg",
  inconsciente: "icons/svg/unconscious.svg", indefeso: "icons/svg/unconscious.svg", sangrando: "icons/svg/blood.svg",
  enjoado: "icons/svg/poison.svg", ofuscado: "icons/svg/blind.svg", fatigado: "icons/svg/downgrade.svg",
  exausto: "icons/svg/downgrade.svg", lento: "icons/svg/downgrade.svg", incorporeo: "icons/svg/ghost.svg"
};

Hooks.once("init", () => {
  console.log(`${SYSTEM_ID} | Iniciando o sistema Tormenta RPG 1.3`);
  CONFIG.TORMENTA13 = config;

  CONFIG.Actor.documentClass = TormentaActor;
  CONFIG.Item.documentClass = TormentaItem;

  CONFIG.Actor.dataModels = { character: CharacterData, npc: CharacterData };
  CONFIG.Item.dataModels = {
    raca: RacaData, classe: ClasseData, talento: TalentoData, magia: MagiaData,
    arma: ArmaData, armadura: ArmaduraData, equipamento: EquipamentoData, itemMagico: ItemMagicoData
  };

  // Iniciativa = perícia Iniciativa (d20 + valor calculado na ficha).
  CONFIG.Combat.initiative = { formula: "1d20 + @iniciativa", decimals: 2 };

  const { DocumentSheetConfig } = foundry.applications.apps;
  DocumentSheetConfig.registerSheet(foundry.documents.Actor, SYSTEM_ID, TormentaCharacterSheet, {
    types: ["character", "npc"], makeDefault: true, label: "Ficha Tormenta 1.3"
  });
  DocumentSheetConfig.registerSheet(foundry.documents.Item, SYSTEM_ID, TormentaItemSheet, {
    makeDefault: true, label: "Ficha de item Tormenta 1.3"
  });

  game.settings.register(SYSTEM_ID, "compendiosImportados", {
    scope: "world", config: false, type: Boolean, default: false
  });
  // Caixa nas configurações: marque e salve para (re)importar os compêndios.
  game.settings.register(SYSTEM_ID, "importarAgora", {
    name: "Importar compêndios do Tormenta 1.3",
    hint: "Marque e salve para importar (ou completar) os compêndios deste mundo. Itens já importados não são duplicados.",
    scope: "world", config: true, type: Boolean, default: false,
    onChange: async (valor) => {
      if (!valor) return;
      await game.settings.set(SYSTEM_ID, "importarAgora", false);
      await importarCompendios();
    }
  });

  game.tormenta13 = { importarCompendios };
});

/** Condições do compendium viram efeitos de status que podem ser aplicados nos tokens. */
Hooks.once("setup", async () => {
  try {
    const condicoes = await carregarJSON("condicoes");
    const morto = CONFIG.statusEffects.find((s) => s.id === "dead");
    CONFIG.statusEffects = [
      ...(morto ? [morto] : []),
      ...condicoes.map((c) => ({
        id: c.id, name: c.name, img: ICONES_CONDICAO[c.id] ?? "icons/svg/aura.svg", description: c.description
      }))
    ];
    CONFIG.specialStatusEffects.BLIND = "cego";
  } catch (erro) {
    console.warn(`${SYSTEM_ID} | Não foi possível carregar as condições`, erro);
  }
});

Hooks.once("ready", () => oferecerImportacao());
