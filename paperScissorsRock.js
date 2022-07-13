function computerPlay() {
    let options = ["paper", "scissors", "rock"];
    return options[Math.floor(Math.random()*options.length)];
}

function singleRound() {
    let userChoice = prompt("Please enter rock, paper or scissors ");
    let computerChoice = computerPlay();

    if (userChoice == "paper" && computerChoice == "rock" || 
    userChoice == "rock" && computerChoice == "scissors" ||
    userChoice == "scissors" && computerChoice == "paper") {
        return `Congratulations ${userChoice} beat ${computerChoice}!`;
    } else if (computerChoice == userChoice) {
        return "Tie!";
    } else {
        return `Bad luck ${computerChoice} beat ${userChoice}`;
    }


}

console.log(singleRound());