const number0=document.querySelector(".number0");
const number1=document.querySelector(".number1");
const number2=document.querySelector(".number2");
const number3=document.querySelector(".number3");
const number4=document.querySelector(".number4");
const number5=document.querySelector(".number5");
const number6=document.querySelector(".number6");
const number7=document.querySelector(".number7");
const number8=document.querySelector(".number8");
const number9=document.querySelector(".number9");
const ac=document.querySelector(".ac");
const plusminus=document.querySelector(".plusminus");
const percent=document.querySelector(".percent");
const division=document.querySelector(".division");
const multiplication=document.querySelector(".multiplication");
const subtraction=document.querySelector(".subtraction");
const addition=document.querySelector(".addition");
const comma=document.querySelector(".comma");
const equals=document.querySelector(".equals");
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

function updateDisplay(displayValue, clear=false, operator=false){
    if(clear===false && operator===false){
        if(output.textContent.length<19){
            if(output.textContent==="0"){
                if(displayValue!=0)output.textContent=""+displayValue;
            }else{
                output.textContent=""+output.textContent+displayValue;
            }
        }
    }else if(clear===true){
        output.textContent=""+displayValue;
    }else if(operator===true){
        output.textContent=""+displayValue;
    }
}


let firstnumber=0;
let operator='+';
let secondnumber=0;
let displayvalue=0;
let currentState=1;

//currentState 1 is active while typing in the first number
//currentState 2 is active after choosing the operator
//currentState 3 is active while typing in the second number

plusminus.addEventListener('click', () =>{
    if(currentState===1 || currentState===3){
        displayvalue=-displayvalue;
        updateDisplay(displayvalue,true);
    }
})
percent.addEventListener('click', () =>{
    if(currentState===1 || currentState===3){
        displayvalue=displayvalue/100;
        updateDisplay(displayvalue,true);
    }
})

