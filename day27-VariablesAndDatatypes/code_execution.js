

console.log(firstName);


// console.log(lastName);//this lastName is declared by using let
//so during memory creation phase undefined value is assigned to 
// the lastName but from the latest version js creators put them in temporal dead zone
//so we cannot access them when they are in that zone that is
//if they are not initialized. 


// console.log(birthYear)//same with this also

var firstName="Dileep";
console.log(firstName);
let lastName="Dandannagari";
let age=22;
const birthYear=2002;

let fullName=firstName+" "+lastName;
console.log(fullName);