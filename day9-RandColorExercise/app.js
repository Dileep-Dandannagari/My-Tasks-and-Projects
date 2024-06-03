const button=document.querySelector("button");
const h=document.querySelector("h1");

button.addEventListener("click", function(){
  const newColour= makeRandColor();
   document.body.style.backgroundColor=newColour;
   h.innerText=newColour;
   button.innerText="change color";
})

function makeRandColor(){
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
     return `rgb(${r}, ${g}, ${b})`;
}