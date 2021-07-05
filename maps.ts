let myMap1 = new Map();

myMap1.set("fname","Chandler");
myMap1.set("Age",30);

console.log(myMap1.get("fname"));

let obj4 = {};
let obj5 = {};

myMap1.set(obj4, 10);
myMap1.set(obj5, 20);

console.log(myMap1.get(obj4));
myMap1.delete("fname");
myMap1.clear();

console.log(myMap1.size);
console.log(myMap1.has("fname"));



