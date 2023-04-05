import "../css/pages/home.scss"


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







const appContainer = document.querySelector("#app");

//create article
const article = document.createElement("article");


//create image
const productImage = document.createElement("img");
productImage.setAttribute("src", "https://unsplash.com/de/fotos/zUNs99PGDg0")
article.append(productImage);




//create product heading
const productTitle = document.createElement("h3");
productTitle.textContent = "ProduktTitel";

//append heading to article
article.append(productTitle);


//create price
const productPrice = document.createElement("span");
productPrice.textContent = "€ 3.50";
article.append(productPrice);

//append article to appContainer
appContainer.append(article);