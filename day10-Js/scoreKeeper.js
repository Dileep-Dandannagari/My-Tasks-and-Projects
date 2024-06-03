//select both players buttons
const p1Button=document.querySelector("#p1Button");
const p2Button=document.querySelector("#p2Button");
const p1Display=document.querySelector("#p1Display");
const p2Display=document.querySelector("#p2Display")
let p1Score=0;
let p2Score=0;
let winningScore=5;
let isGameOver=false;
p1Button.addEventListener('click', function(e){
   if(!isGameOver){
    if(p1Score==winningScore){
       isGameOver=true;
       
        
    }
    p1Score+=1;
    p1Display.textContent=p1Score;
}
    
});
p2Button.addEventListener('click', function(e){
    if(!isGameOver){
   if(p2Score==winningScore ){
   
    isGameOver=true;
   }
   p2Score+=1;
   p2Display.textContent=p2Score;
}
})

const reset=document.querySelector("#reset");
reset.addEventListener('click', function(e){
    p1Score=0;
    p2Score=0;
    p1Display.textContent=0;
    p2Display.textContent=0;
})