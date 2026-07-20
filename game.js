
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
    answers: [
        "let",
        "const",
        "var",
        "function"
    ],
    correct: "B"
},
{
    question: "Which symbol is used for comments in JavaScript?",
    answers: [
        "##",
        "//",
        "**",
        "<!--"
    ],
    correct: "B"
},
{
    question: "Which HTML tag creates a hyperlink?",
    answers: [
        "<img>",
        "<a>",
        "<div>",
        "<h1>"
    ],
    correct: "B"
}
];

let currentQuestion = 0;

function loadQuestion() {

    document.getElementById("question").textContent =
        questions[currentQuestion].question;

    const buttons = document.querySelectorAll(".answers button");

    buttons[0].textContent = "A. " + questions[currentQuestion].answers[0];
    buttons[1].textContent = "B. " + questions[currentQuestion].answers[1];
    buttons[2].textContent = "C. " + questions[currentQuestion].answers[2];
    buttons[3].textContent = "D. " + questions[currentQuestion].answers[3];

    document.getElementById("result").textContent = "";
}

function checkAnswer(choice) {

    if(choice === questions[currentQuestion].correct){
        document.getElementById("result").textContent = "Correct!";
    }
    else{
        document.getElementById("result").textContent = "Wrong!";
    }
}

function nextQuestion(){

    currentQuestion++;

    if(currentQuestion >= questions.length){
        currentQuestion = 0;
    }

    loadQuestion();
}

loadQuestion();