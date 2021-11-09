import Die from './../src/Die.js';

describe('Die', () => {

  test('should create a key object with two key value pairs', () => {
    const die = new Die();
    expect(die.rolls).toEqual([]);
    expect(die.p1Turn).toEqual(true);
  });
  test('should return a random number between 1 and 6', () => {
    expect(Die.prototype.diceRoll()).toBeLessThanOrEqual(6);
    expect(Die.prototype.diceRoll()).toBeGreaterThan(0);
  });
  test('should return the sum of this.rolls[]', () => {
  const newDie = new Die();
  newDie.rolls = [1,2,3]
  expect(newDie.addRolls()).toEqual(9);
  });
});