import { Coach } from './Coach'; 
import { CricketCoach } from './CricketCoach';
import { GolfCoach } from './GolfCoach';

let cricket = new CricketCoach();
console.log(cricket.getDailyWorkout());
// Practice spin bowling technique

let golf = new GolfCoach();
console.log(golf.getDailyWorkout());
// Hit 100 balls at the golf range