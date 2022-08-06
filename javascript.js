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
            return("rock");
            break;
        case 1:
            console.log("Paper");
            return("paper");
            break;
        case 2:
            console.log("Scissors")
            return
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

}