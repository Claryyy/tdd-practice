// Joe expects to be given 7 balls
// Joe expects the first 5 to be between 1 and 50 (set 1)
// Joe expects the last 2 to be between 1 and 12 (set 2)
// Joe cannot receive duplicates in a set, but it's ok for duplicates across the two sets
// Joe expects the balls in a set to be returned in numerical order

const lottery = require("./euromillions");

describe("euromillions tests", () => {
  test("that the drawEuromillions function returns an array of 7 balls", () => {
    expect(lottery.drawEuroMillions()).toHaveLength(7);
  });

  test("that the drawEuromillions returns the first 5 balls between 1 and 50 (set 1)", () => {
    let firstFiveBalls = lottery.drawEuroMillions().slice(0, 5);

    firstFiveBalls.forEach((ball) => {
      expect(ball).toBeGreaterThanOrEqual(1);
      expect(ball).toBeLessThanOrEqual(50);
    });

    expect(firstFiveBalls).toHaveLength(5);
  });

  test("that the drawEuromillions returns the last 2 balls between 1 and 12 (set 2)", () => {
    let lastTwoBalls = lottery.drawEuroMillions().slice(5, 7);

    lastTwoBalls.forEach((ball) => {
      expect(ball).toBeGreaterThanOrEqual(1);
      expect(ball).toBeLessThanOrEqual(12);
    });

    expect(lastTwoBalls).toHaveLength(2);
  });

  test("that if we draw 500 times, at least one of the ball is equal to 1 and that another ball is equal to 50", () => {
    let result = [];

    for (let i = 0; i < 500; i++) {
      let myDraw = lottery.drawEuroMillions();
      result = result.concat(myDraw);
    }
    expect(result).toContain(1);
    expect(result).toContain(50);
  });

  test("that the balls returned are integers, not floating point numbers", () => {
    let myDraw = lottery.drawEuroMillions();

    for (let i = 0; i < myDraw.length; i++) {
      expect(myDraw[i] % 1).toBe(0);
    }
  });
});
