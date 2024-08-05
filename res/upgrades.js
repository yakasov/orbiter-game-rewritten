const UPGRADES = {
  period1: {
    producer1: {
      upgrade1: {
        cost: new Decimal(50),
        desc: "1.5x Hydrogen Gatherer speed",
        name: "Hydrogen Coffee Breaks"
      },
      upgrade2: {
        cost: new Decimal(500),
        desc: "1.5x Hydrogen Gatherer speed again",
        name: "Hydrogen Coffee Super Caffeinator"
      },
      upgrade3: {
        cost: new Decimal(20_000),
        desc: "Start collecting leftover Hydrogen",
        name: "Hydrogen Scraper"
      }
    },
    producer2: {
      upgrade1: {
        cost: new Decimal(1_000),
        desc: "-0.18 Hunter cost scaling",
        name: "Helium Hunter Outsourcing"
      },
      upgrade2: {
        cost: new Decimal(5_000),
        desc: "Each Gatherer boosts Hunters",
        name: "Monday Morning Coffee Group"
      },
      upgrade3: {
        cost: new Decimal(500_000),
        desc: "Start collecting leftover Helium",
        name: "Helium Catcher"
      }
    }
  }
}

Object.keys(UPGRADES).forEach((period) => {
  Object.keys(UPGRADES[period]).forEach((producer) => {
    Object.keys(UPGRADES[period][producer]).forEach((producerUpgrade) => {
      UPGRADES[period][producer][producerUpgrade].bought = false;
    })
  })
})