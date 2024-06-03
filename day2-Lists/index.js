const div=document.querySelector(".container");
const baseURL="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
for(let i=1; i<=151; i++){
    const newDiv=document.createElement("div");
    newDiv.classList.add("class");
    const span=document.createElement("span");
    span.innerText=`#${i}`;
    const newImg=document.createElement("img");
    newImg.src=`${baseURL}${i}.png`;
    newDiv.append(newImg,span);
    div.appendChild(newDiv);
}

