

function testRemainder() {
    const result = remainder(29, 6);
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
