# Tormenta RPG 1.3 para Foundry VTT (v14) — versão 0.2

Sistema com ficha completa de personagem e NPC, itens estruturados e **compêndios gerados do compendium Tormenta 1.3**
(1.926 itens). **Ainda não foi testado dentro do Foundry**: ao instalar, abra o console (F12) e envie os erros que aparecerem.

## Como instalar

**Pelo Foundry (recomendado):** na tela inicial, aba **Game Systems** → **Install System** → cole no campo **Manifest URL**:

```
https://raw.githubusercontent.com/sother451/TormentaRPG1.3/main/foundry/sistema/system.json
```

e clique em **Install**. Depois crie um mundo novo escolhendo "Tormenta RPG 1.3".

**Manualmente (quem tem acesso ao servidor):** descompacte o `system.zip` numa pasta chamada `tormenta13` dentro de
`Data/systems` (no seu servidor: `/home/ubuntu/foundrydata/Data/systems/tormenta13/system.json`) e reinicie o Foundry.

## Como importar os compêndios

1. Entre no mundo como **Mestre**. Na primeira vez aparece a pergunta *"Importar agora os compêndios do sistema?"*. Clique em **Importar agora**.
2. Aguarde alguns minutos, sem fechar o Foundry. No fim aparece "importação concluída".
3. Abra a aba **Compêndios** (ícone de livros na barra lateral). Haverá 9 compêndios "Tormenta 1.3 · ...":
   Raças (40), Classes (29), Talentos de Classe (330), Talentos (342), Magias (801), Armas (106),
   Armaduras e Escudos (21), Equipamentos (12) e Itens Mágicos (245). Dentro deles os itens ficam em pastas
   (grupo do talento, ciclo da magia, categoria da arma, aura do item mágico...).

Se você clicou em "Agora não", ou quiser refazer: **Configurações do jogo → Configurar opções → Tormenta RPG 1.3**,
marque "Importar compêndios do Tormenta 1.3" e salve. Também funciona como macro (tipo Script):
`game.tormenta13.importarCompendios()`. Itens já importados não são duplicados.

## Como usar a ficha

1. Crie um ator do tipo **Personagem** (ou **NPC**) e abra a ficha.
2. Arraste do compêndio para a ficha: a **raça**, a **classe** (a primeira vira a classe inicial; ajuste o nível dela),
   talentos, magias, armas, armaduras e itens.
3. Na aba **Geral** preencha os valores de habilidade e escolha o **modificador de conjuração** (usado no PM).
4. Marque **equipada** nas armaduras e escudos para entrarem na CA.
5. Na aba **Perícias** marque as treinadas. Clique no nome da perícia para rolar.
6. Na aba **Ajustes** crie **variáveis** (`@nome`) e preencha bônus gerais. Elas funcionam em qualquer fórmula
   (bônus de ataque e dano das armas, dano das magias).
7. As condições (Abalado, Caído, Cego etc.) aparecem no HUD do token, com a descrição do compendium.

## Regras implementadas (conforme o compendium)

- Modificador de habilidade = floor(total/2) − 5; MdN = metade do nível.
- Ataque = 1d20 + **Nível** + modificador (For corpo a corpo, Des à distância, conjuração no toque).
- Dano = arma + MdN + modificador; em ameaça de crítico os dados da arma são multiplicados; mínimo de 1.
- CA = 10 + MdN + Des (limitada pela armadura) + armadura + escudo + tamanho.
- PV: PV inicial da classe inicial + Con; depois PV/nível + Con (mínimo 1 por nível).
- PM por classe = base + modificador de conjuração + PM/nível a partir do 2º.
- Perícias: treinada = nível + 3; não treinada = metade do nível; penalidade de armadura e de tamanho (Furtividade).
- Pontos de Ação: botão "Gastar" com dado extra, PV ou PM pela tabela do compendium.
- Carga = 3 × Força (kg).

## O que os compêndios têm e não têm

- **Magias:** catálogo-base com o overlay 1.3 aplicado (variantes consolidadas removidas, alterações aplicadas
  e as 7 magias novas incluídas). **O custo em PM e o dano não estão nos dados do compendium como campos**:
  ficam em 0 e vazio, e você preenche na magia (o dano é uma fórmula, ex.: `3d6`). O texto completo está na descrição.
- **Classes:** PV, BBA e PM (base + por nível) foram lidos do texto da classe. Cada classe traz a tabela de progressão
  e as habilidades na descrição. Classes de prestígio têm PV inicial 0.
- **Armas:** o tipo de ataque (corpo a corpo ou à distância) foi deduzido das propriedades (Alcance, Munição, Recarga).
  Confira as armas de arremesso. Dano e crítico vêm do compendium.
- **Itens mágicos:** vêm do "cardápio" em texto, então o preço pode estar vazio em alguns (o texto original está na descrição).
- **Não incluídos:** regras longas (diário), navios, encantamentos e o homebrew do compendium.

## Estrutura do sistema

| Caminho | O que faz |
|---|---|
| `system.json` | Manifesto (v14, tipos de documento, grade de 1,5 m) |
| `module/rules.mjs` | Regras do compendium como funções puras (testadas em Node) |
| `module/data/` | Modelos de dados do ator e dos itens |
| `module/documents/` | Rolagens: testes, ataque/dano, magia, Pontos de Ação |
| `module/sheets/`, `templates/`, `styles/` | Fichas de personagem e de item |
| `module/importador.mjs` | Cria os compêndios dentro do mundo |
| `data/*.json` | Itens dos compêndios (gerados do compendium) |
| `tests/` | `node tests/rules.test.mjs`, `derivados.test.mjs`, `dados.test.mjs` |
