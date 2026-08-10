console.log("Welcome Back to the 80's");

let questions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;

async function loadQuestions(){

    try {
        let response = await fetch("../data/questions.json");
        if(!response.ok){
            throw new Error("Questions file not found");
        }

        questions = await response.json();
        console.log("Questions loaded:", questions);

        shuffleQuestions();
         showQuestion();

    } catch (error) {
        console.log("Question Error:", error);

        document.getElementById("question").textContent =
            "Error!!! This is TOTALLY BOGUS! Don't have a COW. Try again!!";
    }
}


function shuffleQuestions() {

    for (let i = questions.length - 1; i > 0; i--) {

        let randomIndex =
            Math.floor(Math.random() * (i + 1));

        let temporary = questions[i];

        questions[i] = questions[randomIndex];

        questions[randomIndex] = temporary;
    }
}

async function loadQuote(){
      try {
    let response = await fetch("../data/quotes.json");
     if(!response.ok){
            throw new Error("Don't have a cow, just refresh yourpage!");
        }

        let quotes = await response.json();
        console.log("Quotes loaded:", quotes);
        let randomQuote =
        Math.floor(Math.random() * quotes.length);

        document.getElementById("quote").textContent =
        quotes[randomQuote].quote
        + " - "
        + quotes[randomQuote].movie;
    }


    catch(error){
        console.log("Quote Error:", error);
        document.getElementById("quote").textContent =
        "No quote available";

    }

}
function updateScore(){
    document.getElementById("score").textContent =
      score;

}

function updateLights(){
    let lights =
    document.querySelectorAll(".light");

    lights.forEach(function(light){
        light.classList.remove("active");

    });
    if(lights[currentQuestion]){
 lights[currentQuestion]
        .classList.add("active");
    }

}

function showQuestion(){
    answered = false;
     if(questions.length === 0){
        return;
    }
    let question =
    questions[currentQuestion];

    document.getElementById("question").textContent =
    question.question;
    let buttons =
    document.querySelectorAll(".answers button");

    buttons[0].textContent ="A. " + question.answers.A;
    buttons[1].textContent ="B. " + question.answers.B;
    buttons[2].textContent ="C. " + question.answers.C;
    buttons[3].textContent ="D. " + question.answers.D;

    buttons.forEach(function(button){

        button.classList.remove("correct");
        button.classList.remove("wrong");
        button.disabled = false;

    });
    document.getElementById("result").textContent =

    "Question "
      + (currentQuestion + 1)
    + " of "
    + questions.length;
    updateLights();

    loadQuote();
}

function checkAnswer(answer){
    if(answered){
        return;
        }

    answered = true;

    let question =
    questions[currentQuestion];
    let buttons =
    document.querySelectorAll(".answers button");

    let index;

    if(answer === "A"){
        index = 0;
       }

    else if(answer === "B"){
        index = 1;
    }

    else if(answer === "C"){
        index = 2;
    }

    else{
        index = 3;
    }

    let selectedButton =
    buttons[index];

    buttons.forEach(function(button){

        button.disabled = true;

    });

    if(answer === question.correct){
        score += 10;
        updateScore();
        selectedButton.classList.add("correct");

        document.getElementById("result").textContent =
        "Correct! Tubular!";
    }

    else{
        selectedButton.classList.add("wrong");

        document.getElementById("result").textContent =
        "Wrong!";
    }

    setTimeout(nextQuestion,1200);
}

function nextQuestion(){
    currentQuestion++;

    if(currentQuestion < questions.length){
        showQuestion();
    }


    else{
        endGame();
    }

}


function endGame(){
    document.getElementById("question").textContent =
    "GAME OVER!";

    document.querySelector(".answers").style.display =
    "none";

    document.getElementById("result").textContent =

    "Final Score: "
    + score
    + " / "
    + (questions.length * 10);

    saveScore();

    document.getElementById("highScorePage").style.display =
    "block";
}

async function saveScore(){
    const name =
    localStorage.getItem("playerName") || "Player";
    try{

        await fetch("/scores", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name:name,
                score:score
            })
        });
    }

    catch(error){
        console.log("Save score error:", error);
    }
}

function goToHighScores(){
    window.location.href = "/score.html";
}

loadQuestions();