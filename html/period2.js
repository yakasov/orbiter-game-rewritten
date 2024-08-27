"use strict";

const PERIOD2TAB = `
<div class="center less-height" id="p2-reset-button">
  <h2>Reset your progress (matter and elemental resets)</h2>
  <h4 id="p2-reset-gain">You will gain some something.</h4>
  <button class="scary" onclick="P2.getSolids()">Reset progress</button>
</div>

<br> <br>

<div>
  <div class="content">
    <div class="eighth-content-group center">
      <h4 class="alkali">Lithium</h4>
      <p id="p2-lithium-amount"></p>
      <button id="p2-lithium-button" onclick="P2.buyElement('lithium')"></button>
      <p class="amount grey">+0.05x to all production</p>
    </div>

    <div class="eighth-content-group center">
      <h4 class="alkaline">Beryllium</h4>
      <p id="p2-beryllium-amount"></p>
      <button id="p2-beryllium-button" onclick="P2.buyElement('beryllium')"></button>
      <p class="amount grey">+1 to each producer base</p>
    </div>

    <div class="eighth-content-group center">
      <h4 class="metalloid">Boron</h4>
      <p id="p2-boron-amount"></p>
      <button id="p2-boron-button" onclick="P2.buyElement('boron')"></button>
      <p class="amount grey">-1 from all producer base costs</p>
      </div>

    <div class="eighth-content-group center">
      <h4 class="reactive">Carbon</h4>
      <p id="p2-carbon-amount"></p>
      <button id="p2-carbon-button" onclick="P2.buyElement('carbon')"></button>
      <p class="amount grey">+0.05x to all production</p>
      </div>

    <div class="eighth-content-group center">
      <h4 class="reactive">Nitrogen</h4>
      <p id="p2-nitrogen-amount"></p>
      <button id="p2-nitrogen-button" onclick="P2.buyElement('nitrogen')"></button>
      <p class="amount grey">+0.05x to all production</p>
      </div>

    <div class="eighth-content-group center">
      <h4 class="reactive">Oxygen</h4>
      <p id="p2-oxygen-amount"></p>
      <button id="p2-oxygen-button" onclick="P2.buyElement('oxygen')"></button>
      <p class="amount grey">+0.05x to all production</p>
      </div>

    <div class="eighth-content-group center">
      <h4 class="reactive">Fluorine</h4>
      <p id="p2-fluorine-amount"></p>
      <button id="p2-fluorine-button" onclick="P2.buyElement('fluorine')"></button>
      <p class="amount grey">+0.05x to all production</p>
      </div>

    <div class="eighth-content-group center">
      <h4 class="noble">Neon</h4>
      <p id="p2-neon-amount"></p>
      <button id="p2-neon-button" onclick="P2.buyElement('neon')"></button>
      <p class="amount grey">+0.25x to all solids gain</p>
      </div>
  </div>
</div>
`;