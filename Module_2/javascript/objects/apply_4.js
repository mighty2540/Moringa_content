// You’re building a real estate management tool for PropertyPro, a company that manages property listings and client data. Each property listing includes details such as the address, price, and amenities, all stored as key-value pairs in an object. To display these details on a dashboard, you’ll learn how to iterate over object properties dynamically, select appropriate methods for accessing and transforming data, and handle nested structures efficiently. These techniques will equip you to manage structured data in real-world applications with confidence


const address = {
    street1: "11 Broadway",
    steet2: "2nd Floor",
    city: "New York",
    state: "NY",
    zipCode: "10004"
}

// Object.keys(address).forEach(key=>{
//     console.log(`${key} : ${address[key]}`);
// });

// using for in Method

for (const key in address) {
    console.log(`${key} : ${address[key]}`);
}