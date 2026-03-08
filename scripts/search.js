document.addEventListener("DOMContentLoaded", function () {

  const products = ["Brody's Mustang"];

  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");

  input.addEventListener("input", function () {

    const filtered = products.filter(p =>
      p.toLowerCase().includes(input.value.toLowerCase())
    );

    results.innerHTML = "";

    filtered.forEach(item => {
      results.innerHTML += `<li>${item}</li>`;
    });

  });

});
