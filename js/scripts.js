//backend logic
var tempScore = 0;
var totalScore = 0;

function roll() {
  result = Math.floor((Math.random() * 6) + 1);
  if (result === 1) {
    tempScore *= 0;
    return 0;
  }
  else {
    return result;
  }
}
function runningScore(rollResult) {
  tempScore += rollResult;
  return tempScore;
}

function stand(tempScore){
  totalScore += tempScore;
  tempScore *= 0;
  return totalScore;
}

//frontend logic
$(document).ready(function() {

  $("#roll").click(function() {
    var rollResult = roll();
    $("#die h2").text(rollResult);
    $("#tempScore h2").text(runningScore(rollResult));
  });

  $("#stand").click(function(){
    $("#totalScore h2").text(stand(tempScore));
    tempScore *= 0;
    $("#tempScore h2").text(tempScore);
    if (totalScore >=100) {
      return alert("GAME OVER");
      totalScore *= 0;
    }
    console.log(tempScore);
  });

});
