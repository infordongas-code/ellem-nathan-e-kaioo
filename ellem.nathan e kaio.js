// Menu Mobile Toggle
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Filtro de Projetos
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Formulário de Contato
const contactForm = document.getElementById('contact-form');
const statusMsg = document.getElementById('status-msg');

if (contactForm && statusMsg) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        statusMsg.textContent = "Enviando mensagem...";
        statusMsg.className = "status-msg";

        setTimeout(() => {
            statusMsg.textContent = "Mensagem enviada com sucesso!";
            statusMsg.className = "status-msg success";
            contactForm.reset();

            setTimeout(() => {
                statusMsg.textContent = "";
            }, 4000);
        }, 1000);
    });
}