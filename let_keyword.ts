function greetPerson1(name: string){
    let greet;
    if(name === "Chandler"){
        greet = "Hi Chandler";
    }else{
        greet = "Hi there";
    }
    console.log(greet);
}

greetPerson1("Chandler");

var a = 1;
var b = 2;
if (a === 1){
    var a = 10;
    let b = 20;
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);