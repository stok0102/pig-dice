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

//frontend logic
$(document).ready(function() {

  $("#roll").click(function() {
    debugger;
    var rollResult = roll();
    console.log(rollResult);
    $("#die h2").text(rollResult);
    $("#tempScore h2").text(runningScore(rollResult));
  });
});
