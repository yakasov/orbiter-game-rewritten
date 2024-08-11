"use strict";

class Period1 {
  constructor() {
    this.producing = new Decimal(0);
  }

  processUpgrades() {
    // Hydrogen Gatherers
    let tmp = PRODUCERS.period1.producer1.producesBase;
    let ups = UPGRADES.period1.producer1;
    const elm = ELEMENTS[PRODUCERS.period1.producer1.element];
    if (ups.upgrade1.bought) tmp = tmp.mul(1.5);
    if (ups.upgrade2.bought) tmp = tmp.mul(1.5);
    if (ACHIEVEMENTS[2].achieved) tmp = tmp.mul(1.05);
    PRODUCERS.period1.producer1.produces = tmp;

    tmp = elm.producing;
    if (ups.upgrade3.bought && !elm.enabled) {
      elm.enabled = true;
    }
    if (elm.upgrade1.bought) tmp = tmp.mul(2);
    elm.producing = tmp;

    // Helium Hunters
    tmp = PRODUCERS.period1.producer2.producesBase;
    ups = UPGRADES.period1.producer2;
    if (ups.upgrade1.bought)
      PRODUCERS.period1.producer2.scaling = new Decimal(1.17);
    if (ups.upgrade2.bought)
      tmp = tmp.add(PRODUCERS.period1.producer1.amount.mul(0.5));
    if (ACHIEVEMENTS[2].achieved) tmp = tmp.mul(1.05);
    PRODUCERS.period1.producer2.produces = tmp;
  }

  displayElements() {
    const box = document.getElementById("p1-hydrogen-element-box");
    if (
      box.classList.contains("hidden") &&
      UPGRADES.period1.producer1.upgrade3.bought
    ) {
      box.classList.remove("hidden");
      box.classList.add("fade-in");
    }
  }

  updateAmounts() {
    this.producing = new Decimal(0);
    Object.values(PRODUCERS.period1)
      .forEach((p) => {
        this.producing = this.producing.add(p.amount.mul(p.produces));
        if (p.element && ELEMENTS[p.element].enabled) {
          ELEMENTS[p.element].producing = p.amount.div(50);
        }
      });
  }

  updateLoop() {
    this.updateAmounts();
    this.processUpgrades();
    this.displayElements();

    Object.values(PRODUCERS.period1)
      .forEach((p) => {
        ds.updateProducerDisplay(1, p);
      });
  }
}
