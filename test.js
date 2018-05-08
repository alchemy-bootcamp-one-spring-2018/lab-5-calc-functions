// Test some shizz
function testSum() {
    const result = sum(29, 6);
    if(result.value !== 35) {
        console.error('testSum - value - FAIL', result.value);
    }
    else {
        console.log('testSum - value - SUCCESS');
    }
}

function testMinus() {
    const result = minus(29, 6);
    if(result.value !== 23) {
        console.error('testMinus - value - FAIL', result.value);
    }
    else {
        console.log('testMinus - value - SUCCESS');
    }
}

function testProduct() {
    const result = product(25, 4);
    if(result.value !== 100) {
        console.error('testProduct - value - FAIL', result.value);
    }
    else {
        console.log('testProduct - value - SUCCESS');
    }
}

function testDivide() {
    const result = divide(25, 5);
    if(result.value !== 5) {
        console.error('testDivide - value - FAIL', result.value);
    }
    else {
        console.log('testDivide - value - SUCCESS');
    }
}


function testRemainder() {
    const result = remainder(27, 9);
    if(result.value !== 0) {
        console.error('testRemainder - value - FAIL', result.value);
    }
    else {
        console.log('testRemainder - value - SUCCESS');
    }
}

testSum();
testMinus();
testProduct();
testDivide();
testRemainder();