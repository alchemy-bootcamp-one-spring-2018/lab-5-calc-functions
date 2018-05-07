/* globals getRemainder */
/* exported showRemainder */

//Addition - function name is displayAddSum
/*
function displayAddSum() {
    const x = parseInt(document.getElementById('dividend').value);
    const y = parseInt(document.getElementById('divisor').value);
    const result = remainder(x, y);
    document.getElementById('remainder').textContent = result.value;
    document.getElementById('remainder-description').textContent = result.description;
}
*/
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
