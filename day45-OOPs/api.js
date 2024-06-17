const API = "https://jsonplaceholder.typicode.com/users";
const main = document.querySelector("main")
const searchBtn = document.querySelector("#search-btn");
const input = document.querySelector("input");
searchBtn.addEventListener("click", function (e) {
    searchBtn.setAttribute('disabled', true);

    fetch(API).then((res) => res.json())
        .then((product) => {
            console.log(product)
            product.forEach(element => {
                let { id, name, phone, username, email, address } = element;
                if (id === Number(input.value)) {
                    const heading = document.querySelector("#heading");
                    heading.style.visibility = "visible";
                    main.innerHTML += `
                    <div class="container">
                        <h1>Name : ${name}</h1>
                        <h2>Username: ${username}</h2>
                        <h1>Email: ${email}<h1>
                        <h1>Phone : ${phone}</h1>
                        <h1>Address : ${address.street}, ${address.city}, ${address.zipcode}</h1>
                    </div>
                `
                }
            });
        })
})
