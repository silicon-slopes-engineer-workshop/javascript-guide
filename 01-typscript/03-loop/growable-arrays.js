var cars = ["SUV", "sedan", "coupe", "hatchback", "crossover", "4x4"];
for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
    var car = cars_1[_i];
    console.log(car);
}
cars.push("convertible");
cars.push("van");
console.log("---array after push---");
for (var _a = 0, cars_2 = cars; _a < cars_2.length; _a++) {
    var car = cars_2[_a];
    console.log(car);
}
