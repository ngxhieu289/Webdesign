let memory = 0;

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculate() {
    let expression = document.getElementById("display").value;
    try {
        let result = eval(expression);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Lỗi";
    }
}

function toggleSign() {
    let display = document.getElementById("display");
    let currentValue = display.value;
    if (currentValue.charAt(0) === '-') {
        display.value = currentValue.slice(1);
    } else {
        display.value = '-' + currentValue;
    }
}

function square() {
    let display = document.getElementById("display");
    display.value = Math.pow(display.value, 2);
}

function sqrt() {
    let display = document.getElementById("display");
    display.value = Math.sqrt(display.value);
}

function memoryAdd() {
    memory += parseFloat(document.getElementById("display").value);
    clearDisplay();
}

function memorySubtract() {
    memory -= parseFloat(document.getElementById("display").value);
    clearDisplay();
}

function memoryRecall() {
    document.getElementById("display").value = memory;
}
