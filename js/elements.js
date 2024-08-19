"use strict";

class Elements {
  elementClicked(element) {
    currentElement = element;

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
  }

  updateLoop() {
    this.checkMilestones();
  }
}
