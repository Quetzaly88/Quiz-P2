//initialize correct answer count and question index. 
let correctAnswer = 0;
let currentQuestionIndex = 0;

//variables to DOM elements
const loginForm = document.getElementById("log-in");
const containerOne = document.getElementsByClassName("container1");
const startGame = document.querySelector(".start-game");
const trueButton = document.getElementById("true");
const falseButton = document.getElementById("false");
const scoreDisplay = document.getElementById("score");
const restartButton = document.getElementById("restart");
const title = document.querySelector(".title");
const currentQuestionText = document.getElementById("current-question");

//questions array. Object. 
const questions = [
    { question: "The hummingbird egg is the world's smallest bird egg", correctAnswer: true },
    { question: "The blue whale is the biggest animal to have ever lived.", correctAnswer: true },
    { question: "Do camels store water in their humps?", correctAnswer: false },
    { question: "Is the chemical symbol for gold 'Au'", correctAnswer: true },
    { question: "The longest river in the world is the Nile", correctAnswer: false }
];

//event handlers to the buttons and form 
loginForm.onsubmit = handleLogin;
startGame.onclick = initGame;
trueButton.onclick = answerTrue;
falseButton.onclick = answerFalse;
restartButton.onclick = restartGame;

//log-in function for submition. 
function handleLogin(event) {
    event.preventDefault();
    alert("You are logged in!");
    loginForm.style.display = "none";
    document.querySelector(".container").style.display = "block";
}

//initialize the game
function initGame() {
    currentQuestionText.innerText = questions[0].question;
    currentQuestionText.style.display = "block";
    startGame.style.display = "none";
    title.style.display = "none";
}

//check answers if they match the correct answer 
function checkAnswer(answer, question) {
    if (answer === question.correctAnswer) {
        correctAnswer++;
        scoreDisplay.innerText = correctAnswer;
    }
}

//handle true button 
function answerTrue() {
    const currentQuestion = questions[currentQuestionIndex];
    checkAnswer(true, currentQuestion);
    nextQuestion();
}

//handle false button
function answerFalse() {
    const currentQuestion = questions[currentQuestionIndex];
    checkAnswer(false, currentQuestion);
    nextQuestion();
}

//increment current question index, if there are more questions, display questions else display completion message and show and hide buttons. 
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        currentQuestionText.innerText = questions[currentQuestionIndex].question;
    } else {
        currentQuestionText.innerText = "You completed the quiz!";
        currentQuestionText.style.display = "block";
        trueButton.style.display = "none";
        falseButton.style.display = "none";
        restartButton.style.display = "block";
    }
}

//reset answers and questions. Display and show questions. Show buttons as initGame. 
function restartGame() {
    correctAnswer = 0;
    currentQuestionIndex = 0;
    currentQuestionText.innerText = questions[0].question;
    currentQuestionText.style.display = "block";
    trueButton.style.display = "block";
    falseButton.style.display = "block";
    restartButton.style.display = "block";
    title.style.display = "none";
}