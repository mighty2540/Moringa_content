// block scope

function calculateFinalPrice(price, location){

    let finalPrice = price; // function-scoped variable

    if (location === "US") {
        const taxRate = 0.07; // Block-scoped to this "if" block
    } else if (location === "EU") {
        const taxRate = 0.2; // Blocked-scoped to "else if" block
    } else{
        const taxRate = 0.15 // blocked- scoped to  else
    }

    return finalPrice;
}

console.log("Price for US:", calculateFinalPrice(100, "US"));
console.log("price for EU:", calculateFinalPrice(100, "EU"));
console.log("Price for others:", calculateFinalPrice(100, "IN"));
