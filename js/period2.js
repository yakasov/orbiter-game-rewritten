"use strict";

class Period2 {
  constructor() {
    this.producing = new Decimal(0);
    this.resets = 0;
  }

  get resetGain() {
    if (EC.matterBalance.gte(2_000_000)) {
      return f(
        (new Decimal(3))
          .pow(Math.log2(EC.matterBalance.div(2_000_000) + 1))
      );
    }

    return "no";
  }

  getSolids() {
    if (EC.matterBalance.gte(2_000_000)) {
      EC.solidBalance = EC.solidBalance.add(this.resetGain);
      this.resets++;
    }

    PR.resetPeriod1(true);
    PR.resetElements();
  }

  getElementEffect(e, display = false) {
    let mult = 0;

    switch (e) {
    case "lithium":
      mult = 1 + (ELEMENTS[e].amount * 0.05);
      if (display) return `${mult}x production!`;
      return mult;

    case "beryllium":
      mult = ELEMENTS[e].amount;
      if (display) return `+${mult} to all producers!`;
      return mult;

    case "boron":
      mult = ELEMENTS[e].amount;
      if (display) return `-${mult} from all producer costs!`;
      return mult;

    case "carbon":
      mult = 0;
      if (display) return "1x";
      return mult;

    case "nitrogen":
      mult = 0;
      if (display) return "1x";
      return mult;

    case "oxygen":
      mult = 0;
      if (display) return "1x";
      return mult;

    case "fluorine":
      mult = 0;
      if (display) return "1x";
      return mult;

    case "neon":
      mult = 1 + (ELEMENTS[e].amount * 0.25);
      if (display) return `${mult}x to solids gain!`;
      return mult;

    default:
      return null;
    }
  }

  buyElement(e) {
    const cost = new Decimal(fibonacci(ELEMENTS[e].amount) + 1);
    if (EC.solidBalance.gte(cost)) {
      EC.solidBalance = EC.solidBalance.sub(cost);
      ELEMENTS[e].amount++;
    }

    return null;
  }

  updateElementAmounts() {
    ["lithium", "beryllium", "boron", "carbon", "nitrogen", "oxygen", "fluorine", "neon"].forEach((e) => {
      const elAmount = document.getElementById(`p2-${e}-amount`);
      const elButton = document.getElementById(`p2-${e}-button`);

      elAmount.innerText = this.getElementEffect(e, true);
      elButton.innerText = `Buy for ${f(new Decimal(fibonacci(ELEMENTS[e].amount) + 1))}`;
    });
  }

  updateResetAmount() {
    const el = document.getElementById("p2-reset-gain");
    el.innerText = `You will gain ${this.resetGain} solids.`;
  }

  updateLoop() {
    this.updateElementAmounts();
    this.updateResetAmount();
  }
}
