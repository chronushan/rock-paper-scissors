let humanScore = 0;
let computerScore = 0;

var result = document.createElement("div");
document.querySelector("body").appendChild(result);

function getComputerChoice() {
	let result = Math.floor(Math.random() * 3);

	if (result === 0) {
		return "rock";
	} else if (result === 1) {
		return "scissors";
	} else {
		return "paper";
	}
}

function getHumanChoice() {
	let choice = prompt("Choose rock, scissors, or paper: ");
	return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
	if (humanChoice == "rock") {
		if (computerChoice == "rock") {
			result.textContent =
				"You tie!\nYour Score: " +
				humanScore +
				"\nComputer Score: " +
				computerScore;
		} else if (computerChoice == "scissors") {
			humanScore++;
			result.textContent =
				"You win!\nYour Score: " +
				humanScore +
				"\nComputer Score: " +
				computerScore;
		} else {
			computerScore++;
			result.textContent =
				"You lose!\nYour Score: " +
				humanScore +
				"\nComputer Score: " +
				computerScore;
		}
	} else if (humanChoice == "scissors") {
		if (computerChoice == "rock") {
			computerScore++;
			result.textContent =
				"You lose!\nYour Score: " +
				humanScore +
				"\nComputer Score: " +
				computerScore;
		} else if (computerChoice == "scissors") {
			result.textContent =
				"You tie!\nYour Score: " +
				humanScore +
				"\nComputer Score: " +
				computerScore;
		} else {
			humanScore++;
			result.textContent =
				"You win!\nYour Score: " +
				humanScore +
				"\nComputer Score: " +
				computerScore;
		}
	} else {
		if (computerChoice == "rock") {
			humanScore++;
			result.textContent =
				"You win!\nYour Score: " +
				humanScore +
				"\nComputer Score: " +
				computerScore;
		} else if (computerChoice == "scissors") {
			computerScore++;
			result.textContent =
				"You lose!\nYour Score: " +
				humanScore +
				"\nComputer Score: " +
				computerScore;
		} else {
			result.textContent =
				"You tie!\nYour Score: " +
				humanScore +
				"\nComputer Score: " +
				computerScore;
		}
	}
}
// it is working fine for one game, but after the first iteration of the game, it only produces the same results 4 more times.
// there are no more prompts for the humanchoice after the first one
//scoring tally works fine, I think there is a problem with the loop
function playGame() {
	while (true) {
		let humanSelection = getHumanChoice();
		let computerSelection = getComputerChoice();
		playRound(humanSelection, computerSelection);
		if (humanScore == 5 || computerScore == 5) {
			if (humanScore > computerScore) {
				console.log("You win the game!");
				break;
			} else {
				console.log("You lose the game!");
				break;
			}
		}
	}
}

let rock = document.querySelector("#rockbtn");
let paper = document.querySelector("#paperbtn");
let scissor = document.querySelector("#scissorbtn");

rock.addEventListener("click", () => {
	playRound("rock", getComputerChoice());
});
paper.addEventListener("click", () => {
	playRound("paper", getComputerChoice());
});
scissor.addEventListener("click", () => {
	playRound("scissor", getComputerChoice());
});
