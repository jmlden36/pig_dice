import Score from './../src/Score.js';

describe('Score', () => {

  test('should create a Score object with three key value pairs', () => {
    const myScore = new Score();
    expect(myScore.currentScore).toEqual(0);
    expect(myScore.totalScore).toEqual(0);
    expect(myScore.turnTotals).toEqual([]);
  });
  test("should add the int argument to the objects current score", () => {
    let myScore = new Score();
    myScore.addRollToCurrentScore(2);
    expect(myScore.currentScore).toEqual(2);
  });
  test("should add the current score to the total score of an object", () => {
    let myScore = new Score();
    myScore.currentScore = 5;
    myScore.addRollsToTotalScore();
    expect(myScore.totalScore).toEqual(5);
  });
  test("should change the value of current score to 0", () => {
    let myScore = new Score();
    myScore.currentScore = 15;
    myScore.clearCurrentScore();
    expect(myScore.currentScore).toEqual(0);
  });
});