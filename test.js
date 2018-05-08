/* globals sum*/
// AC functions return remainder

function testSum(){
    const result = sum(8, 3);
    if(result.value === 11){
        console.log('testSum() value Success');
    } else {
        console.error('testSum() value Fail', result.value);
    }

}

testSum();









function testRemainder(){

    const result = remainder(11, 2);
    if(dividend % divisor === result) {
        console.log('TDD-AC3 - function return correct result - SUCCESS');
    }else {
        console.error('TDD-AC3 - function return correct result - FAIL');
    }
}