"use strict";
// for..of --> iterator method --> symbol iterator
var str = "hello";
var arr = [1, 2, 3];
var num = 5;
var obj = { name: "Chandler" };
console.log("For String -" + typeof str[Symbol.iterator]);
console.log("For Array -" + typeof arr[Symbol.iterator]);
console.log("For Number -" + typeof num[Symbol.iterator]);
console.log("For Object -" + typeof obj[Symbol.iterator]);
//# sourceMappingURL=symbol_iterator.js.map