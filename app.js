/* exported showSum showDifference showProduct showQuotient showHypot showEvenOdd*/

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
    var divideResult = divideNumbers(x, y);
    var remainderResult = remainder(x, y);
    document.getElementById('quotient').textContent = divideResult.value + ' remainder ' + remainderResult.value;
    if(y === 0){
        document.getElementById('quotient').textContent = 'Error, division by 0 not possible. Please enter a valid divisor';
    }
}

function showHypot() {
    var x = parseInt(document.getElementById('first-leg').value);
    var y = parseInt(document.getElementById('second-leg').value);
    var result = hypotNumbers(x, y);
    document.getElementById('hypotenuse').textContent = result.value;
}

function showEvenOdd() {
    var x = parseInt(document.getElementById('even-odd-input').value);
    var result = evenOdd(x);
    if(result.value === 0){
        document.getElementById('even-odd-display').textContent = 'This number is even!';
    } else {
        document.getElementById('even-odd-display').textContent = 'This number is odd!';
    }
}

function showPrime() {
    var x = parseInt(document.getElementById('prime-input').value);
    var result = findPrime(x);
    console.log(result);
    if(result === true){
        document.getElementById('prime-display').textContent = 'This is a prime number!';
    } else {
        document.getElementById('prime-display').textContent = 'This is not a prime number!';
    }
}