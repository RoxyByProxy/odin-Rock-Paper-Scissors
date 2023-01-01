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
const pScore = document.querySelector('#player');
const cScore = document.querySelector('#cpu');
const results = document.querySelector('#result');
const winners = document.querySelector('#winner');

pScore.textContent = '0';
cScore.textContent = '0';

//change scores
function scoreAdjust(who, amount) {
    //resets the score for isOver()
    if (amount === 0 && who === 'both') {
        pScore.textContent = '0';
        cScore.textContent = '0';
        return;
    }
    //determines who scored and awards points
    if (who === 'player') {
        const score = Number(pScore.textContent);
        pScore.textContent = ((score * 10)+ amount) / 10;
        return;
    }
    else if (who === 'cpu') {
        const score = Number(cScore.textContent);
        cScore.textContent = ((score * 10) + amount) / 10;
        return;
    }
    else {
        let score = Number(pScore.textContent);
        pScore.textContent = ((score * 10) + amount) / 10;
        score = Number(cScore.textContent);
        cScore.textContent = ((score * 10) + amount) / 10;
        return;
    }
}
//determine winner
function isOver(winner) {
    if (winner === 'player') {
        return pScore.textContent > cScore.textContent && Number(pScore.textContent) >= 5;
    }
    else if (winner === 'cpu') {
        return cScore.textContent > pScore.textContent && Number(cScore.textContent) >= 5;
    }
    else {
        return pScore.textContent === cScore.textContent && Number(pScore.textContent) >= 5;
    }
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
        results.textContent = result;
        scoreAdjust('player', 10);
    }
    else if (result.substring(4,5) === "c") {
        results.textContent = result;
        scoreAdjust('cpu', 10);
    }
    else {
        results.textContent = result;
        scoreAdjust('both', 5);
    }

    //check for round winner
    if (isOver('player')) {
        winners.textContent = "The player wins the game! " + pScore.textContent + " to " + cScore.textcontent + ". Starting new game.";
        scoreAdjust('both', 0);
    }
    else if (isOver('cpu')) {
        winners.textContent = "The computer wins the game! " + cScore.textContent + " to " + pScore.textContent + ". Starting new game.";
        scoreAdjust('both', 0);
    }
    else if (isOver('tie')) {
        winners.textContent = "The game is a tie! " + pScore.textContent + " all. Starting new game.";
        scoreAdjust('both', 0);
    }
}
//return to start

//make buttons listen for clicks
//initialize buttons
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
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
