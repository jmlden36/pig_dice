// Dice business logic
function Die(){
  this.rolls = [];
}

Die.prototype.diceRoll = function(){
  let roll = (Math.floor(Math.random() * 6 ) + 1);
  if(roll === 1){
    //clearAllRolls(this.rolls);
  } else {
    this.rolls.push(roll);
  }
};

Die.prototype.addRolls = function() {
  let currentTotal = 0;
  this.rolls.forEach(function(number) {
    currentTotal += number;
  });
  return currentTotal;
};

Die.prototype.clearAllRolls = function() {
    this.rolls = [""];
}

/*
  functions we want
  
  addRollsToTotal
  
  
  UI
  removeallrollsfromdom

*/
// Score business logic
function Score(currentScore, totalScore){
  this.currentScore = currentScore;
  this.totalScore = totalScore;
  this.currentRoll = 0;
}