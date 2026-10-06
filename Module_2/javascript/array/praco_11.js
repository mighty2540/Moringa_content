// break immediately stops the entire loop
const numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 30) {
        break;
    }

    console.log(numbers[i]);
}

// logic behind this code 

//10 => print
//20 => print
//30 => break => STOP

// it never reaches 4 or 5