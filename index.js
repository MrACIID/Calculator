let firstNumber = 6
let secondNumber = 6
let operator = "/"
let numbersStorage = []

function display(numbers) {
    let screen = document.querySelector(".screen")
    numbersStorage.push(numbers)
    screen.innerHTML = numbersStorage.join('')

}

function clearAll() {
    document.querySelector(".screen").innerHTML = `cleared`
    numbersStorage.splice(0, numbersStorage.length)
    display()
}


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
