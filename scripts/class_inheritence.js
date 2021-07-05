"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person1 = /** @class */ (function () {
    function Person1(name) {
        console.log(name + " Person Consrtuctor");
    }
    Person1.prototype.getid = function () {
        return 10;
    };
    return Person1;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name) {
        var _this = _super.call(this, name) || this;
        console.log(name + " Employee Constructor");
        return _this;
    }
    Employee.prototype.getid = function () {
        return _super.prototype.getid.call(this);
    };
    return Employee;
}(Person1));
var e = new Employee("Chandler");
console.log(e.getid());
//# sourceMappingURL=class_inheritence.js.map