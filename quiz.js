const questionBank = [
    ["What is 2 + 2?", ["2", "4", "6", "8"], 1], // Correct answer is option 1 ("4")
    ["What is the capital of France?", ["Berlin", "Madrid", "Paris", "London"], 2], // Correct answer is option 2 ("Paris")
    ["Which is the largest ocean?", ["Atlantic", "Indian", "Arctic", "Pacific"], 3], // Correct answer is option 3 ("Pacific")
    // Add more questions here following the same structure
];

let currentQuestionIndex = 0;

function startQuiz() {
    // Hide the start button and show the first question
    document.getElementById("start-button").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    showQuestion();
}

function showQuestion() {
    // Show the current question and its options
    const question = questionBank[currentQuestionIndex];
    const questionText = question[0];
    const options = question[1];

    document.getElementById("question-text").innerHTML = questionText;
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = ""; // Clear any existing options

    options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.innerHTML = option;
        optionButton.onclick = function() {
            checkAnswer(index);
        };
        optionsContainer.appendChild(optionButton);
    });

    // Show the "Next" button only after an option is selected
    document.getElementById("next-button").style.display = "none";
}

function checkAnswer(selectedIndex) {
    const correctAnswerIndex = questionBank[currentQuestionIndex][2];
    if (selectedIndex === correctAnswerIndex) {
        alert("Correct!");
    } else {
        alert("Wrong!");
    }

    // Show the next button after answering
    document.getElementById("next-button").style.display = "block";
}
function nextQuestion() {
    // Move to the next question
    currentQuestionIndex++;

    if (currentQuestionIndex < questionBank.length) {
        showQuestion();
    } else {
        alert("Quiz finished!");
        // You can optionally show a score here or restart the quiz
    }
}