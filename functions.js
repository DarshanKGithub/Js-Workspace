//Add Two Numbers//
function addTwoNumbers(int1, int2) {
    console.log(int1 + int2);
}
addTwoNumbers(4, 5);

// program to find the square of a number
const square = (num1, num2) => {
    console.log(num1 * num1);
    console.log(num2 * num2);
}
square(2, 3);


//add two numbeers take input from user
function add(x, y) {
    console.log(x + y)
}
let x = parseFloat(prompt("enter first number"));
let y = parseFloat(prompt('enter second number'));

let result = add(x + y);
console.log("addition of two numbers is" + result);



//block
function add(x) {
    console.log(x)   //curly braces
}