/* exported remainder getSum multiply showRemainder getDifference divide */
/* globals remainder addition subtract  product quotient */

//gets Modulus

function showRemainder() {
    var x = parseInt(document.getElementById('numOne').value);
    var y = parseInt(document.getElementById('numTwo').value);
    var result = remainder(x, y);

    document.getElementById('result').textContent = result.value;
    document.getElementById('result-message').textContent = result.description;

    evenOrOdd(result.value);

}

//Gets Sum!
function getSum(){
    var x = parseInt(document.getElementById('numOne').value);
    var y = parseInt(document.getElementById('numTwo').value);
    var result = addition(x, y);

    document.getElementById('result').textContent = result.value;
    document.getElementById('result-message').textContent = result.description;

    evenOrOdd(result.value);

}

//gets Difference
function getDifference() {
    var x = parseInt(document.getElementById('numOne').value);
    var y = parseInt(document.getElementById('numTwo').value);
    var result = subtract(x, y);

    document.getElementById('result').textContent = result.value;
    document.getElementById('result-message').textContent = result.description;

    evenOrOdd(result.value);

}

//Multiplies
function multiply() {
    var x = parseInt(document.getElementById('numOne').value);
    var y = parseInt(document.getElementById('numTwo').value);
    var result = product(x, y);
    document.getElementById('result').textContent = result.value;
    document.getElementById('result-message').textContent = result.description;

    evenOrOdd(result.value);

}

//Divides
function divide() {
    var x = parseInt(document.getElementById('numOne').value);
    var y = parseInt(document.getElementById('numTwo').value);
    var result = quotient(x, y);
    
    document.getElementById('result').textContent = result.value;
    document.getElementById('result-message').textContent = result.description;
    if(x === 0 || y === 0){
        console.log('divided by 0');
    }
    else {
        evenOrOdd(result.value);
    }
}

function evenOrOdd(isItEven) {
    if(isItEven % 2 === 0){
        document.getElementById('even-or-odd').textContent = isItEven + ' IS EVEN';
    }
    else {
        document.getElementById('even-or-odd').textContent = isItEven + ' IS ODD';

    }
}
