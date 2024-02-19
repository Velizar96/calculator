"use strict";

////SELECTORS////

let firstNumber = 0;
let secondNumber = 0;
let currentOperation = null;
let shouldResetDisplay = false;

const numbers = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operator]");
const dotButton = document.querySelector(".dot");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const display = document.querySelector(".display");
const upperDisplay = document.querySelector(".upper-display");

////addEventListeners////

window.addEventListener("keydown", handleKeyboardInput);

equalButton.addEventListener("click", evaluate);

clearButton.addEventListener("click", clearDisplay);

deleteButton.addEventListener("click", deleteNumber);

dotButton.addEventListener("click", appendPoint);

numbers.forEach((number) =>
  number.addEventListener("click", () => appendNumber(number.textContent))
);

operators.forEach((operator) =>
  operator.addEventListener("click", () => setOperation(operator.textContent))
);

////FUNCTIONS////

function roundValue(number) {
  return Math.floor(number * 1000) / 1000;
}

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
//
function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  if (operator === "+") return add(a, b);
  if (operator === "-") return subtract(a, b);
  if (operator === "×") return multiply(a, b);
  if (operator === "÷") {
    if (b === 0) {
      return null;
    } else {
      return divide(a, b);
    }
  }
}

function convertOperator(operator) {
  if (operator === "+") return "+";
  if (operator === "-") return "−";
  if (operator === "*") return "×";
  if (operator === "/") return "÷";
}

function resetScreen() {
  display.textContent = "";
  shouldResetDisplay = false;
}

function appendNumber(number) {
  if (display.textContent === "0" || shouldResetDisplay) resetScreen();
  display.textContent += number;
}

function deleteNumber() {
  display.textContent = display.textContent.toString().slice(0, -1);
}

function clearDisplay() {
  display.textContent = 0;
  upperDisplay.textContent = "";
  firstNumber = "";
  secondNumber = "";
  currentOperation = null;
}

function appendPoint() {
  if (shouldResetDisplay) resetScreen();
  if (display.textContent === "") display.textContent = "0";
  display.textContent += ".";
}

function setOperation(operator) {
  if (currentOperation !== null) evaluate();
  firstNumber = display.textContent;
  currentOperation = operator;
  upperDisplay.textContent = `${firstNumber} ${currentOperation}`;
  shouldResetDisplay = true;
}

function evaluate() {
  if (currentOperation === null || shouldResetDisplay) return;
  if (currentOperation === "÷" && display.textContent === "0") {
    alert("You can't divide by 0!");
    return;
  }
  secondNumber = display.textContent;
  display.textContent = roundValue(
    operate(currentOperation, firstNumber, secondNumber)
  );
  upperDisplay.textContent = `${firstNumber} ${currentOperation} ${secondNumber} =`;
  currentOperation = null;
}

function handleKeyboardInput(e) {
  if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
  if (e.key === "Escape") clearDisplay();
  if (e.key === "Backspace") deleteNumber();
  if (e.key === "=" || e.key === "Enter") evaluate();
  if (e.key === ".") appendPoint();
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/")
    setOperation(convertOperator(e.key));
}
