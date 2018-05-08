/* exported remainder*/
/* exported sum*/
function sum(x, y) {
    const sum = x + y;

    return {
        value: sum,
        description: 'The sum of ' + x + 'divided by ' + y + 'is: ' + sum
    };
}

function remainder(x, y) {
    const remainder = x % y;

    return {
        value: remainder,
        description: 'the remainder of ' + x + 'divided by ' + y + 'is: ' + remainder
    };
}