division.addEventListener('click', () =>{
    if(currentState===1) {
        currentState=2;
        operator="/";
        firstnumber=displayvalue;
        division.classList.add("activebtn");
        multiplication.classList.remove("activebtn");
        subtraction.classList.remove("activebtn");
        addition.classList.remove("activebtn");
    }
    if(currentState===3){
        secondnumber=displayvalue;
        displayvalue=operate(firstnumber, operator, secondnumber);
        updateDisplay(displayvalue,false,true);
        firstnumber=displayvalue;
        currentState=2;
        operator="/";
        division.classList.add("activebtn");
        multiplication.classList.remove("activebtn");
        subtraction.classList.remove("activebtn");
        addition.classList.remove("activebtn");
    }
})
multiplication.addEventListener('click', () =>{
    if(currentState===1) {
        currentState=2;
        operator="x";
        firstnumber=displayvalue;
        division.classList.remove("activebtn");
        multiplication.classList.add("activebtn");
        subtraction.classList.remove("activebtn");
        addition.classList.remove("activebtn");
    }
    if(currentState===3){
        secondnumber=displayvalue;
        displayvalue=operate(firstnumber, operator, secondnumber);
        updateDisplay(displayvalue,false,true);
        firstnumber=displayvalue;
        currentState=2;
        operator="x";
        division.classList.remove("activebtn");
        multiplication.classList.add("activebtn");
        subtraction.classList.remove("activebtn");
        addition.classList.remove("activebtn");
    }
})
subtraction.addEventListener('click', () =>{
    if(currentState===1) {
        currentState=2;
        operator="-";
        firstnumber=displayvalue;
        division.classList.remove("activebtn");
        multiplication.classList.remove("activebtn");
        subtraction.classList.add("activebtn");
        addition.classList.remove("activebtn");
    }
    if(currentState===3){
        secondnumber=displayvalue;
        displayvalue=operate(firstnumber, operator, secondnumber);
        updateDisplay(displayvalue,false,true);
        firstnumber=displayvalue;
        currentState=2;
        operator="-";
        division.classList.remove("activebtn");
        multiplication.classList.remove("activebtn");
        subtraction.classList.add("activebtn");
        addition.classList.remove("activebtn");
    }
})
addition.addEventListener('click', () =>{
    if(currentState===1) {
        currentState=2;
        operator="+";
        firstnumber=displayvalue;
        division.classList.remove("activebtn");
        multiplication.classList.remove("activebtn");
        subtraction.classList.remove("activebtn");
        addition.classList.add("activebtn");
    }
    if(currentState===3){
        secondnumber=displayvalue;
        displayvalue=operate(firstnumber, operator, secondnumber);
        updateDisplay(displayvalue,false,true);
        firstnumber=displayvalue;
        currentState=2;
        operator="+";
        division.classList.remove("activebtn");
        multiplication.classList.remove("activebtn");
        subtraction.classList.remove("activebtn");
        addition.classList.add("activebtn");
    }
})
equals.addEventListener('click', () =>{
    if(currentState===3){
        secondnumber=displayvalue;
        displayvalue=operate(firstnumber, operator, secondnumber);
        updateDisplay(displayvalue,false,true);
        firstnumber=displayvalue;
        currentState=1;
        division.classList.remove("activebtn");
        multiplication.classList.remove("activebtn");
        subtraction.classList.remove("activebtn");
        addition.classList.remove("activebtn");
    }
})
number0.addEventListener('click', ()=>{
    if(currentState===1 || currentState===3){
        updateDisplay(0);
        displayvalue=parseInt(output.textContent,10);
    }if(currentState===2){
        updateDisplay(0,false,true);
        currentState=3;
        displayvalue=parseInt(output.textContent,10);
    }
})
number1.addEventListener('click', ()=>{
    if(currentState===1 || currentState===3){
        updateDisplay(1);
        displayvalue=parseInt(output.textContent,10);
    }
    if(currentState===2){
        updateDisplay(1,false,true);
        currentState=3;
        displayvalue=parseInt(output.textContent,10);
    }
})
number2.addEventListener('click', ()=>{
    if(currentState===1 || currentState===3){
        updateDisplay(2);
        displayvalue=parseInt(output.textContent,10);
    }
    if(currentState===2){
        updateDisplay(2,false,true);
        currentState=3;
        displayvalue=parseInt(output.textContent,10);
    }
})
number3.addEventListener('click', ()=>{
    if(currentState===1 || currentState===3){
        updateDisplay(3);
        displayvalue=parseInt(output.textContent,10);
    }
    if(currentState===2){
        updateDisplay(3,false,true);
        currentState=3;
        displayvalue=parseInt(output.textContent,10);
    }
})
number4.addEventListener('click', ()=>{
    if(currentState===1 || currentState===3){
        updateDisplay(4);
        displayvalue=parseInt(output.textContent,10);
    }
    if(currentState===2){
        updateDisplay(4,false,true);
        currentState=3;
        displayvalue=parseInt(output.textContent,10);
    }
})
number5.addEventListener('click', ()=>{
    if(currentState===1 || currentState===3){
        updateDisplay(5);
        displayvalue=parseInt(output.textContent,10);
    }
    if(currentState===2){
        updateDisplay(5,false,true);
        currentState=3;
        displayvalue=parseInt(output.textContent,10);
    }
})
number6.addEventListener('click', ()=>{
    if(currentState===1 || currentState===3){
        updateDisplay(6);
        displayvalue=parseInt(output.textContent,10);
    }
    if(currentState===2){
        updateDisplay(6,false,true);
        currentState=3;
        displayvalue=parseInt(output.textContent,10);
    }
})
number7.addEventListener('click', ()=>{
    if(currentState===1 || currentState===3){
        updateDisplay(7);
        displayvalue=parseInt(output.textContent,10);
    }
    if(currentState===2){
        updateDisplay(7,false,true);
        currentState=3;
        displayvalue=parseInt(output.textContent,10);
    }
})
number8.addEventListener('click', ()=>{
    if(currentState===1 || currentState===3){
        updateDisplay(8);
        displayvalue=parseInt(output.textContent,10);
    }if(currentState===2){
        updateDisplay(8,false,true);
        currentState=3;
        displayvalue=parseInt(output.textContent,10);
    }
})
number9.addEventListener('click', ()=>{
    if(currentState===1 || currentState===3){
        updateDisplay(9);
        displayvalue=parseInt(output.textContent,10);
    }if(currentState===2){
        updateDisplay(9,false,true);
        currentState=3;
        displayvalue=parseInt(output.textContent,10);
    }
})
ac.addEventListener('click', ()=>{
    updateDisplay(0, true);
    displayvalue=parseInt(output.textContent,10);
    currentState=1;
    division.classList.remove("activebtn");
    multiplication.classList.remove("activebtn");
    subtraction.classList.remove("activebtn");
    addition.classList.remove("activebtn");
})