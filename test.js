// tests calculation functions
/* globals add, subtract, multiply, divide, divideWithRemainder */

function testAdd() {
    const result = add(8, 30);
    if(result.value !== 38) {
        console.log('testAdd - value - FAIL', result.value);
        return false;
    } else {
        console.log('testAdd - value - SUCCESS');
        return true;
    }
}

function testSubtract() {
    const result = subtract(35, 5);
    if(result.value !== 30) {
        console.log('testSubtract - value - FAIL', result.value);
        return false;
    } else {
        console.log('testSubtract - value - SUCCESS');
        return true;
    }
}

function testMultiply() {
    const result = multiply(5, 100);
    if(result.value !== 500) {
        console.log('testMultiply - value - FAIL', result.value);
        return false;
    } else {
        console.log('testMultiply - value - SUCCESS');
        return true;
    }
}

function testDivide() {
    var failure = false;
    // test for normal division
    var result = divide(30, 5);
    if(result.value !== 6) {
        console.log('testDivide - value - FAIL', result.value);
        failure = true;
    } else {
        console.log('testDivide - value - SUCCESS');
    }
    // test for division by zero
    result = divide (20, 0);
    if(result.value !== 'undefined') {
        console.log ('testDivide - divide by zero - FAIL', result.value);
        failure = true;
    } else {
        console.log('testDivide - divide by zero - SUCCESS');
    }
    // if any test was failed, return false
    if(failure === false) {
        return true;
    } else {
        return false;
    }
}

function testDivideWithRemainder() {
    var failure = false;
    // test for normal division
    var result = divideWithRemainder(30, 4);
    if(result.value !== '7 remainder 2') {
        console.log('testDivide - value - FAIL', result.value);
        failure = true;
    } else {
        console.log('testDivide - value - SUCCESS');
    }
    // test for division by zero
    result = divide (20, 0);
    if(result.value !== 'undefined') {
        console.log ('testDivide - divide by zero - FAIL', result.value);
        failure = true;
    } else {
        console.log('testDivide - divide by zero - SUCCESS');
    }
    // if any test was failed, return false
    if(failure === false) {
        return true;
    } else {
        return false;
    }
}

var successes = 0;
var failures = 0;
if(testAdd() === true) {successes ++;} else {failures ++;}
if(testSubtract() === true) {successes ++;} else {failures ++;}
if(testMultiply() === true) {successes ++;} else {failures ++;}
if(testDivide() === true) {successes ++;} else {failures ++;}
if(testDivideWithRemainder() === true) {successes ++;} else {failures ++;}
document.getElementById('results').textContent = 'Passed ' + successes + ' tests. Failed ' + failures + '.';
  
