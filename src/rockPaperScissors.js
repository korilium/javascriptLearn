console.log("Hello World");



function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}


function getHumanChoice() {
    let humanChoice = prompt("Enter your choice (rock, paper, scissors): ")
    if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        alert("Invalid choice. Please try again.");
        return getHumanChoice();
    }
    return humanChoice;

}


let HumanScore = 0;
let ComputerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toString().toLowerCase();
    computerChoice = computerChoice.toString().toLowerCase();
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        HumanScore = HumanScore + 1;
        return "You win! humanScore:" + HumanScore + " vs computerScore:" + ComputerScore;
    } else {
        ComputerScore = ComputerScore + 1;
        return "You lose! humanScore:" + HumanScore + " vs computerScore:" + ComputerScore;
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const humanScoreDisplay = document.querySelector("#humanScore");
const computerScoreDisplay = document.querySelector("#computerScore");



rock.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
    humanScoreDisplay.textContent = "Human Score: " + HumanScore;
    computerScoreDisplay.textContent = "Computer Score: " + ComputerScore;
})
paper.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
    humanScoreDisplay.textContent = "Human Score: " + HumanScore;
    computerScoreDisplay.textContent = "Computer Score: " + ComputerScore;
})
scissors.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
    humanScoreDisplay.textContent = "Human Score: " + HumanScore;
    computerScoreDisplay.textContent = "Computer Score: " + ComputerScore;

})

