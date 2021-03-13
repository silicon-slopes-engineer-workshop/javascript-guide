let sports: string[] = ["Golf", "Soccer", "Badminton", "Basketball", "Swimming"];

for (let i = 0; i < sports.length; i++) {
	console.log(sports[i]);
}

console.log("-------");

// simplified for loop
for (let sport of sports) {
	console.log(sport);
}

console.log("-------");

for (let sport of sports) {
	if (sport == "Badminton") {
		console.log("I have try " + sport);
	} else {
		console.log("I haven't try " + sport)
	}
}