/* globals getRemainder getAddSum getProduct getSubSum getQuotient */

/* exported additionSum subtractionSum sum product quotient AdditionSum displayAddSum displaySubSum remainder displayProduct getRemainder getSubSum getProduct getAddSum getQuotient
displayQuotient displayRemainder */

//Addition - function name is displayAddSum

function displayAddSum() {
    const x = parseInt(document.getElementById('addition-number-1').value);
    const y = parseInt(document.getElementById('addition-number-2').value);
    const result = getAddSum(x, y);
    
    document.getElementById('addition-result').textContent = result.description;
}

//Subtraction - function name is displaySubSum
function displaySubSum() {
    const x = parseInt(document.getElementById('subtraction-number-1').value);
    const y = parseInt(document.getElementById('subtraction-number-2').value);
    const result = getSubSum(x, y);
    
    document.getElementById('subtraction-result').textContent = result.description;
}

//Multiplication - function name is displayProduct
function displayProduct() {
    const x = parseInt(document.getElementById('multiplication-number-1').value);
    const y = parseInt(document.getElementById('multiplication-number-2').value);
    const result = getProduct(x, y);
    
    document.getElementById('multiplication-result').textContent = result.description;
}

//Division - function name is displayQuotient
function displayQuotient() {
    const x = parseInt(document.getElementById('division-number-1').value);
    const y = parseInt(document.getElementById('division-number-2').value);

    if(y === 0){
        alert('You cannot divide a number by zero. Please choose another number for Number 2.');
    }
    
    const result = getQuotient(x, y);
    
    document.getElementById('division-result').textContent = result.description;
}

//Remainder - function name is displayRemainder
function displayRemainder() {
    var x = parseInt(document.getElementById('dividend').value);
    var y = parseInt(document.getElementById('divisor').value);

    if(y === 0){
        alert('You cannot divide a number by zero. Please choose another number for Number 2.');
    }
    
    const result = getRemainder(x, y);

    document.getElementById('remainder-description').textContent = result.description;
}
