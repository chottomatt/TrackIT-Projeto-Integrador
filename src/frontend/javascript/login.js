const inputPassword = document.querySelector("#password");
const btnEye = document.querySelector("#toggle-password");
const eyeIcon = btnEye.querySelector("img");

btnEye.addEventListener("click", function() {

    if (inputPassword.type === "password") {
        inputPassword.type = "text";
        btnEye.setAttribute("aria-label", "Ocultar senha");
        eyeIcon.src = "img/svg/eye-password-not-view.svg";
    } else {
        inputPassword.type = "password";
        btnEye.setAttribute("aria-label", "Mostrar senha");
        eyeIcon.src = "img/svg/eye-password-view.svg";
    }
});

const btnEnter = document.querySelector("#login-form");

btnEnter.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Formulário interceptado");
});