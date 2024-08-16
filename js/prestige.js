"use strict";

class Prestige {
  baseElement(obj) {
    return {
      amount: new Decimal(0),
      enabled: true,
      producing: new Decimal(0),
      upgrade1: {
        bought: obj.upgrade1.perm ?? false
      },
      upgrade2: {
        bought: obj.upgrade2.perm ?? false
      },
      upgrade3: {
        bought: obj.upgrade3.perm ?? false
      }
    };
  }

  baseProducer(obj) {
    return {
      amount: new Decimal(0),
      produces: obj.producesBase,
      scaling: obj.scalingBase
    };
  }
  
  resetBalance() {
    EC.matterBalance = new Decimal(10);
    EC.matterProducing = new Decimal(0);
  }

  resetPeriod1() {
    Object.assign(ELEMENTS.hydrogen, this.baseElement(ELEMENTS.hydrogen));
    Object.assign(ELEMENTS.helium, this.baseElement(ELEMENTS.helium));

    Object.keys(PRODUCERS.period1)
      .forEach((k) => {
        Object.assign(PRODUCERS.period1[k], this.baseProducer(PRODUCERS.period1[k]));
      });
    
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