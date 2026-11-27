import { SYSTEM_ID } from "./config.mjs";
import * as config from "./config.mjs";
import { PersonagemData } from "./data/personagem.mjs";
import { RacaData, ClasseData, TalentoData, MagiaData, ArmaData, ArmaduraData, EquipamentoData, ItemMagicoData } from "./data/items.mjs";
import { TormentaActor } from "./documents/actor.mjs";
import { TormentaItem } from "./documents/item.mjs";
import { FichaRoll20Sheet } from "./sheets/ficha-roll20.mjs";
import { TormentaItemSheet } from "./sheets/item-sheet.mjs";
import { importarDoRoll20 } from "./roll20/importar.mjs";

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

  // Personagem e NPC usam a ficha do Roll20 (mesmos campos e fórmulas).
  CONFIG.Actor.dataModels = { character: PersonagemData, npc: PersonagemData };
  CONFIG.Item.dataModels = {
    raca: RacaData, classe: ClasseData, talento: TalentoData, magia: MagiaData,
    arma: ArmaData, armadura: ArmaduraData, equipamento: EquipamentoData, itemMagico: ItemMagicoData
  };
  CONFIG.Actor.trackableAttributes = {
    character: { bar: ["recursos.pv"], value: [] },
    npc: { bar: ["recursos.pv"], value: [] }
  };

  // Iniciativa = perícia Iniciativa da ficha.
  CONFIG.Combat.initiative = { formula: "1d20 + @iniciativa", decimals: 2 };

  const { DocumentSheetConfig } = foundry.applications.apps;
  DocumentSheetConfig.registerSheet(foundry.documents.Actor, SYSTEM_ID, FichaRoll20Sheet, {
    types: ["character", "npc"], makeDefault: true, label: "Ficha Tormenta 1.3 (Roll20)"
  });
  DocumentSheetConfig.registerSheet(foundry.documents.Item, SYSTEM_ID, TormentaItemSheet, {
    makeDefault: true, label: "Ficha de item Tormenta 1.3"
  });

  // Parte da ficha usada como {{> ...}} dentro do template gerado
  foundry.applications.handlebars.loadTemplates([`systems/${SYSTEM_ID}/templates/actor/progressao.hbs`]);

  game.tormenta13 = { importarDoRoll20 };
});

/** Condições do compendium viram efeitos de status que podem ser aplicados nos tokens. */
Hooks.once("setup", async () => {
  try {
    const resposta = await fetch(`systems/${SYSTEM_ID}/data/condicoes.json`);
    const condicoes = await resposta.json();
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

/**
 * Condição colocada ou tirada do token (efeito de status): as penalidades entram/saem da tabela Modificadores
 * (module/roll20/condicoes.mjs). Só no cliente de quem fez a mudança.
 */
for (const evento of ["createActiveEffect", "updateActiveEffect", "deleteActiveEffect"]) {
  Hooks.on(evento, (efeito, _opcoes, userId) => {
    if (userId !== game.user.id) return;
    const ator = efeito.parent;
    if (ator instanceof foundry.documents.Actor) ator.sincronizarBonusDeTalentos?.();
  });
}
