//Q4.Print all even number from 0 to 100

for (let num = 0 ; num<=100; num++){
    if(num % 2 === 0){
        console.log("Even Num=", num);
    }
else if(num % 2 !=0){
    console.log("odd Num",num);
}
else{
    console.log("End numbers");
}
}