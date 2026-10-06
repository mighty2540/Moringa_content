//A company needs an efficient way for customer support representatives to view key details about each customer, such as their name, age, email, and active status. By providing this information in a structured format, support reps can quickly access the data they need to resolve customer inquiries effectively.

const customer = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    isActive: true,
};

Object.keys(customer).forEach(key => {
    console.log(`${key}: ${customer[key]}`);
});


//Object.keys(customer) - generates an array of the object's keys:["name", "age", "email", isActive]

// forEach loops through the keys array

