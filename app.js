
// shows remainder of the 
function showRemainder() {
    const x = parseInt(document.getElementById('dividend').value);
    const y = parseInt(document.getElementById('divisor').value);
    const result = remainder(x, y);
    document.getElementById('remainder').textContent = result.value;
    document.getElementById('sum-description');
}

function showSum() {
    const x = parseInt(document.getElementById('add-num').value);
    const y = parseInt(document.getElementById('added- num').value);
    const result = Sum(x, y);
    document.getElementById('Sum').textContent = result.value;
    document.getElementById('sum-description');

}

function show
