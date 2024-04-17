//constants for quiz elements

const questionArea = document.getElementById("question-area");
const scoreDisplay = document.getElementById("score");
const incorrectDisplay = document.getElementById("incorrect");
const loginForm = document.getElementById("logIn");
const questions = [
    {
        question: "Where are the oldest mummifications found?",
        answers: [
            { text: "Chile", correctAnswer: false },
            { text: "Egypt", correctAnswer: true }
        ]
    },
    {
        question: "Who sent Christopher Columbus to explore the New World?",
        answers: [
            { text: "Americans", correctAnswer: false },
            { text: "King Ferdinand", correctAnswer: true }
        ]
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

function displayCurrentQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    updateQuestion(currentQuestion.question);
}

//Log in form hide when inlogged
loginForm.addEventListener("submit", function (event) {
    const username = usernameField.value;
    const password = passwordField.value;
    usernameField.style.display = "none";
    passwordField.style.display = "none";
    loginFormField.style.display = "none";
    this.titleField.style.display = "none";
    window.alert("You are now logged in!");
})