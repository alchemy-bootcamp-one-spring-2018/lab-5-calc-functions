// Test some shizz
function testSum() {
    const result = sum(29, 6);
    if(result.value !== 35) {
        console.log('testSum - FAIL', result.value);
    }
    else {
        console.log('testSum - SUCCESS');
    }
}

function testMinus() {
    const result = minus(29, 6);
    if(result.value !== 23) {
        console.error('testMinus - FAIL', result.value);
    }
    else {
        console.log('testMinus - SUCCESS');
    }
}

function testProduct() {
    const result = product(25, 4);
    if(result.value !== 100) {
        console.error('testProduct - FAIL', result.value);
    }
    else {
        console.log('testProduct - SUCCESS');
    }
}

function testDivide() {
    const result = divide(25, 5);
    if(result.value !== 5) {
        console.error('testDivide - FAIL', result.value);
    }
    else {
        console.log('testDivide - SUCCESS');
    }
}


function testRemainder() {
    const result = remainder(27, 9);
    if(result.value !== 0) {
        console.error('testRemainder - FAIL', result.value);
    }
    else {
        console.log('testRemainder - SUCCESS');
    }
}

testSum();
testMinus();
testProduct();
testDivide();
testRemainder();