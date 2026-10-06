const tutorials = [ 
    "what does this keyword mean?",
    "implementing Blockchain web API",
    "The Test Driven Development Workflow",
]


// expected result

// const formattedTutorials = [
//   "What Does The This Keyword Mean?",
//   "Implementing Blockchain Web API",
//   "The Test Driven Development Workflow",
//   "Understanding Closures In Javascript"
// ];


const titlesInTitleCase = [];

for ( const title of tutorials) {
    const titleCased = title.split("").map(word => word.charAt(0).toUpperCase() + word.slice(1)). join(""); titlesInTitleCase.push(titleCased);
}

console.log(titlesInTitleCase);