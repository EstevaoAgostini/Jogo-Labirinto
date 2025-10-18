// recsenha.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const yorn = document.getElementById("yorn");
    const senhaResultado = document.getElementById("senharesultado");

    // Inicialmente esconde as mensagens
    yorn.style.display = "none";
    senhaResultado.style.display = "none";

    // Esconde mensagens ao clicar no campo de e-mail
    emailInput.addEventListener("focus", () => {
        yorn.style.display = "none";
        senhaResultado.style.display = "none";
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // evita recarregar a página

        const email = emailInput.value.trim();

        // --- Validação simples de formato de e-mail ---
        // aberração verificadora de e-mail
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!emailValido) {
            yorn.textContent = "E-mail inválido";
            yorn.style.color = "red";
            yorn.style.display = "block";
            senhaResultado.style.display = "none";
            return;
        }

        // --- Recupera os usuários do localStorage ---
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        // --- Procura o usuário pelo e-mail ---
        const usuario = usuarios.find(u => u.email === email);

        if (!usuario) {
            // E-mail não encontrado
            yorn.textContent = "E-mail não encontrado";
            yorn.style.color = "red";
            yorn.style.display = "block";
            senhaResultado.style.display = "none";
        } else {
            // E-mail válido → exibe a senha
            yorn.textContent = "E-mail válido";
            yorn.style.color = "green";
            yorn.style.display = "block";
            senhaResultado.textContent = "Senha: " + usuario.senha;
            senhaResultado.style.display = "block";
        }
    });
});
