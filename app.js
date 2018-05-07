/* globals getRemainder */
/* exported showRemainder */

//Addition - function name is displayAddSum

function displayAddSum() {
    const x = parseInt(document.getElementById('addition-number-1').value);
    const y = parseInt(document.getElementById('addition-number-2').value);
    const result = getAddSum(x, y);
    
    document.getElementById('addition-result').textContent = result.description;
}

//Subtraction - function name is displaySubSum

//Multiplication - function name is displayProduct

//Division - function name is displayQuotient

//Remainder - function name is displayRemainder
function displayRemainder() {
    var x = parseInt(document.getElementById('dividend').value);
    var y = parseInt(document.getElementById('divisor').value);
    
    const result = getRemainder(x, y);

    document.getElementById('remainder-description').textContent = result.description;
}
