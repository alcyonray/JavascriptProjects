//creates an object to keep track of values
const Calculator = {
    //will display 0 on the screen
    displayValue: '0',
    //will hold the first operand, set to null initially
    firstOperand: null,
    //checks for input of second operand from user
    waitSecondOperand: false,
    //will hold operator
    operator: null,
};

//modifies values each time a button is clicked
function inputDigit(digit) {
    const { displayValue, waitSecondOperand } = Calculator;
    //checks waitSecondOperand value
    if (waitSecondOperand === true) {
        Calculator.displayValue = digit;
        Calculator.waitSecondOperand = false;
    } else {
        //overwrites if current display is 0
        Calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
}

//handles decimal points
function inputDecimal(dot) {
    //prevents bugs from accidental clicking of decimal
    if (Calculator.waitSecondOperand === true) return;
    if (!Calculator.displayValue.includes(dot)) {
        //if display does not already contain decimal, on is added
        Calculator.displayValue += dot
    }
}

//handles operators
function handleOperator(nextOperator) {
    const {firstOperand, displayValue, operator} = Calculator;
    //store number currently displayed to Calculator.firstOperand, if doesn't already exist
    const valueOfInput = parseFloat(displayValue);
    //checks if operator already exists and if waitSecondOperand is true
    if (operator && Calculator.waitSecondOperand) {
        Calculator.operator = nextOperator;
        return;
    }
    if (firstOperand == null) {
        Calculator.firstOperand = valueOfInput;
    } else if (operator) {
        const valueNow = firstOperand || 0;
        //if operator exists, is found in performCalculation object and executed
        let result = performCalculation[operator](valueNow, valueOfInput);
        //add a fixed amount of numbers after the decimal
        result = Number(result).toFixed (9);
        //will remove any trailing 0s
        result = (result * 1).toString();
        Calculator.displayValue = parseFloat(result);
        Calculator.firstOperand = parseFloat(result);
    }
    Calculator.waitSecondOperand = true;
    Calculator.operator = nextOperator;
}

const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '=': (firstOperand, secondOperand) => secondOperand
};

function calculatorReset() {
    Calculator.displayValue = '0';
    Calculator.firstOperand = null;
    Calculator.waitSecondOperand = false;
    Calculator.operator = null;
}
//updates the calculator screen with the contents of displayValue
function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.displayValue;
}
updateDisplay();

//monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;
    //exits if clicked element was not a button
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }
    //ensures 'all clear' button works
    if (target.classList.contains('all-clear')) {
        calculatorReset();
        updateDisplay();
        return;
    }
    inputDigit(target.value);
    updateDisplay();
})