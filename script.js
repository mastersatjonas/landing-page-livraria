document.addEventListener('DOMContentLoaded', function() {
    const mainCta = document.querySelector('.main-cta');
    const navCta = document.querySelector('.cta-button');
    const productCtas = document.querySelectorAll('.product-cta');
    const contactForm = document.getElementById('contact-form');

    function pulseAnimation(element) {
        element.style.transform = 'scale(1.1)';
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 200);
    }

    if (mainCta) {
        mainCta.addEventListener('click', function() {
            alert('Obrigado por seu interesse! Entraremos em contato em breve.');
        });
    }

    if (navCta) {
        navCta.addEventListener('click', function() {
            pulseAnimation(this);
        });
    }

    productCtas.forEach(cta => {
        cta.addEventListener('click', function() {
            const productName = this.parentElement.querySelector('h3').textContent;
            alert(`Você selecionou o produto: ${productName}`);
        });
    });

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Aqui você pode adicionar a lógica para enviar o formulário para um servidor
            console.log('Formulário enviado:', { name, email, message });
            alert('Obrigado por entrar em contato! Responderemos em breve.');
            this.reset();
        });
    }

    // Adiciona efeito de fade-in aos elementos principais
    const content = document.querySelector('.page-content');
    if (content) {
        content.style.opacity = '0';
        setTimeout(() => {
            content.style.transition = 'opacity 1s';
            content.style.opacity = '1';
        }, 200);
    }
});