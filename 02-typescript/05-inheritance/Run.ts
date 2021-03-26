import { Bird } from './Bird';
import { Penguine } from './Penguine';
import { Goose } from './Goose';

let bird = new Bird(2, 2);
// console.log(`Birth can fly: ${bird.fly()}`);

let penguine = new Penguine(2, 2);
// console.log(`Penguine can fly: ${penguine.fly()}`);

let goose = new Goose(2, 2, 'angry');
// console.log(`The ${goose.mood} goose can fly: ${goose.fly()}`);

// delcare array of birds
let allBirds: Bird[] = [];

// add all instance to the array
allBirds.push(bird);
allBirds.push(penguine);
allBirds.push(goose);

// loop
for (let oneBird of allBirds) {
    console.log(oneBird.fly());
}
