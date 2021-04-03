function getValueNumbers(number) {
    let display = document.getElementById('display-input');

    if (display.value == 0) {
        display.value = "";
    }

    display.value += number;
}

function deleteNumber() {
    let currentDisplay = document.getElementById('display-input').value;
    let newDisplay = currentDisplay.substring(0, currentDisplay.length - 1);
    document.getElementById('display-input').value = newDisplay;
}

function calculate() {
    let display = document.getElementById('display-input').value;

    result = eval(display);
    document.getElementById('display-input').value = result;
}