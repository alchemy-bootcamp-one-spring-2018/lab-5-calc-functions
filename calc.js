/* exported sum product minus divide remainder */
function sum(x, y) {
    const remainder = x + y;

    return {
        value: remainder,
        content: 'The reslut of ' + x + ' + ' + y + ' is ' + remainder
    };
}

function product(x, y) {
    const remainder = x * y;

    return {
        value: remainder,
        content: 'The reslut of ' + x + ' * ' + y + ' is ' + remainder
    };
}

function minus(x, y) {
    const remainder = x - y;

    return {
        value: remainder,
        content: 'The reslut of ' + x + ' - ' + y + ' is ' + remainder
    };
}

function divide(x, y) {
    const remainder = x / y;

    return {
        value: remainder,
        content: 'The reslut of ' + x + ' / ' + y + ' is ' + remainder
    };
}

function remainder(x, y) {
    const remainder = x % y;

    return {
        value: remainder,
        content: 'The reslut of ' + x + ' % ' + y + ' is ' + remainder
    };
}