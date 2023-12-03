export const openProduct = function openProduct(id) {
  const productId = event.currentTarget.dataset.id;
  location.href = `../product/?id=${productId}`;
};
