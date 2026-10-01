// For this practice, you role is a junior developer working for a smart home technology company. Your task is to implement features that manage and control various smart home devices based on user inputs and sensor data. This involves checking conditions and iterating through device settings.

let temperature = 22;
let montionDetected = true;
let lightSatus;
let time0fDay = " afternoon";


if (temperature > 25) {
    console.log("Turning on the air conditioning");
}

if (montionDetected) {
    console.log( "Turning on the lights")
}  else {
    console.log ("Turning off the lights");
}


if( time0fDay === morning) {
    console.log( lightSatus = "off");
} else if (time0fDay === afternoon){
    console.log( lightSatus =  "dim");
} else if (time0fDay === evening) {
    console.log(lightSatus = "bright");
} else {
    console.log( lightSatus === "OfF");
}

console.log("lightSatus:", lightSatus);