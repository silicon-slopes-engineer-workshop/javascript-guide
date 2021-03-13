for (let i = 0; i < 3; i++) {
	console.log(i);
}

console.log("---names loop---");

let names: string[] = ["Chris", "Jay", "Kyle", "Ming"];

for (let name of names) {
	console.log(`My name is ${name}`);
}

console.log("---pets loop---");

let pets: string[] = ["dog", "cat", "fish", "bird"];

for (let pet of pets) {
	console.log(pet);
}

console.log("--push--");

pets.push("horse");
pets.push("snake");
pets.push("hamster");

for (let i = 0; i < pets.length; i++) {
	if (pets[i] == "snake") {
		console.log("ah snake!"); // sorry whoever has a snake as pet
	} else {
		console.log("Aw.." + pets[i]);
	}

}
