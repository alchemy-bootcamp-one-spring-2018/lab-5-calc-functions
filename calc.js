/* exported addition, subtraction, multiplication, division, remainder, isOdd, isEven, primeNumbers */
'use strict';

function addition(x, y) {
    const result = x + y;
    return {
        value: result,
        description: x + ' plus ' + y + ' equals ' + result
    };
}

function subtraction(x, y) {
    const result = x - y;
    return {
        value: result,
        description: x + ' minus ' + y + ' equals ' + result
    };
}

function multiplication(x, y) {
    const result = x * y;
    return {
        value: result,
        description: x + ' times ' + y + ' equals ' + result
    };
}

function division(x, y) {
    const result = x / y;
    return {
        value: result,
        description: x + ' divided by ' + y + ' equals ' + result
    };
}

function remainder(x, y) {
    const result = x % y;
    return {
        value: result,
        description: 'The remainder of ' + x + ' divided by ' + y + ' is ' + result
    };
}

function isOdd(x, y) {
    if(remainder(x, y) === 0) {
        console.log('');
    }
}