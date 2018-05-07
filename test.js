// tests calculation functions
/* globals add, subtract, multiply, divide */

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
    const result = divide(30, 5);
    if(result.value !== 6) {
        console.log('testDivide - value - FAIL', result.value);
        return false;
    } else {
        console.log('testDivide - value - SUCCESS');
        return true;
    }
}

var successes = 0;
var failures = 0;
if(testAdd() === false) {failures ++;} else {successes ++;}
if(testSubtract() === false) {failures ++;} else {successes ++;}
if(testMultiply() === false) {failures ++;} else {successes ++;}
if(testDivide() === false) {failures ++;} else {successes ++;}
document.getElementById('results').textContent = 'Passed ' + successes + ' tests. Failed ' + failures + '.';
  
