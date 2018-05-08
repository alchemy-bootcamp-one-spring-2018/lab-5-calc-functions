/* global add, subtract, multiply, divide  */
/* exported testSum, testDifference, testProduct, testQuotient, testRemainder */
'use strict';

// add
function testSum() {
    var resultSum = add(10, 4);
    
    if(resultSum.value !== 14) {
        console.error('testSum - value - FAIL', resultSum.value);
    }
    else {
        console.log('testSum - value - SUCCESS');
    }
}

testSum();

// subtract
function testDifference() {
    var resultDifference = subtract(25, 5);
    
    if(resultDifference.value !== 20) {
        console.error('testDifference - value - FAIL', resultDifference.value);
    }
    else {
        console.log('testDifference - value - SUCCESS');
    }
}

testDifference();

// multiply
function testProduct() {
    var resultProduct = multiply(12, 12);
    
    if(resultProduct.value !== 144) {
        console.error('testProduct - value - FAIL', resultProduct.value);
    }
    else {
        console.log('testProduct - value - SUCCESS');
    }
}

testProduct();

// divide
function testQuotient() {
    var resultQuotient = divide(30, 10);
    
    if(resultQuotient.value !== 3) {
        console.error('testQuotient - value - FAIL', resultQuotient.value);
    }
    else {
        console.log('testQuotient - value - SUCCESS');
    }
}

testQuotient();

// remainder
function testModulo() {
    var resultRemainder = remainder(29, 6);

    if(resultRemainder.value !== 5) {
        console.error('testRemainder - value - FAIL', resultRemainder.value);
    }
    else {
        console.log('testRemainder - value - SUCCESS');
    }
}


testRemainder();