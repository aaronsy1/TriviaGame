$("#question").hide();
$("#question-answer").hide();


// to play audio
var x = document.getElementById("myAudio"); 

function playAudio() { 
    x.play(); 
} 

//homescreen start page
$("#startBtn").click(function(){
    $("#main").hide();
    $("#question").show();
    setUpQuestion();
});

//variable and object initiations

const title = "Who's That Pokemon!!!"
var currentQuestionCounter = 0;

var myQuestionsArray = [
  {
    img: './assets/images/clefairy.jpg',
    choices: ["Pikachu", "Clefairy", "Gengar", "Bulbasaur"],
    answer: "Clefairy",
    answerImg: "./assets/images/clefairySolved.jpg"
  },

  {
    img: "./assets/images/meowth.jpg",
    choices: ["Meowth","Growlithe", "Snorlax", "Oddish"],
    answer: "Meowth",
    answerImg: "./assets/images/meowthSolved.jpg"
  },

  {
    img: "./assets/images/nidorino.jpg",
    choices: ["Nidorina", "Nidorino", "Nidoran", "Nidoking"],
    answer: "Nidorino",
    answerImg: "./assets/images/nidorinoSolved.jpg"
  },

  {
    img: "./assets/images/pidgey.jpg",
    choices: ["Spearow","Farfetchd", "Zubat", "Pidgey"],
    answer: "Pidgey",
    answerImg : "./assets/images/pidgeySolved.jpg"
  },

  {
    img: "./images/assets/pikachu.jpg",
    choices: ["Pikachu", "Pikablu", "PikaWho?", "PikaShoo"],
    answer: "Pikachu",
    answerImg: "./assets/images/pikachuSolved.jpg"
  },

  {
    img: "./assets/images/squirtle.jpg",
    choices: ["Squirtle", "Charmander", "Bulbasaur", "Eevee"],
    answer: "Squirtle",
    answerImg: "./assets/images/squirtleSolved.jpg"
  }
]

//function gto populate page with question and answer choices

function setUpQuestion() {

let clock = setInterval(countDown, 1000);
let count = 10;

function countDown(){  
    count --;
    if (count >= 0){
    $('#timer').text(count);
    }
    else {
    $("#timer").text("Time's Up");
    count = 0;
    console.log("timeout");
    }
}

    playAudio();

    $('.logo').text(title);
    $("#imageQuestion").append($(`<img src = ${myQuestionsArray[currentQuestionCounter].img} style = "height:450px; width = 500px" > `));
        for (var i = 0; i < myQuestionsArray[currentQuestionCounter].choices.length; i++) {
            $("#opts").append($(`<input  type = 'radio' name = 'choices' value = ${myQuestionsArray[currentQuestionCounter].choices[i]}> ${myQuestionsArray[currentQuestionCounter].choices[i]} </input>`));
        }

        
        
        

        $('#submit').on('click',function(){
            var chosenValue = $('input[name=choices]:checked').val();
            console.log(chosenValue);
            if (chosenValue === myQuestionsArray[currentQuestionCounter].answer){
                console.log('correct');
            }

            else {
                console.log('incorrect')
            }
        });
 }