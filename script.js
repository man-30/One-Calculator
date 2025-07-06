function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
// Keyboard Support
document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
// Toggle Dark Mode
document.getElementById('toggleMode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Switch to Light Mode';
    } else {
        this.textContent = 'Switch to Dark Mode';
    }
});
