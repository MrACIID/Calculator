//Get all buttons/screens from the html.
let buttonNumbers = document.querySelectorAll(".btn");
let buttonOperator = document.querySelectorAll(".btn-op")
let buttonEqual = document.querySelector(".btn-eq")
let buttonClear = document.querySelector(".btn-clear")
let buttonDelete = document.querySelector(".btn-delete")
let currentResult = document.querySelector(".currentresult")
let screen = document.querySelector(".screen")
let screenPreviousvalue = document.querySelector(".previous")

//let firstNumber and  secondNumber to store both numbers values  be able to operate with them.
let firstNumber = '';
let secondNumber = '';
//let result to store a pair result to add that result to the next pair. haveDot is used to check if there is already a dot in the number to prevent multiple dot.
let result = null;
let lastOperator = '';
let haveDot = false;

//listening to the clicks on the numbers button, 
//checking if if there is a dot already and maxing max amount of numbers to 6. 
//then display the value inside our screen
buttonNumbers.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === "." && !haveDot) {
            haveDot = true;

        } else if (e.target.innerText === "." && haveDot) {
            return;
        }
        if (firstNumber.length <= 6) {
            firstNumber += e.target.innerText;
        }
        screen.innerText = firstNumber;
    })
})

//listening to the clicks on the operators button, 
//check if there is a firstNumber before doing anything.
buttonOperator.forEach(operator => {
    operator.addEventListener('click', (e) => {
        if (!firstNumber) return;
        //setting haveDot to false to be able to add a dot to the next number.
        haveDot = false;
        const operatorValue = e.target.innerText;
        if (secondNumber && firstNumber && lastOperator) {
            operate();
        } else {
            result = parseFloat(firstNumber);
        }
        clearVar(operatorValue);
        lastOperator = operatorValue;
    })
})

//handle putting the firstNumber value into the secondNumber,
//to be able to clear the firstNumber and display the secondNumber into,
//our previousScreen, so we can add another number.
function clearVar(op = '') {
    secondNumber += firstNumber + ' ' + op + ' ';
    screenPreviousvalue.innerText = secondNumber;
    screen.innerText = '';
    firstNumber = '';
    currentResult.innerText = result;
}

function operate() {
    if (lastOperator === '*') {
        result = parseFloat(result) * parseFloat(firstNumber);
    } else if (lastOperator === '+') {
        result = parseFloat(result) + parseFloat(firstNumber)
    }
    else if (lastOperator === '/' && parseFloat(firstNumber) != 0) {
        result = parseFloat(result) / parseFloat(firstNumber)
    }
    else if (lastOperator === '-') {
        result = parseFloat(result) - parseFloat(firstNumber)
    }
    else if (lastOperator === '/' && parseFloat(firstNumber) === 0) {
        result = "oh lord"
    }

}


//listening to clicks on the equal button,
//check if there is a firstNumber and secondNumber,
//calling operate() and clearVar() when equal button is clicked.
buttonEqual.addEventListener('click', (e) => {
    if (!firstNumber || !secondNumber) return;
    haveDot = false;
    operate();
    clearVar();
    screen.innerText = result;
    currentResult.innerText = '';
    firstNumber = result;
    secondNumber = '';
})

//listening to clicks on the clear button,
//then clear all values and reset screens to default values.
buttonClear.addEventListener('click', (e) => {
    screenPreviousvalue.innerText = "let's";
    screen.innerText = 'calculate';
    secondNumber = '';
    firstNumber = '';
    currentResult.innerText = '';
})

//listening to clicks on the delete button,
//then clear firstNumber value and update the screen.
buttonDelete.addEventListener('click', (e) => {
    screen.innerText = '';
    firstNumber = '';
})

//handling keyboards support.
window.addEventListener('keydown', (e) => {
    e.preventDefault()
    if (
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.'
    ) {
        clickOnNumbers(e.key);
    } else if (
        e.key === '*' ||
        e.key === '/' ||
        e.key === '+' ||
        e.key === '-'
    ) {
        clickOnOperators(e.key);
    }
    else if (
        e.key === 'Enter' || e.key === "="

    ) {
        clickOnEqual(e.key);
    }
    else if (
        e.key === 'Backspace'
    ) {
        clickOnClear()
    }
})

function clickOnNumbers(key) {
    buttonNumbers.forEach(button => {
        if (button.innerText === key) {
            button.click()
        }
    })
}

function clickOnOperators(key) {
    buttonOperator.forEach(button => {
        if (button.innerText === key) {
            button.click()
        }
    })
}

function clickOnEqual() {
    buttonEqual.click()
}

function clickOnClear() {
    buttonClear.click()
}