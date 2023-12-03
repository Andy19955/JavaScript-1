import { createProduct } from "./createProduct.js";

export function displayWomenProducts(products) {
  const productDisplay = document.querySelector("#product-container");

  products.forEach(function (product) {
    if (product.gender.toLowerCase() === "female") {
      const productItem = createProduct(product);
      productDisplay.append(productItem);
    }
  });
}
