document.addEventListener("DOMContentLoaded", init)

const products = [

{
name: "Brody's Mustang",
price: 40
}

]

function init(){

console.log("Search page loaded")

const searchInput = document.getElementById("searchInput")

const sortSelect = document.getElementById("sortSelect")

searchInput.addEventListener("input", updateResults)

sortSelect.addEventListener("change", updateResults)

updateResults()

}

function updateResults(){

const searchValue =
document.getElementById("searchInput")
.value
.toLowerCase()

const sortValue =
document.getElementById("sortSelect")
.value

let filtered = products.filter(product =>

product.name.toLowerCase().includes(searchValue)

)

console.log("Search term:", searchValue)

if(sortValue === "priceLow"){

filtered.sort((a,b)=>a.price-b.price)

}

if(sortValue === "priceHigh"){

filtered.sort((a,b)=>b.price-a.price)

}

if(sortValue === "name"){

filtered.sort((a,b)=>a.name.localeCompare(b.name))

}

displayResults(filtered)

}

function displayResults(list){

const results = document.getElementById("searchResults")

results.innerHTML = ""

list.forEach(product => {

const li = document.createElement("li")

li.className = "list-group-item"

li.textContent = product.name + " - $" + product.price

results.appendChild(li)

})

}
