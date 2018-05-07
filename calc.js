// calculation functions
/* exported add subtract multiply divide */


function add(num1, num2) {
    const result = num1 + num2;
    return {
        value: result,
        description: 'The sum of ' + num1 + ' and ' + num2 + ' is ' + result + '.'
    };
}

function subtract(num1, num2) {
    const result = num1 - num2;
    return {
        value: result,
        description: 'The difference between ' + num1 + ' and ' + num2 + ' is ' + result + '.'
    };
}

function multiply(num1, num2) {
    const result = num1 * num2;
    return {
        value: result,
        description: 'The product of ' + num1 + ' and ' + num2 + ' is ' + result + '.'
    };
}

function divide(dividend, divisor) {
    const result = dividend / divisor;
    return {
        value: result,
        description: 'The quotient of ' + dividend + ' divided by  ' + divisor + ' is ' + result + '.'
    };
} 