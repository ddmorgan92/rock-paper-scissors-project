const buttonSelection = document.querySelectorAll(".choice-selection input");
const resultsContainer = document.querySelector("#results");
const playerContainer = document.querySelector("#player-score");
const computerContainer = document.querySelector("#computer-score");
const tieContainer = document.querySelector("#tie-score");
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let totalRounds = 0;

//Randomly generates a selection for the computer
function computerPlay() {
        const choices = ["Rock", "Paper", "Scissors"];
        return choices[Math.floor(Math.random()*choices.length)];
}

//Primary game logic
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
            resultsContainer.innerHTML = "It's a tie!";
            tieScore++;
            totalRounds++;
            updateScore();
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Rock"){
            resultsContainer.innerHTML = "You win this round!";
            playerScore++;
            totalRounds++;
            updateScore();
    } else {
            resultsContainer.innerHTML = "You lose this round!";
            computerScore++;
            totalRounds++;
            updateScore();
    }
}    

//Updates score in HTML and calculates win percentage based off of total rounds played.
function updateScore () {
        playerContainer.innerHTML = playerScore + "  |  Player Percent: " + Math.round(((playerScore/totalRounds)*100)) + "%";
        computerContainer.innerHTML = computerScore + "  |  Computer Percent: " + Math.round(((computerScore/totalRounds)*100)) + "%";
        tieContainer.innerHTML = tieScore + "  |  Tie Percent: " + Math.round(((tieScore/totalRounds)*100)) + "%";
}

//Adds event listener that triggers when the buttons are clicked
buttonSelection.forEach( move => move.addEventListener("click",event => {
        let playerSelection = event.target.name;
        let computerSelection = computerPlay();
        playRound(playerSelection,computerSelection);
    })
);