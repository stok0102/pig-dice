//backend logic
var dice = ['\u2680', '\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685'];

function Player(turn, tempScore, score) {
  this.turn = turn;
  this.tempScore = tempScore;
  this.score = score;
}

function Game(turn, gameOver, playerOneScore, playerTwoScore, players) {
  this.turn = turn;
  this.gameOver = gameOver;
  this.playerOneScore = playerOneScore;
  this.playerTwoScore = playerTwoScore;
  this.players = players;
}

function displayScores(){
  $("#playerOneScore h2").text(player1.score);
  $("#playerTwoScore h2").text(player2.score);
}

var player1 = new Player(1,0,0);
var player2 = new Player(-1,0,0);
var game = new Game(1, false, 0, 0, [player1, player2]);

Player.prototype.roll = function () {
  rollResult = Math.floor((Math.random() * 6) + 1);
  this.tempScore += rollResult;
  if (rollResult === 1) {
    this.tempScore = 0;
    game.switchTurn();
  }
  console.log(rollResult);
}

Game.prototype.switchTurn = function () {
  this.turn *= -1;
  $("#arrow h1").toggleClass("rotate")
}

Player.prototype.stand = function () {
  game.switchTurn();
  this.score += this.tempScore;
  this.tempScore = 0;
  game.playerOneScore = player1.score;
  game.playerTwoScore = player2.score;
  if (game.playerOneScore >=10 || game.playerTwoScore >= 10) {
    game.gameOver = true;
    alert("GAME OVER - Player one score: " + game.playerOneScore + " Player two score: " + game.playerTwoScore);
  game = new Game(1, false, 0, 0, [player1, player2]);
  player1 = new Player(1,0,0);
  player2 = new Player(-1,0,0);
  }
  $("#playerOneScore h2").text(player1.score);
  $("#playerTwoScore h2").text(player2.score);
  $("#tempScore h2").text("");

}
//frontend logic
$(document).ready(function() {
  $("#roll").click(function() {
    if (game.turn === 1) {
      player1.roll();
      $("#tempScore h2").text(player1.tempScore);
    }
    else {
      player2.roll();
      $("#tempScore h2").text(player2.tempScore);
    }
    $("#die p").text(dice[rollResult]);
  });

  $("#stand").click(function(){
    if (game.turn === 1) {
      player1.stand();
    }
    else {
      player2.stand();
    }
    console.log(game);
  });
});
