// var firstName;=>undefined
// //functions in javascript

"use strict";
// //named function
// //function declaration

// function greeting(name){
//     return `Hello Good Morning ${name}`;
// }
// // function greeting(){
// //     console.log("hii")
// // }
// //calling or invoking a function
// let greet =greeting('Dileep');
// console.log(greet);
// greet=greeting("Raghu");
// console.log(greet);
// //Here in the below case I am passing no arguments but the method is expecting
// //a parameter to be passed so we will get undefined in the console.
// greet=greeting();
// console.log(greet);

// //Anonymous function->A function with no name
// let add=function(a,b){
//     console.log(a+b);
// }
// add(2,3);
// add(34,43);

// //Arrow function-->A function with no name and function keyword
// let bark=()=>{
//     console.log("Bow Bow!");
// }
// bark();

// //Event handling using DOM(Document object model)
// function changeButton(){
//     let btn=document.querySelector(".button");
//     btn.innerHTML="reset"; //changing submit button to reset
// }
// function changeColor(){
//     let heading=document.querySelector("#heading");
//     heading.style.color="red";//the color is changed from green to red
// }

// //The different ways of selecting html elements in javascript
// //1.Using element name(getElementsByTagName)
// //2.Using the ID of the element(getElementById)
// //3.Using the class(getElementByClass)
// //4.By using querySelector and querySelectorAll

// //some examples are
// let tag=document.getElementsByTagName("h1");
// let tag2=document.getElementById("#heading");
// let tag3=document.getElementsByClassName(".heading");
// let tag4=document.querySelector("anyselector");
// let tag5=document.querySelectorAll("selects all the precedent elements")
sayHi();
const sayHi=function(){
    console.log("shii");
}

///memory created ->undefined


// let firstName;
