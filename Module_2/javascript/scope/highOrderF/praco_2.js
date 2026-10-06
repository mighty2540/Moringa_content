// high order function -Argument

function fun(){
    console.log("I Am Having Fun!");
}

function havingFun(action){ // havingFun is a high order function because it takes another function fun as an argument
    action();
}

havingFun(fun);


