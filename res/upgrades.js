const upgrades = {
  period1: {
    producer1: {
      upgrade1: {
        cost: new Decimal(50),
        desc: "2x Hydrogen Gatherer speed"
      },
      upgrade2: {
        cost: new Decimal(500),
        desc: "2x Hydrogen Gatherer speed again"
      },
      upgrade3: {
        cost: new Decimal(50_000),
        desc: "Start collecting leftover Hydrogen"
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