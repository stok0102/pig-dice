//backend logic
var dice = ['\u2680', '\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685'];
var players = 2;
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
  die1 = Math.floor((Math.random() * 6) + 1);
  die2 = Math.floor((Math.random() * 6) + 1);
  rollResult = die1 + die2
  this.tempScore += rollResult;
  console.log(die1);
  console.log(die2);
  if (die1 === 1 && die2 === 1) {
    this.tempScore = 0;
    this.score = 0;
    game.switchTurn();
  }
  else if (die1 === 1 || die2 === 1) {
    this.tempScore = 0;
    game.switchTurn();
  }
}

Game.prototype.robotTurn = function () {
  player2.roll();
  $("#tempScore h2").text(player2.tempScore);
  while (game.turn === -1) {
    while (player2.tempScore < 10) {
      player2.roll();
    }
    player2.stand();
  }
}
Game.prototype.switchTurn = function () {
  this.turn *= -1;
  if (players === 1) {
    if (game.turn === -1) {
      game.robotTurn();
    }
  }
  $("#arrow h1").toggleClass("rotate")
}

Player.prototype.stand = function () {
  this.score += this.tempScore;
  this.tempScore = 0;
  game.playerOneScore = player1.score;
  game.playerTwoScore = player2.score;
  if (game.playerOneScore >=100 || game.playerTwoScore >= 100) {
    game.gameOver = true;
    alert("GAME OVER - Player one score: " + game.playerOneScore + " Player two score: " + game.playerTwoScore);
  $("#playerOption").show();  
  game = new Game(1, false, 0, 0, [player1, player2]);
  player1 = new Player(1,0,0);
  player2 = new Player(-1,0,0);
  }
  game.switchTurn();
  $("#playerOneScore h2").text(player1.score);
  $("#playerTwoScore h2").text(player2.score);
  $("#tempScore h2").text("");

}
//frontend logic
$(document).ready(function() {

  $("form#playerOption").submit(function(event) {
  event.preventDefault();
    $("#gameGUI").show();
    $("#playerOption").hide();
    players = parseInt($("#option").val());
    console.log(players);

  });

  $("#roll").click(function() {
    if (game.turn === 1) {
      player1.roll();
      $("#tempScore h2").text(player1.tempScore);
    }
    else if (game.turn === -1) {
      player2.roll();
      $("#tempScore h2").text(player2.tempScore);
    }
    $("#die p").text(dice[die1] + dice[die2]);
  });

  $("#stand").click(function(){
    if (game.turn === 1) {
      player1.stand();
    }
    else if (game.turn === -1) {
      player2.stand();
    }
    console.log(game);
  });
});
