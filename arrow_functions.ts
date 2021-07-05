var getRegularvalue = function(){
    return 10;
}

console.log(getRegularvalue());

const getArrowvalue = (m: number,bonus: number) => m*10+bonus;

console.log(getArrowvalue(5,50));
console.log(typeof getArrowvalue);