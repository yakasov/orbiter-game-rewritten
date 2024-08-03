class Economy {
  constructor() {
    this.matterBalance = new Decimal(10);
    this.matterProducing = new Decimal(0);
  }

  buyProducer(pe, pr) {
    const p = producers[`period${pe}`][`producer${pr}`];
    if (this.matterBalance.gte(p.cost)) {
      this.matterBalance = this.matterBalance.sub(p.cost);
      p.amount = p.amount.add(1);
      p.cost = p.amount.mul(p.base).pow(p.scaling);
    }
  }

  updateBalance() {
    this.matterBalance = this.matterBalance.add(
      this.matterProducing.div(economyDivisor)
    );
  }

  getProducing() {
    this.matterProducing = new Decimal(0);
    this.matterProducing = this.matterProducing.add(p1.producing);
    //console.log(this.matterProducing);
  }

  updateLoop() {
    this.getProducing();
    this.updateBalance();
  }
}
