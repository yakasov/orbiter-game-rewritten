/* eslint-disable sort-keys */

"use strict";

const PERIODIC = {
  "hydrogen": {
    "active": true,
    "costFormula": () => new Decimal(100_000)
      .mul(2 ** (PERIODIC.hydrogen.resets + 1)),
    get "htmlLeft"() {
      return `
<p>Condense all your Hydrogen and form H<sub>2</sub>, providing a ${2 ** (PERIODIC.hydrogen.resets + 1)}x bonus to all Hydrogen related production.<br>
<b>You will only get this bonus if your matter is greater than ${f(
    PERIODIC.hydrogen.costFormula()
  )}.</b></p>
<button class="scary" onclick="if (EC.matterBalance.gte(PERIODIC.hydrogen.costFormula())) PERIODIC.hydrogen.resets += 1; PR.resetPeriod1();">Reset Period 1</button>
`;
    },
    get "htmlRight"() {
      return `
<h3>Milestones</h3>
<span class="less-height">
  <p class="${PERIODIC.hydrogen.resets >= 2
    ? ""
    : "unachieved"}">2 Resets: Permanently produce Hydrogen</p>
  <p class="${PERIODIC.hydrogen.resets >= 3
    ? ""
    : "unachieved"}">3 Resets: Keep all Hydrogen-related upgrades</p>
</span>
`;
    },
    "resets": 0,
    "unlocked": true
  },
  "helium": {
    "active": true,
    "costFormula": () => new Decimal(200_000)
      .mul(2 ** (PERIODIC.helium.resets + 1)),
    get "htmlLeft"() {
      return `
<p>Bond your Helium atoms to Hydrogen atoms and form He<sup>+</sup>, burning through Period 1 costs and reducing producer scaling by ${((PERIODIC.helium.resets + 1) * 100) / (PERIODIC.helium.resets + 4)}%.<br>
<b>You will only get this bonus if your matter is greater than ${f(
    PERIODIC.helium.costFormula()
  )}.</b></p>
<button class="scary" onclick="if (EC.matterBalance.gte(PERIODIC.helium.costFormula())) PERIODIC.helium.resets += 1; PR.resetPeriod1();">Reset Period 1</button>
`;
    },
    get "htmlRight"() {
      return `
<h3>Milestones</h3>
<span class="less-height">
  <p class="${PERIODIC.helium.resets >= 2
    ? ""
    : "unachieved"}">2 Resets: Permanently produce Helium</p>
  <p class="${PERIODIC.helium.resets >= 3
    ? ""
    : "unachieved"}">3 Resets: Keep all Helium-related upgrades</p>
</span>
`;
    },
    "resets": 0,
    "unlocked": true
  }
};

Object.keys(PERIODIC)
  .forEach((e) => {
    PERIODIC[e].active ??= false;
  });
