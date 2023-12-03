import { fetchProducts } from "../api/fetchProducts.js";
import { displayMenProducts } from "../ui/products/displayMenProducts.js";
import { displayMessage } from "../ui/shared/displayMessage.js";

export async function handleMenProductsDisplay() {
  const loading = document.querySelector("#loading-products");
  try {
    const products = await fetchProducts();
    displayMenProducts(products);
  } catch (error) {
    displayMessage("#message-container", error.message);
  }
  loading.classList.add("hidden");
}
