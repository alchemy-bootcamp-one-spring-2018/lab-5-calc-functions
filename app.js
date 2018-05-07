
// shows remainder of the divided
/*exported showSum*/
/*exported showProduct*/

function showSum() {
    const Sum = (x + y);
    const x = parseInt(document.getElementById('number-static').value);
    const y = parseInt(document.getElementById('number-actor').value);
    const result = Sum(x, y);
    document.getElementById('Sum').textContent = result.value;
    document.getElementById('sum-description');

    console.log(result);
    // return {
    //     value: result:
    // };
    
}

function showProduct() {
    const x = parseInt(document.getElementById('add-num').value);
    const y = parseInt(document.getElementById('added- num').value);
    const result = Product(x, y);
    document.getElementById('Product').textContent = result.value;
    document.getElementById('Product-description');
}

function showRemainder() {
    const y = parseInt(document.getElementById('divisor').value);
    const x = parseInt(document.getElementById('dividend').value);
    const result = remainder(x, y);
    document.getElementById('remainder').textContent = result.value;
    document.getElementById('sum-description');
}

console.log('hey');