// Test some shizz
function testSum() {
    const result = sum(29, 6);
    if(result.value !== 35) {
        console.error('testRemainder - value - FAIL', result.value);
    }
    else {
        console.log('testRemainder - value - SUCCESS');
    }
}

function testMinus() {
    const result = minus(29, 6);
    if(result.value !== 23) {
        console.error('testRemainder - value - FAIL', result.value);
    }
    else {
        console.log('testRemainder - value - SUCCESS');
    }
}

function testProduct() {
    const result = product(25, 4);
    if(result.value !== 100) {
        console.error('testRemainder - value - FAIL', result.value);
    }
    else {
        console.log('testRemainder - value - SUCCESS');
    }
}

function testDivide() {
    const result = divide(25, 5);
    if(result.value !== 5) {
        console.error('testRemainder - value - FAIL', result.value);
    }
    else {
        console.log('testRemainder - value - SUCCESS');
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