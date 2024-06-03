//1.Write a program that pushes the vowels into an empty array
//2.Write a program to separate the positive and negetive numbers from an array
//3.Write  a program that filters even or odd numbers from array
//4.Write a program to find how many elements exist in array
//5. Write a program to loop over an array with some of the elements

const alphabets = [  "a",  "w",  "r",  "w",  "b",  "B",  "q",  "U",  "i",  "x",  "o",  "E",  "e",];
const vowelsCheck = "aeiouAEIOU";
const vowels = [];
alphabets.forEach(function(a){
    if(vowelsCheck.includes(a))
        vowels.push(a)
})
console.log(vowels);

//--------------------------------------------------------------------------------------------------------------------

const numbers=[1,4,43,-3,2,-15,-11,3,5,2,99,544,2,-9,10];
const positiveNumbers=[];
const negetiveNumbers=[];
for(let num of numbers){
    if(num>=0){
        positiveNumbers.push(num); 
    }else{
        negetiveNumbers.push(num);
    }
}
console.log("Positive numbers ", positiveNumbers);
console.log("Negetive numbers ", negetiveNumbers);

//------------------------------------------------------------------------------------------------------------

const number=[2,5,6,2,4,6,2,4,5,5,8,12,54,23,76,23,-43,-45,-21,21,91,99];
const evenNumbers=[];
const oddNumbers=[];
for(let num of number){
    if(num%2==0)
        evenNumbers.push(num);
    else
        oddNumbers.push(num);
}
console.log("Even numbers ", evenNumbers);
console.log("Odd numbers ", oddNumbers)

//------------------------------------------------------------------------------------------------------

function countElementsInArray(array){
    return array.length;
}
const array=[3,"sldfkjsdf",6,"Dileep", true , null , undefined, NaN];
console.log("The length of the array is ",countElementsInArray(array));

//---------------------------------------------------------------------------------------------------------------

// for(let i=0; i<array.length; i++)
//     console.log(array[i]);
// for(let i=array.length-1; i>=0; i--)
//     console.log(array[i]);
// for(let a in array)
//     console.log(array[a])
// for(let a of array)
//     console.log(a)
// array.forEach(function(a){
//     console.log(a)
// })
// let i=0;
// while(i<array.length){
//     console.log(array[i]);
//     i++;
// }


