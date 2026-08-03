console.log("GAME FILE LOADED");

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

        showQuestion();
    }

    catch(error){
        console.log("Question Error:", error);

        document.getElementById("question").textContent =
        "Could not load questions";
    }

}

async function loadQuote(){
    try {
        let response = await fetch("data/quotes.json");

        if(!response.ok){
            throw new Error("Quotes file not found");
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
    if(answered){return;}
    answered = true;
    let question =
    questions[currentQuestion];
    let buttons = document.querySelectorAll(".answers button");

   let index;
if (answer === "A") {
    index = 0;
}
else if (answer === "B") {
    index = 1;
}
else if (answer === "C") {
    index = 2;
}
else {
    index = 3;
}

let selectedButton = buttons[index];

    buttons.forEach(function(button){button.disabled = true;
    });

    if(answer === question.correct){
        score += 10;
        updateScore();

        selectedButton.classList.add("correct");
        document.getElementById("result").textContent =

        "Correct! Tubular!";
    }

    else {
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

    else {
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

function saveScore(){


    let scores =
    JSON.parse(localStorage.getItem("highScores")) || [];
    scores.push(score);

    scores.sort(function(a,b){
        return b-a;
    });

    scores = scores.slice(0,5);
    localStorage.setItem( "highScores",
        JSON.stringify(scores)
    );
}

function goToHighScores(){
    window.location.href =
    "highscore.html";
}
loadQuestions();