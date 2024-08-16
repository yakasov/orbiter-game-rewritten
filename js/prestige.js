"use strict";

class Prestige {
  resetBalance() {
    EC.matterBalance = new Decimal(10);
    EC.matterProducing = new Decimal(0);
  }

  resetPeriod1() {
    ELEMENTS.hydrogen = structuredClone(ELEMENTS_COPY.hydrogen);
    ELEMENTS.helium = structuredClone(ELEMENTS_COPY.helium);
    PRODUCERS.period1 = structuredClone(PRODUCERS_COPY.period1);
    
    Object.keys(UPGRADES.period1)
      .forEach((p) => {
        Object.keys(UPGRADES.period1[p])
          .forEach((u) => {
            if (!UPGRADES.period1[p][u].perm) {
              UPGRADES.period1[p][u].bought = false;
            }
          });
      });

    this.resetBalance();
  }
}