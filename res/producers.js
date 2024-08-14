/* eslint-disable sort-keys */

"use strict";

const PRODUCERS = {
  "period1": {
    "producer1": {
      "base": new Decimal(10),
      "display": "gatherer",
      "element": "hydrogen",
      "producesBase": new Decimal(2),
      "scalingBase": new Decimal(1.20)
    },
    "producer2": {
      "base": new Decimal(150),
      "display": "hunter",
      "element": "helium",
      "producesBase": new Decimal(15),
      "scalingBase": new Decimal(1.35)
    }
  }
};

Object.keys(PRODUCERS)
  .forEach((period) => {
    Object.keys(PRODUCERS[period])
      .forEach((producer) => {
        PRODUCERS[period][producer].amount = new Decimal(0);
        PRODUCERS[period][producer].cost = PRODUCERS[period][producer].base;
        PRODUCERS[period][producer].name = producer;
        PRODUCERS[period][producer].produces =
          PRODUCERS[period][producer].producesBase;
        PRODUCERS[period][producer].scaling =
          PRODUCERS[period][producer].scalingBase;
      });
  });
