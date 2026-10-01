//check callback_1.js understand

function callFeedBack(){
    console.log("Checking the Feedback...");
}

// mainfucntion that accepts callback as an argument

function submitFeedBack(callback){
    console.log("clicked submit button");
    callback();
    console.log("Feedback submitted!");
}

submitFeedBack(callFeedBack);