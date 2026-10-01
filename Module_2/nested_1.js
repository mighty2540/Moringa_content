//Flatiron Diner wants to provide an online reservation system for customers. This system needs to collect and store customer details, confirm reservation information, and display a reservation confirmation message. We'll use nested functions to organize this functionality. 

function makeReservation(){
    console.log("Welcome to Flatiron Diner's dinner reservation page!");

    const customerData = {};
    customerData.firstName = prompt("What is your first name?");
    customerData.lastName = prompt("What is your last name?");
    customerData.partySize = prompt("How many people will be in your party?");
    customerData.reservationDate = prompt("Which date would you like to reserve for?");
    customerData.reservationTime = prompt("Which time would you like to reserve for?");

    function displayReservationDetails(){
        console.log(`${customerData.firstName} ${customerData.lastName} has successfully made a reservation with a party size of ${customerData.partySize} for ${customerData.reservationDate} at ${customerData.reservationTime}!`);
    }

    displayReservationDetails();
}

makeReservation();