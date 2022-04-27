function getRandomNumberBetween(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var lottery = {
  drawEuroMillions() {
    let balls = [];
    let bonusBalls = [];
    const maxBall = 50;
    const maxBonusBall = 12;
    const minBall = 1;
    const numOfBalls = 5;
    const numOfBonusBalls = 2;

    for (let i = 0; balls.length < numOfBalls; i++) {
      let newBall = getRandomNumberBetween(minBall, maxBall);

      if (balls.includes(newBall) === false) {
        balls.push(newBall);
      }
      balls.sort((a, b) => a - b);
    }

    for (let i = 0; bonusBalls.length < numOfBonusBalls; i++) {
      let newBall = getRandomNumberBetween(minBall, maxBonusBall);

      if (bonusBalls.includes(newBall) === false) {
        bonusBalls.push(newBall);
      }
      bonusBalls.sort((a, b) => a - b);
    }
    return balls.concat(bonusBalls);
  },
};

module.exports = lottery;
