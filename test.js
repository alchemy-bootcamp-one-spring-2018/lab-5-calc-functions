/* global addition, subtraction, multiplication, division */
'use strict';


function testMyAddition() {
    var addResult = addition(4, 4);

    if(addResult !== 8) {
        console.log('testMyAddition fail');
    }
    else {
        console.log('testMyAddition success');
    }
}
testMyAddition();


function testMySubtraction() {
    var subtractResult = subtraction(17, 6);

    if(subtractResult !== 11) {
        console.log('testMySubtraction fail');
    }
    else {
        console.log('testMySubtraction success');
    }
}
testMySubtraction();


function testMyMultiplication() {
    var multiplyResult = multiplication(3, 7);

    if(multiplyResult !== 21) {
        console.log('testMyMultiplication fail');
    }
    else {
        console.log('testMyMultiplication success');
    }
}
testMyMultiplication();


function testMyDivision() {
    var divideResult = division(30, 5);

    if(divideResult !== 6) {
        console.log('testMyDivision fail');
    }
    else {
        console.log('testMyDivision success');
    }
}
testMyDivision();




















