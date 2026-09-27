
// Javascript calculator that stores calculation history.

const calculationHistory = [];

// input validation
function isValidInput(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return false;
  }
  if (isNaN(num1) || isNaN(num2)) {
    return false;
  }
  return true;
}

// adds culculations to history array
function addToHistory(num1, operator, num2, result) {
  const entry = {
    operands: [num1, num2],
    operator: operator,
    result: result
  };
  calculationHistory.push(entry);
}
//function to add two numbers
function addition(num1, num2) {
  if (!isValidInput(num1, num2)) {
    return "Invalid input: both values must be numbers.";
  }
  const result = num1 + num2;
  addToHistory(num1, "+", num2, result);
  return result;
}
//function to subtract two numbers
function subtraction(num1, num2) {
  if (!isValidInput(num1, num2)) {
    return "Invalid input: both values must be numbers.";
  }
  const result = num1 - num2;
  addToHistory(num1, "-", num2, result);
  return result;
}
//function to multiply two numbers
function multiplication(num1, num2) {
  if (!isValidInput(num1, num2)) {
    return "Invalid input: both values must be numbers.";
  }
  const result = num1 * num2;
  addToHistory(num1, "*", num2, result);
  return result;
}
//function to divide two numbers
function division(num1, num2) {
  if (!isValidInput(num1, num2)) {
    return "Invalid input: both values must be numbers.";
  }
  if (num2 === 0) {
    return "Cannot divide by zero.";
  }
  const result = num1 / num2;
  addToHistory(num1, "/", num2, result);
  return result;
}

// show the history, or a message when nothing is stored yet
function displayHistory() {
  if (calculationHistory.length === 0) {
    console.log("No stored calculations yet.");
    return;
  }
  console.log("Calculation History:");
  for (let i = 0; i < calculationHistory.length; i++) {
    const entry = calculationHistory[i];
    console.log((i + 1) + ". " + entry.operands[0] + " " + entry.operator + " " + entry.operands[1] + " = " + entry.result);
  }
}

// --- testing the functions with normal values ---
console.log(addition(10, 5));        // 15
console.log(subtraction(10, 5));     // 5
console.log(multiplication(10, 5));  // 50
console.log(division(10, 5));        // 2

// --- edge cases ---
console.log(division(10, 0));        // Cannot divide by zero.
console.log(addition("10", 5));      // Invalid input: both values must be numbers.
console.log(addition(NaN, 5));       // Invalid input: both values must be numbers.
console.log(subtraction(-10, 5));    // -15
console.log(division(7.5, 2.5));     // 3

// show the history (failed calculations are not stored)
displayHistory();
