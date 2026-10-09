const calculateTotal = require("./cart");

test("calculates the total price", () => {
    expect(calculateTotal(500,3)).toBe(1500);

});