// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.

// solution:

function sumArray(arr) {
  let sum = 0; // start with 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // add each element to sum
  }

  return sum;
}

// Test
console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([5, 10, 15]));  // 30
console.log(sumArray([]));           // 0
