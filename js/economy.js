class Economy {
  constructor() {
    this.matterBalance = new Decimal(10);
    this.matterProducing = new Decimal(0);
  }

  buyProducer(pe, pr) {
    const p = PRODUCERS[`period${pe}`][`producer${pr}`];
    if (this.matterBalance.gte(p.cost)) {
      this.matterBalance = this.matterBalance.sub(p.cost);
      p.amount = p.amount.add(1);
      p.cost = this.getCost(p);
    }
  }

  buyMax(pe, pr) {
    const p = PRODUCERS[`period${pe}`][`producer${pr}`];
    while (this.matterBalance.gte(p.cost)) {
      this.matterBalance = this.matterBalance.sub(p.cost);
      p.amount = p.amount.add(1);
      p.cost = this.getCost(p);
    }
  }

  getCost(p) {
    return p.base.mul(p.scaling.pow(p.amount));
  }

  buyUpgrade(pe, pr, up) {
    const u = UPGRADES[`period${pe}`][`producer${pr}`][`upgrade${up}`];
    if (this.matterBalance.gte(u.cost)) {
      this.matterBalance = this.matterBalance.sub(u.cost);
      u.bought = true;

      const button = document.getElementById(
        `p${pe}-producer${pr}-upgrade${up}-button`
      );
      button.classList.remove("upgrade-button");
      button.classList.add("bought-button");

      const cost = document.getElementById(
        `p${pe}-producer${pr}-upgrade${up}-cost`
      );
      cost.innerText = "Bought!";
    }
  }

  updateBalance() {
    this.matterBalance = this.matterBalance.add(
      this.matterProducing.div(ECONOMYDIVISOR)
    );
  }

  getProducing() {
    this.matterProducing = new Decimal(0);
    this.matterProducing = this.matterProducing.add(p1.producing);
  }

  updateLoop() {
    this.getProducing();
    this.updateBalance();
  }
}
