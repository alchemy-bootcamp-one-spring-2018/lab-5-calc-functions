/* globals remainder*/
/* exported testRemainder */

'use strict';
function testInputExists() {
    
}

function testAddition() {
    const result = addition(5, 6);
    if(result.value !== 11) {
        console.error('testAddition - value - FAIL');
    }
    else {
        console.log('testAddition - value - SUCCESS');
    }

}

function testSubtraction() {
    const result = subtraction(25, 20);
    if(result.value !== 5) {
        console.error('testAddition - value - FAIL');
    }
    else {
        console.log('testAddition - value - SUCCESS');
    }
}


function testMultiplication() {
    const result = multiplication(5, 9);
    if(result.value !== 45) {
        console.error('testMultiplication - value - FAIL');
    }
    else {
        console.log('testMultiplication - value - SUCCESS');
    }
}

function testDivision() {
    var result = division(25, 5);
    if(result.value !== 5) {
        console.error('testDivision - value - FAIL');
    }
    else {
        console.log('testDivision - value - SUCCESS');
    }
    result = division(39, 0);
    if(result.value !== 'error') {
        console.error('testDivision - 0 - FAIL');
    }
    else {
        console.log('testDivision - 0 - SUCCESS');
    }
}

function testRemainder() {
    const result = remainder(29, 6);
    if(result.value !== 5) {
        console.error('testRemainder - value - FAIL');
    }
    else {
        console.log('testRemainder - value - SUCCESS');
    }
}

function testOddOrEven() {
    var result = oddOrEven(29, 37);
    if(result.description !== 'x is odd. y is odd.') {
        console.error('testOddOrEven - odd/odd - FAIL');
    }
    else {
        console.log('testRemainder - odd/odd - SUCCESS');
    }
    result = oddOrEven(22, 2);
    if(result.description !== 'x is even. y is even.') {
        console.error('testOddOrEven - even/even - FAIL');
    }
    else {
        console.log('testRemainder - even/even - SUCCESS');
    }
    result = oddOrEven(0, 0);
    if(result.description !== 'x is neither odd nor even. y is neither odd nor even.') {
        console.error('testOddOrEven - zero/zero - FAIL');
    }
    else {
        console.log('testRemainder - zero/zero - SUCCESS');
    }
}

function testPrimeNumber() {
    var result = primeNumber(9);
    if(result.value !== false) {
        console.error('testPrimeNumber - 9 - FAIL');
    }
    else {
        console.log('testPrimeNumber - 9 - SUCCESS');
    }
    result = primeNumber(17);
    if(result.value !== true) {
        console.error('testPrimeNumber - 17 - FAIL');
    }
    else {
        console.log('testPrimeNumber - 17 - SUCCESS');
    }
}
testAddition();
testSubtraction();
testMultiplication();
testDivision();
testRemainder();
testOddOrEven();
testPrimeNumber();