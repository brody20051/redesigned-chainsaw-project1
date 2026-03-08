document.addEventListener("DOMContentLoaded", () => {

const welcome = document.getElementById("welcome")

const logoutBtn = document.getElementById("logoutBtn")

const user = sessionStorage.getItem("user")

if(user){

welcome.textContent = "Welcome " + user

}else{

welcome.textContent = "No active session."

}

logoutBtn.addEventListener("click", logout)

})

function logout(){

sessionStorage.removeItem("user")

window.location.href = "../index.html"

}
