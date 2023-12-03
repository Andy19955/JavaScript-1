import { createProduct } from "./createProduct.js";

export function displayMenProducts(products) {
  const productDisplay = document.querySelector("#product-container");
  const loading = document.querySelector("#loading-products");

  products.forEach(function (product) {
    if (product.gender.toLowerCase() === "male") {
      const productItem = createProduct(product);
      productDisplay.append(productItem);
    }
  });

  loading.classList.add("hidden");
}
