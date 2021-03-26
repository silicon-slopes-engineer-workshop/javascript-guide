"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Goose = void 0;
var Bird_1 = require("./Bird");
var Goose = /** @class */ (function (_super) {
    __extends(Goose, _super);
    // constructor
    function Goose(wing, leg, mood) {
        var _this = _super.call(this, wing, leg) || this;
        _this._mood = mood;
        return _this;
    }
    Object.defineProperty(Goose.prototype, "wing", {
        get: function () {
            return this.wing;
        },
        set: function (wing) {
            this.wing = wing;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Goose.prototype, "leg", {
        get: function () {
            return this.leg;
        },
        set: function (leg) {
            this.leg = leg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Goose.prototype, "mood", {
        get: function () {
            return this._mood;
        },
        set: function (mood) {
            this._mood = mood;
        },
        enumerable: false,
        configurable: true
    });
    Goose.prototype.fly = function () {
        return false;
    };
    return Goose;
}(Bird_1.Bird));
exports.Goose = Goose;
