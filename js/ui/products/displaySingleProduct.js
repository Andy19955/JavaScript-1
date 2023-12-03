export function displaySingleProduct(product) {
  const productPage = document.querySelector("#product");
  const loading = document.querySelector("#loading-product");
  const productImage = document.querySelector("#product-image");
  const productBreadcrumb = document.querySelector("#product-breadcrumb");
  const genderBreadcrumb = document.querySelector("#gender-breadcrumb");
  const productTitle = document.querySelector("#product-title");
  const productPrice = document.querySelector("#product-price");
  const productDescription = document.querySelector("#product-description");
  const productSizeSelector = document.querySelector("#product-size-selector");

  if (product.gender.toLowerCase() === "female") {
    const activeMenu = document.querySelector("#menu-women");
    activeMenu.classList.add("active");
    genderBreadcrumb.innerText = "Women";
    genderBreadcrumb.setAttribute("href", "../women/");
  } else {
    const activeMenu = document.querySelector("#menu-men");
    activeMenu.classList.add("active");
    genderBreadcrumb.innerText = "Men";
    genderBreadcrumb.setAttribute("href", "../men/");
  }

  productImage.setAttribute("src", product.image);
  productImage.setAttribute("alt", product.title);
  productBreadcrumb.innerText = product.title;
  productTitle.innerText = product.title;
  productPrice.innerText = "$" + product.price;
  productDescription.innerText = product.description;

  product.sizes.forEach(createSizeBox);

  function createSizeBox(size) {
    const sizeBox = document.createElement("div");
    sizeBox.classList.add("product-size-box");
    sizeBox.innerText = size;
    productSizeSelector.append(sizeBox);
  }

  productPage.classList.add("product-page");
  productPage.classList.remove("hidden");
}
