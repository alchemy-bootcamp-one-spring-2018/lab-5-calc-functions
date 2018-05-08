/* exported diff product sum quotient remainder*/

function sum(x, y) {
    const sum = x + y;

    return {
        value: sum,
        description: 'The sum of ' + x + ' added to ' + y + ' is: ' + sum
    };
}

function diff(x, y) {
    const diff = x - y;

    return {
        value: diff,
        description: 'The difference between ' + x + ' and ' + y + ' is: ' + diff
    };
}

function product(x, y) {
    const product = x * y;

    return {
        value: product,
        description: 'The product of ' + x + ' multiplied by ' + y + ' is: ' + product
    };
}

function quotient(x, y) {
    const quotient = x / y;

    return {
        value: quotient,
        description: 'The quotient of ' + x + ' divided by ' + y + ' is: ' + quotient
    };
}



function remainder(x, y) {
    const remainder = x % y;

    return {
        value: remainder,
        description: 'the remainder of ' + x + ' divided by ' + y + ' is: ' + remainder
    };
}




