// ================ ÁREA DAS SENHAS ======================

// Funções compartilhadas
function getUsuarios() {
    const usuarios = localStorage.getItem('usuarios');
    return usuarios ? JSON.parse(usuarios) : [];
}

function saveUsuarios(usuarios) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function ValidacaoEmail(email) {
    const teste = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return teste.test(email);
}

// Função de Cadastro
function handleCadastro() {
    const form = document.querySelector('form');
    const mensagemSucesso = document.querySelector('.mensagem-sucesso');
    const nome = document.querySelector('input[type="text"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const senha = document.querySelectorAll('input[type="password"]')[0].value;
    const confirmarSenha = document.querySelectorAll('input[type="password"]')[1].value;

    if (!nome || !email || !senha || !confirmarSenha) {
        alert('Preencha todos os campos!');
        return;
    }

    if (!ValidacaoEmail(email)) {
        alert('Email inválido!');
        return;
    }

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem!');
        return;
    }

    const usuarios = getUsuarios();
    if (usuarios.some(user => user.email === email)) {
        alert('Email já cadastrado!');
        return;
    }

    usuarios.push({ nome, email, senha });
    saveUsuarios(usuarios);

    alert('Cadastro realizado com sucesso!');
    form.reset();

}

// Função de Login
function handleLogin() {
    const email = document.querySelector('input[type="email"]').value.trim();
    const senha = document.querySelector('input[type="password"]').value;

    if (!email || !senha) {
        alert('Preencha email e senha!');
        return;
    }

    const usuarios = getUsuarios();
    const user = usuarios.find(u => u.email === email && u.senha === senha);

    if (!user) {
        alert('Email ou senha incorretos!');
        return;
    }

    localStorage.setItem('loggedInUser', JSON.stringify(user));
    // Redireciona para o jogo
    window.location.href = 'jogo.html';
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('cadastro.html')) {
        const btnCadastrar = document.querySelector('.bnt-azul');
        btnCadastrar.addEventListener('click', (e) => {
            e.preventDefault();
            handleCadastro();
        });
    } else if (window.location.pathname.includes('login.html')) {
        const btnEntrar = document.querySelector('.bnt-azul');
        btnEntrar.addEventListener('click', (e) => {
            e.preventDefault();
            handleLogin();
        });
    }
});

// <!--ACHO QUE TERMINAMOS!!!-->