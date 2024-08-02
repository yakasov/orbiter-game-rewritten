function mainLoop() {
  economyUpdateLoop();
  p1UpdateLoop();
}

function showTab(n) {
  console.log(n);
  const tabs = document.getElementById("tabs").children;

  for (const tab of tabs) {
    console.log(tab);
    tab.classList.add("hidden");
  }

  document.getElementById(`p${n}-tab`).classList.remove("hidden");
}

setInterval(mainLoop, updateLoopInterval);