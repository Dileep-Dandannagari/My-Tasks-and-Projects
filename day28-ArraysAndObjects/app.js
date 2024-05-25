//Arithematic operations in java: To perform arithematic operations we need operators to perform operations on 
//numeric value and return numeric value.

// let a=prompt("Enter first number");
// let b=prompt("Enter second number");

// let operation=prompt("select operation(add, sub, mul, div, mod, exponent");
// let result;

// if(operation=="add"){
//     result=Number(a)+Number(b);
// }else if(operation=="mul"){
//     result=a*b;
// }else if(operation=="sub"){
//     result=a-b;
// }else if(operation=="div"){
//     result=a/b;
// }else if(operation=="mod"){
//     result=a%b;
// }else if(operation=="exponent"){
//     result=a**b;
// }else{
//     alert("invalid operation");
// }
// alert("Your result is "+result);

//implicit and explicti coersion or conversion
let num=parseInt("sdfkjsdflkj100");
console.log(num,typeof num);


let myObject={
    name:"Dileep",
    age:22,
    birthYear:2002,
    degree:"Btech",
    stream:"mechanical",
    subjects:["FEM","Heat transfer","Aerodynamics","R&AC","Thermodynamics"],
    semister:{
        isCleared:true
    }

}
console.log(myObject);
//accessing the array element nested inside myobject
console.log(myObject.subjects[1]);

let myArray=[1,"two",true,NaN];
//accessing
myArray[1];
//modifying 
myArray[3]=undefined;
//adding
myArray.push(NaN);
//deleting
myArray.pop();
myArray.unshift("dileep");
console.log(myArray)




