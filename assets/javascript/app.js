////Variables//
var timeleft;
var timer;
var i = 0;
var answerChosen;
var correct = 0;
var incorrect = 0;
////Sounds/////////
var rightSound =  new Audio("assets/sounds/right.mp3");
var wrongSound = new Audio("assets/sounds/wrong.mp3");

////////////////////////////////////////////////////////Main Body//////////////////////////////////////////

$(document).ready(function() {

  
     
          start();


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
           setTimeout("endGame()", 5010);

        }
     }
     else {
        emptyFields();
        yourWrong();
        i++;
        if (i === 10) {
            setTimeout("endGame()", 5010);
        }
     }
    
    });
  
});

/////////////////functions////////////////////////////////////////

function emptyFields () {
    $(".aField, #timer, #question, #start, #gif, #endGif").empty();
    $(".aField").removeClass("answer");

}

function yourRight() {
    clearInterval(timer);
    correct++;
    $("#score").html("Right: " + correct + "   Wrong: " + incorrect);
    $("#timer").html("<img src='assets/images/right.png' width='800px'></img>");
    $("#score").css({"margin-top": "270px"});
    rightSound.play();
    $("#gif").html("<img src='" + questionAnswerArray[i].image + "' height='180' width='320'></img>");
    setTimeout("emptyFields()", 5000);
    setTimeout("questionAnswer()", 5000);
    setTimeout(function() { $("#score").css({"margin-top": "0px"}); }, 5000);
    setTimeout("clearInterval(timer)", 5000);
    setTimeout("thirtySecTimer();", 5000);
}

function yourWrong() {
    clearInterval(timer);
    incorrect++;
    $("#score").html("The correct answer is: <br>" + questionAnswerArray[i].correctAnswer + "." + "<br> Right: " + correct + "   Wrong: " + incorrect);
    $("#timer").html("<img src='assets/images/Delete.png' width='800px' height='500px'></img>");
    wrongSound.play();
    $("#gif").html("<img src='" + questionAnswerArray[i].image + "' height='180' width='320'></img>");
    setTimeout("emptyFields()", 5000);
    setTimeout("$('#score').html('Right: ' + correct + '   Wrong: ' + incorrect)", 5000);
    setTimeout("questionAnswer()", 5000);
    setTimeout(function() { $("#score").css({"margin-top": "0px"}); }, 5000);
    setTimeout("clearInterval(timer)", 5000);
    setTimeout("thirtySecTimer();", 5000);
    
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
    var f = (Math.floor(Math.random() * 4));
    $("#answer" + f).text(questionAnswerArray[i].correctAnswer);
    if (f === 0) {
        $("#answer1").text(questionAnswerArray[i].saabAnswers[0]);
        $("#answer2").text(questionAnswerArray[i].saabAnswers[1]);
        $("#answer3").text(questionAnswerArray[i].saabAnswers[2]);
    }
    else if (f === 1) {
        $("#answer0").text(questionAnswerArray[i].saabAnswers[0]);
        $("#answer2").text(questionAnswerArray[i].saabAnswers[1]);
        $("#answer3").text(questionAnswerArray[i].saabAnswers[2]);
    }
    else if (f === 2) {
        $("#answer0").text(questionAnswerArray[i].saabAnswers[0]);
        $("#answer1").text(questionAnswerArray[i].saabAnswers[1]);
        $("#answer3").text(questionAnswerArray[i].saabAnswers[2]);
    }

    else if (f === 3) {
        $("#answer0").text(questionAnswerArray[i].saabAnswers[0]);
        $("#answer1").text(questionAnswerArray[i].saabAnswers[1]);
        $("#answer2").text(questionAnswerArray[i].saabAnswers[2]); 
    }
    
}

function endGame() {
    clearInterval(timer);
    emptyFields();
    if (correct > 6) {
        $("#gif").html("<img src='http://media2.giphy.com/media/FZ7VTamUWVLsA/giphy.gif?cid=3640f6095bbd6de6796e2f51452db36e' height='180' width='320'></img>");
        $("#timer").html("<img src='assets/images/right.png' width='800px'></img>");
        $("#score").css({"margin-top": "270px"});
        $("h1").text("Great Job!");
        setTimeout(function() { $("h1").text("Saab Trivia") }, 10000);
    }
    else {
        $("#endGif").html("<img src='http://media1.giphy.com/media/cr9vIO7NsP5cY/200.webp?cid=3640f6095bbd6e2b2e61526a3632e04e' height='220' width='320'></img>");
        $("#timer").html("<img src='assets/images/Delete.png' width='800px' height='500px'></img>");
        $("h1").text("Better Luck Next Time!");
        setTimeout(function() { $("h1").text("Saab Trivia") }, 10000);
    }
    
    clearInterval(timer);
    setTimeout("$('#score').empty()", 10000);
    setTimeout("$('#endGif').empty()", 10000);
    setTimeout("$('#gif').empty()", 10000);
    setTimeout(function() {i = 0; correct = 0; incorrect = 0;}, 10000);
    setTimeout(function() { $("#timer").empty(); }, 10000); 
    setTimeout("start()", 11000);
}

