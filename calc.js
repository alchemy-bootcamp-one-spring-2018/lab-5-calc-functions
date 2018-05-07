/* exported add, subtract, multiply, divide */
'use strict';

// add
function add(x, y) {
    var sum = x + y;

    return {
        value: sum,
        description: "The sum of " + x + " and " + y + " is " + sum + "."
    };
}

// subtract
function subtract(x, y) {
    var difference = x - y;
    //console.log('calc subtract() result', difference.value);

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