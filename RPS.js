const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const message = document.getElementById("message");

let userScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playGame(userChoice) {
    const computerChoice = getComputerChoice();

    if (userChoice === computerChoice) {
        message.textContent =
            `🤝 Draw! Both chose ${userChoice}`;
    }
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        userScoreEl.textContent = userScore;

        message.textContent =
            `🎉 You Win! ${userChoice} beats ${computerChoice}`;
    }
    else {
        computerScore++;
        computerScoreEl.textContent = computerScore;

        message.textContent =
            `💻 Computer Wins! ${computerChoice} beats ${userChoice}`;
    }
}

rock.addEventListener("click", () => playGame("rock"));
paper.addEventListener("click", () => playGame("paper"));
scissors.addEventListener("click", () => playGame("scissors"));