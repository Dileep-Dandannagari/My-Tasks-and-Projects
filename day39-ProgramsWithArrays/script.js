const array=["Dileep", true, "raghu",null, 23, 27,12,"red","green","Blue"]


//writing a function to reverese an array

function reverseArray(arr){
   const newArray=[];
   let counter=0;
  for(let i=arr.length-1; i>=0; i--){
   newArray[counter++]=arr[i];
  }
 return newArray; 
}
console.log(reverseArray(array))
console.log(array.reverse());//using array method


//A program to check weather a element is present or not

function checkElement(arr, element){
   for(let i=0; i<arr.length; i++){
    if(arr[i]===element)
        return true;
   }
  return false;
}
console.log(checkElement(array,NaN))
console.log(array.includes("true"));//using array method

//find the index of the element if not found return -1

function findIndex(arr, elem){
    for(let i=0; i<arr.length;i++){
        if(arr[i]===elem)
            return i;
    }
    return -1;
}
console.log(findIndex(array, "red"))
console.log(array.indexOf(2));//using array method


//remove second element and insert two new elements it its place
function addTwoElements1(arr,elem1,elem2){
    const newArray=[];
    for(let i=0; i<arr.length; i++){
        if(i===1){
            newArray[i]=elem1;
            newArray[++i]=elem2;
            continue;
        }
        newArray[i]=arr[i];
    }
    return newArray;
}
function addTwoElements(arr,elem1,elem2){
    arr.splice(1,1,elem1,elem2);//[true]
    return arr;
}
console.log(addTwoElements(array,"Shiva","Rambabu"));



//return first three element of an array


function threeElements(arr){
    const output=[];
   for(let i=0;i<=2;i++){
    output[i]=arr[i];
   }
   return output;
}
console.log(threeElements(array));
console.log(array.slice(0,3));//usign array method


//program to concat two arrays
const arr=[3,5,6,6]
const brr=["Dileep","Raghu"]
function addTwoArrays(arr,brr){
  return [...arr,...brr]
}
console.log(addTwoArrays(arr,brr));
console.log(arr.concat(brr));

//write a function that takes an array and sorts in alphabetical order
function sortTheArray(arr){
    let help=0;
    for(let i=0; i<arr.length; i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                help=arr[i];
                arr[i]=arr[j];
                arr[j]=help;
            }
        }
    }
    return arr;
}
console.log(sortTheArray(["Dileep","Shiva", "Raghu","Thiva","a", "z","p"]));
console.log(["Dileep","Shiva", "Raghu","Thiva","a", "z","p"].sort());//using array method


//double the element in given array and return new array
const num=[1,4,5,6,7,2]
const output=num.map((x)=>2*x);
console.log(output);
//write a program to find even numbers in array
const evenNum=num.filter((x)=>x%2==0);
console.log(evenNum);
//sum and muliplication of elements of array
const sum=num.reduce((acc,curr)=>acc+curr);
console.log("Sum is ", sum)
const mul=num.reduce((acc,curr)=>acc*curr);
console.log("Multiplication is",mul);

