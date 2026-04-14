// Get references to elements
const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');

// Initialize variables
let currentInput = '';
let previousInput = '';
let operator = null;

// Function to update the display
function updateDisplay() {
    screen.textContent = currentInput || '0';
}

// Function to handle number input
function inputNumber(number) {
    if (currentInput === '0' || currentInput === '') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

// Function to handle operator input
function inputOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

// Function to calculate result
function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = null;
    previousInput = '';
    updateDisplay();
}

// Function to clear all
function clearAll() {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay();
}

// Function to toggle sign
function toggleSign() {
    if (currentInput !== '') {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay();
    }
}

// Function to handle percentage
function percentage() {
    if (currentInput !== '') {
        currentInput = (parseFloat(currentInput) / 100).toString();
        updateDisplay();
    }
}

// Function to handle decimal point
function inputDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (!isNaN(value) || value === '0') {
            inputNumber(value);
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            inputOperator(value);
        } else if (value === '=') {
            calculate();
        } else if (value === 'AC') {
            clearAll();
        } else if (value === '+/-') {
            toggleSign();
        } else if (value === '%') {
            percentage();
        } else if (value === '.') {
            inputDecimal();
        }
    });
});

// Initialize display
updateDisplay();
