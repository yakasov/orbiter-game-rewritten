"use strict";

class Economy {
  constructor() {
    this.matterBalance = new Decimal(10);
    this.matterProducing = new Decimal(0);

    this.solidBalance = new Decimal(0);
    this.solidProducing = new Decimal(0);
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
    return Decimal.max(p.base.mul(p.scaling.pow(p.amount)), 1);
  }

  buyUpgrade(pe, pr, up, force = false) {
    const u = UPGRADES[`period${pe}`][`producer${pr}`][`upgrade${up}`];
    if (this.matterBalance.gte(u.cost) || force) {
      if (!force) this.matterBalance = this.matterBalance.sub(u.cost);
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

  buyElement(elm, up, force = false) {
    const tab = currentTab;
    const u = ELEMENTS[elm][`upgrade${up}`];
    if (ELEMENTS[elm].amount.gte(u.cost) || force) {
      if (!force) ELEMENTS[elm].amount = ELEMENTS[elm].amount.sub(u.cost);
      u.bought = true;

      const button = document.getElementById(
        `p${tab}-${elm}-upgrade${up}-button`
      );
      button.classList.remove("upgrade-button");
      button.classList.add("bought-button");

      if (u.perm) {
        button.classList.remove("pulse");
        button.classList.add("permanent");
      }

      const cost = document.getElementById(
        `p${tab}-${elm}-upgrade${up}-cost`
      );
      cost.innerText = "Bought!";
    }
  }

  updateBalance() {
    this.matterBalance = this.matterBalance.add(
      this.matterProducing.div(ECONOMYDIVISOR)
    );
  }

  updateElementBalances() {
    Object.keys(ELEMENTS)
      .forEach((e) => {
        if (ELEMENTS[e].enabled) {
          ELEMENTS[e].amount = ELEMENTS[e].amount.add(
            ELEMENTS[e].producing.div(ECONOMYDIVISOR)
          );
        }
      });
  }

  getProducing() {
    this.matterProducing = new Decimal(0);
    this.matterProducing = this.matterProducing.add(P1.producing);
  }

  updateLoop() {
    this.getProducing();
    this.updateBalance();
    this.updateElementBalances();
  }
}
