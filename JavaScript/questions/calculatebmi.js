function calculateBMI(weight, height) {
    return weight / (height * height);
}

function weightStatus(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// Example usage:
const weight = 68; // in kilograms
const height = 1.75; // in meters

const bmi = calculateBMI(weight, height);
const status = weightStatus(bmi);

console.log(`BMI: ${bmi.toFixed(2)}`);
console.log(`Weight Status: ${status}`);
