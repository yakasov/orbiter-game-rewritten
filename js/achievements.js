class Achievements {
  checkAchievements() {
    Object.keys(ACHIEVEMENTS).forEach((a) => {
      if (!ACHIEVEMENTS[a].achieved && ACHIEVEMENTS[a].unlock()) {
        ACHIEVEMENTS[a].achieved = true;
      }
    })
  }

  updateLoop() {
    this.checkAchievements();
  }
}