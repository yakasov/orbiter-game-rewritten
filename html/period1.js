"use strict";

const PERIOD1TAB = `
<div class="content">
  <div class="content-group left">
    <div id="p1-producer1" class="fade-in left">
      <div class="subgroup">
        <p class="no-margin">Hydrogen Gatherers</p>
        <div>
          <button id="p1-producer1-buy" onclick="ec.buyProducer(1, 1)"></button>
          <button id="p1-producer1-buyMax" onclick="ec.buyMax(1, 1)">Buy max</button>
        </div>
      </div>
      <div class="stat-group">
        <p id="p1-producer1-amount" class="no-margin amount grey glow left">0</p>
        <p id="p1-producer1-producing" class="no-margin amount grey glow right">0</p>
      </div>
      <div class="stat-group">
        <p id="p1-producer1-elementAmount" class="no-margin amount grey left">0</p>
        <p id="p1-producer1-elementProducing" class="no-margin amount grey right">0</p>
      </div>

      <div id="p1-producer1-upgrade-box">
        <div id="p1-producer1-upgrade1" class="hidden">
          <div class="subgroup" onclick="ec.buyUpgrade(1, 1, 1)">
            <p id="p1-producer1-upgrade1-button" class="no-margin less-height upgrade-button">${
              UPGRADES.period1.producer1.upgrade1.name
            }</p>
            <p class="no-margin amount stat-group">${
              UPGRADES.period1.producer1.upgrade1.desc
            }</p>
          </div>
          <p id="p1-producer1-upgrade1-cost" class="no margin no-height amount right grey small">Costs ${f(
            UPGRADES.period1.producer1.upgrade1.cost
          )} matter</p>
        </div>

        <div id="p1-producer1-upgrade2" class="hidden">
          <div class="subgroup" onclick="ec.buyUpgrade(1, 1, 2)">
            <p id="p1-producer1-upgrade2-button" class="no-margin less-height upgrade-button">${
              UPGRADES.period1.producer1.upgrade2.name
            }</p>
            <p class="no-margin amount stat-group">${
              UPGRADES.period1.producer1.upgrade2.desc
            }</p>
          </div>
          <p id="p1-producer1-upgrade2-cost" class="no margin no-height amount right grey small">Costs ${f(
            UPGRADES.period1.producer1.upgrade2.cost
          )} matter</p>
        </div>

        <div id="p1-producer1-upgrade3" class="hidden">
          <div class="subgroup" onclick="ec.buyUpgrade(1, 1, 3)">
            <p id="p1-producer1-upgrade3-button" class="no-margin less-height upgrade-button">${
              UPGRADES.period1.producer1.upgrade3.name
            }</p>
            <p class="no-margin amount stat-group">${
              UPGRADES.period1.producer1.upgrade3.desc
            }</p>
          </div>
          <p id="p1-producer1-upgrade3-cost" class="no margin no-height amount right grey small">Costs ${f(
            UPGRADES.period1.producer1.upgrade3.cost
          )} matter</p>
        </div>
      </div>

      <div id="p1-hydrogen-element-box" class="hidden">
        <br><br>
        <h4 class="center">You are now saving Hydrogen.</h4>
        <div id="p1-hydrogen-upgrade1">
          <div class="subgroup" onclick="ec.buyElement('hydrogen', 1)">
            <p id="p1-hydrogen-upgrade1-button" class="no-margin less-height upgrade-button">${
              ELEMENTS.hydrogen.upgrade1.name
            }</p>
            <p class="no-margin amount stat-group">${
              ELEMENTS.hydrogen.upgrade1.desc
            }</p>
          </div>
          <p id="p1-hydrogen-upgrade1-cost" class="no margin no-height amount right grey small">Costs ${f(
            ELEMENTS.hydrogen.upgrade1.cost
          )} H</p>
        </div>

        <div id="p1-hydrogen-upgrade2" class="hidden">
          <div class="subgroup" onclick=ec.buyElement('hydrogen', 2)">
            <p id="p1-hydrogen-upgrade2-button" class="no-margin less-height upgrade-button">${
              ELEMENTS.hydrogen.upgrade2.name
            }</p>
            <p class="no-margin amount stat-group">${
              ELEMENTS.hydrogen.upgrade2.desc
            }</p>
          </div>
          <p id="p1-hydrogen-upgrade2-cost" class="no margin no-height amount right grey small">Costs ${f(
            ELEMENTS.hydrogen.upgrade2.cost
          )} H</p>
        </div>

        <div id="p1-hydrogen-upgrade3" class="hidden">
          <div class="subgroup" onclick="ec.buyElement('hydrogen', 3)">
            <p id="p1-hydrogen-upgrade3-button" class="no-margin less-height upgrade-button">${
              ELEMENTS.hydrogen.upgrade3.name
            }</p>
            <p class="no-margin amount stat-group">${
              ELEMENTS.hydrogen.upgrade3.desc
            }</p>
          </div>
          <p id="p1-hydrogen-upgrade3-cost" class="no margin no-height amount right grey small">Costs ${f(
            ELEMENTS.hydrogen.upgrade3.cost
          )} H</p>
        </div>
      </div>
    </div>
  </div>

  <div class="content-group right">
    <div id="p1-producer2" class="hidden">
      <div class="subgroup">
        <p class="no-margin">Helium Hunters</p>
        <div>
          <button id="p1-producer2-buy" onclick="ec.buyProducer(1, 2)"></button>
          <button id="p1-producer2-buyMax" onclick="ec.buyMax(1, 2)">Buy max</button>
        </div>
      </div>
      <div class="stat-group">
        <p id="p1-producer2-amount" class="no-margin amount grey glow left">0</p>
        <p id="p1-producer2-producing" class="no-margin amount grey glow right">0</p>
      </div>
      <div class="stat-group">
        <p id="p1-producer2-elementAmount" class="no-margin amount grey left">0</p>
        <p id="p1-producer2-elementProducing" class="no-margin amount grey right">0</p>
      </div>

      <div id="p1-producer2-upgrade-box">
        <div id="p1-producer2-upgrade1" class="hidden">
          <div class="subgroup" onclick="ec.buyUpgrade(1, 2, 1)">
            <p id="p1-producer2-upgrade1-button" class="no-margin less-height upgrade-button">${
              UPGRADES.period1.producer2.upgrade1.name
            }</p>
            <p class="no-margin amount stat-group">${
              UPGRADES.period1.producer2.upgrade1.desc
            }</p>
          </div>
          <p id="p1-producer2-upgrade1-cost" class="no margin no-height amount right grey small">Costs ${f(
            UPGRADES.period1.producer2.upgrade1.cost
          )} matter</p>
        </div>

        <div id="p1-producer2-upgrade2" class="hidden">
          <div class="subgroup" onclick="ec.buyUpgrade(1, 2, 2)">
            <p id="p1-producer2-upgrade2-button" class="no-margin less-height upgrade-button">${
              UPGRADES.period1.producer2.upgrade2.name
            }</p>
            <p class="no-margin amount stat-group">${
              UPGRADES.period1.producer2.upgrade2.desc
            }</p>
          </div>
          <p id="p1-producer2-upgrade2-cost" class="no margin no-height amount right grey small">Costs ${f(
            UPGRADES.period1.producer2.upgrade2.cost
          )} matter</p>
        </div>

        <div id="p1-producer2-upgrade3" class="hidden">
          <div class="subgroup" onclick="ec.buyUpgrade(1, 2, 3)">
            <p id="p1-producer2-upgrade3-button" class="no-margin less-height upgrade-button">${
              UPGRADES.period1.producer2.upgrade3.name
            }</p>
            <p class="no-margin amount stat-group">${
              UPGRADES.period1.producer2.upgrade3.desc
            }</p>
          </div>
          <p id="p1-producer2-upgrade3-cost" class="no margin no-height amount right grey small">Costs ${f(
            UPGRADES.period1.producer2.upgrade3.cost
          )} matter</p>
        </div>
      </div>
    </div>
  </div>
</div>
`;
