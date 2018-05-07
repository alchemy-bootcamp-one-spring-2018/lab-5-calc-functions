

function showSum() {
    const x = parseInt(document.getElementById('fig-one-add').value);
    const y = parseInt(document.getElementById('fig-two-add').value);
    const result = sum (x, y);
    document.getElementById('sum').textContent =result.value;
    document.getElementById('addition-description').textContent = result.description;
}

showSum();