//for Arrays
// var numbers = [2,4,6,8];
// numbers.forEach(arrayFunction);
// function arrayFunction(element,index,array){
//     console.log("arr["+index+"]= " +element);
// };

//for Maps
// var myMap2 = new Map([
//     ["fname","Chandler"],
//     ["lname","Bing"];
// ]);
// myMap2.forEach(mapFunction);
// function mapFunction(value,key,callingMap){
//     console.log(key+" "+value);
//     console.log(myMap2 === callingMap);
// }

// for Sets
var mySet2 = new Set([1,2,3]);
mySet2.forEach(setFunction);
function setFunction(value,key,callingSet){
    console.log(key+" "+value);
    console.log(mySet2 === callingSet);
}