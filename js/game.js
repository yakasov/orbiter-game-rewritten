const ds = new Display();
const ec = new Economy();
const p1 = new Period1();

function mainLoop() {
  ds.updateLoop();
  ec.updateLoop();
  p1.updateLoop();
}

function loadTabs() {
  document.getElementById("p1-tab").innerHTML = PERIOD1TAB;
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
setInterval(mainLoop, updateLoopInterval);