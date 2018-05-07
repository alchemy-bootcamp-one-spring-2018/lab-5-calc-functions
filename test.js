/* globals remainder*/
/* exported testRemainder */

'use strict';

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
    const result = division(25, 5);
    if(result.value !== 5) {
        console.error('testDivision - value - FAIL');
    }
    else {
        console.log('testDivision - value - SUCCESS');
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

testAddition();
testSubtraction();
testMultiplication();
testDivision();
testRemainder();