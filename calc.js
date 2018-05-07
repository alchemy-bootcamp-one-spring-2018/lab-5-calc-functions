/* exported subtract remainder addition difference product*/
function remainder(x, y) {
    var remainder = x % y;

    return {
        value: remainder,
        description:'The remainder of ' + x + ' % ' + y + ' is: ' + remainder
    };
}
function addition(x, y){
    var sum = x + y;

    return {
        value: sum,
        description:'The sum of ' + x + ' + ' + y + ' is: ' + sum
    };
}
function subtract(x, y){
    var difference = x - y;

    return {
        value: difference,
        description:'The difference of ' + x + ' - ' + y + ' is: ' + difference
    };
}
function product(x, y){
    var product = x * y;

    return {
        value : product,
        description:'The product of ' + x + ' x ' + y + ' is: ' + product
    };
}
