# AGENTS.md — Tormenta RPG 1.3

Este arquivo é o ponto de entrada para qualquer IA/agente de código trabalhando neste repositório.

## Leia primeiro

1. `docs/DOCUMENTACAO_COMPLETA_PROJETO.md`
2. `docs/ARQUITETURA_SITE.md`
3. `README.md`

## Regra editorial absoluta

**Tormenta RPG 1.3 é a fonte normativa do sistema.**

Não preencher lacunas com Tormenta RPG tradicional, D&D 3.5 ou suplementos antigos sem autorização explícita.

Fontes externas só podem alterar regras quando o projeto tiver aprovado aquele uso. Exemplo atual: a Forja usa ORC & Roll apenas para aprimoramentos físicos e preços desses aprimoramentos; base, materiais e encantamentos continuam vindo do 1.3.

## Stack

- Astro 5
- TypeScript strict
- HTML/Astro
- CSS
- JavaScript vanilla no cliente
- Node.js ESM para scripts
- GitHub Actions/YAML
- JSON para dados gerados

Não introduza React/Vue/Svelte ou dependências novas sem necessidade clara.

## Arquitetura

- `src/pages`: rotas.
- `src/data`: fonte de dados estruturados.
- `src/components`: componentes reutilizáveis.
- `src/layouts/BaseLayout.astro`: shell global obrigatório.
- `src/styles/global.css`: tokens e UI global.
- CSS específico fica em `src/styles/<dominio>.css`.

Não duplique header, nav ou footer em páginas.

## GitHub Pages

O site usa:

```js
site: 'https://sother451.github.io'
base: '/TormentaRPG1.3'
trailingSlash: 'always'
```

Links internos devem respeitar `import.meta.env.BASE_URL`.

## Branches

- `main`: publicada.
- `dev`: desenvolvimento.

Preferir feature branch → dev → main.

A aprovação automática de classes pode gravar diretamente em `main`; depois disso sincronize `dev`.

## Build obrigatório

Antes de publicar:

```bash
npm install
npm run build
```

## UI global

- Navegação: `src/data/navigation.ts`
- Header: `src/components/SiteHeader.astro`
- Breadcrumbs: `src/components/Breadcrumbs.astro`
- Voltar ao topo: `src/components/BackToTop.astro`
- altura do header: CSS `--site-header-height`

## Conteúdo

Quando uma regra aparece em várias telas, altere a fonte em `src/data` e deixe as páginas consumirem a correção.

Nunca faça uma correção apenas visual se a regra estrutural continuar errada nos dados.

## Estado conhecido

A Forja ainda precisa de suporte completo para Item de Poder (Arcano, Focalizador e Magia Poderosa) e revisão do custo/regra especial de Primal.

## Não faça sem autorização

- trocar Astro por SPA;
- reorganizar todo o design;
- remover filtros/favoritos/calculadoras;
- substituir regras 1.3 por livro antigo;
- modificar `main` com force push;
- transformar material externo em fonte normativa por conta própria.
