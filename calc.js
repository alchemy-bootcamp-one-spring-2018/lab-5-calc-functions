'use strict';

function addition(x, y) {
    const addition = x + y;
    return {
        value: addition
    }
}

function subtraction(x, y) {
    const subtraction = x - y;
    return {
        value: subtraction
    }
}

function multiplication(x, y) {
    const multiplication = x * y;
    return {
        value: multiplication
    }
}

function division(x, y) {
    const division = x / y;
    return {
        value: division
    }
}

function remainder(x, y) {
    const remainder = x % y;
    return {
        value: remainder
    }
}

function isOdd(x, y) {
    if(remainder(x, y) === 0) {
        console.log('');
    }
}