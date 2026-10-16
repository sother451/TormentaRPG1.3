# Documentação Completa do Projeto — Tormenta RPG 1.3

> Documento de handoff técnico e editorial para humanos e IAs.
>
> Estado documentado em: 2026-10-16
>
> Repositório: `sother451/TormentaRPG1.3`
>
> Site público: `https://sother451.github.io/TormentaRPG1.3/`

---

## 1. O que é este projeto

O projeto é uma wiki/compêndio web para **Tormenta RPG 1.3 — SugarVerse**. O objetivo é transformar regras, tabelas e conteúdo de referência do projeto 1.3 em páginas navegáveis, pesquisáveis e rápidas de consultar durante o jogo.

A aplicação não é uma reprodução genérica de Tormenta RPG. Ela representa uma revisão própria chamada **Tormenta RPG 1.3**.

### Regra editorial mais importante

**Tormenta RPG 1.3 é a única fonte normativa de regras da wiki.**

Livros antigos, suplementos oficiais, sites externos e material de Tormenta RPG tradicional podem ser usados para:
- referência visual;
- comparação;
- preenchimento de catálogos quando isso tiver sido explicitamente aprovado;
- sistemas externos que o projeto decidiu incorporar de forma declarada.

Eles **não devem substituir silenciosamente** uma regra de Tormenta 1.3.

Quando existir conflito:
1. Tormenta RPG 1.3 vence;
2. conteúdo explicitamente autorizado pelo projeto vem depois;
3. demais fontes servem apenas como referência.

### Exceção atualmente aprovada

A **Forja de Equipamentos** mistura duas origens de forma intencional e explícita:
- arma/armadura-base, preço-base, materiais, bônus mágico, slots e encantamentos: **Tormenta RPG 1.3**;
- aprimoramentos físicos e seus preços adicionais: **Forjas da ORC & Roll**.

As duas fontes nunca devem ser misturadas sem indicar de onde cada regra veio.

---

## 2. Repositório, branches e publicação

### Repositório

```text
https://github.com/sother451/TormentaRPG1.3
```

O repositório atualmente pertence à conta pessoal `sother451`.

### Branches principais

- `main`: versão publicada.
- `dev`: desenvolvimento e validação antes da publicação.

Fluxo recomendado para alterações normais:

```text
feature/<assunto>
      ↓
     dev
      ↓
    main
      ↓
 GitHub Pages
```

Para alterações pequenas feitas diretamente pelo mantenedor, o projeto historicamente também trabalha em `dev` e depois avança `main` para o mesmo commit.

### Exceção: aprovação de classes pelo GitHub

O workflow:

```text
.github/workflows/homebrew-class.yml
```

publica classes aprovadas diretamente em `main`.

Depois de uma publicação automática de classe, **sincronizar `dev` com `main`** antes de continuar o desenvolvimento.

### Site público

```text
https://sother451.github.io/TormentaRPG1.3/
```

A configuração Astro contém:

```js
site: 'https://sother451.github.io',
base: '/TormentaRPG1.3',
trailingSlash: 'always'
```

Isto significa que o projeto é hospedado dentro de um subcaminho do GitHub Pages.

**Não criar links internos assumindo que o site está na raiz do domínio.**

O padrão correto dentro de Astro é:

```ts
const base = import.meta.env.BASE_URL;
const href = (path: string) => `${base}${path.replace(/^\/+/, '')}`;
```

O repositório não possui, no estado documentado, um workflow dedicado de deploy do Astro versionado junto ao código. A convenção do projeto é que `main` representa a versão publicada; qualquer alteração futura na configuração de GitHub Pages deve preservar o `base` definido em `astro.config.mjs`.

---

## 3. Linguagens e tecnologias usadas

### Astro 5

Framework principal:

```json
"astro": "^5.0.0"
```

Arquivos de página e componentes usam a extensão:

```text
.astro
```

Astro gera páginas estáticas. A wiki é **multi-page**, não uma SPA.

Cada rota possui seu próprio HTML gerado, mas compartilha layout, componentes e estilos.

### TypeScript

O projeto usa TypeScript principalmente para:
- dados estruturados;
- schemas;
- interfaces;
- funções auxiliares;
- frontmatter dos arquivos Astro.

