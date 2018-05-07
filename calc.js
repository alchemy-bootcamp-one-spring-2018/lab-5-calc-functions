//This is your math file
/* export addNumbers subtractNumbers multiplyNumbers divideNumbers*/

function addNumbers(x, y){
    var sum = x + y;

    return {
        value: sum
    };
}

function subtractNumbers(x, y){
    var difference = x - y;

    return {
        value: difference
    };
}

function multiplyNumbers(x, y){
    var product = x * y;

    return {
        value: product
    };
}

function divideNumbers(x, y){
    var quotient = x / y;
    return {
        value: quotient
    };
}



// function remainder(x, y) {
//     var remainder = x % y;

//     return {
//         value: remainder
//     };
// }