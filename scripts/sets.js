"use strict";
var mySet = new Set();
var obj3 = {};
var obj2 = {};
mySet.add("Hello");
mySet.add(1);
mySet.add(obj3);
mySet.add(obj2);
console.log(mySet.size);
var newSet = new Set([1, 2, 3, 4, 4, 4]);
console.log(newSet.size);
var chainSet = new Set().add("hello").add("world");
console.log(chainSet.size);
console.log(newSet.has(5));
console.log(newSet.delete(1));
console.log(newSet.size);
//Weak Set
var mySet1 = new WeakSet();
var key = {};
mySet1.add(key);
console.log(mySet1.has(key));
//key = null;
//# sourceMappingURL=sets.js.map