"use strict";

function saveGame(showMessage = false) {
  const achievementsToSave = {};
  Object.keys(ACHIEVEMENTS)
    .forEach((achievement) => {
      achievementsToSave[achievement] = ACHIEVEMENTS[achievement].achieved;
    });

  const producersToSave = {};
  Object.keys(PRODUCERS)
    .forEach((period) => {
      producersToSave[period] = {};
      Object.keys(PRODUCERS[period])
        .forEach((producer) => {
          producersToSave[period][producer] =
            PRODUCERS[period][producer].amount;
        });
    });

  const upgradesToSave = {};
  Object.keys(UPGRADES)
    .forEach((period) => {
      upgradesToSave[period] = {};
      Object.keys(UPGRADES[period])
        .forEach((producer) => {
          upgradesToSave[period][producer] = {};
          Object.keys(UPGRADES[period][producer])
            .forEach((upgrade) => {
              upgradesToSave[period][producer][upgrade] =
          UPGRADES[period][producer][upgrade].bought;
            });
        });
    });

  const elementsToSave = {};
  Object.keys(ELEMENTS)
    .forEach((element) => {
      elementsToSave[element] = {
        "amount": ELEMENTS[element].amount,
        "enabled": ELEMENTS[element].enabled,
        "upgrade1": ELEMENTS[element].upgrade1.bought ?? false,
        "upgrade2": ELEMENTS[element].upgrade2.bought ?? false,
        "upgrade3": ELEMENTS[element].upgrade3.bought ?? false
      };
    });

  const generalToSave = {
    "matterBalance": EC.matterBalance
  };

  localStorage.setItem("achievements", JSON.stringify(achievementsToSave));
  localStorage.setItem("producers", JSON.stringify(producersToSave));
  localStorage.setItem("upgrades", JSON.stringify(upgradesToSave));
  localStorage.setItem("elements", JSON.stringify(elementsToSave));
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

function getSaveFromStorage() {
  const loadedAchievements = JSON.parse(localStorage.getItem("achievements"));
  const loadedProducers = JSON.parse(localStorage.getItem("producers"));
  const loadedUpgrades = JSON.parse(localStorage.getItem("upgrades"));
  const loadedElements = JSON.parse(localStorage.getItem("elements"));
  const loadedGeneral = JSON.parse(localStorage.getItem("general"));

  return {
    "achievements": loadedAchievements,
    "elements": loadedElements,
    "general": loadedGeneral,
    "producers": loadedProducers,
    "upgrades": loadedUpgrades
  };
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
      decodedData.achievements &&
      decodedData.producers &&
      decodedData.upgrades &&
      decodedData.elements &&
      decodedData.general
    ) {
      loadSave(decodedData);
      saveMessage.innerText = "Loaded game!";
    }
  } catch (e) {
    if (encodedData.length) {
      saveMessage.innerText = e;
    } else {
      saveMessage.innerText = "No data to load!";
    }
  }
}

function exportSave() {
  saveGame();

  const fullLoad = JSON.stringify({
    "achievements": JSON.parse(localStorage.getItem("achievements")),
    "elements": JSON.parse(localStorage.getItem("elements")),
    "general": JSON.parse(localStorage.getItem("general")),
    "producers": JSON.parse(localStorage.getItem("producers")),
    "upgrades": JSON.parse(localStorage.getItem("upgrades"))
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
  if (Object.keys(data).length === 0) return;

  // Achievements save mapping
  if (data.achievements) {
    Object.keys(ACHIEVEMENTS)
      .forEach((a) => {
        ACHIEVEMENTS[a].achieved = data.achievements[a];
      });
  }

  // Producers save mapping
  if (data.producers) {
    Object.keys(PRODUCERS)
      .forEach((period) => {
        Object.keys(PRODUCERS[period])
          .forEach((producer) => {
            PRODUCERS[period][producer].amount = new Decimal(
              data.producers[period][producer]
            );

            PRODUCERS[period][producer].cost = EC.getCost(
              PRODUCERS[period][producer]
            );
          });
      });
  }

  // Upgrades save mapping
  if (data.upgrades) {
    Object.keys(UPGRADES)
      .forEach((period) => {
        Object.keys(UPGRADES[period])
          .forEach((producer) => {
            Object.keys(UPGRADES[period][producer])
              .forEach((upgrade) => {
                if (!data.upgrades[period][producer]) return;
                UPGRADES[period][producer][upgrade].bought =
            data.upgrades[period][producer][upgrade];

                if (UPGRADES[period][producer][upgrade].bought) {
                  const pe = period.substr(-1);
                  const pr = producer.substr(-1);
                  const up = upgrade.substr(-1);

                  const button = document.getElementById(
                    `p${pe}-producer${pr}-upgrade${up}-button`
                  );
                  button.classList.remove("upgrade-button");
                  button.classList.add("bought-button");

                  if (UPGRADES[period][producer][upgrade].perm) {
                    button.classList.remove("pulse");
                    button.classList.add("permanent");
                  }

                  const cost = document.getElementById(
                    `p${pe}-producer${pr}-upgrade${up}-cost`
                  );
                  cost.innerText = "Bought!";
                }
              });
          });
      });
  }

  // Elements save mapping
  if (data.elements) {
    Object.keys(ELEMENTS)
      .forEach((e) => {
        ELEMENTS[e].amount = new Decimal(data.elements[e].amount);
        ELEMENTS[e].enabled = data.elements[e].enabled;

        /*
         * If elements don't strictly have 3 upgrades
         * then this needs to be changed
         */
        [1, 2, 3].forEach((i) => {
          ELEMENTS[e][`upgrade${i}`].bought = data.elements[e][`upgrade${i}`];

          if (ELEMENTS[e][`upgrade${i}`].bought) {
            const button = document.getElementById(
              `p${ELEMENTS[e].tab}-${e}-upgrade${i}-button`
            );
            button.classList.remove("upgrade-button");
            button.classList.add("bought-button");

            if (ELEMENTS[e][`upgrade${i}`].perm) {
              button.classList.remove("pulse");
              button.classList.add("permanent");
            }

            const cost = document.getElementById(
              `p${ELEMENTS[e].tab}-${e}-upgrade${i}-cost`
            );
            cost.innerText = "Bought!";
          }
        });
      });
  }

  if (data.general) {
    EC.matterBalance = new Decimal(data.general.matterBalance);
  }
}
