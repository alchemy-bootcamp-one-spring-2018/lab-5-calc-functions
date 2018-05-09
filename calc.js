/* exported remainder, add, subtract, multi */

function remainder(x, y) {
    var remainder = x % y;

    return {
        value: remainder,
        description: 'The remainder of ' + x + ' divided by ' + y + ' is: ' + remainder
    };
}
function add(x, y) {
    var total = x + y;

    return {
        value: total,
        description: x + ' plus ' + y + ' is: ' + total
    };
}
function subtract(x, y) {
    var total = x - y;

    return {
        value: total,
        description: x + ' minus ' + y + ' is: ' + total
    };
}
function multi(x, y) {
    var total = x * y;

    return {
        value: total,
        description: x + ' multiplied by ' + y + ' is: ' + total
    };
}