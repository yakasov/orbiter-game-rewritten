function displayBalance() {
  const el = document.getElementById("mainBalance");
  el.innerText = `You have ${f(matterBalance)} matter.`;
}

function displayProducing() {
  const el = document.getElementById("producingBalance");
  el.innerText = `producing ${f(matterProducing)} matter /s`;
}

function economyUpdateLoop() {
  displayBalance();
  displayProducing();
}