const prompt = require('prompt-sync')();

let month = parseInt(prompt("Enter the month (1-12):"));
let year = parseInt(prompt("Enter the year:"));

let numDays;

if (month >= 1 && month <= 12 && Number.isInteger(year)) {
    if (month === 2) {
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            numDays = 29;
        } else {
            numDays = 28;
        }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        numDays = 30;
    } else {
        numDays = 31;
    }

    console.log(`The month ${month} has ${numDays} days.`);
} else {
    console.log("Please enter a valid month (1-12) and year.");
}
