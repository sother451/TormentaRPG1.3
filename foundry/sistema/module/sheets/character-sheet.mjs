import { SYSTEM_ID, HABILIDADES, PERICIAS, RESISTENCIAS, TAMANHOS, PERICIAS_ESPECIALIZAVEIS, RESERVADAS } from "../config.mjs";
import { slugVariavel } from "../rules.mjs";

const { HandlebarsApplicationMixin, DialogV2 } = foundry.applications.api;
const { ActorSheetV2 } = foundry.applications.sheets;

const ABAS = [
  { id: "geral", label: "Geral" }, { id: "pericias", label: "Perícias" }, { id: "combate", label: "Combate" },
  { id: "magias", label: "Magias" }, { id: "talentos", label: "Talentos" }, { id: "inventario", label: "Inventário" },
  { id: "ajustes", label: "Ajustes" }, { id: "biografia", label: "Biografia" }
];
const TIPOS_CRIAVEIS = ["classe", "raca", "talento", "magia", "arma", "armadura", "equipamento", "itemMagico"];

export class TormentaCharacterSheet extends HandlebarsApplicationMixin(ActorSheetV2) {
  /** Aba ativa (só da interface; não é salva no ator). */
  aba = "geral";

  static DEFAULT_OPTIONS = {
    classes: ["tormenta13", "ficha"],
    position: { width: 860, height: 780 },
    window: { resizable: true },
    form: { submitOnChange: true },
    actions: {
      mudarAba: TormentaCharacterSheet._mudarAba,
      gastarPA: TormentaCharacterSheet._gastarPA,
      rolar: TormentaCharacterSheet._rolar,
      rolarArma: TormentaCharacterSheet._rolarArma,
      usarMagia: TormentaCharacterSheet._usarMagia,
      criarItem: TormentaCharacterSheet._criarItem,
      editarItem: TormentaCharacterSheet._editarItem,
      excluirItem: TormentaCharacterSheet._excluirItem,
      adicionarVariavel: TormentaCharacterSheet._adicionarVariavel,
      removerVariavel: TormentaCharacterSheet._removerVariavel,
      adicionarEspecialidade: TormentaCharacterSheet._adicionarEspecialidade,
      removerEspecialidade: TormentaCharacterSheet._removerEspecialidade
    }
  };

  static PARTS = {
    ficha: { template: `systems/${SYSTEM_ID}/templates/actor/character.hbs` }
  };

  async _prepareContext(options) {
    const contexto = await super._prepareContext(options);
    const ator = this.actor;
    const sys = ator.system;
    const fonte = sys._source;
    const itens = (tipo) => ator.items.filter((i) => i.type === tipo).sort((a, b) => a.sort - b.sort);
    const abrev = (id) => HABILIDADES[id].abrev;

    Object.assign(contexto, {
      ator, sys, fonte, aba: this.aba, editavel: this.isEditable, limitado: this.actor.limited,
      abas: ABAS.map((a) => ({ ...a, ativa: a.id === this.aba })),
      escolhasHab: Object.entries(HABILIDADES).map(([id, h]) => ({ id, abrev: h.abrev })),
      tamanhos: Object.entries(TAMANHOS).map(([id, t]) => ({ id, label: t.label })),
      basesEspecialidade: PERICIAS_ESPECIALIZAVEIS.map((id) => ({ id, label: PERICIAS[id].label })),
      habilidades: Object.entries(HABILIDADES).map(([id, h]) => ({
        id, label: h.label, abrev: h.abrev, ...fonte.habilidades[id], total: sys.habilidades[id].total, mod: sys.habilidades[id].mod
      })),
      resistencias: Object.entries(RESISTENCIAS).map(([id, r]) => ({
        id, label: r.label, habilidade: fonte.resistencias[id].habilidade, outros: fonte.resistencias[id].outros,
        temp: fonte.resistencias[id].temp, total: sys.resistencias[id].total
      })),
      pericias: Object.entries(PERICIAS).map(([id, p]) => ({
        id, label: p.label, soTreinada: p.soTreinada, armadura: p.armadura, habilidade: fonte.pericias[id].habilidade,
        treinada: fonte.pericias[id].treinada, outros: fonte.pericias[id].outros,
        total: sys.pericias[id].total, utilizavel: sys.pericias[id].utilizavel
      })),
      especialidades: Object.entries(sys.especialidades).map(([chave, e]) => ({
        chave, nome: e.nome, base: e.base, treinada: !!e.treinada, outros: Number(e.outros) || 0,
        habilidade: e.habilidade || PERICIAS[e.base]?.hab, total: e.total
      })),
      variaveis: Object.entries(fonte.variaveis).map(([chave, v]) => ({ chave, nome: v.nome, valor: v.valor })),
      classes: itens("classe"), racas: itens("raca"), talentos: itens("talento"),
      armas: itens("arma").map((a) => ({ item: a, ...sys.dadosArma(a) })),
      armaduras: itens("armadura"), equipamentos: itens("equipamento"), itensMagicos: itens("itemMagico"),
      magiasPorCiclo: Array.from({ length: 10 }, (_, c) => ({
        ciclo: c, magias: itens("magia").filter((m) => m.system.ciclo === c)
      })).filter((g) => g.magias.length),
      tiposCriaveis: TIPOS_CRIAVEIS,
      pvPercentual: sys.pv.max > 0 ? Math.min(100, Math.max(0, (sys.pv.value / sys.pv.max) * 100)) : 0
    });
    contexto.enriquecido = {
      biografia: await foundry.applications.ux.TextEditor.implementation.enrichHTML(fonte.biografia, {
        relativeTo: ator, rollData: ator.getRollData()
      })
    };
    return contexto;
  }

