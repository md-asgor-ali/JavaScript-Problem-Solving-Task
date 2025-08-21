// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

// Solution:
function capitalizeFirstLetter(str) {
    let words = str.split(" "); // split string by spaces
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 0) {
            words[i] = word[0].toUpperCase() + word.substring(1);
        }
    }
    return words.join(" ");
}

// Example usage:
let input = "hello world";
let output = capitalizeFirstLetter(input);
console.log(output); // "Hello World"
