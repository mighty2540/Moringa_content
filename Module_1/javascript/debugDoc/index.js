function divide(a, b){
    console.log("a:", a);// log the value of a
    console.log("b:", b); // log the value of b

    if (b === 0){
        console.error("Division by zero error");
        return null;
    }
    return a / b;
}

let result = divide(10, 0);
console.log("result:", result);