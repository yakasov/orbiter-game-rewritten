/* eslint-disable sort-keys */

"use strict";

const ACHIEVEMENTS = {
  "1": {
    "desc": "Own your first producer",
    "name": "The First One's Nearly Free",
    "unlock": () => {
      const p = PRODUCERS.period1.producer1;
      return p.amount.gte(1);
    }
  },
  "2": {
    "bonus": "5% faster Gatherer and Hunter production",
    "desc": "Start a coffee group",
    "name": "Every Monday, Every Week",
    "unlock": () => {
      const u = UPGRADES.period1.producer2.upgrade2;
      return u.bought;
    }
  },
  "3": {
    "desc": "Unlock the Periodic Table",
    "name": "Real Science",
    "unlock": () => elementsTabUnlocked
  },
  "4": {
    "desc": "Form a molecule",
    "name": "Gaseous Molecules",
    "unlock": () => PERIODIC.hydrogen.resets > 0
  }
};

Object.keys(ACHIEVEMENTS)
  .forEach((a) => {
    ACHIEVEMENTS[a].achieved = false;
  });
