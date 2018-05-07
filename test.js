/* globals remainder add subtract multiply divide */
/* exported testRemainder addition subtraction multiplication division*/
// AC #3 function return remainder

function testRemainder() {
    const result = remainder(29, 6);
    if(result.value !== 5) {
        console.error('testRemainder - value - FAIL');
    }
    else {
        console.log('testRemainder - value - SUCCESS');
    }
}

testRemainder();

function addition() {
    const result = add(19, 6);
    if(result.value !== 25) {
        console.error('addition - value - FAIL');
    }
    else {
        console.log('addition - value - SUCCESS');
    }
}

addition();

function subtraction() {
    const result = subtract(15, 5);
    if(result.value !== 10) {
        console.error('subtraction - value - FAIL');
    }
    else {
        console.log('subtraction - value - SUCCESS');
    }
}

subtraction();

function multiplication() {
    const result = multiply(3, 10);
    if(result.value !== 30) {
        console.error('multiplication - value - FAIL');
    }
    else {
        console.log('multiplication - value - SUCCESS');
    }
}

multiplication();

function division() {
    const result = divide(100, 10);
    if(result.value !== 10) {
        console.error('division - value - FAIL');
    }
    else {
        console.log('division - value - SUCCESS');
    }
}

division();

