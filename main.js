document.addEventListener("DOMContentLoaded", displayProducts);

const products = [
  {
    name: "Brody's Mustang",
    price: 40,
    image: "./BrodyMustangFront.png"
  }
];

function displayProducts() {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  products.forEach(product => {
    container.innerHTML += `
      <div class="product-card">
        <a href="product.html">
          <img src="${product.image}" alt="Brody Mustang">
          <h3>${product.name}</h3>
        </a>
        <p>$${product.price}</p>
      </div>
    `;
  });
}
