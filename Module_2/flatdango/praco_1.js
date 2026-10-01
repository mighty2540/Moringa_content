// suppose you have a function that calculate a sale report

function salesReport(){


    // another function that calculate total

    function calculateTotal(price, quantity){
        return price * quantity;
    }

    function calculateAverage(total, days){
        return total/days;
    }

    let total = calculateTotal(500,10);
    let average = calculateAverage(total, 5);

    console.log("Total:", total);
    console.log("avearage:", average);

}

salesReport();
