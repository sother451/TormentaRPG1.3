import { HABILIDADES, PERICIAS, RESISTENCIAS, TAMANHOS } from "../config.mjs";
import * as R from "../rules.mjs";

const { SchemaField, NumberField, StringField, BooleanField, HTMLField, ObjectField } = foundry.data.fields;

const int = (initial = 0, options = {}) =>
  new NumberField({ required: true, nullable: false, integer: true, initial, ...options });
const texto = () => new StringField({ required: true, blank: true, initial: "" });
const opcoes = (tabela) => Object.fromEntries(Object.entries(tabela).map(([k, v]) => [k, v.label ?? v.abrev]));
const habilidade = (inicial) =>
  new StringField({ required: true, blank: false, initial: inicial, choices: opcoes(HABILIDADES) });

const soma = (lista) => lista.reduce((s, v) => s + (Number(v) || 0), 0);

export class CharacterData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      detalhes: new SchemaField({ tendencia: texto(), divindade: texto(), idade: texto(), sexo: texto() }),
      tamanho: new StringField({ required: true, blank: false, initial: "medio", choices: opcoes(TAMANHOS) }),
      habilidades: new SchemaField(Object.fromEntries(Object.keys(HABILIDADES).map((k) => [k,
        new SchemaField({ valor: int(10, { min: 0 }), outros: int(), temp: int() })]))),
      resistencias: new SchemaField(Object.fromEntries(Object.entries(RESISTENCIAS).map(([k, d]) => [k,
        new SchemaField({ habilidade: habilidade(d.hab), outros: int(), temp: int() })]))),
      pericias: new SchemaField(Object.fromEntries(Object.entries(PERICIAS).map(([k, d]) => [k,
        new SchemaField({ treinada: new BooleanField({ initial: false }), habilidade: habilidade(d.hab), outros: int() })]))),
      conjuracao: new SchemaField({ habilidade: habilidade("int") }),
      pv: new SchemaField({ value: int(0), temporario: int(0, { min: 0 }) }),
      pa: new SchemaField({ value: int(1, { min: 0 }) }),
      // Bônus gerais: Active Effects e o jogador podem somar aqui.
      bonus: new SchemaField(Object.fromEntries(
        ["ataqueCorpo", "ataqueDistancia", "ataqueToque", "danoCorpo", "danoDistancia", "danoMagia",
          "ca", "resistencias", "pericias", "pv", "pvNivel", "pm", "cd"].map((k) => [k, int()]))),
      moedas: new SchemaField({ tibar: int(0, { min: 0 }), prata: int(0, { min: 0 }), ouro: int(0, { min: 0 }), platina: int(0, { min: 0 }) }),
      // Liberdade do jogador: variáveis (@nome) e especializações de perícia.
      variaveis: new ObjectField({ required: true, initial: {} }),
      especialidades: new ObjectField({ required: true, initial: {} }),
      biografia: new HTMLField({ required: true, blank: true, initial: "" })
    };
  }

  prepareDerivedData() {
    const itens = this.parent?.items ?? [];
    const porTipo = (tipo) => itens.filter((i) => i.type === tipo);
    const classes = porTipo("classe");
    const tam = TAMANHOS[this.tamanho] ?? TAMANHOS.medio;

    for (const h of Object.values(this.habilidades)) {
      h.total = h.valor + h.outros + h.temp;
      h.mod = R.modHabilidade(h.total);
    }
    const mod = (k) => this.habilidades[k].mod;

    this.nivel = soma(classes.map((c) => c.system.nivel));
    this.mdn = R.metadeNivel(this.nivel);
    this.mdc = mod(this.conjuracao.habilidade);
    this.bba = soma(classes.map((c) => R.bbaClasse(c.system.bba, c.system.nivel)));
    this.tamanhoMod = tam;

    // Equipamento defensivo
    const equipadas = porTipo("armadura").filter((a) => a.system.equipada);
    const armaduras = equipadas.filter((a) => !a.system.escudo);
    const escudos = equipadas.filter((a) => a.system.escudo);
    const penalidade = -soma(equipadas.map((a) => Math.abs(a.system.penalidade)));
    const des = R.desEfetiva(mod("des"), equipadas.map((a) => a.system.maxDex));
    this.ca = R.calcularCA({
      mdn: this.mdn, des, armadura: soma(armaduras.map((a) => a.system.ca)),
      escudo: soma(escudos.map((a) => a.system.ca)), tamanho: tam.ca, bonus: this.bonus.ca
    });
    this.penalidadeArmadura = penalidade;

    // Resistências
    for (const r of Object.values(this.resistencias)) {
      r.mod = mod(r.habilidade);
      r.total = this.mdn + r.mod + r.outros + r.temp + this.bonus.resistencias;
    }

    // Perícias
    for (const [id, def] of Object.entries(PERICIAS)) {
      const p = this.pericias[id];
      p.mod = mod(p.habilidade);
      p.total = R.bonusPericia({
        nivel: this.nivel, treinada: p.treinada, mod: p.mod, outros: p.outros + this.bonus.pericias,
        penalidadeArmadura: def.armadura ? penalidade : 0, tamanho: id === "furtividade" ? tam.furtividade : 0
      });
      p.utilizavel = !def.soTreinada || p.treinada;
    }
    for (const e of Object.values(this.especialidades)) {
      const def = PERICIAS[e.base] ?? PERICIAS.conhecimento;
      e.mod = mod(e.habilidade || def.hab);
      e.total = R.bonusPericia({
        nivel: this.nivel, treinada: !!e.treinada, mod: e.mod, outros: Number(e.outros) + this.bonus.pericias,
        penalidadeArmadura: def.armadura ? penalidade : 0
      });
    }
    this.iniciativa = this.pericias.iniciativa.total;

    // Ataque base e CD
    this.ataque = {
      corpo: this.nivel + mod("for") + tam.ca + this.bonus.ataqueCorpo,
      distancia: this.nivel + mod("des") + tam.ca + this.bonus.ataqueDistancia,
      toque: this.nivel + this.mdc + tam.ca + this.bonus.ataqueToque
    };
    this.cd = 10 + this.mdn + this.mdc + this.bonus.cd;

    // PV e PM
    this.pv.max = R.pvMaximo({
      classes: classes.map((c) => ({ nivel: c.system.nivel, pvInicial: c.system.pvInicial, pvPorNivel: c.system.pvPorNivel, inicial: c.system.inicial })),
      con: mod("con"), bonusNivel: this.bonus.pvNivel, bonus: this.bonus.pv
    });
    this.reservasPM = classes.filter((c) => c.system.pm.base !== null).map((c) => ({
      id: c.id, nome: c.name, atual: c.system.pm.atual,
      max: R.pmMaximo({ base: c.system.pm.base, porNivel: c.system.pm.porNivel, nivel: c.system.nivel, mdc: this.mdc, bonus: this.bonus.pm })
    }));

    // Carga: 3 x Força, em kg
    const peso = (i) => (Number(i.system.peso) || 0) * (Number(i.system.quantidade) || 1);
    this.carga = {
      atual: soma(itens.filter((i) => ["arma", "armadura", "equipamento", "itemMagico"].includes(i.type)).map(peso)),
      limite: 3 * this.habilidades.for.total
    };
  }

  /** Bônus de ataque e modificador de dano de uma arma (compendium: Nível + mod; dano: MdN + mod). */
  dadosArma(arma) {
    const d = arma.system;
    const habAtaque = d.habilidadeAtaque || (d.tipoAtaque === "distancia" ? "des" : "for");
    const habDano = d.tipoAtaque === "distancia" ? "des" : "for";
    const distancia = d.tipoAtaque === "distancia";
    return {
      ataque: this.nivel + this.habilidades[habAtaque].mod + this.tamanhoMod.ca
        + (distancia ? this.bonus.ataqueDistancia : this.bonus.ataqueCorpo),
      dano: this.mdn + this.habilidades[habDano].mod + (distancia ? this.bonus.danoDistancia : this.bonus.danoCorpo)
    };
  }

  /** Dados de rolagem: @for, @des, @nivel, @mdn, @acrobacia, @fortitude, @suavariavel... */
  getRollData() {
    const d = {};
    for (const [chave, v] of Object.entries(this.variaveis)) d[chave] = R.valorVariavel(v.valor);
    Object.assign(d, { nivel: this.nivel, mdn: this.mdn, mdc: this.mdc, bba: this.bba, ca: this.ca, cd: this.cd });
    for (const k of Object.keys(HABILIDADES)) d[k] = this.habilidades[k].mod;
    for (const k of Object.keys(PERICIAS)) d[k] = this.pericias[k].total;
    for (const k of Object.keys(RESISTENCIAS)) d[k] = this.resistencias[k].total;
    return d;
  }
}
