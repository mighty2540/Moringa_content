// filter give the only element that mets a certain condition

const numbers = [1, 2, 3, 4 , 5 , 6];

const evenNumbers = numbers.filter( number => {
    return number % 2 === 0;
});

console.log(evenNumbers);