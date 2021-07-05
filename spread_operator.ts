let displayColors1 = function(message: string, ...colors: string[]){
    console.log(message);
    //console.log(colors);
    
    for(let i in colors){
        console.log(colors[i]);
    }
}

let message1 = "List of Colors";
let colorArray = ["Orange","Violet","Indigo"];

displayColors1(message1, ...colorArray)

//displayColors1(message,'Red');
//displayColors1(message,'Red','Blue');
//displayColors1(message,'Red','Blue','Green');