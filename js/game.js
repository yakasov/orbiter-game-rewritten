"use strict";

const AC = new Achievements();
const DS = new Display();
const EC = new Economy();
const PR = new Prestige();
const EL = new Elements();
const P1 = new Period1();

function mainLoop() {
  AC.updateLoop();
  DS.updateLoop();
  EC.updateLoop();
  EL.updateLoop();
  P1.updateLoop();
}

function loadTabs() {
  document.getElementById("p0-tab").innerHTML = PERIOD0TAB;
  document.getElementById("p1-tab").innerHTML = PERIOD1TAB;
  document.getElementById("p9-tab").innerHTML = ACHIEVEMENTSTAB;
}

function showTab(n) {
  currentTab = n;
  const tabs = document.getElementById("tabs").children;

  for (const tab of tabs) {
    tab.classList.add("hidden");
  }

  document.getElementById(`p${n}-tab`).classList.remove("hidden");
}

loadTabs();
loadSave();
setInterval(mainLoop, UPDATELOOPINTERVAL);
setInterval(saveGame, SAVEGAMEINTERVAL);
