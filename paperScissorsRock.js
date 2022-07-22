function computerPlay() {
    let options = ["paper", "scissors", "rock"];
    return options[Math.floor(Math.random()*options.length)];
}

function singleRound() {
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');
    const rock = document.querySelector('#rock');
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
 
function game() {
    let j = 0;
    let k = 0;

    for (let i = 0; i < 5; i++) {
        let result = singleRound();

        switch (result) {
            case "Win":
                j++;
                break;
            
            case "Lose":
                k++;
                break;

            case "Tie":
                break;
        }
    }

   return j > k ?
   "You won the best out of 5!":
   "You lost the most rounds out of 5 :(";
}


console.log(game());