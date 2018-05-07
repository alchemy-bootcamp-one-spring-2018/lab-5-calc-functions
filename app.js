/* globals addition, subtraction, multiplication, division, remainder */
/* exported doAddition, doSubtraction, doMultiplication, doDivision, doRemainder */
'use strict';
function storeInput() {
    var x = parseInt(document.getElementById('input-x').value);
    var y = parseInt(document.getElementById('input-y').value);
    return [x, y];
}

function doAddition() {
    var [x, y] = storeInput();
    console.log(x, y);
    console.log(isNaN(x));
    if(isNaN(x) === false && isNaN(y) === false) {
        const result = addition(x, y);
        document.getElementById('response').textContent = x + ' plus ' + y + ' equals ' + result.value;
    }
}

function doSubtraction() {
    var [x, y] = storeInput();
    if(isNaN(x) === false && isNaN(y) === false) {
        const result = subtraction(x, y);
        document.getElementById('response').textContent = x + ' minus ' + y + ' equals ' + result.value;
    }
}

function doMultiplication() {
    var [x, y] = storeInput();
    if(isNaN(x) === false && isNaN(y) === false) {
        const result = multiplication(x, y);
        document.getElementById('response').textContent = x + ' times ' + y + ' equals ' + result.value;
    }
}

function doDivision() {
    var [x, y] = storeInput();
    if(isNaN(x) === false && isNaN(y) === false) {
        const result = division(x, y);
        document.getElementById('response').textContent = x + ' divided by ' + y + ' equals ' + result.value;
    }
}

function doRemainder() {
    // include form validation
    var [x, y] = storeInput();
    if(isNaN(x) === false && isNaN(y) === false) {
        const result = remainder(x, y);
        document.getElementById('response').textContent = 'Remainder of ' + x + ' divided by ' + y + ' is ' + result.value;
    }
}