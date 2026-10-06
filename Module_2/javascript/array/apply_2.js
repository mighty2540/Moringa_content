// Here’s a sample users array that contains objects representing individual users, each with properties like favoriteColor, favoriteAnimal, and personalQuote. Using JavaScript’s array methods, we’ll:

// Find the first user with a specific favorite color.
// Filter users who share the same favorite color.
// Transform users' personal quotes.
// Aggregate the total length of all users’ personal quotes.


const users = [
    {
        firstName: "Nicky",
        lastName: "Morgan",
        favoriteColor: "Blue",
        favoriteAnimal: "Jaguar",
        personalQuote: "You're never too old to learn something new",
    },

    {
        firstName: "Tracy",
        lastName: "Lum",
        favoriteColor: "Yellow",
        favoriteAnimal:"Penguin",
        personalQuote: "I just got lost in thought- it was unfamiliar territory",
    },

    {
        firstName: "Josh",
        lastName: "Rowley",
        favoriteColor: "Blue",
        favoriteAnimal: "Penguin",
        personalQuote: "Always remember you're unique, just like everyone else",
    },

    {
        firstName: "Kate",
        lastName: "Travers",
        favoriteColor: "Red",
        favoriteAnimal: "Jagaur",
        personalQuote: "Behind every great man is a woman rolling her eyes",
    },

      {
    firstName: "Avidor",
    lastName: "Turkewitz",
    favoriteColor: "Blue",
    favoriteAnimal: "Penguin",
    personalQuote: "You don’t have to see the whole staircase, just take the first step",
  },

  {
    firstName: "Drew",
    lastName: "Price",
    favoriteColor: "Yellow",
    favoriteAnimal: "Elephant",
    personalQuote: "Failure is not the opposite of success: it’s part of success",
  },
];


// finding a single element

const blueUser = users.find(user => user.favoriteColor === "Blue");// retrieves the first user with favouriteColor as "Blue"

//console.log (blueUser);


const blueLovers = users.filter(user => user.favoriteColor === "Blue");// creates a new array of users with favouritecole as blue

//console.log(blueLovers);


// Transforming Elements
const quoteWithExclamation = users.map( user  => `${user.personalQuote}!`);

//console.log(quoteWithExclamation); // Adds an exclamation point to each user's personal quote


// aggregating values

const totalQuoteLength = users.reduce((total, user)=> user.personalQuote.length, 0);

console.log(totalQuoteLength);




























// const favAnimal = users.filter( user => user.favoriteAnimal === "Penguin");

// console.log(favAnimal);


const userPengu = users.find ( user =>
    user.favoriteAnimal === "Penguin");

    console.log(userPengu);
