/* exported remainder getSum multiply showRemainder getDifference divide */
/* globals remainder addition subtract multiply product quotient */

//gets Modulus
function showRemainder() {
    var x = parseInt(document.getElementById('numOne'));
    var y = parseInt(document.getElementById('numTwo'));
    var result = remainder(x, y);
    document.getElementById('result').textContent = result.value;
}

//Gets Sum
function getSum(){
    var x = parseInt(document.getElementById('numOne'));
    var y = parseInt(document.getElementById('numTwo'));
    var result = addition(x, y);
    document.getElementById('result').textContent = result.value;
}

//gets Difference
function getDifference() {
    var x = parseInt(document.getElementById('numOne'));
    var y = parseInt(document.getElementById('numTwo'));
    var result = subtract(x, y);
    document.getElementById('result').textContent = result.value;

}

//Divides
function divide() {
    var x = parseInt(document.getElementById('numOne'));
    var y = parseInt(document.getElementById('numTwo'));
    var result = quotient(x, y);
    document.getElementById('result').textContent = result.value;

}

//Multiplies
function multiply() {
    var x = parseInt(document.getElementById('numOne'));
    var y = parseInt(document.getElementById('numTwo'));
    var result = product(x, y);
    document.getElementById('result').textContent = result.value;

}