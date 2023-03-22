/*import myFunction, { multiply } from "./myModule";

myFunction();

const result = multiply(2, 5);

console.log(result);*/


const productContainer = document.querySelector(".product-container");

let productsHtml = "";

const products = [
    {
        name: "Brasilien",
        price: 1000,
    },
    {
        name: "Ecuador",
        price: 10000,
    }
];

products.forEach((product) => {
    console.log(product);
    const productHtml = `
        <div class="product">
            <div class="product-title">${product.name}</div>
        </div>
    `;
    productsHtml = productsHtml + productHtml;
})


productContainer.innerHTML = productsHtml;