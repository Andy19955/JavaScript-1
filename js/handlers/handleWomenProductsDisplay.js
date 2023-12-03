import { fetchProducts } from "../api/fetchProducts.js";
import { displayWomenProducts } from "../ui/products/displayWomenProducts.js";
import { displayMessage } from "../ui/shared/displayMessage.js";

export async function handleWomenProductsDisplay() {
  const loading = document.querySelector("#loading-products");
  try {
    const products = await fetchProducts();
    displayWomenProducts(products);
  } catch (error) {
    displayMessage("#message-container", error.message);
  }
  loading.classList.add("hidden");
}
