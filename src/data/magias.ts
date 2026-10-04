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

export const consolidatedSpellVariants = [
  // A alteração 1.3 transforma versões antigas em aprimoramentos/versões da magia-base.
  { id:'arma-elemental-em-massa', baseId:'arma-elemental' },
  { id:'arma-magica-maior', baseId:'arma-magica' },
  { id:'arma-magica-suprema', baseId:'arma-magica' },
  { id:'armadura-arcana-maior', baseId:'armadura-arcana' },
  { id:'armadura-arcana-suprema', baseId:'armadura-arcana' },
  { id:'ataque-certeiro-maior', baseId:'ataque-certeiro' },
  { id:'curar-ferimentos-moderados', baseId:'curar-ferimentos-leves' },
  { id:'curar-ferimentos-graves', baseId:'curar-ferimentos-leves' },
  { id:'curar-ferimentos-criticos', baseId:'curar-ferimentos-leves' },
  { id:'escudo-arcano-maior', baseId:'escudo-arcano' },
  { id:'escudo-arcano-supremo', baseId:'escudo-arcano' },
  { id:'espirito-animal-ii', baseId:'espirito-animal-i' },
  { id:'espirito-animal-iii', baseId:'espirito-animal-i' },
  { id:'espirito-animal-iv', baseId:'espirito-animal-i' },
  { id:'espirito-animal-v', baseId:'espirito-animal-i' },
  { id:'invocar-monstro-ii', baseId:'invocar-monstro-i' },
  { id:'invocar-monstro-iii', baseId:'invocar-monstro-i' },
  { id:'invocar-monstro-iv', baseId:'invocar-monstro-i' },
  { id:'invocar-monstro-v', baseId:'invocar-monstro-i' },
  { id:'invocar-monstro-vi', baseId:'invocar-monstro-i' },
  { id:'invocar-monstro-vii', baseId:'invocar-monstro-i' },
  { id:'invocar-monstro-viii', baseId:'invocar-monstro-i' },
  { id:'invocar-monstro-ix', baseId:'invocar-monstro-i' },
  { id:'magia-curinga-ii', baseId:'magia-curinga-i' },
  { id:'magia-curinga-iii', baseId:'magia-curinga-i' },
  { id:'magia-curinga-iv', baseId:'magia-curinga-i' },
  { id:'magia-curinga-v', baseId:'magia-curinga-i' },
  { id:'magia-curinga-vi', baseId:'magia-curinga-i' },
  { id:'magia-curinga-vii', baseId:'magia-curinga-i' },
  { id:'magia-curinga-viii', baseId:'magia-curinga-i' },
  { id:'infligir-ferimentos-moderados', baseId:'infligir-ferimentos-leves' },
  { id:'infligir-ferimentos-graves', baseId:'infligir-ferimentos-leves' },
  { id:'infligir-ferimentos-criticos', baseId:'infligir-ferimentos-leves' },
  { id:'pedra-encantada-maior', baseId:'pedra-encantada' },
  { id:'presa-magica-maior', baseId:'presa-magica' },
  { id:'presa-magica-suprema', baseId:'presa-magica' },
  { id:'choque-estatico-maior', baseId:'choque-estatico' },
  { id:'combustao-em-massa', baseId:'combustao' }
] as const;

const consolidatedSpellIds = new Set(consolidatedSpellVariants.map((entry) => entry.id));

export const rawBaseSpellCount = baseSpellCatalog.spells.length;
export const consolidatedSpellVariantCount = consolidatedSpellVariants.length;
export const baseSpells = baseSpellCatalog.spells.filter((spell) => !consolidatedSpellIds.has(spell.id));

const normalizeSpellName = (value: string) =>
  value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

export const alterationsBySpellName = new Map(
  spellAlterations.map((entry) => [normalizeSpellName(entry.name), entry])
);

const alterationAliases: Record<string,string> = {
  'detectar o mal bem caos ordem': 'detectar mal bem caos ordem',
  'espirito animal i': 'espirito animal',
  'invocar monstro i': 'invocar monstro',
  'magia curinga i': 'magia curinga'
};

export const newSpellById = new Map(newSpells.map((spell) => [spell.id, spell]));

export const allSpellCount = baseSpells.length + newSpells.length;

export function getSpellAlteration(name: string) {
  const normalized = normalizeSpellName(name);
  return alterationsBySpellName.get(normalized)
    ?? alterationsBySpellName.get(alterationAliases[normalized] ?? '');
}

export function isNewSpell(value: BaseSpell | NewSpell): value is NewSpell {
  return 'lists' in value;
}
