//spread with functions
//spread with arrays
const num=[3,5,6,2,6,2,6,2,6,2,343];
const copyNum=[num];
console.log(num)
console.log(copyNum);
copyNum.push("Dileep");
console.log(num)
console.log(copyNum);

//spread with objects

let personInfo={
    name:"Dileep",
    mail:"dileep@gmail.com",
    age:22
}
let registrationDetails={...personInfo, id:312, isAdmin:false}
console.log(registrationDetails)



//rest parameters

function countArgumentsPassed(){
    let total=0; 
    for(let i=0; i<arguments.length; i++){
        total++;
    }
    // console.log(arguments);
    return total;
}

let count=countArgumentsPassed(2,6,67,true, "Dileep");
// console.log(count);










// function max(nums){
//     let max=nums[0];
//     for(let i=0; i<nums.length; i++ ){
//         if(max<nums[i]){
//             max=nums[i];
//         }
//     }
//     return max;
// }

// console.log(max(num));