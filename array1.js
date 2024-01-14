//print all elements of array

// let heros = ["salman","sharukh","vijay","amir","akshay","jackie"];
// console.log(heros[0]);
// console.log(heros[5]);

let heros = ["Superman", "Antman","Spiderman","Thor","Ironman","Paul"];

// standay way ro print
// for (let idx = 0; idx<heros.length; idx++){
//     console.log(heros[idx]);
// }

// not a standard way
// for (let idx = 1; idx<+heros.length; idx++){
//     console.log(heros - 1);
// }

//for of

for(let hero of heros){
    console.log(heros)
}