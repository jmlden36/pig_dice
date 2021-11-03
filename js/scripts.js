// Dice business logic
function Die(){
  this.rolls = [];
}

Die.prototype.diceRoll = function(){
  let roll = (Math.floor(Math.random() * 6 ) + 1);
  if(roll === 1){
    console.log("is a 1");
  } else {
    this.rolls.push(roll);
  }
}

// Score business logic
function Score(currentScore, totalScore){
  this.currentScore = currentScore;
  this.totalScore = totalScore;
  this.currentRoll = 0;
}