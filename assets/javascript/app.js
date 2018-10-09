////Variables//
var timeleft;
var timer;
var i = 0;
var answerChosen;
var correct = 0;
var incorrect = 0;
var endCount = 0;
///////////////////////////////////////

////////////////////////////////////////////////////////Main Body//////////////////////////////////////////

$(document).ready(function() {

  if (endCount === 0) {
      start();
  }

  $(document).on("click", "div#start", function() {
     thirtySecTimer();
 
     questionAnswer();

    });


  $(document).on("click", "div.aField", function() {
     answerChosen = $(this);
     if (answerChosen.text() === questionAnswerArray[i].correctAnswer) {
        emptyFields();
        yourRight();
        i++;
        if (i === 10) {
           setTimeout("endGame()", 4000);

        }
        
     }
     else {
        emptyFields();
        yourWrong();
        i++;
        if (i === 10) {
            setTimeout("endGame()", 4000);
        }
     }
    

  
    });
  







});

/////////////////functions////////////////////////////////////////

function emptyFields () {
    $(".aField, #timer, #question, #start").empty();
    $(".aField").removeClass("answer");

}

function yourRight() {
    clearInterval(timer);
    correct++;
    $("#score").html("Right: " + correct + "   Wrong: " + incorrect);
    $("#timer").html("<img src='assets/images/right.png' width='800px'></img>");
    $("#score").css({"margin-top": "270px"});
    setTimeout("emptyFields()", 4000);
    setTimeout("questionAnswer()", 4000);
    setTimeout(function() { $("#score").css({"margin-top": "0px"}); }, 4000);
    setTimeout("clearInterval(timer)", 4000);
    setTimeout("thirtySecTimer();", 4000);
}

function yourWrong() {
    clearInterval(timer);
    incorrect++;
    $("#score").html("Right: " + correct + "   Wrong: " + incorrect);
    $("#timer").html("<img src='assets/images/Delete.png' width='800px'></img>");
    $("#score").css({"margin-top": "100px"});
    setTimeout("emptyFields()", 4000);
    setTimeout("questionAnswer()", 4000);
    setTimeout(function() { $("#score").css({"margin-top": "0px"}); }, 4000);
    setTimeout("clearInterval(timer)", 4000);
    setTimeout("thirtySecTimer();", 4000);
    
}

////Timer/////
function thirtySecTimer() {
    $("#start").empty();
    $("#start").removeClass("answer");
    timeleft = 24;
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
        emptyFields();
        yourWrong();
        $("h1").text("Time is Up!");
        setTimeout(function() { $("h1").text("Saab Trivia"); }, 3900);
        i++;
        }
    }, 1000);
        if (i === 10) {
            setTimeout("endGame()", 4000);
        }
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

function endGame() {
    clearInterval(timer);
    emptyFields();
    setTimeout("$('#score').empty()", 9500);
    setTimeout("start()", 10000);
    setTimeout(function() {i = 0; correct = 0; incorrect = 0;}, 10000);
    endCount++;
}


////////////creates question / answer info arrays/////////////////////////



function qAndA(saabQuestion, correctAnswer) {
   this.saabQuestion = saabQuestion;
   this.correctAnswer = correctAnswer;
   this.saabAnswers = [];
   

}

var questionAnswer1 = new qAndA("What is the fastest Saab production vehicle, 0-60 mph?", "1999 9-3 Viggen");
questionAnswer1.saabAnswers[0] = "2008 9-3 Turbo X SportCombi";
questionAnswer1.saabAnswers[1] = "2006 9-3 Aero V6";

var questionAnswer2 = new qAndA("When did Saab introduce the world's first car headlamp wipers and washers?", "1970");
questionAnswer2.saabAnswers[0] = "1978";
questionAnswer2.saabAnswers[1] = "1984";

var questionAnswer3 = new qAndA("In what country was Saab headquartered?", "Sweden");
questionAnswer3.saabAnswers[0] = "Finland";
questionAnswer3.saabAnswers[1] = "Denmark";

var questionAnswer4 = new qAndA("When Saab was originally founded in 1938, what did they manufacture?", "Aircraft");
questionAnswer4.saabAnswers[0] = "Cars and Trucks";
questionAnswer4.saabAnswers[1] = "Diesel Engines";

var questionAnswer5 = new qAndA("In what year did General Motors buy out Saab?", "2000");
questionAnswer5.saabAnswers[0] = "1994";
questionAnswer5.saabAnswers[1] = "1985";

var questionAnswer6 = new qAndA("What is considered to be the most iconic interior feature of Saabs?", "Cupholder");
questionAnswer6.saabAnswers[0] = "Heated Seats";
questionAnswer6.saabAnswers[1] = "Overhead Lamps";

var questionAnswer7 = new qAndA("What was the 'Viggen' of the Saab 9-3 Viggen named after?", "Aircraft");
questionAnswer7.saabAnswers[0] = "Nordic God";
questionAnswer7.saabAnswers[1] = "Planet";

var questionAnswer8 = new qAndA("In 1997, Saab introduced this Industry first interior feature. What is it?", "Air Conditioned Seats");
questionAnswer8.saabAnswers[0] = "Overhead Airbags";
questionAnswer8.saabAnswers[1] = "Adaptive Cruise Control";

var questionAnswer9 = new qAndA("In 2007 Saab produced the most units in its history. How many units was it?", "125,000");
questionAnswer9.saabAnswers[0] = "150,000";
questionAnswer9.saabAnswers[1] = "180,000";

var questionAnswer10 = new qAndA("When was the most recent year that Saab reported a profit??", "2001");
questionAnswer10.saabAnswers[0] = "2007";
questionAnswer10.saabAnswers[1] = "1997";

var questionAnswerArray = [questionAnswer1, questionAnswer2, questionAnswer3, questionAnswer4, questionAnswer5, questionAnswer6, questionAnswer7, questionAnswer8, questionAnswer9, questionAnswer10];



  


