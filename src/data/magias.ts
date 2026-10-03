import catalog from './spells-base.json';
import { newSpells, spellAlterations, type NewSpell } from './magias-t13';

export interface BaseSpell {
  id: string;
  name: string;
  tags: string[];
  url: string;
  fields: Record<string,string>;
  description: string;
  source: string;
  subtitle: string;
  levels: number[];
}

export const baseSpellCatalog = catalog as {
  meta: Record<string, unknown>;
  filters: Array<{id:string;options:Array<{value:string;label:string}>}>;
  spells: BaseSpell[];
};

export const baseSpells = baseSpellCatalog.spells;

const normalizeSpellName = (value: string) =>
  value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

export const alterationsBySpellName = new Map(
  spellAlterations.map((entry) => [normalizeSpellName(entry.name), entry])
);

export const newSpellById = new Map(newSpells.map((spell) => [spell.id, spell]));

export const allSpellCount = baseSpells.length + newSpells.length;

export function getSpellAlteration(name: string) {
  return alterationsBySpellName.get(normalizeSpellName(name));
}

export function isNewSpell(value: BaseSpell | NewSpell): value is NewSpell {
  return 'lists' in value;
}
