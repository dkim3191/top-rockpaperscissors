let humanScore = 0;
let computerScore = 0;
const result = document.querySelector("#result");
const score = document.querySelector("#score");

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
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
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    } else if ((humanChoice == 'SCISSORS' && computerChoice == 'ROCK')
        || (humanChoice == 'ROCK' && computerChoice == 'PAPER')
        || (humanChoice == 'PAPER' && computerChoice == 'SCISSORS')) {
        computerScore++;
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        return;
    } else {
        result.textContent = "It's a tie!";
    }
}
const over = document.querySelector("#over");

function playGame() {

    const options = document.querySelector("#options");
    options.addEventListener("click", (e) => {
        if (humanScore != 5 && computerScore != 5) {
            switch (e.target.id) {
                case "rock":
                    playRound('ROCK', getComputerChoice());
                    break;
                case "paper":
                    playRound('PAPER', getComputerChoice());
                    break;
                case "scissors":
                    playRound('SCISSORS', getComputerChoice());
                    break;
            }
            score.textContent = `You: ${humanScore} Computer: ${computerScore}`;
        }
        if (humanScore == 5) {
            over.textContent = "You are the WINNER!!!"
        } else if (computerScore == 5) {
            over.textContent = "You are the LOSER!!!";
        }
    });
}

playGame();