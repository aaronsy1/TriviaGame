$(document).ready(function(){

//initial state of question and response divs
$("#question").hide();
$("#question-answer").hide();
// to play audio
var x = document.getElementById("myAudio"); 
function playAudio() { 
    x.play(); 
} 
// function that sets up response page regardless of right wrong or out of time
function setUpResp(){
    $("#question").hide();
    $("#question-answer").show();
    $('.logo2').text(title);
    console.log(title);
    $('#answerImage').append(`<img src = ${myQuestionsArray[currentQuestionCounter].answerImg} style = "height:450px; width = 500px" >`)
}
//empties question div when response function is called so the setup function can reset without conflict
function emptyQuestionDiv() {
    $('.logo').empty();
    $('#timer').empty();
    $('#imageQuestion').empty();
    $('#opts').empty();
}
//empties response div during setupQuestion function so response funtion can repopulate div without any erroes
function emptyReponseDiv() {
    $('.logo').empty();
    $('#answerImage').empty();
    $('#score').empty();
    $('#opts').empty();
}

function responseInterval() {
currentQuestionCounter++;
let time = setInterval(timeOut, 1000);
let timeLeft = 5;
console.log("timer is running:");
function timeOut() {
timeLeft--;
console.log(timeLeft);
if(timeLeft === 0){
clearInterval(time);   
$("#question-answer").hide();
$("#question").show();
setUpQuestion();
        }
    }
}


//variable and object initiations

const title = "Who's That Pokemon!!!"
var currentQuestionCounter = 0;
var points = 0;
var incorrect = 0; 


//array of objects that my for loop uses to display questions and answers
var myQuestionsArray = [
    // at [0]
  {
    img: './assets/images/clefairy.jpg',
    choices: ["Pikachu", "Clefairy", "Gengar", "Bulbasaur"],
    answer: "Clefairy",
    answerImg: "./assets/images/clefairySolved.jpg"
  },
   // at [1]
  {
    img: "./assets/images/meowth.jpg",
    choices: ["Meowth","Growlithe", "Snorlax", "Oddish"],
    answer: "Meowth",
    answerImg: "./assets/images/meowthSolved.jpg"
  },
    // at [2]
  {
    img: "./assets/images/nidorino.jpg",
    choices: ["Nidorina", "Nidorino", "Nidoran", "Nidoking"],
    answer: "Nidorino",
    answerImg: "./assets/images/nidorinoSolved.jpg"
  },
    // at [3]
  {
    img: "./assets/images/pidgey.jpg",
    choices: ["Spearow","Farfetchd", "Zubat", "Pidgey"],
    answer: "Pidgey",
    answerImg : "./assets/images/pidgeySolved.jpg"
  },
   // at [4]
  {
    img: "./assets/images/pikachu.jpg",
    choices: ["Pikachu", "Pikablu", "PikaWho?", "PikaShoo"],
    answer: "Pikachu",
    answerImg: "./assets/images/pikachuSolved.jpg"
  },
   // at [5]
  {
    img: "./assets/images/squirtle.jpg",
    choices: ["Squirtle", "Charmander", "Bulbasaur", "Eevee"],
    answer: "Squirtle",
    answerImg: "./assets/images/squirtleSolved.jpg"
  }
]

//homescreen start page
$("#startBtn").click(function(){
    $("#main").hide();
    $("#question").show();
    setUpQuestion();
});

//function to populate page with question and answer choices

function setUpQuestion() {
    //initial interval from 10-0  when answering questions 

        console.log("setup question is running")
        let clock = setInterval(countDown, 1000);
        let count = 10;
        function countDown(){  
            count --;
            // displays time from 10-0 and clears time at 0
            if (count >= 0){
            $('#timer').text(count);
            }
            else {
            $("#timer").text("Time's Up");
            count = 0;
            console.log("timeout");
            clearInterval(clock);
            emptyReponseDiv();
            outOfTime();
            }
        }
    console.log("playing audio");
    console.log("set up curentquestioncounter is " + currentQuestionCounter);
    // play's "Who's that pokemon at the beginning of each question"
    // playAudio();
    //for loop that initiates the appearance of question and answer choices
    console.log("setting up image and answers");
    $('.logo').text(title);
    $("#imageQuestion").append($(`<img src = ${myQuestionsArray[currentQuestionCounter].img} style = "height:450px; width = 500px" > `));
        for (var i = 0; i < myQuestionsArray[currentQuestionCounter].choices.length; i++) {
            $("#opts").append($(`<input  type = 'radio' name = 'choices' value = ${myQuestionsArray[currentQuestionCounter].choices[i]}> ${myQuestionsArray[currentQuestionCounter].choices[i]} </input>`));
        }

    //on click to determing right or wrong answer
 $('#submit').on('click',function(){
    var chosenValue = $('input[name=choices]:checked').val();
    console.log(chosenValue);
    if (chosenValue === myQuestionsArray[currentQuestionCounter].answer){    
    clearInterval(clock);
    emptyReponseDiv();
    correctAnswer();           
    }
    else {
    clearInterval(clock);
    emptyReponseDiv();
    wrongAnswer();
    }
    });
 }

    //function that runs if timer runs out whilst answering question 
    function outOfTime(){
        console.log("ooT curentquestioncounter is " + currentQuestionCounter);
        setUpResp();
        emptyQuestionDiv();
        $('#score').text('Bummer! You ran out of time!');
        incorrect++;
        console.log("incorrect" + incorrect);
        responseInterval();

    }

    //function that runs when you select the right answer and click submit
    function correctAnswer() {
        console.log("correct curentquestioncounter is " + currentQuestionCounter);
        setUpResp();
        emptyQuestionDiv();
        $('#score').text('Correct!');
        points++;
        console.log("points" + points);
        responseInterval();
    }

    //function that runs when you select the wrong answer and click submit
    function wrongAnswer() {
        console.log("wrong curent questioncounter is " + currentQuestionCounter);
        setUpResp();
        emptyQuestionDiv();
        $('#score').text('Wrong!');
        incorrect++;
        console.log("incorrect" + incorrect);
        responseInterval();
    
    }

});