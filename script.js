let currentPlayer = 1;
let player1Score = 0;
let player2Score = 0;
let progress = 0;
const questions = [
    "Do you like pizza?",
    "Would you travel to space?",
    "Do you enjoy reading books?",
    "Is coding fun?",
    "Would you skydive?"
];
let currentQuestionIndex = 0;

function makeDecision(answer) {
    const feedback = document.getElementById('feedback');
    const questionElement = document.getElementById('question');
    const score1Element = document.getElementById('score1');
    const score2Element = document.getElementById('score2');

    // Add points based on player's decision
    if (currentPlayer === 1) {
        if (answer === 'yes') player1Score += 10; // You can modify the scoring logic
        score1Element.textContent = player1Score;
    } else {
        if (answer === 'yes') player2Score += 10; // You can modify the scoring logic
        score2Element.textContent = player2Score;
    }

    // Update progress
    progress += 20; // Each question moves progress bar by 20%
    document.getElementById('progress').style.width = progress + '%';

    // Switch player turn
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    feedback.textContent = `Player ${currentPlayer}'s Turn`;

    // Load the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        questionElement.textContent = questions[currentQuestionIndex];
    } else {
        endGame();
    }
}

function endGame() {
    const feedback = document.getElementById('feedback');
    const winner = player1Score > player2Score ? 'Player 1' : 'Player 2';
    feedback.textContent = `${winner} Wins! 🎉`;
    document.getElementById('accept').disabled = true;
    document.getElementById('reject').disabled = true;
}