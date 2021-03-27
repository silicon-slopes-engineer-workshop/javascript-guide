const getUserChoice = userInput => {
	userInput = userInput.toLowerCase();
	if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
		return userInput;
	} else {
		console.log('Error!');
	}
};

// console.log(getUserChoice("Rock"));

let getComputerChoice = () => {
	let rand = Math.floor(Math.random() * 3);
	switch (rand) {
		case 0:
			return 'rock';
			break;
		case 1:
			return 'paper';
			break;
		case 2:
			return 'scissors';
			break;
	}
};

// console.log(getComputerChoice());

let determineWinner = (userChoice, computerChoice) => {
	console.log("User Input: " + userChoice);
	console.log("PC Input: " + computerChoice);
	if (userChoice === computerChoice) {
		return 'Tie';
	} else {
		if (userChoice === 'rock') {
			return (computerChoice === 'paper') ? "PC won" : "User won";
		}
		if (userChoice === 'paper') {
			return (computerChoice === 'scissors') ? "PC won" : "User won";
		}
		if (userChoice === 'scissors') {
			return (computerChoice === 'rock') ? "PC won" : "User won";
		}
		if (userChoice === 'bomb') {
			return "User won";
		}
	}
};

let playGame = () => {
	let userChoice = getUserChoice('bomb');
	let computerChoice = getComputerChoice();
	console.log(determineWinner(userChoice, computerChoice));
};

playGame();