//AC#3 getting the results math function
/*globals addition remainder subtract product */

//test addition
function testAddition(){
    var result = addition(8, 7);
    if(result.value !== 15){
        console.log('testAddition- value - Fail');
    }
    else {
        console.log('testAddition- value - Success');
    }
}

//test remainder
function testRemainder() {
    var result = remainder(29, 6);
    if(result.value !== 5) {
        console.log('testRemainder - value - Fail!', result.value);
    }
    else {
        console.log('testRemainder - value - Success!');

    }
}

//test subtraction
function testSubtraction() {
    var result = subtract(10, 5);
    if(result.value !== 5) {
        console.log('testSubtraction - value - Fail!', result.value);
    }
    else {
        console.log('testSubtraction - value - Success!');
    }
}

//test multiplication
function testMultiply() {
    var result = product(4, 5);
    if(result.value !== 20){
        console.log('testMultiply - value - Fail!', result.value);
    }
    else {
        console.log('testMultiply - value - Success!');
    }
}
//loading test functions
testRemainder();
testAddition();
testSubtraction();
testMultiply();