/* exported subtract remainder addition difference product quotient*/

//function for modulus
function remainder(x, y) {
    var remainder = x % y;

    return {
        value: remainder,
        description:'The remainder of ' + x + ' % ' + y + ' is: ' + remainder
    };
}

//function for addition
function addition(x, y){
    var sum = x + y;

    return {
        value: sum,
        description:'The sum of ' + x + ' + ' + y + ' is: ' + sum
    };
}

//function for subtraction
function subtract(x, y){
    var difference = x - y;

    return {
        value: difference,
        description:'The difference of ' + x + ' - ' + y + ' is: ' + difference
    };
}

//function for multiplication
function product(x, y){
    var product = x * y;
    
    return {
        value : product,
        description:'The product of ' + x + ' x ' + y + ' is: ' + product
    };
}

//function for division
function quotient(x, y) {
    var quotient = x / y;
    if(x === 0 || y === 0){
        alert('You broke the UNIVERSE!!!');
        return {
            description: 'ERROR: You cannot divide by 0!'
        };
    }
    return {
        value: quotient,
        description: 'The quotient of ' + x + ' % ' + y + ' is: ' + quotient
    };
}
