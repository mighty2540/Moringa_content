// Create a function that calculates the total interest earned over a specified number of years. This practice will help you understand how to define and use functions to perform calculations based on multiple inputs.

function calculateInterest (principal, rate , year){
    let calculateInterest = principal*rate*year;
    return calculateInterest;
}

console.log("The interest earned :", calculateInterest(100000, 0.10 , 5));