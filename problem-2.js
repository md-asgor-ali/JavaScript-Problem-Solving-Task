/**
 * ============= JavaScript Problem-Solving Task ==========
 */

// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

// solution:

function countVowels(str) {
  let vowels = "aeiou";     // define vowel characters
  let count = 0;

  str = str.toLowerCase();  // make it lowercase so "A" and "a" are same

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

// Test
console.log(countVowels("programming")); // 3
console.log(countVowels("HELLO"));       // 2
console.log(countVowels("sky"));         // 0
