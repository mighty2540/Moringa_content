// Imagine that you are working as a junior developer for an e-commerce company. You're tasked with creating a function to calculate the final price of a product after applying any discounts. This function can be used throughout the website to display accurate prices to customers.

function calculateFinalPrice(originalPrice, discount) {
  // Function to calculate final price after discount

  // Check if discount is a valid percentage (between 0 and 100)
  if (discount < 0 || discount > 100) {
    console.error("Invalid discount percentage. Please enter a value between 0 and 100.");
    return; // Exit the function if discount is invalid
  }

  // Calculate the amount of discount
  let discountAmount = originalPrice * (discount / 100);

  // Calculate the final price by subtracting the discount
  let finalPrice = originalPrice - discountAmount;

  // Return the final price
  return finalPrice;
}

let productPrice = 100;
let discountPercentage = 15; // 15% discount

let finalPrice = calculateFinalPrice(productPrice, discountPercentage);

console.log("Original price:", productPrice);
console.log("Discount:", discountPercentage + "%");
console.log("Final price:", finalPrice);