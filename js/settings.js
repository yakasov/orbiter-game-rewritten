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
          producersToSave[period][producer] = PRODUCERS[period][producer].amount;
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
        "upgrade1": ELEMENTS[element].upgrade1
          ? ELEMENTS[element].upgrade1.bought
          : false,
        "upgrade2": ELEMENTS[element].upgrade2
          ? ELEMENTS[element].upgrade2.bought
          : false,
        "upgrade3": ELEMENTS[element].upgrade3
          ? ELEMENTS[element].upgrade3.bought
          : false
      };
    });

  const periodicToSave = {};
  Object.keys(PERIODIC)
    .forEach((element) => {
      periodicToSave[element] = {
        "resets": PERIODIC[element].resets
      };
    });

  const generalToSave = {
    "balances": {
      "matterBalance": EC.matterBalance,
      "solidBalance": EC.solidBalance
    },
    "resets": {
      "p2Resets": P2.resets
    },
    "unlocks": {
      elementsTabUnlocked,
      period2Unlocked
    }
  };

  localStorage.setItem("achievements", JSON.stringify(achievementsToSave));
  localStorage.setItem("producers", JSON.stringify(producersToSave));
  localStorage.setItem("upgrades", JSON.stringify(upgradesToSave));
  localStorage.setItem("elements", JSON.stringify(elementsToSave));
  localStorage.setItem("periodic", JSON.stringify(periodicToSave));
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
  const achievements = JSON.parse(localStorage.getItem("achievements"));
  const producers = JSON.parse(localStorage.getItem("producers"));
  const upgrades = JSON.parse(localStorage.getItem("upgrades"));
  const elements = JSON.parse(localStorage.getItem("elements"));
  const periodic = JSON.parse(localStorage.getItem("periodic"));
  const general = JSON.parse(localStorage.getItem("general"));

  return {
    achievements,
    elements,
    general,
    periodic,
    producers,
    upgrades
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
      decodedData.periodic &&
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
    "periodic": JSON.parse(localStorage.getItem("periodic")),
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
        if (data.elements[e]) {
          ELEMENTS[e].amount = new Decimal(data.elements[e].amount);
          ELEMENTS[e].enabled = data.elements[e].enabled;

          if (ELEMENTS[e].upgradeCount > 0) {
            Array.from(
              { "length": ELEMENTS[e].upgradeCount },
              (_, i) => i + 1
            )
              .forEach((i) => {
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
          }
        }
      });
  }

  if (data.periodic) {
    Object.keys(PERIODIC)
      .forEach((e) => {
        PERIODIC[e].resets = data.periodic[e].resets;
      });
  }

  if (data.general) {
    elementsTabUnlocked = data.general.unlocks.elementsTabUnlocked;
    period2Unlocked = data.general.unlocks.period2Unlocked;

    EC.matterBalance = new Decimal(data.general.balances.matterBalance);
    EC.solidBalance = new Decimal(data.general.balances.solidBalance);

    P2.resets = data.general.resets.p2Resets;
  }

  // Some final loading stuff
  if (elementsTabUnlocked) {
    document
      .getElementById("p1-hydrogen-upgrade3")
      .classList.add("perma-hidden");
    document.getElementById("p1-helium-upgrade3").classList.add("perma-hidden");
  }
}
