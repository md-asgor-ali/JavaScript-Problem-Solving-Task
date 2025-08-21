// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.

// solution:

function factorial(n) {
    let result = 1; // initialize result
    for (let i = 1; i <= n; i++) {
        result = result * i; // multiply result by each number from 1 to n
    }
    return result;
}

// Example usage:
const input = 5;
const output = factorial(input);
console.log(output); // 120
