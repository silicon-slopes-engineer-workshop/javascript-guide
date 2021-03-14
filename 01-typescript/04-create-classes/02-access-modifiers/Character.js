/**
 * Class that use underscore name and get set syntax
 */
var Character = /** @class */ (function () {
    function Character(first, last) {
        this._fname = first;
        this._lname = last;
    }
    Object.defineProperty(Character.prototype, "firstname", {
        get: function () {
            return this._fname;
        },
        set: function (first) {
            this._fname = first;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "lastname", {
        get: function () {
            return this._lname;
        },
        set: function (last) {
            this._lname = last;
        },
        enumerable: false,
        configurable: true
    });
    return Character;
}());
// create instance
var character = new Character("Laila", "Law-Giver");
console.log("Jarl of Riften is " + character.firstname + " " + character.lastname);
// You've defined it as a setter, so use it as a property: character.firstname = "name"
character.firstname = "Saerlund";
console.log(character.firstname + " " + character.lastname + " is her son, who sides with the Empire.");
