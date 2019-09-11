var timeleft = 60;
var score = 0;


var timer = setInterval(function(){
  document.getElementById("timer").innerHTML = "You have " + timeleft + " seconds left!";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(timer); 
    document.getElementById("timer").innerHTML = "Game over"
    document.getElementById("score").innerHTML = "Score=" + score;
  }
},1000);

$("#qOne").on("click", function() {
  score ++;
  });

$("#qTwo").on("click", function() {
  score ++;
 });

$("#qThree").on("click", function() {
  score ++;
});
$("#qFour").on("click", function() {
  score ++;
});
$("#qFive").on("click", function() {
  score ++;
});
$("#qSix").on("click", function() {
  score ++;
});



