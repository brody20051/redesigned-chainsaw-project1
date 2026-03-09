document.addEventListener("DOMContentLoaded", init)

function init(){

console.log("Product page loaded")

const mainImage = document.getElementById("mainImage")
const frontBtn = document.getElementById("frontBtn")
const backBtn = document.getElementById("backBtn")
const addToCartBtn = document.getElementById("addToCartBtn")

frontBtn.addEventListener("click", showFront)
backBtn.addEventListener("click", showBack)
addToCartBtn.addEventListener("click", addToCart)

function showFront(){

mainImage.src = "../assets/BrodyMustangFront.png"

console.log("Front image shown")

}

function showBack(){

mainImage.src = "../assets/BrodyMustangBack.png"

console.log("Back image shown")

}

function addToCart(){

let cart = JSON.parse(localStorage.getItem("cart")) || []

cart.push({
name: "Brody's Mustang",
price: 40
})

localStorage.setItem("cart", JSON.stringify(cart))

console.log("Product added to cart:", cart)

const message = document.getElementById("cartMessage")

message.textContent = "Item added to cart!"

}

}
