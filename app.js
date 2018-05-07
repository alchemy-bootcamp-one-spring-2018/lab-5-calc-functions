/* exported showAdd */
/* globals add */

function showAdd() {
    const x = parseInt(document.getElementById('x-sum').value);
    const y = parseInt(document.getElementById('y-sum').value);
    const result = add(x, y);
    document.getElementById('sum').textContent = result.value;
    document.getElementById('sum-summary').textContent = result.description;
}