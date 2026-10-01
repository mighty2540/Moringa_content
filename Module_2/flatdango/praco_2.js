function generateReport(){

    function calculateTotal(product,quantity){
        return product * quantity;
    }

    function calculateAverage(total, days){
         return total/days;
    }

    let total = calculateTotal(500, 20);
    let average = calculateAverage(total / 30);


    console.log("This is the total:", total);
    console.log("This is the average:", average);
}

generateReport();