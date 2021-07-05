class Person{
    constructor(name: any){
        this.name = name;
        console.log(this.name + " Constructor");
    }   

    static staticMethod(){
        console.log("Static Method");
    }

    greetPerson(){
        console.log("Hello " + this.name);
    }
}

let p1 = new Person("Chandler");
Person.staticMethod();
p1.greetPerson();


