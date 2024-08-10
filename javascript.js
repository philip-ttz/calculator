const number0=document.querySelector("#number0");
const number1=document.querySelector("#number1");
const number2=document.querySelector("#number2");
const number3=document.querySelector("#number3");
const number4=document.querySelector("#number4");
const number5=document.querySelector("#number5");
const number6=document.querySelector("#number6");
const number7=document.querySelector("#number7");
const number8=document.querySelector("#number8");
const number9=document.querySelector("#number9");
const ac=document.querySelector("#ac");
const plusminus=document.querySelector("#plusminus");
const percent=document.querySelector("#percent");
const division=document.querySelector("#division");
const multiplication=document.querySelector("#multiplication");
const subtraction=document.querySelector("#subtraction");
const addition=document.querySelector("#addition");
const comma=document.querySelector("#comma");
const equals=document.querySelector("#equals");
const output=document.querySelector(".output p");

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

function updateDisplay(displayValue, clear=false){
    if(clear===false){
        if(output.textContent.length<19){
            if(output.textContent==="0"){
                if(displayValue!=0)output.textContent=""+displayValue;
            }else{
                output.textContent=""+output.textContent+displayValue;
            }
        }
    }else{
        output.textContent=""+displayValue;
    }
}


let firstnumber=0;
let operator='+';
let secondnumber=0;
let displayvalue=0;
let currentState=1;

number0.addEventListener('click', ()=>{
    if(currentState=1){
        updateDisplay(0);
        displayvalue=parseInt(output.textContent,10);
    }
})
number1.addEventListener('click', ()=>{
    if(currentState=1){
        updateDisplay(1);
        displayvalue=parseInt(output.textContent,10);
    }
})
number2.addEventListener('click', ()=>{
    if(currentState=1){
        updateDisplay(2);
        displayvalue=parseInt(output.textContent,10);
    }
})
number3.addEventListener('click', ()=>{
    if(currentState=1){
        updateDisplay(3);
        displayvalue=parseInt(output.textContent,10);
    }
})
number4.addEventListener('click', ()=>{
    if(currentState=1){
        updateDisplay(4);
        displayvalue=parseInt(output.textContent,10);
    }
})
number5.addEventListener('click', ()=>{
    if(currentState=1){
        updateDisplay(5);
        displayvalue=parseInt(output.textContent,10);
    }
})
number6.addEventListener('click', ()=>{
    if(currentState=1){
        updateDisplay(6);
        displayvalue=parseInt(output.textContent,10);
    }
})
number7.addEventListener('click', ()=>{
    if(currentState=1){
        updateDisplay(7);
        displayvalue=parseInt(output.textContent,10);
    }
})
number8.addEventListener('click', ()=>{
    if(currentState=1){
        updateDisplay(8);
        displayvalue=parseInt(output.textContent,10);
    }
})
number9.addEventListener('click', ()=>{
    if(currentState=1){
        updateDisplay(9);
        displayvalue=parseInt(output.textContent,10);
    }
})
ac.addEventListener('click', ()=>{
    updateDisplay(0, true);
    displayvalue=parseInt(output.textContent,10);
})