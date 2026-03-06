document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (password === "lasagna") {
      sessionStorage.setItem("user", username);
      window.location.href = "session.html";
    } else {
      alert("Incorrect password");
    }
  });

});
