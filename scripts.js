let digitFirst = '';
let digitOperator = '';
let digitSecond = ''; 
let displayValue = digitFirst + digitOperator + digitSecond;;

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
const placeholder = document.querySelector(".placeholder")

buttonsNum.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (digitFirst !== '' && digitOperator !== '') {
            digitSecond += e.target.value;
            console.log(digitSecond);
            showDisplayValues();
        } else {
            digitFirst += e.target.value;
            console.log(digitFirst);
            showDisplayValues();
        }
    })
})

buttonsOperator.forEach(btn => {
    btn.addEventListener('click', (e) => {
        digitOperator = e.target.value;
        console.log(digitOperator);
        showDisplayValues();
    })
})

function showDisplayValues() {
    placeholder.textContent = displayValue;
}

function displayFirstDigits() {
    placeholder.textContent = digitFirst;
}

function displayOperator() {
    placeholder.append(`${digitOperator}`)
}

function displaySecondDigits() {
    placeholder.append(`${digitSecond}`)
}
