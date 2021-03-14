"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bird = void 0;
var Bird = /** @class */ (function () {
    // private _wing: number;
    // private _leg: number;
    // constructor
    function Bird(_wing, _leg) {
        this._wing = _wing;
        this._leg = _leg;
    }
    Object.defineProperty(Bird.prototype, "wings", {
        get: function () {
            return this._wing;
        },
        set: function (wing) {
            this._wing = wing;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bird.prototype, "leg", {
        get: function () {
            return this._leg;
        },
        set: function (leg) {
            this.leg = leg;
        },
        enumerable: false,
        configurable: true
    });
    Bird.prototype.fly = function () {
        return true;
    };
    return Bird;
}());
exports.Bird = Bird;
