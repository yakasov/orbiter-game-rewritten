let matterBalance = new Decimal(10);
let matterProducing = new Decimal(0);

function p1BuyProducer(n) {
  const p = p1Producers[`producer${n}`];
  if (matterBalance.gte(p.cost)) {
    matterBalance = matterBalance.sub(p.cost);
    p.amount = p.amount.add(1);
    p.cost = p.amount.mul(p.base).pow(p.scaling);
  }
}

function p1DisplayUpdateLoop() {
  Object.values(p1Producers).forEach((p) => {
    p1DisplayUpdate(p);
  });
}

function p1DisplayUpdate(obj) {
  document.getElementById(`p1-${obj.name}-buy`).innerText = `Buy 1 ${
    obj.display
  } for ${f(obj.cost)}`;

  document.getElementById(`p1-${obj.name}-amount`).innerText = `${f(
    obj.amount,
    0
  )} ${obj.display}s`;
  document.getElementById(
    `p1-${obj.name}-producing`
  ).innerText = `producing ${f(obj.produces)}/s`;
  document.getElementById(`p1-${obj.name}-elementDesc`).innerText = `${f(
    obj.elementAmount
  )} ${f(obj.elementDesc)}`;
}

function p1UpdateLoop() {
  matterBalance = matterBalance.add(matterProducing.div(economyDivisor));

  matterProducing = new Decimal(0);
  Object.values(p1Producers).forEach((p) => {
    matterProducing = matterProducing.add(p.amount.mul(p.produces));
  });

  p1DisplayUpdateLoop();
}
