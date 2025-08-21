// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

// solution:

function removeDuplicates(arr) {
  let unique = []; // new array to hold unique values

  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) { // only push if not already inside
      unique.push(arr[i]);
    }
  }

  return unique;
}

// Test
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
console.log(removeDuplicates([5, 5, 6, 7, 7, 8])); // [5, 6, 7, 8]
console.log(removeDuplicates([]));                 // []
