/* globals remainder add subtract multiply divide */
/* exported showRemainder showAddition showSubtraction showMultiplication showDivision */

function showRemainder() {
    const x = parseInt(document.getElementById('first-value').value);
    const y = parseInt(document.getElementById('second-value').value);
    const result = remainder(x, y);
    document.getElementById('result').textContent = result.value;
    document.getElementById('calculation-description').textContent = result.description;
}

function showAddition() {
    const x = parseInt(document.getElementById('first-value').value);
    const y = parseInt(document.getElementById('second-value').value);
    const result = add(x, y);
    document.getElementById('result').textContent = result.value;
    document.getElementById('calculation-description').textContent = result.description;
}

function showSubtraction() {
    const x = parseInt(document.getElementById('first-value').value);
    const y = parseInt(document.getElementById('second-value').value);
    const result = subtract(x, y);
    document.getElementById('result').textContent = result.value;
    document.getElementById('calculation-description').textContent = result.description;
}

function showMultiplication() {
    const x = parseInt(document.getElementById('first-value').value);
    const y = parseInt(document.getElementById('second-value').value);
    const result = multiply(x, y);
    document.getElementById('result').textContent = result.value;
    document.getElementById('calculation-description').textContent = result.description;
}

function showDivision() {
    const x = parseInt(document.getElementById('first-value').value);
    const y = parseInt(document.getElementById('second-value').value);
    const result = divide(x, y);
    document.getElementById('result').textContent = result.value;
    document.getElementById('calculation-description').textContent = result.description;
}