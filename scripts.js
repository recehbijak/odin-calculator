let digitFirst = '';
let digitOperator = '';
let digitSecond = ''; 

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

