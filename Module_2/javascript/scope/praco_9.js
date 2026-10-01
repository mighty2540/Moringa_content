// scope chain => The JavaScript engine will first look in the innermost scope where a variable is referenced and will move outward until it finds the variable or reaches the global scope.

    let name = "Mighty";

function outer() {
    let age = 25;

    function inner() {
        let country = "Kenya";

        console.log(country);
        console.log(age);
        console.log(name);
    }

    inner();
}

outer();