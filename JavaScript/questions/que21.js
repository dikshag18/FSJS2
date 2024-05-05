const countries = ['India', 'Bangladesh', 'China', 'Ethiopia', 'Nepal'];

const countryToCheck = 'Ethiopia';

// Check if 'Ethiopia' exists in the array
if (countries.includes(countryToCheck)) {
    console.log(countryToCheck.toUpperCase());
} else {
    // If it does not exist, add it to the countries list
    countries.push(countryToCheck);
    console.log(`${countryToCheck} added to the countries list.`);
}

console.log("Updated Countries List:", countries);
