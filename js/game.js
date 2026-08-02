const space = document.getElementById("space");
for (let i = 0; i < 500; i++) {
    let star = document.createElement("div");
    star.className = "star";
    let size = Math.random() * 3;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left =
        Math.random() * window.innerWidth + "px";

    star.style.top =
        Math.random() * window.innerHeight + "px";

    star.style.animationDuration =
        (Math.random() * 50 + 20) + "s";

    space.appendChild(star);
}

const questions = [

{
    question: "What keyword is used to declare a constant?",

    answers: {
        A: "let",
        B: "const",
        C: "var",
        D: "function"
    },

    correct: "B"
},

{
    question: "What language are we learning in this game?",

    answers: {
        A: "HTML",
        B: "CSS",
        C: "JavaScript",
        D: "Python"
    },

    correct: "C"

},

{
    question: "Which keyword creates a variable that can change?",

    answers: {
        A: "let",
        B: "const",
        C: "style",
        D: "class"
    },

    correct: "A"

},

{
    question: "Which symbol starts a comment in JavaScript?",

    answers: {
        A: "//",
        B: "<!--",
        C: "##",
        D: "**"
    },

    correct: "A"

},

{
    question: "Which command shows information in the console?",

    answers: {
        A: "show()",
        B: "print()",
        C: "console.log()",
        D: "display()"
    },

    correct: "C"

}

];
let currentQuestion = 0;
let score = 0;

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById("question").textContent =
    question.question;

    let buttons = document.querySelectorAll(".answers button");

    buttons[0].textContent = "A. " + question.answers.A;
    buttons[1].textContent = "B. " + question.answers.B;
    buttons[2].textContent = "C. " + question.answers.C;
    buttons[3].textContent = "D. " + question.answers.D;

    document.getElementById("result").textContent =
    "Question " + (currentQuestion + 1) +
    " of " + questions.length;
}
function checkAnswer(answer) {
    let question = questions[currentQuestion];
    let buttons = document.querySelectorAll(".answers button");
   
    buttons.forEach(function(button) {

        button.classList.remove("correct");
        button.classList.remove("wrong");

    });

    let selectedButton =
        buttons[answer.charCodeAt(0) - 65];

    if(answer === question.correct) {
        score += 10;
        selectedButton.classList.add("correct");

        document.getElementById("result").textContent =
        "Correct! Tubular!";
    }

    else {

        selectedButton.classList.add("wrong");
        document.getElementById("result").textContent =
        "Wrong!";
    }

    setTimeout(nextQuestion, 1200);
}

function nextQuestion() {
    currentQuestion++;

    if(currentQuestion < questions.length) {
        showQuestion();
    }

    else {
        endGame();
    }

}

function endGame() {
    document.getElementById("question").textContent =
    "GAME OVER!";
    document.querySelector(".answers").style.display =
    "none";

    saveScore();

    document.getElementById("result").textContent =
    "Final Score: " +
    score +
    " / " +
    (questions.length * 10);

    document.getElementById("highScorePage").style.display =
    "block";
}
function saveScore() {
    let scores =
    JSON.parse(localStorage.getItem("highScores")) || [];

    scores.push(score);

    scores.sort(function(a,b){
        return b-a;
    });

    scores = scores.slice(0,5);
    localStorage.setItem(
        "highScores",
        JSON.stringify(scores)
    );

}

function goToHighScores() {
    window.location.href = "highscore.html";
}

showQuestion();