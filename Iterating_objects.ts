let person2 = {
    fname: "Chnadler",
    lname: "Bing"
};

// for Iterating Objects
// person2[Symbol.iterator] = function*(){
//     let properties = Object.keys(person2);
//     let count = 0;
//     let isDone = false;
//     let next = () => {
//         if(count>=properties.length){
//             isDone=true;
//         }
//         return{ done: isDone, value: this[properties[count++]]};
//     }
//     return{next};
// };

//for iterating objects using Generator
person2[Symbol.iterator] = function*(){
    let properties = Object.keys(person2);
    for(let t in properties){
        yield this[t];
    }
};

for(let p of person2){
    console.log(p);
}

