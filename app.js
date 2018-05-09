/* exported doAddition doSubtraction doMultiplication doDivision doDivisionWithRemainder*/
/* globals add subtract multiply divide divideWithRemainder*/

function doAddition() {
    var num1 = Number(document.getElementById('add1').value);
    var num2 = Number(document.getElementById('add2').value);
    var result = add(num1, num2);
    document.getElementById('addResult').textContent = result.value;
    document.getElementById('addDescription').textContent = result.description;
}

function doSubtraction() {
    var num1 = Number(document.getElementById('subtract1').value);
    var num2 = Number(document.getElementById('subtract2').value);
    var result = subtract(num1, num2);
    document.getElementById('subtractResult').textContent = result.value;
    document.getElementById('subtractDescription').textContent = result.description;
}

function doMultiplication() {
    var num1 = Number(document.getElementById('multiply1').value);
    var num2 = Number(document.getElementById('multiply2').value);
    var result = multiply(num1, num2);
    document.getElementById('multiplyResult').textContent = result.value;
    document.getElementById('multiplyDescription').textContent = result.description;
}

function doDivision() {
    var num1 = Number(document.getElementById('divide1').value);
    var num2 = Number(document.getElementById('divide2').value);
    var result = divide(num1, num2);
    document.getElementById('divideResult').textContent = result.value;
    document.getElementById('divideDescription').textContent = result.description;
}

function doDivisionWithRemainder() {
    var num1 = Number(document.getElementById('divide1').value);
    var num2 = Number(document.getElementById('divide2').value);
    var result = divideWithRemainder(num1, num2);
    document.getElementById('divideResult').textContent = result.value;
    document.getElementById('divideDescription').textContent = result.description;
}
