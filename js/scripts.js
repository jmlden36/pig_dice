// Dice business logic
function Die(){
  this.rolls = [];
}

Die.prototype.diceRoll = function(){
  let roll = (Math.floor(Math.random() * 6 ) + 1);
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
}


/*
  functions we want
  
  removeallrollsfromdom

*/
// Score business logic
function Score(){
  this.currentScore = 0;
  this.totalScore = 0;
  this.currentRoll = 0;
  this.turnTotals = [];
}

Score.prototype.addRollToCurrentScore = function (int){
  this.currentScore += int;
};

Score.prototype.addRollsToTotalScore = function() {
  this.totalScore += this.currentScore;
};

Score.prototype.clearCurrentScore = function() {
  this.currentScore = 0;
};

function switchTurns(bool){
  let newBool = !bool;
  return newBool;
}
/*
p1Turn = true;
Roll button : 
let roll = die.diceRoll();
if(roll === 1){
  die.clearAllRolls;
  switchTurns(p1Turn);
} else {
  die.rolls.push(roll);
  
  if(p1Turn){
    p1Score.addRollToCurrentScore(roll);
  } else{
    p2Score.addRollToCurrentScore(roll);
  }
}

Hold button:
*/