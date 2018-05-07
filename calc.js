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
        value: sum
    };
}

function subtract(x, y) {
    const sum = x - y;

    return {
        value: sum
    };
}

function multiply(x, y) {
    const sum = x * y;

    return {
        value: sum
    };
}

function divide(x, y) {
    const sum = x / y;

    return {
        value: sum
    };
}