"use strict";

const ACHIEVEMENTSTAB = `
<h2 class="center">Achievements</h2>
<div style="display: flex">
  <div class="group center" id="achievements_col1">
    <div id="ach1" class="unachieved dashed achievement">
      <p class="bold">${ACHIEVEMENTS[1].name}</p>
      <p class="amount hidden">${ACHIEVEMENTS[1].desc}</p>
    </div>
  </div>
  <div class="group center" id="achievements_col2">
    <div id="ach2" class="unachieved dashed achievement">
      <p class="bold">${ACHIEVEMENTS[2].name}</p>
      <p class="amount hidden">${ACHIEVEMENTS[2].desc}</p>
      <p class="amount hidden glow">${ACHIEVEMENTS[2].bonus}</p>
    </div>
  </div>
  <div class="group center" id="achievements_col3">
    <div id="ach3" class="unachieved dashed achievement">
      <p class="bold">${ACHIEVEMENTS[3].name}</p>
      <p class="amount hidden">${ACHIEVEMENTS[2].desc}</p>
    </div>
  </div>
</div>
`;