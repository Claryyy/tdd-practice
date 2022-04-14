var lottery = {
  drawEuroMillions() {
    let balls = [];
    const maxBall = 50;
    const maxBonusBall = 12;
    const minBall = 1;
    const numOfBalls = 5;
    const numOfBonusBalls = 2;

    for (let i = 0; i < numOfBalls; i++) {
      balls.push(this.getRandomNumberBetween(minBall, maxBall));
    }

    for (let i = 0; i < numOfBonusBalls; i++) {
      balls.push(this.getRandomNumberBetween(minBall, maxBonusBall));
    }

    return balls;
  },

  getRandomNumberBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  orderNumerically() {},
  removeDuplicateNumbers() {},
};

module.exports = lottery;
