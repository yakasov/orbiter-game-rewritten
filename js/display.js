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

    document.getElementById(`p${pe}-${pr.name}-elementAmount`).innerText = `${f(
      ELEMENTS[pr.element].amount
    )} ${f(ELEMENTS[pr.element].desc)}`;

    document.getElementById(
      `p${pe}-${pr.name}-elementProducing`
    ).innerText = `saving ${f(ELEMENTS[pr.element].producing)}/s`;
  }

  showAchievements() {
    // Actually just change their border and colouring
    Object.keys(ACHIEVEMENTS).forEach((a) => {
      const box = document.getElementById(`ach${a}`);
      if (ACHIEVEMENTS[a].achieved && box.classList.contains("unachieved")) {
        box.classList.remove("unachieved", "dashed");
        box.classList.add("solid");
      }
    });
  }

  showProducer() {
    if (EXCLUDEDTABS.includes(currentTab)) {
      return;
    }

    const producerLength =
      Object.values(PRODUCERS[`period${currentTab}`]).length - 1;
    for (const [i, v] of Object.values(
      PRODUCERS[`period${currentTab}`]
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
    if (EXCLUDEDTABS.includes(currentTab)) {
      return;
    }

    Object.keys(UPGRADES[`period${currentTab}`]).forEach((k) => {
      if (PRODUCERS[`period${currentTab}`][k].amount.gte(1)) {
        const upgrade1Div = document.getElementById(
          `p${currentTab}-${k}-upgrade1`
        );
        const box = document.getElementById(`p${currentTab}-${k}-upgrade-box`);

        if (upgrade1Div.classList.contains("hidden")) {
          upgrade1Div.classList.remove("hidden");
          upgrade1Div.classList.add("fade-in");
          box.classList.add("upgrade-background", "fade-in");
        } else {
          [2, 3].forEach((i) => {
            if (UPGRADES[`period${currentTab}`][k][`upgrade${i - 1}`].bought) {
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

  showElement() {
    if (EXCLUDEDTABS.includes(currentTab)) {
      return;
    }

    Object.keys(ELEMENTS).forEach((e) => {
      if (ELEMENTS[e].tab === currentTab && ELEMENTS[e].upgrade1.bought) {
        [2, 3].forEach((i) => {
          if (ELEMENTS[e][`upgrade${i - 1}`].bought) {
            const div = document.getElementById(
              `p${currentTab}-${e}-upgrade${i}`
            );

            if (div.classList.contains("hidden")) {
              div.classList.remove("hidden");
              div.classList.add("fade-in");
            }
          }
        });
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

  displayProducer() {
    if (EXCLUDEDTABS.includes(currentTab)) {
      return;
    }

    Object.keys(PRODUCERS[`period${currentTab}`]).forEach((pk) => {
      const p = PRODUCERS[`period${currentTab}`][pk];

      // Support for changing costs after upgrading
      p.cost = ec.getCost(p);

      const el = document.getElementById(`p${currentTab}-${pk}-buy`);
      el.innerText = `Buy 1 ${p.name} for ${f(p.cost)}`;
    });
  }

  updateLoop() {
    this.displayBalance();
    this.displayProducer();
    this.displayProducing();
    this.showAchievements();
    this.showElement();
    this.showProducer();
    this.showUpgrade();
  }
}
