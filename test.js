/* exported testAdd, testSubtract, testMultiply, testDivide */
/* globals add, subtract, multiply, divide */

function testAdd() {
    const result = add(15, 21);
    if(result.value !== 36) {
        console.error('testAdd - value - FAIL', result.value);
    }
    else {
        console.log('testAdd - value - SUCCESS');
    }
}

function testSubtract() {
    const result = subtract(10, 7);
    if(result.value !== 3) {
        console.error('testSubtract - value - FAIL', result.value);
    }
    else {
        console.log('testSubtract - value - SUCCESS');
    }
}

function testMultiply() {
    const result = multiply(7, 8);
    if(result.value !== 56) {
        console.error('testMultiply - value - FAIL', result.value);
    }
    else {
        console.log('testMultiply - value - SUCCESS');
    }
}

function testDivide() {
    const result = divide(42, 6);
    if(result.value !== 7) {
        console.error('testDivide - value - FAIL', result.value);
    }
    else {
        console.log('testDivide - value - SUCCESS');
    }
}

testAdd();
testSubtract();
testMultiply();
testDivide();