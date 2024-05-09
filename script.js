let humanScore = 0;
let computerScore = 0;

var gameresult = document.createElement("div");
document.querySelector("body").appendChild(gameresult);

var score = document.createElement("p");
document.querySelector("body").appendChild(score);

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
			gameresult.textContent =
				"You tie!\nYour Score: " +
				humanScore +
				"\nComputer Score: " +
				computerScore;
		} else if (computerChoice == "scissors") {
			humanScore++;
			gameresult.textContent =
				"You win!\nYour Score: " +
				humanScore +
				"\nComputer Score: " +
				computerScore;
		} else {
			computerScore++;
			gameresult.textContent =
				"You lose!\nYour Score: " +
				humanScore +
				"\nComputer Score: " +
				computerScore;
		}
	} else if (humanChoice == "scissors") {
		if (computerChoice == "rock") {
			computerScore++;
			gameresult.textContent =
				"You lose!\nYour Score: " +
				humanScore +
				"\nComputer Score: " +
				computerScore;
		} else if (computerChoice == "scissors") {
			gameresult.textContent =
				"You tie!\nYour Score: " +
				humanScore +
				"\nComputer Score: " +
				computerScore;
		} else {
			humanScore++;
			gameresult.textContent =
				"You win!\nYour Score: " +
				humanScore +
				"\nComputer Score: " +
				computerScore;
		}
	} else {
		if (computerChoice == "rock") {
			humanScore++;
			gameresult.textContent =
				"You win!\nYour Score: " +
				humanScore +
				"\nComputer Score: " +
				computerScore;
		} else if (computerChoice == "scissors") {
			computerScore++;
			gameresult.textContent =
				"You lose!\nYour Score: " +
				humanScore +
				"\nComputer Score: " +
				computerScore;
		} else {
			gameresult.textContent =
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
// function playGame() {
// 	while (true) {
// 		let humanSelection = getHumanChoice();
// 		let computerSelection = getComputerChoice();
// 		playRound(humanSelection, computerSelection);
// 		if (humanScore == 5 || computerScore == 5) {
// 			if (humanScore > computerScore) {
// 				console.log("You win the game!");
// 				break;
// 			} else {
// 				console.log("You lose the game!");
// 				break;
// 			}
// 		}
// 	}
// }

let rock = document.querySelector("#rockbtn");
let paper = document.querySelector("#paperbtn");
let scissor = document.querySelector("#scissorbtn");

rock.addEventListener("click", () => {
	playRound("rock", getComputerChoice());
	if (humanScore == 5 || computerScore == 5) {
		if (humanScore > computerScore) {
			score.textContent = "You win the game!";
			document.querySelector("body").appendChild(score);
		} else {
			score.textContent = "You lose the game!";
			document.querySelector("body").appendChild(score);
		}
	}
});
paper.addEventListener("click", () => {
	playRound("paper", getComputerChoice());
	if (humanScore == 5 || computerScore == 5) {
		if (humanScore > computerScore) {
			score.textContent = "You win the game!";
			document.querySelector("body").appendChild(score);
		} else {
			score.textContent = "You lose the game!";
			document.querySelector("body").appendChild(score);
		}
	}
});
scissor.addEventListener("click", () => {
	playRound("scissor", getComputerChoice());
	if (humanScore == 5 || computerScore == 5) {
		if (humanScore > computerScore) {
			score.textContent = "You win the game!";
			document.querySelector("body").appendChild(score);
		} else {
			score.textContent = "You lose the game!";
			document.querySelector("body").appendChild(score);
		}
	}
});