Configuração:

```json
{
  "extends": "astro/tsconfigs/strict"
}
```

Portanto, novas estruturas devem preferir tipagem explícita.

Extensão típica:

```text
.ts
```

### JavaScript

O JavaScript executado no navegador é majoritariamente **JavaScript puro (vanilla)** dentro de:

```astro
<script is:inline>
  // interação da página
</script>
```

É usado para:
- filtros;
- pesquisa;
- favoritos em `localStorage`;
- calculadoras;
- editor de classes;
- Forja;
- tabs;
- botão voltar ao topo.

Não há React, Vue, Svelte ou outro framework client-side instalado.

### HTML

O markup é escrito diretamente nos componentes `.astro`, usando HTML semântico:
- `section`;
- `article`;
- `nav`;
- `header`;
- `main`;
- `table`;
- `aside`;
- atributos ARIA onde aplicável.

### CSS

A identidade visual é feita em CSS normal.

Arquivo global:

```text
src/styles/global.css
```

Estilos específicos por domínio ficam em arquivos como:
- `combat.css`;
- `equipment.css`;
- `classes.css`;
- `talents.css`;
- `spells.css`;
- `conditions.css`;
- `class-editor.css`;
- `gm-screen.css`.

### JSON

Usado para catálogos grandes e dados gerados, por exemplo:
- catálogo-base de magias;
- classes aprovadas pelo editor Homebrew/oficial.

### YAML

Usado pelo GitHub para:
- GitHub Actions;
- Issue templates.

### Node.js / ESM

Scripts de automação do repositório usam JavaScript ESM com Node.js.

Exemplo:

```text
scripts/homebrew-from-issue.mjs
```

---

## 4. Comandos de desenvolvimento

Instalar dependências:

```bash
npm install
```

Servidor local:

```bash
npm run dev
```

Build de produção:

```bash
npm run build
```

Pré-visualizar o build:

```bash
npm run preview
```

Antes de publicar uma alteração estrutural, executar pelo menos:

```bash
npm run build
```

---

## 5. Arquitetura geral

A wiki deve ser entendida como **um único site com várias páginas**.

```text
TormentaRPG1.3
│
├── src/pages/          rotas
├── src/layouts/        shell global
├── src/components/     componentes reutilizáveis
├── src/data/           regras e catálogos estruturados
├── src/styles/         CSS global e por seção
├── scripts/            automações Node
├── docs/               documentação
└── .github/            Actions e formulários
```

### Regra de responsabilidade

**Global**
- cabeçalho;
- navegação principal;
- rodapé;
- shell;
- breadcrumbs;
- botão voltar ao topo;
- tokens de tema;
- padrões visuais compartilhados.

**Local**
- conteúdo da seção;
- filtros específicos;
- tabelas específicas;
- cards exclusivos;
- calculadoras locais;
- navegação interna da página.

Não duplicar componentes globais dentro de páginas.

---

## 6. Layout global

Arquivo:

```text
src/layouts/BaseLayout.astro
```

Toda página pública deve usar:

```astro
<BaseLayout title="..." activePath="/rota/">
  ...
</BaseLayout>
```

Ele injeta:
- `global.css`;
- `SiteHeader`;
- conteúdo da página;
- `BackToTop`;
- `SiteFooter`.

### Cabeçalho

```text
src/components/SiteHeader.astro
```

A navegação principal vem exclusivamente de:

```text
src/data/navigation.ts
```

O header divide os itens automaticamente em duas linhas equilibradas.

Não recriar listas de navegação manualmente em outras páginas.

### Altura dinâmica do cabeçalho

O componente mede sua própria altura e define:

```css
--site-header-height
```

Elementos `sticky` e âncoras abaixo do header devem usar essa variável.

Exemplo:

```css
top: calc(var(--site-header-height) + 8px);
```

Nunca voltar a hardcodar offsets como `82px`, `94px` etc.

### Breadcrumbs

```text
src/components/Breadcrumbs.astro
```

Usar em páginas de detalhe e subseções.

### Voltar ao topo

```text
src/components/BackToTop.astro
```

É global.

Aparece após aproximadamente 520px de scroll e executa scroll suave até o topo.

---

## 7. Navegação principal

Arquivo:

