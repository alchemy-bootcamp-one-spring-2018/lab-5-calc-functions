/* exported sum subtract multiply divide */

'use strict';

function sum(x, y) {
    var sumTotal = x + y;

    return {
        value: sumTotal,
        description: 'The sum of ' + x + ' plus ' + y + ' is: ' + sumTotal
    };
}

function subtract(x, y) {
    var subResult = x - y;

    return {
        value: subResult,
        description: 'The result of ' + x + ' minus ' + y + ' is: ' + subResult
    };
}

function multiply(x, y) {
    var product = x * y;

    return {
        value: product,
        description: 'The product of ' + x + ' multiplied by ' + y + ' is: ' + product
    };
}

function divide(x, y) {
    var quotient = x / y;

    return {
        value: quotient,
        description: 'The quotient of ' + x + ' divided by ' + y + ' is: ' + quotient
    };
}