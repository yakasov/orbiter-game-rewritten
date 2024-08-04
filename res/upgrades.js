const upgrades = {
  period1: {
    producer1: {
      upgrade1: {
        cost: new Decimal(50),
        desc: "1.5x Hydrogen Gatherer speed"
      },
      upgrade2: {
        cost: new Decimal(500),
        desc: "1.5x Hydrogen Gatherer speed again"
      },
      upgrade3: {
        cost: new Decimal(50_000),
        desc: "Start collecting leftover Hydrogen"
      }
    },
    producer2: {
      upgrade1: {
        cost: new Decimal(500),
        desc: "-0.05 Hunter cost scaling"
      },
      upgrade2: {
        cost: new Decimal(7_500),
        desc: "Each Gatherer boosts Hunters"
      },
      upgrade3: {
        cost: new Decimal(500_000),
        desc: "Start collecting leftover Helium"
      }
    }
  }
}

Object.keys(upgrades).forEach((period) => {
  Object.keys(upgrades[period]).forEach((producer) => {
    Object.keys(upgrades[period][producer]).forEach((producerUpgrade) => {
      upgrades[period][producer][producerUpgrade].bought = false;
    })
  })
})