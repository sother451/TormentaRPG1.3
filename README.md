# TormentaRPG1.3

Compêndio web para as regras comunitárias **Tormenta RPG 1.3 — SugarVerse**.

## Objetivo

Transformar o documento Tormenta 1.3 e seus subdocumentos em uma referência rápida, navegável e pesquisável. O site não reconstrói os livros-base: a fonte de verdade é exclusivamente o material do projeto 1.3.

## Desenvolvimento

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
```

## Organização inicial

- `src/pages/` — páginas do compêndio.
- `src/data/` — dados estruturados usados pelo site.
- `src/layouts/` — layout global.
- `src/components/` — componentes reutilizáveis.
- `src/styles/` — identidade visual.

### Regra de conteúdo importante

Talentos gerais ficam em **Talentos**. Talentos exclusivos de classe ficam **dentro da página da própria classe**, junto de seus sistemas exclusivos.

## Branches

- `main` — versão publicada.
- `dev` — construção e validação antes de publicação.
