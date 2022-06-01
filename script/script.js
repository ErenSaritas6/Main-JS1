function computerPlay() {
    let randomOne = Math.floor(Math.random() * (4 - 1) ) + 1;
    if(randomOne == 1) {
        return `rock`;
    }
    else if(randomOne == 2) {
        return `paper`;
    }
    else {
        return `scissors`;
    }
}

function playOneRound (playerSelection, computerSelection) {

    const playerSelectionUp = playerSelection.toLowerCase();

    if (playerSelectionUp === `rock` && computerSelection === `scissors`) {
        return `You Win! Rock beats Scissors.`;
    }

    else if (playerSelectionUp === `paper` && computerSelection === `rock`) {
        return `You Win! Paper beats Rock.`;
    }

    else if (playerSelectionUp === `scissors` && computerSelection === `paper`) {
        return `You Win! Scissors beats Paper.`;
    }

    else if (playerSelectionUp === `scissors` && computerSelection === `rock`) {
        return `You Lose! Rock beats Scissors.`;
    }

    else if (playerSelectionUp === `rock` && computerSelection === `paper`) {
        return `You Lose! Paper beats Rock.`;
    }

    else if (playerSelectionUp === `paper` && computerSelection === `scissors`) {
        return `You Lose! Scissors beats Paper.`;
    }

    else if (playerSelectionUp !== `rock` && playerSelectionUp !== `paper` && playerSelectionUp !== `scissors`) {
        return `Please enter Rock, Paper or Scissors!`;
    }

    else {
        return `It is a draw!`;
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors?");
        const computerSelection = computerPlay();
        console.log(`You: ${playerSelection}`);
        console.log(`Computer: ${computerSelection}`);
        console.log(`Result: ${playOneRound(playerSelection, computerSelection)}`);
    }
}

game();