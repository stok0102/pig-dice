//backend logic
function Player(turn, tempScore, score) {
  this.turn = turn;
  this.tempScore = tempScore;
  this.score = score;
}

function Game(turn, gameOver, playerOneScore, playerTwoScore) {
  this.turn = turn;
  this.gameOver = gameOver;
  this.playerOneScore = playerOneScore;
  this.playerTwoScore = playerTwoScore;
}

var player1 = new Player(1,0,0);
var player2 = new Player(-1,0,0);
var game = new Game(1, false, player1.score, player2.score);

Player.prototype.roll = function () {
  this.tempScore = Math.floor((Math.random() * 6) + 1);
  return this.tempScore;
}

Game.prototype.switchTurn = function () {
  this.turn *= -1;
}

Player.prototype.stand = function () {
  
}
//frontend logic
