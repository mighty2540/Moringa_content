// Define the callback function to check the feedback

function checkFeedback() {
    console.log("checking feedback...");
    // imagine checking the feedback here for errors
}

// Define a function that takes a callback function

function submitFeedback(callback) {
    console.log("submit button clicked");
    callback(); // calls the checkFeedback Function
    console.log("feedback submitted");
}

// call the submitFeedback function with checkFeedback as a callback

submitFeedback(checkFeedback);