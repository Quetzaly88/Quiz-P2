let correctAnswer = 0;
let currentQuestionIndex = 0;

const startGame = document.querySelector(".start-game");
const trueButton = document.getElementById("true");
const falseButton = document.getElementById("false");
const questionArea = document.getElementById("question-area");
const scoreDisplay = document.getElementById("score");
const restartButton = document.getElementById("restart");
//const submitButton = document.getElementById("submit");

const title = document.querySelector(".title");
const questionText = document.getElementById("question-text");

const logInForm = document.getElementById("logIn");


//question array
const questions = [
    {question: "The hummingbird egg is the world's smallest bird egg", correctAnswer: true},
    {question: "The blue whale is the biggest animal to have ever lived.", correctAnswer: true},
    {question: "Do camels store water in their humps?", correctAnswer: false},
    {question: "Is the chemical symbol for gold 'Au'", correctAnswer: true},
    {question: "The longest river in the world is the Nile", correctAnswer: false}
]

startGame.onclick = initGame;
trueButton.onclick = answerTrue;
falseButton.onclick = answerFalse;
restartButton.onclick = restartGame;
//submitButton.onclick = submitGame;

logInForm.onsubmit = loginUser;

function initGame () {
    let currentQuestion = document.getElementById("current-question");
    currentQuestion.innerText = questions[0].question;
    let questionText = document.getElementById("question-text");
    questionText.style.display = "none";

    title.style.display = "none";
    questionText.style.display = "none"; 
    startGame.style.display = "none";
}

function checkAnswer (answer, question) {
    if (answer === question.correctAnswer) {
        correctAnswer++;
        let score = document.getElementById("score");
        score.innerText = correctAnswer;
    }
}

//retrive the correct question, log the answer, check if 'true' is correct. 
function answerTrue () {
    const currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion.correctAnswer);
    checkAnswer(true, currentQuestion);
    nextQuestion();
    }

function answerFalse () {
    const currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion.correctAnswer);
    checkAnswer(false, currentQuestion);
    nextQuestion();
}

function nextQuestion () {
    //find object, current question. Increment the current question index to move on to the next question. 
    currentQuestionIndex++;
    //check that displayed question is in the boundaries of the array. Do the next-question 
    if (currentQuestionIndex < questions.length) {
        document.getElementById("current-question").innerText = questions[currentQuestionIndex].question;
    } else {
    document.getElementById("question-area").innerText = "You completed the quiz!";
    trueButton.style.display = "none";
    falseButton.style.display = "none"; 
    submitButton.style.display = "none";
    }
}

/*function restartGame() {
    if (question-area === You completed the quiz!) {
        let initGame = ();
    }
}*/