```text
src/data/navigation.ts
```

Ordem atual:

1. Início
2. Personagem
3. Raças
4. Perícias
5. Combate
6. Equipamentos
7. Classes
8. Talentos
9. Magias
10. Condições
11. Escudo do Mestre

Adicionar um novo item global **somente** nesse arquivo.

---

## 8. Rotas principais

Estrutura conceitual:

```text
/
├── personagem/
├── racas/
│   └── [slug]/
├── pericias/
│   └── [slug]/
├── combate/
├── equipamentos/
│   ├── geral/
│   ├── armas/
│   ├── armaduras/
│   ├── forja/
│   ├── navios/
│   └── itens-magicos/
├── classes/
│   └── [slug]/
├── criar-classe/
├── talentos/
├── magias/
│   └── [slug]/
├── condicoes/
├── escudo-do-mestre/
└── sobre/
```

Algumas rotas de Equipamentos são implementadas por arquivos `.astro` diretamente dentro de `src/pages/equipamentos/`; o URL público continua usando barra final por causa de `trailingSlash: 'always'`.

---

## 9. Camada de dados

A regra geral é:

**conteúdo estruturado fica em `src/data`; apresentação fica em `src/pages`.**

Evitar copiar listas de regras grandes diretamente para uma página quando elas podem ser representadas como dados.

---

## 10. Classes

### Índice

```text
src/pages/classes/index.astro
```

### Página individual

```text
src/pages/classes/[slug].astro
```

### Schema

```text
src/data/class-details/schema.ts
```

Estrutura principal:

```ts
ClassDetail {
  kind?: 'basic' | 'prestige'
  origin?: 'tormenta-1.3' | 'homebrew'
  author?: string
  bbaType?: 'full' | 'half' | 'three-quarters'
  slug
  name
  family
  basics
  progression
  sections
  classTalents
}
```

### BBA

Tipos suportados:
- `full`: BBA cheio;
- `half`: BBA 1/2;
- `three-quarters`: BBA 3/4.

### Habilidades e sistemas

Entradas de `sections` não precisam ter nível próprio.

O nível em que uma habilidade é adquirida pertence à tabela de progressão.

### Talentos exclusivos de classe

Talentos gerais pertencem à página Talentos.

Talentos exclusivos de classe ficam **dentro da própria classe**.

Para classes-base criadas pelo editor:
- 15 Talentos de Classe;
- 3 opções no 4º nível;
- 3 no 8º;
- 3 no 12º;
- 3 no 16º;
- 3 no 20º.

Classes de Prestígio do editor:
- 10 níveis;
- requisitos obrigatórios;
- sem seção de Talentos de Classe.

---

## 11. Editor de Classes

Rota:

```text
/criar-classe/
```

Arquivo:

```text
src/pages/criar-classe/index.astro
```

O editor suporta:

### Origem

**Homebrew**
- classe-base de 20 níveis → família `Homebrew`;
- prestígio de 10 níveis → família `Homebrew de Prestígio`.

**Classe oficial**
- usuário escolhe uma família oficial já existente;
- dados aprovados entram no catálogo oficial do editor.

### Progressão

O usuário escolhe um único tipo de BBA. Os valores de cada nível são calculados automaticamente.

### Habilidades

Cada habilidade possui:
- nome;
- descrição.

### Rascunho

Usa `localStorage`.

### Exportação

Permite exportar JSON.

### Revisão GitHub

O botão de envio abre uma Issue usando:

```text
.github/ISSUE_TEMPLATE/homebrew-class.yml
```

Depois da revisão, um mantenedor autorizado comenta:

```text
/aprovar-classe
```

O workflow:

```text
.github/workflows/homebrew-class.yml
```

executa:

```text
scripts/homebrew-from-issue.mjs
```

O script:
- encontra o bloco JSON;
- valida dados;
- valida BBA;
- valida quantidade de níveis;
- valida talentos;
- resolve família;
- gera slug;
- grava o JSON.

Destino Homebrew:

```text
src/data/homebrew/classes/<slug>.json
```

Destino oficial pelo editor:

```text
src/data/official/classes/<slug>.json
```

---

## 12. Magias

### Índice

```text
src/pages/magias/index.astro
```

### Detalhes

