//Get all buttons/screens from the html.
let buttonNumbers = document.querySelectorAll(".btn");
let buttonOperator = document.querySelectorAll(".btn-op")
let buttonEqual = document.querySelector(".btn-eq")
let buttonClear = document.querySelector(".btn-clear")
let buttonDelete = document.querySelector(".btn-delete")

let screen = document.querySelector(".screen")
let screenPreviousvalue = document.querySelector(".previous")

//let firstNumber and  secondNumber to store both numbers values  be able to operate with them.
let firstNumber = '';
let secondNumber = '';

//to be able to store the operator value.
let operator = '';

//listening on clicks for each numbers buttons and call for display() to display them.
buttonNumbers.forEach((number) => number.addEventListener("click", function (e) {
    display(e.target.textContent)
    screen.textContent = firstNumber

}))

//listening on clicks for each operator buttons. 
buttonOperator.forEach((op) => op.addEventListener("click", function (e) {

    //call handleOperator() to store the clicked operator into our variable and also seperate the firstNumber to the secondNumber to store both values
    handleOperator(e.target.textContent)
    //setting up the according value on the screen.
    screenPreviousvalue.textContent = secondNumber + " " + operator;
    screen.textContent = firstNumber
}))

//listening for click on the "AC" all clear button and reset values to empty.
buttonClear.addEventListener("click", function () {
    screen.textContent = '';
    screenPreviousvalue.textContent = '';
    secondNumber = '';
    firstNumber = '';
    operator = '';
})

//listening for click on the equal button and calling operate() to launch the operation.
buttonEqual.addEventListener("click", function () {
    operate()
})


//display function lock values input to 6 individual number max !
function display(num) {
    if (firstNumber.length <= 6) {
        firstNumber += num;
    }
}

function handleOperator(op) {
    console.log(Number(firstNumber))
    //store the clicked operator into our variable and also seperate the firstNumber to the secondNumber to store both values
    operator = op
    secondNumber = firstNumber;
    firstNumber = '';
}

function operate() {
    //Convert those value to actual numbers to be able to calcul them.
    secondNumber = Number(secondNumber)
    firstNumber = Number(firstNumber)
    if (operator === "+") {
        secondNumber += firstNumber
    }
    else if (operator === "-") {
        secondNumber -= firstNumber
    }
    else if (operator === "*") {
        secondNumber *= firstNumber
    }
    else {
        secondNumber /= firstNumber
    }
    screen.textContent = secondNumber
    console.log(secondNumber)
}