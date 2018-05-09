/* globals remainder */

function testRemainder() {
    const result = remainder (29, 6);
    if(result.value !== 5) {
        console.error('testRemainder - value - FAIL', result.value);
    } else {
        console.log('testRemainder - value - SUCCESS');
    }
}

testRemainder();

function testAdd() {
    const addResult = (5 + 5);
    if(addResult !== 10) {
        console.error('testAdd - value - FAIL', addResult);
    } else {
        console.log('testAdd - value - SUCCESS');
    }
}

testAdd();

function testSub() {
    const subResult = (10 - 5);
    if(subResult !== 5) {
        console.error('testSub - value - FAIL', subResult);
    } else {
        console.log('testSub - value - SUCCESS');
    }
}

testSub();

function testMulti() {
    const multiResult = (5 * 5);
    if(multiResult !== 25) {
        console.error('testMulti - value - FAIL', multiResult);
    } else {
        console.log('testMulti - value - SUCCESS');
    }
}

testMulti();