// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

// Solution:
function reverseString(str) {
  let reversed = ""; // start with empty string
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; // add characters from end to start
  }
  return reversed;
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"

// Alternative:
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"