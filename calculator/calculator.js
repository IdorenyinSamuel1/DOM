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
            currentValue = "error";
            return;
        } 
            result = prev / curr;
    }

    currentValue = String(result);
    operator = null;
}

const resetCalculator = () => {
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


//connect digit buttons into inputDigit function
const digits = document.querySelectorAll(".digit");
digits.forEach((button) => {
    button.addEventListener('click', () => {
        inputDigit(button.textContent);
    });
}); 

//connecting operator buttons into inputOperator function
const operators = document.querySelectorAll(".operator");
operators.forEach((button) => {
    button.addEventListener('click', () => {
        inputOperator(button.textContent);
    });
});

// connecting equal button into calculate function
const equal = document.querySelector(".equals");
equal.addEventListener('click', () => {
    calculate();
    updateDisplay();
});

const clears = document.querySelector(".clear");
clears.addEventListener('click', () => {
    resetCalculator();
    updateDisplay();
});
