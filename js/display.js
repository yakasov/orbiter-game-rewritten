class Display {
  updateProducerDisplay(pe, pr) {
    document.getElementById(`p${pe}-${pr.name}-buy`).innerText = `Buy 1 ${
      pr.display
    } for ${f(pr.cost)}`;

    document.getElementById(`p${pe}-${pr.name}-amount`).innerText = `${f(
      pr.amount,
      0
    )} ${pr.display}s`;
    document.getElementById(
      `p${pe}-${pr.name}-producing`
    ).innerText = `producing ${f(pr.produces.mul(pr.amount))}/s`;
    document.getElementById(`p${pe}-${pr.name}-elementDesc`).innerText = `${f(
      pr.elementAmount
    )} ${f(pr.elementDesc)}`;
  }

  showProducer() {
    if (currentTab === 0 || currentTab === 9) {
      return;
    }

    const producerLength =
      Object.values(producers[`period${currentTab}`]).length - 1;
    for (const [i, v] of Object.values(
      producers[`period${currentTab}`]
    ).entries()) {
      if (i < producerLength && v.amount.gte(1)) {
        const div = document.getElementById(`p${currentTab}-producer${i + 2}`);

        if (div.classList.contains("hidden")) {
          div.classList.remove("hidden");
          div.classList.add("fade-in");
        }
      }
    }
  }

  showUpgrade() {
    if (currentTab === 0 || currentTab === 9) {
      return;
    }

    Object.keys(upgrades[`period${currentTab}`]).forEach((k) => {
      if (producers[`period${currentTab}`][k].amount.gte(1)) {
        const upgrade1Div = document.getElementById(
          `p${currentTab}-${k}-upgrade1`
        );

        if (upgrade1Div.classList.contains("hidden")) {
          upgrade1Div.classList.remove("hidden");
          upgrade1Div.classList.add("fade-in");
        } else {
          [2, 3].forEach((i) => {
            if (upgrades[`period${currentTab}`][k][`upgrade${i - 1}`].bought) {
              const div = document.getElementById(
                `p${currentTab}-${k}-upgrade${i}`
              );

              if (div.classList.contains("hidden")) {
                div.classList.remove("hidden");
                div.classList.add("fade-in");
              }
            }
          });
        }
      }
    });
  }

  displayBalance() {
    const el = document.getElementById("mainBalance");
    el.innerText = `You have ${f(ec.matterBalance)} matter.`;
  }

  displayProducing() {
    const el = document.getElementById("producingBalance");
    el.innerText = `producing ${f(ec.matterProducing)} matter /s`;
  }

  updateLoop() {
    this.displayBalance();
    this.displayProducing();
    this.showProducer();
    this.showUpgrade();
  }
}
