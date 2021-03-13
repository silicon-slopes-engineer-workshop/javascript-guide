var Patient = /** @class */ (function () {
    //short cut
    function Patient(_firstname, _lastname) {
        this._firstname = _firstname;
        this._lastname = _lastname;
    }
    Object.defineProperty(Patient.prototype, "firstName", {
        get: function () {
            return this._firstname;
        },
        set: function (value) {
            this._firstname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "lastName", {
        get: function () {
            return this._lastname;
        },
        set: function (value) {
            this._lastname = value;
        },
        enumerable: false,
        configurable: true
    });
    return Patient;
}());
var patient = new Patient("Martin", "Dixon");
console.log(patient.firstName);
console.log(patient.lastName);
