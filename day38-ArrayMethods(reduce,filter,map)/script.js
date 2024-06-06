//Practicing with complex array

const users=[
    {firstName:"Dileep", lastName:"Dandannagari", age:22},
    {firstName:"Virat", lastName:"Kohli", age:36},
    {firstName:"elon", lastName:"musk", age:50},
    {firstName:"deepika", lastName:"padukone", age:22},
]

//find list of full names from the array
//["akshay", "donald trump", ......]

// const output=users.map(function(user){
//     return user.firstName+" "+user.lastName;
// })
// console.log(output);

//find out how many users have a particular age
//{22:2 ,75:1 , 50:1}
// const output=users.reduce(function(acc, curr){
//     if(acc[curr.age]){
//         acc[curr.age]++;
//     }else{
//         acc[curr.age]= 1;
//     }
//     return acc;
// }, {})
// console.log(output)

//find the firstname of all the people whose age is less than 25
//["Dileep", "Deepika"]
// const output=users.filter(x=>x.age<30).map(x=>x.firstName);//method chaining
const output=users.reduce(function(acc, curr){
    if(curr.age<23){
        acc.push(curr.firstName)
    }
    return acc;
},[])
console.log(output);




















// const arr = [5, 1, 3, 2, 6];

//reduce
//reduce() is used at a place where we have to take all the 
//elements of array and come up with a single value out of
//them.It takes a callback function and optional initial value of
//accumulator as arguments. The callback fucntion recieves an 
//accumulator and the current element of the array.
//The result of each function call is stored in the accumulator, which is
//returned as the final result.

//sum or max inside array

// function findSum(arr){
//     let sum=0;
//     for(let i=0; i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum;
// }
// console.log(findSum(arr))

// function findMax(arr){
//     let max=0;
//     for(let i=0; i<arr.length; i++){
//         if(max<arr[i]){
//             max=arr[i];
//         }
//     }
//     return max;
// }
// console.log(findMax(arr))

// const output=arr.reduce(function(acc,curr){
//     return acc+curr
// })
// console.log(output)

// const output=arr.reduce(function(acc,curr){
//      if(acc<curr)
//         acc=curr;
//     return acc;
// },0)
// console.log(output)



//filter
//The filter method is used to create a new array containing
//only the elements of original array that satisfies a
//specified condition.It takes a call back function as argument
//which returns a boolean value indicating weather a element should
//be included in new array or not

//filter odd values
// function isOdd(x){
//     return x%2==1;
// }
// function isEven(x){
//     return x%2==0;
// }
// const output=arr.filter((x)=> x>4);
// console.log(output)


//The map method is used to transform each element of an array
//by applying a callback funtion to it.It returns a new array containing
// the results of applying the call back function to each element of the array.The
//Original array remains unchanged.

//Double -[10, 2, 6, 4, 12]
//Triple-[15, 3, 9, 6, 18]
//Binary - ["101", "1", "11", "10","110"]

// function double(x){
//     return 2*x;
// }
// function triple(x){
//     return 3*x;
// }
// const output=arr.map( x=> x.toString(2));
// console.log(output);
