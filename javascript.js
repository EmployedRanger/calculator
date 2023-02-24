const smallNumbers = document.querySelector('.little-numbers');
const bigNumbers = document.querySelector('.big-numbers');
let currentNumber = '';
let pastNumber = '';
let operator = '';
let currentOperator = '';

const buttonsBox = document.querySelector('.buttons-box');
const buttonsArray = Array.from(buttonsBox);


buttonsBox.addEventListener('click', (event) => {
    if (event.target.matches('button')) {
        // Assigns button click
        const button = event.target;

        if (button.classList.contains('number')) {
            if (button.dataset.value === '.' && currentNumber.includes('.'))
            {
                return; // returns if there is already a period
            }
            if (currentNumber === 'lol') {
                currentNumber = 0;
            }
            currentNumber += button.dataset.value;
            updateDisplay(pastNumber, currentNumber, currentOperator);
        }

        else if (button.classList.contains('clear-history')) {
            clearHistory();
            smallNumbers.innerHTML = '';
        }

        else if (button.classList.contains('clear')) {
            clear();
        }

        else if (button.classList.contains('sign-flip')) {
            currentNumber = -currentNumber;
            updateDisplay(pastNumber, currentNumber, currentOperator);
        }

        else if (button.classList.contains('operator')) {
            if (pastNumber && currentNumber !== '' && !button.classList.contains('equals')) {
                smallNumbers.innerHTML = pastNumber + ' ' + currentOperator + ' ' + currentNumber;
                pastNumber = operate(pastNumber, currentNumber, currentOperator);
                currentNumber = '';
                currentOperator = button.dataset.value;
                console.log('operator');
                updateDisplay(pastNumber, currentNumber, currentOperator)

            } else {
                pastNumber = currentNumber;
                currentNumber = '';
                currentOperator = button.dataset.value;
                updateDisplay(pastNumber, currentNumber, currentOperator);                
            }
        }

        else if (button.classList.contains('equals')) {
            let result = operate(pastNumber, currentNumber, currentOperator);
            if (Number.isFinite(result)) {
                currentNumber = Number(result).toFixed(2).replace(/[.,]00$/, "");
                pastNumber = '';
                currentOperator = '';
                updateDisplay(pastNumber, currentNumber, currentOperator);
                result = currentNumber;
            } else {result = 'lol';}
            currentNumber = result;
            pastNumber = '';
            currentOperator = '';
            updateDisplay(pastNumber, currentNumber, currentOperator);
            smallNumbers.innerHTML = result;
        }
    }
});


function operate (pastNumber, currentNumber, currentOperator) {
    switch (currentOperator) {
        case '*':
            return multiply(pastNumber, currentNumber);
    
        case '/':
            return divide(pastNumber, currentNumber);

        case '+':
            return add(pastNumber, currentNumber); 
        
        case '-':
            return subtract(pastNumber, currentNumber);
    }
}

function add (a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    if (b === 0) {
        bigNumbers.innerHTML = 'lol';
        return 'lol';
    }
    return a / b;
}

function clearHistory () {
    pastNumber = '';
    currentNumber = '';
    currentOperator = '';
    updateDisplay(pastNumber, currentNumber, currentOperator);
}

function signFlip (a) {
    return -a;
}

function clear () {
    pastNumber = '';
    currentNumber = '';
    currentOperator = '';
    updateDisplay(pastNumber, currentNumber, currentOperator);
}

function updateDisplay (pastNumber, currentNumber, currentOperator) {
    const maxLength = 12;
    let displayString = pastNumber + ' ' + currentOperator + ' ' + currentNumber;
    if (displayString.length > maxLength) {
        displayString = 'ERROR';
        smallNumbers.innerHTML = displayString;
    }
    bigNumbers.innerHTML = displayString;
}

const keyMap = {
    '48': 'zero',
    '49': 'one',
    '50': 'two',
    '51': 'three',
    '52': 'four',
    '53': 'five',
    '54': 'six',
    '55': 'seven',
    '56': 'eight',
    '57': 'nine',
    '96': 'zero',
    '97': 'one',
    '98': 'two',
    '99': 'three',
    '100': 'four',
    '101': 'five',
    '102': 'six',
    '103': 'seven',
    '104': 'eight',
    '105': 'nine',
    '106': 'multiply',
    '107': 'plus',
    '109': 'subtract',
    '110': 'decimal',
    '111': 'divide',
    '13': 'equals',
    '46': 'clear',
  };

  document.addEventListener('keydown', (event) => {
    const keyCode = event.keyCode.toString();
    if(keyMap[keyCode]) {
        event.preventDefault();
        const button = document.getElementsByClassName(keyMap[keyCode])[0];
        button.click();
    }
  });