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
} catch (error) {
  throw new Error('O JSON da classe é inválido.');
}

const slugify = (value) => String(value || '')
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

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
if (errors.length) throw new Error('Submissão rejeitada: ' + errors.join('; '));

const slug = slugify(data.name);
if (!slug) throw new Error('Não foi possível gerar slug para a classe.');

data.slug = slug;
data.origin = 'homebrew';
data.family = 'Homebrew';
data.status = 'complete';
data.sourceDocId = `github-issue-${issueNumber}`;
data.sourceTitle = 'Homebrew da comunidade';
data.reviewIssue = issueNumber;
data.editorialNotes = Array.isArray(data.editorialNotes) ? data.editorialNotes : [];
data.author = String(data.author).trim();
data.submittedBy = issueAuthor;

data.progression.headers = ['Nível','BBA','Habilidades'];

const targetDir = path.join(process.cwd(), 'src/data/homebrew/classes');
fs.mkdirSync(targetDir, { recursive: true });
const target = path.join(targetDir, `${slug}.json`);
if (fs.existsSync(target)) throw new Error(`Já existe uma classe Homebrew com o slug "${slug}".`);

fs.writeFileSync(target, JSON.stringify(data, null, 2) + '\n', 'utf8');
console.log(target);
