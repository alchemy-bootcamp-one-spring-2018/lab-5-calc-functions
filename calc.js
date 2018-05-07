//This is your math file
/* exported addNumbers subtractNumbers multiplyNumbers divideNumbers remainder hypotNumbers evenOdd*/

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
        value: Math.floor(quotient)
    };
}

function remainder(x, y) {
    var remainder = x % y;
    return {
        value: remainder
    };
}

function hypotNumbers(x, y){
    var hypotenuse = (x * x) + (y * y);
    return {
        value: hypotenuse
    };
}

function evenOdd(x){
    var evenOdd = x % 2;
    console.log('The value is ' + evenOdd);
    return {
        value: evenOdd
    };
}

function findPrime(x){
    for(var i = 2; i < x; i++){
        if(x % i === 0){
            return false;
        }
    }
    return true;
}