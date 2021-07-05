"use strict";
var myset = Object.create(null);
myset.id = 0;
if (myset.id) {
    console.log("id Exists");
}
var myMap = Object.create(null);
myMap.name = " Chandler";
var val = myMap.name;
console.log(val);
myMap[100] = "Hello";
console.log(myMap["100"]);
var ob1 = {};
var ob2 = {};
myMap[ob1] = "World";
console.log(myMap[ob2]);
console.log(ob1.toString());
console.log(ob2.toString());
//# sourceMappingURL=sets_&_maps.js.map