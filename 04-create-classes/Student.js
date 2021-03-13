var Student = /** @class */ (function () {
    function Student() {
    }
    Object.defineProperty(Student.prototype, "firstName", {
        get: function () {
            return this._firstname;
        },
        set: function (firstName) {
            this._firstname = firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "lastName", {
        get: function () {
            return this._lastname;
        },
        set: function (lastName) {
            this._lastname = lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var student = new Student();
student.firstName = 'Martin';
student.lastName = 'King';
console.log(student.firstName);
// tsc --target es5 --noEmitOnError [file.ts]
