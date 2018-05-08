/* exported remainder add subtract multiply divide */

function remainder(x, y) {
    const remainder = x % y;
    return {
        value: remainder,
        description: 'The remainder of ' + x + ' and ' + y + ' is: ' + remainder
    };

}

function add(x, y) {
    const sum = x + y;

    return {
        value: sum,
        description: 'The sum of ' + x + ' and ' + y + ' is: ' + sum
    };
}

function subtract(x, y) {
    const sum = x - y;

    return {
        value: sum,
        description: 'The difference of ' + x + ' and ' + y + ' is: ' + sum
    };
}

function multiply(x, y) {
    const sum = x * y;

    return {
        value: sum,
        description: 'The product of ' + x + ' and ' + y + ' is: ' + sum
    };
}

function divide(x, y) {
    if(y === 0) {
        alert('please enter a value other than 0');
    }
    else {
        const sum = x / y;
        return {
            value: sum,
            description: 'The quotient of ' + x + ' and ' + y + ' is: ' + sum
        };
    }
}

function hypotenuse(a, b) {
    const hypotenuse = Math.sqrt((a ** 2) + (b ** 2));   
    return {
        value: hypotenuse,
        description: 'The hypotenuse is: ' + hypotenuse
    };
   
}


