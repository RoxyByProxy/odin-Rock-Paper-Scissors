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
//initialize scores
const pScore = document.querySelector('.score#player');
const cScore = document.querySelector('.score#cpu');
//something is wrong with this in testing, probably not how it works
pScore.textContent = '0';
cScore.textContent = '0';

//change scores
function scoreAdjust(who, amount) {
    
}
//determine winner
function isOver(winner) {

}
//print result
//run the game in a loop
function game(pChoice) {
    //calculate result of played round
    //change how pscore and cscore are saved and displayed, maybe a seperate function?
    //display winner
    //update scores
    let result = playRound(pChoice, getComputerChoice());

    if (result.substring(4,5) === "p") {
        console.log(result);
        scoreAdjust('player', 1);
    }
    else if (result.substring(4,5) === "c") {
        console.log(result);
    scoreAdjust('cpu', 1);
    }
    else {
        console.log(result);
        scoreAdjust('both',0.5);
    }

    //check for round winner
    if (isover('player')) {
        console.log("The player wins the game! Starting new game.");
        scoreAdjust('both', 0);
    }
    else if (isover('cpu')) {
        console.log ("The computer wins the game! Starting new game.");
        scoreAdjust('both', 0);
    }
    else if (isover('tie')) {
        console.log("The game is a tie! Starting new game.");
        scoreAdjust('both', 0);
    }
}
//return to start

//make buttons listen for clicks
//initialize buttons
const rock = document.querySelector('#rock');
const paper = document.querySelector('#rock');
const scissors = document.querySelector('#scissors');

//have buttons listen for clicks
//have buttons call playRound
//have buttons update scoreboard
//have buttons check for winners
rock.addEventListener('click', () => {
    game('rock');
    //rewrite game() to run once, update scores, and check for winners
})
paper.addEventListener('click', () => {
    game('paper');
})
scissors.addEventListener('click', () => {
    game('paper');
})
