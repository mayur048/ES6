"use strict";
var _a;
var s = Symbol("First Symbol");
console.log(typeof s);
console.log(s.toString());
var s2 = Symbol("Test");
var s3 = Symbol("Test");
console.log(s2 === s3);
var s4 = Symbol.for("RegSymbol");
var s5 = Symbol.for("RegSymbol");
console.log(s4 === s5);
//keyfor not working
//console.log(Symbol.keyfor(s4));
var fname = Symbol("First Name");
var person1 = (_a = {},
    _a[fname] = "Chandler",
    _a);
console.log(Object.getOwnPropertyNames(person1));
console.log(Object.getOwnPropertySymbols(person1));
//# sourceMappingURL=Symbols.js.map