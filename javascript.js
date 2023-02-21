const smallNumbers = document.querySelector('.little-numbers');
const bigNumbers = document.querySelector('.big-numbers');
let currentNumber = '';
let pastNumber = '';
let operator = '';
let currentOperator = '';

const buttonsBox = document.querySelector('.buttons-box');
console.log(buttonsBox);
const buttonsArray = Array.from(buttonsBox);


buttonsBox.addEventListener('click', (event) => {
    if (event.target.matches('button')) {
        // Assigns button click
        const button = event.target;

        console.log(`Button ${button.dataset.value} was clicked`);

        if (button.classList.contains('number')) {
            currentNumber += button.dataset.value;
            console.log('number was ' + currentNumber);
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
                operate(pastNumber, currentNumber, currentOperator);
                pastNumber = currentNumber;
                currentNumber = '';
                currentOperator = button.dataset.value;
                console.log('operator');
                updateDisplay(pastNumber, currentNumber, currentOperator)
                smallNumbers.innerHTML = currentNumber;
            } else {
                pastNumber = currentNumber;
                currentNumber = '';
                currentOperator = button.dataset.value;
                updateDisplay(pastNumber, currentNumber, currentOperator);                
            }
        }

        else if (button.classList.contains('equals')) {
            let result = operate(pastNumber, currentNumber, currentOperator);
            currentNumber = Number(result).toFixed(2).replace(/[.,]00$/, "");
            pastNumber = '';
            currentOperator = '';
            updateDisplay(pastNumber, currentNumber, currentOperator);
            result = currentNumber;
            smallNumbers.innerHTML = result;
            console.log('currentNumber is: ' + currentNumber);
            console.log('pastNumber is: ' + pastNumber);
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
    if (a === 0) {
        return '101';
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
    bigNumbers.innerHTML = pastNumber + ' ' + currentOperator + ' ' + currentNumber;
    // bigNumbers.innerHTML = currentNumber ? pastNumber : '00000000';
    // smallNumbers.innerHTML = pastNumber;
}
