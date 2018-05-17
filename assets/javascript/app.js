// hiding question div until user press start
$("#question").hide();


// to play audio
var x = document.getElementById("myAudio"); 

function playAudio() { 
    x.play(); 
} 

let questionOne = {
    choice1: "-Gengar",
    choice2: "-Clefairy",
    choice3: "-Poliwag",
    choice4: "-abra"
};


function question1(){
    
    $('#imageQuestion').append('<img  style="width:500px;height:400px;" src="./assets/images/clefairy.jpg"  />');
    playAudio();
    $('#choiceOne').text(questionOne.choice1);
    $('#choiceTwo').text(questionOne.choice2);
    $('#choiceThree').text(questionOne.choice3);
    $('#choiceFour').text(questionOne.choice4);
    


}

$("#startBtn").click(function(){
    $("#main").hide();
    $("#question").show();
    question1();
});