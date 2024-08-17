/* eslint-disable sort-keys */

"use strict";

const PERIODIC = {
  "hydrogen": {
    "costFormula": () => new Decimal(500_000)
      .mul(PERIODIC.hydrogen.mult * 2),
    get "html"() { return `
<p>Condense all your Hydrogen and form H<sub>2</sub>, providing a 2x bonus to all Hydrogen related production.<br>
<b>You will only get this bonus if your matter is greater than ${f(
    PERIODIC.hydrogen.costFormula()
  )}.</b></p>
<button class="scary" onclick="if (EC.matterBalance.gte(PERIODIC.hydrogen.costFormula())) PERIODIC.hydrogen.mult *= 2; PR.resetPeriod1();">Reset Period 1</button>
`; },
    "mult": 1,
  },
  "helium": {
    "costFormula": () => 0,
    "html": "",
    "mult": 1
  },
};

Object.keys(PERIODIC)
  .forEach((e) => {
    PERIODIC[e].active = false;
  });
