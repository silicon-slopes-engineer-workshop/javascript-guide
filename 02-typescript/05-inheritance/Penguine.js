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
exports.Penguine = void 0;
var Bird_1 = require("./Bird");
var Penguine = /** @class */ (function (_super) {
    __extends(Penguine, _super);
    function Penguine(wing, leg) {
        return _super.call(this, wing, leg) || this;
    }
    Penguine.prototype.fly = function () {
        return false;
    };
    return Penguine;
}(Bird_1.Bird));
exports.Penguine = Penguine;
