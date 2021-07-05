import {fname, lname, obj, greet, GreetMessage} from './moduleB.js'

obj.name = "Ross";

console.log(obj.name);
console.log(` ${fname} ${lname}`);

greet("Hello world");

let gm = new GreetMessage();
gm.greet();