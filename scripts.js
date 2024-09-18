let digitFirst = '';
let digitOperator = '';
let digitSecond = ''; 
let displayValue = '';

function operate() {
    const intDigitFirst = Number(digitFirst);
    const intDigitSecond = Number(digitSecond);

    switch (digitOperator) {
        case "+":
            return calcAdd(intDigitFirst, intDigitSecond);
            break;
        case "-":
            return calcSubstract(intDigitFirst, intDigitSecond);
            break;
        case "*" :
            return calcMultiply(intDigitFirst, intDigitSecond);
            break;
        case ":":
            return calcDivide(intDigitFirst, intDigitSecond);
            break; 
    }
}

function calcAdd(x, y) {
    return x + y;
}

function calcSubstract(x, y) {
    return x - y;
}

function calcMultiply (x, y) {
    return x * y;
}

function calcDivide(x, y) {
    return x / y;
}

const buttonsNum = document.querySelectorAll(".number-buttons");
const buttonsOperator = document.querySelectorAll(".operator-buttons");
const display = document.querySelector(".calc-display");
const placeholder = document.querySelector(".placeholder");
const calcButton = document.querySelector("#calc-btn");
const clearButton = document.querySelector("#clear-btn")

buttonsNum.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (digitOperator === '') {
            digitFirst += e.target.value;
            insertDisplayValue(e)
        } else {
            digitSecond += e.target.value;
            insertDisplayValue(e);
        }
    })
})

buttonsOperator.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (digitOperator === '') {
            digitOperator = e.target.value;
            console.log(digitOperator);
            insertDisplayValue(e);
        }
    })
})

clearButton.addEventListener('click', (e) => {
    placeholder.textContent = '';
    displayValue = '';
    digitFirst = '';
    digitOperator = '';
    digitSecond = '';
})

calcButton.addEventListener('click', (e) => {
    let finalValue = operate();

    console.log(finalValue);

    digitFirst = finalValue;
    displayValue = finalValue;
    digitSecond = '';
    digitOperator = '';

    placeholder.textContent = displayValue;
})

function insertDisplayValue(event) {
    displayValue += event.target.value
    placeholder.textContent = displayValue;
}