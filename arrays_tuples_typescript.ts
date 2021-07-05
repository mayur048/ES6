let strArr1: string[] = ["hello", "world"];
let strArr2: Array<string> = ["hello", "world"];

let anyarr: any[] = ["hello", 10, true];

let myTuple: [string, number] = ["hi", 10];

console.log(myTuple);
console.log(myTuple[0]);
console.log(myTuple[1]);
myTuple[2] = 100;

console.log(myTuple[2]);
