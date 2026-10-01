// lexical scope => the scope of variable is determined by its location within the source code

function outerFunction(){
    let outerVar = "I am outside";

    function innerFunction(){
        console.log(outerVar);
    }

    innerFunction();
}

outerFunction();