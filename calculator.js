const input = document.getElementById("display");
const buttons = Array.from(document.getElementsByClassName("btn"));

function add(number1, number2) {
    return number1 + number2;
}
function subtract(number1, number2) {
    return number1 - number2;
}
function multiply(number1, number2) {
    return number1 * number2;
}
function divide(number1, number2) {
    if (number2 === 0) {
        alert("Cannot divide by zero");
        return null;
    }
    return number1 / number2;
}

function operate(operator, number1, number2) {
    switch (operator) {
        case "+":
            return add(number1, number2);
        case "-":
            return subtract(number1, number2);
        case "*":
            return multiply(number1, number2);
        case "/":
            return divide(number1, number2);
        default:
            return null;
    }
}
let currentInput = "";
let operator = null;
let firstOperand = null;
let secondOperand = null;
let result = null;
let isOperatorClicked = false;

buttons.map(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerText === "C") {
            input.value = "";
            currentInput = "";
            operator = null;
            firstOperand = null;
            secondOperand = null;
            result = null;
        } else if (e.target.innerText === "=") {
            if (currentInput !== "" && operator !== null && firstOperand !== null) {
                secondOperand = parseFloat(currentInput);
                result = operate(operator, firstOperand, secondOperand);
                input.value = result;
                currentInput = result.toString();
                operator = null;
                firstOperand = null;
                secondOperand = null;
            }
        } else if (["+", "-", "*", "/"].includes(e.target.innerText)) {
            if (currentInput !== "") {
                if (firstOperand === null) {
                    firstOperand = parseFloat(currentInput);
                } else if (operator !== null) {
                    secondOperand = parseFloat(currentInput);
                    result = operate(operator, firstOperand, secondOperand);
                    input.value = result;
                    firstOperand = result;
                }
                operator = e.target.innerText;
                currentInput = "";
                input.value = input.value + operator;
            }
        } else {
            if (isOperatorClicked) {
                currentInput += e.target.innerText;
                input.value += e.target.innerText;
            } else {
                currentInput += e.target.innerText;
                input.value += e.target.innerText;
            }
        }
    })

})
