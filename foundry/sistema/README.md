# Tormenta RPG 1.3 para Foundry VTT (v14) — versão 0.4.1

Sistema com **a ficha do Roll20 do grupo** (mesmo visual, mesmos campos, mesmas fórmulas e scripts),
**compêndios prontos** (1.926 itens do compendium Tormenta 1.3) e **importação de personagens do Roll20**.

> Ainda não foi testado dentro do Foundry. Ao instalar, abra o console (F12) e envie os erros que aparecerem.

## Como instalar

Quem administra o servidor (tela inicial do Foundry, com a senha de administrador):
**Game Systems → Install System** → cole no campo **Manifest URL**:

```
https://github.com/sother451/TormentaRPG1.3/releases/latest/download/system.json
```

Depois crie um mundo novo escolhendo "Tormenta RPG 1.3" (não dá para trocar o sistema de um mundo existente).
Novas versões aparecem na mesma tela com o botão **Update**.

## Como usar

- **Ficha:** crie um ator do tipo Personagem (ou NPC). A ficha é a do Roll20: abas no topo, botões de rolagem,
  seções com "+ Adicionar" e ✕ para apagar linhas. Os campos cinzas são calculados.
- **Compêndios:** aba Compêndios → pasta "Tormenta RPG 1.3". Arraste para a ficha:
  - arma → linha em Ataques; talento → Habilidades; magia → Magias (no nível do círculo);
  - equipamento e item mágico → Inventário; classe → Informação de Classe;
  - raça → campo Raça;
  - armas, armaduras, escudos, equipamentos e itens mágicos → **Inventário**. Marque **Equipar** na linha para a arma
    ir para Ataques, a armadura/escudo para "Armadura e escudo" e o item mágico para "Equipamento Mágico".
- **Perícias:** todas rolam sem treino, menos Adestrar Animais, Conhecimento, Identificar Magia e Ladinagem
  (só treinadas). Atuação, Conhecimento e Ofício só deixam adicionar especialidades com a perícia treinada.
- **Importar do Roll20:** no topo da ficha, menu da janela (⋮) → **Importar do Roll20**. Escolha o `.json`
  exportado pelo VTT Enhancement Suite (botão Export do personagem no Roll20). Os dados atuais da ficha são substituídos.
- **Chat:** os botões rolam as mesmas macros do Roll20, inclusive as que o jogador escreveu em "Mostrar Texto do Macro".
  O resultado aparece como no template padrão do Roll20; passe o mouse no número para ver a fórmula.
  Crítico fica verde, 1 natural no d20 fica vermelho.
- **Habilidades:** três grupos (Habilidades de Classe, Talentos de Classe, Talentos); cada linha começa recolhida
  (▸ abre os detalhes; "Expandir tudo"/"Recolher tudo" no topo).
- **Progressão (aba nova):** vagas de talento por nível de personagem (talento nos níveis ímpares e um extra no 1º;
  combate/magia/Tormenta/poder no 4º e 12º; perícia no 6º e 14º; destino ou classe no 4º, 8º, 12º e 16º), o talento do
  20º da classe e o +1 de atributo nos níveis pares. Cada vaga lista só os talentos que cabem nela (pré-requisitos não
  são bloqueados). As habilidades da tabela da classe entram e saem sozinhas em Habilidades conforme o nível da classe.
- **Token:** a barra mostra PV atual / PV máximo; mudar a barra muda o PV da ficha. Iniciativa = `1d20 + @iniciativa`.
- **Fórmulas do Foundry:** todos os campos da ficha valem como `@nome` (minúsculas, `-` vira `_`): `@for_mod`, `@ca`,
  `@acrobacia`, `@ataque_cac`...

## Diferenças em relação ao Roll20

- Os modificadores (aba Parâmetros) somam sempre como número. No script original, dois modificadores no mesmo alvo
  podiam virar texto concatenado ("1" + "2" = "12").
- BBA = nível em todas as classes (Tormenta 1.3): classes novas, arrastadas ou criadas com "+ Adicionar", começam com BBA "1".
  A coluna de BBA das tabelas dos documentos de classe não é usada.
- O botão de dado usa o ícone d20 do Foundry no lugar da fonte de dados do Roll20.

## Para desenvolver

Requer Node 22+ e Python 3 (só para o conversor).

```
npm install
npm test                 # regras, compêndios, motor da ficha, importação
npm run pacotes          # monta os compêndios em packs/ (LevelDB, com o CLI oficial do Foundry)
npm run converter        # regera ficha, CSS e campos a partir da ficha do Roll20
python ferramentas/extrair_classes_drive.py   # relê as classes do compêndio original (Drive) -> data/classes-progressao.json
node ferramentas/roll20/previa.mjs previa.html ataque   # prévia da ficha no navegador, sem Foundry
```

**Publicar uma versão:** suba `version` no `system.json` e crie a tag `foundry-vX.Y.Z`. O GitHub Actions
(`.github/workflows/foundry-release.yml`) roda os testes, monta os compêndios e publica `system.json` + `system.zip`.

### Como a ficha é feita

A ficha **não é escrita à mão**: `ferramentas/roll20/converter.py` lê `ferramentas/roll20/original/fichaTormenta.html`
e `.css` (a ficha do Roll20) e gera:

| Arquivo gerado | O quê |
|---|---|
| `templates/actor/ficha-roll20.hbs` | O HTML do Roll20 com os campos ligados ao Foundry (`attr_x` → `system.x`) |
| `styles/ficha-roll20.css` | O CSS do Roll20, restrito à ficha |
| `module/roll20/campos.mjs` | Campos salvos, campos calculados (com a fórmula original), seções e macros |

Para mudar a ficha, mude o HTML/CSS original (ou o conversor) e rode `npm run converter`.

| Código | O quê |
|---|---|
| `module/roll20/motor.mjs` | Avalia as fórmulas `@{campo}` como o Roll20 e roda os scripts da ficha (sheet workers) portados |
| `module/roll20/macro.mjs` | Interpreta as macros do Roll20: `[[ ]]` aninhados, `$[[n]]`, `&{template:default}`, `/em` |
| `module/roll20/importar.mjs` | Lê o JSON exportado do Roll20 |
| `module/roll20/do-item.mjs` | Converte item do compêndio em linha da ficha |
| `module/data/personagem.mjs` | Modelo de dados (gerado a partir de `campos.mjs`) |
| `module/sheets/ficha-roll20.mjs` | A ficha no Foundry: abas, botões, seções, arrastar e soltar |
| `module/documents/actor.mjs` | Rolagens no chat, gastos de munição/usos/PM, barra do token |
| `ferramentas/montar-pacotes.mjs` | `data/*.json` → compêndios LevelDB (`_id` fixo por item) |
| `data/*.json` | Itens dos compêndios (gerados do compendium) |

## O que os compêndios têm e não têm

- **Magias:** catálogo-base com o overlay 1.3 aplicado. Custo em PM e dano não estão no compendium como campos:
  ficam 0 e você preenche na ficha.
- **Classes:** PV/nível lido do texto da classe.
- **Armas:** corpo a corpo ou à distância deduzido das propriedades; confira as de arremesso.
- **Itens mágicos:** vêm do "cardápio" em texto; o preço pode faltar em alguns.
- **Não incluídos:** regras longas (diário), navios, encantamentos e o homebrew do compendium.
