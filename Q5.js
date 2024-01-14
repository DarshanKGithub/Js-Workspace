//Q5) Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enter the correct value.

// let gameNum = 25;

// let userNum = prompt("Guess the game number");
// console.log(gameNum);

let gameNum = 25;

let userNum = prompt("Guess the game number:");

while(userNum !=gameNum){
     userNum = prompt("You entered wrong number, Enter correct number");
}

console.log("Congratulation, you entered the correct game number!!!");