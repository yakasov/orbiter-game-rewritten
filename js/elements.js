"use strict";

class Elements {
  elementClicked(element) {
    currentElement = element;

    if (PERIODIC[element]) {
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
  }

  checkMilestones() {
    if (PERIODIC.hydrogen.resets >= 2) {
      ELEMENTS.hydrogen.enabled = true;
      EC.buyUpgrade(1, 1, 3, true);
    }

    if (PERIODIC.hydrogen.resets >= 3) {
      EC.buyUpgrade(1, 1, 1, true);
      EC.buyUpgrade(1, 1, 2, true);

      const t = currentTab;
      currentTab = 1;
      EC.buyElement("hydrogen", 1, true);
      EC.buyElement("hydrogen", 2, true);
      currentTab = t;
    }

    if (PERIODIC.helium.resets >= 2) {
      ELEMENTS.helium.enabled = true;
      EC.buyUpgrade(1, 2, 3, true);
    }

    if (PERIODIC.helium.resets >= 3) {
      EC.buyUpgrade(1, 2, 1, true);
      EC.buyUpgrade(1, 2, 2, true);

      const t = currentTab;
      currentTab = 1;
      EC.buyElement("helium", 1, true);
      EC.buyElement("helium", 2, true);
      currentTab = t;
    }
  }

  checkReveals() {
    if ((PERIODIC.hydrogen.resets >= 1 && PERIODIC.helium.resets >= 1) || period2Unlocked) {
      period2Unlocked = true;
      const el = document.getElementById("p2-button");

      if (el.classList.contains("hidden")) el.classList.remove("hidden");
    }
  }

  updateLoop() {
    this.checkMilestones();
    this.checkReveals();
  }
}
