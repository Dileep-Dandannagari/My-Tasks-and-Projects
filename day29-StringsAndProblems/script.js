//reversing a number using javascript
let num=1234;
let revNum=num.toString();
let res="";
for(let i=revNum.length-1; i>=0; i--){
    res=res+revNum.charAt(i);
}
console.log(typeof parseInt(res));
