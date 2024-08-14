"use strict";

class Period1 {
  constructor() {
    this.producing = new Decimal(0);
  }

  processUpgrades() {

    /*
     * Hydrogen Gatherers
     * Production multipliers
     */
    let tmp = PRODUCERS.period1.producer1.producesBase;
    let ups = UPGRADES.period1.producer1;
    let elm = ELEMENTS[PRODUCERS.period1.producer1.element];
    if (ups.upgrade1.bought) tmp = tmp.mul(1.5);
    if (ups.upgrade2.bought) tmp = tmp.mul(1.5);
    if (ACHIEVEMENTS[2].achieved) tmp = tmp.mul(1.05);
    PRODUCERS.period1.producer1.produces = tmp;

    // Element enabling
    if (ups.upgrade3.bought && !elm.enabled) {
      elm.enabled = true;
    }

    // Element production multipliers
    tmp = elm.producing;
    if (elm.upgrade1.bought) tmp = tmp.mul(2);
    elm.producing = tmp;

    // Element boosting Gatherer scaling
    tmp = PRODUCERS.period1.producer1.scalingBase;
    const tmp2 = new Decimal(1.05); // Minimum scaling
    const tmp3 = tmp.sub(tmp2); // ~0.19
    if (elm.upgrade2.bought) tmp =
      tmp2.add(tmp3.div(Math.log10(elm.amount) + 1));
    PRODUCERS.period1.producer1.scaling = tmp;

    /*
     * Helium Hunters
     * Production multipliers
     */
    tmp = PRODUCERS.period1.producer2.producesBase;
    ups = UPGRADES.period1.producer2;
    elm = ELEMENTS[PRODUCERS.period1.producer2.element];
    if (ups.upgrade2.bought)
      tmp = tmp.add(PRODUCERS.period1.producer1.amount.mul(0.5));
    if (ACHIEVEMENTS[2].achieved) tmp = tmp.mul(1.05);
    PRODUCERS.period1.producer2.produces = tmp;

    // Hunter price scaling
    tmp = PRODUCERS.period1.producer2.scalingBase;
    if (ups.upgrade1.bought)
      tmp = tmp.sub(0.18);
    PRODUCERS.period1.producer2.scaling = tmp;

    // Element enabling
    if (ups.upgrade3.bought && !elm.enabled) {
      elm.enabled = true;
    }

    // Element production multipliers
    tmp = elm.producing;
    if (elm.upgrade1.bought) tmp = tmp.mul(2);
    elm.producing = tmp;
  }

  displayElements() {
    /*
     * I'm sure this can be done better
     * but for just Period 1, it works fine I reckon
     */
    let box = document.getElementById("p1-hydrogen-element-box");
    if (
      box.classList.contains("hidden") &&
      UPGRADES.period1.producer1.upgrade3.bought
    ) {
      box.classList.remove("hidden");
      box.classList.add("fade-in");
    }

    box = document.getElementById("p1-helium-element-box");
    if (
      box.classList.contains("hidden") &&
      UPGRADES.period1.producer2.upgrade3.bought
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
