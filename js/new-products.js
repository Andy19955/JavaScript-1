import { url } from "./constants.js";
import { openProduct } from "./open-product.js";

const productDisplay = document.querySelector(".product-grid");
const loading = document.querySelector(".loading");

async function fetchProducts() {
  try {
    const response = await fetch(url);
    const products = await response.json();

    let productsDisplayed = 0;
    for (let i = 0; i < 4; i++) {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.dataset.id = products[i].id;

      const productImgContainer = document.createElement("div");
      productImgContainer.classList.add("product-img");

      const productImg = document.createElement("img");
      productImg.setAttribute("src", products[i].image);
      productImg.setAttribute("alt", products[i].title);

      productImgContainer.append(productImg);

      const productName = document.createElement("span");
      productName.classList.add("product-name");
      productName.innerText = products[i].title;

      const productPrice = document.createElement("span");
      productPrice.classList.add("product-price");
      productPrice.innerText = "$ " + products[i].price;

      productCard.append(productImgContainer);
      productCard.append(productName);
      productCard.append(productPrice);

      loading.classList.add("hidden");
      productDisplay.append(productCard);

      productCard.addEventListener("click", openProduct);

      productsDisplayed++;
    }
  } catch (error) {
    console.log(error);
  }
}

fetchProducts();
