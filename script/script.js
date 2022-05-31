function computerPlay() {
    let randomOne = Math.floor(Math.random() * (4 - 1) ) + 1;
    if(randomOne == 1) {
        return `ROCK`;
    }
    else if(randomOne == 2) {
        return `PAPER`;
    }
    else {
        return `SCISSORS`;
    }
}

function playOneRound (playerSelection, computerSelection) {

let playerSelectionUp = playerSelection.toUpperCase();
const computerSelection = computerPlay();

    switch (playerSelectionUp, computerSelection) {
        case (playerSelectionUp == `ROCK` && computerSelection == `SCISSORS`):
            `You Win! ${playerSelectionUp} beats ${computerSelection}.`;
            break;
        case (playerSelectionUp == `PAPER` && computerSelection == `ROCK`):
            `You Win! ${playerSelectionUp} beats ${computerSelection}.`;
            break;
        case (playerSelectionUp == `SCISSORS` && computerSelection == `PAPER`):
            `You Win! ${playerSelectionUp} beats ${computerSelection}.`;
            break;
        case (playerSelectionUp == `SCISSORS` && computerSelection == `ROCK`):
            `You Lose! ${computerSelection} beats ${playerSelectionUp}.`;
            break;
        case (playerSelectionUp == `ROCK` && computerSelection == `PAPER`):
            `You Lose! ${computerSelection} beats ${playerSelectionUp}.`;
            break;
        case (playerSelectionUp == `PAPER` && computerSelection == `SCISSORS`):
            `You Lose! ${computerSelection} beats ${playerSelectionUp}.`;
            break;
        default:
            `It is a draw!`;
    }
}

// function game() { playerselection = prompt...}
