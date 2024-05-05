const prompt = require('prompt-sync')();

const input = parseInt(prompt("Enter a number:"));

if (!isNaN(input) && input > 0) {
    for (let i = 1; i <= input; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row);
    }
} else {
    console.log("Please enter a valid positive number.");
}


const inpt = parseInt(prompt("Enter a number:"));

if (!isNaN(inpt) && input > 0) {
    for (let i = 1; i <= inpt; i++) {
        let row = '';
        for (let j = 1; j <= inpt; j++) {
            row += '*';
        }
        console.log(row);
    }
} else {
    console.log("Please enter a valid positive number.");
}


const input1 = parseInt(prompt("Enter a number:"));

if (!isNaN(input1) && input1 > 0) {
    for (let i = 1; i <= input1; i++) {
        let row = '';
        // Print spaces
        for (let j = 1; j <= input1 - i; j++) {
            row += ' ';
        }
        // Print '*' characters
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += '*';
        }
        console.log(row);
    }
} else {
    console.log("Please enter a valid positive number.");
}
