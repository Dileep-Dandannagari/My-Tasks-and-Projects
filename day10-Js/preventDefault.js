const form=document.querySelector("form");
const list=document.querySelector("#list");
form.addEventListener("submit", function(e){
    e.preventDefault();
    const username=document.querySelector("#username");
    const comment=document.querySelector("#comment");
    const newList=document.createElement("li");
    newList.innerHTML=`<b>${username.value}</b> - ${comment.value}`;
    list.appendChild(newList);
    username.value="";
    comment.value="";
})