let fname = "Chandler";
let lname = "Bing";

let obj = {
    name: "Joey"
}

export function greet(message){
    console.log(message);
}

export class GreetMessage{
    constructor(){
        console.log("Constructor");
    }
    greet(){
        console.log("Greet Function");
    }
}

//console.log("Module B loaded");

export {fname,lname, obj}