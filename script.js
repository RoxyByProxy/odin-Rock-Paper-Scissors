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
        return ("The game is a tie! You both played, " + cChoice + ".");
    }

    else if (pChoice == "rock" && cChoice == "paper") {
        return "The computer wins! Paper beats rock.";
    }

    else if (pChoice == "rock" && cChoice == "scissors") {
        return "The player wins! Rock beats scissors.";
    }

    else if (pChoice == "paper" && cChoice == "scissors") {
        return "The computer wins! Scissors beats paper.";
    }

    else if (pChoice == "paper" && cChoice == "rock") {
        return "The player wins! Paper beats rock.";
    }

    else if (pChoice == "scissors" && cChoice == "rock") {
        return "The computer wins! Rock beats scissors.";
    }

    else if (pChoice == "scissors" && cChoice == "paper") {
        return "The player wins! Scissors beats paper."
    }

    else {
        return "Your input was not recognized, please try again.";
    }
}
//print result
//run the game in a loop
function game() {
    //intialize variables
    let pScore = 0;
    let cScore = 0;

    //use for loop to play game and keep score
    for (let x = 0; x <=4; x++) {
        let result = playRound(getPlayerChoice(), getComputerChoice());

        if (result.substring(4,5) == "p") {
            console.log(result);
            pScore++;
        }
        else if (result.substring(4,5) == "c") {
            console.log(result);
            cScore++;
        }
        else if (result.substring(9,10) == "i") {
            console.log(result);
            pScore = pScore + 0.5;
            cScore = cScore + 0.5;
        }
        else {
            console.log(result + " This was an error catch message.");
            x--;
        }
    }
    //report score and winner at end
    if (pScore > cScore) {
        console.log("The player wins the game! With a score of " + pScore + " vs. the computer's " + cScore + ".");
    }
    else if (pScore < cScore) {
        console.log ("The computer wins the game! With a score of " + cScore + " vs. the player's " + pScore + ".");
    }
    else {
        console.log("The game is a tie! With both the player and the computer scoring " + cScore + ".");
    }
    //prompt for continue?
    let con = prompt("Would you like to play another game?");
    if (con.toLowerCase() === "yes" || con.toLowerCase() === "y") {
        console.log("You have chosen, " + con + " Restarting the game.");
        game()
    }
    else {
        console.log("you have chosen, " + con + " Closing the game, please refresh the page to play again.");
    }
}
game();
//return to start