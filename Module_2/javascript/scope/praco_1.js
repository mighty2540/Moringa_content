// Block scope praco_1 - praco_3.js

// variables declared with let and const inside the block can only be accessed within the block.

// ONLY BE ACCESSED WITHIN THE BLOCK

if (true){
    let blockVar = "I'm a block";
console.log(blockVar);
}

// console.log(blockVar); when declared outside the block it give this error : ReferenceError: blockVar is not defined

