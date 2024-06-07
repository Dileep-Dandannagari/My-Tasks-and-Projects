// setTimeout(() => {
//     document.body.style.backgroundColor="red";
//     setTimeout(() => {
//         document.body.style.backgroundColor="yellow";
//         setTimeout(() => {
//             document.body.style.backgroundColor="orange";
//         }, 1000);
//     }, 1000);
// }, 1000);


//generic function to change the color 

// const delayedColorChange=(newColor, delay,nextColor)=>{
//     setTimeout(() => {
//         document.body.style.backgroundColor=newColor;
//        nextColor();
//     }, 1000);
// }
// //so many call backs are nested here
// delayedColorChange("red",1000,function(){
//     delayedColorChange("yellow",1000,function(){
//         delayedColorChange("teal",1000,()=>{
//             delayedColorChange("crimson",1000,function(){
//                 delayedColorChange("seagreen",1000)
//             })
//         });
//     })
// });


//a fakeRequest using callback
//credentail issues, url might be wrong, api down, internet down
const fakeRequestCallBack=(url, success, failure)=>{
    const delay=(Math.floor(Math.random()*4500))+500;
    setTimeout(() => {
        if(delay>4500){
            failure("Connection TimedOut:(");
        }else{
            success(`Here is your fake data from ${url}`);
        }
    }, delay);
}


fakeRequestCallBack("https:/dileep.com",
    function(data){
        console.log("It worked!!!");
        console.log(data);
        fakeRequestCallBack("https/dileep2.com",
            function(data){
                 console.log("It worked (page2)");
                 console.log(data);
                 fakeRequestCallBack("https/dileep3.com", 
                    function(data){
                         console.log("It worked again:)")
                         console.log(data);
        },
        function(err){
            console.log("Error Occured (page3)")
            console.log(err);
        })
    },function(err){
        console.log("Error Occured(page2)")
        console.log(err);
    })
},function(err){
    console.log("Error Occured!!!");
    console.log(err);
})



