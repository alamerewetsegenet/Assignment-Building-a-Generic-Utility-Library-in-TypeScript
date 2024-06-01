"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyTestClass = void 0;
var MyTestClass = /** @class */ (function () {
    function MyTestClass(property1, property2) {
        this._property1 = property1;
        this._property2 = property2;
    }
    MyTestClass.prototype.method1 = function () {
        console.log("Method 1 called");
    };
    MyTestClass.prototype.method2 = function () {
        console.log("Method 2 called");
    };
    Object.defineProperty(MyTestClass.prototype, "property1", {
        get: function () {
            return this._property1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyTestClass.prototype, "property2", {
        get: function () {
            return this._property2;
        },
        enumerable: false,
        configurable: true
    });
    return MyTestClass;
}());
exports.MyTestClass = MyTestClass;
