
/* globals sum diff product quotient remainder*/

function showSum() {
    const x = parseInt(document.getElementById('number-static').value);
    const y = parseInt(document.getElementById('number-actor').value);
    const result = sum(x, y);
    document.getElementById('result').textContent = result.value;
    document.getElementById('result-description').textContent = result.description;
    
    console.log(result);
}


function showDiff() {
    const x = parseInt(document.getElementById('number-static').value);
    const y = parseInt(document.getElementById('number-actor').value);
    const result = diff(x, y);
    document.getElementById('result').textContent = result.value;
    document.getElementById('result-description').textContent = result.description;
}

// showDiff();


function showProduct() {
    const x = parseInt(document.getElementById('number-static').value);
    const y = parseInt(document.getElementById('number-actor').value);
    const result = product(x, y);
    document.getElementById('result').textContent = result.value;
    document.getElementById('result-description').textContent = result.description;
}

// showProduct();

function showQuotient() {
    const x = parseInt(document.getElementById('number-static').value);
    const y = parseInt(document.getElementById('number-actor').value);
    const result = quotient(x, y);
    document.getElementById('result').textContent = result.value;
    document.getElementById('result-description').textContent = result.description;
}

// shows remainder of the divided
function showRemainder() {
    const y = parseInt(document.getElementById('divisor').value);
    const x = parseInt(document.getElementById('dividend').value);
    const result = remainder(x, y);
    document.getElementById('result').textContent = result.value;
    document.getElementById('result-description').textContent = result.description;
}

// showSum();
// showDiff();
// showProduct();
// showQuotient();
// showRemainder();

console.log('hey');
// console.log(result);