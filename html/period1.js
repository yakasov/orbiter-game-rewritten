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
        <p id="p1-producer1-elementDesc" class="no-margin amount grey left">0</p>
        <p id="p1-producer1-elementAmount" class="no-margin amount grey right">0</p>
      </div>

      <div id="p1-producer1-upgrade1-box">
        <div id="p1-producer1-upgrade1" class="hidden">
          <div class="subgroup" onclick="ec.buyUpgrade(1, 1, 1)">
            <p id="p1-producer1-upgrade1-button" class="no-margin less-height upgrade-button">Hydrogen Coffee Breaks</p>
            <p class="no-margin amount stat-group">1.5x Hydrogen Gatherer speed</p>
          </div>
          <p id="p1-producer1-upgrade1-cost" class="no margin no-height amount right grey small">Costs 50 matter</p>
        </div>

        <div id="p1-producer1-upgrade2" class="hidden">
          <div class="subgroup" onclick="ec.buyUpgrade(1, 1, 2)">
            <p id="p1-producer1-upgrade2-button" class="no-margin less-height upgrade-button">Hydrogen Coffee Super Caffeinator</p>
            <p class="no-margin amount stat-group">1.5x Hydrogen Gatherer speed again</p>
          </div>
          <p id="p1-producer1-upgrade2-cost" class="no margin no-height amount right grey small">Costs 500 matter</p>
        </div>

        <div id="p1-producer1-upgrade3" class="hidden">
          <div class="subgroup" onclick="ec.buyUpgrade(1, 1, 3)">
            <p id="p1-producer1-upgrade3-button" class="no-margin less-height upgrade-button">Hydrogen Scraper</p>
            <p class="no-margin amount stat-group">Start collecting leftover Hydrogen</p>
          </div>
          <p id="p1-producer1-upgrade3-cost" class="no margin no-height amount right grey small">Costs 50,000 matter</p>
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
        <p id="p1-producer2-elementDesc" class="no-margin amount grey left">0</p>
        <p id="p1-producer2-elementAmount" class="no-margin amount grey right">0</p>
      </div>

      <div id="p1-producer2-upgrade1-box">
        <div id="p1-producer2-upgrade1" class="hidden">
          <div class="subgroup" onclick="ec.buyUpgrade(1, 2, 1)">
            <p id="p1-producer2-upgrade1-button" class="no-margin less-height upgrade-button">Helium Hunter Outsourcing</p>
            <p class="no-margin amount stat-group">-0.05 Hunter cost scaling</p>
          </div>
          <p id="p1-producer2-upgrade1-cost" class="no margin no-height amount right grey small">Costs 500 matter</p>
        </div>

        <div id="p1-producer2-upgrade2" class="hidden">
          <div class="subgroup" onclick="ec.buyUpgrade(1, 2, 2)">
            <p id="p1-producer2-upgrade2-button" class="no-margin less-height upgrade-button">Coffee Group</p>
            <p class="no-margin amount stat-group">Each Gatherer boosts Hunters</p>
          </div>
          <p id="p1-producer2-upgrade2-cost" class="no margin no-height amount right grey small">Costs 7,500 matter</p>
        </div>

        <div id="p1-producer2-upgrade3" class="hidden">
          <div class="subgroup" onclick="ec.buyUpgrade(1, 2, 3)">
            <p id="p1-producer2-upgrade3-button" class="no-margin less-height upgrade-button">Helium Catcher</p>
            <p class="no-margin amount stat-group">Start collecting leftover Helium</p>
          </div>
          <p id="p1-producer2-upgrade3-cost" class="no margin no-height amount right grey small">Costs 500,000 matter</p>
        </div>
      </div>
    </div>
  </div>
</div>
`