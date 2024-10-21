let num1;
let operator;
let num2;

function operate(num1, num2, operand) {
    let number1 = Number(num1);
    let number2 = Number(num2);
    switch(operand){
        case "+":
            return add(number1, number2);
            break;
        case "-":
            return subtract(number1, number2);
            break;
        case "*":
            return multiply(number1, number2);
            break;
        case "/":
            return divide(number1, number2);
            break;
    }
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}