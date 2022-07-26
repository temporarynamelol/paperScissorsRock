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
        currentGame(`Congratulations ${userChoice} beat ${computerChoice}!`);
        userScore++;  
    //determine tie
    } else if (computerChoice == userChoice) {
        currentGame("Tie! - No winner for this round");
    //determines when user has not won or tied 
    } else {
        currentGame(`Bad luck ${computerChoice} beat ${userChoice}`);
        computerScore++;
    }

}

function playAgain() {
    //remove outcome of last round
    currentGame();
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
        scoreFields();
        //clear end message
        endMessage();
        //unlock play buttons
        buttons.forEach((button) => {button.disabled = false});
        //remove play again button
        play.removeChild(playBtn);
    });
}

//adds whatever argument is supplied as a message on the screen, 
//if no argument supplied, it removes the message
function endMessage (result = '') {
    let message = document.querySelector('.endMessage');

    if (result == "VICTORY") {
        message.setAttribute('style', 'color:green;')
    } else if (result == 'DESTROYED') {
        message.setAttribute('style', 'color: red;')
    } 
    message.textContent = result;
    //const message = document.querySelector('.endMessage');
    //message.textContent = result;
}

//appends the current scores to the screen
function scoreFields () {
    let user = document.querySelector('.playerScore');
    let comp = document.querySelector('.compScore');
    user.textContent = `Your Score: ${userScore}`;
    comp.textContent = `Computers score: ${computerScore}`;
}

//Displays win lose or tie for current round and why
function currentGame (result = '') {
    let currentMessage = document.querySelector('.currentPlay');
    currentMessage.textContent = result;
}

//queries all buttons on page
const buttons = document.querySelectorAll('button');
//each time button is pushed, pass the value of the button to the singleRound function
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        singleRound(button.id.toLowerCase());
        //determines winner out of 5
        if(userScore == 5) {
            //sets end message to winner message
            const message = "VICTORY";
            endMessage(message);
            //locks play buttons
            buttons.forEach((button) => {button.disabled = true});
            playAgain();
            return;
        } else if (computerScore == 5) {
            //sets end message to loser message
            const message = "DESTROYED";
            endMessage(message);
            //locks play buttons
            buttons.forEach((button) => {button.disabled = true});
            playAgain();
            return;
        }
        scoreFields();
    });
});




