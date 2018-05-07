/* exported add, subtract, multiply, divide */

function add(x, y) {
    const sum = x + y;

    return {
        value: sum,
        description: 'The sum of ' + x + ' and ' + y + ' is: ' + sum
    };
}

function subtract(x, y) {
    const diff = x - y;

    return {
        value: diff,
        description: 'The difference of ' + x + ' and ' + y + ' is: ' + diff
    };
}

function multiply(x, y) {
    const multiple = x * y;

    return {
        value: multiple,
        description: 'The multiple of ' + x + ' and ' + y + ' is: ' + multiple
    };
}

function divide(x, y) {
    const quotient = x / y;

    return {
        value: quotient,
        description: 'The quotient of ' + x + ' and ' + y + ' is: ' + quotient
    };
}