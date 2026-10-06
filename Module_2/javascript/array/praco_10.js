// reduce - Takes all the element and reduce them down to one final value

const numbers = [10, 20, 30, 40];

const total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(total);

// logic behind this code

// sum = 0;
// number = 5

//return sum + number

// 0  10 30 60 100 150