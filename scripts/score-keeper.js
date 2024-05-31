// Sélection des éléments du DOM
let player1ScoreDisplay = document.getElementById('player1Score');
let player2ScoreDisplay = document.getElementById('player2Score');
let player1Btn = document.getElementById('player1Btn');
let player2Btn = document.getElementById('player2Btn');
let resetBtn = document.getElementById('resetBtn');
let maxScoreInput = document.getElementById('maxScoreInput');

let player1Score, player2Score = 0;
let maxScore = maxScoreInput.valueAsNumber;


function updateScoreDisplay() {
    for (let i = 0; i < maxScore; i++) {
        if (player1Score === maxScore) {
            player1ScoreDisplay.style.color = 'green';
            player2ScoreDisplay.style.color = 'red';
            player1Btn.disabled = true;
            player2Btn.disabled = true;
        } else if (player2Score === maxScore) {
            player2ScoreDisplay.style.color = 'green';
            player1ScoreDisplay.style.color = 'red';
            player1Btn.disabled = true;
            player2Btn.disabled = true;
        }
    }

    player1ScoreDisplay.textContent = player1Score;
    player2ScoreDisplay.textContent = player2Score;
}

// Fonction pour réinitialiser le jeu
function resetGame() {
    player1Score = 0;
    player2Score = 0;
    player1Btn.disabled = false;
    player2Btn.disabled = false;
    player1ScoreDisplay.style.color = '#007BFF';
    player2ScoreDisplay.style.color = '#007BFF';
    updateScoreDisplay();
}

// Ajout des écouteurs d'événements pour les boutons
player1Btn.addEventListener('click', function () {
    if (player1Score < maxScore && player2Score < maxScore) {
        player1Score++;
        updateScoreDisplay();
    }
});

player2Btn.addEventListener('click', function () {
    if (player2Score < maxScore && player1Score < maxScore) {
        player2Score++;
        updateScoreDisplay();
    }
});

resetBtn.addEventListener('click', resetGame);

maxScoreInput.addEventListener('change', function () {
    maxScore = Number(maxScoreInput.value);
    resetGame();
});