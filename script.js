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
