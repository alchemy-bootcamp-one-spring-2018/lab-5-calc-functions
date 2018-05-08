'use strict';

function showAddition() {
    var result;
    var x = parseInt(document.getElementById('add1').value);
    var y = parseInt(document.getElementById('add2').value);
    result = x + y;
    document.getElementById('addEquals').textContent = result.value;
    document.getElementById('add-description').textContent = result;
    console.log(x);
    console.log(y);
    console.log(x + y);
}

function showSubtraction() {
    var result;
    var x = parseInt(document.getElementById('subtract1').value);
    var y = parseInt(document.getElementById('subtract2').value);
    result = x - y;
    document.getElementById('subtractEquals').tectContent = result.value;
    document.getElementById('subtract-description').textContent = result;
    console.log(x);
    console.log(y);
    console.log(x - y);
}

function showMultiply() {
    var result;
    var x = parseInt(document.getElementById('multiply1').value);
    var y = parseInt(document.getElementById('multiply2').value);
    result = x * y;
    document.getElementById('multiplyEquals').textContent = result.value;
    document.getElementById('multiply-description').textContent = result;
    console.log(x);
    console.log(y);
    console.log(x * y);
}

function showDivision() {
    var result;
    var x = parseInt(document.getElementById('divide1').value);
    var y = parseInt(document.getElementById('divide2').value);
    result = x / y;
    document.getElementById('divideEquals').textContent = result.value;
    document.getElementById('divide-description').textContent = result;
    console.log(x);
    console.log(y);
    console.log(x / y);
}






