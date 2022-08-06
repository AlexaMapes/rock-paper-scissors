function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getComputerChoice() {
    let computerChoice = getRandomInt(0, 3);
    switch (computerChoice) {
        case 0:
            console.log("Computer chose rock");
            return computerChoice;
            break;
        case 1:
            console.log("Computer chose paper");
            return computerChoice;
            break;
        case 2:
            console.log("Computer chose scissors")
            return computerChoice;
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let playerSelectionInt = 0;

    if (playerSelection == "rock") {
        console.log("You chose rock")
        playerSelectionInt = 0;
    }
    else if (playerSelection == "paper") {
        console.log("You chose paper")
        playerSelectionInt = 1;
    }
    else {
        playerSelectionInt = 2;
        console.log("You chose scissors")
    }

    if (((playerSelectionInt == 0) && (computerSelection == 0)) || ((playerSelectionInt == 1) && (computerSelection == 1)) || ((playerSelectionInt == 2) && (computerSelection == 2))) {
        console.log("It's a tie!")
        return 0;
    }
    else if (((playerSelectionInt == 0) && (computerSelection == 2)) || ((playerSelectionInt == 1) && (computerSelection == 0)) || ((playerSelectionInt == 2) && (computerSelection == 1))) {
        console.log("Player wins!")
        return 1;
    }
    else {
        console.log("Computer wins!")
        return 2;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundResult = 0;

    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i + 1));
        roundResult = playRound(prompt("Choose rock, paper, or scissors"), getComputerChoice());
        
        if (roundResult == 0) {
            console.log("Your score: " + playerScore + " | Computer score: " + computerScore);
        }
        else if (roundResult == 1) {
            playerScore++;
            console.log("Your score: " + playerScore + " | Computer score: " + computerScore);
        }
        else {
            computerScore++
            console.log("Your score: " + playerScore + " | Computer score: " + computerScore);
        }
    }

    if (playerScore > computerScore) {
        console.log("You win!");
    }
    else if (computerScore > playerScore) {
        console.log("Computer wins!");
    }
    else {
        console.log("It's a tie!");
    }
}

game();