/* exported showAdd, showSubtract, showMultiply, showDivide, showDivideWithRemainder, showHypotenuse, showEven, showOdd */
/* globals add, subtract, multiply, divide, divideWithRemainder, hypotenuse, isEven, isOdd */

function showAdd() {
    const x = parseInt(document.getElementById('x-sum').value);
    const y = parseInt(document.getElementById('y-sum').value);
    const result = add(x, y);
    document.getElementById('sum').textContent = result.value;
    document.getElementById('sum-summary').textContent = result.description;
}

function showSubtract() {
    const x = parseInt(document.getElementById('x-sub').value);
    const y = parseInt(document.getElementById('y-sub').value);
    const result = subtract(x, y);
    document.getElementById('diff').textContent = result.value;
    document.getElementById('diff-summary').textContent = result.description;
}

function showMultiply() {
    const x = parseInt(document.getElementById('x-multiply').value);
    const y = parseInt(document.getElementById('y-multiply').value);
    const result = multiply(x, y);
    document.getElementById('multiple').textContent = result.value;
    document.getElementById('multiple-summary').textContent = result.description;
}

function showDivide() {
    const x = parseInt(document.getElementById('x-div').value);
    const y = parseInt(document.getElementById('y-div').value);
    const result = divide(x, y);
    document.getElementById('quotient').textContent = result.value;
    document.getElementById('quot-summary').textContent = result.description;
}

function showDivideWithRemainder() {
    const x = parseInt(document.getElementById('x-div-remain').value);
    const y = parseInt(document.getElementById('y-div-remain').value);
    const result = divideWithRemainder(x, y);
    document.getElementById('quotient-remain').textContent = 'Quotient: ' + result.firstValue;
    document.getElementById('remainder').textContent = 'Remainder: ' + result.secondValue;
    document.getElementById('quot-remain-summary').textContent = result.description;
}

function showHypotenuse() {
    const x = parseInt(document.getElementById('x-hypo').value);
    const y = parseInt(document.getElementById('y-hypo').value);
    const result = hypotenuse(x, y);
    document.getElementById('hypo').textContent = result.value;
    document.getElementById('hypo-summary').textContent = result.description;
}

function showEven() {
    const x = parseInt(document.getElementById('x-even').value);
    const result = isEven(x);
    document.getElementById('even').textContent = result.value;
    document.getElementById('even-summary').textContent = result.description;

}

function showOdd() {
    const x = parseInt(document.getElementById('x-odd').value);
    const result = isOdd(x);
    document.getElementById('odd').textContent = result.value;
    document.getElementById('odd-summary').textContent = result.description;
}