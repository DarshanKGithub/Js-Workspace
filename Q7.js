//Q7) For a given array with mark of students -> [85,97,44,37,76,60].Find the average marks of entire class

let marks = [85,97,44,37,76,60];

let sum = 0;

//sum = sum + marks;

for(let val of marks){
    sum += val;
    // sum = sum + val;
    // console.log(val);
}

let avg = sum / marks.length;
console.log(`Average marks of entire students is ${avg}`);
