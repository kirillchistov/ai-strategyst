import './style.css'

function openModal() {
    const email = document.getElementById('email-input').value;
    if (email) {
        document.getElementById('email').value = email;
    }
    document.getElementById('briefModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('briefModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function submitBrief(event) {
    event.preventDefault();
    
    const formData = {
        company: document.getElementById('company').value,
        industry: document.getElementById('industry').value,
        challenge: document.getElementById('challenge').value,
        budget: document.getElementById('budget').value,
        email: document.getElementById('email').value
    };

    // Simulate form submission
    alert(`Спасибо за заявку!\n\nИИ-система анализирует ваши данные:\n- Компания: ${formData.company}\n- Отрасль: ${formData.industry}\n\nИнструкции для доступа отправлены на ${formData.email}\n\nВ личном кабинете вы получите:\n✓ Первичную диагностику текущей ситуации\n✓ Определение зон роста и барьеров\n✓ Релевантную стратегию развития\n✓ Доступ к коллекции промптов\n✓ Персональный дашборд с метриками`);
    
    closeModal();
    document.getElementById('briefForm').reset();
}

// Close modal on outside click
document.getElementById('briefModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

window.openModal = openModal;
window.closeModal = closeModal;
window.submitBrief = submitBrief;