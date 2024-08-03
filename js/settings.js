function saveGame(showMessage = false) {
  // const achievementsToSave = achievements.map((a) => {
  //   return { id: a.id, achieved: a.achieved };
  // });
  // const upgradesToSave = upgrades.map((u) => {
  //   return { id: u.id, bought: u.bought };
  // });
  const generalToSave = {
    matterBalance: ec.matterBalance,
  };

  // localStorage.setItem("achievements", JSON.stringify(achievementsToSave));
  localStorage.setItem("producers", JSON.stringify(producers));
  // localStorage.setItem("upgrades", JSON.stringify(upgradesToSave));
  localStorage.setItem("general", JSON.stringify(generalToSave));

  const saveTime = document.getElementById("saveTime");
  const d = new Date();
  const t = new Date(d.getTime() - d.getTimezoneOffset() * 60 * 1000)
    .toISOString()
    .split("T");
  saveTime.innerText = `Last saved at ${t[0]} ${t[1].split(".")[0]}.`;

  if (showMessage) {
    const saveMessage = document.getElementById("saveMessage");
    saveMessage.innerText = "Saved game successfully!";
  }
}

function resetSave() {
  if (
    confirm("Are you sure you want to delete your save? There's no going back!")
  ) {
    localStorage.clear();
    location.reload();
  }
}

function importSave(encodedData = null) {
  if (!encodedData) {
    const saveDataEntryBox = document.getElementById("saveDataEntry");
    encodedData = saveDataEntryBox.value;
  }

  const saveMessage = document.getElementById("saveMessage");

  try {
    const decodedData = JSON.parse(atob(encodedData));
    if (
      // decodedData["achievements"] &&
      decodedData["producers"] &&
      // decodedData["upgrades"] &&
      decodedData["general"]
    ) {
      loadSave(decodedData);
      saveMessage.innerText = "Loaded game!";
    }
  } catch (e) {
    if (!encodedData.length) {
      saveMessage.innerText = "No data to load!";
    } else {
      saveMessage.innerText = e;
    }
  }
}

function exportSave() {
  saveGame();

  const fullLoad = JSON.stringify({
    // achievements: JSON.parse(localStorage.getItem("achievements")),
    producers: JSON.parse(localStorage.getItem("producers")),
    // upgrades: JSON.parse(localStorage.getItem("upgrades")),
    general: JSON.parse(localStorage.getItem("general")),
  });
  const encodedFullLoad = btoa(fullLoad);

  const saveMessage = document.getElementById("saveMessage");
  try {
    navigator.clipboard.writeText(encodedFullLoad);
    saveMessage.innerText = "Copied save to clipboard!";
  } catch (e) {
    saveMessage.innerText = e;
  }
}

function loadSave(data = null) {
  if (!data) data = getSaveFromStorage();
  if (data == {}) return;

  // Producers save mapping
  if (data.producers) {
    Object.keys(producers).forEach((period) => {
      Object.keys(producers[period]).forEach((producer) => {
        producers[period][producer].amount = new Decimal(
          data.producers[period][producer].amount
        );
        producers[period][producer].elementAmount = new Decimal(
          data.producers[period][producer].elementAmount
        );
      });
    });
  }

  // General save mapping
  if (data.general) {
    ec.matterBalance = new Decimal(data["general"].matterBalance);
  }
}
