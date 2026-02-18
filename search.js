const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll("#productList li");

searchInput.addEventListener("keyup", function () {
  const filter = searchInput.value.toLowerCase();

  products.forEach(product => {
    const text = product.textContent.toLowerCase();
    if (text.includes(filter)) {
      product.style.display = "";
    } else {
      product.style.display = "none";
    }
  });
});

