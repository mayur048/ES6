let s = Symbol("First Symbol");

console.log(typeof s);
console.log(s.toString());

let s2 = Symbol("Test");
let s3 = Symbol("Test");

console.log(s2 === s3);

let s4 = Symbol.for("RegSymbol");
let s5 = Symbol.for("RegSymbol");

console.log(s4 === s5);

//keyfor not working
//console.log(Symbol.keyfor(s4));

let fname = Symbol("First Name");
let person1 = {
    [fname] : "Chandler"
};

console.log(Object.getOwnPropertyNames(person1));
console.log(Object.getOwnPropertySymbols(person1));