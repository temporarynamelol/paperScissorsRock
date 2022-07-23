function computerPlay() {
    let options = ["paper", "scissors", "rock"];
    return options[Math.floor(Math.random()*options.length)];
}

function singleRound(userInput) {
    let userChoice = userInput;
    let computerChoice = computerPlay();

    if (userChoice == "paper" && computerChoice == "rock" || 
    userChoice == "rock" && computerChoice == "scissors" ||
    userChoice == "scissors" && computerChoice == "paper") {
        console.log(`Congratulations ${userChoice} beat ${computerChoice}!`);
        return "Win"
    } else if (computerChoice == userChoice) {
        console.log("Tie! - No winner for this round");
        return "Tie";
    } else {
        console.log(`Bad luck ${computerChoice} beat ${userChoice}`);
        return "Lose";
    }

}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        //console.log(button.id)
        singleRound(button.id.toLowerCase());
    });
});


