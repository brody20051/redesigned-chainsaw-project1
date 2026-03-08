document.addEventListener("DOMContentLoaded", displayProducts)

const products = [

{
name: "Brody's Mustang",
price: 40,
image: "assets/BrodyMustangFront.png"
}

]

function displayProducts(){

const container = document.getElementById("productContainer")

container.innerHTML = ""

products.forEach(product => {

container.innerHTML += `

<div class="col-md-4">

<div class="card">

<img src="${product.image}" class="card-img-top">

<div class="card-body">

<h5 class="card-title">${product.name}</h5>

<p class="card-text">$${product.price}</p>

<a href="pages/product.html" class="btn btn-dark">View Product</a>

</div>

</div>

</div>

`

})

}
