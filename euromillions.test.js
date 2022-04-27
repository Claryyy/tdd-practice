// Joe expects to be given 7 balls
// Joe expects the first 5 to be between 1 and 50 (set 1)
// Joe expects the last 2 to be between 1 and 12 (set 2)
// Joe cannot receive duplicates in a set, but it's ok for duplicates across the two sets
// Joe expects the balls in a set to be returned in numerical order

const lottery = require("./euromillions");

describe("Joe's Euro millions lottery ball generator... tests", () => {
  test("...Joe expects to be given 7 balls", () => {
    expect(lottery.drawEuroMillions()).toHaveLength(7);
  });

  test("...Joe expects the first 5 to be between 1 and 50", () => {
    let firstFiveBalls = lottery.drawEuroMillions().slice(0, 5);

    firstFiveBalls.forEach((ball) => {
      expect(ball).toBeGreaterThanOrEqual(1);
      expect(ball).toBeLessThanOrEqual(50);
    });

    expect(firstFiveBalls).toHaveLength(5);
  });

  test("...Joe expects the last 2 to be between 1 and 12", () => {
    let lastTwoBalls = lottery.drawEuroMillions().slice(5, 7);

    lastTwoBalls.forEach((ball) => {
      expect(ball).toBeGreaterThanOrEqual(1);
      expect(ball).toBeLessThanOrEqual(12);
    });

    expect(lastTwoBalls).toHaveLength(2);
  });

  test("...Joe expects to get a 50 or a 1 from the first set if he draws 500 times", () => {
    let result = [];

    for (let i = 0; i < 500; i++) {
      let myDraw = lottery.drawEuroMillions().slice(0, 5);
      result = result.concat(myDraw);
    }
    expect(result).toContain(1);
    expect(result).toContain(50);
  });

  test("...Joe expects to get a 12 or a 1 from the second set if he draws 500 times", () => {
    let result = [];

    for (let i = 0; i < 500; i++) {
      let myDraw = lottery.drawEuroMillions().slice(5, 7);
      result = result.concat(myDraw);
    }
    expect(result).toContain(1);
    expect(result).toContain(12);
  });

  test("...Joe expects to get whole numbers", () => {
    let myDraw = lottery.drawEuroMillions();

    for (let i = 0; i < myDraw.length; i++) {
      expect(myDraw[i] % 1).toBe(0);
    }
  });

  test("...Joe cannot receive doubles in a set (1st set)", () => {
    for (let i = 0; i < 500; i++) {
      let myDraw = lottery.drawEuroMillions().slice(0, 5);

      for (let j = 0; j < myDraw.length; j++) {
        let filteredDraw = myDraw.filter((ball) => ball === myDraw[j]);
        expect(filteredDraw).toHaveLength(1);
      }
    }
  });

  test("...Joe cannot receive doubles in a set (2nd set)", () => {
    for (let i = 0; i < 500; i++) {
      let myDraw = lottery.drawEuroMillions().slice(5, 7);

      for (let j = 0; j < myDraw.length; j++) {
        let filteredDraw = myDraw.filter((ball) => ball === myDraw[j]);
        expect(filteredDraw).toHaveLength(1);
      }
    }
  });
});
