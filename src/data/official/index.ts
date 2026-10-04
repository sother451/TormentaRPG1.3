import type { ClassDetail } from '../class-details/schema';

const modules = import.meta.glob('./classes/*.json', {
  eager: true,
  import: 'default'
}) as Record<string, ClassDetail>;

export const officialEditorClassDetails: ClassDetail[] = Object.values(modules)
  .map((entry) => ({
    ...entry,
    origin: 'tormenta-1.3' as const
  }))
  .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
