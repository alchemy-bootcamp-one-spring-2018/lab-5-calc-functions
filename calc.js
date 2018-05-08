/* exported addition, subtraction, multiplication, division, remainder, OddOrEven, primeNumber */
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
    if(y === 0) {
        return {
            value: 'error',
            description: 'Cannot divide by 0'
        };
    }
    const result = x / y;
    return {
        value: result,
        description: x + ' divided by ' + y + ' equals ' + result
    };
}

function remainder(x, y) {
    if(y === 0) {
        return {
            value: 'error',
            description: 'Cannot divide by 0'
        };
    }
    const result = x % y;
    return {
        value: result,
        description: 'The remainder of ' + x + ' divided by ' + y + ' is ' + result
    };
}

function oddOrEven(x, y) {
    var xResult, yResult;
    if(x === 0) {
        xResult = 'x is neither odd nor even. ';
    }
    else if(x % 2 === 0) {
        xResult = 'x is even. ';
    }
    else {
        xResult = 'x is odd. ';
    }
    if(y === 0) {
        yResult = 'y is neither odd nor even.';
    }
    else if(y % 2 === 0) {
        yResult = 'y is even.';
    }
    else {
        yResult = 'y is odd.';
    }
    return {
        description: xResult + yResult
    };
}

function primeNumber(x) {
    if(x < 2) {
        return {
            value: false,
            description: x + ' is not a prime number.'
        };
    }
    else {
        for(var i = 2; i <= x; i++) {
            if(i === x) {
                return {
                    value: true,
                    description: x + ' is a prime number.'
                };
            }
            else if(x % i === 0) {
                return {
                    value: false,
                    description: x + ' is not a prime number.'
                };
            }
        }
    }
}