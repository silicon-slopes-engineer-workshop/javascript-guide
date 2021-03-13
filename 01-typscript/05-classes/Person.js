var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    return Person;
}());
// let michelle = new Person();
// michelle.setFirstName("Michelle");
// michelle.setLastName("Obama");
// console.log("This person is " + michelle.getFirstName() + " " + michelle.getLastName());
