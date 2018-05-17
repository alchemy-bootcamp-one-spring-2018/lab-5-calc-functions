/* exported additionSum subtractionSum sum product quotient AdditionSum displayAddSum displaySubSum remainder displayProduct getRemainder getSubSum getProduct getAddSum getQuotient
displayQuotient displayRemainder */

//addition function
function getAddSum(x, y) {
    var additionSum = x + y;
  
    return {
        value: additionSum,
        description: x + ' plus ' + y + ' is: ' + additionSum };
}

//subtraction function
function getSubSum(x, y) {
    var subtractionSum = x - y;
  
    return {
        value: subtractionSum,
        description: x + ' minus ' + y + ' is: ' + subtractionSum };
}

//multiplication function
function getProduct(x, y) {
    var product = x * y;
  
    return {
        value: product,
        description: x + ' times ' + y + ' is: ' + product
    };
}

//division function
function getQuotient(x, y) {
    var quotient = x / y;
  
    return {
        value: quotient,
        description: x + ' divided by ' + y + ' is: ' + quotient
    };
}

//remainder function
function getRemainder(x, y) {
    var remainder = x % y;
    var quotient = x / y;
  
    return {
        value: remainder,
        description: x + ' divided by ' + y + ' is: ' + quotient + ', leaving a remainder of: ' + remainder
    };
}

