const student = {
    name: "Omondi Timon",
    course: "SFDT-19",
    age: 23,
    feeStatus: "pending"
};

for (let key in student){
    console.log(`${key}: ${student[key]}` );
}