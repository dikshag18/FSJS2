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



