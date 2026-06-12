document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const actionBtn = document.getElementById('action-btn');
    const counterBox = document.getElementById('counter-box');
    const counterElement = document.getElementById('counter');
    const faqQuestions = document.querySelectorAll('.faq-question');

    // Alternador de Temas (Light / Dark)
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
    });

    // Contador Animado Otimizado
    actionBtn.addEventListener('click', () => {
        counterBox.classList.remove('hidden');
        actionBtn.disabled = true;
        actionBtn.style.opacity = '0.5';
        actionBtn.innerText = "Processando Dados...";

        const targetValue = 2740; 
        const duration = 2000; 
        const startTime = performance.now();

        function updateCounter(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1); 

            const easeProgress = progress * (2 - progress);
            const currentValue = Math.floor(easeProgress * targetValue);

            counterElement.innerText = currentValue.toLocaleString('pt-BR');

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                actionBtn.innerText = "Alinhado com o Futuro";
            }
        }

        requestAnimationFrame(updateCounter);
    });

    // Lógica para as Dúvidas Frequentes (FAQ Acordeão)
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('span');
            
            if (answer.style.maxHeight && answer.style.maxHeight !== '0px') {
                answer.style.maxHeight = '0px';
                icon.innerText = '+';
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.innerText = '−';
            }
        });
    });
});