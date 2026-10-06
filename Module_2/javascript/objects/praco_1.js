//object iteration  refers to accessing and manipulating data inside of an object.

//object iteration refers to traversing through the properties of an object to access or manipulate its key-value pairs.

// there is two ways of accessing objects. destructive and non-destructive way.

// destructive way the original object is modified

const inventory = {
    apples: 10,
    oranges: 5,
};

for ( let key in inventory) {
    inventory[key] -=  2;
};

console.log(inventory);


//non destructive the object remains the same and a new structure is formed