export class TormentaItem extends foundry.documents.Item {
  async _preCreate(data, options, usuario) {
    const permitido = await super._preCreate(data, options, usuario);
    if (permitido === false) return false;
    // A primeira classe do personagem é a inicial (dá o PV do 1º nível).
    if (this.type === "classe" && this.parent?.documentName === "Actor"
      && !this.parent.items.some((i) => i.type === "classe")) {
      this.updateSource({ "system.inicial": true });
    }
  }
}
