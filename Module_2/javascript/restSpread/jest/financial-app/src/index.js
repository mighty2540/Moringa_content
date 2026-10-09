// my own financial app calculation
function calculateTotalInterest(intialAmount, annualInRate,numOfYears){
    let interest = intialAmount *annualInRate*numOfYears;

    return interest;
}

module.exports = {calculateTotalInterest};