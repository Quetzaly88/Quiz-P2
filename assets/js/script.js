let correctAnswer = 0;
let currentQuestionIndex = 0;

const startGame = document.querySelector(".start-game");
const trueButton = document.getElementById("true");
const falseButton = document.getElementById("false");
const questionArea = document.getElementById("question-area");
const scoreDisplay = document.getElementById("score");
const restartButton = document.getElementById("restart");
const submitButton = document.getElementById("submit");

const title = document.querySelector(".title");
const questionText = document.getElementById("question-text");

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
submitButton.onclick = submitGame;


function initGame () {
    let currentQuestion = document.getElementById("current-question");
    currentQuestion.innerText = questions[0].question;
    let questionText = document.getElementById("question-text");
    questionText.style.display = "none";
    title.style.display = "none";
    questionText.style.display = "none"; 
}

function checkAnswer () {

}

function answerTrue () {

}

function answerFalse () {

}

function nextQuestion () {

}