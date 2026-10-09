// Rest syntax

// Function to calculate the average score


// Function to calculate the average score
function calculateAverage(...scores) {
  // If no scores are provided, return 0 to avoid division by zero
//if (scores.length === 0) return 0;

  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

// Example usage with varying numbers of feedback scores
console.log(calculateAverage(4, 5, 3)); // Output: 4 (average of 4, 5, 3)
console.log(calculateAverage(5, 5, 5, 4)); // Output: 4.75 (average of 5, 5, 5, 4)
console.log(calculateAverage()); // Output: 0 (no scores provided)

