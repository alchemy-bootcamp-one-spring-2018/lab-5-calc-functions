/* global add, subtract, multiply, divide */
/* exported showAdd, showSubtract, showMultiply, showDivide */
'use strict';

//show results of add()
function showAdd() {
    //accept input for variables from user
    var x = parseInt(document.getElementById('add_x').value);
    var y = parseInt(document.getElementById('add_y').value);
    //call add()
    var result = add(x, y);
    //return result to user
    document.getElementById('add_result').textContent = result.value;
}

//show results of subtract()
function showSubtract() {
    //accept input for variables from user
    var x = parseInt(document.getElementById('subtract_x').value);
    var y = parseInt(document.getElementById('subtract_y').value);
    //call subtract()
    var result = subtract(x, y);
    //return result to user
    document.getElementById('subtract_result').textContent = result.value;
}

//show results of multiply() 
function showMultiply() {
    //accept input for variables from user
    var x = parseInt(document.getElementById('multiply_x').value);
    var y = parseInt(document.getElementById('multiply_y').value);
    //call multiply()
    var result = multiply(x, y);
    //return result to user
    document.getElementById('multiply_result').textContent = result.value;
}

//show results of divide()
function showDivide() {
    //accept input for variables from user
    var x = parseInt(document.getElementById('divide_x').value);
    var y = parseInt(document.getElementById('divide_y').value);
    //call divide()
    var result = divide(x, y);
    //return result to user
    document.getElementById('divide_result').textContent = result.value;
}