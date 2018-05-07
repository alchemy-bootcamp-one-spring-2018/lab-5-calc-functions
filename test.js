/* globals  */
/* exported  */


// add
function testSum() {
    var sum = 
    
    if(num1 + num2 === result) {
        console.log('TDD - function returns correct result - SUCCESS');
    }
    else {
        console.log('TDD - function returns correct result - FAIL');
    }
}
// subtract
function testDifference() {    
    if(num1 - num2 === result) {
        console.log('TDD - function returns correct result - SUCCESS');
    }
    else {
        console.log('TDD - function returns correct result - FAIL');
    }
}
// multiply
function testProduct() {    
    if(num1 * num2 === result) {
        console.log('TDD - function returns correct result - SUCCESS');
    }
    else {
        console.log('TDD - function returns correct result - FAIL');
    }
}
// divide
function testQuotient() {    
    if(num1 / num2 === result) {
        console.log('TDD - function returns correct result - SUCCESS');
    }
    else {
        console.log('TDD - function returns correct result - FAIL');
    }
}
// remainder
function testRemainder() {
    const result = remainder(29, 6);
    if(result.value !== 5) {
        console.error('testRemainder - value - FAIL', result.value);
    } else {
      console.log('testRemainder - value - SUCCESS');
    }
  }
  
  
  testRemainder();