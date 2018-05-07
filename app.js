/* globals sum subtract multiply divide */

function showSum() {
    var x = parseInt(document.getElementById('number-to-sum-1').value);
    var y = parseInt(document.getElementById('number-to-sum-2').value);
    var result = sum(x,y);
    document.getElementById('sum-total').innerHTML = result.value;
    document.getElementById('sum-description').innerHTML = result.description;
}