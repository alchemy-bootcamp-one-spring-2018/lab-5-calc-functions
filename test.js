'use strict';

function showMultiply() {
    var result;
    var x = parseInt(document.getElementById('multiply').value);
    var y = parseInt(document.getElementById('multiplyBy').value);
    result = x * y;
    document.getElementById('multiplyEquals').textContent = result.value;
    document.getElementById('multiply-description').textContent = result;
    console.log('hi');
    console.log(x);
    console.log(y);
    console.log(x * y);
}

function showAddition() {
    var result;
    var x = parseInt(document.getElementById('add1').value);
    var y = parseInt(document.getElementById('add2').value);
    result = x + y;
    document.getElementById('addEquals').textContent = result.value;
    document.getElementById('add-description').textContent = result;

}






