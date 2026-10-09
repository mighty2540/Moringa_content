const {calculateTotalInterest} = require (`../src/index.js`);

test(`if initialAmount * annualRate * time = calculateTotalInerest`, () =>{
    expect(calculateTotalInterest(1000000, 0.20, 10)).toBe(2000000);
}) ;