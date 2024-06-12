const API = "https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Vegan&product_type=nail_polish";
const main = document.querySelector("main");


async function getData(url) {
    let data = await fetch(url);
    let result = await data.json();
    // console.log(result[0].product_colors[0])
    result.forEach(product => {
        let { brand, name, price, image_link } = product;

        //one approach
        const html =
            `<div class="product-container">
                <img src=${image_link} alt="moov">
                <h2>${brand}</h2>
                <h4>${name}</h4>
                <div>
                    <p>$${price}</p>
                    <p>Rating:${randNum()}</p>
                </div>
            </div>
        `

        main.innerHTML += html;
        //adding the colors to the each product
        const div = document.createElement("div");
        // const productContainer = document.querySelector("product-container");
        product.product_colors.forEach((color) => {
            const span = document.createElement("div");
            span.classList.add("style-span");
            span.style.backgroundColor = `${color.hex_value}`;
            div.append(span);
            // main.appendChild(div);
        })


        //second approach
        // const div = document.createElement("div");
        // div.classList.add("product-container");
        // const img = document.createElement("img");
        // img.src = image_link;
        // const h2 = document.createElement("h2");
        // h2.textContent = brand;
        // const h4 = document.createElement("h4")
        // h4.textContent = name;
        // const innerDiv = document.createElement("div");
        // const p = document.createElement("p");
        // const p1 = document.createElement("p");
        // p.textContent = `$${price}`;
        // p1.textContent = `Rating: ${randNum()}`;
        // innerDiv.append(p, p1);
        // div.append(img, h2, h4, innerDiv)


        // main.append(div)
    });
}
getData(API);

function randNum() {
    return Math.floor(Math.random() * 5) + 1;
}