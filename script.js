//Rock, Paper, Scissors game
//create and then save the computers choice randomly
function getComputerChoice() {

    let compChoice = Math.floor (Math.random() * 9 + 1);

    if (compChoice <= 3) {
        compChoice = "rock";
    }

    else if (compChoice <= 6) {
        compChoice = "paper";
    }

    else {
        compChoice = "scissors";
    }

    return compChoice;
}
//poll the player for a choice and then save it
function getPlayerChoice() {

    let playerChoice = prompt("Choose Rock, Paper, or Scissors.");
    playerChoice = playerChoice.toLowerCase();

    return playerChoice;
}
//compare the answers
function playRound(pChoice, cChoice) {
    if (pChoice === cChoice) {
        return "The game is a tie";
    }

    else if (pChoice == "rock" && cChoice == "paper") {
        return "The computer wins";
    }

    else if (pChoice == "rock" && cChoice == "scissors") {
        return "The player wins";
    }

    else if (pChoice == "paper" && cChoice == "scissors") {
        return "The computer wins";
    }

    else if (pChoice == "paper" && cChoice == "rock") {
        return "The player wins";
    }

    else if (pChoice == "scissors" && cChoice == "rock") {
        return "The computer wins";
    }

    else if (pChoice == "scissors" && cChoice == "paper") {
        return "The player wins"
    }

    else {
        return "Your input was not recognized, please try again";
    }
}
//print result
function declareWinner(result, pChoice, cChoice) {

}
//run the game in a loop
function game() {
    //intialize variables
    let pScore = 0;
    let cScore = 0;

    //use for loop to play game and keep score
    for (let x = 0; x <5, x++) {
        let result = playRound(getPlayerChoice(), getComputerChoice());

        if (result == "The player wins") {
            pScore++;
        }
        else if (result == "The computer wins") {
            cScore++;
        }
        else if (result == "The game is a tie") {
            pScore = pScore + 0.5;
            cScore = cScore + 0.5;
        }
        else {
            console.log(result);
            x--;
        }
    }
    //report score and winner at end
    if (pScore > cScore) {
        console.log("The player wins the game! With a score of " + pScore + " vs. the computer's " + cScore + ".");
    }
    //prompt for continue?

}
//return to start