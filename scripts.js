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
            placeholder.textContent = '';
            digitFirst += e.target.value;
            placeholder.textContent = digitFirst;
        } else {
            digitSecond += e.target.value;
            placeholder.textContent = digitSecond;
        }
    })
})

buttonsOperator.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (digitOperator === '') {
            digitOperator = e.target.value;
            console.log(digitOperator);
        } else {
            digitFirst = roundTo(operate(), 6);
            digitSecond = '';
            digitOperator = e.target.value;
            placeholder.textContent = digitFirst;
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

    
    displayValue = roundTo(finalValue, 6);
    digitFirst = '';
    digitSecond = '';
    digitOperator = '';


    placeholder.textContent = displayValue;
})


function roundTo(num, precision) {
    const factor = Math.pow(10, precision);
    return Math.round(num * factor) / factor;
}