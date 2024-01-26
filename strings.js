const name =" priya-a"
const count=50;

console.log(name+count+" value")
console.log(name+count+" ")
const gamename=new String("priya-a");
console.log(gamename[1])
console.log(gamename.__proto__)
console.log(gamename.length)
console.log(gamename.charAt(2))
console.log(gamename.indexOf('y'))


const newstring=gamename.substring(0,4)
console.log(newstring);

const newstring2=gamename.slice(-2,2) //u can use -ve values
console.log(newstring);
console.log(name.trim());


const url=" priya0108@gmail.com "
console.log(url.replace("@"," - "));

console.log(gamename.split("-"))
const number=100.67;
console.log(number.toFixed(1));  //tofixed
console.log(number.toPrecision(3)); //precision

const hundreds=10000000
console.log(hundreds.toLocaleString("en-IN"));


const math=100;
console.log(math.random());