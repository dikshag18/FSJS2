
// Get user input for age
const age = parseInt(prompt("Enter your age:"));

// Check if the user is 18 or older
if (age >= 18) {
    console.log("You are old enough to drive.");
} else {
    // Calculate the number of years needed to turn 18
    const yearsToWait = 18 - age;
    if (yearsToWait === 1) {
        console.log("You are not old enough to drive. Please wait 1 year to turn 18.");
    } else {
        console.log(`You are not old enough to drive. Please wait ${yearsToWait} years to turn 18.`);
    }
}


