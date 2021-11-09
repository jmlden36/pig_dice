import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Die from './Die.js'
import Score from './Score.js'

let p1Score = new Score();
let p2Score = new Score();
let die = new Die();

function updatePlayerScore(){
  if (die.p1Turn) {
    $("#player1Score").text(p1Score.totalScore);
  } else{
    $("#player2Score").text(p2Score.totalScore);
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
      htmlForTurnTotals += "<li>" +  element + "</li>";
    });
    turnTotalsList.html(htmlForTurnTotals);
  } else {
    let turnTotalsList = $("ol#player2TurnTotals");
    let htmlForTurnTotals = "";
    p2Score.turnTotals.forEach(function(element) {
      htmlForTurnTotals += "<li>" +  element + "</li>";
    });
    turnTotalsList.html(htmlForTurnTotals);
  }
}

function updateCurrentTurnRolls(){
  let currentTurnRolls = $("ol#currentTurnRolls");
  let htmlForCurrentTurnRolls = "";
  die.rolls.forEach(function(element) {
    htmlForCurrentTurnRolls += "<li>" + element + "</li>";
  });
  currentTurnRolls.html(htmlForCurrentTurnRolls);
}

function updateCurrentTotal() {
  let currentTotal = $("#currentTotal");
  if (die.p1Turn) {
    currentTotal.text(p1Score.currentScore);
  } else {
    currentTotal.text(p2Score.currentScore);
  }
}

function updateCurrentRollImage(currentRoll){
  $(".dieImage").hide();
  switch (currentRoll) {
    case (1):
      $("#roll1").show();
      break;
    case (2):
      $("#roll2").show();
      break;
    case (3):
      $("#roll3").show();
      break;
    case (4):
      $("#roll4").show();
      break;
    case (5):
      $("#roll5").show();
      break;
    case (6):
      $("#roll6").show();
      break;  
    default:
    console.warn("You Suck At Rolling Dice!");
  }
}

function winGame(){
  $(".play-area").hide();
  $("#win-game").show();
  if (die.p1Turn) {
    $("#winning-player").text("Player 1");
  } else {
    $("#winning-player").text("Player 2");
  } 
}

//Buttons
function attachContactListeners(){
  $("#roll").click(function(){
    let currentRoll = die.diceRoll();
    updateCurrentRollImage(currentRoll);
    if(die.p1Turn){
      if(currentRoll + p1Score.totalScore >= 100){
        winGame();
      }
    } else {
      if(currentRoll + p2Score.totalScore >= 100){
        winGame();
      }
    } 
    if(currentRoll === 1){
      die.clearAllRolls();
      if (die.p1Turn){
        p1Score.turnTotals.push(0);
        p1Score.clearCurrentScore();        
      } else {
        p2Score.turnTotals.push(0);
        p2Score.clearCurrentScore();
      }
      updateTurnTotals();
      updateCurrentTurnRolls();
      updateCurrentTotal();
      die.switchTurns();
      updatePlayerTurn();
    } else {
      die.rolls.push(currentRoll);
      if(die.p1Turn){
        p1Score.addRollToCurrentScore(currentRoll);
      } else{
        p2Score.addRollToCurrentScore(currentRoll);
      }
      updateCurrentTotal();
      updateCurrentTurnRolls();
    }
  });

  $("#hold").click(function(){
    if(die.p1Turn){
      p1Score.turnTotals.push(p1Score.currentScore);
      updateTurnTotals();
      p1Score.addRollsToTotalScore();
      updatePlayerScore();
      p1Score.clearCurrentScore();
    } else {
      p2Score.turnTotals.push(p2Score.currentScore);
      updateTurnTotals();
      p2Score.addRollsToTotalScore();
      updatePlayerScore();
      p2Score.clearCurrentScore();
    }
    die.clearAllRolls();
    updateCurrentTotal()
    updateCurrentTurnRolls();
    die.switchTurns();
    updatePlayerTurn();
  });

  $("#newGame").click(function(){
    location.reload();
  });  
}

$(document).ready(function(){
  attachContactListeners();
  updatePlayerTurn();
});