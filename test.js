//AC#3 getting the results math function
/*globals addition remainder */
function testAddition(){
    var result = addition(8, 7);
    if(result.value !== 15){
        console.log('testAddition- value - Fail');
    }
    else {
        console.log('testAddition- value - Success');
    }
}

function testRemainder() {
    var result = remainder(29, 6);
    if(result.value !== 5) {
        console.log('testRemainder - value - Fail!', result.value);
    }
    else {
        console.log('testRemainder - value - Success!');

    }
}
//loading test functions
testRemainder();
testAddition();