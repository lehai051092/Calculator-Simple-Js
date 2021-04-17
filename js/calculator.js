let display = document.getElementById('display-input');

function getValueNumbers(number) {
    if (display.value == 0) {
        display.value = "";
    }

    display.value += number;
}

function deleteNumber() {
    let currentDisplay = display.value;
    result = currentDisplay.substring(0, currentDisplay.length - 1);
    display.value = result;
}

function calculate() {
    let displayValue = display.value;
    result = eval(displayValue);
    display.value = result;
}