// Array of quiz questions and answers
const questions = [
    {
        question: "What is the national language of India?",
        answers: ["Telugu", "Tamil", "Hindi", "Urdu"],
        correct: "Hindi"
    },
    {
        question: "Which city is known as pink city?",
        answers: ["Jaipur", "Bihar", "Hyderabad", "Kerala"],
        correct: "Jaipur"
    },
    {
        question: "What is the capital of america?",
        answers: ["Canada", "Washington", "Germany", "Uk"],
        correct: "Washington"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Function to display the current question and answers
function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
        <p>${questions[currentQuestionIndex].question}</p>
        ${questions[currentQuestionIndex].answers.map((answer, index) => {
            return `
                <label>
                    <input type="radio" name="answer" value="${answer}" class="answer-option">
                    ${answer}
                </label><br>
            `;
        }).join("")}
    `;
}

// Function to calculate and display the result
function calculateResult() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        if (selectedAnswer.value === questions[currentQuestionIndex].correct) {
            score++;
        }
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("result").innerHTML = `Your score is: ${score} / ${questions.length}`;
        document.getElementById("submit-button").disabled = true;
    }
}

// Initial call to load the first question
loadQuestion();

// Event listener for the submit button
document.getElementById("submit-button").addEventListener("click", calculateResult);
