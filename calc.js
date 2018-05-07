/* exported remainder*/

function remainder(x, y) {
    const remainder = x % y;

    return {
        value: remainder,
        description: 'the remainder of ' + x + 'divided by ' + y + 'is: ' + remainder
    };
}