```text
src/pages/magias/[slug].astro
```

### Dados

```text
src/data/magias.ts
src/data/magias-t13.ts
src/data/spells-base.json
```

### Camadas

O catálogo-base contém magias importadas da fonte-base.

`magias-t13.ts` contém:
- regras gerais 1.3;
- alterações;
- novas magias.

A função:

```ts
getSpellLevels(spell)
```

deve ser usada sempre que a UI precisa do nível efetivo de uma magia.

Isso permite que alterações como:

```text
Fogo Amigo → 5º ciclo
```

afetem:
- card;
- filtro;
- ordenação;
- página individual.

Não ler diretamente `spell.levels` em uma nova interface sem verificar se deve usar `getSpellLevels`.

### Favoritos

O grimório usa `localStorage`.

Chave atual:

```text
tormenta13-spell-favorites
```

---

## 13. Equipamentos

Página principal:

```text
src/pages/equipamentos/index.astro
```

Subseções importantes:
- regras gerais;
- armas;
- armaduras/escudos/materiais;
- Forja;
- navios;
- itens mágicos.

CSS principal:

```text
src/styles/equipment.css
```

---

## 14. Forja de Equipamentos

Rota:

```text
/equipamentos/forja/
```

Página:

```text
src/pages/equipamentos/forja.astro
```

Dados externos de aprimoramentos:

```text
src/data/equipamentos/forja.ts
```

### Princípio da Forja

A Forja tem duas fontes intencionalmente diferentes.

#### Tormenta RPG 1.3

Usar para:
- equipamento-base;
- preço-base;
- estatísticas;
- materiais;
- bônus mágico;
- slots;
- encantamentos.

#### ORC & Roll

Usar somente para:
- aprimoramentos físicos;
- preço adicional desses aprimoramentos.

Referências:
- `https://trpg.orcnroll.com/forjadearmas/`
- `https://trpg.orcnroll.com/forjadearmaduras/`

### Armas

A Forja permite:
- escolher arma-base;
- nome personalizado;
- material;
- aprimoramentos físicos;
- bônus mágico;
- encantamentos progressivos;
- cálculo de slots;
- composição de preço;
- resumo de efeitos.

### Armaduras e Escudos

Permite:
- proteção-base;
- material;
- aprimoramentos;
- bônus mágico;
- poderes de armadura/escudo;
- encantamentos de arma para escudos quando aplicável;
- cálculo de slots e preço.

### Encantamentos

Arquivo-base:

```text
src/data/equipamentos/itens-magicos.ts
```

Existem duas famílias de poderes.

#### Progressivos por slot

Exemplos de Arma:
- Afiado;
- Anti-Criatura;
- Armazenar Magia;
- Disparo;
- Defensora;
- Elemental;
- Divino;
- Dançarina;
- Primal.

Itens de Poder:
- Arcano;
- Focalizador.

Cada um possui progressão de Slot 1 a Slot 5.

#### Poderes de custo fixo / bônus equivalente

Custos +1 a +4 presentes no conjunto ativo.

Exemplos:
- Apanhador de Flechas;
- Camuflagem;
- Fortificação;
- Abençoado;
- Leveza;
- Incandescente;
- Absorção;
- Reflexão.

Poderes marcados como removidos na fonte não devem reaparecer como opções ativas.

### Pendência conhecida da Forja

No estado documentado, a interface da Forja cobre Armas e Armaduras/Escudos.

Ainda falta uma interface completa de **Item de Poder** para:
- Arcano;
- Focalizador;
- Magia Poderosa.

Também revisar o comportamento especial do encantamento **Primal**, principalmente:
- +500 TO em armas quando aplicável;
- suporte a partes do corpo/armas naturais.

Não declarar a Forja como 100% completa enquanto essas pendências existirem.

---

## 15. Itens Mágicos

Página:

```text
src/pages/equipamentos/itens-magicos.astro
```

Há dois conceitos que **não devem ser confundidos**:

### Lista de Itens Mágicos

É o cardápio de itens prontos.

Dados:

```text
src/data/equipamentos/cardapio-itens-magicos.ts
src/data/equipamentos/cardapio-itens-magicos.txt
```

