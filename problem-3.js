// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// Solution:
function isPalindrome(str) {
  // convert to lowercase (to handle "Madam" as well)
  str = str.toLowerCase();

  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false; // mismatch found
    }
    start++;
    end--;
  }
  return true; // all matched
}

// Test
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("Racecar")); // true

// Alternative:
function isPalindrome(str) {
  str = str.toLowerCase();
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false