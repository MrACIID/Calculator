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

let result = null;
let lastOperation = '';
let haveDot = false;

buttonNumbers.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === "." && !haveDot) {
            haveDot = true;

        } else if (e.target.innerText === "." && haveDot) {
            return;
        }
        firstNumber += e.target.innerText;
        screen.innerText = firstNumber;
    })
})


buttonOperator.forEach(operator => {
    operator.addEventListener('click', (e) => {
        if (!firstNumber) result;
        haveDot = false;
        const operatorName = e.target.innerText;
        if (secondNumber && firstNumber && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(firstNumber);
        }
        clearVar(operatorName);
        lastOperation = operatorName;
    })
})

function clearVar(name = '') {
    secondNumber += firstNumber + ' ' + name + ' ';
    screenPreviousvalue.innerText = secondNumber;
    screen.innerText = '';
    firstNumber = '';
    currentResult.innerText = result;
}

function mathOperation() {
    if (lastOperation === '*') {
        result = parseFloat(result) * parseFloat(firstNumber);
    } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(firstNumber)
    }
    else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(firstNumber)
    }
    else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(firstNumber)
    }
}

buttonEqual.addEventListener('click', (e) => {
    if (!firstNumber || !secondNumber) return;
    haveDot = false;
    mathOperation();
    clearVar();
    screen.innerText = result;
    currentResult.innerText = '';
    firstNumber = result;
    secondNumber = '';
})

buttonClear.addEventListener('click', (e) => {
    screenPreviousvalue.innerText = "let's";
    screen.innerText = 'calculate';
    secondNumber = '';
    firstNumber = '';
    currentResult.innerText = '';
})

buttonDelete.addEventListener('click', (e) => {
    screen.innerText = '';
    firstNumber = '';
})

window.addEventListener('keydown', (e) => {
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

function clickOnEqual(key) {
    buttonEqual.click()
}