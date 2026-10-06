// for loop - used to iterate when number of time is predetermined

//syntax

//for (initialization; condtion; procedure )

// const fruits = ["Apple", "Banana", "Kiwi", "WaterMelon"];

// for (i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }







// const car = ["Subaru", "Toyota", "Mazda", "Hyundai"];

// for(i = 0; i < car.length; i++){
//     console.log(car[4]);
// }









//while loop - used to itereate when number of iteration is not known. iterate until condition is met

// const menu = [ "Kuku", "Nyamachoma", "Ugali", "Matumbo"];

// let i = 0;

// while(i < menu.length){
//     console.log(menu[i]);
//     i++;
// }







//for.Each - goes over each element and produces a value


// const fruits = [ "Mango", "Banana", "Apple", "Melon"];

// const prodFruits = fruits.forEach(fruit =>{
//     console.log(fruit);
// })




// map it changes a value and gives it a new value


// const numbers = [ 1, 2, 3, 4 , 5];

// const double = numbers.map(number =>{
//     return number * 2;
// });

// console.log(double);







// filter 

// const numbers = [ 10, 20, 70, 35, 55, 85, 15];

// const numGreat = numbers.filter(number =>{
//     return number > 50;
// })

// console.log(numGreat);






const numbers = [ 10, 20, 30, 40, 50];

const mySum = numbers.reduce((sum, number)=>{
    return sum + number;
},0);

console.log(mySum);

// sum = 0;
// number = 5

//return sum + number

// 0  10 30 60 100 150


