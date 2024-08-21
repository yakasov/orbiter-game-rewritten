"use strict";

class Period2 {
  constructor() {
    this.producing = new Decimal(0);
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
    }

    PR.resetPeriod1(true);
    PR.resetElements();
  }

  updateResetAmount() {
    const el = document.getElementById("p2-reset-gain");
    el.innerText = `You will gain ${this.resetGain} solids.`;
  }

  updateLoop() {
    this.updateResetAmount();
  }
}
