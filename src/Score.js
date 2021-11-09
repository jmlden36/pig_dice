export default function Score(){
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