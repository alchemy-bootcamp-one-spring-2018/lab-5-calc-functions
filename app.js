'use strict';
/* exported showSum, showDifference, showRemainder, remainder, sumCalc, subCalc, multCalc divCalc */

// Addition Calc 
function showSum() {
    const x = parseInt(document.getElementById('addend-1').value);
    const y = parseInt(document.getElementById('addend-2').value);
    const result = sumCalc(x, y);
    document.getElementById('sum').textContent = result.value;
    document.getElementById('sum-description').textContent = result.description;
}

// Subtraction Calc 
function showDifference() {
    const x = parseInt(document.getElementById('minuend').value);
    const y = parseInt(document.getElementById('subtrahend').value);
    const result = subCalc(x, y);
    document.getElementById('difference').textContent = result.value;
    document.getElementById('sub-description').textContent = result.description;
}

// Multiplication Calc 
function showProduct() {
    const x = parseInt(document.getElementById('multiplicand').value);
    const y = parseInt(document.getElementById('multiplier').value);
    const result = multCalc(x, y);
    document.getElementById('product').textContent = result.value;
    document.getElementById('product-description').textContent = result.description;
}

// Division Calc 
function showQuotient() {
    const x = parseInt(document.getElementById('dividend').value);
    const y = parseInt(document.getElementById('divisor').value);
    const result = divCalc(x, y);
    document.getElementById('quotient').textContent = result.value;
    document.getElementById('quotient-description').textContent = result.description;
}