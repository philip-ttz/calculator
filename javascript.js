function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

let number1=0;
let operator='+';
let number2=0;

function operate(num1, op, num2){
    let result = 0;
    if(op==='+'){
        result=add(num1,num2);
    }else if(op==='-'){
        result=subtract(num1,num2);
    }else if(op==='/'){
        result=divide(num1,num2);
    }else if(op==='x'){
        result=multiply(num1,num2);
    }
    return result;
}