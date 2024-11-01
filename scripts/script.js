let num1;
let operator;
let num2;

const operands = ['+', '-', '*', '/'];

const h1 = document.querySelector("h1");
const table = document.querySelector("#calculator");
const btns = table.querySelectorAll("input");
const screen = document.getElementById('screen');

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.value != "=" && btn.value != "c") {
            screen.value += btn.value;
            if (operands.includes(btn.value)) {
                operator = btn.value;
            }
        }
        else if (btn.value == "=") {
            let equation = screen.value;
            let index = equation.indexOf(operator);
            num1 = equation.substring(0, index);
            num2 = equation.substring(index + 1)
            screen.value = operate(num1, num2, operator);
        }
        else {
            screen.value = "";
        }
        console.log(`Button value is: ${btn.value}`);
    })
});

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