const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let current = '';
let operator = '';
let prev = '';

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const value = btn.textContent;

        if (value === 'C') {
            current = '';
            prev = '';
            operator = '';
            display.value = '';
        } else if (['+', '-', 'x', '/'].includes(value)) {
            if (current === '') {
                return;
            }

            operator = value;
            prev = current;
            current = '';
        } else if (value === '=') {
            if (operator === '' || current === '' || prev === '') {
                return;
            }

            // operator ==='' / !operator 동일
            // if (!operator || !current || !prev) {
            //     return;
            // }

            const a = parseFloat(prev);
            const b = parseFloat(current);

            if (operator === "+") {
                result = a + b;
            } else if (operator === "-") {
                result = a - b;
            } else if (operator === 'x') {
                result = a * b;
            } else if (operator === '/') {
                result = a / b;
            }

            display.value = result;
            current = result.toString();
            operator = '';
            prev = '';
        } else {
            current += value;
            display.value = current;
        }
    });
});