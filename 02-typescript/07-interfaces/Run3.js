"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
var cricket = new CricketCoach_1.CricketCoach();
console.log(cricket.getDailyWorkout());
// Practice spin bowling technique
var golf = new GolfCoach_1.GolfCoach();
console.log(golf.getDailyWorkout());
// Hit 100 balls at the golf range
