// function calculateTotalInterest(investments) {
//   let totalInterest = 0;

//   for (const investment of investments) {
//     totalInterest += investment.amount * (investment.rate / 100) * investment.years;
//   }
//   return totalInterest;
// }
// module.exports = { calculateTotalInterest };

// refactor - refine the code

function calculateTotalInterest(investments) {
  return investments.reduce((total, investment) => 
    total + investment.amount * (investment.rate / 100) * investment.years, 0);
}

module.exports = { calculateTotalInterest };