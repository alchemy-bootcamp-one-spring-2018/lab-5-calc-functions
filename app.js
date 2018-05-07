

function showSum() {
    const x = parseInt(document.getElementById('fig-one-add').value);
    const y = parseInt(document.getElementById('fig-two-add').value);
    const result = sum (x, y);
    document.getElementById('sum').textContent =result.value;
    document.getElementById('addition-description').textContent = result.description;
}

function showDifference() {
    const x = parseInt(document.getElementById('fig-one-sub').value);
    const y = parseInt(document.getElementById('fig-two-sub').value);
    const result = difference (x, y);
    document.getElementById('difference').textContent =result.value;
    document.getElementById('subtraction-description').textContent = result.description;
}

function showProduct() {
    const x = parseInt(document.getElementById('fig-one-mult').value);
    const y = parseInt(document.getElementById('fig-two-mult').value);
    const result = product (x, y);
    document.getElementById('product').textContent =result.value;
    document.getElementById('multiply-description').textContent = result.description;
}

function showQuotient() {
    const x = parseInt(document.getElementById('fig-one-div').value);
    const y = parseInt(document.getElementById('fig-two-div').value);
    const result = quotient (x, y);
    document.getElementById('quotient').textContent =result.value;
    document.getElementById('divide-description').textContent = result.description;
}

showQuotient();
showProduct();
showDifference();
showSum();