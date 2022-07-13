function computerPlay() {
    let options = ["paper", "scissors", "rock"];
    return options[Math.floor(Math.random()*options.length)];
}

function singleRound() {
    let userChoice = prompt("Please enter rock, paper or scissors ");
    let computerChoice = computerPlay();

    console.log(userChoice);
    console.log(computerChoice);
}

singleRound();