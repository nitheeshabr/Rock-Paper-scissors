const choices = ['rock', 'paper', 'scissors'];
const userScoreElem = document.getElementById('nithi-score');
const opponentScoreElem = document.getElementById('vineet-score');
const messageElem = document.getElementById('msg');

let userScore = 0;
let opponentScore = 0;

document.querySelectorAll('.choice').forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.id;
        const opponentChoice = choices[Math.floor(Math.random() * choices.length)];
        const result = determineWinner(userChoice, opponentChoice);

        updateScores(result);
        messageElem.textContent = `You chose ${userChoice}. Vineet chose ${opponentChoice}. ${result}`;

        // Highlight the selected choice
        document.querySelectorAll('.choice img').forEach(img => img.classList.remove('highlighted'));
        document.querySelector(`#${userChoice} img`).classList.add('highlighted');
    });
});

function determineWinner(userChoice, opponentChoice) {
    if (userChoice === opponentChoice) {
        return 'It\'s a tie!';
    }
    if (
        (userChoice === 'rock' && opponentChoice === 'scissors') ||
        (userChoice === 'paper' && opponentChoice === 'rock') ||
        (userChoice === 'scissors' && opponentChoice === 'paper')
    ) {
        return 'You win!';
    }
    return 'You lose!';
}

function updateScores(result) {
    if (result === 'You win!') {
        userScore++;
    } else if (result === 'You lose!') {
        opponentScore++;
    }
    userScoreElem.textContent = userScore;
    opponentScoreElem.textContent = opponentScore;
}
