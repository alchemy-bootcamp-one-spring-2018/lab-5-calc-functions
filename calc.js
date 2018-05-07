/* exported add, subtract, multiply, divide, divideWithRemainder, hypotenuse, isEven, isOdd */

function add(x, y) {
    const sum = x + y;

    if(isNaN(x) || isNaN(y)) {
        return {
            value: 'Error!',
            description: 'Please enter numbers!'
        };
    }

    return {
        value: sum,
        description: 'The sum of ' + x + ' and ' + y + ' is: ' + sum
    };
}

function subtract(x, y) {
    const diff = x - y;

    if(isNaN(x) || isNaN(y)) {
        return {
            value: 'Error!',
            description: 'Please enter numbers!'
        };
    }

    return {
        value: diff,
        description: 'The difference of ' + x + ' and ' + y + ' is: ' + diff
    };
}

function multiply(x, y) {
    const multiple = x * y;

    if(isNaN(x) || isNaN(y)) {
        return {
            value: 'Error!',
            description: 'Please enter numbers!'
        };
    }

    return {
        value: multiple,
        description: 'The multiple of ' + x + ' and ' + y + ' is: ' + multiple
    };
}

function divide(x, y) {
    const quotient = x / y;

    if(isNaN(x) || isNaN(y)) {
        return {
            value: 'Error!',
            description: 'Please enter numbers!'
        };
    }

    if(y === 0) {
        return {
            value: 'To infinity and beyond!',
            description: 'Error! Can\'t divide by 0!',
        };
    } else {
        return {
            value: quotient,
            description: 'The quotient of ' + x + ' and ' + y + ' is: ' + quotient
        };
    }
}

function divideWithRemainder(x, y) {
    const quotient = Math.trunc(x / y);
    const remainder = x % y;

    if(isNaN(x) || isNaN(y)) {
        return {
            firstValue: 'Error!',
            secondValue: 'Error!',
            description: 'Please enter numbers!'
        };
    }

    if(y === 0) {
        return {
            value: 'To infinity and beyond!',
            description: 'Error! Can\'t divide by 0!',
        };
    } else {
        return {
            firstValue: quotient,
            secondValue: remainder,
            description: 'The quotient of ' + x + ' and ' + y + ' is ' + quotient + ', with a remainder of ' + remainder
        };
    }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
function hypotenuse(x, y) {
    const hypo = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

    if(isNaN(x) || isNaN(y)) {
        return {
            value: 'Error!',
            description: 'Please enter numbers!'
        };
    }

    return {
        value: hypo,
        description: 'The hypotenuse of a right triangle with side lengths ' + x + ' and ' + y + ' is: ' + hypo
    };
}

function isEven(x) {
    const even = x % 2;

    if(even === 0) {
        return {
            value: 'Yep!',
            description: x + ' is even!'
        };
    }
    else if(isNaN(even)) {
        return {
            value: 'Error!',
            description: 'That doesn\'t appear to be a number! Please enter a number!'
        };
    }
    else {
        return {
            value: 'No!',
            description: x + ' is NOT even!'
        };
    }
}

function isOdd(x) {
    const odd = x % 2;

    if(odd === 1) {
        return {
            value: 'Yep!',
            description: x + ' is odd!'
        };
    }
    else if(isNaN(odd)) {
        return {
            value: 'Error!',
            description: 'That doesn\'t appear to be a number! Please enter a number!'
        };
    }
    else {
        return {
            value: 'No!',
            description: x + ' is NOT odd!'
        };
    }
}