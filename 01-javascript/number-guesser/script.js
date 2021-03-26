let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () => {
	return Math.floor(Math.random() * 9);
};

let compareGuesses = (user, pc, target) => {
	if (user < 0 || user >= 10) {
		alert('Number is out of range');
	} else {
		user = getAbsoluteDistance(user, target);
		pc = getAbsoluteDistance(pc, target);
		if (user === pc) {
			// user win
			return true;
		} else {
			if (user > pc) {
				// pc win
				return false;
			} else {
				// user win
				return true;
			}
		}
	}
};

let updateScore = (winner) => {
	switch(winner) {
		case 'human':
			humanScore++;
			break;
		case 'computer':
			computerScore++;
			break;
		default:
			break;
	}
};

let advanceRound = () => {
	currentRoundNumber++;
};

let getAbsoluteDistance = (guess, target) => {
	return Math.abs(guess - target);
};

// console.log(compareGuesses(3, 4, 2));