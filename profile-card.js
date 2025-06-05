document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.profile-tab-btn');
    const cards = {
        intro: document.querySelector('.profile-card-intro'),
        review: document.querySelector('.profile-card-review'),
        interview: document.querySelector('.profile-card-interview')
    };

    let current = 'intro';

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            const target = button.dataset.tab;
            if (target === current) return;

            cards[current].classList.remove('active');
            cards[target].classList.add('active');
            current = target;
        });
    });
});
