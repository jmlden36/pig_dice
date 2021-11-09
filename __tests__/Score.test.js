import Score from './../src/Score.js';

describe('Score', () => {

  test('should create a Score object with three key value pairs', () => {
    const myScore = new Score();
    expect(myScore.currentScore).toEqual(0);
    expect(myScore.totalScore).toEqual(0);
    expect(myScore.turnTotals).toEqual([]);
  });
});