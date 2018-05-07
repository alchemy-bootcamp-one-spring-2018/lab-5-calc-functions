/* exported remainder add subtract multiply divide */

function remainder(x, y) {
    const remainder = x % y;
    return {
        value: remainder,
        description: 'The remainder of ' + x + ' divided ' + y + ' is: ' + remainder
    };

}

function add(x, y) {
    const sum = x + y;

    return {
        value: sum,
        description: 'The sum of ' + x + ' plus ' + y + ' is: ' + sum
    };
}

function subtract(x, y) {
    const sum = x - y;

    return {
        value: sum,
        description: 'The sum of ' + x + ' minus ' + y + ' is: ' + sum
    };
}

function multiply(x, y) {
    const sum = x * y;

    return {
        value: sum,
        description: 'The product of ' + x + ' multiplied by ' + y + ' is: ' + sum
    };
}

function divide(x, y) {
    const sum = x / y;

    return {
        value: sum,
        description: 'The quotient ' + x + ' divided by ' + y + ' is: ' + sum
    };
}