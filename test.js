
// addition test
function testTotalNum() {
    var result = addition(3, 4);

    if(result !== 7) {
        console.error('ADDITION ERROR!');
    }
    else {
        console.log('SUCCESS!');
    }    
}

testTotalNum();

// subtraction test

function testDifferenceNum() {
    var result = subtraction(5, 4);

    if(result !== 1) {
        console.error('SUBTRACTION ERROR!');
    }
    else {
        console.log('SUCCESS!');
    }    
}

testDifferenceNum();

// multiply test

function testMultiplyNum() {
    var result = multiply(5, 4);

    if(result !== 20) {
        console.error('MULTIPLICATION ERROR!');
    }
    else {
        console.log('SUCCESS!');
    }    
}

testMultiplyNum();

// divide test
function testDividedNum() {
    var result = divide(4, 2);

    if(result !== 2) {
        console.error('DIVISION ERROR');    
    }
    else {
        console.log('SUCCESS!');
    }
}

testDividedNum();

//console.log('testTotalNum');
//testTotalNum();




