function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getComputerChoice() {
    let computerChoice = getRandomInt(0, 3);
    console.log(computerChoice);
    switch (computerChoice) {
        case 0:
            console.log("Rock");
            return computerChoice;
            break;
        case 1:
            console.log("Paper");
            return computerChoice;
            break;
        case 2:
            console.log("Scissors")
            return computerChoice;
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let playerSelectionInt = 0;

    if (playerSelection == "rock") {
        playerSelectionInt = 0;
    }
    else if (playerSelection == "paper") {
        playerSelectionInt = 1;
    }
    else {
        playerSelectionInt = 2;
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
