class Period1 {
  constructor() {
    this.producing = new Decimal(0);
  }

  updateLoop() {
    this.producing = new Decimal(0);
    Object.values(producers.period1).forEach((p) => {
      this.producing = this.producing.add(p.amount.mul(p.produces));
    });

    Object.values(producers.period1).forEach((p) => {
      ds.updateProducerDisplay(1, p);
    });
  }
}