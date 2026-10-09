const {calculateTotalInterest} = require ("../src/utils");

describe("calculateTotalInterest", () => {
    it("calculate the total ineterst for a list of investments", () =>{
        const investments = [ {
            amount : 1000,
            rate: 5,
            years: 2
        },
    {
        amount: 2000, 
        rate:3,
        years: 4
    }];
    const totalInterest = calculateTotalInterest(investments);

    expect(totalInterest).toBe(340);
    })
})


// describe() doesn't normally perform the actual test.

//It creates a group/container for related tests: