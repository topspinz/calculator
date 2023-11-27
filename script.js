var firstNumber=0;
var secondNumber=0;

function add(a,b){
    return a+b
}
function subtract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function divide(a,b){
    return a/b
}

const operate = (operator,firstNumber,secondNumber) => {
    const calcFunctions = {
        '+':add(firstNumber,secondNumber),
        '-':subtract(firstNumber,secondNumber),
        '*':multiply(firstNumber,secondNumber),
        '/':divide(firstNumber,secondNumber),
    };

    return calcFunctions[operator];
}
