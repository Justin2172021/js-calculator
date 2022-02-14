// temp prompts for user inputs for now..will delete this block of code once buttons are introduced!
let a = prompt("Please enter a number:");
let b = prompt("Please enter a second number:");
let c = prompt("What operator would you like to use? (+,-,*,/):");
let num1 = parseInt(a);
let num2 = parseInt(b);
let operator = c;
console.log("num1", num1);
console.log("num2", num2);
console.log("operator used", operator);
// temp prompts for user inputs for now..will delete this block of code once buttons are introduced!

// TODO:  how to deal with multiple/varying argument inputs?  --Check old projects or google it!!
// (...arrayName) (spreads) it loops tho so look to incorporate this when I need to loop through an array
// https://javascript.info/rest-parameters-spread
function add(num1, num2) {
    let addValue = (num1 + num2);
    console.log("add", addValue);
    //return addValue;
}

// TODO:  how to deal with multiple/varying argument inputs?  --Check old projects or google it!!
// (...arrayName) (spreads) it loops tho so look to incorporate this when I need to loop through an array
// https://javascript.info/rest-parameters-spread
function subtract(num1, num2) {
    let subtractValue = (num1 - num2);
    console.log("subtract", subtractValue);
    //return subtractValue;
}

// TODO:  how to deal with multiple/varying argument inputs?  --Check old projects or google it!!
// (...arrayName) (spreads) it loops tho so look to incorporate this when I need to loop through an array
// https://javascript.info/rest-parameters-spread
function multiply(num1, num2) {
    let multiplyValue = (num1 * num2);
    console.log("multiply", multiplyValue);
    //return multiplyValue;
}

// TODO:  how to deal with multiple/varying argument inputs?  --Check old projects or google it!!
// (...arrayName) (spreads) it loops tho so look to incorporate this when I need to loop through an array
// https://javascript.info/rest-parameters-spread
function divide(num1, num2) {
    let divideValue = (num1 / num2);

    // error check for division by 0
    if (divideValue == "Infinity") {
        return alert("Error!  Cannot divide by zero!  You should know better....");
    } else return console.log("divide", divideValue);
    //return divideValue;
}

// use operator variable to determine which function to call
function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            console.log("passing through switch +");
            add(num1, num2);
            break;
        case "-":
            console.log("passing through switch -");
            subtract(num1, num2);
            break;
        case "*":
            console.log("passing through switch *");
            multiply(num1, num2);
            break;
        case "/":
            console.log("passing through switch /");
            divide(num1, num2);
            break;
        default:
            alert("ERROR!  Didn't receive an operator, or type not as expected!");
    }
}

// call operate function and pass through the args (from prompts)!
operate(operator, num1, num2);