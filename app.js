/* globals sum subtract multiply divide */
/* exported showSum showDifference showProduct showQuotient */

function showSum() {
    var x = parseInt(document.getElementById('number-to-sum-1').value);
    var y = parseInt(document.getElementById('number-to-sum-2').value);
    var result = sum(x, y);
    document.getElementById('sum-total').innerHTML = result.value;
    document.getElementById('sum-description').innerHTML = result.description;
}

function showDifference() {
    var x = parseInt(document.getElementById('number-to-sub-1').value);
    var y = parseInt(document.getElementById('number-to-sub-2').value);
    var result = subtract(x, y);
    document.getElementById('difference').innerHTML = result.value;
    document.getElementById('subtract-description').innerHTML = result.description;
}

function showProduct() {
    var x = parseInt(document.getElementById('factor-1').value);
    var y = parseInt(document.getElementById('factor-2').value);
    var result = multiply(x, y);
    document.getElementById('product').innerHTML = result.value;
    document.getElementById('multiply-description').innerHTML = result.description;
}

function showQuotient() {
    var x = parseInt(document.getElementById('dividend').value);
    var y = parseInt(document.getElementById('divisor').value);
    if(y === 0) {
        alert('Are you trying to break the universe? You can\'t divide by zero!');
        return;
    }
    else {
        var result = divide(x, y);
    }
    document.getElementById('quotient').innerHTML = result.value;
    document.getElementById('divide-description').innerHTML = result.description;

}