A UI possui:
- busca;
- filtro por aura;
- filtro de preço;
- ordenação;
- favoritos;
- descrição completa no card.

### Encantamentos

São poderes aplicados a equipamentos.

Eles aparecem nas subseções específicas:
- Encantamentos de Armas;
- Poderes de Armaduras;
- Poderes de Escudos;
- Itens de Poder.

**Não recriar uma seção genérica duplicada chamada apenas “Encantamentos” com todos os cards**, pois isso já foi removido por duplicar o conteúdo.

---

## 16. Combate

A página de Combate deve manter fórmulas e regras 1.3 como fonte.

Fórmulas consolidadas usadas no projeto:

```text
Ataque corpo-a-corpo / arremesso:
1d20 + Nível + Mod. For

Ataque à distância:
1d20 + Nível + Mod. Des

Ataque de toque:
1d20 + Nível + Mod. Conjuração

Dano corpo-a-corpo / arremesso:
Arma + MdN + Mod. For

Dano com arma de disparo:
Arma + MdN + Mod. Des

CA:
10 + MdN + Mod. Des + armadura + escudo

Teste de Resistência:
1d20 + MdN + modificador relevante

CD padrão:
10 + MdN + modificador relevante
```

Não importar fórmulas de versões antigas sem confirmação no 1.3.

---

## 17. Condições

As condições possuem página própria e também aparecem resumidas no Escudo do Mestre.

Regra geral do projeto:
- aplicar todas as condições;
- quando efeitos conflitarem, usar o efeito mais severo.

Não substituir esse comportamento por regras de outra edição.

---

## 18. Escudo do Mestre

Rota:

```text
/escudo-do-mestre/
```

Página:

```text
src/pages/escudo-do-mestre/index.astro
```

CSS:

```text
src/styles/gm-screen.css
```

### Filosofia

O Escudo é uma **referência rápida para o mestre**, não uma cópia da wiki inteira.

Deve priorizar:
- fórmulas;
- modificadores;
- CDs;
- tabelas rápidas;
- condições;
- lembretes;
- calculadoras curtas.

Se uma regra exige vários parágrafos, provavelmente pertence à página normal da wiki, não ao Escudo.

### Estado atual

Inclui:
- visão geral;
- calculadora de dano;
- Pontos de Ação;
- combate;
- perícias;
- condições;
- busca global dentro do Escudo.

---

## 19. CSS e identidade visual

Variáveis principais em `global.css`:

```css
--bg
--surface
--surface2
--border
--text
--muted
--accent
--accent2
--gold
--warn
--radius
--site-header-height
```

Fontes:
- Cinzel: títulos;
- Inter: corpo/interface.

### Convenção

CSS específico de página deve preferir prefixos:

```text
.combat-*
.class-*
.spell-*
.gm-*
.forge-*
.magic-item-*
```

Evitar seletores locais que alterem:
- `.site-header`;
- `.header-inner`;
- `.top-nav`;
- `.brand`;
- `.shell`;
- `.site-footer`.

---

## 20. Padrões de UI

### Navegação interna

Usar:

```html
<nav class="local-nav">
```

para âncoras da própria página.

### Tabelas

Padrão:

```html
<div class="table-wrap">
  <table class="rules-table">
```

### Busca e filtros

Preferir:
- `.filter-panel`;
- `.search-field`;
- `.select-field`;
- atributos `data-*` nos cards;
- filtragem com JavaScript vanilla.

### Favoritos

Quando apropriado, salvar apenas IDs em `localStorage`, nunca duplicar o conteúdo inteiro.

---

## 21. Como adicionar uma página nova

1. Criar rota em `src/pages`.
2. Importar `BaseLayout`.
3. Passar `activePath` correspondente à seção principal.
4. Importar CSS local somente se necessário.
5. Colocar dados grandes em `src/data`.
6. Se for uma seção global, adicionar item em `navigation.ts`.
7. Usar `import.meta.env.BASE_URL` para links internos.
8. Executar `npm run build`.
9. Testar desktop e mobile.

Exemplo mínimo:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Minha Página" activePath="/secao/">
  <section class="section-hero">
    <p class="eyebrow">Categoria</p>
    <h1>Minha Página</h1>
  </section>
