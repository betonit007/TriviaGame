////Variables//
var timeleft;
var timer;
var counter = 0;
var f = 2;
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
    $("#answer" + f).text(questonAnswerArray[0].correctAnswer);
}

function questions() {
    $("#question").text("What will be the first Question in Saab Trivia?");
}

////////////creates question / answer info arrays/////////////////////////

function qAndA(saabQuestion, correctAnswer) {
   this.saabQuestion = saabQuestion;
   this.correctAnswer = correctAnswer;
   this.saabAnswers = [];
   

}

var questionAnswer1 = new qAndA("What is the fastest Saab Protection car, 0-60 mph?", "1999 9-3 Viggen");
questionAnswer1.saabAnswers[0] = "2008 9-3 Turbo X SportCombi";
questionAnswer1.saabAnswers[1] = "2006 9-3 Aero V6";

var questonAnswerArray = [questionAnswer1];



  


