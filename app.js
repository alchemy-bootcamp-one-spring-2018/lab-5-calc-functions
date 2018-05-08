/* global add, subtract, multiply, divide, modulo */
/* exported showAdd, showSubtract, showMultiply, showDivide, showModulo */
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
    document.getElementById('add_description').textContent = result.description;
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
    document.getElementById('subtract_description').textContent = result.description;
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
    document.getElementById('multiply_description').textContent = result.description;
}

//show results of divide()
function showDivide() {
    //accept input for variables from user
    var x = parseInt(document.getElementById('divide_x').value);
    var y = parseInt(document.getElementById('divide_y').value);
    //stretch goal: throw an error when dividing by 0
    if(y === 0) {
        alert('ERROR: You cannot divide a number by 0. Please hit refresh and enter a number greater than 0.');
    }
    //call divide()
    var result = divide(x, y);
    //return result to user
    document.getElementById('divide_result').textContent = result.value;
    document.getElementById('divide_description').textContent = result.description;
}

//show results of modulo()
function showModulo() {
    //accept input for variables from user
    var x = parseInt(document.getElementById('modulo_x').value);
    var y = parseInt(document.getElementById('modulo_y').value);
    //call modulo()
    var result = modulo(x, y);
    //return result to user
    document.getElementById('modulo_result').textContent = result.value;
    document.getElementById('modulo_description').textContent = result.description;

}