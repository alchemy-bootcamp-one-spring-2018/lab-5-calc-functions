//AC#3 getting the results math function
/* globals addition remainder subtract product quotient */

//test addition
function testAddition(){
    var result = addition(8, 7);
    if(result.value !== 15){
        console.log('testAddition- value - Fail', result.value);
    }
    else {
        console.log('testAddition- value - Success', result.value);
    }
}

//test remainder
function testRemainder() {
    var result = remainder(29, 6);
    if(result.value !== 5) {
        console.log('testRemainder - value - Fail!', result.value);
    }
    else {
        console.log('testRemainder - value - Success!', result.value);

    }
}

//test subtraction
function testSubtraction() {
    var result = subtract(10, 5);
    if(result.value !== 5) {
        console.log('testSubtraction - value - Fail!', result.value);
    }
    else {
        console.log('testSubtraction - value - Success!', result.value);
    }
}

//test multiplication
function testMultiply() {
    var result = product(4, 5);
    if(result.value !== 20){
        console.log('testMultiply - value - Fail!', result.value);
    }
    else {
        console.log('testMultiply - value - Success!', result.value);
    }
}

//test divide
function testDivide(){
    var result = quotient(10, 2);
    if(result.value !== 5){
        console.log('testDivide - value - FAIL!', result.value);
    }
    else {
        console.log('testDivide - value - Success!', result.value);
    }
}

// testing even odd
function testEven(){
    var result = quotient(6, 3);
    if(result.value % 2 === 0) {
        console.log('testEven - value - EVEN');
    }
    else {
        console.log('testEven - value - ODD');
    }
}
//loading test functions
testRemainder();
testAddition();
testSubtraction();
testMultiply();
testDivide();
testEven();
