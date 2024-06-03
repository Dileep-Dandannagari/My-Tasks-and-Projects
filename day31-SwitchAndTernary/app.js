//1.Program to find the given number is odd or even

let evenOrOdd=1;
if(evenOrOdd%2==0)
    console.log("The given number is EVEN!");
else
    console.log("The given number is ODD!");


//2.The given number is positive, negetive or zero

let digit =0;
if (digit == 0)
     console.log("ZERO");
else if (digit > 0)
     console.log("Positive number");
else 
    console.log("Negetive number");


//3.The given number is 1 digited , 2 digited, 3 digited or more than
// three digited

let num=234;
if((num>=0 && num<=9) || (num<=0 && num>= -9))
    console.log("One digited number");
else if((num>=10&&num<=99) || (num<=-10&&num>=-99))
    console.log("Two digited number");
else if((num>=100 && num<=999) || (num<=-100 && num>=-999))
    console.log("Three digited number");
else
    console.log("More than Three digits");


//4.The entered number is smallest four digit number or not
let smallestOrNot=100;
if(smallestOrNot==1000)
    console.log("Its the smallest four digit number");
else
    console.log("Its not the smallest four digit number");

//5.The given character is lowercase letter or uppercase letter or 
//digit or a special character

let char ="(";
if(char>='a' && char<='z')
    console.log("LowerCase letter");
else if(char>="A" && char>="Z")
    console.log("UpperCase letter");
else if(char>='0' && char<='9' )
    console.log("Its a Digit");
else
    console.log("Its a character.");
//6.The given year is leap year or not using ternary operator

let year=2100;
console.log(((year%4==0 && year%100 !=0)||year%400==0)?"It's a leap year.":"It's not a leap year.");


//7.The given number is divisible by 5 or not
let divisibleByFiveOrNot=42;
if(divisibleByFiveOrNot%5==0)
    console.log("Number is divisible by 5");
else
    console.log("Number is not divisible by 5");


//8.Find the maximum number out of the given three numbers
let x=2, y=4, z=7;
if(x>y){
    if(x>z)
        console.log("The max number is :"+x);
}else if(y>x && y>z)
    console.log("The max number is :"+y);
else
    console.log("The max number is :"+z);


//10.Write a program to find a, b, c can form three sides of 
//triangle or not.

let a=21, b=42, c=32;
if(a+b>c && b+c>a && c+a>b)
    console.log("These sides can form traingle");
else
    console.log("These sides can't form traingles!");

 

