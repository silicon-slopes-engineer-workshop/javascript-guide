"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bird_1 = require("./Bird");
var Penguine_1 = require("./Penguine");
var Goose_1 = require("./Goose");
var bird = new Bird_1.Bird(2, 2);
// console.log(`Birth can fly: ${bird.fly()}`);
var penguine = new Penguine_1.Penguine(2, 2);
// console.log(`Penguine can fly: ${penguine.fly()}`);
var goose = new Goose_1.Goose(2, 2, 'angry');
// console.log(`The ${goose.mood} goose can fly: ${goose.fly()}`);
// delcare array of birds
var allBirds = [];
// add all instance to the array
allBirds.push(bird);
allBirds.push(penguine);
allBirds.push(goose);
// loop
for (var _i = 0, allBirds_1 = allBirds; _i < allBirds_1.length; _i++) {
    var oneBird = allBirds_1[_i];
    console.log(oneBird.fly());
}
