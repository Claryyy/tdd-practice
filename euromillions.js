var lottery = {
  maxBall: 50,
  maxBonusBall: 12,
  minBall: 1,
  numOfBalls: 5,
  numOfBonusBalls: 2,
  balls: [],

  drawEuroMillions() {
    for (let i = 0; i < this.numOfBalls; i++) {
      this.balls.push(this.getRandomNumberBetween(this.minBall, this.maxBall));
    }

    for (let i = 0; i < this.numOfBonusBalls; i++) {
      this.balls.push(
        this.getRandomNumberBetween(this.minBall, this.maxBonusBall)
      );
    }

    return this.balls;
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
