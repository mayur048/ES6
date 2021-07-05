let displayColors = function(message: string, ...colors: string[]){
    console.log(message);
    console.log(colors);
    console.log(arguments.length)
    for(let i in colors){
        console.log(colors[i]);
    }
}

let message = "List of Colors";

displayColors(message,'Red');
displayColors(message,'Red','Blue');
displayColors(message,'Red','Blue','Green');