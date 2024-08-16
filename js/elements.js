"use strict";

class Elements {
  elementClicked(element) {
    const el = document.getElementById("element-info");
    el.innerHTML = PERIODIC[element].html;
  }

  updateLoop() {
    return null;
  }
}
