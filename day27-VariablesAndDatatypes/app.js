//primitive datatypes
let myName; //declaring a variable
myName = "Dileep"; //initializing a variable
let myAge = 22; //declaring and initializing at the same time
let isHappy = true;
let myNetWorth = 10003434342424253n;
let marritalStatus;
let copyMyname="Dileep";
// let marritalStatus=prompt("Are you married or unmarried");
let myIntro =
  `Hello, My name is ` +
  myName +
  " and I am " +
  myAge +
  " " +
  "years old." +
  " My netWorth is " +
  myNetWorth +
  "$" +
  " And I am " +
  marritalStatus;
console.log(myIntro);

//non-primitive or referenced datatypes 
let todoList = ["Meditation", "Reading", "Running"];
let copyTodoList = todoList;
todoList.pop();

console.log(todoList);
console.log(copyTodoList);
//storing my intro insdie object
let myDetails = {
  myName: "Dileep",
  myAge: 22,
  isHappy: true,
  myNetWorth: 12000,
  marritalStatus,
  myIntro:
    `Hello, My name is ` +
    myName +
    " and I am " +
    myAge +
    " " +
    "years old." +
    " My netWorth is " +
    myNetWorth +
    "$" +
    " And I am " +
    marritalStatus,
};
//checking the type of value being stored in the variable by using

console.log("type of myName is " + typeof myName);
console.log("type of myAge is " + typeof myAge);
console.log("type of isHappy is " + typeof isHappy);
console.log("type of marritalStatus " + marritalStatus);
console.log("type of newWorth " + typeof myNetWorth);
console.log("type of null " + typeof null);
console.log(typeof +"sdfkd");


//checkign out arrays
let myArray=new Array();
myArray[0]="Dileep";
myArray[1]="Raghu";
myArray[2]="ShivaKrishna";
myArray[3]="Rambabu";
console.log(myArray)
//accessing the array values by index position
console.log(myArray[2]);

