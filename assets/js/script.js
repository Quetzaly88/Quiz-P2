let correctAnswer = 0;
let currentQuestionIndex = 0;

const loginForm = document.getElementById("log-in");

const startGame = document.querySelector(".start-game");
const trueButton = document.getElementById("true");
const falseButton = document.getElementById("false");
const scoreDisplay = document.getElementById("score");
const restartButton = document.getElementById("restart");
const title = document.querySelector(".title");
const currentQuestionText = document.getElementById("current-question");

const questions = [
    {question: "The hummingbird egg is the world's smallest bird egg", correctAnswer: true},
    {question: "The blue whale is the biggest animal to have ever lived.", correctAnswer: true},
    {question: "Do camels store water in their humps?", correctAnswer: false},
    {question: "Is the chemical symbol for gold 'Au'", correctAnswer: true},
    {question: "The longest river in the world is the Nile", correctAnswer: false}
]
loginForm.onsubmit = handleLogin;

startGame.onclick = initGame;
trueButton.onclick = answerTrue;
falseButton.onclick = answerFalse;
restartButton.onclick = restartGame;

function handleLogin (event) {
    event.preventDefault();
}


function initGame () {
    currentQuestionText.innerText = questions[0].question;
    currentQuestionText.style.display = "block";
    startGame.style.display = "none";
    title.style.display = "none";
}

function checkAnswer (answer, question) {
    if (answer === question.correctAnswer) {
        correctAnswer++;
        //let score = document.getElementById("score");
        scoreDisplay.innerText = correctAnswer;
    }
}

//retrive the correct question, log the answer, check if 'true' is correct. 
function answerTrue () {
    const currentQuestion = questions[currentQuestionIndex];
    checkAnswer(true, currentQuestion);
    nextQuestion();
    }

function answerFalse () {
    const currentQuestion = questions[currentQuestionIndex];
    checkAnswer(false, currentQuestion);
    nextQuestion();
}

function nextQuestion () {
    currentQuestionIndex++; 
    if (currentQuestionIndex < questions.length) {
        currentQuestionText.innerText = questions[currentQuestionIndex].question;
    } else {
       currentQuestionText.innerText = "You completed the quiz!";
       currentQuestionText.style.display = "block";
       trueButton = "none";
       falseButton.style.display = "none";
       restartButton.style.display = "block";
    }
}

function restartGame () {
    correctAnswer = 0;
    currentQuestionIndex = 0;
    currentQuestionText.innerText = questions[0].question;
    currentQuestionText.style.display = "block";
    trueButton.style.display = "block"; 
    falseButton.style.display = "block";
    restartButton.style.display = "block";
    title.style.display = "none";
}
  
/**login code doesn't work
//just demonstration, no autentification logic
function logIn(event) {
    //prevent the default from submision
    event.preventDefault();
    //retrieve input by id
    let user = document.getElementById("username");
    let pass = document.getElementById("password");
    //display values
    document.getElementById("user-result").textContent = user.value;
    document.getElementById("pass-result").textContent = pass.value;
}
//retrieve the form by id
let form = document.getElementById("log-in");
//add event listener
form.addEventListener("submit", logIn);*/
