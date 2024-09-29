
// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão de login
    var loginButton = document.getElementById('loginButton');
    
    // Adiciona um evento de clique ao botão
    loginButton.addEventListener('click', function() {
        // Redireciona para a página de login
        window.location.href = './login.html';
    });
});

// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão de venha conferir
    var loginButton = document.getElementById('venhaConferir');
    
    // Adiciona um evento de clique ao botão
    loginButton.addEventListener('click', function() {
        // Redireciona para a página de login
        window.location.href = './produto.html';
    });
});

// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o formulário
    const form = document.getElementById('contact-form');

    // Adiciona um event listener para o evento de submit
    form.addEventListener('submit', function(event) {
        // Previne o comportamento padrão de envio do formulário
        event.preventDefault();

        // Coleta os dados do formulário
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Cria um objeto com os dados do formulário
        const formData = {
            name: name,
            email: email,
            message: message
        };

        // Exibe os dados no console (para fins de demonstração)
        console.log('Dados do formulário:', formData);

        // Aqui você normalmente enviaria os dados para um servidor
        // Por exemplo, usando fetch() para fazer uma requisição POST
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Sucesso:', data);
        // })
        // .catch((error) => {
        //     console.error('Erro:', error);
        // });

        // Limpa o formulário após o envio
        form.reset();

        // Exibe uma mensagem de sucesso para o usuário
        alert('Mensagem enviada com sucesso!');
    });
});