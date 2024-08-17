/* eslint-disable sort-keys */

"use strict";

const PERIODIC = {
  "hydrogen": {
    "active": true,
    "costFormula": () => new Decimal(500_000)
      .mul(2 ** (PERIODIC.hydrogen.reset + 1)),
    get "htmlLeft"() { return `
<p>Condense all your Hydrogen and form H<sub>2</sub>, providing a ${2 ** (PERIODIC.hydrogen.reset + 1)}x bonus to all Hydrogen related production.<br>
<b>You will only get this bonus if your matter is greater than ${f(
    PERIODIC.hydrogen.costFormula()
  )}.</b></p>
<button class="scary" onclick="if (EC.matterBalance.gte(PERIODIC.hydrogen.costFormula())) PERIODIC.hydrogen.reset += 1; PR.resetPeriod1();">Reset Period 1</button>
`; },
    get "htmlRight"() { return `
<h3>Milestones</h3>
<span>
  <p class="${PERIODIC.hydrogen.reset >= 2 ? "" : "unachieved"}">2 Resets: Permanently produce Hydrogen</p><br>
  <p class="${PERIODIC.hydrogen.reset >= 3 ? "" : "unachieved"}">3 Resets: Keep all Hydrogen-related upgrades/p>
</span>
`; },
    "reset": 0,
    "unlocked": true
  },
  "helium": {
    "active": true,
    "costFormula": () => 0,
    get "htmlLeft"() {
      return "";
    },
    get "htmlRight"() {
      return "";
    },
    "reset": 1,
    "unlocked": true
  },
};

Object.keys(PERIODIC)
  .forEach((e) => {
    PERIODIC[e].active = false;
  });
