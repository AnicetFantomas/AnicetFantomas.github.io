const displayEl1 = document.querySelector(".disp1");
const displayEl2 = document.querySelector(".disp2");
const tempResEl = document.querySelector(".temp-result");
const operationEl = document.querySelectorAll(".operation");
const numbersEl = document.querySelectorAll(".number");
const equalEl = document.querySelector(".equal-btn");
const clearAllEl = document.querySelector(".clear-all");
const clearLastEl = document.querySelector(".clear-last-el")

let dispNum1 = "";
let dispNum2 = "";
let result = null;
let lastOperation = "";
let haveDot = false;


numbersEl.forEach(number => (
    number.addEventListener("click", (e)=>{
        if(e.target.innerText === "." && !haveDot){
            haveDot = true;
        } else if(e.target.innerText === "." &&  haveDot){
            return;
        }
        dispNum2 += e.target.innerText;
        displayEl2.innerText = dispNum2;
    })
))

operationEl.forEach(operation => {
    operation.addEventListener("click",(e)=>{
        if (!dispNum2) result;
        haveDot = false;
        const operationName = e.target.innerText;
        if (dispNum1 && dispNum2 && lastOperation){
            mathOperation();
        } else {
            result = parseFloat(dispNum2);
        }
        clearVar (operationName);
        lastOperation = operationName;
        console.log(result);
        displayEl2.innerText = "";
    })
})

function clearVar (name = ""){
    dispNum1+= dispNum2 + " " + name + " ";
    displayEl1.innerText = dispNum1;
    displayEl2.innerText = "";
    dispNum2 = "";
    tempResEl.innerText = result;
}

function mathOperation(){
    if (lastOperation === "X"){result = parseFloat(result)*parseFloat(dispNum2);}
    else if (lastOperation === "/"){result = parseFloat(result) / parseFloat(dispNum2);}
    else if (lastOperation === "+"){result = parseFloat(result) + parseFloat(dispNum2);}
    else if (lastOperation === "-"){result = parseFloat(result) - parseFloat(dispNum2);}
    else if (lastOperation === "%"){result = parseFloat(result) % parseFloat(dispNum2);}
}

equalEl.addEventListener("click",(e) => {
    if (!dispNum1 || !dispNum2) return;
    mathOperation();
    clearVar();
    haveDot = false;
    dispNum2 = result;
    displayEl2.innerText = result;
    dispNum1 = "";
    tempResEl.innerText = "0";
})

clearAllEl.addEventListener("click", (e) => {
    displayEl1.innerText = "0";
    displayEl2.innerText = "0";
    tempResEl.innerText = "0";
    result = "";
    dispNum1 = "";
    dispNum2 = "";
})

clearLastEl.addEventListener("click", (e) => {
    displayEl2.innerText = "";
    dispNum2 = "";
})

window.addEventListener("keydown", (e) => {
    if(
        e.key === "0" ||
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "8" ||
        e.key === "9" ||
        e.key === "." 
    ){onClickKeyButton(e.key)}
    else if (
        e.key === "+" ||
        e.key === "-" ||
        e.key === "/" ||
        e.key === "%" 
    ){onClickOperationButton(e.key)}
    else if (e.key === "X"){onClickOperationButton("X")}
})

function onClickKeyButton (key){
    numbersEl.forEach(button => {
        if (button.innerText === key) button.click();
    })
}

function onClickOperationButton(key){
    operationEl.forEach(button => {
        if (button.innerText === key) button.click()
    })
}
