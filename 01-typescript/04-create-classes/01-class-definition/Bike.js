/**
 * Class that use Constructors
 */
var Bike = /** @class */ (function () {
    function Bike(thisName, thisWheel) {
        this.name = thisName;
        this.wheel = thisWheel;
    }
    return Bike;
}());
// create a bike instance
var kidBike = new Bike('Martin', 4);
console.log("This " + kidBike.name + " bike has total " + kidBike.wheel);
