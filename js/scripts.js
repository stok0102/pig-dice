//backend logic
var tempScore = 0;
var playerOneScore = 0;
var playerTwoScore = 0;
var turn = 1;

function roll() {
  result = Math.floor((Math.random() * 6) + 1);
  if (result === 1) {
    switchTurn(turn);
    return 0;
  }
  else {
    console.log(tempScore);
    return result;
  }
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
    $("#die h2").text(rollResult);
    $("#tempScore h2").text(runningScore(rollResult));
  });

  $("#stand").click(function(){
    stand(tempScore, turn);
    $("#playerOneScore h2").text(playerOneScore);
    $("#playerTwoScore h2").text(playerTwoScore);
    switchTurn();
    $("#tempScore h2").text(tempScore);
    if (playerOneScore >=100 || playerTwoScore >= 100) {
      return alert("GAME OVER");
      totalScore *= 0;
    }
    console.log(tempScore);
    console.log(turn);
  });

});
