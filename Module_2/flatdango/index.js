function outerFunction(){

    function innerFunction(){
        console.log("I'm inside");
    }

    innerFunction();
}

outerFunction();