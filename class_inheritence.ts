class Person1{
    constructor(name: string){
        console.log(name + " Person Consrtuctor");
    }
    getid(){
        return 10;
    }
}

class Employee extends Person1{
    constructor(name){
        super(name);
        console.log(name + " Employee Constructor");
    }
    getid(){
        return super.getid();
    }
}

let e = new Employee("Chandler");
console.log(e.getid());