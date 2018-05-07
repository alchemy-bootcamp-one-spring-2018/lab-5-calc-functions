/* globals addition, subtraction, multiplication, division, remainder */
/* exported doAddition, doSubtraction, doMultiplication, doDivision, doRemainder */
'use strict';

function storeInput() {
    var x = parseInt(document.getElementById('input-x').value);
    var y = parseInt(document.getElementById('input-y').value);
    return [x, y];
}

function printResult(result) {
    document.getElementById('result').textContent = result.value;
    document.getElementById('response').textContent = result.description;
}

function doAddition() {
    var [x, y] = storeInput();
    if(isNaN(x) === false && isNaN(y) === false) {
        const result = addition(x, y);
        printResult(result);
    }
}

function doSubtraction() {
    var [x, y] = storeInput();
    if(isNaN(x) === false && isNaN(y) === false) {
        const result = subtraction(x, y);
        printResult(result);
    }
}

function doMultiplication() {
    var [x, y] = storeInput();
    if(isNaN(x) === false && isNaN(y) === false) {
        const result = multiplication(x, y);
        printResult(result);
    }
}

function doDivision() {
    var [x, y] = storeInput();
    if(isNaN(x) === false && isNaN(y) === false) {
        const result = division(x, y);
        printResult(result);
    }
}

function doRemainder() {
    var [x, y] = storeInput();
    if(isNaN(x) === false && isNaN(y) === false) {
        const result = remainder(x, y);
        printResult(result);
    }
}

function doOddOrEven() {
    var [x, y] = storeInput();
    if(isNaN(x) === false && isNaN(y) === false) {
        const result = OddOrEven(x, y);
        printResult(result);
}