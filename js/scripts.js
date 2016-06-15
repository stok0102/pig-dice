//backend logic
var tempScore = 0;
var playerOneScore = 0;
var playerTwoScore = 0;
var turn = 1;
var dice = ['\u2680', '\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685'];

function roll() {
  result = Math.floor((Math.random() * 6) + 1);
  if (result === 1) {
    switchTurn(turn);
    result *= 0;
  }
  return result;
}

function runningScore(rollResult) {
  tempScore += rollResult;
  return tempScore;
}

function stand(tempScore, turn){
  if (turn === 1) {
    playerOneScore += tempScore;
    return playerOneScore;
  }
  else {
    playerTwoScore += tempScore;
    return playerTwoScore;
  }
}

function switchTurn() {
  turn *= -1;
  tempScore *= 0;
  $("#arrow h1").toggleClass("rotate")
}

//frontend logic
$(document).ready(function() {

  $("#roll").click(function() {
    var rollResult = roll();
    $("#die p").text(dice[rollResult]);
    $("#tempScore h2").text(runningScore(rollResult));
  });

  $("#stand").click(function(){
    stand(tempScore, turn);
    switchTurn();
    $("#tempScore h2").text(tempScore);

    if (playerOneScore >=100 || playerTwoScore >= 100) {
      alert("GAME OVER");
      playerOneScore *= 0;
      playerTwoScore *= 0;
    }

    $("#playerOneScore h2").text(playerOneScore);
    $("#playerTwoScore h2").text(playerTwoScore);
    console.log(playerOneScore);
    console.log(playerTwoScore);
  });

});
