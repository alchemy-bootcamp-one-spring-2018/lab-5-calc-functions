// calculation functions
/* exported add subtract multiply divide divideWithRemainder*/


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
    if(divisor === 0){
        return {
            value: 'undefined',
            description: 'Division by zero is undefined'
        };
    }
    const result = dividend / divisor;
    return {
        value: result,
        description: 'The quotient of ' + dividend + ' divided by  ' + divisor + ' is ' + result + '.'
    };
}

function divideWithRemainder(dividend, divisor) {
    if(divisor === 0) {
        return {
            value: 'undefined',
            description: 'Division by zero is undefined'
        };
    }
    const quotient = Math.floor(dividend / divisor);
    const remainder = dividend % divisor;
    return {
        value: quotient + ' remainder ' + remainder,
        description: 'The quotient of ' + dividend + ' divided by  ' + divisor + ' is ' + quotient + ' with a remainder of ' + remainder + '.'
    };
}