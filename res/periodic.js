/* eslint-disable sort-keys */

"use strict";

const PERIODIC = {
  "hydrogen": {
    "html": `
<p>Condense all your Hydrogen and form H<sup>2</sup>, providing a 2x bonus to all Hydrogen related production.</p>
<button class="scary" onclick="PERIODIC.hydrogen.active = true; PR.resetPeriod1();">Reset Period 1</button>
`
  },
  "helium": {
    "html": ""
  }
};

Object.keys(PERIODIC)
  .forEach((e) => {
    PERIODIC[e].active = false;
  });
