let cars: string[] = ["SUV", "sedan", "coupe", "hatchback", "crossover", "4x4"];

for(let car of cars) {
	console.log(car);
}

cars.push("convertible");
cars.push("van");

console.log("---array after push---");

for(let car of cars) {
	console.log(car);
}