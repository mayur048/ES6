// for..of --> iterator method --> symbol iterator

let str = "hello";
let arr = [1,2,3];
let num = 5;
let obj ={name:"Chandler"};

console.log("For String -" + typeof str[Symbol.iterator]);
console.log("For Array -" + typeof arr[Symbol.iterator]);
console.log("For Number -" + typeof num[Symbol.iterator]);
console.log("For Object -" + typeof obj[Symbol.iterator]);