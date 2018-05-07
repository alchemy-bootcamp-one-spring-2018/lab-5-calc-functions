/* globals sum, difference, product, quotient */
/* exported add, subtract, multiply, divide */
'use strict';

// add
function add(x, y) {
    x = 10;
    y = 4;
    var sum = x + y;

    return {
        value: sum,
        //description: 
    };
}

// subtract
function subtract(x, y) {
    var difference = x - y;

    return {
        value: difference,
        //description:
    };
}

// multiply
function multiply(x, y) {
    var product = x * y;

    return {
        value: product,
        //description:
    };
}

// divide
function divide(x, y) {
    var quotient = x / y;

    return {
        value: quotient,
        //description:
    };
}