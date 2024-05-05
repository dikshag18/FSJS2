const prompt = require('prompt-sync')();

const number = parseInt(prompt("Enter a number:"));

if (!isNaN(number)) {
    console.log(`Multiplication table of ${number}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
} else {
    console.log("Please enter a valid number.");
}
