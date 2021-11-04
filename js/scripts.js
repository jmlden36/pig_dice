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
}// make a method

// UI logic
let p1Score = new Score();
let p2Score = new Score();
let die = new Die();


function updatePlayerScore(){
  if (die.p1Turn) {
    $("#player1Score").text = p1Score.totalScore;
  } else{
    $("#player2Score").text = p1Score.totalScore;
  }
}
function updatePlayerTurn(){
  if (die.p1Turn) {
    $("#playerTwoTurn").hide();
    $("#playerOneTurn").show();
  } else {
    $("#playerOneTurn").hide();
    $("#playerTwoTurn").show();
  }
}
function updateTurnTotals(){
  if (die.p1Turn) {
    let turnTotalsList = $("ol#player1TurnTotals");
    let htmlForTurnTotals = "";
    p1Score.turnTotals.forEach(function(element) {
      htmlForTurnTotals += "<li id=" +  element.toString() + "</li>";
    });
    turnTotalsList.html(htmlForTurnTotals);
  }
    // Look at displayContactDetails

    // clear player1 turn totals from DOM
    // loop through player1s turn totals and add all to #player1TurnTotals
    //$("#player1TurnTotals").text = p1Score.currentScore
  } else {
    // clear player2 turn totals from DOM
    // loop through player2s turn totals and add all to #player1TurnTotals
    //$("#player2TurnTotals").text = p2Score.currentScore
  }
}
function updateCurrentTurnRolls(){
  // #player1 or #player2 turn score will continue to add rolled numbers as either player continues to push "Roll" until "Hold" is pushed or a "1" is rolled 
  // #currentTurnRolls
}
function updateCurrentRollImage(currentRoll){
  // based on current roll, toggle images to display correct number **use switch statement**
  //toggle all images off, toggle on based on switch statement
}
/*
Add functionality for game ending, and game beginning
Add functionality for the crap talking array    setTimeout(function, timeout in ms)
*/ 

//Buttons
function attachContactListeners(){
  $("#roll").click(function(){
    let currentRoll = die.diceRoll();
    if(die.p1Turn){
      if(currentRoll + p1Score.totalScore >= 100){
        //wingamefunction p1 wins
      }
    } else {
      if(currentRoll + p2Score.totalScore >= 100){
        //wingamefunction p2 wins
      }
    } 
    if(currentRoll === 1){
    
      die.clearAllRolls;
      p2Score.turnTotals.push(0);
      p2Score.addRollsToTotalScore();
      p2Score.clearCurrentScore();
      switchTurns(die.p1Turn);
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
      p1Score.turnTotals.push(p1Score.currentScore);
      p1Score.updateTurnTotals();
      p1Score.addRollsToTotalScore();
      p1Score.clearCurrentScore();
    } else {
      p2Score.turnTotals.push(p2Score.currentScore);
      p2Score.updateTurnTotals();
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