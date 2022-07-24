let computerScore = 0;
let userScore = 0;

//returns random computer choice
function computerPlay() {
    let options = ["paper", "scissors", "rock"];
    //selects random integer index of options array  
    return options[Math.floor(Math.random()*options.length)];
}

function singleRound(userInput) {
    //set user choice to value that is passed in when function is called 
    let userChoice = userInput;
    //sets computer choice to result of computerPlay function
    let computerChoice = computerPlay();

    //determines all scenarios where user would win when userChoice is compared to computerChoice
    if (userChoice == "paper" && computerChoice == "rock" || 
    userChoice == "rock" && computerChoice == "scissors" ||
    userChoice == "scissors" && computerChoice == "paper") {
        console.log(`Congratulations ${userChoice} beat ${computerChoice}!`);
        userScore++;
        return "Win"    
    //determine tie
    } else if (computerChoice == userChoice) {
        console.log("Tie! - No winner for this round");
        return "Tie";
    //determines when user has not won or tied 
    } else {
        console.log(`Bad luck ${computerChoice} beat ${userChoice}`);
        computerScore++;
        return "Lose";
    }

}

function playAgain() {
    const play = document.querySelector('.playAgain');
    const playBtn = document.createElement('button');
    playBtn.textContent = "Play again?";
    play.appendChild(playBtn);
}

//queries all buttons on page
const buttons = document.querySelectorAll('button');
//each time button is pushed, pass the value of the button to the singleRound function
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        singleRound(button.id.toLowerCase());
        //determines winner out of 5
        if(userScore == 5) {
            alert("Yay you won");
            buttons.forEach((button) => {button.disabled = true});
            playAgain();
            return;
        } else if (computerScore == 5) {
            alert("Comp won");
            buttons.forEach((button) => {button.disabled = true});
            playAgain();
            return;
        }
        console.log(`Your score = ${userScore}, Computer score = ${computerScore}`);
    });
});




