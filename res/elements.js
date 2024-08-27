/* eslint-disable sort-keys */

"use strict";

const ELEMENTS = {
  "hydrogen": {
    "desc": "H",
    "tab": 1,
    "upgradeCount": 3,
    "upgrade1": {
      "cost": new Decimal(10),
      "desc": "Double the Hydrogen saved",
      "name": "Efficient Hydrogen Scrapers"
    },
    "upgrade2": {
      "cost": new Decimal(75),
      "desc": "Spare Hydrogen decreases Gatherer cost",
      "name": "Spare Parts Exchange"
    },
    "upgrade3": {
      "cost": new Decimal(500),
      "desc": "Unlock the first half of something - permanently",
      "name": "Hydrogen Key",
      "perm": true
    }
  },
  "helium": {
    "desc": "He",
    "tab": 1,
    "upgradeCount": 3,
    "upgrade1": {
      "cost": new Decimal(10),
      "desc": "Double the Helium saved",
      "name": "Efficient Helium Scrapers"
    },
    "upgrade2": {
      "cost": new Decimal(125),
      "desc": "Helium raises Hunter production",
      "name": "Anti-Pyramid Scheme"
    },
    "upgrade3": {
      "cost": new Decimal(1500),
      "desc": "Unlock the second half of something - permanently",
      "name": "Helium Key",
      "perm": true
    }
  },
  "lithium": {
    "desc": "L",
    "tab": 2,
    "upgradeCount": 0
  },
  "beryllium": {
    "desc": "L",
    "tab": 2,
    "upgradeCount": 0
  },
  "boron": {
    "desc": "L",
    "tab": 2,
    "upgradeCount": 0
  },
  "carbon": {
    "desc": "L",
    "tab": 2,
    "upgradeCount": 0
  },
  "nitrogen": {
    "desc": "L",
    "tab": 2,
    "upgradeCount": 0
  },
  "oxygen": {
    "desc": "L",
    "tab": 2,
    "upgradeCount": 0
  },
  "fluorine": {
    "desc": "L",
    "tab": 2,
    "upgradeCount": 0
  },
  "neon": {
    "desc": "L",
    "tab": 2,
    "upgradeCount": 0
  }
};

Object.keys(ELEMENTS)
  .forEach((e) => {
    ELEMENTS[e].amount = new Decimal(0);
    ELEMENTS[e].enabled = false;
    ELEMENTS[e].perm ??= false;
    ELEMENTS[e].producing = new Decimal(0);
  });
