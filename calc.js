

function sum(x , y){
    var sum = x + y;
    return {
        value: sum,
        description: ('The sum of ' + x + ' and ' + y + ' is ' + sum)
    };
}

function difference(x , y){
    var difference = x - y;
    return {
        value: difference,
        description: ('The difference of ' + x + ' and ' + y + ' is ' + difference)
    };
}

function product(x , y){
    var product = x * y;
    return {
        value: product,
        description: ('The product of ' + x + ' and ' + y + ' is ' + product)
    };
}

function quotient(x , y){
    var quotient = x % y;
    return {
        value: quotient,
        description: ('The quotient of ' + x + ' and ' + y + ' is ' + quotient)
    };
}