blueScore = document.querySelector("#score_blue");
redScore = document.querySelector("#score_red");
blueIncr = document.querySelector(".blue");
redIncr = document.querySelector(".red");
reset = document.querySelector(".reset");
var blueInt = 0;
var redInt = 0;

blueIncr.addEventListener('click', function(){
    blueInt++;
    blueScore.innerText = blueInt;
});
redIncr.addEventListener('click', function(){
    redInt++;
    redScore.innerText = redInt;
});
reset.addEventListener('click', function(){
    redInt == 0;
    blueInt = 0;
    redScore.innerText = redInt;
    blueScore.innerText = blueInt;
});