document.addEventListener("DOMContentLoaded", init)

function init(){

const mainImage = document.getElementById("mainImage")

const frontBtn = document.getElementById("frontBtn")

const backBtn = document.getElementById("backBtn")

frontBtn.addEventListener("click", () => {

mainImage.src = "../assets/BrodyMustangFront.png"

})

backBtn.addEventListener("click", () => {

mainImage.src = "../assets/BrodyMustangBack.png"

})

}
