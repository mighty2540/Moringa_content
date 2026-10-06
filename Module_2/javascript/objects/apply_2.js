const fruits = {
    banana: "sweet",
    orange: "sour",
    watermelon: "juicy",
};

Object.keys(fruits).forEach(key => {
    console.log(` ${key}: ${fruits[key]}`);
});