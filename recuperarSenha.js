document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const yorn = document.getElementById("yorn");
    const senhaResultado = document.getElementById("senharesultado");

    // Inicialmente esconde mensagens
    yorn.style.display = "none";
    senhaResultado.style.display = "none";

    // Esconde mensagens ao focar no campo
    emailInput.addEventListener("focus", () => {
        yorn.style.display = "none";
        senhaResultado.style.display = "none";
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // evita reload da página

        const email = emailInput.value.trim();

        // --- Validação manual do formato de e-mail ---
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!emailValido) {
            alert("E-mail inválido!"); // alert apenas ao clicar em enviar
            yorn.style.display = "none";
            senhaResultado.style.display = "none";
            return;
        }

        // --- Recupera usuários do localStorage ---
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        // --- Procura o usuário pelo e-mail ---
        const usuario = usuarios.find(u => u.email === email);

        if (!usuario) {
            yorn.textContent = "E-mail não encontrado!";
            yorn.style.color = "red";
            yorn.style.display = "block";
            senhaResultado.style.display = "none";
        } else {
            yorn.textContent = "E-mail válido!";
            yorn.style.color = "green";
            yorn.style.display = "block";
            senhaResultado.textContent = "Senha: " + usuario.senha;
            senhaResultado.style.display = "block";
        }
    });
});
