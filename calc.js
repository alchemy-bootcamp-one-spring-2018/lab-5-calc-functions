/* exported add */
/* exported subtract */
/* exported multiply */
/* exported divide */
console.log('calc.js');


function add(x, y) {
    const sum = x + y;
  
    return {
        value: sum,
        description: 'Sum of ' + x + ' and ' + y + ' is: ' + sum
    };
}
function subtract(x, y) {
    const difference = x - y;
  
    return {
        value: difference,
        description: 'Difference of ' + x + ' and ' + y + ' is: ' + difference
    };
}

function multiply(x, y) {
    const product = x * y;
  
    return {
        value: product,
        description: 'Product of ' + x + ' and ' + y + ' is: ' + product
    };
}

function divide(x, y) {
    const quotient = x / y;
  
    return {
        value: quotient,
        description: 'Quotient of ' + x + ' and ' + y + ' is: ' + quotient
    };
}