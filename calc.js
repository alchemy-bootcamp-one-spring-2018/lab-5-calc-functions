/* exported sum product minus divide remainder */
function sum(x, y) {
    const result = x + y;

    return {
        value: result,
        content: 'The reslut of ' + x + ' + ' + y + ' is ' + result
    };
}

function product(x, y) {
    const result = x * y;

    return {
        value: result,
        content: 'The reslut of ' + x + ' * ' + y + ' is ' + result
    };
}

function minus(x, y) {
    const result = x - y;

    return {
        value: result,
        content: 'The reslut of ' + x + ' - ' + y + ' is ' + result
    };
}

function divide(x, y) {
    const result = x / y;

    return {
        value: result,
        content: 'The reslut of ' + x + ' / ' + y + ' is ' + result
    };
}

function remainder(x, y) {
    const result = x % y;

    return {
        value: result,
        content: 'The reslut of ' + x + ' % ' + y + ' is ' + result
    };
}