"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bird_1 = require("./Bird");
var Penguine_1 = require("./Penguine");
var bird = new Bird_1.Bird(2, 2);
console.log("Birth can fly: " + bird.fly());
var penguine = new Penguine_1.Penguine(2, 2);
console.log("Penguine can fly: " + penguine.fly());
