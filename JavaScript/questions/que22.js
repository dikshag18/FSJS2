const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
ages.sort((a, b) => a - b);

// Find the min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Find the median age
let medianAge;
if (ages.length % 2 === 0) {
    medianAge = (ages[Math.floor(ages.length / 2) - 1] + ages[Math.floor(ages.length / 2)]) / 2;
} else {
    medianAge = ages[Math.floor(ages.length / 2)];
}

// Find the average age
const sumAges = ages.reduce((acc, age) => acc + age, 0);
const averageAge = sumAges / ages.length;

// Find the range of ages
const range = maxAge - minAge;

// Compare the value of (min - average) and (max - average), use abs() method
const minToAverage = Math.abs(minAge - averageAge);
const maxToAverage = Math.abs(maxAge - averageAge);

console.log("Sorted Ages:", ages);
console.log("Min Age:", minAge);
console.log("Max Age:", maxAge);
console.log("Median Age:", medianAge);
console.log("Average Age:", averageAge);
console.log("Range of Ages:", range);
console.log("Absolute difference between Min and Average:", minToAverage);
console.log("Absolute difference between Max and Average:", maxToAverage);
