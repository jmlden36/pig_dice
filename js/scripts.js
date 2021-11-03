// Dice business logic
function Die(){
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

// Score business logic
function Score(){
  this.currentScore = 0;
  this.totalScore = 0;
  this.turnTotals = [];
}

Score.prototype.addRollToCurrentScore = function(int){
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

// UI logic
let p1Score = new Score();
let p2Score = new Score();
let die = new Die();


function updatePlayerScore(bool){

}
/*
BOWLING STYLE ANIMATION THINGY 
switch to fail image
setTimeout(switch back to die image, timeToDelayInMs)


Row 1
  Card 1 - Player 1 Total Score 
  Card 2 - Whose Turn It Is
  Card 3 - Player 2 Total Score
Row 2
  Card 1 - Player 1 Score for all previous turns  
  Card 2 - Image of die =card-img-top/Current turn total = card-title/ All Rolls = currentTurnRolls/  
  Card 3 - Player 2 Score for all previous turns
  
#player1Score or #player2Score score will update when the player clicks hold

#player1TurnTotals or #player2TurnTotals will append turnTotals to to the ol
when player clicks roll #currentTurnTotals use currentRoll to append to the ol

#player1 or #player2 turn score will continue to add rolled numbers as either player continues to push "Roll" until "Hold" is pushed or a "1" is rolled 

image of die with corresponding number should to appear to display the current roll's number 
  pseudo code
    If current role at index in array 
    === 1, show <img roll1>
    === 2, show <img roll2>
    === 3, show <img roll3>
    etc.

show which player's turn it is in Row 1, Card 2


show a winner when either player reaches a total score of 100


*/ 

//Buttons
function attachContactListeners(){
  $("#roll").click(function(){
    let currentRoll = die.diceRoll();
    if(die.p1Turn){
      if(currentRoll + p1Score.totalScore >= 100){
        //wingamefunction p1 wins
      }
    } else if(!die.p1Turn) {
      if(currentRoll + p2Score.totalScore >= 100){
        //wingamefunction p2 wins
      }
    } 
    if(currentRoll === 1){
      die.clearAllRolls;
      switchTurns(die.p1Turn);
      // update who's turn ui
    } else {
      die.rolls.push(currentRoll);
      if(die.p1Turn){
        p1Score.addRollToCurrentScore(currentRoll);
        // call updateScoreUi(#p1Score)
      } else{
        p2Score.addRollToCurrentScore(currentRoll);
        // call updateScoreUi(#p2Score)
      }
    }
  });

  $("#hold").click(function(){
    if(die.p1Turn){
      p1Score.turnTotals.push(currentScore);
      p1Score.addRollsToTotalScore();
      p1Score.clearCurrentScore();
    } else {
      p2Score.turnTotals.push(currentScore);
      p2Score.addRollsToTotalScore();
      p2Score.clearCurrentScore();
    }
    switchTurns(die.p1Turn);
  });

  $("#newGame").click(function(){
    location.reload();
  });  
}

$(document).ready(function(){
  attachContactListeners();
});