//fake request using promises

const fakeRequestPromise = (url) => {
  return new Promise(function (resolve, reject) {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection timed out!");
      } else {
        resolve("Here is your fake data from " + url);
      }
    }, delay);
  });
};

//sending fakerequest from api created above

// fakeRequestPromise("yelp.com/api/coffe")
//   .then(() => {
//     console.log("Promise resolved");
//     console.log("It worked!!");
//     fakeRequestPromise("yelp.com/api/coffe/page2").then(() => {
//         console.log("Promise resolved(page2)");
//         console.log("It worked!!");
//         fakeRequestPromise("dilee.com").then(()=>{
//             console.log("Promise resolved(page3)");
//             console.log("It worked!!");
//         }).catch(()=>{
//             console.log("Promise rejected");
//         console.log("Oh no error!!!");
//         })
//     }).catch(() => {
//         console.log("Promise rejected");
//         console.log("Oh no error!!!");
//       });
//   })
//   .catch(() => {
//     console.log("Promise rejected");
//     console.log("Oh no error!!!");
//   });

//we can chain promises by returning promises from then()

fakeRequestPromise("dileep/api/users1").then((data)=>{
    console.log("It worked!!! (page1)");
    console.log(data)
    return fakeRequestPromise("dileep/api/users2");
})
.then((data)=>{
    console.log("It worked!!! (page2)");
    console.log(data)
    return fakeRequestPromise("dileep/api/users3");
})
.then((data)=>{
    console.log("It worked!!! (page3)");
    console.log(data)
})
.catch((err)=>{
    console.log("Oh no , a request failed!!!!");
    console.log(err)
})