/* globals remainder */
/* exported doRemainder */
'use strict';

function doRemainder() {
    // include form validation
    const x = parseInt(document.getElementById('divide-x').value);
    document.getElementById('divide-x').value = '';
    const y = parseInt(document.getElementById('divide-y').value);
    document.getElementById('divide-y').value = '';
    const result = remainder(x, y);
    document.getElementById('remainder').textContent = 'Remainder of ' + x + ' divided by ' + y + ' is ' + result.value;
}