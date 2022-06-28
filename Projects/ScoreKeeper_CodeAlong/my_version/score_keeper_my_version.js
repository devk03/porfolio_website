blueScore = document.querySelector("#score_blue");
redScore = document.querySelector("#score_red");
blueIncr = document.querySelector(".blue");
redIncr = document.querySelector(".red");
reset = document.querySelector(".reset");
valueLimit = document.querySelector("#playto");
var blueInt = 0;
var redInt = 0;
var limit = 0;
var game = false;
function score_limit(blue, red) {
  if (blueInt == limit) {
    alert("blue wins, press reset to play again");
    game = true;
    return;
  } else if (redInt == limit) {
    alert("red wins, press reset to play again");
    game = true;
    return;
  } else {
    return;
  }
}
valueLimit.addEventListener("input", function () {
  limit = parseInt(this.value);
});
blueIncr.addEventListener("click", function () {
  if (game == false) {
    blueInt++;
    blueScore.innerText = blueInt;
    score_limit(blueInt, redInt);
  } else {
    alert("reset the game");
    return;
  }
});
redIncr.addEventListener("click", function () {
  if (game == false) {
    redInt++;
    redScore.innerText = redInt;
    score_limit(blueInt, redInt);
  } else {
    alert("reset the game");
    return;
  }
});
reset.addEventListener("click", function () {
  redInt = 0;
  blueInt = 0;
  redScore.innerText = redInt;
  blueScore.innerText = blueInt;
  game = false;
});
