"use strict";
let firstNumber = 0;
let secondNumber = 0;
let displayValue = 0;
let choosenOp;
let result;

const numbers = document.querySelector(".numbers");
const divid = document.querySelector(".divide");
const multipl = document.querySelector(".multiply");
const minus = document.querySelector(".minus");
const sum = document.querySelector(".plus");
const operator = document.querySelectorAll(".op");
const buttons = document.querySelectorAll(".btn");
const display = document.querySelector(".results");
const equalOp = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");

function add(num1, num2) {
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

function operate(op, firstNumber, secondNumber) {
  if (op === "×") return multiply(+firstNumber, +secondNumber);
  if (op === "+") return add(+firstNumber, +secondNumber);
  if (op === "-") return subtract(+firstNumber, +secondNumber);
  if (op === "÷") return divide(+firstNumber, +secondNumber);
}

function displayNum() {
  buttons.forEach((btn) =>
    btn.addEventListener("click", function (e) {
      displayValue = e.target.innerText;
      display.innerText = display.innerText.replace(/^0+/, "");
      display.innerText = display.innerText + displayValue;
    })
  );
}
displayNum();

function choosingOperator() {
  operator.forEach((oper) =>
    oper.addEventListener("click", function (e) {
      choosenOp = e.target.innerText;
      firstNumber = +display.innerText;
      if (numbers.innerText && display.innerText) {
        firstNumber = numbers.innerText.charAt(0);
        console.log(firstNumber);
        secondNumber = display.innerText.slice(1);
        display.innerText = display.innerText.toString().slice(1);
        console.log(secondNumber);
        display.innerText = operate(choosenOp, +firstNumber, +secondNumber);
      }
      display.innerText = 0;
      numbers.innerText = `${firstNumber}${choosenOp}`;
    })
  );
}
choosingOperator();

function equal() {
  equalOp.addEventListener("click", function (e) {
    // display.innerText = 0;
    secondNumber = +display.innerText;
    console.log(`Second number: ${secondNumber}`);
    display.innerText = operate(choosenOp, +firstNumber, +secondNumber);
  });
}
equal();

function clear() {
  clearBtn.addEventListener("click", function () {
    display.innerText = 0;
    firstNumber = 0;
    secondNumber = 0;
  });
}
clear();

function deleteNum() {
  deleteBtn.addEventListener("click", function () {
    if (firstNumber && secondNumber) {
      return;
    }
    let dis = display.innerText;
    let cutDis = dis.slice(0, -1);
    display.innerText = +cutDis;
  });
}
deleteNum();
