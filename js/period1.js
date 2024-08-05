class Period1 {
  constructor() {
    this.producing = new Decimal(0);
  }

  processUpgrades() {
    // Hydrogen Gatherers
    let tmp = new Decimal(1);
    let ups = UPGRADES.period1.producer1;
    if (ups.upgrade1.bought) tmp = tmp.mul(1.5);
    if (ups.upgrade2.bought) tmp = tmp.mul(1.5);
    if (ACHIEVEMENTS[2].achieved) tmp = tmp.mul(1.05);
    PRODUCERS.period1.producer1.produces = tmp;

    // Helium Hunters
    tmp = new Decimal(7.5);
    ups = UPGRADES.period1.producer2;
    if (ups.upgrade1.bought)
      PRODUCERS.period1.producer1.scaling = new Decimal(1.005);
    if (ups.upgrade2.bought)
      tmp = tmp.add(PRODUCERS.period1.producer1.amount.mul(0.33));
    if (ACHIEVEMENTS[2].achieved) tmp = tmp.mul(1.05);
    PRODUCERS.period1.producer2.produces = tmp;
  }

  updateLoop() {
    this.processUpgrades();

    this.producing = new Decimal(0);
    Object.values(PRODUCERS.period1).forEach((p) => {
      this.producing = this.producing.add(p.amount.mul(p.produces));
    });

    Object.values(PRODUCERS.period1).forEach((p) => {
      ds.updateProducerDisplay(1, p);
    });
  }
}
