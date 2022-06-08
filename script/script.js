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

let countPlayer = 0;
let countComputer = 0;

function playOneRound (playerSelection, computerSelection) {

    let playerSelectionDown = playerSelection.toLowerCase();

    if (playerSelectionDown === `rock` && computerSelection === `scissors`) {
        countPlayer++;
        return `You Win! Rock beats Scissors.`;
    }

    else if (playerSelectionDown === `paper` && computerSelection === `rock`) {
        countPlayer++;
        return `You Win! Paper beats Rock.`;
    }

    else if (playerSelectionDown === `scissors` && computerSelection === `paper`) {
        countPlayer++;
        return `You Win! Scissors beats Paper.`;
    }

    else if (playerSelectionDown === `scissors` && computerSelection === `rock`) {
        countComputer++;
        return `You Lose! Rock beats Scissors.`;
    }

    else if (playerSelectionDown === `rock` && computerSelection === `paper`) {
        countComputer++;
        return `You Lose! Paper beats Rock.`;
    }

    else if (playerSelectionDown === `paper` && computerSelection === `scissors`) {
        countComputer++;
        return `You Lose! Scissors beats Paper.`;
    }

    else {
        return `It is a draw!`;
    }
}

function game() {
    for(let i = 0; i < 5; i++) {

        const computerSelection = computerPlay();
        let playerSelection = prompt("Rock, Paper or Scissors?");
        playerSelectionDown = playerSelection.toLowerCase();
        
        while (playerSelectionDown !== `rock` && playerSelectionDown !== `paper` && playerSelectionDown !== `scissors`) {

                playerSelection = prompt("Please Enter Rock, Paper or Scissors!");
                playerSelectionDown = playerSelection.toLowerCase();
        }

        console.log(`You: ${playerSelection}`);
        console.log(`Computer: ${computerSelection}`);
        console.log(`Result: ${playOneRound(playerSelection, computerSelection)}`);
    }

    if (countPlayer > countComputer) {
        console.log(`Final Result: It is ${countPlayer} to ${countComputer}. You Win!`);
    }
    else if (countComputer > countPlayer) {
        console.log(`Final Result: It is ${countComputer} to ${countPlayer}. You Lose!`);
    }
    else {
        console.log(`Final Result: It is a draw!`);
    }
}

game();