////Variables//
var timeleft;
var timer;

///////////////////////////////////////
start();





















/////////////////functions////////////////////////////////////////

////Timer/////
function thirtySecTimer() {
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
    $("#start").text("Start");
    //$("#start").attr("class", "answer");
}
    

  


