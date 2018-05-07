/* globals remainder add subtract multiply divide */
/* exported showRemainder showAddition*/

function showRemainder() {
    const x = parseInt(document.getElementById('dividend').value);
    const y = parseInt(document.getElementById('divisor').value);
    const result = remainder(x, y);
    document.getElementById('remainder').textContent = result.value;
    document.getElementById('modulo-description').textContent = result.description;
}

function showAddition() {
    const x = parseInt(document.getElementById('dividend').value);
    const y = parseInt(document.getElementById('divisor').value);
    const result = remainder(x, y);
    document.getElementById('remainder').textContent = result.value;
    document.getElementById('modulo-description').textContent = result.description;
}