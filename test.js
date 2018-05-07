//values for test functions will be 21 and 5

//test for addition function
function testdisplayAddSum() {
    const result = displayAddSum(21, 5);
    if(result.value !== 26) {
        console.error('testdisplayAddSum - value - FAIL', result.value);
    } else {
        console.log('testdisplayAddSum - value - SUCCESS');
    }
}

//test for subtraction function
function testdisplayRemainder() {
    const result = displayRemainder(29, 6);
    if(result.value !== 5) {
        console.error('testRemainder - value - FAIL', result.value);
    } else {
        console.log('testRemainder - value - SUCCESS');
    }
}

//test for multiplication function
function testdisplayRemainder() {
    const result = displayRemainder(29, 6);
    if(result.value !== 5) {
        console.error('testRemainder - value - FAIL', result.value);
    } else {
        console.log('testRemainder - value - SUCCESS');
    }
}

//test for division function
function testdisplayRemainder() {
    const result = displayRemainder(29, 6);
    if(result.value !== 5) {
        console.error('testRemainder - value - FAIL', result.value);
    } else {
        console.log('testRemainder - value - SUCCESS');
    }
}


//test for remainder function
function testdisplayRemainder() {
    const result = displayRemainder(29, 6);
    if(result.value !== 5) {
        console.error('testRemainder - value - FAIL', result.value);
    } else {
        console.log('testRemainder - value - SUCCESS');
    }
}
  

//entire test suite function
testdisplayAddSum();
testdisplaySubSum();
testdisplayProduct();
testdisplayQuotient();
testdisplayRemainder();
