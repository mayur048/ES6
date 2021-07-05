let mySet = new Set();
let obj3 = {};
let obj2 = {};


mySet.add("Hello");
mySet.add(1);
mySet.add(obj3);
mySet.add(obj2);
console.log(mySet.size);

let newSet = new Set([1,2,3,4,4,4]);
console.log(newSet.size);

let chainSet = new Set().add("hello").add("world");
console.log(chainSet.size);

console.log(newSet.has(5));
console.log(newSet.delete(1));
console.log(newSet.size);

//Weak Set
let mySet1 = new WeakSet();
let key = {};
mySet1.add(key);
console.log(mySet1.has(key));
//key = null;





