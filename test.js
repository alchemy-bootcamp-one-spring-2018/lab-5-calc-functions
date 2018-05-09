'use strict';
/* exported sumCalc, subCalc, multCalc, divCalc */


function testSum() {
    const result = sumCalc(5, 17);
    if(result.value !== 22) {
        console.error('testRemainder - value - FAIL', result.value);
    } else {
        console.log('testRemainder - value - SUCCESS');
    }
}
  
testSum();

function testDifference() {
    const result = subCalc(27, 18);
    if(result.value !== 9) {
        console.error('testRemainder - value - FAIL', result.value);
    } else {
        console.log('testRemainder - value - SUCCESS');
    }
}
  
testDifference();

function testProduct() {
    const result = multCalc(12, 12);
    if(result.value !== 144) {
        console.error('testRemainder - value - FAIL', result.value);
    } else {
        console.log('testRemainder - value - SUCCESS');
    }
}
  
testProduct();

function testDiv() {
    const result = divCalc(30, 6);
    if(result.value !== 5) {
        console.error('testRemainder - value - FAIL', result.value);
    } else {
        console.log('testRemainder - value - SUCCESS');
    }
}
  
testDiv();