/* exported add, subtract, multiply, divide, modulo */
'use strict';

// add
function add(x, y) {
    var sum = x + y;

    return {
        value: sum,
        description: 'The sum of ' + x + ' and ' + y + ' is ' + sum + '.'
    };
}

// subtract
function subtract(x, y) {
    var difference = x - y;

    return {
        value: difference,
        description: 'The difference of ' + x + ' and ' + y + ' is ' + difference + '.'
    };
}

// multiply
function multiply(x, y) {
    var product = x * y;

    return {
        value: product,
        description: 'The product of ' + x + ' and ' + y + ' is ' + product + '.'
    };
}

// divide
function divide(x, y) {
    var quotient = x / y;

    return {
        value: quotient,
        description: 'The quotient of ' + x + ' and ' + y + ' is ' + quotient + '.'
    };
}

// remainder
function modulo(x, y) {
    var remainder = x % y;

    return {
        value: remainder,
        description: 'The remainder of ' + x + ' and ' + y + ' is ' + remainder + '.'
    };
}