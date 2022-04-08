// Joe expects to be given 7 balls
// Joe expects the first 5 to be between 1 and 50 (set 1)
// Joe expects the last 2 to be between 1 and 12 (set 2)
// Joe cannot receive duplicates in a set, but it's ok for duplicates across the two sets
// Joe expects the balls in a set to be returned in numerical order

const { drawEuroMillions } = require("./euromillions");
const lottery = require("./euromillions");

describe("euromillions tests", () => {
  test("that the drawEuromillions returns the first 5 balls between 1 and 50 (set 1)", () => {
    let firstFiveBalls = lottery.drawEuroMillions().slice(0, 5);

    firstFiveBalls.forEach((ball) => {
      expect(ball).toBeGreaterThanOrEqual(lottery.minBall);
      expect(ball).toBeLessThanOrEqual(lottery.maxBall);
    });

    expect(firstFiveBalls).toHaveLength(5);
  });

  test("that the drawEuromillions returns the last 2 balls between 1 and 12 (set 2)", () => {
    let lastTwoBalls = lottery.drawEuroMillions().slice(5, 7);

    lastTwoBalls.forEach((ball) => {
      expect(ball).toBeGreaterThanOrEqual(lottery.minBall);
      expect(ball).toBeLessThanOrEqual(lottery.maxBonusBall);
    });

    expect(lastTwoBalls).toHaveLength(2);
  });

  test("that the drawEuromillions return an array of 7 balls", () => {
    expect(lottery.drawEuroMillions()).toHaveLength(7);
  });
});
