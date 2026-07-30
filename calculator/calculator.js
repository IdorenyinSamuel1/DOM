// document.getGetElementById("myButton")
// document.querySelector("myButton")
// document.querySelectorAll("myButton")

// const myButton = document.querySelector(".button");
// console.log("button");

// // const operator = document.querySelectorAll(".operator");
// // console.log("operator");

// // const clear = document.querySelector(".clear");
// // console.log("clear");

// const equal = document.querySelector(".equal");
// console.log("equal");



// const equalsButton = document.querySelector(".equals");
// equalsButton.addEventListener('click', function() {
//     console.log("Equals button clicked");
// })

// const digit = document.querySelectorAll(".digit");
// console.log(digit);

// digit.forEach((button) => {
//     button.addEventListener('click', function() {
//         console.log("Digit button clicked");
//     });
// });

// const clear = document.querySelector(".clear");
// clear.addEventListener('click', function() {
//     console.log("Clear button clicked");
// });

// const operator = document.querySelectorAll(".operator");
// operator.forEach((button) => {
//     button.addEventListener('dblclick', function() {
//         console.log("Operator button clicked");
//     });
// });


let currentValue = "0";
let previousValue = "";
let operator = null;
let shouldResetDisplay = false;

const inputDigit = (digit) => {
    if (shouldResetDisplay) {
        currentValue = String(digit);
        shouldResetDisplay = false;
    }
    else{
        if (currentValue === "0") {
            currentValue = String(digit);      
        }
        else{
            currentValue = currentValue + digit;
        }
    }  
    
    updateDisplay();
}

const inputOperator = (op) => {
    previousValue = currentValue;
    operator = op;
    shouldResetDisplay = true;
}

const calculate = () => {
    const prev = parseFloat(previousValue);
    const curr = parseFloat(currentValue);

    let result;

    if (operator === "+") {
        result = prev + curr;
    }
    else if (operator === "-") {
        result = prev - curr;
    }else if (operator === "*") {
        result = prev * curr;
    }else if (operator === "/") {
        if (curr === 0) {
            currentValue = "cannot divide by zero";
            return;
        } 
            result = prev / curr;
    }

    currentValue = String();
    operator = null;
}

const clear = () => {
    currentValue = "0";
    previousValue = "";
    operator = null;
    shouldResetDisplay = false;
}
const updateDisplay = () => {
    const display = document.querySelector("#display");
    display.textContent = currentValue;
}

updateDisplay();