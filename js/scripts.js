//backend logic
function roll() {
  result = Math.floor((Math.random() * 6) + 1);
  return result;
}
var tempScore = 0;
function runningScore(rollResult) {
  tempScore += rollResult;
  return tempScore;
}
totalScore = 0;
function TotalScore(tempScore){
  totalScore += tempScore;
  return totalScore;
}

//frontend logic
$(document).ready(function() {

  $("#roll").click(function() {
    var rollResult = roll();
    console.log(rollResult);
    $("#die h2").text(rollResult);
    $("#tempScore h2").text(runningScore(rollResult));
  });
  $("#stand").click(function(){
    if (totalScore >=100){
      return alert("GAME OVER");
      totalScore = 0;
      tempScore = 0;
    } else {
      $("#totalScore h2").text(TotalScore(tempScore));
    }
  });
});
