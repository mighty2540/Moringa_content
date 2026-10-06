// non destructive object - the original remains unchanged while a new structure is formed

const inventory = {
    apples : 10,
    oranges : 5,
};

const updateInventory = Object.keys(inventory).reduce((acc, key) => {
    acc[key] = inventory[key] -2;

    return acc;
}, {});

console.log(updateInventory);


console.log(inventory);