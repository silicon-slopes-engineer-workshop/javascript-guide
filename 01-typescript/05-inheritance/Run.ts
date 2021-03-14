import { Bird } from './Bird';
import { Penguine } from './Penguine';

let bird = new Bird(2, 2);
console.log(`Birth can fly: ${bird.fly()}`);

let penguine = new Penguine(2, 2);
console.log(`Penguine can fly: ${penguine.fly()}`);
