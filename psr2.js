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
    //creates play again button
    const play = document.querySelector('.playAgain');
    const playBtn = document.createElement('button');
    playBtn.textContent = "Play again?";
    play.appendChild(playBtn);
    //if users clicks play again button - 
    playBtn.addEventListener('click', () => {
        //reset scores
        userScore = 0;
        computerScore = 0;
        //clear score feilds 
        //unlock play buttons
        buttons.forEach((button) => {button.disabled = false});
        //remove play again button
        play.removeChild(playBtn);
    });
}

function endMessage (result) {
    message = document.querySelector('.endMessage');
    para = document.createElement('p');
    para.textContent = result;
    message.appendChild(para);
}

//queries all buttons on page
const buttons = document.querySelectorAll('button');
//each time button is pushed, pass the value of the button to the singleRound function
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        singleRound(button.id.toLowerCase());
        //determines winner out of 5
        if(userScore == 5) {
            const message = "You won";
            endMessage(message);
            buttons.forEach((button) => {button.disabled = true});
            playAgain();
            return;
        } else if (computerScore == 5) {
            const message = "You lost :(";
            endMessage(message);
            buttons.forEach((button) => {button.disabled = true});
            playAgain();
            return;
        }
        console.log(`Your score = ${userScore}, Computer score = ${computerScore}`);
    });
});




