function totalNum() {
    var x = parseInt(document.getElementById('starting-number').value);
    var y = parseInt(document.getElementById('number-to-add').value);
    var result;
    result = x + y;

    console.log(result);
    
    document.getElementById('total-num').textContent = x + ' and ' + y + ' is ' + result + '!';
    document.getElementById('sum-description').textContent = result.description;
    console.log(result);
}
