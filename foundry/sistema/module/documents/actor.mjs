import { PERICIAS, RESISTENCIAS, HABILIDADES } from "../config.mjs";
import * as R from "../rules.mjs";

const sinal = (n) => (n >= 0 ? `+${n}` : `${n}`);

export class TormentaActor extends foundry.documents.Actor {
  getRollData() {
    return this.system.getRollData?.() ?? super.getRollData();
  }

  get falante() {
    return ChatMessage.getSpeaker({ actor: this });
  }

  /** Teste básico: 1d20 + bônus. */
  async #teste(rotulo, bonus) {
    const roll = new Roll("1d20 + @b", { b: bonus });
    await roll.toMessage({ speaker: this.falante, flavor: `${rotulo} (${sinal(bonus)})` });
    return roll;
  }

  rolarHabilidade(id) {
    return this.#teste(`Teste de ${HABILIDADES[id].label}`, this.system.habilidades[id].mod);
  }

  rolarResistencia(id) {
    return this.#teste(`Teste de ${RESISTENCIAS[id].label}`, this.system.resistencias[id].total);
  }

  rolarPericia(id) {
    const p = this.system.pericias[id];
    if (!p.utilizavel) return ui.notifications.warn(`${PERICIAS[id].label} só pode ser usada por quem é treinado.`);
    return this.#teste(PERICIAS[id].label, p.total);
  }

  rolarEspecialidade(chave) {
    const e = this.system.especialidades[chave];
    if (!e) return;
    return this.#teste(`${PERICIAS[e.base]?.label ?? "Perícia"}: ${e.nome}`, e.total);
  }

  /** Ataque (1d20 + Nível + mod.) e dano (arma + MdN + mod.). Em ameaça de crítico rola o dano crítico. */
  async rolarArma(arma) {
    const d = arma.system;
    const base = this.system.dadosArma(arma);
    const dados = this.getRollData();

    if (d.tipoAtaque === "distancia" && d.municao !== null) {
      if (d.municao <= 0) return ui.notifications.warn(`${arma.name}: sem munição.`);
      await arma.update({ "system.municao": d.municao - 1 });
    }

    try {
      const extraAtq = d.bonusAtaque.trim() ? ` + (${d.bonusAtaque})` : "";
      const ataque = new Roll(`1d20 + ${base.ataque}${extraAtq}`, dados);
      await ataque.evaluate();

      const { margem, multiplicador } = R.parseCritico(d.critico);
      const natural = ataque.dice[0]?.results[0]?.result ?? 0;
      const ameaca = natural >= margem;

      const dado = ameaca ? R.multiplicarDados(d.dano, multiplicador) : d.dano;
      const extraDano = d.bonusDano.trim() ? ` + (${d.bonusDano})` : "";
      const dano = new Roll(`max(1, ${dado} + ${base.dano}${extraDano})`, dados);
      await dano.evaluate();

      const aviso = ameaca ? ` — ameaça de crítico (${d.critico}): se acertar, dano ×${multiplicador}` : "";
      await ataque.toMessage({ speaker: this.falante, flavor: `${arma.name}: ataque${aviso}` });
      await dano.toMessage({ speaker: this.falante, flavor: `${arma.name}: dano${ameaca ? " crítico" : ""} (${d.tipoDano || "dano"})` });
    } catch (erro) {
      console.error(erro);
      ui.notifications.error(`${arma.name}: fórmula inválida. Verifique os campos de bônus e as variáveis.`);
    }
  }

  /** Gasta PM da reserva e posta a magia com CD; rola dano se houver fórmula. */
  async usarMagia(magia) {
    const d = magia.system;
    const reservas = this.system.reservasPM;
    const reserva = reservas.find((r) => r.id === d.reserva) ?? reservas[0];

    if (d.custoPM > 0) {
      if (!reserva) ui.notifications.warn("Nenhuma classe com PM: o custo não foi descontado.");
      else if (reserva.atual < d.custoPM) return ui.notifications.warn(`PM insuficientes em ${reserva.nome} (${reserva.atual}/${reserva.max}).`);
      else await this.items.get(reserva.id).update({ "system.pm.atual": reserva.atual - d.custoPM });
    }

    const cabecalho = `<strong>${magia.name}</strong> — ${d.ciclo}º ciclo · ${d.custoPM} PM · CD ${this.system.cd}`;
    if (!d.dano.trim()) {
      return ChatMessage.create({ speaker: this.falante, content: `<p>${cabecalho}</p>` });
    }
    try {
      const roll = new Roll(`${d.dano} + @mdn + ${this.system.bonus.danoMagia}`, this.getRollData());
      await roll.toMessage({ speaker: this.falante, flavor: cabecalho });
    } catch (erro) {
      console.error(erro);
      ui.notifications.error(`${magia.name}: fórmula de dano inválida.`);
    }
  }

  /** Gasta 1 Ponto de Ação: dado extra, recuperar PV ou PM (valores pela tabela do compendium). */
  async gastarPA(tipo) {
    const sys = this.system;
    if (sys.pa.value <= 0) return ui.notifications.warn("Sem Pontos de Ação.");
    const tabela = R.tabelaPA(sys.nivel);
    await this.update({ "system.pa.value": sys.pa.value - 1 });
    const fala = this.falante;
    if (tipo === "dado") {
      return new Roll(tabela.dado).toMessage({ speaker: fala, flavor: "Ponto de Ação: dado extra (some ao teste ou jogada, depois de rolar)" });
    }
    if (tipo === "pv") {
      const roll = new Roll(tabela.pv); await roll.evaluate();
      await this.update({ "system.pv.value": Math.min(sys.pv.max, sys.pv.value + roll.total) });
      return roll.toMessage({ speaker: fala, flavor: "Ponto de Ação: PV recuperados" });
    }
    if (tipo === "pm") {
      const roll = new Roll(tabela.pm); await roll.evaluate();
      const reserva = sys.reservasPM[0];
      if (reserva) await this.items.get(reserva.id).update({ "system.pm.atual": Math.min(reserva.max, reserva.atual + roll.total) });
      return roll.toMessage({ speaker: fala, flavor: `Ponto de Ação: PM recuperados${reserva ? ` (${reserva.nome})` : ""}` });
    }
    return ChatMessage.create({ speaker: fala, content: `<p><strong>${this.name}</strong> gasta 1 Ponto de Ação.</p>` });
  }
}
