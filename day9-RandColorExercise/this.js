const  buttons = document.querySelectorAll("button");
function makeRandColor(){
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    return `rgb(${r},${g}, ${b})`;
}

for(let button of buttons ){
    button.addEventListener("click", function(){
       this.style.backgroundColor=makeRandColor();
       this.style.color=makeRandColor();
    })
}