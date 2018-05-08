// AC functions return remainder
/* globals sum diff product quotient remainder*/

function testSum(){
    const result = sum(8, 3);
    if(result.value === 11){
        console.log('testSum() value Success');
    } else {
        console.error('testSum() value Fail', result.value);
    }
}

function testDiff(){
    const result = diff(8, 3);
    if(result.value === 5){
        console.log('testDiff() value Success');
    } else {
        console.error('testDiff() value Fail', result.value);
    }
}

function testProduct(){
    const result = product(8, 3);
    if(result.value === 24){
        console.log('testProduct) value Success');
    } else {
        console.error('testProduct) value Fail', result.value);
    }
}

function testQuotient(){
    const result = quotient(8, 3);
    if(result.value === 11){
        console.log('testQuotient() value Success');
    } else {
        console.error('testQuotient() value Fail', result.value);
    }
}


function testRemainder(){
    const result = remainder(8, 3);
    if(result.value === 2) {
        console.log('TDD-AC3 - function return correct result - SUCCESS');
    } else {
        console.error('TDD-AC3 - function return correct result - FAIL');
    }
}


console.log(testSum());
console.log(testDiff());
console.log(testProduct());
console.log(testQuotient());
console.log(testRemainder());
