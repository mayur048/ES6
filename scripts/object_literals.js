"use strict";
var _a;
var firstname = "Chandler";
var lastname = "Bing";
var ln = "last name";
var person = (_a = {
        firstname: firstname,
        lastname: lastname,
        "first name": "Joey"
    },
    _a[ln] = "Tribbani",
    _a);
function creatPerson(firstname, lastname, age) {
    var fullname = firstname + " " + lastname;
    return {
        firstname: firstname,
        lastname: lastname,
        fullname: fullname,
        isSenior: function () {
            return age > 60;
        }
    };
}
var p = creatPerson("Ross", "Geller", 62);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());
console.log(person["first name"]);
console.log(person);
//console.log(person.lastname);
//# sourceMappingURL=object_literals.js.map