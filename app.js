//This is your functionality file
// function showRemainder() {
//     var x = parseInt(document.getElementById('dividend').value);
//     var y = parseInt(document.getElementById('divisor').value);
//     var result = remainder(x, y);
//     document.getElementById('remainder').textContent = result.value;
// }

function showSum() {
    var x = parseInt(document.getElementById('first-add').value);
    var y = parseInt(document.getElementById('second-add').value);
    var result = addNumbers(x, y);
    document.getElementById('sum').textContent = result.value;
}

function showDifference() {
    var x = parseInt(document.getElementById('first-sub').value);
    var y = parseInt(document.getElementById('second-sub').value);
    var result = subtractNumbers(x, y);
    document.getElementById('difference').textContent = result.value;
}

function showProduct() {
    var x = parseInt(document.getElementById('multiplicand').value);
    var y = parseInt(document.getElementById('multiplier').value);
    var result = multiplyNumbers(x, y);
    document.getElementById('product').textContent = result.value;
}

function showQuotient() {
    var x = parseInt(document.getElementById('dividend').value);
    var y = parseInt(document.getElementById('divisor').value);
    var result = divideNumbers(x, y);
    document.getElementById('quotient').textContent = result.value;
}