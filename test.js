
/* exported testSum */

function testSum() {
    const result = sum(2, 2);
    if(result.value !== 6) {
        console.error('testSum - value - FAIL' , result.value , 7);
    }
    else {
        console.log('testSum - value - SUCCESS');
    }
}

testSum();