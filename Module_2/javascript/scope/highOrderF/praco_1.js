// one way a function qualifies as a higher-order function is by accepting another function as an argument

// example

function greet(name){  // calback function
    console.log(`Hello ${name}`);
}

function executingFunction(callback){ // high order function
    callback("Shiro");
}

executingFunction(greet); // accepting another function as an argument




// explanation of the high order function


// function executingFunction(callback){
//     callback("Shiro");
// }

// This function does not know what action it will perform.

// It only says:

// "Give me a function, and I will run it with 'Shiro'."





















// 

