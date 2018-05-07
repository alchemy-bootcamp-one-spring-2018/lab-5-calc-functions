/* exported remainder */

function remainder(x, y) {
    var remainder = x % y;

    return {
        value: remainder,
        description: 'The remainder of ' + x + ' divided by ' + y + ' is: ' + remainder
    };
}
function add(x, y) {
    var add = x + y;

    return {
        value: add,
        description: x + ' plus ' + y + ' is: ' + add
    };
}
function subtract(x, y) {
    var subtract = x - y;

    return {
        value: subtract,
        description: x + ' minus ' + y + ' is: ' + subtract
    };
}
function multi(x, y) {
    var multi = x * y;

    return {
        value: multi,
        description: x + ' multiplied by ' + y + ' is: ' + multi
    };
}