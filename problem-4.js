// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.

// Solution:
function findMax(arr) {
  if (arr.length === 0) return null; // handle empty array case

  let max = arr[0]; // start by assuming the first number is the largest

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // update max if a bigger number is found
    }
  }

  return max;
}

// Test
console.log(findMax([5, 1, 9, 3]));   // 9
console.log(findMax([10, 20, 30]));   // 30
console.log(findMax([-5, -2, -10]));  // -2
console.log(findMax([]));             // null
