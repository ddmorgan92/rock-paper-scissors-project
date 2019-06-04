let playerScore = 0;
let computerScore = 0;

function computerPlay() {
        const choices = ["Rock", "Paper", "Scissors"];
        return choices[Math.floor(Math.random()*choices.length)];
}
    
function playRound() {
    const playerSelection = document.querySelector("select").value;
    const resultsContainer = document.querySelector("#results");
    const playerContainer = document.querySelector("#player-score");
    const computerContainer = document.querySelector("#computer-score");
    const computerSelection = computerPlay();

        
    if (playerSelection === computerSelection){
            resultsContainer.innerHTML = "It's a tie!";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Rock"){
            resultsContainer.innerHTML = "You win this round!";
            playerScore++;
            playerContainer.innerHTML = playerScore;
    } else {
            resultsContainer.innerHTML = "You lose this round!";
            computerScore++;
            computerContainer.innerHTML = computerScore;
    }

    console.log(playerSelection, computerSelection);
}    
