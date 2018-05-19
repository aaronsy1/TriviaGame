// hiding question div until user press start
$("#question").hide();
$("#question-1-answer").hide();


// to play audio
var x = document.getElementById("myAudio"); 

function playAudio() { 
    x.play(); 
} 


// countdown timer
let clock = setInterval(countDown, 1000);
let count = 30;
let points = 0;
let misses = 0;

function countDown(){
   
    count --

    if (count >= 0){
    $('#timer').text(count);
    }


}

//question 1 object
let questionOne = {
    choice1: "-Gengar",
    choice2: "-Clefairy",
    choice3: "-Poliwag",
    choice4: "-Abra"
};


//homescreen start page
$("#startBtn").click(function(){
    $("#main").hide();
    $("#question").show();
});


function question1(){
    
    
    $('#imageQuestion').append('<img  style="width:500px;height:400px;" src="./assets/images/clefairy.jpg"  />');
    playAudio();
    $('#choiceOne').text(questionOne.choice1);
    $('#choiceTwo').text(questionOne.choice2);
    $('#choiceThree').text(questionOne.choice3);
    $('#choiceFour').text(questionOne.choice4);
    
    
    $('#choiceOne').on('click',function(){
        misses++;


        $("#question").hide();
        $("#question-1-answer").show();
        wrongAnswerOne();

        
        
    });

    $('#choiceTwo').on('click',function(){
        points++;
        console.log(points);
    });

    $('#choiceThree').on('click',function(){
        misses++;
        console.log(misses);

        $("#question").hide();
        $("#question-1-answer").show();
        wrongAnswerOne();
    });

    $('#choiceFour').on('click',function(){
        misses++;
        console.log(misses);

        $("#question").hide();
        $("#question-1-answer").show();
        wrongAnswerOne();
    });

}

function wrongAnswerOne() {

    $('#q1Answer').append('<img  style="width:500px;height:400px;" src="./assets/images/clefairySolved.jpg"  />');

    $('#score1').text('Bummer! the correct answer was Clefairy');

    
}