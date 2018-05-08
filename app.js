/* global showSum showProduct showMinus showDivide showRemainder */
function showSum() {
    const x = parseInt(document.getElementById('x').value);
    const y = parseInt(document.getElementById('y').value);
    const result = sum(x, y);
    document.getElementById('answer').textContent = result.value;
    document.getElementById('text').textContent = result.content;
}

function showProduct() {
    const x = parseInt(document.getElementById('x').value);
    const y = parseInt(document.getElementById('y').value);
    const result = product(x, y);
    document.getElementById('answer').textContent = result.value;
    document.getElementById('text').textContent = result.content;
}

function showMinus() {
    const x = parseInt(document.getElementById('x').value);
    const y = parseInt(document.getElementById('y').value);
    const result = minus(x, y);
    document.getElementById('answer').textContent = result.value;
    document.getElementById('text').textContent = result.content;
}

function showDivide() {
    const x = parseInt(document.getElementById('x').value);
    const y = parseInt(document.getElementById('y').value);
    const result = divide(x, y);
    document.getElementById('answer').textContent = result.value;
    document.getElementById('text').textContent = result.content;
}

function showRemainder() {
    const x = parseInt(document.getElementById('x').value);
    const y = parseInt(document.getElementById('y').value);
    const result = remainder(x, y);
    document.getElementById('answer').textContent = result.value;
    document.getElementById('text').textContent = result.content;
}
