let displayValue = '0';

function appendToDisplay(value) {
    if (displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
        document.getElementById('display').value = displayValue;
}


function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
function clearDisplay() {
    displayValue = '0';
    document.getElementById('display').value = displayValue;
}
// function clearLastItem() {
//     displayValue = displayValue.slice(0, -1);
//     document.getElementById('display').value = displayValue;
// }

