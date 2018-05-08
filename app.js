
// Addition application
function totalNum() {
    var x = parseInt(document.getElementById('starting-number').value);
    var y = parseInt(document.getElementById('number-to-add').value);
    var result;
    result = x + y;

    console.log(result);
    
    document.getElementById('sum-description').textContent = result;
    document.getElementById('total-num').textContent = 'The sum of ' + x + ' and ' + y + ' is ' + result + '!';
    console.log(result);
}

// Subtraction application
function subtractNum() {
    var x = parseInt(document.getElementById('number-subtract-from').value);
    var y = parseInt(document.getElementById('number-to-subtract').value);
    var result;
    result = x - y;

    console.log(result);
    
    document.getElementById('sum-description').textContent = result;
    document.getElementById('subtract-num').textContent = 'The difference of ' + x + ' divided by ' + y + ' is ' + result + '!';
    console.log(result);
}

// multiply application
function multiplyNum() {
    var x = parseInt(document.getElementById('number-to-multiply').value);
    var y = parseInt(document.getElementById('number-multiply-by').value);
    var result;
    result = x * y;

    console.log(result);
    
    document.getElementById('sum-description').textContent = result;
    document.getElementById('multiply-num').textContent = x + ' multiplied by ' + y + ' is ' + result + '!';
    console.log(result);
}

// divide application
function divideNum() {
    var x = parseInt(document.getElementById('dividend').value);
    var y = parseInt(document.getElementById('divisor').value);
    var result = x / y;
     
    console.log(result);
    
    document.getElementById('divide-description').textContent = result;
    document.getElementById('divide-num').textContent = x + ' divided by ' + y + ' is ' + result + '!';
    console.log(result);
}
