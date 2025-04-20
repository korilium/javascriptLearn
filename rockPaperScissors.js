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
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        HumanScore = HumanScore + 1;
        return "You win! humanScore:" + humanChoice + " vs computerScore:" + computerChoice;
    } else {
        ComputerScore = ComputerScore + 1;
        return "You lose! humanScore:" + HumanScore + " vs computerScore:" + ComputerScore;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if (HumanScore > ComputerScore) {
        console.log("You win the game! humanScore:" + HumanScore + " vs computerScore:" + ComputerScore);
    } else if (ComputerScore > HumanScore) {
        console.log("You lose the game! humanScore:" + HumanScore + " vs computerScore:" + ComputerScore);
    } else {
        console.log("It's a tie! humanScore:" + HumanScore + " vs computerScore:" + ComputerScore);
    }
}