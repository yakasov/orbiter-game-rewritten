"use strict";

class Prestige {
  baseElement(obj) {
    return {
      amount: new Decimal(0),
      enabled: false,
      producing: new Decimal(0),
      upgrade1: {
        bought: obj.upgrade1.perm ?? false,
      },
      upgrade2: {
        bought: obj.upgrade2.perm ?? false,
      },
      upgrade3: {
        bought: obj.upgrade3.perm ?? false,
      },
    };
  }

  baseProducer(obj) {
    return {
      amount: new Decimal(0),
      produces: obj.producesBase,
      scaling: obj.scalingBase,
    };
  }

  resetBalance() {
    EC.matterProducing = new Decimal(0);
    EC.matterBalance = new Decimal(10);

    setTimeout(() => {
      EC.matterProducing = new Decimal(0);
      EC.matterBalance = new Decimal(10);
    }, UPDATELOOPINTERVAL + 1);
  }

  resetPeriod1() {
    Object.assign(ELEMENTS.hydrogen, this.baseElement(ELEMENTS.hydrogen));
    Object.assign(ELEMENTS.helium, this.baseElement(ELEMENTS.helium));

    Object.keys(PRODUCERS.period1)
      .forEach((k) => {
        Object.assign(
          PRODUCERS.period1[k],
          this.baseProducer(PRODUCERS.period1[k])
        );
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

    if (PERIODIC.hydrogen.resets >= 2) ELEMENTS.hydrogen.enabled = true;

    document.getElementById("p1-tab").innerHTML = PERIOD1TAB;
    document.getElementById("p1-hydrogen-upgrade3")
      .classList.add("perma-hidden");
    document.getElementById("p1-helium-upgrade3")
      .classList.add("perma-hidden");

    this.resetBalance();
  }
}
