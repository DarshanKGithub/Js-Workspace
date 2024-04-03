
//for
//Display a text Five Times

for (let jstest = 0; jstest < 6; jstest++) {
    console.log("i love js times" + jstest);
}

// Display Sum of n Natural Numbers
const n = 100;
let sum = 0
for (let i = 0; i <= n; i++) {
    sum += i;
    console.log(sum);
}
//Display Sum of n Natural Numbers
const x = 100;
let add = 0
for (let i = x; i >= 1; i--) {
    add += i;
    console.log(add);
}
//while
//Display Numbers from 1 to 5
let i = 1, p = 5;
while (i <= p) {
    console.log(i);
    i += 1
}
//dowhile
// Example 3: Display Numbers from 1 to 5

// const j = 1, m = 5

// do {
//     console.log(j)
//     j++;
// }
// while (j <= m);

//find the js code to find largest number 5,-2,3,-4,5
var a = 5;
var b = -2;
var c = 3;
var d = -4;
var e = -5;
if (a > b && a > c && a > d && a > e) {
    console.log(a);
} else if (b > a && b > c && b > d && b > e) {
    console.log(b);
}
else if (c > a && c > b && c > d && c > e) {
    console.log(c)
}
else if (d > a && d > c && d > b && d > e) {
    console.log(d);
}
else {
    console.log(e);
}

//display odd and even from 0 15
for (i = 0; i <= 15; i++) {
    if (i === 0) {
        console.log(i + "is a even nos");
    } else if (i % 2 === 0) {
        console.log(i + "is a even number");
    }
    else {
        console.log(i + "is a odd number");
    }
}

//example;
for (i = 1; i < 100; i++) {
    if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else {
        console.log(i);
    }
}
//draw
var a, b, chr;
for (a = 1; a <= 5; a++) {
    for (b = 1; b < a; b++) {
        chr = chr + ("*");
    }
    console.log(chr);
    chr = "";
}
//sum the multiples of 3 and 5 under 1000
for (i = 0; i <= 1000; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        sum += i;
    }
}
console.log(sum)
