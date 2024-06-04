//creating a countdown timer that displays numbers from 5 to 1 
// on webpage


let counter=5; 

let startButton=document.querySelector(".start");
let displayTimer=document.querySelector(".timer");

function startTimer(){
    startButton.setAttribute('disabled',true);
    let id=setInterval(function(){
        displayTimer.innerHTML-=1;
       --counter;
       if(counter==1){
        clearInterval(id);
    }
    },1000)
    console.log("hii", counter)
    setTimeout(() => {
        console.log("hii", counter)
    }, 5200);
}


const div=document.querySelector("#container");
let id;
function changeDivColor(){
    id= setInterval(() => {
        let r=Math.floor(Math.random()*255)+1;
        let g=Math.floor(Math.random()*255)+1;
        let b=Math.floor(Math.random()*255)+1;
        div.style.backgroundColor=`rgb(${r},${g},${b})`;
    }, 1000);
    clearInterval(id);   
 
}
changeDivColor();
function stopDiv(){
    clearInterval(id);
    console.log("entered")
}


