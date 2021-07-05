let firstname = "Chandler";
let lastname = "Bing";
let ln = "last name";

let person={
    firstname,
    lastname,
    "first name": "Joey",
    [ln]: "Tribbani",
}

function creatPerson(firstname: string, lastname: string, age: number){
    let fullname = firstname + " " + lastname;
    return{
        firstname, 
        lastname, 
        fullname, 
        isSenior(){
            return age>60;
        }
    }
}

let p = creatPerson("Ross", "Geller", 62);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());

console.log(person["first name"]);
console.log(person);
//console.log(person.lastname);