


function showRemainder() {
    const x = parseInt(document.getElementById('dividend').value);
    const y = parseInt(document.getElementById('divisor').value);
    const result = remainder(x, y);
    document.getElementById('remainder').textContent = result.value;
    document.getElementById('remainder-description').textContent = result.description;
}
function showAdd() {
    const x = parseInt(document.getElementById('add1').value);
    const y = parseInt(document.getElementById('add2').value);
    const result = add(x, y);
    document.getElementById('addEquals').textContent = result.value;
    document.getElementById('add-description').textContent = result.description;
}
function showSub() {
    const x = parseInt(document.getElementById('sub1').value);
    const y = parseInt(document.getElementById('sub2').value);
    const result = subtract(x, y);
    document.getElementById('subEquals').textContent = result.value;
    document.getElementById('sub-description').textContent = result.description;
}
function showMulti() {
    const x = parseInt(document.getElementById('multi1').value);
    const y = parseInt(document.getElementById('multi2').value);
    const result = multi(x, y);
    document.getElementById('multiEquals').textContent = result.value;
    document.getElementById('multi-description').textContent = result.description;
}