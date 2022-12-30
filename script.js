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
//Moved to bottom of file for dependency reasons

//compare the answers
function playRound(pChoice, cChoice) {
    if (pChoice === cChoice) {
        return ("The game is a tie! You both played, " + cChoice + ".");
    }

    else if (pChoice === "rock" && cChoice === "paper") {
        return "The computer wins! Paper beats rock.";
    }

    else if (pChoice === "rock" && cChoice == "scissors") {
        return "The player wins! Rock beats scissors.";
    }

    else if (pChoice === "paper" && cChoice === "scissors") {
        return "The computer wins! Scissors beats paper.";
    }

    else if (pChoice === "paper" && cChoice === "rock") {
        return "The player wins! Paper beats rock.";
    }

    else if (pChoice === "scissors" && cChoice === "rock") {
        return "The computer wins! Rock beats scissors.";
    }

    else if (pChoice === "scissors" && cChoice === "paper") {
        return "The player wins! Scissors beats paper."
    }

    else {
        return "Your input was not recognized, please try again.";
    }
}
//print result
//run the game in a loop
function game(pChoice, cChoice) {
    //calculate result of played round
    //change how pscore and cscore are saved and displayed, maybe a seperate function?
    let result = playRound(pChoice, cChoice);

    if (result.substring(4,5) === "p") {
        console.log(result);
        pScore++;
    }
    else if (result.substring(4,5) === "c") {
        console.log(result);
        cScore++;
    }
    else {
        console.log(result);
        pScore = pScore + 0.5;
        cScore = cScore + 0.5;
    }

    //display winner
    //update scores
    //check for round winner

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
//return to start

//make buttons listen for clicks
//initialize buttons
const rock = document.querySelector('#rock');
const paper = document.querySelector('#rock');
const scissors = document.querySelector('#scissors');

//initialize scores
const pScore = document.querySelector('.score#player');
const cScore = document.querySelector('.score#cpu');
//something is wrong with this in testing, probably not how it works
pScore.textContent = '0';
cScore.textContent = '0';

//have buttons listen for clicks
//have buttons call playRound
//have buttons update scoreboard
//have buttons check for winners
rock.addEventListener('click', () => {
    game(rock, getComputerChoice());
    //rewrite game() to run once, update scores, and check for winners
})
paper.addEventListener('click', () => {
    game(paper, getComputerChoice());
})
scissors.addEventListener('click', () => {
    game(paper, getComputerChoice());
})
