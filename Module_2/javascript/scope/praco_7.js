// Global scope => variables are declared outside of function and block. This can be accessed from anywhere in the code.

// example

let name = "Mighty";

function greet(){
     console.log("Hello " + name); // can be accessed inside the function/block
}
greet();
console.log("Hello " + name); // can also be accessed outside the function/bock