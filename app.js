/* exported remainder getSum multiply showRemainder getDifference divide */
/* globals remainder addition subtract  product quotient */

//gets Modulus
function showRemainder() {
    var x = parseInt(document.getElementById('numOne').value);
    var y = parseInt(document.getElementById('numTwo').value);
    var result = remainder(x, y);
    document.getElementById('result').textContent = result.value;
    document.getElementById('result-message').textContent = result.description;
}

//Gets Sum
function getSum(){
    var x = parseInt(document.getElementById('numOne').value);
    var y = parseInt(document.getElementById('numTwo').value);
    var result = addition(x, y);
    document.getElementById('result').textContent = result.value;
    document.getElementById('result-message').textContent = result.description;
}

//gets Difference
function getDifference() {
    var x = parseInt(document.getElementById('numOne').value);
    var y = parseInt(document.getElementById('numTwo').value);
    var result = subtract(x, y);
    document.getElementById('result').textContent = result.value;
    document.getElementById('result-message').textContent = result.description;

}

//Divides
function divide() {
    var x = parseInt(document.getElementById('numOne').value);
    var y = parseInt(document.getElementById('numTwo').value);
    var result = quotient(x, y);
    document.getElementById('result').textContent = result.value;
    document.getElementById('result-message').textContent = result.description;

}

//Multiplies
function multiply() {
    var x = parseInt(document.getElementById('numOne').value);
    var y = parseInt(document.getElementById('numTwo').value);
    var result = product(x, y);
    document.getElementById('result').textContent = result.value;
    document.getElementById('result-message').textContent = result.description;
}