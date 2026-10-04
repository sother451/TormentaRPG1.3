import type { ClassDetail } from '../class-details/schema';

const modules = import.meta.glob('./classes/*.json', {
  eager: true,
  import: 'default'
}) as Record<string, ClassDetail>;

export const homebrewClassDetails: ClassDetail[] = Object.values(modules)
  .map((entry) => ({
    ...entry,
    origin: 'homebrew' as const,
    family: entry.kind === 'prestige' ? 'Homebrew de Prestígio' : 'Homebrew'
  }))
  .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