</BaseLayout>
```

---

## 22. Como alterar conteúdo existente

### Regra pequena

Se o dado já está estruturado:
- editar o arquivo em `src/data`;
- não hardcodar a correção na página.

### Exemplo: nível de magia alterado

Usar a camada de alteração 1.3, não modificar apenas o texto visual.

### Exemplo: classe

Editar o `ClassDetail` correspondente ou o JSON aprovado.

### Exemplo: navegação

Editar apenas `navigation.ts`.

### Exemplo: regra global de layout

Editar componente ou `global.css`, não página por página.

---

## 23. Automação de classes e segurança

O comando:

```text
/aprovar-classe
```

é poderoso: o workflow possui permissão de escrita em conteúdo e publica diretamente no `main`.

A condição atual aceita comentários de:
- OWNER;
- MEMBER;
- COLLABORATOR.

Ao adicionar um novo colaborador ao repositório, considerar que ele poderá participar desse fluxo se a associação dele satisfizer a condição do workflow.

Não remover validações do script apenas para fazer uma submissão passar.

---

## 24. Colaboração recomendada

Para uma segunda pessoa trabalhando ativamente:

### Opção simples

Adicionar como collaborator do repositório.

Fluxo recomendado:
1. atualizar `dev`;
2. criar `feature/<assunto>`;
3. trabalhar e fazer commits;
4. abrir PR para `dev`;
5. revisar;
6. fazer build;
7. integrar `dev`;
8. publicar `dev` em `main`.

### Evitar

- duas pessoas editando o mesmo arquivo grande diretamente em `main`;
- `force push` em `main`;
- misturar refactors estruturais com grandes mudanças de conteúdo no mesmo commit;
- copiar regras de outras versões para preencher lacunas.

---

## 25. GitHub: colaborador x administrador

O repositório atualmente pertence a uma **conta pessoal**, não a uma organização.

Em repositórios pessoais do GitHub existem essencialmente:
- proprietário;
- colaboradores.

Um colaborador pode ler e fazer push/escrever no repositório, mas não recebe o mesmo controle administrativo do proprietário.

Se a pessoa só precisa:
- editar código;
- criar branches;
- fazer commits;
- abrir/mergear PRs conforme permitido;
- trabalhar em Issues;

então **Collaborator é suficiente**.

Se a pessoa precisa de controle administrativo real sobre:
- acesso de outras pessoas;
- configurações sensíveis;
- segurança;
- determinadas configurações do repositório;

a estrutura correta é mover o repositório para uma **GitHub Organization** e atribuir ao amigo o papel `Admin` do repositório.

### Atenção ao GitHub Pages antes de transferir

Transferir um repositório muda seu proprietário.

O GitHub redireciona URLs normais do repositório, mas **não redireciona automaticamente o endereço de GitHub Pages do projeto**.

Como o site atual usa:

```text
https://sother451.github.io/TormentaRPG1.3/
```

uma transferência para uma organização exigirá revisão de:
- URL do Pages;
- campo `site` de `astro.config.mjs`;
- eventualmente configuração de domínio;
- links e deploy.

Portanto, não transferir o repositório somente para dar acesso de escrita. Transferir apenas se houver necessidade real de permissões granulares/admin.

---

## 26. Como adicionar um colaborador no repositório atual

No GitHub:

```text
TormentaRPG1.3
→ Settings
→ Collaborators
→ Add people
→ procurar username/e-mail
→ Add <pessoa> to TormentaRPG1.3
```

A pessoa precisa aceitar o convite.

Isso oferece acesso de colaboração ao repositório da conta pessoal.

---

## 27. Como obter um verdadeiro papel Admin

Se for realmente necessário:

1. Criar uma GitHub Organization.
2. Transferir o repositório para a organização.
3. Abrir o repositório dentro da organização.
4. Ir a `Settings → Collaborators and teams / Access`.
5. Adicionar o amigo.
6. Definir o papel do repositório como `Admin`.

Papéis de repositório de organização:
- Read;
- Triage;
- Write;
- Maintain;
- Admin.

Para alguém que vai apenas melhorar o site, normalmente **Write** ou **Maintain** é mais seguro que Admin.

---

## 28. Estado conhecido / TODOs

Pontos conhecidos na data deste documento:

### Forja

- adicionar interface de Item de Poder;
- incluir Arcano;
- incluir Focalizador;
- incluir Magia Poderosa;
- revisar +500 TO de Primal em armas;
- avaliar suporte a Primal em armas naturais/partes do corpo.

### Deploy

- documentar no repositório a configuração exata do GitHub Pages caso ela seja alterada;
- se no futuro for criado workflow de deploy Astro, registrar aqui.

### Arquitetura

Continuar reduzindo duplicações e movendo padrões recorrentes para componentes quando isso realmente simplificar manutenção.

---

## 29. Regras para uma IA que continuar o projeto

Antes de modificar qualquer coisa:

1. Ler este documento.
2. Ler `AGENTS.md`.
3. Verificar `main` e `dev`.
4. Identificar a fonte normativa da regra solicitada.
5. Nunca inventar uma regra para preencher ausência.
6. Verificar se existe estrutura de dados antes de hardcodar conteúdo em uma página.
7. Preservar o `BaseLayout`.
8. Preservar `import.meta.env.BASE_URL`.
9. Preservar responsividade.
10. Fazer build antes de publicar.
11. Não remover funcionalidades existentes para simplificar uma alteração sem autorização.
12. Não transformar a wiki em SPA sem uma necessidade explícita.
13. Não usar livros antigos como autoridade sobre o 1.3.
14. Quando usar uma fonte externa aprovada, deixar essa separação evidente no código e na UI.
15. Se uma alteração modifica uma regra usada em mais de uma página, corrigir a **fonte de dados**, não cada visualização individual.

---

## 30. Checklist antes de publicar

- [ ] A regra veio da fonte correta?
- [ ] Não foi criada duplicação?
- [ ] Dados estão em `src/data` quando apropriado?
- [ ] Página usa `BaseLayout`?
- [ ] Links respeitam `BASE_URL`?
- [ ] Navegação global continua centralizada?
- [ ] Elementos sticky usam `--site-header-height`?
- [ ] Desktop foi considerado?
- [ ] Mobile foi considerado?
- [ ] Busca/filtros ainda funcionam?
- [ ] `npm run build` passa?
- [ ] `dev` está sincronizada?
- [ ] Mudança foi revisada antes de chegar em `main`?

---

## 31. Arquivos que uma IA deve abrir primeiro

Para uma tarefa genérica:

```text
AGENTS.md
docs/DOCUMENTACAO_COMPLETA_PROJETO.md
README.md
astro.config.mjs
src/layouts/BaseLayout.astro
src/data/navigation.ts
src/styles/global.css
```

Depois abrir somente os arquivos do domínio em que vai trabalhar.

### Classes

```text
src/data/classes.ts
src/data/class-details/schema.ts
src/data/class-details/index.ts
src/pages/classes/index.astro
src/pages/classes/[slug].astro
src/pages/criar-classe/index.astro
```

### Magias

```text
src/data/magias.ts
src/data/magias-t13.ts
src/pages/magias/index.astro
src/pages/magias/[slug].astro
src/styles/spells.css
```

### Equipamentos

```text
src/data/equipamentos/
src/pages/equipamentos/
src/styles/equipment.css
```

### Escudo do Mestre

```text
src/pages/escudo-do-mestre/index.astro
src/styles/gm-screen.css
```

---

## 32. Resumo para handoff

Este é um site estático Astro 5, escrito principalmente em **Astro + TypeScript + CSS + JavaScript vanilla**, publicado no GitHub Pages.

A arquitetura prioriza:
- páginas independentes;
- estrutura global compartilhada;
- dados separados da apresentação;
- pesquisa client-side simples;
- pouca dependência;
- manutenção direta.

A principal regra editorial é que **Tormenta RPG 1.3 é a fonte normativa**.

O maior risco para um novo mantenedor é preencher lacunas usando Tormenta tradicional sem perceber que o projeto possui regras próprias.

O maior risco técnico é tratar o projeto como se estivesse hospedado na raiz do domínio e quebrar links do GitHub Pages.

O maior risco de colaboração é editar `main` simultaneamente sem sincronizar `dev`, especialmente porque a automação de aprovação de classes pode escrever diretamente em `main`.

Preservando esses três pontos, o projeto é relativamente simples de continuar.
