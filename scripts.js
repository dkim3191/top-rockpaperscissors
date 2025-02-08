function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            return 'ROCK';
        case 1:
            return 'PAPER';
        case 2:
            return 'SCISSORS';
    }
}

function getHumanChoice() {
    let input = prompt("Enter 'rock', 'paper', or 'scissors' without the parentheses");
    return input.toUpperCase();
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == 'ROCK' && computerChoice == 'SCISSORS')
        || (humanChoice == 'PAPER' && computerChoice == 'ROCK')
        || (humanChoice == 'SCISSORS' && computerChoice == 'PAPER')) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return;
    }
    if ((humanChoice == 'SCISSORS' && computerChoice == 'ROCK')
        || (humanChoice == 'ROCK' && computerChoice == 'PAPER')
        || (humanChoice == 'PAPER' && computerChoice == 'SCISSORS')) {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return;
    }
    console.log("It's a tie!");
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    while ((humanScore + computerScore) !== 5) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Current score: You-${humanScore} --- Computer-${computerScore}`);
    }
    
    if (humanScore > computerScore) {
        console.log("You are the WINNER!!!");
    } else {
        console.log("You are the LOSER!!!");
    }
}

playGame();