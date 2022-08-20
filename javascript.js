const winnerContainer = document.querySelector('.winner');
const roundNumberContainer = document.querySelector('.roundNumber');
const playerScoreContainer = document.querySelector('.playerScoreNum');
const computerScoreContainer = document.querySelector('.computerScoreNum')
const playerMoveContainer = document.querySelector('.playerMove');
const computerMoveContainer = document.querySelector('.computerMove');
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

const winner = document.createElement('div');
winner.textContent = "";
winnerContainer.appendChild(winner);

const playerMove = document.createElement('div');
playerMove.textContent = "";
playerMoveContainer.appendChild(playerMove);

const computerMove = document.createElement('div');
computerMove.textContent = "";
computerMoveContainer.appendChild(computerMove);

const playerScore = document.createElement('div');
playerScore.textContent = "0";
playerScoreContainer.appendChild(playerScore);

const computerScore = document.createElement('div');
computerScore.textContent = "0";
computerScoreContainer.appendChild(computerScore);

const roundNumber = document.createElement('div');
roundNumber.textContent = "1";
roundNumberContainer.appendChild(roundNumber);

let t_playerScore = 0;
let t_computerScore = 0;
let t_roundNumber = 1;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getComputerChoice() {
    let computerChoice = getRandomInt(0, 3);
    switch (computerChoice) {
        case 0:
            computerMove.textContent = "Computer chose rock";
            return computerChoice;
            break;
        case 1:
            computerMove.textContent = "Computer chose paper";
            return computerChoice;
            break;
        case 2:
            computerMove.textContent = "Computer chose scissors";
            return computerChoice;
            break;
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == 0) {
        playerMove.textContent = "You chose rock";
    }
    else if (playerSelection == 1) {
        playerMove.textContent = "You chose paper";
    }
    else {
        playerMove.textContent = "You chose scissors";
    }

    if (((playerSelection == 0) && (computerSelection == 0)) || ((playerSelection == 1) && (computerSelection == 1)) || ((playerSelection == 2) && (computerSelection == 2))) {
        winner.textContent = "It's a tie!";
        return 0;
    }
    else if (((playerSelection == 0) && (computerSelection == 2)) || ((playerSelection == 1) && (computerSelection == 0)) || ((playerSelection == 2) && (computerSelection == 1))) {
        winner.textContent = "Player wins!";
        return 1;
    }
    else {
        winner.textContent = "Computer wins!";
        return 2;
    }
}

function scoreCheck(roundResult) {
    if (roundResult == 1) {
        t_playerScore++
        t_roundNumber++
    }

    if (roundResult == 2) {
        t_computerScore++;
        t_roundNumber++
    }

    if (roundResult == 0) {
        t_roundNumber++;
    }

    if ((t_computerScore == 5) || (t_playerScore == 5)) {
        if (t_computerScore == 5) {
            winner.textContent = "Computer takes the game!";
            t_computerScore = 0;
            t_playerScore = 0;
            t_roundNumber = 1;
        }
        else {
            winner.textContent = "Player takes the game!";
            t_computerScore = 0;
            t_playerScore = 0;
            t_roundNumber = 1;
        }
    }

    playerScore.textContent = t_playerScore;
    computerScore.textContent = t_computerScore;
    roundNumber.textContent = t_roundNumber;
}

rockButton.addEventListener('click', function (e) {
    scoreCheck(playRound(0, getComputerChoice()));
})

paperButton.addEventListener('click', function (e) {
    scoreCheck(playRound(1, getComputerChoice()));
})

scissorsButton.addEventListener('click', function (e) {
    scoreCheck(playRound(2, getComputerChoice()));
})