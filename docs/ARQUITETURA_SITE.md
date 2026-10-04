# Arquitetura do site — Tormenta RPG 1.3

## Objetivo

A wiki é um único site Astro com várias rotas. Cada seção continua tendo sua própria página, mas estrutura, navegação e padrões visuais devem vir de componentes globais compartilhados.

## Camada global

- `src/layouts/BaseLayout.astro`: shell obrigatório das páginas públicas.
- `src/components/SiteHeader.astro`: marca, navegação principal e cálculo da altura real do cabeçalho.
- `src/components/SiteFooter.astro`: rodapé global.
- `src/data/navigation.ts`: única fonte dos itens da navegação principal.
- `src/styles/global.css`: tokens, shell, cabeçalho, rodapé e componentes visuais comuns.
- `src/components/Breadcrumbs.astro`: breadcrumb compartilhado.
- `src/components/RuleText.astro`: renderização compartilhada de texto de regra.

## Regras estruturais

1. Nenhuma página deve recriar manualmente o cabeçalho, a marca, a navegação principal ou o rodapé.
2. Todo item novo da navegação deve ser adicionado somente em `navigation.ts`.
3. A navegação é dividida automaticamente em duas linhas equilibradas pelo `SiteHeader`; não usar `slice` com limite final fixo.
4. Estilos específicos de uma seção não devem sobrescrever `.site-header`, `.header-inner`, `.top-nav`, `.brand`, `.shell` ou `.site-footer`.
5. Elementos sticky abaixo do cabeçalho devem usar `--site-header-height`, nunca um valor fixo em pixels.
6. Breadcrumbs de páginas de detalhe devem usar `Breadcrumbs.astro`.
7. CSS local deve ficar prefixado pelo domínio da página sempre que possível (ex.: `.combat-*`, `.class-*`, `.spell-*`, `.gm-*`).

## Rotas auditadas

Usam `BaseLayout` e, portanto, recebem a mesma estrutura global:

- Início
- Personagem
- Raças e páginas individuais
- Perícias e páginas individuais
- Combate
- Equipamentos
- Equipamentos — Regras Gerais
- Equipamentos — Armas e Munições
- Equipamentos — Armaduras e Materiais
- Equipamentos — Navios
- Equipamentos — Itens Mágicos
- Classes e páginas individuais
- Criar Classe Homebrew
- Talentos
- Magias e páginas individuais
- Condições
- Escudo do Mestre
- Sobre

## Navegação local

Menus internos de uma seção, como os de Combate, Classes e Magias, continuam sendo conteúdo local. Quando forem sticky, sua posição deve ser calculada a partir de `--site-header-height`.

## Separação de responsabilidades

**Global:** identidade do site, navegação principal, rodapé, shell, tokens de tema, breadcrumbs e comportamento de altura do cabeçalho.

**Local:** conteúdo da regra, filtros exclusivos, tabelas específicas, cards exclusivos e navegação interna da própria seção.

Ao criar uma nova página, a primeira decisão deve ser: isto pertence ao site inteiro ou somente a esta seção? Se pertencer ao site inteiro, deve virar componente ou estilo global antes de ser repetido.
