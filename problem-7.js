// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

// Solution:
function findEvenNumbers(arr) {
  let evens = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {   // check if divisible by 2
      evens.push(arr[i]);
    }
  }

  return evens;
}

// Test
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(findEvenNumbers([7, 9, 11]));         // []
console.log(findEvenNumbers([10, 20, 33]));       // [10, 20]
