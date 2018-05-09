/* globals add subtract multiply divide */
/* exported showSum */
/* exported showDifference */
/* exported showProduct */
/* exported showQuotient */

console.log('Test.js');

function showSum() {
    const result = add(7, 3);
    if(result.value !== 10) {
        console.error('testSum - value - FAIL', result.value);
    } else {
        console.log('testSum - value - SUCCESS');
    }
}
  
showSum();

function showDifference() {
    const result = subtract(7, 3);
    if(result.value !== 4) {
        console.error('testDifference - value - FAIL', result.value);
    } else {
        console.log('testDifference - value - SUCCESS');
    }
}

showDifference();

function showProduct() {
    const result = multiply(7, 3);
    if(result.value !== 21) {
        console.error('testProduct - value - FAIL', result.value);
    } else {
        console.log('testProduct - value - SUCCESS');
    }
}

showProduct();

function showQuotient() {
    const result = divide(6, 3);
    if(result.value !== 2) {
        console.error('testQuotient - value - FAIL', result.value);
    } else {
        console.log('testQuotient - value - SUCCESS');
    }
}

showQuotient();