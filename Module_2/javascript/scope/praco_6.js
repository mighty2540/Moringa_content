// function scope

function mySum(){
    let quantity = 50;
    let price = 20;

    let total = quantity*price;

    console.log(total);
}

mySum();
    //console.log(total); => ReferenceError: total is not defined
