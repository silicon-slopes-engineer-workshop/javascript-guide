/**
 * Class that use Constructors
 */
class Bike {
    
    name: string;
    wheel: number;

    constructor(thisName: string, thisWheel:number) {
        this.name = thisName;
        this.wheel = thisWheel;
    }
}

// create a bike instance
let kidBike = new Bike('Martin', 4);
console.log(`This ${kidBike.name} bike has total ${kidBike.wheel}`);