const tutorials = [
  "what does the this keyword mean?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "understanding closures in javascript"
];

const titlesInTitleCase = tutorials.map(title => 
  title
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
);

console.log(titlesInTitleCase);