var operand = [];
firstNumber = null;
secondNumber = null;
currentOperand = null;

const operate = (firstNumber,operator,secondNumber) => {
    const calcFunctions = {
        '+':add(firstNumber,secondNumber),
        '-':subtract(firstNumber,secondNumber),
        'x':multiply(firstNumber,secondNumber),
        '/':divide(firstNumber,secondNumber),
    };

    return String(calcFunctions[operator]);
}

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

const clearCalc = () => {
    return operand=[],firstNumber=null,secondNumber=null,currentOperand=null,display.innerHTML=0;
};


const btnOperands = document.getElementById("container");
const display = document.getElementById("display");


btnOperands.addEventListener("click", function (e) {
   

    if(e.target.className=="operand"){
        
        operand.push(e.target.value);
        const displayValue = operand.reduce((x,y)=> x + y,);
        display.innerHTML = displayValue;
        
    } else if (e.target.className=="operator"){
        if (firstNumber==null) {
            currentOperand = e.target.innerHTML;
            firstNumber = display.innerHTML;
        } else if (firstNumber!=null){
            secondNumber=display.innerHTML;
        }
        if (firstNumber!=null && secondNumber!=null && currentOperand!=null){
           display.innerHTML =operate(Number(firstNumber),currentOperand,Number(secondNumber));
           firstNumber=display.innerHTML;
           secondNumber=null;
           currentOperand= e.target.innerHTML;
        }
        operand = [];
    } else if (e.target.className=="clear"){
        clearCalc();
    } else if (e.target.className=="equals"){
        if (firstNumber==null && secondNumber==null && currentOperand==null) return  0;
        secondNumber=display.innerHTML;    
        display.innerHTML= operate(Number(firstNumber),currentOperand,Number(secondNumber));
        operand = [];
        firstNumber=null;
        secondNumber=null;
        }
  });
