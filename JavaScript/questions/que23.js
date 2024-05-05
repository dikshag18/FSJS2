const prompt = require('prompt-sync')();

function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  const userInput = prompt("Enter a number: ");
  const isPrimeNumber = isPrime(userInput);
  
  if (isPrimeNumber) {
    console.log(`${userInput} is a prime number.`);
  } else {
    console.log(`${userInput} is not a prime number.`);
  }