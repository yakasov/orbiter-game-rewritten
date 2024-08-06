const ELEMENTS = {
  hydrogen: {
    desc: "H",
    tab: 1,
    upgrade1: {
      cost: new Decimal(10),
      desc: "Double the Hydrogen saved",
      name: "Efficient Hydrogen Scrapers",
    },
    upgrade2: {
      cost: new Decimal(1_000),
      desc: "1.5x Hydrogen Gatherer speed",
      name: "Hydrogen Coffee Breaks",
    },
    upgrade3: {
      cost: new Decimal(10_000),
      desc: "1.5x Hydrogen Gatherer speed",
      name: "Hydrogen Coffee Breaks",
    },
  },
  helium: {
    desc: "He",
    tab: 1,
    upgrade1: {
      cost: new Decimal(10),
      desc: "Double the Hydrogen saved",
      name: "Efficient Hydrogen Scrapers",
    },
    upgrade2: {
      cost: new Decimal(1_000),
      desc: "1.5x Hydrogen Gatherer speed",
      name: "Hydrogen Coffee Breaks",
    },
    upgrade3: {
      cost: new Decimal(10_000),
      desc: "1.5x Hydrogen Gatherer speed",
      name: "Hydrogen Coffee Breaks",
    },
  },
};

Object.keys(ELEMENTS).forEach((e) => {
  ELEMENTS[e].amount = new Decimal(0);
  ELEMENTS[e].enabled = false;
  ELEMENTS[e].producing = new Decimal(0);
});
