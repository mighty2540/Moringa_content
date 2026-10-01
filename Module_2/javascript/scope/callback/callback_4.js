function sayGoodbye(){
    console.log("GoodBye");
}

function greet (callback){
    console.log("Goodbye Timothy");
    callback();
    console.log("Have a nyc trip");
}

greet(sayGoodbye);