const getProducts = document.querySelector(".get-products-btn")
const mainContainer = document.querySelector(".main-container");
const API = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

getProducts.addEventListener("click", async function (e) {
    try {
        const result = await fetch(API);
        const product = await result.json();
        console.log(product)
        for (let i = 0; i < 30; i++) {
            const html = `<div class="product-container">
            <img src=${product[i].image_link} alt="colorpencil">
            <div class="name_price">
                <h1>${product[i].name}</h1>
                <h1>$ ${product[i].price}</h1>
            </div>
            <p>${product[i].description.slice(0, 100)}</p>
            <h3 class="rating">Rating: ${product[i].rating}</h3>
            <button><a href=${product[i].product_link}>Add to Cart<a></button>
        </div>`
            mainContainer.innerHTML += html;
        }
    } catch (e) {
        console.log(e);
    }
})

// fetch(API).then((data) => data.json()).then((products) => {
//     console.log(products);
// })

