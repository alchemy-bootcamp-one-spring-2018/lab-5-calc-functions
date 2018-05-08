/* globals getAddSum getSubSum getProduct getQuotient getRemainder */

//values for test functions will be 21 and 5

//test for addition function
function testdisplayAddSum() {
    var result = getAddSum(21, 5);
    if(result.value !== 26) {
        console.error('testdisplayAddSum - value - FAIL', result.value);
    } else {
        console.log('testdisplayAddSum - value - SUCCESS', result.value);
    }
}

//test for subtraction function
function testdisplaySubSum() {
    const result = getSubSum(21, 5);
    if(result.value !== 16) {
        console.error('testdisplaySubSum - value - FAIL', result.value);
    } else {
        console.log('testdisplaySubSum - value - SUCCESS', result.value);
    }
}

//test for multiplication function
function testdisplayProduct() {
    const result = getProduct(21, 5);
    if(result.value !== 105) {
        console.error('testdisplayProduct - value - FAIL', result.value);
    } else {
        console.log('testdisplayProduct - value - SUCCESS', result.value);
    }
}

//test for division function
function testdisplayQuotient() {
    const result = getQuotient(21, 5);
    if(result.value !== 4.2) {
        console.error('testdisplayQuotient - value - FAIL', result.value);
    } else {
        console.log('testdisplayQuotient - value - SUCCESS', result.value);
    }
}

//test for remainder function
function testdisplayRemainder() {
    const result = getRemainder(29, 6);
    if(result.value !== 5) {
        console.error('testdisplayRemainder - value - FAIL', result.value);
    } else {
        console.log('testdisplayRemainder - value - SUCCESS', result.value);
    }
}
  
//entire test suite function
testdisplayAddSum();
testdisplaySubSum();
testdisplayProduct();
testdisplayQuotient();
testdisplayRemainder();
