/* globals add subtract multiply divide */
/* exported showSum */
/* exported showDifference */
/* exported showProduct */
/* exported showQuotient */

function showSum() {
    const x = parseInt(document.getElementById('AddNum1').value);
    const y = parseInt(document.getElementById('AddNum2').value);
    const result = add(x, y);
    document.getElementById('Sum').textContent = result.value;
    document.getElementById('sum-description').textContent = result.description;
}

function showDifference() {
    const x = parseInt(document.getElementById('SubtractNum1').value);
    const y = parseInt(document.getElementById('SubtractNum2').value);
    const result = subtract(x, y);
    document.getElementById('Difference').textContent = result.value;
    document.getElementById('difference-description').textContent = result.description;
}

function showProduct() {
    const x = parseInt(document.getElementById('MultiplyNum1').value);
    const y = parseInt(document.getElementById('MultiplyNum2').value);
    const result = multiply(x, y);
    document.getElementById('Product').textContent = result.value;
    document.getElementById('product-description').textContent = result.description;
}

function showQuotient() {
    const x = parseInt(document.getElementById('Dividend').value);
    const y = parseInt(document.getElementById('Divisor').value);
    const result = divide(x, y);
    document.getElementById('Quotient').textContent = result.value;
    document.getElementById('quotient-description').textContent = result.description;
}