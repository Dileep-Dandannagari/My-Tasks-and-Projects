// / 1. sum of integers from 1 to 100
let number=prompt("Enter a number for adding all the numbers: ")
let sum=0;
for(let i=1;i<=number;i++){
    sum +=i;
}
console.log("sum of numbers from 1 to 100: ",sum);

// 2.factorial of a number
let num=5;
let fact=1;
for(let i=1;i<=num;i++){
    fact *=i;
}
console.log(`factorial of ${num} is ${fact}.`);

// 3.multiplication table with a specific number
let num1=16;
for(let i=1;i<=10;i++){
    console.log(`${num1} * ${i} = ${num1*i}`);
}

// 4.finding prime number within a given range

let number1=0;
let number2=100;
for(let i=number1;i<=number2;i++){
    let n1=0;
    for(let j=2;j<i;j++){
        if(i%j==0){
            n1=1;
            break;
        }
    }

    if(i>1 && n1==0){
        console.log(i);
    }
}    

// 5.Generating a sequence of square numbers upto a specified limit

let squareNumber=100;
for(let i=1;i<=squareNumber;i++){
    let square=i**2;
    console.log(square);
}