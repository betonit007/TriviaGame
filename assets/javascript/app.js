////Variables//
var timeleft;
var timer;

///////////////////////////////////////

////////////////////////////////////////////////////////Main Body//////////////////////////////////////////

$(document).ready(function() {

  start();

  $(document).on("click", "div#start", function() {
  thirtySecTimer();
 
  possibleAnswers();

  questions();

  });

  









});

/////////////////functions////////////////////////////////////////

////Timer/////
function thirtySecTimer() {
    $("#start").empty();
    $("#start").removeClass("answer");
    timeleft = 11;
    timer = setInterval(function(){
        $("#timer").text("You have: " + timeleft + " seconds remaining.");
        timeleft--;
        if (timeleft < 10) {
            $("#timer").css("color", "red");
        }
        if (timeleft < 0) 
        {
        $("#timer").css("color", "#D7A84F");
        $("#timer").text("Time is Up!");
        }
    }, 1000);
}

function start() {
    $("#start").text("Press Start");
    $("#start").addClass("answer");
}
    
function possibleAnswers() {
    $(".aField").addClass("answer");
}

function questions() {
    $("#question").text("What will be the first Question in Saab Trivia?");
}



  


