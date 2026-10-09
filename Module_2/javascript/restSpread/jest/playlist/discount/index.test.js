const {finalPrice} = require (`./index.js`);

test(`originalPrice - discount = finalPrice`, () =>{
    expect(finalPrice(1500, 0.20)).toBe(1200);
});