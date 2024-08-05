const PRODUCERS = {
  period1: {
    producer1: {
      base: new Decimal(10),
      cost: new Decimal(10),
      elementDesc: "H",
      display: "gatherer",
      produces: new Decimal(1),
      scaling: new Decimal(1.02),
    },
    producer2: {
      base: new Decimal(150),
      cost: new Decimal(100),
      elementDesc: "He",
      display: "hunter",
      produces: new Decimal(7.5),
      scaling: new Decimal(1.01),
    },
  }
};

Object.keys(PRODUCERS).forEach((period) => {
  Object.keys(PRODUCERS[period]).forEach((producer) => {
    PRODUCERS[period][producer].amount = new Decimal(0);
    PRODUCERS[period][producer].elementAmount = new Decimal(0);
    PRODUCERS[period][producer].name = producer;
  })
})