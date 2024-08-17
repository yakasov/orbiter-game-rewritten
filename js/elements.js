"use strict";

class Elements {
  elementClicked(element) {
    const el = document.getElementById("element-info");
    el.innerHTML = `
    <div class="content-group">
      ${PERIODIC[element].htmlLeft}
    </div>
    <div class="content-group">
      ${PERIODIC[element].htmlRight}
    </div>
`;
  }

  checkMilestones() {
    if (PERIODIC.hydrogen.reset >= 3) {
      Object.assign(UPGRADES.period1.producer1, {
        "upgrade1": {
          "bought": true,
          "perm": true
        },
        "upgrade2": {
          "bought": true,
          "perm": true
        },
        "upgrade3": {
          "bought": true,
          "perm": true
        },
      });

      Object.assign(ELEMENTS.hydrogen, {
        "upgrade1": {
          "bought": true,
          "perm": true
        },
        "upgrade2": {
          "bought": true,
          "perm": true
        }
      });
    }
  }

  updateLoop() {
    this.checkMilestones();
  }
}
