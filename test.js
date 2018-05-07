
/* exported testSum testDifference testProduct */

function testSum() {
    const result = sum(2, 2);
    if(result.value !== 6) {
        console.error('testSum - value - FAIL' , result.value);
    }
    else {
        console.log('testSum - value - SUCCESS');
    }
}

function testDifference() {
    const result = difference(4 - 2);
    if(result.value !== 2) {
        console.error('testDifference - value - FAIL' , result.value);
    }
    else {
        console.log('testDifference - value - SUCCESS');
    }
}

function testProduct() {
    const result = product(4 * 2);
    if(result.value !== 8) {
        console.error('testProduct - value - FAIL' , result.value);
    }
    else {
        console.log('testProduct - value - SUCCESS');
    }
}

function testQuotient() {
    const result = quotient(4 % 2);
    if(result.value !== 2) {
        console.error('testQuotient - value - FAIL' , result.value);
    }
    else {
        console.log('testQuotient - value - SUCCESS');
    }
}


testQuotient();
testProduct();
testDifference();
testSum();