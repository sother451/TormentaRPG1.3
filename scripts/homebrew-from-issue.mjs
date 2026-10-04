import fs from 'node:fs';
import path from 'node:path';

const body = process.env.ISSUE_BODY || '';
const issueNumber = Number(process.env.ISSUE_NUMBER || 0);
const issueAuthor = process.env.ISSUE_AUTHOR || '';

const block = body.match(/```json\s*([\s\S]*?)```/i) || body.match(/```\s*([\s\S]*?)```/);
if (!block) throw new Error('Nenhum bloco JSON foi encontrado na submissão.');

let data;
try {
  data = JSON.parse(block[1]);
} catch {
  throw new Error('O JSON da classe é inválido.');
}

const slugify = (value) => String(value || '')
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const normalizeBba = (value) => String(value || '').trim();
const bbaAtLevel = (level, type) => {
  const value = type === 'half'
    ? Math.floor(level / 2)
    : type === 'three-quarters'
      ? Math.floor(level * 3 / 4)
      : level;
  return `+${value}`;
};

const inferBbaType = (rows = []) => {
  for (const type of ['full', 'half', 'three-quarters']) {
    if (rows.length && rows.every((row, index) => normalizeBba(row?.[1]) === bbaAtLevel(index + 1, type))) return type;
  }
  return null;
};

const classesSource = fs.readFileSync(path.join(process.cwd(), 'src/data/classes.ts'), 'utf8');
const officialFamilies = [...new Set([
  ...[...classesSource.matchAll(/family:'([^']+)'/g)].map((match) => match[1]),
  'Classes de Prestígio'
])];

const origin = data.origin === 'tormenta-1.3' ? 'tormenta-1.3' : 'homebrew';
const errors = [];

if (!['basic','prestige'].includes(data.kind)) errors.push('kind inválido');
if (!String(data.name || '').trim()) errors.push('nome ausente');
if (!String(data.author || '').trim()) errors.push('autor ausente');
if (!data.basics || !String(data.basics.hitPoints || '').trim()) errors.push('Pontos de Vida ausentes');
if (!data.progression || !Array.isArray(data.progression.rows)) errors.push('progressão ausente');

const expectedLevels = data.kind === 'prestige' ? 10 : 20;
if (Array.isArray(data.progression?.rows) && data.progression.rows.length !== expectedLevels) {
  errors.push(`a progressão deve conter ${expectedLevels} níveis`);
}

data.bbaType = ['full','half','three-quarters'].includes(data.bbaType)
  ? data.bbaType
  : inferBbaType(data.progression?.rows || []);

if (!data.bbaType) errors.push('progressão de BBA inválida');

if (Array.isArray(data.progression?.rows) && data.bbaType) {
  const invalidBba = data.progression.rows.some((row, index) => normalizeBba(row?.[1]) !== bbaAtLevel(index + 1, data.bbaType));
  if (invalidBba) errors.push('os valores de BBA não correspondem à progressão escolhida');
}

if (origin === 'tormenta-1.3' && !officialFamilies.includes(String(data.family || '').trim())) {
  errors.push('classe oficial precisa usar uma família já existente');
}

if (data.kind === 'prestige' && (!Array.isArray(data.requirements) || data.requirements.length === 0)) {
  errors.push('classe de prestígio sem requisitos');
}
if (!Array.isArray(data.sections)) errors.push('habilidades inválidas');
if (!Array.isArray(data.classTalents)) errors.push('talentos de classe inválidos');
if (Array.isArray(data.sections) && data.sections.some(item => !item?.title || !Array.isArray(item.paragraphs) || !item.paragraphs.join('').trim())) {
  errors.push('há habilidade sem nome ou descrição');
}
if (Array.isArray(data.classTalents) && data.classTalents.some(item => !item?.name || !Array.isArray(item.paragraphs) || !item.paragraphs.join('').trim())) {
  errors.push('há talento sem nome ou descrição');
}

const allowedTalentLevels = [4, 8, 12, 16, 20];
if (data.kind === 'basic' && Array.isArray(data.classTalents)) {
  if (data.classTalents.length !== 15) errors.push('classe base deve possuir exatamente 15 Talentos de Classe');
  if (data.classTalents.some(item => !allowedTalentLevels.includes(Number(item.prerequisiteLevel)))) {
    errors.push('Talentos de Classe só podem usar os patamares 4, 8, 12, 16 ou 20');
  }
  for (const level of allowedTalentLevels) {
    const talentsAtLevel = data.classTalents.filter(item => Number(item.prerequisiteLevel) === level);
    if (talentsAtLevel.length !== 3) errors.push(`o patamar de ${level}º nível deve possuir exatamente 3 Talentos de Classe`);
  }
}

if (data.kind === 'prestige' && Array.isArray(data.classTalents) && data.classTalents.length > 0) {
  errors.push('classes de prestígio não podem possuir Talentos de Classe');
}

if (errors.length) throw new Error('Submissão rejeitada: ' + errors.join('; '));

const slug = slugify(data.name);
if (!slug) throw new Error('Não foi possível gerar slug para a classe.');

data.slug = slug;
data.origin = origin;
data.family = origin === 'homebrew'
  ? (data.kind === 'prestige' ? 'Homebrew de Prestígio' : 'Homebrew')
  : String(data.family).trim();
data.status = 'complete';
data.sourceDocId = `github-issue-${issueNumber}`;
data.sourceTitle = origin === 'homebrew' ? 'Homebrew da comunidade' : (String(data.sourceTitle || '').trim() || 'Classe oficial');
data.reviewIssue = issueNumber;
data.editorialNotes = Array.isArray(data.editorialNotes) ? data.editorialNotes : [];
data.author = String(data.author).trim();
data.submittedBy = issueAuthor;

data.progression.headers = ['Nível','BBA','Habilidades'];

data.sections = data.sections.map((section) => {
  const { level, ...rest } = section;
  return rest;
});

if (data.kind === 'prestige') {
  data.classTalents = [];
} else {
  const className = String(data.name).trim();
  data.classTalents = data.classTalents.map((talent, index) => {
    const level = Number(talent.prerequisiteLevel);
    const extra = String(talent.prerequisite || '')
      .replace(/^\d+º\s+Nível\s+de\s+.+?(?:\.\s*|$)/i, '')
      .trim();

    return {
      ...talent,
      id: talent.id || `talento-${slugify(talent.name || `talento-${index + 1}`)}-${index + 1}`,
      prerequisiteLevel: level,
      prerequisite: extra
        ? `${level}º Nível de ${className}. ${extra}`
        : `${level}º Nível de ${className}.`
    };
  });
}

const targetRoot = origin === 'homebrew'
  ? path.join(process.cwd(), 'src/data/homebrew/classes')
  : path.join(process.cwd(), 'src/data/official/classes');

fs.mkdirSync(targetRoot, { recursive: true });
const target = path.join(targetRoot, `${slug}.json`);
if (fs.existsSync(target)) throw new Error(`Já existe uma classe com o slug "${slug}" neste catálogo.`);

fs.writeFileSync(target, JSON.stringify(data, null, 2) + '\n', 'utf8');
console.log(target);
