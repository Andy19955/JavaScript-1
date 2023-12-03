import { handleNewProductsDisplay } from "./handlers/handleNewProductsDisplay.js";
import { handleWomenProductsDisplay } from "./handlers/handleWomenProductsDisplay.js";
import { handleMenProductsDisplay } from "./handlers/handleMenProductsDisplay.js";
import { handleSingleProductDisplay } from "./handlers/handleSingleProductDisplay.js";

function router() {
  const path = window.location.pathname;

  switch (path) {
    case "/":
    case "/index.html":
      handleNewProductsDisplay();
      break;
    case "/women/":
      handleWomenProductsDisplay();
      break;
    case "/men/":
      handleMenProductsDisplay();
      break;
    case "/product/":
      handleSingleProductDisplay();
  }
}

router();
