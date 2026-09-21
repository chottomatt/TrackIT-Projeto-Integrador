// elementos da página
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const btnEye = document.querySelector("#toggle-password");
const eyeIcon = btnEye.querySelector("img");
const loginForm = document.querySelector("#login-form");
const loginError = document.querySelector("#login-error");
const errorWrapper = document.querySelector(".error-wrapper");

// script do botão de mostrar/ocultar senha 
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

function mostrarErro(texto) {
    loginError.textContent = texto;
    errorWrapper.classList.add("show"); //abre com animaçao
}

// envio do login 
loginForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    errorWrapper.classList.remove("show"); //fecha com animação

    try {
        // BACKEND: rota e corpo combinados com o time (ver comentario no html)
        const resposta = await fetch ("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "aplication/json"},
            body: JSON.stringify({
                email: inputEmail.value,
                password:inputPassword.value
            })
        });

        if (resposta.status === 200) {
            // BACKEND: precisa definir a rota do dashboard
            window.location.href = "/dashboard";
        } else if (resposta.status === 401) {
            mostrarErro("Email ou senha inválidos");
        } else {
            mostrarErro("Erro no servidor.   Tente novamente em instantes.");
        }

    } catch(erro) {
        console.log("Não foi possível conectar ao servidor");
    }
});

