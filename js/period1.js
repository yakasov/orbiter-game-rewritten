class Period1 {
  constructor() {
    this.producing = new Decimal(0);
  }

  processUpgrades() {
    // Hydrogen Gatherers
    let tmp = new Decimal(1);
    let ups = upgrades.period1.producer1;
    if (ups.upgrade1.bought) tmp = tmp.mul(2);
    if (ups.upgrade2.bought) tmp = tmp.mul(2);
    producers.period1.producer1.produces = tmp;
  }

  updateLoop() {
    this.processUpgrades();
    
    this.producing = new Decimal(0);
    Object.values(producers.period1).forEach((p) => {
      this.producing = this.producing.add(p.amount.mul(p.produces));
    });

    Object.values(producers.period1).forEach((p) => {
      ds.updateProducerDisplay(1, p);
    });
  }
}