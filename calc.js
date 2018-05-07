/* exported subtract remainder addition difference*/
function remainder(x, y) {
    var remainder = x % y;

    return {
        value: remainder
    };
}
function addition(x, y){
    var sum = x + y;

    return {
        value: sum
    };
}
function subtract(x, y){
    var difference = x - y;

    return {
        value: difference
    };
}
