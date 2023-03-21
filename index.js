let firstNumber = 6
let secondNumber = 6
let operator = "/"

function add() {
    let addResult = firstNumber + secondNumber
    return addResult
}


function subtract() {
    let subtractResult = firstNumber - secondNumber
    return subtractResult
}


function multiply() {
    let multiplyResult = firstNumber * secondNumber
    return multiplyResult
}


function divide() {
    let divideResult = firstNumber / secondNumber
    return divideResult
}


function operate() {
    if (operator == "+") {
        return add()
    }
    else if (operator == '-') {
        return subtract()
    }
    else if (operator == '*') {
        return multiply()
    }
    else if (operator == '/') {
        return divide()
    }
}
console.log(operate())