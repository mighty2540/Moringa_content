 const {calculateTotal} = require(`./index.js`);
 
test("if price * quantity = calculateTotal",() => {
    expect(calculateTotal(250, 4)).toBe(1000);
})