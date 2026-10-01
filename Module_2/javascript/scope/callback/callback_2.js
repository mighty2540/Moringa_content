// make a resevervation 

// this code only works in the browser

// function makeReservation(displayReservationDetails){
//     alert("Welcome to Flatiron Diner's dinner reservation page!");

//     const customerData = {};
//     customerData.firstName = prompt("What is your first name?");
//     customerData.lastName = prompt("What is your last name?");
//     customerData.partySize = prompt("How many people will be in your party?");
//     customerData.reservationDate = prompt("Which date would you like to reserve for?");
//     customerData.reservationTime = prompt("Which time would you like to reserve for?");

//     displayReservationDetails(customerData);
// }

// makeReservation(function(customerData){alert(`${customerData.firstName} ${customerData.lastName} has successfully made a reservation with a party size of ${customerData.partySize} for ${customerData.reservationDate} at ${customerData.reservationTime}!`)});


// rewrite it for nodejs

function makeReservation(displayReservationDetails){
    const customerData = {
        firstName: "John",
        lastName:"Doe",
        partysize: 4,
        reservationDate: "October 10",
        reservationTime: "7.00pm"
    };

    displayReservationDetails(customerData);
}

makeReservation(function(customerData){
    console.log(`${customerData.firstName} ${customerData.lastName} has successfully made a reservation with a party size ${customerData.partysize} for${customerData.reservationDate} at ${customerData.reservationTime}`)
})