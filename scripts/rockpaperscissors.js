let options = ['rock', 'paper', 'scissors']

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
        return "You Win! Rock beats Scissors"
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "You Win! Paper beats Rock"
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "You Win! Scissors beats Paper"
    } else {
        return "You Lose! " + computerSelection + " beats " + playerSelection
    }
}