//.map takes every item and change it into something else but the original array remains the same

const numbers = [ 1, 2, 3, 4];

const double = numbers.map(number =>{
    return number*  2;
});

console.log(double);