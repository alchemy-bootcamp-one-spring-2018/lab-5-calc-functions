'use strict';
/* exported sumCalc, subCalc, multCalc, divCalc */

// Addition Function
function sumCalc(x, y) {
    const sum = x + y;

    return {
        value: sum,
        description: 'The sum of ' + x + ' and ' + y + ' is ' + sum
    };
}

// Subtraction Function
function subCalc(x, y) {
    const sub = x - y;

    return {
        value: sub,
        description: 'The difference of ' + x + ' and ' + y + ' is ' + sub
    };
}

// Multiplication Function
function multCalc(x, y) {
    const mult = x * y;

    return {
        value: mult,
        description: 'The product of ' + x + ' and ' + y + ' is ' + mult
    };
}

// Division Function
function divCalc(x, y) {
    const quotient = x / y;

    return {
        value: quotient,
        description: 'The quotient of ' + x + ' divided by ' + y + ' is ' + quotient
    };
}