////Variables//
var timeleft;
var timer;
var i = 0;
var answerChosen;
var correct = 0;
var incorrect = 0;
///////////////////////////////////////

////////////////////////////////////////////////////////Main Body//////////////////////////////////////////

$(document).ready(function() {

  start();

  $(document).on("click", "div#start", function() {
     thirtySecTimer();
 
     questionAnswer();

    });


  $(document).on("click", "div.aField", function() {
     answerChosen = $(this);
     if (answerChosen.text() === questionAnswerArray[0].correctAnswer) {
        console.log("Correct!");
        yourRight();
     }
     else {
        console.log("Incorrect!");
     }
    

  
    });
  







});

/////////////////functions////////////////////////////////////////

function yourRight() {
    clearInterval(timer);
    correct++;
    $("#timer").text("Correct!");
    $("#score").html("Right: " + correct + "   Wrong: " + incorrect);


}

////Timer/////
function thirtySecTimer() {
    $("#start").empty();
    $("#start").removeClass("answer");
    timeleft = 11;
    timer = setInterval(function(){
        $("#timer").text("You have: " + timeleft + " seconds remaining.");
        timeleft--;
        if (timeleft > 10) {
            $("#timer").css("color", "#D7A84F");
        }
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
    
function questionAnswer() {
    $("#question").text(questionAnswerArray[i].saabQuestion);
    $(".aField").addClass("answer");
    var f = (Math.floor(Math.random() * 3));
    $("#answer" + f).text(questionAnswerArray[i].correctAnswer);
    console.log($("#answer0").html);
    if (f === 0) {
        $("#answer1").text(questionAnswerArray[i].saabAnswers[0]);
        $("#answer2").text(questionAnswerArray[i].saabAnswers[1]);
    }
    else if (f === 1) {
        $("#answer0").text(questionAnswerArray[i].saabAnswers[0]);
        $("#answer2").text(questionAnswerArray[i].saabAnswers[1]);
    }
    else {
        $("#answer0").text(questionAnswerArray[i].saabAnswers[0]);
        $("#answer1").text(questionAnswerArray[i].saabAnswers[1]);
    }


    
}


////////////creates question / answer info arrays/////////////////////////



function qAndA(saabQuestion, correctAnswer) {
   this.saabQuestion = saabQuestion;
   this.correctAnswer = correctAnswer;
   this.saabAnswers = [];
   

}

var questionAnswer1 = new qAndA("What is the fastest Saab production car, 0-60 mph?", "1999 9-3 Viggen");
questionAnswer1.saabAnswers[0] = "2008 9-3 Turbo X SportCombi";
questionAnswer1.saabAnswers[1] = "2006 9-3 Aero V6";

var questionAnswerArray = [questionAnswer1];



  


