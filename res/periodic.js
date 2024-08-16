/* eslint-disable sort-keys */

"use strict";

const PERIODIC = {
  "hydrogen": {
    "costFormula": () => new Decimal(500_000)
      .mul(PERIODIC.hydrogen.mult * 2),
    get "html"() { return `
<p>Condense all your Hydrogen and form H<sup>2</sup>, providing a 2x bonus to all Hydrogen related production.<br>
You will only get this bonus if your matter is greater than ${f(
    PERIODIC.hydrogen.costFormula()
  )}.</p>
<button class="scary" onclick="if (EC.matterBalance.gte(PERIODIC.hydrogen.costFormula())) PERIODIC.hydrogen.mult *= 2; PR.resetPeriod1();">Reset Period 1</button>
`; },
    "mult": 1,
  },
  "helium": {
    "html": "",
  },
};

Object.keys(PERIODIC)
  .forEach((e) => {
    PERIODIC[e].active = false;
  });
