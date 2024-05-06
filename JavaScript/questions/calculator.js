const prompt = require('prompt-sync')();


//  addition
function add(a, b) {
    return a + b;
}

//  subtraction
function subtract(a, b) {
    return a - b;
}

//  multiplication
function multiply(a, b) {
    return a * b;
}

//  division
function divide(a, b) {
    // Check if divisor is zero
    if (b === 0) {
        return "Error: Cannot divide by zero!";
    }
    return a / b;
}

// calculations 
function calculate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return "Invalid operator";
    }
}

let num1 = parseInt(prompt("Enter a number:"));
let num2 = parseInt(prompt("Enter a number:"));

console.log("Addition:", calculate('+', num1, num2));
console.log("Subtraction:", calculate('-', num1, num2));
console.log("Multiplication:", calculate('*', num1, num2));
console.log("Division:", calculate('/', num1, num2));
