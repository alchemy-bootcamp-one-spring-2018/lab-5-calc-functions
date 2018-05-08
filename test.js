/* globals add subtract */
/* exported showSum */
/* exported showDifference */
console.log('Test.js');

function showSum() {
    const result = add(7, 3);
    if(result.value !== 10) {
        console.error('testSum - value - FAIL', result.value);
    } else {
        console.log('testSum - value - SUCCESS');
    }
}
  
showSum();

function showDifference() {
    const result = subtract(7, 3);
    if(result.value !== 4) {
        console.error('testDifference - value - FAIL', result.value);
    } else {
        console.log('testDifference - value - SUCCESS');
    }
}

showDifference();