  _onRender(contexto, opcoes) {
    super._onRender?.(contexto, opcoes);
    // Filtro por nome na lista de magias.
    this.element.querySelector("[data-filtro-magias]")?.addEventListener("input", (ev) => {
      const termo = ev.currentTarget.value.trim().toLowerCase();
      this.element.querySelectorAll("[data-nome-magia]").forEach((linha) => {
        linha.hidden = termo !== "" && !linha.dataset.nomeMagia.toLowerCase().includes(termo);
      });
    });
    // Campos de itens editados direto na ficha (nível da classe, PM atual, quantidade, equipado...).
    this.element.querySelectorAll("[data-item-id][data-item-campo]").forEach((campo) => {
      campo.addEventListener("change", async (ev) => {
        const alvo = ev.currentTarget;
        const item = this.actor.items.get(alvo.dataset.itemId);
        const valor = alvo.type === "checkbox" ? alvo.checked : alvo.type === "number" ? Number(alvo.value) : alvo.value;
        await item?.update({ [alvo.dataset.itemCampo]: valor });
      });
    });
  }

  /* ---------------- ações ---------------- */

  static _mudarAba(evento, alvo) {
    this.aba = alvo.dataset.aba;
    this.render();
  }

  static async _gastarPA() {
    const escolha = await DialogV2.wait({
      window: { title: "Gastar Ponto de Ação" },
      content: "<p>Escolha o benefício. Os valores seguem a tabela de recuperação do seu nível.</p>",
      buttons: [
        { action: "dado", label: "Dado extra" }, { action: "pv", label: "Recuperar PV" },
        { action: "pm", label: "Recuperar PM" }, { action: "outro", label: "Outro (só gastar)" }
      ],
      rejectClose: false
    });
    if (escolha) return this.actor.gastarPA(escolha);
  }

  static _rolar(evento, alvo) {
    const { tipo, id } = alvo.dataset;
    const mapa = {
      habilidade: "rolarHabilidade", resistencia: "rolarResistencia",
      pericia: "rolarPericia", especialidade: "rolarEspecialidade"
    };
    return this.actor[mapa[tipo]]?.(id);
  }

  static _rolarArma(evento, alvo) {
    return this.actor.rolarArma(this.actor.items.get(alvo.dataset.itemId));
  }

  static _usarMagia(evento, alvo) {
    return this.actor.usarMagia(this.actor.items.get(alvo.dataset.itemId));
  }

  static async _criarItem(evento, alvo) {
    const tipo = alvo.dataset.tipo;
    const [item] = await this.actor.createEmbeddedDocuments("Item", [{
      name: game.i18n.localize(`TYPES.Item.${tipo}`), type: tipo,
      system: tipo === "magia" && alvo.dataset.ciclo ? { ciclo: Number(alvo.dataset.ciclo) } : {}
    }]);
    item?.sheet.render(true);
  }

  static _editarItem(evento, alvo) {
    this.actor.items.get(alvo.dataset.itemId)?.sheet.render(true);
  }

  static async _excluirItem(evento, alvo) {
    const item = this.actor.items.get(alvo.dataset.itemId);
    if (!item) return;
    const ok = await DialogV2.confirm({
      window: { title: "Excluir item" }, content: `<p>Excluir <strong>${item.name}</strong> desta ficha?</p>`, rejectClose: false
    });
    if (ok) await item.delete();
  }

  /** Pergunta nome e valor e grava em system.variaveis.<slug>. */
  static async _adicionarVariavel() {
    const dados = await DialogV2.prompt({
      window: { title: "Nova variável" },
      content: `<div class="form-group"><label>Nome</label><input type="text" name="nome" autofocus></div>
        <div class="form-group"><label>Valor</label><input type="text" name="valor" placeholder="2 ou 1d4"></div>
        <p class="hint">Use na fórmula como @nome.</p>`,
      ok: { label: "Criar", callback: (ev, botao) => new foundry.applications.ux.FormDataExtended(botao.form).object },
      rejectClose: false
    });
    if (!dados?.nome) return;
    const chave = slugVariavel(dados.nome);
    if (!chave || /^\d/.test(chave)) return ui.notifications.warn("Use um nome que comece com letra.");
    if (RESERVADAS.includes(chave)) return ui.notifications.warn(`"${chave}" já é usado pelo sistema. Escolha outro nome.`);
    await this.actor.update({ [`system.variaveis.${chave}`]: { nome: dados.nome, valor: dados.valor ?? "" } });
  }

  static _removerVariavel(evento, alvo) {
    return this.actor.update({ [`system.variaveis.-=${alvo.dataset.chave}`]: null });
  }

  static async _adicionarEspecialidade() {
    const bases = PERICIAS_ESPECIALIZAVEIS.map((id) => `<option value="${id}">${PERICIAS[id].label}</option>`).join("");
    const dados = await DialogV2.prompt({
      window: { title: "Nova especialização" },
      content: `<div class="form-group"><label>Perícia</label><select name="base">${bases}</select></div>
        <div class="form-group"><label>Nome</label><input type="text" name="nome" autofocus></div>`,
      ok: { label: "Criar", callback: (ev, botao) => new foundry.applications.ux.FormDataExtended(botao.form).object },
      rejectClose: false
    });
    if (!dados?.nome) return;
    const chave = foundry.utils.randomID();
    await this.actor.update({
      [`system.especialidades.${chave}`]: { nome: dados.nome, base: dados.base, treinada: false, habilidade: PERICIAS[dados.base].hab, outros: 0 }
    });
  }

  static _removerEspecialidade(evento, alvo) {
    return this.actor.update({ [`system.especialidades.-=${alvo.dataset.chave}`]: null });
  }
}
