export default function Die(){
  this.rolls = [];
  this.p1Turn = true;
}

Die.prototype.diceRoll = function(){
  let roll = Math.floor(Math.random() * 6 ) + 1;
  return roll;
};

Die.prototype.addRolls = function() {
  let currentTotal = 0;
  this.rolls.forEach(function(number) {
    currentTotal += number;
  });
  return currentTotal;
};

Die.prototype.clearAllRolls = function() {
    this.rolls = [];
};

Die.prototype.switchTurns = function(){
  this.p1Turn = !this.p1Turn;
};