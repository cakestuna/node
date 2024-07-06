// Import the crypto module
const crypto = require('crypto');

// Get commands using process.argv
const args = process.argv.slice(2);
const operation = args[0];
const numbers = args.slice(1).map(Number);

// Function to generate a random number of a given length
function generateRandomNumber(length) {
  return crypto.randomBytes(length).toString('hex');
}

// Function to perform calculations
function performCalculation(operation, numbers) {
  switch (operation) {
    case 'add':
      if (numbers.length < 2) {
        console.log("Please provide at least two numbers for addition.");
        break;
      }
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      console.log(`Result: ${sum}`);
      break;
    case 'sub':
      if (numbers.length !== 2) {
        console.log("Please provide exactly two numbers for subtraction.");
        break;
      }
      const difference = numbers[0] - numbers[1];
      console.log(`Result: ${difference}`);
      break;
    case 'mult':
      if (numbers.length < 2) {
        console.log("Please provide at least two numbers for multiplication.");
        break;
      }
      const product = numbers.reduce((acc, num) => acc * num, 1);
      console.log(`Result: ${product}`);
      break;
    case 'divide':
      if (numbers.length !== 2) {
        console.log("Please provide exactly two numbers for division.");
        break;
      }
      if (numbers[1] === 0) {
        console.log("Division by zero is not allowed.");
        break;
      }
      const quotient = numbers[0] / numbers[1];
      console.log(`Result: ${quotient}`);
      break;
    case 'sin':
      if (numbers.length !== 1) {
        console.log("Please provide exactly one number for sine.");
        break;
      }
      const sinResult = Math.sin(numbers[0]);
      console.log(`Result: ${sinResult}`);
      break;
    case 'cos':
      if (numbers.length !== 1) {
        console.log("Please provide exactly one number for cosine.");
        break;
      }
      const cosResult = Math.cos(numbers[0]);
      console.log(`Result: ${cosResult}`);
      break;
    case 'tan':
      if (numbers.length !== 1) {
        console.log("Please provide exactly one number for tangent.");
        break;
      }
      const tanResult = Math.tan(numbers[0]);
      console.log(`Result: ${tanResult}`);
      break;
    case 'random':
      if (numbers.length !== 1) {
        console.log("Provide length for random number generation.");
        break;
      }
      const length = numbers[0];
      const randomNumber = generateRandomNumber(length);
      console.log(`Random Number: ${randomNumber}`);
      break;
    default:
      console.log("Invalid operation");
  }
}

// Perform the calculation based on the provided operation and numbers
performCalculation(operation, numbers);
