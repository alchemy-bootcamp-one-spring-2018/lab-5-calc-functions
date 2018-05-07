/* globals add, subtract, multiply, divide, divideWithRemainder, hypotenuse, isEven, isOdd */

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

function testDivideByZero() {
    const result = divide(42, 0);
    if(result.value !== 'To infinity and beyond!') {
        console.error('testDivideByZero - value - FAIL', result.value);
    }
    else {
        console.log('testDivideByZero - value - SUCCESS');
    }
}

function testDivideWithRemainder() {
    const result = divideWithRemainder(42, 5);
    if(result.firstValue !== 8 && result.secondValue !== 2) {
        console.error('testDivideWithRemainder - value - FAIL', result.value);
    }
    else {
        console.log('testDivideWithRemainder - value - SUCCESS');
    }
}

function testHypotenuse() {
    const result = hypotenuse(3, 4);
    if(result.value !== 5) {
        console.error('testHypotenuse - value - FAIL', result.value);
    }
    else {
        console.log('testHypotenuse - value - SUCCESS');
    }
}

function testIsEven() {
    const result = isEven(8);
    if(result.value === 1) {
        console.error('testIsEven - value - FAIL', result.value);
    }
    else {
        console.log('testIsEven - value - SUCCESS');
    }
}

function testIsOdd() {
    const result = isOdd(9);
    if(result.value === 0) {
        console.error('testIsOdd - value - FAIL', result.value);
    }
    else {
        console.log('testIsOdd - value - SUCCESS');
    }
}

testAdd();
testSubtract();
testMultiply();
testDivide();
testDivideByZero();
testDivideWithRemainder();
testHypotenuse();
testIsEven();
testIsOdd();