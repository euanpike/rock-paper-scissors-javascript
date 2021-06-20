let options = ['rock', 'paper', 'scissors']
let playerScore = 0;
let computerScore = 0;


function computerPlay() {
    min = Math.ceil(0);
    max = Math.floor(2);
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    return options[randomNum];
}

function singleRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie!"
    }

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return "You Win! Rock beats Scissors"
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return "You Win! Paper beats Rock"
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return "You Win! Scissors beats Paper"
    } else {
        computerScore++;
        return "You Lose! " + computerSelection + " beats " + playerSelection
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, Paper, or Scissors...?');
        while (!(options.includes(playerSelection.toLowerCase()))) {
            alert("Please enter: Rock, Paper, or Scissors!");
            playerSelection = prompt('Rock, Paper, or Scissors...?');
        }
        let computerSelection = computerPlay(); 
        console.log(singleRound(playerSelection, computerSelection));
    }

    console.log("Your Score: " + playerScore);
    console.log("Computer Score: " + computerScore);

    if (playerScore > computerScore) {
        console.log("You Won!");
    } else if (computerScore > playerScore) {
        console.log("You Lost! Try again?");
    } else {
        console.log("Its a Tie! Try again?");
    }
}

game()