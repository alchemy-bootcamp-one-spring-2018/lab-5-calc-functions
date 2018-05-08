/* exported sum product minus divide remainder */
function sum(x, y) {
    var result = x + y;

    return {
        value: result,
        content: 'The reslut of ' + x + ' + ' + y + ' is ' + result
    };
}

function product(x, y) {
    var result = x * y;

    return {
        value: result,
        content: 'The reslut of ' + x + ' * ' + y + ' is ' + result
    };
}

function minus(x, y) {
    var result = x - y;

    return {
        value: result,
        content: 'The reslut of ' + x + ' - ' + y + ' is ' + result
    };
}

function divide(x, y) {
    var result = x / y;

    return {
        value: result,
        content: 'The reslut of ' + x + ' / ' + y + ' is ' + result
    };
}

function remainder(x, y) {
    var result = x % y;

    return {
        value: result,
        content: 'The reslut of ' + x + ' % ' + y + ' is ' + result
    };
}