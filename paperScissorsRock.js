function computerPlay() {
    let options = ["paper", "scissors", "rock"];
    return options[Math.floor(Math.random()*options.length)];
}

console.log(computerPlay());