////////////creates question / answer info arrays/////////////////////////

function qAndA(saabQuestion, correctAnswer, image) {
   this.saabQuestion = saabQuestion;
   this.correctAnswer = correctAnswer;
   this.image = image;
   this.saabAnswers = [];
   
}

var questionAnswer1 = new qAndA("What is the fastest Saab production vehicle, 0-60 mph?", "1999 9-3 Viggen", "http://media0.giphy.com/media/rNn5HryaXHPgY/200.webp?cid=3640f6095bbd6e9c6e41616d7738a041");
questionAnswer1.saabAnswers[0] = "2008 9-3 Turbo X SportCombi";
questionAnswer1.saabAnswers[1] = "2006 9-3 Aero V6";
questionAnswer1.saabAnswers[2] = "2008 9-2X";

var questionAnswer2 = new qAndA("When did Saab introduce the world's first car headlamp wipers and washers?", "1970", "http://media3.giphy.com/media/LS4EFN0ZY3gpG/giphy.gif?cid=3640f6095bbd624b67613864416ab111");
questionAnswer2.saabAnswers[0] = "1978";
questionAnswer2.saabAnswers[1] = "1984";
questionAnswer2.saabAnswers[2] = "2000";

var questionAnswer3 = new qAndA("In what country was Saab headquartered?", "Sweden", "http://media2.giphy.com/media/l46Cy7gKvHFht4g1O/giphy.gif?cid=3640f6095bbd636031536369494a89b3");
questionAnswer3.saabAnswers[0] = "Finland";
questionAnswer3.saabAnswers[1] = "Denmark";
questionAnswer3.saabAnswers[2] = "Germany";

var questionAnswer4 = new qAndA("When Saab was originally founded in 1938, what did they manufacture?", "Aircraft", "http://media3.giphy.com/media/Btn42lfKKrOzS/giphy.gif?cid=3640f6095bbd6324394e4a7a2ea79705");
questionAnswer4.saabAnswers[0] = "Cars and Trucks";
questionAnswer4.saabAnswers[1] = "Diesel Engines";
questionAnswer4.saabAnswers[2] = "Ammunitions";

var questionAnswer5 = new qAndA("In what year did General Motors buy out Saab?", "2000", "http://media2.giphy.com/media/JHsos369mkc0M/giphy.gif?cid=3640f6095bbd693f3530647677236c99");
questionAnswer5.saabAnswers[0] = "1994";
questionAnswer5.saabAnswers[1] = "1985";
questionAnswer5.saabAnswers[2] = "2005";

var questionAnswer6 = new qAndA("What is considered to be the most iconic interior feature of Saabs?", "Cupholder", "http://media3.giphy.com/media/e54oEwTnLHzB6/giphy.gif?cid=e1bb72ff5bbd402b5546627532692c55");
questionAnswer6.saabAnswers[0] = "Heated Seats";
questionAnswer6.saabAnswers[1] = "Overhead Lamps";
questionAnswer6.saabAnswers[2] = "Satelite Radio";

var questionAnswer7 = new qAndA("What was the 'Viggen' of the Saab 9-3 Viggen named after?", "Aircraft", "http://media0.giphy.com/media/ifbtnpBgFAUF2/200w.webp?cid=3640f6095bbd6a453537684336d8b48c");
questionAnswer7.saabAnswers[0] = "Nordic God";
questionAnswer7.saabAnswers[1] = "Planet";
questionAnswer7.saabAnswers[2] = "Killer Whale";

var questionAnswer8 = new qAndA("In 1997, Saab introduced this Industry first interior feature. What is it?", "Air Conditioned Seats", "http://media2.giphy.com/media/l4pT0zpKP6rv4JdgQ/giphy.gif?cid=3640f6095bbd6bf6446b656a67aed010");
questionAnswer8.saabAnswers[0] = "Overhead Airbags";
questionAnswer8.saabAnswers[1] = "Adaptive Cruise Control";
questionAnswer8.saabAnswers[2] = "Ejection Seat";

var questionAnswer9 = new qAndA("In 2007 Saab produced the most units in its history. How many units was it?", "125,000", "http://media1.giphy.com/media/9rSJV9IKdRw6A/giphy.gif?cid=3640f6095bbd6c304a62624c519968c8");
questionAnswer9.saabAnswers[0] = "150,000";
questionAnswer9.saabAnswers[1] = "180,000";
questionAnswer9.saabAnswers[2] = "75,000";

var questionAnswer10 = new qAndA("When was the most recent year that Saab reported a profit??", "2001", "http://media1.giphy.com/media/uFtywzELtkFzi/giphy.gif?cid=3640f6095bbd6c882e4679365936569d");
questionAnswer10.saabAnswers[0] = "2007";
questionAnswer10.saabAnswers[1] = "1997";
questionAnswer10.saabAnswers[2] = "2010";

var questionAnswerArray = [questionAnswer1, questionAnswer2, questionAnswer3, questionAnswer4, questionAnswer5, questionAnswer6, questionAnswer7, questionAnswer8, questionAnswer9, questionAnswer10];



  


