# JavaScript Calculator

A simple JavaScript calculator that adds, subtracts, multiplies and divides two numbers, and keeps a history of every successful calculation.

## Files

- `calculator.js` - the calculator code and test calls
- `README.md` - this file

## Running it

You need Node.js installed. Open a terminal in the project folder and run:

```bash
node calculator.js
```

## How it works

- `addition(num1, num2)` - returns num1 + num2
- `subtraction(num1, num2)` - returns num1 - num2
- `multiplication(num1, num2)` - returns num1 \* num2
- `division(num1, num2)` - returns num1 / num2, blocks division by zero

Each function first checks the inputs with `isValidInput()`. If a value is not a number (like `"10"` or `NaN`) it returns an error message instead of a result. Zero works with every operation; only division by zero is blocked.

## History

Calculations are stored in the `calculationHistory` array as objects:

```javascript
{ operands: [10, 5], operator: "+", result: 15 }
```

All four operations call the same `addToHistory()` function, so the history stays consistent. `displayHistory()` prints every stored calculation, or a message if nothing is stored yet. Failed calculations are not stored.

## Example output

```
15
5
50
2
Cannot divide by zero.
Invalid input: both values must be numbers.
Invalid input: both values must be numbers.
-15
3
Calculation History:
1. 10 + 5 = 15
2. 10 - 5 = 5
3. 10 * 5 = 50
4. 10 / 5 = 2
5. -10 - 5 = -15
6. 7.5 / 2.5 = 3
```

## Future improvements

- More operations (modulus, power, square root)
- A clear-history function
- An interactive menu for user input
- A simple web interface
