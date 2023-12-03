import { url } from "./constants.js";
import { openProduct } from "./open-product.js";

async function fetchProducts() {
  try {
    const response = await fetch(url);
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    displayError();
  }
}

fetchProducts();

function displayError() {
  const productDisplay = document.querySelector(".product-grid");
  const loading = document.querySelector(".loading");

  const errorMessage = document.createElement("div");
  errorMessage.classList.add("error");
  errorMessage.textContent = `An error occured fetching the products.`;

  loading.classList.add("hidden");
  productDisplay.append(errorMessage);
}

function displayProducts(products) {
  const productDisplay = document.querySelector(".product-grid");
  const loading = document.querySelector(".loading");

  products.forEach(function (product) {
    if (product.gender.toLowerCase() === "female") {
      const productCard = createProductCard(product);

      loading.classList.add("hidden");
      productDisplay.append(productCard);

      productCard.addEventListener("click", openProduct);
    }
  });
}

function createProductCard(product) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");
  productCard.dataset.id = product.id;

  const productImgContainer = document.createElement("div");
  productImgContainer.classList.add("product-img");

  const productImg = document.createElement("img");
  productImg.setAttribute("src", product.image);
  productImg.setAttribute("alt", product.title);

  productImgContainer.append(productImg);

  const productName = document.createElement("span");
  productName.classList.add("product-name");
  productName.textContent = product.title;

  const productPrice = document.createElement("span");
  productPrice.classList.add("product-price");
  productPrice.textContent = "$ " + product.price;

  productCard.append(productImgContainer);
  productCard.append(productName);
  productCard.append(productPrice);

  return productCard;
}
