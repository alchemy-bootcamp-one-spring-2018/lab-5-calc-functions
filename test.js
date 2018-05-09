/* globals sum subtract multiply divide */
/* exported testSum testSubtract testMultiply testDivide*/

function testSum() {
    var result = sum(1, 1);

    if(result.value !== 2) {
        console.error('testSum - value - FAIL. Expected:', result.value);
    }
    else {
        console.log('testSum - value - SUCCESS');
    }

}

function testSubtract() {
    var result = subtract(2, 1);

    if(result.value !== 1) {
        console.error('testSubtract - value - FAIL. Expected:', result.value);
    }
    else {
        console.log('testSubtract - value - SUCCESS');
    }

}

function testMultiply() {
    var result = multiply(2, 2);

    if(result.value !== 4) {
        console.error('testMultiply - value - FAIL. Expected:', result.value);
    }
    else {
        console.log('testMultiply - value - SUCCESS');
    }

}

function testDivide() {
    var result = divide(2, 2);

    if(result.value !== 1) {
        console.error('testDivide - value - FAIL. Expected:', result.value);
    }
    else {
        console.log('testDivide - value - SUCCESS');
    }

}


testSum();
testSubtract();
testMultiply();
testDivide();

